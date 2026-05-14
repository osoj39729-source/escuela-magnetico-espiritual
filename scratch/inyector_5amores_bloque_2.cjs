const fs = require('fs');
const path = 'F:/trincado/public/data/contents/los-cinco-amores_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "1786: CAPÍTULO OCTAVO: Inexistencia del Amor Religioso": {
    "PilotoDeCoherencia": "Trincado niega categóricamente la existencia del amor religioso, definiéndolo como una amalgama de pasiones humanas bajo el nombre de religión. El amor a la religión no es amor real, sino fanatismo o conveniencia. El verdadero amor emana del hombre que vive en la ley natural, no de dogmas externos impuestos por deidades inexistentes.",
    "IdeasSecundarias": [
      "La religión es el resultado de la colectivización de las pasiones bajo una creencia o necesidad.",
      "El Dios religioso ha sido juzgado y descartado por la Filosofía Austera, haciendo que su 'amor' sea un vacío histórico.",
      "El porvenir de la humanidad se basa en ideales racionales, no en tradiciones religiosas efímeras."
    ],
    "CitasIneludibles": [
      "no hay amor religioso, aunque haya amor a la religión, que no es lo mismo",
      "la religión es el resultado del conjunto de las pasiones de los hombres colectivizados"
    ]
  },
  "1936: CAPÍTULO NOVENO y 2286: CAPÍTULO DIEZ: Propiedad, Fraternidad y Sacrificio": {
    "PilotoDeCoherencia": "El concepto de propiedad privada es el origen del 'amor a lo ajeno' y la ruptura de la fraternidad universal. Trincado aboga por la Comuna, donde la tierra es de todos y el sacrificio personal, impulsado por el propio espíritu, es la fuerza regeneradora de los pueblos. El sacrificio no es una carga, sino una necesidad del espíritu para cumplir su destino misionero.",
    "IdeasSecundarias": [
      "La sabiduría de Shet, Confucio, Moisés y Jesús coincide en la hermandad universal y el desprendimiento material.",
      "Los moralistas no poseían nada material porque estaban imbuidos del espíritu de la fraternidad absoluta.",
      "La vida de los individuos y los pueblos se desliza entre esperanzas y dolores, requiriendo la acción del espíritu regenerador."
    ],
    "CitasIneludibles": [
      "Todos los hombres de toda la tierra hermanos son.",
      "Nuestro propio espíritu nos empuja [al sacrificio].",
      "¿Por qué han rebatido... los moralistas la propiedad...? Porque en ellos estaba el espíritu de la comuna."
    ]
  },
  "2435: SEGUNDA PARTE y 2781: CAPÍTULO SEGUNDO: Amor Ciudadano y Salud": {
    "PilotoDeCoherencia": "El amor ciudadano es un grado superior de perfección afectiva que se manifiesta en la Amistad pura y desinteresada. Trincado vincula la salud física con la higiene espiritual, afirmando que no puede haber mente sana sin un espíritu en armonía y una conciencia tranquila derivada del cumplimiento del deber y el progreso personal.",
    "IdeasSecundarias": [
      "La amistad es la expansión de la vida real fuera de las restricciones del hogar.",
      "La salud no es una gracia divina ni un don, sino el resultado del esfuerzo y trabajo del propio espíritu.",
      "Si el espíritu está enfermo por el error, el cuerpo físico manifestará el desequilibrio."
    ],
    "CitasIneludibles": [
      "EL AMOR CIUDADANO ES MÁS PERFECTO QUE EL AMOR DE FAMILIA",
      "si el espíritu está enfermo, no puede estar la mente sana.",
      "Esa salud está representada en la tranquilidad de la conciencia"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Los Cinco Amores (Bloque 2) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Inexistencia_del_Amor_Religioso": {
    "palabras_clave": ["religión", "fanatismo", "amor religioso", "pasiones colectivas", "dogma", "negación"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#1786: CAPÍTULO OCTAVO: Inexistencia del Amor Religioso"],
    "contexto_real": "Desmitificación del sentimiento religioso como una construcción pasional humana carente de fundamento espiritual real."
  },
  "Amor_Ciudadano_y_Amistad": {
    "palabras_clave": ["amistad", "ciudadano", "perfección", "afecto benévolo", "desinterés", "sociedad"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#2435: SEGUNDA PARTE y 2439: CAPÍTULO PRIMERO: EL AMOR A LA AMISTAD"],
    "contexto_real": "Grado evolutivo del afecto que permite la cohesión social basada en la afinidad y el trato libre entre seres."
  },
  "Salud_como_Conciencia_Tranquila": {
    "palabras_clave": ["salud", "conciencia", "higiene espiritual", "espíritu sano", "mente sana", "trabajo"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#2781: CAPÍTULO SEGUNDO: EL AMOR A LA SALUD IMPONE LA HIGIENE"],
    "contexto_real": "Definición integral de la salud donde el bienestar físico es el reflejo de la armonía ética y el progreso del espíritu."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para Los Cinco Amores.');
