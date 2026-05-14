const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "2172: CAPÍTULO NUEVE: Ley de las Mediumnidades y Espiritismo vs Espiritualismo": {
    "PilotoDeCoherencia": "La mediumnidad es una facultad natural para el progreso, desvirtuada por el dogmatismo. Se establece la distinción radical: el Espiritismo es la verdad de Jesús (el hombre), mientras que el Espiritualismo es la mentira de 'Jesucristo' (amalgama de religiones). El espiritismo no admite dogmas ni cultos, siendo la antítesis del espiritualismo religioso.",
    "IdeasSecundarias": [
      "El espiritualismo es una herramienta de las religiones para retardar la caída de sus instituciones.",
      "Las facultades medianímicas proceden del Padre y deben ser cultivadas con ciencia y conciencia.",
      "La mediumnidad mal empleada causa pena y vituperio entre los mismos médiums por ignorancia de su misión."
    ],
    "CitasIneludibles": [
      "El espiritismo no es religión; y el espiritualismo es todas las religiones, amalgamadas y unidas para desnaturalizar el espiritismo",
      "el espiritismo es Jesús y el espiritualismo es Jesucristo... Jesús no es Cristo"
    ]
  },
  "2497: ARTÍCULO 1º al 2º: Definición de Facultades y Rol de la Ciencia": {
    "PilotoDeCoherencia": "Las facultades medianímicas son demostraciones psíquicas regidas por leyes espirituales y naturales. La ciencia materialista solo ayuda a la comprensión de los menos sabios, pero es incompetente para aclarar el fenómeno si no reconoce la acción del espíritu. Se exige que el director de sesiones sea competente en 'ciencia y conciencia'.",
    "IdeasSecundarias": [
      "Los espíritus naturales y elementales también rigen la materia inerte bajo leyes específicas.",
      "El fanatismo y el escepticismo sistemático son impedimentos para la comprobación real del fenómeno.",
      "El fenómeno medianímico busca enseñar a la humanidad lo que el Padre no quiere ocultar."
    ],
    "CitasIneludibles": [
      "Ningún efecto medianímico puede ser ni estudiado ni aclarado por la simple ciencia... no se prescinda de la acción del espíritu",
      "nunca podrá comprobar nada fundadamente, un sistemático ni un fanático"
    ]
  },
  "3007: ARTÍCULO 1º al 4º: El Laudo de Rigor y Orden de las Comunicaciones": {
    "PilotoDeCoherencia": "Debido al uso desordenado de las facultades, se decreta el Laudo de Rigor que archiva (pone en suspenso) las comunicaciones fuera de reglamento. Se establecen horarios estrictos para estudio y posesión (martes, viernes y domingos), siempre a puerta abierta, responsabilizando a los Guías del cumplimiento de esta ley.",
    "IdeasSecundarias": [
      "Queda prohibida toda comunicación con espíritus de cualquier grado fuera de los locales y horas señalados.",
      "La meta es erradicar el misterio y convertir la sesión en un acto de estudio racional y público.",
      "El Laudo debe leerse mensualmente para recordar la disciplina necesaria en el Séptimo Día."
    ],
    "CitasIneludibles": [
      "queda archivado, lo que quiere decir en suspenso y sin uso... las facultades medianímicas",
      "Queda absolutamente prohibida toda comunicación... fuera de los días, horas y puntos que se señalan",
      "Siempre más allá... se dé lectura al presente Laudo."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia del CAU Tomo II (Bloque 9) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Espiritismo_vs_Espiritualismo": {
    "palabras_clave": ["espiritualismo", "jesucristo", "amalgama", "dogma", "antítesis", "jesús"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#2172: CAPÍTULO NUEVE: Ley de las Mediumnidades y Espiritismo vs Espiritualismo"],
    "contexto_real": "Diferenciación fundamental entre la doctrina racional de libertad y la mistificación religiosa que busca perpetuar la esclavitud mental."
  },
  "Laudo_de_Rigor_Medianimico": {
    "palabras_clave": ["laudo de rigor", "archivo de facultades", "horarios", "puerta abierta", "guías", "disciplina"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#3007: ARTÍCULO 1º al 4º: El Laudo de Rigor y Orden de las Comunicaciones"],
    "contexto_real": "Decreto de suspensión de comunicaciones desordenadas para imponer el orden racional y la seriedad científica en el uso de la mediumnidad."
  },
  "Ciencia_y_Conciencia_Medianimica": {
    "palabras_clave": ["director de sesión", "ciencia", "conciencia", "demostración psíquica", "razón"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#2497: ARTÍCULO 1º al 2º: Definición de Facultades y Rol de la Ciencia"],
    "contexto_real": "Requisito de sabiduría integral para quienes guían el estudio de los fenómenos del espíritu, uniendo el rigor científico con la ética superior."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para el Tomo II.');
