const fs = require('fs');

const content = JSON.parse(fs.readFileSync('F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_content.json', 'utf8'));
const esencia = JSON.parse(fs.readFileSync('F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json', 'utf8'));

const contentIds = Object.keys(content).map(k => k.split(':')[0].trim());
const esenciaIds = Object.keys(esencia);

const missing = contentIds.filter(id => !esenciaIds.includes(id));

console.log(`--- ANALISIS DE COBERTURA TOMO 2 ---`);
console.log(`IDs en Contenido: ${contentIds.length}`);
console.log(`IDs en Esencia: ${esenciaIds.length}`);
console.log(`IDs faltantes: ${missing.length}`);
if (missing.length > 0) {
    console.log(`Lista de IDs faltantes: ${missing.join(', ')}`);
}
