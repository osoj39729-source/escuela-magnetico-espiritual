const fs = require('fs');

const buf = fs.readFileSync('src/data/contents/buscando-a-dios-joaquin-trincado_content.ts');
const str = buf.toString('utf8');

const regex = /^\s{2}"([^"]+)":\s*"([\s\S]{0,300})/gm;
let m;
while ((m = regex.exec(str)) !== null) {
  if (m[1].includes('1198')) {
    console.log("=== BYTES DE LA CLAVE ===");
    console.log(Buffer.from(m[1], 'utf8'));
    console.log("=== BYTES DEL TEXTO ===");
    console.log(Buffer.from(m[2], 'utf8'));
    
    // Check for weird invisible chars
    let hasWeird = false;
    for (let i = 0; i < m[2].length; i++) {
      const code = m[2].charCodeAt(i);
      if (code < 32 && code !== 10 && code !== 13 && code !== 9) {
         console.log(`WEIRD CHAR at index ${i}: code ${code}`);
         hasWeird = true;
      }
    }
    if (!hasWeird) console.log("NO invisible weird chars found.");
  }
}
