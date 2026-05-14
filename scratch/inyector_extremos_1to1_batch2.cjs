const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/los-extremos-se-tocan_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

const nuevosNodos = {
  "1626: CAPÍTULO QUINTO: Desde Adan hasta Moisés": {
    "PilotoDeCoherencia": "La raza Adámica avanza portando la doctrina de Shet, pero el ambiente terrestre es denso. Moisés aparece como un legislador de choque: su misión es separar al pueblo de la idolatría egipcia usando normas duras. Mi Escuela aclara que Moisés no es el autor de la Ley, sino su restaurador temporal bajo condiciones de barbarie.",
    "CitaInelutable": "Ya va en marcha pujante la raza Adámica; ya llevan por todas partes la doctrina de Shet.",
    "EjemploPedagogico": "Moisés es el guardián de una frontera peligrosa: tiene que poner cercas de hierro (sus mandatos) para que el pueblo no se pierda en el abismo de la superstición de otros pueblos.",
    "ConexionDoctrinal": ["Shet", "Moisés", "Idolatría"],
    "NodosSimapticos": ["Moisés Restaurador", "Idolatría Egipcia", "Restaurador de la Ley"]
  },
  "2340: CAPÍTULO SEXTO: Desde Moisés hasta Jesús": {
    "PilotoDeCoherencia": "Esta etapa prepara el terreno para el primer gran ciclo de luz. Jesús viene a desenmascarar a las castas que se apropiaron de Moisés. Aquí explico cómo la religión comenzó a tejer el 'Velo del Cristo' para ocultar la verdadera identidad del espíritu y su relación directa con Hellí.",
    "CitaInelutable": "Preparar la tierra para tender sobre ella el velo del cristo.",
    "EjemploPedagogico": "Es como si alguien pusiera una cortina opaca frente a una ventana para cobrarle a la gente por contarles qué hay afuera. Jesús vino a rasgar esa cortina.",
    "ConexionDoctrinal": ["Velo del Cristo", "Jesús Histórico", "Casta Sacerdotal"],
    "NodosSimapticos": ["Velo del Cristo", "Casta", "Jesús Nazareno"]
  },
  "3673: CAPÍTULO SÉPTIMO: DESDE JESÚS MISIONERO, HASTA CONSTANTINO EMPERADOR": {
    "PilotoDeCoherencia": "La muerte de Jesús fue el inicio del gran secuestro. Constantino, un emperador sin escrúpulos, vio en el movimiento de Jesús la herramienta perfecta para unificar su imperio. Nace el 'Cristianismo' como religión de estado, enterrando al Jesús hombre bajo el dogma del 'Hijo de Dios'. Es la página negra de la historia espiritual.",
    "CitaInelutable": "Ya tiene su primera página negra escrita el cristo, con todas las agravantes del odio.",
    "EjemploPedagogico": "Imagina que un usurpador se pone el uniforme de un general amado por el pueblo para dar órdenes en su nombre. Constantino se puso el uniforme de Jesús para gobernar a través del miedo.",
    "ConexionDoctrinal": ["Constantino", "Anti-Deificación", "Página Negra"],
    "NodosSimapticos": ["Constantino", "Hijo de Dios Falso", "Secuestro de Jesús"]
  },
  "4392: CAPÍTULO OCTAVO: DESDE CONSTANTINO HASTA GREGORIO VII PAPA": {
    "PilotoDeCoherencia": "Siglos de oscuridad absoluta. La verdad es reemplazada por el canon de los concilios. Gregorio VII reclama para el Papado el poder sobre todos los reinos. Aquí se consuma el 'Secuestro de la Inteligencia': el hombre ya no puede pensar por sí mismo sin permiso del Papa.",
    "CitaInelutable": "Si habríamos de encontrar la verdad en la historia después de Constantino, sería vano empeño.",
    "EjemploPedagogico": "Es la noche cerrada en la que los ciegos guían a otros ciegos hacia el precipicio del dogma. Quien intenta encender una vela (la razón), es quemado con ella.",
    "ConexionDoctrinal": ["Gregorio VII", "Papado", "Secuestro de la Inteligencia"],
    "NodosSimapticos": ["Noche del Espíritu", "Soberanía Papal", "Vano Empeño Histórico"]
  },
  "4536: CAPÍTULO NUEVE: DESDE GREGORIO VII HASTA AMÉRICO VESPUCIO": {
    "PilotoDeCoherencia": "Europa bajo el yugo de los Papas. Guerras de religión, reyes puestos y quitados a capricho del Vaticano. La religión es la dueña de la vida y la muerte. Pero la Ley no duerme y prepara el descubrimiento del Nuevo Mundo para abrir una válvula de escape al espíritu oprimido.",
    "CitaInelutable": "Está sometida la Europa al Imperio de los Papas. Sucédense las guerras de religión.",
    "EjemploPedagogico": "Es una caldera hirviendo donde el Papa aprieta la tapa con todas sus fuerzas. El descubrimiento de América es la válvula que evita que la caldera estalle antes de tiempo.",
    "ConexionDoctrinal": ["Dominio del Dogma", "Válvula de Escape", "Américo Vespucio"],
    "NodosSimapticos": ["Yugo Papal", "Guerras de Religión", "Apertura del Mundo"]
  },
  "4823: CAPÍTULO DÉCIMO: DESDE AMÉRICO VESPUCIO HASTA NAPOLEÓN": {
    "PilotoDeCoherencia": "La Ley no reconoce imposibles. Napoleón aparece como el martillo que rompe las viejas estructuras feudales y religiosas. Aunque sea por la fuerza, la Ley usa a estos hombres para limpiar el camino hacia la modernidad. Es el inicio del fin del absolutismo divino.",
    "CitaInelutable": "La ley no reconoce ni tiene imposibles; y sus agentes... son implacables.",
    "EjemploPedagogico": "Napoleón es como la tormenta que derriba los árboles podridos de un bosque viejo para que pueda crecer hierba nueva. La tormenta es violenta, pero necesaria.",
    "ConexionDoctrinal": ["Napoleón", "Ley de Justicia", "Agentes de la Ley"],
    "NodosSimapticos": ["Martillo de la Ley", "Napoleón", "Fin del Absolutismo"]
  },
  "5159: CAPÍTULO ONCE: DESDE NAPOLEÓN HASTA Pío IX": {
    "PilotoDeCoherencia": "El siglo XIX: el siglo de las luces pero también de grandes lutos. Pío IX intenta detener el progreso con su Syllabus, pero el espíritu humano ya ha despertado. La fricción entre la luz de la ciencia y la sombra del dogma llega a su punto de ignición.",
    "CitaInelutable": "Siglo de las luces, pero también siglo de más lutos por guerras, pestes y hambres.",
    "EjemploPedagogico": "Es el amanecer donde las sombras se alargan más antes de desaparecer. El Syllabus es el último grito de quien sabe que ha perdido la batalla contra la luz.",
    "ConexionDoctrinal": ["Siglo de las Luces", "Pío IX", "Syllabus"],
    "NodosSimapticos": ["Siglo XIX", "Fricción de Luz", "Syllabus"]
  },
  "5302: CAPÍTULO DOCE: DESDE PÍO IX A LA GUERRA DE LOS BALCANES": {
    "PilotoDeCoherencia": "Tras Pío IX, el mundo es un polvorín. Las naciones se arman bajo la influencia de las castas que temen perder el control. La preparación para la catástrofe final es evidente para quien sabe leer las leyes de afinidad y justicia.",
    "CitaInelutable": "Quedaba un rescoldo muy fuerte en todos los estados del mundo.",
    "EjemploPedagogico": "Es el silencio tenso antes de que el primer disparo rompa la calma. Todos saben que viene la tormenta, pero nadie quiere ser el primero en admitir por qué.",
    "ConexionDoctrinal": ["Polvorín Mundial", "Afinidad y Justicia", "Aproximación de Catástrofe"],
    "NodosSimapticos": ["Rescoldo de Guerra", "Polvorín", "Pre-Catástrofe"]
  },
  "5493: CAPÍTULO TRECE: LOS BALCANES, ERAN LA RESISTENCIA DE LOS DOS EXTREMOS.": {
    "PilotoDeCoherencia": "Explico la mecánica del 'Corto Circuito'. Los Balcanes actuaban como el aislante o 'neutral' entre los dos extremos del error. Al quitar este neutral, la colisión fue inevitable. Sin resistencia no hay luz, pero sin el neutral hay explosión.",
    "CitaInelutable": "Los Balcanes eran la resistencia de los dos extremos... quitar el neutral y veréis un terrible fogonazo.",
    "EjemploPedagogico": "Como en un circuito eléctrico, si juntas el positivo y el negativo sin una resistencia que consuma la energía, tienes un incendio. Los Balcanes fueron el punto donde se juntaron los cables sin protección.",
    "ConexionDoctrinal": ["Corto Circuito", "Balkanes como Neutral", "Resistencia de los Extremos"],
    "NodosSimapticos": ["Balkanes", "Aislante", "Corto Circuito"]
  },
  "5733: CAPÍTULO CATORCE: ROMPIERON LA RESISTENCIA Y SE ORIGINÓ LA CATÁSTROFE.": {
    "PilotoDeCoherencia": "La catástrofe de 1914 es la consecuencia matemática de haber roto la resistencia racional. Aquí demuestro cómo la ciencia, al servicio del error, se convierte en arma de destrucción masiva. La Ley de Compensación entra en su fase de liquidación total.",
    "CitaInelutable": "Se rompió la resistencia; no se haría esperar el fogonazo del corto circuito.",
    "EjemploPedagogico": "Es el momento en que la avalancha se desprende: ya no hay forma de pararla con palabras o tratados. Solo queda esperar a que la energía se agote después de destruirlo todo.",
    "ConexionDoctrinal": ["Catástrofe de 1914", "Ley de Compensación", "Ciencia al servicio del Error"],
    "NodosSimapticos": ["Catástrofe 1914", "Fogonazo", "Liquidación Matemática"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Velo del Cristo": {
    "Definición": "Concepto doctrinal que describe la cortina de dogma y deificación que la religión puso sobre la figura de Jesús para ocultar su mensaje de fraternidad humana y soberanía espiritual.",
    "Contexto": "Capítulo VI de Los Extremos se Tocan. Trincado lo define como la herramienta de las castas para secuestrar la verdad.",
    "Conexiones": ["Jesús Histórico", "Constantino", "Dominio del Dogma"],
    "Obras": ["Los Extremos se Tocan", "Buscando a Dios"]
  },
  "Corto Circuito": {
    "Definición": "Metáfora mecánica de la catástrofe histórica que ocurre cuando dos extremos del error colisionan por falta de una resistencia racional o 'neutral'.",
    "Contexto": "Capítulos XIII y XIV de Los Extremos se Tocan. Explica el origen de la Primera Guerra Mundial.",
    "Conexiones": ["Extremos del Error", "Balkanes", "Ley de Compensación"],
    "Obras": ["Los Extremos se Tocan"]
  },
  "Neutral (Histórico)": {
    "Definición": "El factor o región que actúa como aislante entre fuerzas opuestas en conflicto. Su eliminación provoca el 'corto circuito' o colisión de extremos.",
    "Contexto": "Trincado identifica a los Balcanes como el 'neutral' cuya desmembración provocó la Gran Guerra.",
    "Conexiones": ["Balkanes", "Corto Circuito", "Resistencia de los Extremos"],
    "Obras": ["Los Extremos se Tocan"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 (Cap V-XIV) y 3 términos sinápticos.');
