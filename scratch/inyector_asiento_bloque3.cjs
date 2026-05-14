const fs = require('fs');
const path = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "2493 al 2653: El Reinado del Espiritismo: El Fin de la Noche": {
    "PilotoDeCoherencia": "Proclama que la noche de la humanidad ha terminado y que hoy amanece el día del espíritu. Declara que el reinado del Espiritismo es el reinado de la Razón y la Justicia, donde las religiones no tienen cabida. Es el momento en que la Tierra se une a la fraternidad de mundos avanzados de su plano, recibiendo la luz directa de Sión.",
    "IdeasSecundarias": [
      "El reinado del espíritu no es una creencia, es el ordenamiento científico de la sociedad.",
      "La luz de Sión penetra en la Tierra tras la firma de la sentencia del juicio de mayoría.",
      "Las razas y naciones son barreras que el espíritu derriba para establecer la unidad humana."
    ],
    "CitasIneludibles": [
      "acabó la noche de la humanidad de la tierra, señalándose el día con el crepúsculo del espiritismo.",
      "el mundo no tiene arreglo sino por las doctrinas puras del Espiritismo Luz y Verdad.",
      "pasad religiones... en la tierra no cabéis más."
    ]
  },
  "2654 al 2819: El Juicio Final y Universal: La Liquidación de Cuentas": {
    "PilotoDeCoherencia": "Describe el Juicio Final no como un evento mitológico, sino como un acto judicial-espiritual de liquidación de cuentas. Explica que la mayoría espiritual de la Tierra reclamó justicia y que el Padre concedió el poder al Juez (el hijo del hombre) para separar a los ociosos y detractores de los trabajadores del progreso.",
    "IdeasSecundarias": [
      "El juicio se celebró en el mundo espiritual (1912-1914) y sus efectos se materializan ahora en la Tierra.",
      "La sentencia para los espíritus que no acatan la ley es la transmigración a mundos primitivos (el 'hospital').",
      "La Tierra es entregada en patrimonio a los trabajadores, a los despiertos y a los que aman a su hermano."
    ],
    "CitasIneludibles": [
      "la sentencia final del mundo tierra... se firmó la sentencia del juicio final.",
      "la tierra está dada en patrimonio a los trabajadores, a los despiertos, a los que velan.",
      "la ley de Justicia tiene órdenes dadas... hasta la Naturaleza, hará sus demostraciones."
    ]
  },
  "2917 al 3118: La Comuna: Régimen Único del Espiritismo": {
    "PilotoDeCoherencia": "Sentencia que la Comuna de Amor y Ley es el único régimen social que puede sostener la armonía del espíritu en la materia. Define la Comuna como un sistema sin parcelas, sin fronteras y sin supremacías, donde el interés común prevalece por encima del egoísmo individual. Es la expresión política del 'Ama a tu hermano'.",
    "IdeasSecundarias": [
      "La Comuna no es el comunismo materialista, sino la solidaridad espiritual en acción.",
      "El derecho al usufructo es para todos los que trabajan y aportan a la armonía de la familia universal.",
      "En la Comuna, la sabiduría y la potencia son comunes de todos los espíritus."
    ],
    "CitasIneludibles": [
      "la Comuna sin parcelas y sin fronteras... ha de convertir en armonía.",
      "el mundo todo Comunizado.",
      "Justicia Racional... a cada cual según su necesidad, de cada cual según su capacidad y amor."
    ]
  },
  "3119 al 3209: La Creación Eterna por el Espiritismo": {
    "PilotoDeCoherencia": "Declara que la creación no se detiene nunca y que el espíritu es el encargado de perpetuarla en formas cada vez más bellas. El Espiritismo es el conocimiento de este movimiento eterno. Concluye que el fin del estudio es la unidad con Eloí, reconociendo que somos maestros en potencia de mundos que aún no existen.",
    "IdeasSecundarias": [
      "El espíritu es consustancial y coeterno con el Padre, ejecutando su pensamiento en el éter.",
      "El progreso no tiene límites porque el Creador es infinito.",
      "El destino del hombre es ser creador de mundos en la eternidad del espacio."
    ],
    "CitasIneludibles": [
      "la creación sigue y no se acaba.",
      "el espíritu es de antes que el Eter, porque éste es el pensamiento del creador.",
      "en el tiempo todos vuelven para ser graduados maestros de la creación."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Bloque 3 de El Espiritismo en su Asiento inyectado.');
