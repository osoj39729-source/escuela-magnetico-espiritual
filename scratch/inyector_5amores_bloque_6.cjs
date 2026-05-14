const fs = require('fs');
const path = 'F:/trincado/public/data/contents/los-cinco-amores_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "4400: PÁRRAFO XIV: Economía Universal y Omnipotencia": {
    "PilotoDeCoherencia": "La economía universal es la cúspide de la solidaridad espiritual. Consiste en la unidad de todos los espíritus para obrar en armonía con las leyes del Creador (Hellí). Esta unión colectiva otorga la omnipotencia, ya que los seres solidarizados se convierten en ejecutores conscientes de la voluntad universal, trascendiendo las limitaciones de la materia individual.",
    "IdeasSecundarias": [
      "Los 24 ancianos del Apocalipsis simbolizan tanto los libros puros de la sabiduría antigua como las 14 economías científicas.",
      "El Creador es un Padre sin rencor (figurado como el cordero), cuya creación es incesante e infinita.",
      "El hombre tiene como destino habitar y progresar en todos los mundos del universo sin excepción."
    ],
    "CitasIneludibles": [
      "La economía universal... consiste en la unidad de todos los espíritus... solidaridad con todo el universo",
      "la omnipotencia... se obra con todas las fuerzas de los solidarizados",
      "Los mundos son infinitos y el hombre ha de vivir en todos los que existen"
    ]
  },
  "4723: CAPÍTULO OCTAVO: Defensa Heroica vs. Suicidio Fanático": {
    "PilotoDeCoherencia": "El amor a la vida impone la defensa propia y colectiva como un instinto natural. Trincado distingue al héroe racional (quien evita la muerte hasta asegurar el triunfo de su ideal) del fanático religioso (quien busca el martirio por orgullo), catalogando a este último como un suicida y un estorbo para el progreso civilizado.",
    "IdeasSecundarias": [
      "Juan el Bautista y Jesús son ejemplos de héroes que lucharon contra los 'sepulcros blanqueados' sin buscar la muerte inútilmente.",
      "La defensa es una manifestación del amor a la vida y la razón ante la fuerza bruta.",
      "El fanatismo y el suicidio son lunares en el desarrollo de la conciencia humana."
    ],
    "CitasIneludibles": [
      "Los héroes son aquellos que, luchando por un ideal racional, no vacilan ante la muerte; pero no la buscan, la rehuyen cuanto pueden",
      "la defensa es instintiva y demuestra el amor a la vida"
    ]
  },
  "4972: CAPÍTULO NUEVE y 5320: CAPÍTULO DIEZ: Justicia Racional y Expansión del Amor": {
    "PilotoDeCoherencia": "La justicia de la Comuna se fundamenta en el trabajo: 'El que no trabaja, no come'. El amor es una fuerza expansiva innata del espíritu que busca trascender todos los límites (familia, ciudad, región) para cumplir el mandato de acrecentar la Creación. El parásito y el ocioso son enemigos del progreso y carecen de derechos sociales en una justicia equitativa.",
    "IdeasSecundarias": [
      "Las religiones mixtificaron a Dios para justificar la desigualdad, pero el verdadero Padre es ley y amor universal.",
      "El trabajador es el motor del mundo; un mundo sin hombres trabajadores es solo un embrión sin sentido.",
      "El amor a agrandar el amor es el impulso que lleva a la humanidad hacia la fraternidad universal y la paz cosmogónica."
    ],
    "CitasIneludibles": [
      "El que no trabaja no come... verdadero principio de una Justicia Racional",
      "Id, hijos míos, a acrecentar la Creación... venid a mí y siempre os espero",
      "Amor a agrandar el Amor... buscando su ensanche con los de otra ciudad."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Los Cinco Amores (Bloque 6) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Economia_Universal_Omnipotencia": {
    "palabras_clave": ["omnipotencia", "solidaridad universal", "unidad de espíritus", "hellí", "economía universal", "armonía"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#4400: PÁRRAFO XIV: Economía Universal y Omnipotencia"],
    "contexto_real": "Estado de poder espiritual colectivo alcanzado mediante la alineación total con las leyes del Creador y la fraternidad cósmica."
  },
  "Heroicidad_Racional_vs_Fanatismo": {
    "palabras_clave": ["héroe", "mártir", "fanatismo", "defensa", "ideal racional", "suicidio"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#4723: CAPÍTULO OCTAVO: Defensa Heroica vs. Suicidio Fanático"],
    "contexto_real": "Diferenciación ética entre el sacrificio consciente por la verdad y la búsqueda egocéntrica del martirio religioso."
  },
  "El_que_no_trabaja_no_come": {
    "palabras_clave": ["justicia racional", "trabajo", "alimentación", "derecho", "parásito", "equidad"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#4972: CAPÍTULO NUEVE: EL AMOR A LA JUSTICIA EQUITATIVA"],
    "contexto_real": "Máxima de justicia social de la Comuna que vincula el derecho al consumo con la obligación de la producción."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para Los Cinco Amores.');
