const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Conócete a ti mismo (Batch 9 - Final - Claves 132 a 148)
const nuevosNodos = {
  "17689: Párrafo Vii: Los HoMBRes TRinos, DÚos Y Unos; ToDo es TRiniDaD": {
    "PilotoDeCoherencia": "Unidad en la diversidad. El desarrollo humano constituye una trinidad colectiva; no solo el individuo es trino, sino que la humanidad progresa en bloques trinitarios.",
    "CitaInelutable": "La humanidad también constituye un desarrollo... todo es trinidad.",
    "EjemploPedagogico": "Un bosque es una trinidad de suelo, árboles y aire, igual que el hombre es cuerpo, alma y espíritu.",
    "ConexionDoctrinal": ["Trinidad Universal"],
    "NodosSimapticos": []
  },
  "18185: átomos radioactivos.": {
    "PilotoDeCoherencia": "Sustancia y Éter. Se destaca la desproporción entre la materia (mínima) y el éter (infinito), validando científicamente la supremacía de lo intangible sobre lo denso.",
    "CitaInelutable": "Escasez extrema de la materia... volumen de una cabeza de alfiler en una esfera de 200 km.",
    "EjemploPedagogico": "La materia es solo la espuma de un océano infinito de éter espiritual.",
    "ConexionDoctrinal": ["Física del Éter"],
    "NodosSimapticos": []
  },
  "18228: Párrafo Viii: ¿PoR QUÉ no Ha HaBiDo JUsTiCia?": {
    "PilotoDeCoherencia": "Transición necesaria. La falta de justicia pasada se debió a que la Tierra era un mundo de expiación; la justicia plena solo es posible en el Mundo Regenerado del siglo segundo.",
    "CitaInelutable": "Cuando sólo amor y equidad se respirará en la tierra... lean los felices hombres del siglo segundo.",
    "EjemploPedagogico": "No puedes pedirle orden a un campo de batalla; el orden llega cuando la guerra (el juicio) ha terminado.",
    "ConexionDoctrinal": ["Justicia en el Tiempo"],
    "NodosSimapticos": []
  },
  "18298: Párrafo iX: Una soLa BanDeRa Y Un soLo CReDo": {
    "PilotoDeCoherencia": "Unidad de la humanidad. Se remite a 'Buscando a Dios' para fundamentar que el Espiritismo es la única iglesia universal y la base de la unión definitiva.",
    "CitaInelutable": "Una sola bandera y un solo credo... no se puede ir más allá del espiritismo.",
    "EjemploPedagogico": "Mil ríos pueden tener nombres distintos, pero todos terminan siendo el mismo mar.",
    "ConexionDoctrinal": ["Unidad de Credo"],
    "NodosSimapticos": []
  },
  "18328: Punto primero: “naDa MÁs De nUeVo se PUeDe DeCiR, aQUÍ ni MÁs aLLÁ”": {
    "PilotoDeCoherencia": "Plenitud de la revelación. Trincado afirma que ha entregado toda la verdad fundamental necesaria; lo que venga después será solo detalle o aplicación de estos principios.",
    "CitaInelutable": "Nada más de nuevo se puede decir... toda verdad es relativa, pero llegamos a la verdad absoluta del espíritu.",
    "EjemploPedagogico": "Ya tienes todas las letras del abecedario; ahora te toca a ti escribir los libros de la nueva era.",
    "ConexionDoctrinal": ["Cierre de la Revelación"],
    "NodosSimapticos": []
  },
  "18403: Punto segundo: no se PUeDe iR MÁs aLLÁ DeL esPiRiTisMo": {
    "PilotoDeCoherencia": "Límite del saber. El Espiritismo es la causa misma dentro del hombre; no hay nada fuera de él porque él es todo el Universo manifestado.",
    "CitaInelutable": "No se puede ir más allá del espiritismo... estando dentro de ellos la causa misma.",
    "EjemploPedagogico": "No puedes salir de tu propia piel para ver qué hay fuera, porque tu piel es el límite de tu mundo; el Espiritismo es la piel del alma universal.",
    "ConexionDoctrinal": ["Supremacía del Espiritismo"],
    "NodosSimapticos": []
  },
  "18511: Punto tercero: La CoMUna CoMo BanDeRa Y eL esPiRiTisMo CoMo CReDo": {
    "PilotoDeCoherencia": "Definición del Estandarte. La Comuna es la práctica (Justicia) y el Espiritismo es la mística (Eloí). Juntos forman el sistema perfecto.",
    "CitaInelutable": "Decir comuna, es decir justicia; y decir espiritismo, es decir Eloí.",
    "EjemploPedagogico": "La Comuna es el cuerpo sano; el Espiritismo es el alma sabia que lo dirige.",
    "ConexionDoctrinal": ["Bandera y Credo"],
    "NodosSimapticos": []
  },
  "18581: Párrafo X: eL MUnDo ReGeneRaDo Y eLoÍ soLo aDoRaDo": {
    "PilotoDeCoherencia": "Victoria final. La humanidad canta victoria al conocerse a sí misma y encontrar al Creador dentro del propio espíritu, no en montañas o templos externos.",
    "CitaInelutable": "¡Por fin, humanidad, cantas tu victoria!... El creador... está dentro de ti mismo, en tu espíritu.",
    "EjemploPedagogico": "Buscabas la llave de tu casa en la calle, y siempre la tuviste en el bolsillo de tu conciencia.",
    "ConexionDoctrinal": ["Mundo Regenerado", "Dios Interior"],
    "NodosSimapticos": ["Mundo Regenerado"]
  },
  "18797: aPÉnDiCe: eL JUiCio De La RaZón FisioLoGÍa, FisioGnosia, eTnoLoGÍa Y ÉTiCa": {
    "PilotoDeCoherencia": "Herramientas del juicio. Se definen las cuatro ciencias necesarias para el juicio de la razón: funciones vitales (Fisiología), leyes naturales (Fisiognosia), carácter (Etnología) y moral (Ética).",
    "CitaInelutable": "Fisiología, Fisiognosia, Etnología y Ética... el juicio de la razón.",
    "EjemploPedagogico": "Son los cuatro puntos cardinales que permiten al hombre orientarse en el océano de la verdad sin naufragar.",
    "ConexionDoctrinal": ["Juicio de la Razón", "Fisiognosia"],
    "NodosSimapticos": ["Fisiognosia"]
  },
  "19280: cando a Dios”, “Filosofía Austera Racional”, “Los Extremos se Tocan”": {
    "PilotoDeCoherencia": "Bibliografía de la Verdad. Estas obras conforman el análisis histórico y metafísico definitivo de la vida de Jesús y la denuncia de su secuestro por la Iglesia.",
    "CitaInelutable": "Análisis Histórico, Filosófico y Metafísico de la vida... de nuestro hermano Jesús.",
    "EjemploPedagogico": "Son los expedientes judiciales que demuestran el fraude cometido contra el mensaje del Maestro.",
    "ConexionDoctrinal": ["Análisis de la Vida de Jesús"],
    "NodosSimapticos": []
  },
  "19286: “Código de Amor Universal” Tomos I. Para el Régimen de la": {
    "PilotoDeCoherencia": "Legislación Comunal. El Código llega para regir a los hombres trinos que están en posesión del conocimiento y la justicia.",
    "CitaInelutable": "Código de Amor Universal... para el régimen de la Comuna.",
    "EjemploPedagogico": "Es la constitución de la nueva Tierra.",
    "ConexionDoctrinal": ["Código de Amor Universal (Doctrinal)"],
    "NodosSimapticos": ["Código de Amor Universal (Doctrinal)"]
  },
  "19287: Comuna de Amor y Ley. El código de Amor Universal llega a la hu-": {
    "PilotoDeCoherencia": "Diagnóstico del mal. El Tomo I del Código estudia la raíz de todos los males sufridos por la familia terrenal para poder extirparlos.",
    "CitaInelutable": "Tomo I, estudia a fondo, sondeando hasta la raíz, las causas de todos los males.",
    "EjemploPedagogico": "Antes de operar, el cirujano necesita el mapa exacto del tumor; el Tomo I es ese mapa social.",
    "ConexionDoctrinal": ["Causas de los Males Sociales"],
    "NodosSimapticos": []
  },
  "19295: “Código de Amor Universal” Tomos II. Para el régimen de la Co-": {
    "PilotoDeCoherencia": "Séptimo Día. El Tomo II contiene las leyes del descanso prometido y el ascenso al Quinto Amor: el Amor Universal.",
    "CitaInelutable": "Leyes que le han de regir en su séptimo día... ascenso al Quinto Amor.",
    "EjemploPedagogico": "Es el manual de instrucciones para vivir en el paraíso que nosotros mismos construiremos con el trabajo.",
    "ConexionDoctrinal": ["Quinto Amor", "Séptimo Día"],
    "NodosSimapticos": ["Quinto Amor"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Mundo Regenerado": {
    "Definición": "Estado evolutivo superior del planeta Tierra tras el Juicio Final y la implantación de la Comuna de Amor y Ley. Se caracteriza por la desaparición de las religiones, las fronteras y la propiedad privada, donde la humanidad vive en armonía con las leyes universales y el espíritu consciente de su eternidad.",
    "Contexto": "Conócete a ti mismo (Capítulo X, Párrafo X).",
    "Conexiones": ["Comuna Universal", "Séptimo Día", "Juicio Final"],
    "Obras": ["Conócete a ti mismo", "El Espiritismo en su Asiento"]
  },
  "Fisiognosia": {
    "Definición": "Rama del conocimiento racional definida por Trincado como el estudio profundo y la comprensión de las leyes de la naturaleza en su manifestación física y espiritual. Es una de las cuatro herramientas fundamentales del 'Juicio de la Razón'.",
    "Contexto": "Conócete a ti mismo (Apéndice).",
    "Conexiones": ["Juicio de la Razón", "Leyes Naturales", "Fisiología"],
    "Obras": ["Conócete a ti mismo"]
  },
  "Código de Amor Universal (Doctrinal)": {
    "Definición": "Cuerpo legislativo entregado por el Maestro Joaquín Trincado para regir la convivencia social, económica y espiritual de la humanidad en el régimen de la Comuna. Se divide en dos tomos: el primero dedicado al diagnóstico de los males pasados y el segundo a las leyes positivas del Séptimo Día.",
    "Contexto": "Conócete a ti mismo (Anuncios finales).",
    "Conexiones": ["Comuna de Amor y Ley", "Séptimo Día", "Justicia Comunal"],
    "Obras": ["Código de Amor Universal", "Conócete a ti mismo"]
  },
  "Quinto Amor": {
    "Definición": "El grado supremo del sentimiento humano: el Amor Universal. Tras haber superado los amores parciales (filial, fraternal, de pareja, nacional), el espíritu asciende a la capacidad de amar a toda la creación sin distinciones, siendo esta la base moral de la Comuna.",
    "Contexto": "Conócete a ti mismo (Referencias al Código).",
    "Conexiones": ["Amor Universal", "Los Cinco Amores", "Comuna"],
    "Obras": ["Los Cinco Amores", "Código de Amor Universal"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 13 nodos finales PURA CALIDAD 1:1 de Conócete a ti mismo (Batch 9) y 4 términos sinápticos. OBRA COMPLETADA 100%.');
