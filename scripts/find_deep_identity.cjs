const fs = require('fs');
const filePath = 'F:\\trincado\\src\\data\\library.ts';

function findDeepIdentity() {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    lines.forEach((line, index) => {
        // Buscar Moisés y términos de identidad espiritual
        if (line.includes('Moisés') && (line.includes('animaba') || line.includes('encarnado') || line.includes('misma entidad'))) {
            console.log(`\n--- VÍNCULO DETECTADO EN LÍNEA ${index + 1} ---`);
            console.log(line.trim());
        }
    });
}

findDeepIdentity();
