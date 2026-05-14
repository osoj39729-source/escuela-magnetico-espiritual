const fs = require('fs');

const chunksRaw = fs.readFileSync('F:/trincado/01_BIBLIOTECA_DOCTRINAL/Tercera-Etapa-chunks.txt', 'utf8');

// Parse chunks: each block starts with "=== [N] TITLE ==="
const segmentRegex = /=== \[(\d+)\] ([^\n=]+) ===\r?\n([\s\S]*?)(?==== \[|\s*$)/g;

const content = {};
let match;
let count = 0;

while ((match = segmentRegex.exec(chunksRaw)) !== null) {
  const id = parseInt(match[1]);
  const title = match[2].trim();
  const text = match[3].trim();
  const key = `${id}: ${title}`;
  content[key] = text;
  count++;
}

console.log(`Segmentos parseados: ${count}`);
console.log('Primeras 5 claves:');
Object.keys(content).slice(0, 5).forEach(k => console.log(k));
console.log('Últimas 3 claves:');
Object.keys(content).slice(-3).forEach(k => console.log(k));

// Guardar como content.json
fs.writeFileSync(
  'F:/trincado/public/data/contents/tercera-etapa_content.json',
  JSON.stringify(content, null, 2),
  'utf8'
);

console.log('\n✅ tercera-etapa_content.json generado con ' + count + ' segmentos 1:1.');
