const fs = require('fs');

const lib = fs.readFileSync('F:/trincado/src/data/library.ts', 'utf8');
const content = JSON.parse(fs.readFileSync('F:/trincado/public/data/contents/tercera-etapa_content.json', 'utf8'));
const contentKeys = Object.keys(content);

// Find the tercera-etapa block precisely
const blockStart = lib.indexOf('"id": "tercera-etapa"');

// Find "index": [ for tercera-etapa
const indexOpen = lib.indexOf('"index": [', blockStart);
// Find the closing ] after that index
let depth = 0;
let indexClose = -1;
for (let i = indexOpen + 10; i < lib.length; i++) {
  if (lib[i] === '[') depth++;
  if (lib[i] === ']') {
    if (depth === 0) { indexClose = i; break; }
    depth--;
  }
}

console.log('indexOpen: ' + indexOpen);
console.log('indexClose: ' + indexClose);
console.log('Current index (last 200 chars):');
console.log(lib.substring(indexClose - 200, indexClose + 5));

// Build the new index array from content.json keys
const newIndexItems = contentKeys.map(k => `      "${k}"`).join(',\r\n');
const newIndexBlock = `"index": [\r\n${newIndexItems}\r\n    ]`;

// Reconstruct the file
const before = lib.substring(0, indexOpen);
const after = lib.substring(indexClose + 1);
const newLib = before + newIndexBlock + after;

fs.writeFileSync('F:/trincado/src/data/library.ts', newLib, 'utf8');

// Verify
const verify = fs.readFileSync('F:/trincado/src/data/library.ts', 'utf8');
const verifyStart = verify.indexOf('"id": "tercera-etapa"');
const verifyBlock = verify.substring(verifyStart, verifyStart + 500);
console.log('\n--- UPDATED BLOCK (first 500 chars) ---');
console.log(verifyBlock);

// Count index entries in updated block
const updatedMatches = verifyBlock.match(/"\d+:/g);
console.log('\nEntries with numeric prefix: ' + (updatedMatches ? updatedMatches.length : 0));
