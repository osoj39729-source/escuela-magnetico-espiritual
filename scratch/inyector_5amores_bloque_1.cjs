const fs = require('fs');
const path = 'F:/trincado/public/data/contents/los-cinco-amores_esencia.json';
let esencia = {};

Object.assign(esencia, {
  "201: PRIMERA PARTE y 206: El Amor de Familia y la Base Social": {
    "PilotoDeCoherencia": "El amor de familia es la base de la organización social, pero se define como el más imperfecto de los amores por su tendencia al egoísmo consanguíneo. Nace de la atracción biológica (amor de la carne) para asegurar la preservación de la especie y la compensación de deudas espirituales en el primer núcleo educativo del ser.",
    "IdeasSecundarias": [
      "El instinto sexual es el motor primario que obliga a los seres a agruparse y asumir responsabilidades.",
      "La familia debe ser el taller donde el espíritu aprenda las primeras lecciones de convivencia y deber.",
      "La perfección del amor familiar se alcanza solo cuando se trasciende el lazo de sangre hacia la fraternidad universal."
    ],
    "CitasIneludibles": [
      "El amor de la familia es el más imperfecto",
      "EL AMOR DE LA FAMILIA ES LA BASE DE LA SOCIEDAD",
      "EL AMOR DE LA CARNE IMPONE LA FAMILIA"
    ]
  },
  "1239: CAPITULO QUINTO: El Amor de Hermano como Ley Universal": {
    "PilotoDeCoherencia": "El amor de hermano es la ley por entero, pues reconoce el parentesco espiritual que une a todos los seres como hijos del mismo Creador (Hellí). Rompe con las jerarquías sociales basadas en la posición o el vestido, afirmando que el obrero productor representa generalmente a un espíritu más progresado que el que ostenta dignidades vacías.",
    "IdeasSecundarias": [
      "No existe diferencia espiritual real entre el sabio y el barrendero; ambos son hermanos en diferentes grados de cumplimiento de deber.",
      "El parentesco espiritual es superior al consanguíneo y es el que rige en los mundos de luz.",
      "Los 'ángeles' y 'demonios' de Abraham son hermanos en distintos estados de evolución y luz."
    ],
    "CitasIneludibles": [
      "EL AMOR DE HERMANO ES LA LEY POR ENTERO",
      "No hace la posición del hombre categorías en los hombres",
      "hace la posición del hombre categorías en los hombres, digo yo por deducción lógica"
    ]
  },
  "941: CAPITULO CUARTO y 1686: CAPITULO SÉPTIMO: Trabajo y Amor Propio": {
    "PilotoDeCoherencia": "El amor a los hijos impone el trabajo como un deber ineludible y sagrado, ya que los hijos son el desdoblamiento de los padres y el sello de la ley suprema. El amor propio, junto con la curiosidad, actúa como el acicate del progreso humano, impulsando al ser hacia la pulcritud, el estudio y la superación de sus propias limitaciones.",
    "IdeasSecundarias": [
      "El trabajo por amor a los hijos no asusta ni cansa, pues se realiza para el propio ser multiplicado.",
      "La curiosidad conveniente es el deseo de saber y conocer, motor fundamental de la ciencia.",
      "El amor propio inconveniente se manifiesta en la vanidad y la soberbia, que detienen el crecimiento espiritual."
    ],
    "CitasIneludibles": [
      "EL AMOR DE LOS HIJOS IMPONE EL TRABAJO",
      "El amor propio, con la curiosidad, es el acicate más potente del progreso.",
      "un hijo es efecto de la fusión de las almas de sus progenitores"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Los Cinco Amores (Bloque 1) creada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Amor_de_Familia_Imperfecto": {
    "palabras_clave": ["familia", "imperfecto", "carne", "consanguinidad", "base social", "egoísmo"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#201: PRIMERA PARTE y 206: El Amor de Familia y la Base Social"],
    "contexto_real": "Nivel inicial del afecto humano que debe evolucionar hacia la fraternidad universal para no estancarse en el clan."
  },
  "Amor_de_Hermano_Ley_Entera": {
    "palabras_clave": ["hermano", "ley por entero", "igualdad", "obrero", "espíritu", "parentesco espiritual"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#1239: CAPITULO QUINTO: El Amor de Hermano como Ley Universal"],
    "contexto_real": "Principio fundamental de la Comuna que reconoce la igualdad intrínseca de todos los seres como hermanos espirituales."
  },
  "Amor_Propio_Acicate_Progreso": {
    "palabras_clave": ["amor propio", "curiosidad", "progreso", "acicate", "dignidad", "superación"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#941: CAPITULO CUARTO y 1686: CAPITULO SÉPTIMO: Trabajo y Amor Propio"],
    "contexto_real": "Fuerza interna que impulsa al individuo a mejorar su condición, buscar el conocimiento y dignificar su existencia."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para Los Cinco Amores.');
