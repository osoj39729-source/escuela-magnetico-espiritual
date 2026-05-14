const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 5)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "12030: CAPÍTULO III — DEL CONOCIMIENTO — ORIGEN DE LAS IDEAS": {
    "PilotoDeCoherencia": "Las ideas no nacen de la nada, son el recuerdo del espíritu de sus experiencias en el infinito. El conocimiento es la reactivación de esa memoria. Estudiamos cómo el espíritu usa el cerebro como archivo temporal para procesar la verdad eterna en el mundo de las formas.",
    "CitaInelutable": "Conocer es recordar; la idea es la vibración del espíritu que se traduce en pensamiento.",
    "EjemploPedagogico": "El conocimiento es como una semilla: ya contiene todo el árbol dentro. El estudio y la experiencia son el agua y el sol que hacen que la semilla (la idea en el espíritu) brote y se manifieste en el cerebro.",
    "ConexionDoctrinal": ["Memoria Espiritual", "Origen de las Ideas", "Pensamiento"],
    "NodosSimapticos": ["Origen de Ideas", "Memoria del Espíritu", "Semilla del Saber"]
  },
  "12345: PÁRRAFO 1° — SENSIBILISMO — CONOCIMIENTO POR LOS SENTIDOS": {
    "PilotoDeCoherencia": "Los sentidos son las ventanas del alma a la materia. Pero denuncio que los sentidos a menudo mienten o se limitan a la cáscara. El sensibilismo puro es materialismo. El espíritu debe ser el juez que verifique lo que los sentidos le informan.",
    "CitaInelutable": "Los sentidos informan, pero solo la razón juzga la veracidad del hecho.",
    "EjemploPedagogico": "Los sentidos son como los testigos en un juicio: pueden estar confundidos o ser parciales. El espíritu es el juez que debe contrastar sus testimonios con la ley de la lógica para dictar sentencia.",
    "ConexionDoctrinal": ["Sentidos", "Razón Juez", "Percepción"],
    "NodosSimapticos": ["Sensibilismo", "Ventanas del Alma", "Testigos del Hecho"]
  },
  "12680: PÁRRAFO 2° — INTELECTUALISMO — EL JUICIO": {
    "PilotoDeCoherencia": "El intelectualismo es la labor del espíritu procesando la información. El juicio es el acto de comparar y decidir. Un juicio sin amor es frío y puede ser injusto; un juicio sin razón es ciego. Buscamos el equilibrio del juicio racional-espiritual.",
    "CitaInelutable": "El juicio es el peso en la balanza de la inteligencia.",
    "EjemploPedagogico": "El juicio es el proceso de pesaje. Si la balanza está trucada por el prejuicio religioso, el resultado siempre será error. Mi Escuela calibra la balanza con la verdad absoluta.",
    "ConexionDoctrinal": ["Intelecto", "Juicio Racional", "Equilibrio"],
    "NodosSimapticos": ["Intelectualismo", "Balanza de Inteligencia", "Acto de Juzgar"]
  },
  "12950: CAPÍTULO IV — LA LÓGICA": {
    "PilotoDeCoherencia": "La lógica es la ciencia del pensamiento recto. No es un juego de palabras, es la armonía de la idea con la realidad. Denuncio la lógica sofística que se usa para engañar. Nuestra lógica es austera porque no permite saltos en el vacío ni contradicciones con la ley natural.",
    "CitaInelutable": "La lógica es el carril de la verdad; fuera de ella, el pensamiento descarrila en la fantasía.",
    "EjemploPedagogico": "La lógica es la gramática del pensamiento. Así como sin gramática no puedes darte a entender con claridad, sin lógica no puedes entender el universo ni a ti mismo.",
    "ConexionDoctrinal": ["Lógica Austera", "Armonía de la Idea", "Pensamiento Recto"],
    "NodosSimapticos": ["Lógica", "Carril de la Verdad", "Gramática del Espíritu"]
  },
  "13220: PÁRRAFO 1° — LÓGICA FORMAL": {
    "PilotoDeCoherencia": "Estudiamos las reglas del silogismo y la estructura del razonamiento. Es la herramienta técnica. Pero advertimos: una lógica formal perfecta puede ser usada para defender una mentira si las premisas son falsas (como hace la teología). Nuestra lógica exige premisas de verdad demostrada.",
    "CitaInelutable": "La forma es necesaria, pero sin el contenido de verdad es un cadáver bien vestido.",
    "EjemploPedagogico": "La lógica formal es como un vaso hermoso: puede contener vino puro o veneno. Nosotros nos aseguramos de que el contenido sea siempre el vino de la verdad.",
    "ConexionDoctrinal": ["Silogismo", "Premisas", "Forma vs Contenido"],
    "NodosSimapticos": ["Lógica Formal", "Vaso de la Idea", "Premisas de Verdad"]
  },
  "13580: PÁRRAFO 2° — LÓGICA TRASCENDENTAL — KANT": {
    "PilotoDeCoherencia": "Analizo los juicios *a priori* y *a posteriori* de Kant. Es la arquitectura suprema del pensamiento humano. Reconozco el valor de los juicios sintéticos *a priori* como ráfagas de la intuición espiritual. Pero Kant se quedó en la estructura; nosotros le damos la vida del espíritu que es el que genera esos juicios.",
    "CitaInelutable": "El juicio *a priori* es la voz del espíritu que sabe antes de tocar la materia.",
    "EjemploPedagogico": "Kant estudió las leyes de la perspectiva. Nosotros somos los que miramos a través de esa perspectiva para ver el paisaje infinito del universo.",
    "ConexionDoctrinal": ["Kant", "A Priori", "Juicio Sintético"],
    "NodosSimapticos": ["Lógica Trascendental", "Juicio a Priori", "Voz del Espíritu"]
  },
  "13900: LA FILOSOFÍA DEL 'YO' EN EL CONOCIMIENTO": {
    "PilotoDeCoherencia": "El 'Yo' es el sujeto único de todo conocimiento. Sin 'Yo' no hay quien conozca. El error de muchos filósofos fue dudar del 'Yo'. Mi Escuela afirma: el Yo es el espíritu encarnado, el soberano que observa, siente y juzga. El conocimiento es el diálogo del Yo con la Creación.",
    "CitaInelutable": "El 'Yo' es el punto central del universo consciente.",
    "EjemploPedagogico": "El 'Yo' es el ojo que mira. Puedes estudiar la luz y los objetos, pero si olvidas al ojo, el fenómeno de la visión es inexplicable. El espíritu es ese ojo eterno.",
    "ConexionDoctrinal": ["Soberanía del Yo", "Sujeto de Conocimiento", "Espíritu"],
    "NodosSimapticos": ["El Yo Consciente", "Sujeto Único", "Ojo del Espíritu"]
  },
  "14250: LA CIENCIA COMO ACOMODACIÓN DE LOS HECHOS": {
    "PilotoDeCoherencia": "La ciencia humana es a menudo solo una acomodación de hechos para que encajen en teorías previas. Denuncio la ciencia que ignora el espíritu por prejuicio materialista. La verdadera ciencia es la que busca la ley de Eloí en cada átomo y en cada estrella, sin miedo a la verdad.",
    "CitaInelutable": "La ciencia oficial es una media verdad; la ciencia del espíritu es la verdad completa.",
    "EjemploPedagogico": "Es como intentar armar un rompecabezas ocultando a propósito la pieza central. La ciencia materialista hace eso. Nosotros ponemos la pieza del espíritu y el rompecabezas se completa.",
    "ConexionDoctrinal": ["Ciencia Racional", "Hechos vs Teoría", "Verdad Completa"],
    "NodosSimapticos": ["Ciencia Incompleta", "Rompecabezas del Ser", "Hechos de Eloí"]
  },
  "14580: EL PAPEL DE LA CONCIENCIA": {
    "PilotoDeCoherencia": "La conciencia es la luz del espíritu que ilumina el pensamiento. No es un subproducto del cerebro. La conciencia es el juez interno que nos dice si estamos en armonía con la Ley. Una filosofía sin conciencia es un arma peligrosa que solo sirve para la destrucción.",
    "CitaInelutable": "La conciencia es la voz de la ley grabada en el espíritu.",
    "EjemploPedagogico": "La conciencia es el faro que guía al barco en la noche. Si el faro se apaga (por el dogma o el vicio), el barco se estrellará contra las rocas del dolor.",
    "ConexionDoctrinal": ["Conciencia", "Luz Interior", "Juez Interno"],
    "NodosSimapticos": ["Conciencia Faro", "Luz del Espíritu", "Voz de la Ley"]
  },
  "14900: LA INDUCCIÓN Y LA DEDUCCIÓN": {
    "PilotoDeCoherencia": "Usamos ambos remos para navegar. La inducción para subir de los efectos a las causas; la deducción para bajar de las causas a los efectos. Sin ambos, el pensamiento gira en círculos. La Filosofía Austera es maestra en el uso de estas dos fuerzas del razonamiento.",
    "CitaInelutable": "Inducción y deducción son los dos brazos de la razón humana.",
    "EjemploPedagogico": "Inducción es ver el humo y deducir que hay fuego. Deducción es saber que hay fuego y esperar que salga humo. Ambos procesos confirman la realidad del fuego (la causa).",
    "ConexionDoctrinal": ["Método Racional", "Inducción", "Deducción"],
    "NodosSimapticos": ["Dos Remos de Razón", "Causa y Efecto", "Razonamiento Completo"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Juicio A Priori": {
    "Definición": "El conocimiento o convicción que el espíritu posee antes de cualquier experiencia material, derivado de su memoria eterna y su conexión con la Ley Universal.",
    "Contexto": "Párrafo 2° de la Segunda Parte de Filosofía Austera Racional sobre la lógica de Kant.",
    "Conexiones": ["Kant", "Memoria Espiritual", "Intuición"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Sensibilismo": {
    "Definición": "La corriente filosófica que pretende que todo conocimiento proviene exclusivamente de los sentidos físicos, ignorando la preexistencia y la labor del espíritu.",
    "Contexto": "Capítulo III de la Segunda Parte de Filosofía Austera Racional.",
    "Conexiones": ["Materialismo", "Sentidos", "Alma"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Razón Humana": {
    "Definición": "La manifestación individualizada de la Inteligencia Universal (Eloí) en el hombre, encargada de filtrar las percepciones y gobernar la voluntad según la justicia.",
    "Conexiones": ["Eloí", "Lógica", "Soberanía"],
    "Obras": ["Filosofía Austera Racional", "Código de Amor Universal"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Filosofía Austera Racional (Batch 5) y 3 términos sinápticos.');
