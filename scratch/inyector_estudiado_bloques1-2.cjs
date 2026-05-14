const fs = require('fs');
const path = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json';

const esencia = {
  "42 al 339: El Octavo Cañonazo: Guerra al Espiritualismo": {
    "PilotoDeCoherencia": "Presenta la obra como el ataque definitivo contra la amalgama espiritualista y religiosa que puso 'tísico' al Espiritismo. Define al Espiritismo Luz y Verdad como la moneda del Padre que no admite valoraciones caprichosas. Establece que la guerra del espíritu se hace con principios axiomáticos para herir con luz a los espíritus ciegos.",
    "IdeasSecundarias": [
      "Las religiones son la tisis del espíritu; el Espiritismo Racionalista es la medicina inmortal.",
      "No hay nada nuevo bajo el sol en la letra, pero sí en el espíritu que desenmascara a los detractores.",
      "El progreso es infinito y aplastará a quienes cabalgan en el 'borriquillo' de la insensatez."
    ],
    "CitasIneludibles": [
      "El Espiritismo estaba tísico, pero... lo curaría.",
      "El Universo solidarizado... El mundo todo Comunizado.",
      "herir con luz a los espíritus ciegos."
    ]
  },
  "592 al 887: Paternidad Universal y la Liquidación de la Sangre": {
    "PilotoDeCoherencia": "Declara que todos los espíritus son hijos del mismo Padre Creador, quien no castiga sino que corrige. Realiza una auditoría histórica de la sangre derramada por las religiones (5,400 millones de víctimas), estableciendo que la Comuna viene a liquidar esta deuda mediante la justicia y el trabajo productivo, no por venganza.",
    "IdeasSecundarias": [
      "Jesús cometió errores circunstanciales (como prometer el cielo) por la incapacidad de los hombres de entonces.",
      "El mandato del Padre es: 'Si odias, tendrás que amar; y si matas, con tus besos resucitarás al muerto'.",
      "La responsabilidad de la sangre recae en la plutocracia y el derecho divino, feudos del pontífice de Roma."
    ],
    "CitasIneludibles": [
      "El padre no castiga, corrige.",
      "Las religiones son la negación del creador.",
      "34.212.663.150 litros de sangre derramada en 57 siglos."
    ]
  },
  "724 al 887: Caín y Abel: El Trabajador vs El Parásito": {
    "PilotoDeCoherencia": "Redefine el símbolo de Caín y Abel: Caín (Fase 2) es el trabajador productor que castiga al parásito Abel (Fase 2), quien pretende vivir del 'derecho divino' sin producir. Establece el axioma comunal: 'El que no produce, no tiene derecho al consumo'.",
    "IdeasSecundarias": [
      "La raza Adámica (Abel Fase 1) fue regeneradora, pero su desvirtuación religiosa la convirtió en parásito.",
      "La Comuna es el régimen de las mayorías trabajadoras que recuperan sus fueros usurpados.",
      "La justicia del Padre es el reflejo de la justicia de las mayorías solidarizadas."
    ],
    "CitasIneludibles": [
      "El que no produce, no tiene derecho al consumo.",
      "Caín... representa al productor, que... mata a Abel... el parásito.",
      "la autoridad política del Padre, manda al gobierno del Espiritismo."
    ]
  },
  "6657 al 6748: Constitución de la Comuna: La Ley Orgánica": {
    "PilotoDeCoherencia": "Proclama la Comuna de Amor y Ley como el orden supremo de la Tierra. Establece que el Espiritismo no es religión y carece de dogmas. Define el Templo como el Universo y la Conciencia como el único Sacerdote. La Comuna es un régimen de orden, registro y responsabilidad individual absoluta.",
    "IdeasSecundarias": [
      "El trabajo es el único título de nobleza; el usufructo es un derecho basado en la necesidad.",
      "La adoración es un acto del pensamiento en espíritu y verdad, sin fórmulas ni oraciones rutinarias.",
      "La Comuna es posible porque el espíritu vive su trinidad, siendo la Conciencia el Juez y la Razón el motor eficiente."
    ],
    "CitasIneludibles": [
      "Queda proclamada La Comuna de Amor y Ley en el mundo Tierra.",
      "el templo es el infinito universo, el altar el corazón del hermano y el sacerdote la conciencia.",
      "la ley orgánica es amor."
    ]
  },
  "1937 al 2410: Moisés y la Estrategia de la Luz": {
    "PilotoDeCoherencia": "Reivindica a Moisés como un Maestro de la metafísica y ministro del gobierno espiritual. Explica que prohibió el Espiritismo para proteger a la humanidad de los 'Negros de Hollín' (espíritus engañadores) hasta que llegara el tiempo de la mayoría de edad y la razón eficiente.",
    "IdeasSecundarias": [
      "Las plagas de Egipto fueron fenómenos de magnetismo y aportes reales, no cuentos.",
      "Moisés obró por acuerdo de los consejos superiores del gobierno del plano.",
      "La prohibición fue un acto de justicia para evitar la idolatría de los espíritus de baja vibración."
    ],
    "CitasIneludibles": [
      "Moisés prohibió el uso del espiritismo... por acuerdo de los consejos superiores.",
      "los Negros de Hollín... se hacían creer y adorar por dioses.",
      "Moisés... Mago supremo de las ciencias metafísicas."
    ]
  }
};

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Bloques 1 y 2 de El Espiritismo Estudiado inyectados.');
