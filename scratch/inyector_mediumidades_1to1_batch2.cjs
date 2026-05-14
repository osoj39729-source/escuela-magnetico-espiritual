const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/ley-de-las-mediumidades-en-general_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Ley de las Mediumnidades (Batch 2 - Arts. 26-38 + Maestro Juez)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "ART. 26-27: UNIÓN DE PENSAMIENTOS EN REUNIÓN": {
    "PilotoDeCoherencia": "En las reuniones, la unión de pensamientos es el amplificador de la señal espiritual. Una sala de veinte personas pensando en amor produce una fuerza magnética veinte veces mayor que la de un solo espíritu. El pedido al Padre se hace con inspiración y sentimiento, no con fórmulas mecánicas. La espontaneidad del amor es la mejor oración.",
    "CitaInelutable": "La unidad de pensamiento en amor es la antena más poderosa del espíritu.",
    "EjemploPedagogico": "Es como un coro: la armonía de voces produce una belleza imposible para una sola voz. En la reunión, las conciencias unidas producen una vibración que abre los planos superiores.",
    "ConexionDoctrinal": ["Unidad de Pensamiento", "Sesión", "Magnetismo Colectivo"],
    "NodosSimapticos": ["Coro de Almas", "Antena Colectiva", "Señal del Amor"]
  },
  "ART. 28-29: MEDIUMS MORALISTAS Y CIENTÍFICOS": {
    "PilotoDeCoherencia": "Existen dos tipos principales de médiums comunicadores: los moralistas (que transmiten enseñanzas de vida y amor) y los científicos (que revelan descubrimientos y leyes de la naturaleza). Los científicos con desdoblamiento consciente están destinados a traer los secretos de los mundos mayores que renovarán todas las fuentes de riqueza de la Comuna.",
    "CitaInelutable": "Los mediums científicos son los pioneros del conocimiento del universo.",
    "EjemploPedagogico": "Es como tener corresponsales enviados a distintos países: el moralista manda reportajes de la vida social y el científico manda informes del laboratorio. Ambos son necesarios para completar la imagen del mundo.",
    "ConexionDoctrinal": ["Tipos de Médiums", "Descubrimientos", "Riqueza Comunal"],
    "NodosSimapticos": ["Corresponsal Espiritual", "Laboratorio de Mundos", "Fuentes de Riqueza"]
  },
  "ART. 30: EL MÉDIUM ES MISIONERO": {
    "PilotoDeCoherencia": "El médium es un misionero que no se pertenece a sí mismo sino a sus hermanos. Es un ser de sacrificio voluntario. Los que lo rodean tienen la obligación de respetarlo y protegerlo porque actúa como pararrayos de las impresiones del ambiente. Quien lo perturba a sabiendas se hace cómplice de la distorsión.",
    "CitaInelutable": "El médium es el pararrayos del amor: absorbe para proteger y transforma para elevar.",
    "EjemploPedagogico": "Es como el árbol pararrayos que desvía el rayo de la tempestad hacia la tierra, protegiendo la casa. Sin el árbol, el rayo destruiría. El médium desvía las energías oscuras hacia la transformación.",
    "ConexionDoctrinal": ["Misión del Médium", "Pararrayos", "Sacrificio"],
    "NodosSimapticos": ["Pararrayos de Amor", "Árbol Protector", "Ser de Sacrificio"]
  },
  "ART. 31-32: MEDIUMNIDAD Y SALUD MENTAL": {
    "PilotoDeCoherencia": "Las mediumnidades no producen locura: la locura es producida por la mediumnidad no desarrollada, reprimida o mal dirigida. El médium desarrollado nunca pierde la razón; la refuerza. La responsabilidad de los errores de salud recae sobre la ciencia médica que ignora la fisiología del espíritu y sobre los maestros que no educaron al instrumento.",
    "CitaInelutable": "La mediumnidad desarrollada fortalece la razón; la reprimida la destruye.",
    "EjemploPedagogico": "Es como el vapor de una caldera: si tiene escape válvula (desarrollo), la presión es fuerza controlada. Si la válvula está cerrada (represión), la caldera explota. La mediumnidad reprimida es la caldera sin válvula.",
    "ConexionDoctrinal": ["Salud Mental", "Represión", "Responsabilidad Médica"],
    "NodosSimapticos": ["Válvula de Vapor", "Caldera Espiritual", "Fisiología del Espíritu"]
  },
  "ART. 33-35: PROHIBICIONES Y ERA DE LA VERDAD": {
    "PilotoDeCoherencia": "Quedan prohibidas las evocaciones de curiosidad o materiales. Toda comunicación en la Era de la Verdad debe ser firmada con nombre conocido. Esto mata la mixtificación: si el espíritu comunicante firma su nombre, es responsable de sus palabras ante la ley de amor. La firma espiritual es el certificado de autenticidad del mensaje.",
    "CitaInelutable": "Estamos en la era de la verdad: toda comunicación sin firma es sospecha.",
    "EjemploPedagogico": "Es como un documento notarial: sin firma y sello, no tiene validez. En la Era de la Verdad, el espíritu notario firma sus comunicaciones con su nombre de progreso conocido.",
    "ConexionDoctrinal": ["Era de la Verdad", "Firma Espiritual", "Anti-mixtificación"],
    "NodosSimapticos": ["Notario del Espíritu", "Sello de Verdad", "Anti-Mixtificación"]
  },
  "ART. 36-37: ALEGRÍA Y FRATERNIDAD EN REUNIÓN": {
    "PilotoDeCoherencia": "La alegría es el mejor síntoma de que el conocimiento del acto es genuino. Los espíritus de amor padecen con nuestra tristeza y se dilatan con nuestra alegría. No tristeza ficticia ni risa histérica, sino la alegría sensata de quien sabe que la justicia rige todo. Esta alegría es el lubricante de la maquinaria espiritual.",
    "CitaInelutable": "La alegría espiritual es la firma del espíritu que comprende la ley.",
    "EjemploPedagogico": "Es como la luz del amanecer: no necesita gritar para ser alegre; su claridad dice todo. La alegría espiritual no necesita carcajadas; se manifiesta en la paz del que sabe que está bien.",
    "ConexionDoctrinal": ["Alegría", "Reunión", "Ambiente de Amor"],
    "NodosSimapticos": ["Luz del Amanecer", "Lubricante Espiritual", "Paz que Sonríe"]
  },
  "ART. 38: CUMPLIMIENTO Y NORMA DEL AMOR": {
    "PilotoDeCoherencia": "El artículo final sintetiza todo el código: cúmplanse todos los artículos con el amor como norma suprema. El amor no es un artículo del código, es el código entero. Todas las reglas de la mediumnidad son derivaciones de este principio único: el amor al Padre, a los hermanos y a la misión.",
    "CitaInelutable": "Sea ante todo y en todo vuestra norma, el Amor.",
    "EjemploPedagogico": "Es como el artículo final de toda constitución sagrada: todos los derechos y deberes se derivan de un solo principio. El amor es la constitución viva del espíritu.",
    "ConexionDoctrinal": ["Amor como Norma", "Síntesis", "Constitución del Espíritu"],
    "NodosSimapticos": ["Constitución del Alma", "Artículo Único", "Norma de Normas"]
  },
  "EL MAESTRO JUEZ: ESPIRITISMO LUZ Y VERDAD": {
    "PilotoDeCoherencia": "El Maestro cierra la obra con el llamado a la adopción de este código como guía de todo centro. No como dogma externo, sino como guía racional y expansivo. El Espiritismo Luz y Verdad no caminaría a pasos de electricidad si no tuviera esta metodología única y verificable. La filosofía que hace razonar es la única que convence y salva.",
    "CitaInelutable": "El Espiritismo Luz y Verdad da los principios y el todo del camino hacia la verdad.",
    "EjemploPedagogico": "Es como un sistema operativo para el espíritu: sin él, cada ordenador (ser humano) funciona diferente y no pueden compartir información. Con el sistema común, toda la red espiritual funciona en armonía.",
    "ConexionDoctrinal": ["Escuela", "Sistema Unificado", "Metodología"],
    "NodosSimapticos": ["Sistema Operativo del Alma", "Red Espiritual", "Metodología de Luz"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario Sináptico
const terminosDic = {
  "Era de la Verdad": {
    "Definición": "Periodo histórico-espiritual inaugurado por la Escuela de Trincado en que las comunicaciones espirituales deben ser verificables, firmadas y responsables, acabando con la mixtificación mediúmnica.",
    "Contexto": "Art. 35 de la Ley de las Mediumnidades.",
    "Conexiones": ["Transición", "Verdad", "Anti-mixtificación"],
    "Obras": ["Ley de las Mediumnidades", "Buscando a Dios"]
  },
  "Amor como Norma": {
    "Definición": "Principio rector de toda actividad espiritual y mediúmnica que establece el amor como la única ley válida de la cual se derivan todas las demás normas del código espiritual.",
    "Contexto": "Art. 38 de la Ley de las Mediumnidades.",
    "Conexiones": ["Código", "Ley Única", "Constitución"],
    "Obras": ["Ley de las Mediumnidades", "Conócete a ti mismo"]
  },
  "Médium Misionero": {
    "Definición": "Espíritu encarnado con facultades mediúmnicas que, por su grado de progreso o misión asignada, actúa como canal de comunicación e instrumento del amor universal sin pertenecerse a sí mismo.",
    "Conexiones": ["Misión", "Sacrificio", "Facultad"],
    "Obras": ["Ley de las Mediumnidades"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 8 nodos 1:1 de Ley de las Mediumnidades (Batch 2 - COMPLETA 100%) y 3 términos sinápticos.');
