const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 14)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "17505: EL CREADOR NO PERDONA": {
    "PilotoDeCoherencia": "El perdón es una invención de las religiones para mantener el control. El Creador no perdona porque no se ofende. Eloí es la Ley. Si violas la ley, sufres la consecuencia; si la cumples, recibes el progreso. Es un proceso automático de justicia, no un capricho divino de perdones o castigos.",
    "CitaInelutable": "El Creador no puede perdonar ni dar de gracias más que la vida universal.",
    "EjemploPedagogico": "Si pones la mano en el fuego, te quemas. El fuego no te perdona ni te castiga; simplemente es el fuego cumpliendo su ley. El espíritu que obra mal se quema en su propio error; el que obra bien se ilumina en su propio acierto.",
    "ConexionDoctrinal": ["Justicia Automática", "Consecuencia", "Anti-Perdón"],
    "NodosSimapticos": ["No Perdón", "Consecuencia Natural", "Justicia sin Ofensa"]
  },
  "17785: LO QUE UNA VEZ ES, YA NO PUEDE DEJAR DE SER": {
    "PilotoDeCoherencia": "Axioma fundamental de la eternidad. Cada acto, pensamiento y palabra queda grabado en el archivo del espíritu y del universo. No se borra; se transforma. Esta es la garantía de nuestra identidad eterna y de la responsabilidad absoluta de nuestros actos.",
    "CitaInelutable": "Lo que una vez es, ya no puede dejar de ser y lo es eternamente.",
    "EjemploPedagogico": "Es como una piedra lanzada al estanque: las ondas se expanden y llegan a todas las orillas. Aunque el estanque vuelva a quedar en calma, el movimiento existió y cambió el equilibrio del agua para siempre.",
    "ConexionDoctrinal": ["Eternidad", "Identidad", "Responsabilidad"],
    "NodosSimapticos": ["Lo que es, es", "Archivo Eterno", "Ondas del Acto"]
  },
  "18060: IMPROVISACIONES E INSPIRACIONES": {
    "PilotoDeCoherencia": "Lo que llamamos 'improvisación' es en realidad el afloramiento de conocimientos que el espíritu ya poseía de vidas anteriores. La 'inspiración' es el contacto con otros espíritus en solidaridad universal. Nada es nuevo en el espíritu, todo es un eterno recordar o compartir.",
    "CitaInelutable": "La improvisación es el recuerdo de lo que el espíritu ya hizo; la inspiración es la voz del hermano solidario.",
    "EjemploPedagogico": "Es como un músico que de pronto toca una melodía perfecta sin partitura. El ignorante dice 'improvisó'; el sabio sabe que ese músico ya compuso esa melodía en otro siglo y hoy su espíritu la recuerda.",
    "ConexionDoctrinal": ["Preexistencia", "Solidaridad Espiritual", "Intuición"],
    "NodosSimapticos": ["Improvisación", "Inspiración", "Eterno Recordar"]
  },
  "18330: PRUEBAS FÍSICAS DE LA CORRIENTE ESPIRITUAL": {
    "PilotoDeCoherencia": "La recepción de ideas y fuerzas espirituales produce irritaciones y contracciones reales en el organismo. El cerebro y los nervios reaccionan físicamente a la potencia del espíritu. Esto demuestra que el espíritu es una fuerza real, magnética, que domina la materia.",
    "CitaInelutable": "De las corrientes recibidas sobre el cerebro se origina la reacción de los sistemas orgánicos.",
    "EjemploPedagogico": "Es como una descarga eléctrica: no ves la electricidad, pero ves cómo el motor se mueve o la lámpara brilla. El cuerpo es el motor que vibra cuando el espíritu le inyecta su energía de sabiduría.",
    "ConexionDoctrinal": ["Fenómenos Fisiopsicológicos", "Corriente Magnética", "Reacción Orgánica"],
    "NodosSimapticos": ["Pruebas Físicas", "Vibración del Motor", "Potencia del Espíritu"]
  },
  "18600: EL ARCHIVO EN LOS CENTROS NERVIOSOS": {
    "PilotoDeCoherencia": "Las experiencias se archivan en los centros nerviosos mediante un proceso orgánico inducido por el espíritu. El cerebro es la biblioteca temporal para la vida presente. Al desencarnar, el espíritu se lleva la esencia de ese archivo a su memoria eterna.",
    "CitaInelutable": "Los fenómenos se archivan en sus correspondientes centros mediante un proceso orgánico.",
    "EjemploPedagogico": "El sistema nervioso es el taquígrafo que anota cada palabra de la vida. Al final del día (de la encarnación), el espíritu recoge todas las notas y las guarda en su libro de memorias infinito.",
    "ConexionDoctrinal": ["Archivo Orgánico", "Memoria", "Encarnación"],
    "NodosSimapticos": ["Taquígrafo Nervioso", "Archivo Temporal", "Libro de Memorias"]
  },
  "18870: EL LAUREL DE LA VICTORIA": {
    "PilotoDeCoherencia": "Cada dificultad vencida y cada verdad comprendida es un laurel que el espíritu se ciñe. Nadie te lo da; tú lo ganas. El progreso es el único honor real en el universo. Es la prueba de que el espíritu ha cumplido su deber y ha dominado la materia.",
    "CitaInelutable": "Lo que el espíritu hizo lo lleva como prueba y como laurel de su victoria.",
    "EjemploPedagogico": "Es como el atleta que llega a la meta: el trofeo es valioso, pero lo más valioso es la fuerza y la habilidad que el atleta ha desarrollado en sus músculos para llegar allí. Tu sabiduría es tu músculo espiritual.",
    "ConexionDoctrinal": ["Progreso", "Mérito", "Victoria Espiritual"],
    "NodosSimapticos": ["Laurel del Espíritu", "Honor del Progreso", "Músculo de Sabiduría"]
  },
  "19140: LA LEY SOLIDARIA UNIVERSAL": {
    "PilotoDeCoherencia": "Ningún espíritu progresa solo. Estamos unidos por una ley de solidaridad que nos obliga a ayudarnos. Los espíritus más avanzados inspiran a los menos progresados. Esta es la base de la verdadera fraternidad: compartir la luz para que nadie se quede en la sombra.",
    "CitaInelutable": "La solidaridad universal es el cordón que une a todos los hijos del Padre.",
    "EjemploPedagogico": "Es como una cordada de montañeros en el Himalaya: el que va arriba tira de la cuerda para ayudar al que viene abajo. Nadie llega a la cima si corta la cuerda del hermano.",
    "ConexionDoctrinal": ["Solidaridad", "Fraternidad", "Comuna"],
    "NodosSimapticos": ["Cordada Universal", "Ayuda del Hermano", "Suma de Luces"]
  },
  "19410: EL ERROR DE LA GRACIA DIVINA": {
    "PilotoDeCoherencia": "Niego la 'gracia' como privilegio otorgado por Dios. Eso haría de Eloí un tirano injusto. La única gracia es la existencia misma y la oportunidad de progresar por el esfuerzo propio. Quien espera favores del cielo sin trabajar su espíritu, morirá en la ignorancia.",
    "CitaInelutable": "El Creador no distingue a uno solo de sus hijos sobre los demás.",
    "EjemploPedagogico": "La lluvia cae para todos los campos por igual. El campo que da fruto es el que el agricultor ha trabajado. El que espera que la lluvia le cultive el campo sin sudar, solo tendrá maleza. La gracia es la lluvia; el progreso es el fruto.",
    "ConexionDoctrinal": ["Justicia", "Esfuerzo Propio", "Crítica a la Gracia"],
    "NodosSimapticos": ["Gracia Universal", "Lluvia de Eloí", "Agricultor del Ser"]
  },
  "19680: LA CIENCIA DEL ESPÍRITU EN LA ACCIÓN": {
    "PilotoDeCoherencia": "La filosofía austera no es contemplativa, es activa. Estudiamos las leyes del espíritu para aplicarlas a la transformación de la sociedad. Si tu conocimiento no te lleva a ser un mejor hermano y un trabajador por la Comuna, no es conocimiento, es vanidad intelectual.",
    "CitaInelutable": "La ciencia del espíritu debe demostrarse en progresos y sabiduría práctica.",
    "EjemploPedagogico": "Es como saber la teoría de la medicina pero no curar a nadie. El verdadero médico es el que aplica lo que sabe para quitar el dolor. El verdadero filósofo es el que quita la injusticia del mundo.",
    "ConexionDoctrinal": ["Práctica", "Misión", "Transformación Social"],
    "NodosSimapticos": ["Ciencia en Acción", "Cura de Injusticia", "Obras del Saber"]
  },
  "19950: EL RETO A LAS RELIGIONES": {
    "PilotoDeCoherencia": "Lanzamos un reto final a todo dogma: demuestren racionalmente la superioridad de sus ídolos. No podrán. La razón libre es el final de la tiranía religiosa. El tiempo de la fe ciega ha pasado; hoy es el tiempo de la Luz y la Verdad demostrada.",
    "CitaInelutable": "Retamos a las teologías a que prueben la injusticia del Creador: es tiempo perdido.",
    "EjemploPedagogico": "Es como un abogado que presenta pruebas falsas en un juicio serio. Cuando aparece el video de la verdad (la razón), el abogado debe callar. La historia es el juicio; la razón es el video.",
    "ConexionDoctrinal": ["Desafío Racional", "Fin de Dogmas", "Luz y Verdad"],
    "NodosSimapticos": ["Reto Final", "Pruebas Falsas", "Video de la Razón"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Lo que una vez es, es": {
    "Definición": "Axioma ontológico que establece la inmutabilidad de la historia del espíritu y la persistencia eterna de cada acto realizado, constituyendo el archivo inborrable de la conciencia.",
    "Contexto": "Ontología en Filosofía Austera Racional.",
    "Conexiones": ["Eternidad", "Archivo Eterno", "Responsabilidad"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Improvisación": {
    "Definición": "El afloramiento espontáneo de conocimientos, habilidades o verdades que el espíritu ya ha adquirido en existencias pasadas y que se manifiestan en el presente por necesidad del progreso.",
    "Contexto": "Estudio de las facultades del espíritu en Filosofía Austera Racional.",
    "Conexiones": ["Preexistencia", "Memoria", "Sabiduría"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Laurel de Victoria": {
    "Definición": "Metáfora del honor y el progreso que el espíritu conquista por su propio esfuerzo al dominar la materia y cumplir con la Ley, siendo la única verdadera gloria en el universo.",
    "Conexiones": ["Progreso", "Mérito", "Soberanía"],
    "Obras": ["Filosofía Austera Racional", "Los Cinco Amores"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Filosofía Austera Racional (Batch 14) y 3 términos sinápticos.');
