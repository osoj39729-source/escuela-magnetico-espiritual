const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/alfaqui-vademecum_esencia.json';
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

// Destilación 1:1 - Alfaquí Vademécum (Batch 1 - Parte I y II: Cosmogonía y Creación)
const nuevosNodos = {
  "34: PREFACIO": {
    "PilotoDeCoherencia": "Justificación del Vademécum. Es inútil obligar a aprender de memoria todos los volúmenes de sabiduría. El Alfaquí sirve como un manual concentrado ('Vademécum') para que el discípulo retenga la esencia pura de la doctrina sin fatigarse con repeticiones.",
    "CitaInelutable": "Obligarle al hombre a aprender de memoria todos los volúmenes es un trabajo sin provecho. El hombre retiene en su archivo la esencia del estudio.",
    "EjemploPedagogico": "El Vademécum es como llevar una pastilla de caldo concentrado en lugar de cargar con una olla de sopa entera; tienes toda la sustancia en un formato manejable.",
    "ConexionDoctrinal": ["Método de Estudio", "Esencia Doctrinal", "Economía del Saber"],
    "NodosSimapticos": ["Caldo Concentrado", "Archivo de Esencias"]
  },
  "112: CAPÍTULO I: ELOÍ": {
    "PilotoDeCoherencia": "Definición atómica del Creador. Eloí es el Axioma Universal y la causa primera. Es el progenitor directo de los espíritus. Su pensamiento eterno vibra en el éter que envuelve todo el Cosmos. Él es la única Ley.",
    "CitaInelutable": "Eloí es el axioma universal... es el progenitor de los espíritus, que son su voluntad para la acción de la vida demostrativa.",
    "EjemploPedagogico": "Eloí no es un anciano sentado en una nube; es el generador eléctrico infinito cuya vibración (pensamiento) enciende todas las luces (espíritus) del Universo.",
    "ConexionDoctrinal": ["Axioma Universal", "Progenitor de los Espíritus", "Vibración del Éter"],
    "NodosSimapticos": ["Generador Infinito", "Pensamiento Vibrante"]
  },
  "233: CAPÍTULO II: LA VIDA": {
    "PilotoDeCoherencia": "Se define la Vida como la ejecución material del pensamiento de Eloí a través del Espíritu (voluntad de acción). La Vida es el Éter impalpable. Axioma demoledor: el vacío absoluto no existe en ninguna parte del Universo, y por lo tanto, la 'nada' es una aberración teórica.",
    "CitaInelutable": "La vibración constante del pensamiento de Eloí todo lo llena, sin dejar lugar al vacío, que no existe; y por lo tanto tampoco existe la nada.",
    "EjemploPedagogico": "Lo que llamamos 'espacio vacío' entre las estrellas es en realidad un océano de Éter lleno de vida. Los peces no ven el agua, y nosotros no vemos el Éter, pero sin él no habría vida.",
    "ConexionDoctrinal": ["Inexistencia del Vacío", "Éter como Vida", "Espíritu Ejecutor"],
    "NodosSimapticos": ["Océano de Éter", "Muerte de la Nada"]
  },
  "364: CAPÍTULO III: EL ESPÍRITU": {
    "PilotoDeCoherencia": "El Espíritu es el mandatario único de Eloí, la herramienta creadora de todo lo palpable. Sin el espíritu, la materia no tomaría forma. El Creador piensa, el Espíritu ejecuta y moldea la creación en formas infinitas.",
    "CitaInelutable": "El espíritu es la vida demostrativa... es por mandato el creador de todo lo palpable y sin él no existiría.",
    "EjemploPedagogico": "Eloí es el arquitecto que hace el plano en su mente; el Espíritu es el ingeniero que toma los ladrillos (materia) y construye la casa (el cuerpo/mundo).",
    "ConexionDoctrinal": ["Espíritu Creador", "Mandatario de Eloí", "Generador de Formas"],
    "NodosSimapticos": ["Ingeniero Cósmico", "Ejecutor Palpable"]
  },
  "587: CAPÍTULO IV: LAS LEYES DEL UNIVERSO O DIVINAS": {
    "PilotoDeCoherencia": "Solo existe UNA Ley Divina matriz: la Ley de Amor. De ella se desprenden leyes secundarias, especialmente dos que son inflexibles ('fatales'): la Afinidad (que administra) y la Justicia (el cajero que cobra o paga). Eloí es el gran propietario, y estas leyes sus contadores.",
    "CitaInelutable": "Sólo hay una ley divina, la de amor; las leyes fatales de afinidad y justicia son el administrador y cajero contador del gran propietario, Eloí.",
    "EjemploPedagogico": "El Universo es una empresa infinita cuyo dueño es el Amor. Si trabajas bien, el administrador (Afinidad) te asciende; si robas, el cajero (Justicia) te descuenta la deuda con dolor.",
    "ConexionDoctrinal": ["Ley Única de Amor", "Afinidad y Justicia", "Leyes Fatales"],
    "NodosSimapticos": ["Cajero Contador", "Empresa del Universo"]
  },
  "667: CAPÍTULO V: LA CREACIÓN Y SU FIN": {
    "PilotoDeCoherencia": "El propósito de la Creación es el progreso infinito e indefinido. Dado que el espíritu es incorpóreo y necesita manipular la materia para progresar en experiencia, crea mundos y cuerpos orgánicos que le sirven de instrumentos efímeros de trabajo.",
    "CitaInelutable": "El fin primordial de la eterna creación es el progreso infinito... el espíritu necesita cuerpos que le sirvan de instrumentos.",
    "EjemploPedagogico": "El espíritu necesita un traje de buzo (cuerpo) para explorar el fondo del mar (mundo material). El fin no es adorar el traje de buzo, sino aprender lo que hay en el océano (progreso).",
    "ConexionDoctrinal": ["Progreso Infinito", "Cuerpo como Instrumento", "Fin de la Creación"],
    "NodosSimapticos": ["Traje de Buzo Espiritual", "Laboratorio Material"]
  },
  "883: CAPÍTULO VI: LOS SERES SOBRE LA TIERRA": {
    "PilotoDeCoherencia": "La aparición de la vida en la Tierra fue progresiva, maravillosa y humilde. Las esencias espirituales van formando cuerpos cada vez más complejos desde los reinos inferiores hasta llegar a ser instrumentos aptos para el grado de progreso que se requiera.",
    "CitaInelutable": "La aparición del hombre tan maravillosa y sabia cuanto humilde... formando su cuerpo materialmente.",
    "EjemploPedagogico": "La vida en la Tierra es como una escuela que empezó con pizarrones de tiza (microbios) y evolucionó hasta computadoras (el cuerpo humano) para albergar a los estudiantes avanzados.",
    "ConexionDoctrinal": ["Evolución Biológica", "Humildad del Origen", "Reinos de la Naturaleza"],
    "NodosSimapticos": ["Escala Orgánica", "Pizarrón Biológico"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Eloí (Axioma Universal)": {
    "Definición": "Concepto filosófico supremo de la Escuela que define al Creador no como un ser antropomórfico, sino como el Progenitor y Generador infinito, cuya vibración de pensamiento constante es el Éter que da vida a todo el Universo.",
    "Contexto": "Capítulos I y II de Alfaquí Vademécum.",
    "Conexiones": ["Éter", "Pensamiento Creador", "Inexistencia de la Nada"],
    "Obras": ["Alfaquí Vademécum", "Conócete a ti mismo"]
  },
  "Administrador y Cajero (Afinidad y Justicia)": {
    "Definición": "Metáfora de la rigurosidad cósmica. La única Ley Divina es el Amor, pero para aplicarse en la materia utiliza dos leyes secundarias inflexibles: la Afinidad (que une los elementos afines como un administrador) y la Justicia (que cobra las deudas kármicas como un cajero).",
    "Contexto": "Capítulo IV de Alfaquí Vademécum.",
    "Conexiones": ["Ley de Amor", "Afinidad", "Justicia Retributiva"],
    "Obras": ["Alfaquí Vademécum"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 7 nodos 1:1 de Alfaquí Vademécum (Batch 1) y 2 términos sinápticos.');
