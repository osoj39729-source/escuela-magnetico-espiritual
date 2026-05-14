const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// RE-DESTILACIÓN PURA 1:1 - Buscando a Dios (Batch 9 - Claves 6582 a 7783)
const nuevosNodos = {
  "068: Párrafo XVI: MUERTE DE LA CONDESA Y ESTUPRO DE VALENCIA": {
    "PilotoDeCoherencia": "Culminación del Vicio. Se narran los hechos finales de la tragedia Borgia, donde el estupro y la muerte violenta sellan la herencia de una estirpe papal sin moral.",
    "CitaInelutable": "MUERTE DE LA CONDESA Y ESTUPRO DE VALENCIA... el desenlace trágico de una vida de engaños.",
    "EjemploPedagogico": "Una vela que se apaga soltando un humo negro y maloliente; su luz nunca fue limpia y su final solo deja manchas de hollín en la pared.",
    "ConexionDoctrinal": ["Corrupción Papal", "Justicia de los Hechos"],
    "NodosSimapticos": []
  },
  "069: Párrafo XVII: MUERTE DE JUANUCHO, VALENCIA Y ADUCIO": {
    "PilotoDeCoherencia": "Liquidación de Culpables. El fin de los ejecutores del poder Borgia muestra que quienes siembran vientos de violencia terminan cosechando tempestades de autodestrucción.",
    "CitaInelutable": "MUERTE DE JUANUCHO, VALENCIA Y ADUCIO... la ley de causa y efecto cumpliéndose en el fango.",
    "EjemploPedagogico": "Piezas de un dominó que caen una tras otra; el primer movimiento (el primer crimen) asegura que la última pieza también caerá, no importa cuánto tiempo pase.",
    "ConexionDoctrinal": ["Ley de Causa y Efecto", "Justicia"],
    "NodosSimapticos": []
  },
  "070: Párrafo XVIII: LA SANTIDAD DE LOS PONTÍFICES": {
    "PilotoDeCoherencia": "Sarcasmo Doctrinal. Se denuncia el título de 'Santidad' como una máscara blasfema que oculta a hombres cargados de vicios, crímenes y ambiciones mundanas.",
    "CitaInelutable": "LA SANTIDAD DE LOS PONTIFICES... un título robado a la justicia para cubrir la iniquidad.",
    "EjemploPedagogico": "Un fango podrido al que se le pone una etiqueta de 'agua pura de manantial'; la etiqueta no cambia la podredumbre, solo engaña al que tiene sed y no mira el contenido.",
    "ConexionDoctrinal": ["Santidad (Crítica)", "Blasfemia"],
    "NodosSimapticos": ["Santidad (Crítica)"]
  },
  "071: Capítulo Duodécimo: LA RAZÓN TIENE RAZÓN, LA IGLESIA CATÓLICA MIENTE": {
    "PilotoDeCoherencia": "Dicotomía Fundamental. Se establece el veredicto final de la obra: la razón es la única guía verdadera, mientras que la iglesia es un sistema basado en la mentira institucionalizada.",
    "CitaInelutable": "LA RAZÓN TIENE RAZÓN, LA IGLESIA CATÓLICA MIENTE... no hay verdad fuera de la ley natural.",
    "EjemploPedagogico": "Un debate entre un astrónomo que usa un telescopio (razón) y un hombre que prefiere creer que la luna es de queso porque lo leyó en un cuento viejo (iglesia).",
    "ConexionDoctrinal": ["Razón vs Dogma", "Verdad"],
    "NodosSimapticos": ["Razón (Soberanía)"]
  },
  "072: Párrafo I: DESCUBRIMIENTOS EN MI VIAJE": {
    "PilotoDeCoherencia": "Evidencia de Campo. Trincado relata sus hallazgos y observaciones directas sobre la decadencia religiosa y la necesidad de una nueva luz para la humanidad.",
    "CitaInelutable": "DESCUBRIMIENTOS EN MI VIAJE... lo que mis ojos han visto confirma lo que mi espíritu sabía.",
    "EjemploPedagogico": "Un inspector que recorre una fábrica que se dice 'modelo' y encuentra que las máquinas están oxidadas y los obreros esclavizados; su informe es el descubrimiento de la mentira.",
    "ConexionDoctrinal": ["Experiencia Directa", "Realismo"],
    "NodosSimapticos": []
  },
  "073: Párrafo II: CONFIRMACIONES": {
    "PilotoDeCoherencia": "Validación de la Verdad. Cada hecho histórico y científico confirma que la doctrina de la Escuela es la única que armoniza con las leyes del universo.",
    "CitaInelutable": "CONFIRMACIONES... la historia y la ciencia son los testigos de la razón.",
    "EjemploPedagogico": "Cada pieza que encaja perfectamente en el rompecabezas confirma que la imagen de la caja era la correcta; las confirmaciones son las piezas que ya no pueden moverse.",
    "ConexionDoctrinal": ["Ciencia y Doctrina", "Confirmación Histórica"],
    "NodosSimapticos": []
  },
  "074: Párrafo III: LA ESCUELA ESÉNICA": {
    "PilotoDeCoherencia": "Linaje Espiritual. Se rescata la sabiduría de los esenios como el verdadero origen del conocimiento de Juan y Jesús, lejos de la influencia de los templos oficiales.",
    "CitaInelutable": "LA ESCUELA ESENICA... donde se aprendió la sabiduría que los sacerdotes quisieron quemar.",
    "EjemploPedagogico": "Un manantial oculto en la montaña de donde beben los sabios; mientras en el valle todos beben agua estancada y sucia, el manantial esenio mantiene la pureza original.",
    "ConexionDoctrinal": ["Esenios", "Juan el Solitario (Misión)"],
    "NodosSimapticos": ["Esenios (Linaje)"]
  },
  "075: Párrafo IV: EL GRITO DE LA CONCIENCIA": {
    "PilotoDeCoherencia": "Despertar del Espíritu. La conciencia humana llega a un punto donde ya no puede soportar el peso de la mentira religiosa y grita por su libertad original.",
    "CitaInelutable": "EL GRITO DE LA CONCIENCIA... la voz que los tiranos no pueden callar con hogueras.",
    "EjemploPedagogico": "Un prisionero que, después de años de silencio, encuentra su voz y grita tan fuerte que las paredes de su celda empiezan a agrietarse por la vibración de su verdad.",
    "ConexionDoctrinal": ["Conciencia (Despertar)", "Libertad"],
    "NodosSimapticos": []
  },
  "076: Párrafo V: EL ASIENTO DEL DIOS DE AMOR": {
    "PilotoDeCoherencia": "Presencia Interna. Se reafirma que Dios no está en las nubes ni en los altares, sino en el centro de la conciencia humana cuando esta actúa con amor y justicia.",
    "CitaInelutable": "EL ASIENTO DEL DIOS DE AMOR... dentro de ti está el templo que no ha sido hecho por manos de hombres.",
    "EjemploPedagogico": "Un hombre que viaja por todo el mundo buscando un tesoro, para finalmente descubrir que el tesoro estaba enterrado debajo de su propia cama; el asiento es el corazón del hombre.",
    "ConexionDoctrinal": ["Asiento del Dios Amor", "Justicia Interna"],
    "NodosSimapticos": ["Asiento del Dios Amor"]
  },
  "077: Capítulo Trece: EL ESPIRITISMO, O IGLESIA UNIVERSAL": {
    "PilotoDeCoherencia": "Definición del Espiritismo. El espiritismo no es una religión, sino la 'Iglesia Universal' (comunidad de espíritus) basada en la ley natural y la fraternidad sin dogmas.",
    "CitaInelutable": "EL ESPIRITISMO, O IGLESIA UNIVERSAL... la ciencia de la vida y la ley del universo.",
    "EjemploPedagogico": "El aire que todos respiramos; no pertenece a ninguna nación ni a ningún templo, es de todos y para todos, y sin él no hay vida posible; así es el espiritismo racional.",
    "ConexionDoctrinal": ["Espiritismo Racionalista", "Iglesia Universal (Concepto)"],
    "NodosSimapticos": ["Espiritismo Racionalista"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Santidad (Crítica)": {
    "Definición": "Término denunciado como una usurpación de la jerarquía eclesiástica para elevar a hombres comunes y viciosos a un estatus de infalibilidad y pureza inexistente, distorsionando el concepto de respeto y justicia.",
    "Contexto": "Buscando a Dios (Capítulo Undécimo).",
    "Conexiones": ["Blasfemia", "Papado", "Hipocresía"],
    "Obras": ["Buscando a Dios"]
  },
  "Razón (Soberanía)": {
    "Definición": "Facultad suprema del espíritu que le permite ser su propio juez y legislador. La doctrina trincadista sostiene que nada está por encima de la razón, pues es la luz del Creador en el hombre.",
    "Contexto": "Buscando a Dios (Capítulo Duodécimo).",
    "Conexiones": ["Discernimiento", "Libertad", "Justicia"],
    "Obras": ["Buscando a Dios", "Filosofía Austera Racional"]
  },
  "Esenios (Linaje)": {
    "Definición": "Comunidad de estudio y vida pura en la antigua Judea de la que formaron parte Juan y Jesús. Representan la custodia de la verdad espiritual fuera del sistema sacerdotal oficial del judaísmo.",
    "Contexto": "Buscando a Dios (Capítulo Duodécimo).",
    "Conexiones": ["Juan el Solitario", "Jesús", "Sabiduría"],
    "Obras": ["Buscando a Dios", "Jesús Hombre y no Dios"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 9 de Buscando a Dios (10 nodos 1:1) y 3 términos sinápticos. Razón vs Iglesia sellado.');
