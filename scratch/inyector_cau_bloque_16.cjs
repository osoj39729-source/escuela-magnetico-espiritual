const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "8753: Apéndice: consulta al Espíritu de Verdad y Francisco Javier": {
    "PilotoDeCoherencia": "El Espíritu de Verdad revela sus encarnaciones históricas, destacando su paso como Francisco Javier en Navarra (1506). Explica que su sabiduría fue ganada en mundos de expiación y consolidada en Sión, donde se unió al amor de Eloí para traer la verdad desnuda a la Tierra en el día del juicio.",
    "IdeasSecundarias": [
      "Los nombres son pasajeros; lo que importa es el progreso del espíritu a través de las edades.",
      "La misión de Javier fue un premio a sus padres, guerreros de la libertad.",
      "El espíritu de verdad actúa como preceptor de la humanidad en ciencias y filosofía espiritual."
    ],
    "CitasIneludibles": [
      "fui Xavier, Poncio, Aufer y más nombres... Pero me llaman todas las constelaciones... El Espíritu de Verdad.",
      "Llegué por mi progreso en mundos de expiación... Y me hice asiento en Sión. Allí estudié la grande cosmogonía"
    ]
  },
  "8921: Pero me llaman todas las constelaciones: El Espíritu de Verdad y Sión": {
    "PilotoDeCoherencia": "Sión (identificada como Sirio) es el centro de sabiduría cosmogónica de donde proviene la luz actual de la Tierra. Allí aprendió Jesús y allí se reparten los dones del Padre con justicia. El Espíritu de Verdad confiesa haber descendido de Neptuno para entregar a la humanidad el ancla de la alianza y la insignia de la luz.",
    "IdeasSecundarias": [
      "Maestros de 7 ½ nebulosas asisten a la Tierra para decretar la justicia de los hombres.",
      "Sión es una esfera de luz, dicha y belleza infinita donde se estudia la filosofía universal.",
      "La comunicación entre Sión y la Tierra es el canal por el cual se recibe la sabiduría para el Séptimo Día."
    ],
    "CitasIneludibles": [
      "Mucho hube aprender en Sirio como lo llama la tierra... Sión lo llama la cosmogonía... Allí aprendió la verdad Jesús",
      "¿De qué mundo vine a vuestro mundo?... descendí de Neptuno.",
      "me entregaron el ancla que es del Padre la alianza y la insignia de la Luz"
    ]
  },
  "9042: Que en Sión esta el consejo: El Juez y la Alianza de la Luz": {
    "PilotoDeCoherencia": "El Juez asume la pesadez de las miserias humanas para entregar el néctar de la solidaridad. La batalla final contra los 'lobos' del dogma requiere perspicacia y valor. Aunque el hombre se sienta pequeño ante la majestad del universo, su amor es tan grande que puede abarcar el infinito y conquistar el progreso eterno.",
    "IdeasSecundarias": [
      "La maldad se atrincherará para defender sus privilegios, pero la luz del espíritu se aprovechará incluso de las tinieblas.",
      "El objetivo no es adorar a Jesús, sino convertir a cada hombre en un obrero consciente del ser.",
      "La solidaridad es la única fuerza capaz de vencer la maraña de los 'murciélagos de la noche'."
    ],
    "CitasIneludibles": [
      "Vengo a traer la Ley de amor... no soy cobarde; soy precavido porque oigo el fiero aullido del lobo",
      "Quiero darle el néctar de la solidaridad... La batalla que falta es de lobos fuertes.",
      "¡Qué pequeñito que soy!... Pero mi amor es tan grande que lo abarca todo eso"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia del CAU Tomo I (Bloque 16) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Sion_Sirio": {
    "palabras_clave": ["sión", "sirio", "consejo", "jesús", "maestros", "nebulosas", "centro de luz"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#8921: Pero me llaman todas las constelaciones: El Espíritu de Verdad y Sión"],
    "contexto_real": "Sede de la sabiduría cosmogónica del plano primero y lugar de origen de las enseñanzas que Jesús trajo a la Tierra."
  },
  "Emigracion_Neptuniana": {
    "palabras_clave": ["neptuno", "espíritu de verdad", "descenso", "misión", "ancla de la alianza"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#8921: Pero me llaman todas las constelaciones: El Espíritu de Verdad y Sión"],
    "contexto_real": "Referencia al origen planetario inmediato del Espíritu de Verdad antes de su misión final en la Tierra."
  },
  "Nectar_de_la_Solidaridad": {
    "palabras_clave": ["solidaridad", "néctar", "unión", "obrero consciente", "batalla final"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#9042: Que en Sión esta el consejo: El Juez y la Alianza de la Luz"],
    "contexto_real": "Fuerza espiritual y social que unifica a la humanidad en la Comuna, disolviendo los odios sembrados por las religiones."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado.');
