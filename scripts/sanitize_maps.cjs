const fs = require('fs');
const path = require('path');

const mapsDir = 'F:\\trincado\\src\\data\\maps';

function scanDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            scanDir(fullPath);
        } else if (file.endsWith('structure.ts')) {
            sanitizeFile(fullPath);
        }
    });
}

function sanitizeFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 1. Reemplazar comillas inteligentes por rectas
    const original = content;
    content = content.replace(/“/g, '"').replace(/”/g, '"');
    content = content.replace(/‘/g, "'").replace(/’/g, "'");
    
    // 2. Eliminar caracteres de control invisibles (excepto saltos de línea y tabuladores)
    content = content.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, "");

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`[LIMPIO] ${path.basename(path.dirname(filePath))}/structure.ts`);
    }
}

console.log('Iniciando Higienización de Mapas...');
scanDir(mapsDir);
console.log('Higienización completada.');
