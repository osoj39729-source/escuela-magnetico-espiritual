const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "6915: párrafo de los tribunales y los jueces.": {
    "PilotoDeCoherencia": "La justicia debe perseguir la causa del crimen y no solo su efecto. El abandono de la mujer por el hombre libertino y el prejuicio social del 'deshonor' son las causas reales de abortos e infanticidios. La responsabilidad final recae en los líderes religiosos y políticos que sostienen este sistema de opresión.",
    "IdeasSecundarias": [
      "El crimen debe ser pagado prioritariamente por quien genera las condiciones para que ocurra.",
      "La verdad es una medicina amarga necesaria para curar las llagas de la sociedad.",
      "Incluso el Juez se somete a este escrutinio de responsabilidad causal ante el Creador."
    ],
    "CitasIneludibles": [
      "el crimen, debe pagarlo el que es causa de que se cometa.",
      "el hombre libertino que bebe el amor de la mujer y la abandona por no pagar los vidrios rotos"
    ]
  },
  "7185: Párrafo v: los tribunales y los jueces": {
    "PilotoDeCoherencia": "Los tribunales actuales son instituciones de exterminio, no de corrección. Al depender del poder religioso y basarse en juramentos falsos, aniquilan al delincuente impidiendo su redención. La parcialidad judicial protege a las clases privilegiadas mientras aplasta sistemáticamente al oprimido.",
    "IdeasSecundarias": [
      "El juramento en los tribunales es un absurdo que obliga al reo a jurar mentira.",
      "La pena de muerte es un acto criminal contra la voluntad del Padre y el progreso del espíritu.",
      "Un tribunal que juzga faltas que sus propios jueces cometen carece de autoridad moral."
    ],
    "CitasIneludibles": [
      "Los tribunales que juzgan a los hombres... no son tribunales de corrección, sino de exterminio... se le inutiliza para redimirse.",
      "la infiltración inmunda de las religiones en los tribunales hace imposible la reconstrucción"
    ]
  },
  "7086: Párrafo iv: los duelos y el suicidio": {
    "PilotoDeCoherencia": "El duelo es un crimen premeditado nacido del odio y de un falso concepto de honor. La Ley de Amor prohíbe atacar al individuo por sus defectos privados; se deben atacar las causas sistémicas del mal, pero respetar la dignidad del hermano. El honor no se lava con sangre, sino con la rectificación del sentimiento.",
    "IdeasSecundarias": [
      "Los padrinos en un duelo son tan criminales como los protagonistas del acto.",
      "La crítica mordaz y la difamación son prohibidas por la ley de fraternidad universal.",
      "La humanidad sufre de una locura destructiva por su incapacidad de amar al semejante."
    ],
    "CitasIneludibles": [
      "El duelo entre dos personas es un crimen premeditado y radica en el odio escondido en los corazones.",
      "nos está prohibido por la ley de Amor descubrir los defectos del hermano en particular.",
      "Se puede atacar a las causas... pero nunca a los efectos de las causas, que son los hombres individualmente"
    ]
  },
  "7540: Párrafo i: la familia está solo en los espíritus": {
    "PilotoDeCoherencia": "La verdadera familia se forma por afinidad espiritual en el espacio, no por lazos biológicos accidentales. El espíritu encarna en múltiples configuraciones familiares (padre, hijo, hermano) y en diversas razas y clases sociales para aprender la solidaridad y eliminar los resabios del egoísmo primitivo.",
    "IdeasSecundarias": [
      "El amor puro se conquista tras muchas existencias militando en ambos sexos.",
      "Las deudas de vidas pasadas obligan a encarnar en familias antes ofendidas para saldar cuentas en amor.",
      "La reencarnación es el mecanismo divino para enlazar obligaciones y crear nuevas afecciones universales."
    ],
    "CitasIneludibles": [
      "La familia está solo en los espíritus... se forma por atracción y en el espacio, obedeciendo a la ley de afinidad",
      "militando en ambos sexos, siendo padre, madre, hijos y hermanos unos de otros y pasando por todas las razas... riquezas y pobreza"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia del CAU Tomo I (Bloque 13) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Responsabilidad_Causal_en_Justicia": {
    "palabras_clave": ["crimen", "causa", "libertinaje", "abandono", "justicia", "autor"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#6915: párrafo de los tribunales y los jueces."],
    "contexto_real": "Principio legal que desplaza la culpabilidad del ejecutor material hacia el autor intelectual o la causa sistémica que generó el acto."
  },
  "Dignidad_Individual_Fraterna": {
    "palabras_clave": ["duelo", "honor", "individuo", "difamación", "respeto", "hermano"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#7086: Párrafo iv: los duelos y el suicidio"],
    "contexto_real": "Ley de amor que prohíbe atacar personalmente a los seres humanos, limitando la lucha a la erradicación de las causas del error y el vicio."
  },
  "Transversalidad_Familiar_Espiritual": {
    "palabras_clave": ["familia", "reencarnación", "sexos", "razas", "clases", "obligaciones"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#7540: Párrafo i: la familia está solo en los espíritus"],
    "contexto_real": "Ciclo evolutivo donde el espíritu intercambia roles familiares y sociales para alcanzar la comprensión total de la fraternidad universal."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado.');
