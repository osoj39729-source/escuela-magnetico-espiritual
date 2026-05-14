const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json';

const esencia = JSON.parse(fs.readFileSync(path, 'utf8'));
const newEsencia = {};

// Sort keys to process numeric ones first or handle duplicates
const keys = Object.keys(esencia);

keys.forEach(oldKey => {
    const id = oldKey.split(':')[0].trim();
    const node = esencia[oldKey];
    
    const isPlaceholder = !node.PilotoDeCoherencia || 
                          (Array.isArray(node.IdeaCentral) ? node.IdeaCentral.length === 0 : !node.IdeaCentral) ||
                          (Array.isArray(node.CitaInelutable) ? node.CitaInelutable.length === 0 : !node.CitaInelutable);

    if (!newEsencia[id] || !isPlaceholder) {
        // If we don't have this ID yet, or if this one is NOT a placeholder (Expert Mode), take it.
        newEsencia[id] = node;
    }
});

fs.writeFileSync(path, JSON.stringify(newEsencia, null, 4), 'utf8');
console.log('Tomo 2 keys normalized and placeholders cleaned where Expert Mode exists.');
