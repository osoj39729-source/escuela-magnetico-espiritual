const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "7650: Párrafo iii: Los títulos nobiliarios son ficticios e injustos": {
    "PilotoDeCoherencia": "Los títulos nobiliarios son ficciones que violan la ley de igualdad universal. La reencarnación demuestra que el espíritu intercambia posiciones sociales (de monarca a pordiosero) para equilibrar su orgullo. Los títulos solo sirven para crear divisiones odiosas y subyugar a los hombres bajo falsas dignidades eclesiásticas.",
    "IdeasSecundarias": [
      "No existe el linaje de sangre en el espíritu; la nobleza es un invento de la prevaricación religiosa.",
      "El desequilibrio social causado por los títulos nobiliarios durará hasta que el hombre acepte la verdad de su origen común.",
      "La inflada dama de hoy será el servidor del mañana por ley de compensación inflexible."
    ],
    "CitasIneludibles": [
      "¿Cómo persuadir a la inflada dama de títulos nobiliarios que no valen lo que una escoba... que a la existencia siguiente o en la anterior estuvo o estará fregando escusados?",
      "Los títulos nobiliarios son ficticios e injustos y ocasionan la división de clases"
    ]
  },
  "7809: Párrafo iv: Las monarquías hereditarias son una ficción": {
    "PilotoDeCoherencia": "El derecho hereditario al trono no tiene base en la ley divina. El monarca debería ser un padre y maestro elegido por plebiscito para guiar al pueblo hacia la comuna, pero la ambición y la alianza con la religión los han convertido en tiranos. El Padre pide cuentas de la misión de educación que los monarcas han traicionado.",
    "IdeasSecundarias": [
      "Un monarca actual puede ser el espíritu de un antiguo verdugo, demostrando la falsedad del derecho de sangre.",
      "Las leyes solo deben ser sancionadas por el plebiscito popular ilustrado.",
      "La caída de las monarquías es necesaria para la implantación del régimen de amor universal."
    ],
    "CitasIneludibles": [
      "Las monarquías hereditarias son una ficción... es ficticio el derecho hereditario del trono de un pueblo",
      "no habéis cumplido el fin de la ley divina por perjuicio y ambición y porque no aplastásteis a la serpiente religión."
    ]
  },
  "8013: Párrafo v: la propiedad religiosa no existe; sus efectos": {
    "PilotoDeCoherencia": "La propiedad religiosa carece de legitimidad legal y espiritual. Las religiones se anulan entre sí al pretender exclusividad sobre la verdad, demostrando ser organizaciones de acaparamiento material. Su imperio basado en la guerra y la intriga terminará en una caída estrepitosa tras la sentencia del Juicio Final.",
    "IdeasSecundarias": [
      "Dos principios iguales se anulan; la pluralidad de dogmas invalida el poder de las religiones.",
      "El acaparamiento religioso ha empobrecido al mundo y generado siglos de miseria material.",
      "La caída de las instituciones religiosas es el preludio indispensable para la paz mundial."
    ],
    "CitasIneludibles": [
      "la propiedad religiosa no existe... quedará codificada y negada la propiedad religiosa.",
      "como 'dos principios iguales se anulan y no existen', menos pueden existir más de dos poderes iguales"
    ]
  },
  "8097: Párrafo vi: la Comuna es el régimen que el Creador dio a sus hijos": {
    "PilotoDeCoherencia": "La Comuna es el régimen natural del universo, sinónimo de libertad, fraternidad, justicia equitativa e igualdad. Ha sido calumniada por los enemigos de la unidad para mantener al trabajador en la ignorancia. El pueblo que se rebela contra la injusticia no es culpable, sino víctima de las causas generadas por la opresión supremática.",
    "IdeasSecundarias": [
      "La Comuna representa el atributo del Creador en la organización social: el Amor.",
      "El trabajador es el 'siempre mártir' cuya liberación es el fin primordial de la nueva ley.",
      "La responsabilidad del desorden social recae en los tiranos, no en quienes exigen su derecho a la vida."
    ],
    "CitasIneludibles": [
      "la Comuna es el régimen que el Creador dio a sus hijos... libertad, fraternidad, justicia equitativa, igualdad y, en una palabra, Amor.",
      "el pueblo se levanta en protesta, no es él quien tiene la culpa, ni responsable tampoco de los actos que en justicia se ocasionaron por la injusticia"
    ]
  },
  "8183: Punto primero: la caridad, lejos de ser una virtud, es un baldón": {
    "PilotoDeCoherencia": "La caridad es una afrenta hipócrita que insulta al pobre mientras lo mantiene bajo la tiranía de los ricos. Trincado, apoyado en la epístola de Santiago, denuncia la acepción de personas y la opresión judicial de los poderosos sobre los humildes. La verdadera virtud es el amor igualitario que no hace distinción de vestiduras.",
    "IdeasSecundarias": [
      "Los ricos oprimen al pueblo y blasfeman el nombre del amor mediante la falsa limosna.",
      "Dios ha elegido a los pobres como herederos del reino por su fe y sufrimiento.",
      "La caridad es un invento para matar el amor real y ocultar la injusticia social."
    ],
    "CitasIneludibles": [
      "la caridad, lejos de ser una virtud, es un baldón... ¿No ha elegido Dios los pobres de este mundo, ricos en fe y herederos del reino?",
      "Si ciertamente vosotros cumplís la ley real conforme a la escritura, amarás a tu prójimo como a ti mismo; bien hacéis."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia del CAU Tomo I (Bloque 14) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Nulidad_de_Castas_y_Linajes": {
    "palabras_clave": ["nobleza", "monarquía", "títulos", "linaje", "ficción", "tronos"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#7650: Párrafo iii: Los títulos nobiliarios son ficticios e injustos", "codigo-de-amor-universal-tomo-1_esencia.json#7809: Párrafo iv: Las monarquías hereditarias son una ficción"],
    "contexto_real": "Principio que invalida cualquier derecho de superioridad por nacimiento, fundamentado en la igualdad espiritual y la ley de reencarnación."
  },
  "Comuna_vs_Propiedad_Religiosa": {
    "palabras_clave": ["comuna", "propiedad", "religión", "caída", "sentencia", "justicia equitativa"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#8013: Párrafo v: la propiedad religiosa no existe; sus efectos", "codigo-de-amor-universal-tomo-1_esencia.json#8097: Párrafo vi: la Comuna es el régimen que el Creador dio a sus hijos"],
    "contexto_real": "Transición del régimen de acaparamiento dogmático hacia la organización comunal donde la tierra y los bienes pertenecen a la humanidad entera."
  },
  "Caridad_como_Agravio": {
    "palabras_clave": ["caridad", "baldón", "acepción de personas", "pobres", "ricos", "limosna"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#8183: Punto primero: la caridad, lejos de ser una virtud, es un baldón"],
    "contexto_real": "Denuncia de la caridad como una herramienta de humillación social que encubre la opresión y sustituye a la justicia fraternal."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado.');
