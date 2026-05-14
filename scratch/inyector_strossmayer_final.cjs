const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/discurso-obispo-strossmayer_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// RE-DESTILACIÓN PURA 1:1 - Discurso del Obispo Strossmayer (Batch 2 - FINAL - Claves 4 a 6)
const nuevosNodos = {
  "004: PRÓLOGO": {
    "PilotoDeCoherencia": "Luz de Justicia. El prólogo de Trincado sitúa el discurso en el contexto del 'Juicio de Mayorías', donde el sol de la verdad alumbra las conciencias para liquidar la tempestad del error religioso.",
    "CitaInelutable": "El sol de la justicia asomó ya sus rayos esplendorosos y la luz de la verdad, sin velo, alumbra las conciencias.",
    "EjemploPedagogico": "El amanecer después de una noche de tormenta eléctrica; la luz no solo permite ver el camino, sino que disipa el miedo a los fantasmas que parecían reales en la oscuridad.",
    "ConexionDoctrinal": ["Juicio de Mayorías", "Luz de la Verdad"],
    "NodosSimapticos": []
  },
  "005: DISCURSO DEL OBISPO STROSSMAYER": {
    "PilotoDeCoherencia": "Demolición del Papado. Strossmayer demuestra ante el Concilio que no hay evidencia en las escrituras de que Pedro fuera Papa o tuviera supremacía, calificando la infalibilidad como una usurpación.",
    "CitaInelutable": "Declaro ante Dios... que ningún vestigio he podido encontrar del Papado, tal como existe ahora... Pedro no fue obispo de Roma ni tuvo supremacía.",
    "EjemploPedagogico": "Un arquitecto que revisa los planos originales de un edificio milenario y descubre que el ático de lujo que el conserje reclama como suyo no figura en ningún plano ni tiene cimientos reales.",
    "ConexionDoctrinal": ["Pedro (Primacía Crítica)", "Roca (Interpretación)"],
    "NodosSimapticos": ["Pedro (Primacía Crítica)", "Roca (Interpretación)"]
  },
  "006: EPÍLOGO": {
    "PilotoDeCoherencia": "Sentencia de la Razón. Trincado juzga a la religión católica como culpable de los males del mundo, llamando a la humanidad a proclamar la Comuna Universal y el Código de Amor.",
    "CitaInelutable": "Los autos procesales... son incontrarrestables... ponen de manifiesto la culpabilidad de la religión católica... proclamando la Comuna Universal.",
    "EjemploPedagogico": "Un juez que cierra un juicio de siglos con una sentencia definitiva: el culpable debe devolver lo robado (el derecho a pensar) y el pueblo debe unirse en una sola familia sin fronteras.",
    "ConexionDoctrinal": ["Código de Amor Universal", "Comuna Universal"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Pedro (Primacía Crítica)": {
    "Definición": "Argumentación teológica e histórica de Strossmayer que desmiente la jerarquía papal. Sostiene que Pedro fue un apóstol igual a los demás, que nunca ejerció autoridad monárquica en Roma y que la 'sucesión' reclamada por el Vaticano es una invención política posterior.",
    "Contexto": "Discurso del Obispo Strossmayer.",
    "Conexiones": ["Igualdad", "Historia", "Apostolado"],
    "Obras": ["Discurso del Obispo Strossmayer"]
  },
  "Roca (Interpretación)": {
    "Definición": "Deslinde hermenéutico sobre la frase 'Sobre esta roca edificaré mi iglesia'. La doctrina trincadista sostiene que la 'roca' es la verdad de la naturaleza humana y espiritual de Jesús, y no la persona física o el cargo de un apóstol.",
    "Contexto": "Discurso del Obispo Strossmayer.",
    "Conexiones": ["Verdad", "Jesús Hombre", "Metafísica"],
    "Obras": ["Discurso del Obispo Strossmayer", "Jesús Hombre y no Dios"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ ¡OBRA COMPLETADA! Inyectado Batch 2 FINAL de Discurso del Obispo Strossmayer (6 nodos 1:1 en total). El Papado juzgado.');
