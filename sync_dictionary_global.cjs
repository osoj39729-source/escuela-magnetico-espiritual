const fs = require('fs');

const dictPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
const dict = JSON.parse(fs.readFileSync(dictPath, 'utf8'));

function syncBook(esenciaPath, fileName) {
    const esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
    for (const nodeId in esencia) {
        const node = esencia[nodeId];
        const link = `${fileName}#${nodeId}`;
        
        if (node.NodosSinapticos) {
            node.NodosSinapticos.forEach(conceptKey => {
                const normalizedKey = conceptKey.replace(/ /g, '_');
                
                // Ensure concept exists
                if (!dict.CONCEPTOS[normalizedKey]) {
                    dict.CONCEPTOS[normalizedKey] = {
                        "palabras_clave": [conceptKey.toLowerCase()],
                        "nodos_sinapticos": [],
                        "contexto_real": `Concepto extraido de ${fileName} durante la auditoria experta.`
                    };
                }
                
                // Add backlink if not present
                if (!dict.CONCEPTOS[normalizedKey].nodos_sinapticos) {
                    dict.CONCEPTOS[normalizedKey].nodos_sinapticos = [];
                }
                if (!dict.CONCEPTOS[normalizedKey].nodos_sinapticos.includes(link)) {
                    dict.CONCEPTOS[normalizedKey].nodos_sinapticos.push(link);
                }
            });
        }
    }
}

syncBook('F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json', 'codigo-de-amor-universal-tomo-1_esencia.json');
syncBook('F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json', 'codigo-de-amor-universal-tomo-2_esencia.json');

fs.writeFileSync(dictPath, JSON.stringify(dict, null, 4), 'utf8');
console.log('Diccionario Sinaptico sincronizado con Tomo 1 y Tomo 2.');
