const fs = require('fs');
const filePath = 'F:\\trincado\\src\\data\\library.ts';

function findIdentity() {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    lines.forEach((line, index) => {
        // Buscar Moisés y animó en la misma vecindad de 500 caracteres
        if (line.includes('Moisés') && (line.includes('animó') || line.includes('espíritu') || line.includes('encarnación'))) {
            console.log(`\n--- COINCIDENCIA EN LÍNEA ${index + 1} ---`);
            console.log(line.trim());
        }
    });
}

findIdentity();
