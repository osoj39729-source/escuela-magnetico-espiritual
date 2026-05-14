const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 17)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "14791: CRÍTICA A LAS CLASIFICACIONES DE CARÁCTER": {
    "PilotoDeCoherencia": "Denunciamos las clasificaciones de carácter de la ciencia oficial por ser superficiales y prejuiciosas. No se puede clasificar al hombre sin conocer la trayectoria de su espíritu. Malapert y otros se equivocan al llamar 'equilibrados' a quienes solo son mediocres o acomodaticios. El verdadero equilibrio es la armonía con la Ley, no la falta de carácter.",
    "CitaInelutable": "La ciencia oficial clasifica la máscara, pero ignora el rostro del espíritu.",
    "EjemploPedagogico": "Es como clasificar los libros de una biblioteca solo por el color de sus tapas. Puedes poner juntos dos libros rojos, pero uno puede ser de medicina y el otro de mentiras religiosas. La ciencia mira la tapa; nosotros leemos el contenido del espíritu.",
    "ConexionDoctrinal": ["Carácter", "Crítica Científica", "Trayectoria Espiritual"],
    "NodosSimapticos": ["Clasificación de Máscaras", "Equilibrio Falso", "Lectura del Espíritu"]
  },
  "15070: LOS AMORFOS — LA RÉMORA DEL PROGRESO": {
    "PilotoDeCoherencia": "Los amorfos son aquellos que no tienen forma propia porque se amoldan a cualquier vasija por conveniencia. Son los rutinarios, los religiosos 'sin hábito' y los políticos de ocasión. Son la rémora que frena el barco del progreso. No tienen el valor de la verdad austera y prefieren la comodidad de la mentira social.",
    "CitaInelutable": "El amorfo es un religioso disfrazado de civil; un cobarde que teme a la luz de la razón.",
    "EjemploPedagogico": "El amorfo es como el agua: toma la forma del vaso que lo contiene. Si el vaso es el dogma, él es dogmático; si el vaso es el vicio, él es vicioso. El hombre de la Comuna debe ser como el diamante: tiene su propia forma y nada lo deforma.",
    "ConexionDoctrinal": ["Amorfos", "Rutinarios", "Obstáculos al Progreso"],
    "NodosSimapticos": ["Hombres-Agua", "Rémora Social", "Religiosos sin Hábito"]
  },
  "15340: LOS SUPERIORES — ESPIRITISTAS POR ACCIÓN": {
    "PilotoDeCoherencia": "Los superiores son los espíritus que empujan la máquina del progreso. Son anti-religiosos y anti-guerreros por principio. Son revolucionarios porque no aceptan la injusticia. Aunque no conozcan nuestra Escuela, son espiritistas por sus obras, porque actúan según la ley de amor y libertad.",
    "CitaInelutable": "Ser superior es ser revolucionario contra el error y arquitecto de la verdad.",
    "EjemploPedagogico": "Son como los faros en una costa tormentosa: no piden permiso para brillar, simplemente brillan y guían a los barcos. Su luz es su obra de progreso constante.",
    "ConexionDoctrinal": ["Espiritismo de Obra", "Superiores", "Acción Revolucionaria"],
    "NodosSimapticos": ["Superiores", "Espiritistas de Hecho", "Arquitectos de Verdad"]
  },
  "15620: LA COBARDÍA DE LOS ESPIRITUALISTAS": {
    "PilotoDeCoherencia": "Denunciamos al 'espiritualismo' como una rama del amorfismo. Son conveniencieros que hablan de espíritu pero temen a la responsabilidad. Se amoldan a todo menos a la verdad austera. El espiritualismo es el refugio de los que quieren ser 'buenos' sin dejar de ser cómplices del sistema viejo.",
    "CitaInelutable": "El espiritualista es un amorfo que usa palabras bellas para ocultar su falta de carácter.",
    "EjemploPedagogico": "Es como alguien que admira el sol desde una habitación cerrada con llave: habla de la luz, pero no se atreve a abrir la puerta para salir a trabajar bajo ella. Prefiere la sombra cómoda al sol que quema las mentiras.",
    "ConexionDoctrinal": ["Espiritualismo vs Espiritismo", "Amorfismo", "Hipocresía"],
    "NodosSimapticos": ["Cobardía Espiritualista", "Refugio de Palabras", "Sombra Cómoda"]
  },
  "15900: LA RESPONSABILIDAD DEL MAESTRO": {
    "PilotoDeCoherencia": "El que enseña es responsable de la influencia que ejerce. Si un maestro transmite errores por prejuicio o cobardía, carga con la deuda de sus alumnos. En Mi Escuela, la enseñanza es un acto sagrado de justicia. No se puede enseñar la verdad a medias.",
    "CitaInelutable": "El error del maestro es la cadena del alumno; el maestro responderá por cada eslabón.",
    "EjemploPedagogico": "Es como un guía de montaña que da un mapa falso a los excursionistas. Si ellos se pierden en el abismo, el guía es el culpable. El mapa de la vida debe ser exacto.",
    "ConexionDoctrinal": ["Pedagogía Racional", "Responsabilidad", "Influencia"],
    "NodosSimapticos": ["Deuda del Maestro", "Mapa de Vida", "Sagrado Acto de Enseñar"]
  },
  "16170: CLASIFICACIÓN DE RIBOT — SENSITIVOS Y ACTIVOS": {
    "PilotoDeCoherencia": "Analizamos la clasificación de Ribot. Los sensitivos son dominados por la emoción; los activos por la voluntad de obra. Pero advertimos que sin la dirección del espíritu racional, el sensitivo cae en el misticismo y el activo en la ambición ciega. Buscamos la síntesis: el activo-sensitivo racional.",
    "CitaInelutable": "La sensibilidad sin razón es llanto estéril; la actividad sin amor es fuerza destructora.",
    "EjemploPedagogico": "El sensitivo es la vela que arde; el activo es el viento que mueve el barco. Si la vela no tiene viento, no hay viaje. Si el viento es huracán y no hay vela dirigida, hay naufragio.",
    "ConexionDoctrinal": ["Ribot", "Sensibilidad", "Actividad"],
    "NodosSimapticos": ["Sensitivos", "Activos", "Síntesis Racional"]
  },
  "16440: LOS APÁTICOS — EL CEMENTERIO VIVIENTE": {
    "PilotoDeCoherencia": "Los apáticos son espíritus cuya voluntad está anestesiada por el desengaño o la pereza. Son un cementerio viviente dentro de la sociedad. La Filosofía Austera busca despertar a estos espíritus recordándoles su deber y su potencia eterna. No hay lugar para la apatía en la Comuna.",
    "CitaInelutable": "La apatía es la muerte anticipada del espíritu en un cuerpo que aún respira.",
    "EjemploPedagogico": "Es un motor que tiene combustible pero cuya chispa está sucia. Nuestra labor es limpiar la bujía con la verdad para que el motor vuelva a rugir de vida y trabajo.",
    "ConexionDoctrinal": ["Apatía", "Voluntad", "Deber"],
    "NodosSimapticos": ["Cementerio Viviente", "Chispa Sucia", "Muerte Anticipada"]
  },
  "16710: EL EQUILIBRIO FALSO DEL ACOMODATICIO": {
    "PilotoDeCoherencia": "Muchos llaman 'hombre equilibrado' al que no se mete en problemas y acepta todas las injusticias con una sonrisa. Eso no es equilibrio, es complicidad amorfa. El equilibrio real es el del guerrero de la luz que mantiene su centro firme mientras lucha contra el error.",
    "CitaInelutable": "No confundas la paz del esclavo con el equilibrio del hombre libre.",
    "EjemploPedagogico": "Un barco hundido en el fondo del mar está muy 'quieto' y 'equilibrado'. Pero es un barco muerto. El equilibrio que queremos es el del barco que surca las olas manteniendo el rumbo hacia el puerto de la justicia.",
    "ConexionDoctrinal": ["Equilibrio Racional", "Complicidad", "Firmeza"],
    "NodosSimapticos": ["Paz del Esclavo", "Barco Hundido", "Centro Firme"]
  },
  "16980: LA MODA COMO PREJUICIO SOCIAL": {
    "PilotoDeCoherencia": "La moda es el prejuicio que domina a los amorfos. Cambian de ideas como cambian de ropa. Denunciamos que la moda impone leyes absurdas que el espíritu acepta por miedo al juicio ajeno. El filósofo debe ser inmune a la moda para ser fiel a la Verdad.",
    "CitaInelutable": "La moda es el grillete de seda de los que no tienen carácter.",
    "EjemploPedagogico": "Es como un rebaño que sigue a la oveja que tiene el cencerro, sin saber si va al pasto o al matadero. No seas rebaño; sé el pastor de tu propia conciencia.",
    "ConexionDoctrinal": ["Moda", "Prejuicio", "Independencia"],
    "NodosSimapticos": ["Grillete de Seda", "Rebaño Social", "Inmunidad Racional"]
  },
  "17250: LA SUPREMACÍA DE LA VERDAD AUSTERA": {
    "PilotoDeCoherencia": "Concluimos este análisis de caracteres afirmando la supremacía de la Verdad Austera. Solo ella forja hombres superiores. Todo lo que se amolda, se dobla o se oculta, pertenece al mundo viejo que fenece. La Comuna se construye con piedras vivas, no con barro amorfo.",
    "CitaInelutable": "La verdad austera es el yunque donde se forja el carácter del hombre nuevo.",
    "EjemploPedagogico": "Si quieres construir una catedral, necesitas piedra granito. El barro sirve para chozas que la lluvia deshace. Sé granito en tus principios para que tu obra sea eterna.",
    "ConexionDoctrinal": ["Verdad Austera", "Hombre Nuevo", "Construcción Social"],
    "NodosSimapticos": ["Yunque de Verdad", "Piedras Vivas", "Granito del Ser"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Amorfos": {
    "Definición": "Clasificación trincadista para los individuos que carecen de principios firmes y se adaptan a cualquier situación o dogma por conveniencia social o cobardía, actuando como un obstáculo para el progreso.",
    "Contexto": "Capítulo de Caracterología en Filosofía Austera Racional.",
    "Conexiones": ["Rutinarios", "Espiritualismo", "Rémora del Progreso"],
    "Obras": ["Filosofía Austera Racional", "Los Cinco Amores"]
  },
  "Superiores": {
    "Definición": "Espíritus que, con conciencia de su deber y libertad de juicio, impulsan el progreso humano mediante la lucha contra el error y la implantación de la justicia, siendo espiritistas por sus obras.",
    "Contexto": "Caracterología Racional en Filosofía Austera Racional.",
    "Conexiones": ["Espiritismo de Obra", "Revolucionarios", "Luz"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Espiritualismo (Pepe)": {
    "Definición": "Término despectivo usado por Trincado para referirse a las corrientes que hablan de realidades espirituales de forma vaga y mística, pero que rehúyen la responsabilidad práctica y la lucha contra el dogma clerical.",
    "Conexiones": ["Amorfos", "Cobardía", "Hipocresía"],
    "Obras": ["Filosofía Austera Racional", "El Espiritismo en su Asiento"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Filosofía Austera Racional (Batch 17) y 3 términos sinápticos.');
