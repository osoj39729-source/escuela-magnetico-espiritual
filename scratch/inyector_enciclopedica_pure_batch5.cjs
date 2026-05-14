const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Filosofía Enciclopédica Universal Tomo 1 (Batch 5 - Claves 68 a 87)
const nuevosNodos = {
  "2663: Marzo 26 de 1911 - Posesión de M. P.": {
    "PilotoDeCoherencia": "Música y Verdad. La música es el lenguaje divino que eleva el alma y mide la eternidad; la verdad es la madre que engendra toda expresión artística sublime.",
    "CitaInelutable": "La música...!¡Lengua divina! ¡Compás de la eternidad... la verdad... engendra la música.",
    "EjemploPedagogico": "La música es a la verdad lo que el perfume es a la flor; no puedes tener lo uno sin la esencia de lo otro.",
    "ConexionDoctrinal": ["Lenguaje de los Espíritus", "Vibración Armónica"],
    "NodosSimapticos": ["Lenguaje de los Espíritus"]
  },
  "2698: Marzo 28 de 1911 - Posesión de M. P`.": {
    "PilotoDeCoherencia": "Terapia Magneto-Eléctrica. Lucía Mártir aplica curación directa y transporta a la médium a mundos perfectos para instruirla en la salud del espíritu.",
    "CitaInelutable": "Vengo a poner en práctica la curación magneto-eléctrica... La hemos llevado a otros mundos.",
    "EjemploPedagogico": "El espíritu médico aplica corrientes de luz para limpiar la visión del alma, mostrando que la salud es la norma en los mundos avanzados.",
    "ConexionDoctrinal": ["Curación Magneto-Eléctrica", "Pluralidad de Mundos"],
    "NodosSimapticos": ["Curación Magneto-Eléctrica"]
  },
  "2718: Marzo 31 de 1911 - Escrita, Trincado": {
    "PilotoDeCoherencia": "Tragedia y Locura. El caso de José Lucero muestra cómo el crimen pasional y el odio sumergen al espíritu en la locura y las tinieblas de la conciencia.",
    "CitaInelutable": "Fui preso y me puse loco; no sé más.",
    "EjemploPedagogico": "El odio es un veneno que el espíritu bebe esperando que muera el otro, pero solo logra nublar su propia razón.",
    "ConexionDoctrinal": ["Consecuencias del Crimen", "Oscurecimiento del Espíritu"],
    "NodosSimapticos": []
  },
  "2770: Abril 4 de 1911 - Natalicio de Francisco Xavier": {
    "PilotoDeCoherencia": "Urgencia de la Verdad. En su aniversario, Francisco Xavier urge al misionero a dedicar más tiempo a la escritura de las verdades que deben ser reveladas al mundo.",
    "CitaInelutable": "Grandes son los puntos de verdad que debo trazarte para su descubrimiento al mundo.",
    "EjemploPedagogico": "El sembrador debe aprovechar el tiempo de siembra; si se distrae, la cosecha de la humanidad se retrasa.",
    "ConexionDoctrinal": ["Misión de Trincado", "Revelación Progresiva"],
    "NodosSimapticos": []
  },
  "2811: Abril 7 de 1911 - El regalo del día": {
    "PilotoDeCoherencia": "Deudas ajenas. El misionero sufre más al cargar voluntariamente con deudas espirituales de otros para acelerar la redención colectiva.",
    "CitaInelutable": "Tenéis que sufrir todo lo que habéis pedido y aún te has cargado con muchas deudas ajenas.",
    "EjemploPedagogico": "Es como el hermano mayor que trabaja doble para pagar las deudas del hermano menor y que toda la familia recupere la libertad.",
    "ConexionDoctrinal": ["Sacrificio por Otros", "Ley de Solidaridad"],
    "NodosSimapticos": []
  },
  "2842: Abril 7 de 1911 - Escrita, trincado.": {
    "PilotoDeCoherencia": "Fruto del odio religioso. Un espíritu maldito por un cura vaga en ceguera y odio, demostrando el daño que las religiones causan a la salud mental del espíritu.",
    "CitaInelutable": "Maldita seas!, me dijo un cura... estoy loca. He perdido la vista.",
    "EjemploPedagogico": "La maldición religiosa es una venda de odio que el espíritu se pone a sí mismo por creer en el poder de hombres dogmáticos.",
    "ConexionDoctrinal": ["Efectos del Dogma", "Odio y Ceguera Espiritual"],
    "NodosSimapticos": []
  },
  "2871: Abril 10 de 1911 - Posesión M.P.": {
    "PilotoDeCoherencia": "Neutralidad Doctrinal. El libro 'Buscando a Dios' debe escribirse con sencillez y total neutralidad, libre de prejuicios y tendencias previas.",
    "CitaInelutable": "Debes ser tan neutral a todo, que se revele en esa neutralidad tu libertad de prejuicios.",
    "EjemploPedagogico": "El cristal de la verdad debe ser transparente; si lo pintas de un color (prejuicio), la luz ya no pasa igual.",
    "ConexionDoctrinal": ["Buscando a Dios (Doctrinal)", "Neutralidad del Escritor"],
    "NodosSimapticos": ["Buscando a Dios (Doctrinal)"]
  },
  "2938: Abril 14 de 1911 (Viernes Santo) - Posesión M. P.": {
    "PilotoDeCoherencia": "Realidad del Calvario. María Magdalena denuncia el comercio religioso de la Semana Santa y transporta a la médium para ver la realidad histórica de la crucifixión.",
    "CitaInelutable": "Terribles días que nos causa el infame comercio... verá la realidad de las cosas.",
    "EjemploPedagogico": "Mientras el mundo hace negocio con el dolor ajeno, el espíritu busca que el hombre vea la verdad del sacrificio para que no se repita.",
    "ConexionDoctrinal": ["Crítica al Comercio Religioso", "Historia del Espiritismo"],
    "NodosSimapticos": []
  },
  "2988: Abril 18 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Amor Fraternal Sin Clases. El mandato del Maestro es enseñar el amor que une al rico con el pobre sin distinciones de clase social.",
    "CitaInelutable": "El amor fraternal... el amor que no distingue clases.",
    "EjemploPedagogico": "En el sol de la fraternidad, no hay sombras de jerarquías; todos los hombres reciben el mismo calor.",
    "ConexionDoctrinal": ["Amor Fraternal", "Igualdad Social"],
    "NodosSimapticos": []
  },
  "3005: Abril 18 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Rescate de lo Antiguo. Jarancon, tras 80 siglos de tinieblas, es traído para recibir luz, mostrando que ninguna alma es olvidada por la ley de progreso.",
    "CitaInelutable": "Jarancon... de 80 siglos de tinieblas; dadle luz.",
    "EjemploPedagogico": "Incluso la lámpara que ha estado apagada por mil años vuelve a brillar con una sola chispa de verdad.",
    "ConexionDoctrinal": ["Jarancon (Espíritu de las Tinieblas)", "Progreso Infinito"],
    "NodosSimapticos": ["Jarancon (Espíritu de las Tinieblas)"]
  },
  "3043: Abril 28 de 1911 - Escrita, Trincado": {
    "PilotoDeCoherencia": "Llave de los Secretos. El amor es la norma que transformará la tierra de un valle de lágrimas en un paraíso.",
    "CitaInelutable": "Amor... es la llave de los secretos de Dios.",
    "EjemploPedagogico": "El amor es la llave que abre la puerta de la sabiduría; sin ella, el hombre solo da vueltas en el patio de la ignorancia.",
    "ConexionDoctrinal": ["Amor como Norma", "Transformación del Mundo"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Curación Magneto-Eléctrica": {
    "Definición": "Técnica de sanación espiritual utilizada en la Escuela de Trincado, donde los espíritus médicos aplican fluidos magnéticos y efluvios eléctricos sobre el periespíritu del paciente para restaurar el equilibrio de la salud corporal y espiritual.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesión de Lucía Mártir, Marzo de 1911).",
    "Conexiones": ["Magnetismo", "Curación Espiritual", "Efluvios"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  },
  "Buscando a Dios (Doctrinal)": {
    "Definición": "Obra de Joaquín Trincado concebida bajo la instrucción de ser un texto sencillo, neutral y libre de prejuicios religiosos o filosóficos previos. Su objetivo es guiar al lector hacia la comprensión del Creador (Eloí) a través de la razón y la observación de la naturaleza, sin intermediarios dogmáticos.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Instrucción de Francisco Xavier).",
    "Conexiones": ["Eloí", "Razón", "Joaquín Trincado"],
    "Obras": ["Buscando a Dios", "Filosofía Enciclopédica Universal"]
  },
  "Jarancon (Espíritu de las Tinieblas)": {
    "Definición": "Ejemplo de una entidad espiritual que permaneció en un estado de ignorancia y oscuridad absoluta (tinieblas) durante aproximadamente 8,000 años (80 siglos) antes de ser atraída a la Escuela de Trincado para iniciar su proceso de despertar y educación espiritual. Su caso demuestra la paciencia y el alcance universal de la Ley de Amor.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesión del 18 de Abril de 1911).",
    "Conexiones": ["Tinieblas", "Progreso", "Justicia de Revisión"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  },
  "Lenguaje de los Espíritus": {
    "Definición": "Forma de comunicación sutil y elevada que trasciende las palabras articuladas, manifestándose a través de la música, la poesía y la armonía vibratoria. Según la doctrina, la música sublime es la lengua divina que permite al espíritu expresar la verdad y la belleza de las esferas superiores.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesión de Marzo de 1911).",
    "Conexiones": ["Vibración", "Armonía", "Música"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 11 nodos PURA CALIDAD 1:1 de Filosofía Enciclopédica Tomo 1 (Batch 5) y 4 términos sinápticos.');
