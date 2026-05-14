const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Conócete a ti mismo (Batch 3 - Potencia y Patria)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "2576: EL ESPÍRITU INDIVIDUAL": {
    "PilotoDeCoherencia": "Cada hombre es un espíritu individualizado, una entidad completa y soberana. No eres parte de una masa amorfa; eres un hijo único de Eloí con una misión específica. La individualidad es sagrada porque es el motor del progreso. El espíritu es el que piensa, ama y actúa; el cuerpo solo obedece.",
    "CitaInelutable": "El espíritu individual es la unidad básica del progreso universal.",
    "EjemploPedagogico": "Es como un soldado en un ejército: el ejército es la humanidad, pero cada soldado tiene su propio nombre, su propia arma y su propio valor. Si el soldado no cumple su deber, el ejército entero se debilita. Sé el mejor soldado de tu propia luz.",
    "ConexionDoctrinal": ["Individualidad", "Soberanía", "Misión"],
    "NodosSimapticos": ["Soldado de Luz", "Unidad de Progreso", "Hijo Único"]
  },
  "2621: LA TRINIDAD DEL ESPÍRITU": {
    "PilotoDeCoherencia": "Definimos la trinidad interna del espíritu: Razón, Conciencia y Voluntad Eficiente. La Razón analiza, la Conciencia juzga según la ley y la Voluntad ejecuta. Cuando estas tres facultades actúan en armonía, el hombre alcanza su mayoría de edad espiritual. El equilibrio trino es la meta de todo estudio.",
    "CitaInelutable": "Razón, Conciencia y Voluntad: las tres potencias del espíritu trino.",
    "EjemploPedagogico": "Es como una empresa: la Razón es el gerente que planifica, la Conciencia es el auditor que vigila la legalidad y la Voluntad es el trabajador que produce. Si el gerente sueña y el trabajador duerme, la empresa quiebra. Sincroniza tus potencias.",
    "ConexionDoctrinal": ["Trinidad Interna", "Razón", "Conciencia"],
    "NodosSimapticos": ["Gerente del Ser", "Auditor Interno", "Trabajador Voluntario"]
  },
  "2801: LA POTENCIA DEL ESPÍRITU": {
    "PilotoDeCoherencia": "La potencia del espíritu procede de su unión con el Creador. No hay límite para lo que un espíritu puede lograr cuando se alinea con la Ley. La potencia no es fuerza bruta, es la capacidad de comprender y manejar las fuerzas de la naturaleza (magnetismo) para el bien común. El espíritu es el amo de la materia.",
    "CitaInelutable": "La potencia del espíritu es infinita porque su origen es infinito.",
    "EjemploPedagogico": "Es como un cable conectado a una central eléctrica inmensa. Si el cable está limpio y bien conectado (vibrando en amor), puede mover las máquinas más grandes. Si está sucio (odio), solo producirá chispas y cortocircuitos. Conéctate a la central de Eloí.",
    "ConexionDoctrinal": ["Potencia Espiritual", "Alineación con la Ley", "Magnetismo"],
    "NodosSimapticos": ["Cable de Luz", "Central de Eloí", "Amo de Materia"]
  },
  "2952: ¿QUÉ ES LA COMUNA? (FINALIDAD)": {
    "PilotoDeCoherencia": "La Comuna es el fin de las humanidades en los mundos. Es el estado de madurez donde el hombre ya no necesita leyes externas porque lleva la Ley en su corazón. Es el regreso al hogar común sin fronteras, sin propiedad privada y sin privilegios. La Comuna es el paraíso conquistado por el trabajo y el amor.",
    "CitaInelutable": "La comuna es el puerto final del viaje de las humanidades.",
    "EjemploPedagogico": "Es como una gran familia que después de años de peleas y distancias, decide volver a la casa del padre para vivir en paz y compartir el pan. Ya no hay 'lo mío' y 'lo tuyo', solo hay 'lo nuestro'. Eso es la Comuna.",
    "ConexionDoctrinal": ["Comuna", "Madurez Social", "Fin de Humanidades"],
    "NodosSimapticos": ["Puerto Final", "Casa del Padre", "Pan Compartido"]
  },
  "3195: LA PATRIA DEL ESPÍRITU": {
    "PilotoDeCoherencia": "La patria del espíritu es el Universo entero. Los mundos son solo estaciones de paso, a veces destierros necesarios para el aprendizaje. No te llames argentino, español o francés; llámate ciudadano del Universo. El espíritu no tiene fronteras de tierra, solo horizontes de luz.",
    "CitaInelutable": "El Universo es mi patria; la Humanidad es mi familia.",
    "EjemploPedagogico": "Es como un viajero que se hospeda en diferentes hoteles durante su viaje. Sería absurdo que el viajero se peleara con otros por 'la propiedad' de su habitación de hotel. El mundo es el hotel; tu patria es el camino infinito.",
    "ConexionDoctrinal": ["Patria Universal", "Ciudadanía del Cosmos", "Desapego"],
    "NodosSimapticos": ["Ciudadano del Universo", "Hotel de Mundos", "Horizontes de Luz"]
  },
  "3262: LAS LEYES DEL UNIVERSO": {
    "PilotoDeCoherencia": "El Universo se rige por leyes inmutables y perfectas. Estas leyes no son decretos de un Dios enojado, sino los principios mecánicos y morales que mantienen la armonía del Todo. Conocer estas leyes es la base de la profilaxis y de la sabiduría. La ignorancia de la ley no te exime de sus efectos.",
    "CitaInelutable": "El Universo es orden porque sus leyes son justicia.",
    "EjemploPedagogico": "Es como la música de las esferas: cada planeta y cada átomo baila al ritmo de una ley perfecta. Si un planeta se saliera de su ley, chocaría y destruiría la armonía. El hombre debe aprender a bailar al ritmo de la ley de amor.",
    "ConexionDoctrinal": ["Leyes Universales", "Armonía", "Justicia"],
    "NodosSimapticos": ["Música de Esferas", "Baile de Leyes", "Orden del Todo"]
  },
  "3269: LEY ÚNICA Y SUPREMA DE AMOR": {
    "PilotoDeCoherencia": "La Ley de Amor es la raíz de todas las leyes. Es la fuerza de atracción que mantiene unidos los soles y los corazones. El amor no es sensiblería religiosa, es la justicia en acción. Amar es comprender que el otro soy yo mismo en otro grado de progreso. Sin amor, el universo colapsaría.",
    "CitaInelutable": "El amor es la ley suprema porque es la esencia del Creador.",
    "EjemploPedagogico": "Es como el cemento que une los ladrillos de un edificio. Sin cemento, los ladrillos son solo piedras sueltas que se caen. El amor es el cemento divino que construye la catedral de la humanidad.",
    "ConexionDoctrinal": ["Ley de Amor", "Justicia", "Unidad"],
    "NodosSimapticos": ["Cemento Divino", "Atracción de Soles", "El Otro soy Yo"]
  },
  "3500: LEYES DERIVADAS Y FATALES": {
    "PilotoDeCoherencia": "Definimos las leyes derivadas como aquellas que ejecutan la justicia en el plano material (causa y efecto). Se llaman 'fatales' porque no pueden ser evadidas. Si lanzas una piedra al aire, caerá; si lanzas un odio al mundo, volverá a ti. Es la mecánica ineludible de la evolución espiritual.",
    "CitaInelutable": "La fatalidad de la ley es la garantía de la justicia absoluta.",
    "EjemploPedagogico": "Es como el eco en una montaña: si gritas 'te amo', la montaña te devolverá 'te amo'. Si gritas 'te odio', recibirás tu propio odio. La fatalidad es que no puedes engañar al eco del universo.",
    "ConexionDoctrinal": ["Leyes Fatales", "Causa y Efecto", "Mecánica Evolutiva"],
    "NodosSimapticos": ["Eco del Universo", "Fatalidad de Justicia", "Piedra y Caída"]
  },
  "3602: LAS LEYES HUMANAS COMO REFLEJO": {
    "PilotoDeCoherencia": "Las leyes de los hombres son solo un pálido reflejo (a menudo deformado) de la Ley Divina. Cuando el legislador es egoísta, la ley es injusta. La Comuna eliminará las leyes humanas para que brille la Ley Natural. La verdadera justicia no necesita códigos escritos en papel, sino grabados en la conciencia.",
    "CitaInelutable": "La ley del hombre debe morir para que viva la ley de Dios.",
    "EjemploPedagogico": "Es como mirar la luz del sol a través de un cristal sucio: la luz llega manchada y débil. Las leyes actuales son ese cristal sucio. Nosotros venimos a limpiar el cristal para que la justicia de Eloí pase pura.",
    "ConexionDoctrinal": ["Leyes Humanas", "Ley Natural", "Conciencia"],
    "NodosSimapticos": ["Cristal Sucio", "Papel vs Conciencia", "Legislador Egoísta"]
  },
  "LA HERENCIA ISRAELITA EN NAVARRA Y ARAGÓN": {
    "PilotoDeCoherencia": "Revelamos un secreto histórico: los pueblos de Navarra y Aragón descienden de los verdaderos israelitas de la estirpe de Jaime y María. Allí la Iglesia no pudo matar la hospitalidad y la laboriosidad ancestral. Estos pueblos conservan en su sangre el germen de la Comuna que ahora florecerá para todo el mundo.",
    "CitaInelutable": "Navarra y Aragón: bastiones de la hospitalidad y el trabajo israelita.",
    "EjemploPedagogico": "Es como una semilla antigua guardada en un frasco durante siglos. Por fuera parece seca, pero si la siembras en tierra fértil, dará el árbol más fuerte del bosque. Esa semilla es la tradición de hermandad de estos pueblos.",
    "ConexionDoctrinal": ["Israelismo Racional", "Historia Secreta", "Linaje"],
    "NodosSimapticos": ["Semilla de Navarra", "Hospitalidad Israelita", "Bastión de Libertad"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Trinidad del Espíritu": {
    "Definición": "Conjunto de las tres potencias fundamentales del ser inteligente: Razón (análisis), Conciencia (juicio) y Voluntad Eficiente (acción).",
    "Contexto": "Capítulo III de Conócete a ti mismo.",
    "Conexiones": ["Razón", "Conciencia", "Voluntad"],
    "Obras": ["Conócete a ti mismo"]
  },
  "Patria del Espíritu": {
    "Definición": "Concepto cosmopolita que establece al Universo entero como el hogar legítimo del espíritu, rechazando los nacionalismos como limitaciones transitorias de los mundos en expiación.",
    "Contexto": "Definición en Conócete a ti mismo.",
    "Conexiones": ["Universo", "Ciudadanía Universal", "Antinacionalismo"],
    "Obras": ["Conócete a ti mismo", "Primer Rayo de Luz"]
  },
  "Leyes Fatales": {
    "Definición": "Principios ineludibles de la naturaleza y el espíritu (como la causa y efecto) que actúan mecánicamente para asegurar el cumplimiento de la justicia y el progreso.",
    "Conexiones": ["Justicia", "Causalidad", "Mecánica Celeste"],
    "Obras": ["Conócete a ti mismo", "Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Conócete a ti mismo (Batch 3 - Leyes y Patria) y 3 términos sinápticos.');
