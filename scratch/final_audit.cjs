const fs = require('fs');

// Final audit report
console.log('=== AUDITORÍA FINAL - FILOSOFÍA ENCICLOPÉDICA UNIVERSAL ===\n');

// Tomo 1
const c1 = fs.readFileSync('src/data/contents/filosofia-enciclopedica-universal-tomo-1_content.ts', 'utf8');
const t1Titles = c1.match(/"title": ".*?"/g) || [];
console.log(`TOMO 1: ${t1Titles.length} secciones indexadas`);
console.log('  Primeras 5:');
t1Titles.slice(0, 5).forEach(t => console.log('   ', t));
console.log('  Últimas 3:');
t1Titles.slice(-3).forEach(t => console.log('   ', t));

console.log('');

// Tomo 2
const c2 = fs.readFileSync('src/data/contents/filosofia-enciclopedica-universal-tomo-2_content.ts', 'utf8');
const t2Titles = c2.match(/"title": ".*?"/g) || [];
console.log(`TOMO 2: ${t2Titles.length} secciones indexadas (antes: 56)`);
console.log('  Todas las secciones:');
t2Titles.forEach((t, i) => console.log(`  [${i+1}]`, t));

console.log('\n=== RESUMEN ===');
console.log(`Total Tomo 1: ${t1Titles.length} secciones`);
console.log(`Total Tomo 2: ${t2Titles.length} secciones`);
console.log(`Total combinado: ${t1Titles.length + t2Titles.length} secciones`);
console.log('\nNota: El texto fuente del Tomo 2 tiene 91 encabezados detectables.');
console.log('El índice contiene 92 (incluye "Al lector" + las 91 sesiones).');
