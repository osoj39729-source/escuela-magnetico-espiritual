const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 9)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "13680: CAPÍTULO V — CRÍTICA A LA LEY DE WEBER": {
    "PilotoDeCoherencia": "La ley de Weber intenta reducir la sensibilidad a logaritmos. Es el culmen de la ceguera materialista. La sensibilidad no aumenta en progresión aritmética o geométrica según el estímulo, sino según la receptividad y el grado de atención del espíritu. El espíritu no es una máquina de calcular, es un ser que vibra.",
    "CitaInelutable": "La sensibilidad no es matemática; es la vida del espíritu que no cabe en fórmulas.",
    "EjemploPedagogico": "Es como intentar medir cuánto amas a tu madre con una regla. Podrás medir cuántas veces la abrazas, pero nunca el sentimiento del abrazo. La ley de Weber cuenta los abrazos pero ignora el amor.",
    "ConexionDoctrinal": ["Psicofísica", "Sensibilidad Espiritual", "Crítica al Materialismo"],
    "NodosSimapticos": ["Ley de Weber", "Ceguera Logarítmica", "Vibración vs Cálculo"]
  },
  "13950: CAPÍTULO VI — LA PERCEPCIÓN": {
    "PilotoDeCoherencia": "La percepción es la conciencia clara y distinta de la sensación. No basta con sentir; hay que percibir. La percepción es el acto por el cual el espíritu se adueña del objeto exterior y lo traduce a su propio lenguaje de ideas. Es el puente final entre el mundo y el ser.",
    "CitaInelutable": "La percepción es la seguridad de ciencia y conciencia en el espíritu.",
    "EjemploPedagogico": "Sentir es como oír un ruido en la noche; percibir es saber que ese ruido es el viento moviendo una rama. La percepción pone nombre y sentido a la sensación ciega.",
    "ConexionDoctrinal": ["Percepción", "Conciencia", "Inteligencia"],
    "NodosSimapticos": ["Conciencia Clara", "Puente del Ser", "Ciencia y Conciencia"]
  },
  "14220: LA RELACIÓN SUJETO-ESTÍMULO": {
    "PilotoDeCoherencia": "Estudiamos la relación especial entre el espíritu (sujeto) y la materia (estímulo). El estímulo es la llamada; la percepción es la respuesta. Denunciamos que se ha querido estudiar el estímulo olvidando al sujeto. Sin el espíritu, no hay percepción, solo hay choques de átomos sin sentido.",
    "CitaInelutable": "El estímulo es la pregunta de la naturaleza; la percepción es la respuesta del espíritu.",
    "EjemploPedagogico": "Es como un timbre: el estímulo es el dedo que aprieta el botón. Pero si no hay nadie en la casa (el espíritu) para oír el timbre y abrir la puerta, el sonido no sirve de nada.",
    "ConexionDoctrinal": ["Sujeto y Objeto", "Relación Vital", "Causalidad"],
    "NodosSimapticos": ["Sujeto-Estímulo", "Pregunta de la Naturaleza", "Respuesta del Espíritu"]
  },
  "14500: LA OBJETIVACIÓN DE LAS CUALIDADES": {
    "PilotoDeCoherencia": "Es el espíritu quien proyecta las cualidades (color, sabor, sonido) sobre los objetos. La materia por sí sola es neutra. La belleza, la armonía y la utilidad son atributos que el espíritu otorga a la creación según su propio grado de luz. El mundo es bello porque tu espíritu es capaz de verlo bello.",
    "CitaInelutable": "Las cualidades de la sensación son objetivizadas por el espíritu en el estímulo.",
    "EjemploPedagogico": "Es como un pintor que pone colores en un lienzo en blanco. El lienzo es la materia; los colores son la sensibilidad del espíritu. El cuadro resultante es el mundo que percibes.",
    "ConexionDoctrinal": ["Atributos", "Sensibilidad", "Creación de la Realidad"],
    "NodosSimapticos": ["Objetivación", "Pintor del Espíritu", "Colores del Ser"]
  },
  "14780: EL ESPÍRITU COMO ÚNICA INTELIGENCIA": {
    "PilotoDeCoherencia": "Afirmo con rigor: no hay otra inteligencia que la del espíritu. El cerebro no es inteligente; es solo una herramienta. El retraso de las ciencias se debe a haber prescindido de esta verdad fundamental. Mi Escuela llena ese vacío devolviendo al espíritu su corona de soberano del conocimiento.",
    "CitaInelutable": "El espíritu es el único actor consciente sin excepción posible.",
    "EjemploPedagogico": "Es como un ordenador: los circuitos son complejos, pero no son inteligentes. La inteligencia es la del programador y el usuario. El espíritu es el programador del cuerpo humano.",
    "ConexionDoctrinal": ["Soberanía del Espíritu", "Crítica a la Ciencia", "Inteligencia"],
    "NodosSimapticos": ["Único Actor", "Corona del Espíritu", "Llenado de Vacíos"]
  },
  "15050: EL YO COMO JUEZ DE LA PERCEPCIÓN": {
    "PilotoDeCoherencia": "El 'Yo' es quien valida la percepción. Es el juez que dice 'esto es real' o 'esto es una ilusión'. Para ser un buen juez, el 'Yo' debe estar libre de prejuicios religiosos y pasiones materiales. La claridad de la percepción depende de la limpieza de la conciencia.",
    "CitaInelutable": "El 'Yo' es el garante de la verdad en el acto de percibir.",
    "EjemploPedagogico": "Si el juez está borracho (apasionado) o sobornado (dogmatizado), dictará una sentencia falsa sobre el hecho. El filósofo austero mantiene su juicio sobrio para percibir la verdad pura.",
    "ConexionDoctrinal": ["El Yo", "Juicio Recto", "Verdad"],
    "NodosSimapticos": ["Juez de Percepción", "Sentencia del Ser", "Limpieza de Conciencia"]
  },
  "15320: LA PERCEPCIÓN DEL ESPACIO Y EL TIEMPO": {
    "PilotoDeCoherencia": "Espacio y tiempo son las coordenadas de la existencia material, pero el espíritu vive fuera de ellas. Percibimos el espacio y el tiempo como una necesidad de la encarnación para dar orden a nuestras experiencias. En la medida que el espíritu progresa, el tiempo se acorta y el espacio se expande.",
    "CitaInelutable": "Espacio y tiempo son los moldes donde el espíritu vierte su experiencia terrestre.",
    "EjemploPedagogico": "Es como una película: ves el tiempo pasar y los lugares cambiar en la pantalla. Pero tú, el espectador, estás sentado en tu butaca fuera de la película. El espíritu es el espectador eterno.",
    "ConexionDoctrinal": ["Espacio-Tiempo", "Relatividad Espiritual", "Eternidad"],
    "NodosSimapticos": ["Moldes de Experiencia", "Espectador Eterno", "Coordenadas de Materia"]
  },
  "15600: LA ASOCIACIÓN DE IDEAS": {
    "PilotoDeCoherencia": "Las ideas se atraen por afinidad magnética. No es un proceso azaroso. El espíritu asocia lo nuevo con lo que ya sabe (memoria). Esta asociación es el motor del razonamiento. Denunciamos el asociacionismo mecánico que olvida que es el espíritu quien dirige la atracción entre las ideas.",
    "CitaInelutable": "La afinidad es la ley que gobierna el mundo de las ideas.",
    "EjemploPedagogico": "Es como un imán que recoge solo las limaduras de hierro. Tu espíritu es el imán que atrae las ideas que vibran en su misma frecuencia de progreso o error.",
    "ConexionDoctrinal": ["Afinidad", "Magnetismo", "Razonamiento"],
    "NodosSimapticos": ["Atracción de Ideas", "Imán del Espíritu", "Frecuencia Mental"]
  },
  "15880: LA ATENCIÓN — EL FOCO DEL ESPÍRITU": {
    "PilotoDeCoherencia": "La atención es la voluntad del espíritu concentrada en un punto. Es el foco que ilumina la oscuridad. Sin atención no hay percepción clara, solo sueños vagos. El filósofo debe ser dueño de su atención para no ser arrastrado por las distracciones de la materia.",
    "CitaInelutable": "La atención es la fuerza del espíritu dirigida por la voluntad.",
    "EjemploPedagogico": "Es como una lupa: si concentras los rayos del sol en un punto, puedes encender un fuego. Si no, solo hay un calor difuso. La atención concentra la luz de la verdad para encender la conciencia.",
    "ConexionDoctrinal": ["Voluntad", "Atención", "Concentración"],
    "NodosSimapticos": ["Foco del Espíritu", "Lupa de la Verdad", "Fuerza de Voluntad"]
  },
  "16150: LA PERCEPCIÓN DE LA CAUSALIDAD": {
    "PilotoDeCoherencia": "Percibir la causalidad es el grado supremo de la inteligencia. Es ver el hilo invisible que une cada efecto con su causa. Esto nos lleva necesariamente al Creador, Causa de las Causas. Quien ve el efecto y niega la causa, es un ciego voluntario.",
    "CitaInelutable": "La ley de causalidad es el sello de Eloí en toda la creación.",
    "EjemploPedagogico": "Ves una huella en la arena y sabes que alguien pasó por allí. Negar la causa es decir que la huella se hizo sola. La creación es la huella de Eloí; nosotros seguimos el rastro hasta el Padre.",
    "ConexionDoctrinal": ["Causalidad", "Eloí", "Rastro de la Verdad"],
    "NodosSimapticos": ["Hilo de Causalidad", "Huella de Eloí", "Causa de Causas"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Ciencia y Conciencia": {
    "Definición": "El estado de conocimiento pleno donde la información externa (ciencia) es validada y comprendida por la luz interna del espíritu (conciencia).",
    "Contexto": "Capítulo VI de la Cuarta Parte de Filosofía Austera Racional.",
    "Conexiones": ["Percepción", "Verdad", "Soberanía"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Afinidad Magnética": {
    "Definición": "La ley universal de atracción que rige tanto la unión de las almas como la asociación de las ideas en el espíritu, basada en la similitud de vibración y propósito.",
    "Contexto": "Estudio de la asociación de ideas en Filosofía Austera Racional.",
    "Conexiones": ["Magnetismo", "Asociación de Ideas", "Ley de Amor"],
    "Obras": ["Filosofía Austera Racional", "Código de Amor Universal"]
  },
  "Atención": {
    "Definición": "La concentración deliberada de la potencia volitiva del espíritu sobre un objeto o idea para lograr su percepción clara y distinta.",
    "Conexiones": ["Voluntad", "Conciencia", "Estudio"],
    "Obras": ["Filosofía Austera Racional", "Profilaxis de la Vida"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Filosofía Austera Racional (Batch 9) y 3 términos sinápticos.');
