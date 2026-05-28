const fs = require('fs');
const path = require('path');

const filePath = 'F:\\trincado\\src\\data\\library.ts';

function sanitizeLibrary(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;

    // 1. Estandarizar comillas y apóstrofes
    content = content.replace(/[“”]/g, '"').replace(/[‘’]/g, "'");

    // 2. "Soldar" palabras fragmentadas (Ej: E P Í L O G O -> EPÍLOGO)
    // Buscamos patrones de letras mayúsculas (incluyendo acentos) separadas por espacios
    // que tengan al menos 3 letras seguidas de esta forma.
    content = content.replace(/([A-ZÁÉÍÓÚÑ])\s([A-ZÁÉÍÓÚÑ])\s([A-ZÁÉÍÓÚÑ])(\s[A-ZÁÉÍÓÚÑ])*/g, (match) => {
        const welded = match.replace(/\s/g, '');
        console.log(`  [SOLDADO] ${match} -> ${welded}`);
        return welded;
    });

    // 3. Limpiar caracteres de control invisibles
    content = content.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, "");

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`\nLimpieza de library.ts completada con éxito.`);
    } else {
        console.log(`\nNo se requirieron cambios en library.ts.`);
    }
}

console.log('Iniciando Higienización de library.ts...');
sanitizeLibrary(filePath);
