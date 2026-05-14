const fs = require('fs');
const files = [
    'estatutos-y-reglamentos_esencia.json',
    'discurso-obispo-strossmayer_esencia.json',
    'ley-de-las-mediumnidades-en-general_esencia.json',
    'v-i-d-a---d-e----m-a-r-i-a_esencia.json',
    'jes-s-hombre-y-no-dios_esencia.json',
    'la-revolucion-de-mexico_esencia.json',
    'tercera-etapa_esencia.json'
];

files.forEach(file => {
    const path = `F:/trincado/public/data/contents/${file}`;
    if (!fs.existsSync(path)) {
        console.log(`MISSING: ${file}`);
        return;
    }
    try {
        JSON.parse(fs.readFileSync(path, 'utf8'));
        console.log(`OK: ${file}`);
    } catch (e) {
        console.log(`CORRUPT: ${file} - ${e.message}`);
    }
});
