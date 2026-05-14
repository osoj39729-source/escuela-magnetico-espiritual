const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - El Espiritismo Estudiado (Batch 5 - Tipos de Médiums)
const nuevosNodos = {
  "7652: CAPITULO SEGUNDO: QUÉ SON LOS MÉDIUMS": {
    "PilotoDeCoherencia": "Los médiums no son seres elegidos por gracia divina ni monstruos sobrenaturales. Son simplemente espíritus encarnados que, por su grado de progreso o por una misión específica (a veces como prueba o expiación), poseen facultades perceptivas más desarrolladas que el promedio. Son los instrumentos de trabajo del mundo espiritual.",
    "CitaInelutable": "El médium es el instrumento orgánico que el espíritu usa para hacerse tangible en la materia.",
    "EjemploPedagogico": "Es como un teléfono de alta tecnología: el teléfono no es el que sabe la noticia, es solo el aparato por el que la noticia llega. El médium es el aparato; la grandeza está en el comunicante y en el uso que se le dé.",
    "ConexionDoctrinal": ["Definición de Médium", "Instrumento", "Progreso o Expiación"],
    "NodosSimapticos": ["Teléfono Espiritual", "Instrumento Orgánico", "Facultad Perceptiva"]
  },
  "7804: CAPITULO TERCERO: CUALIDADES DEL MÉDIUM": {
    "PilotoDeCoherencia": "Las cualidades morales son indispensables para un médium confiable. La falta de estas cualidades (humildad, estudio, amor) es lo que ha permitido la entrada a espíritus detractores, generando superchería y dando armas a los enemigos del Espiritismo. La ignorancia del médium es el principal enemigo de la verdad.",
    "CitaInelutable": "La ignorancia del médium y del director es la puerta abierta al error y al detractor.",
    "EjemploPedagogico": "Es como un filtro de agua roto: en vez de purificar, deja pasar todo el lodo. Un médium sin cualidades morales es un filtro roto por donde pasa el lodo de los espíritus engañadores.",
    "ConexionDoctrinal": ["Cualidades Morales", "Filtro Espiritual", "Defensa contra Detractores"],
    "NodosSimapticos": ["Filtro Roto", "Puerta al Error", "Educación del Instrumento"]
  },
  "8103: CUALIDADES POLIGLOTAS": {
    "PilotoDeCoherencia": "El espíritu no habla español ni inglés: habla el 'idioma del sentimiento', que es universal y mudo, captado por los sentidos del alma. Si el médium tiene suficientes sentidos desarrollados, su cerebro traduce ese sentimiento universal al idioma necesario, incluso aquellos que el médium no conoce conscientemente.",
    "CitaInelutable": "El espíritu habla el idioma del sentimiento; el cerebro del médium lo traduce a palabras.",
    "EjemploPedagogico": "Es como un software de traducción simultánea: el código fuente es uno solo (el sentimiento), pero sale por la pantalla en el idioma que el usuario necesita. El médium políglota es el traductor simultáneo del cosmos.",
    "ConexionDoctrinal": ["Poliglotismo", "Idioma del Sentimiento", "Traducción Espiritual"],
    "NodosSimapticos": ["Código Fuente del Alma", "Traductor Simultáneo", "Lenguaje Universal"]
  },
  "8254: CAPITULO CUARTO: LOS MÉDIUMS MÉDICOS": {
    "PilotoDeCoherencia": "Declaración tajante: 'El Espiritismo no cura nada'. Curan los espíritus de amor usando el fluido magnético, y cura la naturaleza cuando se la respeta. Ni los médicos materialistas (que ignoran el alma) ni los curanderos supercheros (que hacen negocio) tienen la verdad. El médium curativo es solo el canal del fluido universal.",
    "CitaInelutable": "El Espiritismo no cura nada; curan los fluidos del amor a través de un instrumento limpio.",
    "EjemploPedagogico": "Es como una manguera: la manguera no apaga el incendio, lo apaga el agua. El médium médico es la manguera; si está sucia (negocio, ignorancia), ensucia la herida en vez de limpiarla.",
    "ConexionDoctrinal": ["Mediumnidad Curativa", "Fluidos", "Falsa Curación"],
    "NodosSimapticos": ["Manguera de Fluidos", "Canal Limpio", "Naturaleza que Sana"]
  },
  "8553: CAPITULO QUINTO: LOS MÉDIUMS VIDENTES": {
    "PilotoDeCoherencia": "La videncia es la facultad más defensiva del Espiritismo. Asociada al desdoblamiento, permite al médium ver las intenciones, los fluidos y los peligros invisibles, protegiendo a la sesión y al centro. Es el ojo avizor que impide las infiltraciones de la mixtificación.",
    "CitaInelutable": "El vidente es el centinela de la luz que advierte las maniobras de la sombra.",
    "EjemploPedagogico": "Es como el radar de un barco en la niebla: ve los témpanos de hielo antes de que el barco choque. El vidente es el radar del centro espiritista.",
    "ConexionDoctrinal": ["Videncia", "Facultad Defensiva", "Protección"],
    "NodosSimapticos": ["Centinela de Luz", "Radar Espiritual", "Ojo Avizor"]
  },
  "8653: CAPÍTULO SEXTO: LOS MÉDIUMS PARLANTES": {
    "PilotoDeCoherencia": "La facultad parlante es la más provechosa y la verdaderamente inteligente, porque permite la instrucción directa y la filosofía. Sin embargo, es la más sujeta a presiones de espíritus detractores, por lo que requiere un ambiente de sesión extremadamente armónico y un director firme.",
    "CitaInelutable": "La palabra es la herramienta máxima de la inteligencia, pero la más vulnerable a la confusión.",
    "EjemploPedagogico": "Es como un micrófono de alta sensibilidad: capta la voz del cantante maravillosamente, pero si hay ruido en la sala, capta el ruido también. El médium parlante requiere el silencio del amor en la sala.",
    "ConexionDoctrinal": ["Mediumnidad Parlante", "Inteligencia", "Vulnerabilidad Fluídica"],
    "NodosSimapticos": ["Micrófono Sensible", "Filosofía Directa", "Ruido de Detractores"]
  },
  "8952: CAPITULO SÉPTIMO: LOS MÉDIUMS DE EFECTOS FÍSICOS": {
    "PilotoDeCoherencia": "Los efectos físicos (golpes, movimientos de mesas) son fenómenos primarios, de poca inteligencia, producidos por espíritus materializados para llamar la atención. Han sido campo fértil para el fraude y la prestidigitación. Son útiles solo como primer escalón para el incrédulo, pero inútiles para el progreso filosófico.",
    "CitaInelutable": "Los efectos físicos son el alfabeto de los niños; el hombre maduro no juega con cubos, lee libros.",
    "EjemploPedagogico": "Es como el timbre de una puerta: sirve para avisar que alguien llegó, pero nadie se queda escuchando el timbre toda la tarde. Los efectos físicos son el timbre; una vez abierta la puerta de la razón, ya no sirven.",
    "ConexionDoctrinal": ["Efectos Físicos", "Fenómeno Primario", "Llamador de Atención"],
    "NodosSimapticos": ["Timbre Espiritual", "Alfabeto de Niños", "Campo de Fraude"]
  },
  "9101: CAPITULO OCTAVO: LOS MÉDIUMS DE APORTES Y OTROS": {
    "PilotoDeCoherencia": "Los aportes (materialización y traslado de objetos) son rarísimos ('moscas blancas'). Existe una prohibición natural para su ejercicio común: si todos pudieran aportar cosas, nadie trabajaría, habría robo a distancia y se violaría la ley de propiedad privada y del trabajo. Se permiten solo en casos de demostración científica o necesidad suprema.",
    "CitaInelutable": "El aporte está restringido porque el progreso exige la ley del esfuerzo, no la magia.",
    "EjemploPedagogico": "Es como tener una máquina de imprimir dinero: si todos la tienen, el dinero pierde su valor y el trabajo se detiene. El aporte indiscriminado destruiría la economía de esfuerzo del mundo.",
    "ConexionDoctrinal": ["Aportes", "Restricción Natural", "Ley del Trabajo"],
    "NodosSimapticos": ["Moscas Blancas", "Robo a Distancia", "Economía del Esfuerzo"]
  },
  "9250: CAPITULO NOVENO: EL MAGNETISMO Y EL SONAMBULISMO": {
    "PilotoDeCoherencia": "El magnetismo es la vanguardia del Espiritismo. Empeñarse en ser magnetizador sin comprender las leyes del espíritu es peligroso: es jugar con fuerzas mayores. El sonambulismo es la emancipación parcial del alma inducida magnéticamente. Ambos son ciencia pura cuando los maneja el conocimiento, e imprudencia en manos de curiosos.",
    "CitaInelutable": "El magnetismo sin espiritismo es jugar con fuego con los ojos vendados.",
    "EjemploPedagogico": "Es como los niños que juegan con los cachorros del león: es divertido hasta que despiertan a la leona. Jugar con fluidos magnéticos sin conocimiento despierta fuerzas que el ignorante no puede controlar.",
    "ConexionDoctrinal": ["Magnetismo", "Sonambulismo", "Vanguardia Científica"],
    "NodosSimapticos": ["Cachorros de León", "Juego con Fuego", "Vanguardia del Espíritu"]
  },
  "9534: CAPITULO DIEZ: LA SUGESTIÓN Y LA TELEPATÍA": {
    "PilotoDeCoherencia": "La sugestión, hipnotización o fascinación son formas de engaño (bueno si es piadoso/médico, malo si es fraudulento), pues anulan la voluntad del sujeto. La telepatía, en cambio, implica afinidad y simpatía real entre dos mentes, una transmisión consciente y respetuosa del pensamiento sin anular albedríos.",
    "CitaInelutable": "La sugestión anula la voluntad; la telepatía la respeta comunicándose en afinidad.",
    "EjemploPedagogico": "La sugestión es como un hackeo a un ordenador para forzarlo a hacer algo; la telepatía es enviar un correo electrónico que el otro ordenador acepta porque te tiene en su lista de contactos de confianza.",
    "ConexionDoctrinal": ["Sugestión vs Telepatía", "Engaño Piadoso", "Transmisión de Pensamiento"],
    "NodosSimapticos": ["Hackeo Mental", "Correo de Afinidad", "Anulación vs Respeto"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Médium Vidente": {
    "Definición": "Instrumento perceptivo que actúa como radar defensivo y centinela de la sesión, capaz de ver fluidos, entidades y advertir sobre peligros de mixtificación antes de que se materialicen.",
    "Contexto": "Capítulo V, Tercera Parte de El Espiritismo Estudiado.",
    "Conexiones": ["Videncia", "Defensa", "Mixtificación", "Centinela"],
    "Obras": ["El Espiritismo Estudiado", "Ley de las Mediumnidades"]
  },
  "Idioma del Sentimiento": {
    "Definición": "Lenguaje mudo y universal del espíritu que transmite conceptos integrales mediante vibraciones, siendo traducido por el cerebro del médium al idioma requerido (poliglotismo).",
    "Contexto": "Capítulo III, Tercera Parte de El Espiritismo Estudiado.",
    "Conexiones": ["Poliglotismo", "Traducción Espiritual", "Sentidos del Alma"],
    "Obras": ["El Espiritismo Estudiado", "Conócete a ti mismo"]
  },
  "Fenómenos de Aporte": {
    "Definición": "Traslado o materialización de objetos a distancia por acción fluídica. Severamente restringidos por la ley natural para no alterar la economía del esfuerzo, el trabajo y la propiedad en la Tierra.",
    "Contexto": "Capítulo VIII, Tercera Parte de El Espiritismo Estudiado.",
    "Conexiones": ["Aportes", "Ley de Trabajo", "Economía"],
    "Obras": ["El Espiritismo Estudiado", "Ley de las Mediumnidades"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de El Espiritismo Estudiado (Batch 5 - Tipos de Médiums) y 3 términos sinápticos.');
