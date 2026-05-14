import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

async function analyze() {
  const buffer = fs.readFileSync('F:/proyectos 2/trincado descargado de github/01_BIBLIOTECA_DOCTRINAL/Buscando-A-Dios-Joaquin-Trincado.pdf');
  const data = await pdf(buffer);
  const text = data.text;
  
  // Buscar líneas que empiecen por número seguido de punto o espacio
  // Por ejemplo: "1. ", "1- ", "1 "
  const lines = text.split('\n');
  const themes = lines.filter(line => /^\s*\d+[\.\-\s]/.test(line.trim()));
  
  console.log('Total de líneas numeradas encontradas:', themes.length);
  console.log('--- PRIMEROS 10 ---');
  console.log(themes.slice(0, 10));
  console.log('--- ÚLTIMOS 10 ---');
  console.log(themes.slice(-10));
}
analyze().catch(console.error);
