const fs = require('fs');
const path = 'F:/trincado/public/data/contents/los-cinco-amores_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "14001: EPÍLOGO: El Espiritismo como Amor Perfecto": {
    "PilotoDeCoherencia": "El Espiritismo es la culminación del afecto humano y espiritual al ser la ciencia que explica la relación entre el Microcosmo (hombre) y el Macrocosmo (universo). Trincado lo define como el amor perfecto que libera al ser de los dogmas materialistas y religiosos, permitiendo una comprensión profunda de la vida eterna y continuada.",
    "IdeasSecundarias": [
      "Penetrar en el Espiritismo es difícil porque exige superar el orgullo científico y el prejuicio religioso.",
      "Los materialistas a menudo dogmatizan errores propios al ignorar la esencia espiritual del hombre.",
      "La luz del Espiritismo permite ver la realidad de la creación sin los vicios de los prismas sociales arcaicos."
    ],
    "CitasIneludibles": [
      "EL ESPIRITISMO ES EL AMOR PERFECTO",
      "Hablar de Espiritismo, es fácil. Penetrar el Espiritismo, muy difícil.",
      "no pueden comprender su todo Macrocósmico."
    ]
  },
  "14227: Conócete a ti mismo y el Régimen Comunal": {
    "PilotoDeCoherencia": "Cierre final de la obra llamando al espíritu al despertar y al pago de sus deudas ante la Creación. El régimen Comunal es presentado como la única organización social justa que elimina las desigualdades y permite al hombre disponer de la solidaridad de todo el universo. Es el tiempo del examen y de la aplicación de las leyes de fraternidad.",
    "IdeasSecundarias": [
      "El alma es el archivo eterno donde los espíritus guardianes anotan cada acto y existencia.",
      "Los espíritus de misión encarnan para traer artes y ciencias que preparen a la humanidad para la Comuna.",
      "El autoconocimiento es la base para ejercer los derechos y obligaciones en la solidaridad universal."
    ],
    "CitasIneludibles": [
      "ahora ya se les exige el reconocimiento de las leyes, de la fraternidad",
      "régimen Comunal, único en el que no caben las desigualdades",
      "Conócete a ti mismo"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Los Cinco Amores (Bloque Final) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Espiritismo_Amor_Perfecto": {
    "palabras_clave": ["espiritismo", "amor perfecto", "microcosmo", "macrocosmo", "ciencia", "luz"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#14001: EPÍLOGO: El Espiritismo como Amor Perfecto"],
    "contexto_real": "Definición del Espiritismo como la síntesis suprema del conocimiento y el afecto universal."
  },
  "Juicio_Conocete_a_ti_mismo": {
    "palabras_clave": ["conócete a ti mismo", "juicio", "deudas", "fraternidad", "archivo eterno", "despertar"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#14227: «Conócete a ti mismo»."],
    "contexto_real": "Mandato evolutivo que exige al espíritu asumir su responsabilidad y pagar sus deudas mediante el progreso y el amor."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para Los Cinco Amores.');
