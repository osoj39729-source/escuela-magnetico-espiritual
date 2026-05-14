const fs = require('fs');
const path = 'F:/proyectos 2/trincado descargado de github/src/data/contents/espiritismo-en-su-asiento_content.ts';

const contentStr = fs.readFileSync(path, 'utf8');
const match = contentStr.match(/(export const espiritismo_en_su_asiento_content = )(\[[\s\S]*\]);/);

if (!match) {
    console.log("Could not parse file.");
    process.exit(1);
}

const prefix = match[1];
const jsonStr = match[2];
let data = eval(jsonStr);

// Helper to determine if a fragment is an orphan
function isOrphan(title) {
    if (!title) return true;
    
    // If it starts with a lowercase letter, it's definitely a broken sentence
    if (/^[a-z]/.test(title)) return true;

    // Specific anomalous titles identified
    const anomalies = [
        "Misionera, siempre fué su brazo fuerte.: V",
        "Concepción de Arena(1).: VI Junio 2 de 1912. Por el",
        "EL MAESTRO JUEZ: IX",
        "Amor, paz, unión en Eloí.",
        "MACTHEUIX.",
        "Acotaciones:",
        "X (escribe y proclama la ley y el axioma.)",
        "III (CAPÍTULO V: Explicación del espiritismo)",
        "IV (CAPÍTULO V: Explicación del espiritismo)",
        "V (CAPÍTULO V: Explicación del espiritismo)",
        "VI (CAPÍTULO V: Explicación del espiritismo)",
        "II (PARTE TERCERA: El derecho de los espíritus: Al"
    ];

    if (anomalies.includes(title) || anomalies.some(a => title.startsWith(a))) return true;

    // Titles like "PÁRRAFO I (CAPITULO III..." or similar might be okay or might need cleaning, but let's just focus on pure orphans.
    return false;
}

let cleanedData = [];
let currentFragment = null;

for (let i = 0; i < data.length; i++) {
    const item = data[i];
    
    if (isOrphan(item.title)) {
        if (currentFragment) {
            currentFragment.content += "\n\n" + item.content;
            console.log(`Merged orphan [${i}] "${item.title}" into "${currentFragment.title}"`);
        } else {
            console.log(`Warning: Orphan at beginning [${i}] "${item.title}" - keeping as is`);
            cleanedData.push(item);
            currentFragment = item;
        }
    } else {
        // Fix up specific titles that have extra baggage but aren't pure orphans
        let newTitle = item.title;
        if (newTitle.startsWith("PÁRRAFO I (CAPITULO III")) newTitle = "PÁRRAFO I";
        if (newTitle.startsWith("PÁRRAFO V: ¿A dónde va? (CAPITULO III")) newTitle = "PÁRRAFO V: ¿A dónde va?";
        
        item.title = newTitle;
        cleanedData.push(item);
        currentFragment = item;
    }
}

const newJsonStr = JSON.stringify(cleanedData, null, 2);
const newContentStr = contentStr.replace(match[0], prefix + newJsonStr + ";");

fs.writeFileSync(path, newContentStr, 'utf8');
console.log("Successfully cleaned and saved " + path);
