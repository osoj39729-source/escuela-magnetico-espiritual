const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/los-cinco-amores_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Los Cinco Amores (Batch 4)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "9497: CAPÍTULO SÉPTIMO: EL AMOR A LA LEY": {
    "PilotoDeCoherencia": "La Ley es una y es el Amor. No reconozco más autoridad que la Ley. El amor a la ley es el reconocimiento de que el universo es un orden perfecto donde el espíritu encuentra su libertad al obedecer la armonía creadora. Toda ley humana que contradiga la Ley de Amor es nula de pleno derecho.",
    "CitaInelutable": "La Ley de Amor es la única autoridad que el espíritu libre reconoce.",
    "EjemploPedagogico": "La ley es como el cauce de un río: no está para aprisionar al agua, sino para dirigir su fuerza hacia el mar. Sin cauce, el agua se dispersa y se pierde; con la ley, el espíritu llega a su destino.",
    "ConexionDoctrinal": ["Ley de Amor", "Soberanía del Espíritu", "Justicia"],
    "NodosSimapticos": ["Amor a la Ley", "Cauce Espiritual", "Autoridad Única"]
  },
  "10527: CAPÍTULO OCTAVO: El Encauzamiento hacia un solo Idioma y una sola Raza": {
    "PilotoDeCoherencia": "El progreso impone la unidad. Las lenguas y las razas son barreras temporales que el amor universal debe derribar. La mezcla de razas no es degradación, es enriquecimiento. Caminamos hacia el hombre universal que habla un solo idioma de verdad y siente una sola fraternidad.",
    "CitaInelutable": "Caminamos hacia un solo idioma y una sola raza, por la ley del amor.",
    "EjemploPedagogico": "Es como las diferentes vertientes de una montaña: cada una tiene su nombre, pero todas son agua que busca el mismo valle. Al final, se funden en un solo río donde ya no importa de qué vertiente vinieron.",
    "ConexionDoctrinal": ["Cruce de Razas", "Idioma Único", "Unidad Humana"],
    "NodosSimapticos": ["Solo Idioma", "Sola Raza", "Fusión Étnica"]
  },
  "4972: CAPÍTULO NUEVE y 5320: CAPÍTULO DIEZ: Justicia Racional y Armonía del Trabajo": { // Refinando este nodo agrupado previo a 1:1
    "PilotoDeCoherencia": "La justicia racional es la que se ejerce sin odio y sin castigo, buscando solo la corrección del desvío. Se armoniza con el trabajo porque el trabajo es la balanza donde se pesa el mérito de cada hermano. No hay justicia sin trabajo, ni trabajo sin justicia.",
    "CitaInelutable": "La justicia racional no conoce el odio; solo conoce la balanza del trabajo.",
    "EjemploPedagogico": "Es como un médico que opera: no odia al tumor, pero sabe que debe quitarlo para salvar al cuerpo. Así es la justicia en la Comuna.",
    "ConexionDoctrinal": ["Justicia Racional", "Ley del Trabajo", "Armonía"],
    "NodosSimapticos": ["Justicia sin Odio", "Balanza del Trabajo", "Armonía Social"]
  },
  "11223: CAPÍTULO DIEZ y 11475: CAPITULO PRIMERO: Disolución de Naciones y Fronteras": { // Refinando agrupado
    "PilotoDeCoherencia": "Las naciones son el egoísmo colectivo. Las fronteras son cicatrices en el cuerpo de la tierra que impiden la circulación del amor. La Comuna Universal exige la disolución de las patrias pequeñas para que nazca la Patria Única: el Mundo.",
    "CitaInelutable": "Las fronteras son cicatrices que el amor universal debe borrar.",
    "EjemploPedagogico": "Imagina una casa dividida por muros internos que impiden a los hermanos verse. La Comuna es derribar esos muros para que la familia entera disfrute de toda la casa.",
    "ConexionDoctrinal": ["Disolución de Naciones", "Patria Única", "Comuna"],
    "NodosSimapticos": ["Fin de Fronteras", "Patria Única", "Cicatrices de la Tierra"]
  },
  "11471: QUINTA PARTE y 11870: La Revolución como Necesidad de Vida": { // Refinando
    "PilotoDeCoherencia": "La revolución no es desorden, es el parto de lo nuevo. Es una necesidad de vida cuando las estructuras viejas ahogan el progreso. No es violencia por violencia, es la fuerza de la verdad rompiendo la cáscara del error.",
    "CitaInelutable": "La revolución es el parto necesario de una nueva vida social.",
    "EjemploPedagogico": "Es como la semilla que debe romper su cáscara para convertirse en árbol. Para la cáscara es una destrucción, para la vida es el inicio de su grandeza.",
    "ConexionDoctrinal": ["Revolución Racional", "Progreso", "Necesidad de Vida"],
    "NodosSimapticos": ["Revolución Necesaria", "Parto Social", "Fuerza de la Verdad"]
  },
  "11919: CAPÍTULO SEGUNDO: El Amor sin Acepciones": {
    "PilotoDeCoherencia": "El amor universal no conoce favoritismos. Amar sin acepciones es amar al espíritu por lo que es, no por su cargo, su riqueza o su raza. Es el amor imparcial que imita la justicia del Padre Hellí.",
    "CitaInelutable": "El amor universal no tiene acepciones; es el sol que brilla para todos.",
    "EjemploPedagogico": "Es como la lluvia que cae igual sobre el campo del rico y del pobre. La Ley de Amor no mira el traje del hombre, mira la luz de su espíritu.",
    "ConexionDoctrinal": ["Imparcialidad", "Amor Universal", "Justicia"],
    "NodosSimapticos": ["Amor sin Acepciones", "Sol de Justicia", "Imparcialidad"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Etnicismo Universal": {
    "Definición": "El estado final de la humanidad donde todas las razas se han fundido en una sola, eliminando los prejuicios de color, lengua o procedencia geográfica.",
    "Contexto": "Capítulo IV de la Quinta Parte de Los Cinco Amores. Trincado usa a España como ejemplo de potencia de fusión étnica.",
    "Conexiones": ["Cruce de Razas", "Idioma Único", "Fraternidad"],
    "Obras": ["Los Cinco Amores"]
  },
  "Patria Única": {
    "Definición": "El concepto de la Tierra como el hogar común de toda la humanidad, sin divisiones nacionales ni fronteras políticas.",
    "Contexto": "Capítulo I de la Quinta Parte de Los Cinco Amores. Es la consecuencia política de la Ley de Amor.",
    "Conexiones": ["Comuna Universal", "Disolución de Naciones", "Mundo Comunizado"],
    "Obras": ["Los Cinco Amores", "Los Extremos se Tocan"]
  },
  "Revolución Racional": {
    "Definición": "El proceso necesario de transformación social que elimina los obstáculos al progreso (dogmas, fronteras, propiedad privada) para instaurar el régimen de la Comuna.",
    "Contexto": "Quinta Parte de Los Cinco Amores. Trincado la define como un 'parto de vida'.",
    "Conexiones": ["Progreso", "Liquidación", "Necesidad de Vida"],
    "Obras": ["Los Cinco Amores", "Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 6 nodos 1:1 de Los Cinco Amores (Batch 4) y 3 términos sinápticos.');
