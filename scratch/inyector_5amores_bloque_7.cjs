const fs = require('fs');
const path = 'F:/trincado/public/data/contents/los-cinco-amores_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "6664: CAPÍTULO QUINTO: La Trinidad Racional y el Amor a la Naturaleza": {
    "PilotoDeCoherencia": "Trincado establece la verdadera Trinidad Racional que anula el dogma religioso. El Macrocosmo se compone de Creador, Naturaleza y Espíritu. El Microcosmo (el hombre) se compone de Espíritu, Alma y Cuerpo. La Naturaleza es la madre de la materia y el Espíritu es su administrador, debiendo este último ganar sus dones mediante el trabajo digno.",
    "IdeasSecundarias": [
      "La Naturaleza no entrega sus secretos ni sus leyes a quien no demuestra ser digno por su conducta.",
      "El Creador entregó a la Naturaleza el rigor y la justicia de los frutos materiales.",
      "El hombre en su infancia recibe todo de la Naturaleza, pero al crecer debe conquistar su progreso por el esfuerzo."
    ],
    "CitasIneludibles": [
      "Creador, Naturaleza y Espíritu, es la Trinidad del Macrocosmo",
      "Espíritu, Alma y Cuerpo [es la Trinidad] del Microcosmo",
      "la naturaleza... es la madre de todo lo material, pero hija igual del Creador que el espíritu"
    ]
  },
  "6416: CAPÍTULO CUARTO: Belleza y Cruce de Etnicismos": {
    "PilotoDeCoherencia": "El amor a la belleza es una necesidad del espíritu que impulsa la evolución estética de la humanidad. Esta ley impone el cruce de etnicismos (razas) para elevar el tipo ideal humano. El espíritu es el único autor de la belleza y convence a los instintos conservadores de la materia para transmutarse en formas superiores.",
    "IdeasSecundarias": [
      "El pensamiento de belleza se materializa a través de la voluntad y el deseo del espíritu.",
      "Los instintos de la materia se resisten al cambio, pero ceden ante el raciocinio del espíritu que promete mayor belleza.",
      "El cruce racial es la herramienta biológica para disolver prejuicios y mejorar la salud de la especie."
    ],
    "CitasIneludibles": [
      "El amor a la belleza... impone el cruce del etnicismo",
      "el espíritu es... el autor de la belleza.",
      "la materia... se somete y consiente en su transmutación... a causa de un raciocinio"
    ]
  },
  "5817: CAPÍTULO SEGUNDO y 6864: CAPÍTULO SEXTO: Motores del Progreso y Expansión": {
    "PilotoDeCoherencia": "El progreso humano es impulsado por la 'Santa Necesidad' y la 'Santísima Curiosidad'. La necesidad obliga al trabajo y este a la búsqueda de economía de tiempo y fuerzas, lo que genera ciencia. Solo el trabajo productivo otorga derecho al consumo. El amor expansivo es el mandato del espíritu de habitar toda la tierra y afinizarse con sus hermanos.",
    "IdeasSecundarias": [
      "El dinero no es el aliciente real del progreso, sino la curiosidad racional y la necesidad de bienestar.",
      "La comunicación es un don vital, especialmente en la mujer, que alivia las penas y fundamenta la amistad.",
      "La misantropía y el aislamiento son contrarios a la ley del espíritu que manda vivir en todas partes."
    ],
    "CitasIneludibles": [
      "la necesidad bendita, nos obliga al trabajo; y el trabajo nos lleva al progreso",
      "Sólo el trabajo productivo regenera y da derecho al consumo.",
      "¿Conocéis a Santa NECESIDAD? ¿No os habéis enamorado nunca de la Santísima Curiosidad?",
      "el espíritu... tiene mandado vivir en todas partes"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Los Cinco Amores (Bloque 7) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Trinidad_Racional_Macro_Micro": {
    "palabras_clave": ["trinidad", "creador", "naturaleza", "espíritu", "alma", "cuerpo", "macrocosmo", "microcosmo"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#6664: CAPÍTULO QUINTO: La Trinidad Racional y el Amor a la Naturaleza"],
    "contexto_real": "Estructura tripartita del universo y del hombre que sustituye la mitología religiosa por una ontología racional."
  },
  "Cruce_de_Etnicismos_Belleza": {
    "palabras_clave": ["cruce", "razas", "etnicismo", "belleza", "tipo ideal", "transmutación"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#6416: CAPÍTULO CUARTO: Belleza y Cruce de Etnicismos"],
    "contexto_real": "Proceso evolutivo biológico y espiritual que busca la unificación estética y genética de la humanidad."
  },
  "Santa_Necesidad_y_Curiosidad": {
    "palabras_clave": ["necesidad", "curiosidad", "progreso", "trabajo", "investigación", "aliciente"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#5817: CAPÍTULO SEGUNDO y 6864: CAPÍTULO SEXTO: Motores del Progreso y Expansión"],
    "contexto_real": "Fuerzas instintivas y espirituales que obligan al ser humano a trabajar y descubrir las leyes de la creación."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para Los Cinco Amores.');
