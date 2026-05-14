const fs = require('fs');

const files = [
    'estatutos-y-reglamentos_esencia.json',
    'discurso-obispo-strossmayer_esencia.json',
    'ley-de-las-mediumidades-en-general_esencia.json',
    'v-i-d-a---d-e----m-a-r-i-a_esencia.json',
    'jes-s-hombre-y-no-dios_esencia.json',
    'la-revolucion-de-mexico_esencia.json',
    'tercera-etapa_esencia.json'
];

const dictPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
const dict = JSON.parse(fs.readFileSync(dictPath, 'utf8'));

console.log(`--- REPORTE DE AUDITORIA MULTI-LIBRO ---`);

files.forEach(file => {
    const path = `F:/trincado/public/data/contents/${file}`;
    if (!fs.existsSync(path)) {
        console.log(`[!] ARCHIVO NO ENCONTRADO: ${file}`);
        return;
    }
    
    const esencia = JSON.parse(fs.readFileSync(path, 'utf8'));
    const keys = Object.keys(esencia);
    let placeholders = 0;
    let linkedCount = 0;
    let oldKeys = 0;

    keys.forEach(id => {
        const node = esencia[id];
        
        // Check for FAR-5 keys
        if (node.Piloto || node.Idea || node.Ejemplo || node.Cita) {
            oldKeys++;
        }

        // Check for placeholders
        const isPlaceholder = !node.PilotoDeCoherencia && !node.Piloto;
        if (isPlaceholder) placeholders++;

        // Check dictionary backlinks
        const link = `${file}#${id}`;
        let found = false;
        for (const conceptKey in dict.CONCEPTOS) {
            if (dict.CONCEPTOS[conceptKey].nodos_sinapticos && dict.CONCEPTOS[conceptKey].nodos_sinapticos.includes(link)) {
                found = true;
                break;
            }
        }
        if (found) linkedCount++;
    });

    console.log(`\nLibro: ${file}`);
    console.log(`- Nodos Totales: ${keys.length}`);
    console.log(`- Placeholders Detectados: ${placeholders}`);
    console.log(`- Nodos con llaves antiguas (Piloto/Idea): ${oldKeys}`);
    console.log(`- Nodos vinculados al Diccionario: ${linkedCount}/${keys.length}`);
    
    if (placeholders > 0 || oldKeys > 0) {
        console.log(`- Estatus: REQUIERE INTERVENCION (No FAR-5 compliant)`);
    } else {
        console.log(`- Estatus: STANDARDIZADO`);
    }
});
