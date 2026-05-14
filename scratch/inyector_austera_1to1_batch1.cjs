const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 1)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "12: PROLEGÓMENOS": {
    "PilotoDeCoherencia": "La Filosofía Austera Racional no nace de la academia, sino del dolor y la lucha del espíritu por liberarse de la cárcel de la materia y el dogma. Es el grito de la conciencia que reclama su lugar en el universo. Aparece ahora porque el tiempo de la liquidación del error ha llegado.",
    "CitaInelutable": "Esta filosofía aparece como el resultado de la lucha secular entre el espíritu y la materia.",
    "EjemploPedagogico": "Es como el sol que sale después de una noche de mil años. No pide permiso para brillar; su sola presencia disipa las sombras del miedo y la mentira.",
    "ConexionDoctrinal": ["Liquidación", "Soberanía del Espíritu", "Progreso"],
    "NodosSimapticos": ["Prolegómenos", "Grito de Conciencia", "Fin de la Noche"]
  },
  "20: FILOSOFÍA AUSTERA RACIONAL": {
    "PilotoDeCoherencia": "Defino mi filosofía: Austera, porque no adula las pasiones humanas ni se arrodilla ante el poder; Racional, porque su único juez es la razón iluminada por la ley universal. No es una teoría, es un régimen de vida que exige la armonía total entre pensamiento, palabra y obra.",
    "CitaInelutable": "Austera por su rectitud; Racional por su base en la ley eterna.",
    "EjemploPedagogico": "Es el carril por donde debe correr la locomotora del progreso. Si el carril se dobla para adular al pasajero (las pasiones), la locomotora descarrila. El carril debe ser austero y recto.",
    "ConexionDoctrinal": ["Razón", "Austeridad", "Régimen de Vida"],
    "NodosSimapticos": ["Filosofía Austera", "Razón Iluminada", "Rectitud"]
  },
  "131: PRIMERA PARTE — HISTORIA DE LA FILOSOFÍA": {
    "PilotoDeCoherencia": "La historia de la filosofía es la historia de las encarnaciones de los misioneros del espíritu. No es una lista de opiniones, sino el rastro de la luz que ha intentado penetrar en la densidad de la materia terrestre a través de los siglos.",
    "CitaInelutable": "La historia de la filosofía es el registro del progreso del espíritu en su lucha con la materia.",
    "EjemploPedagogico": "Imagina una excavación arqueológica: cada capa de tierra es una escuela de pensamiento. Nosotros bajamos hasta la roca madre para encontrar la verdad original que todos buscaron.",
    "ConexionDoctrinal": ["Evolución", "Misioneros", "Historia del Espíritu"],
    "NodosSimapticos": ["Historia de la Filosofía", "Rastro de Luz", "Capa de Pensamiento"]
  },
  "135: CAPÍTULO I — EXPOSICIÓN Y DEFINICIÓN": {
    "PilotoDeCoherencia": "Expongo la filosofía como la ciencia de las causas primeras. Mientras la ciencia oficial mira los efectos, nosotros miramos el origen. Definir es delimitar la verdad para que el error no se infiltre con disfraces metafísicos.",
    "CitaInelutable": "Filosofía es la ciencia que trata de las causas primeras de todas las cosas.",
    "EjemploPedagogico": "La ciencia común estudia las hojas y los frutos del árbol. Mi filosofía estudia la raíz y la savia que le dan vida. Sin conocer la raíz, no entiendes el árbol.",
    "ConexionDoctrinal": ["Causas Primeras", "Ciencia del Espíritu", "Verdad"],
    "NodosSimapticos": ["Ciencia de Causas", "Raíz de la Verdad", "Definición Racional"]
  },
  "139: PÁRRAFO 1° — ¿POR QUÉ APARECE ESTA FILOSOFÍA?": {
    "PilotoDeCoherencia": "Aparece para poner fin al caos de las religiones y las filosofías abstractas. El mundo ha llegado a su mayoría de edad espiritual y ya no puede ser alimentado con las papillas del dogma. Se necesita el pan sólido de la razón para construir la Comuna.",
    "CitaInelutable": "Aparece porque el hombre ha llegado a su mayoría de edad y reclama su herencia de sabiduría.",
    "EjemploPedagogico": "Cuando el niño se hace hombre, ya no cree en cuentos de hadas. La humanidad ha crecido y necesita saber la verdad de su origen y destino sin adornos fantasiosos.",
    "ConexionDoctrinal": ["Mayoría de Edad", "Fin del Dogma", "Necesidad Social"],
    "NodosSimapticos": ["Aparición Necesaria", "Pan de la Razón", "Herencia de Sabiduría"]
  },
  "829: PÁRRAFO 2° — FILOSOFÍAS DE ORIENTE": {
    "PilotoDeCoherencia": "En Oriente (India, China, Persia, Egipto, Iberia) la verdad brilló, pero fue envuelta en símbolos para protegerla de los bárbaros. Mi Escuela quita el velo. Reconocemos la sabiduría de los Vedas y de Confucio como preparaciones necesarias, pero advertimos sobre su posterior mixtificación religiosa.",
    "CitaInelutable": "En el Oriente se encendieron las primeras antorchas de la verdad, pero el símbolo las oscureció.",
    "EjemploPedagogico": "Es como un mensaje escrito en clave: Oriente puso la clave, nosotros traemos el descodificador para que todos lean el mensaje de libertad.",
    "ConexionDoctrinal": ["Sabiduría Oriental", "Símbolo", "Velo del Misterio"],
    "NodosSimapticos": ["Filosofía Oriental", "Antorchas de Verdad", "Descodificación"]
  },
  "1324: PÁRRAFO 3° — GRECIA — ESCUELAS ANTES DE SÓCRATES": {
    "PilotoDeCoherencia": "Grecia es el puente hacia Occidente. Thales y la escuela jónica buscaron el origen en la materia (el agua), pero yo les corrijo: el origen es lo Uno (Eloí) que produce lo múltiple. Thales fue el primer materialista consciente, un paso necesario para salir de la mitología.",
    "CitaInelutable": "Thales busca el origen en lo físico... pero lo Uno es lo que produce lo múltiple.",
    "EjemploPedagogico": "Thales miró el agua del océano y creyó que era el origen. Yo le digo: el agua es el efecto; la fuerza que hace el agua y la vida es el Espíritu.",
    "ConexionDoctrinal": ["Escuela Jónica", "Materialismo", "Unidad de la Sustancia"],
    "NodosSimapticos": ["Grecia Pre-Socrática", "Thales", "Lo Uno y lo Múltiple"]
  },
  "1747: PÁRRAFO 5° — SÓCRATES Y LOS SEMI-SOCRÁTICOS": {
    "PilotoDeCoherencia": "Sócrates es el misionero de la moral individual. Su 'Conócete a ti mismo' es la base de mi Escuela. Fue asesinado por la religión por enseñar a los hombres a pensar por sí mismos. Su sacrificio es la semilla de la libertad de conciencia.",
    "CitaInelutable": "Sócrates trae la maieutica: el arte de dar a luz la verdad que el espíritu ya posee.",
    "EjemploPedagogico": "Sócrates era el partero de las almas. No te daba la verdad, te ayudaba a que tú la sacaras de tu propio interior. Ese es el único camino real de aprendizaje.",
    "ConexionDoctrinal": ["Maieutica", "Conócete a ti mismo", "Martirio por la Verdad"],
    "NodosSimapticos": ["Sócrates", "Partero de Almas", "Luz Interior"]
  },
  "2025: PÁRRAFO 6° — PLATÓN Y ARISTÓTELES": {
    "PilotoDeCoherencia": "Platón miró al ideal (el cielo) y Aristóteles miró a la realidad (la tierra). Ambos son necesarios pero incompletos por separado. Mi Filosofía los une: el ideal debe ser realizado en la tierra a través de la Comuna. Aristóteles puso los cimientos de la lógica que nosotros perfeccionamos.",
    "CitaInelutable": "Platón es el sueño del espíritu; Aristóteles es la mano que intenta plasmarlo.",
    "EjemploPedagogico": "Platón es el arquitecto con el plano en la mano; Aristóteles es el albañil con el ladrillo. Sin el albañil, la casa es un sueño; sin el arquitecto, es un montón de escombros.",
    "ConexionDoctrinal": ["Idealismo vs Realismo", "Lógica", "Equilibrio"],
    "NodosSimapticos": ["Platón y Aristóteles", "Arquitecto y Albañil", "Realización del Ideal"]
  },
  "2164: Capítulo IV — Aristóteles y el cargo de Delicado": {
    "PilotoDeCoherencia": "Analizo a Aristóteles y su esfuerzo por categorizar el conocimiento. Aunque se le acusa de frialdad, su lógica fue el escudo contra la fantasía religiosa de su tiempo. Justificamos su labor como el sistematizador necesario para la futura ciencia del espíritu.",
    "CitaInelutable": "Hay que justificar a Aristóteles en su labor de dar orden al pensamiento humano.",
    "EjemploPedagogico": "Aristóteles puso las estanterías en la gran biblioteca del conocimiento. Nosotros venimos a llenar esas estanterías con los libros de la verdad absoluta.",
    "ConexionDoctrinal": ["Sistematización", "Lógica Aristotélica", "Orden Mental"],
    "NodosSimapticos": ["Aristóteles", "Estanterías del Saber", "Orden Racional"]
  }
};

// Actualizar Esencia (Reemplazando agrupaciones antiguas)
delete esencia["135 al 1625: Historia de la Filosofía y Escuelas Antiguas"]; 
delete esencia["1747 al 2025: Sócrates, Platón y Aristóteles"];

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Filosofía Austera": {
    "Definición": "El sistema de pensamiento racional que no adula las pasiones humanas ni se somete a intereses dogmáticos, manteniendo una rectitud absoluta en la búsqueda de la verdad.",
    "Contexto": "Prolegómenos de Filosofía Austera Racional. Trincado la contrapone a las filosofías de 'flirteo' o académicas.",
    "Conexiones": ["Razón", "Austeridad", "Régimen de Vida"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Maieutica Espiritual": {
    "Definición": "El método socrático de 'dar a luz' la verdad, adaptado por Trincado para explicar cómo el espíritu recuerda y manifiesta el conocimiento que ya posee por sus múltiples encarnaciones.",
    "Contexto": "Párrafo 5° de Filosofía Austera Racional sobre Sócrates.",
    "Conexiones": ["Sócrates", "Conócete a ti mismo", "Memoria Espiritual"],
    "Obras": ["Filosofía Austera Racional", "Conócete a ti mismo"]
  },
  "Lo Uno produce lo Múltiple": {
    "Definición": "Principio ontológico que establece que toda la creación (lo múltiple) emana de una única sustancia y un único Creador (lo Uno), manteniendo la unidad de esencia en la diversidad de formas.",
    "Contexto": "Párrafo 3° de Filosofía Austera Racional. Trincado corrige a Thales de Mileto usando este principio.",
    "Conexiones": ["Unidad de la Sustancia", "Eloí", "Sustancia Una"],
    "Obras": ["Filosofía Austera Racional", "Código de Amor Universal"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Filosofía Austera Racional (Batch 1) y 3 términos sinápticos.');
