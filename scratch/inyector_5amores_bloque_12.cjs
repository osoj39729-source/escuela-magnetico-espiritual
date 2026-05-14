const fs = require('fs');
const path = 'F:/trincado/public/data/contents/los-cinco-amores_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "13355: CAPÍTULO OCTAVO: La Sabiduría Comunal y sacar Bien del Mal": {
    "PilotoDeCoherencia": "En la Comuna, la sabiduría deja de ser un privilegio de clase para convertirse en un bien universal. Trincado define la verdadera sabiduría como la capacidad ética de sacar bien del mal y tomar de este el menos. Establece que los descubrimientos científicos serán socializados instantáneamente por un Consejo Supremo, permitiendo que toda la humanidad progrese al unísono.",
    "IdeasSecundarias": [
      "La ciencia es el primer grado de la sabiduría, pero su aplicación moral es lo que define al verdadero sabio.",
      "El orgullo de poseer conocimientos exclusivos es un vicio que la Comuna elimina mediante la educación igualitaria.",
      "La justicia exige que todos los seres disfruten al mismo momento de cada grado de progreso conquistado por el espíritu."
    ],
    "CitasIneludibles": [
      "la verdadera sabiduría consiste en saber sacar bien del mal y tomar del mal el menos.",
      "en un solo día... darla hecha sabiduría a todo el mundo",
      "disfruten al mismo momento de cada grado del progreso."
    ]
  },
  "12710: CAPÍTULO QUINTO al 13555: CAPÍTULO NOVENO: El Fin de la Expiación y la Solidaridad": {
    "PilotoDeCoherencia": "El amor universal rompe las fronteras del pensamiento y la geografía. Tras 44 millones de siglos de lucha y expiación, la Tierra ingresa en la Solidaridad Universal y el régimen de la Comuna. El hombre liberado de la religión reclama todo el mundo para su existencia y todo el universo para su pensamiento, reconociendo la filiación única de todos los espíritus.",
    "IdeasSecundarias": [
      "La religión es el freno de los ignorantes; el sabio necesita el universo infinito para expandirse.",
      "Poner fronteras al amor es una idea irracional e imposible de sostener ante la ley del espíritu.",
      "La tribu fue el inicio del amor humano; la Comuna es su perfección en la solidaridad con la cosmogonía."
    ],
    "CitasIneludibles": [
      "Ponerle fronteras al amor, es como ponérselas al pensamiento: una idea irracional: imposible.",
      "Yo necesito todo el mundo como hombre y mi pensamiento todo el Universo infinito.",
      "EL AMOR COMUNAL ES LA ENTRADA EN LA SOLIDARIDAD UNIVERSAL",
      "proceso de los mundos de expiación, que en la tierra ha durado 44 millones 250 mil siglos"
    ]
  },
  "13803: CAPÍTULO DIEZ: El Camino al Centro Vibratorio (Eloí)": {
    "PilotoDeCoherencia": "El Amor Universal es el aldabón que repica en la casa paterna. Solidarizarse con la Cosmogonía permite al espíritu regresar al centro vibratorio de la vida, donde reside el Padre (Eloí). Este regreso marca el triunfo de la familia humana tras eones de lucha en la materia, siendo bendecidos para continuar la creación en el infinito.",
    "IdeasSecundarias": [
      "El régimen comunal perfecto permite al hombre comprender su estirpe divina y su grandeza eterna.",
      "Eloí recibe a sus hijos vencedores y los vuelve a enviar a acrecentar la creación en otros hermanos mundos.",
      "La fiesta universal celebra el regreso de una familia que triunfó sobre las bajas pasiones de la materia."
    ],
    "CitasIneludibles": [
      "EL AMOR UNIVERSAL NOS LLEVA A NUESTRO PADRE",
      "emprender el camino decididos hacia el centro vibratorio... donde vibra nuestro Padre",
      "evocan a ELOÍ, el que, en todo su amor, los recibe... y los vuelve a mandar a continuar la Creación"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Los Cinco Amores (Bloque 12) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Sabiduria_sacar_Bien_del_Mal": {
    "palabras_clave": ["sabiduría", "bien del mal", "ética", "consejo supremo", "ciencia socializada", "conocimiento"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#13355: CAPÍTULO OCTAVO: La Sabiduría Comunal y sacar Bien del Mal"],
    "contexto_real": "Definición práctica de la sabiduría racionalista centrada en la transmutación de la experiencia negativa en progreso moral."
  },
  "Centro_Vibratorio_Paterno": {
    "palabras_clave": ["centro vibratorio", "eloí", "casa paterna", "regreso", "vencedores", "vida universal"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#13803: CAPÍTULO DIEZ: El Amor Universal nos lleva a nuestro Padre"],
    "contexto_real": "Origen y destino final de todos los espíritus, donde la voluntad del Creador vibra en armonía absoluta."
  },
  "Solidaridad_Universal_Comuna": {
    "palabras_clave": ["solidaridad universal", "expiación", "fin de lucha", "cosmogonía", "comunización", "universo"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#12710: CAPÍTULO QUINTO al 13555: CAPÍTULO NOVENO: El Fin de la Expiación y la Solidaridad"],
    "contexto_real": "Estado de integración planetaria y cósmica que marca el fin del sufrimiento obligatorio y el inicio de la vida consciente."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para Los Cinco Amores.');
