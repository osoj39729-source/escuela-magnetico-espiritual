const fs = require('fs');

function inject(esenciaPath, scratchDir, nodeIds) {
    const esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
    nodeIds.forEach((id, index) => {
        const scratchPath = `${scratchDir}/node_${index}.json`;
        if (fs.existsSync(scratchPath)) {
            const node = JSON.parse(fs.readFileSync(scratchPath, 'utf8'));
            esencia[id] = node;
        }
    });
    fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 4), 'utf8');
}

inject('F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json', 'F:/trincado/scratch_nodes_tanda34_tomo2', ['2172', '2497', '3005', '3007', '3085']);

console.log('Inyeccin Tanda 34 completada.');
