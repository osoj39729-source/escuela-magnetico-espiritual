const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "777: Todo es Magnetismo Espiritual.": {
    "PilotoDeCoherencia": "El Magnetismo Espiritual es la fuerza colectiva resultante de la suma de todos los espíritus del universo. Es la potencia que mantiene la solidaridad cósmica y que el hombre solo comprenderá cuando abandone los regímenes de concupiscencia y acepte la vida comunal universal.",
    "IdeasSecundarias": [
      "La humanidad necesita siglos de estudio en mundos superiores para entender la unidad del principio y el fin.",
      "Los sistemas políticos previos han sido errores nacidos de la perversidad de los aberrados.",
      "El Maestro-Juez articula estas leyes para encauzar a la humanidad hacia la Luz."
    ],
    "CitasIneludibles": [
      "cercioraros de que, «Todo es Magnetismo Espiritual» que lo componen las fuerzas totales de todos los espíritus del Universo",
      "¿Podríamos llegar a todo eso con los regímenes que hasta hoy tuvimos, todos error por causa de las concupiscencias y perversidad?"
    ]
  },
  "811: Código de Amor UniversAl: Máximun de la Ley del Padre": {
    "PilotoDeCoherencia": "División Estructural.",
    "IdeasSecundarias": [],
    "CitasIneludibles": []
  },
  "819: Prólogo A lA CosmogonÍA": {
    "PilotoDeCoherencia": "La Tierra ha concluido su Juicio Final y ha iniciado la Era de la Verdad, uniéndose a la armonía de la cosmogonía. Los espíritus que no supieron administrar sus talentos han sido despojados y trasplantados a mundos primitivos (viveros) para su purificación mediante el trabajo arduo.",
    "IdeasSecundarias": [
      "El Código se fundamenta en la Liquidación de Cuentas universal pedida por el Padre.",
      "Los 'hijos del trabajo' son los encargados de ayudar a los rezagados mediante injertos de luz en los mundos viveros.",
      "La Tierra báñase ya en luz propia, terminando su periodo histórico de oscuridad."
    ],
    "CitasIneludibles": [
      "Ya la tierra báñase en luz propia y se confunde en la vuestra por la armonía de la misma ley. Ya la tierra pasó el momento histórico de su juicio final",
      "han sido muchos los despojados de los talentos que se les dio porque no los supieron administrar... han sido transplantadas al vivero"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia del CAU Tomo I (Bloque 2) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Magnetismo_Espiritual": {
    "palabras_clave": ["magnetismo", "espíritus", "potencia", "unión", "fuerza colectiva"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#777: Todo es Magnetismo Espiritual."],
    "contexto_real": "Suma de las fuerzas y pensamientos de todos los espíritus del universo que rige la armonía cosmogónica."
  },
  "Viveros_Espirituales": {
    "palabras_clave": ["viveros", "despojados", "retrógrados", "trasplante", "purificación", "talentos"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#819: Prólogo A lA CosmogonÍA"],
    "contexto_real": "Mundos primitivos de expiación donde son enviados los espíritus que fracasaron en la Tierra para ganar fortaleza mediante la lucha natural."
  },
  "Era_de_la_Verdad": {
    "palabras_clave": ["era de la verdad", "juicio final", "1934", "luz propia", "liquidación de cuentas"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#819: Prólogo A lA CosmogonÍA"],
    "contexto_real": "Periodo histórico iniciado tras el juicio final de la Tierra, marcando su integración definitiva a la fraternidad universal."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado.');
