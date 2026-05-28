const fs = require('fs');
const filePath = 'F:\\trincado\\src\\data\\library.ts';

function findContext(query) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    lines.forEach((line, index) => {
        if (line.toLowerCase().includes(query.toLowerCase())) {
            console.log(`\n--- LÍNEA ${index + 1} ---`);
            for (let i = Math.max(0, index - 5); i <= Math.min(lines.length - 1, index + 5); i++) {
                console.log(`${i + 1}: ${lines[i].trim()}`);
            }
        }
    });
}

console.log('Buscando menciones de Moisés y su contexto...');
findContext('Moisés');
