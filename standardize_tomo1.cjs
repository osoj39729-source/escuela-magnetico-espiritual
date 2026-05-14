const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json';
const dictPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

const esencia = JSON.parse(fs.readFileSync(path, 'utf8'));
const dict = JSON.parse(fs.readFileSync(dictPath, 'utf8'));

const keyMapping = {
    "Piloto": "PilotoDeCoherencia",
    "Idea": "IdeaCentral",
    "Ejemplo": "EjemploPedagogico",
    "Cita": "CitaInelutable",
    "Sinapsis": "NodosSinapticos"
};

let updatedCount = 0;
let placeholderCount = 0;

for (const nodeId in esencia) {
    const node = esencia[nodeId];
    let updated = false;
    
    // Map old keys to new keys
    for (const [oldKey, newKey] of Object.entries(keyMapping)) {
        if (node[oldKey] && !node[newKey]) {
            node[newKey] = node[oldKey];
            delete node[oldKey];
            updated = true;
        }
    }
    
    if (updated) updatedCount++;
    
    // Check if it's a placeholder
    const isPlaceholder = !node.PilotoDeCoherencia || 
                          (Array.isArray(node.IdeaCentral) ? node.IdeaCentral.length === 0 : !node.IdeaCentral) ||
                          (Array.isArray(node.CitaInelutable) ? node.CitaInelutable.length === 0 : !node.CitaInelutable);
    
    if (isPlaceholder) {
        placeholderCount++;
        console.log(`[!] Placeholder detected: ${nodeId}`);
    }
}

fs.writeFileSync(path, JSON.stringify(esencia, null, 4), 'utf8');

console.log(`Standardization complete.`);
console.log(`Nodes updated to new keys: ${updatedCount}`);
console.log(`Remaining Placeholders/Incomplete nodes: ${placeholderCount}`);
