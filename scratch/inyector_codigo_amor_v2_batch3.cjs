const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Código de Amor Universal Tomo 2 (Batch 3 - Claves 30 a 44)
const nuevosNodos = {
  "1136: Capítulo XI: ECONOMÍA POLÍTICA (HOY GEOGRÁFICA)": {
    "PilotoDeCoherencia": "Economía Geográfica. La antigua economía política se transforma en el conocimiento de las riquezas regionales para el intercambio justo entre continentes, eliminando fronteras ideológicas.",
    "CitaInelutable": "Economía política pronto cesa... se llamará geográfica... conocimiento de las riquezas o producciones de las regiones.",
    "EjemploPedagogico": "Un mapa donde no se ven banderas de países, sino símbolos de frutas, metales y maderas; las regiones se envían lo que les sobra y reciben lo que les falta en perfecta armonía.",
    "ConexionDoctrinal": ["Intercambio Regional", "Justicia Comunal"],
    "NodosSimapticos": []
  },
  "1172: Capítulo XIII: ECOOMÍA ESPIRITUAL": {
    "PilotoDeCoherencia": "Potencia Psíquica. La economía espiritual es la unidad del pensamiento para el esfuerzo psíquico colectivo, una facultad nueva del séptimo día de la humanidad.",
    "CitaInelutable": "Consiste en la unidad del pensamiento para el esfuerzo Psíquico, para obrar en consonancia con la ley Mayor.",
    "EjemploPedagogico": "Miles de personas empujando un carro en diferentes direcciones no lo mueven; pero si todos piensan 'adelante' y empujan a la vez, el carro vuela por el camino.",
    "ConexionDoctrinal": ["Economía Espiritual (Séptimo Día)", "Unidad de Pensamiento"],
    "NodosSimapticos": ["Economía Espiritual (Séptimo Día)"]
  },
  "1215: Capítulo XIV: ECONOMÍA UNIVERSAL": {
    "PilotoDeCoherencia": "Omnipotencia Solidaria. La unidad de todos los espíritus concentrados en el Maestro alcanza la solidaridad con el universo y la omnipotencia para obrar en la creación.",
    "CitaInelutable": "Unidad de todos los espíritus concentrados en el Maestro... solidaridad con todo el universo.",
    "EjemploPedagogico": "Un coro inmenso que canta una sola nota pura bajo la dirección de un director; esa nota resuena en todos los rincones del edificio del universo.",
    "ConexionDoctrinal": ["Solidaridad Cosmogónica", "Autoridad del Maestro"],
    "NodosSimapticos": []
  },
  "1403: ARTÍCULO 1º - Queda proclamado el trabajo, ley obligatoria...": {
    "PilotoDeCoherencia": "Trabajo como Deber y Salud. El trabajo es obligatorio para el progreso, pero debe ejecutarse en amor para ser suave, productivo y beneficioso para la comunidad.",
    "CitaInelutable": "Trabajo, ley obligatoria... ejecutado en amor, porque es más productivo y beneficioso y suave.",
    "EjemploPedagogico": "El músico que ensaya ocho horas diarias; no lo siente como un castigo porque ama la música, y su esfuerzo embellece la vida de todos los que lo escuchan.",
    "ConexionDoctrinal": ["Trabajo en Amor (Axioma)", "Ley de Progreso"],
    "NodosSimapticos": ["Trabajo en Amor (Axioma)"]
  },
  "1569: ARTÍCULO 1º - “El mundo comunizado”, por lo tanto: todos los productos...": {
    "PilotoDeCoherencia": "Usufructo Fraternal. Todos los productos naturales y del trabajo son medios de subsistencia para la comunidad; el consumo se rige por la necesidad sin perjudicar al hermano.",
    "CitaInelutable": "Todos los productos del trabajo de la comuna... son medios de subsistencia para la comunidad.",
    "EjemploPedagogico": "Una mesa grande donde hay comida para todos los hermanos de la casa; cada uno toma lo que su cuerpo necesita para estar sano, sin esconder pan en sus bolsillos para después.",
    "ConexionDoctrinal": ["Ley de Subsistencias (Comunal)", "Mundo Comunizado"],
    "NodosSimapticos": ["Ley de Subsistencias (Comunal)"]
  },
  "1635: CAPÍTULO SÉPTIMO: LEY DE UNIÓN DE LOS SERES": {
    "PilotoDeCoherencia": "Familia de Afinidad. Se establece la constitución de las familias basada en la libertad de amor y la afinidad espiritual, rompiendo la esclavitud histórica de la mujer.",
    "CitaInelutable": "Ley de unión de los seres. Constitución de las familias... percepción que la mujer tiene del más allá.",
    "EjemploPedagogico": "Dos amigos que se prometen lealtad porque sus almas se comprenden; su unión no necesita de contratos fríos, sino de la luz que ambos comparten.",
    "ConexionDoctrinal": ["Unión por Amor", "Derechos de la Mujer"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Economía Espiritual (Séptimo Día)": {
    "Definición": "Facultad superior de la humanidad regenerada que consiste en la concentración unificada del pensamiento y la voluntad psíquica para actuar en sintonía con las leyes universales. Esta 'economía' permite realizar transformaciones en el ambiente y en la sociedad con una potencia espiritual antes desconocida.",
    "Contexto": "Código de Amor Universal Tomo 2 (Tratado de las Economías).",
    "Conexiones": ["Séptimo Día", "Pensamiento", "Psiquismo"],
    "Obras": ["Código de Amor Universal"]
  },
  "Ley de Subsistencias (Comunal)": {
    "Definición": "Norma fundamental de la Comuna que declara todos los recursos naturales y bienes producidos por el trabajo humano como patrimonio colectivo de libre usufructo. Prohíbe la acumulación egoísta y garantiza que cada individuo reciba lo necesario para su digna subsistencia según la justicia y la equidad.",
    "Contexto": "Código de Amor Universal Tomo 2 (Capítulo Sexto).",
    "Conexiones": ["Usufructo", "Justicia Comunal", "Comuna"],
    "Obras": ["Código de Amor Universal", "Profilaxis de la Vida"]
  },
  "Trabajo en Amor (Axioma)": {
    "Definición": "Principio que transforma la obligación del trabajo en un acto de creación voluntaria y placentera. Sostiene que cuando el ser realiza su función social movido por el amor a sus hermanos y a la obra, el esfuerzo es más eficaz, la salud se fortalece y la fatiga se minimiza.",
    "Contexto": "Código de Amor Universal Tomo 2 (Capítulo Quinto).",
    "Conexiones": ["Trabajo", "Amor", "Progreso"],
    "Obras": ["Código de Amor Universal", "Los Cinco Amores"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 3 de Código de Amor T2 (6 nodos) y 3 términos sinápticos. Subsistencias y Trabajo sellados.');
