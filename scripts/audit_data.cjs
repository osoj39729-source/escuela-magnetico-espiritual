const fs = require('fs');
const path = require('path');

const dataDir = 'F:\\trincado\\src\\data';

function scanDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            scanDir(fullPath);
        } else if (file.endsWith('.ts') || file.endsWith('.json')) {
            auditFile(fullPath);
        }
    });
}

function auditFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    let issues = [];

    lines.forEach((line, index) => {
        // Detectar caracteres raros (fuera del rango latino/español estándar)
        // Rango: ASCII + Vocales acentuadas + ñ/Ñ + puntuación común
        const corruptRegex = /[^\x20-\x7E\xA1-\xFF\u2013\u2014\u2022\u2026\s]/g;
        const matches = line.match(corruptRegex);
        
        if (matches) {
            issues.push({
                line: index + 1,
                char: matches.join(' '),
                preview: line.trim().substring(0, 50) + '...'
            });
        }

        // Detectar ruido de OCR (muchas letras sueltas)
        const noiseRegex = /\s[b-df-hj-np-tv-z]\s[b-df-hj-np-tv-z]\s/gi;
        if (noiseRegex.test(line)) {
            issues.push({
                line: index + 1,
                type: 'POSSIBLE_OCR_NOISE',
                preview: line.trim().substring(0, 50) + '...'
            });
        }
    });

    if (issues.length > 0) {
        console.log(`\n--- INFORME: ${filePath} ---`);
        issues.slice(0, 5).forEach(issue => {
            if (issue.char) {
                console.log(`  [LÍNEA ${issue.line}] Caracteres sospechosos: ${issue.char} | Vista: ${issue.preview}`);
            } else {
                console.log(`  [LÍNEA ${issue.line}] Ruido OCR detectado | Vista: ${issue.preview}`);
            }
        });
        if (issues.length > 5) console.log(`  ... y ${issues.length - 5} hallazgos más.`);
    }
}

console.log('Iniciando Auditoría de Integridad Doctrinal...');
scanDir(dataDir);
console.log('\nAuditoría finalizada.');
