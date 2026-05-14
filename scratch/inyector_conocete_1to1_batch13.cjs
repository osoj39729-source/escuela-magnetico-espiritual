const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Conócete a ti mismo (Batch 13 - Definiciones y Trabajo)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "15915: LA LEY NO PUEDE SER IMPUESTA": {
    "PilotoDeCoherencia": "Toda ley que se impone por la fuerza de las bayonetas o el miedo al castigo no es ley, es tiranía. La verdadera ley es aquella que el espíritu acepta por convencimiento de su utilidad para el bien común. El régimen de la Comuna se basa en la adhesión libre de la voluntad a la razón suprema del amor.",
    "CitaInelutable": "La fuerza hace esclavos; la razón hace ciudadanos del universo.",
    "EjemploPedagogico": "Es como obligar a alguien a comer algo que le da asco: terminará enfermando. La ley impuesta enferma a la sociedad. La ley aceptada por amor es el alimento que da vida y fuerza.",
    "ConexionDoctrinal": ["Libertad", "Tiranía", "Consenso"],
    "NodosSimapticos": ["Bayonetas y Ley", "Alimento de Vida", "Adhesión Libre"]
  },
  "16068: EL SER ÉTNICO EN LA LEY": {
    "PilotoDeCoherencia": "Reiteramos que las leyes reglamentarias deben respetar el ser étnico y el clima. No se puede imponer la ley de un clima frío a un pueblo del trópico. La armonía social exige que la norma se adapte a la biología y a la costumbre regional, siempre bajo el paraguas de la justicia universal.",
    "CitaInelutable": "La ley debe ser el traje que mejor siente al cuerpo de cada pueblo.",
    "EjemploPedagogico": "Es como intentar que todos los hombres usen el mismo número de zapato. Algunos irán cómodos, otros heridos. La ley debe ser el zapato a medida de la necesidad regional.",
    "ConexionDoctrinal": ["Etnología", "Adaptación", "Armonía Regional"],
    "NodosSimapticos": ["Zapato a Medida", "Paraguas de Justicia", "Traje Social"]
  },
  "16140: EL CRIMEN DEL EXTRANJERISMO": {
    "PilotoDeCoherencia": "Sentenciamos que toda ley que declare 'extraño' a un hombre en cualquier parte del mundo es una ley bárbara. El concepto de 'extranjero' es una invención del egoísmo nacionalista. En la Tierra no hay extraños, solo hay hermanos en diferentes grados de progreso. La Comuna borra las fronteras de papel.",
    "CitaInelutable": "Donde hay un hombre, hay un hermano; donde hay un hermano, no puede haber un extraño.",
    "EjemploPedagogico": "Es como si en tu propia casa le dijeras a tu hermano que es un extraño porque nació en la habitación de al lado. El mundo es tu casa; ninguna habitación te es ajena.",
    "ConexionDoctrinal": ["Antinacionalismo", "Fraternidad Universal", "Fronteras"],
    "NodosSimapticos": ["Fronteras de Papel", "Habitación del Mundo", "Bárbaro Nacionalismo"]
  },
  "16224: EL TRABAJO: LEY INEXORABLE": {
    "PilotoDeCoherencia": "El trabajo es la única ley inexorable impuesta al espíritu para su progreso. Nadie tiene derecho a consumir lo que no ha contribuido a producir. El ocio es el padre de todos los vicios y la negación de la vida. En la Comuna, el trabajo es un honor y una alegría, no una carga impuesta por la necesidad.",
    "CitaInelutable": "El que no trabaja, no come; porque el trabajo es la vida del espíritu.",
    "EjemploPedagogico": "Es como el agua de un río: si corre, está limpia y da vida; si se estanca, se pudre y cría parásitos. Tu espíritu debe ser un río de actividad creadora.",
    "ConexionDoctrinal": ["Deber de Trabajo", "Progreso", "Ocio"],
    "NodosSimapticos": ["Río de Actividad", "Parásitos del Ocio", "Honor de Producir"]
  },
  "16300: ELOÍ, ESPÍRITU Y VIDA": {
    "PilotoDeCoherencia": "Definimos la trinidad suprema: Eloí (causa), Espíritu (actor) y Vida (efecto). Sin el Creador no hay nada; sin el espíritu no hay quien comprenda; sin la vida no hay donde manifestarse. El hombre es el punto donde estas tres realidades se encuentran para glorificar la inteligencia universal.",
    "CitaInelutable": "Eloí es la fuente, el espíritu es el vaso y la vida es el agua.",
    "EjemploPedagogico": "Es como una lámpara encendida: la electricidad es Eloí, la bombilla es el espíritu y la luz es la vida. Si falta uno, solo hay oscuridad.",
    "ConexionDoctrinal": ["Trinidad Suprema", "Causa y Efecto", "Eloí"],
    "NodosSimapticos": ["Bombilla del Ser", "Fuente y Vaso", "Agua de Vida"]
  },
  "16781: LA TRINIDAD FÍSICA: ENERGÍA Y LUZ": {
    "PilotoDeCoherencia": "La ciencia física estudia la trinidad de Energía, Movimiento, Luz y Calor. Estas no son fuerzas ciegas, sino el reflejo de la voluntad del espíritu sobre la materia. La luz es la vibración máxima; el calor es la caricia de la vida. Todo en el universo vibra y se mueve por mandato del Amor.",
    "CitaInelutable": "La energía es el pensamiento de Dios puesto en movimiento.",
    "EjemploPedagogico": "Es como el calor de la sangre en tus venas: el movimiento de la sangre produce el calor que mantiene la vida. El universo tiene su propia sangre de luz que lo mantiene vivo y caliente.",
    "ConexionDoctrinal": ["Trinidad Física", "Vibración", "Luz y Calor"],
    "NodosSimapticos": ["Sangre de Luz", "Caricia de Vida", "Pensamiento en Movimiento"]
  },
  "16839: LEY DIVINA, NATURAL Y HUMANA": {
    "PilotoDeCoherencia": "Sintetizamos el argumento de la obra en tres leyes: la Divina (Amor), la Natural (Mecánica) y la Humana (Administrativa). La humana debe morir para que la divina reine a través de la natural. El hombre civilizado es aquel que ha alineado estas tres leyes en su propia conducta.",
    "CitaInelutable": "Tres leyes para un solo fin: la armonía del hombre con su creador.",
    "EjemploPedagogico": "Es como un niño que necesita que sus padres le pongan reglas (ley humana). Cuando crece, sigue las leyes de la naturaleza por sí mismo (ley natural). Y cuando es sabio, actúa por amor (ley divina). Sé un hombre sabio.",
    "ConexionDoctrinal": ["Trinidad de Leyes", "Armonía", "Evolución Legislativa"],
    "NodosSimapticos": ["Reglas de Niño", "Hombre Sabio", "Mecánica de Amor"]
  },
  "16890: SABIDURÍA, PROGRESO Y CIENCIAS": {
    "PilotoDeCoherencia": "Distinguimos entre tener sabiduría (acumular datos científicos) y ser la sabiduría (vivir en amor). Las ciencias son herramientas del progreso, pero la Sabiduría es la causa de todas las ciencias. No busques saber mucho, busca amar mucho, y el conocimiento te será dado por añadidura.",
    "CitaInelutable": "La ciencia sin amor es un arma cargada; la sabiduría con amor es la paz del universo.",
    "EjemploPedagogico": "Es como un hombre que sabe todo sobre la música pero no sabe tocar ningún instrumento. Tiene ciencia, pero no tiene la música en sí. El que ama, toca la música del universo aunque no sepa leer los planos.",
    "ConexionDoctrinal": ["Sabiduría vs Ciencia", "Paz Universal", "Añadidura"],
    "NodosSimapticos": ["Música del Universo", "Arma Cargada", "Datos vs Vida"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Ley Impuesta": {
    "Definición": "Toda norma o decreto que se obliga a cumplir mediante la coacción o la fuerza, careciendo de la legitimidad que otorga el convencimiento racional y el amor.",
    "Contexto": "Crítica a la tiranía legislativa en Conócete a ti mismo.",
    "Conexiones": ["Tiranía", "Bayonetas", "Libertad"],
    "Obras": ["Conócete a ti mismo", "Filosofía Austera Racional"]
  },
  "Extranjerismo": {
    "Definición": "Concepto antinatural y egoísta que fragmenta la familia humana mediante fronteras artificiales, declarando a unos hombres extraños respecto a otros.",
    "Contexto": "Unidad universal en Conócete a ti mismo.",
    "Conexiones": ["Nacionalismo", "Fronteras", "Fraternidad"],
    "Obras": ["Conócete a ti mismo", "Primer Rayo de Luz"]
  },
  "Trinidad Física": {
    "Definición": "Manifestación material de los principios espirituales expresada en la relación entre Energía, Movimiento, Luz y Calor.",
    "Conexiones": ["Vibración", "Luz", "Energía"],
    "Obras": ["Conócete a ti mismo"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 8 nodos 1:1 de Conócete a ti mismo (Batch 13 - Definiciones Finales) y 3 términos sinápticos.');
