const fs = require('fs');
const path = 'F:/trincado/public/data/contents/profilaxis-de-la-vida_esencia.json';
let esencia = {};

Object.assign(esencia, {
  "27 y 78: La Economía Universal y la Cadena de Maestros": {
    "PilotoDeCoherencia": "Establece el principio de la 'Economía Universal' basada en la solidaridad: una cadena infinita donde los grados superiores enseñan a los inferiores (el 12 al 11, el 11 al 10, etc.). 'Profilaxis de la Vida' se presenta como un tratado pedagógico y de salud individual necesario para preparar al hombre para la implantación de la Comuna Universal.",
    "IdeasSecundarias": [
      "La obra es un director privado para la salud corporal y moral de los hijos de la tierra.",
      "El 'Código de Amor Universal' será la pauta definitiva cuando la Comuna sea una realidad global.",
      "La solidaridad es el motor del ascenso espiritual y educativo en el universo."
    ],
    "CitasIneludibles": [
      "tenemos que ser maestros para otros del grado 9; y aquí tenéis la eterna e infinita cadena",
      "mi nueva economía Universal, que deseo aprovechéis",
      "el «Código de Amor Universal» es la pauta de la educación de los seres"
    ]
  },
  "409 y 565: Prophylaxis Universal vs. Celibato Religioso": {
    "PilotoDeCoherencia": "Denuncia el celibato como un 'crimen insuperable de desequilibrio' contra la ley de reproducción impuesta por el Creador en cada molécula del universo. Sostiene que la necesidad de unión de afinidades es indómita y que el hombre es el 'Arca de Noé' real que contiene toda la vida, la cual debe ser preservada mediante la profilaxis natural.",
    "IdeasSecundarias": [
      "Cada molécula y cada Yon siente la necesidad inexorable de unirse a un afín.",
      "El desequilibrio de los instintos crea 'dioses y cristos' que esclavizan al hombre en el misterio.",
      "El hombre convive con el universo siendo el depositario de todas las especies (Arca de Noé real)."
    ],
    "CitasIneludibles": [
      "en vano trataría ningún ser de esquivar el pago a la naturaleza en la reproducción",
      "consagrados célibes... se ven más azotados que nadie de esa necesidad de la unión",
      "el hombre convive, siendo el arca de Noé"
    ]
  },
  "1226 y 1793: La Sabiduría de la Concepción y los 24 Ancianos": {
    "PilotoDeCoherencia": "Inicia las cátedras de los '24 Ancianos', enfocándose en la concepción como el acto supremo de renovación de la creación. Explica que cada concepción es un evento de sabiduría universal donde el Creador toma nota del nuevo ser para su existencia eterna. Subraya que el cuidado de la madre debe ser físico, moral y espiritual desde el primer instante.",
    "IdeasSecundarias": [
      "La concepción requiere el concurso de todas las leyes que mantienen la armonía del Universo.",
      "Los cuidados materiales son la base y el complemento de los cuidados morales durante el embarazo.",
      "El Anciano Primero y Segundo introducen la pedagogía de la vida desde las entrañas maternas."
    ],
    "CitasIneludibles": [
      "la concepción de los seres es nada menos que la conservación de la creación",
      "de cada concepción de un cuerpo, toma nota el Creador",
      "cuidados materiales son la base y el complemento de los cuidados morales y espirituales"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Profilaxis de la Vida (Bloque 1) creada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Economia_Universal_Maestros": {
    "palabras_clave": ["economía universal", "cadena de maestros", "solidaridad", "grados de estudio", "enseñanza infinita"],
    "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#27 y 78: La Economía Universal y la Cadena de Maestros"],
    "contexto_real": "Jerarquía educativa del universo donde el progreso de uno obliga a la instrucción del que viene detrás."
  },
  "Crimen_del_Celibato": {
    "palabras_clave": ["celibato", "desequilibrio", "crimen natural", "castidad ficticia", "reproducción", "unión de afines"],
    "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#409 y 565: Prophylaxis Universal vs. Celibato Religioso"],
    "contexto_real": "Denuncia de las prácticas religiosas que violentan las leyes biológicas y espirituales del ser humano."
  },
  "Catedras_24_Ancianos": {
    "palabras_clave": ["24 ancianos", "cátedras", "sabiduría profunda", "consejos del creador", "pedagogía espiritual"],
    "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#1226 y 1793: La Sabiduría de la Concepción y los 24 Ancianos"],
    "contexto_real": "Estructura de autoridad espiritual que imparte las lecciones maestras sobre la vida y la creación en la obra."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para Profilaxis de la Vida.');
