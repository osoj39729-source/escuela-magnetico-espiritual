const fs = require('fs');
const path = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "6168 y 6554: El Método de la Duda y el Progreso Material": {
    "PilotoDeCoherencia": "Valora el Asociacionismo y la Aritmética Moral como ciencias positivas que dan base al progreso material, requisito previo para comprender lo espiritual. Define a Descartes como el iniciador del periodo moderno mediante el sistema de la duda, aunque advierte que una duda mal entendida degenera en la negación sistemática del espíritu.",
    "IdeasSecundarias": [
      "No es posible comprender lo espiritual sin conocer primero lo más rústico: la materia.",
      "El derecho igualitario, incluyendo el de la mujer, debe ser el haber de la filosofía moderna.",
      "La duda debe ser una herramienta de investigación, no un prejuicio de negación."
    ],
    "CitasIneludibles": [
      "no es posible comprenderlo (el progreso espiritual) sin tener conocimiento de lo más rústico: la materia",
      "el sistema de la duda... mal entendida... caen en la negación sistemática",
      "reconocido el derecho igual de todos los hombres y hasta el de la mujer"
    ]
  },
  "6632 y 6867: Panteísmo de Spinoza y el Sentido Común Escocés": {
    "PilotoDeCoherencia": "Analiza a Spinoza (de origen israelita) y su panteísmo, donde Dios es la única realidad y sustancia universal. Por otro lado, destaca a Tomás Reid y la Escuela Escocesa por proponer el 'Sentido Común' y el método experimental como puntos de partida obligatorios para que la filosofía no se pierda en abstracciones irreales.",
    "IdeasSecundarias": [
      "Para Spinoza, tanto la materia como las ideas son modos de una única sustancia universal.",
      "Reid sostiene que las ideas son actos para conocer objetos reales, no entidades abstractas.",
      "El sentido común es la experiencia universal reconocida natural y espontáneamente por todos los hombres."
    ],
    "CitasIneludibles": [
      "Dios es la única realidad, la causa y substancia universal",
      "constituyen el llamado Sentido común",
      "Nuestras ideas, no son entidades sino actos mediante los cuales conocemos los objetos"
    ]
  },
  "6918 y 7083: Del Impresionismo al Materialismo Libertador": {
    "PilotoDeCoherencia": "Propone cambiar el término 'Sensualismo' por 'Impresionismo', ya que las ideas no nacen de los sentidos, sino que los objetos ya creados causan una impresión en ellos. Explica que el Materialismo (La Mettrie, Diderot) arraigó en Francia como un acto de liberación: el hombre prefirió ser solo materia antes que seguir siendo esclavo de un dios religioso vengativo e injusto.",
    "IdeasSecundarias": [
      "La sensación es una impresión de algo que ya existe y que fue ideado previamente por el espíritu creador.",
      "El materialismo fue el refugio de quienes estaban cansados de la irracionalidad teológica.",
      "Afirmar que el alma es una ilusión fue una respuesta al espanto de la muerte usado como amenaza religiosa."
    ],
    "CitasIneludibles": [
      "en vez de sensualismo, Impresionismo",
      "El materialismo arraigó fácilmente, por que los hombres estaban cansados de servir al dios religioso",
      "aceptan primero la muerte eterna siendo sólo materia antes que estar a merced de la injusticia de un infierno"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Filosofía Austera Racional (Bloque 4) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Sentido_Comun_Racional": {
    "palabras_clave": ["sentido común", "experiencia universal", "Reid", "punto de partida", "realidad espontánea"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#6632 y 6867: Panteísmo de Spinoza y el Sentido Común Escocés"],
    "contexto_real": "Base mínima de acuerdo racional entre los hombres para iniciar cualquier estudio científico o filosófico serio."
  },
  "Impresionismo_Filosofico": {
    "palabras_clave": ["impresionismo", "sensualismo", "sentidos", "percepción de objetos", "efecto de la idea"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#6918 y 7083: Del Impresionismo al Materialismo Libertador"],
    "contexto_real": "Revisión del sensualismo clásico para aclarar que los sentidos solo perciben la obra ya realizada por el espíritu."
  },
  "Materialismo_Libertador": {
    "palabras_clave": ["materialismo", "reacción al dogma", "negación de dios religioso", "refugio racional", "La Mettrie"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#6918 y 7083: Del Impresionismo al Materialismo Libertador"],
    "contexto_real": "Etapa histórica necesaria donde la humanidad niega la espiritualidad corrompida por las religiones para salvar su propia dignidad."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque 4) para Filosofía Austera Racional.');
