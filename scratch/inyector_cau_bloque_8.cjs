const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "3884: Punto décimo: las casas de maternidad deben ser casas comunales": {
    "PilotoDeCoherencia": "Las instituciones de maternidad basadas en la caridad cristiana son centros de hipocresía que denigran a la humanidad. La Comuna debe transformarlas en Casas Comunales de amor y regeneración, eliminando el estigma del pecado y la tutela de monjas desnaturalizadas, tratando el nacimiento como un hecho sagrado de la vida.",
    "IdeasSecundarias": [
      "La caridad es una herramienta de la iglesia para ocultar las vergüenzas públicas sin solucionar sus causas.",
      "La desaparición del celibato es indispensable para sanear la moral social y las casas de maternidad.",
      "La Comuna asume la responsabilidad de educar y proteger a todos los hijos por igual, sin prejuicios de origen."
    ],
    "CitasIneludibles": [
      "las casas de maternidad... más bien son un baldón, porque son inspiradas en la caridad cristiana, que es una refinada y estudiada hipocresía",
      "La comuna, debe tomar las medidas en amor, para ir regenerando la humanidad dañada por la falsedad del dogma"
    ]
  },
  "4255: Punto Primero: matrimonio, divorcio y leyes de la materia/espíritu": {
    "PilotoDeCoherencia": "Los códigos civiles y religiosos fracasan porque ignoran el enlace entre las leyes de la materia y el espíritu. El divorcio es un acto de justicia necesario cuando la unión (aunque haya sido libre) termina en hastío debido a la liquidación de deudas espirituales pasajeras o encuentros fortuitos de vidas pasadas.",
    "IdeasSecundarias": [
      "La libertad absoluta de los seres es la única vía para erradicar el libertinaje.",
      "El conocimiento de la fisiología espiritual permite a los jueces actuar con verdadera justicia.",
      "Amar al hermano es el mandato supremo que nos une al Padre Eloí."
    ],
    "CitasIneludibles": [
      "el Amor y la libertad de la mujer, mata el libertinaje.",
      "las leyes de la materia se enlazan con las de espíritu, y sólo en ese conocimiento se puede ir adelante en el camino de la verdad"
    ]
  },
  "4341: Punto segundo: la mujer es parte integrante de la humanidad...": {
    "PilotoDeCoherencia": "La mujer no es un arcano, sino un libro abierto de amor y sensibilidad. Por su fisiología y conexión espiritual superior, le corresponde por derecho propio legislar sobre la vida. El latido al unísono de dos corazones es la prueba de una afinidad espiritual que las leyes de conveniencia social no deben romper.",
    "IdeasSecundarias": [
      "La educación y la libertad permitirán a la mujer guiar a la humanidad hacia la paz imperturbable.",
      "Separar por conveniencia de clases a quienes se aman es un crimen contra la ley natural del Padre.",
      "Saber amar es la única condición para comprender la profundidad del alma femenina."
    ],
    "CitasIneludibles": [
      "la mujer es un libro abierto en el que todos podéis leer, pero no sabéis leer en ese libro porque no sois sabios",
      "la mujer es parte integrante de la humanidad y le corresponde, por su fisiología, legislar.",
      "si los separáis, separaréis los cuerpos; mas los espíritus ya se encontraron y no los separaréis ya"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia del CAU Tomo I (Bloque 8) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Casas_Comunales_de_Vida": {
    "palabras_clave": ["maternidad", "comuna", "orfanato", "educación", "infancia", "baldón"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#3884: Punto décimo: las casas de maternidad deben ser casas comunales"],
    "contexto_real": "Instituciones de la Comuna Universal que sustituyen a los orfanatos religiosos, brindando amor y educación igualitaria a todo niño, sin estigmas de nacimiento."
  },
  "Legislacion_Femenina": {
    "palabras_clave": ["mujer", "legislar", "fisiología", "leyes", "sensibilidad", "justicia"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#4341: Punto segundo: la mujer es parte integrante de la humanidad..."],
    "contexto_real": "Principio que otorga a la mujer el derecho y deber de dictar leyes, fundamentado en su superioridad sensitiva y conexión con las leyes de la vida."
  },
  "Sincronia_de_Corazones": {
    "palabras_clave": ["corazón", "latido", "afinidad", "unísono", "unión", "sentimiento"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#4341: Punto segundo: la mujer es parte integrante de la humanidad..."],
    "contexto_real": "Prueba física y espiritual de la afinidad entre dos seres, indicando que sus espíritus se han encontrado y cuya unión debe ser respetada por encima de conveniencias sociales."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado.');
