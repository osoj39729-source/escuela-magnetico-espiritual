const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

// Inicializando esencia para Código de Amor T2 si no existe o reiniciando para 1:1 pura
let esencia = {
  "METADATA": {
    "obra": "Código de Amor Universal - Tomo 2",
    "autor": "Joaquín Trincado",
    "estandar": "RE-DESTILACIÓN PURA 1:1 (Juez Amoroso)",
    "descripcion": "Régimen de la Comuna de Amor y Ley. Contiene la Constitución, Ley Orgánica y organización administrativa de la humanidad regenerada."
  }
};

let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Batch 1 - Código de Amor Universal Tomo 2 (Claves 0 a 14)
const nuevosNodos = {
  "5: Código de Amor Universal: Para el régimen de la Comuna": {
    "PilotoDeCoherencia": "Régimen Comunal. El segundo tomo del Código establece las bases prácticas y legales para la vida en la Comuna de Amor y Ley.",
    "CitaInelutable": "Para el régimen de la Comuna De amor y ley.",
    "EjemploPedagogico": "Si el Tomo 1 era el espíritu de la ley, el Tomo 2 es el cuerpo y las manos que construyen la casa común.",
    "ConexionDoctrinal": ["Comuna de Amor y Ley", "Justicia Comunal"],
    "NodosSimapticos": ["Comuna de Amor y Ley"]
  },
  "51: PRESENTACIÓN": {
    "PilotoDeCoherencia": "Hombre Trino. Juan D. Trincado define al espiritista-racionalista como el hombre que ha alcanzado el equilibrio trino, apto para la legislación comunal.",
    "CitaInelutable": "Espiritistas-racionalistas, lo que es sinonimia de 'hombres trinos'.",
    "EjemploPedagogico": "Un ciudadano que no solo conoce la ley, sino que la vive en su mente, alma y cuerpo, siendo un ejemplo vivo de la constitución.",
    "ConexionDoctrinal": ["Hombre Trino (Concepto Doctrinal)", "EMECU"],
    "NodosSimapticos": []
  },
  "99: CAPÍTULO PRIMERO: CONSTITUCIÓN... PROCLAMACIÓN DE LA COMUNA.": {
    "PilotoDeCoherencia": "Fundamento de Eloí. La proclamación de la Comuna se hace en nombre del Creador Único para unificar a encarnados y espíritus en una sola familia infinita.",
    "CitaInelutable": "En nombre de 'Eloí'... que con los encarnados, viven y forman la unidad infinita.",
    "EjemploPedagogico": "Un bando universal que borra las fronteras de las naciones y de la muerte, declarando a todos los seres como ciudadanos de un solo hogar cósmico.",
    "ConexionDoctrinal": ["Eloí", "Unidad Espíritu-Materia", "Carta Fundamental (Comuna)"],
    "NodosSimapticos": ["Carta Fundamental (Comuna)"]
  },
  "120: CAPÍTULO 1º:- Queda proclamada la Comuna Universal": {
    "PilotoDeCoherencia": "Justicia en el Usufructo. La ley orgánica de la Comuna es el amor mutuo, garantizando justicia estricta en el trabajo y el acceso a los bienes comunes.",
    "CitaInelutable": "Dentro de la más estricta justicia, en el trabajo y el usufructo... siendo su ley orgánica 'El amor mutuo'.",
    "EjemploPedagogico": "Un taller donde todos aportan su esfuerzo según su capacidad y todos toman lo que necesitan para vivir con dignidad, sin que nadie acumule ni nadie carezca.",
    "ConexionDoctrinal": ["Justicia Comunal", "Trabajo y Usufructo"],
    "NodosSimapticos": ["Justicia Comunal"]
  },
  "188: CAP. 10 – Los Consejos Regionales...": {
    "PilotoDeCoherencia": "Administración Solidaria. Los Consejos organizan la producción y el intercambio equitativo de productos para atender las necesidades de todas las regiones en amor e igualdad.",
    "CitaInelutable": "Cambiando unos por otros productos y atender en amor a las necesidades en la mayor justicia e igualdad.",
    "EjemploPedagogico": "Una red de ayuda mutua donde la región que produce trigo lo comparte con la que produce fruta, asegurando que todas las mesas estén llenas mediante el intercambio fraternal.",
    "ConexionDoctrinal": ["Consejos Regionales", "Justicia Comunal"],
    "NodosSimapticos": []
  },
  "292: CAP. 33 – Esta “Carta Fundamental de la Comuna en General”": {
    "PilotoDeCoherencia": "Inspiración del Espíritu de Verdad. La Carta Fundamental rige el séptimo día de la Tierra bajo la guía de Xavier y los mesías de la luz.",
    "CitaInelutable": "Día séptimo es regido por el Espíritu de Verdad... siendo nuestros familiares comunes, los más preclaros mesías.",
    "EjemploPedagogico": "Un mapa perfecto trazado por los mejores viajeros del universo para que la humanidad no se pierda en su camino hacia el máximo progreso.",
    "ConexionDoctrinal": ["Sétimo Día (Cronología Cosmogónica)", "Espíritu de Verdad"],
    "NodosSimapticos": []
  },
  "328: Todo es Magnetismo Espiritual.": {
    "PilotoDeCoherencia": "Sello del Maestro. El Maestro Juez firma la ley de estudio eterno y fraternidad universal basada en la unidad de ley y sustancia.",
    "CitaInelutable": "Téngase por Ley de estudio eterno y de fraternidad universal... El Maestro Juez Joaquín Trincado.",
    "EjemploPedagogico": "La firma de un padre en un testamento de amor que asegura que todos sus hijos sean iguales y vivan en paz por siempre.",
    "ConexionDoctrinal": ["Magnetismo Espiritual", "Fraternidad Universal"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Comuna de Amor y Ley": {
    "Definición": "Modelo de organización socio-política y espiritual propuesto por Joaquín Trincado para la Tierra regenerada. Se basa en la abolición de la propiedad privada y el estado, sustituyéndolos por una red de consejos que administran el trabajo colectivo y el usufructo común bajo la ley del amor mutuo.",
    "Contexto": "Código de Amor Universal Tomo 2 (Constitución de la Comuna).",
    "Conexiones": ["Comunismo Espiritual", "Justicia Comunal", "Eloí"],
    "Obras": ["Código de Amor Universal", "Los Cinco Amores"]
  },
  "Carta Fundamental (Comuna)": {
    "Definición": "Estatuto constitucional y orgánico que rige la vida en la Comuna Universal. Establece los principios de justicia, trabajo, igualdad y solidaridad que deben guiar a los hombres trinos en la Era de la Verdad.",
    "Contexto": "Código de Amor Universal Tomo 2 (Capítulo Primero).",
    "Conexiones": ["Constitución", "Ley Orgánica", "Justicia"],
    "Obras": ["Código de Amor Universal"]
  },
  "Justicia Comunal": {
    "Definición": "Práctica de distribución equitativa de los bienes y servicios producidos por la colectividad, basada exclusivamente en la necesidad real de los individuos y no en el lucro o el intercambio monetario. Es la aplicación económica de la ley de amor.",
    "Contexto": "Código de Amor Universal Tomo 2 (Administración de Consejos).",
    "Conexiones": ["Usufructo", "Trabajo", "Igualdad"],
    "Obras": ["Código de Amor Universal", "Profilaxis de la Vida"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Iniciada RE-DESTILACIÓN 1:1 de Código de Amor Tomo 2 (Batch 1, 7 nodos) y 3 términos sinápticos.');
