const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Conócete a ti mismo (Batch 6 - Etnia y Hilos Fluídicos)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "6013: EL CUERPO COMO RESUMEN DE ESENCIAS": {
    "PilotoDeCoherencia": "El cuerpo humano es el micro-universo. Contiene las esencias filtradas de los minerales, vegetales y animales que el espíritu ha dominado en sus eones de evolución. Nada en la naturaleza es ajeno al hombre; somos la síntesis perfecta de la materia animada por la chispa divina.",
    "CitaInelutable": "El hombre es el compendio de todas las fuerzas y esencias de la naturaleza.",
    "EjemploPedagogico": "Es como una biblioteca que contiene un resumen de todos los libros del mundo. El cuerpo es esa biblioteca; cada órgano es un capítulo que cuenta la historia de cómo el espíritu venció a la materia en un reino anterior.",
    "ConexionDoctrinal": ["Micro-universo", "Síntesis de Esencias", "Evolución"],
    "NodosSimapticos": ["Biblioteca de Materia", "Resumen de Mundos", "Capítulos Orgánicos"]
  },
  "6223: LA UNIDAD DE LOS CONTINENTES": {
    "PilotoDeCoherencia": "Los continentes son solo partes de un mismo cuerpo planetario. La división geográfica no debe ser división humana. El espíritu encarna en diferentes tierras para aprender de todos los climas y costumbres. La Tierra es una sola casa con muchas habitaciones.",
    "CitaInelutable": "La Tierra es una y sus hijos son hermanos por encima de los océanos.",
    "EjemploPedagogico": "Es como un jardín con diferentes secciones: una tiene rosas, otra tiene pinos. Sigue siendo el mismo jardín y el mismo jardinero lo cuida. No permitas que la distancia cree muros en tu corazón.",
    "ConexionDoctrinal": ["Unidad Planetaria", "Geografía Espiritual", "Fraternidad"],
    "NodosSimapticos": ["Jardín del Mundo", "Casa de Muchas Habitaciones", "Muros del Corazón"]
  },
  "6386: EL SER ÉTNICO Y EL CLIMA": {
    "PilotoDeCoherencia": "Aclaramos que la etnia es un accidente del clima. El sol, el aire y la tierra moldean el color de la piel y la forma del cuerpo, pero no tocan la luz del espíritu. El ser étnico es la adaptación de la máquina a su entorno. Juzgar al hombre por su etnia es juzgar al conductor por el color de su coche.",
    "CitaInelutable": "El ser étnico lo da el clima; la sabiduría la da el espíritu.",
    "EjemploPedagogico": "Es como usar ropa de lana en el polo y seda en el trópico. La ropa cambia, pero tú eres el mismo. Las razas son la 'ropa' que el espíritu usa para estar cómodo en el clima donde le toca trabajar.",
    "ConexionDoctrinal": ["Ser Étnico", "Influencia del Clima", "Igualdad Espiritual"],
    "NodosSimapticos": ["Ropa del Clima", "Conductor y Coche", "Adaptación de la Máquina"]
  },
  "6463: EL CRUZAMIENTO COMO LEY DE PROGRESO": {
    "PilotoDeCoherencia": "El cruzamiento de razas es la ley que funde a la humanidad en una sola familia. La mezcla de sangres y esencias étnicas fortalece el cuerpo y amplía el horizonte del alma. La pureza de raza es una mentira del orgullo que solo lleva a la degeneración. El futuro es el hombre universal.",
    "CitaInelutable": "En el crisol del cruzamiento se forja la raza única: la humanidad.",
    "EjemploPedagogico": "Es como mezclar colores en una paleta: de la unión del rojo y el azul sale el violeta, un color nuevo y hermoso. El aislamiento solo produce colores pálidos y tristes. Mézclate con tus hermanos.",
    "ConexionDoctrinal": ["Cruzamiento", "Hombre Universal", "Fusión"],
    "NodosSimapticos": ["Paleta de Colores", "Crisol de Sangre", "Orgullo de Pureza"]
  },
  "6785: LOS ESPÍRITUS NATURALES Y LA CONSTRUCCIÓN": {
    "PilotoDeCoherencia": "Revelamos la existencia de los 'espíritus naturales' (elementales) que actúan como obreros en la construcción de los cuerpos. Bajo la dirección del espíritu encarnante y la ley de afinidad, estas inteligencias menores organizan las moléculas. No son seres mitológicos, son fuerzas de la naturaleza en grado de aprendizaje.",
    "CitaInelutable": "Los espíritus naturales son los albañiles de la forma material.",
    "EjemploPedagogico": "Es como un arquitecto (espíritu) que contrata albañiles (espíritus naturales) para levantar una pared. Los albañiles ponen los ladrillos, pero el arquitecto da el plano. Respeta a los obreros de la naturaleza.",
    "ConexionDoctrinal": ["Espíritus Naturales", "Construcción Orgánica", "Albañiles de la Forma"],
    "NodosSimapticos": ["Obreros del Plano", "Albañiles Cósmicos", "Fuerzas Inteligentes"]
  },
  "6911: EL CUERPO: COMPENDIO DEL SER": {
    "PilotoDeCoherencia": "El cuerpo humano es el resumen de la materia en su máximo grado de perfección. Cada molécula es un testigo de la historia universal. Comprender el cuerpo es comprender las leyes de la física y la química puestas al servicio de la inteligencia. El cuerpo es el templo donde se oficia la vida racional.",
    "CitaInelutable": "El cuerpo es el resumen de todo lo que existe en la materia.",
    "EjemploPedagogico": "Es como una enciclopedia: contiene información de todos los temas. Si sabes leer tu cuerpo, sabrás cómo funcionan las estrellas y los átomos. Eres un libro abierto por el Creador.",
    "ConexionDoctrinal": ["Compendio Orgánico", "Templo de Vida", "Perfección Material"],
    "NodosSimapticos": ["Enciclopedia Viva", "Libro de la Carne", "Testigo Molecular"]
  },
  "7100: EL ALMA: LA ENVOLTURA SENSIBLE": {
    "PilotoDeCoherencia": "El alma es el fluido que une al espíritu con el cuerpo. Es sensible, siente dolor y placer, pero no tiene luz propia ni responsabilidad. Es el depósito de las impresiones mundanas. El alma debe ser dominada por el espíritu para que sus instintos no nublen la razón.",
    "CitaInelutable": "El alma es el puente de fluidos entre la luz del espíritu y el barro del cuerpo.",
    "EjemploPedagogico": "Es como el agua en una esponja: el agua (alma) llena los huecos de la esponja (cuerpo). Si el agua está sucia, la esponja olerá mal. El espíritu debe ser el filtro que mantenga el agua limpia.",
    "ConexionDoctrinal": ["Alma", "Sensibilidad", "Puente Fluídico"],
    "NodosSimapticos": ["Agua en la Esponja", "Envoltura de Fluido", "Impresiones del Mundo"]
  },
  "7354: EL ESPÍRITU: LA CÚPULA UNIVERSAL": {
    "PilotoDeCoherencia": "Llegamos a la cúpula del edificio: el Espíritu. Es el centro de mando, el legislador y el juez. Solo el espíritu es eterno y posee la verdad. Por encima de él solo está Eloí. Conocerse a sí mismo es reconocer este trono real que cada hombre lleva dentro.",
    "CitaInelutable": "El espíritu es la soberanía del ser ante el infinito.",
    "EjemploPedagogico": "Es como el capitán de un barco que está en el puente de mando viendo el horizonte. El barco (cuerpo) y la tripulación (alma) deben obedecer sus órdenes para no encallar. Sé un capitán valiente y sabio.",
    "ConexionDoctrinal": ["Espíritu", "Soberanía", "Cúpula"],
    "NodosSimapticos": ["Capitán del Puente", "Trono del Ser", "Edificio Universal"]
  },
  "7466: EL HOMBRE SÓLO ES HOMBRE POR EL ESPÍRITU": {
    "PilotoDeCoherencia": "Sin espíritu, el hombre no es más que un animal superior, un 'dúo' sin dirección. La condición de 'Hombre' es un título que se gana cuando el espíritu asume su responsabilidad y trinidad. La sociedad actual está llena de 'cuerpos con alma' que aún no han despertado a su humanidad real.",
    "CitaInelutable": "La razón es la partida de nacimiento del verdadero hombre.",
    "EjemploPedagogico": "Es como una lámpara que tiene aceite y mecha, pero no tiene fuego. Es solo un objeto. Cuando se enciende la llama (el espíritu despierto), entonces es luz. ¡Enciende tu lámpara!",
    "ConexionDoctrinal": ["Humanidad Real", "Razón", "Despertar"],
    "NodosSimapticos": ["Llama de Humanidad", "Partida de Nacimiento", "Título de Hombre"]
  },
  "7513: LOS HILOS FLUÍDICOS DE COMUNICACIÓN": {
    "PilotoDeCoherencia": "El espíritu acciona la máquina humana a través de hilos fluídicos. Cada molécula del cuerpo tiene un hilo conectado a la conciencia del espíritu. La comunicación es instantánea y vibratoria. Esta red magnética es lo que permite al espíritu sentir y actuar en el mundo físico sin ser materia.",
    "CitaInelutable": "La voluntad del espíritu viaja por hilos de luz hacia cada rincón del cuerpo.",
    "EjemploPedagogico": "Es como un titiritero que mueve las cuerdas de una marioneta. Las cuerdas son invisibles desde lejos, pero sin ellas la marioneta no se mueve. Tu voluntad es el titiritero; los hilos fluídicos son tus cuerdas de luz.",
    "ConexionDoctrinal": ["Hilos Fluídicos", "Comunicación Vibratoria", "Mecánica del Espíritu"],
    "NodosSimapticos": ["Cuerdas de Luz", "Titiritero del Ser", "Red Magnética"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Hilos Fluídicos": {
    "Definición": "Conductos vibratorios de naturaleza magnética que conectan la voluntad del espíritu con cada molécula del cuerpo, permitiendo la acción y la sensación.",
    "Contexto": "Mecánica del espíritu en Conócete a ti mismo.",
    "Conexiones": ["Magnetismo", "Voluntad", "Conciencia"],
    "Obras": ["Conócete a ti mismo"]
  },
  "Espíritus Naturales": {
    "Definición": "Inteligencias menores que rigen las fuerzas elementales de la materia y actúan como auxiliares en la formación y mantenimiento de los cuerpos biológicos.",
    "Contexto": "Construcción orgánica en Conócete a ti mismo.",
    "Conexiones": ["Elementales", "Naturaleza", "Afinidad"],
    "Obras": ["Conócete a ti mismo", "Ley de las Mediumnidades"]
  },
  "Ser Étnico": {
    "Definición": "Conjunto de características físicas y temperamentales derivadas de la influencia del clima y el medio ambiente sobre el cuerpo humano, sin afectar la esencia del espíritu.",
    "Conexiones": ["Clima", "Raza", "Materia"],
    "Obras": ["Conócete a ti mismo", "Los Extremos se Tocan"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Conócete a ti mismo (Batch 6 - Etnia y Hilos) y 3 términos sinápticos.');
