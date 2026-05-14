const fs = require('fs');

function audit() {
    const content = fs.readFileSync('src/data/contents/filosof-a-austera-racional_content.ts', 'utf8');
    // Intentamos extraer el objeto quitando el export
    const jsonStr = content
        .replace(/export const CONTENT: Record<string, string> = /, '')
        .replace(/;$/, '')
        .trim();
    
    // Como no es JSON válido (tiene comas al final, etc.), usaremos eval de forma segura en un sandbox o regex
    // Pero mejor regex para las claves
    const badChapters = [];
    const regex = /"([^"]+)":\s*"((?:[^"\\]|\\.)*)"/g;
    let m;
    while ((m = regex.exec(content)) !== null) {
        const key = m[1];
        const val = m[2];
        const words = val.split(/\s+/).filter(w => w.length > 0);
        if (words.length > 10) {
            const singleCharWords = words.filter(w => w.length === 1).length;
            const ratio = singleCharWords / words.length;
            if (ratio > 0.4) {
                badChapters.push({ key, ratio, snippet: val.substring(0, 50) });
            }
        }
    }
    console.log(JSON.stringify(badChapters, null, 2));
}

audit();
