const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json';

const esencia = JSON.parse(fs.readFileSync(path, 'utf8'));
const newEsencia = {};

for (const key in esencia) {
    const node = esencia[key];
    const isPlaceholder = !node.PilotoDeCoherencia || 
                          (Array.isArray(node.IdeaCentral) ? node.IdeaCentral.length === 0 : !node.IdeaCentral) ||
                          (Array.isArray(node.CitaInelutable) ? node.CitaInelutable.length === 0 : !node.CitaInelutable);
    
    if (!isPlaceholder) {
        // Extract numeric ID only
        const newKey = key.split(':')[0].trim();
        newEsencia[newKey] = node;
    }
}

fs.writeFileSync(path, JSON.stringify(newEsencia, null, 4), 'utf8');
console.log(`Tomo 2 purged. High-fidelity nodes only.`);
