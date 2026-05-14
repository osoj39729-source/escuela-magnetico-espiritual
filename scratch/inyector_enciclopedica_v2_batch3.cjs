const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-2_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Filosofía Enciclopédica Universal Tomo 2 (Batch 3 - Claves 26 a 32)
const nuevosNodos = {
  "3019: Enero 7 de 1912 - Un espíritu de Alhá": {
    "PilotoDeCoherencia": "Alegría de la Esperanza. Un espíritu árabe reclama la alegría natural del hombre en un mundo de progreso, estableciendo a la tierra como centro material y al espíritu como guía.",
    "CitaInelutable": "Tened la tierra por centro; pero al espíritu por guía... ¿Por qué la tristeza?",
    "EjemploPedagogico": "El viajero que camina por un jardín hermoso y lleno de flores, pero llora porque solo mira sus pies polvorientos.",
    "ConexionDoctrinal": ["Optimismo Racional", "Guía del Espíritu"],
    "NodosSimapticos": []
  },
  "3037: A continuación dijo - merecer ser elegidos.": {
    "PilotoDeCoherencia": "Fruto de la Rama Tierra. La tierra es una rama del árbol de la Cosmogonía; la luz de la verdad es el fruto sazonado que ya ha llegado a su tiempo de maduración.",
    "CitaInelutable": "Esta tierra... está ligada al corpulento árbol de la Cosmogonía... a la rama del mundo tierra, ya le llegó la luz.",
    "EjemploPedagogico": "Una rama de manzano que ha pasado por el invierno y la primavera; ahora el fruto está rojo y dulce, listo para alimentar al que tenga hambre de saber.",
    "ConexionDoctrinal": ["Cosmogonía (Estructura)", "Ciclos de la Verdad"],
    "NodosSimapticos": ["Rama de la Tierra (Cosmogonía)"]
  },
  "3212: Enero 7 de 1912 (desarrollo) - Joaquín Trincado.": {
    "PilotoDeCoherencia": "Pugna de Leyes. Los códigos militares y constituciones humanas que permiten la pena de muerte están en abierta pugna con las leyes supremas del espíritu.",
    "CitaInelutable": "Ese código está en pugna con las supremas leyes del espíritu.",
    "EjemploPedagogico": "Una ley que ordena apagar el sol para ahorrar luz; es una ley humana absurda que choca frontalmente con la ley natural de la vida.",
    "ConexionDoctrinal": ["Injusticia de las Leyes Humanas", "Derecho a la Vida"],
    "NodosSimapticos": ["Indulto de Cullera (Hecho Doctrinal)"]
  },
  "3242: Enero 12 de 1912 Sesión de pruebas y desarrollo - Joaquín Trincado.": {
    "PilotoDeCoherencia": "Misión de Desdoblamiento. Trincado utiliza el desdoblamiento magnético para trasladarse a los centros de poder (Madrid) y trabajar por el indulto de los sentenciados.",
    "CitaInelutable": "Me desdoblé trasladándonos a Madrid... para salvarlo.",
    "EjemploPedagogico": "El socorrista que sale de su puesto físico para nadar en espíritu hacia el náufrago y sostenerlo hasta que llegue la ayuda material.",
    "ConexionDoctrinal": ["Desdoblamiento Terapéutico/Político", "Acción Magnética a Distancia"],
    "NodosSimapticos": []
  },
  "3290: Enero 14 de 1912 (Portillo) - Antonio Rufo.": {
    "PilotoDeCoherencia": "Influencia sobre el Poder. El mundo espiritual influencia a los gobernantes (el Rey) para ablandar su juicio en momentos críticos de injusticia social.",
    "CitaInelutable": "Empezamos por influenciar el Rey que por cierto estaba agobiado.",
    "EjemploPedagogico": "Un susurro de conciencia que llega al oído del poderoso como si fuera su propio pensamiento, inclinando su mano hacia la clemencia.",
    "ConexionDoctrinal": ["Influencia Espiritual en la Política", "Responsabilidad de los Gobernantes"],
    "NodosSimapticos": []
  },
  "3402: En este momento desdoblé todo mi yo...": {
    "PilotoDeCoherencia": "Comisión de Madres Espirituales. Los espíritus de madres e inocentes actúan sobre la conciencia del ministro, pidiéndole que detenga la firma de la sentencia de muerte.",
    "CitaInelutable": "Llega la comisión de madres que también imploran al ministro que se dispone a firmar; ¡detente hombre y piensa!",
    "EjemploPedagogico": "Un coro de voces invisibles que gritan '¡No!' al unísono cuando el verdugo levanta el hacha, haciendo que este dude y la suelte.",
    "ConexionDoctrinal": ["Justicia de la Conciencia", "Protección de la Vida"],
    "NodosSimapticos": []
  },
  "3431: Posesionado de un guía el medium dijo - Joaquín Trincado": {
    "PilotoDeCoherencia": "Escalofrío de la Conciencia. La acción magnética directa provoca un escalofrío en el ministro que lo obliga a soltar la pluma, impidiendo la ejecución injusta.",
    "CitaInelutable": "Hicimos correr por su ser un escalofrío y dejó la pluma.",
    "EjemploPedagogico": "Un choque eléctrico leve que te hace soltar un objeto peligroso que estabas a punto de usar sin darte cuenta.",
    "ConexionDoctrinal": ["Acción Magnética Directa", "Escalofrío Magnético"],
    "NodosSimapticos": ["Escalofrío Magnético"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Indulto de Cullera (Hecho Doctrinal)": {
    "Definición": "Episodio histórico registrado en 1912 donde la Escuela Magnético-Espiritual intervino mediante desdoblamientos magnéticos y sugestión espiritual para lograr el indulto de reos sentenciados a muerte en España. Se cita como prueba de la superioridad de la ley del espíritu sobre los códigos militares y civiles injustos.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 2 (Enero de 1912).",
    "Conexiones": ["Justicia del Espíritu", "Desdoblamiento", "No matarás"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  },
  "Escalofrío Magnético": {
    "Definición": "Fenómeno fisiológico provocado por una descarga de fluidos espirituales o magnéticos sobre el sistema nervioso de un individuo. Se utiliza para inducir una detención súbita de una acción errónea o para despertar la atención de la conciencia en momentos críticos.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 2 (Caso del Ministro que iba a firmar la sentencia).",
    "Conexiones": ["Fluido", "Magnetismo", "Influencia Espiritual"],
    "Obras": ["Filosofía Enciclopédica Universal", "El Magnetismo en su Origen"]
  },
  "Rama de la Tierra (Cosmogonía)": {
    "Definición": "Metáfora que describe la posición de nuestro planeta dentro de la estructura universal o 'Árbol de la Cosmogonía'. Implica que la Tierra no es un mundo aislado, sino un órgano vivo que recibe savia (leyes) y luz (verdad) del tronco común del Padre y debe dar frutos de progreso a su tiempo.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 2 (Máximas del espíritu de Alhá).",
    "Conexiones": ["Cosmogonía", "Universo Solidario", "Progreso"],
    "Obras": ["Filosofía Enciclopédica Universal", "Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 3 de Tomo 2 (7 nodos) y 3 términos sinápticos. Caso Cullera documentado.');
