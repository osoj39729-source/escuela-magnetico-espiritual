const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 8)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "10950: CUARTA PARTE — ONTOLOGÍA — EL SER Y LA EXISTENCIA": {
    "PilotoDeCoherencia": "La ontología racional no se pierde en abstracciones sobre el ser. El Ser es el Espíritu; la Existencia es su manifestación en la materia. Estudiamos las leyes que rigen esta unión. Nada existe fuera de la Ley de Amor, porque la existencia es el pensamiento de Eloí plasmado en formas.",
    "CitaInelutable": "Ontología es la ciencia que estudia al espíritu en su eterna existencia y manifestación.",
    "EjemploPedagogico": "El ser es el agua; la existencia son las olas, el hielo y el vapor. Aunque cambie la forma (existencia), la esencia (el ser) es siempre agua. El espíritu es el agua eterna del universo.",
    "ConexionDoctrinal": ["Ontología", "Espíritu", "Manifestación"],
    "NodosSimapticos": ["Estudio del Ser", "Pensamiento de Eloí", "Esencia y Forma"]
  },
  "11200: CAPÍTULO I — LA NATURALEZA Y SUS ESTADOS": {
    "PilotoDeCoherencia": "La naturaleza es el cuerpo de Dios. No es algo ciego. Estudiamos los estados de la materia (sólido, líquido, gaseoso y radiante) como grados de vibración. El espíritu es la inteligencia que dirige esta orquesta natural para su propio progreso.",
    "CitaInelutable": "La naturaleza es la madre amorosa que entrega sus secretos al hijo que la estudia con respeto.",
    "EjemploPedagogico": "La naturaleza es como una gran enciclopedia: cada estado de la materia es un tomo. El espíritu es el lector que debe aprender a leer cada página para comprender el mensaje de la vida.",
    "ConexionDoctrinal": ["Estados de la Materia", "Vibración", "Madre Naturaleza"],
    "NodosSimapticos": ["Cuerpo de Dios", "Orquesta Natural", "Grados de Vibración"]
  },
  "11480: CAPÍTULO II — EL OJO Y LA VISIÓN": {
    "PilotoDeCoherencia": "El ojo es la ventana suprema. Estudiamos la córnea, el iris y la retina no solo como óptica, sino como el mecanismo por el cual el espíritu capta la luz, que es la vibración de la verdad en la materia. El ojo es el primer contacto con el infinito.",
    "CitaInelutable": "El ojo es el instrumento de precisión donde la luz se hace conciencia.",
    "EjemploPedagogico": "El ojo es como la lente de una cámara fotográfica. Pero la foto no se queda en el carrete (el cerebro), sino que el fotógrafo (el espíritu) la guarda en su memoria eterna para siempre.",
    "ConexionDoctrinal": ["Visión", "Luz", "Instrumento de Precisión"],
    "NodosSimapticos": ["Ventana del Espíritu", "Luz y Conciencia", "Lente de la Verdad"]
  },
  "11750: EL IRIS Y LA PUPILA — EL CONTROL DE LA LUZ": {
    "PilotoDeCoherencia": "El iris es el diafragma inteligente. Regula la entrada de luz para que la retina no se queme. Así debe actuar la razón: regulando la entrada de verdades según la capacidad de comprensión del ser, para que no se ciegue con una luz que aún no puede soportar.",
    "CitaInelutable": "El iris divide las cámaras del ojo como la razón divide lo claro de lo oscuro.",
    "EjemploPedagogico": "Es como las cortinas de una habitación: las abres del todo cuando el sol es suave, pero las entornas cuando el sol del mediodía es demasiado fuerte. La prudencia es el iris del alma.",
    "ConexionDoctrinal": ["Prudencia", "Comprensión", "Mecanismo Ocular"],
    "NodosSimapticos": ["Diafragma del Alma", "Control de Luz", "Cámaras del Ser"]
  },
  "12020: LA RETINA — LA PLACA NERVIOSA": {
    "PilotoDeCoherencia": "La retina es la terminal de los nervios ópticos. Es donde la imagen material se convierte en impulso espiritual. Es una maravilla de la ingeniería de Eloí. Denunciamos que se ignore el milagro de la visión al reducirlo a simple química.",
    "CitaInelutable": "En la retina, el mundo exterior se rinde ante la soberanía del espíritu.",
    "EjemploPedagogico": "La retina es como el papel sensible de un dibujante. La luz dibuja la realidad en ella, y el espíritu lee el dibujo para comprender el mundo que le rodea.",
    "ConexionDoctrinal": ["Retina", "Transformación Vibratoria", "Ingeniería Universal"],
    "NodosSimapticos": ["Placa del Espíritu", "Milagro de la Visión", "Dibujo de Luz"]
  },
  "12300: CAPÍTULO III — EL OÍDO Y LA AUDICIÓN": {
    "PilotoDeCoherencia": "El oído capta la vibración sonora. Es el sentido de la armonía y la palabra. Estudiamos el tímpano y el caracol como transductores de la música del universo. El oído debe cerrarse al grito del odio y abrirse al susurro de la verdad y la fraternidad.",
    "CitaInelutable": "El oído es la puerta por donde la armonía del universo entra en el alma.",
    "EjemploPedagogico": "El oído es como un receptor de radio. Si sintonizas la frecuencia del ruido y la queja, solo oirás interferencias. Si sintonizas la frecuencia de la Ley, oirás la sinfonía del amor.",
    "ConexionDoctrinal": ["Audición", "Vibración Sonora", "Armonía"],
    "NodosSimapticos": ["Puerta de Armonía", "Receptor de Verdad", "Sinfonía del Ser"]
  },
  "12580: CAPÍTULO IV — EL GUSTO Y EL OLFATO": {
    "PilotoDeCoherencia": "Los sentidos químicos nos conectan con la esencia de la materia nutricia. El gusto y el olfato son los centinelas de la salud. Deben ser educados para rechazar lo que daña el instrumento y buscar lo que lo fortalece para el trabajo misionero.",
    "CitaInelutable": "Gusto y olfato son los catadores de la vida material al servicio del espíritu.",
    "EjemploPedagogico": "Son como los inspectores de aduanas de un país: revisan lo que entra (la comida, el aire) para asegurarse de que no traigan contrabando de enfermedad o vicio al interior del cuerpo.",
    "ConexionDoctrinal": ["Sentidos Químicos", "Nutrición", "Profilaxis"],
    "NodosSimapticos": ["Centinelas de Salud", "Catadores de Vida", "Aduana del Cuerpo"]
  },
  "12850: LA UNIDAD DE LOS SENTIDOS EN EL ESPÍRITU": {
    "PilotoDeCoherencia": "Concluimos que los cinco sentidos son solo cinco ramas de un mismo tronco: la Sensibilidad del Espíritu. El espíritu no ve con el ojo ni oye con el oído; ve y oye *a través* de ellos. En el sueño o en el estado desencarnado, el espíritu sigue percibiendo sin necesidad de estos órganos materiales.",
    "CitaInelutable": "Los sentidos son las muletas del espíritu mientras camina en la densidad de la tierra.",
    "EjemploPedagogico": "Es como un buzo que tiene cámaras y micrófonos en su casco. Cuando se quita el traje, sigue teniendo ojos y oídos propios, pero mucho más potentes. El espíritu es ese buzo fuera del traje.",
    "ConexionDoctrinal": ["Sensibilidad Espiritual", "Percepción Extra-Sensorial", "Unidad"],
    "NodosSimapticos": ["Tronco de Sensibilidad", "Muletas del Espíritu", "Percepción Pura"]
  },
  "13120: EL MUNDO COMO FENÓMENO DE CONCIENCIA": {
    "PilotoDeCoherencia": "El mundo que percibimos es la interpretación que nuestra conciencia hace de las vibraciones externas. Por eso cada ser ve un mundo diferente según su grado de progreso. La Filosofía Austera enseña a limpiar la conciencia para ver el mundo tal como es en la mente del Creador.",
    "CitaInelutable": "El mundo es lo que tu conciencia es capaz de iluminar.",
    "EjemploPedagogico": "Es como una habitación a oscuras: si llevas una cerilla, solo verás un rincón. Si llevas una antorcha, verás la habitación entera. El progreso espiritual es cambiar la cerilla por la antorcha de la razón.",
    "ConexionDoctrinal": ["Conciencia", "Realidad vs Percepción", "Iluminación"],
    "NodosSimapticos": ["Fenómeno de Conciencia", "Antorcha de Razón", "Mundo Interior"]
  },
  "13400: LA VERDAD EN LA FORMA": {
    "PilotoDeCoherencia": "La forma es la vestidura de la idea. No hay forma sin propósito. Estudiar la forma de las cosas es leer la intención de la inteligencia universal. Nada es azar; todo es geometría sagrada y matemática de la Ley de Amor manifestada.",
    "CitaInelutable": "La forma es el lenguaje visible del espíritu invisible.",
    "EjemploPedagogico": "La forma de una herramienta te dice para qué sirve. La forma de una mano te dice que es para crear y acariciar. La forma de la tierra te dice que es la casa de todos los hermanos. Lee la forma y sabrás la Verdad.",
    "ConexionDoctrinal": ["Geometría Sagrada", "Finalidad", "Lenguaje de Formas"],
    "NodosSimapticos": ["Lenguaje de Formas", "Vestidura de Idea", "Geometría del Creador"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Sustancia Una": {
    "Definición": "La materia única y universal en sus diferentes grados de vibración (desde el sólido al radiante) que sirve de medio para la manifestación del espíritu y la vida.",
    "Contexto": "Ontología en Filosofía Austera Racional.",
    "Conexiones": ["Eloí", "Vibración", "Materia"],
    "Obras": ["Filosofía Austera Racional", "Código de Amor Universal"]
  },
  "Centinelas de la Salud": {
    "Definición": "Metáfora de los sentidos del gusto y el olfato, encargados de discriminar lo que es beneficioso o perjudicial para el instrumento biológico del espíritu.",
    "Contexto": "Capítulo IV de la Cuarta Parte de Filosofía Austera Racional.",
    "Conexiones": ["Gusto", "Olfato", "Profilaxis"],
    "Obras": ["Filosofía Austera Racional", "Profilaxis de la Vida"]
  },
  "Ventana del Espíritu": {
    "Definición": "Metáfora del ojo humano como el instrumento de mayor precisión para la captación de la luz y la verdad en el mundo de las formas.",
    "Conexiones": ["Visión", "Luz", "Conciencia"],
    "Obras": ["Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Filosofía Austera Racional (Batch 8) y 3 términos sinápticos.');
