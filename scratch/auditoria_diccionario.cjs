const fs = require('fs');
const dir = 'F:/trincado/public/data/contents/';

// Reconstruir el diccionario sináptico desde TODAS las esencias existentes
// Extrayendo los NodosSimapticos de cada nodo de cada esencia
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

const esenciaFiles = fs.readdirSync(dir).filter(f => f.endsWith('_esencia.json'));
let todosLosNodos = new Set(Object.keys(dic));
let porLibro = {};

esenciaFiles.forEach(file => {
  const libro = file.replace('_esencia.json', '');
  const data = JSON.parse(fs.readFileSync(dir + file, 'utf8'));
  const nodosLibro = [];
  
  Object.keys(data).forEach(clave => {
    const nodo = data[clave];
    // Recoger NodosSimapticos
    if (nodo.NodosSimapticos && Array.isArray(nodo.NodosSimapticos)) {
      nodo.NodosSimapticos.forEach(n => todosLosNodos.add(n));
      nodosLibro.push(...nodo.NodosSimapticos);
    }
    // Recoger ConexionDoctrinal
    if (nodo.ConexionDoctrinal && Array.isArray(nodo.ConexionDoctrinal)) {
      nodo.ConexionDoctrinal.forEach(n => todosLosNodos.add(n));
    }
  });
  
  porLibro[libro] = [...new Set(nodosLibro)];
});

console.log('Total términos únicos detectados en todas las esencias:', todosLosNodos.size);
console.log('Nodos ya en el diccionario:', Object.keys(dic).length);
console.log('');
console.log('Términos por libro:');
Object.keys(porLibro).forEach(libro => {
  console.log(' ' + libro + ': ' + porLibro[libro].length + ' términos');
  porLibro[libro].slice(0,5).forEach(t => console.log('   - ' + t));
});

console.log('');
console.log('Todos los términos únicos a agregar al diccionario:');
[...todosLosNodos].sort().forEach(t => {
  if (!dic[t]) console.log('  FALTA: ' + t);
});
