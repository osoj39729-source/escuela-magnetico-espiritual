const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/el-magnetismo-en-su-origen_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - El Magnetismo en su Origen (Batch 9 Final - Claves 82 a 88)
const nuevosNodos = {
  "3402: Atomos": {
    "PilotoDeCoherencia": "Estructura vibratoria de la materia. Trincado asienta que la pequeñez del átomo (media millonésima de milímetro) no es lo asombroso, sino que esta entidad 'muerta' para la ciencia es en realidad un microcosmos en vertiginoso movimiento y transmutación, sostenido por la inteligencia del Espíritu.",
    "CitaInelutable": "Átomos: su estructura... es interesante ver, que lo que nos parece una simple mota... son los agentes de la Vida.",
    "EjemploPedagogico": "El átomo no es un ladrillo inerte en una pared; es un enjambre de abejas (electrones) trabajando matemáticamente bajo las órdenes de la colmena (el Creador).",
    "ConexionDoctrinal": ["Estructura Atómica", "Microcosmos Vivo"],
    "NodosSimapticos": ["Ladrillo Vivo"]
  },
  "3519: Moléculas": {
    "PilotoDeCoherencia": "Agrupación celular de la materia. Trincado reconoce el inmenso trabajo de la ciencia al catalogar más de noventa especies de átomos (la tabla periódica), pero advierte que la molécula no es un milagro químico, sino el resultado lógico de la afinidad magnética reuniendo átomos elementales.",
    "CitaInelutable": "Moléculas. En nuestra correría y en los laboratorios de los hombres sincrónicos, he visto listas de átomos... La doctrina científica dice: 'Nos imaginamos a los átomos elementales reunidos...'",
    "EjemploPedagogico": "Si el átomo es una letra, la molécula es una sílaba formada por la ley de afinidad gramatical del Universo. No es azar, es escritura cósmica.",
    "ConexionDoctrinal": ["Moléculas", "Afinidad Química", "Química Espiritual"],
    "NodosSimapticos": ["Sílaba Cósmica"]
  },
  "3583: “Ión” “Ionización”": {
    "PilotoDeCoherencia": "Aclaración sobre la Ionización. Trincado rectifica la terminología científica: el ION no es una entidad originaria ni independiente. Es el producto (vulgarmente hablando, un residuo u oxidación) resultante de la disociación de electrones, átomos y moléculas bajo fricción magnética.",
    "CitaInelutable": "Justamente, el ION, no es una entidad. Es (por decirlo vulgarmente) el resultado de la disociación de los electrones, de los átomos y las moléculas.",
    "EjemploPedagogico": "El ión no es la madera ni el fuego, es la chispa y el humo que saltan cuando la fricción rompe la molécula.",
    "ConexionDoctrinal": ["El Ión", "Disociación Electrónica", "Resultado Cinético"],
    "NodosSimapticos": ["Chispa Subatómica"]
  },
  "3605: Electrones": {
    "PilotoDeCoherencia": "El ápice de la física trincadista. Los electrones son los fundamentos cinéticos y eléctricos del átomo, la fuerza más absorbente de la inteligencia científica. Al final, toda la estructura de la materia descansa sobre la Vida que opera estas partículas fugaces.",
    "CitaInelutable": "Esta es, en realidad, la parte de absorbente totalidad de la inteligencia científica y la más divertida por su estudio y funciones cinéticas y eléctricas... Son el fundamento científico de los átomos.",
    "EjemploPedagogico": "Son los mensajeros directos del Espíritu. Así como el cerebro manda impulsos eléctricos al dedo para que se mueva, el Universo usa a los electrones para mover el mundo físico.",
    "ConexionDoctrinal": ["Funciones Cinéticas", "Fundamento del Átomo", "Electrón como Agente"],
    "NodosSimapticos": ["Mensajero Eléctrico"]
  },
  "3721: Corona Final": {
    "PilotoDeCoherencia": "Clausura magistral del Apéndice Científico. Trincado corona el libro evidenciando que el Magnetismo no es aire vacío, sino la fuerza que cohesiona la tabla periódica de los elementos ('los ingredientes del mundo'), confirmando que la doctrina se apoya en física comprobable.",
    "CitaInelutable": "Necesitamos coronar el Libro 'El Magnetismo en su Origen' y no puede haber más valiosa corona, que una gran lista titulada: 'Los ingredientes del Mundo'.",
    "EjemploPedagogico": "Para demostrar que su enseñanza no es religión nubosa, el Maestro no baja un pergamino mágico; pone sobre la mesa la tabla periódica de los elementos químicos para demostrar que esa es la obra de Dios.",
    "ConexionDoctrinal": ["Unión de Ciencia y Filosofía", "Corona Científica"],
    "NodosSimapticos": []
  },
  "3736: Ingredientes del Mundo: 1.- Aluminio 2.- Antimonio": {
    "PilotoDeCoherencia": "El reconocimiento explícito de la Tabla Periódica. Trincado enumera los elementos químicos demostrando que estos son los bloques de construcción dictados por Eloí y manejados por el Espíritu mediante las leyes de magnetismo y afinidad.",
    "CitaInelutable": "Ingredientes del Mundo: 1.- Aluminio 2.- Antimonio 3.- Argón 4.- Arsénico...",
    "EjemploPedagogico": "El Creador es el panadero supremo, y el hidrógeno, el oxígeno y el carbono son la harina, la sal y la levadura del Universo, cocinados en el horno del Magnetismo.",
    "ConexionDoctrinal": ["Los Elementos Químicos", "Ingredientes del Mundo", "Química Universal"],
    "NodosSimapticos": ["Despensa del Creador", "Harina Cósmica"]
  },
  "3948: NOTA PARA LOS CRÍTICOS": {
    "PilotoDeCoherencia": "Soberanía literaria. Trincado advierte a los críticos gramaticales que el uso inusual de mayúsculas en sus obras no es un error de ortografía, sino un sistema pedagógico para ahorrar subrayados y fijar la atención psíquica del lector en conceptos axiomas.",
    "CitaInelutable": "NOTA PARA LOS CRÍTICOS... Con el uso de las mayúsculas, nos ahorramos un subrayado y en todos los casos, nos hemos propuesto llamar la atención del lector.",
    "EjemploPedagogico": "Trincado no escribe para la Academia de la Lengua, escribe para el alma. Las mayúsculas son gritos en el papel para despertar al lector dormido.",
    "ConexionDoctrinal": ["Pedagogía Trincadista", "Soberanía Gramatical", "Atención Psíquica"],
    "NodosSimapticos": ["Grito de Tinta", "Gramática del Alma"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Ingredientes del Mundo": {
    "Definición": "Término utilizado por la Escuela Magnético-Espiritual para referirse a la tabla periódica de los elementos químicos. Se conceptualizan no como materia muerta, sino como las herramientas elementales creadas por el Éter vibratorio para que el Espíritu forje la creación física.",
    "Contexto": "Corona Final del Apéndice de El Magnetismo en su Origen.",
    "Conexiones": ["Química Universal", "Elementos Químicos", "Materialismo Espiritual"],
    "Obras": ["El Magnetismo en su Origen"]
  },
  "Gramática del Alma": {
    "Definición": "Estilo pedagógico soberano del Maestro Joaquín Trincado, caracterizado por el uso profuso de mayúsculas fuera de las reglas ortográficas convencionales, con el propósito deliberado de actuar como un 'subrayado' visual que impacte psíquicamente la conciencia del lector sobre verdades inmutables.",
    "Contexto": "Nota para los Críticos al final de El Magnetismo en su Origen.",
    "Conexiones": ["Soberanía Literaria", "Pedagogía Trincadista"],
    "Obras": ["El Magnetismo en su Origen"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 7 nodos PURA CALIDAD 1:1 de El Magnetismo en su Origen (Batch 9 FINAL) y 2 términos sinápticos. OBRA COMPLETADA 100%.');
