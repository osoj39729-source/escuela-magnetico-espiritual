const fs = require('fs');

const dictPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
const dict = JSON.parse(fs.readFileSync(dictPath, 'utf8'));

const filesToSync = [
    { esencia: 'codigo-de-amor-universal-tomo-1_esencia.json', fileName: 'codigo-de-amor-universal-tomo-1_esencia.json' },
    { esencia: 'codigo-de-amor-universal-tomo-2_esencia.json', fileName: 'codigo-de-amor-universal-tomo-2_esencia.json' },
    { esencia: 'estatutos-y-reglamentos_esencia.json', fileName: 'estatutos-y-reglamentos_esencia.json' },
    { esencia: 'discurso-obispo-strossmayer_esencia.json', fileName: 'discurso-obispo-strossmayer_esencia.json' },
    { esencia: 'ley-de-las-mediumidades-en-general_esencia.json', fileName: 'ley-de-las-mediumidades-en-general_esencia.json' },
    { esencia: 'v-i-d-a---d-e----m-a-r-i-a_esencia.json', fileName: 'v-i-d-a---d-e----m-a-r-i-a_esencia.json' },
    { esencia: 'jes-s-hombre-y-no-dios_esencia.json', fileName: 'jes-s-hombre-y-no-dios_esencia.json' },
    { esencia: 'la-revolucion-de-mexico_esencia.json', fileName: 'la-revolucion-de-mexico_esencia.json' },
    { esencia: 'tercera-etapa_esencia.json', fileName: 'tercera-etapa_esencia.json' }
];

function syncBook(esenciaPath, fileName) {
    const fullPath = `F:/trincado/public/data/contents/${esenciaPath}`;
    if (!fs.existsSync(fullPath)) return;
    
    const esencia = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
    for (const nodeId in esencia) {
        const node = esencia[nodeId];
        const link = `${fileName}#${nodeId}`;
        
        // Check both old and new keys
        const synapticNodes = node.NodosSinapticos || node.Sinapsis || node.PuntosImportantes || [];
        
        synapticNodes.forEach(conceptKey => {
            if (typeof conceptKey !== 'string') return;
            const normalizedKey = conceptKey.replace(/ /g, '_');
            
            // Ensure concept exists
            if (!dict.CONCEPTOS[normalizedKey]) {
                dict.CONCEPTOS[normalizedKey] = {
                    "palabras_clave": [conceptKey.toLowerCase()],
                    "nodos_sinapticos": [],
                    "contexto_real": `Concepto extraido de ${fileName} durante la auditoria global.`
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

filesToSync.forEach(f => syncBook(f.esencia, f.fileName));

fs.writeFileSync(dictPath, JSON.stringify(dict, null, 4), 'utf8');
console.log('Sincronización global completada para 9 libros.');
