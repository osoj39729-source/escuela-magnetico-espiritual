const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Filosofía Enciclopédica Universal Tomo 1 (Batch 8 - Claves 98 a 117)
const nuevosNodos = {
  "3938: Junio 10 de 1911 - Escrita, Trincado": {
    "PilotoDeCoherencia": "Elías en el Sinaí. El profeta Elías se manifiesta para cerrar el libro 'Buscando a Dios', revelando su papel histórico en la redacción de la Ley en el Sinaí y su continua asesoría espiritual.",
    "CitaInelutable": "Yo fui el profeta Elías; yo asistí antes al Sinaí... yo asistí y asisto a los consejos de Dios.",
    "EjemploPedagogico": "El arquitecto que diseñó los cimientos del edificio vuelve siglos después para poner la llave de oro en la puerta principal.",
    "ConexionDoctrinal": ["Elías (como Espíritu)", "Ley del Sinaí", "Buscando a Dios (Doctrinal)"],
    "NodosSimapticos": ["Elías (como Espíritu)"]
  },
  "3986: Junio 11 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Batalla por la Verdad. Se anuncia la cercanía de una batalla doctrinal donde la verdad obligará a desertar a los soldados ciegos del error y el dogma.",
    "CitaInelutable": "La batalla se avecina... la verdad se mostrará clara y ésta abrirá los ojos de los ciegos.",
    "EjemploPedagogico": "Cuando amanece, el soldado que peleaba contra sombras se da cuenta de que su enemigo era un fantasma y suelta el arma.",
    "ConexionDoctrinal": ["Lucha Doctrinal", "Victoria de la Verdad"],
    "NodosSimapticos": []
  },
  "4058: Junio 11 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Galardón del Amor. La grandeza del espíritu se mide exclusivamente por su capacidad de amar; el amor es el premio final del trabajo evolutivo.",
    "CitaInelutable": "Vuestra grandeza... si grande es vuestro amor.",
    "EjemploPedagogico": "Al final del día, no importa cuántas monedas ganaste, sino cuánta luz de afecto dejaste en los corazones que tocaste.",
    "ConexionDoctrinal": ["Grados de Amor", "Mérito Espiritual"],
    "NodosSimapticos": []
  },
  "4170: Junio 15 de 1911 (Día del Corpus) - Posesión M. P.": {
    "PilotoDeCoherencia": "Protesta contra el Dogma. Los cielos protestan contra los actos impíos de la Iglesia (Corpus Christi), subrayando la responsabilidad del hombre por su libre albedrío.",
    "CitaInelutable": "De los actos todos impíos... de la Iglesia Católica, protestarían hasta con rayos y truenos.",
    "EjemploPedagogico": "Hacer fiestas externas para Dios mientras el hermano sufre es un ruido que los cielos no pueden aceptar en silencio.",
    "ConexionDoctrinal": ["Crítica a la Ritualística", "Libre Albedrío"],
    "NodosSimapticos": ["Corpus Christi (Protesta Doctrinal)"]
  },
  "4202: Junio 16 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Orden Médico Espiritual. El hermano Pío explica que, aunque desea curar las materias infectas, el tiempo y los doctores están señalados por la Ley Universal.",
    "CitaInelutable": "Yo me convertiría de buen grado en doctor... pero no es el tiempo.",
    "EjemploPedagogico": "El deseo de ayudar debe someterse al orden del hospital universal; no todos pueden ser cirujanos en el mismo momento.",
    "ConexionDoctrinal": ["Jerarquía Médica Espiritual", "Tiempo de Curación"],
    "NodosSimapticos": []
  },
  "4246: Junio 16 de 1911 - Escrita, Trincado": {
    "PilotoDe Nazaret": "Vigilancia Maternal. María de Nazareth relata cómo cuidó al niño de una ingestión peligrosa, demostrando que la vigilancia espiritual es constante aunque no tengan manos físicas.",
    "CitaInelutable": "No da un latido sin que yo lo vea... no tenemos manos [físicas].",
    "EjemploPedagogico": "El protector es el aire que envuelve al niño; no lo agarra del brazo, pero amortigua su caída con su presencia magnética.",
    "ConexionDoctrinal": ["Protección de la Niñez", "Magnetismo Maternal"],
    "NodosSimapticos": []
  },
  "4262: Junio 18 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "El Vagabundo Espiritual. Un espíritu que vivió sin amor ni provecho en la tierra busca en la Escuela lo que nunca tuvo en vida, demostrando la necesidad de afecto en el más allá.",
    "CitaInelutable": "Fui un espíritu ligero... un vagabundo... ando buscando amor.",
    "EjemploPedagogico": "El que anduvo sin rumbo en la tierra sigue andando sin rumbo en el espíritu, hasta que encuentra un faro de luz y amor que lo detiene.",
    "ConexionDoctrinal": ["Vagabundo (en el Espíritu)", "Necesidad de Afecto"],
    "NodosSimapticos": ["Vagabundo (en el Espíritu)"]
  },
  "4305: Junio 20 de 1911 - Escrita, Trincado": {
    "PilotoDeCoherencia": "Terquedad y Miseria. María Magdalena llora por su protegido que cae en la miseria por su orgullo y falta de fe, instando a no mirar con indiferencia al desgraciado.",
    "CitaInelutable": "Ese espíritu me cuesta más lágrimas... por su terquedad y orgullo.",
    "EjemploPedagogico": "El orgullo es una piedra pesada que hunde al nadador; el protector llora al verlo hundirse sin poder soltar su lastre.",
    "ConexionDoctrinal": ["Orgullo y Miseria", "Compasión por el Caído"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Elías (como Espíritu)": {
    "Definición": "Entidad espiritual de alta jerarquía que en la historia bíblica fue el profeta Elías. En la misión de Trincado, se manifiesta como un asesor directo y precursor, participando en la revisión de la Ley y en el cierre doctrinal de obras fundamentales como 'Buscando a Dios'. Representa la continuidad de la revelación desde el Sinaí hasta la Comuna.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesión del 10 de Junio de 1911).",
    "Conexiones": ["Juan Bautista", "Moisés", "Justicia Universal"],
    "Obras": ["Filosofía Enciclopédica Universal", "Buscando a Dios"]
  },
  "Corpus Christi (Protesta Doctrinal)": {
    "Definición": "Postura crítica de la Escuela Magnético-Espiritual frente a las festividades exteriores y rituales del catolicismo, específicamente el Corpus Christi. Se considera un acto impío que sustituye la verdadera comunión del espíritu en amor por ceremonias materiales que insultan la inteligencia y la libertad del ser.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Mensaje del 15 de Junio de 1911).",
    "Conexiones": ["Crítica a la Iglesia", "Dogma", "Libre Albedrío"],
    "Obras": ["Filosofía Enciclopédica Universal", "Primer Rayo de Luz"]
  },
  "Vagabundo (en el Espíritu)": {
    "Definición": "Estado de un espíritu que, tras haber vivido en la tierra sin propósito, sin amor y sin provecho moral, continúa en el plano espiritual en un estado errante y desorientado. Su redención comienza cuando reconoce su carencia de afecto y busca la luz de la instrucción en centros de verdadera fraternidad.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Manifestación del espíritu vagabundo, Junio de 1911).",
    "Conexiones": ["Desorientación", "Necesidad de Amor", "Progreso"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 8 nodos PURA CALIDAD 1:1 de Filosofía Enciclopédica Tomo 1 (Batch 8) y 3 términos sinápticos.');
