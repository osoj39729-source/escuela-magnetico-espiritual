const fs = require('fs');
const path = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json';

const esencia = {
  "24 al 34: Proclama de la Verdad y Magnetismo Espiritual": {
    "PilotoDeCoherencia": "Lanza la proclama fundamental de la Escuela: el Universo está solidarizado y el mundo debe ser comunizado. Establece la unidad de la Ley y la Sustancia (Éter) como principio y fin de todo lo existente. Define axiomáticamente que 'Todo es Magnetismo Espiritual', la fuerza única que rige la creación y la relación entre los espíritus y la materia.",
    "IdeasSecundarias": [
      "No existe dualidad real; todo procede de la misma fuente vibratoria.",
      "La solidaridad es la condición natural de los mundos en progreso.",
      "El magnetismo es la herramienta del espíritu para manifestarse en la forma."
    ],
    "CitasIneludibles": [
      "El Universo Solidarizado. El mundo todo Comunizado.",
      "LA LEY es una. La sustancia una.",
      "Todo es Magnetismo Espiritual."
    ]
  },
  "588 al 698: ¿Qué es el Espiritismo? La Ciencia de la Vida": {
    "PilotoDeCoherencia": "Define al Espiritismo como la Sabiduría acumulada de los siglos, la Omnipotencia solidarizada y la Vida Eterna y Continuada. Declara que no es religión, sino el arma del Padre para destruir todos los dogmas. Reivindica la misión de los 29 misioneros (desde Adán hasta el presente) que han trabajado 57 siglos por la regeneración de la Tierra.",
    "IdeasSecundarias": [
      "El Espiritismo es el 'Anticristo' racional porque destruye el mito de la religión para salvar la verdad del espíritu.",
      "La sabiduría de todos los mundos está al servicio de la justicia en la Tierra.",
      "La vida es el asiento del Espiritismo porque el espíritu es la vida misma."
    ],
    "CitasIneludibles": [
      "El espiritismo no es religión y éste, lo traemos como arma del Padre, para destruir todas las religiones.",
      "El Espiritismo es la vida eterna y continuada.",
      "el espiritismo es el verdadero Anticristo y Antidios, pues quita el error y establece la verdad."
    ]
  },
  "699 al 844: Lo que abarca el Espiritismo: La Metafísica Racional": {
    "PilotoDeCoherencia": "Sostiene que el Espiritismo lo abarca todo porque es la Razón aplicada a la creación. Explica que el espíritu es el único creador de formas y cuerpos, utilizando el alma como vestidura para la acción. La Metafísica (razón pura) domina a las ciencias matemáticas positivas, ofreciendo un campo infinito de progreso que el espíritu descubre según asciende en luz.",
    "IdeasSecundarias": [
      "La razón es exclusiva del espíritu; el alma y el cuerpo son irracionales en sí mismos.",
      "Todo lo visible procede de lo invisible por la acción del espíritu sobre el éter.",
      "Los cometas son familias espirituales que triunfaron en sus mundos y saludan a sus hermanos en su tránsito hacia el Padre."
    ],
    "CitasIneludibles": [
      "El espiritismo es, en fin, todo, porque es la razón.",
      "el espíritu es el creador de las formas, de los mundos y los cuerpos.",
      "la metafísica del universo... es la matemática pura que domina y dominará eternamente a las ciencias."
    ]
  },
  "845 al 1077: Cómo se estudia el Espiritismo: La Rectitud de la Razón": {
    "PilotoDeCoherencia": "Enseña que el Espiritismo se estudia en todo y con todo, siempre que la razón esté limpia de prejuicios. El Padre Eloí no castiga; solo ofrece la sentencia amorosa de continuar la creación hasta ser maestros de ella. Revela que el cuerpo humano es el universo completo (Arca de Noé) que contiene los tres reinos bajo el mando del espíritu.",
    "IdeasSecundarias": [
      "El estudio universitario falla al no reconocer al espíritu como la causa de todas las ciencias.",
      "El dolor es la medicina de la ley que corrige a la materia y despierta la razón.",
      "El alma es materia en grado de esencia, archivo de instintos que el espíritu debe gobernar."
    ],
    "CitasIneludibles": [
      "El espiritismo se estudia en todo, por todo y con todo, primando la razón limpia absolutamente de prejuicio.",
      "Él, no tiene castigo; Él, es sólo amor.",
      "Es el cuerpo humano, todo el Universo completo... el instrumento, la herramienta que el espíritu se prepara."
    ]
  },
  "1078 al 1186: La Necedad de la Negación y el Rodillo de la Ley": {
    "PilotoDeCoherencia": "Califica de necio y loco a quien niega el Espiritismo, pues se niega a sí mismo y a su propia vida. Describe la Ley como un rodillo omnipotente e ineludible que iguala a todos por sus obras, no por sus títulos. El espíritu tiene la obligación ineludible de comunicarse y manifestarse en los mundos para enseñar el progreso y consolar a sus afines.",
    "IdeasSecundarias": [
      "Negar la comunicación de los espíritus es negar el derecho del hijo a volver al regazo de la madre.",
      "La ley de justicia es inflexible: con la vara que midas serás medido.",
      "El que siembra piedras de escándalo solo puede recoger tempestades en los mundos correspondientes."
    ],
    "CitasIneludibles": [
      "Negando y afirmando, la verdad no cambia de su ser.",
      "la ley llega como un ser sin entrañas como terrible inmenso rodillo y todo lo aplana.",
      "Es de obligación (por ley ineludible e inflexible) que el espíritu se comunique."
    ]
  }
};

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Bloque 1 de El Espiritismo en su Asiento inyectado.');
