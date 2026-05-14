const fs = require('fs');

function inject(esenciaPath, scratchDir, nodeIds) {
    const esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
    for (let i = 0; i < 5; i++) {
        const scratchPath = `${scratchDir}/node_${i}.json`;
        if (fs.existsSync(scratchPath)) {
            const node = JSON.parse(fs.readFileSync(scratchPath, 'utf8'));
            esencia[nodeIds[i]] = node;
        }
    }
    fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 4), 'utf8');
}

// Tomo 1
inject('F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json', 'F:/trincado/scratch_nodes_tanda25', ['8851', '8900', '8950', '9000', '9042']);
inject('F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json', 'F:/trincado/scratch_nodes_tanda26', ['9151', '9200', '9268', '9350', '9422']);

// Tomo 2
inject('F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json', 'F:/trincado/scratch_nodes_tanda27', ['5', '99', '120', '324', '401']);
inject('F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json', 'F:/trincado/scratch_nodes_tanda28', ['597', '604', '696', '968', '1000']);
inject('F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json', 'F:/trincado/scratch_nodes_tanda29', ['1215', '1403', '1569', '1700', '1840']);
inject('F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json', 'F:/trincado/scratch_nodes_tanda30', ['2049', '2497', '3130', '3513', '4266']);

console.log('Inyeccin de esencias 25-30 completada.');

// Update Dictionary Links
const dictPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
const dict = JSON.parse(fs.readFileSync(dictPath, 'utf8'));

const linkMap = {
    "codigo-de-amor-universal-tomo-1_esencia.json": [8851, 8900, 8950, 9000, 9042, 9151, 9200, 9268, 9350, 9422],
    "codigo-de-amor-universal-tomo-2_esencia.json": [5, 99, 120, 324, 401, 597, 604, 696, 968, 1000, 1215, 1403, 1569, 1700, 1840, 2049, 2497, 3130, 3513, 4266]
};

const esencia1 = JSON.parse(fs.readFileSync('F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json', 'utf8'));
const esencia2 = JSON.parse(fs.readFileSync('F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json', 'utf8'));

function linkNodes(esenciaName, nodes, esenciaObj) {
    for (const id of nodes) {
        const node = esenciaObj[id];
        if (node && node.NodosSinapticos) {
            for (const conceptKey of node.NodosSinapticos) {
                const normalizedKey = conceptKey.replace(/ /g, '_');
                if (dict.CONCEPTOS[normalizedKey]) {
                    if (!dict.CONCEPTOS[normalizedKey].nodos_sinapticos) {
                        dict.CONCEPTOS[normalizedKey].nodos_sinapticos = [];
                    }
                    const link = `${esenciaName}#${id}`;
                    if (!dict.CONCEPTOS[normalizedKey].nodos_sinapticos.includes(link)) {
                        dict.CONCEPTOS[normalizedKey].nodos_sinapticos.push(link);
                    }
                } else {
                   // Create concept if it doesn't exist
                   dict.CONCEPTOS[normalizedKey] = {
                       "palabras_clave": [conceptKey.toLowerCase()],
                       "nodos_sinapticos": [`${esenciaName}#${id}`],
                       "contexto_real": `Concepto extraido de ${esenciaName} durante la destilacion Experta.`
                   };
                }
            }
        }
    }
}

linkNodes('codigo-de-amor-universal-tomo-1_esencia.json', linkMap["codigo-de-amor-universal-tomo-1_esencia.json"], esencia1);
linkNodes('codigo-de-amor-universal-tomo-2_esencia.json', linkMap["codigo-de-amor-universal-tomo-2_esencia.json"], esencia2);

fs.writeFileSync(dictPath, JSON.stringify(dict, null, 4), 'utf8');
console.log('Vnculos del Diccionario Sinptico actualizados.');
