const fs = require('fs');

function cleanFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const regex = /"([^"]+)":\s*"((?:[^"\\]|\\.)*)"/g;
    const entries = [];
    let m;
    while ((m = regex.exec(content)) !== null) {
        entries.push({ key: m[1], val: m[2] });
    }

    const newEntries = [];
    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        // Si la clave no parece una clave válida (empieza por número: o es un título conocido)
        const isStandard = /^\d+:/.test(entry.key) || /^[A-ZÁÉÍÓÚ\s]+$/.test(entry.key) || entry.key === 'PRÓLOGO' || entry.key === 'PREFACIO';
        
        if (!isStandard && entry.key.length < 100 && i > 0) {
            // Es una clave basura, la unimos a la anterior
            console.log(`Merging bad key "${entry.key}" into "${newEntries[newEntries.length-1].key}"`);
            newEntries[newEntries.length-1].val += "\n\n" + entry.val;
        } else {
            newEntries.push(entry);
        }
    }

    // Reconstruir el archivo
    let newContent = content.substring(0, content.indexOf('{') + 1) + "\n";
    for (const entry of newEntries) {
        newContent += `  "${entry.key}": "${entry.val}",\n`;
    }
    newContent += "};\n";
    
    fs.writeFileSync(filePath, newContent);
    console.log(`File ${filePath} cleaned. Reduced from ${entries.length} to ${newEntries.length} keys.`);
}

cleanFile('src/data/contents/filosof-a-austera-racional_content.ts');
cleanFile('src/data/contents/buscando-a-dios-joaquin-trincado_content.ts');
cleanFile('src/data/contents/con-cete-a-ti-mismo-joaquin-trincado_content.ts');
