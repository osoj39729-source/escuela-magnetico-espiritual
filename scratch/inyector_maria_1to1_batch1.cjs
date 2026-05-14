const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/v-i-d-a---d-e----m-a-r-i-a_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

// Initialize files if they don't exist
if (!fs.existsSync(esenciaPath)) {
    fs.writeFileSync(esenciaPath, JSON.stringify({}, null, 2), 'utf8');
}
if (!fs.existsSync(dicPath)) {
    fs.writeFileSync(dicPath, JSON.stringify({}, null, 2), 'utf8');
}

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Vida de María (Batch 1 - Primera Parte: Vida Física)
const nuevosNodos = {
  "109: PRÓLOGO DEL AUTOR": {
    "PilotoDeCoherencia": "Denuncia inicial contra las blasfemias religiosas que desnaturalizan a María. El dogma cristiano, al otorgarle 'once mil y pico de nombres' y el título irracional de 'Madre de Dios', rebaja la dignidad de la Madre Natural y convierte al Creador en una locura antinatural, todo por interés agiotista.",
    "CitaInelutable": "El título de Madre de Dios es una blasfemia que rebaja la dignidad de la Madre Natural y pone en entredicho su grandeza.",
    "EjemploPedagogico": "Hacer a María 'Madre de Dios' es como decir que el universo nació en el bolsillo de un abrigo. Es un absurdo lógico que roba a María su verdadero mérito humano.",
    "ConexionDoctrinal": ["Blasfemia Dogmática", "Madre Natural", "Rechazo del Dogma Mariano"],
    "NodosSimapticos": ["Vampiros Cristianos", "Agiotaje Religioso"]
  },
  "152-213: CAPÍTULOS I y II: JOAQUÍN, ANA Y EL NACIMIENTO NATURAL": {
    "PilotoDeCoherencia": "Confirmación de la genealogía física. María nació de Joaquín y Ana, humildes pastores del valle de Jericó. Su nacimiento ocurrió el 8 de Tebet del año 3744 de Adán (8 de septiembre). No hubo milagros; su infancia corrió como la de cualquier niño natural de la tribu de Benjamín.",
    "CitaInelutable": "Esta es la verdad de la infancia de María, y no hay ningún acontecimiento y menos milagrerías ni obras extra naturales.",
    "EjemploPedagogico": "A María no la trajo una estrella mágica; la trajo la biología impecable de dos padres trabajadores en el valle del Jordán.",
    "ConexionDoctrinal": ["Nacimiento Biológico de María", "Joaquín y Ana", "Rechazo de Milagrerías"],
    "NodosSimapticos": ["Rosa de Jericó", "Infancia Natural"]
  },
  "299-667: CAPÍTULOS III al V: DESPOSORIOS, CELOS Y NACIMIENTO DE JESÚS": {
    "PilotoDeCoherencia": "Desmitificación absoluta del matrimonio de José y María. Se relatan los desposorios naturales, los celos plenamente justificados (fisiológicos y humanos) de José al ver encinta a María, y su resolución digna al no repudiarla. Posteriormente, se asienta la fecha real del nacimiento de Jesús: 4 de diciembre.",
    "CitaInelutable": "Mirado racional, científica y fisiológicamente quedan justificados los celos de José que lo declaran hombre en toda la Ley. Y el nacimiento de Jesús correspondería al 4 de Diciembre y no al 25.",
    "EjemploPedagogico": "José tuvo celos como cualquier hombre enamorado que nota un embarazo misterioso; no era un santo de yeso, era un hombre real. Y Jesús nació el 4, no el 25 mitológico solar.",
    "ConexionDoctrinal": ["Celos de José", "Hombría de José", "Nacimiento de Jesús (4 Dic)"],
    "NodosSimapticos": ["Padre Real", "Fecha Anti-Dogmática"]
  },
  "794-963: CAPÍTULOS VI al IX: LA MADRE DEL REBELDE": {
    "PilotoDeCoherencia": "La infancia de Jesús estuvo marcada por una 'rebeldía y soledad ensimismada' que provocaba el sufrimiento constante de su madre. Tras la desencarnación de José (debido al duro trabajo), María asume la vigilancia sufriente de su hijo, hasta que finalmente 'se pliega' y asimila la doctrina de liberación de Jesús, convirtiéndose en Misionera por derecho propio.",
    "CitaInelutable": "Jesús era incomprensible cuando niño y rebelde desde la adultez. Pero María no vaciló en hacer suyas las doctrinas de Amor y Libertad de su hijo.",
    "EjemploPedagogico": "María sufrió primero como madre al ver a su hijo chocar contra el mundo, pero luego tomó la bandera de su hijo y marchó a su lado contra la opresión.",
    "ConexionDoctrinal": ["Rebeldía de Jesús", "Conversión Doctrinal de María", "Maternidad Sufriente"],
    "NodosSimapticos": ["Madre del Apóstol", "Conversión al Amor"]
  },
  "1094-1176: CAPÍTULOS X y XI: EL APOSTOLADO INDEPENDIENTE DE MARÍA": {
    "PilotoDeCoherencia": "Tras el asesinato de Jesús, María toma las riendas. Ante la cobardía y pusilanimidad de apóstoles como Pedro, María organiza la propagación de las doctrinas. No se queda pasiva en casa de sus hijos; viaja buscando la 'vida que le faltaba' porque era 'Apóstol de verdad y de la Verdad'.",
    "CitaInelutable": "Pedro procuraba ahuyentar de sí las sospechas y esta pusilanimidad dañaba muchísimo... María era Apóstol de la Verdad y donde estaba la lucha, allí vivía su Espíritu.",
    "EjemploPedagogico": "Mientras los discípulos se escondían por miedo, la madre anciana salía a organizar la revolución del espíritu. Ella era el verdadero motor valiente.",
    "ConexionDoctrinal": ["Cobardía de Pedro", "Apostolado Activo de María", "Liderazgo Misionero"],
    "NodosSimapticos": ["Madre Apóstol", "Motor Valiente"]
  },
  "1219-1321: CAPÍTULOS XII al XIV: ESPAÑA, DESENCARNACIÓN Y GRANDEZA": {
    "PilotoDeCoherencia": "María viaja a España para enseñar a las madres libres de yugo sacerdotal. Finalmente, la 'marchita Rosa de Jericó' desencarna a los 72 años, de los cuales 56 fueron de lucha y amargura. Su grandeza no deriva de un favor divino, sino de la ternura de su corazón y el sacrificio máximo ganado a pulso en la lucha.",
    "CitaInelutable": "Setenta y dos años contaba la ya marchita Rosa de Jericó... La grandeza la conquistan los Espíritus en lucha continuada; el Padre no regala nada.",
    "EjemploPedagogico": "Su corona no fue regalada por el Vaticano; fue forjada en las lágrimas, el destierro y el apostolado en España. Es la reina del dolor transmutado en amor.",
    "ConexionDoctrinal": ["Apostolado en España", "Desencarnación (72 años)", "Misión Cumplida"],
    "NodosSimapticos": ["Rosa Marchita", "Corona de Sudor"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "La Madre Natural": {
    "Definición": "Concepto filosófico que reivindica a María de Nazareth en su verdadera dignidad de mujer, madre biológica (de Jesús y otros 6 hijos) y apóstol militante, repudiando radicalmente la blasfemia dogmática que la apoda 'Madre de Dios' o 'Virgen' para sacarla de la Ley de la Creación.",
    "Contexto": "Prólogo y Capítulo 1 de Vida de María.",
    "Conexiones": ["Blasfemia Dogmática", "María de Nazareth", "Ley Biológica"],
    "Obras": ["Vida de María", "Cuestionario Espírita Racional"]
  },
  "Los Celos Fisiológicos de José": {
    "Definición": "Confirmación histórica y doctrinal de la plena hombría de José de Nazareth, quien experimentó celos humanos y lógicos al constatar el embarazo de María antes de convivir, desmintiendo así el rol de 'espectador divino' que el catolicismo le asigna.",
    "Contexto": "Capítulo IV de Vida de María.",
    "Conexiones": ["Hombría de José", "Matrimonio Natural", "Desmitificación"],
    "Obras": ["Vida de María"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 6 nodos 1:1 de Vida de María (Batch 1 - Primera Parte Completa) y 2 términos sinápticos.');
