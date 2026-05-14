const fs = require('fs');
const path = 'F:/trincado/public/data/contents/jes-s-hombre-y-no-dios_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "1073 al 1380: El Drama Político: Del Trono al Gólgota": {
    "PilotoDeCoherencia": "Relata la entrada en Jerusalén como un acto de fuerza coordinado por la Cábala y el Príncipe de Ur. Explica que Jesús renunció al trono al rechazar la violencia, lo que provocó el abandono de sus aliados militares y su captura. Define el juicio como un montaje ilegal de los sacerdotes para proteger su religión frente al avance de la libertad.",
    "IdeasSecundarias": [
      "La Cena fue el momento de transmitir el 'secreto' de la resurrección espiritual a los apóstoles.",
      "Judas no fue un traidor por maldad absoluta, sino por celos y falta de estudio de su propio espíritu.",
      "Pilatos reconoció la inocencia de Jesús, pero cedió ante la presión de la 'Raza de Víboras' que compró al populacho."
    ],
    "CitasIneludibles": [
      "No es mi reino de este mundo; pero lo quiere el pueblo y obedeceré hasta la muerte.",
      "la resurrección que os anuncio es del espíritu que despierta del letargo.",
      "Conviene que muera... para bien de la religión."
    ]
  },
  "1381 al Final: La Supervivencia y la Ascensión Alquímica": {
    "PilotoDeCoherencia": "Sostiene que Jesús no murió en la cruz y que su 'resurrección' y 'ascensión' fueron operaciones técnicas de la Escuela Escénica. Explica que Arimatea rescató el cuerpo vivo, lo curó y que la ascensión fue una representación con nubes de alquimia para amedrentar a los sacerdotes. Confirma su desencarnación real 88 días después.",
    "IdeasSecundarias": [
      "El fenómeno del sepulcro vacío fue una operación de sugestión y traslado físico para proteger al Maestro.",
      "La ascensión en el Monte Olivete usó químicos de alquimia para crear una nube que ocultó la retirada de los actores.",
      "Jesús vivió sus últimos días en paz, custodiado por María y Jaime, hasta su partida el 22 de junio."
    ],
    "CitasIneludibles": [
      "Arimatea... viendo que Jesús vivía, encargó el silencio... y llevan al mártir a la Escuela Escénica.",
      "queda fraguada la famosa Ascensión... que no se atrevieron a desmentir los asesinos sacerdotes.",
      "Jesús desencarna a los 88 días de su crucifixión... el día 22 de junio."
    ]
  },
  "Discurso de Strossmayer: La Confesión Interna": {
    "PilotoDeCoherencia": "Integra el discurso del obispo Strossmayer en el Concilio Vaticano de 1870 como la prueba irrefutable de que el papado no tiene base en las escrituras. El discurso denuncia la infalibilidad papal como un absurdo y reivindica la libertad del espíritu frente al dogma.",
    "IdeasSecundarias": [
      "Ni Pedro fue Papa, ni dejó sucesores con poderes divinos.",
      "La Biblia no sanciona la opinión de los ultramontanos ni la primacía de Roma.",
      "La infalibilidad es una usurpación del lugar que solo corresponde al Creador."
    ],
    "CitasIneludibles": [
      "Nada he encontrado que sancione... la opinión de los Ultramontanos.",
      "Pedro no fue Papa, ni se llamó tal.",
      "La Biblia... es la regla de la fe y de la moral, no el Papa."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Bloque 3 de Jesús Hombre y no Dios inyectado. Obra completada.');
