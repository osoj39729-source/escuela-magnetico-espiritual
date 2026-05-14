const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 20)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "17505: EL SILOGISMO RACIONAL": {
    "PilotoDeCoherencia": "El silogismo es la cadena del razonamiento. De una verdad universal y una particular, el espíritu extrae una conclusión necesaria. Pero advertimos: el silogismo es peligroso si las premisas son falsas. Los clérigos lo han usado para 'demostrar' mentiras. En Mi Escuela, el silogismo debe basarse en hechos de la naturaleza.",
    "CitaInelutable": "El silogismo es el paso firme de la razón desde lo conocido hacia lo nuevo.",
    "EjemploPedagogico": "1. Todo espíritu es eterno. 2. Tú eres un espíritu. 3. Luego, tú eres eterno. Este es un silogismo de luz. Si cambias la primera premisa por una mentira, toda la cadena se rompe.",
    "ConexionDoctrinal": ["Silogismo", "Razonamiento", "Lógica"],
    "NodosSimapticos": ["Cadena de Razón", "Premisas de Verdad", "Paso Firme"]
  },
  "17785: EL DILEMA Y SUS TRAMPAS": {
    "PilotoDeCoherencia": "El dilema es un arma de doble filo. Presenta dos opciones que parecen agotar la realidad. Denunciamos los dilemas falsos de la teología que omiten el 'término medio'. Para que un dilema sea legítimo, las opciones deben ser verdaderamente excluyentes y completas. No te dejes acorralar por dilemas de cartón.",
    "CitaInelutable": "El dilema es la encrucijada donde la lógica pone a prueba la agudeza del espíritu.",
    "EjemploPedagogico": "Los escolásticos decían: 'O sabes que no sabes, o no sabes que no sabes'. Es una trampa para burlarse del buscador. Nosotros respondemos con la acción del estudio, que rompe el dilema estéril.",
    "ConexionDoctrinal": ["Dilema", "Sofismas", "Escolástica"],
    "NodosSimapticos": ["Encrucijada Lógica", "Dilemas de Cartón", "Término Medio"]
  },
  "18065: LA CORRECCIÓN A SÓCRATES": {
    "PilotoDeCoherencia": "Sócrates decía 'Solo sé que nada sé'. Es una humildad excesiva que puede llevar al escepticismo. Yo digo: El sabio sabe que nada sabe de lo infinito, pero sabe estudiar, y al estudiar, ¡Sabe! La obligación del espíritu no es ignorar lo que sabe, sino usar lo que sabe para saber más.",
    "CitaInelutable": "El sabio nada sabe, pero sabe estudiar y por eso sabe.",
    "EjemploPedagogico": "Un niño no sabe leer, pero sabe que puede aprender. Cuando aprende, ya sabe algo real. No te quedes en el 'nada sé'; entra en el 'sé estudiar' para llegar al 'ya sé'.",
    "ConexionDoctrinal": ["Sócrates", "Estudio", "Sabiduría Real"],
    "NodosSimapticos": ["Saber Estudiar", "Más allá de Sócrates", "Obligación de Saber"]
  },
  "18335: LA OBLIGACIÓN DEL ESTUDIO": {
    "PilotoDeCoherencia": "El estudio no es un pasatiempo, es una obligación del espíritu encarnado. Ignorar las leyes de la vida teniendo la capacidad de comprenderlas es una falta de justicia hacia uno mismo y hacia la humanidad. El estudio austero es la oración real que Eloí acepta: el esfuerzo de entender su obra.",
    "CitaInelutable": "Estudiar es el deber sagrado de quien quiere ser libre.",
    "EjemploPedagogico": "Es como recibir una herramienta compleja de regalo: tienes la obligación de leer el manual para no romperla y para que te sea útil. La vida es la herramienta; la Filosofía Austera es el manual.",
    "ConexionDoctrinal": ["Estudio Austero", "Deber", "Libertad"],
    "NodosSimapticos": ["Deber de Estudiar", "Oración del Esfuerzo", "Manual de Vida"]
  },
  "18605: EL SILOGISMO COMPUESTO": {
    "PilotoDeCoherencia": "Analizamos las estructuras complejas del razonamiento. El espíritu puede encadenar varios juicios para llegar a verdades profundas. La lógica compuesta nos permite desentrañar las marañas del error social y religioso. La claridad debe mantenerse en cada eslabón de la cadena.",
    "CitaInelutable": "La lógica compuesta es la red que captura las verdades más esquivas.",
    "EjemploPedagogico": "Es como un puente de varios arcos: cada arco sostiene al siguiente. Si todos los arcos están bien construidos sobre la roca de la razón, el puente aguantará el peso de cualquier duda.",
    "ConexionDoctrinal": ["Lógica Compleja", "Estructura", "Certeza"],
    "NodosSimapticos": ["Red de Verdades", "Puente de Arcos", "Cadena de Juicios"]
  },
  "18875: EL DILEMA ESCOLÁSTICO": {
    "PilotoDeCoherencia": "Exponemos el ejemplo de los escolásticos para que el estudiante vea cómo se usaba la lógica para el malabarismo intelectual sin fondo moral. Mi Escuela usa la lógica para la vida, no para la vanidad de las cátedras. Denunciamos el uso del dilema como herramienta de opresión mental.",
    "CitaInelutable": "La lógica escolástica es un laberinto sin salida; la lógica racional es un camino al sol.",
    "EjemploPedagogico": "Los escolásticos son como malabaristas que juegan con cuchillos en la oscuridad: impresionan pero no iluminan. Nosotros encendemos la luz y guardamos los cuchillos para trabajar en el taller.",
    "ConexionDoctrinal": ["Escolástica", "Crítica", "Uso de la Lógica"],
    "NodosSimapticos": ["Malabarismo Mental", "Laberinto Escolástico", "Camino al Sol"]
  },
  "19145: LA EXCLUSIÓN DE TÉRMINOS CONTRARIOS": {
    "PilotoDeCoherencia": "Para que un juicio sea legítimo, los términos deben excluirse o incluirse con precisión. No puede haber confusión entre lo que es Ley y lo que es capricho. El espíritu debe afinar su capacidad de distinción para no llamar 'amor' a la pasión o 'justicia' a la venganza.",
    "CitaInelutable": "La distinción clara es la madre de la justicia en el pensamiento.",
    "EjemploPedagogico": "Es como separar el trigo de la paja: el trigo alimenta, la paja no. Si los mezclas en el pan, dañarás a quien lo coma. Separa con rigor la verdad de la apariencia.",
    "ConexionDoctrinal": ["Distinción", "Precisión Lógica", "Justicia"],
    "NodosSimapticos": ["Distinción Clara", "Trigo y Paja", "Rigor del Pensamiento"]
  },
  "19415: EL SILOGISMO DISYUNTIVO": {
    "PilotoDeCoherencia": "El razonamiento disyuntivo nos pone ante elecciones reales. 'O el espíritu es eterno, o la vida es un absurdo'. La lógica racional demuestra la primera opción por los hechos y la ley de causalidad. La disyunción nos obliga a tomar partido por la Verdad.",
    "CitaInelutable": "La disyunción lógica es el llamado a la definición del espíritu.",
    "EjemploPedagogico": "Es una bifurcación en el camino: o vas a la derecha (luz) o a la izquierda (sombra). No puedes ir por los dos a la vez. Elige el camino que resiste la prueba de la razón.",
    "ConexionDoctrinal": ["Elección", "Causalidad", "Definición"],
    "NodosSimapticos": ["Bifurcación Lógica", "Llamado a Definirse", "Opción de Verdad"]
  },
  "19685: LA LEGITIMIDAD DEL RAZONAMIENTO": {
    "PilotoDeCoherencia": "Un razonamiento es legítimo solo cuando sus fundamentos son inamovibles. El fundamento de Mi Escuela es Eloí y su Ley de Amor. Cualquier razonamiento que viole el amor o la igualdad, es ilegítimo, por muy 'lógico' que parezca en su forma externa.",
    "CitaInelutable": "La legitimidad de la lógica reside en su armonía con la Ley de Amor.",
    "EjemploPedagogico": "Puedes construir un edificio perfecto geométricamente, pero si lo haces sobre arena movediza, se caerá. La arena movediza son los dogmas; la roca es el Amor Universal.",
    "ConexionDoctrinal": ["Legitimidad", "Ley de Amor", "Fundamentos"],
    "NodosSimapticos": ["Lógica de Amor", "Roca del Fundamento", "Armonía con la Ley"]
  },
  "19955: EL SABIO QUE NADA SABE": {
    "PilotoDeCoherencia": "Reafirmamos la posición del sabio frente al infinito. La humildad no es ignorancia, es el reconocimiento de la inmensidad de la obra del Padre. Pero esa humildad se convierte en potencia cuando el sabio toma el libro del estudio. No somos ignorantes, somos eternos estudiantes de la Luz.",
    "CitaInelutable": "Reconocer que nada se sabe es abrir la puerta a saberlo todo por el estudio.",
    "EjemploPedagogico": "Es como un viajero ante un océano infinito: sabe que no puede beberse todo el océano, pero sabe navegar y sabe que cada gota de agua que estudia le habla de todo el mar. Sé un navegante del saber.",
    "ConexionDoctrinal": ["Humildad Racional", "Infinito", "Progreso Eterno"],
    "NodosSimapticos": ["Navegante del Saber", "Puerta del Estudio", "Eterno Estudiante"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Saber Estudiar": {
    "Definición": "La capacidad metodológica del espíritu para aplicar la razón y la observación a los hechos de la vida, convirtiendo la ignorancia inicial en conocimiento veraz y progreso.",
    "Contexto": "Crítica a Sócrates en Filosofía Austera Racional.",
    "Conexiones": ["Sabiduría", "Estudio Austero", "Razón"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Silogismo Racional": {
    "Definición": "Estructura lógica de tres proposiciones donde la conclusión se deriva necesariamente de la relación entre una verdad universal y una particular, siempre basada en leyes naturales.",
    "Contexto": "Lógica en Filosofía Austera Racional.",
    "Conexiones": ["Razonamiento", "Lógica", "Verdad"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Dilema Escolástico": {
    "Definición": "Forma de razonamiento falaz utilizada por la teología antigua para atrapar al buscador en contradicciones aparentes, omitiendo frecuentemente el término medio racional.",
    "Conexiones": ["Sofismas", "Escolástica", "Término Medio"],
    "Obras": ["Filosofía Austera Racional", "El Espiritismo en su Asiento"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Filosofía Austera Racional (Batch 20) y 3 términos sinápticos.');
