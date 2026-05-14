const fs = require('fs');
const path = 'F:/trincado/public/data/contents/primer-rayo-de-luz_esencia.json';
let esencia = {};

Object.assign(esencia, {
  "23: Consejos y Recomendaciones de la EME de la CU": {
    "PilotoDeCoherencia": "Establece el código ético fundamental de la Escuela. Define que el derecho nace de la obligación y el progreso del esfuerzo propio. Condena la fe ciega y la crítica ignorante (calumnia), promoviendo el estudio y el convencimiento como bases de la fe viva.",
    "IdeasSecundarias": [
      "El que nada sacrifica, a nada tiene derecho. Los derechos son consecuencia de las obligaciones creadas.",
      "La crítica de lo que se desconoce es calumnia; el calumniador es vil y criminal.",
      "No comprender algo no da derecho a negarlo; la duda debe impulsar al estudio, no a la risa del ignorante.",
      "El progreso se adquiere por esfuerzo propio, no por regalo o fe ciega."
    ],
    "CitasIneludibles": [
      "¿ Quieres tener derechos? Créate primero obligaciones.",
      "La crítica de lo que se desconoce, es calumnia.",
      "No queremos Fe ciega, sino estudio, convencimiento que hace Fe viva"
    ]
  },
  "65: El Universo Solidarizado y la Unidad de la Ley": {
    "PilotoDeCoherencia": "Proclama la unidad absoluta del Todo. La Ley es una y la Substancia es una (el Éter/Pantógeno). El Universo está solidarizado bajo un solo principio y un solo fin, eliminando la dualidad entre lo espiritual y lo material en su esencia última.",
    "IdeasSecundarias": [
      "El mundo todo debe estar comunizado porque la ley natural es de unidad.",
      "La solidaridad universal es el estado natural de la creación, fracturado solo por la ignorancia humana.",
      "Uno es el principio y uno es el fin; la multiplicidad de formas no altera la unidad de la substancia."
    ],
    "CitasIneludibles": [
      "El Universo Solidarizado: El Mundo todo Comunizado",
      "La LEY es una. La substancia una",
      "Uno es el principio. Uno es el fin"
    ]
  },
  "71: Programa Perpetuo de Estudios y Mandatos": {
    "PilotoDeCoherencia": "Sintetiza la misión educativa de la Escuela: fraternizar a toda la familia humana mediante la vida eterna y continuada. Establece los dos mandatos supremos: el autoconocimiento y el amor fraternal, bajo la máxima de juzgar por los frutos (obras).",
    "IdeasSecundarias": [
      "Tópico: Fraternizar toda la Familia Humana.",
      "Mandatos: Conócete a ti mismo y Ama a tu hermano.",
      "Máxima: Por el fruto conocerás el Árbol (las obras son el único testimonio válido).",
      "Consejo: Buscar el consuelo en la verdad, no en la mentira religiosa."
    ],
    "CitasIneludibles": [
      "MANDATOS: Conócete a ti mismo. Ama a tu hermano",
      "Por el fruto conocerás el Arbol",
      "Busca el consuelo en la verdad"
    ]
  },
  "107: Juicio Crítico y el Primer Rayo de Luz": {
    "PilotoDeCoherencia": "Define la obra como un arma de conciencia que penetra la oscuridad religiosa. El 'Primer Rayo de Luz' desenmascara los prejuicios y el fanatismo (comparados con murciélagos) que no resisten la claridad de la razón y la verdad.",
    "IdeasSecundarias": [
      "La fe ciega anula la razón del hombre y lo mantiene en la aberración.",
      "Las religiones son mazmorras oscuras donde se guarecen bestias venenosas (intereses espurios).",
      "La obra es pedida por los hombres como arma inquebrantable para las luchas de la conciencia."
    ],
    "CitasIneludibles": [
      "como PRIMER RAYO DE LUZ penetras en lo obscuro",
      "la falacia de todas las religiones que son los murciélagos",
      "La fe ciega que anula al hombre en su razón"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Primer Rayo de Luz (Bloque 1) creada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Derecho_y_Obligacion": {
    "palabras_clave": ["derecho", "obligación", "sacrificio", "esfuerzo propio", "merecimiento"],
    "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#23: Consejos y Recomendaciones de la EME de la CU"],
    "contexto_real": "Ley de causalidad ética: no existe el derecho sin la previa creación de la obligación mediante el esfuerzo."
  },
  "Unidad_Substancia_Ley": {
    "palabras_clave": ["ley única", "substancia una", "universo solidarizado", "éter", "pantógeno", "unidad"],
    "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#65: El Universo Solidarizado y la Unidad de la Ley"],
    "contexto_real": "Monismo espiritualista: todo lo existente proviene de una sola fuente y se rige por una sola ley natural."
  },
  "Primer_Rayo_de_Luz_Concepto": {
    "palabras_clave": ["rayo de luz", "conciencia", "juicio crítico", "razón", "arma espiritual", "despertar"],
    "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#107: Juicio Crítico y el Primer Rayo de Luz"],
    "contexto_real": "Fase inicial de iluminación donde la razón destruye los dogmas religiosos para permitir el estudio libre."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para Primer Rayo de Luz.');
