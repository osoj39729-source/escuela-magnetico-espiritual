const fs = require('fs');
const path = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
let esencia = {};

Object.assign(esencia, {
  "95 y 197: Definición de Filosofía y el Grado de Moral": {
    "PilotoDeCoherencia": "Define la Filosofía como el 'Amor a la Sabiduría', dividiéndola en Moral (estudio de la conducta y virtudes) y Natural (investigación de las leyes de la naturaleza). Sostiene que para emprender este estudio es indispensable poseer un grado de moral previo; sin él, la ciencia queda vacía y el estudiante es víctima de la 'araña del prejuicio'.",
    "IdeasSecundarias": [
      "Las definiciones académicas a menudo retrasan a las inteligencias finas por su rigidez sistemática.",
      "La tarea de la filosofía es escudriñar los rincones de la conciencia para eliminar los prejuicios ancestrales.",
      "El conocimiento fragmentario es útil para el principiante, pero el sabio busca la esencia unificada de las cosas."
    ],
    "CitasIneludibles": [
      "Filosofía dice, AMOR A LA SABIDURÍA",
      "antes de empezarlo, es necesario que se tenga el grado de moral requerido por la ciencia que se va a estudiar",
      "atizo mi luz para que de fuerte llama e ilumine todos los rincones... para sacar de ellos las arañas"
    ]
  },
  "362 y 666: El Huevo del Espíritu y la Prehistoria de Adán": {
    "PilotoDeCoherencia": "Explica el origen de la vida racional mediante la alegoría del 'huevo': el espíritu estuvo encerrado durante millones de siglos acumulando experiencia hasta que, por su propia fuerza, 'abrió el huevo en dos mitades' para alumbrar la creación. Sitúa la prehistoria de la especie humana en 44.250.058 siglos, mucho antes de la cronología bíblica simbólica.",
    "IdeasSecundarias": [
      "El amorfismo precede al antropomorfismo en la gestación del sentimiento racional.",
      "El Génesis bíblico es solo un índice simbólico de epopeyas que se leen con claridad en el Sánscrito.",
      "Adán no es el primer hombre biológico, sino el inicio de una misión espiritual que cuenta con 58 siglos de historia escrita."
    ],
    "CitasIneludibles": [
      "el causa de la vida racional, estaba encerrado en su huevo hasta que tuvo la fuerza necesaria",
      "La Prehistoria de Adán, alcanza a 44.250.058 siglos",
      "abrió el huevo en dos mitades y él salió alumbrando todas las cosas con su propia luz"
    ]
  },
  "454 y 829: Metafísica Racional y Shet como Primer Maestro": {
    "PilotoDeCoherencia": "Distingue la Metafísica (ciencia de las causas y seres espirituales) de las religiones. Establece que todas las escuelas de pensamiento (India, China, Egipto) tienen su raíz en la Ley Shética (Sánscrito). Identifica a Shet como el primer Maestro real en la Tierra, cuya misión fue traer las reglas de moral que permiten al hombre conocerse a sí mismo y a las leyes universales.",
    "IdeasSecundarias": [
      "La Metafísica racional no es misticismo, sino el 'pesar' los casos extraciencia mediante la razón.",
      "Las religiones confunden la creencia con la metafísica para dominar el pensamiento.",
      "Sin el conocimiento de la moral shética, es imposible comprender las leyes de la creación."
    ],
    "CitasIneludibles": [
      "la metafísica no es una ciencia... porque la ciencia no puede pesar ni dominar lo que está sobre la ciencia: los seres espirituales",
      "todas las escuelas tienen su base en el sánscrito o ley y doctrina Shética",
      "Shet... presentándolo como primer Maestro en la tierra, como lo es en Verdad de Verdad"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Filosofía Austera Racional (Bloque 1) creada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Huevo_del_Espiritu": {
    "palabras_clave": ["huevo espiritual", "gestación racional", "potencia del espíritu", "ruptura del huevo", "luz propia"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#362 y 666: El Huevo del Espíritu y la Prehistoria de Adán"],
    "contexto_real": "Alegoría del proceso de individuación y maduración del espíritu antes de manifestarse como conciencia racional."
  },
  "Prehistoria_Adanica": {
    "palabras_clave": ["44 millones de siglos", "Adán misionero", "tiempos primitivos", "geología doctrinal", "cronología racional"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#362 y 666: El Huevo del Espíritu y la Prehistoria de Adán"],
    "contexto_real": "Cálculo del tiempo que el espíritu humano ha operado en la tierra antes de la codificación de la ley."
  },
  "Shet_Primer_Maestro": {
    "palabras_clave": ["Shet", "Ley Shética", "Primer Maestro", "Sánscrito", "raíz de las escuelas", "doctrina original"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#454 y 829: Metafísica Racional y Shet como Primer Maestro"],
    "contexto_real": "Identidad histórica del primer instructor de la humanidad, cuya doctrina de amor es la base de toda sabiduría verdadera."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para Filosofía Austera Racional.');
