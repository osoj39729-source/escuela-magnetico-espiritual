const fs = require('fs');
const path = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-1_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "La Palabra de José: El Fin de la Idolatría": {
    "PilotoDeCoherencia": "Recoge el testimonio del espíritu del Patriarca José, quien afirma que Jesús es su hijo carnal, nacido de hombre y mujer, y que Francisco Xavier es superior a Jesús en grado de progreso. Este axioma destruye el dogma de la divinidad de Jesús y lo sitúa como un hermano en la escala evolutiva infinita.",
    "IdeasSecundarias": [
      "Jesús no es redentor ni salvador; su misión fue de ejemplo, no de sacrificio.",
      "La idolatría a Jesús es un comercio del clero para dominar conciencias.",
      "Xavier es el Capitán y guía de la nueva era de justicia."
    ],
    "CitasIneludibles": [
      "Jesús, hijo mío es... Francisco Xavier es mayor que mi hijo.",
      "si Jesús fuera eso (divino), pronto quedaría desmentido en la razón fría de la filosofía.",
      "el misionero no se pertenece a sí mismo: pertenece a todos."
    ]
  },
  "EMECU: La Cátedra del Universo": {
    "PilotoDeCoherencia": "Declara la fundación de la Escuela Magnético-Espiritual de la Comuna Universal como la única institución legítima de la Verdad en la Tierra. Define el Espiritismo como la 'Esciencia' (Esencia + Ciencia) y proscribe todo rito, misterio o simbología religiosa.",
    "IdeasSecundarias": [
      "La Escuela no es un oratorio; es un centro de estudio de Astronomía, Filosofía y Ciencias.",
      "La electricidad es el lenguaje de la creación; el espiritismo es su gramática.",
      "El Juez (Trincado) es el representante directo de la solidaridad universal en la Tierra."
    ],
    "CitasIneludibles": [
      "ya no se llamará 'Oratorio', sino Escuela.",
      "la caridad es injusticia; la beneficencia es justicia comunal obligatoria.",
      "el vacío no existe; es vibración del pensamiento de Eloí."
    ]
  },
  "Cosmogonía: La Solidaridad de los Mundos": {
    "PilotoDeCoherencia": "Establece la conexión de la Tierra con mundos hermanos como Marte y Venus, donde la humanidad es más dócil y la ciencia más avanzada. Define a la Tierra como un mundo de expiación que debe integrarse a la fraternidad universal mediante el progreso racional.",
    "IdeasSecundarias": [
      "En Marte, la electricidad es mucho más avanzada y se usa para el bienestar común.",
      "Venus es un mundo de luz y armonía donde el odio ha sido erradicado.",
      "La Tierra es el 'benjamín' de la familia de mundos, aún en pañales de ignorancia."
    ],
    "CitasIneludibles": [
      "aquí la electricidad es más adelantada que la de la tierra (Marte).",
      "el universo todo conquistarás, con la bondad y la ciencia.",
      "la solidaridad no traza rumbos; los traza el hombre."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Bloque 3 de Filosofía Enciclopédica Universal Tomo 1 inyectado.');
