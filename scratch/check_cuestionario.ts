import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

async function read() {
  const buffer = fs.readFileSync('F:/proyectos 2/trincado descargado de github/01_BIBLIOTECA_DOCTRINAL/cuestionario espirita racional.pdf');
  const data = await pdf(buffer);
  const text = data.text;
  const matches = text.match(/^\d+\.\s+/gm);
  console.log("Total preguntas numeradas:", matches ? matches.length : 0);
  console.log(text.substring(0, 5000));
}
read().catch(console.error);
