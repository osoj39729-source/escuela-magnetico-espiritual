const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 3)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "6165: PÁRRAFO 17° — FILOSOFÍA MODERNA — BACON Y DESCARTES": {
    "PilotoDeCoherencia": "Bacon trae el método de la experiencia; Descartes trae la duda metódica. Ambos son los arietes que derriban los muros de la escolástica. 'Pienso, luego existo' es el despertar del espíritu a su propia realidad. Sin embargo, Descartes se detuvo ante la glándula pineal; nosotros seguimos adelante hacia el espíritu puro.",
    "CitaInelutable": "La duda de Descartes es el primer paso hacia la certeza del espíritu soberano.",
    "EjemploPedagogico": "Es como alguien que empieza a dudar de que las paredes de su celda sean reales. Al tocarlas y analizarlas (Bacon) y al pensar en su propio ser (Descartes), descubre que la puerta no tiene llave. Solo faltaba el valor de empujarla.",
    "ConexionDoctrinal": ["Duda Metódica", "Inducción", "Fin de la Escolástica"],
    "NodosSimapticos": ["Bacon y Descartes", "Pienso luego Existo", "Ariete de la Verdad"]
  },
  "6468: PÁRRAFO 18° — SPINOZA Y LEIBNIZ": {
    "PilotoDeCoherencia": "Spinoza ve la sustancia única, lo cual es verdad, pero la confunde con la materia. Leibniz habla de mónadas, pero las hace ciegas y sin ventanas. Yo les corrijo: el espíritu es una mónada (célula) consciente, pero con ventanas abiertas a todo el infinito a través del magnetismo.",
    "CitaInelutable": "El espíritu no es una mónada sin ventanas; es un sol vibrante en comunicación con el Todo.",
    "EjemploPedagogico": "Imagina una red eléctrica: cada bombilla es una mónada. Leibniz creía que la bombilla lucía sola; nosotros decimos que luce porque está conectada al cable universal de la energía de Eloí.",
    "ConexionDoctrinal": ["Sustancia Una", "Mónadas", "Magnetismo Espiritual"],
    "NodosSimapticos": ["Spinoza y Leibniz", "Bombilla del Espíritu", "Ventanas al Infinito"]
  },
  "6823: PÁRRAFO 19° — KANT Y LA CRÍTICA": {
    "PilotoDeCoherencia": "Kant es el gigante que midió los límites de la razón humana. Pero se asustó ante el 'noúmeno' (la cosa en sí). Mi Escuela entra donde Kant se detuvo: el noúmeno es el espíritu, y la razón puede conocerlo mediante el espiritismo racional. Kant preparó el camino para la ciencia del futuro.",
    "CitaInelutable": "Kant puso la frontera; nosotros la cruzamos con la llave del espíritu.",
    "EjemploPedagogico": "Kant llegó a la orilla de un inmenso mar y dijo: 'Hasta aquí llega el hombre'. Nosotros traemos el barco del espiritismo para navegar ese mar que él solo pudo contemplar desde la arena.",
    "ConexionDoctrinal": ["Noúmeno", "Razón Pura", "Límites del Conocimiento"],
    "NodosSimapticos": ["Kant", "Frontera del Noúmeno", "Mar de la Verdad"]
  },
  "7202: PÁRRAFO 20° — FICHTE, SCHELLING Y HEGEL": {
    "PilotoDeCoherencia": "El idealismo alemán busca lo absoluto. Hegel encuentra la dialéctica: el movimiento de la idea. Es un progreso, pero siguen siendo 'filósofos de gabinete'. Mi filosofía toma esa dialéctica y la aplica a la lucha real del espíritu en la tierra por la Comuna. El Absoluto no es una idea, es Eloí.",
    "CitaInelutable": "El idealismo busca al Creador en la abstracción del pensamiento.",
    "EjemploPedagogico": "Son como matemáticos que resuelven ecuaciones perfectas en la pizarra, pero no saben cómo usar esos números para construir un puente. Nosotros construimos el puente de la Comuna con sus ecuaciones.",
    "ConexionDoctrinal": ["Dialéctica", "Idealismo", "El Absoluto"],
    "NodosSimapticos": ["Hegel y el Idealismo", "Ecuación y Puente", "Idea en Acción"]
  },
  "7435: PÁRRAFO 21° — LA ESCUELA ESCOCESA — SENTIDO COMÚN": {
    "PilotoDeCoherencia": "La escuela escocesa apela al sentido común contra el escepticismo. Es una reacción sana. El sentido común es la primera ráfaga de la intuición espiritual. Pero el sentido común no basta sin la ciencia del espíritu; puede volverse prejuicio si no se ilumina con la razón.",
    "CitaInelutable": "El sentido común es la base de la justicia práctica en el mundo de los hombres.",
    "EjemploPedagogico": "El sentido común es como el instinto de orientación: te dice dónde está el norte, pero no te da el mapa detallado del camino. Nosotros damos el mapa.",
    "ConexionDoctrinal": ["Sentido Común", "Intuición", "Justicia Práctica"],
    "NodosSimapticos": ["Escuela Escocesa", "Sentido Común", "Norte del Espíritu"]
  },
  "7680: PÁRRAFO 22° — PSICOLOGISMO Y ESPIRITUALISMO — MAINE DE BIRAN": {
    "PilotoDeCoherencia": "Maine de Biran descubre el 'yo' como fuerza voluntaria. Es un gran acierto. Pero se equivoca al creer que el 'yo' es aislado. Yo enseño que el yo individual se enlaza en una cadena infinita de afinidades. La individualidad es el instrumento; la unidad es la esencia.",
    "CitaInelutable": "El yo es sujeto y objeto, pero siempre enlazado en la cadena universal de los espíritus.",
    "EjemploPedagogico": "El 'yo' es como una nota musical: tiene su propia frecuencia, pero solo tiene sentido dentro de la melodía universal. Una nota aislada no es música; el espíritu aislado no es vida.",
    "ConexionDoctrinal": ["Individualidad", "Cadena de Afinidades", "Sujeto y Objeto"],
    "NodosSimapticos": ["Maine de Biran", "Yo Voluntad", "Nota en la Melodía"]
  },
  "7935: PÁRRAFO 23° — EL POSITIVISMO — COMTE": {
    "PilotoDeCoherencia": "Comte quiere basarlo todo en los hechos. Es excelente para limpiar la superstición, pero cometió el error de negar lo que no se ve con los ojos de la cara. El positivismo es una filosofía de ciegos que niegan la luz porque solo pueden tocar la lámpara. Mi Escuela es el Positivismo del Espíritu.",
    "CitaInelutable": "Comte se queda en la cáscara del hecho y desprecia la savia del espíritu.",
    "EjemploPedagogico": "Es como un ciego que analiza la textura de un cuadro pero niega los colores. Comte analizó la textura del mundo; nosotros le devolvemos la vista para que vea el color del espíritu.",
    "ConexionDoctrinal": ["Hechos Positivos", "Materialismo", "Ciencia"],
    "NodosSimapticos": ["Comte", "Cáscara del Hecho", "Ciego ante la Luz"]
  },
  "8245: PÁRRAFO 24° — EL EVOLUCIONISMO — SPENCER": {
    "PilotoDeCoherencia": "Spencer ve la evolución en la materia. Es verdad, pero la evolución de la materia es solo la sombra de la evolución del espíritu. El espíritu es el que empuja a la materia a formas más perfectas. Spencer puso el cuerpo; nosotros le ponemos el alma al proceso evolutivo.",
    "CitaInelutable": "La evolución de las formas es el resultado de la necesidad de progreso del espíritu.",
    "EjemploPedagogico": "Spencer vio cómo el carruaje evolucionaba hacia el automóvil, pero se olvidó del conductor. El espíritu es el conductor que siempre pide un vehículo mejor para viajar por el infinito.",
    "ConexionDoctrinal": ["Evolución", "Progreso", "Materia y Espíritu"],
    "NodosSimapticos": ["Spencer", "Evolución de Sombras", "Conductor del Progreso"]
  },
  "8512: PÁRRAFO 25° — EL MATERIALISMO CONTEMPORÁNEO": {
    "PilotoDeCoherencia": "Denuncio el materialismo que reduce al hombre a un conjunto de reacciones químicas. Es la filosofía del cadáver. Si el hombre es solo materia, no hay justicia ni responsabilidad. El materialismo es el extremo del error que precede a la gran luz del espiritismo racional.",
    "CitaInelutable": "El materialismo es la negación de la vida; es el culto a la sombra y al polvo.",
    "EjemploPedagogico": "Es como decir que un libro es solo papel y tinta. El materialista estudia el papel y la tinta, pero es incapaz de leer el mensaje del autor. Nosotros leemos el mensaje.",
    "ConexionDoctrinal": ["Materialismo", "Reacción Química", "Negación del Espíritu"],
    "NodosSimapticos": ["Materialismo", "Filosofía del Cadáver", "Papel y Tinta"]
  },
  "8825: PÁRRAFO 26° — CONCLUSIÓN DE LA HISTORIA DE LA FILOSOFÍA": {
    "PilotoDeCoherencia": "Concluyo este recorrido: todas las escuelas han sido balbuceos del espíritu intentando recordar su origen. La Filosofía Austera Racional no es una escuela más, es la síntesis final que recoge el oro de todas y desecha la gangrena del dogma. Aquí empieza la era de la Verdad.",
    "CitaInelutable": "La historia termina donde la Verdad absoluta empieza su reinado.",
    "EjemploPedagogico": "Hemos recorrido todos los senderos de la montaña. Unos se perdieron en el bosque, otros se detuvieron en la niebla. Nosotros hemos llegado a la cima y desde aquí vemos el sol de la Comuna.",
    "ConexionDoctrinal": ["Síntesis Final", "Era de la Verdad", "Cima del Conocimiento"],
    "NodosSimapticos": ["Conclusión de Historia", "Cima de la Montaña", "Reinado de la Verdad"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Duda Metódica": {
    "Definición": "El proceso de cuestionar toda creencia impuesta para encontrar una verdad indudable sobre la cual construir el conocimiento real. En Trincado, es el inicio del despertar del espíritu soberano.",
    "Contexto": "Párrafo 17° de Filosofía Austera Racional sobre Descartes.",
    "Conexiones": ["Descartes", "Soberanía", "Certeza"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Noúmeno": {
    "Definición": "Concepto kantiano de la 'cosa en sí' que la razón pura no puede conocer. Trincado identifica el noúmeno con el Espíritu y afirma que el espiritismo racional es la herramienta para conocerlo.",
    "Contexto": "Párrafo 19° de Filosofía Austera Racional sobre Kant.",
    "Conexiones": ["Kant", "Espíritu", "Conocimiento Absoluto"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Dialéctica del Espíritu": {
    "Definición": "El movimiento constante del espíritu a través del pensamiento y la acción para resolver contradicciones y alcanzar grados superiores de progreso y armonía con la Ley.",
    "Contexto": "Párrafo 20° de Filosofía Austera Racional sobre Hegel.",
    "Conexiones": ["Hegel", "Progreso", "Lucha del Espíritu"],
    "Obras": ["Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Filosofía Austera Racional (Batch 3) y 3 términos sinápticos.');
