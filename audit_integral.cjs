const fs = require('fs');
const path = require('path');

const contentsDir = 'F:/trincado/public/data/contents';
const dictPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
const dict = JSON.parse(fs.readFileSync(dictPath, 'utf8'));

const esenciaFiles = fs.readdirSync(contentsDir).filter(f => f.endsWith('_esencia.json'));

console.log(`--- AUDITORIA INTEGRAL DE LA BIBLIOTECA (${esenciaFiles.length} LIBROS) ---`);

esenciaFiles.forEach(file => {
    const fullPath = path.join(contentsDir, file);
    let esencia;
    try {
        esencia = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
    } catch (e) {
        console.log(`\n[FATAL] Libro: ${file} | ERROR DE LECTURA: ${e.message}`);
        return;
    }

    const keys = Object.keys(esencia);
    let placeholders = 0;
    let oldKeys = 0;
    let linkedCount = 0;

    keys.forEach(id => {
        const node = esencia[id];
        
        // Placeholder check
        const isPlaceholder = !node.PilotoDeCoherencia && !node.Piloto;
        if (isPlaceholder) placeholders++;

        // Key style check
        if (node.Piloto || node.Idea || node.Cita) oldKeys++;

        // Dictionary link check
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
    console.log(`- Nodos: ${keys.length} | Placeholders: ${placeholders} | Llaves Antiguas: ${oldKeys}`);
    console.log(`- Vinculados al Diccionario: ${linkedCount}/${keys.length}`);
    
    if (placeholders > 0 || oldKeys > 0 || linkedCount < keys.length) {
        console.log(`- Estatus: REQUIERE ATENCION`);
    } else {
        console.log(`- Estatus: 100% CUMPLIDO`);
    }
});
