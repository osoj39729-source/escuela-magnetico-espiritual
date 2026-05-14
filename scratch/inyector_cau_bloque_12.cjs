const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "6291: Conclusiones de este Capítulo: La religión innecesaria y destructiva": {
    "PilotoDeCoherencia": "La religión ha sido el mayor obstáculo para el progreso moral y material de la humanidad. Lejos de ser necesaria, ha servido únicamente para encender odios, crear castas y dividir a los hombres. Sin religiones, la fraternidad universal y la unificación del mundo habrían ocurrido hace siglos.",
    "IdeasSecundarias": [
      "Los poderes civiles utilizan la religión como fachada para oprimir al pueblo.",
      "La competencia y el estímulo humano habrían florecido mejor bajo una emulación fraternal que bajo el dogma.",
      "La religión destruye la noción de patria universal al crear divisiones nacionales y extranjería."
    ],
    "CitasIneludibles": [
      "Si la religión nunca hubiera existido, la fraternidad humana hubiera sido un hecho ha muchos siglos",
      "no han servido más que para la destrucción de los hombres y para encender los odios, crear castas y clases odiosas"
    ]
  },
  "6421: Párrafo i: la sociedad dividida en clases es un absurdo": {
    "PilotoDeCoherencia": "La división de la sociedad en clases es una violación de la ley divina que establece que todos los hombres son hijos del Creador y Él es su única herencia. No existe singularidad ni privilegio ante la ley de nacimiento y muerte, la cual es igual para el monarca y para el pordiosero.",
    "IdeasSecundarias": [
      "Los espíritus malvados (negros de hollín) son quienes enseñan al hombre los placeres egoístas de la carne y el mal de matar.",
      "El Juez de la causa del Padre no reclama privilegios, pues la ley es una e inmutable para todos.",
      "La supremacía utiliza la división de clases para perpetuar el dominio sobre los desposeídos."
    ],
    "CitasIneludibles": [
      "Todos sin excepción somos hijos del Creador, Padre Universal, y Él es la herencia de todos; no hay singularidad para nadie",
      "ni para mí, que como Juez de su causa me envió y dar la máxima ley... como no hay singularidad en el nacimiento del monarca"
    ]
  },
  "6703: Párrafo ii: la división de razas es Antinatural": {
    "PilotoDeCoherencia": "La división por razas es una construcción antinatural nacida del predominio religioso para fomentar la ignorancia y el odio. Esta división facilita el triunfo de la supremacía al segmentar a la humanidad en bandos enfrentados bajo falsos conceptos de patria.",
    "IdeasSecundarias": [
      "La ignorancia de las masas es un requisito para que la supremacía mantenga sus privilegios.",
      "El hombre que lucha a traición y con odio es inferior a la fiera que mata por instinto de supervivencia.",
      "La unión universal es el fin de la civilización, superando las rayas nacionales impuestas por el orgullo."
    ],
    "CitasIneludibles": [
      "la división de razas es Antinatural... la ignorancia es necesaria para el triunfo de la supremacía",
      "el hombre que lucha no como fiera, cuerpo a cuerpo, sino a traición y desde lejos... es un asesino"
    ]
  },
  "6823: Párrafo iii: la Criminología: sus causas": {
    "PilotoDeCoherencia": "El crimen en la Tierra es un efecto de la ignorancia y el predominio de las religiones. Trincado denuncia que el catolicismo, mediante el ejemplo corrupto de sus líderes (como los Borgia), ha vulgarizado crímenes atroces como el parricidio y el incesto, matando el amor natural del espíritu.",
    "IdeasSecundarias": [
      "En mundos superiores donde impera la comuna, el crimen es inexistente.",
      "Donde más predomina la religión católica, los crímenes son más frecuentes y horrendos.",
      "La supuesta 'absolución' religiosa es una causa indirecta de la reincidencia criminal."
    ],
    "CitasIneludibles": [
      "El crimen no existe en los mundos superiores... en la tierra y mundos inferiores existe el crimen por la ignorancia y porque existen religiones",
      "donde más predomina la religión católica, los crímenes son más y más horrendos",
      "Rodrigo Borgia-Alejandro VI... mató el amor, que ya nacía entonces"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia del CAU Tomo I (Bloque 12) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Inutilidad_Historica_de_la_Religion": {
    "palabras_clave": ["destrucción", "odio", "freno", "progreso", "fraternidad", "innecesaria"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#6291: Conclusiones de este Capítulo: La religión innecesaria y destructiva"],
    "contexto_real": "Axioma que demuestra que las religiones no han aportado nada al progreso moral, sino que han retrasado la unificación humana por milenios."
  },
  "Igualdad_Hereditaria_Divina": {
    "palabras_clave": ["herencia", "hijos del padre", "clases", "monarca", "pordiosero", "igualdad"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#6421: Párrafo i: la sociedad dividida en clases es un absurdo"],
    "contexto_real": "Ley de justicia que establece que no existen privilegios de nacimiento; todos los hombres poseen la misma herencia espiritual ante el Creador."
  },
  "Patogenia_Social_Religiosa": {
    "palabras_clave": ["crimen", "borgia", "catolicismo", "parricidio", "ignorancia", "horror"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#6823: Párrafo iii: la Criminología: sus causas"],
    "contexto_real": "Análisis que vincula el incremento de la criminalidad y la degradación moral con el ejemplo corrupto y las enseñanzas de las religiones dogmáticas."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado.');
