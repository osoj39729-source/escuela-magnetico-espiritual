import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

async function extract() {
  const buffer = fs.readFileSync('F:/proyectos 2/trincado descargado de github/01_BIBLIOTECA_DOCTRINAL/Buscando-A-Dios-Joaquin-Trincado.pdf');
  const data = await pdf(buffer);
  const text = data.text;
  const lines = text.split('\n');
  
  // Buscar líneas que contengan CAPITULO, PÁRRAFO o que parezcan títulos numerados
  const structure = lines
    .map(l => l.trim())
    .filter(l => {
      const isChapter = /^(CAP[ÍI]TULO|PÁRRAFO|PARRAFO|EP[ÍI]LOGO|INTRODUCCI[ÓO]N|PR[ÓO]LOGO)/i.test(l);
      const isNumberedHeader = /^\d+\.\s+[A-ZÁÉÍÓÚ]/.test(l); // Ej: "1. La ley..."
      return isChapter || isNumberedHeader;
    })
    .filter(l => l.length < 150); // Evitar párrafos largos que empiecen con número

  console.log(JSON.stringify(structure, null, 2));
}
extract().catch(console.error);
