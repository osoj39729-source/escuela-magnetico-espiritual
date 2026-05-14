const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Filosofía Enciclopédica Universal Tomo 1 (Batch 15 - Claves 145 a 164)
const nuevosNodos = {
  "8030: Octubre 15 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Teresa de Jesús (Realidad). Se dedica un recuerdo a Teresa, reconociendo su lucha contra las tinieblas y el amordazamiento del pensamiento en la España de su época.",
    "CitaInelutable": "Cuando el pensamiento era amordazado y la libertad era castigada en las mazmorras.",
    "EjemploPedagogico": "Una flor que intenta crecer entre las piedras de un calabozo; su belleza es su rebelión contra la oscuridad.",
    "ConexionDoctrinal": ["Teresa de Jesús (como Espíritu)", "Libertad de Pensamiento"],
    "NodosSimapticos": ["Teresa de Jesús (como Espíritu)"]
  },
  "8234: Octubre 17 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Despojo de Pasiones. La facilidad del camino espiritual depende directamente del grado de despojo de las pasiones que el ser logre alcanzar.",
    "CitaInelutable": "Cuanto más os despojéis de ellas, más fácil es vuestra lucha.",
    "EjemploPedagogico": "El escalador que tira su mochila pesada llega a la cima con menos esfuerzo y más rapidez.",
    "ConexionDoctrinal": ["Depuración del Espíritu", "Progreso por Esfuerzo"],
    "NodosSimapticos": []
  },
  "8277: Octubre 20 de 1911 - POSESIÓN PORTILLO": {
    "PilotoDeCoherencia": "Límites del Médium. El espíritu advierte que no se puede exigir a un médium lo que su materia no posee (como oratoria), respetando las facultades designadas.",
    "CitaInelutable": "No se le puede pedir que sea orador, cuando su materia no lo es.",
    "EjemploPedagogico": "No puedes pedirle a una flauta que suene como un tambor; cada instrumento tiene su voz única.",
    "ConexionDoctrinal": ["Limitaciones Mediúmnicas", "Mecánica de la Mediumnidad"],
    "NodosSimapticos": []
  },
  "8345: Octubre 22 - Portillo": {
    "PilotoDeCoherencia": "Unificación de la Familia Humana. Hombres y espíritus forman una sola familia; el trabajo en la tierra es hacer de la naturaleza un jardín bello siguiendo eras seculares.",
    "CitaInelutable": "Unificad vuestros pensamientos, porque todos somos una misma cosa; una sola familia.",
    "EjemploPedagogico": "Una casa con dos pisos; los de arriba (espíritus) y los de abajo (hombres) viven bajo el mismo techo y deben cuidar el mismo jardín.",
    "ConexionDoctrinal": ["Comuna Universal", "Unidad de los Seres"],
    "NodosSimapticos": []
  },
  "8572: Octubre 29 de 1911 (noche), hora 21, sobremesa - Posesión M. P.": {
    "PilotoDeCoherencia": "Obstáculo del Miedo a la Influencia. El médium a veces pone obstáculos por un exceso de deseo de independencia o miedo a ser dominado, lo que dificulta la comunicación.",
    "CitaInelutable": "¡Es que quiere ser tan independiente¡ Tiene miedo de...",
    "EjemploPedagogico": "El que cierra la puerta con siete llaves por miedo a un ladrón, también impide que entre el amigo que trae el regalo.",
    "ConexionDoctrinal": ["Psicología del Médium", "Resistencia Mediúmnica"],
    "NodosSimapticos": []
  },
  "8702: Octubre 23 de 1911 - Posesión Portillo": {
    "PilotoDeCoherencia": "Enderezamiento de Ideas. La misión de ciertos espíritus no es hablar constantemente, sino influir sutilmente para enderezar las ideas y acciones del misionero.",
    "CitaInelutable": "Enderezando vuestras ideas, vuestros pasos y vuestras acciones al fin que nos hemos propuesto.",
    "EjemploPedagogico": "El viento suave que no se oye pero que empuja las nubes hacia el campo que necesita lluvia.",
    "ConexionDoctrinal": ["Influencia Espiritual", "Guía Silenciosa"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Teresa de Jesús (como Espíritu)": {
    "Definición": "Entidad espiritual que en su existencia histórica como Santa Teresa de Ávila luchó por la reforma y la espiritualidad en un entorno de opresión dogmática. En la doctrina trincadista, Teresa se manifiesta como un espíritu de gran valor que asiste a la Escuela, aportando su experiencia en la lucha contra las tinieblas religiosas.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesión de Octubre de 1911).",
    "Conexiones": ["Reforma", "Libertad de Pensamiento", "Justicia de Revisión"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  },
  "Limitaciones Mediúmnicas": {
    "Definición": "Principio que establece que la comunicación espiritual está condicionada por las capacidades intelectuales, morales y biológicas del médium (la materia). Un espíritu no puede manifestar conocimientos o habilidades que el médium no pueda procesar o expresar, a menos que se trate de fenómenos de efectos físicos especiales.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Advertencia sobre la oratoria del médium).",
    "Conexiones": ["Mediumnidad", "Materia", "Instrumento"],
    "Obras": ["Filosofía Enciclopédica Universal", "El Espiritismo Estudiado"]
  },
  "Enderezamiento de Ideas": {
    "Definición": "Función protectora y pedagógica ejercida por los espíritus guías sobre sus protegidos, consistente en la sugestión sutil de pensamientos rectos para corregir desviaciones del juicio o de la conducta, asegurando que el misionero se mantenga en la ruta del deber.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesión del 23 de Octubre de 1911).",
    "Conexiones": ["Inspiración", "Protección Espiritual", "Guía"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 6 nodos PURA CALIDAD 1:1 de Filosofía Enciclopédica Tomo 1 (Batch 15) y 3 términos sinápticos.');
