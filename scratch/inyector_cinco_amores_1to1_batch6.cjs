const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/los-cinco-amores_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Los Cinco Amores (Batch 6)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "9400: CAPÍTULO QUINTO: EL AMOR MAYOR, DEBE ESTAR EN LA JUSTICIA": {
    "PilotoDeCoherencia": "La justicia es el amor en acción. No hay amor mayor que el que se manifiesta en la equidad absoluta. Denuncio que la justicia humana ha sido prostituida por el favor y el dinero. En la Comuna, la justicia no mira el rango, mira la obra. El amor mayor es ser justo incluso cuando duele al interés propio.",
    "CitaInelutable": "El amor mayor no es el del sentimiento ciego, sino el que se asienta en la justicia inconmovible.",
    "EjemploPedagogico": "Es como el sol que no pregunta a quién calienta. La justicia debe ser ese calor igualitario que llega a todos los rincones de la sociedad sin distinción.",
    "ConexionDoctrinal": ["Justicia Racional", "Amor Mayor", "Equidad"],
    "NodosSimapticos": ["Amor en Justicia", "Equidad Absoluta", "Justicia sin Favor"]
  },
  "9648: CAPÍTULO SEXTO: EL AMOR CONSCIENTE EN LA EDUCACIÓN NACIONAL": {
    "PilotoDeCoherencia": "La educación nacional debe ser el taller de la conciencia. No queremos loros que repitan dogmas, sino espíritus que comprendan leyes. El amor consciente en la educación es dar al niño la libertad de pensar y las herramientas para descubrir la verdad por sí mismo. La escuela es la base del Estado.",
    "CitaInelutable": "Educar con amor consciente es preparar al hombre para ser su propio soberano.",
    "EjemploPedagogico": "Educar no es llenar un balde de datos, es encender un fuego de curiosidad y razón. Una vez encendido, el espíritu buscará su propia luz.",
    "ConexionDoctrinal": ["Educación Racional", "Conciencia", "Soberanía"],
    "NodosSimapticos": ["Educación Consciente", "Taller de Conciencia", "Soberanía del Niño"]
  },
  "10286: CAPÍTULO SÉPTIMO: EL AMOR TRAE LA EMULACIÓN DE LAS REGIONES": {
    "PilotoDeCoherencia": "La emulación es la competencia sana por el bien común. Las regiones deben competir en ver quién sirve mejor a la nación, no en quién acapara más. El amor regional se purifica cuando busca la gloria del conjunto. La diversidad regional es la riqueza de la unidad nacional.",
    "CitaInelutable": "La emulación entre regiones es el motor del progreso nacional bajo la ley de amor.",
    "EjemploPedagogico": "Es como los diferentes instrumentos de una orquesta: cada uno intenta dar su mejor nota para que la sinfonía sea perfecta. Si uno calla o desafina por envidia, todos pierden.",
    "ConexionDoctrinal": ["Emulación", "Unidad Nacional", "Diversidad"],
    "NodosSimapticos": ["Emulación Sana", "Riqueza Regional", "Sinfonía Nacional"]
  },
  "10527: CAPÍTULO OCTAVO: EL AMOR DE RAZA AGUZA LA INTELIGENCIA": {
    "PilotoDeCoherencia": "El amor a la raza no es exclusivismo, sino reconocimiento de la experiencia acumulada. Cada raza aporta un matiz de inteligencia al espíritu universal. El cruce de razas es la alquimia que aguza la inteligencia humana al fundir diferentes grados de progreso en un solo ser.",
    "CitaInelutable": "El amor de raza bien entendido es el reconocimiento de la herencia de sabiduría de los siglos.",
    "EjemploPedagogico": "Es como mezclar metales para hacer una aleación más fuerte: el acero necesita del hierro y del carbono. La raza universal necesita de todos los matices previos.",
    "ConexionDoctrinal": ["Cruce de Razas", "Inteligencia", "Progreso Espiritual"],
    "NodosSimapticos": ["Amor de Raza", "Alquimia Humana", "Inteligencia Aguda"]
  },
  "11024: CAPÍTULO NOVENO: EL AMOR IMPONE LOS DEBERES INDIVIDUALES (SACRIFICIO)": {
    "PilotoDeCoherencia": "El sacrificio racional es el deber cumplido por amor. No es el sacrificio masoquista de las religiones, sino la entrega de lo pequeño por lo grande. El ciudadano de la Comuna sabe que su bienestar depende del bienestar de todos y actúa en consecuencia, postergando su interés si la Ley lo requiere.",
    "CitaInelutable": "El deber es el amor que se hace obligación consciente.",
    "EjemploPedagogico": "Es el soldado de la luz que no huye del trabajo duro porque sabe que su esfuerzo es el pan de sus hermanos. Ese sacrificio es su mayor orgullo.",
    "ConexionDoctrinal": ["Deber", "Sacrificio Racional", "Responsabilidad"],
    "NodosSimapticos": ["Deber de Amor", "Sacrificio Racional", "Obligación Consciente"]
  },
  "11223: CAPÍTULO DIEZ: EL AMOR A LA SUPREMACÍA DE LA LEY DEL AMOR": {
    "PilotoDeCoherencia": "La Ley de Amor está por encima de todas las leyes humanas. Si una constitución o un código nacional contradice la fraternidad universal, debe ser abolido. El amor a la supremacía de la Ley es el acto de rebeldía más noble contra la injusticia institucionalizada.",
    "CitaInelutable": "Ninguna ley humana puede sostenerse si pisa la Ley de Amor del Padre.",
    "EjemploPedagogico": "La Ley de Amor es el cielo; las leyes humanas son techos. Si el techo te impide ver el cielo o te asfixia, debes derribarlo para respirar la luz del Creador.",
    "ConexionDoctrinal": ["Supremacía de la Ley", "Ley de Amor", "Justicia Universal"],
    "NodosSimapticos": ["Supremacía de la Ley", "Ley vs Código", "Rebeldía Noble"]
  },
  "11471: QUINTA PARTE: EL AMOR UNIVERSAL ES EL AMOR DE LA COMUNA": {
    "PilotoDeCoherencia": "Llegamos a la cumbre. El amor universal es el que no tiene fronteras. Es el amor de la Comuna donde ya no hay 'mío' ni 'tuyo', sino 'nuestro'. Es el estado final del espíritu en la tierra, donde la fraternidad es la única política y la Ley es el único gobierno.",
    "CitaInelutable": "El amor universal es el aire que se respira en la Comuna de los hijos de Eloí.",
    "EjemploPedagogico": "Es la luz del mediodía donde ya no hay sombras. Todo es claro, todo es común, todo es amor.",
    "ConexionDoctrinal": ["Amor Universal", "Comuna Universal", "Mundo Comunizado"],
    "NodosSimapticos": ["Amor Universal", "Cumbre del Amor", "Sin Fronteras"]
  },
  "11475: CAPITULO PRIMERO: EL AMOR A LA HUMANIDAD": {
    "PilotoDeCoherencia": "Amar a la humanidad es amar la vida en todas sus formas. Es el fin del odio nacional y religioso. Denuncio que se ha usado el nombre de la humanidad para matarla. Mi Escuela proclama que la humanidad es un solo cuerpo y que el dolor de uno es el dolor de todos.",
    "CitaInelutable": "La humanidad es una sola familia bajo un solo Padre.",
    "EjemploPedagogico": "Es como un inmenso jardín con flores de todos los colores: si arrancas una, dañas la belleza del jardín entero. Amar la humanidad es cuidar cada flor.",
    "ConexionDoctrinal": ["Humanidad", "Familia Humana", "Fraternidad"],
    "NodosSimapticos": ["Amor a la Humanidad", "Un Solo Cuerpo", "Fin del Odio"]
  },
  "11870: La Revolución como Necesidad": {
    "PilotoDeCoherencia": "La revolución es el desbroce necesario. Hablo de los ejércitos rojos y movimientos sociales: son la fuerza bruta de la naturaleza rompiendo las vallas del privilegio. No los juzgo por su color político, sino por su necesidad histórica de justicia. El obrero quemará las vallas con el fuego de su querer.",
    "CitaInelutable": "Terribles son las vallas que el obrero tiene que salvar; pero tiene el fuego de su querer y las quemará.",
    "EjemploPedagogico": "Es el agua contenida por una presa vieja: si no se abren las compuertas, el agua romperá la presa. La revolución es esa ruptura cuando el poder se niega a la justicia.",
    "ConexionDoctrinal": ["Revolución Racional", "Necesidad de Vida", "Justicia Social"],
    "NodosSimapticos": ["Fuego del Querer", "Vallas del Privilegio", "Ruptura Necesaria"]
  },
  "11881: PROCLAMA FINAL": {
    "PilotoDeCoherencia": "Proclamo la Unidad Universal. El Universo solidarizado, el Mundo comunizado. Una sola Ley, una sola Sustancia. El Magnetismo Espiritual lo llena todo. Es el fin del misterio y el inicio de la luz plena. ¡Hermanos, amad al hermano!",
    "CitaInelutable": "El Universo, solidarizado. El Mundo todo, comunizado. Todo es Magnetismo Espiritual.",
    "EjemploPedagogico": "Es el grito de victoria del espíritu sobre la materia. El velo se ha rasgado y la verdad brilla en todo su esplendor.",
    "ConexionDoctrinal": ["Proclama", "Universo Solidarizado", "Todo es Magnetismo"],
    "NodosSimapticos": ["Proclama de Unidad", "Sustancia Una", "Final de la Obra"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Emulación Sana": {
    "Definición": "La competencia constructiva entre individuos o regiones por ver quién aporta más al progreso y bienestar común, despojada de envidia o deseo de dominio.",
    "Contexto": "Capítulo Séptimo de la Cuarta Parte de Los Cinco Amores. Se opone a la competencia capitalista basada en la ruina del otro.",
    "Conexiones": ["Bien Común", "Progreso", "Fraternidad"],
    "Obras": ["Los Cinco Amores"]
  },
  "Alquimia Humana": {
    "Definición": "El proceso de perfeccionamiento del espíritu y la inteligencia a través del cruce de razas y la fusión de experiencias históricas diversas.",
    "Contexto": "Capítulo Octavo de la Cuarta Parte de Los Cinco Amores. Trincado lo ve como el camino hacia el hombre universal.",
    "Conexiones": ["Cruce de Razas", "Inteligencia", "Etnicismo Universal"],
    "Obras": ["Los Cinco Amores"]
  },
  "Fuego del Querer": {
    "Definición": "La fuerza irresistible de la voluntad humana orientada a la justicia y la libertad, capaz de destruir los obstáculos (vallas) puestos por el privilegio y la religión.",
    "Contexto": "Capítulo II de la Quinta Parte de Los Cinco Amores. Se asocia con la fuerza de los movimientos sociales y revolucionarios.",
    "Conexiones": ["Revolución Racional", "Voluntad", "Justicia Social"],
    "Obras": ["Los Cinco Amores", "Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Los Cinco Amores (Batch 6) y 3 términos sinápticos.');
