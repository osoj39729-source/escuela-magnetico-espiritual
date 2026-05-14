const fs = require('fs');

const samples = [
    { file: 'v-i-d-a---d-e----m-a-r-i-a_esencia.json', id: '109: PROLOGO DEL AUTOR.' },
    { file: 'jes-s-hombre-y-no-dios_esencia.json', id: '7: PROCLAMA' },
    { file: 'tercera-etapa_esencia.json', id: '1: JOAQUIN TRINCADO' },
    { file: 'codigo-de-amor-universal-tomo-2_esencia.json', id: '4765' }
];

const dictPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
const dict = JSON.parse(fs.readFileSync(dictPath, 'utf8'));

console.log(`--- REPORTE DE FIDELIDAD Y VINCULACION ---`);

samples.forEach(s => {
    const path = `F:/trincado/public/data/contents/${s.file}`;
    const esencia = JSON.parse(fs.readFileSync(path, 'utf8'));
    const node = esencia[s.id];
    
    console.log(`\nLibro: ${s.file} | ID: ${s.id}`);
    console.log(`--------------------------------------------------`);
    console.log(`PILOTO: ${node.PilotoDeCoherencia || node.Piloto}`);
    console.log(`CITA: ${node.CitaInelutable || node.Cita}`);
    
    // Check if one of the synaptic nodes exists in dictionary and links back
    const synapticNodes = node.NodosSinapticos || node.Sinapsis || node.PuntosImportantes || [];
    const firstConcept = synapticNodes[0];
    if (firstConcept) {
        const key = firstConcept.replace(/ /g, '_');
        const concept = dict.CONCEPTOS[key];
        if (concept && concept.nodos_sinapticos.includes(`${s.file}#${s.id}`)) {
            console.log(`[OK] VINCULO DICCIONARIO: Concepto "${firstConcept}" -> Link activo.`);
        } else {
            console.log(`[!] VINCULO DICCIONARIO: Concepto "${firstConcept}" -> NO ENCONTRADO O SIN BACKLINK.`);
        }
    }
});
