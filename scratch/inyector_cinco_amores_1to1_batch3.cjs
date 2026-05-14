const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/los-cinco-amores_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Los Cinco Amores (Batch 3)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "4472: CAPÍTULO NOVENO: EL AMOR A LA ECONOMÍA INDUSTRIAL": {
    "PilotoDeCoherencia": "La industria debe ser la herramienta del bienestar, no de la explotación. Denuncio que la industria ha sido usada para 'mixtificar el progreso' creando dioses de palo y carne. En la Comuna, la industria es el taller donde se procesa la herencia de Eloí para todos los hermanos por igual.",
    "CitaInelutable": "¿Qué podía esperar la humanidad de esos seres... si su industria sólo fue mixtificar el progreso?",
    "EjemploPedagogico": "La industria sin amor es como un martillo usado para herir en lugar de construir. En Mi Escuela, el martillo solo se levanta para forjar el progreso colectivo.",
    "ConexionDoctrinal": ["Economía Industrial", "Mixtificación del Progreso", "Bien Común"],
    "NodosSimapticos": ["Economía Industrial", "Mixtificación", "Herencia de Eloí"]
  },
  "4972: CAPÍTULO NUEVE": { // Nota: Parece haber una duplicación o subsegmento en el índice
    "PilotoDeCoherencia": "Insisto en la necesidad de limpiar el camino de estorbos. La música horrorosa de los cañones es el resultado de no haber querido oír la voz de la razón. La mayoría de los espíritus ya aprobaron su 'bachillerato' espiritual y demandan justicia racional en el trabajo.",
    "CitaInelutable": "Son quitados los estorbos con la música horrorosa que hacen los cañones.",
    "EjemploPedagogico": "Cuando un estudiante se niega a aprender por la palabra, termina aprendiendo por el fracaso. La guerra es el fracaso de la humanidad vieja que se negó a estudiar la Ley de Amor.",
    "ConexionDoctrinal": ["Justicia Racional", "Bachillerato Espiritual", "Liquidación"],
    "NodosSimapticos": ["Música de Cañones", "Estorbos del Progreso", "Bachillerato Espiritual"]
  },
  "5320: CAPÍTULO DIEZ: JUSTICIA RACIONAL Y ARMONÍA DEL TRABAJO": {
    "PilotoDeCoherencia": "El trabajo no es un castigo bíblico, es la armonía del espíritu con la materia. La justicia racional impone que quien no trabaja no come, y quien trabaja tiene derecho a la fruición de todo. El trabajo armonizado es la oración más pura al Creador.",
    "CitaInelutable": "El trabajo armonizado es la única oración que el Creador escucha.",
    "EjemploPedagogico": "Imagina un reloj donde todos los engranajes giran en paz. Ese es el trabajo en la Comuna. El engranaje que se detiene por pereza o privilegio, rompe la armonía del tiempo social.",
    "ConexionDoctrinal": ["Ley del Trabajo", "Justicia Racional", "Armonía"],
    "NodosSimapticos": ["Trabajo Armonizado", "Oración del Trabajo", "Justicia en el Trabajo"]
  },
  "5469: TERCERA PARTE: EL AMOR IDEAL ES EL AMOR DEL ESPÍRITU": {
    "PilotoDeCoherencia": "Entramos en la esfera de lo ideal. El amor ideal no es una fantasía mística, sino el reconocimiento de nuestra esencia espiritual eterna. Es el amor que trasciende la carne sin negarla, buscando la unidad de todos los seres en el Padre Hellí.",
    "CitaInelutable": "El amor ideal es el amor del espíritu despojado de los prejuicios de la materia.",
    "EjemploPedagogico": "Es como el piloto que mira desde lo alto: ve los caminos y los obstáculos que los que van a pie no pueden ver. El amor ideal es la visión de altura del espíritu.",
    "ConexionDoctrinal": ["Amor Ideal", "Espíritu", "Hellí"],
    "NodosSimapticos": ["Amor Ideal", "Visión de Altura", "Esencia Espiritual"]
  },
  "5473: CAPÍTULO PRIMERO: EL AMOR AL ESTUDIO RACIONAL": {
    "PilotoDeCoherencia": "El estudio racional es la profilaxis contra el dogma. No mandamos creer, mandamos estudiar. El espíritu que estudia se hace libre; el que solo cree, se hace esclavo. La razón es el filtro que separa el oro de la verdad del lodo de la superstición.",
    "CitaInelutable": "Mandamos estudiar, no creer; porque el estudio da la luz y la creencia la ceguera.",
    "EjemploPedagogico": "Creer es caminar con los ojos cerrados confiando en un guía. Estudiar es abrir los ojos y ver el camino por ti mismo. Mi Escuela te da la luz, tú pones los ojos.",
    "ConexionDoctrinal": ["Estudio Racional", "Anti-Dogma", "Libertad de Conciencia"],
    "NodosSimapticos": ["Estudio Racional", "Luz vs Ceguera", "Filtro de la Razón"]
  },
  "5719: CAPÍTULO SEGUNDO: EL AMOR A LA CIENCIA Y A LAS ARTES": {
    "PilotoDeCoherencia": "La ciencia y el arte son las flores del espíritu. Pero denuncio la ciencia que mata y el arte que corrompe. La verdadera ciencia es la que descubre las leyes de Eloí para el servicio del hombre. El arte verdadero es el que eleva la vibración del alma hacia la armonía.",
    "CitaInelutable": "La ciencia debe ser el acólito del hombre y el arte su fragancia.",
    "EjemploPedagogico": "La ciencia es el pan y el arte es la miel. Ambos son necesarios para la nutrición total del hombre en la Comuna.",
    "ConexionDoctrinal": ["Ciencia Racional", "Arte Elevador", "Progreso"],
    "NodosSimapticos": ["Ciencia Acólito", "Fragancia del Arte", "Progreso Integral"]
  },
  "6067: CAPÍTULO TERCERO: EL AMOR A LA VERDAD": {
    "PilotoDeCoherencia": "La verdad es amarga para el que vive del error, pero es el único sustento del espíritu libre. Amar la verdad implica el valor de reconocer los propios errores. La verdad no se impone, se demuestra.",
    "CitaInelutable": "La verdad es la roca sobre la que se asienta el trono del espíritu.",
    "EjemploPedagogico": "La verdad es como el sol: no necesita que nadie lo defienda, solo necesita que no cierres las persianas de tu prejuicio para iluminar tu casa.",
    "ConexionDoctrinal": ["Verdad", "Soberanía", "Valor Moral"],
    "NodosSimapticos": ["Amor a la Verdad", "Roca del Espíritu", "Demostración"]
  },
  "6365: CAPÍTULO CUARTO: EL AMOR AL MAESTRO": {
    "PilotoDeCoherencia": "El amor al maestro no es adoración personal, sino respeto por la sabiduría que él representa. El verdadero maestro es el que te enseña a no necesitarlo, dándote las herramientas para que tú seas tu propio maestro. Yo no quiero seguidores, quiero hombres libres.",
    "CitaInelutable": "El amor al maestro es el reconocimiento de la luz en el hermano que nos precede.",
    "EjemploPedagogico": "El maestro es el mapa; una vez que conoces el camino, ya no miras el mapa, sino que disfrutas del paisaje. Pero sin el mapa, te habrías perdido en el bosque.",
    "ConexionDoctrinal": ["Maestro", "Sabiduría", "Libertad"],
    "NodosSimapticos": ["Amor al Maestro", "Mapa de Sabiduría", "Hombres Libres"]
  },
  "6613: CAPÍTULO QUINTO: EL AMOR A LA SOLIDARIDAD UNIVERSAL": {
    "PilotoDeCoherencia": "La solidaridad es la ley de gravedad del mundo espiritual. Todos estamos conectados. El dolor de un hermano en el otro extremo del mundo es mi dolor. La solidaridad universal es el fin de las fronteras y de los nacionalismos egoístas.",
    "CitaInelutable": "La solidaridad es la ley que mantiene al universo en su órbita de amor.",
    "EjemploPedagogico": "Somos como las gotas de un océano: ninguna puede decir que el océano no le pertenece, ni el océano puede existir sin las gotas. La solidaridad es la conciencia de ser océano.",
    "ConexionDoctrinal": ["Solidaridad", "Universo Solidarizado", "Fraternidad"],
    "NodosSimapticos": ["Solidaridad Universal", "Órbita de Amor", "Océano del Espíritu"]
  },
  "6961: CAPÍTULO SEXTO: EL AMOR AL ESPIRITISMO LUZ Y VERDAD": {
    "PilotoDeCoherencia": "El Espiritismo no es mesa, ni fenómeno, ni religión. Es la ciencia del espíritu y la verdad de la vida. Es el amor perfecto que une la materia con el espíritu. Es la luz que apaga todas las antorchas humeantes de las religiones del mundo.",
    "CitaInelutable": "El Espiritismo es el amor perfecto porque es la verdad absoluta.",
    "EjemploPedagogico": "El Espiritismo es la luz eléctrica frente a las velas de las religiones. Cuando llega la luz potente, las sombras de la duda y el miedo desaparecen para siempre.",
    "ConexionDoctrinal": ["Espiritismo Luz y Verdad", "Ciencia del Espíritu", "Luz Universal"],
    "NodosSimapticos": ["Espiritismo Luz", "Amor Perfecto", "Luz vs Antorchas"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Bachillerato Espiritual": {
    "Definición": "El grado de evolución en el que el espíritu ha superado las pruebas básicas de la materia y está listo para comprender y aplicar las leyes universales de la Comuna.",
    "Contexto": "Capítulo IX de Los Cinco Amores. Trincado señala que la humanidad actual ha 'aprobado' este bachillerato y por eso el sistema viejo colapsa.",
    "Conexiones": ["Progreso Espiritual", "Liquidación", "Justicia Racional"],
    "Obras": ["Los Cinco Amores", "Filosofía Austera Racional"]
  },
  "Industria Mixtificada": {
    "Definición": "El uso de la capacidad productiva del hombre para crear objetos de culto, armas o lujos superfluos, en lugar de servir al bienestar general de los hermanos.",
    "Contexto": "Capítulo IX de la Segunda Parte de Los Cinco Amores. Denuncia el desvío de la industria hacia el servicio del dogma y la guerra.",
    "Conexiones": ["Economía Industrial", "Mixtificación", "Guerra como Lucro"],
    "Obras": ["Los Cinco Amores", "Los Extremos se Tocan"]
  },
  "Amor Perfecto": {
    "Definición": "El grado máximo de amor que consiste en la unión total con la verdad y la justicia, personificado en el Espiritismo Luz y Verdad.",
    "Contexto": "Capítulo VI de la Tercera Parte de Los Cinco Amores.",
    "Conexiones": ["Espiritismo", "Verdad Absolute", "Amor Ideal"],
    "Obras": ["Los Cinco Amores", "Buscando a Dios"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Los Cinco Amores (Batch 3) y 3 términos sinápticos.');
