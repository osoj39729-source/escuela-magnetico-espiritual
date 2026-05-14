const fs = require('fs');

const contentPath = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_content.json';
const esenciaPath = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json';
const dictPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

const content = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
const esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
const dict = JSON.parse(fs.readFileSync(dictPath, 'utf8'));

const contentKeys = Object.keys(content);
const esenciaKeys = Object.keys(esencia);

console.log(`--- AUDITORIA TOMO 1 ---`);
console.log(`Nodos en Content: ${contentKeys.length}`);
console.log(`Nodos en Esencia: ${esenciaKeys.length}`);

// Check for placeholders in esencias
let placeholders = 0;
esenciaKeys.forEach(key => {
    const node = esencia[key];
    if (!node.PilotoDeCoherencia || node.IdeaCentral.length === 0 || node.CitaInelutable.length === 0) {
        placeholders++;
    }
});
console.log(`Placeholders/Nodos incompletos: ${placeholders}`);

// Check dictionary links
let totalLinks = 0;
let brokenLinks = 0;
esenciaKeys.forEach(nodeId => {
    const node = esencia[nodeId];
    if (node.NodosSinapticos) {
        node.NodosSinapticos.forEach(concept => {
            const key = concept.replace(/ /g, '_');
            totalLinks++;
            if (!dict.CONCEPTOS[key]) {
                brokenLinks++;
            }
        });
    }
});
console.log(`Vincitulos Sinapticos Totales: ${totalLinks}`);
console.log(`Vincitulos Rotos (sin concepto en dict): ${brokenLinks}`);

// Check if each essence node is referenced back in the dictionary
let backlinked = 0;
esenciaKeys.forEach(nodeId => {
    const link = `codigo-de-amor-universal-tomo-1_esencia.json#${nodeId}`;
    let found = false;
    for (const conceptKey in dict.CONCEPTOS) {
        if (dict.CONCEPTOS[conceptKey].nodos_sinapticos.includes(link)) {
            found = true;
            break;
        }
    }
    if (found) backlinked++;
});
console.log(`Nodos retro-vinculados en el Diccionario: ${backlinked}/${esenciaKeys.length}`);
