const fs = require('fs');
const path = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "25487 al 25610: El Espiritismo como Sabiduría, no Religión": {
    "PilotoDeCoherencia": "Sentencia que el Espiritismo es la Sabiduría acumulada desde el principio de los tiempos, anterior a todas las religiones. Relata cómo Shet (hace 57 siglos) tuvo que evocar al espíritu porque la religión de la que era pontífice no podía explicar la creación. Define a Hellí como el Creador Único, cuya herencia son los hombres, y establece que 'todos los ángeles fueron hombres', eliminando la jerarquía mística.",
    "IdeasSecundarias": [
      "El testamento secreto de Abraham ya hablaba de la comunicación entre los mundos en amor y justicia.",
      "La religión es ignorancia; el Espiritismo es el conocimiento de las causas reales de la vida.",
      "Moisés fundó la Kábala mayor para preservar los secretos del espíritu frente a la corrupción de los levitas."
    ],
    "CitasIneludibles": [
      "Hellí es uno; Creador universal... Los hombres son sus hijos y él su herencia",
      "el espiritismo no es religión... es sabiduría; mientras la religión es la ignorancia",
      "Todos los hijos de Helli que llamáis ángeles, hombres fueron"
    ]
  },
  "25650 al 25748: El Espiritismo lo es Todo y la Comuna Universal": {
    "PilotoDeCoherencia": "Proclama que para el Espiritismo no hay nada oculto, citando las profecías cumplidas de Jesús, Juan y el propio Trincado (la catástrofe de 1914 y la llegada de la Comuna Universal). Afirma que el Espiritismo es la base de todo progreso humano, pues el hombre solo es tal por el espíritu. Denuncia al Espiritualismo como una 'blasfemia' que intenta hermanar la ciencia con la ceguera religiosa.",
    "IdeasSecundarias": [
      "La Bestia 666 y el dragón representan la tragedia humana causada por la ignorancia religiosa.",
      "Todos los hombres son espiritistas por afinidad de ideas, aunque lo nieguen políticamente.",
      "La ciencia es toda ojos y solo admite la fe de las obras; la religión es ciega y exige fe sin pruebas."
    ],
    "CitasIneludibles": [
      "el fin de la guerra sería 'La Comuna universal'",
      "El Espiritismo lo es todo... solidaridad (necesaria para la armonía del gobierno del Creador)",
      "La ciencia es toda ojos... la religión es ciega"
    ]
  },
  "25850: El Juicio al Dios Religioso": {
    "PilotoDeCoherencia": "Somete al 'Dios de las religiones' a juicio, criticando su naturaleza antropomórfica y vengativa. Sostiene que la idea de Dios ha sido secuestrada por el dogma para evitar que el hombre discuta su esencia y posibilidad real. Concluye que el espíritu es el único autor, actor y responsable de su destino ante el Creador real, Hellí.",
    "IdeasSecundarias": [
      "El sentimiento religioso ha sido una evolución desviada del sentido moral natural.",
      "Las religiones se preocupan por la 'personalidad' divina para dominar por el temor.",
      "El Espiritismo Luz y Verdad restituye la dignidad del hombre al hacerlo heredero directo del Creador."
    ],
    "CitasIneludibles": [
      "ya estamos frente al proceso en el que ha de ser juzgado el Dios religioso por sus propias obras",
      "el hombre... heredero de Helli",
      "el espíritu es el autor, actor y responsable de todo"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Filosofía Austera Racional (Final) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Helli": {
    "palabras_clave": ["Hellí", "Helli", "Eloí", "Creador Único", "Padre", "Herencia de los hombres"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#25487 al 25610: El Espiritismo como Sabiduría, no Religión"],
    "contexto_real": "Nombre del Creador Universal según el Espiritismo Luz y Verdad, que significa 'El que es' y cuya esencia es el amor puro."
  },
  "Espiritismo_no_Religion": {
    "palabras_clave": ["no es religión", "sabiduría universal", "escuela", "conocimiento", "ciencia y filosofía"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#25487 al 25610: El Espiritismo como Sabiduría, no Religión"],
    "contexto_real": "Axioma fundamental que separa a la Escuela de cualquier culto, dogma o misticismo."
  },
  "Angeles_fueron_Hombres": {
    "palabras_clave": ["ángeles hombres", "preexistencia", "evolución espiritual", "sin jerarquías", "hijos de Helli"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#25487 al 25610: El Espiritismo como Sabiduría, no Religión"],
    "contexto_real": "Verdad que anula el misticismo angelical, explicando que todo ser de luz ha pasado por la experiencia de la encarnación humana."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Final) para Filosofía Austera Racional.');
