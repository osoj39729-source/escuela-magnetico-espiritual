const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 15)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "14787: PÁRRAFO 3º — LOS INSTINTOS — LA FUERZA DEL ORGANISMO": {
    "PilotoDeCoherencia": "Los instintos son las potencias del organismo y del alma que aseguran la vida material. No son malos por sí mismos, son necesarios. El error está en dejar que el instinto gobierne al espíritu. El filósofo debe conocer sus instintos para ponerlos al servicio de la razón y no ser su esclavo.",
    "CitaInelutable": "El instinto es la ley de la materia que el espíritu debe aprender a gobernar.",
    "EjemploPedagogico": "El instinto es como el motor de un coche. Si el motor acelera solo, te estrellas. El espíritu es el conductor que pisa el acelerador o el freno según el camino de la vida.",
    "ConexionDoctrinal": ["Instintos", "Gobierno del Ser", "Materia"],
    "NodosSimapticos": ["Fuerza del Organismo", "Motor Animal", "Leyes de la Carne"]
  },
  "15060: EL INSTINTO DE CONSERVACIÓN": {
    "PilotoDeCoherencia": "La conservación es el primer mandato de la vida biológica. Nos empuja a buscar el pan y el refugio. Denunciamos que este instinto se ha desviado hacia la avaricia y el acaparamiento. En la Comuna, la conservación será colectiva, eliminando el miedo al mañana que hoy embrutece al hombre.",
    "CitaInelutable": "La conservación es el deber de mantener el instrumento del espíritu en condiciones de trabajo.",
    "EjemploPedagogico": "Es el instinto que te hace apartarte de un peligro inminente. Es la voz del cuerpo que pide seguir siendo útil al espíritu. No lo confundas con el miedo egoísta; es amor a la obra del Creador.",
    "ConexionDoctrinal": ["Conservación", "Vida Colectiva", "Deseo de Vivir"],
    "NodosSimapticos": ["Instinto de Conservación", "Cuidado del Instrumento", "Vida sin Miedo"]
  },
  "15330: LA ADQUISIVIDAD Y EL CONTAGIO SOCIAL": {
    "PilotoDeCoherencia": "La adquisividad es el impulso de satisfacer las necesidades del organismo. Pero advertimos: este instinto es altamente contagioso. Al ver a otros acaparar, el instinto dormido en nosotros despierta. El filósofo debe estar alerta para que este despertar no se convierta en robo o injusticia contra el hermano.",
    "CitaInelutable": "La adquisividad despierta al contagio de obrarlos nuestros semejantes.",
    "EjemploPedagogico": "Es como un bostezo: si ves a alguien bostezar, tú también lo haces. Si ves a alguien acumular riquezas, tu instinto de adquisividad quiere hacer lo mismo. Solo la razón puede detener ese 'bostezo' egoísta.",
    "ConexionDoctrinal": ["Adquisividad", "Contagio Social", "Egoísmo"],
    "NodosSimapticos": ["Adquisividad", "Contagio de Instintos", "Despertar del Deseo"]
  },
  "15610: LA MÍMICA EXPRESIVA": {
    "PilotoDeCoherencia": "El cuerpo refleja las sensaciones internas mediante la mímica. Es el lenguaje del alma expresado en el rostro y el gesto. Denunciamos la hipocresía que entrena la mímica para ocultar la verdad del espíritu. La mímica del hombre de la Comuna debe ser transparente y veraz.",
    "CitaInelutable": "La mímica es el espejo exterior de la vibración interna.",
    "EjemploPedagogico": "Si tienes alegría, tus ojos brillan. Si tienes odio, tus cejas se contraen. El cuerpo no sabe mentir; solo el hombre aprende a usar máscaras. Quítate la máscara y deja que tu espíritu hable por tus ojos.",
    "ConexionDoctrinal": ["Mímica", "Transparencia", "Lenguaje Corporal"],
    "NodosSimapticos": ["Mímica Expresiva", "Espejo del Rostro", "Lenguaje del Alma"]
  },
  "15890: EL DOMINIO Y LA SACIEDAD DEL INSTINTO": {
    "PilotoDeCoherencia": "Un instinto puede estar dormido, activo o dominado. Dominar un instinto no es reprimirlo con odio, sino saciarlo según la ley de la razón. Cuando el instinto ha cumplido su función natural y el espíritu lo gobierna, se alcanza la paz orgánica necesaria para el estudio superior.",
    "CitaInelutable": "El instinto dominado es la fuerza del animal al servicio de la luz del ángel.",
    "EjemploPedagogico": "Es como el hambre: si comes lo justo por necesidad, el hambre se calla y te deja pensar. Si comes por gula, el instinto te embrutece. Sacia la necesidad y educa el deseo.",
    "ConexionDoctrinal": ["Dominio Propio", "Saciado de Ley", "Paz Orgánica"],
    "NodosSimapticos": ["Instinto Dominado", "Saciedad de Ley", "Fuerza del Animal"]
  },
  "16160: EL DESPERTAR FATAL POR LA REFLEXIÓN": {
    "PilotoDeCoherencia": "Explicamos el fenómeno del despertar de instintos por resonancia (reflexión). Si alguien actúa bajo un instinto bajo cerca de nosotros, ese movimiento llama a nuestro propio instinto latente. No es casualidad, es ley. Por eso debemos elegir ambientes sanos y ser nosotros mismos ejemplos de luz.",
    "CitaInelutable": "El despertar de un instinto es de ley cuando la reflexión de otro semejante lo llama.",
    "EjemploPedagogico": "Es como un diapasón: si golpeas uno, el otro que está cerca empieza a vibrar en la misma nota aunque nadie lo toque. Sé un diapasón de justicia para que los demás vibren en justicia.",
    "ConexionDoctrinal": ["Resonancia", "Influencia", "Ambiente"],
    "NodosSimapticos": ["Despertar Fatal", "Resonancia Instintiva", "Diapasón del Ser"]
  },
  "16430: LOS INSTINTOS VULGARES Y SU NECESIDAD": {
    "PilotoDeCoherencia": "Señalamos los instintos vulgares (alimentación, defensa) como la base sobre la que se apoya la vida. No los despreciamos, los situamos en su lugar. Sin ellos, el espíritu no podría encarnar. La filosofía austera es práctica y reconoce que el espíritu necesita un cuerpo sano y defendido.",
    "CitaInelutable": "Los instintos vulgares son el sustento de la jaula donde el espíritu mora.",
    "EjemploPedagogico": "Son los cimientos de la casa. No vives en los cimientos, vives en los pisos altos (la razón). Pero si los cimientos fallan, la casa entera se viene abajo. Cuida tus cimientos pero no vivas en el sótano.",
    "ConexionDoctrinal": ["Bases de la Vida", "Jaula del Espíritu", "Necesidades Materiales"],
    "NodosSimapticos": ["Instintos Vulgares", "Cimientos del Ser", "Sustento de la Jaula"]
  },
  "16700: LA LEY DEL MOMENTO DE ACCIÓN": {
    "PilotoDeCoherencia": "Cada instinto tiene su momento de acción en la vida del ser. No todos despiertan a la vez. El espíritu debe estar vigilante para que, cuando llegue el momento de acción de un instinto potente, el juicio racional esté listo para gobernarlo y no ser arrastrado por la tempestad orgánica.",
    "CitaInelutable": "El momento de acción del instinto es la prueba de fuego del juicio racional.",
    "EjemploPedagogico": "Es como las estaciones del año: cada una trae su clima. La primavera del instinto puede ser tormentosa; prepárate en el invierno del estudio para que la tormenta no te destruya.",
    "ConexionDoctrinal": ["Ciclos Vitales", "Vigilancia", "Prueba"],
    "NodosSimapticos": ["Momento de Acción", "Prueba de Fuego", "Estaciones del Espíritu"]
  },
  "16970: EL INSTINTO COMO MEMORIA BIOLÓGICA": {
    "PilotoDeCoherencia": "El instinto es la memoria de la especie grabada en el alma y el cuerpo. Es el resultado de millones de años de evolución. El hombre lleva en sí al mineral, al vegetal y al animal. Superar el instinto no es borrarlo, es integrarlo en una conciencia superior humana.",
    "CitaInelutable": "El instinto es el archivo de la lucha de la materia por la vida.",
    "EjemploPedagogico": "Es como el sistema operativo básico de un ordenador. No lo puedes borrar porque el ordenador no encendería. Pero sobre ese sistema básico, tú instalas programas de alta sabiduría (razón).",
    "ConexionDoctrinal": ["Evolución", "Memoria de Especie", "Integración"],
    "NodosSimapticos": ["Memoria Biológica", "Sistema Operativo del Ser", "Lucha por la Vida"]
  },
  "17240: LA SATISFACCIÓN DE LAS NECESIDADES": {
    "PilotoDeCoherencia": "La verdadera libertad empieza cuando las necesidades básicas están satisfechas con justicia. Mientras el hombre tenga hambre, su instinto de conservación será su carcelero. Por eso la Comuna es la única solución: al satisfacer las necesidades de todos, liberamos a los espíritus para el estudio de la Verdad.",
    "CitaInelutable": "Satisface la necesidad de la carne para que el espíritu pueda volar libre.",
    "EjemploPedagogico": "Es imposible pedirle a un hombre que se ahoga que aprenda filosofía. Sácale del agua (la miseria) y entonces podrá escucharte. La Comuna es el salvavidas de la humanidad.",
    "ConexionDoctrinal": ["Necesidad y Libertad", "Comuna", "Economía Real"],
    "NodosSimapticos": ["Satisfacción Justa", "Libertad del Hambre", "Vuelo del Espíritu"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Adquisividad": {
    "Definición": "Instinto primario de conservación que impulsa al ser a obtener los recursos necesarios para su subsistencia. En estado de ignorancia, se desvía hacia la avaricia y el acaparamiento egoísta.",
    "Contexto": "Estudio de los instintos en Filosofía Austera Racional.",
    "Conexiones": ["Conservación", "Egoísmo", "Satisfacción"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Mímica": {
    "Definición": "La expresión exterior y automática en el cuerpo físico de las sensaciones, emociones y estados del espíritu, actuando como un lenguaje natural e insobornable.",
    "Contexto": "Psicología Racional en Filosofía Austera Racional.",
    "Conexiones": ["Sensación", "Transparencia", "Alma"],
    "Obras": ["Filosofía Austera Racional", "Psicología Racional"]
  },
  "Despertar por Reflexión": {
    "Definición": "Fenómeno de resonancia vibratoria por el cual la acción instintiva de un individuo provoca el despertar de un instinto similar en quienes lo rodean, siguiendo leyes de afinidad magnética.",
    "Conexiones": ["Resonancia", "Influencia Social", "Magnetismo"],
    "Obras": ["Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Filosofía Austera Racional (Batch 15) y 3 términos sinápticos.');
