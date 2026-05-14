const fs = require('fs');
const path = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "11034 al 11273: Memoria como Vacío y la Retentividad": {
    "PilotoDeCoherencia": "Sostiene que la memoria mecánica (repetir textos ajenos) indica un vacío de pensamiento propio. Distingue la Memoria (depósito de valor constante del espíritu) de la Retentividad (capacidad magnética de la sensación). Explica que las percepciones se conservan en el archivo-conciencia-alma y se reproducen mediante la 'sugestión' o la 'inspiración' según leyes de asociación.",
    "IdeasSecundarias": [
      "La retentividad depende de la intensidad del estímulo y la educación de los órganos sensorios.",
      "La reproducción de percepciones requiere una evocación previa por una excitación de su mismo género.",
      "Poseer una impresión no estorba al ser, del mismo modo que la riqueza no estorba al hombre que sabe que la tiene pero no se esclaviza a ella."
    ],
    "CitasIneludibles": [
      "La memoria es un vacío... quien puede aprender de memoria... tiene en su memoria un vacío",
      "la retentividad es la capacidad, el magnetismo remanente de la sensación",
      "percepciones retenidas y conservadas en nuestro archivo-conciencia-memoria-alma"
    ]
  },
  "11655: El Lenguaje y la Ley de Armonía Inconsciente": {
    "PilotoDeCoherencia": "Explica que la percepción reproducida es central y carece de excitación periférica, siendo menos intensa que la original. Introduce la '5ª Ley de Armonía', que es inconsciente para la materia pero consciente en el alma por obra del espíritu, permitiendo la evolución del pensamiento sin que la química o la física material puedan detectarla.",
    "IdeasSecundarias": [
      "Las sugestiones asociacionistas se verifican automáticamente como las corrientes impresionales.",
      "La evolución hacia la inconsciencia material es una función superior del espíritu sobre el alma.",
      "La ciencia materialista no puede medir estas leyes porque escapan a sus instrumentos de pesaje físico."
    ],
    "CitasIneludibles": [
      "5ª Ley de Armonía inconsciente para la materia, pero de conciencia en el alma, por el espíritu",
      "la percepción reproducida... el proceso previo, que es central y sin excitación periférica",
      "escapa a la balanza y cúbica de la química"
    ]
  },
  "12016 al 12127: Tríada de la Percepción: Sincrética, Analítica y Sintética": {
    "PilotoDeCoherencia": "Describe el proceso del conocimiento en tres etapas: 1) Percepción Sincrética (visión total y conciliadora de la imagen); 2) Percepción Analítica (descomposición subjetiva e inteligente de las calidades); 3) Percepción Sintética (reconstrucción mental que unifica el análisis y representa el progreso real del conocimiento).",
    "IdeasSecundarias": [
      "La percepción analítica carece de imagen mental propia, pues no concebimos colores sin formas.",
      "La síntesis es el progreso del conocimiento al reunir muchas percepciones en una unidad superior.",
      "El análisis descompone la unidad original para que la inteligencia comprenda sus elementos particulares."
    ],
    "CitasIneludibles": [
      "La síntesis es el progreso del conocimiento",
      "El análisis descompone la percepción sincrética... y la síntesis reconstituye mentalmente",
      "esta separación (analítica) es inteligente, mas no efectiva"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Filosofía Austera Racional (Bloque 8) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Memoria_Vacia": {
    "palabras_clave": ["memoria vacía", "aprendizaje mecánico", "falta de juicio", "repetición", "vacío mental"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#11034 al 11273: Memoria como Vacío y la Retentividad"],
    "contexto_real": "Estado del estudiante que memoriza palabras sin comprender su esencia, bloqueando su propio desarrollo racional."
  },
  "Percepcion_Sintetica": {
    "palabras_clave": ["síntesis", "progreso conocimiento", "reconstrucción mental", "unidad de percepciones", "percepción analítica"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#12016 al 12127: Tríada de la Percepción: Sincrética, Analítica y Sintética"],
    "contexto_real": "Fase culminante del aprendizaje donde la inteligencia unifica los datos analizados para crear una nueva comprensión superior."
  },
  "5ta_Ley_de_Armonia": {
    "palabras_clave": ["5ª Ley", "armonía inconsciente", "evolución pensamiento", "alma consciente", "espíritu director"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#11655: El Lenguaje y la Conciencia (Concepción)"],
    "contexto_real": "Ley que rige la transformación del estímulo material en conciencia espiritual sin mediación de fuerzas físicas medibles."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque 8) para Filosofía Austera Racional.');
