const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// RE-DESTILACIÓN PURA 1:1 - Buscando a Dios (Batch 3 - Claves 650 a 860)
const nuevosNodos = {
  "015: CAPITULO CUARTO: EL HOMBRE Y SUS FACULTADES": {
    "PilotoDeCoherencia": "Potencial Humano. El hombre no es solo un cuerpo, sino un conjunto de facultades que le permiten interactuar con el universo material y espiritual de forma consciente.",
    "CitaInelutable": "EL HOMBRE Y SUS FACULTADES... tiene la facultad de discernir.",
    "EjemploPedagogico": "Un músico que no solo tiene el instrumento (cuerpo), sino también el oído, la técnica y la inspiración (facultades) para crear una obra maestra.",
    "ConexionDoctrinal": ["Facultades del Espíritu", "Hombre Trino"],
    "NodosSimapticos": []
  },
  "016: PARRAFO I: EL HOMBRE ENCIENDE EL FUEGO": {
    "PilotoDeCoherencia": "Dominio de la Materia. El dominio del fuego marca el inicio de la civilización y el poder de la razón sobre los elementos ciegos de la naturaleza.",
    "CitaInelutable": "EL HOMBRE ENCIENDE EL FUEGO... la facultad de discernir.",
    "EjemploPedagogico": "Un rayo que cae en un bosque asusta a los animales; el hombre, en cambio, toma una rama encendida y la lleva a su cueva para tener luz y calor; eso es razón dominando la fuerza.",
    "ConexionDoctrinal": ["Fuego (Simbolismo Metafísico)", "Progreso Material"],
    "NodosSimapticos": ["Fuego (Simbolismo Metafísico)"]
  },
  "017: PARRAFO II: LA FACULTAD DE DISCERNIR": {
    "PilotoDeCoherencia": "Libre Albedrío. El discernimiento es la brújula del espíritu que le permite elegir su camino con conocimiento de causa, asumiendo la responsabilidad de sus actos.",
    "CitaInelutable": "EL HOMBRE TIENE LA FACULTAD DE DISCERNIR... a la conciencia solo pueden hablarle otras conciencias.",
    "EjemploPedagogico": "Estar en una encrucijada de caminos; el instinto te haría ir por el más fácil, pero el discernimiento te hace mirar el mapa y elegir el que te lleva a tu destino real, aunque sea más difícil.",
    "ConexionDoctrinal": ["Discernimiento (Facultad)", "Libertad de Pensamiento"],
    "NodosSimapticos": ["Discernimiento (Facultad)"]
  },
  "018: CAPITULO QUINTO: FUERZAS OCULTAS": {
    "PilotoDeCoherencia": "Metafísica Práctica. El hombre posee fuerzas que la ciencia material aún no explica plenamente, pero que responden a leyes de magnetismo y vibración espiritual.",
    "CitaInelutable": "EL HOMBRE: SUS FUERZAS OCULTAS... el hombre experimenta.",
    "EjemploPedagogico": "Una antena de radio; no ves las ondas que viajan por el aire, pero si la antena está bien sintonizada, puedes escuchar la música que viene de lejos; el hombre es esa antena sintonizando el universo.",
    "ConexionDoctrinal": ["Fuerzas Ocultas", "Magnetismo"],
    "NodosSimapticos": []
  },
  "019: PARRAFO I: EL HOMBRE EXPERIMENTA": {
    "PilotoDeCoherencia": "Método de Aprendizaje. El espíritu progresa a través de la experiencia directa, ensayo y error, convirtiendo el dolor y el esfuerzo en sabiduría eterna.",
    "CitaInelutable": "EL HOMBRE EXPERIMENTA... a la conciencia solo pueden hablarle otras conciencias.",
    "EjemploPedagogico": "Un niño que intenta armar un rompecabezas; cada pieza que no encaja le enseña algo, hasta que finalmente comprende el diseño total y lo arma con facilidad.",
    "ConexionDoctrinal": ["Experiencia", "Evolución"],
    "NodosSimapticos": []
  },
  "020: PARRAFO II: DIÁLOGO DE CONCIENCIAS": {
    "PilotoDeCoherencia": "Comunicación Real. La verdad no se impone con palabras huecas, sino que se transmite de espíritu a espíritu cuando hay afinidad y limpieza de intención.",
    "CitaInelutable": "A LA CONCIENCIA SOLO PUEDEN HABLARLE OTRAS CONCIENCIAS... el hombre experimenta.",
    "EjemploPedagogico": "Dos personas que hablan diferentes idiomas pero se entienden perfectamente con la mirada y los actos; hay una conexión que va más allá del diccionario.",
    "ConexionDoctrinal": ["Conciencia (Diálogo)", "Ley de Afinidad"],
    "NodosSimapticos": ["Conciencia (Diálogo)"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Discernimiento (Facultad)": {
    "Definición": "Capacidad suprema del espíritu para distinguir entre la verdad y el error, la justicia y la injusticia. Es la base del libre albedrío y la responsabilidad moral en la evolución del hombre racional.",
    "Contexto": "Buscando a Dios (Capítulo Cuarto).",
    "Conexiones": ["Libertad", "Razón", "Justicia"],
    "Obras": ["Buscando a Dios", "Filosofía Austera Racional"]
  },
  "Fuego (Simbolismo Metafísico)": {
    "Definición": "Representa el primer acto de dominio del hombre racional sobre las fuerzas de la naturaleza. Simboliza la chispa del espíritu que empieza a iluminar y transformar la materia pesada.",
    "Contexto": "Buscando a Dios (Capítulo Cuarto).",
    "Conexiones": ["Dominio", "Razón", "Civilización"],
    "Obras": ["Buscando a Dios"]
  },
  "Conciencia (Diálogo)": {
    "Definición": "Principio que establece que la comunicación de verdades universales solo es efectiva cuando ocurre entre conciencias que han alcanzado un grado de afinidad y limpieza moral, superando los ritos y las palabras externas.",
    "Contexto": "Buscando a Dios (Capítulo Quinto).",
    "Conexiones": ["Afinidad", "Verdad", "Espíritu"],
    "Obras": ["Buscando a Dios"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 3 de Buscando a Dios (6 nodos 1:1) y 3 términos sinápticos. Facultades y Conciencia sellados.');
