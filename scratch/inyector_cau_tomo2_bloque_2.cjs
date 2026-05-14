const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "120: CAPÍTULO 1º al 9º: Proclamación, Solidaridad y Gobierno Universal": {
    "PilotoDeCoherencia": "Queda proclamada la Comuna Universal en la Tierra, regida por la Ley Orgánica del Amor Mutuo. La Tierra se integra a la comunión universal de mundos de luz bajo el Gobierno Universal del Espiritismo, el cual se define como ley natural y no como religión, eliminando dogmas, ritos y jerarquías sacerdotales.",
    "IdeasSecundarias": [
      "El espiritismo es la representación de la verdad eterna que permite la comunicación intermundos constante.",
      "La libertad individual es sagrada, limitada solo por el perjuicio a terceros.",
      "El templo del espiritismo es el universo entero y su altar el corazón humano."
    ],
    "CitasIneludibles": [
      "Queda proclamada la Comuna Universal en el Mundo Tierra... siendo su ley orgánica 'El amor mutuo'",
      "el Espiritismo no es religión; no admite dogmas, cultos ni ritos",
      "el Espíritu de Verdad... es la representación de la verdad eterna"
    ]
  },
  "188: CAP. 10 al 13: Organización de los Consejos y Trabajo Comunal": {
    "PilotoDeCoherencia": "La estructura administrativa de la Comuna se basa en Consejos Regionales y Familiares (urbanos), donde la ciencia y la técnica están al servicio del bienestar común. Se decreta que todo producto del trabajo manual e intelectual es propiedad de la comunidad, siendo el trabajo productivo una ley obligatoria para todos los ciudadanos.",
    "IdeasSecundarias": [
      "Los Consejos aseguran la distribución equitativa de productos según las necesidades regionales.",
      "Ingenieros, médicos y sabios actúan como consultores para el progreso de toda la naturaleza.",
      "La agricultura es la base obligatoria del sustento y el progreso comunal."
    ],
    "CitasIneludibles": [
      "Se declara comunal, todo el producto del trabajo manual y de la inteligencia",
      "todo en todas partes, es de la comunidad y en todas el trabajo productivo es Ley.",
      "toda la comunidad disfrutará en un mismo tiempo del progreso"
    ]
  },
  "292: CAP. 33 al 34: Vigencia, Figuras de Luz y Plazo de Implantación": {
    "PilotoDeCoherencia": "La Carta Fundamental de la Comuna tiene una vigencia eterna para el Séptimo Día, con un periodo de transición de 90 años (tres generaciones) para su reglamentación total. Se reconoce la labor de Juan y Jesús como mártires de la libertad y a María como la Reina del Amor, bajo la vigilancia perpetua del Juez y el Espíritu de Verdad.",
    "IdeasSecundarias": [
      "La implantación total de la Comuna es una facultad delegada al Juez reconocido por el Padre.",
      "La ley es una y la sustancia es una: todo tiene el mismo origen y el mismo fin en el universo.",
      "La inspiración del Espíritu de Verdad es la guía constante para el progreso de la Tierra."
    ],
    "CitasIneludibles": [
      "Esta 'Carta Fundamental de la Comuna en General' regirá al mundo tierra para llevar al fin dichoso del máximo progreso",
      "teniendo siempre nuestros ojos puestos para el amor, en la gran María, reconocida como la reina del Amor",
      "La LEY es una: la Substancia una. Uno es el principio: Uno es el fin."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia del CAU Tomo II (Bloque 2) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Ley_del_Amor_Mutuo": {
    "palabras_clave": ["amor mutuo", "ley orgánica", "comuna", "artículo 1", "justicia"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#120: CAPÍTULO 1º al 9º: Proclamación, Solidaridad y Gobierno Universal"],
    "contexto_real": "Eje central de la convivencia comunal que sustituye a las leyes de coerción por la fraternidad consciente."
  },
  "Trabajo_Comunal_Obligatorio": {
    "palabras_clave": ["trabajo", "obligatorio", "productivo", "propiedad comunal", "inteligencia"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#188: CAP. 10 al 13: Organización de los Consejos y Trabajo Comunal"],
    "contexto_real": "Deber universal de aportar al bienestar común mediante el esfuerzo físico o intelectual, eliminando el parasitismo social."
  },
  "Maria_Reina_del_Amor": {
    "palabras_clave": ["maría", "reina del amor", "consejo", "guía", "corazón"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#292: CAP. 33 al 34: Vigencia, Figuras de Luz y Plazo de Implantación"],
    "contexto_real": "Reconocimiento de la figura de María como el arquetipo del amor puro y guía espiritual de la humanidad comunizada."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para el Tomo II.');
