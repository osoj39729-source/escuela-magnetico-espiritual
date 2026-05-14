const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Conócete a ti mismo (Batch 11 - Justicia y Ley Interna)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "13205: CONOCIMIENTOS PARA JUZGAR": {
    "PilotoDeCoherencia": "Para juzgar un hecho, no basta ver el acto; hay que conocer la causa profunda, el entorno y el grado de progreso del espíritu. La justicia humana es ciega porque solo mira la superficie. La justicia racional es profunda porque analiza la vibración de la intención. No juzguéis sin conocer el archivo del alma del hermano.",
    "CitaInelutable": "La causa es la que califica al hecho, no el hecho a la causa.",
    "EjemploPedagogico": "Es como ver a un hombre romper un cristal: si no sabes que lo hizo para salvar a un niño de un incendio, lo llamarías vándalo. Conoce el incendio antes de condenar la piedra.",
    "ConexionDoctrinal": ["Juicio Racional", "Causa y Efecto", "Intención"],
    "NodosSimapticos": ["Piedra y Cristal", "Archivo del Alma", "Vibración de Intención"]
  },
  "13406: ESTUDIO DE LOS HECHOS": {
    "PilotoDeCoherencia": "El estudio de los hechos debe ser frío y analítico. Debemos separar la emoción del alma de la razón del espíritu. Cada suceso en la vida es una lección de la ley. El sabio observa el mundo como un laboratorio donde se prueban las leyes de la convivencia humana.",
    "CitaInelutable": "El sabio analiza el hecho; el necio solo siente la emoción.",
    "EjemploPedagogico": "Es como un médico frente a una herida: si se pone a llorar con el paciente, no podrá curarlo. Debe analizar la herida para aplicar el remedio exacto. Sé el médico de los hechos sociales.",
    "ConexionDoctrinal": ["Análisis", "Remedio Social", "Observación"],
    "NodosSimapticos": ["Médico de Hechos", "Laboratorio Social", "Frío Análisis"]
  },
  "14402: MEDIOS DE CORRECCIÓN NATURAL": {
    "PilotoDeCoherencia": "La naturaleza tiene sus propios medios para corregir al espíritu cuando se desvía. El dolor, la enfermedad y las catástrofes no son castigos, sino alarmas magnéticas que obligan a la reflexión. La 'justicia de necesidad' actúa cuando el amor ha sido ignorado.",
    "CitaInelutable": "La naturaleza no castiga, solo equilibra lo que el hombre descompensó.",
    "EjemploPedagogico": "Es como la fiebre en el cuerpo: no es el enemigo, es la defensa que avisa que hay una infección. La catástrofe es la fiebre del mundo que avisa que hay una infección de odio.",
    "ConexionDoctrinal": ["Justicia de Necesidad", "Equilibrio Natural", "Alarmas Magnéticas"],
    "NodosSimapticos": ["Fiebre del Mundo", "Alarma de Ley", "Preceptor de Necesidad"]
  },
  "14512: CASTIGO VS CONCIENCIA": {
    "PilotoDeCoherencia": "El castigo humano es estéril; solo produce rencor y más crimen. La única verdadera corrección nace de la luz de la conciencia. Un hombre no se corrige por estar en una cárcel, sino por comprender el daño que causó. La Escuela sustituye la celda por el aula y el verdugo por el maestro.",
    "CitaInelutable": "La celda encierra el cuerpo, pero solo la verdad libera al espíritu.",
    "EjemploPedagogico": "Es como un perro al que golpeas por ladrar: dejará de ladrar por miedo, pero no entenderá por qué. El hombre es un espíritu; explícale la ley y él mismo dejará de morder.",
    "ConexionDoctrinal": ["Conciencia vs Castigo", "Pedagogía Racional", "Libertad"],
    "NodosSimapticos": ["Celda y Aula", "Luz de Conciencia", "Miedo vs Comprensión"]
  },
  "14669: EL HOMBRE NO PUEDE JUZGAR AL HOMBRE": {
    "PilotoDeCoherencia": "Nadie tiene autoridad para castigar a otro ser, pues todos somos hermanos en diferentes grados de error. El juicio pertenece a la Ley y a la conciencia propia. La justicia civil debe ser administrativa y pedagógica, no vindicativa. El juez que odia al reo es más criminal que el reo.",
    "CitaInelutable": "El juez que condena sin amor, se condena a sí mismo ante la ley divina.",
    "EjemploPedagogico": "Es como un hermano mayor que golpea al pequeño porque se ensució. El mayor también estuvo sucio alguna vez. Ayuda a tu hermano a lavarse, no le rompas las manos.",
    "ConexionDoctrinal": ["Justicia Administrativa", "Fraternidad", "Juicio Propio"],
    "NodosSimapticos": ["Hermano Mayor", "Juez Vindicativo", "Lavado del Alma"]
  },
  "14808: EL ESPÍRITU NUNCA ES DESHEREDADO": {
    "PilotoDeCoherencia": "No existe la condenación eterna ni el infierno dogmático. Ningún hijo de Eloí puede ser desheredado de la vida eterna. Por muy bajo que caiga un espíritu, la ley de progreso lo levantará tarde o temprano. El universo es un hogar que siempre tiene la puerta abierta para el hijo pródigo.",
    "CitaInelutable": "La herencia del espíritu es la eternidad y nadie puede arrebatársela.",
    "EjemploPedagogico": "Es como el hijo pródigo: gastó su fortuna y vivió con los cerdos, pero cuando decidió volver, el padre lo recibió con amor. Todos somos pródigos en algún momento; todos volveremos al hogar de luz.",
    "ConexionDoctrinal": ["Inmortalidad", "Hijo Pródigo", "Puerta Abierta"],
    "NodosSimapticos": ["Hogar de Luz", "Cerdos del Error", "Herencia Eterna"]
  },
  "15128: CONOCIMIENTO DE RÉGIMEN": {
    "PilotoDeCoherencia": "Entramos en el estudio del régimen social. El orden de la Comuna no es una imposición, sino el conocimiento de cómo vivir en justicia. El régimen racional es la aplicación práctica de la ley de amor a la economía, la familia y la política. Es la ciencia de la convivencia divina en la tierra.",
    "CitaInelutable": "El régimen es la ley de amor puesta en movimiento social.",
    "EjemploPedagogico": "Es como el reglamento de una orquesta: no es para quitar libertad a los músicos, sino para que todos toquen en la misma clave y el resultado sea belleza. El régimen es nuestra clave de armonía.",
    "ConexionDoctrinal": ["Régimen Comunal", "Convivencia", "Orden Racional"],
    "NodosSimapticos": ["Clave de Armonía", "Reglamento de Orquesta", "Ciencia de Vivir"]
  },
  "15136: LA LEY IMPRESA EN EL HOMBRE": {
    "PilotoDeCoherencia": "La ley divina no está en libros externos, está impresa en la esencia misma del espíritu. Es nuestra brújula innata. Cuando el hombre se silencia y se conoce, escucha la voz de la ley que le dicta el bien común. El sentimiento es el termómetro que mide nuestra alineación con esa ley interna.",
    "CitaInelutable": "Llevas la ley en tu corazón; solo tienes que aprender a leerla.",
    "EjemploPedagogico": "Es como el instinto migratorio de las aves: nadie les enseña el camino, pero lo llevan impreso en su ser y llegan a su destino. Tú llevas el mapa del cielo dentro de ti; despliega tus alas.",
    "ConexionDoctrinal": ["Ley Interna", "Brújula Espiritual", "Sentimiento"],
    "NodosSimapticos": ["Instinto Migratorio", "Mapa del Cielo", "Voz del Silencio"]
  },
  "15237: LEYES DE MAYORÍA": {
    "PilotoDeCoherencia": "Mientras el hombre no sea totalmente trino, necesita leyes de mayoría para organizarse. Estas leyes deben ser el retrato del grado medio de progreso de la sociedad. Deben respetarse por disciplina, pero el espíritu siempre debe trabajar para elevarlas hacia la Ley Única de Amor.",
    "CitaInelutable": "La ley de mayoría es el andamio; la ley de amor es el edificio.",
    "EjemploPedagogico": "Es como los andamios de una construcción: son necesarios mientras se levantan las paredes, pero cuando el edificio está terminado, los andamios se quitan. Las leyes humanas son andamios transitorios.",
    "ConexionDoctrinal": ["Leyes Humanas", "Disciplina", "Progreso Social"],
    "NodosSimapticos": ["Andamio Social", "Retrato de Progreso", "Edificio de Amor"]
  },
  "LA INFALIBILIDAD DEL SENTIMIENTO": {
    "PilotoDeCoherencia": "El sentimiento es infalible cuando solo busca el bien común y no hace acepción de personas. Cuando ves en el hermano a ti mismo, ya no puedes errar. Esa es la infalibilidad racional: la concordancia perfecta entre el pensamiento, la voluntad y la ley universal de amor.",
    "CitaInelutable": "La infalibilidad es la armonía total del ser con el Todo.",
    "EjemploPedagogico": "Es como una brújula que ya no oscila porque ha encontrado el polo norte. Tu sentimiento es la aguja; el bien común es tu polo norte. Cuando la aguja se queda quieta, has llegado a la infalibilidad.",
    "ConexionDoctrinal": ["Infalibilidad", "Bien Común", "Armonía del Ser"],
    "NodosSimapticos": ["Aguja Quieta", "Polo del Bien", "Armonía con el Todo"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Ley Impresa": {
    "Definición": "Presencia intrínseca de los principios de la ley divina en la esencia del espíritu, la cual guía la conciencia hacia la verdad y el amor sin necesidad de códigos externos.",
    "Contexto": "Capítulo IX de Conócete a ti mismo.",
    "Conexiones": ["Conciencia", "Brújula", "Ley Divina"],
    "Obras": ["Conócete a ti mismo", "Filosofía Austera Racional"]
  },
  "Castigo vs Conciencia": {
    "Definición": "Dicotomía entre la justicia vindicativa humana (castigo) y la justicia correctiva espiritual (conciencia), donde solo la segunda produce un cambio real y evolutivo.",
    "Contexto": "Análisis de la justicia en Conócete a ti mismo.",
    "Conexiones": ["Justicia", "Pedagogía", "Cárcel"],
    "Obras": ["Conócete a ti mismo"]
  },
  "Infalibilidad": {
    "Definición": "Estado de armonía perfecta donde el pensamiento y la acción del individuo coinciden plenamente con la ley de amor universal, eliminando la posibilidad de error voluntario.",
    "Conexiones": ["Perfección", "Armonía", "Bien Común"],
    "Obras": ["Conócete a ti mismo", "Los Cinco Amores"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Conócete a ti mismo (Batch 11 - Justicia y Ley) y 3 términos sinápticos.');
