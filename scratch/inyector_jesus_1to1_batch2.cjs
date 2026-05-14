const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/jes-s-hombre-y-no-dios_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Jesús Hombre y No Dios (Batch 2 - FINAL)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "941: PERSECUCIÓN DE LOS SACERDOTES A JESÚS": {
    "PilotoDeCoherencia": "Los sacerdotes persiguieron a Jesús no por blasfemo, sino por peligroso: ponía en riesgo su negocio espiritual. Al predicar la adoración directa al Padre sin intermediarios, desmantelaba todo el aparato sacerdotal que vivía de la ignorancia del pueblo. La crucifixión no fue un sacrificio divino, fue un crimen político ejecutado por los que más hablaban en nombre de Dios.",
    "CitaInelutable": "Jesús fue ejecutado por los sacerdotes por la misma razón que todo profeta: amenazó su negocio.",
    "EjemploPedagogico": "Es como el farmacéutico que persigue al médico que enseña a la gente a curarse con plantas: no lo persigue por mal, sino porque el enfermo que se cura solo ya no compra medicamentos. El templo era la farmacia; Jesús era el médico natural.",
    "ConexionDoctrinal": ["Persecución", "Crimen Político", "Negocio Sacerdotal"],
    "NodosSimapticos": ["Farmacia del Dogma", "Médico Natural", "Crimen del Templo"]
  },
  "1073: FUNDACIÓN DE LA IGLESIA: LA USURPACIÓN": {
    "PilotoDeCoherencia": "La Iglesia no fue fundada por Jesús. Fue una construcción posterior de hombres que usurparon el nombre del Maestro para construir un poder político. La frase 'sobre esta piedra edificaré mi iglesia' no la dijo el Jesús histórico: fue interpolada por los interesados. Jesús quería reformar la sinagoga, no fundar una nueva institución de dominio.",
    "CitaInelutable": "Jesús nunca fundó una iglesia; fundó una fraternidad de amor sin paredes ni altar.",
    "EjemploPedagogico": "Es como los herederos de un grande pintor que venden cuadros falsos firmados con su nombre. El pintor (Jesús) ya no puede desmentirlos; la Escuela llega para hacer la pericia y declarar las falsificaciones.",
    "ConexionDoctrinal": ["Usurpación", "Interpolación", "Jesús Histórico"],
    "NodosSimapticos": ["Cuadros Falsos", "Pericia de la Verdad", "Fraternidad sin Altar"]
  },
  "1178: JESÚS NO LEVANTÓ TEMPLOS": {
    "PilotoDeCoherencia": "Jesús ni sus apóstoles levantaron un solo templo de piedra. Predicaban en casas, campos y plazas. El templo es la negación del espíritu que adoró en espíritu y verdad. Cada piedra de una catedral construida con el dinero de los pobres es un insulto directo al mandato del Nazareno.",
    "CitaInelutable": "El mejor templo de Jesús es el corazón del que ama a su hermano.",
    "EjemploPedagogico": "Es como honrar a un naturalista construyendo un gigantesco zoológico de cemento. El naturalista amaba a los animales libres en su hábitat, no enjaulados para cobrar entrada. La iglesia enjauló al espíritu libre de Jesús.",
    "ConexionDoctrinal": ["Templos de Piedra", "Adoración en Espíritu", "Contradicción"],
    "NodosSimapticos": ["Corazón como Templo", "Zoológico de Dogmas", "Espíritu Enjaulado"]
  },
  "1216: LA IGLESIA CATÓLICA TOMA FORMA": {
    "PilotoDeCoherencia": "En el segundo siglo los discípulos aún practicaban el amor y la sencillez de Jesús. Fue cuando los que se llamaron obispos comenzaron a acumular privilegios que la traición se formalizó. El proceso fue gradual: de la fraternidad al poder, del poder al dogma, del dogma a la hoguera. Es la historia del espíritu de amor corrompido por el alma de la ambición.",
    "CitaInelutable": "La Iglesia nació en el amor y se corrompió en el poder.",
    "EjemploPedagogico": "Es como una comunidad de vecinos que empieza en armonía y poco a poco el presidente comienza a cobrarse 'gastos' y a ampliar sus funciones. Cuando se dan cuenta, el presidente tiene llave de todo y los vecinos no tienen nada.",
    "ConexionDoctrinal": ["Corrupción Histórica", "Obispos", "Fraternidad Traicionada"],
    "NodosSimapticos": ["Presidente del Barrio", "Llave de Todo", "Gradual Traición"]
  },
  "1267: PREMEDITACIÓN INAUDITA": {
    "PilotoDeCoherencia": "La prevaricación de los descendientes de los apóstoles fue premeditada y calculada. No fue ingenuidad: fue la elección consciente de la comodidad y el poder sobre el mandato del amor. El Padre no dejó sin guía a su pueblo: mandó profetas que no escucharon y luego a Juan y Jesús que mataron. Después de eso, ya no hay excusa para la ignorancia.",
    "CitaInelutable": "La prevaricación fue el mayor crimen espiritual porque fue cometida con pleno conocimiento.",
    "EjemploPedagogico": "Es como un doctor que sabe el remedio exacto para curar al paciente pero le vende vitaminas costosas porque el remedio real lo dejaría sin ingresos. La Iglesia conoció la verdad de Jesús y la vendió como dogma.",
    "ConexionDoctrinal": ["Prevaricación", "Pleno Conocimiento", "Excusa Eliminada"],
    "NodosSimapticos": ["Doctor sin Ética", "Vitaminas del Dogma", "Crimen con Saber"]
  },
  "1299: LA FALACIA Y LA FUERZA BRUTA": {
    "PilotoDeCoherencia": "La Iglesia consolidó su poder uniendo dos armas: la falacia teológica (el dogma irracional) y la fuerza bruta del Estado. Monopolizó todos los cultos previos, saqueó sus sacramentos y ritos y se vistió con ellos como traje de autoridad divina. Manuel I fue el político que le dio forma de Estado a la usurpación espiritual.",
    "CitaInelutable": "La Iglesia nació de la alianza entre la mentira y la espada.",
    "EjemploPedagogico": "Es como un pirata que captura varios barcos, quita sus banderas, pone la suya y declara que todos esos barcos siempre fueron suyos. La Iglesia fue ese pirata con el tesoro espiritual de la humanidad.",
    "ConexionDoctrinal": ["Alianza con el Estado", "Monopolio Religioso", "Falsificación"],
    "NodosSimapticos": ["Pirata de Almas", "Bandera Robada", "Espada y Mentira"]
  },
  "1381: SENTENCIA: CIENCIA vs RELIGIÓN": {
    "PilotoDeCoherencia": "Después de analizar los autos del proceso histórico, la sentencia es clara: la Ciencia, que se basa en la razón y la investigación y se renueva ante la prueba, no puede equivocarse en lo fundamental. La Religión, que impide toda prueba con el dogma, se condena a sí misma. El litigio entre Religión y Ciencia tiene un solo ganador: la verdad verificable.",
    "CitaInelutable": "La ciencia que se renueva ante la prueba es la única soberana del progreso.",
    "EjemploPedagogico": "Es como un juicio con pruebas físicas: el jurado tiene el ADN del culpable. No importa cuántos testigos falsos tenga la defensa (el dogma), la prueba (la ciencia) sentencia.",
    "ConexionDoctrinal": ["Ciencia vs Religión", "Prueba y Renovación", "Sentencia Histórica"],
    "NodosSimapticos": ["ADN de la Verdad", "Jurado de la Historia", "Testigos Falsos"]
  },
  "1923: BUSCANDO NUEVOS CAMINOS": {
    "PilotoDeCoherencia": "El Maestro en primera persona confiesa su dilema: sabe la verdad sobre Jesús, siente el mandato de decirla, pero desconoce cómo llegar a una humanidad prejuiciada y escéptica. Esta confesión de incertidumbre es el acto de mayor honestidad doctrinal: no hay falsas certezas, solo el compromiso irrenunciable de decir la verdad desnuda. Este es el inicio de la misión definitiva.",
    "CitaInelutable": "No sé el camino, pero sé la verdad. Y la diré desnuda.",
    "EjemploPedagogico": "Es como un médico que tiene la cura de una enfermedad pero sabe que el paciente desconfía de él por los charlatanes anteriores. No abandona; busca el modo de que la cura llegue de todas formas.",
    "ConexionDoctrinal": ["Misión del Maestro", "Honestidad Doctrinal", "Verdad Desnuda"],
    "NodosSimapticos": ["Médico Desconfiado", "Verdad sin Maquillaje", "Camino Incierto"]
  },
  "EPÍLOGO JESÚS: REHABILITACIÓN DEFINITIVA": {
    "PilotoDeCoherencia": "La obra cierra con la rehabilitación completa de Jesús como ser humano excepcional: maestro, espiritista, reformador y hermano. No es Dios, no es sacrificio, no es intermediario. Es el modelo del hombre que se conoce a sí mismo y actúa en consecuencia. Su verdadero legado no está en los evangelios distorsionados, sino en el ejemplo de una vida entregada al amor y la verdad.",
    "CitaInelutable": "Jesús fue el hombre más grande porque fue el que más amó siendo el más incomprendido.",
    "EjemploPedagogico": "Es como un gran arquitecto cuyas obras fueron vandalizadas por sus albaceas: la belleza original estaba en los planos, no en lo que construyeron después. Nosotros recuperamos los planos originales de Jesús.",
    "ConexionDoctrinal": ["Jesús Rehabilitado", "Modelo de Hombre", "Legado Real"],
    "NodosSimapticos": ["Planos Originales", "Albacea Traidor", "Hombre Máximo"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Diccionario Sináptico
const terminosDic = {
  "Jesús (Rehabilitación)": {
    "Definición": "Hombre excepcional, maestro espiritista y reformador social injustamente deificado por la Iglesia. La Escuela de Trincado restituye su condición humana como modelo del ser racional que actúa por amor.",
    "Contexto": "Obra central de Jesús Hombre y No Dios.",
    "Conexiones": ["Jesús Hombre", "Iglesia", "Modelo de Vida"],
    "Obras": ["Jesús Hombre y No Dios", "Buscando a Dios", "Primer Rayo de Luz"]
  },
  "Fundación de la Iglesia (Usurpación)": {
    "Definición": "Proceso histórico de apropiación del legado de Jesús por parte de hombres que usurparon su nombre para construir un poder político-religioso ajeno a su mandato de amor.",
    "Contexto": "Historia crítica en Jesús Hombre y No Dios.",
    "Conexiones": ["Iglesia Católica", "Usurpación", "Dogma"],
    "Obras": ["Jesús Hombre y No Dios", "Buscando a Dios"]
  },
  "Prevaricación (Religiosa)": {
    "Definición": "Traición consciente y premeditada al mandato de amor de Jesús por parte de sus sucesores religiosos, quienes eligieron el poder y los privilegios sobre la verdad espiritual.",
    "Conexiones": ["Iglesia", "Conocimiento", "Crimen"],
    "Obras": ["Jesús Hombre y No Dios", "Conócete a ti mismo"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 9 nodos 1:1 de Jesús Hombre y No Dios (Batch 2 - COMPLETA 100%) y 3 términos sinápticos.');
