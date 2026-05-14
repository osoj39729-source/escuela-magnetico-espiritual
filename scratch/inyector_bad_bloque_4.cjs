const fs = require('fs');
const path = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "7502: Párrafo II: Confirmaciones de la Humanidad de Jesús": {
    "PilotoDeCoherencia": "Confirmación histórica y natural de que Jesús es hombre y no Dios. Trincado ratifica que Jesús es hijo legítimo de José el carpintero de Nazaret, desmintiendo el dogma de la Trinidad y la virginidad de María. Los supuestos milagros son explicados como hechos naturales incomprendidos por la ignorancia de la época.",
    "IdeasSecundarias": [
      "Las tradiciones de Galilea y Judea confirman la vida y muerte estrictamente natural de Jesús.",
      "La doctrina dogmática de la Iglesia es destruida al revelarse la paternidad biológica de José.",
      "El espíritu santo no intervino en el nacimiento, el cual siguió las leyes biológicas universales."
    ],
    "CitasIneludibles": [
      "Jesús no es Dios y queda con eso desmentida y deshecha la trinidad y la obra extra del espíritu santo en las entrañas de la virgen.",
      "queda firmado por el propio Padre legítimo y natural de Jesús, José el carpintero de Nazareth"
    ]
  },
  "7598: Párrafo III: La Escuela Esénica de Gamaliel": {
    "PilotoDeCoherencia": "Revelación de que Juan y Jesús se educaron en la Escuela de Gamaliel, centro de sabiduría esénica, astronómica y filosófica. Esta escuela enseñaba los secretos de la vida interminable (reencarnación y eternidad del espíritu), conocimientos que fueron ocultados por la casta sacerdotal para someter a la humanidad mediante el miedo.",
    "IdeasSecundarias": [
      "Los sacerdotes monopolizaron la representación de un Dios 'antropófago' para dominar al pueblo.",
      "Las almas buscan por instinto un Dios en armonía con el sentimiento, lejos de los dogmas irracionales.",
      "José de Arimatea conservó las cartas de José el carpintero que prueban la verdad histórica ocultada por 19 siglos."
    ],
    "CitasIneludibles": [
      "Escuela de Gamaliel; Escuela filosófica y astronómica... ocultas, porque descubría los secretos de una vida interminable",
      "las almas buscan un Dios como el que yo presentí y busqué en su asiento"
    ]
  },
  "7649: Párrafo IV y 7750: Párrafo V: El Anticristo y el Espiritismo como Asiento de Dios": {
    "PilotoDeCoherencia": "Trincado asume la firma del 'Anticristo' como símbolo del espíritu de verdad que niega los falsos poderes divinos del Papa. Define al Espiritismo Racionalista como el verdadero 'Asiento del Dios Amor' y la única Iglesia Universal capaz de unir a todos los mundos y seres bajo una ley de libertad y razón.",
    "IdeasSecundarias": [
      "La excomunión es una herramienta de miedo que solo afecta a quienes aceptan la esclavitud mental de la Iglesia.",
      "La carta de Trincado a Pío X en 1911 fue una 'bomba de papel' que desenmascaró la ceguera del Vaticano.",
      "El Espiritismo es la Kábala progresiva de la antigüedad que restituye al hombre su relación directa con el Creador."
    ],
    "CitasIneludibles": [
      "escribí al propio Papa Pío X negándole poderes divinos, bajo la firma: El Anticristo",
      "El Espiritismo... es la verdadera iglesia universal... convencido que es el 'Asiento del Dios Amor'",
      "la excomunión sólo es impuesta a los débiles... yo, por ser inspirado por el anticristo, soy más fuerte que esa iglesia"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Buscando a Dios (Bloque 4) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Jesus_Hombre_Hijo_de_Jose": {
    "palabras_clave": ["jesús", "josé el carpintero", "paternidad", "hombre", "no dios", "desmentido"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#7502: Párrafo II: Confirmaciones de la Humanidad de Jesús"],
    "contexto_real": "Verdad fundamental del espiritualismo que restituye a Jesús su dimensión humana y misionera, eliminando el dogma de la divinidad."
  },
  "Escuela_Esenica_de_Gamaliel": {
    "palabras_clave": ["esenios", "gamaliel", "juan", "jesús", "enseñanza oculta", "vida interminable"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#7598: Párrafo III: La Escuela Esénica de Gamaliel"],
    "contexto_real": "Centro iniciático donde se formaron los grandes misioneros de la era cristiana en conocimientos astronómicos y espirituales profundos."
  },
  "El_Anticristo_como_Espiritu_de_Verdad": {
    "palabras_clave": ["anticristo", "pío x", "reto", "verdad", "excomunión", "libertad"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#7649: Párrafo IV y 7750: Párrafo V: El Anticristo y el Espiritismo como Asiento de Dios"],
    "contexto_real": "Concepto que representa la negación de los dogmas y poderes eclesiásticos falsos mediante la luz de la razón y la verdad espiritual."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para Buscando a Dios.');
