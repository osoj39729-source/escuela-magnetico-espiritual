const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "1151: Capítulo XII: ECONOMÍA SOCIAL": {
    "PilotoDeCoherencia": "Abolición definitiva de fronteras y leyes de extranjerismo, consideradas barreras egoístas impuestas por los enemigos del pueblo. El hombre es el universo completo y no puede ser extranjero en ningún punto de la Tierra, pues la luz y las leyes naturales son comunes para todos sin distinción de color o etnicismo.",
    "IdeasSecundarias": [
      "La educación continua es el motor de la ascensión en armonía y belleza social.",
      "Las leyes sociales de las naciones antiguas son condenadas por irracionales y egoístas.",
      "El sol alumbra a todos por igual, invalidando cualquier pretensión de separación territorial."
    ],
    "CitasIneludibles": [
      "no será nadie capaz de encontrar dónde hubo fronteras... vergüenza de las leyes de extranjerismo, hechas sólo por prevención maliciosa.",
      "El hombre, de cualquier color y etnicismo que sea... es el universo completo y entero"
    ]
  },
  "1172: Capítulo XIII: ECONOMÍA ESPIRITUAL": {
    "PilotoDeCoherencia": "Unidad del pensamiento para el esfuerzo psíquico coordinado con la Ley Mayor. Define al Espiritismo Racionalista como el punto de apoyo inconmovible y a la Economía Espiritual como la palanca capaz de regenerar y transformar la Tierra, superando la era de la fuerza bruta material.",
    "IdeasSecundarias": [
      "La unión espiritual de pensamiento otorga una fuerza omnipotente superior a cualquier colectividad material.",
      "El Juicio Final permitió limpiar el cimiento granítico para asentar este punto de apoyo.",
      "La economía espiritual es nueva para la Tierra y exclusiva del séptimo día."
    ],
    "CitasIneludibles": [
      "punto de apoyo se declare libre y firme en la economía Espiritual... el Espiritismo... se sienta inconmovible... y la palanca es, la economía Espiritual.",
      "unidad espiritual para el esfuerzo Psíquico en un solo pensamiento... capaz... de regenerar"
    ]
  },
  "1215: Capítulo XIV: ECONOMÍA UNIVERSAL": {
    "PilotoDeCoherencia": "Solidaridad de todos los espíritus de la Tierra con el universo infinito, alcanzando la omnipotencia creadora. Revela que las 24 cátedras o libros de la EMECU son los 24 ancianos del Apocalipsis, formando la verdadera Biblia que cierra el ciclo de sabiduría del hombre como co-creador con el Padre.",
    "IdeasSecundarias": [
      "El hombre es el fin de la creación y tiene la misión de elevar los mundos al progreso máximo.",
      "La omnipotencia se obra mediante la armonía con todas las fuerzas de los mundos solidarizados.",
      "El Creador (Eloí) es representado como el Cordero por su ausencia total de rencor o venganza."
    ],
    "CitasIneludibles": [
      "economía Universal... consiste en la unidad de todos los espíritus concentrados en el Maestro, para así conseguir la solidaridad con todo el universo",
      "esos 24 Ancianos representan los 24 libros de que se compone la verdadera Biblia",
      "el hombre es el fin que el Padre se propuso en la creación... el hombre es un creador"
    ]
  },
  "1297: Punto Primero: Ley de Trabajo y Sustancia Única": {
    "PilotoDeCoherencia": "El trabajo es la ley suprema del Creador y la base de toda vida y progreso. Existe una sola sustancia única (éter) y una sola ley bajo una única causa. El hombre debe transformar y elevar la materia a través de metamórfosis infinitas para acercarse al conocimiento de su Padre.",
    "IdeasSecundarias": [
      "El movimiento de los mundos y el sol es la demostración física del trabajo constante de la creación.",
      "La formación y desaparición de mundos tiene como único fin el progreso de los espíritus.",
      "Sin trabajo no hay progreso, pero tampoco vida en ningún plano del universo."
    ],
    "CitasIneludibles": [
      "la Ley del Padre es el trabajo... en todo la ley es el trabajo sin el cual, no sólo no habría progreso, pero ni tampoco vida.",
      "el Padre ha creado una sola substancia, bajo una sola ley, al igual que es él una y única causa.",
      "el hombre es el fin que el Padre se propuso en la creación"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia del CAU Tomo II (Bloque 6) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Economia_Espiritual_Psiquica": {
    "palabras_clave": ["esfuerzo psíquico", "unidad de pensamiento", "punto de apoyo", "palanca", "regeneración"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#1172: Capítulo XIII: ECONOMÍA ESPIRITUAL"],
    "contexto_real": "Fuerza resultante de la unión de voluntades espirituales que permite actuar sobre la materia y la moralidad universal."
  },
  "Las_24_Catedras_Venerables": {
    "palabras_clave": ["24 ancianos", "libros", "biblioteca", "biblia verdadera", "EMECU", "apocalipsis"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#1215: Capítulo XIV: ECONOMÍA UNIVERSAL"],
    "contexto_real": "Cuerpo completo de doctrina del Espiritismo Racionalista que contiene la sabiduría necesaria para el Séptimo Día."
  },
  "Ley_del_Trabajo_Universal": {
    "palabras_clave": ["trabajo", "ley del padre", "sustancia única", "creador", "movimiento", "progreso"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#1297: Punto Primero: Ley de Trabajo y Sustancia Única"],
    "contexto_real": "Mandato divino que obliga a todos los seres a la acción productiva como única vía de evolución y sustento de la vida."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para el Tomo II.');
