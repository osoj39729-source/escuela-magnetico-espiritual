const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-2_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Filosofía Enciclopédica Universal Tomo 2 (Batch 6 - Claves 63 a 77)
const nuevosNodos = {
  "6487: Marzo 3 de 1912  (Portillo) - Mahoma": {
    "PilotoDeCoherencia": "Trueno de Justicia Mahometana. El juicio a la religión de Mahoma resuena en los espacios como un trueno formidable, llamando a la responsabilidad espiritual sobre el credo.",
    "CitaInelutable": "Juicio... Resuena en todas partes como formidable trueno, primero sobre el espíritu.",
    "EjemploPedagogico": "Un gran gong que suena en el desierto y hace que todos los que seguían una caravana equivocada se detengan a mirar el mapa real de la ley.",
    "ConexionDoctrinal": ["Juicio a las Religiones", "Mahoma (Contexto Espiritual)"],
    "NodosSimapticos": []
  },
  "6693: Marzo 3 de 1912 (Portillo) - Sholis Sholis del mundo Eg Eg.": {
    "PilotoDeCoherencia": "Conmoción Cosmogónica. Sholis (del mundo Eg Eg) cuestiona la agitación en todo el Universo provocada por la aplicación de la ley inflexible sobre la Tierra.",
    "CitaInelutable": "¿Por qué Padre Universal éste clamoreo, ésta agitación en todo el Universo?",
    "EjemploPedagogico": "Un terremoto en una isla pequeña que hace vibrar el suelo de todo el continente, despertando la curiosidad de los vecinos de otras tierras lejanas.",
    "ConexionDoctrinal": ["Ley Inflexible", "Universo Solidario"],
    "NodosSimapticos": ["Mundo Eg Eg / Gof Duf (Geografía Espiritual)"]
  },
  "7131: Marzo  11  de  1912  (Portillo) - Hombre real.  En Sevilla.": {
    "PilotoDeCoherencia": "Vergüenza de la Desnudez. Los corruptores se presentan a juicio abrumados por la visibilidad de sus debilidades en el espacio, donde no existen velos para ocultar el mal.",
    "CitaInelutable": "Somos señalados por la desnudez en que andamos; ni un simple velo que cobra nuestras vergüenzas.",
    "EjemploPedagogico": "Entrar en una habitación llena de espejos y luz potente llevando un traje sucio; no hay rincón donde esconder la mancha.",
    "ConexionDoctrinal": ["Desnudez del Espíritu", "Justicia de la Conciencia"],
    "NodosSimapticos": ["Desnudez del Espíritu"]
  },
  "7493: Marzo 13  de 1912 - El  Juez.": {
    "PilotoDeCoherencia": "Advertencia a Mistificadores. Se detecta la falsedad de los espíritus que fingen acatamiento; se les advierte que el Juicio Universal del 5 de Abril será inapelable.",
    "CitaInelutable": "No lo creo en su acatamiento de la ley... Les queda tiempo de reflexionar hasta el 5 de Abril.",
    "EjemploPedagogico": "El alumno que finge estudiar para engañar al profesor, pero el profesor sabe que el examen final es en pocos días y no habrá excusas que valgan.",
    "ConexionDoctrinal": ["Mistificadores (Categoría)", "Juicio Universal del 5 de Abril"],
    "NodosSimapticos": ["Mistificadores (Categoría)"]
  },
  "7508: Marzo 15 de 1912  (Portillo) - Joaquín  Trincado.": {
    "PilotoDeCoherencia": "Atracción por la Justicia. Xeim explica que cruza nebulosas y sistemas atraído por la sacudida cosmogónica de la justicia en la Tierra, un mundo ínfimo pero hoy central.",
    "CitaInelutable": "¿Por qué cruzo en rápido vuelo... para llegar a un mundo ínfimo? Por la justicia, por la atracción.",
    "EjemploPedagogico": "Un imán gigante que se activa en un grano de arena y atrae la atención de todas las limaduras de hierro de la playa.",
    "ConexionDoctrinal": ["Atracción Magnética", "Sacudida Cosmogónica"],
    "NodosSimapticos": []
  },
  "7813: A  continuación  se  presento  en  Juicio la fracción de disidentes mahometanos...": {
    "PilotoDeCoherencia": "Partida a Sión. Los disidentes que aceptan la justicia tras reflexionar son autorizados a partir hacia Sión (estado de luz/rehabilitación).",
    "CitaInelutable": "Venimos convencidos de la justicia... y partieron a Sión.",
    "EjemploPedagogico": "Presos que tras cumplir su condena de reflexión, salen por la puerta de la cárcel hacia un campo de trabajo productivo y libre.",
    "ConexionDoctrinal": ["Sión (Destino Espiritual)", "Rehabilitación por Reflexión"],
    "NodosSimapticos": ["Sión (Destino Espiritual)"]
  },
  "7878: Marzo 24 de 1912  (Hora 20)  (Portillo) - Cuarta nebulosa.  Cantemos a Eloi.": {
    "PilotoDeCoherencia": "Responsabilidad de la Obra. Si la obra de la Escuela fallara, el destino de la Tierra y de la Cosmogonía entera se vería comprometido en su armonía.",
    "CitaInelutable": "Si la obra magna... dejara de cumplirse... Triste destino del mundo tierra... y de los mundos de la Cosmogonía.",
    "EjemploPedagogico": "Un engranaje pequeño en un reloj inmenso; si ese engranaje se rompe, todo el reloj deja de dar la hora correcta.",
    "ConexionDoctrinal": ["Importancia de la Misión", "Armonía Cosmogónica"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Mundo Eg Eg / Gof Duf (Geografía Espiritual)": {
    "Definición": "Planetas o moradas habitadas mencionadas por espíritus visitantes (Sholis, Juilis) que interactúan con la Escuela de Trincado. Su mención sirve para demostrar la pluralidad de mundos y la solidaridad universal, rompiendo el antropocentrismo terrestre.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 2 (Sesiones de Marzo de 1912).",
    "Conexiones": ["Cosmogonía", "Pluralidad de Mundos", "Solidaridad Universal"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  },
  "Sión (Destino Espiritual)": {
    "Definición": "Estado vibratorio o región del espacio de alta luz donde son conducidos los espíritus que, tras someterse al juicio y arrepentirse, aceptan trabajar por el progreso universal. No es un cielo contemplativo, sino un centro de instrucción y preparación para nuevas misiones.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 2 (Partida de los disidentes mahometanos).",
    "Conexiones": ["Rehabilitación", "Justicia Universal", "Progreso"],
    "Obras": ["Filosofía Enciclopédica Universal", "El Espiritismo en su Asiento"]
  },
  "Mistificadores (Categoría)": {
    "Definición": "Espíritus atrasados o enemigos de la luz que intentan infiltrarse en las sesiones mediúmnicas suplantando a los Maestros o Guías (como María o Jesús). Su objetivo es sembrar duda, error o vanidad, siendo detectados en la Escuela mediante la razón y la autoridad del Maestro.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 2 (Caso de la falsa María en Enero/Marzo de 1912).",
    "Conexiones": ["Obsesión", "Mediumnidad", "Criterio de Verdad"],
    "Obras": ["Filosofía Enciclopédica Universal", "Ley de las Mediumnidades"]
  },
  "Desnudez del Espíritu": {
    "Definición": "Estado de total transparencia del periespíritu tras la muerte física, donde la vibración de los pensamientos y actos pasados se manifiesta como luz o sombra visible para todos. En el juicio, esta desnudez impide el engaño o la ocultación de la verdadera naturaleza del ser.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 2 (Juicio a los corruptores).",
    "Conexiones": ["Periespíritu", "Juicio Universal", "Vibración"],
    "Obras": ["Filosofía Enciclopédica Universal", "Conócete a ti mismo"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 6 de Tomo 2 (7 nodos) y 4 términos sinápticos. Cosmogonía en acción.');
