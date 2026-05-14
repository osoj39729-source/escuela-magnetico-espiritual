const fs = require('fs');
const path = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "5439 al 5690: Astronomía y Espiritismo: El Telescopio del Espíritu": {
    "PilotoDeCoherencia": "Critica a la astronomía materialista por negar la vida en otros mundos y la influencia de los astros (astrología racional). Reivindica a Kepler y Galileo como médiums que, mediante su percepción espiritual, sentaron las leyes del movimiento universal antes de que los aparatos físicos pudieran confirmarlas.",
    "IdeasSecundarias": [
      "Marconi es el ejemplo del electricista-espiritista que busca la comunicación universal.",
      "La vida es luz y la luz es electricidad; el astrónomo debe ser primero electricista para comprender el cosmos.",
      "La astrología racional es el conocimiento de las influencias magnéticas entre los mundos."
    ],
    "CitasIneludibles": [
      "el espiritismo es tan antiguo como el Creador.",
      "Marconi... no puede serlo sin ser espiritista, porque la electricidad es la demostración de la vida.",
      "Kepler... con sólo el telescopio de su mediumnidad, sentó leyes."
    ]
  },
  "5691 al 6545: Electricidad: La Madre de la Creación": {
    "PilotoDeCoherencia": "Define la Electricidad como la materialización del Éter y el Alma Universal. Es la substancia única que el espíritu utiliza como instrumento para crear formas y demostrar la vida. Establece que el espíritu es la inteligencia (voluntad) y la electricidad es la fuerza (potencia) inseparable de la acción espiritual.",
    "IdeasSecundarias": [
      "Éter, Alma y Electricidad son la misma substancia en diferentes grados de vibración.",
      "El materialismo comete el error de usar el efecto (electricidad) negando la causa (espíritu).",
      "La electricidad no tiene inteligencia; es el espíritu quien la dirige para formar el universo."
    ],
    "CitasIneludibles": [
      "Éter, Alma y Electricidad son la misma cosa y la única substancia existente.",
      "la electricidad... es la materialización de las ondas etéreas.",
      "la inteligencia y la voluntad son sólo del espíritu."
    ]
  },
  "13340 al 13390: La Superchería: El Crimen contra el Progreso": {
    "PilotoDeCoherencia": "Denuncia el fraude medianímico (superchería) como la mayor vergüenza del espiritualismo. Define al superchero como aquel que desvía la verdad con maliciosa astucia para provecho propio o retroceso del progreso. Responsabiliza a la superchería de las hecatombes mundiales y del desprestigio del Espiritismo.",
    "IdeasSecundarias": [
      "El médium superchero es un instrumento de la muerte y la mentira; el médium de luz es servidor de la vida.",
      "No existe castigo suficiente para el fraude espiritual; es preferible la muerte física a la caída moral del engaño.",
      "La mixtificación puede ser una debilidad, pero la superchería es una delincuencia consciente y agravada."
    ],
    "CitasIneludibles": [
      "Superchería dice: engaño, dolo y fraude.",
      "antes prefieran la muerte que caer en la superchería.",
      "la superchería es la causa del desprestigio del espiritismo y de su marcha penosa."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Bloque 3 de El Espiritismo Estudiado inyectado.');
