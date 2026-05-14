const fs = require('fs');

const filePath = 'src/data/contents/buscando-a-dios-joaquin-trincado_content.ts';
const content = fs.readFileSync(filePath, 'utf8');

// Buscamos la entrada 1198
const key = "1198: Párrafo I: LA RELIGION FULICA";
const startMarker = `"${key}": "`;
const startIndex = content.indexOf(startMarker);

if (startIndex === -1) {
    console.log("No se encontró la clave exacta.");
} else {
    const textStart = startIndex + startMarker.length;
    const textEnd = content.indexOf('",', textStart);
    const rawText = content.substring(textStart, textEnd);
    
    console.log("=== REPORTE DE INTEGRIDAD DE ARCHIVO (LITERAL) ===");
    console.log(`Clave: ${key}`);
    console.log("--- CONTENIDO EXTRAÍDO DEL ARCHIVO ---");
    console.log(rawText.replace(/\\n/g, '\n'));
    console.log("---------------------------------------");
    
    // Verificación de caracteres no ASCII
    let corruptionFound = false;
    for (let i = 0; i < rawText.length; i++) {
        const code = rawText.charCodeAt(i);
        if (code > 255 && !'áéíóúüñÁÉÍÓÚÜÑ'.includes(rawText[i])) {
            console.log(`Posible corrupción en char ${i}: '${rawText[i]}' (code ${code})`);
            corruptionFound = true;
        }
    }
    if (!corruptionFound) console.log("Resultado: El archivo NO contiene caracteres corruptos ni 'basura' en este segmento.");
}
