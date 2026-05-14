const fs = require('fs');

const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json';
const esencia = JSON.parse(fs.readFileSync(path, 'utf8'));
const keys = Object.keys(esencia);

console.log(`--- AUDITORIA TOMO 2 ---`);
console.log(`Nodos en Esencia: ${keys.length}`);

let placeholders = 0;
keys.forEach(key => {
    const node = esencia[key];
    const isPlaceholder = !node.PilotoDeCoherencia || 
                          (Array.isArray(node.IdeaCentral) ? node.IdeaCentral.length === 0 : !node.IdeaCentral) ||
                          (Array.isArray(node.CitaInelutable) ? node.CitaInelutable.length === 0 : !node.CitaInelutable);
    if (isPlaceholder) {
        placeholders++;
        console.log(`[!] Placeholder: ${key}`);
    }
});

console.log(`Incompletos/Placeholders: ${placeholders}`);

// Check specific node quality
const sampleNode = esencia[Object.keys(esencia)[0]];
console.log(`\nMuestra de Nodo (Fidelity check):`);
console.log(JSON.stringify(sampleNode, null, 2));
