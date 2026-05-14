const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Filosofía Enciclopédica Universal Tomo 1 (Batch 12 - Claves 127 a 146)
const nuevosNodos = {
  "6883: Septiembre 4 de 1911 - Posesión P. Portillo": {
    "PilotoDeCoherencia": "Sabiduría de la Pequeñez. La verdadera sabiduría consiste en reconocer que somos pequeños y que habitamos un planeta de expiación; el que se cree sabio ignora esta base.",
    "CitaInelutable": "Fieles de vosotros que lo sabéis... llamándose sabios, no saben esto que es la verdadera sabiduría.",
    "EjemploPedagogico": "El niño que reconoce que no sabe leer está más cerca de aprender que el adulto que finge leer un libro al revés.",
    "ConexionDoctrinal": ["Humildad del Espíritu", "Mundo de Expiación"],
    "NodosSimapticos": []
  },
  "7014: Septiembre 4 de 1911 (noche) - Posesión M. P.": {
    "PilotoDeCoherencia": "Ley Generatriz vs Divinización. El espíritu niega que el 'polvo de la tierra' (materia) pueda ser divinizado; la elevación al Dios de Amor sigue leyes naturales, no dogmas ridículos.",
    "CitaInelutable": "No es ni puede ser lo que los hermanos pretenden ridículamente divinizar.",
    "EjemploPedagogico": "No puedes convertir una piedra en un sol por decreto o rezo; la luz debe nacer de la combustión interna del progreso.",
    "ConexionDoctrinal": ["Ley Generatriz", "Crítica a la Divinización"],
    "NodosSimapticos": ["Ley Generatriz"]
  },
  "7076: Septiembre 11 de 1911 - Les digo...aplicar las...limas.": {
    "PilotoDeCoherencia": "Dimas el Sacrificado. El espíritu que fue el 'buen ladrón' se presenta como un sacrificado que ahora trabaja por el descanso de sus protegidos, despojándose de los mitos bíblicos.",
    "CitaInelutable": "Con vosotros está un sacrificado, el hermano Dimas... no importa; el caso es que me conozcáis.",
    "EjemploPedagogico": "El que robó monedas en el pasado, ahora regala tesoros de consuelo en el presente para saldar su cuenta.",
    "ConexionDoctrinal": ["Dimas (como Espíritu)", "Ley de Compensación"],
    "NodosSimapticos": ["Dimas (como Espíritu)"]
  },
  "7153: Septiembre 8 de 1911 (hora 12 del día) - Posesión M. P.": {
    "PilotoDeCoherencia": "Sufrimiento de María. En el aniversario de su nacimiento, María de Nazareth manifiesta su padecimiento por la idolatría de la que es objeto, buscando descanso en la verdad de la Escuela.",
    "CitaInelutable": "Día que tanto padece mi espíritu. Yo quería descansar aquí.",
    "EjemploPedagogico": "A una madre le duele más que le pongan una corona de espinas dorada (dogma) que una caricia sincera de un hijo que sabe su historia real.",
    "ConexionDoctrinal": ["María de Nazareth (Padecimiento)", "Idolatría"],
    "NodosSimapticos": []
  },
  "7210: Septiembre 8 (noche) - Posesión P. Portillo": {
    "PilotoDeCoherencia": "Confesión del Absolutismo. Un ex-cura confiesa cómo el hábito le hizo creer que todo le era lícito y cómo el orgullo le impidió ver sus errores hasta que fue tarde.",
    "CitaInelutable": "Por ser cura, todo me era lícito; yo quería ser absoluto y lo era.",
    "EjemploPedagogico": "El traje que te hace sentir superior a los demás es en realidad la mordaza que te impide hablar con tu propia conciencia.",
    "ConexionDoctrinal": ["Orgullo Sacerdotal", "Justicia de Dios (Conciencia)"],
    "NodosSimapticos": []
  },
  "7241: Septiembre 10 de 1911 - Posesión P. Portillo": {
    "PilotoDeCoherencia": "Trabajo Progresivo. La importancia de no detenerse en el camino; cada sesión y cada enseñanza son pasos hacia la comprensión de la Justicia Universal.",
    "CitaInelutable": "Cada día que pasa es un punto de avance... no os detengáis.",
    "EjemploPedagogico": "El agua que se estanca se pudre; el río que corre siempre llega al mar limpio.",
    "ConexionDoctrinal": ["Progreso Continuo"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Ley Generatriz": {
    "Definición": "Principio fundamental de la doctrina trincadista que establece que todo en el universo, incluyendo el espíritu y la materia, se rige por leyes de generación y evolución natural. Niega cualquier intervención 'milagrosa' o 'divina' que contradiga la lógica de la creación y la progresión de los seres.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesión del 4 de Septiembre de 1911).",
    "Conexiones": ["Evolución", "Eloí", "Razón"],
    "Obras": ["Filosofía Enciclopédica Universal", "Filosofía Austera Racional"]
  },
  "Dimas (como Espíritu)": {
    "Definición": "Entidad espiritual que en la tradición cristiana es identificada como el 'Buen Ladrón'. En la Escuela de Trincado, Dimas se presenta como un espíritu en proceso de redención y trabajo activo (un 'sacrificado'), que rechaza la santificación dogmática para mostrarse como un hermano que asiste a sus protegidos desde el espacio.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesión del 11 de Septiembre de 1911).",
    "Conexiones": ["Redención", "Asistencia Espiritual", "Justicia de Revisión"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  },
  "Orgullo Sacerdotal": {
    "Definición": "Deformación moral del espíritu que, al amparo de una investidura religiosa, se cree superior a sus semejantes y exento de las leyes comunes. La doctrina señala que este orgullo es uno de los mayores obstáculos para el progreso del espíritu, ya que anula la autocrítica y la conexión con la verdadera justicia de la conciencia.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Confesión del ex-cura, Septiembre de 1911).",
    "Conexiones": ["Dogma", "Absolutismo", "Justicia de Revisión"],
    "Obras": ["Filosofía Enciclopédica Universal", "El Espiritismo en su Asiento"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 6 nodos PURA CALIDAD 1:1 de Filosofía Enciclopédica Tomo 1 (Batch 12) y 3 términos sinápticos.');
