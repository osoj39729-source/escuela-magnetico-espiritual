const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-2_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Filosofía Enciclopédica Universal Tomo 2 (Batch 4 - Claves 33 a 47)
const nuevosNodos = {
  "3453: Enero 14 Hora 21 (Portillo) - El Crítico": {
    "PilotoDeCoherencia": "Comunión de Existencia. La vida es amor en movimiento; al igual que las gotas de lluvia se unen en arroyos y ríos, los seres buscan su equilibrio en la comunión universal.",
    "CitaInelutable": "La existencia es amor... las gotas disueltas vienen; pero forman un arroyo... recorriendo la pendiente, hasta encontrar equilibrio.",
    "EjemploPedagogico": "Cada gota de agua es un espíritu; sola se evapora, pero unida a otras forma la fuerza del río que mueve el mundo y llega al océano del Padre.",
    "ConexionDoctrinal": ["Amor Universal", "Solidaridad de los Seres"],
    "NodosSimapticos": []
  },
  "3663: Desdoblamiento y visión - Trincado.": {
    "PilotoDeCoherencia": "Viaje Interastral. El pensamiento y el espíritu pueden cruzar inmensidades espaciales donde el Sol se reduce a una estrella, demostrando la magnitud del Cosmos.",
    "CitaInelutable": "Crucé espacios de una inmensidad horrorosa, capaz de perderse en ellos el pensamiento. El Sol había quedado a distancia tal, que no se veía.",
    "EjemploPedagogico": "El viajero que sale de su aldea y sube a la montaña más alta; desde allí su casa es un punto invisible y descubre que el mundo es infinito.",
    "ConexionDoctrinal": ["Pluralidad de Mundos", "Inmensidad del Cosmos"],
    "NodosSimapticos": []
  },
  "3850: Enero 26 de 1912 - Joaquín Trincado": {
    "PilotoDeCoherencia": "Primer Desafío Justiciero. Trincado evoca a las falanges rebeldes y mistificadoras para someterlas a la justicia de la razón, terminando con la impunidad del espacio.",
    "CitaInelutable": "Evoqué a todos los espíritus rebeldes y malignos del espacio para oír mi petición de justicia.",
    "EjemploPedagogico": "El juez que llama a todos los delincuentes que se escondían en el bosque para que den cuenta de sus actos ante la luz del sol.",
    "ConexionDoctrinal": ["Justicia de la Ley", "Autoridad del Maestro"],
    "NodosSimapticos": []
  },
  "4286: Febrero 4 de 1912 (Portillo) - hay en disidencia?": {
    "PilotoDeCoherencia": "Juicio a la Jerarquía Eclesiástica. Llamada formal al espacio para juzgar a los jefes del cristianismo; los 'santos' dogmáticos se muestran hostiles ante la justicia real.",
    "CitaInelutable": "Llamada al espacio y juicio a los jefes de la Iglesia Cristiana.",
    "EjemploPedagogico": "Un tribunal donde los que se creían jueces perpetuos son sentados en el banquillo de los acusados por las obras de su propia historia.",
    "ConexionDoctrinal": ["Juicio Universal", "Crítica al Clero"],
    "NodosSimapticos": []
  },
  "4428: Se retiró el espíritu y nos elevamos  desdoblados...": {
    "PilotoDeCoherencia": "Triángulo Magnético de Poder. El Maestro, el Médium y el Vidente forman una figura de fuerza para presenciar las deliberaciones espirituales y la jerarquía de Xavier.",
    "CitaInelutable": "Formamos un triángulo, viendo las deliberaciones... Xavier con el Ancla, seguido por Jesús.",
    "EjemploPedagogico": "Tres antorchas que se juntan para iluminar una cueva profunda donde una sola no alcanzaría a mostrar el fondo.",
    "ConexionDoctrinal": ["Triángulo Magnético (Práctica)", "Jerarquía de Xavier"],
    "NodosSimapticos": ["Triángulo Magnético (Práctica)"]
  },
  "4458: Hora 20 y 30 (Posesión Portillo) - Manuel Papa del siglo XII": {
    "PilotoDeCoherencia": "Confesión Papal. Un Papa del siglo XII reconoce que su antigua autoridad era falsa y se somete a la equidad de la ley impulsada por la Escuela.",
    "CitaInelutable": "No soy, no somos lo que éramos y afirmamos que estamos dentro de la gracia de la justicia.",
    "EjemploPedagogico": "El general que se quita las medallas falsas y pide perdón a los soldados que mandó al error, aceptando ser un simple peón en la obra de la verdad.",
    "ConexionDoctrinal": ["Justicia de Revisión", "Misericordia del Padre"],
    "NodosSimapticos": []
  },
  "4577: El medium continuó sin perder posesión y dijo - Jesús de Nazaret.": {
    "PilotoDeCoherencia": "Ruptura del Martirio. Jesús declara que se ha roto el instrumento de su martirio (el dogma/la cruz), aunque sufre por los 'negros de conciencia' que aún persisten.",
    "CitaInelutable": "Hoy se ha roto el instrumento de mi martirio... aun quedan muchos 'Negros de conciencia'.",
    "EjemploPedagogico": "El prisionero al que le quitan las cadenas, pero llora porque ve que otros prefieren seguir encadenados por voluntad propia.",
    "ConexionDoctrinal": ["Fin del Dogma", "Espíritus Negros (Conciencia)"],
    "NodosSimapticos": ["Instrumento de Martirio (Simbología)", "Espíritus Negros (Conciencia)"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Triángulo Magnético (Práctica)": {
    "Definición": "Configuración de fuerzas fluídicas formada por el Maestro (Director), un Médium (Receptor) y un Vidente (Observador). Esta unión permite una estabilidad vibratoria superior para realizar investigaciones en el espacio, juicios espirituales y desdoblamientos a grandes distancias con seguridad y precisión.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 2 (Sesión de Juicio a la Iglesia, 1912).",
    "Conexiones": ["Magnetismo", "Mediumnidad", "Protección"],
    "Obras": ["Filosofía Enciclopédica Universal", "El Espiritismo Estudiado"]
  },
  "Instrumento de Martirio (Simbología)": {
    "Definición": "Término utilizado para referirse a la cruz y a toda la estructura dogmática que ha deformado la figura de Jesús de Nazaret, convirtiendo su mensaje de amor en una religión de sacrificio y muerte. Su ruptura simboliza la liberación definitiva del espíritu de Jesús de las garras del catolicismo.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 2 (Manifestación de Jesús de Nazaret).",
    "Conexiones": ["Dogma", "Cristianismo", "Jesús de Nazaret"],
    "Obras": ["Filosofía Enciclopédica Universal", "Jesús hombre y no Dios"]
  },
  "Espíritus Negros (Conciencia)": {
    "Definición": "Calificativo para las entidades espirituales que presentan una opacidad o 'negrura' en su periespíritu debido a la persistencia en el odio, la ambición, el fanatismo o la traición consciente a las leyes de amor. No se refiere al color físico, sino al estado vibratorio de la conciencia ante la luz de la verdad.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 2 (Descripción de los detractores por Jesús).",
    "Conexiones": ["Conciencia", "Vibración", "Justicia Universal"],
    "Obras": ["Filosofía Enciclopédica Universal", "El Espiritismo en su Asiento"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 4 de Tomo 2 (7 nodos) y 3 términos sinápticos. Juicio a la Iglesia documentado.');
