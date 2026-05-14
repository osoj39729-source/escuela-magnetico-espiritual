const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Buscando a Dios (Batch 10 - Mi Confesión, Espiritismo y Universo)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "8334: MI CONFESIÓN": {
    "PilotoDeCoherencia": "El Maestro abre su corazón con una confesión sin precedentes: no busca la fe de sus hermanos, sino su convencimiento. El espíritu que ha sufrido y buscado durante años tiene el deber de compartir su luz con todos. La confesión es el acto más valiente del ser racional: mostrar el alma sin hipocresía.",
    "CitaInelutable": "Oíd hombres todos de la tierra mi confesión, hija de mis convencimientos.",
    "EjemploPedagogico": "Es como un médico que, tras curar a miles de pacientes, describe su propio diagnóstico con la misma honestidad. El Maestro es ese médico: primero se examina a sí mismo antes de prescribir a los demás.",
    "ConexionDoctrinal": ["Confesión", "Convencimiento", "Honestidad"],
    "NodosSimapticos": ["Médico de Almas", "Corazón Abierto", "Deber de la Luz"]
  },
  "8442: ¿QUÉ ES EL ESPIRITISMO?": {
    "PilotoDeCoherencia": "El Espiritismo es la ciencia que estudia al espíritu y sus leyes de relación con la materia y con el universo. No es una religión, no tiene dogmas, no pide fe ciega. Su único pedido es: estudia, razona y comprueba. El Espiritismo Racional es la nueva tierra que el pensamiento humano ha descubierto después de siglos de navegación en el mar del dogma.",
    "CitaInelutable": "El Espiritismo es la ciencia del espíritu al servicio de la humanidad.",
    "EjemploPedagogico": "Es como la astronomía antes de Galileo: nadie sabía lo que había más allá de los planetas visibles. El espiritismo abre el telescopio de la razón hacia el mundo invisible del espíritu.",
    "ConexionDoctrinal": ["Definición de Espiritismo", "Ciencia", "Razón"],
    "NodosSimapticos": ["Telescopio del Espíritu", "Nueva Tierra", "Mar del Dogma"]
  },
  "8520: EL HOMBRE: ESENCIA VIVA DE LAS COSAS VIVAS": {
    "PilotoDeCoherencia": "El hombre no es solo carne y hueso: es la síntesis viva de todo el universo. En él conviven la piedra, la planta, el animal y el espíritu. Es el punto donde la materia se toca con la eternidad. Conocer al hombre es conocer la creación entera, porque el hombre es el resumen del plan de Eloí.",
    "CitaInelutable": "El hombre es la esencia viva de las cosas vivas del universo.",
    "EjemploPedagogico": "Es como una biblioteca donde todos los libros del saber están reunidos en un solo volumen. Ese volumen eres tú. Quien te estudia con amor, estudia el universo entero.",
    "ConexionDoctrinal": ["Síntesis Universal", "Micro-universo", "Resumen del Plan"],
    "NodosSimapticos": ["Volumen del Saber", "Biblioteca Viva", "Punto de Eternidad"]
  },
  "8648: ¿DE DÓNDE VIENE EL ESPÍRITU?": {
    "PilotoDeCoherencia": "El espíritu viene de la fuente de toda inteligencia: el Creador. No viene del barro ni del azar evolutivo. Es una emanación directa y consciente del centro de amor del universo. Preguntar de dónde venimos es comenzar el camino del autoconocimiento.",
    "CitaInelutable": "Venimos del amor y al amor retornamos.",
    "EjemploPedagogico": "Es como una llama encendida de otra llama: el fuego es el mismo, pero la llama es independiente. Tu espíritu es una llama encendida del fuego del Creador. Nunca se apaga.",
    "ConexionDoctrinal": ["Origen del Espíritu", "Emanación", "Autoconocimiento"],
    "NodosSimapticos": ["Llama de Llama", "Fuego del Creador", "Pregunta Primera"]
  },
  "8753: ¿POR QUÉ ESTAMOS AQUÍ?": {
    "PilotoDeCoherencia": "Estamos en este mundo para cumplir una misión de aprendizaje y servicio. No somos turistas del universo, somos trabajadores asignados a una obra específica. El sufrimiento de la vida material es la resistencia del entrenamiento. Sin misión, la vida no tiene sentido; con misión, hasta el dolor se convierte en maestro.",
    "CitaInelutable": "Estamos aquí para aprender a amar y para hacer amar a otros.",
    "EjemploPedagogico": "Es como un estudiante de medicina en sus prácticas hospitalarias: el hospital (el mundo) es duro y cansado, pero es el único lugar donde aprende a curar. La misión justifica el esfuerzo.",
    "ConexionDoctrinal": ["Misión", "Aprendizaje", "Servicio"],
    "NodosSimapticos": ["Hospital del Mundo", "Resistencia del Entrenamiento", "Practicante del Amor"]
  },
  "8826: ¿A DÓNDE VA EL ESPÍRITU?": {
    "PilotoDeCoherencia": "El espíritu va hacia el progreso sin fin. Cada mundo, cada encarnación, cada grado de aprendizaje es un paso hacia la cumbre de la sabiduría y el amor. No hay infierno eterno ni paraíso estático. Hay movimiento, hay ascenso, hay la alegría de saberse siempre en camino.",
    "CitaInelutable": "El espíritu va hacia la luz; su camino es eterno y su llegada es siempre un nuevo comienzo.",
    "EjemploPedagogico": "Es como un escalador que llega a la cima de una montaña y descubre que hay otra montaña más alta y más bella. La conquista de la cima no es el fin, es el inicio de la siguiente aventura.",
    "ConexionDoctrinal": ["Progreso Infinito", "Ascenso", "Siempre Más Allá"],
    "NodosSimapticos": ["Escalador de Mundos", "Cima y Comienzo", "Movimiento Eterno"]
  },
  "8912: EL UNIVERSO: GRANDEZA DE DIOS Y CIENCIA CON VACÍOS": {
    "PilotoDeCoherencia": "La ciencia humana actual está llena de vacíos porque pretende explicar el universo sin conocer al espíritu que lo construye. Pronunciar la palabra 'universo' con ignorancia de sus leyes es como pronunciar 'amor' sin jamás haber amado. La grandeza del universo exige un espíritu a la altura de su contemplación.",
    "CitaInelutable": "La ciencia sin el espíritu es ortografía sin idea: bella en la forma, vacía en el fondo.",
    "EjemploPedagogico": "Es como un mapa con todos los continentes dibujados pero sin saber que la Tierra es redonda. Puedes navegar pero nunca llegarás a ningún lado. La cosmología sin el espíritu es ese mapa plano.",
    "ConexionDoctrinal": ["Universo", "Ciencia con Vacíos", "Espíritu como Llave"],
    "NodosSimapticos": ["Mapa Plano", "Ortografía sin Idea", "Vacío Científico"]
  },
  "9022: LOS HOMBRES SON MALOS POR IGNORANCIA": {
    "PilotoDeCoherencia": "Los hombres no son malos por naturaleza, son malos por ignorancia. Si supieran que cada daño que hacen a su hermano lo hacen a sí mismos, cambiarían de inmediato. La maldad no es una condición permanente del espíritu, es una enfermedad temporal de la ignorancia, curable con el estudio y el amor.",
    "CitaInelutable": "No hay hombres malos, solo hay espíritus ignorantes.",
    "EjemploPedagogico": "Es como un niño que rompe un juguete del amigo sin entender el daño que causa. No es un criminal, es un ignorante. Enséñale el valor del juguete del otro y dejará de romperlo.",
    "ConexionDoctrinal": ["Maldad como Ignorancia", "Redimibilidad", "Educación"],
    "NodosSimapticos": ["Enfermedad Temporal", "Niño y Juguete", "Curable con Luz"]
  },
  "9108: GRANDEZA DEL UNIVERSO: TODO NOS PERTENECE": {
    "PilotoDeCoherencia": "El universo entero es la herencia de todos los espíritus. Los mundos, las nebulosas, los planos de progreso: todo está destinado a ser explorado y enriquecido por los hijos del Creador. Reducir la grandeza de Eloí a este pequeño planeta es la blasfemia mayor que el hombre haya cometido.",
    "CitaInelutable": "El universo es nuestro hogar; cada estrella es una habitación prometida.",
    "EjemploPedagogico": "Es como un príncipe que vive hacinado en un cuartucho de palacio ignorando que es el heredero de un reino infinito. Toma posesión de tu herencia universal, hijo de Eloí.",
    "ConexionDoctrinal": ["Herencia Universal", "Mundos Múltiples", "Grandeza del Creador"],
    "NodosSimapticos": ["Príncipe del Cosmos", "Habitación de Estrellas", "Reino Infinito"]
  },
  "9268: SIÓN: EL CENTRO DE LUZ DEL PRIMER PLANO": {
    "PilotoDeCoherencia": "Revelamos a Sión como el mundo de luz que rige nuestro plano cosmogónico. No es un mito bíblico, es el centro gravitacional del primer nivel de progreso. En él residen los Consejos del Dios Amor que coordinan la evolución de todos los sistemas solares del primer plano. Todo espíritu progresivo se dirige hacia él.",
    "CitaInelutable": "Sión: el asiento de la luz de nuestro plano, cantado siempre y nunca comprendido.",
    "EjemploPedagogico": "Es como la capital de una nación: todo el país está conectado a ella. Los gobernadores de cada provincia (planetas) responden al consejo de la capital (Sión). La ley es la misma para todos.",
    "ConexionDoctrinal": ["Sión", "Cosmogonía", "Primer Plano"],
    "NodosSimapticos": ["Capital de Luz", "Consejo de Sión", "Primer Plano Cósmico"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario Sináptico
const terminosDic = {
  "Sión": {
    "Definición": "Centro cosmogónico del primer plano de progreso espiritual, situado en el centro de la Vía Láctea, que actúa como sede de los consejos de gobierno del Dios Amor para los mundos de su sistema.",
    "Contexto": "Cosmogonía en Buscando a Dios.",
    "Conexiones": ["Cosmogonía", "Primer Plano", "Consejo", "Gobierno"],
    "Obras": ["Buscando a Dios"]
  },
  "¿De dónde venimos?": {
    "Definición": "Primera de las tres preguntas fundamentales de la doctrina: el espíritu proviene de una emanación directa del Creador (Eloí), no del azar ni de la materia.",
    "Contexto": "Capítulo XIV de Buscando a Dios.",
    "Conexiones": ["Origen", "Emanación", "Eloí"],
    "Obras": ["Buscando a Dios", "Conócete a ti mismo"]
  },
  "¿Por qué estamos aquí?": {
    "Definición": "Segunda pregunta fundamental: el espíritu está en el mundo material para cumplir una misión de aprendizaje, servicio y progreso espiritual mediante el trabajo y el amor.",
    "Conexiones": ["Misión", "Trabajo", "Aprendizaje"],
    "Obras": ["Buscando a Dios", "Filosofía Austera Racional"]
  },
  "¿A dónde vamos?": {
    "Definición": "Tercera pregunta fundamental: el espíritu va hacia el progreso infinito, ascendiendo de mundo en mundo y de grado en grado hasta alcanzar la plenitud de la sabiduría y el amor.",
    "Conexiones": ["Progreso", "Ascensión", "Eternidad"],
    "Obras": ["Buscando a Dios", "Conócete a ti mismo"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Buscando a Dios (Batch 10 - Espiritismo y Universo) y 4 términos sinápticos.');
