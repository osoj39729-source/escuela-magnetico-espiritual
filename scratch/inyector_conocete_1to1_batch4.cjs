const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Conócete a ti mismo (Batch 4 - Creación y Quinta Esencia)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "3751: INELUDIBILIDAD DE LAS LEYES DIVINAS": {
    "PilotoDeCoherencia": "El espíritu no puede eludir las leyes divinas porque son su propia constitución. Huir de la ley es huir de uno mismo. Cada intento de transgresión se traduce en dolor, no como castigo, sino como el freno magnético que impide que el ser se destruya en el error. La ley es el carril; el espíritu es el tren.",
    "CitaInelutable": "No hay rincón del universo donde el espíritu pueda esconderse de la ley.",
    "EjemploPedagogico": "Es como intentar correr contra el viento: mientras más fuerte corres en la dirección equivocada, más te cansas y más resistencia sientes. Gira y corre con el viento de la ley, y volarás hacia la meta.",
    "ConexionDoctrinal": ["Ineludibilidad", "Freno Magnético", "Justicia"],
    "NodosSimapticos": ["Viento de la Ley", "Carril del Espíritu", "Freno del Error"]
  },
  "3872: EL RIGOR DE LA LEY ES AMOR": {
    "PilotoDeCoherencia": "El rigor de las leyes divinas es la mayor demostración de amor del Creador. Al no permitirnos el estancamiento, la ley nos obliga a subir. El dolor de hoy es la garantía de la sabiduría de mañana. Un padre que permite que su hijo se queme no lo ama; la ley nos aparta del fuego del error con mano firme.",
    "CitaInelutable": "En el rigor de la ley reside la ternura infinita del Padre.",
    "EjemploPedagogico": "Es como un cirujano que debe cortar para salvar la vida. El corte duele, pero es amor porque extirpa la muerte. La ley es el cirujano de tu evolución eterna.",
    "ConexionDoctrinal": ["Amor en el Rigor", "Extirpación del Error", "Padre Amoroso"],
    "NodosSimapticos": ["Cirujano de Evolución", "Corte que Sana", "Ternura del Límite"]
  },
  "3978: CREACIÓN Y ARMONÍA": {
    "PilotoDeCoherencia": "El único fin de las leyes divinas es la creación continua y la armonía del Todo. El universo no es un accidente, es una obra de arte en perpetua ejecución. Nada sobra, nada falta. Cada átomo y cada espíritu tienen su lugar exacto en el mosaico de la existencia.",
    "CitaInelutable": "La armonía es el lenguaje con que el universo canta la gloria del Creador.",
    "EjemploPedagogico": "Es como una inmensa maquinaria de relojería donde cada engranaje, por pequeño que sea, es necesario para que las agujas marquen la hora. Tú eres un engranaje vivo; tu armonía hace que el universo funcione.",
    "ConexionDoctrinal": ["Creación Continua", "Orden Universal", "Propósito"],
    "NodosSimapticos": ["Relojería Divina", "Mosaico de Existencia", "Lenguaje de Armonía"]
  },
  "4022: LA CREACIÓN DE LOS MUNDOS": {
    "PilotoDeCoherencia": "Los mundos no aparecen por azar, son fabricados por el Espíritu Universal como escuelas para sus hijos. Cada planeta es un aula diseñada con precisión matemática para el grado de progreso de los espíritus que lo habitarán. La creación es técnica, es ciencia y es amor.",
    "CitaInelutable": "El mundo es el aula; el espíritu es el alumno.",
    "EjemploPedagogico": "Es como un arquitecto que construye una escuela: pone pizarrones, bancos y laboratorios según lo que los niños deben aprender. Eloí construye mundos con todo lo necesario para que aprendas a ser un dios en potencia.",
    "ConexionDoctrinal": ["Escuelas Planetarias", "Arquitectura Universal", "Ciencia Creativa"],
    "NodosSimapticos": ["Aulas Planetarias", "Laboratorio del Padre", "Arquitecto de Mundos"]
  },
  "4080: LA FUNCIÓN DEL MUNDO: DE NEBULOSA A PLANETA": {
    "PilotoDeCoherencia": "El mundo comienza como una idea, luego una nebulosa y finalmente se solidifica mediante la ley de afinidad. Es un proceso de condensación de la energía etérea en materia. El mundo respira, late y evoluciona como un ser vivo, preparando el escenario para el teatro de la vida humana.",
    "CitaInelutable": "La materia es espíritu condensado en función de utilidad.",
    "EjemploPedagogico": "Es como el vapor de agua que se convierte en nube y luego en hielo. El vapor (espíritu) es el origen; el hielo (mundo) es la forma sólida que nos permite apoyarnos para caminar. El mundo es hielo divino para nuestros pies.",
    "ConexionDoctrinal": ["Condensación", "Nebulosa", "Evolución Material"],
    "NodosSimapticos": ["Hielo Divino", "Vapor de Espíritu", "Teatro de la Vida"]
  },
  "4146: EL PARTO DE LA TIERRA": {
    "PilotoDeCoherencia": "La Tierra tiene su momento de parto cuando las condiciones de temperatura y química son perfectas para la vida. No hubo un 'Adán' de barro mágico, sino una eclosión de gérmenes preparados por la ley de afinidad en los filtros de la naturaleza. La humanidad nace de las entrañas mismas del planeta.",
    "CitaInelutable": "La tierra es la madre que da a luz a la corona de la creación: el hombre.",
    "EjemploPedagogico": "Es como una fruta que madura: llega un momento en que la semilla está lista para brotar. La Tierra maduró y la semilla humana brotó de su piel, protegida por las leyes de la vida.",
    "ConexionDoctrinal": ["Antropogénesis Racional", "Parto Planetario", "Gérmenes de Vida"],
    "NodosSimapticos": ["Fruta de la Vida", "Madre Tierra", "Semilla Humana"]
  },
  "4500: LA QUINTA ESENCIA Y EL ÁRBOL DE LA QUINA": {
    "PilotoDeCoherencia": "Revelamos el misterio de la 'Quinta Esencia'. La naturaleza protegió los primeros gérmenes humanos en el árbol de la quina. Su amargura evitó que los animales devoraran el feto del hombre primigenio. Es la sabiduría del filtro natural que separa lo sutil de lo rústico para formar la máquina humana.",
    "CitaInelutable": "La quina guardó en su amargura la dulzura de la futura humanidad.",
    "EjemploPedagogico": "Es como una caja fuerte con una cerradura difícil: solo el dueño (la ley) puede abrirla. La amargura de la quina fue la cerradura que protegió el tesoro del hombre contra el hambre del instinto animal.",
    "ConexionDoctrinal": ["Quinta Esencia", "Protección Natural", "Filtro"],
    "NodosSimapticos": ["Cerradura Amarga", "Caja Fuerte de Vida", "Tesoro Humano"]
  },
  "4600: AFINIDAD DE ESENCIAS": {
    "PilotoDeCoherencia": "La afinidad es el imán inteligente que reúne las esencias necesarias para cada forma. En el gran cataclismo, las esencias de los seres que sucumbieron fueron recogidas por las raíces de las plantas para ser purificadas. Nada se pierde; todo se filtra y se eleva para una nueva y mejor manifestación.",
    "CitaInelutable": "La afinidad es el contable que no olvida ni un gramo de esencia.",
    "EjemploPedagogico": "Es como un reciclador experto: recoge los metales, los funde y hace una herramienta nueva y más brillante. La naturaleza recicla las esencias del pasado para fabricar el futuro de luz.",
    "ConexionDoctrinal": ["Afinidad", "Reciclaje de Esencias", "Justicia Natural"],
    "NodosSimapticos": ["Contable del Cosmos", "Reciclador de Almas", "Imán Inteligente"]
  },
  "5000: EL FILTRO DE LA NATURALEZA": {
    "PilotoDeCoherencia": "La naturaleza es un gran filtro que va depurando la materia hasta hacerla apta para el espíritu. Desde el mineral al hombre, la esencia sube peldaño a peldaño. Negar esta escala es negar la inteligencia del Creador. Somos el resultado de billones de años de filtración y perfeccionamiento.",
    "CitaInelutable": "El hombre es el destilado final del alambique de la naturaleza.",
    "EjemploPedagogico": "Es como destilar un perfume: necesitas toneladas de flores para sacar una gota de esencia pura. La naturaleza usó toneladas de materia y tiempo para sacar la esencia pura que es tu alma humana.",
    "ConexionDoctrinal": ["Evolución Ascendente", "Depuración", "Escala de la Vida"],
    "NodosSimapticos": ["Alambique Natural", "Perfume de Espíritu", "Destilado Humano"]
  },
  "5200: LA RESPONSABILIDAD DEL CONOCIMIENTO": {
    "PilotoDeCoherencia": "Conocer estas leyes te quita la excusa de la ignorancia. Ya no puedes decir 'no sabía'. El conocimiento es una carga de responsabilidad: ahora debes actuar según la ley que has comprendido. El juicio de tu propia conciencia será más severo cuanto más luz hayas recibido.",
    "CitaInelutable": "A más luz, mayor responsabilidad ante la ley.",
    "EjemploPedagogico": "Es como alguien que camina a oscuras y tropieza: no es su culpa. Pero si enciendes la luz y sigue tropezando con los mismos muebles, es por descuido o malicia. Hemos encendido la luz; no tropieces más.",
    "ConexionDoctrinal": ["Responsabilidad", "Juicio de Conciencia", "Luz de Verdad"],
    "NodosSimapticos": ["Muebles del Error", "Luz Encendida", "Carga de Sabiduría"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Creación": {
    "Definición": "Proceso científico y deliberado mediante el cual el Espíritu Universal organiza la materia y la energía para formar mundos y sistemas de vida.",
    "Contexto": "Capítulo IV de Conócete a ti mismo.",
    "Conexiones": ["Espíritu Universal", "Materia", "Armonía"],
    "Obras": ["Conócete a ti mismo", "Buscando a Dios"]
  },
  "Quinta Esencia": {
    "Definición": "Estado superior de refinamiento de la materia (alma humana) que permite la encarnación del espíritu racional, protegida históricamente en filtros naturales como el árbol de la quina.",
    "Contexto": "Origen del hombre en Conócete a ti mismo.",
    "Conexiones": ["Alambique Natural", "Alma", "Filtro"],
    "Obras": ["Conócete a ti mismo"]
  },
  "Afinidad": {
    "Definición": "Ley de atracción magnética inteligente que agrupa elementos, seres y espíritus según su grado de vibración y propósito común.",
    "Conexiones": ["Magnetismo", "Justicia", "Unión"],
    "Obras": ["Conócete a ti mismo", "Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Conócete a ti mismo (Batch 4 - Creación) y 3 términos sinápticos.');
