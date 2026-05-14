const fs = require('fs');
const content = fs.readFileSync('src/data/contents/filosof-a-austera-racional_content.ts', 'utf8');

function showKey(key) {
    const startMarker = '"' + key + '": "';
    const startIndex = content.indexOf(startMarker);
    if (startIndex !== -1) {
        const textStart = startIndex + startMarker.length;
        // Buscamos el final de la cadena de forma un poco más inteligente para manejar comillas escapadas si las hay
        // Pero para este archivo asumo que termina en ", o "} o ";
        let textEnd = content.indexOf('",\n', textStart);
        if (textEnd === -1) textEnd = content.indexOf('"\n', textStart);
        
        console.log(`--- KEY: ${key} ---`);
        console.log(content.substring(textStart, textEnd).substring(0, 300) + '...');
    } else {
        console.log(`--- KEY NOT FOUND: ${key} ---`);
    }
}

showKey('24746: PÁRRAFO 10º: EL COMUNISMO POR LA VIOLENCIA');
showKey('.');
showKey('.)');
showKey('25124: CAPITULO XIII: El Derecho positivo');
