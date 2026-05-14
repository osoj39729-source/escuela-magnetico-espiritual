const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Conócete a ti mismo (Batch 2 - La Esencia del Espíritu)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "1592: LA TEMPORALIDAD DEL CUERPO": {
    "PilotoDeCoherencia": "El cuerpo es la herramienta más fugaz de la trinidad. Nace para morir y servir de abono a la tierra. Su valor reside únicamente en ser el vehículo del espíritu durante la encarnación. No te apegues a la carne; cuídala como al vestido de trabajo, pero recuerda que el trabajador es eterno y el vestido es perecedero.",
    "CitaInelutable": "La vida de los cuerpos es el suspiro de un instante en la eternidad del espíritu.",
    "EjemploPedagogico": "Es como el uniforme de un obrero: al final del día está sucio y gastado. El obrero se lo quita para descansar y al día siguiente se pone uno nuevo. El cuerpo es ese uniforme; el espíritu es el obrero que nunca deja de producir.",
    "ConexionDoctrinal": ["Temporalidad", "Cuerpo y Herramienta", "Encarnación"],
    "NodosSimapticos": ["Uniforme de Trabajo", "Suspiro de Instante", "Abono de Tierra"]
  },
  "1868: ¿QUÉ ES EL ESPÍRITU?": {
    "PilotoDeCoherencia": "El espíritu es la chispa divina, la luz de la luz emanada de Eloí. No es alma, no es mente, no es energía ciega. Es el ser inteligente, consciente y eterno que preexiste y sobrevive a todas las formas materiales. Es el único que dice 'Yo soy' con autoridad universal.",
    "CitaInelutable": "El espíritu es la luz del Creador individualizada para el progreso.",
    "EjemploPedagogico": "Es como un rayo de sol que entra por una ventana. El rayo es el mismo sol, pero está en tu habitación cumpliendo una función. El espíritu es ese rayo de Dios que habita en tu cuerpo para iluminar la materia.",
    "ConexionDoctrinal": ["Espíritu", "Individualidad", "Chispa Divina"],
    "NodosSimapticos": ["Rayo de Sol", "Luz de la Luz", "Yo Soy Eterno"]
  },
  "1921: PROCEDENCIA DEL ESPÍRITU": {
    "PilotoDeCoherencia": "El espíritu procede del centro vibratorio de toda luz: el Creador. No viene del barro ni de la evolución animal. Es una emanación directa de la inteligencia suprema. Todos los espíritus son iguales en origen, aunque diferentes en grado de progreso. Venimos de la unidad y hacia la unidad caminamos.",
    "CitaInelutable": "Nuestro origen es la Luz; nuestro destino es la Sabiduría.",
    "EjemploPedagogico": "Es como el agua de una fuente: todas las gotas salen del mismo manantial. Algunas corren por ríos limpios, otras por lodos, pero todas tienen el mismo origen y todas terminarán volviendo al océano. Eloí es el manantial y el océano.",
    "ConexionDoctrinal": ["Origen del Espíritu", "Emanación", "Igualdad de Origen"],
    "NodosSimapticos": ["Manantial de Luz", "Gota de Océano", "Centro Vibratorio"]
  },
  "2001: NATURALEZA DEL ESPÍRITU": {
    "PilotoDeCoherencia": "La naturaleza del espíritu es consustancial con el Padre. Es inmaterial, simple e indestructible. No puede ser herido, ni quemado, ni dividido. Su esencia es el amor y su facultad es la razón. Es el único elemento del universo que posee voluntad propia para crear y transformar.",
    "CitaInelutable": "El espíritu es eterno y coeterno con su autor.",
    "EjemploPedagogico": "Es como el pensamiento de un arquitecto: puedes quemar los planos, puedes derribar el edificio, pero el pensamiento original sigue intacto en la mente del autor. El espíritu es ese pensamiento indestructible de Dios.",
    "ConexionDoctrinal": ["Consustancialidad", "Voluntad", "Inmortalidad"],
    "NodosSimapticos": ["Pensamiento del Autor", "Esencia Indestructible", "Fuego que no Quema"]
  },
  "2131: LEYES DEL ESPÍRITU": {
    "PilotoDeCoherencia": "El espíritu no se somete a las leyes de los hombres, sino a las Leyes Divinas de Amor, Afinidad y Justicia. Estas leyes son matemáticas y no conocen el perdón ni el castigo caprichoso. El espíritu progresa por su propio esfuerzo, cumpliendo su deber en la eterna balanza de la causa y el efecto.",
    "CitaInelutable": "Sólo a las leyes divinas se somete el espíritu.",
    "EjemploPedagogico": "Es como la ley de la gravedad: no importa si eres bueno o malo, si sueltas una piedra, caerá. Las leyes del espíritu son así de precisas: si siembras amor, cosecharás luz; si siembras odio, cosecharás sombra. No hay escape.",
    "ConexionDoctrinal": ["Leyes Divinas", "Causa y Efecto", "Justicia"],
    "NodosSimapticos": ["Gravedad Espiritual", "Balanza de Deber", "Cosecha de Luz"]
  },
  "2513: OBRAS DEL ESPÍRITU": {
    "PilotoDeCoherencia": "La prueba del espíritu son sus obras. El espíritu no es para la contemplación ociosa, sino para la acción transformadora. Mundos, cuerpos y civilizaciones son las obras del espíritu sobre la materia. Cada acto de amor y cada descubrimiento científico es una victoria del espíritu sobre la inercia del barro.",
    "CitaInelutable": "Por sus obras conoceréis al espíritu.",
    "EjemploPedagogico": "Es como un escultor frente a un bloque de piedra. El espíritu es el escultor; sus obras son la estatua de belleza que saca de la piedra bruta. Sin obras, el espíritu es solo una potencia dormida. ¡Despierta y crea!",
    "ConexionDoctrinal": ["Acción", "Transformación", "Creación"],
    "NodosSimapticos": ["Escultor de Almas", "Bloque de Barro", "Potencia Creadora"]
  },
  "2541: EL ESPÍRITU UNIVERSAL": {
    "PilotoDeCoherencia": "Definimos al Espíritu Universal como la armonía del mecanismo celeste. No es un Dios personal, sino la suma de todos los espíritus actuando bajo la ley de unidad. Es el gran arquitecto que coordina la formación de mundos y nebulosas. Nada en el universo se mueve sin la dirección de esta inteligencia colectiva.",
    "CitaInelutable": "El espíritu universal es la armonía disciplinada del Todo.",
    "EjemploPedagogico": "Es como una gran sinfonía: hay miles de instrumentos (espíritus), cada uno toca su parte, pero todos siguen el ritmo y la armonía del director (la Ley). La sinfonía es el universo; el Espíritu Universal es la música que todo lo une.",
    "ConexionDoctrinal": ["Armonía Celeste", "Arquitecto Universal", "Unidad"],
    "NodosSimapticos": ["Sinfonía del Todo", "Mecanismo Celeste", "Director de Ley"]
  },
  "LA ANTENA DEL MAESTRO": {
    "PilotoDeCoherencia": "Reivindicamos la facultad del Maestro como la 'Antena' que capta las verdades de planos superiores. Esta antena no es mística, es científica: se basa en la afinidad vibratoria. Solo el espíritu que se ha higienizado puede recibir la luz sin distorsiones religiosas. La Escuela es el receptor de la radio universal.",
    "CitaInelutable": "La antena capta lo que el prejuicio bloquea.",
    "EjemploPedagogico": "Es como un receptor de radio: si está lleno de polvo (dogmas) y mal sintonizado (vicios), solo escuchará estática. Limpia tu receptor y sintoniza la frecuencia del amor para escuchar la voz del infinito.",
    "ConexionDoctrinal": ["Afinidad Vibratoria", "Comunicación Espiritual", "Higienización"],
    "NodosSimapticos": ["Radio Universal", "Frecuencia de Amor", "Voz del Infinito"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Espíritu": {
    "Definición": "Chispa divina individualizada, inteligente y eterna que constituye el ser real del hombre, preexistente y sobreviviente a la materia.",
    "Contexto": "Capítulo II de Conócete a ti mismo.",
    "Conexiones": ["Chispa Divina", "Individualidad", "Eternidad"],
    "Obras": ["Conócete a ti mismo", "Filosofía Austera Racional"]
  },
  "Espíritu Universal": {
    "Definición": "La suma armónica de todas las inteligencias espirituales que rigen y dirigen el mecanismo del universo bajo la ley única de amor.",
    "Contexto": "Definición en Conócete a ti mismo.",
    "Conexiones": ["Armonía Celeste", "Unidad", "Ley"],
    "Obras": ["Conócete a ti mismo", "El Espiritismo en su Asiento"]
  },
  "Armonía Celeste": {
    "Definición": "El orden perfecto y matemático del universo mantenido por la acción coordinada de los espíritus bajo la dirección de las leyes naturales y espirituales.",
    "Conexiones": ["Mecanismo Celeste", "Equilibrio", "Justicia"],
    "Obras": ["Conócete a ti mismo", "Profilaxis de la Vida"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 8 nodos 1:1 de Conócete a ti mismo (Batch 2 - El Espíritu) y 3 términos sinápticos.');
