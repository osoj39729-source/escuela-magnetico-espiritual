const fs = require('fs');
const path = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "3224: Párrafo II: EL ESPÍRITU DE VERDAD": {
    "PilotoDeCoherencia": "El Espíritu de Verdad confirma la unidad de la cosmogonía a través de la 'cadena dorada del amor'. El progreso es una ley inflexible y universal. El galardón del espíritu es proporcional a la obra ejecutada en beneficio de la común familia humana.",
    "IdeasSecundarias": [
      "Todos los mundos habitados son moradas de trabajo regidas por la misma ley de armonía.",
      "El conocimiento de sí mismo y la sumisión a la ley de amor son los únicos caminos de elevación.",
      "Nadie puede sustraerse al progreso, que es el fin supremo de todo espíritu."
    ],
    "CitasIneludibles": [
      "están todos unidos por la cadena dorada del amor, en la carne y el espíritu... todos los arrastra la misma fuerza y los conduce al mismo fin: al eterno progreso",
      "por el trabajo, por la sumisión a la ley... con el conocimiento de sí mismo... os habéis de elevar"
    ]
  },
  "10484: Párrafo III: LLAMADAAJUICIOALOS ESPÍRITUSYLOS HOMBRES": {
    "PilotoDeCoherencia": "Se convoca al juicio de la luz sobre el entendimiento humano. El hombre, limitado por el prejuicio y la materialidad, ha ignorado su destino y la ley de afinidad. Es hora de que el hombre se atreva a pasar de la materia para descubrir su origen y su herencia como espíritu racional.",
    "IdeasSecundarias": [
      "El hombre no es menos inteligente que el espíritu liberto, solo le falta voluntad para romper el prejuicio.",
      "La ley de afinidad es una ciencia exacta que rige las relaciones universales.",
      "El desconocimiento del propio destino es la causa del estancamiento humano."
    ],
    "CitasIneludibles": [
      "El hombre, no es menos inteligente que el espíritu liberto, pero no se atreve a dejar el prejuicio y dar un paso sobre lo que encuentra escrito",
      "no sabe su destino; porque no ha estudiado, de donde viene, porqué está aquí y a donde va."
    ]
  },
  "10699: EPÍLOGO": {
    "PilotoDeCoherencia": "El juicio ha concluido para la humanidad presente. Dios está en la naturaleza, pero el hombre cierra los ojos del espíritu por sus prejuicios materiales. El cuerpo es solo un 'traje' que debe conservarse, pero la verdadera belleza reside en el espíritu que lo habita.",
    "IdeasSecundarias": [
      "La lozanía de la materia es efímera; lo único real es el ser espiritual que se viste de formas.",
      "Abrir los ojos del espíritu es necesario para ver al Creador en toda su obra expuesta.",
      "El prejuicio es la venda que impide ver la perfección de la ley en la vida cotidiana."
    ],
    "CitasIneludibles": [
      "la humanidad, en sus prejuicios, abre los ojos del cuerpo y cierra los del espíritu",
      "el cuerpo que es un traje del espíritu y debe procurarse conservar... lozanía de la materia, poco aprovechará si los hombres no han visto al ser que se viste de aquella escultura"
    ]
  },
  "10788: Párrafo II: ¿ QUIEN SOY YO ?": {
    "PilotoDeCoherencia": "Revelación de la identidad espiritual de Joaquín Trincado: es Jaime, el hermano de Jesús. Su misión es cumplir el juramento hecho ante la cruz: borrar la infamia del nombre 'Cristo' (peligro) y rescatar la verdad de su hermano de las manos de sus verdugos religiosos.",
    "IdeasSecundarias": [
      "El espíritu archiva todas sus encarnaciones y las revela cuando es justicia para el progreso.",
      "Jesús confirmó la preexistencia del espíritu al decir 'Yo fui antes que Moisés'.",
      "La afinidad espiritual trae de regreso a los hermanos para defender la verdad ultrajada."
    ],
    "CitasIneludibles": [
      "Dije la contestación de Jesús... 'Yo fui antes y después de Moisés'",
      "¿Y yo quién soy? En mi traje soy el obrero; pero en esta materia encallecida... se envuelve, el que juró al Padre, quitar el peligro 'Cristo'... Jaime, hace juramento de borrar de su hermano, la infamia."
    ]
  },
  "11305: PUNTO FINAL. LA BESTIA 666": {
    "PilotoDeCoherencia": "El Creador es Padre y no 'Dios'. El término Dios Amor fue una sustitución pedagógica para eliminar ídolos. El Padre no deshereda a nadie, pues todos son sus hijos. El Espiritismo Luz y Verdad es la confirmación definitiva de la ley de amor que pone fin al reino de la Bestia (el error).",
    "IdeasSecundarias": [
      "Solo el espíritu es racional y creador de formas; el alma es el archivo sensitivo compartido con los animales.",
      "El Padre no lleva la guerra a sus hijos ni permite que se pierda un solo espíritu.",
      "La Bestia 666 representa a las instituciones que han lucrado con el error y la ignorancia."
    ],
    "CitasIneludibles": [
      "es padre y no Dios, aunque nosotros hayamos dicho 'Dios Amor', forzados, para sustituir en la mente humana a todos los Dioses",
      "solo el espíritu es racional, inteligente y creador de formas; hasta de nuestros propios cuerpos."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de caps. finales actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Espiritu_de_Verdad": {
    "palabras_clave": ["verdad", "comunicación", "cadena dorada", "progreso", "ley de armonía"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#3224: Párrafo II: EL ESPÍRITU DE VERDAD"],
    "contexto_real": "Voz espiritual colectiva y suprema que guía a la humanidad hacia la unificación y el eterno progreso mediante el amor."
  },
  "Jaime_el_Obrero": {
    "palabras_clave": ["jaime", "trincado", "hermano de jesús", "juramento", "peligro cristo", "obrero"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#10788: Párrafo II: ¿ QUIEN SOY YO ?"],
    "contexto_real": "Identidad espiritual del Maestro Trincado, cuya misión es limpiar el nombre de su hermano Jesús de las calumnias dogmáticas."
  },
  "Padre_Universal": {
    "palabras_clave": ["padre", "creador", "no es dios", "no castiga", "amor universal"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#11305: PUNTO FINAL. LA BESTIA 666"],
    "contexto_real": "El principio creador único que, como Padre, ama a todos sus hijos por igual y no admite el castigo ni la desheredación espiritual."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado.');
