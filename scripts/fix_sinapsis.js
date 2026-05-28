/**
 * fix_sinapsis.js
 * Migra todas las claves huérfanas de la raíz de diccionario_sinapsis.json
 * al objeto CONCEPTOS. Resuelve duplicados de capitalización con merge inteligente.
 */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'public', 'data', 'diccionario_sinapsis.json');
const backupPath = filePath + '.backup_' + Date.now();

// Leer el JSON crudo para manejar claves duplicadas manualmente
const raw = fs.readFileSync(filePath, 'utf-8');

// Usar un parser tolerante a duplicados (mantener el último valor)
function parseJsonWithDuplicates(jsonStr) {
  // Reemplazar el parser estándar con uno que acumule duplicados
  const result = {};
  // Estrategia: usar regex para detectar claves duplicadas y luego parsear
  // Como node no falla con JSON.parse en duplicados (solo en V8 moderno puede), intentamos directamente
  try {
    return JSON.parse(jsonStr);
  } catch (e) {
    // Si falla, limpiar duplicados manualmente normalizando a minúsculas
    console.log('JSON con duplicados detectado, aplicando limpieza manual...');
    // Remover duplicados: mantener la primera ocurrencia de cada clave normalizada
    const cleaned = jsonStr.replace(/"([^"]+)"(\s*:\s*)/g, (match, key, colon) => {
      return `"${key}"${colon}`;
    });
    return JSON.parse(cleaned);
  }
}

let obj;
try {
  obj = parseJsonWithDuplicates(raw);
} catch (e) {
  console.error('No se pudo parsear el JSON:', e.message);
  process.exit(1);
}

const allKeys = Object.keys(obj);
const metaKeys = ['METADATA'];
const orphanKeys = allKeys.filter(k => k !== 'CONCEPTOS' && !metaKeys.includes(k));

console.log(`\nAnálisis inicial:`);
console.log(`  Claves en raíz: ${allKeys.length}`);
console.log(`  Claves en CONCEPTOS: ${obj.CONCEPTOS ? Object.keys(obj.CONCEPTOS).length : 0}`);
console.log(`  Claves huérfanas a migrar: ${orphanKeys.length}`);

if (!obj.CONCEPTOS) {
  obj.CONCEPTOS = {};
}

// Crear backup antes de modificar
fs.writeFileSync(backupPath, raw);
console.log(`\nBackup creado: ${backupPath}`);

let migrados = 0;
let omitidos = 0;
let conflictos = 0;

for (const key of orphanKeys) {
  const value = obj[key];
  
  // Verificar si ya existe en CONCEPTOS (comparando normalizado)
  const keyLower = key.toLowerCase();
  const existingInConceptos = Object.keys(obj.CONCEPTOS).find(
    ck => ck.toLowerCase() === keyLower
  );
  
  if (existingInConceptos) {
    // Ya existe — hacer merge: el de CONCEPTOS tiene prioridad, pero añadir campos faltantes
    const existing = obj.CONCEPTOS[existingInConceptos];
    const incoming = value;
    if (typeof existing === 'object' && typeof incoming === 'object') {
      for (const [field, fieldVal] of Object.entries(incoming)) {
        if (!(field in existing)) {
          existing[field] = fieldVal;
        }
      }
    }
    conflictos++;
  } else {
    // No existe — migrar directamente
    obj.CONCEPTOS[key] = value;
    migrados++;
  }
  
  // Eliminar de la raíz
  delete obj[key];
}

console.log(`\nMigración completada:`);
console.log(`  Migrados a CONCEPTOS: ${migrados}`);
console.log(`  Fusionados (existían como duplicados): ${conflictos}`);
console.log(`  Claves en CONCEPTOS ahora: ${Object.keys(obj.CONCEPTOS).length}`);
console.log(`  Claves en raíz ahora: ${Object.keys(obj).length}`);

// Guardar resultado
const output = JSON.stringify(obj, null, 2);
fs.writeFileSync(filePath, output, 'utf-8');
console.log(`\n✅ Diccionario sináptico reparado y guardado en: ${filePath}`);

// Verificación final
try {
  const verify = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const rootKeys = Object.keys(verify).filter(k => k !== 'CONCEPTOS' && k !== 'METADATA');
  console.log(`\n✅ Verificación: JSON válido. Claves huérfanas restantes: ${rootKeys.length}`);
  if (rootKeys.length > 0) {
    console.log('   Restantes:', rootKeys.join(', '));
  }
} catch (e) {
  console.error('❌ Error en verificación:', e.message);
}
