import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

async function check() {
  const files = [
    'Buscando-A-Dios-Joaquin-Trincado.pdf',
    'cuestionario espirita racional.pdf'
  ];
  
  for (const f of files) {
    console.log(`Checking ${f}...`);
    const buffer = fs.readFileSync(`F:/proyectos 2/trincado descargado de github/01_BIBLIOTECA_DOCTRINAL/${f}`);
    const data = await pdf(buffer);
    const text = data.text;
    
    // Buscar la palabra "Indice" o "Índice"
    const hasIndice = /Indice|Índice/i.test(text);
    // Buscar el número 112 seguido de un punto
    const has112 = /\n\s*112\s*\./.test(text);
    
    console.log(`  Has "Indice": ${hasIndice}`);
    console.log(`  Has "112.": ${has112}`);
    
    if (has112) {
      const index = text.indexOf('112.');
      console.log(`  Context near 112.: ${text.substring(index - 100, index + 200)}`);
    }
  }
}
check().catch(console.error);
