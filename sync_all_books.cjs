const fs = require('fs');
const path = require('path');

const contentsDir = 'F:/trincado/public/data/contents';
const dictPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
const dict = JSON.parse(fs.readFileSync(dictPath, 'utf8'));

const esenciaFiles = fs.readdirSync(contentsDir).filter(f => f.endsWith('_esencia.json'));

console.log(`--- SINCRONIZACION TOTAL DE LA BIBLIOTECA (${esenciaFiles.length} LIBROS) ---`);

esenciaFiles.forEach(file => {
    const fullPath = path.join(contentsDir, file);
    let esencia;
    try {
        esencia = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
    } catch (e) { return; }

    for (const nodeId in esencia) {
        const node = esencia[nodeId];
        const link = `${file}#${nodeId}`;
        
        const synapticNodes = node.NodosSinapticos || node.Sinapsis || node.PuntosImportantes || [];
        
        synapticNodes.forEach(conceptKey => {
            if (typeof conceptKey !== 'string') return;
            const normalizedKey = conceptKey.replace(/ /g, '_');
            
            // Ensure concept exists
            if (!dict.CONCEPTOS[normalizedKey]) {
                dict.CONCEPTOS[normalizedKey] = {
                    "palabras_clave": [conceptKey.toLowerCase()],
                    "nodos_sinapticos": [],
                    "contexto_real": `Concepto extraido de ${file} durante la sincronizacion total.`
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
});

fs.writeFileSync(dictPath, JSON.stringify(dict, null, 4), 'utf8');
console.log('Sincronización total completada.');
