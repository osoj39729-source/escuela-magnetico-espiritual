const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json';
let esencia = {};

Object.assign(esencia, {
  "99: CAPÍTULO PRIMERO: CONSTITUCIÓN, POR LA QUE SE HACE LA PROCLAMACIÓN DE LA COMUNA. LEY ORGÁNICA": {
    "PilotoDeCoherencia": "Constitución universal decretada por el Juez en nombre de Eloí y bajo el aval del Espíritu de Verdad. Establece la Ley Fundamental que rige la unidad de espíritus encarnados y desencarnados en toda la creación, fundamentada en el Testamento de Abraham y la Alianza eterna del Creador con sus hijos.",
    "IdeasSecundarias": [
      "La Comuna es el régimen de Amor y Ley anunciado por profetas, misioneros y mesías como Jesús.",
      "El Espíritu de Verdad es el garante supremo y el ancla salvadora de esta nueva organización social.",
      "La unidad infinita de los mundos se manifiesta a través de esta Ley Orgánica."
    ],
    "CitasIneludibles": [
      "CONSTITUCIÓN, POR LA QUE SE HACE LA PROCLAMACIÓN DE LA COMUNA. LEY ORGÁNICA",
      "En nombre de 'Eloí', Universal, Dios de Amor, único Creador y Padre común de las infinitas humanidades",
      "bajo el ancla salvadora del Espíritu de Verdad y en su nombre, decreto esta: LEY FUNDAMENTAL"
    ]
  },
  "51: PRESENTACIÓN: El Hombre Trino y la Ley Natural": {
    "PilotoDeCoherencia": "El Código de Amor Universal está destinado al 'Hombre Trino' (espiritista-racionalista), cuya razón se funda en principios naturales inmutables. Esta obra es la base inconmovible de la Comuna, entregada en el momento preciso del fin de la tercera generación de prueba.",
    "IdeasSecundarias": [
      "Las leyes de este código son dictámenes de la recta razón y normas generales para la vida universal.",
      "Aunque mencione elementos materiales anacrónicos, su base espiritual es eterna.",
      "El espiritismo-racionalista es la herramienta de la razón para aplicar estas leyes de bases."
    ],
    "CitasIneludibles": [
      "Leyes de este Código son 'naturales', pues son el 'dictamen de la recta razón'",
      "entregar esta obra a los hombres, en los momentos precisos que la Ley ha marcado, del paso de la tercera generación"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia del CAU Tomo II (Bloque 1) creada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Ley_Fundamental_de_la_Comuna": {
    "palabras_clave": ["constitución", "ley orgánica", "proclamación", "ancla", "eloí", "fundamental"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#99: CAPÍTULO PRIMERO: CONSTITUCIÓN, POR LA QUE SE HACE LA PROCLAMACIÓN DE LA COMUNA. LEY ORGÁNICA"],
    "contexto_real": "Carta magna de la humanidad para el Séptimo Día, decretada por el Juez en nombre de la divinidad y avalada por el Espíritu de Verdad."
  },
  "Hombre_Trino_Racionalista": {
    "palabras_clave": ["hombre trino", "espiritista", "racionalista", "recta razón", "maestría"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#51: PRESENTACIÓN: El Hombre Trino y la Ley Natural"],
    "contexto_real": "Estado evolutivo del ser humano que reconoce su composición de espíritu, alma y cuerpo, actuando bajo la guía de la razón y las leyes naturales."
  },
  "Metodo_Racional_Doctrinal": {
    "palabras_clave": ["método", "racional", "sistema", "plan metódico", "leyes de bases"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#51: PRESENTACIÓN: El Hombre Trino y la Ley Natural"],
    "contexto_real": "Enfoque sistemático basado en principios lógicos y espirituales que sustenta la validez eterna del Código de Amor Universal."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico actualizado para el Tomo II.');
