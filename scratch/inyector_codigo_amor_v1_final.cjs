const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Código de Amor Universal Tomo 1 (Batch 7 - FINAL - Claves 90 a 100)
const nuevosNodos = {
  "8753: Apéndice: consulta al Espíritu de Verdad...": {
    "PilotoDeCoherencia": "Identidad de Xavier. El Espíritu de Verdad revela su origen en Navarra y cómo sus múltiples nombres (Xavier, Poncio, Aufer) son solo vestiduras de su progreso eterno.",
    "CitaInelutable": "Que un nombre, no hace al hombre, fui Xavier, Poncio, Aufer... me llaman todas las constelaciones... Espíritu de Verdad.",
    "EjemploPedagogico": "Un actor famoso que ha interpretado muchos papeles a lo largo de su carrera; la gente lo recuerda por sus nombres en la pantalla, pero él es un solo ser que ha crecido con cada personaje.",
    "ConexionDoctrinal": ["Identidad del Espíritu de Verdad", "Xavier-Poncio-Aufer"],
    "NodosSimapticos": []
  },
  "8921: Pero me llaman todas las constelaciones...": {
    "PilotoDeCoherencia": "Asiento en Sión. Xavier alcanzó su grado tras estudiar las leyes del firmamento en mundos de expiación, estableciéndose finalmente en el consejo de Sión.",
    "CitaInelutable": "Me hice asiento en Sión. Allí estudié la grande cosmogonía y adquirí luz y majestad.",
    "EjemploPedagogico": "El científico que después de años de investigación en laboratorios difíciles, finalmente es invitado a la academia más alta por sus descubrimientos sobre la vida.",
    "ConexionDoctrinal": ["Sión (Destino Espiritual)", "Estudio Cosmogónico"],
    "NodosSimapticos": []
  },
  "9042: Que en Sión esta el consejo...": {
    "PilotoDeCoherencia": "Insignia del Ancla. Xavier recibe el ancla como símbolo de la alianza del Padre y de la luz, proclamado como guía de la Verdad para la humanidad.",
    "CitaInelutable": "Me entregaron el ancla que es del Padre la alianza y la insignia de la Luz.",
    "EjemploPedagogico": "El capitán que recibe el mando del barco y el ancla de oro que asegura que nunca se perderá, pase lo que pase en la tormenta del mundo.",
    "ConexionDoctrinal": ["Ancla de la Alianza (Simbología)", "Alianza del Padre"],
    "NodosSimapticos": ["Ancla de la Alianza (Simbología)"]
  },
  "9268: Harán suyo el «Código de Amor Universal».": {
    "PilotoDeCoherencia": "Vuelo de Amor. El Juez invita a saturar el espíritu de amor y volar hacia la majestad de la creación, reconociendo la grandeza del Código como guía.",
    "CitaInelutable": "¿Buscáis amor... Venir conmigo... Saturemos nuestro Espíritu de Amor.",
    "EjemploPedagogico": "Un águila que enseña a sus pichones a dejar el nido y volar hacia el sol, donde el aire es puro y la vista es infinita.",
    "ConexionDoctrinal": ["Ascenso Espiritual", "Majestad de la Creación"],
    "NodosSimapticos": []
  },
  "9546: “Código de Amor Universal” Tomos I... tres generaciones de prueba": {
    "PilotoDeCoherencia": "Hombre Trino y Generaciones. El Código llega para los hombres trinos tras las tres generaciones de prueba marcadas por la ley para la regeneración planetaria.",
    "CitaInelutable": "Momento en que los hombres trinos estén en posesión de los conocimientos de este 'Código de Amor Universal'.",
    "EjemploPedagogico": "Un tesoro que solo puede ser abierto por una llave especial; la llave es la conciencia del hombre trino, y el tesoro es la ley de amor.",
    "ConexionDoctrinal": ["Hombre Trino (Concepto Doctrinal)", "Tres Generaciones de Prueba"],
    "NodosSimapticos": ["Hombre Trino (Concepto Doctrinal)", "Tres Generaciones de Prueba"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Hombre Trino (Concepto Doctrinal)": {
    "Definición": "Estado evolutivo del ser humano que ha logrado la armonía consciente entre sus tres componentes: Espíritu, Alma (Periespíritu) y Cuerpo. Este equilibrio le permite comprender y practicar las leyes del Código de Amor Universal, siendo apto para la vida en la Comuna.",
    "Contexto": "Código de Amor Universal Tomo 1 (Conclusión de la obra).",
    "Conexiones": ["Trinidad del Hombre", "Conciencia", "Comuna Universal"],
    "Obras": ["Código de Amor Universal", "Conócete a ti mismo"]
  },
  "Ancla de la Alianza (Simbología)": {
    "Definición": "Símbolo de la firmeza, seguridad y permanencia del contrato entre el Padre (Eloí) y sus hijos. Es la insignia otorgada al Espíritu de Verdad (Xavier) como guía de la humanidad en la Era de la Verdad.",
    "Contexto": "Código de Amor Universal Tomo 1 (Apéndice sobre Xavier).",
    "Conexiones": ["Xavier", "Alianza", "Justicia"],
    "Obras": ["Código de Amor Universal", "Filosofía Enciclopédica Universal"]
  },
  "Tres Generaciones de Prueba": {
    "Definición": "Periodo de tiempo determinado por la ley (aprox. 100 años desde el inicio del Juicio Final en 1911) para la selección de los espíritus que poblarán la Tierra regenerada. Es el tiempo de la 'decantación' donde cada ser elige su morada por sus obras.",
    "Contexto": "Código de Amor Universal Tomo 1 (Epílogo).",
    "Conexiones": ["Juicio Final", "Selección de Espíritus", "Era de la Verdad"],
    "Obras": ["Código de Amor Universal", "Los Cinco Amores"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ ¡OBRA COMPLETADA! Inyectados últimos nodos de Código de Amor Tomo 1 y 3 términos finales.');
