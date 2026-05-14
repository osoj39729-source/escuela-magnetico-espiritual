const fs = require('fs');
const path = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "1692: Párrafo VIII: LA LEY DE MOISES Y EL PUEBLO DE ISRAEL": {
    "PilotoDeCoherencia": "La leyenda de Moisés recibiendo las leyes entre truenos y zarzas es una invención dogmática. Moisés dio una ley escrita basándose en la Razón y el Amor fraternal. La ley es divina y humana a la vez porque ordena el amor al Creador y la fraternidad absoluta entre los hombres.",
    "IdeasSecundarias": [
      "El decálogo es la ley más hermosa por su mandato de amor fraternal.",
      "La justicia de la ley reside en su contenido, no en su supuesta aparición sobrenatural.",
      "Todos los hombres somos hermanos por ser hijos del mismo creador."
    ],
    "CitasIneludibles": [
      "Moisés la dio escrita y es la más hermosa de cuantas leyes pudieran dictarse, pues manda: 'Amar a Dios sobre todas las cosas y al prójimo como a tí mismo'",
      "la parte humana, nos lleva al amor fraternal universal, porque todos universalmente somos hermanos, como hijos del mismo creador."
    ]
  },
  "1802: JUAN EL SOLITARIO Y JESUS NAZARENO": {
    "PilotoDeCoherencia": "División Estructural.",
    "IdeasSecundarias": [],
    "CitasIneludibles": []
  },
  "1803: Párrafo I: UN HOMBRE FUERTE Y AUSTERO: JUAN": {
    "PilotoDeCoherencia": "Juan el Solitario fue un reformador austero y valiente. Su misión no era ritualista, sino moral: denunciar la inmoralidad de los magnates, sacerdotes y reyes, predicando el amor mutuo y la preparación para el Mesías (el espíritu de luz).",
    "IdeasSecundarias": [
      "Aprovechaba las abluciones del Jordán para exhortar al arrepentimiento de los vicios.",
      "Juan sostenía que el ejemplo de rectitud debía venir desde las cúpulas del poder.",
      "Su caballo de batalla era el olvido de las ofensas y el amor fraternal."
    ],
    "CitasIneludibles": [
      "reprendía, allí donde encontraba el vicio y la inmoralidad; pero era más fuerte en la reprensión de los grandes y magnates, porque comprendía que el ejemplo debe darse por los de arriba",
      "su caballo de batalla era, el amor de unos a otros; el olvido de las ofensas"
    ]
  },
  "9823: Jesús de Nazareth.": {
    "PilotoDeCoherencia": "Jesús fue un hombre revolucionario, hijo de un carpintero, cuya doctrina de amor y libertad amenazaba el poder corrupto del clero. No fue un dios, sino un gran sabio que sentó cátedra entre los oprimidos, lo que provocó su asesinato legal por parte de los sacerdotes temerosos de perder su negocio religioso.",
    "IdeasSecundarias": [
      "Jesús predicaba principalmente a los pequeños y humildes, provocando revoluciones morales en las masas.",
      "Los sacerdotes lo persiguieron para proteger su 'inicuo comercio' y privilegios del templo.",
      "Su muerte fue un acto de venganza bárbaro contra la verdad y la justicia."
    ],
    "CitasIneludibles": [
      "sus doctrinas eran de amor y libertad y por esto revolucionarias... predicaba a los pequeños, a los humildes",
      "Los sacerdotes, temerosos de que descubriera su inicuo comercio... se vengaron del modo más bárbaro, aunque fuese contra toda ley."
    ]
  },
  "2145: Párrafo III: JUAN Y JESUS NO SON HOMBRES SOBRENATURALES": {
    "PilotoDeCoherencia": "Ni Juan ni Jesús fueron seres mágicos o divinos; fueron hombres reformadores cuyas vidas reales fueron sepultadas bajo mitos católicos. Las tradiciones populares conservan ecos de sus historias reales, las cuales deben ser rescatadas del fanatismo para comprender su verdadera grandeza humana y espiritual.",
    "IdeasSecundarias": [
      "El fanatismo religioso deforma los hechos históricos reales convirtiéndolos en milagros inexistentes.",
      "El espíritu vivo de estos reformadores acompaña a la humanidad en su búsqueda del Dios de Amor."
    ],
    "CitasIneludibles": [
      "yo he dicho lo que realmente fue y está comprobado con las leyes y costumbres de aquel su pueblo",
      "miradas fuera del fanatismo, suelen representar, en la mayoría de los casos, las verdaderas historias de los hechos"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de caps. 31-36 actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Juan_el_Solitario": {
    "palabras_clave": ["juan", "bautista", "jordán", "abluciones", "magnates", "reformador"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#1803: Párrafo I: UN HOMBRE FUERTE Y AUSTERO: JUAN"],
    "contexto_real": "Gran reformador moral que fustigó la corrupción de los poderosos y preparó el camino para la doctrina de amor universal."
  },
  "Jesus_el_Revolucionario": {
    "palabras_clave": ["jesús", "nazareth", "revolución", "humildes", "sacerdotes", "comercio"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#9823: Jesús de Nazareth."],
    "contexto_real": "Hijo de carpintero y gran sabio cuya doctrina de libertad fue tan revolucionaria que el clero corrupto lo asesinó para proteger sus negocios."
  },
  "Racionalismo_Historico": {
    "palabras_clave": ["sobrenatural", "milagros", "fanatismo", "historia real", "mitos"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#2145: Párrafo III: JUAN Y JESUS NO SON HOMBRES SOBRENATURALES"],
    "contexto_real": "La doctrina trincadista rechaza toda explicación mágica o sobrenatural de los hechos históricos; los grandes maestros son hombres sabios, no dioses."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado.');
