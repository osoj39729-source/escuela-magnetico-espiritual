const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - El Espiritismo en su Asiento (Batch 2 - Libro Primero y Libro Segundo I-IV)
const nuevosNodos = {
  "699: LIBRO 1 - CAPÍTULO II: LO QUE ABARCA EL ESPIRITISMO": {
    "PilotoDeCoherencia": "Axioma absoluto: El Espiritismo es Todo, porque es la Razón. Su alcance no se limita a fenómenos o sesiones, sino que abarca y dirige las Matemáticas, la Geometría y la moral del Universo entero. El hombre llegará a comprenderlo de grado o por fuerza, porque es la ley ineludible de la existencia.",
    "CitaInelutable": "El Espiritismo es, en fin, todo, porque es la razón; y la razón es la matemática suprema del Creador.",
    "EjemploPedagogico": "Pensar que el Espiritismo es solo comunicarse con 'fantasmas' es como pensar que la física cuántica es solo encender un fósforo. El Espiritismo es la gravedad, la luz, el átomo y la ética del universo.",
    "ConexionDoctrinal": ["Totalidad del Espiritismo", "Razón como Matemática", "Alcance Universal"],
    "NodosSimapticos": ["Física del Alma", "Matemática Suprema"]
  },
  "845: LIBRO 1 - CAPÍTULO III: CÓMO SE ESTUDIA EL ESPIRITISMO": {
    "PilotoDeCoherencia": "El método de estudio exige una razón limpia absolutamente de prejuicios. Si hay prejuicio, hay parcialidad, y el Espiritismo rechaza la parcialidad y el error (que son propios de la materia). Se fundamenta en el sistema C.G.S. (Centímetro, Gramo, Segundo) para medir con rigor las leyes espirituales, porque el Creador es pura matemática.",
    "CitaInelutable": "El espiritismo se estudia en todo, por todo y con todo, primando la razón limpia absolutamente de prejuicio.",
    "EjemploPedagogico": "No puedes pesar oro en una balanza descalibrada por óxido. El prejuicio es el óxido de la razón; solo una balanza (mente) limpia puede pesar la Verdad sin error.",
    "ConexionDoctrinal": ["Estudio Racional", "Sistema C.G.S.", "Rechazo del Prejuicio"],
    "NodosSimapticos": ["Balanza Limpia", "Óxido de la Razón"]
  },
  "1078: LIBRO 1 - CAPÍTULO IV: LA NECEDAD DE NEGAR EL ESPIRITISMO": {
    "PilotoDeCoherencia": "El acto de negar la Verdad no altera la Verdad, solo retrasa al necio. Los detractores suelen negar por ignorancia o por cobardía (el miedo a rasgar el crepúsculo y abandonar sus estatus). Pero nadie detiene el progreso: la ley avanza como un 'terrible inmenso rodillo' que aplanará el error sin oír lamentos.",
    "CitaInelutable": "El que niega la verdad, más tarde o más temprano descubre ésta y ve que fue necio en negar lo que no comprendía.",
    "EjemploPedagogico": "Negar el Espiritismo es como pararse en las vías del tren y negar que viene la locomotora. El tren del progreso no te pide permiso, simplemente te aplana.",
    "ConexionDoctrinal": ["Necedad", "El Rodillo de la Ley", "Cobardía Intelectual"],
    "NodosSimapticos": ["Tren del Progreso", "Cobardía Sistémica"]
  },
  "1187: LIBRO 1 - CAPÍTULO V: ELOÍ, MAESTRO ÚNICO": {
    "PilotoDeCoherencia": "Explicación de la cadena jerárquica del conocimiento. Aunque existe solidaridad entre todos los espíritus, los de menor grado piden al de mayor grado, hasta llegar al Único Maestro y autorizador universal: Eloí (el Padre). Esto no viola el libre albedrío, pues la consulta se hace por amor y necesidad de armonía en el pensamiento universal.",
    "CitaInelutable": "Todo el universo es el espiritismo y su maestro, Eloí. Un espíritu pide a otro inmediato, hasta llegar a Eloí, su Padre y único Maestro.",
    "EjemploPedagogico": "Es como una universidad gigante: el alumno de primer año pregunta al de quinto, el de quinto al decano, y el decano al Rector. Eloí es el Rector del Universo.",
    "ConexionDoctrinal": ["Cadena Jerárquica", "Eloí como Rector", "Armonía del Libre Albedrío"],
    "NodosSimapticos": ["Cadena de Sabiduría", "Rector Universal"]
  },
  "1442: LIBRO 2 - CAPÍTULO I: ENEMIGOS DEL ESPIRITISMO": {
    "PilotoDeCoherencia": "En esencia, el Espiritismo no tiene entidades abstractas como enemigos; sus únicos enemigos reales son los dogmas, la supremacía y la ignorancia, encarnados en los hombres que defienden esos errores (sacerdotes, materialistas ciegos). Son entidades efímeras condenadas a desaparecer ante la luz.",
    "CitaInelutable": "El espiritismo no tiene más enemigos que los dogmas, la supremacía y la ignorancia.",
    "EjemploPedagogico": "El sol no tiene 'enemigos', simplemente la oscuridad, la humedad y el moho desaparecen cuando el sol sale. Así desaparecen los dogmas ante el Espiritismo.",
    "ConexionDoctrinal": ["Enemigos del Progreso", "Dogma y Supremacía", "Estultez"],
    "NodosSimapticos": ["Moho del Dogma", "Oscuridad Efímera"]
  },
  "1616-1720: LIBRO 2 - CAPÍTULO II: LOS MÉDIUMS, CUALIDADES Y AISLAMIENTO": {
    "PilotoDeCoherencia": "El médium es definido físicamente como un 'pararrayos' que recoge el ambiente de quienes le rodean. Si el ambiente es malicioso o de discusión, el médium se contamina y su facultad se estorba. El médium debe aislarse de la estultez y debe ser ilustrado para servir de intérprete eficiente a los maestros de luz ('Hablen los médiums y razonen los hombres').",
    "CitaInelutable": "Lo mismo que el pararrayos sobre una altura recoge las descargas atmosféricas, es un médium entre los hombres.",
    "EjemploPedagogico": "El médium es como una radio hiper-sensible: si en la sala hay gritos y discusiones, la radio capta esa estática y solo emite ruido. Requiere el silencio del respeto para sintonizar a los Maestros.",
    "ConexionDoctrinal": ["El Médium Pararrayos", "Sensibilidad Ambiental", "Deber del Silencio"],
    "NodosSimapticos": ["Radio Sensible", "Interferencia Ambiental", "Estática Humana"]
  },
  "1796: LIBRO 2 - CAPÍTULO III: COMUNICACIONES Y MANIFESTACIONES": {
    "PilotoDeCoherencia": "Confirmación del mandato legal. La comunicación de los espíritus superiores no es un capricho ni una violación, es un mandato de la Ley Suprema, prometido a Abraham por Eloí. Los grandes maestros y misioneros están *obligados* a comunicarse para guiar a la tierra hacia la luz del Siglo 36.",
    "CitaInelutable": "Los espíritus están obligados a comunicarse a los hombres. Y más obligados que todos, son los misioneros y maestros.",
    "EjemploPedagogico": "No es que el maestro 'moleste' bajando a enseñar; es su trabajo en la estructura del Universo, así como es trabajo del hermano mayor cuidar y enseñar al menor.",
    "ConexionDoctrinal": ["Deber de Comunicación", "Testamento de Abraham", "Guía Misionera"],
    "NodosSimapticos": ["Mandato de Abraham", "Obligación de Enseñar"]
  },
  "1996: LIBRO 2 - CAPÍTULO IV: CONSECUENCIAS DEL MAL USO": {
    "PilotoDeCoherencia": "La Escuela ya no previene, corrige. El mal uso del Espiritismo (el espiritualismo charlatán o la magia negra) genera una hidrofobia de errores. La memoria de estos desvíos sirve para que en el Día del Juicio (Séptimo Día), los espíritus de luz lleven la 'medicina' (corrección) a los mundos de destierro donde irán los detractores.",
    "CitaInelutable": "No se escribe ya para prevenir, sino para corregir a los detractores y llevarles la medicina a los mundos donde van.",
    "EjemploPedagogico": "La Escuela es el hospital final. Ya no pone carteles de 'Peligro', sino que prepara la medicina amarga que los desterrados tendrán que tragar en su nuevo mundo primitivo.",
    "ConexionDoctrinal": ["Mal Uso del Espiritismo", "Mundos Primitivos de Destierro", "Corrección Severa"],
    "NodosSimapticos": ["Hospital Final", "Medicina para Detractores"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "El Médium Pararrayos": {
    "Definición": "Metáfora y realidad fluídica. El médium actúa como un colector altamente sensible de las cargas mentales y emocionales de su entorno; por ende, requiere de ambientes estrictamente moralizados y sin discusiones para operar de forma pura.",
    "Contexto": "Libro Segundo, Cap. II de El Espiritismo en su Asiento.",
    "Conexiones": ["Mediumnidad", "Ambiente Fluídico", "Aislamiento"],
    "Obras": ["El Espiritismo en su Asiento", "Ley de las Mediumnidades"]
  },
  "Sistema C.G.S. Espiritual": {
    "Definición": "Aplicación de la precisión métrica y matemática (Centímetro, Gramo, Segundo) al estudio de los fenómenos y leyes del Espíritu, ratificando que el Espiritismo es la matemática suprema del Creador y rechaza la fe irracional.",
    "Contexto": "Libro Primero, Cap. III de El Espiritismo en su Asiento.",
    "Conexiones": ["Matemática Suprema", "Razón Limpia", "Estudio Científico"],
    "Obras": ["El Espiritismo en su Asiento"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 8 nodos 1:1 de El Espiritismo en su Asiento (Batch 2 - Libro 1 y 2) y 2 términos sinápticos.');
