const fs = require('fs');
const path = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "15766 al 15882: El Hombre como Especie Única y el Cruce de Razas": {
    "PilotoDeCoherencia": "Sostiene que todos los hombres poseen la misma constitución de sustancias e instintos, negando que existan instintos adquiridos que alteren la base de la especie. Afirma que el cruce de razas es la causa principal de la belleza y la perfección humana, permitiendo purificar los instintos y anular las pasiones mediante el ajuste a la ley natural. Niega la descendencia del mono, sosteniendo que el hombre nació hombre.",
    "IdeasSecundarias": [
      "La educación es importante pero no absoluta; existen analfabetos con sentimientos puros y letrados criminales.",
      "El lenguaje es el instinto peculiar humano; la imitación en animales es puro contagio magnético.",
      "La purificación de los instintos se logra por el saciamiento y el ajuste a la armonía vecinal."
    ],
    "CitasIneludibles": [
      "El cruce de razas, agregado a la herencia, es el factor principal de la modificación de los instintos, en sentido de perfección",
      "el hombre nació hombre como especie y no ha sido el resultado de transformaciones animales",
      "La sabiduría consiste en tomar del mal el menos y sacar bien del mal"
    ]
  },
  "16168: El Español como Idioma Universal": {
    "PilotoDeCoherencia": "Propone al idioma español como el vehículo de la unidad humana por su capacidad de asimilar etnicismos (árabes, hebreos, asiáticos) y su naturalidad fonética (se escribe como se pronuncia). Augura que un solo idioma consolidará una sola raza en la Comuna Universal.",
    "IdeasSecundarias": [
      "La lengua de Cervantes funde más de 50 etnicismos secundarios en una unidad coherente.",
      "La asimilación de vocablos extranjeros enriquece al idioma y facilita la comprensión entre los pueblos.",
      "La falta de diptongos complejos y guturaciones hace del español el idioma más apto para la pedagogía universal."
    ],
    "CitasIneludibles": [
      "el español... será el idioma universal",
      "Más de 50 etnicismos secundarios se funden en la lengua de Cervantes",
      "escribiéndose como se pronuncia y pronunciándose sin ningún diptongo ni guturación"
    ]
  },
  "16292 al 16419: El Hombre-Universo y la Jaula de los Instintos": {
    "PilotoDeCoherencia": "Define al hombre como el universo completo, portador de todos los instintos de los tres reinos de la naturaleza. Describe la lucha del espíritu para poner orden en esta 'jaula' de Egos instintivos. Clasifica los sentimientos sociales en ego-altruistas y altruistas, y denuncia el sentimiento religioso como algo sustancialmente malo nacido del miedo e ignorancia.",
    "IdeasSecundarias": [
      "Cada instinto en el hombre es un Ego que busca su propia conservación y vida.",
      "Sentir mayor placer en hacer el bien que en recibirlo es una manifestación del instinto de orgullo y amor propio.",
      "El sentimiento religioso anula al hombre al someterlo a temores que la propia religión no puede explicar."
    ],
    "CitasIneludibles": [
      "el hombre, constituye el universo completo... viven en él todos los instintos de todos los seres",
      "la terrible lucha que debe sostener el espíritu, para poner orden en semejante jaula",
      "todo sentimiento religioso, invóquese con el motivo que se quiera es malo"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Filosofía Austera Racional (Bloque 11) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Hombre_Universo": {
    "palabras_clave": ["hombre universo", "jaula de instintos", "tres reinos", "ego instintivo", "universo completo"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#16292 al 16419: El Hombre-Universo y la Jaula de los Instintos"],
    "contexto_real": "Concepto que explica que el ser humano contiene en su biología y psiquismo toda la escala evolutiva de la naturaleza."
  },
  "Cruce_de_Razas_Belleza": {
    "palabras_clave": ["cruce de razas", "belleza humana", "purificación instintos", "amalgama humana", "perfección étnica"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#15766 al 15882: El Hombre como Especie Única y el Cruce de Razas"],
    "contexto_real": "Ley de afinidad biológica que busca la unidad de la especie mediante la mezcla constante para eliminar atavismos y fealdad."
  },
  "Idioma_Universal": {
    "palabras_clave": ["idioma universal", "español", "lengua de Cervantes", "naturalidad fonética", "unidad de raza"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#16168: El Español como Idioma Universal"],
    "contexto_real": "Herramienta de comunicación decretada para la Comuna Universal por su claridad y capacidad de asimilación cultural."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque 11) para Filosofía Austera Racional.');
