const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = {};
if (fs.existsSync(esenciaPath)) {
  try {
    esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
  } catch (e) {
    esencia = {};
  }
}
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Filosofía Enciclopédica Universal Tomo 1 (Batch 1 - Claves 0 a 19)
const nuevosNodos = {
  "0: DEDICATORIA": {
    "PilotoDeCoherencia": "Propósito de la obra: Luz y Amor para la humanidad.",
    "CitaInelutable": "DEDICATORIA.",
    "EjemploPedagogico": "El inicio del compendio de sabiduría.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "13: PROLOGO": {
    "PilotoDeCoherencia": "Introducción a la filosofía enciclopédica.",
    "CitaInelutable": "PROLOGO.",
    "EjemploPedagogico": "Marco teórico de la obra.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "203: Febrero 8 de 1910 - J.Trincado": {
    "PilotoDeCoherencia": "Fracaso de la fuerza. El hombre que impone su voluntad por capricho o fuerza se estrella contra su propio criterio.",
    "CitaInelutable": "Cuando el hombre trata de imponer su voluntad por la fuerza y el capricho, se estrella en su propio criterio.",
    "EjemploPedagogico": "La razón es un puente; la fuerza es un muro que corta el camino.",
    "ConexionDoctrinal": ["Libertad de Acción", "Criterio Racional"],
    "NodosSimapticos": []
  },
  "259: Febrero 11 de 1910 - Joaquín Trincado": {
    "PilotoDeCoherencia": "Perfección por la prueba. El sufrimiento y la negación de deseos inmediatos son necesarios para que el espíritu aprenda a investigar y comprobar.",
    "CitaInelutable": "Todo es enseñanza; todo es prueba y todo ayuda a la perfección.",
    "EjemploPedagogico": "El maestro no da la respuesta al alumno, le da el problema para que el alumno gane el conocimiento al resolverlo.",
    "ConexionDoctrinal": ["Progreso por Sufrimiento", "Escuela de la Vida"],
    "NodosSimapticos": []
  },
  "292: Febrero 13 de 1910 - Escrita por J.Trincado.": {
    "PilotoDeCoherencia": "Vida continuada. Manifestación de Paula González mostrando los lazos afectivos y rencores que persisten tras la desencarnación.",
    "CitaInelutable": "Se manifestó llorando por el abandono... dio relación de su esposo vivo.",
    "EjemploPedagogico": "La muerte no borra la memoria; el espíritu sigue sintiendo los lazos de la familia terrenal.",
    "ConexionDoctrinal": ["Vida Continuada", "Relaciones Espirituales"],
    "NodosSimapticos": []
  },
  "319: Febrero 16 - Francisco Xavier": {
    "PilotoDeCoherencia": "Protección espiritual. Promesa de que lo necesario no faltará para la misión de implantar el reino de Dios y su justicia.",
    "CitaInelutable": "Lo necesario no te faltará... pides todos los días el reino de Dios y su justicia.",
    "EjemploPedagogico": "El trabajador de la Ley nunca es abandonado por sus hermanos mayores en el espíritu.",
    "ConexionDoctrinal": ["Misión de Trincado", "Auxilio Espiritual"],
    "NodosSimapticos": ["Francisco Xavier (Misionero)"]
  },
  "353: Febrero 18 de 1910 - tinieblas.": {
    "PilotoDeCoherencia": "Justicia sobre el inquisidor. Manifestación de Torquemada para demostrar que nadie escapa a la ley de revisión, incluso los más poderosos opresores.",
    "CitaInelutable": "Obtuvimos comunicación del espíritu de Torquemada, Inquisidor de España.",
    "EjemploPedagogico": "Incluso el que encendió hogueras en la tierra termina compareciendo ante la luz de la verdad en el espíritu.",
    "ConexionDoctrinal": ["Justicia Universal", "Revisión de Actos"],
    "NodosSimapticos": ["Torquemada (como Espíritu)"]
  },
  "424: Febrero 18 de 1910 - Francisco Xavier": {
    "PilotoDeCoherencia": "Sublimidad del Espiritismo. El ejemplo práctico de las manifestaciones enseña más que bibliotecas enteras.",
    "CitaInelutable": "Lo grande y sublime del espiritismo lo vas palpando en ejemplos tan hermosos.",
    "EjemploPedagogico": "Un solo hecho de comunicación real vale más que mil teorías sobre el alma.",
    "ConexionDoctrinal": ["Fenomenología Espírita"],
    "NodosSimapticos": []
  },
  "443: Abril 5 de 1910 - despertó la médium.": {
    "PilotoDeCoherencia": "Unidad de pensamiento. Prohibición de preguntas capciosas y exigencia de unidad de ideas para recibir instrucción elevada.",
    "CitaInelutable": "Gran necesidad de la unidad de ideas y pensamientos y prohibí las preguntas capciosas.",
    "EjemploPedagogico": "Una radio solo sintoniza la música si la antena está limpia y bien dirigida; así es la mente del grupo en sesión.",
    "ConexionDoctrinal": ["Unidad de Pensamiento", "Mediumnidad Racional"],
    "NodosSimapticos": []
  },
  "545: Aclaraciones a las comunicaciones anteriores - Joaquín Trincado": {
    "PilotoDeCoherencia": "Deber de instrucción. Trincado asume la responsabilidad de aclarar y salvar puntos doctrinales para evitar errores en la instrucción.",
    "CitaInelutable": "Faltaría a mi deber si no hiciera aclaraciones y salvedades.",
    "EjemploPedagogico": "El filtro de la razón debe limpiar el agua que llega del manantial espiritual.",
    "ConexionDoctrinal": ["Responsabilidad del Misionero", "Criterio de Verdad"],
    "NodosSimapticos": []
  },
  "580: Abril 12 de 1910 - Desconocido": {
    "PilotoDeCoherencia": "Conocimiento por esencia. Los espíritus elevados a veces ocultan su nombre para que el hombre aprenda a conocerlos por su esencia y no sea engañado.",
    "CitaInelutable": "No te quiero decir mi nombre... así debes acostumbrarte a conocer a los espíritus.",
    "EjemploPedagogico": "No juzgues la carta por el sello, sino por lo que está escrito dentro.",
    "ConexionDoctrinal": ["Identificación de Espíritus"],
    "NodosSimapticos": []
  },
  "663: Abril 15 de 1910 - Joaquín Trincado": {
    "PilotoDeCoherencia": "Instrucción para la fe. La instrucción espiritual viene para afirmar la fe (conciencia) de los hombres unidos en pensamiento.",
    "CitaInelutable": "Pides instrucción para afirmaros en la fe; a eso vengo: es decir, a eso me mandan.",
    "EjemploPedagogico": "La luz no viene para que cierres los ojos, sino para que veas el camino con claridad.",
    "ConexionDoctrinal": ["Fe Racional", "Instrucción Espiritual"],
    "NodosSimapticos": []
  },
  "726: Abril 20 de 1910 - Abril 20 de 1910": {
    "PilotoDeCoherencia": "Luz por resignación. Un espíritu rústico (Antonio Labrador) alcanza luz por su resignación y caridad en la tierra, demostrando que la elevación no depende de la cultura académica.",
    "CitaInelutable": "A pesar de ser un rústico labrador... tuve luz, por mi resignación y caridad.",
    "EjemploPedagogico": "El corazón limpio brilla más que el cerebro lleno de libros pero vacío de amor.",
    "ConexionDoctrinal": ["Mérito Espiritual", "Resignación Consciente"],
    "NodosSimapticos": []
  },
  "744: Mayo 1º de  1910 - Antonio de Padua.": {
    "PilotoDeCoherencia": "Dura misión. Antonio de Padua reconoce la dificultad de la misión de Trincado y afirma que el poder de todos (los espíritus de luz) es el poder de él.",
    "CitaInelutable": "Tú tienes... dura misión, y el poder de todos, es tu poder.",
    "EjemploPedagogico": "El general en el campo de batalla tiene detrás de sí a todo el ejército de la nación.",
    "ConexionDoctrinal": ["Misión de Trincado", "Comunión de Poder"],
    "NodosSimapticos": ["Antonio de Padua (como Espíritu)"]
  },
  "775: Mayo 2 - incendio.": {
    "PilotoDeCoherencia": "Voluntad sin límites. El apoyo espiritual se manifiesta ante la voluntad del hombre que no reconoce límites para evitar el derramamiento de sangre.",
    "CitaInelutable": "Solo pueden ser llevadas a cabo por voluntades que... no reconocen límites.",
    "EjemploPedagogico": "El mar se abre ante el que camina sin miedo hacia su destino justo.",
    "ConexionDoctrinal": ["Voluntad del Espíritu", "Justicia Preventiva"],
    "NodosSimapticos": []
  },
  "795: Mayo 24 - Mayo 24": {
    "PilotoDeCoherencia": "Filtro mediumnímico. Trincado rechaza manifestaciones que no satisfacen la razón o que no llevan a un camino de progreso real.",
    "CitaInelutable": "No me satisfizo la forma de explicar las cosas... no era para llevarla a un camino justo.",
    "EjemploPedagogico": "No todo lo que vuela es un pájaro de luz; hay que distinguir el canto de la verdad.",
    "ConexionDoctrinal": ["Control Mediumnímico", "Criterio de Verdad"],
    "NodosSimapticos": []
  },
  "801: Mayo 25 - Desconocido": {
    "PilotoDeCoherencia": "Huestes de Francisco Xavier. Antonio de Padua se identifica como parte de las huestes del guía principal, estableciendo el orden jerárquico de la misión.",
    "CitaInelutable": "Dijo que él pertenecía a las huestes de Francisco Xavier.",
    "EjemploPedagogico": "Cada espíritu de luz tiene su puesto en el gran taller del Padre.",
    "ConexionDoctrinal": ["Jerarquía Espiritual", "Misión Planetaria"],
    "NodosSimapticos": []
  },
  "832: Mayo 28 - e contestó: “Tienes que luchar mucho,": {
    "PilotoDeCoherencia": "Lucha contra el desánimo. La necesidad de combatir las influencias que intentan desanimar o dominar a los médiums mediante magnetismo de baja vibración.",
    "CitaInelutable": "Tienes que luchar mucho... quiso, con su gran poder, magnetizarlas para dominarlas.",
    "EjemploPedagogico": "El protector debe ser el escudo contra los vientos que quieren apagar la llama de la verdad.",
    "ConexionDoctrinal": ["Magnetismo Dominador", "Protección de Médiums"],
    "NodosSimapticos": []
  },
  "872: Mayo 29 - Pues bien.- Adiós.": {
    "PilotoDeCoherencia": "Transición de la muerte. Información sobre espíritus recién desencarnados (Carmen) y la influencia de la madre en la salud del niño.",
    "CitaInelutable": "No se da cuenta aún de nada... la tenemos a nuestro lado.",
    "EjemploPedagogico": "El despertar tras la muerte es gradual, como el despertar de un sueño profundo.",
    "ConexionDoctrinal": ["Desencarnación", "Influencia Materna"],
    "NodosSimapticos": []
  },
  "883: Mayo 31 - Comunicación de Francisco Xavier escrita": {
    "PilotoDeCoherencia": "Odio y perturbación. Las manifestaciones de envidia y odio pueden causar perturbaciones físicas y espirituales en los instrumentos (médiums).",
    "CitaInelutable": "Sin disimular su odio... la dejó trastornada por muchos días.",
    "EjemploPedagogico": "Un pensamiento de odio es un rayo que puede quemar la sensibilidad del que lo recibe.",
    "ConexionDoctrinal": ["Perturbación Espiritual", "Higiene Mental"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Francisco Xavier (Misionero)": {
    "Definición": "Espíritu guía y protector principal de Joaquín Trincado en los inicios de su misión. Identificado como el jefe de las huestes espirituales que operaron la Tercera Etapa, Francisco Xavier actuó como el mentor directo que aseguró la provisión de medios y la instrucción necesaria para el desarrollo de la Escuela Magnético-Espiritual de la Comuna Universal.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Comunicaciones de 1910).",
    "Conexiones": ["Trincado", "Antonio de Padua", "Misioneros"],
    "Obras": ["Filosofía Enciclopédica Universal", "Vida de María"]
  },
  "Torquemada (como Espíritu)": {
    "Definición": "Manifestación espiritual del antiguo Inquisidor General de España en las sesiones de Trincado. Su presencia sirve como ejemplo doctrinal de la 'Justicia de Revisión', donde un espíritu que sembró terror y dogma debe comparecer ante la luz de la verdad para su propia educación y eventual rehabilitación, demostrando que nadie es impune ante la Ley Universal.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesión del 18 de Febrero de 1910).",
    "Conexiones": ["Inquisición", "Justicia Universal", "Revisión de Actos"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  },
  "Antonio de Padua (como Espíritu)": {
    "Definición": "Espíritu de luz que se manifestó como protector y guía de varios médiums en la Escuela de Trincado. Identificado como subordinado a Francisco Xavier, su labor se centró en la educación mediumnímica y en el apoyo moral a la misión del Maestro, despojándose de los atributos místicos que la Iglesia le otorgó.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Comunicaciones de Mayo de 1910).",
    "Conexiones": ["Francisco Xavier", "Protección Espiritual", "Mediumnidad"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 20 nodos PURA CALIDAD 1:1 de Filosofía Enciclopédica Tomo 1 (Batch 1) y 3 términos sinápticos.');
