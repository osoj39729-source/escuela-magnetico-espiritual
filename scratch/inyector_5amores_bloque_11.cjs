const fs = require('fs');
const path = 'F:/trincado/public/data/contents/los-cinco-amores_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "11881 al 11887: Proclama de la Unidad Universal y Magnetismo Espiritual": {
    "PilotoDeCoherencia": "Trincado proclama la solidaridad universal y la comunización de la Tierra basada en la unidad de la Ley y la Substancia (Éter). Define que 'Todo es Magnetismo Espiritual', la fuerza fundamental que rompe fronteras y establece la igualdad absoluta entre todos los seres, asegurando la marcha evolutiva del planeta fuera de todo abismo destructivo.",
    "IdeasSecundarias": [
      "El magnetismo espiritual es aceptado por el pueblo trabajador y los materialistas como la fuerza real de cohesión social.",
      "La Ley es una sola, con un único principio y un único fin: el Amor Universal.",
      "La comunización del mundo es la consecuencia inevitable de la comprensión de la unidad universal."
    ],
    "CitasIneludibles": [
      "El Universo solidarizado. El Mundo todo, Comunizado.",
      "La Ley es una. La Substancia Una. Uno es el Principio. Uno es el fin.",
      "Todo es Magnetismo Espiritual"
    ]
  },
  "11919: CAPÍTULO SEGUNDO: El Amor sin Acepciones": {
    "PilotoDeCoherencia": "El Amor Universal no permite la distinción de personas por riqueza, posición o apariencia. Trincado recupera la sabiduría de Santiago (su identidad espiritual anterior) para condenar la honra al rico y el desprecio al pobre, estableciendo que el trato al extraño debe ser idéntico al trato familiar. Es el grado máximo de perfección afectiva donde se anula todo exclusivismo.",
    "IdeasSecundarias": [
      "La acepción de personas es una imperfección que se arrastra desde el amor de familia y debe eliminarse en el grado universal.",
      "La ley de Shet sobre el trato al peregrino es la base de la hospitalidad comunista universal.",
      "Hermanos míos: no tengáis la fe en acepción de personas, es el mandato para la raza Adámica."
    ],
    "CitasIneludibles": [
      "El amor sin acepciones para nadie es el tópico de la raza Adámica",
      "no tengáis la fe en Jesús en acepción de personas",
      "Admitiendo en tu casa a todo ciudadano peregrino, dándole trato igual que a cualquier miembro de la familia"
    ]
  },
  "12314: CAPÍTULO TERCERO: El Amor que Anula la Miseria": {
    "PilotoDeCoherencia": "El amor real se demuestra priorizando las necesidades del ser amado sobre las propias. El Amor Universal anula todas las miserias al extender esta responsabilidad individual hacia toda la colectividad humana, incluso hacia aquellos que no conocemos. Es la superación definitiva de la responsabilidad limitada por la sangre o el etnicismo regional.",
    "IdeasSecundarias": [
      "El mérito del Amor Universal reside en cooperar para el bienestar del 99% de seres heterogéneos y desconocidos.",
      "El amor ciudadano y regional son preparativos donde la amistad y el etnicismo aún restan valor al mérito puro del amor.",
      "La anulación de la miseria es un efecto tangible de la práctica del amor racionalista."
    ],
    "CitasIneludibles": [
      "El que ama, antes se cuida de las cosas del ser amado, que de sus propias cosas.",
      "el amor anula todas las miserias",
      "cada individuo del Universo coopera para el 99% de sus comunizados"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Los Cinco Amores (Bloque 11) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Magnetismo_Espiritual_Universal": {
    "palabras_clave": ["magnetismo espiritual", "substancia una", "ley una", "éter", "pantógeno", "solidaridad"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#11881 al 11887: Proclama de la Unidad Universal y Magnetismo Espiritual"],
    "contexto_real": "Fuerza física y espiritual única que constituye el universo y garantiza la cohesión de la Comuna Universal."
  },
  "Amor_sin_Acepcion_de_Personas": {
    "palabras_clave": ["acepción de personas", "igualdad", "santiago", "peregrino", "rico y pobre", "hospitalidad"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#11919: CAPÍTULO SEGUNDO: El Amor no conoce diferencias ni acepciones"],
    "contexto_real": "Imperativo ético de la Comuna que prohíbe cualquier trato preferencial o discriminatorio basado en condiciones externas."
  },
  "El_Amor_Anula_la_Miseria": {
    "palabras_clave": ["miseria", "altruismo", "bien común", "cooperación", "necesidad ajena", "desinterés"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#12314: CAPÍTULO TERCERO: EL AMOR ANULA TODAS LAS MISERIAS"],
    "contexto_real": "Principio operativo donde la abundancia y el bienestar social resultan de la preocupación colectiva por el individuo."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para Los Cinco Amores.');
