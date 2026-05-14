const fs = require('fs');
const path = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "17224 al 17469: El Alma Humana frente a las Doctrinas": {
    "PilotoDeCoherencia": "Contrapone las visiones sobre el alma: los materialistas la reducen a una función cerebral; los espiritualistas la definen como una unidad simple separada del cuerpo compuesto; y las religiones crean una 'Babilonia' de castigos que esclaviza al hombre por temor. Sostiene que estas teorías son incompletas al no comprender la relación sustancial entre espíritu y materia.",
    "IdeasSecundarias": [
      "El materialismo confunde la condición indispensable (el cerebro) con la causa (el espíritu).",
      "La simplicidad del yo espiritual se opone a la divisibilidad del cuerpo material.",
      "El temor al castigo divino ha degenerado la inteligencia humana, impidiendo el estudio serio de la metafísica."
    ],
    "CitasIneludibles": [
      "Hay una verdadera Babilonia en el sentir y afirmación de todas las religiones, respecto al alma",
      "el cerebro es... una condición indispensable... pero de ahí no se puede concluir que sea el sujeto mismo",
      "El cuerpo es compuesto, el alma es simple, luego no son una misma cosa"
    ]
  },
  "17550: Proclama del Espiritismo Racional": {
    "PilotoDeCoherencia": "Lanza la proclama fundamental: el Universo está solidarizado y el mundo debe ser comunizado. Establece que la ley y la sustancia son una sola; todo procede de un mismo principio y tiende a un mismo fin. Define axiomáticamente que 'Todo es Magnetismo Espiritual', integrando la ciencia, la metafísica y la vida humana.",
    "IdeasSecundarias": [
      "La ley de la sustancia única elimina la dualidad antagónica entre lo físico y lo metafísico.",
      "El universo solidarizado implica que no existen mundos aislados, sino una red de vida interconectada.",
      "El magnetismo espiritual es la fuerza que cohesiona la creación y permite la manifestación del espíritu."
    ],
    "CitasIneludibles": [
      "La ley es una; la sustancia una. - Uno es el principio; uno es el fin",
      "Todo es magnetismo Espiritual",
      "El universo solidarizado: es el axioma terminante"
    ]
  },
  "17640: El Espíritu como el Gran Alquimista": {
    "PilotoDeCoherencia": "Afirma que la materia sufre metamorfosis infinitas para producir las esencias del alma humana. Define al espíritu como el único maestro de las formas y el gran alquimista que opera estas transformaciones en su propio laboratorio interno, algo que la química material nunca podrá reproducir.",
    "IdeasSecundarias": [
      "El alma humana es el resultado de una evolución de la materia guiada por el espíritu.",
      "La alquimia espiritual es millones de veces más poderosa que la química científica.",
      "La historia de la Tierra abarca 123 millones de siglos de trabajo del espíritu sobre la forma."
    ],
    "CitasIneludibles": [
      "el espíritu tiene un laboratorio capaz y es él, el alquimista que opera todas esas evoluciones",
      "él solo es maestro de las formas, que nos muestra la creación",
      "materia... mida las esencias necesarias para la creación del alma humana"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Filosofía Austera Racional (Bloque 12) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Magnetismo_Espiritual": {
    "palabras_clave": ["magnetismo espiritual", "fuerza única", "cohesión universal", "ley de la sustancia", "energía del espíritu"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#17550: Proclama del Espiritismo Racional"],
    "contexto_real": "Energía primordial que emana del espíritu y que constituye la trama conectiva de todo el universo."
  },
  "Espiritu_Alquimista": {
    "palabras_clave": ["alquimista espiritual", "maestro de las formas", "metamorfosis materia", "laboratorio del espíritu", "creador del alma"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#17640: El Espíritu como el Gran Alquimista"],
    "contexto_real": "Rol del espíritu como el agente inteligente que transforma la materia bruta en alma y conciencia a través de los siglos."
  },
  "Universo_Solidarizado": {
    "palabras_clave": ["universo solidarizado", "comunización universal", "unidad de ley", "conexión cósmica", "solidaridad planetaria"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#17550: Proclama del Espiritismo Racional"],
    "contexto_real": "Axioma que establece que todos los mundos y seres forman un solo cuerpo regido por las mismas leyes de amor y justicia."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque 12) para Filosofía Austera Racional.');
