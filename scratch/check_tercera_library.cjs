const fs = require('fs');
const lib = fs.readFileSync('F:/trincado/src/data/library.ts', 'utf8');

// The content.json uses keys like "0: LA TERCERA ETAPA", "5: ENERO 4 DE 1916.- \"CONSEJO\""
// The library.ts index array must match EXACTLY the keys of the content.json for the RAG to work
// Currently, library.ts has entries WITHOUT the numeric prefix (e.g. "COMENTARIO")
// but the content.json has keys WITH prefix (e.g. "6: COMENTARIO")
// We need to update the library.ts index to use the exact keys from content.json

const content = JSON.parse(fs.readFileSync('F:/trincado/public/data/contents/tercera-etapa_content.json', 'utf8'));
const contentKeys = Object.keys(content);
console.log('Content keys (first 10):');
contentKeys.slice(0, 10).forEach(k => console.log(k));
console.log('\nTotal: ' + contentKeys.length);

// Find start and end of the tercera-etapa index array in library.ts
const blockStart = lib.indexOf('"id": "tercera-etapa"');
const indexStart = lib.indexOf('"index": [', blockStart) + '"index": ['.length;
const indexEnd = lib.indexOf('\n    ]\n', indexStart) + '\n    ]\n'.length;

console.log('\nCurrent index block (first 300 chars):');
console.log(lib.substring(indexStart, indexStart + 300));
console.log('\nBlock ends at position: ' + indexEnd);
console.log('Total index block length: ' + (indexEnd - indexStart));
