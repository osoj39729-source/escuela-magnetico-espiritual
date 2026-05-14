const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/la-revolucion-de-mexico_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - La Revolución de México (Batch 3 - Capítulos 13 a 16)
const nuevosNodos = {
  "008: Capítulo 13: Evolución vs Revolución": {
    "PilotoDeCoherencia": "Justicia de la Ley. La evolución es la ley natural; la revolución es la justicia de esa ley impuesta por la fuerza cuando el hombre estorba el progreso.",
    "CitaInelutable": "La evolución es la ley, la revolución la justicia de la ley... se impone por la justicia que dice fuerza de ley.",
    "EjemploPedagogico": "Un río que fluye tranquilamente (evolución) hasta que alguien construye una presa ilegal; el agua se acumula y finalmente rompe la presa (revolución) para recuperar su cauce natural.",
    "ConexionDoctrinal": ["Evolución vs Revolución", "Justicia Universal"],
    "NodosSimapticos": ["Evolución vs Revolución"]
  },
  "009: Capítulo 14: Villa, Apóstol del Comunismo": {
    "PilotoDeCoherencia": "Necesidad del Régimen. Pancho Villa es un apóstol del comunismo porque su lucha encarna la ley de necesidad que busca derribar el absolutismo y la propiedad privada egoísta.",
    "CitaInelutable": "El general Villa es un apóstol del comunismo... el comunismo ha dejado de ser un sistema, para convertirse en ley de necesidad.",
    "EjemploPedagogico": "Un náufrago en una isla desierta; al principio intenta ser el dueño de todo, pero pronto comprende que para sobrevivir debe compartir los frutos y el trabajo con los demás por pura necesidad de vida.",
    "ConexionDoctrinal": ["Comunismo (Axioma)", "Ley de Necesidad"],
    "NodosSimapticos": ["Comunismo (Axioma)"]
  },
  "010: Capítulo 15-16: La Comuna como Destino Inevitable": {
    "PilotoDeCoherencia": "Unidad Humana. La naturaleza no reconoce fronteras ni nacionalidades; la humanidad es empujada por la ley hacia el régimen comunal como única vía para la felicidad.",
    "CitaInelutable": "La comuna es el régimen universal... la humanidad sólo puede ser feliz en el régimen comunal y a él es empujada por la ley.",
    "EjemploPedagogico": "Una colmena de abejas donde no hay fronteras entre los panales ni abejas extranjeras; todas trabajan para la misma miel porque saben que esa es la única forma de que la colmena prospere.",
    "ConexionDoctrinal": ["Régimen Comunal", "Felicidad Universal"],
    "NodosSimapticos": ["Régimen Comunal"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Evolución vs Revolución": {
    "Definición": "Concepto dialéctico de la doctrina trincadista. La evolución es el proceso gradual y pacífico de progreso. La revolución es la intervención drástica de la Ley de Justicia para eliminar los obstáculos artificiales (dogmas, tiranías) que impiden el flujo natural de la evolución.",
    "Contexto": "La Revolución de México (Capítulo Trece).",
    "Conexiones": ["Justicia", "Progreso", "Ley"],
    "Obras": ["La Revolución de México", "Filosofía Austera Racional"]
  },
  "Comunismo (Axioma)": {
    "Definición": "No entendido como sistema político partidista, sino como la 'Ley de Necesidad' de la humanidad para vivir en fraternidad. Establece que la propiedad común de los medios de vida es el único estado compatible con la justicia universal y el progreso del espíritu.",
    "Contexto": "La Revolución de México (Capítulo Catorce).",
    "Conexiones": ["Comuna", "Justicia", "Necesidad"],
    "Obras": ["La Revolución de México", "Código de Amor Universal"]
  },
  "Régimen Comunal": {
    "Definición": "Estado superior de organización social donde desaparecen las fronteras, las clases y la explotación. Es el destino inevitable de la humanidad hacia el cual es empujada por la Ley de Evolución, asegurando la paz y la felicidad a través de la igualdad absoluta.",
    "Contexto": "La Revolución de México (Capítulos Quince y Dieciséis).",
    "Conexiones": ["Unidad Universal", "Justicia", "Paz"],
    "Obras": ["La Revolución de México", "Filosofía Universal"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 3 de La Revolución de México (3 nodos) y 3 términos sinápticos. Comunismo y Revolución sellados.');
