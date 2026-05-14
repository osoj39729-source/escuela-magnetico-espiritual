const fs = require('fs');
const path = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "4542: La Escolástica y la Falsa Profecía de la Cruz": {
    "PilotoDeCoherencia": "Denuncia a la Escolástica como el periodo de máximo dogmatismo donde se persiguió a la ciencia. Revela que Manuel I (reencarnación de Pablo/Aitekes) entregó la cruz a Constantino con la falsa profecía 'In hoc Signum Vincis'; sostiene que la cruz es en realidad un símbolo de afrenta y muerte que se rompió bajo el peso de sus propias infamias.",
    "IdeasSecundarias": [
      "Las Cruzadas fueron guerras fratricidas impulsadas por un falso diseño divino.",
      "El designio del Creador es la vida y el amor entre hermanos, no el sacrificio en el patíbulo de la cruz.",
      "La caída de las coronas y las tiaras es la consecuencia inevitable de haber basado el poder en el terror religioso."
    ],
    "CitasIneludibles": [
      "la cruz, es la afrenta y la muerte de los hombres",
      "Manuel I era un falso profeta; y además, era el mismo Pablo",
      "la cruz se ha roto al peso de sus infamias"
    ]
  },
  "4899 al 5038: El Triple Golpe del Renacimiento": {
    "PilotoDeCoherencia": "Identifica tres hechos coordinados por la Ley de Progreso para destruir el monopolio del terror católico: 1) La Imprenta (lengua de acero que divulga ideas); 2) La caída de Constantinopla (que obligó a los sabios de Oriente a emigrar a Occidente); 3) El Descubrimiento de América (realizado al milímetro justo dispuesto por el Creador).",
    "IdeasSecundarias": [
      "Gutenberg inventó la herramienta, pero la imprenta tiene su raíz ancestral en la sabiduría de China e India.",
      "Turquía, al expulsar al 'Cristo-Dios' de Constantinopla, permitió el flujo de ciencias retenidas por siglos.",
      "Mientras el papado se entregaba a bacanales y luchas internas, el nuevo mundo se abría para el libre pensamiento."
    ],
    "CitasIneludibles": [
      "La Imprenta... se convierte en piqueta de lo insostenible",
      "Todo ha de coincidir al milímetro justo de lo dispuesto y prometido por el Padre",
      "Gutenberg inventó una lengua de acero que se hace entender en los moldes de todos los hombres"
    ]
  },
  "5416 y 5540: El Despertar del Libre Pensamiento y Krause": {
    "PilotoDeCoherencia": "Describe el siglo XVI como el periodo donde los hombres, pese a la Inquisición, examinaron los dogmas y tradujeron la Biblia, dando origen a la Masonería y al Liberalismo. Analiza la filosofía de Krause como un paso hacia la verdad (comunidad de esencia), aunque limitado por un panteísmo que no distinguía claramente entre espíritu y materia.",
    "IdeasSecundarias": [
      "La Masonería y el libre pensamiento nacieron de la rabia católico-cristiana como una respuesta de defensa del espíritu.",
      "Krause entrevió que la naturaleza y el espíritu tienen comunidad de esencia con el Ser Supremo.",
      "El pesimismo y el escepticismo de siglos posteriores nacen de la negación del espíritu como causa fundamental."
    ],
    "CitasIneludibles": [
      "naciendo la Masonería, el liberalismo y el libre pensamiento",
      "nada que el pensamiento puede idear es irrealizable",
      "Sólo una substancia existe (esencia del panteísmo krausista)"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Filosofía Austera Racional (Bloque 3) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Imprenta_Lengua_de_Acero": {
    "palabras_clave": ["imprenta", "Gutenberg", "lengua de acero", "divulgación ideas", "piqueta del dogma"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#4899 al 5038: El Triple Golpe del Renacimiento"],
    "contexto_real": "Instrumento tecnológico clave para la liberación del pensamiento humano y la caída del oscurantismo religioso."
  },
  "Sincrasis": {
    "palabras_clave": ["sincrasis", "fusión de dogmas", "Babilonia", "mixtificación religiosa", "gnosticismo deformado"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#4355: Gnosticismo y la Babilonia Sincrética"],
    "contexto_real": "Técnica de amalgama de doctrinas contradictorias usada por el catolicismo para ocultar la verdad original."
  },
  "Krausismo": {
    "palabras_clave": ["Krause", "Sanz del Río", "panteísmo", "comunidad de esencia", "naturaleza-espíritu"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#5416 y 5540: El Despertar del Libre Pensamiento y Krause"],
    "contexto_real": "Filosofía puente que reconoció la unidad de la esencia pero falló en definir la individualidad indestructible del espíritu."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque 3) para Filosofía Austera Racional.');
