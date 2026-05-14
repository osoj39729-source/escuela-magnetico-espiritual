const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "5194: Párrafo v: el matrimonio dogmático es nulo ante la ley divina": {
    "PilotoDeCoherencia": "El matrimonio impuesto por dogmas religiosos o leyes civiles opresoras no tiene validez ante la ley divina. El espíritu tiene el derecho inalienable de no convivir con seres antipáticos y el divorcio es la herramienta necesaria para restaurar la libertad de amar y cumplir la ley de afinidad.",
    "IdeasSecundarias": [
      "Las leyes naturales no excluyen a nadie del uso de la carne; el instinto es irresistible y debe satisfacerse en justicia.",
      "El matrimonio dogmático es un atentado contra el libre albedrío y la expansión del espíritu.",
      "La causa principal del desequilibrio moral en ambos sexos es la imposición de uniones sin amor real."
    ],
    "CitasIneludibles": [
      "El espíritu no está obligado a vivir con los que le son antipáticos",
      "el matrimonio dogmático... es un atentado a la ley divina de 'creced y multiplicaos' y al libre albedrío de los espíritus"
    ]
  },
  "5350: Punto primero: mundos infinitos y tipos de mundos": {
    "PilotoDeCoherencia": "El universo es infinito y la creación de mundos es un proceso continuo que pasa por los estados gaseoso, líquido y sólido. El hombre debe habitar todas las moradas en su camino de progreso, comunicándose con mundos superiores para recibir luz e inferiores para brindar ayuda por amor.",
    "IdeasSecundarias": [
      "Los mundos se disgregan al cumplir su misión para formar nuevas partículas de vida cósmica.",
      "La pluralidad de mundos habitados es una realidad confirmada por el Testamento de Abraham y las comunicaciones espirituales.",
      "El Dante fue un misionero que describió los estados de conciencia del espíritu en mundos de expiación."
    ],
    "CitasIneludibles": [
      "Los mundos son infinitos y el hombre ha de vivir en todos los que hoy existen, pero la creación sigue y no se acaba",
      "la creación de los mundos es igual para todos, empezando en el estado gaseoso, pasando al líquido y de éste al sólido"
    ]
  },
  "5531: Punto segundo: la emigración Adámica": {
    "PilotoDeCoherencia": "La raza adámica no nació en la Tierra, sino que fue una emigración de espíritus expulsados de un mundo superior tras su juicio final hace 5671 años. Su misión era actuar como redentores y misioneros para civilizar a la humanidad primitiva de la Tierra, compensando con sabiduría su retraso espiritual previo.",
    "IdeasSecundarias": [
      "La llegada de Adán aportó una sabiduría superior que permitió a la Tierra avanzar hacia su propio día de luz.",
      "Los expulsados de mundos de dicha son destinados a mundos de lucha para reconocer el valor del progreso.",
      "Adán y los suyos trajeron el conocimiento del Dios Único para unificar a las tribus antropófagas de la Tierra."
    ],
    "CitasIneludibles": [
      "hace 5671 años... aparece la raza adámica con progreso y sabiduría muy superior a la que la tierra poseía",
      "aquellos expulsados se le impone entonces, en justicia, llevar a aquel mundo al progreso material... allí tienen que ser Misioneros Redentores"
    ]
  },
  "5601: Párrafo i: las religiones, causa del desconcierto": {
    "PilotoDeCoherencia": "Las religiones han sido la causa del caos y la antropofagia en la Tierra primitiva. Adán y su hijo Shét establecieron el monoteísmo para unificar a los pueblos. Trincado aclara que la trinidad es un atributo exclusivo del hombre (espíritu, alma y cuerpo) y que Dios es absoluta y únicamente Uno.",
    "IdeasSecundarias": [
      "Adán utilizó los cantos de los Vedas para civilizar la mente humana.",
      "El budismo original contenía los símbolos de la trinidad humana que las religiones pervirtieron en divinidad.",
      "El conocimiento del Dios Único fue el lema unificador de todo el oriente bajo la ley de Shét."
    ],
    "CitasIneludibles": [
      "la religión fue la causa de este desconcierto... bajo el lema de un Dios único, que proclamó Adán y los suyos",
      "la trinidad, no de Dios, sino del hombre, porque el hombre es trinidad en cuerpo, alma y espíritu, y Dios es uno y único"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia del CAU Tomo I (Bloque 10) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Raza_Adamica_Misionera": {
    "palabras_clave": ["adán", "shét", "emigración", "misioneros", "expulsados", "5671 años"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#5531: Punto segundo: la emigración Adámica"],
    "contexto_real": "Grupo de espíritus avanzados expulsados de un mundo de dicha para civilizar a la Tierra primitiva, cumpliendo una misión de redención y progreso."
  },
  "Trinidad_Humana": {
    "palabras_clave": ["trinidad", "espíritu", "alma", "cuerpo", "shét", "budismo"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#5601: Párrafo i: las religiones, causa del desconcierto"],
    "contexto_real": "La única trinidad real existente, compuesta por los tres componentes del ser humano. Dios es estrictamente Uno."
  },
  "Mundos_de_Expiacion_y_Dicha": {
    "palabras_clave": ["moradas", "grados", "dante", "expiación", "dicha", "gaseoso"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#5350: Punto primero: mundos infinitos y tipos de mundos"],
    "contexto_real": "Clasificación de los infinitos mundos del universo según su grado de progreso y el estado de conciencia de sus habitantes."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado.');
