const fs = require('fs');

const text = fs.readFileSync('src/data/contents/buscando-a-dios-joaquin-trincado_content.ts', 'utf8');

const keys = [];
const regex = /^\s{2}"([^"]+)":\s*"([\s\S]{0,300})/gm;
let m;
while ((m = regex.exec(text)) !== null) {
  if (m[1].includes('1198')) {
    console.log(`\n=== CLAVE ENCONTRADA EN EL ARCHIVO: ===\n"${m[1]}"`);
    console.log(`\n=== TEXTO REAL ALMACENADO (Primeros 300 caracteres): ===\n${m[2]}`);
  }
}
