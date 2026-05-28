/**
 * fix_sinapsis.cjs
 * Migra todas las claves huérfanas de la raíz de diccionario_sinapsis.json
 * al objeto CONCEPTOS. Resuelve duplicados con merge inteligente.
 */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'public', 'data', 'diccionario_sinapsis.json');
const backupPath = filePath + '.backup_' + Date.now();

// Leer el JSON crudo
const raw = fs.readFileSync(filePath, 'utf-8');

let obj;
try {
  obj = JSON.parse(raw);
} catch (e) {
  console.error('No se pudo parsear el JSON:', e.message);
  process.exit(1);
}

const allKeys = Object.keys(obj);
const orphanKeys = allKeys.filter(k => k !== 'CONCEPTOS' && k !== 'METADATA');

console.log('\nAnálisis inicial:');
console.log('  Claves en raíz:', allKeys.length);
console.log('  Claves en CONCEPTOS:', obj.CONCEPTOS ? Object.keys(obj.CONCEPTOS).length : 0);
console.log('  Claves huérfanas a migrar:', orphanKeys.length);

if (!obj.CONCEPTOS) obj.CONCEPTOS = {};

// Crear backup antes de modificar
fs.writeFileSync(backupPath, raw);
console.log('\nBackup creado:', path.basename(backupPath));

let migrados = 0;
let fusionados = 0;

for (const key of orphanKeys) {
  const value = obj[key];
  const keyLower = key.toLowerCase();

  // Verificar si ya existe en CONCEPTOS (comparación normalizada sin acentos)
  const existingKey = Object.keys(obj.CONCEPTOS).find(
    ck => ck.toLowerCase() === keyLower
  );

  if (existingKey) {
    // Merge: CONCEPTOS tiene prioridad, pero añadir campos faltantes del huérfano
    if (typeof obj.CONCEPTOS[existingKey] === 'object' && typeof value === 'object' && value !== null) {
      for (const [field, fieldVal] of Object.entries(value)) {
        if (!(field in obj.CONCEPTOS[existingKey])) {
          obj.CONCEPTOS[existingKey][field] = fieldVal;
        }
      }
    }
    fusionados++;
  } else {
    obj.CONCEPTOS[key] = value;
    migrados++;
  }

  delete obj[key];
}

console.log('\nMigración completada:');
console.log('  Migrados a CONCEPTOS:', migrados);
console.log('  Fusionados (eran duplicados):', fusionados);
console.log('  Claves en CONCEPTOS ahora:', Object.keys(obj.CONCEPTOS).length);
console.log('  Claves en raíz (debe ser ≤2):', Object.keys(obj).length, '->', Object.keys(obj).join(', '));

// Guardar resultado
const output = JSON.stringify(obj, null, 2);
fs.writeFileSync(filePath, output, 'utf-8');
console.log('\n✅ Guardado en:', filePath);

// Verificación final
try {
  const verify = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const rootExtra = Object.keys(verify).filter(k => k !== 'CONCEPTOS' && k !== 'METADATA');
  console.log('✅ JSON válido. Claves huérfanas restantes:', rootExtra.length);
  if (rootExtra.length > 0) console.log('   Restantes:', rootExtra.slice(0, 10).join(', '));
} catch (e) {
  console.error('❌ Error en verificación:', e.message);
}
