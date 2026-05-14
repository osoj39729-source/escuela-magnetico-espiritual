const fs = require('fs');
const path = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "20013 al 20204: Metodología y el Error de la Causa": {
    "PilotoDeCoherencia": "Critica a los positivistas y materialistas por intentar deducir la ley del 'efecto hombre' sin conocer la 'causa espíritu'. Sostiene que el método deductivo real debe encontrar la ley del efecto conociendo las leyes de la causa. Explica los métodos inductivos (concordancias) y deductivos (directo e inverso) como herramientas para descubrir leyes de causación que la ciencia oficial ignora.",
    "IdeasSecundarias": [
      "La inducción permite inferir las causas a partir de la forma perceptible de los efectos.",
      "La deducción inversa busca leyes más generales que expliquen fenómenos complejos (como la gravitación explica los movimientos terrestres).",
      "Descubrir un 'término medio' (como la impresión fisiológica) es clave para conectar estímulos con sensaciones conscientes."
    ],
    "CitasIneludibles": [
      "¿cuál es la causa del ser hombre? Y desconociéndola... ¿cómo quieren... deducir la ley del efecto hombre material?",
      "El método deductivo tiende a encontrar la ley del efecto, conociendo las leyes de la causa",
      "no existe en ciencia, ninguna ley verdad del cuerpo del hombre y ni aun de sus actos"
    ]
  },
  "20268 y 20390: Leyes Empíricas y Uniformidades": {
    "PilotoDeCoherencia": "Distingue las leyes empíricas (basadas en la experiencia sin conocer la causa) de las leyes racionales de causación, que poseen estabilidad. Define la analogía como un fruto de la razón que permite establecer la ley de las uniformidades: a una misma causa corresponden efectos idénticos y persistentes.",
    "IdeasSecundarias": [
      "Las leyes empíricas expresan relaciones uniformes pero carecen de la estabilidad de la ley suprema.",
      "La analogía no es similitud entre percepciones, sino entre relaciones (ej. la caída de dos guerreros en contextos diferentes).",
      "El conocimiento de las propiedades esenciales permite generalizaciones inductivas y deductivas válidas."
    ],
    "CitasIneludibles": [
      "leyes empíricas... expresan también relaciones uniformes. Pero no es posible... atribuirlas la estabilidad",
      "La analogía es fruto de la razón... consiste en una relación de semejanza... entre relaciones",
      "Los efectos de una misma causa han de ser idénticos y persistentes"
    ]
  },
  "20451 al 20532: De la Duda a la Certeza y la Necesidad Social": {
    "PilotoDeCoherencia": "Analiza el examen de las pruebas como un camino que lleva de la duda (suspensión de juicio) a la certeza (asentimiento perfecto). Define la 'naturaleza social' del hombre no como un instinto biológico, sino como una necesidad impuesta por el progreso que obliga a la unión de los individuos para constituir la sociedad.",
    "IdeasSecundarias": [
      "La incredulidad es un juicio negativo, mientras que la duda es el equilibrio de probabilidades.",
      "La sociedad es el resultado de la tendencia del espíritu hacia el progreso colectivo.",
      "Las ciencias sociales (Historia, Derecho, Economía) deben usar métodos deductivos que reconozcan el motor espiritual de la unión humana."
    ],
    "CitasIneludibles": [
      "la duda significa una suspensión del juicio: mientras que la incredulidad ya importa un juicio negativo",
      "naturaleza social, que no es tal naturaleza, sino resultado de las necesidades del progreso",
      "grado perfecto del asentimiento (Certeza)"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Filosofía Austera Racional (Bloque 14) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Ley_de_Causacion": {
    "palabras_clave": ["causación", "ley de la causa", "espíritu como causa", "efecto hombre", "estabilidad de la ley"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#20013 al 20204: Metodología y el Error de la Causa"],
    "contexto_real": "Principio que establece que no se puede entender la materia ni la biología sin reconocer al espíritu como la causa primera."
  },
  "Certeza_Racional": {
    "palabras_clave": ["certeza", "asentimiento perfecto", "juicio de pruebas", "verdad comprobada", "fin de la duda"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#20451 al 20532: De la Duda a la Certeza y la Necesidad Social"],
    "contexto_real": "Estado mental de seguridad absoluta alcanzado mediante el examen lógico de las leyes naturales y espirituales."
  },
  "Necesidad_Social": {
    "palabras_clave": ["naturaleza social", "unión necesaria", "progreso colectivo", "exigencia del progreso", "fin de la soledad"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#20451 al 20532: De la Duda a la Certeza y la Necesidad Social"],
    "contexto_real": "Impulso evolutivo que obliga a los seres a asociarse para alcanzar niveles superiores de civilización y justicia."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque 14) para Filosofía Austera Racional.');
