const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/los-extremos-se-tocan_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

const nuevosNodos = {
  "7: CAPÍTULO 1: P R E M I S A": {
    "PilotoDeCoherencia": "Esta premisa es el escalpelo de Mi Escuela. Entramos en juicio sin misericordia contra el error acumulado. La guerra actual es la demostración física de que los extremos del error han colisionado. No busco complacer, busco curar la gangrena del dogma con la luz fuerte de la razón.",
    "CitaInelutable": "Foco de luz demasiado fuerte y potente y escalpelo sin misericordia de cirujano.",
    "EjemploPedagogico": "Como el cirujano que ignora los lamentos del paciente para extirpar el tumor que lo mataría, Mi Doctrina ignora las quejas del orgullo herido para extirpar la mentira religiosa.",
    "ConexionDoctrinal": ["Juicio Crítico", "Extremos del Error", "Escalpelo de la Razón"],
    "NodosSimapticos": ["Escalpelo de la Razón", "Gangrena del Dogma", "Juicio sin Misericordia"]
  },
  "244: P R E F A C I O": {
    "PilotoDeCoherencia": "La palabra de Jehová es el Padre Hellí, y su única palabra es 'Ama a tu hermano'. Todo lo demás pasará, pero esta ley es eterna. El prefacio establece que la religión ha usado el nombre de Dios para esclavizar, pero la palabra real es libertad y amor.",
    "CitaInelutable": "Pasarán los cielos y la tierra; pero no pasará la palabra de Jehová.",
    "EjemploPedagogico": "Las religiones son como nubes que tapan el sol; pueden oscurecer el día, pero no pueden apagar el sol. La ley de amor es el sol que siempre vuelve cuando las nubes del dogma se disipan.",
    "ConexionDoctrinal": ["Jehová", "Hellí", "Eternidad de la Ley"],
    "NodosSimapticos": ["Jehová", "Palabra Eterna", "Ley del Padre"]
  },
  "253: este mandato: Ama a tu hermano.": {
    "PilotoDeCoherencia": "Este es el axioma indestructible del Sánscrito. La fraternidad no es una opción, es un hecho biológico y espiritual. Quien niega al hermano, se niega a sí mismo y a su Padre. Aquí denuncio cómo la humanidad ha ignorado este mandato único prefiriendo el oro y el poder.",
    "CitaInelutable": "Los hombres todos son hermanos; hacha puesta a la raíz de todas las instituciones.",
    "EjemploPedagogico": "La fraternidad es como la sangre en el cuerpo: si una mano decide que no es hermana del pie y corta el flujo, ambos mueren. La humanidad es un solo cuerpo en desequilibrio.",
    "ConexionDoctrinal": ["Sánscrito", "Fraternidad Universal", "Axioma de Shet"],
    "NodosSimapticos": ["Hacha a la Raíz", "Fraternidad", "Axioma Indestructible"]
  },
  "484: P R O L O G O": {
    "PilotoDeCoherencia": "Bajo la luz de la razón y el calor del amor, presento esta obra como la síntesis del progreso máximo. La trinidad racional (Creador, Naturaleza, Espíritu) sustituye a la trinidad dogmática. Es el momento de la liquidación de las cuentas viejas para abrir la era de la Comuna.",
    "CitaInelutable": "Fuerza del progreso máximo material reasumido en la mágica trinidad de: Creador, Naturaleza y Espíritu.",
    "EjemploPedagogico": "El prólogo es la invitación al banquete de la verdad. No servimos migajas de fe, sino el pan sólido del conocimiento racional para el espíritu hambriento de justicia.",
    "ConexionDoctrinal": ["Trinidad Racional", "Liquidación de Cuentas", "Comuna"],
    "NodosSimapticos": ["Trinidad Racional", "Progreso Máximo", "Pan de la Verdad"]
  },
  "579: LOS DOS POLOS": {
    "PilotoDeCoherencia": "Es vital distinguir: los Polos son la Ley (Norte/Sur, Bien/Mejor). Los Extremos son el error que se sale de la ley. Los polos se complementan en armonía; los extremos chocan en catástrofe. La humanidad ha vivido en los extremos, olvidando los polos de la ley única.",
    "CitaInelutable": "Los polos de la ley nunca colisionan; los extremos del error siempre se tocan.",
    "EjemploPedagogico": "Como los dos extremos de una cuerda que se tira hasta romperse, el error estira la realidad hasta que el 'corto circuito' de la guerra la hace colapsar.",
    "ConexionDoctrinal": ["Polos de la Ley", "Extremos del Error", "Armonía Universal"],
    "NodosSimapticos": ["Polos vs Extremos", "Aislante Racional", "Corto Circuito"]
  },
  "581: CAPÍTULO PRIMERO — Ley Fundamental y Única: El Amor": {
    "PilotoDeCoherencia": "El Amor es la Ley Madre. No es sentimentalismo religioso, sino la fuerza centrípeta que mantiene el universo unido. De ella nacen todas las leyes físicas y morales. Negar el amor es negar la vida misma; por eso el odio es la muerte del espíritu.",
    "CitaInelutable": "El Amor es la Ley única que rige el universo; es la ley madre de todas las demás leyes.",
    "EjemploPedagogico": "El amor es para el espíritu lo que la gravedad es para los planetas: la fuerza que evita que todo se disperse en el caos. Sin gravedad no hay orden; sin amor no hay justicia.",
    "ConexionDoctrinal": ["Ley Madre", "Ley de Amor", "Fuerza Centrípeta Espiritual"],
    "NodosSimapticos": ["Ley Madre", "Gravedad Espiritual", "Fuerza del Universo"]
  },
  "721: CAPÍTULO SEGUNDO — Leyes Fatales: Afinidad, Justicia, Igualdad y Compensación": {
    "PilotoDeCoherencia": "Estas cuatro leyes son fatales porque son de necesidad matemática. La Afinidad agrupa; la Justicia sentencia; la Igualdad nivela; la Compensación equilibra. Nadie escapa a ellas. Son el mecanismo por el cual el Universo se auto-corrige sin necesidad de un dios juez externo.",
    "CitaInelutable": "De la máxima ley de amor, se derivan estas cuatro leyes fatales, porque son justicia de necesidad.",
    "EjemploPedagogico": "Son como las reglas de la aritmética: puedes intentar sumar mal por ignorancia o malicia, pero el resultado correcto (la compensación) siempre se impondrá al final de la cuenta.",
    "ConexionDoctrinal": ["Afinidad", "Justicia", "Igualdad", "Compensación"],
    "NodosSimapticos": ["Aritmética del Universo", "Auto-Corrección", "Fatalidad de la Ley"]
  },
  "1053: CAPÍTULO TERCERO — Adán y Eva": {
    "PilotoDeCoherencia": "Restituyo la verdad sobre Adán y Eva: no son culpables, son misioneros. No hubo pecado, hubo misión. Adán fue el primer hombre en quien la luz de la razón despertó la conciencia de su origen. Su 'caída' fue la encarnación necesaria para civilizar la materia.",
    "CitaInelutable": "El Adán bíblico ha traído a los hombres dando cabezadas de incredulidad, por causa del dogma.",
    "EjemploPedagogico": "Adán y Eva son como los colonos que dejan una ciudad cómoda para ir a una tierra virgen y dura: no es un castigo, es un trabajo de amor para expandir la vida del espíritu.",
    "ConexionDoctrinal": ["Adán", "Eva", "Misión Misionera", "Anti-Pecado Original"],
    "NodosSimapticos": ["Adán Misionero", "Eva Iniciadora", "Misión Terrestre"]
  },
  "1359: Austera Racional": {
    "PilotoDeCoherencia": "En este segmento, establezco la conexión entre 'Los Extremos se Tocan' y 'Filosofía Austera Racional'. El trabajo es una sola pieza. Aquí hablo sobre el valor del trabajo como único medio de progreso y cómo la resistencia al trabajo es la causa de la miseria.",
    "CitaInelutable": "Todo eso se consigue, sólo por el trabajo; todo lo que se opone a esto, es error.",
    "EjemploPedagogico": "El trabajo es el combustible de la luz. Si dejas de trabajar, tu lámpara se apaga. No hay milagro que supla al esfuerzo personal.",
    "ConexionDoctrinal": ["Ley del Trabajo", "Filosofía Austera Racional", "Progreso"],
    "NodosSimapticos": ["Combustible de la Luz", "Valor del Trabajo", "Antídoto a la Miseria"]
  },
  "1387: CAPÍTULO CUARTO — El Sánscrito y su Autor: Ley de Shet": {
    "PilotoDeCoherencia": "Shet, hace 57 siglos, fundó la civilización con el Sánscrito. Su ley era 'Unidad en el Creador y Ley Común'. Esta luz fue tolerada durante 57 siglos; ahora, con la liquidación, la tregua ha terminado. Vengo a reclamar la herencia de Shet para sus hijos legítimos.",
    "CitaInelutable": "Shet escribió: 'unidad en el universo', unidad en el Creador, y una sola ley común, que es Amor.",
    "EjemploPedagogico": "El Sánscrito es el plano original de la casa. Las religiones son reformas ilegales que han tapado las ventanas y derribado paredes. Yo traigo el plano original para reconstruirla.",
    "ConexionDoctrinal": ["Shet", "Sánscrito", "Liquidación"],
    "NodosSimapticos": ["Plano Original", "Tregua de 57 Siglos", "Ley Común"]
  },
  "1539: Berlín Septiembre 7 — La Orden del Emperador": {
    "PilotoDeCoherencia": "Analizo los hechos de 1916: el Emperador Guillermo ordena incluir la oración en la liturgia ante la guerra. Demuestro la hipocresía de los gobernantes que invocan a Dios para justificar la matanza. La religión es el cómplice del militarismo en la destrucción del hombre.",
    "CitaInelutable": "Incluir en la Liturgia... durante este tiempo de guerra. (Cita de la orden de Guillermo)",
    "EjemploPedagogico": "Es como un asesino que reza antes de disparar creyendo que el rezo limpia la sangre. Dios no escucha rezos de guerra; Dios solo ve las obras de paz.",
    "ConexionDoctrinal": ["Hipocresía Religiosa", "Causas de la Guerra", "Militarismo"],
    "NodosSimapticos": ["Liturgia de Guerra", "Hipocresía de Estado", "Cómplice de Sangre"]
  }
};

// Actualizar Esencia (Asegurando 1:1)
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario con el contexto de estos capítulos
const terminosDic = {
  "Escalpelo de la Razón": {
    "Definición": "Metáfora del método doctrinal de Trincado: un corte preciso y sin concesiones al error para salvar la verdad. Implica la destrucción del prejuicio para liberar al espíritu.",
    "Contexto": "Capítulo 1 de Los Extremos se Tocan. Trincado lo define como la única forma de curar la 'gangrena' del dogma acumulado.",
    "Conexiones": ["Juicio Crítico", "Diagnóstico Doctrinal", "Anti-Dogma"],
    "Obras": ["Los Extremos se Tocan", "Filosofía Austera Racional"]
  },
  "Trinidad Racional": {
    "Definición": "La tríada que constituye la realidad universal: Creador (Causa Única), Naturaleza (Efecto y Laboratorio) y Espíritu (Agente Racional y Heredero). Sustituye a la trinidad teológica abstracta.",
    "Contexto": "Prólogo de Los Extremos se Tocan. Es la base del progreso material y espiritual sólido.",
    "Conexiones": ["Hellí", "Naturaleza", "Espíritu"],
    "Obras": ["Los Extremos se Tocan", "Buscando a Dios", "Filosofía Austera Racional"]
  },
  "Tregua de 57 Siglos": {
    "Definición": "El periodo de tolerancia otorgado a la humanidad desde la entrega del Sánscrito por Shet hasta la liquidación final (siglo XX). Tiempo para que el hombre aprendiera la ley por experiencia.",
    "Contexto": "Capítulo IV de Los Extremos se Tocan. Trincado anuncia que esta tregua ha terminado y la ley de justicia ahora actúa plenamente.",
    "Conexiones": ["Shet", "Sánscrito", "Liquidación"],
    "Obras": ["Los Extremos se Tocan", "Profilaxis de la Vida"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 11 nodos 1:1 y 3 términos sinápticos profundos.');
