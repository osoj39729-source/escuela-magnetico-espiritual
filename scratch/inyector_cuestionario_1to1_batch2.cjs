const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/cuestionario-espirita-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Cuestionario Espírita Racional (Batch 2 - Preguntas 18 a 50)
const nuevosNodos = {
  "262: Preguntas 18-19: Adoración y Oración a Eloí": {
    "PilotoDeCoherencia": "Se revela el nombre del Padre en el Universo (Eloí). A diferencia de los dioses que exigen ritos, a Eloí se le adora amando al hermano y la única oración que le agrada es el trabajo productivo.",
    "CitaInelutable": "Se le adora amando al hermano; y el trabajo productivo es la oración que más le satisface.",
    "EjemploPedagogico": "Rezar de rodillas sin ayudar al prójimo es hablar al vacío. Sellar un ladrillo para la escuela del pueblo es la oración más potente que llega al Creador.",
    "ConexionDoctrinal": ["Eloí", "Adoración Práctica", "Trabajo como Oración"],
    "NodosSimapticos": ["Oración Productiva", "Amor como Rito"]
  },
  "289: Pregunta 20: El delito de comer y no trabajar": {
    "PilotoDeCoherencia": "El que come y no trabaja comete un doble delito: ante el Padre es un transgresor de su ley, y ante los hombres es un usurpador del trabajo ajeno (un parásito). Esto se aplica a ricos herederos, explotadores y sacerdotes, aunque las leyes humanas los amparen.",
    "CitaInelutable": "El que come y no trabaja es usurpador del trabajo ajeno, aunque las leyes de supremacía lo amparen.",
    "EjemploPedagogico": "Es como colarse en un banquete donde todos trajeron su comida y comer la porción del vecino sin haber cocinado nada. El parásito social es el verdadero ladrón.",
    "ConexionDoctrinal": ["Ley del Trabajo", "Parasitismo", "Delito Social"],
    "NodosSimapticos": ["Usurpador Legal", "Parásito Social"]
  },
  "305: Preguntas 21-23: El negocio de los Santos Católicos": {
    "PilotoDeCoherencia": "No existen seres divinos, solo el Padre. Las religiones fabrican santos para aumentar el fanatismo y sus ganancias. La mayor ironía es que han canonizado a espíritus que vivieron siglos antes de la iglesia (como Moisés, Abraham, Jesús o los apóstoles), quienes no podían ser católicos y de hecho pertenecían al pueblo hebreo que la iglesia persiguió.",
    "CitaInelutable": "La religión ha hecho santos para vivir de la ignorancia; a más santos, mayores ganancias.",
    "EjemploPedagogico": "Es como si una empresa moderna registrara a Sócrates como su empleado estrella. Sócrates nunca conoció esa empresa. Los santos antiguos nunca conocieron el Vaticano.",
    "ConexionDoctrinal": ["Falsos Santos", "Lucro Religioso", "Apropiación Histórica"],
    "NodosSimapticos": ["Santos Hebreos", "Negocio de Ignorancia"]
  },
  "354: Preguntas 24-25: La irracionalidad del Milagro": {
    "PilotoDeCoherencia": "Se decreta la imposibilidad del milagro. Las curaciones o irradiaciones (efectos magnéticos) no son milagros. El milagro es un absurdo que quebraría las leyes universales, las cuales son inmutables.",
    "CitaInelutable": "El milagro es un absurdo que no existe ni puede existir, porque quebraría las leyes universales.",
    "EjemploPedagogico": "El universo es un reloj perfecto. Un milagro sería que el relojero rompiera un engranaje para que la aguja salte; un Creador perfecto no rompe sus propias leyes.",
    "ConexionDoctrinal": ["Absurdo del Milagro", "Leyes Inmutables", "Magnetismo Curativo"],
    "NodosSimapticos": ["Reloj Perfecto", "Leyes Intocables"]
  },
  "386: Preguntas 26-28: Religión como Relegación de Derechos": {
    "PilotoDeCoherencia": "Definición etimológica y práctica de 'Religión': significa relegar (renunciar) a los derechos y a la libertad. Al exigir fe ciega, la religión le prohíbe al adepto pensar con su propia cabeza, convirtiéndolo en un esclavo mental de los sacerdotes.",
    "CitaInelutable": "Religión significa relegación de derechos. Al religioso le está prohibido pensar con su propia cabeza.",
    "EjemploPedagogico": "Es como firmar un contrato cediéndole el volante de tu vida a un ciego. Tú dejas de manejar y él te lleva al precipicio. Eso es la fe dogmática.",
    "ConexionDoctrinal": ["Relegación de Derechos", "Fe Ciega como Esclavitud"],
    "NodosSimapticos": ["Esclavo Mental", "Volante Cedido"]
  },
  "428: Preguntas 29-30: La Excomunión y el Racionalismo": {
    "PilotoDeCoherencia": "El castigo de la iglesia para quien piensa es la excomunión (terror y desprecio social, como se hizo en la inquisición). En contraposición, los espiritistas, por mandato divino, no relegan sus derechos ante nadie. Siendo racionalistas, conservan su soberanía absoluta.",
    "CitaInelutable": "Los espiritistas racionalistas no relegan sus derechos ante nadie, por mandato expreso del Creador.",
    "EjemploPedagogico": "La religión te castiga por ser adulto y pensar; la Escuela te exige ser adulto para entrar.",
    "ConexionDoctrinal": ["Soberanía Individual", "Terror Inquisitorial", "Rechazo de Sumisión"],
    "NodosSimapticos": ["Excomunión del Pensamiento", "Soberanía Racional"]
  },
  "463: Preguntas 31-32: Condición de Ingreso a la Escuela": {
    "PilotoDeCoherencia": "La Escuela no exige genios, acoge a hombres de buena voluntad, ignorantes y sabios. Los sabios enseñan, los ignorantes aprenden. El fin es formar hombres libres, sin aceptar esclavos ni fanáticos. Es un ambiente netamente filosófico-racionalista y fraternista.",
    "CitaInelutable": "La Escuela no quiere esclavos ni fanáticos, y sí hombres racionalistas y hermanos.",
    "EjemploPedagogico": "Es una escuela donde no te echan por no saber, sino por negarte a aprender o querer adorar al pupitre.",
    "ConexionDoctrinal": ["Acogida Universal", "Formación de Librepensadores"],
    "NodosSimapticos": ["Ajedrez Racional", "Sin Fanáticos"]
  },
  "492: Pregunta 33: Diferencia con el Comunismo Marxista": {
    "PilotoDeCoherencia": "Marcada separación política. La Comuna de Amor y Ley difiere absolutamente del comunismo rojo (marxista). La Escuela persigue la fraternidad sin derramamiento de sangre. El principio es que la violencia engendra violencia, y solo el amor da frutos de amor permanente.",
    "CitaInelutable": "Diferimos absolutamente del comunismo marxista: perseguimos la Comuna sin derramamiento de sangre, porque la violencia engendra violencia.",
    "EjemploPedagogico": "El comunismo materialista quiere tumbar la casa a cañonazos para reconstruirla; la Comuna desaloja el error enseñando a construir una nueva por la vía del amor.",
    "ConexionDoctrinal": ["Comuna de Amor y Ley vs Comunismo Materialista", "Rechazo a la Violencia"],
    "NodosSimapticos": ["Revolución sin Sangre", "Amor por Fruto"]
  },
  "513: Preguntas 34-36: Pluralidad de Mundos y Patria Cósmica": {
    "PilotoDeCoherencia": "La vida de la Comuna es una ley omnímoda para todos los mundos del infinito. Las estrellas ('miríadas de puntos luminosos') son mundos habitados por hombres en diferentes grados de progreso. Por lo tanto, el hombre, que es espíritu, tiene como única Patria el Universo infinito.",
    "CitaInelutable": "Nuestra patria es el universo infinito, tanto en estado libre como encarnado.",
    "EjemploPedagogico": "Es como el habitante de una isla dándose cuenta de que el océano está lleno de otras islas. El planeta Tierra es solo una pequeña isla en el océano universal.",
    "ConexionDoctrinal": ["Pluralidad de Mundos", "Patria Universal", "Ley Omnímoda"],
    "NodosSimapticos": ["Océano Cósmico", "Tierra Isla", "Ciudadanos del Universo"]
  },
  "560: Preguntas 37-39: La Falsedad de la Muerte": {
    "PilotoDeCoherencia": "La muerte no existe, es solo una transformación (desencarnación). El cuerpo es solo un vestido que se deja cuando ya no sirve. El espíritu no sufre físicamente al morir, pero sufre horriblemente (por atadura fluídica) al ver los lamentos y apegos de sus familiares, a quienes no puede consolar. La Escuela exige evitar las lamentaciones lúgubres.",
    "CitaInelutable": "La muerte no existe, y sí la transformación. El lamento del vivo amarra el dolor del espíritu libre.",
    "EjemploPedagogico": "Morir es quitarse un abrigo viejo. Si tu familia llora porque tiraste el abrigo, te causan pena porque ves que no entienden que ahora estás libre del frío.",
    "ConexionDoctrinal": ["Inexistencia de la Muerte", "Desencarnación", "Daño del Luto"],
    "NodosSimapticos": ["Abrigo Viejo", "Transformación", "Lágrimas que Atan"]
  },
  "616: Preguntas 40-42: La Razón como Única Arma": {
    "PilotoDeCoherencia": "Al ser racionalista, la Escuela repudia la violencia para imponer sus ideales. Su arma es la Razón Pura y la ley del Amor. Sin embargo, no prohíbe la defensa personal o de la dignidad en caso de ser atacado; la ley divina y humana imponen y justifican la defensa propia.",
    "CitaInelutable": "Nuestra arma defensiva es la razón pura; pero tenemos el derecho irrenunciable a defender nuestra dignidad si somos atacados.",
    "EjemploPedagogico": "No atacamos a nadie, llevamos la bandera de paz. Pero si alguien intenta pisotear la bandera, el pacifista no se deja asesinar, detiene el golpe con firmeza.",
    "ConexionDoctrinal": ["Razón Pura", "Defensa Propia", "Pacifismo Activo"],
    "NodosSimapticos": ["Pacifismo no Cobarde", "Arma Racional"]
  },
  "669: Preguntas 43-47: Igualdad, Cargos y Respeto en Cátedra": {
    "PilotoDeCoherencia": "Todos los adeptos son iguales, sin distinciones materiales, y se tratan de 'Hermanos'. Los cargos directivos no otorgan supremacía, son misiones de sacrificio ('El Amor es Sacrificio'). Quien no respeta, demuestra supremacía; quien usa el cargo con hipocresía es destituido en justicia, reservándose la sanción definitiva al Maestro General.",
    "CitaInelutable": "El cargo directivo no da derechos de supremacía, impone deberes de sacrificio y respeto.",
    "EjemploPedagogico": "El director no es el capataz, es el hermano mayor al que le toca la carga más pesada del barco. Si se vuelve tirano, es bajado del puesto.",
    "ConexionDoctrinal": ["Igualdad de Hermanos", "Cargos como Misión", "Amor es Sacrificio"],
    "NodosSimapticos": ["Director no Capataz", "Autoridad por Servicio"]
  },
  "767: Preguntas 48-50: La Ley de Reencarnación y Sabiduría Innata": {
    "PilotoDeCoherencia": "Demostración de la reencarnación (pluralidad de existencias) como única justificación del progreso ('Vivir, morir y volver a nacer'). La prueba empírica son los 'niños prodigio' en música o arte, que demuestran una sabiduría innata imposible de adquirir en su corta edad terrenal actual.",
    "CitaInelutable": "La sabiduría innata del niño prodigio es el archivo abierto de sus vidas pasadas.",
    "EjemploPedagogico": "Nadie aprende a tocar un concierto de piano en seis meses de nacido. Ese niño trajo el archivo guardado en el espíritu desde otra escuela anterior (otra vida).",
    "ConexionDoctrinal": ["Pluralidad de Existencias", "Reencarnación Empírica", "Niños Prodigio"],
    "NodosSimapticos": ["Archivo del Espíritu", "Justicia Evolutiva"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Eloí": {
    "Definición": "Nombre revelado y racional con el que la Escuela designa al Padre Creador Universal. A quien no se adora con ritos o lamentos, sino con el amor al prójimo y el trabajo productivo.",
    "Contexto": "Preguntas 18 y 19 del Cuestionario Espírita Racional.",
    "Conexiones": ["Creador", "Oración", "Trabajo"],
    "Obras": ["Cuestionario Espírita Racional"]
  },
  "Comuna de Amor y Ley": {
    "Definición": "Régimen sociopolítico propuesto por la Escuela para toda la tierra, basado en la fraternidad universal sin fronteras. Repudia la violencia marxista y busca la abolición total de la guerra mediante la razón.",
    "Contexto": "Preguntas 5 a 7, y 33 del Cuestionario Espírita Racional.",
    "Conexiones": ["Fraternidad", "Comunismo", "Antibelicismo"],
    "Obras": ["Cuestionario Espírita Racional", "Los Cinco Amores"]
  },
  "Relegación de Derechos (Religión)": {
    "Definición": "Significado profundo de la palabra 'religión'. Es el acto mediante el cual el individuo renuncia a su libertad de pensar, sometiéndose ciegamente al dictamen de un dogma o clero.",
    "Contexto": "Preguntas 26 y 27 del Cuestionario Espírita Racional.",
    "Conexiones": ["Religión", "Sometimiento", "Fe Ciega"],
    "Obras": ["Cuestionario Espírita Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 13 nodos 1:1 (Preguntas 18-50 combinadas racionalmente) de Cuestionario Espírita Racional y 3 términos sinápticos.');
