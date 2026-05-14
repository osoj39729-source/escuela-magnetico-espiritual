const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "9546: “Código de Amor Universal” Tomos I: Resumen de su fin": {
    "PilotoDeCoherencia": "El Tomo I es el diagnóstico radical de los males de la familia humana, analizando cómo los dogmas religiosos pervirtieron las leyes civiles. Su llegada marca el fin de las 'Tres Generaciones de Prueba', entregando al hombre trino (espíritu, alma y cuerpo consciente) las herramientas para su emancipación definitiva.",
    "IdeasSecundarias": [
      "El Código es la respuesta de la ley divina al momento preciso de la evolución terrestre.",
      "Sin entender las raíces del mal expuestas en este tomo, no se puede aplicar la medicina de la Comuna.",
      "La liberación del hombre comienza por el conocimiento de las causas de su esclavitud histórica."
    ],
    "CitasIneludibles": [
      "estudia a fondo, sondeando hasta la raíz, las causas de todos los males que la familia terrena ha sufrido",
      "momentos precisos que la Ley ha marcado, del paso de las tres generaciones de prueba"
    ]
  },
  "9557: “Código de Amor Universal” Tomos II: El régimen de la Comuna de Amor y Ley": {
    "PilotoDeCoherencia": "El Tomo II establece las leyes positivas para el Séptimo Día de la humanidad, centradas en la implantación de la Comuna de Amor y Ley. Proclama la ascensión al Quinto Amor (Amor Universal) y ratifica al Espiritismo como la doctrina y el gobierno que unificará a la Tierra con los mundos de progreso del universo.",
    "IdeasSecundarias": [
      "Joaquín Trincado actúa como Juez de la familia espiritual bajo la asesoría del Espíritu de Verdad.",
      "La Comuna es el nuevo régimen social de vida basado en la solidaridad indestructible entre hombres y espíritus.",
      "El Espiritismo es el gobierno universal que sustituye a los sistemas fallidos de la era de prueba."
    ],
    "CitasIneludibles": [
      "implantación de un nuevo régimen social de vida, LA COMUNA DE AMOR Y LEY.",
      "Espiritismo, doctrina y gobierno universales.",
      "ascender la humanidad a su Quinto Amor, al Amor Universal"
    ]
  },
  "9422: Extracto de la Biblioteca de la EMECU": {
    "PilotoDeCoherencia": "La biblioteca de la Escuela es un sistema integral de sabiduría racional. Obras como 'Buscando a Dios' y 'El Primer Rayo de Luz' forman la base para encontrar al Dios Amor y juzgar el antagonismo entre la ciencia y la religión, preparando al espíritu para su asiento definitivo en la verdad.",
    "IdeasSecundarias": [
      "El discurso del Obispo Strossmayer es la prueba histórica de la prevaricación del dogma católico.",
      "La Revolución Mexicana es un hito biológico y ético en la evolución de las leyes naturales en América.",
      "Cada obra de la biblioteca es un peldaño necesario para la graduación del espíritu en la Tierra."
    ],
    "CitasIneludibles": [
      "Buscando a Dios... Encuentra al dios Amor y su asiento y lo muestra a los hombres en verdad de Verdad.",
      "El Primer Rayo de Luz... juzgadas la Ciencia y la Religión en su antagonismo"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia final del CAU Tomo I (Bloque Final) actualizada. LIBRO COMPLETADO.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Tres_Generaciones_de_Prueba": {
    "palabras_clave": ["generaciones", "prueba", "ley", "tiempo", "final", "cau"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#9546: “Código de Amor Universal” Tomos I: Resumen de su fin"],
    "contexto_real": "Periodo histórico determinado por la ley divina para el aprendizaje y depuración de la humanidad antes de la llegada de la luz plena."
  },
  "Quinto_Amor_Universal": {
    "palabras_clave": ["amor", "universal", "quinto", "ascensión", "comuna", "fraternidad"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#9557: “Código de Amor Universal” Tomos II: El régimen de la Comuna de Amor y Ley"],
    "contexto_real": "Grado supremo del sentimiento humano que trasciende el egoísmo y la afinidad limitada para abarcar a toda la creación y a todos los seres."
  },
  "Gobierno_Espiritista": {
    "palabras_clave": ["gobierno", "doctrina", "espiritismo", "universal", "unión", "mundos de progreso"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#9557: “Código de Amor Universal” Tomos II: El régimen de la Comuna de Amor y Ley"],
    "contexto_real": "Sistema de organización social y espiritual basado en las leyes naturales que regirá a la humanidad en su etapa de madurez cósmica."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico finalizado para el Tomo I.');
