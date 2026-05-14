import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

async function read() {
  const buffer = fs.readFileSync('F:/proyectos 2/trincado descargado de github/01_BIBLIOTECA_DOCTRINAL/Buscando-A-Dios-Joaquin-Trincado.pdf');
  const data = await pdf(buffer);
  console.log(data.text.substring(0, 5000));
}
read().catch(console.error);
