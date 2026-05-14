const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json';

const esencia = JSON.parse(fs.readFileSync(path, 'utf8'));
const newEsencia = {};

for (const oldKey in esencia) {
    // Extract only the numeric ID
    const newKey = oldKey.split(':')[0].trim();
    newEsencia[newKey] = esencia[oldKey];
}

fs.writeFileSync(path, JSON.stringify(newEsencia, null, 4), 'utf8');
console.log('Tomo 1 keys normalized to numeric IDs.');
