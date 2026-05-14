import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

async function extract() {
  const buffer = fs.readFileSync('F:/proyectos 2/trincado descargado de github/01_BIBLIOTECA_DOCTRINAL/Buscando-A-Dios-Joaquin-Trincado.pdf');
  const data = await pdf(buffer);
  const text = data.text;
  
  // Extraer líneas que parecen encabezados o párrafos numerados
  // Buscamos: Inicio de línea, número, punto/espacio, letra mayúscula
  const regex = /^\s*\d+[\.\s]+[A-ZÁÉÍÓÚÑ].*$/gm;
  const matches = text.match(regex) || [];
  
  // Limpiar y filtrar
  const cleanThemes = matches
    .map(m => m.trim())
    .filter(m => m.length > 10 && m.length < 200); // Filtro para evitar ruido
    
  console.log('Temas encontrados:', cleanThemes.length);
  fs.writeFileSync('F:/proyectos 2/trincado descargado de github/scratch/temas_buscando_a_dios.json', JSON.stringify(cleanThemes, null, 2));
}
extract().catch(console.error);
