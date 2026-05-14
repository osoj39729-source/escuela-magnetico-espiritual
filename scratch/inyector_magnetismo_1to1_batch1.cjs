const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/el-magnetismo-en-su-origen_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

// Initialize files if they don't exist
if (!fs.existsSync(esenciaPath)) {
    fs.writeFileSync(esenciaPath, JSON.stringify({}, null, 2), 'utf8');
}
if (!fs.existsSync(dicPath)) {
    fs.writeFileSync(dicPath, JSON.stringify({}, null, 2), 'utf8');
}

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - El Magnetismo en su Origen (Batch 1 - Introducción y Lecciones 1-4)
const nuevosNodos = {
  "44: CONSEJOS Y RECOMENDACIONES": {
    "PilotoDeCoherencia": "La Escuela no exige fe ciega, exige estudio y convencimiento. El progreso espiritual se adquiere únicamente por el esfuerzo propio. Quien nada sacrifica, no tiene derecho a nada. La ignorancia de una ley no da derecho a negarla.",
    "CitaInelutable": "No queremos fe ciega, sino estudio y convencimiento, porque sólo las obras hacen fe.",
    "EjemploPedagogico": "Es como entrar a una universidad: no te regalan el título por creer en la institución, te lo ganas estudiando y rindiendo exámenes. La Escuela es la universidad del espíritu.",
    "ConexionDoctrinal": ["Esfuerzo Propio", "Fe Viva vs Fe Ciega", "Derechos y Obligaciones"],
    "NodosSimapticos": ["Universidad del Espíritu", "Derecho por Esfuerzo", "Fin de la Fe Ciega"]
  },
  "109: ALOCUCIÓN: TODO ES MAGNETISMO": {
    "PilotoDeCoherencia": "Declaración suprema: Todo en el universo es magnetismo espiritual porque la sustancia es una sola y las leyes son universales. El magnetismo no es magia, es la fuerza vital del universo solidarizado que ha perdido el miedo a los dogmas religiosos.",
    "CitaInelutable": "Todo es magnetismo espiritual porque la sustancia es una y la ley es una.",
    "EjemploPedagogico": "Es como la sangre en el cuerpo humano: fluye por todas partes, alimenta cada célula y une los órganos. El magnetismo es la sangre del universo.",
    "ConexionDoctrinal": ["Magnetismo Espiritual", "Sustancia Única", "Universo Solidarizado"],
    "NodosSimapticos": ["Sangre Cósmica", "Sustancia Una", "Fuerza Vital"]
  },
  "218: PREFACIO Y PRÓLOGOS": {
    "PilotoDeCoherencia": "El magnetismo ya no puede ser negado por las academias porque se demuestra en cada acto de la vida. A pesar de las persecuciones y los detractores, este 'Método Supremo' se erige como la coraza invulnerable (fotograbada) que desmitifica la fuerza y la entrega al estudio racional.",
    "CitaInelutable": "El magnetismo entró a las ciencias no por invitación, sino derribando las puertas con la fuerza de los hechos.",
    "EjemploPedagogico": "Es como la gravedad: la ciencia no la inventó, tuvo que aceptarla porque las manzanas caían. El magnetismo se impuso por el peso de sus evidencias.",
    "ConexionDoctrinal": ["Ciencia Magnética", "Evidencia Irrefutable", "Método Supremo"],
    "NodosSimapticos": ["Gravedad del Alma", "Puerta Derribada", "Método Invulnerable"]
  },
  "489: INTRODUCCIÓN": {
    "PilotoDeCoherencia": "Advertencia severa contra los charlatanes. Más del 95% de los que se llaman 'magnetizadores', 'hipnotizadores' o 'fascinadores' son impostores o ignorantes que juegan con fuerzas que no comprenden. El magnetismo exige madurez, conciencia y respeto absoluto.",
    "CitaInelutable": "Jugar con el magnetismo sin conciencia es como un niño jugando con explosivos.",
    "EjemploPedagogico": "Un charlatán magnético es como alguien que encuentra un bisturí y decide operar sin ser cirujano. Corta, sí, pero mata en lugar de curar.",
    "ConexionDoctrinal": ["Charlatanismo", "Peligro del Ignorante", "Conciencia Magnética"],
    "NodosSimapticos": ["Niño con Explosivos", "Bisturí en Ignorante", "Falso Maestro"]
  },
  "534: LECCIÓN PRIMERA: ¿QUÉ ES EL MAGNETISMO?": {
    "PilotoDeCoherencia": "Definición exacta y científica de la Escuela: El Magnetismo es el resultado del movimiento universal. Es la fuerza creada por el incesante movimiento y transformación de los átomos, yones y corpúsculos, dirigida por la voluntad del espíritu.",
    "CitaInelutable": "Magnetismo es el resultado del movimiento universal de la sustancia única.",
    "EjemploPedagogico": "Es como frotar las manos para generar calor: el movimiento crea energía. A escala cósmica, el movimiento eterno de la materia guiada por el espíritu genera la fuerza magnética.",
    "ConexionDoctrinal": ["Movimiento Universal", "Definición Exacta", "Átomos y Voluntad"],
    "NodosSimapticos": ["Fricción Cósmica", "Motor del Átomo", "Fuerza del Movimiento"]
  },
  "565: LECCIÓN SEGUNDA: MAGNETISMO EN LOS REINOS": {
    "PilotoDeCoherencia": "El magnetismo es uno solo, pero se expresa en diferentes polaridades según el reino: en el hombre es positivo (gobernado por la voluntad y la razón), en los animales y plantas es neutral (gobernado por el instinto), y en los minerales es negativo (remanente de vida latente).",
    "CitaInelutable": "El magnetismo es positivo en el hombre, neutral en el animal y negativo en el mineral.",
    "EjemploPedagogico": "Es como el agua en sus tres estados: hielo (mineral), líquida (animal/planta) y vapor dirigido por presión (hombre). La sustancia es la misma, el grado de libertad cambia.",
    "ConexionDoctrinal": ["Polaridad Magnética", "Reinos de la Naturaleza", "Evolución de la Fuerza"],
    "NodosSimapticos": ["Tres Estados de Fuerza", "Agua Cósmica", "Voluntad vs Instinto"]
  },
  "619: LECCIÓN TERCERA: ELECTRICIDAD, MATERIA Y LA DÍNAMO": {
    "PilotoDeCoherencia": "Se establece que Electricidad y Materia no son dos cosas distintas, sino dos grados diferentes del éter vibratorio (vida y demostración de la vida). El hombre es la verdadera 'Dínamo' del universo: condensa y proyecta esta fuerza. Pero solo es dínamo eficiente cuando la Razón domina sus acciones; de lo contrario, es solo una 'pila' débil.",
    "CitaInelutable": "El hombre que domina sus pasiones por la razón es la dínamo suprema del universo.",
    "EjemploPedagogico": "Una pila de reloj apenas mueve unas manecillas; una gran dínamo ilumina una ciudad. El hombre ignorante es la pila; el maestro espiritista es la dínamo.",
    "ConexionDoctrinal": ["El Hombre Dínamo", "Electricidad y Materia", "Razón como Generador"],
    "NodosSimapticos": ["Pila vs Dínamo", "Iluminación de la Ciudad", "Grados del Éter"]
  },
  "760: LECCIÓN CUARTA: ¿QUIÉNES PUEDEN USAR EL MAGNETISMO?": {
    "PilotoDeCoherencia": "Todos los hombres usan el magnetismo por necesidad vital, aunque lo hagan en ignorancia. Sin embargo, en el uso consciente impera la Ley de Fuerzas: el más sabio domina al menos sabio, porque la Sabiduría da poder magnético real. El poder no se regala, se conquista por esfuerzo, evolución y amor.",
    "CitaInelutable": "En el universo, triunfa inexorablemente el más sabio, y el más sabio es el que más ama.",
    "EjemploPedagogico": "Todos respiran aire, pero solo el atleta entrenado puede usar sus pulmones para correr un maratón. Todos usan magnetismo, pero solo el sabio lo dirige para sanar y progresar.",
    "ConexionDoctrinal": ["Uso Universal", "Ley del Más Sabio", "Poder por Amor"],
    "NodosSimapticos": ["Atleta Magnético", "Respiración del Cosmos", "Conquista del Poder"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Diccionario Sináptico
const terminosDic = {
  "Magnetismo (Definición Racional)": {
    "Definición": "El resultado del movimiento universal y eterno de la sustancia única (éter/materia) en todas sus formas (átomos, corpúsculos), dirigido en última instancia por el espíritu.",
    "Contexto": "Lección I de El Magnetismo en su Origen.",
    "Conexiones": ["Movimiento Universal", "Sustancia", "Espíritu"],
    "Obras": ["El Magnetismo en su Origen", "Filosofía Austera Racional"]
  },
  "Polaridades de la Naturaleza": {
    "Definición": "Los tres estados de manifestación del magnetismo: Positivo (gobernado por la voluntad consciente en el hombre), Neutral (gobernado por el instinto en plantas/animales) y Negativo (remanente en minerales).",
    "Contexto": "Lección II de El Magnetismo en su Origen.",
    "Conexiones": ["Magnetismo", "Instinto", "Voluntad"],
    "Obras": ["El Magnetismo en su Origen", "Conócete a ti mismo"]
  },
  "El Hombre Dínamo": {
    "Definición": "Concepto que define al hombre plenamente desarrollado en razón y amor como la máquina generadora máxima del universo, capaz de condensar y proyectar fluidos magnéticos a gran escala, a diferencia del hombre ignorante que funciona como una simple 'pila'.",
    "Contexto": "Lección III de El Magnetismo en su Origen.",
    "Conexiones": ["Dínamo", "Fluidos", "Razón", "Poder Magnético"],
    "Obras": ["El Magnetismo en su Origen"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 8 nodos 1:1 de El Magnetismo en su Origen (Batch 1 - Intro y Lec. 1-4) y 3 términos sinápticos.');
