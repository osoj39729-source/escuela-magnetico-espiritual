const fs = require('fs');
const path = require('path');

const contentsDir = 'src/data/contents';
const report = {};

function checkText(text) {
    if (!text) return { ok: false, reason: 'empty' };
    const words = text.split(/\s+/).filter(w => w.length > 0);
    if (words.length < 5) return { ok: false, reason: 'too_short' };
    
    const singleCharWords = words.filter(w => w.length === 1).length;
    const ratio = singleCharWords / words.length;
    
    // Si más del 40% de las "palabras" son de 1 letra, es basura OCR
    if (ratio > 0.4) return { ok: false, reason: 'garbage_ocr', ratio };
    
    return { ok: true };
}

const files = fs.readdirSync(contentsDir).filter(f => f.endsWith('_content.ts'));

console.log("=== AUDITORÍA DE INTEGRIDAD DE ORIGEN (RE-VERIFICACIÓN) ===");

for (const file of files) {
    const content = fs.readFileSync(path.join(contentsDir, file), 'utf8');
    const bookId = file.replace('_content.ts', '');
    const chapters = {};
    
    // Regex para capturar clave y valor (aproximado por la estructura del archivo)
    const regex = /"([^"]+)":\s*"((?:[^"\\]|\\.)*)"/g;
    let m;
    let total = 0;
    let bad = 0;
    
    while ((m = regex.exec(content)) !== null) {
        const key = m[1];
        const val = m[2];
        const status = checkText(val);
        if (!status.ok) {
            chapters[key] = status.reason;
            bad++;
        }
        total++;
    }
    
    if (bad > 0) {
        console.log(`❌ ${bookId}: ${bad}/${total} capítulos con problemas detectados en el archivo.`);
        Object.entries(chapters).slice(0, 5).forEach(([k, v]) => console.log(`   - [${v}] ${k}`));
    } else {
        console.log(`✅ ${bookId}: 100% íntegro en el archivo fuente.`);
    }
}
