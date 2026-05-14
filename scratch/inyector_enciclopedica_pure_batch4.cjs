const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Filosofía Enciclopédica Universal Tomo 1 (Batch 4 - Claves 54 a 73)
const nuevosNodos = {
  "1957: Enero 24 de 1911 - Su bendita bendición.": {
    "PilotoDeCoherencia": "Paz por el Amor. La paz no es algo externo, sino un estado que se encuentra y mantiene mediante el ejercicio del amor que lo allana todo.",
    "CitaInelutable": "Paz... la encontrarás por el amor. Éste es el que lo allana todo.",
    "EjemploPedagogico": "El amor es como el aceite en los engranajes de la vida; donde hay amor, no hay fricción y la paz fluye.",
    "ConexionDoctrinal": ["Paz Interior", "Omnipotencia del Amor"],
    "NodosSimapticos": []
  },
  "2005: Enero 24 de 1911 - Escrita, Trincado": {
    "PilotoDeCoherencia": "Autocontrol del misionero. María de Nazareth advierte que el arrebato (la ira o impulsividad) es el mayor enemigo de la paz que el espíritu ha prometido.",
    "CitaInelutable": "Yo te prometí la paz de tu alma... pero tú te la quitas algunas veces por tus arrebatos.",
    "EjemploPedagogico": "El espíritu te da un vaso de agua cristalina, pero tu arrebato es la piedra que tiras dentro y enturbia todo el vaso.",
    "ConexionDoctrinal": ["Arrebato (como Obstáculo)", "Responsabilidad Individual"],
    "NodosSimapticos": ["Arrebato (como Obstáculo)"]
  },
  "2087: Enero 27 de 1911 - Posesión de M. P.": {
    "PilotoDeCoherencia": "Base de la armonía. El amor del Padre es el axioma fundamental que sostiene la estructura del Universo; comprender esto cambiaría la faz del mundo.",
    "CitaInelutable": "El amor del Padre es la base y sostén de la armonía del Universo.",
    "EjemploPedagogico": "El amor es la gravedad espiritual que mantiene a todos los seres en su órbita justa sin chocar unos con otros.",
    "ConexionDoctrinal": ["Armonía Universal", "Amor de Eloí"],
    "NodosSimapticos": []
  },
  "2115: Enero 31 de 1911 - Posesión de M. P.": {
    "PilotoDeCoherencia": "Tranquilidad y Alegría. La alegría es el reflejo de un espíritu tranquilo; los espíritus de luz disfrutan y se fortalecen con la alegría de los hombres.",
    "CitaInelutable": "La alegría es mensajera de la tranquilidad del espíritu.",
    "EjemploPedagogico": "Un rostro alegre es una ventana abierta por donde entra el sol del mundo espiritual.",
    "ConexionDoctrinal": ["Estado de Ánimo", "Comunión de Alegría"],
    "NodosSimapticos": []
  },
  "2171: Febrero 1 de 1911 - Posesión se M.P.": {
    "PilotoDeCoherencia": "Misión de Rita de Casia. Manifestación de Rita para ayudar y consolar, reconociendo el valor de la asistencia espiritual (caridad real) dada en la Escuela.",
    "CitaInelutable": "Rita de Casia. Vengo a ayudarte... y darte consuelo.",
    "EjemploPedagogico": "Los espíritus que sufrieron en la tierra vuelven para enseñar a otros cómo sanar las heridas del alma.",
    "ConexionDoctrinal": ["Rita de Casia (como Espíritu)", "Consuelo Espiritual"],
    "NodosSimapticos": ["Rita de Casia (como Espíritu)"]
  },
  "2229: Febrero 7 de 1911 - Posesión de M.P.": {
    "PilotoDeCoherencia": "Falta a la igualdad. Un espíritu que fue monja (Hermana de la Caridad) busca luz tras reconocer que faltó a la 'santa igualdad' al hacer diferencias entre los enfermos bajo su cuidado.",
    "CitaInelutable": "Tuve diferencias para mis enfermos y falté a la santa igualdad.",
    "EjemploPedagogico": "En el hospital del Padre, todos los pacientes son iguales; quien prefiere a uno sobre otro por dogma o rango, apaga su propia luz.",
    "ConexionDoctrinal": ["Igualdad Universal", "Justicia de Revisión"],
    "NodosSimapticos": []
  },
  "2261: Febrero 10 de 1911 - Posesión de M. P.": {
    "PilotoDeCoherencia": "El Viejecito. Exhortación al estudio constante y a la preparación del camino para aquellos 'desengañados' que buscan redimirse tras haber hecho mal.",
    "CitaInelutable": "Estudia, estudia, todas las enseñanzas que se te dan.",
    "EjemploPedagogico": "El conocimiento es la luz que ilumina el camino del que viene arrepentido de las sombras.",
    "ConexionDoctrinal": ["Importancia del Estudio", "Redención por el Bien"],
    "NodosSimapticos": []
  },
  "2342: Febrero 15 de 1911 - Posesión de M. P.": {
    "PilotoDeCoherencia": "Isidro Labrador. Manifestación para confortar al misionero ante los insultos, asumiendo el espíritu protector la carga de las ofensas dirigidas a su guiado.",
    "CitaInelutable": "Isidro Labrador... los insultos de que es objeto mi protegido, yo los recibo.",
    "EjemploPedagogico": "El protector es el pararrayos que recibe los rayos del odio para que el misionero pueda seguir sembrando en paz.",
    "ConexionDoctrinal": ["Isidro Labrador (como Espíritu)", "Protección ante la Ofensa"],
    "NodosSimapticos": ["Isidro Labrador (como Espíritu)"]
  },
  "2373: Febrero 17 de 1911 - Posesión de M. P.": {
    "PilotoDeCoherencia": "Ley de Atracción Mental. Los males no son castigos externos, sino la atracción que el espíritu ejerce mediante su pensamiento oscuro o temeroso.",
    "CitaInelutable": "Cuando el espíritu no teme lo que va a venir, él mismo trae hacia sí todos los males con su pensamiento.",
    "EjemploPedagogico": "Tu mente es un imán; si piensas en sombras, las sombras vendrán a ti. Si piensas en luz, la luz te envolverá.",
    "ConexionDoctrinal": ["Justicia de la Ley (Atracción)", "Poder del Pensamiento"],
    "NodosSimapticos": ["Justicia de la Ley (Atracción)"]
  },
  "2399: Febrero 19 de 1911 - Posesión de M. P.": {
    "PilotoDeCoherencia": "Miguel Arcángel. Manifestación de una alta potencia espiritual para acompañar a los hermanos en su viaje, demostrando la sensibilidad y el amor de los grandes espíritus.",
    "CitaInelutable": "Miguel Arcángel... dos gruesas lágrimas cayeron.",
    "EjemploPedagogico": "Incluso las más altas potencias del universo lloran de amor y compasión ante el esfuerzo del hombre justo.",
    "ConexionDoctrinal": ["Miguel Arcángel (como Espíritu)", "Sensibilidad Espiritual"],
    "NodosSimapticos": []
  },
  "2451: Febrero 21 de 1911 - Escrita": {
    "PilotoDeCoherencia": "Gratitud de Lino. Un espíritu que recibió la luz en la Escuela agradece la oportunidad de reunirse y seguir aprendiendo.",
    "CitaInelutable": "Gozo grande sentimos los espíritus... nunca me cansaré de referir mi historia.",
    "EjemploPedagogico": "La Escuela es un taller donde incluso los que ya se fueron vienen a pulir su diamante interno.",
    "ConexionDoctrinal": ["Progreso Post-Muerte"],
    "NodosSimapticos": []
  },
  "2483: Febrero 23 de 1911 - Antonio de Padua": {
    "PilotoDeCoherencia": "Exigencia de Estudio. Luis Gonzaga aconseja no distraerse con ruidos o fenómenos menores y enfocarse en el estudio profundo de la ley.",
    "CitaInelutable": "Tomáis con insistencia cosas que no son nada... Estudiad.",
    "EjemploPedagogico": "No pierdas tiempo mirando el polvo que levanta el viento; enfócate en leer los libros que el viento te trajo.",
    "ConexionDoctrinal": ["Estudio vs Fenomenismo"],
    "NodosSimapticos": []
  },
  "2512: Marzo 19 de 1911 - Posesión de M. P.": {
    "PilotoDeCoherencia": "Comercio del Espiritismo. Denuncia del uso lucrativo o ignorante del nombre del espiritismo en otros centros, donde no se conoce la profundidad de la doctrina.",
    "CitaInelutable": "Cerciorarme del inicuo comercio que se hacía del espiritismo.",
    "EjemploPedagogico": "Vender la verdad por monedas es convertir el templo del saber en un mercado de ilusiones.",
    "ConexionDoctrinal": ["Crítica al Comercio Espiritual", "Pureza Doctrinal"],
    "NodosSimapticos": []
  },
  "2601: Marzo 19 de 1911 - scrita, Trincado": {
    "PilotoDeCoherencia": "Justa Energía. Reprensión paternal contra el exceso de humildad o blandura que permite que otros se atrevan contra la misión; necesidad de firmeza.",
    "CitaInelutable": "No conviene siempre tanta humildad ni tanta blandura.",
    "EjemploPedagogico": "El agua es blanda y da vida, pero cuando debe defender su cauce, tiene la fuerza de la catarata.",
    "ConexionDoctrinal": ["Energía y Firmeza", "Dignidad del Misionero"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Rita de Casia (como Espíritu)": {
    "Definición": "Entidad espiritual que se manifiesta en la Escuela de Trincado tras haber sido una figura mística en el catolicismo. En la doctrina trincadista, Rita actúa como un espíritu de consuelo y auxilio, reconociendo el valor de la instrucción racional y despojándose de los atributos de 'intercesora milagrosa' para mostrar su realidad como trabajadora de la Ley.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesiones de Febrero de 1911).",
    "Conexiones": ["Auxilio Espiritual", "Justicia de Revisión", "Consuelo"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  },
  "Isidro Labrador (como Espíritu)": {
    "Definición": "Espíritu de luz que, bajo la dirección del Maestro, actúa como protector de los misioneros y trabajadores de la Escuela. Se destaca por su humildad y su función de 'escudo' ante las ofensas y ataques externos, simbolizando la nobleza del trabajo honesto y la asiduidad al deber espiritual.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesión del 15 de Febrero de 1911).",
    "Conexiones": ["Francisco Xavier", "Protección Espiritual", "Trabajo"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  },
  "Arrebato (como Obstáculo)": {
    "Definición": "Impulso violento, irracional o irascible que empaña la claridad del espíritu y rompe la paz interior. La doctrina advierte que el arrebato, incluso cuando parece justificado por la defensa de una verdad, es un obstáculo que el misionero debe vencer mediante el dominio propio para no enturbiar su conexión con la luz.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Advertencia de María de Nazareth).",
    "Conexiones": ["Dominio Propio", "Paz Interior", "Responsabilidad"],
    "Obras": ["Filosofía Enciclopédica Universal", "Profilaxis de la Vida"]
  },
  "Justicia de la Ley (Atracción)": {
    "Definición": "Principio metafísico que establece que el espíritu, mediante su pensamiento y voluntad, atrae hacia sí las condiciones vibratorias correspondientes. Los males y sufrimientos no son imposiciones externas, sino el resultado de la 'fuerza de atracción' que el ser ejerce cuando se sumerge en pensamientos de miedo, odio o desequilibrio.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Explicación de María de Nazareth sobre la enfermedad).",
    "Conexiones": ["Pensamiento", "Magnetismo", "Responsabilidad del Espíritu"],
    "Obras": ["Filosofía Enciclopédica Universal", "El Magnetismo en su Origen"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 14 nodos PURA CALIDAD 1:1 de Filosofía Enciclopédica Tomo 1 (Batch 4) y 4 términos sinápticos.');
