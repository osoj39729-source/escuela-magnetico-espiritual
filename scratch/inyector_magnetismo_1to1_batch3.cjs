const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/el-magnetismo-en-su-origen_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - El Magnetismo en su Origen (Batch 3 - Desdoblamiento, Condiciones y Espíritus Naturales)
const nuevosNodos = {
  "1227: GRADO SEXTO: DESDOBLAMIENTO SONAMBÚLICO": {
    "PilotoDeCoherencia": "El grado supremo en la práctica del magnetismo. En este grado, el espíritu del médium no solo investiga, sino que puede llegar a materializarse a distancia para ser visto mientras relata lo que sucede. Esta operación exige el mayor de los secretos entre maestro y discípulo, reservada solo para fines de progreso trascendental.",
    "CitaInelutable": "El desdoblamiento sonambúlico es la demostración suprema de que el espíritu no conoce las fronteras del espacio.",
    "EjemploPedagogico": "Es como estar en dos habitaciones a la vez: tu cuerpo habla en una, tu espíritu observa y se muestra en la otra. El magnetismo puro es el bilocador de la conciencia.",
    "ConexionDoctrinal": ["Desdoblamiento Sonambúlico", "Bilocación Magnética", "Grado Supremo"],
    "NodosSimapticos": ["Bilocación Consciente", "Fronteras Abolidas", "Secreto Maestro-Discípulo"]
  },
  "1292: LECCIÓN SÉPTIMA: CONDICIONES DEL MAGNETIZADOR": {
    "PilotoDeCoherencia": "Todas las condiciones requeridas para un magnetizador se resumen en dos mandatos axiomáticos: 'Conócete a ti mismo' (para alcanzar la sabiduría) y 'Ama a tu hermano' (para garantizar la moralidad). Sin estas dos columnas, el magnetizador es un ciego guiando a otro ciego.",
    "CitaInelutable": "El poder magnético sin amor es una espada sin empuñadura: corta al que la usa.",
    "EjemploPedagogico": "Es como intentar conducir un coche a 200 km/h sin saber frenar (sabiduría) ni respetar las señales (amor). El accidente es seguro. La Escuela te enseña a conducir antes de darte la llave.",
    "ConexionDoctrinal": ["Conócete a ti mismo", "Ama a tu hermano", "Condiciones Morales"],
    "NodosSimapticos": ["Espada sin Empuñadura", "Piloto sin Freno", "Columnas del Poder"]
  },
  "1304: CONDICIONES NECESARIAS: VOLUNTAD RAZONADA": {
    "PilotoDeCoherencia": "El primer requisito técnico: Voluntad Razonada. La Escuela repudia la 'voluntad invencible' o la imposición terca que enseñan otros métodos. La voluntad debe ceder ante la evidencia de una voluntad más fuerte dictada por la justicia y el amor. Ceder ante la razón no es derrota, es victoria.",
    "CitaInelutable": "Imponer una voluntad terca es aberración; ceder ante la razón ajena es la mayor de las victorias.",
    "EjemploPedagogico": "Es como dos ríos que se encuentran: el menor no lucha contra el mayor, se une a él para llegar al mar. La voluntad razonada fluye hacia la verdad, no choca contra ella.",
    "ConexionDoctrinal": ["Voluntad Razonada", "Razón vs Terquedad", "Ceder por Justicia"],
    "NodosSimapticos": ["Ríos hacia el Mar", "Terquedad como Aberración", "Victoria al Ceder"]
  },
  "1400: LECCIÓN OCTAVA: LA RAZÓN DE LA DOMINACIÓN": {
    "PilotoDeCoherencia": "Refutación a la teoría de que existen personas 'refractarias' o 'inmagnetizables'. No existe nadie inmagnetizable en el universo, porque todos están sujetos a la ley magnética. Lo que ocurre es que cada sujeto requiere un 'zapato a su medida'; la incapacidad no está en el sujeto, está en la falta de desarrollo o afinidad del operador.",
    "CitaInelutable": "No existen personas refractarias al magnetismo; solo existen magnetizadores insuficientes.",
    "EjemploPedagogico": "Es como un músico que no logra tocar una partitura difícil y le echa la culpa al piano. El piano (magnetizado) funciona; el problema es que las manos del pianista (operador) aún no tienen la destreza necesaria.",
    "ConexionDoctrinal": ["Refutación de Refractarios", "Falta de Afinidad", "Ley de Dominación"],
    "NodosSimapticos": ["Zapato a la Medida", "Culpar al Piano", "Incapacidad del Operador"]
  },
  "1493: LECCIÓN NOVENA: EFECTOS DEL MAGNETISMO": {
    "PilotoDeCoherencia": "El efecto supremo del magnetismo es la regeneración humana. El atraso actual del hombre se debe a las religiones (los que 'viven de la muerte'), que anestesiaron las facultades del espíritu con el fantasma tétrico del miedo. El magnetismo es el calor del amor que descongela el miedo y devuelve la vida al alma.",
    "CitaInelutable": "El magnetismo es el fuego de la verdad que descongela el terror religioso implantado en el alma.",
    "EjemploPedagogico": "Es como una planta guardada en un frigorífico: no está muerta, está paralizada por el frío. La religión es el frigorífico; el magnetismo es el sol que la hace florecer de nuevo.",
    "ConexionDoctrinal": ["Regeneración", "Descongelar Facultades", "Religión como Anestesia"],
    "NodosSimapticos": ["Frigorífico Religioso", "Sol del Amor", "Deshielo del Espíritu"]
  },
  "1593: POTENCIA Y OBEDIENCIA DE LOS ESPÍRITUS NATURALES": {
    "PilotoDeCoherencia": "La materia no es insensible. Cada átomo es animado por 'espíritus naturales' (la vida en su grado primario). El viento, el fuego, el agua, no son fuerzas ciegas: son conjuntos de espíritus en funciones elementales que obedecen a la inteligencia superior (el hombre-dínamo).",
    "CitaInelutable": "La naturaleza no es ciega, es un ejército de espíritus naturales esperando las órdenes del sabio.",
    "EjemploPedagogico": "Es como un motor: parece metal muerto, pero los electrones en su interior están vivos y trabajando. Toda la naturaleza obedece al que comprende el lenguaje magnético de sus átomos.",
    "ConexionDoctrinal": ["Espíritus Naturales", "Obediencia de la Naturaleza", "Vida en el Átomo"],
    "NodosSimapticos": ["Ejército Elemental", "Vida del Corpúsculo", "Materia Sensible"]
  },
  "1745: PARTE SEGUNDA: MODUS OPERANDI DEL MÉTODO SUPREMO": {
    "PilotoDeCoherencia": "Transición de la teoría a la práctica rigurosa. Se advierte al discípulo que el camino es escarpado. Si tropieza por cansancio, la Escuela lo levanta; si cae por ignorancia voluntaria, cae por su cuenta. El método exige asegurar cada paso con la 'alcayata de la Razón'.",
    "CitaInelutable": "La montaña de la práctica magnética solo se escala clavando la alcayata de la razón en cada paso.",
    "EjemploPedagogico": "Es como escalar el Everest: el equipo técnico (conocimiento) lo da la Escuela, pero si el escalador ignora las reglas y se quita el arnés, la caída es su responsabilidad.",
    "ConexionDoctrinal": ["Práctica Magnética", "Responsabilidad del Discípulo", "Razón como Herramienta"],
    "NodosSimapticos": ["Alcayata de Razón", "Arnés del Método", "Caída por Ignorancia"]
  },
  "1749: REGLA GENERAL Y ÚNICA": {
    "PilotoDeCoherencia": "La máxima revolución técnica de Trincado en el arte magnético: La supresión total de pases, soplos y toda comicidad teatral. La regla general y única es usar la voluntad y la mirada, proyectando los fluidos con la fuerza mental. Toda gesticulación es propia de ignorantes, charlatanes y curanderos que necesitan impresionar la vista porque carecen de potencia interior.",
    "CitaInelutable": "El magnetismo verdadero opera por la voluntad silenciosa, no por la acrobacia de las manos.",
    "EjemploPedagogico": "Es como la tecnología inalámbrica frente a los cables: el charlatán necesita cables y ruido (pases de manos); el Maestro se conecta por WiFi espiritual (voluntad y mirada pura).",
    "ConexionDoctrinal": ["Supresión de Pases", "Voluntad y Mirada", "Revolución Técnica"],
    "NodosSimapticos": ["WiFi Espiritual", "Fin de la Acrobacia", "Comicidad del Charlatán"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Voluntad Razonada": {
    "Definición": "Fuerza directriz del magnetizador racional que, lejos de ser terca o impositiva, sabe ceder ante la evidencia de la justicia y la verdad superior, garantizando un progreso sin choques.",
    "Contexto": "Lección VII de El Magnetismo en su Origen.",
    "Conexiones": ["Voluntad", "Razón", "Obediencia a la Ley"],
    "Obras": ["El Magnetismo en su Origen", "Filosofía Austera Racional"]
  },
  "Espíritus Naturales": {
    "Definición": "Entidades en los grados primarios de la escala evolutiva que animan a los átomos y corpúsculos, dando vida inteligente y obediente a los elementos de la naturaleza (viento, agua, fuego).",
    "Contexto": "Lección IX de El Magnetismo en su Origen.",
    "Conexiones": ["Naturaleza", "Vida Elemental", "Obediencia"],
    "Obras": ["El Magnetismo en su Origen"]
  },
  "Regla General Magnética (Supresión de Pases)": {
    "Definición": "El axioma técnico del Método Supremo que prohíbe toda gesticulación, pases de manos y comicidades teatrales, reduciendo el acto magnético a la sola proyección de fluidos mediante la voluntad razonada y la mirada.",
    "Contexto": "Parte Segunda, Modus Operandi de El Magnetismo en su Origen.",
    "Conexiones": ["Voluntad", "Mirada", "Charlatanismo"],
    "Obras": ["El Magnetismo en su Origen"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 8 nodos 1:1 de El Magnetismo en su Origen (Batch 3) y 3 términos sinápticos.');
