const fs = require('fs');
const path = 'F:/trincado/public/data/contents/los-extremos-se-tocan_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "721 al 1052: Leyes Fatales: Afinidad y Justicia": {
    "PilotoDeCoherencia": "Describe las leyes de Afinidad, Justicia, Igualdad y Compensación como los brazos de la ley de Amor. Establece que la Tierra tiene 123 millones de siglos y que el hombre apareció hace 45 millones. Define la Ley de Afinidad como la administradora que reúne átomos y causas con precisión matemática para producir efectos (como el hombre).",
    "IdeasSecundarias": [
      "La Luna es un satélite nacido de un parto de la Tierra hace 55 millones de siglos para dar luz continua.",
      "El espíritu debe dominar el enjambre de instintos (Arca de Noé) para formar la conciencia.",
      "Las catástrofes naturales son partos o ajustes de la Tierra bajo la Ley de Justicia."
    ],
    "CitasIneludibles": [
      "el hombre apareció hombre y no animal.",
      "La ley de Afinidad... reúne en la exactitud matemática de peso, medida y tiempo.",
      "el hombre es la realidad del símbolo del arca de Noé."
    ]
  },
  "1053 al 1386: Adán, Eva y la Familia Misionera": {
    "PilotoDeCoherencia": "Redefine a Adán y Eva como jefes de una misión de 29 espíritus de mundos superiores. Explica que no fueron los primeros humanos, sino los regeneradores que trajeron la sabiduría a una humanidad primitiva. Revela que José y María son las últimas personalidades de Adán y Eva, cerrando el ciclo de la regeneración.",
    "IdeasSecundarias": [
      "Shet es el Investigador y Legislador, autor del Sánscrito y primer hijo de la misión.",
      "La expulsión del 'Paraíso' fue en realidad el descenso voluntario de espíritus sabios a un mundo primitivo (la Tierra).",
      "La raza Adámica trajo las artes, las ciencias y la sabiduría para iluminar a los desterrados de otros mundos."
    ],
    "CitasIneludibles": [
      "Adán y Eva... son los jefes de una familia misionera.",
      "José y María... eran el mismo Adán y la misma Eva.",
      "Shet, el investigador y legislador... autor del sánscrito."
    ]
  },
  "El Cristo: La Palabra de Peligro": {
    "PilotoDeCoherencia": "Desvela que 'Cristo' no es un nombre divino, sino una exclamación de peligro hecha por Jacob al ver proféticamente los lutos que las religiones traerían. Explica cómo la malicia sacerdotal convirtió una advertencia en un ídolo ('Dios-Cristo') para esclavizar a los hombres.",
    "IdeasSecundarias": [
      "Jacob ungió la piedra del peligro con aceite para prevenir a sus descendientes.",
      "La historia del 'Cristo' es el apoteosis del error y la malversación de la verdad.",
      "El peligro anunciado por Jacob se cumple en los ríos de sangre de las guerras religiosas."
    ],
    "CitasIneludibles": [
      "la palabra Cristo... significa peligro.",
      "Cristo, peligro anunciado... hoy sacudió su espinazo.",
      "lo han hecho Dios; pero dios y los dioses ídolos, son insaciables."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Bloque 2 de Los Extremos se Tocan inyectado.');
