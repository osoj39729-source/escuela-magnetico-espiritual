const fs = require('fs');

const filesToStandardize = [
    'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-1_esencia.json',
    'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-2_esencia.json'
];

filesToStandardize.forEach(path => {
    if (!fs.existsSync(path)) return;
    const esencia = JSON.parse(fs.readFileSync(path, 'utf8'));
    const newEsencia = {};

    for (const key in esencia) {
        const node = esencia[key];
        const newNode = {
            "PilotoDeCoherencia": node.PilotoDeCoherencia || node.Piloto || "",
            "IdeaCentral": node.IdeaCentral || node.Idea || [],
            "EjemploPedagogico": node.EjemploPedagogico || node.Ejemplo || [],
            "CitaInelutable": node.CitaInelutable || node.Cita || [],
            "NodosSinapticos": node.NodosSinapticos || node.Sinapsis || []
        };
        newEsencia[key] = newNode;
    }

    fs.writeFileSync(path, JSON.stringify(newEsencia, null, 4), 'utf8');
});

console.log('Estandarización de llaves completada para Filosofía Enciclopédica.');
