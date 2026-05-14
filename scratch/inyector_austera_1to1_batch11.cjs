const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 11)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "12174: PÁRRAFO 1º — REFLEXIÓN COMPARATIVA": {
    "PilotoDeCoherencia": "La reflexión comparativa es el taller donde el espíritu analiza las piezas de la realidad. Comparamos las ideas concretas para encontrar las leyes universales que las rigen. No es un proceso automático; requiere el esfuerzo consciente del espíritu para no dejarse engañar por las apariencias superficiales.",
    "CitaInelutable": "Reflexionar es comparar para encontrar la unidad en la diversidad.",
    "EjemploPedagogico": "Es como un perito que compara dos firmas: busca los trazos, la presión y el ritmo. Al comparar, descubre si la mano que escribió es la misma. El espíritu compara los hechos de la vida para descubrir la mano de Eloí en ellos.",
    "ConexionDoctrinal": ["Reflexión", "Comparación", "Método Racional"],
    "NodosSimapticos": ["Reflexión Comparativa", "Taller del Espíritu", "Trazos de la Ley"]
  },
  "12322: PÁRRAFO 2º — REFLEXIÓN INDUCTIVA Y DEDUCTIVA": {
    "PilotoDeCoherencia": "Este es el párrafo trascendental. Inducción para subir del efecto a la causa; deducción para bajar de la causa al efecto. El estudiante debe aprender a oscilar entre estos dos polos para que su conocimiento sea completo y no cojee de ninguna pata.",
    "CitaInelutable": "Sin inducción y deducción, la razón es un pájaro con una sola ala.",
    "EjemploPedagogico": "Inducción es ver el fruto y saber que hay una raíz. Deducción es conocer la raíz y saber qué clase de fruto dará. El filósofo conoce el árbol entero.",
    "ConexionDoctrinal": ["Inducción", "Deducción", "Causalidad"],
    "NodosSimapticos": ["Oscilación Racional", "Raíz y Fruto", "Dos Alas de la Razón"]
  },
  "12329: Punto I — La Inducción": {
    "PilotoDeCoherencia": "La inducción es el camino del investigador. Partimos de los hechos materiales para llegar a las leyes espirituales. Es el método por excelencia de Mi Escuela para demostrar la existencia del espíritu mediante sus obras en la materia.",
    "CitaInelutable": "La inducción es la escala que nos permite subir desde el polvo de la tierra hasta la luz del Padre.",
    "EjemploPedagogico": "Es como seguir el rastro de una fiera en la selva. No ves a la fiera, pero por sus huellas (inductivamente) sabes su tamaño, su peso y su dirección. La creación es la huella de Dios.",
    "ConexionDoctrinal": ["Investigación", "Hechos", "Causas"],
    "NodosSimapticos": ["Escala Inductiva", "Rastro de la Verdad", "Huellas de Dios"]
  },
  "12376: Punto II — La ley de gravedad e ideas relativas": {
    "PilotoDeCoherencia": "La gravedad no es solo física; es la ley de atracción universal que también rige las ideas. Las ideas pesadas (materialistas) caen al suelo; las ideas ligeras (espirituales) suben al centro. La relatividad de las ideas depende de la masa de prejuicios que el espíritu cargue.",
    "CitaInelutable": "La gravedad es la ley de amor expresada en el peso de los mundos y de las ideas.",
    "EjemploPedagogico": "Lanza una piedra y una pluma: la piedra cae rápido, la pluma flota. El prejuicio es la piedra; la verdad es la pluma. Aligera tu espíritu de errores y verás cómo asciendes por gravedad espiritual.",
    "ConexionDoctrinal": ["Gravedad Universal", "Relatividad", "Afinidad"],
    "NodosSimapticos": ["Gravedad de Ideas", "Atracción Universal", "Aligerar el Espíritu"]
  },
  "12476: CAPÍTULO V — LA IMAGINACIÓN": {
    "PilotoDeCoherencia": "La imaginación no es 'la loca de la casa'. Es la facultad constructora del espíritu. Antes de que algo exista en la materia, debe ser imaginado en el espíritu. La imaginación es el pincel con el que el espíritu dibuja el futuro.",
    "CitaInelutable": "Imaginar es crear en el mundo de las ideas antes de plasmar en el mundo de las formas.",
    "EjemploPedagogico": "Antes de que el escultor toque el mármol, ya ha visto la estatua en su imaginación. La estatua ya existe en el espíritu; la materia solo obedece a esa imagen previa.",
    "ConexionDoctrinal": ["Creación", "Idealización", "Poder Mental"],
    "NodosSimapticos": ["Imaginación Constructora", "Pincel del Espíritu", "Preexistencia de la Idea"]
  },
  "12480: PÁRRAFO 1º — IMAGINACIÓN CONSTITUTIVA (ARTÍSTICA)": {
    "PilotoDeCoherencia": "La imaginación artística es la que busca la belleza y la armonía. Es la que nos permite idealizar la materia para elevarla. Denunciamos el arte que degrada; el verdadero arte es el que usa la imaginación para recordar al hombre su origen divino.",
    "CitaInelutable": "El arte es la imaginación puesta al servicio de la belleza del espíritu.",
    "EjemploPedagogico": "Es el poeta que ve un lucero donde otros solo ven un punto de luz. La imaginación artística le da color y sentimiento a la realidad gris del dogma.",
    "ConexionDoctrinal": ["Arte Racional", "Idealización", "Belleza"],
    "NodosSimapticos": ["Imaginación Artística", "Idealización del Mundo", "Color del Espíritu"]
  },
  "12547: PÁRRAFO 2º — IMAGINACIÓN INVENTIVA O CIENTÍFICA": {
    "PilotoDeCoherencia": "La inventiva es la imaginación aplicada a la utilidad y el progreso. Es la que crea máquinas, sistemas y soluciones. Nace de la necesidad de libertad. El inventor es un espíritu que imagina una forma mejor de dominar la materia para servir a la humanidad.",
    "CitaInelutable": "La ciencia es el resultado de la imaginación inventiva sometida a la prueba de la razón.",
    "EjemploPedagogico": "Es el inventor que imagina que el hombre puede volar. Su imaginación crea el plano; su razón prueba las leyes; y el resultado es el avión. Todo empezó en un sueño inventivo.",
    "ConexionDoctrinal": ["Inventiva", "Progreso Técnico", "Libertad"],
    "NodosSimapticos": ["Imaginación Inventiva", "Sueño del Inventor", "Dominio de la Materia"]
  },
  "12683: CAPÍTULO VI — LA RAZÓN": {
    "PilotoDeCoherencia": "La razón es el complemento supremo de la inteligencia. Es la luz que coordina todas las facultades. Una inteligencia sin razón es una fuerza bruta peligrosa; una razón sin amor es una máquina fría. Nuestra razón es la voz de la Ley en nosotros.",
    "CitaInelutable": "La razón es el juez supremo de la vida encarnada.",
    "EjemploPedagogico": "La razón es el director de la orquesta. Los sentidos, la memoria y la imaginación son los músicos. Sin director, cada uno toca lo que quiere y solo hay ruido. Con la razón, hay armonía.",
    "ConexionDoctrinal": ["Razón", "Coordinación", "Soberanía"],
    "NodosSimapticos": ["Director de Orquesta", "Luz Coordinadora", "Voz de la Ley"]
  },
  "12687: PÁRRAFO 1º — LA RAZÓN ES EL COMPLEMENTO INTELECTUAL": {
    "PilotoDeCoherencia": "La razón completa el proceso del conocimiento. Suministra las bases para la certeza. No es algo ajeno al espíritu, es su atributo de justicia. Por la razón comprendemos que el universo tiene un orden y que nosotros somos parte de ese orden.",
    "CitaInelutable": "La razón es el sello de la inteligencia que valida la verdad.",
    "EjemploPedagogico": "Es el remache final de una construcción. Puedes tener las vigas y los ladrillos, pero la razón es el cemento que une todo para que la casa de la sabiduría no se caiga.",
    "ConexionDoctrinal": ["Certeza", "Orden Universal", "Justicia"],
    "NodosSimapticos": ["Complemento Intelectual", "Sello de Verdad", "Cemento de Sabiduría"]
  },
  "12791: PÁRRAFO 2º — LA RAZÓN SUMINISTRA IDEAS": {
    "PilotoDeCoherencia": "La razón no inventa la verdad, la descubre y la suministra al entendimiento. Está subordinada a la reflexión porque necesita comparar para decidir. La razón nos lleva a comprender lo Absoluto (Eloí) por la lógica de las causas, aunque no podamos abarcarlo todo.",
    "CitaInelutable": "La razón llega al borde del infinito y reconoce a su Creador por la ley de causalidad.",
    "EjemploPedagogico": "Para saber que existe el sol, no necesito tocarlo; basta con ver la luz que emite. La razón ve la luz de la creación y suministra la idea de que existe el Sol de los Soles: Eloí.",
    "ConexionDoctrinal": ["Eloí", "Causalidad", "El Absoluto"],
    "NodosSimapticos": ["Razón y Absoluto", "Descubrimiento de la Verdad", "Luz del Sol de Soles"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Imaginación Constructora": {
    "Definición": "La facultad del espíritu de crear y dar forma a las ideas en el plano mental antes de que estas se manifiesten o se plasmen en la realidad material.",
    "Contexto": "Capítulo V de Filosofía Austera Racional. Trincado la divide en artística e inventiva.",
    "Conexiones": ["Creación", "Idea", "Arte Racional"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Razonamiento de Causalidad": {
    "Definición": "El proceso lógico por el cual el espíritu infiere la existencia de una causa invisible a partir de la observación de sus efectos visibles en la materia.",
    "Contexto": "Párrafo 2° del Capítulo VI de Filosofía Austera Racional.",
    "Conexiones": ["Causa y Efecto", "Eloí", "Lógica"],
    "Obras": ["Filosofía Austera Racional", "Buscando a Dios"]
  },
  "Gravedad de las Ideas": {
    "Definición": "Concepto analógico que establece que las ideas poseen un 'peso' espiritual según su carga de error o verdad, siendo atraídas hacia la materia o hacia el espíritu según su densidad magnética.",
    "Conexiones": ["Magnetismo", "Afinidad", "Ley de Gravedad"],
    "Obras": ["Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Filosofía Austera Racional (Batch 11) y 3 términos sinápticos.');
