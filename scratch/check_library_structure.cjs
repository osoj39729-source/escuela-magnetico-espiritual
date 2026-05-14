const fs = require('fs');
const lib = fs.readFileSync('F:/trincado/src/data/library.ts', 'utf8');

// Check tercera-etapa block
const tercIdx = lib.indexOf('tercera-etapa');
const block = lib.substring(tercIdx - 10, tercIdx + 600);
console.log('--- TERCERA ETAPA block ---');
console.log(block);

// Check buscando-a-dios to see structure with contentFile/esenciaFile
const bIdx = lib.indexOf('buscando-a-dios');
const bBlock = lib.substring(bIdx - 10, bIdx + 400);
console.log('\n--- BUSCANDO A DIOS block ---');
console.log(bBlock);

// Check how many entries have contentFile
const contentFileCount = (lib.match(/contentFile/g) || []).length;
const esenciaFileCount = (lib.match(/esenciaFile/g) || []).length;
console.log('\ncontentFile references: ' + contentFileCount);
console.log('esenciaFile references: ' + esenciaFileCount);
