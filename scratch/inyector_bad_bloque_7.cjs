const fs = require('fs');
const path = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "8753: Párrafo IV: Por qué estamos aquí y la Ciudadanía Universal": {
    "PilotoDeCoherencia": "La Tierra es solo una 'ciudad del universo' y no nuestra patria definitiva. Estamos aquí como eternos viajeros y turistas cósmicos con el fin de aprender, saldar deudas espirituales con antiguos enemigos y fortalecer lazos de amor. La lucha contra las propias inclinaciones es la esencia de la vida y el motor del progreso del espíritu.",
    "IdeasSecundarias": [
      "La creación es infinita y continua, superando los límites del sistema solar y la Vía Láctea.",
      "La estancia en la Tierra sirve para transmutar la ignorancia en ciencia y la tiranía en hermandad.",
      "Venimos a mundos como la Tierra para estrechar lazos con nuestra familia espiritual en el camino infinito."
    ],
    "CitasIneludibles": [
      "estamos en la tierra, porque es una de las ciudades del universo; hemos venido aquí, como eternos viajeros",
      "estamos aquí, para luchar con nuestras inclinaciones, porque luchar es vivir.",
      "Los mundos son infinitos, pero la creación sigue y no se acaba"
    ]
  },
  "8826: Párrafo V y 8912: El Destino del Espíritu y la Ficción de la Muerte": {
    "PilotoDeCoherencia": "La muerte es una ficción inexistente; solo existe la vida continuada del espíritu. El tránsito a la vida liberta es una fase nueva enlazada con la actual sin transiciones bruscas. Trincado critica a la ciencia por sus vacíos en el conocimiento del universo, el cual es el fundamento primario (la 'A') de la verdadera sabiduría.",
    "IdeasSecundarias": [
      "El espíritu regresa a su centro con su archivo de goces y penas inalterado.",
      "El mundo espiritual y el material están íntimamente entrelazados, no distantes.",
      "La ilustración sin conocimiento del universo es solo un juego de palabras vacío de progreso real."
    ],
    "CitasIneludibles": [
      "La muerte no existe; sólo es una ficción",
      "las existencias que llaman de ultratumba, son una continuación de la presente... sin transiciones bruscas",
      "el conocimiento del universo es la primera letra, la A. ¿Cómo se pretende por muchos ser sabios?"
    ]
  },
  "9022: Párrafo II y 9108: Párrafo III: Grandeza del Universo y Herencia Humana": {
    "PilotoDeCoherencia": "Todo el universo pertenece al hombre por herencia del Creador. Es un absurdo irracional creer que la Tierra es el único mundo habitado. Para comprender nuestra esencia, debemos estudiar nuestra constitución orgánica y trascender los límites de la materia, reconociendo al Sol y las estrellas como centros de vida y espíritu.",
    "IdeasSecundarias": [
      "El temor a pensar más allá de la materia ha embotado el sentimiento y la razón de la humanidad.",
      "La pequeñez de la Tierra frente a la inmensidad del cosmos evidencia la limitación de los dioses religiosos.",
      "El estudio de la materia es el puente necesario para el estudio profundo del espíritu."
    ],
    "CitasIneludibles": [
      "Pretender que la tierra es el único mundo habitado... es un absurdo.",
      "la grandeza del universo y todo el nos pertenece.",
      "no habríamos podido acabar de estudiarnos, sin traspasar los límites de la materia"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Buscando a Dios (Bloque 7) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Humanidad_como_Turista_Cosmico": {
    "palabras_clave": ["turistas", "viajeros", "universo", "patria", "aprender", "ciudad universal"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#8753: Párrafo IV: Por qué estamos aquí y la Ciudadanía Universal"],
    "contexto_real": "Visión del espíritu como un ser errante y eterno que encarna en mundos para cumplir misiones de aprendizaje y amor."
  },
  "Universo_Herencia_Universal": {
    "palabras_clave": ["universo", "herencia", "pertenecer", "grandeza", "mundos habitados", "herencia de dios"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#9022: Párrafo II y 9108: Párrafo III: Grandeza del Universo y Herencia Humana"],
    "contexto_real": "Derecho natural de todos los seres humanos de habitar y poseer los conocimientos de todo el infinito creado."
  },
  "Muerte_como_Ficcion": {
    "palabras_clave": ["muerte", "ficción", "ultratumba", "continuación", "archivo", "espíritu"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#8826: Párrafo V y 8912: El Destino del Espíritu y la Ficción de la Muerte"],
    "contexto_real": "Concepto que despoja al tránsito de su carga de terror, viéndolo como un paso natural en la evolución continua del ser."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para Buscando a Dios.');
