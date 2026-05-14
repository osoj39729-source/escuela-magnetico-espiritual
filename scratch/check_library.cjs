const fs = require('fs');

const lib = fs.readFileSync('src/data/library.ts', 'utf8');

// Find the tomo 2 entry
const start = lib.indexOf('"filosofia-enciclopedica-universal-tomo-2"');
if (start === -1) {
    console.log('❌ Tomo 2 NOT found in library.ts');
} else {
    console.log('✅ Tomo 2 found at char', start);
    // Show 3000 chars from that point
    const snippet = lib.substring(start, start + 3000);
    console.log(snippet);
}
