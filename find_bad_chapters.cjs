const fs = require('fs');

function findBadChapters(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const chapters = [];
    const regex = /"([^"]+)":\s*"((?:[^"\\]|\\.)*)"/g;
    let m;
    while ((m = regex.exec(content)) !== null) {
        const key = m[1];
        const text = m[2];
        const words = text.split(/\s+/).filter(w => w.length > 0);
        if (words.length > 5) {
            const singleCharWords = words.filter(w => w.length === 1).length;
            const ratio = singleCharWords / words.length;
            if (ratio > 0.4) {
                chapters.push({ key, ratio });
            }
        }
    }
    return chapters;
}

console.log("=== FILOSOFÍA AUSTERA RACIONAL ===");
console.log(JSON.stringify(findBadChapters('src/data/contents/filosof-a-austera-racional_content.ts'), null, 2));

console.log("\n=== CUESTIONARIO ESPIRITA RACIONAL ===");
console.log(JSON.stringify(findBadChapters('src/data/contents/cuestionario-espirita-racional_content.ts'), null, 2));
