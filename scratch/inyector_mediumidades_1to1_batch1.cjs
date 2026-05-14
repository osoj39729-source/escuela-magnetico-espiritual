const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/ley-de-las-mediumidades-en-general_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Ley de las Mediumnidades (Batch 1 - Arts. 1-19 + Prefacio)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "PREFACIO: LEY Y CÓDIGO DE LA MEDIUMNIDAD": {
    "PilotoDeCoherencia": "Esta obra es el código de conducta de los instrumentos del espíritu. No es un manual de magia ni un reglamento de superstición. Es la disciplina científica y moral que garantiza que las comunicaciones con el plano superior sean limpias, útiles y verificables. El médium sin ley es un teléfono sin red: ruido sin mensaje.",
    "CitaInelutable": "La ley de la mediumnidad es la ley del amor aplicada al instrumento del espíritu.",
    "EjemploPedagogico": "Es como el código de un piloto de avión: no está para restringirlo sino para garantizar que el vuelo sea seguro para todos. Sin código, los pasajeros (hermanos) están en peligro.",
    "ConexionDoctrinal": ["Mediumnidad", "Disciplina", "Código de Amor"],
    "NodosSimapticos": ["Piloto del Espíritu", "Teléfono con Red", "Código de Vuelo"]
  },
  "LEY DE LAS MEDIUMNIDADES (Art. 1-2)": {
    "PilotoDeCoherencia": "Ningún fenómeno medianímico puede explicarse sin el conocimiento del espíritu. La mediumnidad no es una anomalía ni un don exclusivo: es una función del espíritu más desarrollada en algunos seres por progreso o misión. Sin conocer al espíritu, la mediumnidad es un misterio inútil y peligroso.",
    "CitaInelutable": "El espíritu es la clave que abre el misterio de la mediumnidad.",
    "EjemploPedagogico": "Es como intentar comprender la electricidad sin saber física. Los fenómenos existen, los ves, pero sin la teoría, no puedes usarlos ni comprenderlos. La ciencia del espíritu es la física de la mediumnidad.",
    "ConexionDoctrinal": ["Mediumnidad como Función", "Conocimiento Previo", "Ciencia"],
    "NodosSimapticos": ["Física del Espíritu", "Don por Progreso", "Clave del Misterio"]
  },
  "ART. 3-5: LA SABIDURÍA ESPIRITISTA COMO AXIOMA": {
    "PilotoDeCoherencia": "La sabiduría espiritista no es hipótesis sino axioma: sus verdades son comprobables por cualquier espíritu racional que estudie sin prejuicios. No reconoce límites porque el espíritu es ilimitado. Toda ciencia y filosofía racional está incluida en su campo de estudio.",
    "CitaInelutable": "La sabiduría espiritista es la ciencia sin límites porque el espíritu no los tiene.",
    "EjemploPedagogico": "Es como las matemáticas: sus verdades son independientes de quien las crean o rechace. 2+2=4 aunque nadie lo quiera. Las leyes del espíritu son así de absolutas y demostrables.",
    "ConexionDoctrinal": ["Axioma", "Ciencia Racional", "Sin Límites"],
    "NodosSimapticos": ["Matemáticas del Espíritu", "Verdad sin Dueño", "Axioma Vivo"]
  },
  "ART. 6-7: LOS MEDIOS DE ACLARACIÓN: LAS MEDIUMNIDADES": {
    "PilotoDeCoherencia": "Las mediumnidades son los medios por los que el espíritu se hace visible en la materia. Cada manifestación medianímicaacusa el grado de progreso del espíritu que la ejerce. No son milagros, son fenómenos naturales del alma humana, tan verificables como la electricidad o el magnetismo.",
    "CitaInelutable": "La mediumnidad es la antena del espíritu sintonizada en la frecuencia del amor.",
    "EjemploPedagogico": "Es como la capacidad musical: no todos tocan igual, pero todos pueden desarrollar algún grado de oído. Las mediumnidades son la 'musicalidad' del espíritu; con estudio y amor, se afinan.",
    "ConexionDoctrinal": ["Tipos de Mediumnidad", "Progreso", "Naturalismo Espiritual"],
    "NodosSimapticos": ["Antena Espiritual", "Musicalidad del Alma", "Frecuencia del Amor"]
  },
  "ART. 8: MEDIUMS EN TIEMPO DE TRANSICIÓN": {
    "PilotoDeCoherencia": "Durante el periodo de transición los médiums y estudiantes deben reddoblar su disciplina. Es el momento en que la batalla entre la vieja era y la nueva se decide en el plano invisible. El médium indisciplinado en este momento es un soldado sin armas en el frente: una carga más que un recurso.",
    "CitaInelutable": "En la transición, la disciplina del médium es la trinchera del amor.",
    "EjemploPedagogico": "Es como un cirujano en una epidemia: no puede permitirse errores. La precisión en el tiempo de crisis salva vidas. El médium disciplinado en la transición salva conciencias.",
    "ConexionDoctrinal": ["Transición", "Disciplina", "Batalla Espiritual"],
    "NodosSimapticos": ["Trinchera de Amor", "Cirujano en Epidemia", "Soldado del Espíritu"]
  },
  "ART. 9-10: HUMILDAD E INVESTIDURA DEL MÉDIUM": {
    "PilotoDeCoherencia": "La humildad del médium no es servilismo sino conciencia de ser un instrumento. Quien usa la mediumnidad para envanecerse, la corrompe. Los cinco requisitos de la investidura (ser ajeno a las imperfecciones, revestirse de la coraza fluídica, rechazar la vanidad, ser bondadoso y hacer la plegaria al Padre) son el blindaje del instrumento auténtico.",
    "CitaInelutable": "El médium humilde eleva; el médium vanidoso distorsiona.",
    "EjemploPedagogico": "Es como un lente de microscopio: si está sucio de vanidad, la imagen se distorsiona y el científico (Maestro) no puede ver la verdad. Mantenlo limpio con humildad.",
    "ConexionDoctrinal": ["Humildad", "Investidura", "Instrumento Limpio"],
    "NodosSimapticos": ["Lente del Espíritu", "Coraza Fluídica", "Instrumento Auténtico"]
  },
  "ART. 11-13: MEDIUMNIDADES EN LA COMUNA": {
    "PilotoDeCoherencia": "En la Comuna las mediumnidades serán más numerosas y refinadas porque el ambiente de amor amplificará las facultades. No habrá exclusión del trabajo por ser médium, salvo los designados para el Consejo. Las reuniones mediúmnicas en familia son el corazón vivo de la vida comunal.",
    "CitaInelutable": "En la Comuna, la mediumnidad florecerá como el trigo en tierra fértil.",
    "EjemploPedagogico": "Es como los instrumentos musicales que suenan mejor en una sala con buena acústica. La Comuna es la gran sala de conciertos del amor donde las facultades del espíritu resuenan en toda su plenitud.",
    "ConexionDoctrinal": ["Mediumnidad Comunal", "Ambiente de Amor", "Consejo"],
    "NodosSimapticos": ["Sala de Conciertos", "Trigo Comunal", "Facultad Amplificada"]
  },
  "ART. 14-15: FENÓMENOS Y SU PROPÓSITO": {
    "PilotoDeCoherencia": "Los fenómenos físicos ya no serán necesarios en la Comuna para convencer a los materialistas, pues ya no habrá ciencia materialista. Los fenómenos que ocurran serán para el estudio del progreso, no para el espectáculo. El que provoca fenómenos por curiosidad está jugando con el fuego sagrado.",
    "CitaInelutable": "El fenómeno no es fin, es medio; en la Comuna, el medio ya no será necesario.",
    "EjemploPedagogico": "Es como usar altavoces en una sala de 10 personas: no son necesarios. Los fenómenos físicos fueron los altavoces para una humanidad sorda; en la Comuna, todos escucharán en silencio el lenguaje del amor.",
    "ConexionDoctrinal": ["Fenómenos Físicos", "Propósito Educativo", "Superación Material"],
    "NodosSimapticos": ["Altavoces del Espíritu", "Humanidad Sorda", "Lenguaje del Amor"]
  },
  "ART. 16-19: TIPOS DE MEDIUMNIDADES": {
    "PilotoDeCoherencia": "Codificamos las mediumnidades principales: Escritura mecánica e intuitiva, Comunicación hablada, Facultades curativas (magnetismo, hipnotismo), Videncia y Desdoblamiento consciente. La videncia unida al desdoblamiento es la cumbre de las facultades: permite al espíritu salir del cuerpo con conciencia plena y explorar los mundos.",
    "CitaInelutable": "La videncia y el desdoblamiento: las dos alas con que el espíritu vuela libre en el universo.",
    "EjemploPedagogico": "Es como tener primero un telescopio (videncia) y luego poder viajar físicamente a los planetas que observas (desdoblamiento). El desdoblamiento es el telescopio encarnado.",
    "ConexionDoctrinal": ["Tipos de Mediumnidades", "Desdoblamiento", "Videncia"],
    "NodosSimapticos": ["Alas del Espíritu", "Telescopio Encarnado", "Explorador de Mundos"]
  },
  "ART. 20-25: EL MAESTRO Y LA PSÍQUICA": {
    "PilotoDeCoherencia": "El Maestro tiene la obligación de enseñar a los psíquicos todos los conocimientos del espiritismo para su protección. La fuerza psíquica sin dirección es como la electricidad sin tierra: puede matar al conductor. El código de los artículos 22-25 es el reglamento de seguridad del laboratorio espiritual.",
    "CitaInelutable": "El maestro es el guardián y el guía del psíquico no desarrollado.",
    "EjemploPedagogico": "Es como un químico que antes de usar ácidos debe enseñar al aprendiz las medidas de seguridad. El maestro espiritual hace lo mismo: protege al instrumento antes de activarlo.",
    "ConexionDoctrinal": ["Maestro Guardián", "Psíquico", "Seguridad Espiritual"],
    "NodosSimapticos": ["Guardián del Laboratorio", "Electricidad sin Tierra", "Aprendiz del Espíritu"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario Sináptico
const terminosDic = {
  "Mediumnidad": {
    "Definición": "Facultad espiritual que permite la comunicación entre el espíritu encarnado y los espíritus libres, clasificada en tipos (escritura, habla, videncia, desdoblamiento, curación) según el grado de progreso del instrumento.",
    "Contexto": "Ley de las Mediumnidades en General.",
    "Conexiones": ["Espíritu", "Comunicación", "Progreso", "Amor"],
    "Obras": ["Ley de las Mediumnidades", "Buscando a Dios"]
  },
  "Desdoblamiento Consciente": {
    "Definición": "Facultad superior que permite al espíritu separarse voluntariamente del cuerpo con plena conciencia para explorar mundos, registrar verdades y regresar con conocimiento verificable.",
    "Contexto": "Art. 18 de la Ley de las Mediumnidades.",
    "Conexiones": ["Videncia", "Espíritu", "Exploración"],
    "Obras": ["Ley de las Mediumnidades", "Conócete a ti mismo"]
  },
  "Videncia": {
    "Definición": "Facultad de percibir realidades espirituales, enfermedades, mundos y verdades invisibles al ojo físico, producto del progreso del espíritu y el refinamiento de los fluidos del alma.",
    "Conexiones": ["Mediumnidad", "Desdoblamiento", "Progreso"],
    "Obras": ["Ley de las Mediumnidades"]
  },
  "Investidura del Médium": {
    "Definición": "Conjunto de condiciones morales y espirituales (humildad, limpieza fluídica, bondad, disciplina, plegaria) que legitiman al médium como instrumento auténtico y protegido.",
    "Conexiones": ["Médium", "Disciplina", "Amor"],
    "Obras": ["Ley de las Mediumnidades"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Ley de las Mediumnidades (Batch 1 - Arts. 1-25) y 4 términos sinápticos.');
