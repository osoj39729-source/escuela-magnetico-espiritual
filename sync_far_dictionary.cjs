const fs = require('fs');

const ESSENCE_PATH = 'public/data/contents/filosof-a-austera-racional_esencia.json';
const DICTIONARY_PATH = 'public/data/diccionario_sinapsis.json';

function syncDictionary() {
    const essenceData = JSON.parse(fs.readFileSync(ESSENCE_PATH, 'utf8'));
    const dictionaryData = JSON.parse(fs.readFileSync(DICTIONARY_PATH, 'utf8'));
    
    let addedCount = 0;
    
    Object.keys(essenceData).forEach(nodeKey => {
        const terms = essenceData[nodeKey].DiccionarioSinaptico || [];
        terms.forEach(term => {
            const normalized = term.replace(/\s+/g, '_');
            const nodeRef = `filosof-a-austera-racional_esencia.json#${nodeKey}`;
            
            if (!dictionaryData.CONCEPTOS[normalized]) {
                dictionaryData.CONCEPTOS[normalized] = {
                    context_real: `Concepto fundamental extraído de Filosofía Austera Racional.`,
                    nodos_sinapticos: [nodeRef]
                };
                addedCount++;
            } else {
                if (!dictionaryData.CONCEPTOS[normalized].nodos_sinapticos) {
                    dictionaryData.CONCEPTOS[normalized].nodos_sinapticos = [];
                }
                if (!dictionaryData.CONCEPTOS[normalized].nodos_sinapticos.includes(nodeRef)) {
                    dictionaryData.CONCEPTOS[normalized].nodos_sinapticos.push(nodeRef);
                }
            }
        });
    });

    fs.writeFileSync(DICTIONARY_PATH, JSON.stringify(dictionaryData, null, 2));
    console.log(`- Sincronización completa.`);
    console.log(`- Términos nuevos agregados: ${addedCount}`);
    console.log(`- Diccionario actualizado con referencias a FAR.`);
}

syncDictionary();
