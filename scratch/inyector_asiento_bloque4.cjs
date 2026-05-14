const fs = require('fs');
const path = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "3225 al 4066: Leyes de Mediumnidad y Manifestación": {
    "PilotoDeCoherencia": "Establece la base técnica de la comunicación espiritual como una función magnética. Define la mediumnidad no como un don, sino como una herramienta de trabajo sujeta a leyes de afinidad y vibración. Advierte que la calidad de la comunicación depende de la altura moral y el conocimiento del médium y de su círculo de estudio.",
    "IdeasSecundarias": [
      "La ley de mediumnidad es universal y rige en todos los mundos de progreso.",
      "El fenómeno físico (aporte) es el uso del magnetismo para mover la materia pesada.",
      "La disciplina en las cátedras es la garantía contra la confusión y la mistificación."
    ],
    "CitasIneludibles": [
      "Todo en la ley, puede desarmonizar y así la electricidad, es el alma misma.",
      "el médium... tiene las facultades, para ser por ellas, el misionero e instrumento.",
      "magnetismo dinámico... alma universal."
    ]
  },
  "4394 al 4902: Definición del Hombre: ¿De dónde?, ¿Para qué?, ¿A dónde?": {
    "PilotoDeCoherencia": "Resuelve el misterio de la existencia humana. Define al hombre como un ser TRINO: Espíritu (ser consciente), Alma (archivo periespiritual) y Cuerpo (herramienta material). Explica que el hombre viene de la sustancia única (Éter), está aquí para exprimir las esencias de la materia y perfeccionar la creación, y va hacia el centro del universo para graduarse como maestro de la cosmogonía.",
    "IdeasSecundarias": [
      "El hombre es un universo en pequeño; no le falta nada de lo que tiene el macrocosmos.",
      "La vida corpórea es el taller donde el espíritu labora su propia sabiduría.",
      "La transmigración asegura que el espíritu siempre tenga el medio adecuado para su grado de progreso."
    ],
    "CitasIneludibles": [
      "El hombre es solo por el espíritu y solo puede llamarse hombre en su estado trino.",
      "¿De dónde viene? De la substancia única... ¿Para qué estamos aquí? Para el progreso que el espíritu no puede eludir... ¿A dónde va? A su centro, con su archivo.",
      "El espíritu es la vida misma: esta luz, calor y movimiento."
    ]
  },
  "4903 al 5628: La Voz Universal Solidaria y el Derecho del Espíritu": {
    "PilotoDeCoherencia": "Reivindica el derecho de todo espíritu a ser oído y la obligación de la solidaridad universal de asistir a los mundos en expiación. Explica que la voz del espíritu es la voz de la verdad que no admite fronteras ni secretos. Establece que la solidaridad es la fuerza que impide el fracaso individual del espíritu en su lucha contra la materia.",
    "IdeasSecundarias": [
      "La solidaridad es la suma de las potencias de todos los espíritus de un plano.",
      "El Espíritu de Verdad es el rector que coordina la acción solidaria en la Tierra.",
      "El derecho a la comunicación es la base de la libertad espiritual en el universo."
    ],
    "CitasIneludibles": [
      "la solidaridad es la fuerza omnipotente de la que todos los espíritus pueden disponer.",
      "el espíritu es un creador eterno como su progenitor.",
      "la voz universal solidaria... no es más que la justicia."
    ]
  },
  "5629 al 9580: El Derecho de los Espíritus: Lecciones de Soberanía": {
    "PilotoDeCoherencia": "Recoge una serie de comunicaciones directas que demuestran la superioridad del espíritu sobre los dogmas y la ciencia materialista. Incluye el 'Derecho de los Espíritus' como una alta lección donde se expone la ley del axioma frente a la mentira del dogma. Concluye con el epílogo que sella la obra como el asiento indestructible de la verdad.",
    "IdeasSecundarias": [
      "Las comunicaciones demuestran que la muerte no existe y que el diálogo entre mundos es ley natural.",
      "El Maestro Juez firma la sentencia del juicio final, justificando la misión de Jesús y su retiro al descanso.",
      "El Espiritismo es el puerto final donde la humanidad encuentra su paz cosmogónica."
    ],
    "CitasIneludibles": [
      "Anticristo en los secretos de la justicia, dice Verdad descubierta.",
      "Eloí, Eloí... a ti te entrego el mundo ya en el día de luz.",
      "Siete sellos tiene el libro; los siete han sido abiertos."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Bloque 4 de El Espiritismo en su Asiento inyectado. Obra completada.');
