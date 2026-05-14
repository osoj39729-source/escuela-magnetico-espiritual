const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 21)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "14797: LA VERDAD COMO AXIOMA": {
    "PilotoDeCoherencia": "La verdad es la realidad absoluta del Creador y la realidad relativa de sus obras. Estudiamos la verdad no como una opinión, sino como un axioma indestructible. La lógica racional es de orden natural; por tanto, lo que es lógicamente necesario en el espíritu, debe ser real en el universo. La verdad es una y eterna.",
    "CitaInelutable": "La verdad es la única roca que no se deshace ante el embate de los siglos.",
    "EjemploPedagogico": "Es como la luz del sol: puedes cerrar las ventanas y decir que no existe, pero la luz sigue allí afuera. La verdad no depende de que el hombre la acepte; el hombre depende de aceptar la verdad para no vivir a oscuras.",
    "ConexionDoctrinal": ["Verdad Absoluta", "Realidad", "Axioma"],
    "NodosSimapticos": ["Roca de la Verdad", "Orden Natural", "Realidad de Eloí"]
  },
  "15085: ESPINOSA Y EL REFLEJO UNIVERSAL": {
    "PilotoDeCoherencia": "Reconocemos en Baruch Spinoza a un espíritu que conocía secretos de la Cábala. Él sentó que 'lo que hay arriba, hay abajo'. Este es el emblema de Israel: la unión de lo espiritual y lo material. El pensamiento de Spinoza es un puente hacia la comprensión del monismo espiritual que Mi Escuela defiende.",
    "CitaInelutable": "Como es arriba es abajo; como es en el espíritu es en la materia.",
    "EjemploPedagogico": "Es como un espejo frente a una montaña: lo que ves en el espejo (la materia) es el reflejo de la montaña real (el espíritu). Si conoces el reflejo, puedes conocer la montaña.",
    "ConexionDoctrinal": ["Spinoza", "Cábala", "Reflejos"],
    "NodosSimapticos": ["Asi arriba como abajo", "Espejo de Spinoza", "Triángulos Cruzados"]
  },
  "15355: LO CONCEBIBLE EXISTE": {
    "PilotoDeCoherencia": "Sostenemos que todo lo que el espíritu es capaz de concebir, ya existe o existirá. Julio Verne es el ejemplo: sus 'locuras' hoy son realidades científicas. La imaginación no crea de la nada, sino que capta realidades que ya vibran en el pensamiento universal de Eloí.",
    "CitaInelutable": "Todo lo que es concebible existe en el archivo infinito de la creación.",
    "EjemploPedagogico": "Imagina que eres un arquitecto: si puedes dibujar un plano, es porque los materiales y las leyes para construir ese edificio existen. Nadie diseña algo imposible para el universo.",
    "ConexionDoctrinal": ["Concebibilidad", "Jules Verne", "Imaginación"],
    "NodosSimapticos": ["Realidad de lo Imaginado", "Archivo de Creación", "Visión del Futuro"]
  },
  "15635: LO INCONCEBIBLE NO EXISTE PARA EL SER": {
    "PilotoDeCoherencia": "Lo que no podemos concebir, no tiene existencia para nosotros en nuestro grado actual. El universo es infinito, pero nuestra realidad está limitada por nuestra capacidad de comprensión. A medida que el espíritu progresa, lo inconcebible se hace concebible y el mundo se expande.",
    "CitaInelutable": "Tu mundo es tan grande como tu capacidad de concebir la Verdad.",
    "EjemploPedagogico": "Es como una habitación a oscuras: las cosas están allí, pero para ti no existen hasta que las tocas o las iluminas. El progreso es ir encendiendo luces en la inmensidad del cosmos.",
    "ConexionDoctrinal": ["Límites de la Conciencia", "Progreso", "Existencia Relativa"],
    "NodosSimapticos": ["Existencia por Conciencia", "Luces en la Sombra", "Expansión del Mundo"]
  },
  "15915: LA MENTE Y EL MUNDO EXTERIOR": {
    "PilotoDeCoherencia": "Afirmamos que lo que sucede en nuestra mente sucede en el mundo exterior por ley de causa y efecto. El pensamiento es una fuerza plástica que moldea la realidad. Si tu mente es armónica, crearás armonía fuera. Denunciamos el error de creer que el pensamiento es 'privado' y no tiene consecuencias.",
    "CitaInelutable": "El pensamiento es el arquitecto invisible de la realidad material.",
    "EjemploPedagogico": "Si odias, proyectas sombras que terminan convirtiéndose en conflictos y enfermedades reales. Si amas, proyectas luz que se convierte en salud y paz. Tu mente es el molde de tu mundo.",
    "ConexionDoctrinal": ["Poder del Pensamiento", "Causalidad", "Proyección"],
    "NodosSimapticos": ["Mente y Mundo", "Arquitecto Invisible", "Molde de Realidad"]
  },
  "16185: LA LÓGICA DE ORDEN NATURAL": {
    "PilotoDeCoherencia": "La lógica no es un invento humano; es la observación de las leyes naturales aplicadas al pensamiento. El universo es lógico porque el Creador es la Razón Suprema. Estudiar lógica es estudiar el ritmo con el que late el corazón de la creación.",
    "CitaInelutable": "La lógica es el lenguaje en el que está escrito el código del universo.",
    "EjemploPedagogico": "Si sueltas una piedra, cae. Eso es lógico porque es ley natural. El pensamiento debe seguir esa misma caída hacia la verdad, sin desviarse por los vientos del dogma o la pasión.",
    "ConexionDoctrinal": ["Orden Natural", "Lógica", "Leyes Universales"],
    "NodosSimapticos": ["Ritmo de Creación", "Código del Universo", "Lógica Natural"]
  },
  "16455: CAPÍTULO VI — EL PROCEDIMIENTO": {
    "PilotoDeCoherencia": "El procedimiento es el camino que seguimos para encontrar la verdad. No vale cualquier camino. Estudiamos el método racional que parte del efecto hacia la causa. El procedimiento correcto garantiza que el resultado sea ciencia y no fantasía mística.",
    "CitaInelutable": "El camino determina el destino; el procedimiento racional determina la Verdad.",
    "EjemploPedagogico": "Es como una receta de cocina: si sigues el procedimiento correcto, tendrás un alimento sano. Si inventas los pasos por capricho, tendrás un veneno. El procedimiento es la receta de la sabiduría.",
    "ConexionDoctrinal": ["Metodología", "Procedimiento Racional", "Cientificismo"],
    "NodosSimapticos": ["Camino de la Verdad", "Receta de Sabiduría", "Método Racional"]
  },
  "16725: LA BÚSQUEDA DE LA CAUSA": {
    "PilotoDeCoherencia": "Todo procedimiento racional debe buscar la causa. El que se queda en el efecto es un niño; el que llega a la causa es un sabio. Mi Escuela no se detiene en los fenómenos 'médiumnicos' o materiales, sino que busca al espíritu que los provoca y la ley que los rige.",
    "CitaInelutable": "Busca la causa y serás libre; quédate en el efecto y serás esclavo de la apariencia.",
    "EjemploPedagogico": "Si ves humo, no te quedes mirando el humo. Busca el fuego. El humo es el fenómeno; el fuego es la causa espiritual.",
    "ConexionDoctrinal": ["Causalidad", "Espíritu", "Sabiduría"],
    "NodosSimapticos": ["Búsqueda de la Causa", "Humo y Fuego", "Esclavo de Apariencia"]
  },
  "16995: EL EMBLEMA DE ISRAEL": {
    "PilotoDeCoherencia": "Los triángulos cruzados de Israel representan la perfecta unión y equilibrio entre el espíritu (triángulo hacia arriba) y la materia (triángulo hacia abajo). Es el sello de la Comuna: la armonía total de los dos mundos en el hombre.",
    "CitaInelutable": "En el emblema de Israel está escrita la ley de la encarnación perfecta.",
    "EjemploPedagogico": "Son dos manos que se entrelazan: una viene del cielo y otra de la tierra. Juntas forman una fuerza imparable de progreso y amor.",
    "ConexionDoctrinal": ["Israel", "Símbolos Racionales", "Unión Espíritu-Materia"],
    "NodosSimapticos": ["Triángulos de Israel", "Encarnación Perfecta", "Sello de Comuna"]
  },
  "17265: LA CIENCIA CONVERTIDA EN REALIDAD": {
    "PilotoDeCoherencia": "Lo que hoy es teoría en el espíritu, mañana es realidad en la materia. El progreso humano es el proceso de convertir las concepciones mentales en hechos tangibles. La Comuna ya existe en el espíritu de los hombres superiores; solo falta que el procedimiento correcto la plasme en la tierra.",
    "CitaInelutable": "La Comuna es una concepción que el procedimiento de la justicia hará realidad.",
    "EjemploPedagogico": "Como el avión de Verne, la Comuna es el vuelo del espíritu que la humanidad ya ha concebido. Solo necesitamos el trabajo constante para que ese avión aterrice en nuestra sociedad.",
    "ConexionDoctrinal": ["Realización", "Progreso", "Comuna"],
    "NodosSimapticos": ["Teoría y Realidad", "Avión de la Comuna", "Justicia en la Tierra"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Concebibilidad": {
    "Definición": "Principio ontológico que establece que toda idea capaz de ser formulada por el espíritu posee una realidad latente o manifiesta en el universo, fundamentando la capacidad creativa del hombre.",
    "Contexto": "Ontología Racional en Filosofía Austera Racional.",
    "Conexiones": ["Imaginación", "Jules Verne", "Verdad"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Procedimiento Racional": {
    "Definición": "El método ordenado y lógico de investigación que parte de la observación de los efectos materiales para ascender inductivamente hacia las causas espirituales, garantizando la certeza científica.",
    "Contexto": "Metodología en Filosofía Austera Racional.",
    "Conexiones": ["Causalidad", "Inducción", "Ciencia y Conciencia"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Triángulos de Israel": {
    "Definición": "Símbolo que representa la interpenetración y equilibrio entre el mundo espiritual y el material, sirviendo de emblema a la unión universal propugnada por la Escuela.",
    "Conexiones": ["Símbolos", "Espíritu y Materia", "Comuna"],
    "Obras": ["Filosofía Austera Racional", "Historia de la Escuela"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Filosofía Austera Racional (Batch 21) y 3 términos sinápticos.');
