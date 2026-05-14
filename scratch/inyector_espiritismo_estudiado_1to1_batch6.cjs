const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - El Espiritismo Estudiado (Batch 6 - Fenómenos Espirituales)
const nuevosNodos = {
  "9682: CUARTA PARTE: FENÓMENOS ESPIRITUALES": {
    "PilotoDeCoherencia": "Introducción a la fenomenología del Espiritismo. Los fenómenos no son sobrenaturales ni milagros, son operaciones matemáticas del fluido cósmico dominadas por la voluntad del espíritu. Esta sección pasa de la teoría de las facultades a la mecánica práctica del fenómeno, desmitificando su producción y explicando sus leyes físicas y morales.",
    "CitaInelutable": "El milagro es la negación de la ciencia; el fenómeno espiritual es la ciencia del mañana.",
    "EjemploPedagogico": "Es como un eclipse: para el ignorante es magia o castigo; para el astrónomo es un fenómeno mecánico predecible. El Espiritismo es la astronomía del plano espiritual.",
    "ConexionDoctrinal": ["Fenómeno vs Milagro", "Mecánica Espiritual", "Fluido Cósmico"],
    "NodosSimapticos": ["Astronomía del Espíritu", "Mecánica de Luz", "Fin del Milagro"]
  },
  "9688: CAPITULO PRIMERO: FENÓMENOS DE VIDENCIA": {
    "PilotoDeCoherencia": "La videncia es la extensión de la visión del alma más allá de la retina física. No ve con los ojos de carne, ve con el 'periespíritu' o cuerpo astral. El fenómeno ocurre cuando el espíritu del médium sintoniza su frecuencia con la del plano espiritual, atravesando la materia opaca como si fuera cristal.",
    "CitaInelutable": "La videncia no necesita de la luz del sol físico, porque usa la luz propia del espíritu.",
    "EjemploPedagogico": "Es como usar una cámara de visión térmica: ve el calor a través de las paredes donde el ojo normal solo ve ladrillos. La videncia es la visión de los fluidos y de la intención.",
    "ConexionDoctrinal": ["Mecánica de la Videncia", "Visión del Alma", "Atravesar Materia"],
    "NodosSimapticos": ["Cámara Térmica del Alma", "Ojo del Periespíritu", "Luz Propia"]
  },
  "10077: CAPITULO SEGUNDO: FENÓMENO DE LA POSESIÓN PARLANTE": {
    "PilotoDeCoherencia": "La posesión no es un asalto violento al cuerpo del médium; es una sustitución temporal y consentida de los mandos del sistema nervioso. El médium sede el control vocal al comunicante, manteniendo la responsabilidad de rechazar o aceptar. La gran ventaja es la fluidez del mensaje; el gran peligro, la facilidad con que pueden infiltrarse espíritus mixtificadores.",
    "CitaInelutable": "La posesión parlante es un préstamo de la máquina vocal bajo contrato de amor.",
    "EjemploPedagogico": "Es como prestar el coche a un amigo: tú sigues siendo el dueño, pero él conduce. Si el amigo es imprudente (espíritu inferior), tú debes quitarle las llaves (control del maestro).",
    "ConexionDoctrinal": ["Mecánica de Posesión", "Control Nervioso", "Riesgo de Infiltración"],
    "NodosSimapticos": ["Préstamo del Vehículo", "Mandos Nerviosos", "Sustitución Consentida"]
  },
  "10278: CAPÍTULO TERCERO: ESCRITURA, PINTURA Y DIBUJO": {
    "PilotoDeCoherencia": "La psicografía (escritura) y psicopictografía (pintura) son formas artísticas y discretas de la posesión parcial. Tienen la ventaja de dejar un documento físico y duradero, permitiendo el estudio en frío del mensaje o la obra. Como en toda manifestación, la firma del espíritu debe ser verificada por la calidad del contenido, no solo por el nombre escrito.",
    "CitaInelutable": "El espíritu pinta y escribe no para asombrar al ojo, sino para instruir la razón.",
    "EjemploPedagogico": "Es como un telegrama: queda impreso y puedes leerlo mil veces. La escritura medianímica es el telegrama del mundo invisible; el maestro es el telegrafista que verifica el origen.",
    "ConexionDoctrinal": ["Documento Físico", "Psicografía", "Verificación de Firma"],
    "NodosSimapticos": ["Telegrama Invisible", "Prueba Duradera", "Estudio en Frío"]
  },
  "10347: CAPÍTULO CUARTO: FENÓMENO DEL DESDOBLAMIENTO": {
    "PilotoDeCoherencia": "El desdoblamiento es el acto supremo del espíritu encarnado: salir del cuerpo conservando la conciencia y el hilo magnético que lo une a la materia. Se produce por dos motivos principales: por misión y deber de la Escuela, o por afinidad extrema hacia un ser amado. Permite la investigación directa en otros planos y mundos.",
    "CitaInelutable": "El desdoblamiento es el viaje del espíritu sin el lastre de la carne, guiado por la brújula del amor.",
    "EjemploPedagogico": "Es como un buzo que explora el fondo del mar (el espacio): deja el barco (cuerpo) arriba, unido por un cable de oxígeno (cordón magnético). Si el cable se corta, muere; si regresa, cuenta maravillas.",
    "ConexionDoctrinal": ["Viaje Astral", "Hilo Magnético", "Investigación Directa"],
    "NodosSimapticos": ["Buzo del Espacio", "Cable Magnético", "Emancipación Consciente"]
  },
  "10482: CAPÍTULO QUINTO: AUDICIÓN, INTUICIÓN E INSPIRACIÓN": {
    "PilotoDeCoherencia": "Tres facultades sutiles a menudo confundidas: Audición (oír literalmente una voz); Intuición (percibir una idea clara en la mente en estado semi-estático); Inspiración (el impulso o deseo de ejecutar o plasmar la idea percibida). Son la comunicación constante entre guías y encarnados, la base de todo progreso científico y artístico.",
    "CitaInelutable": "La inspiración es la voz del universo que el artista y el sabio traducen a la humanidad.",
    "EjemploPedagogico": "Audición: te dictan la receta. Intuición: se te ocurre de pronto la receta. Inspiración: sientes las ganas irrefrenables de cocinarla. Todo avance humano nació de estas tres chispas.",
    "ConexionDoctrinal": ["Tres Facultades Sutiles", "Comunicación Constante", "Origen del Progreso"],
    "NodosSimapticos": ["Dictado Cósmico", "Chispa de Progreso", "Idea y Ejecución"]
  },
  "10573: CAPÍTULO SEXTO: LEVITACIÓN Y TRASLACIÓN": {
    "PilotoDeCoherencia": "La levitación (elevación del cuerpo) y la traslación (movimiento horizontal sin apoyo) son fenómenos rudimentarios de fuerza. Requieren espíritus de baja densidad moral para operar directamente sobre la materia gruesa y médiums de constitución física fuerte. Superan la gravedad terrestre oponiéndole una fuerza magnética contraria y superior.",
    "CitaInelutable": "El espíritu vence la gravedad con la misma naturalidad con que el agua vence al fuego.",
    "EjemploPedagogico": "Es como los trenes de levitación magnética actuales: no hay magia, solo el choque de polos iguales que repelen. El espíritu usa el magnetismo universal para repeler el cuerpo de la tierra.",
    "ConexionDoctrinal": ["Levitación", "Ley de Fuerzas", "Materia Gruesa"],
    "NodosSimapticos": ["Polaridad Magnética", "Vencer la Gravedad", "Fuerza Rudimentaria"]
  },
  "10735: CAPÍTULO SÉPTIMO: FENÓMENO DE APORTE Y MATERIALIZACIÓN": {
    "PilotoDeCoherencia": "El aporte es la desintegración de la materia en un punto, su traslado fluídico y su reintegración (materialización) en la sesión. La Escuela posee 19 actas documentadas científicamente de estos fenómenos. Trincado establece que cada gramo aportado representa un esfuerzo equivalente a levantar un kilogramo para el espíritu operador.",
    "CitaInelutable": "El aporte es la prueba matemática del dominio absoluto del espíritu sobre el átomo.",
    "EjemploPedagogico": "Es como enviar un documento por fax: se escanea aquí (desintegra), viaja como señal, y se imprime allá (reintegra). El espíritu es el fax de la materia física.",
    "ConexionDoctrinal": ["Mecánica del Aporte", "Desintegración", "Actas Documentales"],
    "NodosSimapticos": ["Fax de Materia", "Gramo por Kilo", "Dominio del Átomo"]
  },
  "11106: CAPÍTULO OCTAVO: LA INFLUENCIA DE LOS ESPÍRITUS": {
    "PilotoDeCoherencia": "La influencia de los espíritus en el mundo se rige por tres motores: el Amor (que produce lo bueno), el Odio (que produce lo malo y a traición), y el Deber (que produce lo justo). Hablar del 'otro mundo' es ignorancia: hay un solo mundo y universo interconectado, y la influencia de los desencarnados sobre los vivos es constante, total y diaria.",
    "CitaInelutable": "No existe 'el otro mundo': existe un solo universo vibrando en diferentes densidades.",
    "EjemploPedagogico": "Es como el viento sobre el mar: no lo ves, pero genera las olas. La influencia de los espíritus es el viento; los actos de los hombres son las olas. Ignorar al viento es no entender el mar.",
    "ConexionDoctrinal": ["Un Solo Mundo", "Amor Odio Deber", "Influencia Constante"],
    "NodosSimapticos": ["Viento y Olas", "Tres Motores", "Interconexión Total"]
  },
  "11256: CAPÍTULO NOVENO: PARTICIPACIÓN EN LOS HECHOS DE LOS HOMBRES": {
    "PilotoDeCoherencia": "Los espíritus participan activamente en las decisiones humanas, las guerras, los descubrimientos y la política. Esta participación se justifica por la Reencarnación (el tercer motor del Deber): el espíritu necesita preparar el terreno para su propia encarnación futura o pagar deudas de encarnaciones pasadas. Nadie actúa solo en la Tierra.",
    "CitaInelutable": "El espíritu invisible de hoy es el hombre encarnado de mañana; por eso moldea el mundo.",
    "EjemploPedagogico": "Es como un arquitecto que dirige por teléfono la construcción de la casa en la que él mismo va a vivir el año próximo. Así el espíritu dirige los hechos humanos: para preparar su propio futuro.",
    "ConexionDoctrinal": ["Participación Activa", "Reencarnación como Motor", "Preparación del Terreno"],
    "NodosSimapticos": ["Arquitecto Futuro", "Deuda Cársmica", "Sociedad Invisible"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Posesión Parlante": {
    "Definición": "Fenómeno en el cual el espíritu comunicante asume el control del aparato fonador y el sistema nervioso del médium, mediante un acuerdo o préstamo temporal de la máquina física.",
    "Contexto": "Capítulo II, Cuarta Parte de El Espiritismo Estudiado.",
    "Conexiones": ["Mediumnidad Parlante", "Mecánica Espiritual", "Control"],
    "Obras": ["El Espiritismo Estudiado", "Ley de las Mediumnidades"]
  },
  "Audición-Intuición-Inspiración": {
    "Definición": "Trilogía de facultades sutiles que rigen el avance humano; desde la audición literal de voces, la percepción clara de ideas, hasta el impulso activo de ejecutar una obra en favor del progreso.",
    "Contexto": "Capítulo V, Cuarta Parte de El Espiritismo Estudiado.",
    "Conexiones": ["Progreso", "Arte", "Ciencia", "Guías"],
    "Obras": ["El Espiritismo Estudiado", "Conócete a ti mismo"]
  },
  "Un Solo Mundo (Universo Interconectado)": {
    "Definición": "Refutación de la idea religiosa del 'otro mundo' (cielo/infierno). Establece que encarnados y desencarnados habitan el mismo universo único, interactuando constantemente a través de las influencias del amor, el odio y el deber.",
    "Contexto": "Capítulo VIII, Cuarta Parte de El Espiritismo Estudiado.",
    "Conexiones": ["Influencia", "Unidad", "Contra el Dogma"],
    "Obras": ["El Espiritismo Estudiado", "Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de El Espiritismo Estudiado (Batch 6 - Cuarta Parte: Fenómenos Espirituales) y 3 términos sinápticos.');
