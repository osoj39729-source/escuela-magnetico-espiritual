const fs = require('fs');
const lines = fs.readFileSync('scratch/texts/filosofia-enciclopedica-universal-tomo_2.txt', 'utf8').split('\n');

const datePattern = /^(?:Sesión del |)[0-9]*\s*(Enero|Febrero|Marzo|Abril|Mayo|Junio|Julio|Agosto|Septiembre|Octubre|Noviembre|Diciembre)\s*[0-9]+/i;

let count = 0;
let titles = [];
let afterSeparator = false;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.includes('_____')) {
        afterSeparator = true;
        continue;
    }
    
    let isHeader = false;
    
    if (line.toUpperCase().includes('AL LECTOR:')) {
        isHeader = true;
    } else if (afterSeparator && line.length > 0) {
        // After a separator, the next non-empty line is a section header
        isHeader = true;
    } else if (line.match(datePattern) && !afterSeparator) {
        // Date that wasn't after a separator
        isHeader = true;
    }
    
    if (isHeader && line.length > 0) {
        count++;
        titles.push(`[${i + 1}] ${line.substring(0, 70)}`);
        afterSeparator = false;
    } else if (line.length === 0) {
        // don't reset afterSeparator on empty lines
    } else {
        afterSeparator = false;
    }
}

console.log('Total detected sections in Tomo 2:', count);
console.log('\nAll detected sections:');
console.log(titles.join('\n'));

// Now also check current _content.ts
const contentFile = fs.readFileSync('src/data/contents/filosofia-enciclopedica-universal-tomo-2_content.ts', 'utf8');
const titleMatches = contentFile.match(/"title": ".*?"/g) || [];
console.log('\nCurrent indexed themes in _content.ts:', titleMatches.length);
console.log('\nFirst 5 titles in _content.ts:');
titleMatches.slice(0, 5).forEach(t => console.log(' ', t));
