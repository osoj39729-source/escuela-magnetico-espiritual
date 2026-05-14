const fs = require('fs');
const path = 'F:/trincado/public/data/diccionario_sinapsis.json';
const dictionary = JSON.parse(fs.readFileSync(path, 'utf8'));

const updates = {
  "Casas_Comunales_de_Vida": {
    "palabras_clave": ["economia de buen gobierno", "civilizacion real", "centro de vida", "servicios comunes"],
    "contexto_real": "Centros de vida y administracion de la Comuna donde se aplica la economia de buen gobierno para optimizar recursos y garantizar bienestar absoluto a todos los habitantes."
  },
  "Sion_Sirio": {
    "palabras_clave": ["asiento de jesus", "maestros de las estrellas", "centro de la verdad", "cosmogonia"],
    "contexto_real": "Centro cosmogonico universal donde se adquiere luz y majestad. Es el asiento de Jesus y el tribunal donde se decretan las leyes de justicia para los mundos."
  },
  "Neptuno_Misionero": {
    "palabras_clave": ["descenso de neptuno", "espiritu de verdad", "leyes de neptuno", "mundo grande"],
    "contexto_real": "Mundo de origen desde el cual descendio el Espiritu de Verdad (Xavier) para traer leyes de concienciacion a la Tierra."
  },
  "Economia_del_Tiempo_Comunal": {
    "palabras_clave": ["6 horas diarias", "ciclo de 24 horas", "equilibrio materia espiritu", "trabajo y estudio"],
    "contexto_real": "Division del dia en armonia con la ley natural: 6 horas de trabajo, estudio, recreo y descanso, dando a la materia y al espiritu lo que a cada uno pertenece."
  },
  "Economia_Organica": {
    "palabras_clave": ["aprovechamiento armonico", "bien social comun", "fin de monopolios", "progreso colectivizado"],
    "contexto_real": "El uso armonico de todos los organismos y recursos de la Tierra para el mayor bienestar de la comunidad, superando el egoismo de los monopolios individuales e imperiales."
  }
};

for (const [key, data] of Object.entries(updates)) {
  if (dictionary.CONCEPTOS[key]) {
    dictionary.CONCEPTOS[key].palabras_clave = [...new Set([...dictionary.CONCEPTOS[key].palabras_clave, ...data.palabras_clave])];
    dictionary.CONCEPTOS[key].contexto_real = data.contexto_real;
  } else {
    dictionary.CONCEPTOS[key] = {
      ...data,
      "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#Tanda28"]
    };
  }
}

fs.writeFileSync(path, JSON.stringify(dictionary, null, 4), 'utf8');
console.log('Diccionario actualizado con Contexto de Autor (Modo Experto).');
