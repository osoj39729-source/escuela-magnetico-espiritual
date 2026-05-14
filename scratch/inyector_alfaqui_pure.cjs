const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/alfaqui-vademecum_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

// Iniciar fresco para calidad pura 1:1
let esencia = {};
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Alfaquí Vademécum (Obra Completa - 16 Nodos)
const nuevosNodos = {
  "34: PREFACIO": {
    "PilotoDeCoherencia": "Propósito del manual. Trincado rechaza la memorización pesada y estéril de volúmenes enteros, proponiendo este Vademécum como una guía rápida de esencias para que el estudiante tenga la ley siempre a mano.",
    "CitaInelutable": "Obligarle al niño o al hombre a aprender de memoria todos los volúmenes... es un trabajo sin provecho y perjudicial.",
    "EjemploPedagogico": "No necesitas cargar toda la biblioteca en la mochila; solo necesitas la brújula y el mapa de esencias para no perderte.",
    "ConexionDoctrinal": ["Pedagogía Eficiente", "Manual del Estudiante"],
    "NodosSimapticos": []
  },
  "111: PARTE I": {
    "PilotoDeCoherencia": "Estructura formal de la primera parte: Principios Fundamentales.",
    "CitaInelutable": "PARTE I",
    "EjemploPedagogico": "Inicio de la instrucción.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "112: CAPÍTULO I: ELOÍ": {
    "PilotoDeCoherencia": "Definición del Creador. Eloí no es un Dios antropomórfico, sino el Axioma Universal: suma omnipotencia, sabiduría y amor, cuyo pensamiento vibra en el éter.",
    "CitaInelutable": "Eloí es el axioma universal... cuyo pensamiento eterno es la creación que vibra en el éter.",
    "EjemploPedagogico": "Eloí es al universo lo que el pensamiento es al hombre: la causa invisible de todo lo que se mueve.",
    "ConexionDoctrinal": ["Definición de Eloí", "Axioma Universal"],
    "NodosSimapticos": []
  },
  "233: CAPÍTULO II: LA VIDA": {
    "PilotoDeCoherencia": "Aniquilación de la nada. La vida es la vibración constante del pensamiento de Eloí a través del éter. El vacío y la nada no existen; todo está lleno de vida y vibración.",
    "CitaInelutable": "La vida es Eloí, como causa; el Espíritu como ejecutor... no existe el vacío... tampoco existe la nada.",
    "EjemploPedagogico": "El universo es una sopa espesa de vida; aunque no veas los ingredientes, la sustancia está en todas partes.",
    "ConexionDoctrinal": ["Inexistencia de la Nada", "Vibración del Éter"],
    "NodosSimapticos": []
  },
  "364: CAPÍTULO III: EL ESPÍRITU": {
    "PilotoDeCoherencia": "El ejecutor único. El espíritu es la voluntad mandataria de Eloí para demostrar la vida en sus formas orgánicas e inorgánicas. Es la esencia inteligente del éter.",
    "CitaInelutable": "El espíritu es la vida demostrativa... la acción única ejecutora del creador único Eloí.",
    "EjemploPedagogico": "Eloí es el arquitecto (causa) y el Espíritu es el ingeniero (ejecutor) que construye el edificio del cosmos.",
    "ConexionDoctrinal": ["Naturaleza del Espíritu", "Mandatario de Eloí"],
    "NodosSimapticos": []
  },
  "587: CAPITULO IV: LAS LEYES DEL UNIVERSO O DIVINAS": {
    "PilotoDeCoherencia": "La Ley de Amor. Solo existe una ley madre (Amor), de la cual nacen las leyes operativas de Afinidad y Justicia (el administrador y el cajero del universo).",
    "CitaInelutable": "Sólo hay una ley divina, y ésta es la de amor; pero esta da nacimiento a... afinidad y justicia.",
    "EjemploPedagogico": "El Amor es la constitución nacional; la Afinidad y la Justicia son las leyes civiles que regulan el tráfico diario de las almas.",
    "ConexionDoctrinal": ["Ley de Amor", "Afinidad y Justicia"],
    "NodosSimapticos": []
  },
  "666: PARTE SEGUNDA": {
    "PilotoDeCoherencia": "Estructura formal de la segunda parte: La Creación y los Seres.",
    "CitaInelutable": "PARTE SEGUNDA",
    "EjemploPedagogico": "Estudio de la manifestación material.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "667: CAPITULO V: LA CREACION Y SU FIN": {
    "PilotoDeCoherencia": "Eternidad del progreso. La creación es eterna porque el espíritu necesita cuerpos materiales como instrumentos para su progreso infinito e indefinido.",
    "CitaInelutable": "El fin primordial de la eterna creación es el progreso infinito e indefinido.",
    "EjemploPedagogico": "La creación es el gimnasio eterno donde el espíritu entrena para ser cada vez más sabio.",
    "ConexionDoctrinal": ["Progreso Infinito", "Propósito de la Materia"],
    "NodosSimapticos": []
  },
  "883: CAPITULO VI: LOS SERES SOBRE LA TIERRA": {
    "PilotoDeCoherencia": "Anatomía espiritual. Se explica cómo el espíritu forma el cuerpo materialmente mediante la atracción de elementos afines en los diferentes reinos.",
    "CitaInelutable": "¿Cómo forma su cuerpo, materialmente?... por la función espiritual.",
    "EjemploPedagogico": "El espíritu es el imán que atrae los minerales y nutrientes necesarios para fabricar su propia 'máquina' física.",
    "ConexionDoctrinal": ["Formación del Cuerpo", "Atracción de Elementos"],
    "NodosSimapticos": []
  },
  "976: CAPÍTULO VII: EL HOMBRE": {
    "PilotoDeCoherencia": "El Arca de Noé. El cuerpo humano es definido como el Arca de Noé porque contiene la síntesis de todos los elementos y especies que le precedieron en la evolución.",
    "CitaInelutable": "Es la verdadera arca de Noé, por cuanto está formado de las [especies previas].",
    "EjemploPedagogico": "Llevas en tu sangre el hierro del mineral, en tus células la savia del vegetal y en tus instintos la fuerza del animal; eres el resumen de toda la creación.",
    "ConexionDoctrinal": ["El Hombre como Síntesis", "Anatomía Racional"],
    "NodosSimapticos": ["Arca de Noé (Cuerpo Humano)"]
  },
  "1279: PARTE TERCERA": {
    "PilotoDeCoherencia": "Estructura formal de la tercera parte: Grados y Causas.",
    "CitaInelutable": "PARTE TERCERA",
    "EjemploPedagogico": "Estudio de la evolución social.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "1280: CAPÍTULO VIII: GRADOS DE PROGRESO": {
    "PilotoDeCoherencia": "Progreso colectivo. El progreso individual se hace ley social solo cuando la mayoría de los hombres alcanza ese mismo grado, transformando las costumbres en derecho.",
    "CitaInelutable": "No se manifiesta el grado de progreso adquirido hasta que la mayoría de los hombres están en ese mismo grado.",
    "EjemploPedagogico": "Un genio no hace progresar a una tribu si la tribu no entiende su invento; el progreso real es cuando todos saben usar el fuego.",
    "ConexionDoctrinal": ["Progreso Colectivo", "Ley de Costumbre"],
    "NodosSimapticos": []
  },
  "1399: CAPÍTULO IX: CONOCIMIENTOS DE CAUSAS Y EFECTOS": {
    "PilotoDeCoherencia": "Causalidad universal. Todo hecho humano o natural es el efecto de una causa anterior. Solo la sabiduría permite distinguir la causa real detrás de los fenómenos físicos.",
    "CitaInelutable": "Todos los hechos de los hombres son efecto de su causa correspondiente.",
    "EjemploPedagogico": "La lluvia no es la causa de que te mojes; la causa es que decidiste salir sin paraguas sabiendo que iba a llover. La sabiduría es mirar la nube, no solo el suelo mojado.",
    "ConexionDoctrinal": ["Ley de Causalidad"],
    "NodosSimapticos": []
  },
  "1462: PARTE CUARTA: CONOCIMIENTOS DE REGIMEN": {
    "PilotoDeCoherencia": "Estructura formal de la cuarta parte: Régimen y Ley Social.",
    "CitaInelutable": "PARTE CUARTA: CONOCIMIENTOS DE REGIMEN",
    "EjemploPedagogico": "La aplicación práctica de la doctrina.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "1464: CAPITULO X: EL HOMBRE ANTE LA LEY": {
    "PilotoDeCoherencia": "Inmanencia de la Ley. El hombre lleva impresa la ley de amor en su propio espíritu, por eso siempre se rehabilita tras las caídas, pues no puede eludir su propia naturaleza divina.",
    "CitaInelutable": "Lleva impresa en su ser la ley de amor... por eso siempre se rehabilita.",
    "EjemploPedagogico": "La ley de amor es el software de fábrica del espíritu; aunque el virus del fanatismo lo dañe, el sistema siempre intenta restaurarse.",
    "ConexionDoctrinal": ["Ley Impresa", "Rehabilitación Espiritual"],
    "NodosSimapticos": []
  },
  "1554: CAPÍTULO XI: DEFINICIONES MAXIMAS": {
    "PilotoDeCoherencia": "Aniquilación del misterio trinitario. Se desmitifica la trinidad católica (Padre, Hijo, Espíritu Santo) para establecer la trinidad racional: Eloí (Causa), Espíritu (Ejecutor), Materia (Instrumento).",
    "CitaInelutable": "Deseo conocer lo que hay sobre la trinidad... en las doctrinas derogadas existe una... pero no puedo explicármela racionalmente.",
    "EjemploPedagogico": "La trinidad religiosa es un acertijo sin solución; la trinidad racional es una ecuación matemática de la vida.",
    "ConexionDoctrinal": ["Trinidad Racional", "Rechazo del Dogma Católico"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Alfaquí": {
    "Definición": "Título que designa al maestro o conocedor de la ley en la Escuela Magnético-Espiritual. Proviene del árabe y se utiliza para rescatar la figura del sabio que enseña la ley racional y austera, alejándola de la figura del sacerdote o el místico.",
    "Contexto": "Título y Prefacio de Alfaquí Vademécum.",
    "Conexiones": ["Maestro Racional", "Pedagogía de la Escuela"],
    "Obras": ["Alfaquí Vademécum"]
  },
  "Arca de Noé (Cuerpo Humano)": {
    "Definición": "Metáfora científica que describe al cuerpo humano como la síntesis final de la evolución planetaria. Se llama 'Arca' porque en sus células, órganos e instintos transporta el resumen de todos los reinos anteriores (mineral, vegetal, animal) que el espíritu ha habitado para progresar.",
    "Contexto": "Alfaquí Vademécum (Capítulo VII).",
    "Conexiones": ["Evolución de las Especies", "Anatomía Racional", "Síntesis Evolutiva"],
    "Obras": ["Alfaquí Vademécum", "Conócete a ti mismo"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 16 nodos PURA CALIDAD 1:1 de Alfaquí Vademécum y 2 términos sinápticos. OBRA COMPLETADA 100%.');
