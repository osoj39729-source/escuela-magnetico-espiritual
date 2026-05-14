const fs = require('fs');
const path = 'F:/trincado/public/data/contents/los-cinco-amores_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "10527: CAPÍTULO OCTAVO: El Encauzamiento hacia un solo Idioma y una sola Raza": {
    "PilotoDeCoherencia": "Declara que la unificación lingüística y racial es el encauzamiento natural de la humanidad hacia su estado de armonía definitiva. El idioma español se establece como el vehículo universal no por imposición, sino porque es la lengua que mejor vibra con la sabiduría de Sión. La fusión de razas es la herramienta biológica que elimina las vallas del prejuicio, permitiendo que la familia humana se reconozca como una sola estirpe ante el Padre Hellí.",
    "IdeasSecundarias": [
      "El espíritu busca naturalmente el medio de comunicación más perfecto para la fraternidad.",
      "Las naciones son etapas transitorias que el progreso disuelve al unificar el sentimiento humano.",
      "Un solo idioma es la garantía de que no habrá secretos ni falsas interpretaciones entre hermanos."
    ],
    "CitasIneludibles": [
      "Un solo idioma hará una sola raza",
      "La Paz del mundo no será estable sino en la unidad de una raza",
      "el español... será el idioma universal (por ley de afinidad)"
    ]
  },
  "4972: CAPÍTULO NUEVE y 5320: CAPÍTULO DIEZ: Justicia Racional y Armonía del Trabajo": {
    "PilotoDeCoherencia": "Sentencia que el trabajo es la ley de la vida y el motor de la armonía en la Comuna. El principio 'el que no trabaja no come' es la exposición de una ley natural: quien se aparta del esfuerzo creativo, se desarmoniza con el sustento común y se priva a sí mismo del banquete de la vida. No hay castigo externo, sino la consecuencia lógica de la auto-exclusión del ritmo universal.",
    "IdeasSecundarias": [
      "El trabajo dignifica al espíritu y embellece la materia, cumpliendo el mandato de acrecentar la creación.",
      "La ociosidad es una enfermedad del alma que detiene el flujo de la vida racional.",
      "La Justicia Racional es equitativa: a cada cual según su necesidad, de cada cual según su capacidad y amor."
    ],
    "CitasIneludibles": [
      "El que no trabaja no come... verdadero principio de una Justicia Racional",
      "el trabajador es el motor del mundo",
      "quien no aporta, se desarmoniza con la Comuna"
    ]
  },
  "201: PRIMERA PARTE: El Taller de la Familia": {
    "PilotoDeCoherencia": "Define a la familia consanguínea como el taller educativo primario, necesario pero imperfecto. Su función es preparar al espíritu para el Amor Universal. Si la familia se cierra en sí misma, se convierte en una valla de egoísmo; su destino es trascender hacia la fraternidad donde el lazo de luz del espíritu sea superior al lazo de la carne.",
    "IdeasSecundarias": [
      "La consanguinidad es el vehículo para el pago de deudas y el aprendizaje del deber.",
      "El amor de familia debe ser la semilla, no el límite, del afecto humano.",
      "En la Comuna, la familia se expande hasta abrazar a toda la humanidad sin acepción de personas."
    ],
    "CitasIneludibles": [
      "El amor de la familia es el más imperfecto",
      "EL AMOR DE LA FAMILIA ES LA BASE DE LA SOCIEDAD (para su superación)",
      "trascender la carne por el espíritu"
    ]
  },
  "14001: EPÍLOGO: El Espiritismo como Amor Universal en Marcha": {
    "PilotoDeCoherencia": "Proclama que el Espiritismo es el Amor Universal en plena marcha científica y racional. No es una creencia, sino el conocimiento de las leyes de solidaridad que unen al Microcosmo con el Macrocosmo. Es la fuerza que rompe todas las vallas (religiosas, políticas y sociales) para instaurar el Reino del Padre en la Tierra mediante la unidad de pensamiento.",
    "IdeasSecundarias": [
      "La solidaridad universal es el axioma que anula el aislamiento de los mundos.",
      "El pensamiento unificado es la palanca que mueve el progreso fuera del abismo del error.",
      "El Espiritismo Luz y Verdad es el puerto final donde la humanidad encuentra su paz cosmogónica."
    ],
    "CitasIneludibles": [
      "EL ESPIRITISMO ES EL AMOR PERFECTO",
      "El Universo solidarizado. El Mundo todo, Comunizado.",
      "Todo es Magnetismo Espiritual"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Elevación doctrinal de Los Cinco Amores finalizada.');
