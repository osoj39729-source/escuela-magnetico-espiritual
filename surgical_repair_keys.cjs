const fs = require('fs');
const INDEX_PATH = 'keys_far.json';
const ESSENCE_PATH = 'public/data/contents/filosof-a-austera-racional_esencia.json';

function normalize(str) {
    if (!str) return "";
    return str.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function repairKeys() {
    const indexKeys = JSON.parse(fs.readFileSync(INDEX_PATH, 'utf8'));
    const essenceData = JSON.parse(fs.readFileSync(ESSENCE_PATH, 'utf8'));
    const newEssenceData = {};
    const missing = [];

    const normalizedEssenceMap = {};
    Object.keys(essenceData).forEach(key => {
        const norm = normalize(key);
        if (norm.length > 2) { // Skip dots, short artifacts
            normalizedEssenceMap[norm] = key;
        }
    });

    indexKeys.forEach(idxKey => {
        const normIdxKey = normalize(idxKey);
        if (normIdxKey.length <= 2) return; // Skip invalid index entries

        if (essenceData[idxKey]) {
            newEssenceData[idxKey] = essenceData[idxKey];
        } 
        else if (normalizedEssenceMap[normIdxKey]) {
            newEssenceData[idxKey] = essenceData[normalizedEssenceMap[normIdxKey]];
        }
        else {
            // Precise partial match: Index key must be a significant part of essence key or vice versa
            let found = false;
            for (const normEssenceKey in normalizedEssenceMap) {
                if ((normIdxKey.length > 10 && normEssenceKey.includes(normIdxKey)) || 
                    (normEssenceKey.length > 10 && normIdxKey.includes(normEssenceKey))) {
                    newEssenceData[idxKey] = essenceData[normalizedEssenceMap[normEssenceKey]];
                    found = true;
                    break;
                }
            }
            if (!found) missing.push(idxKey);
        }
    });

    fs.writeFileSync(ESSENCE_PATH, JSON.stringify(newEssenceData, null, 2));
    console.log(`- Nodos en índice: ${indexKeys.length}`);
    console.log(`- Nodos mapeados: ${Object.keys(newEssenceData).length}`);
    console.log(`- Nodos faltantes: ${missing.length}`);
}

repairKeys();
