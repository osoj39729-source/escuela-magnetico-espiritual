const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Conócete a ti mismo (Batch 5 - Grados de Mundos y Sufrimiento)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "4892: EL SACRIFICIO DEL ESPÍRITU": {
    "PilotoDeCoherencia": "El espíritu no baja a la materia por castigo, sino por sacrificio de amor. Su misión es espiritualizar la roca, la planta y el animal, elevando la vibración del mundo que habita. Encarnar en mundos rústicos es el acto de pedagogía más grande que el espíritu realiza para con sus hermanos menores de la naturaleza.",
    "CitaInelutable": "El espíritu es el redentor de la materia mediante su propio sacrificio.",
    "EjemploPedagogico": "Es como un maestro que deja su cómoda casa en la ciudad para ir a vivir a una aldea remota y enseñar a leer a los niños que nadie atiende. El maestro sufre la incomodidad, pero se goza en la luz que enciende en los otros. El espíritu es ese maestro.",
    "ConexionDoctrinal": ["Sacrificio", "Redención de la Materia", "Misión Pedagógica"],
    "NodosSimapticos": ["Maestro de Aldea", "Luz en la Roca", "Sacrificio de Amor"]
  },
  "4925: MUNDOS EMBRIONARIOS": {
    "PilotoDeCoherencia": "Los mundos embrionarios son laboratorios en formación. En ellos la vida humana aún no ha nacido; solo hay luchas de elementos y formación de atmósferas. Son los talleres donde el Espíritu Universal prepara los futuros hogares de la humanidad. Es el grado cero de la escala planetaria.",
    "CitaInelutable": "En el embrión del mundo late ya la promesa del hombre.",
    "EjemploPedagogico": "Es como una casa que apenas tiene los cimientos y las paredes a medio levantar. No puedes vivir en ella todavía, pero el arquitecto ya sabe dónde irá cada habitación. La Tierra fue así hace billones de años.",
    "ConexionDoctrinal": ["Grados de Mundos", "Génesis Planetaria", "Laboratorio"],
    "NodosSimapticos": ["Grado Cero", "Cimientos del Mundo", "Promesa de Vida"]
  },
  "4980: MUNDOS DE PRUEBA Y EXPIACIÓN": {
    "PilotoDeCoherencia": "Los mundos de prueba son aquellos donde el espíritu lucha contra sus propias pasiones. Aquí el dolor es el gran maestro. La Tierra ha sido hasta hoy un mundo de prueba donde hemos venido a 'pagar' nuestras deudas y a 'probar' nuestra fuerza moral. Es el grado de la lucha amarga por la luz.",
    "CitaInelutable": "El mundo de prueba es el crisol donde el espíritu se purifica en el fuego del dolor.",
    "EjemploPedagogico": "Es como un gimnasio de alta resistencia: los ejercicios son duros y el cuerpo duele, pero solo así se desarrollan los músculos. El mundo de prueba desarrolla los músculos del espíritu para que pueda sostener el peso de la sabiduría.",
    "ConexionDoctrinal": ["Expiación", "Crisol", "Lucha de Pasiones"],
    "NodosSimapticos": ["Gimnasio del Alma", "Fuego de Purificación", "Músculos de Luz"]
  },
  "5061: MUNDOS PRIMITIVOS": {
    "PilotoDeCoherencia": "Los mundos primitivos albergan humanidades en su infancia. El instinto domina a la razón. Los hombres viven para la supervivencia física y el miedo a los elementos. El espíritu aquí apenas empieza a despertar su autoconciencia. Son los parvularios del universo.",
    "CitaInelutable": "La infancia de la humanidad es el reino del instinto puro.",
    "EjemploPedagogico": "Es como un niño de dos años que solo piensa en comer y jugar, y llora si tiene miedo. No puedes pedirle que resuelva ecuaciones. El hombre primitivo es ese niño que el universo cuida con paciencia infinita.",
    "ConexionDoctrinal": ["Infancia Humana", "Instinto", "Autoconciencia"],
    "NodosSimapticos": ["Parvulario Cósmico", "Niño de la Tierra", "Reino de Instinto"]
  },
  "5183: EL MUNDO DE TRANSICIÓN": {
    "PilotoDeCoherencia": "La Tierra entra ahora en el grado de 'Mundo de Transición'. Es el puente entre el dolor de la expiación y la paz de la regeneración. En este grado, la justicia de Eloí separa el trigo de la cizaña. Los espíritus que no aceptan la ley de amor son trasladados a mundos inferiores para empezar de nuevo. La Tierra se higieniza.",
    "CitaInelutable": "La transición es el parto doloroso hacia la Comuna Universal.",
    "EjemploPedagogico": "Es como el momento del alba: ya no es noche oscura, pero todavía no es pleno día. Se ven las sombras retirarse y la luz avanzar. Nosotros estamos viviendo ese amanecer; la cizaña se quema, el trigo se guarda.",
    "ConexionDoctrinal": ["Transición", "Juicio de Mundos", "Regeneración"],
    "NodosSimapticos": ["Alba de la Tierra", "Puente de Mundos", "Cizaña y Trigo"]
  },
  "5267: CAUSAS DEL SUFRIMIENTO DEL ESPÍRITU": {
    "PilotoDeCoherencia": "El espíritu sufre porque es insaciable por naturaleza. El error de muchos es intentar saciar la sed del espíritu con los placeres de la carne. La concupiscencia es un callejón sin salida que deja al espíritu vacío y ciego. El único alimento que sacia al espíritu es la sabiduría y el cumplimiento del deber.",
    "CitaInelutable": "El espíritu sufre cuando el alma lo encadena al fango del placer momentáneo.",
    "EjemploPedagogico": "Es como un águila que intentas alimentar con gusanos en una jaula pequeña. El águila despreciará la comida y se herirá contra los barrotes porque su naturaleza es volar y cazar en las alturas. Tu espíritu es el águila; el vicio es la jaula.",
    "ConexionDoctrinal": ["Sufrimiento Espiritual", "Concupiscencia", "Insaciabilidad"],
    "NodosSimapticos": ["Águila Enjaulada", "Fango del Placer", "Sed de Infinito"]
  },
  "5425: TRIUNFO POR SABIDURÍA": {
    "PilotoDeCoherencia": "El triunfo del espíritu no es sobre otros hombres, sino sobre su propia ignorancia. La sabiduría es la única victoria que no deja heridos. Un espíritu sabio es un espíritu alegre, porque comprende la ley y ya no teme a nada. El gozo del espíritu es la paz de la conciencia limpia.",
    "CitaInelutable": "La sabiduría es la corona de luz que el espíritu se gana a sí mismo.",
    "EjemploPedagogico": "Es como alguien que por fin entiende un idioma que le parecía ruido. De repente, todo tiene sentido y puede hablar con los demás. La sabiduría es entender el idioma de Dios y hablarlo mediante las obras.",
    "ConexionDoctrinal": ["Sabiduría", "Victoria sobre Sí Mismo", "Gozo Espiritual"],
    "NodosSimapticos": ["Idioma de Dios", "Corona de Luz", "Paz de Conciencia"]
  },
  "5517: LA CAUSA DEL TRIUNFO": {
    "PilotoDeCoherencia": "El espíritu triunfa siempre porque es hijo de la Luz y la luz no puede ser vencida por la sombra. El triunfo es una ley fatal del progreso. Podrás retrasarte un siglo o un milenio, pero al final, la razón vencerá al instinto. El optimismo trincadista se basa en la certeza matemática del triunfo final del amor.",
    "CitaInelutable": "El triunfo es el destino ineludible de todo espíritu que camina.",
    "EjemploPedagogico": "Es como un río que baja de la montaña: puede encontrar rocas, presas o desviaciones, pero al final llegará al mar. La gravedad lo empuja. La ley de amor es la gravedad que empuja a tu espíritu hacia el océano de Eloí.",
    "ConexionDoctrinal": ["Optimismo Racional", "Certeza Matemática", "Triunfo Inevitable"],
    "NodosSimapticos": ["Gravedad de Amor", "Río hacia el Mar", "Destino de Luz"]
  },
  "5586: EL CUERPO DEL HOMBRE (INTRODUCCIÓN)": {
    "PilotoDeCoherencia": "Iniciamos el estudio del cuerpo no como anatomía muerta, sino como la máquina viva que el espíritu ha diseñado para sí. El cuerpo es el resumen de toda la creación material. No es una cárcel, es un instrumento de trabajo que debemos conocer y respetar para que el espíritu cumpla su misión sin trabas orgánicas.",
    "CitaInelutable": "Tu cuerpo es el mapa de tu progreso pasado y la herramienta de tu futuro.",
    "EjemploPedagogico": "Es como un traje a medida hecho por el mejor sastre del mundo. El traje tiene bolsillos para lo que necesitas y refuerzos donde más trabajas. Tu espíritu es el sastre y el cliente a la vez. ¡Luce tu traje con dignidad!",
    "ConexionDoctrinal": ["Fisiología Espiritual", "Máquina Humana", "Resumen de Creación"],
    "NodosSimapticos": ["Mapa de Progreso", "Traje a Medida", "Instrumento de Obra"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Mundos de Prueba": {
    "Definición": "Planetas destinados a espíritus que aún luchan por dominar sus pasiones y saldar deudas de existencias anteriores, donde el dolor actúa como preceptor pedagógico.",
    "Contexto": "Clasificación de mundos en Conócete a ti mismo.",
    "Conexiones": ["Expiación", "Dolor", "Purificación"],
    "Obras": ["Conócete a ti mismo", "Profilaxis de la Vida"]
  },
  "Mundo de Transición": {
    "Definición": "Estado evolutivo intermedio de un planeta donde se produce el juicio final de una etapa y se prepara la entrada al régimen de regeneración y Comuna.",
    "Contexto": "Estado actual de la Tierra según Joaquín Trincado.",
    "Conexiones": ["Juicio", "Regeneración", "Comuna"],
    "Obras": ["Conócete a ti mismo", "Primer Rayo de Luz"]
  },
  "Concupiscencia": {
    "Definición": "Apego desordenado a los placeres materiales y sensuales que ciega al espíritu y retrasa su progreso al confundir la felicidad real con el goce efímero de la carne.",
    "Conexiones": ["Vicio", "Alma", "Sufrimiento"],
    "Obras": ["Conócete a ti mismo", "Los Cinco Amores"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 9 nodos 1:1 de Conócete a ti mismo (Batch 5 - Grados de Mundos) y 3 términos sinápticos.');
