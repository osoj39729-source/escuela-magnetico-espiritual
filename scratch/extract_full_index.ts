import fs from 'fs';

const text = fs.readFileSync('F:/proyectos 2/trincado descargado de github/scratch/buscando_a_dios_full.txt', 'utf8');
const lines = text.split('\n');
const results = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (/^CAP[ÍI]TULO|P[ÁA]RRAFO|EP[ÍI]LOGO|INTRODUCCI[ÓO]N|PR[ÓO]LOGO/i.test(line)) {
    // Es un encabezado
    let fullHeader = line;
    // Si la siguiente línea no es un párrafo vacío y es corta, probablemente es el título
    if (i + 1 < lines.length) {
      const nextLine = lines[i + 1].trim();
      if (nextLine.length > 0 && nextLine.length < 100 && !/^P[ÁA]RRAFO/i.test(nextLine)) {
        fullHeader += ': ' + nextLine;
        // Y tal vez la siguiente línea también (algunos títulos tienen 2 líneas)
        if (i + 2 < lines.length) {
          const nextNext = lines[i + 2].trim();
          if (nextNext.length > 0 && nextNext.length < 80 && !nextLine.includes(':') && !/^[A-Z]/.test(nextNext.split(' ')[0])) {
             // fullHeader += ' ' + nextNext; // Solo si parece continuación
          }
        }
      }
    }
    results.push(fullHeader);
  }
}

// Filtrar ruido (páginas, etc)
const filtered = results.filter(h => h.length < 150 && !h.includes('http') && !h.includes('Editado'));

console.log(JSON.stringify(filtered, null, 2));
