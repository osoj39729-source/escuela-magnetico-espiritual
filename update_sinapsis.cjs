const fs = require('fs');
const path = require('path');

const dictPath = path.join(__dirname, 'public', 'data', 'diccionario_sinapsis.json');
let dict = {};
if (fs.existsSync(dictPath)) {
  dict = JSON.parse(fs.readFileSync(dictPath, 'utf8'));
}

const books = [
  'la-revoluci-n-de-m-xico_esencia.json',
  'reglamento-interno-e-m-e-delac--u--1_esencia.json',
  '-1library-co--discurso-obispo-strossmayer_esencia.json'
];

let added = 0;

books.forEach(book => {
  const file = path.join(__dirname, 'public', 'data', 'contents', book);
  if (fs.existsSync(file)) {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    for (const [key, value] of Object.entries(data)) {
      if (value.TemasInterconectados) {
        value.TemasInterconectados.forEach(tema => {
          const norm = tema.trim().toUpperCase();
          if (!dict[norm]) {
            dict[norm] = { nodos: [] };
          }
          if (!dict[norm].nodos.includes(book.replace('_esencia.json', ''))) {
            dict[norm].nodos.push(book.replace('_esencia.json', ''));
            added++;
          }
        });
      }
    }
  } else {
    console.log("No se encontró", file);
  }
});

fs.writeFileSync(dictPath, JSON.stringify(dict, null, 2));
console.log(`Diccionario actualizado. Nuevas conexiones agregadas: ${added}`);
