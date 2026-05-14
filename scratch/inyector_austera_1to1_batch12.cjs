const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 12)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "12980: PÁRRAFO 3º — LA RAZÓN ES EL ÚNICO JUEZ": {
    "PilotoDeCoherencia": "La razón es el único tribunal competente para juzgar los hechos de la vida. Denunciamos los 'milagros' religiosos como falsedades o hechos naturales ignorados. Nada sucede fuera de la Ley. Si la razón no lo comprende hoy, lo comprenderá mañana por el estudio, pero nunca debe aceptar lo absurdo por fe.",
    "CitaInelutable": "La razón no acepta milagros porque la Ley de Eloí no tiene excepciones.",
    "EjemploPedagogico": "Es como un juez que recibe una prueba imposible. El juez no dice 'es un milagro'; dice 'hay algo que no sabemos o alguien está mintiendo'. El filósofo busca la causa natural y espiritual de todo fenómeno.",
    "ConexionDoctrinal": ["Anti-Dogma", "Leyes Naturales", "Juez de la Vida"],
    "NodosSimapticos": ["Razón Único Juez", "Fin de Milagros", "Tribunal del Espíritu"]
  },
  "13150: PÁRRAFO 4º — LA RAZÓN Y EL INFINITO": {
    "PilotoDeCoherencia": "La razón comprende que el infinito existe porque la vida no tiene fin. No podemos contar el infinito, pero podemos vivir en él. La infinitud del universo es la demostración de la grandeza del Creador y de la eternidad del espíritu.",
    "CitaInelutable": "El infinito es la casa del espíritu y la razón es su brújula.",
    "EjemploPedagogico": "Es como mirar el mar desde la orilla: no ves el fin, pero sabes que el agua sigue más allá de tu vista. La razón es la que te dice que el mar no se acaba donde tu ojo deja de ver.",
    "ConexionDoctrinal": ["Infinito", "Eternidad", "Cosmología"],
    "NodosSimapticos": ["Razón e Infinito", "Casa del Espíritu", "Más allá de la Vista"]
  },
  "13420: CAPÍTULO VII — LA ATENCIÓN Y SUS GRADOS": {
    "PilotoDeCoherencia": "La atención es la voluntad concentrada. Estudiamos la atención involuntaria (instintiva) y la voluntaria (racional). El progreso del espíritu se mide por su capacidad de dirigir su atención hacia donde la sabiduría lo requiere, venciendo las distracciones de la materia.",
    "CitaInelutable": "La atención es el rayo de luz que el espíritu dirige hacia el objeto del saber.",
    "EjemploPedagogico": "La atención es como el haz de luz de un faro. Si el faro gira sin control, no ilumina nada. Si el faro se detiene y apunta al barco, salva vidas. Sé el dueño de tu faro.",
    "ConexionDoctrinal": ["Voluntad", "Atención", "Concentración"],
    "NodosSimapticos": ["Faro de la Atención", "Grados de Voluntad", "Rayo del Saber"]
  },
  "13680: CAPÍTULO VIII — LA MEMORIA ETERNA": {
    "PilotoDeCoherencia": "La memoria no está en las neuronas, está en el espíritu. El cerebro es solo el terminal de consulta. Estudiamos la memoria conservadora (el archivo) y la reproductiva (el recuerdo). El espíritu recuerda sus vidas pasadas cuando la necesidad del progreso lo exige.",
    "CitaInelutable": "La memoria es el archivo eterno donde el espíritu guarda sus conquistas y sus deudas.",
    "EjemploPedagogico": "El cerebro es el libro abierto en la página de hoy; el espíritu es la biblioteca entera con todos los libros de tus vidas anteriores. A veces, un aroma o un sonido te hace abrir un libro viejo y recuerdas.",
    "ConexionDoctrinal": ["Memoria Espiritual", "Encarnaciones", "Archivo"],
    "NodosSimapticos": ["Memoria Eterna", "Biblioteca del Ser", "Recuerdo de Vidas"]
  },
  "13950: EL ESPÍRITU UNIVERSAL Y EL INSTINTO ANIMAL": {
    "PilotoDeCoherencia": "Los animales sienten por el Espíritu Universal que actúa como una 'presión vital'. No tienen espíritu individualizado como el hombre, pero están auto-magnetizados por la vida misma. Todo ser depende de los demás en una cadena infinita de influencias y sustento.",
    "CitaInelutable": "La presión vital del espíritu universal mueve y sostiene toda la creación animal.",
    "EjemploPedagogico": "Es como el aire que todos respiramos: no es 'tu' aire ni 'mi' aire, es el aire que nos mantiene vivos a todos. El instinto animal es la respiración del espíritu universal en las formas inferiores.",
    "ConexionDoctrinal": ["Espíritu Universal", "Instinto", "Presión Vital"],
    "NodosSimapticos": ["Presión Vital", "Cadena de Vida", "Auto-Magnetismo"]
  },
  "14220: MÁQUINAS DE DIFERENTE POTENCIAL": {
    "PilotoDeCoherencia": "Cada ser humano es una máquina biológica con un potencial diferente según su grado de progreso. Todos recibimos la misma energía de la Generatriz (Eloí), pero cada uno manifiesta una luz distinta según la calidad de su instrumento. El ingeniero es el espíritu.",
    "CitaInelutable": "Todos reciben de la misma generatriz, pero cada máquina hace el oficio encomendado.",
    "EjemploPedagogico": "Imagina una ciudad con miles de bombillas: unas son de 10 vatios y otras de 1000. La electricidad es la misma, pero la luz que dan es diferente. El espíritu es el que decide si quiere ser una bombilla potente por el estudio y el amor.",
    "ConexionDoctrinal": ["Potencial Espiritual", "Generatriz Universal", "Igualdad y Diferencia"],
    "NodosSimapticos": ["Máquinas de Luz", "Generatriz de Eloí", "Potencial del Ser"]
  },
  "14500: EL AUTO-MAGNETISMO DE LOS SERES": {
    "PilotoDeCoherencia": "El magnetismo es la sangre del universo. Cada ser se auto-magnetiza al vivir y actuar. Esta fuerza es la que mantiene la cohesión de la materia y la comunicación entre los espíritus. El magnetismo es la demostración física de la Ley de Amor.",
    "CitaInelutable": "El auto-magnetismo es la fuerza que cohesiona la vida en cada átomo.",
    "EjemploPedagogico": "Es como el calor que desprende un cuerpo vivo: es su propia energía manifestándose. El magnetismo es ese calor espiritual que nos permite sentirnos unos a otros y sentir la vida.",
    "ConexionDoctrinal": ["Magnetismo", "Cohesión", "Ley de Amor"],
    "NodosSimapticos": ["Auto-Magnetismo", "Sangre del Universo", "Fuerza de Cohesión"]
  },
  "14780: LA CADENA SIN FIN DE LA VIDA": {
    "PilotoDeCoherencia": "Nada en el universo vive para sí mismo. Todos dependemos de todos. El mineral sirve al vegetal, este al animal y todos al hombre para su progreso. Esta cadena de sacrificios y servicios es la base de la solidaridad universal que Mi Escuela proclama.",
    "CitaInelutable": "La vida es una cadena perpetua donde cada eslabón sostiene al otro.",
    "EjemploPedagogico": "Es como una cadena de oro: si un eslabón se rompe, la joya cae. Cada ser, por pequeño que sea, es un eslabón necesario en la joya de la creación de Eloí.",
    "ConexionDoctrinal": ["Solidaridad Universal", "Servicio", "Unidad"],
    "NodosSimapticos": ["Cadena Perpetua", "Eslabón Necesario", "Solidaridad de Vida"]
  },
  "15050: EL CEREBRO COMO REFLECTOR DE LA GENERATRIZ": {
    "PilotoDeCoherencia": "El cerebro no crea la fuerza, la refleja. La fuerza viene del Espíritu, y el Espíritu la toma de la Generatriz Universal. El cerebro es la antena que sintoniza la voluntad con la acción. Denunciamos a quienes confunden la antena con el mensaje.",
    "CitaInelutable": "El cerebro es el reflector que transforma la potencia en pensamiento.",
    "EjemploPedagogico": "Es como un espejo que refleja el sol. El espejo no es el sol, pero te permite ver su luz y usarla. Mantén tu espejo limpio para que el sol del espíritu brille sin sombras.",
    "ConexionDoctrinal": ["Generatriz", "Antena Cerebral", "Reflexión"],
    "NodosSimapticos": ["Reflector de Fuerza", "Antena del Ser", "Espejo del Espíritu"]
  },
  "15320: LA LEY DE ASOCIACIÓN Y AFINIDAD": {
    "PilotoDeCoherencia": "Las ideas y los seres se asocian por la ley de afinidad. Lo semejante atrae a lo semejante. En la Comuna, esta ley unirá a los hombres por el amor y la sabiduría. Denunciamos las uniones forzadas por el interés o el dogma, que violan esta ley natural.",
    "CitaInelutable": "La afinidad es la ley que pondrá fin a la división humana.",
    "EjemploPedagogico": "Es como el imán y el hierro. La afinidad es ese tirón invisible que hace que dos almas se reconozcan y dos ideas se junten para formar una verdad mayor.",
    "ConexionDoctrinal": ["Afinidad", "Unión", "Comuna"],
    "NodosSimapticos": ["Ley de Afinidad", "Imán de Almas", "Unión Natural"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Presión Vital": {
    "Definición": "La fuerza del Espíritu Universal que impulsa y sostiene la vida en los reinos inferiores (mineral, vegetal, animal) antes de la individualización del espíritu en el hombre.",
    "Contexto": "Estudio del instinto en Filosofía Austera Racional.",
    "Conexiones": ["Espíritu Universal", "Instinto", "Magnetismo"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Generatriz Universal": {
    "Definición": "La fuente suprema de energía y vida (Eloí) de la cual todos los espíritus y seres toman la fuerza necesaria para su existencia y manifestación.",
    "Contexto": "Ontología y Fisiología en Filosofía Austera Racional.",
    "Conexiones": ["Eloí", "Energía", "Espíritu"],
    "Obras": ["Filosofía Austera Racional", "Código de Amor Universal"]
  },
  "Auto-Magnetismo": {
    "Definición": "La capacidad intrínseca de todo ser vivo de generar y mantener su propio campo magnético de cohesión y relación con el entorno universal.",
    "Conexiones": ["Magnetismo", "Vida", "Cohesión"],
    "Obras": ["Filosofía Austera Racional", "El Magnetismo en su Origen"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Filosofía Austera Racional (Batch 12) y 3 términos sinápticos.');
