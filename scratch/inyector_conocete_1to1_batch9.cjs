const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Conócete a ti mismo (Batch 9 - Caridad vs Justicia)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "11103: LA CULPABILIDAD DE LAS RELIGIONES": {
    "PilotoDeCoherencia": "Declaramos con rigor que solo las religiones son culpables del mal mundial. Han desviado la mirada del hombre hacia ídolos mudos mientras sus hermanos morían de hambre y guerra. Al ocultar la ley de amor y responsabilidad, han mantenido a la humanidad en una infancia artificial y dolorosa. La cuenta de justicia les será cobrada íntegramente.",
    "CitaInelutable": "La religión es el único obstáculo entre el hombre y el Creador.",
    "EjemploPedagogico": "Es como un guía que te lleva por un camino lleno de espinas diciéndote que es el único, mientras oculta la carretera asfaltada que está al lado. El guía (religión) lo hace para cobrarte por cada curación de tus heridas.",
    "ConexionDoctrinal": ["Culpabilidad", "Mal Mundial", "Obstáculo"],
    "NodosSimapticos": ["Guía Engañoso", "Camino de Espinas", "Cuenta de Justicia"]
  },
  "11414: LA CARIDAD RELIGIOSA ES UN BALDÓN": {
    "PilotoDeCoherencia": "La caridad es el insulto que la religión lanza a la cara de la justicia. Dar una limosna para lavar la conciencia mientras se mantiene el sistema de explotación es un acto de hipocresía suprema. En la Comuna no hay caridad porque hay justicia: a nadie le sobra lo que a otro le falta.",
    "CitaInelutable": "La caridad es el parche miserable con que la religión tapa la herida de la injusticia.",
    "EjemploPedagogico": "Es como romperle las piernas a un hombre y luego regalarle unas muletas y pedirle que te dé las gracias. La justicia es no romperle las piernas; la caridad es la muleta de la hipocresía.",
    "ConexionDoctrinal": ["Caridad vs Justicia", "Baldón", "Hipocresía"],
    "NodosSimapticos": ["Muleta de Hipocresía", "Parche de Injusticia", "Limosna Ofensiva"]
  },
  "11543: CARIDAD ANTE LA VERDAD HISTÓRICA": {
    "PilotoDeCoherencia": "La historia demuestra que la caridad ha servido para adormecer las revoluciones justas. Se ha usado el 'amor al pobre' para mantener la pobreza, pues sin pobres no hay negocio para el clero. La verdad histórica sentencia a la caridad como el opio que detiene el progreso del espíritu hacia su soberanía económica.",
    "CitaInelutable": "La caridad mantiene al pobre en su puesto para que el rico no pierda el suyo.",
    "EjemploPedagogico": "Es como un calmante que te dan para que no sientas el dolor de un cáncer, pero que no cura el tumor. El calmante es la caridad; el tumor es la desigualdad social. Necesitamos cirugía de justicia.",
    "ConexionDoctrinal": ["Historia", "Control Social", "Ateísmo"],
    "NodosSimapticos": ["Calmante Social", "Opio de Caridad", "Cirugía de Justicia"]
  },
  "11908: EL AMOR ES EL MANDATO": {
    "PilotoDeCoherencia": "El amor es el único mandato universal. No es una recomendación, es la ley de cohesión de los espíritus. Amar es sacrificarse por el bien común sin esperar recompensa. Es la vibración más alta que el espíritu puede alcanzar y la que le permite entrar en la Solidaridad Universal. El amor es el testamento de Eloí para sus hijos.",
    "CitaInelutable": "Solo el amor es la ley y solo el amor hace grandes a los hombres.",
    "EjemploPedagogico": "Es como el sol que da luz y calor a todos por igual, sin preguntar quién se lo merece. El sol no pide nada a cambio, se da porque esa es su naturaleza. Tu naturaleza espiritual es amar como el sol ilumina.",
    "ConexionDoctrinal": ["Amor Mandato", "Sacrificio", "Vibración"],
    "NodosSimapticos": ["Sol del Alma", "Testamento de Eloí", "Ley de Cohesión"]
  },
  "12000: EL SACRIFICIO DEL AMOR": {
    "PilotoDeCoherencia": "El amor puro exige el sacrificio del egoísmo. No hay amor sin entrega. Los sacerdotes no amaron porque no estuvieron dispuestos al sacrificio de sus privilegios. El verdadero amor se demuestra en los hechos, no en las palabras. Amar a los hermanos es la única forma de amar a Eloí.",
    "CitaInelutable": "El sacrificio es la moneda con que se compra el amor verdadero.",
    "EjemploPedagogico": "Es como un grano de trigo que debe 'morir' en la tierra para que nazca la espiga con mil granos. Si el grano se guarda para sí (egoísmo), se pudre solo. Si se entrega (amor), multiplica la vida.",
    "ConexionDoctrinal": ["Sacrificio", "Hechos vs Palabras", "Unidad"],
    "NodosSimapticos": ["Grano de Trigo", "Moneda de Amor", "Privilegios del Ego"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Caridad (Baldón)": {
    "Definición": "Acción humillante y paliativa de las religiones que busca sustituir la justicia social por limosnas, manteniendo la dependencia y la desigualdad.",
    "Contexto": "Crítica a la caridad en Conócete a ti mismo.",
    "Conexiones": ["Justicia", "Hipocresía", "Religión"],
    "Obras": ["Conócete a ti mismo", "Filosofía Austera Racional"]
  },
  "Amor (Mandato)": {
    "Definición": "Ley suprema y única del universo que exige la solidaridad absoluta y el sacrificio del egoísmo individual en favor del progreso de la familia humana.",
    "Contexto": "Capítulo VII de Conócete a ti mismo.",
    "Conexiones": ["Sacrificio", "Ley Única", "Eloí"],
    "Obras": ["Conócete a ti mismo", "Los Cinco Amores"]
  },
  "Sacrificio (Amor)": {
    "Definición": "Acto voluntario del espíritu de ceder sus goces o privilegios individuales para servir al bienestar de sus hermanos, considerado la prueba máxima de evolución.",
    "Conexiones": ["Entrega", "Hechos", "Fraternidad"],
    "Obras": ["Conócete a ti mismo", "Primer Rayo de Luz"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 5 nodos 1:1 de Conócete a ti mismo (Batch 9 - Caridad y Amor) y 3 términos sinápticos.');
