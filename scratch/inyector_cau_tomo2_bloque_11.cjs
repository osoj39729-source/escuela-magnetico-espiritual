const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "3760: ARTÍCULO 1º al 2º: Pascua de la Verdad y Fiestas Universales": {
    "PilotoDeCoherencia": "Se establece la 'Pascua de la Verdad' del 1 al 7 de abril como la fiesta máxima de la Comuna. Durante esta semana, la humanidad se une en regocijo fraternal, saludando al Sol (centro progenitor) y a los hermanos de Sión mediante himnos y coros. Es un tiempo de solaz que honra la cadena de misioneros y mesías que trajeron la libertad a la Tierra.",
    "IdeasSecundarias": [
      "El Himno a Sión invita a participar del regocijo a todos los mundos del plano primero.",
      "Cada día se dedica a una etapa de la historia espiritual: de Adán y Abraham hasta Juan y Jesús.",
      "Las fiestas antiguas (místicas o de vanagloria) son sustituidas por la alegría racional del espíritu."
    ],
    "CitasIneludibles": [
      "fiesta máxima... se denominará 'Pascua de la Verdad' y empieza el 1º de abril y termina el 7 en la noche.",
      "todos los coros de las casas comunales saludarán al astro nuestro centro progenitor... se cantará el Himno a Sión"
    ]
  },
  "4027: CAPÍTULO TRECE y 4266: Ley de Tránsito de los Seres": {
    "PilotoDeCoherencia": "La desencarnación es el acto más amoroso de la ley divina, restituyendo al espíritu a su vida real y consciente. Se prohíbe el lucro religioso o gubernamental sobre la muerte. Solo el Creador dispone la hora del tránsito; acortar la vida por negligencia, exceso o falta de higiene es un delito de responsabilidad contra la ley de justicia.",
    "IdeasSecundarias": [
      "El miedo a la muerte es una invención de las religiones para explotar pecuniariamente al hombre.",
      "Se definen como delitos de responsabilidad: los excesos físicos, la tristeza egoísta, la soledad y las lecturas fantásticas.",
      "El espíritu liberto evalúa sus actos de encarnado bajo la luz de su propia conciencia en el espacio."
    ],
    "CitasIneludibles": [
      "El tránsito del espíritu encarnado a la vida de espíritu liberto, es un acto amoroso de la ley divina",
      "Constituye delito de responsabilidad... todo exceso... la falta de higiene... la tristeza que significa disconformidad",
      "la muerte... se ha aprovechado de estos actos... para llenar su botín y vivir a costa de los muertos"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia del CAU Tomo II (Bloque 11) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Pascua_de_la_Verdad": {
    "palabras_clave": ["1 de abril", "7 de abril", "pascua", "fiesta máxima", "himno a sión", "sol"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#3760: ARTÍCULO 1º al 2º: Pascua de la Verdad y Fiestas Universales"],
    "contexto_real": "Celebración anual de la liberación espiritual de la humanidad y su integración en el concierto de mundos de luz."
  },
  "Ley_de_Transito_Espiritual": {
    "palabras_clave": ["desencarnación", "muerte", "tránsito", "espíritu liberto", "vida real", "amor divino"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#4027: CAPÍTULO TRECE y 4266: Ley de Tránsito de los Seres"],
    "contexto_real": "Proceso natural de regreso del espíritu al espacio, despojado de los miedos y ritos impuestos por las religiones."
  },
  "Delitos_de_Responsabilidad_Vital": {
    "palabras_clave": ["delito", "exceso", "tristeza", "soledad", "higiene", "responsabilidad", "muerte prematura"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#4027: CAPÍTULO TRECE y 4266: Ley de Tránsito de los Seres"],
    "contexto_real": "Acciones u omisiones que atentan contra la salud y el tiempo de vida asignado por el Creador para la misión del espíritu en la Tierra."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para el Tomo II.');
