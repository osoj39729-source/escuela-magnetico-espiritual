const fs = require('fs');
const path = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "7785: Párrafo I y 7861: Párrafo II: Realidad del Espiritismo y Confesión Vaticana": {
    "PilotoDeCoherencia": "El Espiritismo es tan antiguo como el Creador y su realidad fue admitida secretamente por la Iglesia en 1856 a través de una comisión jesuita. El periódico 'La Civita Católica' reconoció que los fenómenos son verdades históricas innegables, pero la jerarquía los archivó para mantener el dogma y amalgamar el espiritismo con el espiritualismo religioso para desvirtuarlo.",
    "IdeasSecundarias": [
      "Los espiritistas han sido tachados de locos por quienes temen perder el monopolio del misterio.",
      "El espiritismo ha existido bajo distintos nombres (Kábala) desde el origen de los seres.",
      "La amalgama espiritualista es denunciada como una táctica religiosa para engañar a los buscadores de la verdad."
    ],
    "CitasIneludibles": [
      "Los hechos atribuídos al espiritismo, son demasiado ciertos y no puede atribuírse así como quiera a la impostura y a la mentira",
      "el espiritismo es tan antiguo como el creador",
      "locos, tontos e ignorantes son ellos los sacerdotes que no saben discernir"
    ]
  },
  "7986: Párrafo III: El Espíritu de Verdad y el Juez Prometido": {
    "PilotoDeCoherencia": "El Espíritu de Verdad ha descendido a la Tierra para juzgar a hombres y espíritus a través del Juez prometido (el Anticristo como hombre inspirado). Su misión es declarar la verdad absoluta, dar al César lo que le pertenece y restituir a Dios su verdadero asiento en el amor y la razón, eliminando siglos de falsedad dogmática.",
    "IdeasSecundarias": [
      "Las almas hablan a los hombres en su propio lenguaje para guiar el progreso universal.",
      "El Juez viene a levantar todas las piedras de la mentira para edificar una estructura eterna.",
      "Grandes figuras como Abraham y Jesús fueron incomprendidas por los 'cuerdos' sistemáticos de su tiempo."
    ],
    "CitasIneludibles": [
      "el Espíritu de Verdad ha descendido a la tierra... juzgará a los hombres, por el temido Anticristo, que... como hombre es el juez prometido",
      "dar al César lo que es del César y a Dios lo que es de Dios"
    ]
  },
  "8028: Párrafo I: El Testamento Secreto de Abraham": {
    "PilotoDeCoherencia": "Principio fundamental que establece la unidad del Creador (Hellí) y la infinitud de los mundos. Revela que ángeles y demonios son solo hombres en distintos grados de progreso espiritual. Adán y Eva son presentados como una emigración de luz proveniente de otros mundos para civilizar a la raza primitiva de la Tierra.",
    "IdeasSecundarias": [
      "Hellí es eterno, no tiene principio y su única herencia son sus hijos (la humanidad).",
      "La creación es continua y los mundos se comunican entre sí en leyes de amor y justicia.",
      "Los demonios son espíritus de hombres malvados que pelean contra el progreso humano en la invisibilidad."
    ],
    "CitasIneludibles": [
      "Hellí uno. Creador Universal, no tiene principio, es Eterno, los hombres son sus hijos y él su herencia.",
      "Todos los hijos de Hellí que llamáis ángeles, hombres fueron",
      "el hombre ha de vivir en todos los mundos... pero la creación sigue y no se acaba."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Buscando a Dios (Bloque 5) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Hellí_Creador_Universal": {
    "palabras_clave": ["hellí", "creador", "uno", "eterno", "herencia", "abraham"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#8028: Párrafo I: El Testamento Secreto de Abraham"],
    "contexto_real": "Nombre original y racional dado a la Causa Única, que no admite trinidad ni personificación religiosa."
  },
  "Angeles_como_Hombres_Progredidos": {
    "palabras_clave": ["ángeles", "hombres", "luz de sol", "progreso", "mundos infinitos", "adán"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#8028: Párrafo I: El Testamento Secreto de Abraham"],
    "contexto_real": "Definición de los seres espirituales superiores como hermanos humanos que ya han cursado grados de evolución en otros planetas."
  },
  "Espiritu_de_Verdad_y_Juez": {
    "palabras_clave": ["espíritu de verdad", "juez", "anticristo", "juicio", "césar", "verdad"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#7986: Párrafo III: El Espíritu de Verdad y el Juez Prometido"],
    "contexto_real": "Misión espiritual y humana encargada de cerrar la era de la mentira religiosa y establecer la justicia racional en la Tierra."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para Buscando a Dios.');
