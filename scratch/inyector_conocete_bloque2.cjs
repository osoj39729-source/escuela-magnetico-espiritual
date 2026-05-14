const fs = require('fs');
const path = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "5593 al 5830: El Espíritu como Arquitecto de su Cuerpo": {
    "PilotoDeCoherencia": "Declara que el espíritu es el único autor y constructor de su propio cuerpo, eligiendo los materiales y órganos necesarios para cumplir su misión. Niega el derecho a la queja por la constitución física, pues el hombre mismo se fabrica a su gusto bajo la ley de afinidad. Establece que la belleza física es un reflejo del progreso y armonía del espíritu sobre la materia.",
    "IdeasSecundarias": [
      "El cuerpo es una herramienta articulada diseñada por el espíritu para actuar en el mundo físico.",
      "Los 'micro-hombres' en la médula son los gérmenes de las aptitudes que el espíritu deposita.",
      "Atribuir la belleza a la naturaleza sin reconocer al espíritu es un insulto a la inteligencia creadora."
    ],
    "CitasIneludibles": [
      "el espíritu se fabrique su cuerpo, es de necesidad y también de la más estricta justicia.",
      "fuimos creados en la libertad, hasta para fabricarnos nuestro organismo.",
      "el espíritu, único autor de su cuerpo."
    ]
  },
  "5831 al 6098: Salud y Enfermedad: Obras de Justicia": {
    "PilotoDeCoherencia": "Define la salud como equilibrio y la enfermedad como un proceso de purificación y saldo de cuentas espirituales. Las enfermedades no se curan hasta que se cumple el tiempo marcado por la ley de justicia, a menos que haya una permuta moral por arrepentimiento y estudio. Denuncia que la locura es mayoritariamente una perturbación por facultades no desarrolladas o por la persecución de espíritus detractores.",
    "IdeasSecundarias": [
      "El sufrimiento físico priva al espíritu del goce material para forzar la reflexión y limpieza del alma.",
      "La medicina materialista es impotente ante enfermedades de origen espiritual y demencias por obsesión.",
      "Las muertes repentinas y accidentes suelen ser obra de enemigos espirituales (detractores) en ejecución de justicia."
    ],
    "CitasIneludibles": [
      "la salud y las enfermedades son obra del espíritu, en justicia.",
      "la locura no existe; pero si existe la perturbación del espíritu.",
      "el espíritu quita, los gérmenes de la enfermedad... cuando ha cumplido su tiempo."
    ]
  },
  "6099 al 6222: Igualdad Racial: Una Sola Familia Humana": {
    "PilotoDeCoherencia": "Proclama axiomáticamente que en el Universo solo existe una raza y una familia: la Humanidad. El color de la piel y las diferencias físicas son accidentes del clima y de los materiales utilizados (éter/materia), no indicadores de superioridad o inferioridad espiritual. Reivindica la inteligencia y dignidad universal en negros, amarillos, cobrizos y blancos por igual.",
    "IdeasSecundarias": [
      "La supuesta superioridad del blanco es a menudo solo un refinamiento en el vicio y la hipocresía legislada.",
      "La ley de procreación iguala a todos los hombres en necesidades y derechos naturales.",
      "El prejuicio de los historiadores ha ocultado la grandeza y sabiduría de las razas no europeas."
    ],
    "CitasIneludibles": [
      "en el Universo, sólo hay una raza, una sola familia.",
      "Las razas y colores no indican inferioridad en la ley.",
      "el color del cristal con que se mira... el prejuicio que pesaba."
    ]
  },
  "6223 al 6903: Clima, Etnia y Ley Humana vs Ley Divina": {
    "PilotoDeCoherencia": "Explica que el carácter étnico es producto del clima y el medio ambiente sobre los cuerpos, no sobre el espíritu. Critica las leyes humanas que crean delitos artificiales violentando la libertad natural. Sostiene que la verdadera cultura es la que respeta las leyes más sencillas y naturales, ridiculizando las excentricidades de las supremacías sociales.",
    "IdeasSecundarias": [
      "La ley mal dictada es la que hace que actos naturales parezcan faltas o escándalos.",
      "El hombre europeo ha sustituido la libertad divina por un libertinaje legislado.",
      "El espíritu debe dominar todas las especies y climas para descubrir su trinidad."
    ],
    "CitasIneludibles": [
      "el ser étnico lo da el clima.",
      "ni las cosas ni las costumbres son la falta, sino la ley mal dictada.",
      "esta ley, es atentatoria a la ley divina de libertad."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Bloque 2 de Conócete a ti mismo inyectado.');
