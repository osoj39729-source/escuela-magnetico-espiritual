const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/los-cinco-amores_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Los Cinco Amores (Batch 2)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "2435: SEGUNDA PARTE — EL AMOR CIUDADANO ES MÁS PERFECTO QUE EL AMOR DE FAMILIA": {
    "PilotoDeCoherencia": "El amor ciudadano es la expansión del taller familiar al mundo. Es más perfecto porque requiere un grado mayor de desprendimiento del egoísmo. Ser ciudadano de la Comuna es reconocer al extraño como hermano y actuar por el bien de la colectividad sin acepción de personas.",
    "CitaInelutable": "El amor ciudadano es más perfecto porque abraza a la familia humana entera.",
    "EjemploPedagogico": "Si la familia es la escuela primaria, la ciudadanía es la universidad del espíritu. En la familia amas a los tuyos; en la ciudadanía amas a la Ley a través de todos los hombres.",
    "ConexionDoctrinal": ["Comuna Universal", "Progreso Espiritual", "Fraternidad"],
    "NodosSimapticos": ["Amor Ciudadano", "Perfección del Amor", "Bien Colectivo"]
  },
  "2439: CAPÍTULO PRIMERO — EL AMOR A LA AMISTAD": {
    "PilotoDeCoherencia": "La amistad es la elección libre por afinidad vibratoria. Es el ensayo de la fraternidad universal. Un amigo es un espejo que nos ayuda a ver nuestro propio progreso o estancamiento. La verdadera amistad no encubre el error, sino que ayuda a corregirlo.",
    "CitaInelutable": "La amistad es la elección libre del espíritu por la afinidad de la ley.",
    "EjemploPedagogico": "Un amigo es como un compañero de viaje: no solo camina a tu lado, sino que te avisa si hay piedras en el camino y te ofrece su brazo si tropiezas.",
    "ConexionDoctrinal": ["Afinidad", "Fraternidad", "Espejo del Espíritu"],
    "NodosSimapticos": ["Amistad Racional", "Afinidad Vibratoria", "Compañero de Vuelo"]
  },
  "2781: CAPÍTULO SEGUNDO — EL AMOR A LA SALUD IMPONE LA HIGIENE": {
    "PilotoDeCoherencia": "Amar la salud es un deber, no un deseo. La higiene es la profilaxis del instrumento. Mi Escuela enseña que un cuerpo sucio o enfermo por descuido es un insulto al espíritu que lo habita. El aseo exterior es reflejo del aseo interior.",
    "CitaInelutable": "El amor a la salud impone la higiene como deber inexcusable.",
    "EjemploPedagogico": "Nadie toca un violín desafinado y lleno de polvo esperando que suene bien. Tu cuerpo es el violín del espíritu; mantenlo limpio y afinado para que la música de la vida sea perfecta.",
    "ConexionDoctrinal": ["Profilaxis de la Vida", "Aseo", "Instrumento Físico"],
    "NodosSimapticos": ["Higiene Doctrinal", "Amor a la Salud", "Aseo del Instrumento"]
  },
  "3031: CAPÍTULO TERCERO — EL AMOR A LA EDUCACIÓN": {
    "PilotoDeCoherencia": "La educación es el arma de la libertad. El ciudadano tiene la obligación de aprender y la sociedad el deber de enseñar. Sin educación no hay discernimiento, y sin discernimiento el hombre es esclavo del dogma o del instinto.",
    "CitaInelutable": "El amor a la educación lo impone la ciudadanía por el bien social.",
    "EjemploPedagogico": "La educación es la luz que disipa la niebla de la ignorancia. En la niebla, cualquiera puede engañarte y llevarte al precipicio; con luz, tú eliges tu camino.",
    "ConexionDoctrinal": ["Discernimiento", "Enseñanza Racional", "Libertad"],
    "NodosSimapticos": ["Educación Ciudadana", "Luz de la Razón", "Deber de Aprender"]
  },
  "3229: CAPÍTULO CUARTO — EL AMOR A LA MORAL SOCIAL Y PARTICULAR": {
    "PilotoDeCoherencia": "La moral no es un código de pecados religiosos, sino la armonía de los intereses. No hagas a otros lo que no quieres para ti. La moral particular es la base de la social: el hombre justo hace la sociedad justa.",
    "CitaInelutable": "La moral es la armonía de los intereses puestos en la balanza de la justicia.",
    "EjemploPedagogico": "Es como las piezas de un reloj: si una pieza (moral particular) no encaja con las demás, el reloj entero (moral social) no da la hora de la justicia.",
    "ConexionDoctrinal": ["Armonía", "Justicia", "Moral Racional"],
    "NodosSimapticos": ["Moral Racional", "Balanza de Justicia", "Armonía de Intereses"]
  },
  "3479: CAPÍTULO QUINTO — EL AMOR A LA COOPERACIÓN COLECTIVA": {
    "PilotoDeCoherencia": "La cooperación es la ley de la Comuna. El individualismo egoísta es un residuo animal. Solo cooperando el hombre vence las dificultades de la naturaleza y construye el bienestar para todos. En la cooperación, el débil se apoya en el fuerte y el fuerte se honra sirviendo.",
    "CitaInelutable": "La cooperación colectiva es la fuerza que mueve la montaña del progreso.",
    "EjemploPedagogico": "Una sola abeja no hace colmena; mil abejas cooperando producen la miel que alimenta a todas. El hombre debe aprender de la naturaleza la lección de la colmena.",
    "ConexionDoctrinal": ["Solidaridad", "Comuna", "Fuerza Colectiva"],
    "NodosSimapticos": ["Cooperación", "Colmena Humana", "Fuerza del Progreso"]
  },
  "3628: CAPÍTULO SEXTO — EL AMOR A LA LIBERTAD INDIVIDUAL Y COLECTIVA": {
    "PilotoDeCoherencia": "La libertad es la soberanía del espíritu. Nadie tiene derecho a imponer su voluntad sobre otro por la fuerza o el dogma. Pero la libertad no es libertinaje: termina donde empieza el derecho del hermano. Libertad sin ley es caos.",
    "CitaInelutable": "La libertad es el trono donde el espíritu reina sobre la materia.",
    "EjemploPedagogico": "Ser libre es como tener un caballo brioso: tú llevas las riendas (la razón). Si sueltas las riendas, el caballo te lleva a donde quiere (libertinaje); si lo montas con ley, llegas a donde quieras.",
    "ConexionDoctrinal": ["Soberanía del Espíritu", "Libertad vs Libertinaje", "Derecho Humano"],
    "NodosSimapticos": ["Libertad Racional", "Soberanía", "Riendas de la Razón"]
  },
  "3826: CAPÍTULO SÉPTIMO — EL AMOR A LA IGUALDAD DE DERECHOS Y OBLIGACIONES": {
    "PilotoDeCoherencia": "La igualdad es matemática. En la Comuna, no hay derechos sin obligaciones, ni obligaciones sin derechos. Quien quiere comer, debe trabajar; quien trabaja, tiene derecho a todo. Se acaba el privilegio de casta, de sangre o de dinero.",
    "CitaInelutable": "La igualdad de derechos y obligaciones es la balanza de la Comuna.",
    "EjemploPedagogico": "Es una balanza de dos platos: si pones un derecho en uno, debes poner una obligación en el otro para que el fiel marque la justicia. Si un plato está vacío, la balanza miente.",
    "ConexionDoctrinal": ["Igualdad", "Justicia", "CGS"],
    "NodosSimapticos": ["Igualdad Matemática", "Derechos y Deberes", "Fin del Privilegio"]
  },
  "4124: CAPÍTULO OCTAVO — EL AMOR AL COMUNISMO O COMUNA UNIVERSAL": {
    "PilotoDeCoherencia": "El Comunismo de Amor y Ley es la meta final. Denuncio la 'economixtificación': el egoísmo disfrazado de ahorro que lleva a la avaricia. La economía real es evitar lo superfluo para que a nadie le falte lo necesario. En la Comuna, Eloí es el único rico porque todos sus hijos tienen todo.",
    "CitaInelutable": "La economía bien entendida es evitar lo superfluo sin caer en la mezquindad.",
    "EjemploPedagogico": "Economixtificación es como alguien que junta agua en un barril y deja que se pudra mientras sus vecinos mueren de sed. Economía es repartir el agua para que todos beban y la tierra florezca.",
    "ConexionDoctrinal": ["Economixtificación", "Comuna", "Avaricia vs Economía"],
    "NodosSimapticos": ["Economixtificación", "Comunismo de Amor", "Evitar lo Superfluo"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Economixtificación": {
    "Definición": "Término creado por Trincado para definir la mal entendida economía basada en la avaricia, la mezquindad y el egoísmo, que busca acumular para uno solo privando a los demás.",
    "Contexto": "Capítulo VIII de la Segunda Parte de Los Cinco Amores. Se contrapone a la 'Economía de Amor' que evita lo superfluo para garantizar lo necesario.",
    "Conexiones": ["Avaricia", "Comuna Universal", "Superfluo"],
    "Obras": ["Los Cinco Amores", "Filosofía Austera Racional"]
  },
  "Economía de Amor": {
    "Definición": "El sistema de administración de recursos en la Comuna Universal que consiste en evitar lo superfluo y el desperdicio para asegurar que todos los hermanos tengan cubiertas sus necesidades.",
    "Contexto": "Segunda Parte de Los Cinco Amores. Es la base material del bienestar social.",
    "Conexiones": ["Economixtificación", "Comuna", "Justicia"],
    "Obras": ["Los Cinco Amores"]
  },
  "Moral Social": {
    "Definición": "La armonía de los intereses de todos los ciudadanos bajo la balanza de la justicia. No se basa en el pecado sino en el respeto mutuo y la cooperación.",
    "Contexto": "Capítulo IV de la Segunda Parte de Los Cinco Amores.",
    "Conexiones": ["Justicia", "Igualdad", "Moral Racional"],
    "Obras": ["Los Cinco Amores", "Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 9 nodos 1:1 de Los Cinco Amores (Batch 2) y 3 términos sinápticos.');
