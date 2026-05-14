const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public/data/contents');
const bnPath = path.join(__dirname, 'src/data/blocked_nodes.ts');

// ── 1. Leer y parsear blocked_nodes.ts ──────────────────────────────────────
const bnRaw = fs.readFileSync(bnPath, 'utf8');

// Extraer el objeto literal del archivo TypeScript
const objMatch = bnRaw.match(/export const BLOCKED_NODES[^=]+=\s*(\{[\s\S]*\});/);
if (!objMatch) {
  console.error('No se pudo parsear blocked_nodes.ts');
  process.exit(1);
}
const blocked = eval('(' + objMatch[1] + ')');

// ── 2. Procesar libro por libro ──────────────────────────────────────────────
const nuevoBlocked = {};
let totalRescatados = 0;
let totalMantenidos = 0;
const reportePorLibro = [];

Object.entries(blocked).forEach(([libro, temas]) => {
  const cPath = path.join(dir, libro + '_content.json');

  if (!fs.existsSync(cPath)) {
    nuevoBlocked[libro] = temas;
    return;
  }

  const content = JSON.parse(fs.readFileSync(cPath, 'utf8'));
  const rescatadosLibro = [];
  const mantenerLibro = [];

  temas.forEach(temaBlockeado => {
    const numPag = temaBlockeado.split(':')[0].trim();
    // Buscar tema en content.json que comience con el mismo número de página
    const temaReal = Object.keys(content).find(k => k.startsWith(numPag + ':'));
    const chars = temaReal ? (content[temaReal] || '').length : 0;

    if (chars >= 500) {
      rescatadosLibro.push({ bloqueado: temaBlockeado, real: temaReal, chars });
      totalRescatados++;
      // NO añadimos al nuevo blocked → queda desbloqueado
    } else {
      mantenerLibro.push(temaBlockeado);
      totalMantenidos++;
    }
  });

  nuevoBlocked[libro] = mantenerLibro;

  if (rescatadosLibro.length > 0) {
    reportePorLibro.push({ libro, rescatados: rescatadosLibro, mantenidos: mantenerLibro.length });
  }
});

// ── 3. Generar nuevo archivo blocked_nodes.ts ────────────────────────────────
const lineas = ['export const BLOCKED_NODES: Record<string, string[]> = {'];

const entries = Object.entries(nuevoBlocked);
entries.forEach(([libro, temas], idx) => {
  lineas.push('  ' + JSON.stringify(libro) + ': [');
  temas.forEach((t, ti) => {
    const comma = ti < temas.length - 1 ? ',' : '';
    lineas.push('    ' + JSON.stringify(t) + comma);
  });
  const comma = idx < entries.length - 1 ? ',' : '';
  lineas.push('  ]' + comma);
});

lineas.push('};');
lineas.push('');

fs.writeFileSync(bnPath, lineas.join('\n'), 'utf8');

// ── 4. Imprimir reporte ──────────────────────────────────────────────────────
console.log('\n========================================');
console.log('  RESCATE MASIVO DE TEMAS — COMPLETADO  ');
console.log('========================================\n');

reportePorLibro.forEach(r => {
  console.log('📖 ' + r.libro);
  console.log('   Rescatados: ' + r.rescatados.length + ' | Mantenidos bloqueados: ' + r.mantenidos);
  r.rescatados.forEach(t => {
    console.log('   ✓ [' + t.chars + ' chars] ' + t.bloqueado.substring(0, 65));
  });
  console.log('');
});

console.log('----------------------------------------');
console.log('TOTAL RESCATADOS (ahora clickeables): ' + totalRescatados);
console.log('TOTAL MANTENIDOS (vacíos legítimos):  ' + totalMantenidos);
console.log('blocked_nodes.ts actualizado con éxito.');
console.log('========================================\n');
