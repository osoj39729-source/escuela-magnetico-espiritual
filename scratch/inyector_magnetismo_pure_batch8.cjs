const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/el-magnetismo-en-su-origen_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - El Magnetismo en su Origen (Batch 8 - Claves 71 a 81)
const nuevosNodos = {
  "2986: APÉNDICE CIENTÍFICO FILOSÓFICO: DEL EL MAGNETISMO EN SU ORIGEN": {
    "PilotoDeCoherencia": "Introducción de la base científica del Método Supremo.",
    "CitaInelutable": "APÉNDICE CIENTÍFICO FILOSÓFICO",
    "EjemploPedagogico": "El paso a la explicación microfísica y cósmica del porqué funciona la fuerza.",
    "ConexionDoctrinal": ["Ciencia Espiritual", "Fundamentación Física"],
    "NodosSimapticos": []
  },
  "2996: “METODO SUPREMO”: CUPULA MAXIMA": {
    "PilotoDeCoherencia": "Consagración de la obra. El Método Supremo no es una teoría aislada, es la 'Cúpula Máxima' que corona la estructura de la Escuela Magnético-Espiritual de la Comuna Universal.",
    "CitaInelutable": "CUPULA MAXIMA Proclama de la ESCUELA-MAGNÉTICO-ESPIRITUAL DE LA COMUNA UNIVERSAL",
    "EjemploPedagogico": "Es el techo del templo. Debajo están las fundaciones morales, pero arriba está el techo (la cúpula) que cierra el sistema demostrando que todo es magnetismo.",
    "ConexionDoctrinal": ["Cúpula Máxima", "Consagración del Método", "Proclama de la Escuela"],
    "NodosSimapticos": ["Techo Doctrinal"]
  },
  "3007: EL UNIVERSO SOLIDARIZADO": {
    "PilotoDeCoherencia": "El primer pilar de la Cúpula Máxima. Todo en la creación depende de sus demás partes. El aislamiento cósmico es imposible.",
    "CitaInelutable": "EL UNIVERSO SOLIDARIZADO",
    "EjemploPedagogico": "Si mueves un dedo, el cuerpo entero compensa el movimiento. Si un planeta se desvía, el cosmos entero siente la tracción.",
    "ConexionDoctrinal": ["Solidaridad Universal", "Interdependencia"],
    "NodosSimapticos": []
  },
  "3008: EL MUNDO TODO COMUNIZADO": {
    "PilotoDeCoherencia": "El segundo pilar de la Cúpula. El destino ineludible de la Tierra: regirse por la Comuna Universal, imitando la perfecta administración solidaria que ya existe en el resto del cosmos habitado.",
    "CitaInelutable": "EL MUNDO TODO COMUNIZADO",
    "EjemploPedagogico": "El universo funciona como un reloj perfecto sin fronteras; la Tierra, para no destruirse, debe imitar ese engranaje abolendo la división.",
    "ConexionDoctrinal": ["Comuna Universal", "Destino del Mundo"],
    "NodosSimapticos": []
  },
  "3009: LA LEY ES UNA: LA SUBSTANCIA UNA": {
    "PilotoDeCoherencia": "El tercer pilar de la Cúpula. El fin absoluto del dualismo. Dios/Satanás, Espíritu/Materia, todo se reduce a una sola Causa original y una sola Sustancia (el Éter vibrando).",
    "CitaInelutable": "LA LEY ES UNA: LA SUBSTANCIA UNA UNO ES EL PRINCIPIO: UNO ES EL FIN",
    "EjemploPedagogico": "El hielo, el agua y el vapor parecen distintos y rigen distintas máquinas, pero todos son H2O. El universo entero es H2O cósmica.",
    "ConexionDoctrinal": ["Monismo Trincadista", "Unidad de Sustancia", "Fin del Dualismo"],
    "NodosSimapticos": ["H2O Cósmica"]
  },
  "3011: TODO ES MAGNETISMO ESPIRITUAL": {
    "PilotoDeCoherencia": "El cuarto pilar y conclusión. La confirmación rotunda de que no existe fuerza mecánica aislada del impulso inteligente del espíritu.",
    "CitaInelutable": "TODO ES MAGNETISMO ESPIRITUAL",
    "EjemploPedagogico": "No hay un imán muerto atrayendo hierro; hay fluidos en movimiento por leyes inteligentes, todo es empujado por el espíritu vital.",
    "ConexionDoctrinal": ["Fuerza Vital", "Omnipresencia Magnética"],
    "NodosSimapticos": []
  },
  "3018: APÉNDICE: I": {
    "PilotoDeCoherencia": "Axioma del Orden Cósmico Inquebrantable. Cada ley y cada forma ocupan su puesto gravídico en el espacio con 'sincrónica y cronométrica armonía'. Nada estorba y todo se complementa bajo el régimen inalterable del gobierno del Universo.",
    "CitaInelutable": "Todo tiene su ley, y cada ley, por gravitación ocupa su puesto en el espacio... Nada se estorba. Todo a todo se complementa. Este es el régimen del gobierno del Universo.",
    "EjemploPedagogico": "El cosmos no es un accidente de tráfico espacial; es una sinfónica donde cada planeta y cada espíritu entra exactamente en el compás que le toca sin desafinar.",
    "ConexionDoctrinal": ["Gobierno del Universo", "Armonía Sincrónica", "Ley de Gravitación Espiritual"],
    "NodosSimapticos": ["Sinfónica Cósmica", "Orden Inquebrantable"]
  },
  "3110: ES UNA CONCUPISCENCIA. Entonces, RELIGIÓN ES, UN CONJUNTO DE PASIONES": {
    "PilotoDeCoherencia": "La sentencia matemática contra la Religión. Trincado formula una ecuación filosófica implacable: la religión no es divinidad, es un conjunto de pasiones humanas elevadas a 'concupiscencia', cuyo símbolo de concentración es un 'ente o artefacto' inventado al que llaman Dios.",
    "CitaInelutable": "RELIGIÓN ES, UN CONJUNTO DE PASIONES que se eleva a concupiscencia, simbolizada en un ENTE O ARTEFACTO que concentra las pasiones... cuyo ente o artefacto, será su DIOS.",
    "EjemploPedagogico": "Si juntas el miedo, la ambición, la culpa y la lujuria de una masa ignorante, y las metes en un molde de yeso o madera, ese molde es lo que la religión llama 'Dios'. No es el Creador, es el espejo de sus miedos.",
    "ConexionDoctrinal": ["Definición de Religión", "Dios como Artefacto de Pasión", "Concupiscencia"],
    "NodosSimapticos": ["Dios de Molde", "Conjunto de Pasiones"]
  },
  "3344: porque están vivos: Los Electrones.": {
    "PilotoDeCoherencia": "La revelación de la vida atómica. Trincado se ríe del hermetismo de los tubos de ensayo. Los elementos aparentemente en reposo (la materia inerte) escapan y mutan porque las partículas que los forman (electrones) están vivas.",
    "CitaInelutable": "Parece que se burlan del experimentador. Tienen esos cuerpos en reposo aparente... pero tocan cualquier elemento y el hermetismo se desmiente... porque están vivos: Los Electrones.",
    "EjemploPedagogico": "El químico cree tener encerrado polvo inerte en un tubo; pero es como encerrar pulgas invisibles. No son piedras, son entidades diminutas con vida vibratoria (electrones/espíritus naturales).",
    "ConexionDoctrinal": ["Vida del Electrón", "Falsa Materia Inerte", "Dinámica Subatómica"],
    "NodosSimapticos": ["Pulgas Electrónicas", "Vida Atómica"]
  },
  "3354: átomos.": {
    "PilotoDeCoherencia": "La elevación de las ciencias físicas. Al observar la transmutación atómica, el experimentador queda atónito. Trincado afirma que esos electrones impalpables son científicamente los 'agentes de la Vida', confirmando el pampsiquismo trincadista desde la física de partículas.",
    "CitaInelutable": "Atónito, el hombre experimentador, queda un instante perplejo... y esos seres impalpables (que ya llaman electrones) son, por fuerza científica, los agentes de la Vida.",
    "EjemploPedagogico": "El científico mira por el microscopio y cree ver física cuántica. El Maestro mira por el mismo microscopio y le dice: 'No es solo física, estás viendo los engranajes vivos de la inteligencia universal'.",
    "ConexionDoctrinal": ["Agentes de la Vida", "Electrones como Inteligencia", "Unión Ciencia-Espíritu"],
    "NodosSimapticos": ["Engranajes Vivos"]
  },
  "3369: fugaces y juguetones electrones.": {
    "PilotoDeCoherencia": "El Matrimonio Eterno de la Física. Al observar el comportamiento 'juguetón' y fugaz de los electrones y su relación con la electricidad, Trincado anuncia la prueba definitiva e indubitable de la unión inquebrantable entre 'Espiritismo y Electricidad'.",
    "CitaInelutable": "Tras de este punto... ¿cómo se dudará del matrimonio eterno que nosotros pudimos descubrir, 'Espiritismo y Electricidad'?... los fugaces y juguetones electrones.",
    "EjemploPedagogico": "Electricidad no es solo la corriente en los cables; es la voluntad espiritual corriendo por los cables invisibles de la materia universal. Es el matrimonio perfecto: la Vida (espíritu) manejando a su vehículo (electricidad).",
    "ConexionDoctrinal": ["Matrimonio Eterno: Espiritismo y Electricidad", "Naturaleza Espiritual de la Electricidad"],
    "NodosSimapticos": ["Matrimonio Cósmico", "Vehículo Eléctrico del Alma"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Dios como Artefacto (Concupiscencia)": {
    "Definición": "Concepto filosófico-sociológico trincadista. El 'Dios' de las religiones es expuesto científicamente no como el Creador (Eloí), sino como un ente imaginario o artefacto idolátrico construido por la concentración de las pasiones y concupiscencias humanas (miedo, odio, venganza).",
    "Contexto": "Apéndice Científico de El Magnetismo en su Origen.",
    "Conexiones": ["Religión como Pasión", "Antidogmatismo", "Falso Dios"],
    "Obras": ["El Magnetismo en su Origen", "Filosofía Austera Racional"]
  },
  "Matrimonio Eterno (Espiritismo y Electricidad)": {
    "Definición": "El axioma físico-espiritual supremo que declara la inseparabilidad de la fuerza eléctrica y la voluntad espiritual. Establece que los electrones no son materia ciega, sino agentes vivos ('espíritus naturales') que ejecutan la vida universal.",
    "Contexto": "Apéndice Científico de El Magnetismo en su Origen.",
    "Conexiones": ["Electrones Vivos", "Agentes de la Vida", "Unidad Sustancial"],
    "Obras": ["El Magnetismo en su Origen"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 11 nodos PURA CALIDAD 1:1 de El Magnetismo en su Origen (Batch 8) y 2 términos sinápticos.');
