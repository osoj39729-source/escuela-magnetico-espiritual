const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Buscando a Dios (Batch 11 - Reflexiones, Juicio y Epílogo)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "9470: REFLEXIONES LÓGICAS": {
    "PilotoDeCoherencia": "La lógica es la única bujía que no miente. Si Eloí es amor y sus leyes son perfectas, todo en el universo tiene una razón de ser justa. El sufrimiento, la muerte y las injusticias son solo páginas de un libro que no hemos terminado de leer. La reflexión lógica convierte el drama humano en lección comprensible.",
    "CitaInelutable": "La lógica es el idioma con que el espíritu lee las leyes del universo.",
    "EjemploPedagogico": "Es como un rompecabezas al que le faltan piezas: mientras no tengas todas las piezas, la imagen parece sin sentido. La lógica y el estudio te dan las piezas que faltan para ver la imagen completa de la creación.",
    "ConexionDoctrinal": ["Lógica", "Reflexión", "Comprensión del Sufrimiento"],
    "NodosSimapticos": ["Bujía de la Razón", "Piezas del Rompecabezas", "Idioma Universal"]
  },
  "9604: JUSTIFICACIÓN A KARDEC": {
    "PilotoDeCoherencia": "Reconocemos el valor del trabajo pionero de Allan Kardec, quien abrió la primera puerta al conocimiento del espíritu en la era moderna. Sin embargo, aclaramos que el Espiritismo Racional de la Escuela va más lejos: no se detiene en las comunicaciones mediúmnicas sino que construye una ciencia completa del espíritu con leyes, ética y gobierno.",
    "CitaInelutable": "Kardec abrió la puerta; la Escuela construyó la catedral.",
    "EjemploPedagogico": "Es como Colón que descubrió el continente, pero fueron otros quienes lo colonizaron, construyeron ciudades y trazaron mapas completos. Kardec descubrió el continente espiritual; Trincado lo colonizó con la razón.",
    "ConexionDoctrinal": ["Kardec", "Espiritismo Inicial", "Espiritismo Racional"],
    "NodosSimapticos": ["Puerta y Catedral", "Colón del Espíritu", "Mapa Completo"]
  },
  "9679: MI PEDIDO A JUAN": {
    "PilotoDeCoherencia": "El Maestro describe su encuentro con Juan (Bautista) en el plano espiritual como el inicio de la gran empresa reveladora. No es un encuentro místico sino una comunicación de afinidad entre espíritus de misión similar. Juan fue el precursor; el Maestro es el continuador de la misma línea de verdad.",
    "CitaInelutable": "Juan fue el heraldo; la Escuela es el reino que él anunciaba.",
    "EjemploPedagogico": "Es como el explorador que traza el camino y el constructor que asfalta la ruta después. Juan trazó el surco; la Escuela siembra y cosecha en ese surco de luz.",
    "ConexionDoctrinal": ["Juan Bautista", "Precursor", "Misión Continuada"],
    "NodosSimapticos": ["Heraldo y Reino", "Surco de Luz", "Constructor de Ruta"]
  },
  "9751: SORPRESA, PEDIDO Y PROMESA": {
    "PilotoDeCoherencia": "Narramos el momento de confirmación doctrinal: la Escuela recibe la promesa de protección y guía de los planos superiores. Esta promesa no es una garantía de comodidad, sino el compromiso de que la verdad nunca será abandonada. La misión avanza con la certeza de que la ley de amor respalda cada paso.",
    "CitaInelutable": "La promesa no es de comodidad, sino de verdad que no se apaga.",
    "EjemploPedagogico": "Es como un explorador que recibe un mapa sellado de la expedición que le precede: no le dice qué comerá mañana, pero le muestra el camino seguro hacia el destino. La promesa divina es ese mapa.",
    "ConexionDoctrinal": ["Confirmación", "Protección Espiritual", "Certeza de Misión"],
    "NodosSimapticos": ["Mapa Sellado", "Protección de Planos", "Camino Seguro"]
  },
  "9882: VERDADES AMARGAS Y ACUSADORAS": {
    "PilotoDeCoherencia": "El Maestro no viene a adular a la humanidad sino a curarla con la verdad amarga. Las verdades que duelen son las únicas que sanan. Quien no puede escuchar la crítica a sus errores, aún no está listo para la luz. La amargura de la verdad es la cirugía que extirpa el tumor del dogma.",
    "CitaInelutable": "La verdad amarga es la única medicina que cura la enfermedad del error.",
    "EjemploPedagogico": "Es como el médico que dice al paciente que debe operar: el paciente puede huir del médico, pero la enfermedad seguirá ahí. La humanidad puede huir del Maestro, pero la ley seguirá cobrando sus deudas.",
    "ConexionDoctrinal": ["Verdad Amarga", "Crítica Doctrinal", "Medicina del Error"],
    "NodosSimapticos": ["Cirugía de la Verdad", "Tumor del Dogma", "Médico que Duele"]
  },
  "10196: EL ESPÍRITU DE VERDAD": {
    "PilotoDeCoherencia": "El Espíritu de Verdad es la entidad colectiva de los espíritus elevados que asisten a la humanidad en su transición. No es el 'Espíritu Santo' de la religión, sino la inteligencia organizada del amor universal en función pedagógica. Habla a través de los medios limpios y de la conciencia despierta.",
    "CitaInelutable": "El Espíritu de Verdad enseña porque la ley de amor lo obliga a dar lo que tiene.",
    "EjemploPedagogico": "Es como un comité de sabios que, desde una sala de control, guían a los navegantes de un gran barco en la tormenta. El barco es la humanidad; la sala de control es el plano de los espíritus elevados.",
    "ConexionDoctrinal": ["Espíritu de Verdad", "Asistencia Espiritual", "Pedagogía del Amor"],
    "NodosSimapticos": ["Sala de Control", "Comité de Sabios", "Navegantes en Tormenta"]
  },
  "10484: LLAMADA A JUICIO": {
    "PilotoDeCoherencia": "La Llamada a Juicio es la convocatoria universal al balance de cuentas. Toda humanidad, encarnada y desencarnada, debe presentarse ante la ley de amor para ajustar su historial de progreso. No es un juicio de castigo sino de clasificación: cada espíritu es dirigido al plano o mundo que corresponde a su grado de evolución.",
    "CitaInelutable": "El juicio es la radiografía del alma, no la sentencia del verdugo.",
    "EjemploPedagogico": "Es como el examen de fin de curso: no destruye al estudiante, lo clasifica. Al que sabe, lo promueve; al que no sabe, lo hace repetir. La Llamada a Juicio es el examen de la humanidad.",
    "ConexionDoctrinal": ["Juicio Universal", "Balance de Cuentas", "Clasificación Espiritual"],
    "NodosSimapticos": ["Radiografía del Alma", "Examen Final", "Clasificación de Grados"]
  },
  "10699: EPÍLOGO: EL MAESTRO ANTE DIOS": {
    "PilotoDeCoherencia": "El Maestro cierra la obra con la visión que lo inició todo: ver a Dios en cada cosa, en cada hombre y en cada ley natural. El verdadero epílogo no está en la última página, sino en la vida que el estudiante vive después de cerrar el libro. La obra no termina en el texto: termina cuando el lector se convierte en maestro.",
    "CitaInelutable": "El libro se cierra; la misión continúa en el corazón del que estudió.",
    "EjemploPedagogico": "Es como terminar un curso de medicina: el diploma no es el fin sino el principio de servir a los enfermos. Este libro es el diploma del estudiante de la verdad.",
    "ConexionDoctrinal": ["Cierre", "Misión Continuada", "Dios en Todo"],
    "NodosSimapticos": ["Diploma de Verdad", "Libro y Vida", "Médico de Almas"]
  },
  "10788: ¿QUIÉN SOY YO? EL MAESTRO REVELA SU MISIÓN": {
    "PilotoDeCoherencia": "El Maestro desvela su identidad espiritual: es el obrero que juró borrar el peligro que significó el título 'Cristo' para Jesús, el hermano jurado por Jaime. No es un Dios, es un espíritu que cumple su compromiso de vida en vida. Su misión es rehabilitar la figura de Jesús y destruir el negocio del 'Jesucristo' institucional.",
    "CitaInelutable": "En mi traje soy el obrero; en mi espíritu, el hermano que juró limpiar el nombre de Jesús.",
    "EjemploPedagogico": "Es como un abogado que asumió en otra era el caso de un amigo injustamente condenado y que en esta encarnación regresa a presentar las pruebas definitivas. El Maestro es ese abogado de Jesús ante la historia.",
    "ConexionDoctrinal": ["Identidad del Maestro", "Misión de Jaime", "Jesús Rehabilitado"],
    "NodosSimapticos": ["Abogado de Jesús", "Obrero del Plan", "Nombre Limpio"]
  },
  "11305: PUNTO FINAL: LA BESTIA 666": {
    "PilotoDeCoherencia": "Revelamos el significado de '666': es el número que identifica al gobierno de las instituciones que medran con el engaño espiritual. No es el diablo de la fantasía religiosa, sino el sistema de explotación de las conciencias que suma tres máximas corrupciones: el dogma, el dinero y el poder. La Escuela viene a vencer a la Bestia con la única arma posible: la verdad.",
    "CitaInelutable": "La Bestia 666 es el sistema de engaño; la Escuela es su verdugo.",
    "EjemploPedagogico": "Es como un virus informático que infecta millones de ordenadores: no se lo ve físicamente, pero paraliza y roba. La Bestia es ese virus del espíritu humano; el Espiritismo Racional es el antivirus que lo elimina.",
    "ConexionDoctrinal": ["Bestia 666", "Sistema de Engaño", "Victoria de la Verdad"],
    "NodosSimapticos": ["Virus Espiritual", "Antivirus Racional", "Dogma Dinero Poder"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario Sináptico
const terminosDic = {
  "Espíritu de Verdad": {
    "Definición": "Inteligencia colectiva de los espíritus elevados que asisten pedagógicamente a la humanidad en su transición, distinto del 'Espíritu Santo' religioso.",
    "Contexto": "Capítulo XVII de Buscando a Dios.",
    "Conexiones": ["Planos Superiores", "Pedagogía", "Asistencia"],
    "Obras": ["Buscando a Dios", "Ley de las Mediumnidades"]
  },
  "La Bestia 666": {
    "Definición": "Símbolo del sistema institucional de explotación espiritual basado en la triada corrupta del dogma, el dinero y el poder político, identificado por Trincado como el verdadero adversario de la humanidad.",
    "Contexto": "Punto final de Buscando a Dios.",
    "Conexiones": ["Dogma", "Corrupción", "Sistema"],
    "Obras": ["Buscando a Dios"]
  },
  "Kardec (Justificación)": {
    "Definición": "Reconocimiento del valor histórico de Allan Kardec como precursor del Espiritismo moderno, cuya obra fue el primer escalón hacia la ciencia completa del espíritu desarrollada por Trincado.",
    "Contexto": "Capítulo XVI de Buscando a Dios.",
    "Conexiones": ["Precursor", "Espiritismo Inicial", "Primera Puerta"],
    "Obras": ["Buscando a Dios", "Primer Rayo de Luz"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Buscando a Dios (Batch 11 - Final COMPLETA) y 3 términos sinápticos. ¡OBRA AL 100%!');
