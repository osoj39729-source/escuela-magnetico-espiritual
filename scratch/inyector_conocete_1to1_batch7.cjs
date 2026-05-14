const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Conócete a ti mismo (Batch 7 - Bien, Mal y Civilización)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "7572: ¿DÓNDE ESTÁ LA MEMORIA?": {
    "PilotoDeCoherencia": "La memoria no reside en el cerebro físico, sino en los fluidos del alma. El cerebro es solo el teclado que el espíritu pulsa para evocar recuerdos. La memoria animal es instintiva y fugaz; la conciencia espiritual es el archivo eterno que guarda la esencia de todas nuestras existencias pasadas.",
    "CitaInelutable": "La memoria es del alma; la conciencia es del espíritu.",
    "EjemploPedagogico": "Es como un fonógrafo: el disco (alma) tiene grabada la música, la aguja (memoria) recorre los surcos y el altavoz (cerebro) proyecta el sonido. El espíritu es quien elige qué disco poner y cuándo escucharlo.",
    "ConexionDoctrinal": ["Memoria vs Conciencia", "Archivo del Alma", "Teclado Cerebral"],
    "NodosSimapticos": ["Fonógrafo del Alma", "Disco de Recuerdos", "Teclado de la Carne"]
  },
  "7647: EL BIEN Y EL MAL: LÍMITES DE LA LEY": {
    "PilotoDeCoherencia": "El 'mal' no existe como entidad; es solo el nombre que damos al estancamiento, al error o a la acción fuera de la ley de amor. El 'bien' es el cumplimiento del deber. Lo que hoy es bien, mañana puede ser mal si el espíritu ya ha progresado y debería estar en un grado superior. Todo es relativo al progreso.",
    "CitaInelutable": "El mal es la sombra de la ignorancia; el bien es la luz de la ley.",
    "EjemploPedagogico": "Es como subir una escalera: estar en el primer peldaño está bien para quien acaba de empezar. Pero quedarse en el primero cuando ya deberías estar en el décimo, es un 'mal' porque detiene tu ascenso. No te detengas.",
    "ConexionDoctrinal": ["Bien y Mal", "Relatividad del Progreso", "Estancamiento"],
    "NodosSimapticos": ["Sombra de Ignorancia", "Peldaños de Ley", "Estancamiento del Ser"]
  },
  "7845: EL ARCA DE LA ALIANZA Y EL CAMBIO": {
    "PilotoDeCoherencia": "Desmitificamos el 'Arca' como un periodo de purificación y cambio magnético, no como un cofre de madera. Es el momento en que el espíritu salda deudas viejas para entrar en una nueva alianza con la ley. El 'arca' es el refugio de la verdad en medio de la tempestad del error religioso.",
    "CitaInelutable": "La verdadera arca es el corazón del hombre que guarda la ley de amor.",
    "EjemploPedagogico": "Es como una caja fuerte que guarda los planos de una nueva ciudad mientras la vieja se quema. El arca no salvó animales de carne, salvó las ideas de luz que debían poblar el mundo nuevo.",
    "ConexionDoctrinal": ["Desmitificación", "Alianza", "Purificación"],
    "NodosSimapticos": ["Refugio de Verdad", "Tempestad del Error", "Caja Fuerte de Ideas"]
  },
  "8162: PROGRESO Y CIVILIZACIÓN": {
    "PilotoDeCoherencia": "La civilización es el resultado material del progreso espiritual. Una sociedad que tiene máquinas pero no tiene amor, no es civilizada, es rústica con tecnología. La verdadera civilización comienza cuando el hombre respeta al hombre y reconoce en él a un hermano y a un dios en potencia.",
    "CitaInelutable": "No hay civilización sin fraternidad, ni progreso sin justicia.",
    "EjemploPedagogico": "Es como una casa con electricidad y mármol pero donde los habitantes se matan entre sí. Eso no es un hogar, es una jaula de lujo. La civilización es el hogar donde reina la paz y el estudio.",
    "ConexionDoctrinal": ["Civilización Racional", "Fraternidad", "Justicia"],
    "NodosSimapticos": ["Jaula de Lujo", "Hogar de Paz", "Rústico Tecnológico"]
  },
  "8247: EL FIN DE LAS SOCIEDADES PARCIALES": {
    "PilotoDeCoherencia": "Las naciones, sectas y partidos son 'sociedades parciales' que dividen a la humanidad. Tienen un término fatal: deben morir para que nazca la Comuna Universal. El patriotismo estrecho es una forma de egoísmo colectivo. Solo la sociedad humana total es legítima ante el Creador.",
    "CitaInelutable": "Las sociedades parciales son los escombros sobre los que se levantará la Comuna.",
    "EjemploPedagogico": "Es como un rompecabezas: cada pieza (nación) por separado no dice nada. Solo cuando todas se unen, se ve la imagen completa. Tira el marco de la pieza y quédate con la imagen de la humanidad.",
    "ConexionDoctrinal": ["Sociedades Parciales", "Comuna Universal", "Antinacionalismo"],
    "NodosSimapticos": ["Escombros de Naciones", "Rompecabezas Humano", "Egoísmo Colectivo"]
  },
  "8379: LA COMUNA: PERFECCIÓN PERSEGUIDA": {
    "PilotoDeCoherencia": "La Comuna es el estado de perfección al que tiende toda sociedad humana por ley de afinidad. Es el régimen donde la justicia es natural y el amor es la única ley. No es una utopía, es la consecuencia matemática del progreso de los espíritus. El que teme a la Comuna es porque aún tiene deudas con la justicia.",
    "CitaInelutable": "La comuna es la meta fatal de la evolución social.",
    "EjemploPedagogico": "Es como la madurez de un hombre: después de la infancia (primitivismo) y la adolescencia (guerras de naciones), llega la madurez (Comuna). Nadie puede evitar crecer; nadie puede evitar la Comuna.",
    "ConexionDoctrinal": ["Comuna", "Evolución Social", "Madurez"],
    "NodosSimapticos": ["Madurez de Humanidad", "Meta Fatal", "Justicia Natural"]
  },
  "8789: LA UNIÓN DE PERIS Y FULÓ": {
    "PilotoDeCoherencia": "Narramos la historia de las primeras parejas (Peris y Fuló) como el origen de la organización social basada en el cariño y el trabajo. No hubo pecado original, sino el despertar del instinto de conservación transformado en amor familiar. La Comuna tiene sus raíces en este primer acto de solidaridad.",
    "CitaInelutable": "Peris y Fuló: los primeros obreros del amor familiar.",
    "EjemploPedagogico": "Es como dos chispas que se unen para encender un fuego en una noche fría. De ese fuego (familia) nació la luz de la sociedad. Cuida el fuego original que es la solidaridad entre los seres.",
    "ConexionDoctrinal": ["Origen Social", "Amor Familiar", "Solidaridad"],
    "NodosSimapticos": ["Chispas de Amor", "Obreros del Hogar", "Fuego de Sociedad"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Bien y Mal": {
    "Definición": "Conceptos relativos al grado de progreso: el Bien es el cumplimiento de la ley de amor y progreso; el Mal es el estancamiento, la ignorancia o la acción retrógrada.",
    "Contexto": "Definición ética en Conócete a ti mismo.",
    "Conexiones": ["Progreso", "Ley", "Ignorancia"],
    "Obras": ["Conócete a ti mismo", "Filosofía Austera Racional"]
  },
  "Sociedades Parciales": {
    "Definición": "Organizaciones humanas limitadas (naciones, religiones, partidos) que fragmentan la unidad de la familia universal y que están destinadas a desaparecer.",
    "Contexto": "Crítica sociológica en Conócete a ti mismo.",
    "Conexiones": ["Comuna", "División", "Egoísmo Colectivo"],
    "Obras": ["Conócete a ti mismo", "Primer Rayo de Luz"]
  },
  "Unión de Peris y Fuló": {
    "Definición": "Referencia a las primeras parejas humanas cuya unión basada en la afinidad y el trabajo mutuo dio origen a la familia y a la primera organización social.",
    "Conexiones": ["Familia", "Origen", "Solidaridad"],
    "Obras": ["Conócete a ti mismo", "Buscando a Dios"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 7 nodos 1:1 de Conócete a ti mismo (Batch 7 - Ética y Sociedad) y 3 términos sinápticos.');
