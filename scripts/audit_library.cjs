const fs = require('fs');
const path = require('path');

const filePath = 'F:\\trincado\\src\\data\\library.ts';

function auditFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    let issues = [];

    lines.forEach((line, index) => {
        const corruptRegex = /[^\x20-\x7E\xA1-\xFF\u2013\u2014\u2022\u2026\s]/g;
        const matches = line.match(corruptRegex);
        if (matches) {
            issues.push({ line: index + 1, char: matches.join(' '), preview: line.trim().substring(0, 80) });
        }
    });

    console.log(`\n--- INFORME COMPLETO: library.ts ---`);
    console.log(`Total de líneas con impurezas: ${issues.length}`);
    issues.slice(0, 50).forEach(issue => {
        console.log(`[LÍNEA ${issue.line}] Caracteres: ${issue.char} | "${issue.preview}"`);
    });
}

auditFile(filePath);
