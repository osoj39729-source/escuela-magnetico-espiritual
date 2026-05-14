const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Filosofía Enciclopédica Universal Tomo 1 (Batch 17 - FINAL - Claves 157 a 183)
const nuevosNodos = {
  "9406: Noviembre 7 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Universalidad del Idioma. Manifestación de Joen (griego antiguo) quien rinde culto a Antulio y la hermosa Iris, demostrando que la verdad no tiene barreras de tiempo ni lengua.",
    "CitaInelutable": "Empezó a pronunciar palabras incoherentes y luego habló en griego antiguo... clamando a la hermosa Iris.",
    "EjemploPedagogico": "El sol sale para todos los países; la luz del espíritu brilla igual en griego, español o sánscrito, porque el alma no tiene idioma nacional.",
    "ConexionDoctrinal": ["Antulio (Escuelas Anteriores)", "Universalidad del Espíritu"],
    "NodosSimapticos": ["Joen (Espíritu Griego)"]
  },
  "9483: Noviembre 10 de 1911 - Posesión Portillo": {
    "PilotoDeCoherencia": "Unión del Rebaño. Se confirma la satisfacción de los mundos espirituales por el trabajo conjunto entre encarnados y desencarnados para la gran cosecha.",
    "CitaInelutable": "Unidos los del espacio y los encarnados... preparaos a la siega, porque la cosecha será abundante.",
    "EjemploPedagogico": "Es el momento en que los dueños del campo y los trabajadores se dan la mano al ver que el trigo ya está dorado y listo para el pan.",
    "ConexionDoctrinal": ["Comunión de los Dos Mundos", "La Gran Cosecha"],
    "NodosSimapticos": []
  },
  "9546: Noviembre 12 de 1911 - Posesión Portillo": {
    "PilotoDeCoherencia": "Agitación de los Espacios. La conmoción en la tierra y el espacio es el choque inevitable entre las ideas viejas y las nuevas que fundan la Era de Luz.",
    "CitaInelutable": "¿Por qué se alteran los espacios?... Es el combate, producido por las ideas nuevas.",
    "EjemploPedagogico": "Cuando el hielo se rompe para que pase el barco, el ruido es fuerte y el agua se agita, pero es la única forma de navegar hacia el mar libre.",
    "ConexionDoctrinal": ["Choque de Ideas", "Progreso por Conflicto"],
    "NodosSimapticos": []
  },
  "9595: Noviembre 12 de 1911 - Posesión Portillo": {
    "PilotoDeCoherencia": "Amor al Verdugo. La luz solo se da al amor que no distingue entre víctima y verdugo; odiar al opresor es quedarse fuera de la luz.",
    "CitaInelutable": "No basta amar a uno, hay que amar a todos, el odio no puede entrar en la luz.",
    "EjemploPedagogico": "Si perdonas al que sufre pero odias al que lo hirió, tu corazón sigue teniendo una mancha negra que te impide ver el sol completo.",
    "ConexionDoctrinal": ["Perdón Universal", "Amor como Filtro de Luz"],
    "NodosSimapticos": []
  },
  "9757: Noviembre 14 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Rebeldía de Felipe II. El espíritu del monarca muestra desprecio y orgullo, resistiéndose a la justicia que lo iguala con los humildes, abandonando la sesión con violencia.",
    "CitaInelutable": "Sólo gestos de desprecio nos dio... Era el que fue Felipe II, rey de España.",
    "EjemploPedagogico": "El que se cree dueño del mundo en la tierra, se siente mendigo cuando llega al cielo y descubre que allí la moneda es el amor, de la cual no tiene ninguna.",
    "ConexionDoctrinal": ["Felipe II (Estado Espiritual)", "Justicia de Revisión"],
    "NodosSimapticos": ["Felipe II (Estado Espiritual)"]
  },
  "9796: Noviembre 16 de 1911 - Posesión Portillo": {
    "PilotoDeCoherencia": "Prisión del Remordimiento. Relato de un espíritu femenino en una 'prisión horrorosa' de agua fría, simbolizando el estado de turbación tras el suicidio o la pérdida del honor.",
    "CitaInelutable": "¡Qué prisión horrorosa¡ Dentro del agua fría... ¿Quién eres? ¿Eres mi juez?",
    "EjemploPedagogico": "El remordimiento es una celda que el propio espíritu construye y de la cual solo puede salir mediante el perdón y la luz de la verdad.",
    "ConexionDoctrinal": ["Consecuencias del Suicidio", "Justicia de la Conciencia"],
    "NodosSimapticos": []
  },
  "9997: Noviembre 19 de 1911 (hora 21) - Posesión M. P.": {
    "PilotoDeCoherencia": "Lesa Deidad del Cristianismo. Los espíritus confiesan haber delinquido al presentar mal a Jesús a la posteridad por intereses malsanos de poder.",
    "CitaInelutable": "De lesa deidad nos acusan... Jesús lo presentamos mal a la posteridad.",
    "EjemploPedagogico": "Presentar a un hombre libre como un esclavo del dogma es un crimen contra la verdad que los siglos ahora vienen a rectificar.",
    "ConexionDoctrinal": ["Crítica al Cristianismo", "Rectificación Histórica"],
    "NodosSimapticos": []
  },
  "10272: Noviembre 24 de 1911 - Posesión M. Portillo": {
    "PilotoDeCoherencia": "Batalla Decisiva. Se prepara al misionero para el enfrentamiento final contra el enemigo de la Paz, instando a no descansar hasta el triunfo de la luz.",
    "CitaInelutable": "Día en el cual os encontráis frente a frente del encarnizado enemigo de la Paz.",
    "EjemploPedagogico": "El soldado sabe que el último esfuerzo antes de la victoria es el más duro, pero es el que trae la paz eterna al hogar.",
    "ConexionDoctrinal": ["Victoria de la Verdad", "Lucha Final"],
    "NodosSimapticos": []
  },
  "10317: Noviembre 26 de 1911 - FIN DEL TOMO I": {
    "PilotoDeCoherencia": "Concierto del Universo. El universo es un concierto hermoso de Dios donde las notas discordantes (el mal) solo sirven para apreciar la belleza de la armonía final.",
    "CitaInelutable": "Qué bello es el concierto... notas discordantes, pero sirven para conocer el mal.",
    "EjemploPedagogico": "En una gran sinfonía, un tono menor puede sonar triste, pero es necesario para que el final glorioso sea más brillante.",
    "ConexionDoctrinal": ["Armonía del Universo", "Existencia del Mal (Relativa)"],
    "NodosSimapticos": ["Concierto del Universo"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Joen (Espíritu Griego)": {
    "Definición": "Entidad espiritual que se manifiesta comunicando en griego antiguo en la Escuela de Trincado. Su presencia valida la antigüedad de la mediumnidad y la continuidad de las escuelas de sabiduría (como la de Antulio) que precedieron a la Escuela Magnético-Espiritual.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesión del 7 de Noviembre de 1911).",
    "Conexiones": ["Antulio", "Grecia Antigua", "Universalidad"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  },
  "Felipe II (Estado Espiritual)": {
    "Definición": "Estado de la entidad espiritual que fue rey de España, caracterizado en la doctrina trincadista por un orgullo monárquico persistente y una resistencia agresiva a la ley de igualdad y amor. Su caso se utiliza para demostrar que el poder material se convierte en un lastre de oscuridad tras la muerte si no se utilizó para el bien.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Evocaciones de Noviembre de 1911).",
    "Conexiones": ["Orgullo", "Justicia de Revisión", "Igualdad Universal"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  },
  "Concierto del Universo": {
    "Definición": "Axioma metafísico que describe la creación de Eloí como una obra armónica perfecta donde todas las leyes y seres interactúan rítmicamente. En este concierto, el mal y el error son vistos como notas discordantes o transitorias que permiten al espíritu discernir y apreciar la belleza de la Verdad y el Bien.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Conclusión de la obra, Noviembre de 1911).",
    "Conexiones": ["Eloí", "Armonía", "Justicia Universal"],
    "Obras": ["Filosofía Enciclopédica Universal", "Filosofía Austera Racional"]
  },
  "Justicia que presienten los espacios": {
    "Definición": "Estado vibratorio colectivo del mundo espiritual que percibe la inminencia de la nueva era de justicia en la tierra. Esta percepción impulsa a las falanges de luz a redoblar esfuerzos para asistir al misionero y a la humanidad en el combate final contra el error y el dogma.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesión del 19 de Noviembre de 1911).",
    "Conexiones": ["Juicio Final", "Era de Luz", "Misión de Trincado"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ ¡OBRA COMPLETADA! Inyectados últimos 9 nodos de Filosofía Enciclopédica Tomo 1 y 4 términos finales.');
