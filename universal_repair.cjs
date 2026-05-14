const fs = require('fs');
const path = require('path');

const contentsDir = 'src/data/contents';

function cleanFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Regex para extraer el objeto exportado
    const match = content.match(/export const CONTENT: Record<string, string> = (\{[\s\S]*\});/);
    if (!match) {
        console.log(`Could not parse ${filePath}`);
        return;
    }
    
    const objStr = match[1];
    const entries = [];
    // Regex mejorada para capturar pares clave:valor
    const entryRegex = /"([^"]+)":\s*"((?:[^"\\]|\\.)*)"/g;
    let m;
    while ((m = entryRegex.exec(objStr)) !== null) {
        entries.push({ key: m[1], val: m[2] });
    }

    if (entries.length === 0) {
        console.log(`No entries found in ${filePath}`);
        return;
    }

    const newEntries = [];
    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        // Criterio de clave válida: 
        // 1. Empieza por número y dos puntos (e.g. "123: ")
        // 2. Es un título en mayúsculas (e.g. "PRÓLOGO")
        // 3. Empieza por "CAPÍTULO" o "PÁRRAFO"
        const isStandard = /^\d+:/.test(entry.key) || 
                          /^[A-ZÁÉÍÓÚ\s,]+$/.test(entry.key) || 
                          entry.key.startsWith('CAPÍTULO') || 
                          entry.key.startsWith('PÁRRAFO') ||
                          entry.key === 'PRÓLOGO' || 
                          entry.key === 'PREFACIO';
        
        if (!isStandard && entry.key.length < 100 && i > 0) {
            console.log(`[${path.basename(filePath)}] Merging bad key "${entry.key}" into "${newEntries[newEntries.length-1].key}"`);
            newEntries[newEntries.length-1].val += "\\n\\n" + entry.val;
        } else {
            newEntries.push(entry);
        }
    }

    // Reconstruir el archivo
    let newContent = `export const CONTENT: Record<string, string> = {\n`;
    for (const entry of newEntries) {
        newContent += `  "${entry.key}": "${entry.val}",\n`;
    }
    newContent += "};\n";
    
    fs.writeFileSync(filePath, newContent);
    console.log(`[${path.basename(filePath)}] Cleaned. Reduced from ${entries.length} to ${newEntries.length} keys.`);
}

const files = fs.readdirSync(contentsDir);
for (const file of files) {
    if (file.endsWith('_content.ts')) {
        cleanFile(path.join(contentsDir, file));
    }
}
