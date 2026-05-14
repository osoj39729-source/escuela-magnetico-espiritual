const fs = require('fs');
const path = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "1349: Párrafo III: LA VEDANTA (CAPITULO SEXTO: LAS RELIGIONES: SU FIN)": {
    "PilotoDeCoherencia": "La religión Veda (representada en el símbolo de Adán y Eva) enseñaba el culto interno del amor. Sin embargo, los sacerdotes del culto primitivo (Fulaico), ambiciosos de poder, se infiltraron en ella para pervertirla, creando la esclavitud religiosa y la división de castas.",
    "IdeasSecundarias": [
      "La alianza entre sacerdotes corruptos y guerreros fue la fórmula original de opresión de los pueblos.",
      "El materialismo y la malicia superaron temporalmente a los creyentes faltos de fe fuerte."
    ],
    "CitasIneludibles": [
      "los sacerdotes de la Fulaica, sabios en la malicia y la superstición, iban pasando a la Veda y tomando las costumbres, no para imitarla, sino para desfigurarla."
    ]
  },
  "1413: Párrafo IV: LA LEY ESCRITAODECALOGO DE MOISES": {
    "PilotoDeCoherencia": "El pueblo de Israel (que significa verdaderamente hombre de fe) no fue el favorito de un dios, sino la raza de espíritus misioneros obligados a sufrir la opresión egipcia para templar su carácter, puesto que el progreso material y espiritual sólo se conquista con lucha, nunca se regala.",
    "IdeasSecundarias": [
      "Abraham separó a los hombres de fe de los idólatras fulaicos.",
      "La esclavitud sirvió para aprender la civilización a través de la vicisitud y la resistencia."
    ],
    "CitasIneludibles": [
      "el progreso se conquista; no se da de gracia; y sin las luchas y las vicisitudes, no se puede adquirir el conocimiento y la fuerza de progresar",
      "Israel que quiere decir, hombre de fe, extendióse y afirmó este pueblo por las tribus y no odió a los fulaicos... sino que toman el ejemplo, de la astucia"
    ]
  },
  "1489: Párrafo V: TRAGEDIA ENTRE MOISESYEL PUEBLO Editado electrónicamente por la Cátedra \"Maestro Nato Juan Donato Trincado\"": {
    "PilotoDeCoherencia": "Los milagros no existen. Los hechos asombrosos de Moisés eran obra del magnetismo, el desdoblamiento del alma y la ciencia espiritual profunda (el secreto de Abraham), que las masas ignorantes bautizaron supersticiosamente como milagros o portentos sobrenaturales.",
    "IdeasSecundarias": [
      "Moisés practicaba la reconcentración del alma para obtener ciencia de los mundos de luz.",
      "Lo sobrenatural es simplemente ley natural no comprendida por el vulgo."
    ],
    "CitasIneludibles": [
      "Con la ilustración que el alma recibe en esas concentraciones, obra cosas nuevas, que por no comprenderlas... las llaman sobrenaturales y prodigios, y hoy, milagros.",
      "No admito lo sobrenatural, prodigios, ni milagros y, Moisés, veo que era demasiado hombre y no pudo aceptar éstos"
    ]
  },
  "1579: Párrafo VI: ALGUNAS RELIGIONES QUE SIGUEN LA LEY DEL SINAI": {
    "PilotoDeCoherencia": "El símbolo de la cruz (Cristo, Cirus, Krisna, Agnis) no nació como un castigo divino. Fue el antiguo instrumento científico de dos maderos frotados para producir fuego y luz. La religión dogmática distorsionó este símbolo de vida convirtiéndolo en un patíbulo sangriento.",
    "IdeasSecundarias": [
      "Desde Adán y Jacob, Israel conoció la cruz como un signo de producción de luz.",
      "Los nombres cambian según el pueblo (Krisna, Cristo), pero el objeto era el mismo."
    ],
    "CitasIneludibles": [
      "El cirus en los fulaicos... lo constituía dos maderas duras atornilladas por el centro, que haciéndolas girar con vigor producía el fuego",
      "Israel lo llamó Cristo y fue su signo... emblema, que en el correr de los tiempos los hombres convertirían en señal afrentosa, por lo que se usó como patíbulo."
    ]
  },
  "1637: Párrafo VII: LA RELIGION BUDAOIGLESIA BUDA": {
    "PilotoDeCoherencia": "Toda religión y sociedad se corrompe cuando instaura la desigualdad, el privilegio y las castas. El orgullo de sus directores genera despotismo, lo cual inevitablemente provoca cismas y la creación de nuevas doctrinas (como el cisma de Buda contra los Brahmanes) en busca de justicia.",
    "IdeasSecundarias": [
      "La equidad es imposible donde impera el sistema de castas o privilegios.",
      "El descontento del pueblo oprimido es la tierra fértil para las nuevas escisiones religiosas."
    ],
    "CitasIneludibles": [
      "olvidan el principio de igualdad de todos los seres, y la equidad de la justicia es substituida por el orgullo y el despotismo",
      "la justicia no es equitativa, y ésta, no puede existir donde existen castas, privilegios o supremacías."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de caps. 25-30 actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Mito_de_Milagros": {
    "palabras_clave": ["milagro", "sobrenatural", "prodigios", "reconcentración", "moisés", "magnetismo"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#1489: Párrafo V: TRAGEDIA ENTRE MOISESYEL PUEBLO Editado electrónicamente por la Cátedra \"Maestro Nato Juan Donato Trincado\""],
    "contexto_real": "Los milagros no existen. Todo acto llamado milagro por la ignorancia religiosa es el producto del conocimiento de las leyes del magnetismo universal y la concentración del alma."
  },
  "Simbolo_de_la_Cruz": {
    "palabras_clave": ["cruz", "cristo", "cirus", "fuego", "patíbulo", "afrenta"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#1579: Párrafo VI: ALGUNAS RELIGIONES QUE SIGUEN LA LEY DEL SINAI"],
    "contexto_real": "La cruz nunca fue un objeto de muerte divina. Era el instrumento material de madera primitivo para producir fuego. Las religiones la pervirtieron en un símbolo afrentoso de muerte."
  },
  "Corrupcion_Social": {
    "palabras_clave": ["castas", "privilegios", "equidad", "despotismo", "escisión"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#1637: Párrafo VII: LA RELIGION BUDAOIGLESIA BUDA"],
    "contexto_real": "La causa raíz de las revoluciones, divisiones religiosas y cismas es la institución del privilegio y las clases, que destruyen la equidad y obligan a la escisión en busca de libertad."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado.');
