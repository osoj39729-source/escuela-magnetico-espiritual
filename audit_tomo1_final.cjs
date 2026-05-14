const fs = require('fs');

const esenciaPath = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json';
const dictPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

const esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
const dict = JSON.parse(fs.readFileSync(dictPath, 'utf8'));

const esenciaKeys = Object.keys(esencia);

console.log(`--- FINAL AUDIT TOMO 1 ---`);
console.log(`Total Nodes: ${esenciaKeys.length}`);

let totalLinks = 0;
let brokenLinks = 0;
let linkList = [];

esenciaKeys.forEach(nodeId => {
    const node = esencia[nodeId];
    if (node.NodosSinapticos) {
        node.NodosSinapticos.forEach(concept => {
            const key = concept.replace(/ /g, '_');
            totalLinks++;
            if (!dict.CONCEPTOS[key]) {
                brokenLinks++;
                linkList.push(`[BROKEN] Node ${nodeId} -> ${concept}`);
            }
        });
    }
});

console.log(`Total Synaptic Links: ${totalLinks}`);
console.log(`Broken Links: ${brokenLinks}`);
if (linkList.length > 0) {
    console.log(`\nBroken Link Details:`);
    linkList.forEach(l => console.log(l));
}

// Backlink check
let backlinked = 0;
esenciaKeys.forEach(nodeId => {
    const link = `codigo-de-amor-universal-tomo-1_esencia.json#${nodeId}`;
    let found = false;
    for (const conceptKey in dict.CONCEPTOS) {
        const concept = dict.CONCEPTOS[conceptKey];
        if (concept.nodos_sinapticos && concept.nodos_sinapticos.includes(link)) {
            found = true;
            break;
        }
    }
    if (found) backlinked++;
    else {
        // console.log(`[!] Missing backlink for Node ${nodeId}`);
    }
});
console.log(`Backlinked nodes (in Dictionary): ${backlinked}/${esenciaKeys.length}`);
