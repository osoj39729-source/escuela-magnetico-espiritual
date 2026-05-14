const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 10)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "16420: CAPÍTULO VII — LA GENERALIZACIÓN Y LA ABSTRACCIÓN": {
    "PilotoDeCoherencia": "La generalización es la capacidad del espíritu de agrupar realidades diversas bajo una sola idea común. No es un proceso automático del cerebro, es un acto de síntesis intelectual. La abstracción nos permite separar lo esencial de lo accidental para llegar a la raíz de las cosas.",
    "CitaInelutable": "Abstraer es despojar a la idea de sus vestiduras materiales para ver su esencia espiritual.",
    "EjemploPedagogico": "Es como mirar un bosque: la vista ve árboles individuales (lo particular), pero la inteligencia ve 'el bosque' (lo general). Abstraer es quitar las hojas y las ramas para entender la ley de crecimiento que rige a todos los árboles.",
    "ConexionDoctrinal": ["Abstracción", "Generalización", "Síntesis"],
    "NodosSimapticos": ["Acto de Abstraer", "Síntesis del Espíritu", "Raíz Esencial"]
  },
  "16680: GÉNERO Y ESPECIE — RELACIONES RECÍPROCAS": {
    "PilotoDeCoherencia": "Género y especie son herramientas de clasificación que reflejan el orden del universo. Una especie puede ser género para otra inferior. Esto demuestra la cadena infinita de la creación donde todo está interconectado. Nada está aislado; todo pertenece a un grupo y a una ley superior.",
    "CitaInelutable": "Género y especie son las relaciones correlativas que ordenan la diversidad de la vida.",
    "EjemploPedagogico": "Es como una familia: tú eres hijo (especie) respecto a tus padres (género), pero eres padre (género) respecto a tus hijos (especie). El orden se mantiene por la relación constante.",
    "ConexionDoctrinal": ["Clasificación Universal", "Interconexión", "Orden"],
    "NodosSimapticos": ["Género y Especie", "Cadena de Creación", "Relación Correlativa"]
  },
  "16950: EL ORGANISMO COMO GÉNERO UNIVERSAL": {
    "PilotoDeCoherencia": "Definimos el 'Organismo' como el género que engloba a vegetales y animales. Todo lo que tiene vida organizada comparte una esencia común. Denunciamos que la ciencia separe tajantemente lo que la naturaleza ha unido en un solo plan de evolución.",
    "CitaInelutable": "El organismo es la forma única que la vida toma para manifestarse en grados diversos.",
    "EjemploPedagogico": "El organismo es el plano arquitectónico. Luego, ese plano se puede usar para hacer una casa pequeña (planta) o un edificio grande (animal). Pero los cimientos y las leyes de construcción (el organismo) son los mismos.",
    "ConexionDoctrinal": ["Unidad de la Vida", "Evolución", "Biología Espiritual"],
    "NodosSimapticos": ["Género Organismo", "Plano de la Vida", "Unidad Evolutiva"]
  },
  "17220: DE LO PARTICULAR A LO UNIVERSAL": {
    "PilotoDeCoherencia": "El espíritu sube la escalera de la inteligencia desde el objeto concreto hasta la ley universal. Este ascenso es el camino del progreso. El ignorante solo ve 'esta rata' o 'este pájaro'; el sabio ve en ellos la ley del vertebrado y el magnetismo que los anima a todos.",
    "CitaInelutable": "El espíritu es el único capaz de ver lo Universal en lo Particular.",
    "EjemploPedagogico": "Es como aprender a leer: primero ves letras sueltas (particulares), luego palabras, y finalmente captas el mensaje de todo el libro (universal). El universo es el libro; nosotros aprendemos a leerlo.",
    "ConexionDoctrinal": ["Ascenso Intelectual", "Ley Universal", "Sabiduría"],
    "NodosSimapticos": ["Particular y Universal", "Escalera de Inteligencia", "Mensaje del Universo"]
  },
  "17500: LA OPERACIÓN COMPARATIVA": {
    "PilotoDeCoherencia": "La comparación es el motor del juicio. Al comparar, el espíritu encuentra similitudes y diferencias. De esta operación nace la ciencia. Pero advertimos: la comparación debe ser justa y sin prejuicios para no crear géneros falsos basados en apariencias.",
    "CitaInelutable": "Comparar es el acto de pesar las realidades en la balanza de la razón.",
    "EjemploPedagogico": "Es como un sastre que compara dos telas: mira el color, la resistencia y la textura. Solo así puede decidir cuál es mejor para el traje. El espíritu compara experiencias para tejer su traje de sabiduría.",
    "ConexionDoctrinal": ["Comparación", "Juicio", "Metodología"],
    "NodosSimapticos": ["Motor del Juicio", "Balanza de Razón", "Tejido de Sabiduría"]
  },
  "17780: LA DIVERSIDAD EN LA UNIDAD": {
    "PilotoDeCoherencia": "La diversidad de especies no niega la unidad del Creador. Al contrario, la exalta. Cada forma nueva es una nueva palabra en el poema de la creación. La Filosofía Austera enseña a amar la diversidad como la riqueza infinita de la Sustancia Una.",
    "CitaInelutable": "La diversidad es la demostración de la omnipotencia de la Ley de Amor.",
    "EjemploPedagogico": "Imagina un coro de mil voces: cada una es diferente, pero juntas crean una sola armonía. La diversidad es la voz de cada ser; la unidad es la sinfonía de Eloí.",
    "ConexionDoctrinal": ["Diversidad", "Unidad", "Omnipotencia"],
    "NodosSimapticos": ["Diversidad en Unidad", "Poema de Creación", "Coro Universal"]
  },
  "18050: EL ERROR DE LAS CATEGORÍAS FIJAS": {
    "PilotoDeCoherencia": "Denuncio la ciencia que quiere encasillar la vida en categorías fijas e inmutables. La vida es movimiento y evolución. Lo que hoy es especie, mañana puede ser género de algo superior. Las categorías son solo peldaños, no cárceles para el conocimiento.",
    "CitaInelutable": "La vida no cabe en las cajas de los museos; la vida es el fluir eterno del espíritu.",
    "EjemploPedagogico": "Es como intentar detener un río poniéndole etiquetas a cada gota de agua. Las etiquetas se mojan y el río sigue corriendo. No busques detener la vida, busca correr con ella.",
    "ConexionDoctrinal": ["Evolucionismo", "Movimiento Eterno", "Crítica al Dogma Científico"],
    "NodosSimapticos": ["Categorías Peldaño", "Fluir del Espíritu", "Río de la Vida"]
  },
  "18320: LA ABSTRACCIÓN DEL 'NÚMERO'": {
    "PilotoDeCoherencia": "El número es la abstracción máxima de la cantidad. Las matemáticas son el lenguaje de la creación porque el universo está hecho con peso y medida. Pero el número sin espíritu es una cifra muerta. En Mi Escuela, el 1 es el Creador y el infinito es la familia humana.",
    "CitaInelutable": "El universo es una ecuación perfecta escrita por la mano de Eloí.",
    "EjemploPedagogico": "Los números son las notas de la partitura. Puedes saber solfeo, pero si no tienes alma para interpretar, la música no nacerá. Las matemáticas son el solfeo; la vida es la interpretación.",
    "ConexionDoctrinal": ["Matemática Universal", "Cantidad y Cualidad", "Geometría"],
    "NodosSimapticos": ["Abstracción de Número", "Ecuación de Eloí", "Partitura del Universo"]
  },
  "18580: LA SÍNTESIS FINAL DEL CONCEPTO": {
    "PilotoDeCoherencia": "Al final del proceso de abstracción y generalización, llegamos al Concepto. El concepto es la verdad pura capturada por el entendimiento. Poseer el concepto de una cosa es tener el dominio sobre ella. El fin de la filosofía es que el hombre posea el concepto de sí mismo.",
    "CitaInelutable": "El concepto es la luz de la idea hecha carne en el entendimiento.",
    "EjemploPedagogico": "Es como tener la llave de una habitación: una vez que tienes la llave (el concepto), puedes entrar y salir cuando quieras. El concepto te hace libre y dueño de la realidad.",
    "ConexionDoctrinal": ["Concepto", "Dominio", "Entendimiento"],
    "NodosSimapticos": ["Luz del Concepto", "Llave de la Realidad", "Dominio del Ser"]
  },
  "18850: LA RELACIÓN DE LOS VERTEBRADOS": {
    "PilotoDeCoherencia": "Estudiamos la relación entre una rata y un pájaro como vertebrados. Comparten un eje de verticalidad, un plan óseo. Esto nos lleva a la conclusión de que la naturaleza ensaya formas de verticalidad hasta llegar al hombre, que es el vertebrado por excelencia donde el espíritu puede erguirse.",
    "CitaInelutable": "La verticalidad es la aspiración de la materia hacia la luz del espíritu.",
    "EjemploPedagogico": "La columna vertebral es como la antena que busca la señal del cielo. Desde el reptil que se arrastra hasta el hombre que mira las estrellas, la antena se ha ido levantando para captar mejor la vibración del Padre.",
    "ConexionDoctrinal": ["Verticalidad", "Evolución de las Formas", "Hombre"],
    "NodosSimapticos": ["Eje de Verticalidad", "Antena del Cielo", "Aspiración a la Luz"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Abstracción Racional": {
    "Definición": "El proceso intelectual de separar lo esencial y eterno de lo accidental y material para comprender la verdadera naturaleza de los seres y las leyes del universo.",
    "Contexto": "Capítulo VII de la Cuarta Parte de Filosofía Austera Racional.",
    "Conexiones": ["Generalización", "Esencia", "Espíritu"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Verticalidad": {
    "Definición": "El principio evolutivo que empuja a las formas materiales (vertebrados) a erguirse físicamente, simbolizando el ascenso del espíritu hacia la conciencia y la luz.",
    "Contexto": "Estudio de los vertebrados en Filosofía Austera Racional.",
    "Conexiones": ["Eje Cerebro-Espinal", "Evolución", "Hombre"],
    "Obras": ["Filosofía Austera Racional", "Conócete a ti mismo"]
  },
  "Concepto": {
    "Definición": "La síntesis mental de una verdad universal captada por el espíritu tras el proceso de percepción y abstracción. Poseer el concepto otorga dominio sobre la realidad.",
    "Conexiones": ["Entendimiento", "Luz", "Verdad"],
    "Obras": ["Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Filosofía Austera Racional (Batch 10) y 3 términos sinápticos.');
