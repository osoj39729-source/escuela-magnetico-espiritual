const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 6)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "7842: CAPÍTULO IX — FILOSOFÍA CONTEMPORÁNEA": {
    "PilotoDeCoherencia": "La filosofía contemporánea es un campo de batalla. Por un lado, el materialismo ciego; por otro, el espiritualismo vago. Mi Escuela aparece para poner orden. Denunciamos que la filosofía se ha vuelto una mercancía de cátedra en lugar de ser el pan de las almas. La verdadera filosofía contemporánea debe ser la de la Comuna.",
    "CitaInelutable": "La filosofía contemporánea agoniza en la abstracción porque le falta el espíritu.",
    "EjemploPedagogico": "Es como un mercado donde todos gritan pero nadie vende nada que alimente. Los filósofos contemporáneos discuten sobre la forma del plato mientras el pueblo muere de hambre de verdad.",
    "ConexionDoctrinal": ["Siglo XX", "Crisis del Pensamiento", "Comuna"],
    "NodosSimapticos": ["Filosofía Contemporánea", "Mercado de Cátedra", "Hambre de Verdad"]
  },
  "8120: CAPÍTULO X — LA PSICOLOGÍA EN FRANCIA": {
    "PilotoDeCoherencia": "Francia ha aportado claridad, pero se ha enredado en el sensibilismo. Ribot y otros intentan explicar el espíritu por la patología. Denuncio que estudiar al hombre solo cuando está enfermo es como intentar conocer la luz estudiando las sombras. La psicología debe estudiar la salud del espíritu.",
    "CitaInelutable": "No se puede conocer la vida estudiando solo la degeneración de la materia.",
    "EjemploPedagogico": "Es como intentar entender cómo funciona un reloj estudiando solo relojes rotos. Podrás saber por qué se detienen, pero nunca sabrás el misterio del tiempo que marcaban cuando estaban sanos.",
    "ConexionDoctrinal": ["Psicología Francesa", "Patología", "Luz y Sombra"],
    "NodosSimapticos": ["Ribot", "Estudio de Sombras", "Salud del Espíritu"]
  },
  "8389: CAPÍTULO XI — LA PSICOLOGÍA EN ALEMANIA": {
    "PilotoDeCoherencia": "Denuncio la 'blasfemia' alemana que pretende medir la inteligencia por el tamaño o el peso del cerebro. El cerebro es solo la dinamo, el reflector. La inteligencia es del espíritu, que es inmaterial. El alma impregna todo el cuerpo, desde el cerebro hasta las uñas. Reducir al hombre a su cráneo es materialismo feroz.",
    "CitaInelutable": "No es el tamaño del cerebro la causa de la mentalidad, sino el grado de progreso del espíritu.",
    "EjemploPedagogico": "Es como decir que una lámpara grande da más luz que una pequeña. Si la pequeña tiene una bombilla potente (un espíritu sabio) y la grande está fundida, la pequeña iluminará el mundo. La potencia está en la energía, no en el vidrio.",
    "ConexionDoctrinal": ["Cerebro Dinamo", "Ubicuidad del Alma", "Inteligencia Espiritual"],
    "NodosSimapticos": ["Blasfemia Cerebral", "Reflector y Dinamo", "Alma en las Uñas"]
  },
  "8650: EL ERROR DE LA PSICOFÍSICA": {
    "PilotoDeCoherencia": "La psicofísica intenta aplicar matemáticas a la sensibilidad. Es un error de base. No se puede medir el dolor o la alegría con pesas y medidas materiales. La sensibilidad es una vibración del espíritu. La verdadera medida es la armonía con la Ley de Amor, que no cabe en laboratorios.",
    "CitaInelutable": "La sensibilidad del espíritu escapa a las balanzas de la materia.",
    "EjemploPedagogico": "Es como intentar medir la belleza de una sinfonía pesando las partituras. El papel pesa, pero la música vuela. La psicofísica pesa el papel y cree que ha medido la música.",
    "ConexionDoctrinal": ["Sensibilidad", "Vibración", "Límites de la Materia"],
    "NodosSimapticos": ["Error Psicofísico", "Peso de la Partitura", "Medida de la Vibración"]
  },
  "8920: EL CEREBRO COMO DÍNAMO Y REFLECTOR": {
    "PilotoDeCoherencia": "El cerebro es el órgano de relación, no el creador del pensamiento. Es la dínamo que transforma la vibración espiritual en corriente nerviosa y el reflector que proyecta el pensamiento al mundo. Si el reflector está sucio (por vicio o dogma), la luz del espíritu sale distorsionada.",
    "CitaInelutable": "El cerebro es el instrumento, pero el músico es el espíritu.",
    "EjemploPedagogico": "Si el piano está desafinado, el mejor pianista del mundo hará ruido. El espíritu es el pianista; el cerebro es el piano. Cuida tu instrumento para que tu espíritu pueda tocar su melodía de luz.",
    "ConexionDoctrinal": ["Instrumento Cerebral", "Relación Espíritu-Materia", "Pensamiento"],
    "NodosSimapticos": ["Cerebro Dínamo", "Pianista del Espíritu", "Reflector Sucio"]
  },
  "9200: LA UBICUIDAD DEL ALMA EN EL CUERPO": {
    "PilotoDeCoherencia": "Afirmo contra la ciencia oficial: el alma no reside solo en un punto del cerebro. El alma es el fluido que cohesiona y anima cada célula. Está en la punta de los dedos y en la raíz del cabello. Por eso el dolor en cualquier parte afecta al todo. El hombre es una unidad indisoluble mientras está encarnado.",
    "CitaInelutable": "¿No está el alma en las uñas, lo mismo que en el cerebro?",
    "EjemploPedagogico": "El alma es como el agua en una esponja: no está en un solo poro, está en todos. Si aprietas un rincón de la esponja, el agua se desplaza en toda ella. Así es la sensibilidad en el cuerpo humano.",
    "ConexionDoctrinal": ["Alma Fluídica", "Unidad Biológica", "Sensibilidad"],
    "NodosSimapticos": ["Alma en todo el Cuerpo", "Agua en la Esponja", "Unidad Vital"]
  },
  "9450: LA INFLUENCIA DEL MEDIO Y LA HERENCIA": {
    "PilotoDeCoherencia": "La herencia material existe, pero la herencia espiritual es la suprema. El medio influye, pero el espíritu soberano puede vencer al medio. Denuncio el fatalismo biológico que dice que el hombre es esclavo de sus genes. El espíritu es el dueño de su destino.",
    "CitaInelutable": "El espíritu se impone a la herencia de la carne por la fuerza de su voluntad.",
    "EjemploPedagogico": "La herencia es el traje que te dan al nacer; el medio es el clima. Pero tú eres el que decide si camina bajo la lluvia o busca refugio. El traje no camina solo; lo mueves tú.",
    "ConexionDoctrinal": ["Herencia vs Voluntad", "Soberanía", "Progreso"],
    "NodosSimapticos": ["Herencia de Carne", "Dueño del Destino", "Traje y Clima"]
  },
  "9700: EL TRABAJO MENTAL Y EL AGOBIO DEL CUERPO": {
    "PilotoDeCoherencia": "Explico por qué el pensar agota el cuerpo físico. El cerebro, al trabajar como reflector, consume energía biológica. Si el pensamiento es desordenado o apasionado, quema el sistema nervioso. El estudio austero y ordenado, en cambio, armoniza y fortalece.",
    "CitaInelutable": "El pensamiento es una fuerza que consume la materia si no se gobierna con ley.",
    "EjemploPedagogico": "Es como una lámpara: si le pones demasiado voltaje (pasiones), el filamento se quema. Si el voltaje es el correcto (razón), la lámpara ilumina sin dañarse.",
    "ConexionDoctrinal": ["Energía Vital", "Salud Mental", "Equilibrio"],
    "NodosSimapticos": ["Agobio Mental", "Voltaje del Espíritu", "Armonía de la Lámpara"]
  },
  "10000: EL YO FRENTE AL FOCO DE LUZ": {
    "PilotoDeCoherencia": "El 'Yo' es el observador en el foco de la conciencia. Vemos los efectos de la luz (nuestros actos), pero debemos buscar la causa en nuestro interior. La causa de todo lo que nos sucede está en nuestro propio espíritu. Nadie es víctima del destino, todos somos autores de nuestra vida.",
    "CitaInelutable": "La causa de la luz no está en el foco, sino en la energía que lo alimenta.",
    "EjemploPedagogico": "Miras una película y ves las imágenes en la pantalla. El ignorante cree que la película está en la pantalla. El sabio sabe que la película está en el proyector que tiene a su espalda. Tu espíritu es el proyector.",
    "ConexionDoctrinal": ["Causalidad Interna", "Responsabilidad", "Conciencia"],
    "NodosSimapticos": ["Proyector del Espíritu", "Foco de Luz", "Autoría de Vida"]
  },
  "10300: CRÍTICA A LA MENTE COMO ENTIDAD SEPARADA": {
    "PilotoDeCoherencia": "Rechazo el término 'mente' si se usa para separar el pensamiento del espíritu. La mente es solo la función del espíritu usando el cerebro. No hay una 'mente' que piense por sí sola. Es el Espíritu el que piensa, ama y actúa. La fragmentación del ser es un error de la ciencia vieja.",
    "CitaInelutable": "Llaman mente al alma, pero es el espíritu el único actor consciente.",
    "EjemploPedagogico": "Es como llamar 'vuelo' al pájaro. El vuelo es lo que el pájaro hace, pero el pájaro es el que vuela. La mente es el vuelo; el Espíritu es el pájaro.",
    "ConexionDoctrinal": ["Unidad del Ser", "Mente vs Espíritu", "Funcionalismo"],
    "NodosSimapticos": ["Mente es Función", "Pájaro y Vuelo", "Unidad Consciente"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Cerebro Dínamo": {
    "Definición": "Concepto trincadista que define al cerebro como el órgano encargado de transformar la energía vibratoria del espíritu en impulsos nerviosos y pensamientos comprensibles en la materia.",
    "Contexto": "Capítulo XI de Filosofía Austera Racional. Se opone a la idea de que el cerebro 'produce' el pensamiento.",
    "Conexiones": ["Espíritu", "Instrumento Cerebral", "Reflector"],
    "Obras": ["Filosofía Austera Racional", "El Magnetismo en su Origen"]
  },
  "Ubicuidad del Alma": {
    "Definición": "La presencia del fluido anímico en cada una de las células del cuerpo físico, garantizando la unidad de sensibilidad y vida en todo el organismo.",
    "Contexto": "Segunda Parte de Filosofía Austera Racional.",
    "Conexiones": ["Alma", "Unidad Vital", "Sensibilidad"],
    "Obras": ["Filosofía Austera Racional", "Profilaxis de la Vida"]
  },
  "Blasfemia Cerebral": {
    "Definición": "Término de Trincado para calificar la teoría materialista que pretende medir la capacidad espiritual o intelectual de un hombre por el tamaño o peso de su masa encefálica.",
    "Contexto": "Capítulo XI de Filosofía Austera Racional.",
    "Conexiones": ["Materialismo", "Cerebro Dínamo", "Igualdad Espiritual"],
    "Obras": ["Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Filosofía Austera Racional (Batch 6) y 3 términos sinápticos.');
