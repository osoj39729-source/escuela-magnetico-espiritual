const fs = require('fs');
const path = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "8201: Párrafo III y 8245: Amor, Tolerancia y Reencarnación": {
    "PilotoDeCoherencia": "La reencarnación es el mecanismo de justicia que permite la igualdad espiritual. Trincado sostiene que el progreso social no se logra con penas de muerte o castigos físicos, sino mediante la tolerancia y el buen ejemplo. Los espíritus aprendices traen archivos de mundos inferiores y requieren paciencia para sintonizarse con la ley del amor de la Tierra.",
    "IdeasSecundarias": [
      "La desigualdad material es transitoria y solo la ley de igualdad espiritual es absoluta.",
      "La historia de la 'tía María' ilustra la fuerza de la iluminación espiritual frente a la brutalidad.",
      "El espíritu encarnado no recuerda sus hechos pasados, pero conserva inclinaciones que la educación debe orientar."
    ],
    "CitasIneludibles": [
      "La ley de igualdad, es la ley que lleva el consuelo al espíritu, porque a todos igual es aplicada",
      "La tolerancia y el buen ejemplo es el mejor código de un pueblo... no se consigue con castigos corporales, ni con la pena de muerte."
    ]
  },
  "8334: Párrafo IV: La Confesión del Maestro Trincado": {
    "PilotoDeCoherencia": "Revelación del camino preparatorio de Joaquín Trincado. Confiesa haber vestido la sotana de jesuita por dos años para estudiar el dogma desde sus raíces, lo que le dio la base racional para su lucha posterior. Se define como un maestro de oficios (electricista) y asume su identidad como el hombre que cumple la profecía del Anticristo anunciada por Pío IX.",
    "IdeasSecundarias": [
      "Los desengaños religiosos fueron necesarios para forjar una justicia equitativa y desinteresada.",
      "La mano de la justicia divina guió a Trincado por oficios de progreso humano para fundamentar su doctrina.",
      "La profecía del Anticristo resonó en su corazón desde los tres años como un llamado al juicio de la verdad."
    ],
    "CitasIneludibles": [
      "he vestido dos años la sotana de jesuita, cuando empezaba mí razón... hoy comprendo la mano que me llevaba",
      "oí leer... una bula... anunciando al mundo, la venida del anticristo... resonaron en mi mente y sentí en mi corazón"
    ]
  },
  "8442: Párrafo I y 8520: Párrafo II: Definición del Espiritismo y la Sustancia Única": {
    "PilotoDeCoherencia": "El Espiritismo es definido como la Religión Universal inmutable que vive en el presente eterno. Trincado establece que solo existe una 'Sustancia Única Absoluta' (éter o pantógeno) que se manifiesta como espíritu o materia según su estado vibratorio. Esto unifica la ciencia y la espiritualidad en un solo cuerpo doctrinal racionalista.",
    "IdeasSecundarias": [
      "El espiritismo no es una 'cosa' transformable, sino la verdad eterna que los hombres descubren progresivamente.",
      "El hombre es la esencia viva de las cosas y no un mero conjunto de átomos dispersables.",
      "Se descarta el panteísmo y el dualismo religioso en favor de una unidad de sustancia absoluta."
    ],
    "CitasIneludibles": [
      "El espiritismo... es la religión universal, sin ser religión positiva... no se puede ir más allá del espiritismo.",
      "Sólo una substancia existe en absoluto... Llamadla 'pantógeno', éter, o cósmica.",
      "El espiritismo, no es cosa... vive siempre en el presente eterno."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Buscando a Dios (Bloque 6) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Religion_Universal_Espiritismo": {
    "palabras_clave": ["espiritismo", "religión universal", "no cosa", "presente eterno", "verdad"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#8442: Párrafo I y 8520: Párrafo II: Definición del Espiritismo y la Sustancia Única"],
    "contexto_real": "Conocimiento integral y eterno del universo que no depende de dogmas ni instituciones humanas."
  },
  "Sustancia_Unica_Absoluta": {
    "palabras_clave": ["éter", "pantógeno", "sustancia única", "materia", "espíritu", "unidad"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#8442: Párrafo I y 8520: Párrafo II: Definición del Espiritismo y la Sustancia Única"],
    "contexto_real": "Realidad fundamental del cosmos donde todo lo que existe es una manifestación de una sola esencia en distintos grados de vibración."
  },
  "Tolerancia_vs_Castigo": {
    "palabras_clave": ["tolerancia", "castigo", "pena de muerte", "buen ejemplo", "reencarnación", "educación"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#8201: Párrafo III y 8245: Amor, Tolerancia y Reencarnación"],
    "contexto_real": "Principio ético de la Comuna que rechaza la violencia punitiva y apuesta por la formación progresiva del espíritu."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para Buscando a Dios.');
