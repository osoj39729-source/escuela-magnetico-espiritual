const fs = require('fs');

const samples = [
    { file: 'v-i-d-a---d-e----m-a-r-i-a_esencia.json', id: '109: PROLOGO DEL AUTOR.' },
    { file: 'jes-s-hombre-y-no-dios_esencia.json', id: '1: PROLOGO' },
    { file: 'tercera-etapa_esencia.json', id: '1: PROLOGO' },
    { file: 'codigo-de-amor-universal-tomo-2_esencia.json', id: '4765' }
];

console.log(`--- REPORTE DE FIDELIDAD Y PROFUNDIDAD (MUESTRAS) ---`);

samples.forEach(s => {
    const path = `F:/trincado/public/data/contents/${s.file}`;
    const esencia = JSON.parse(fs.readFileSync(path, 'utf8'));
    const node = esencia[s.id];
    
    console.log(`\nLibro: ${s.file} | ID: ${s.id}`);
    console.log(`--------------------------------------------------`);
    console.log(`PILOTO: ${node.PilotoDeCoherencia || node.Piloto}`);
    console.log(`CITA: ${node.CitaInelutable || node.Cita}`);
    console.log(`IDEAS: ${JSON.stringify(node.IdeaCentral || node.Idea || node.IdeasPrincipales, null, 2)}`);
    console.log(`SINAPSIS: ${JSON.stringify(node.NodosSinapticos || node.Sinapsis, null, 2)}`);
});
