const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/primer-rayo-de-luz_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Primer Rayo de Luz (Batch 1 - Rellenando Gaps)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "5: EL PRIMER RAYO DE LUZ (PORTADA)": {
    "PilotoDeCoherencia": "Presentamos el 'Primer Rayo de Luz' como el juicio crítico a la controversia entre el dogma católico y el materialismo anarquista. No es un libro de entretenimiento, es un manual de guerra ideológica donde la razón es el arma y la verdad es el objetivo. Iniciamos la demolición de la falacia para construir sobre la roca del espíritu.",
    "CitaInelutable": "Juicio crítico a la controversia católico-anarquista.",
    "EjemploPedagogico": "Es como encender una lámpara en un nido de murciélagos: los animales de la oscuridad chillan y huyen, pero la habitación queda limpia para el hombre de luz.",
    "ConexionDoctrinal": ["Juicio Crítico", "Controversia", "Luz"],
    "NodosSimapticos": ["Nido de Murciélagos", "Lámpara de Razón", "Guerra de Ideas"]
  },
  "22: CONSEJOS Y RECOMENDACIONES": {
    "PilotoDeCoherencia": "La Escuela no es un refugio para ociosos, sino un taller de trabajadores del espíritu. Quien no se sacrifica por la verdad, no tiene derecho a reclamar sus beneficios. El progreso es un edificio que cada uno construye con el ladrillo de su propio esfuerzo y la argamasa de su voluntad.",
    "CitaInelutable": "El progreso se adquiere por esfuerzo propio.",
    "EjemploPedagogico": "No esperes que el pan caiga del cielo mientras duermes. Debes arar, sembrar y cosechar. El espíritu que pide 'milagros' es un mendigo; el espíritu que trabaja es un hijo digno de Eloí.",
    "ConexionDoctrinal": ["Esfuerzo Propio", "Obligación y Derecho", "Trabajo"],
    "NodosSimapticos": ["Pan del Espíritu", "Taller de la Verdad", "Hijo Digno"]
  },
  "63: PROCLAMA DE LA COMUNA": {
    "PilotoDeCoherencia": "Proclamamos la ley de unidad: El Universo Solidarizado y el Mundo Comunizado. No hay lugar para fronteras que dividan a los hermanos. La sustancia es una, el origen es uno y el fin es la fraternidad universal. Quien levanta un muro contra su hermano, lo levanta contra la creación entera.",
    "CitaInelutable": "El Universo Solidarizado: El Mundo todo Comunizado.",
    "EjemploPedagogico": "Mira un hormiguero: no hay hormigas 'extranjeras' ni parcelas privadas. Todo es de todas y para todas, bajo una sola ley de trabajo. El hombre debe aprender de la naturaleza la sabiduría de la Comuna.",
    "ConexionDoctrinal": ["Comuna Universal", "Solidaridad", "Unidad de Sustancia"],
    "NodosSimapticos": ["Hormiguero Racional", "Sin Fronteras", "Unidad del Todo"]
  },
  "69: TODO ES MAGNETISMO ESPIRITUAL": {
    "PilotoDeCoherencia": "Definimos la fuerza motriz del universo como Magnetismo Espiritual. Es la energía que une los mundos, que anima la materia y que conecta a los espíritus en una red infinita de afinidad. Sin magnetismo no hay vida; sin espíritu no hay dirección. Todo lo que ves es magnetismo en diferentes grados de vibración.",
    "CitaInelutable": "Todo es Magnetismo Espiritual.",
    "EjemploPedagogico": "Es como la electricidad que recorre una ciudad: ilumina las casas, mueve los trenes y hace sonar las radios. El magnetismo es esa 'electricidad divina' que hace que el corazón lata y que las almas se reconozcan.",
    "ConexionDoctrinal": ["Magnetismo Espiritual", "Fuerza Vital", "Afinidad"],
    "NodosSimapticos": ["Electricidad Divina", "Red de Afinidad", "Motor Universal"]
  },
  "87: AXIOMA DE LA VIDA Y LA LUZ": {
    "PilotoDeCoherencia": "En el Creador está la Vida, y esa Vida es la luz que debe iluminar a los hombres. No es una luz lejana, sino el fuego interno de la razón. Quien apaga su luz por miedo al dogma, está matando la vida en sí mismo. Sé un portador de luz, no una sombra de la fe ciega.",
    "CitaInelutable": "En El estaba la Vida, y la Vida es la luz de los hombres.",
    "EjemploPedagogico": "Es como un viajero en una cueva: si tira su antorcha por miedo a lo que pueda ver, quedará atrapado para siempre. Mantén tu antorcha encendida; la luz te mostrará la salida hacia la libertad.",
    "ConexionDoctrinal": ["Luz de Vida", "Razón", "Esencia Divina"],
    "NodosSimapticos": ["Antorcha de Razón", "Fuego Interno", "Viajero de Libertad"]
  },
  "JOAQUIN TRINCADO (FIRMA Y COMPROMISO)": {
    "PilotoDeCoherencia": "Sello estas palabras con mi nombre y mi compromiso de 'Siempre más allá'. No hablo por vanidad personal, sino como portavoz de la Ley de Amor. El año 21 de la Nueva Era marca el fin de la infancia de la humanidad. El tiempo de las sombras ha terminado; el tiempo de los hombres-espíritu ha llegado.",
    "CitaInelutable": "Siempre más allá. Joaquín Trincado.",
    "EjemploPedagogico": "Es el sello de un arquitecto en sus planos: garantiza que el edificio se levantará según las leyes de la geometría y la resistencia. Mi firma garantiza que esta doctrina resistirá los ataques del error.",
    "ConexionDoctrinal": ["Nueva Era", "Compromiso", "Siempre Más Allá"],
    "NodosSimapticos": ["Sello de Arquitecto", "Hombre-Espíritu", "Portavoz de Ley"]
  },
  "190: EL UNIVERSO SOLIDARIZADO": {
    "PilotoDeCoherencia": "La solidaridad no es un sentimiento romántico, es una ley física y espiritual. Los mundos se sostienen unos a otros en sus órbitas, y los espíritus progresan solo cuando se ayudan. El aislamiento es la muerte; la unión es la vida eterna. El universo es un solo cuerpo con billones de miembros.",
    "CitaInelutable": "El Universo solidarizado es la garantía del progreso eterno.",
    "EjemploPedagogico": "Es como una cadena humana cruzando un río: si uno se suelta, todos corren peligro. Si todos se agarran fuerte, el río no podrá llevarse a ninguno. El universo es esa cadena de amor que cruza el tiempo.",
    "ConexionDoctrinal": ["Solidaridad Universal", "Interdependencia", "Progreso"],
    "NodosSimapticos": ["Cadena del Tiempo", "Cuerpo Universal", "Unión Vital"]
  },
  "192: EL MUNDO TODO COMUNIZADO": {
    "PilotoDeCoherencia": "La Comuna es el estado de justicia donde la tierra pertenece a todos y a nadie en particular. Denunciamos la propiedad privada como el origen del robo y la guerra. En la Comuna, el trabajo es el único título de propiedad sobre el fruto, pero la tierra es la madre común que a todos amamanta por igual.",
    "CitaInelutable": "El Mundo todo comunizado es el fin de la esclavitud humana.",
    "EjemploPedagogico": "Es como el aire: nadie dice 'este metro cúbico de aire es mío'. Todos lo respiramos según nuestra necesidad. Así debe ser la tierra y sus frutos en la Comuna de Amor y Ley.",
    "ConexionDoctrinal": ["Comuna", "Justicia Social", "Anti-Propiedad"],
    "NodosSimapticos": ["Madre Común", "Aire de Todos", "Fin de la Esclavitud"]
  },
  "194: LA LEY ES UNA, LA SUSTANCIA UNA": {
    "PilotoDeCoherencia": "No hay leyes diferentes para el cielo y la tierra. La Ley es una porque emana de un solo Creador. La sustancia es una (el Pantógeno) porque de ella están hechos los soles y los granos de arena. Esta unidad nos enseña que nada está separado de Eloí y que todo está conectado por la misma energía.",
    "CitaInelutable": "Uno es el principio; uno es el fin.",
    "EjemploPedagogico": "Es como el agua de un océano: se puede convertir en nube, en lluvia, en hielo o en vapor, pero sigue siendo la misma sustancia (agua). Así es el universo: infinitas formas, pero una sola sustancia divina.",
    "ConexionDoctrinal": ["Unidad de Ley", "Pantógeno", "Emanación"],
    "NodosSimapticos": ["Sustancia Única", "Océano Divino", "Unidad de Principio"]
  },
  "201: MAGNETISMO ESPIRITUAL EN LA NUEVA ERA": {
    "PilotoDeCoherencia": "Anunciamos que la Nueva Era es la era del Magnetismo Espiritual. La humanidad ha dejado atrás el oscurantismo para entrar en el estudio de las fuerzas psíquicas. El magnetismo es la llave para entender los milagros, las curaciones y la comunicación con los espíritus. Es la ciencia de la vida total.",
    "CitaInelutable": "El magnetismo espiritual es la ciencia de la Nueva Era de la Verdad.",
    "EjemploPedagogico": "Es como pasar de la vela a la bombilla eléctrica. Antes veías sombras y tenías miedo; ahora ves la luz y comprendes el mecanismo. El magnetismo es la luz que disipa el miedo a lo 'sobrenatural'.",
    "ConexionDoctrinal": ["Nueva Era", "Ciencia Espiritual", "Luz y Verdad"],
    "NodosSimapticos": ["Ciencia de la Vida", "Luz de Nueva Era", "Fin del Miedo"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Magnetismo Espiritual": {
    "Definición": "Fuerza motriz y sustancia única del universo que actúa como vínculo entre el espíritu y la materia, permitiendo la vida, la afinidad y la comunicación universal.",
    "Contexto": "Concepto central en Primer Rayo de Luz.",
    "Conexiones": ["Pantógeno", "Afinidad", "Energía Vital"],
    "Obras": ["Primer Rayo de Luz", "Conócete a ti mismo"]
  },
  "Universo Solidarizado": {
    "Definición": "Estado natural y jurídico del cosmos donde todos los mundos y seres dependen entre sí bajo una ley única de armonía y progreso mutuo.",
    "Contexto": "Proclama en Primer Rayo de Luz.",
    "Conexiones": ["Comuna Universal", "Solidaridad", "Justicia"],
    "Obras": ["Primer Rayo de Luz"]
  },
  "Mundo Comunizado": {
    "Definición": "Ideal social de la Escuela que propone la abolición de fronteras, parcelas y propiedad privada, instaurando una administración común basada en el amor y el trabajo.",
    "Conexiones": ["Comuna", "Justicia Social", "Derecho al Trabajo"],
    "Obras": ["Primer Rayo de Luz", "Los Cinco Amores"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Primer Rayo de Luz (Batch 1 - Rellenando Gaps) y 3 términos sinápticos.');
