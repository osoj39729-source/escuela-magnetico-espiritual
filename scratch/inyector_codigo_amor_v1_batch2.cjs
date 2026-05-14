const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Código de Amor Universal Tomo 1 (Batch 2 - Claves 15 a 29)
const nuevosNodos = {
  "1105: CAPÍTUlo Primero": {
    "PilotoDeCoherencia": "Contrato Universal. El Testamento Secreto de Abraham establece que los mundos son infinitos y que el hombre, como hijo de Eloí, ha de vivir en todos ellos por herencia eterna.",
    "CitaInelutable": "Hellí uno, creador Universal, no tiene principio... Los mundos son infinitos y el hombre ha de vivir en todos.",
    "EjemploPedagogico": "Un niño que hereda no solo la casa de su padre, sino todas las fincas y propiedades del universo para trabajar en ellas y progresar.",
    "ConexionDoctrinal": ["Testamento de Abraham (Secreto)", "Pluralidad de Mundos Habitados"],
    "NodosSimapticos": ["Testamento de Abraham (Secreto)"]
  },
  "1171: Párrafo i: ¿Que es el Amor?": {
    "PilotoDeCoherencia": "Ley Madre. El amor es la ley madre de todas las leyes del universo y la única del Creador; su práctica desinteresada es la perfección del espíritu.",
    "CitaInelutable": "La santa ley de Amor, es la ley madre de todas las demás leyes... el grado máximo de la sabiduría.",
    "EjemploPedagogico": "La raíz principal de un árbol inmenso de la que nacen todas las ramas y hojas; sin esa raíz, nada del árbol (las otras leyes) podría existir.",
    "ConexionDoctrinal": ["Ley de Amor", "Sabiduría Universal"],
    "NodosSimapticos": []
  },
  "1322: Párrafo ii: Ley de Afinidad 3 Buscad y entender.": {
    "PilotoDeCoherencia": "Causalidad Invariable. Las mismas causas producen siempre los mismos efectos; este principio de afinidad rige los encuentros y misiones de los seres.",
    "CitaInelutable": "Siempre que se reúnen las causas, que originan los efectos, se producen los mismos efectos.",
    "EjemploPedagogico": "Si pones las mismas semillas en la misma tierra con la misma agua y sol, siempre nacerá el mismo tipo de fruto; la vida no es azar, es ley.",
    "ConexionDoctrinal": ["Ley de Afinidad", "Causalidad Espiritual"],
    "NodosSimapticos": ["Freno de la Afinidad"]
  },
  "1483: Párrafo iii: ley de Justicia": {
    "PilotoDeCoherencia": "Justicia Omnividente. El amor real es sabiduría y justicia; la justicia debe ver todos los hechos para situar a cada ser donde le corresponde por ley de afinidad.",
    "CitaInelutable": "El amor, de hecho, es sabiduría... la justicia tiene que ser toda ojos.",
    "EjemploPedagogico": "Un juez que no solo escucha testimonios, sino que tiene cámaras que graban cada segundo de la vida para dar una sentencia perfecta de equilibrio.",
    "ConexionDoctrinal": ["Justicia Universal", "Amor como Sabiduría"],
    "NodosSimapticos": []
  },
  "1752: Párrafo i: la trinidad del hombre. su creación": {
    "PilotoDeCoherencia": "Igualdad en la Trinidad. El hombre es una trinidad de espíritu, alma y cuerpo; la mujer es la mitad indispensable e igual, cuya esclavitud ha sido el gran crimen de los códigos.",
    "CitaInelutable": "Sin esa media humanidad no podría haber nacido la otra mitad que se quiere creer superior.",
    "EjemploPedagogico": "Un pájaro que intenta volar con un ala amarrada; por más fuerte que sea el ala libre, el pájaro solo dará vueltas en el suelo sin elevarse nunca.",
    "ConexionDoctrinal": ["Trinidad del Hombre (Concepto Doctrinal)", "Derechos de la Mujer"],
    "NodosSimapticos": ["Trinidad del Hombre (Concepto Doctrinal)"]
  },
  "2031: Párrafo iii: la Procreación es ley Universal": {
    "PilotoDeCoherencia": "Mecánica de la Procreación. La procreación es el fin primordial de los mundos; el amor es el acicate que la impulsa y la afinidad el freno que la ordena.",
    "CitaInelutable": "Su acicate, es el amor; su freno, la afinidad.",
    "EjemploPedagogico": "Un carruaje que corre por el camino; el amor son los caballos que tiran con fuerza, y la afinidad son las riendas que guían y frenan para no salir de la ruta.",
    "ConexionDoctrinal": ["Procreación Universal", "Freno de la Afinidad"],
    "NodosSimapticos": ["Freno de la Afinidad"]
  },
  "2142: Párrafo i: la Unión de los seres ha de ser por Amor": {
    "PilotoDeCoherencia": "Invalidez del Matrimonio sin Amor. Las leyes sociales y religiosas no pueden abordar la unión de los seres si falta el amor; el contrato sin alma solo genera infelicidad.",
    "CitaInelutable": "Desde que el matrimonio es sujeto a leyes... no hay felicidad en la humanidad.",
    "EjemploPedagogico": "Firmar un contrato para comprar una casa de papel; por más sellos y firmas que tenga, no protegerá a la familia del viento ni del frío.",
    "ConexionDoctrinal": ["Unión por Amor", "Crítica al Matrimonio Civil/Religioso"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Testamento de Abraham (Secreto)": {
    "Definición": "Documento o tradición espiritual revelada que contiene las bases del contrato eterno entre Eloí y sus hijos. Establece la infinitud de los mundos habitables, la inmortalidad del espíritu y la herencia universal de todos los seres como ciudadanos del cosmos.",
    "Contexto": "Código de Amor Universal Tomo 1 (Capítulo Primero).",
    "Conexiones": ["Eloí", "Pluralidad de Mundos", "Moisés"],
    "Obras": ["Código de Amor Universal"]
  },
  "Trinidad del Hombre (Concepto Doctrinal)": {
    "Definición": "Composición ontológica del ser humano según la EMECU: Espíritu (el ser inteligente), Alma o Periespíritu (el envoltorio fluídico) y Cuerpo (la materia). La armonía de estos tres elementos bajo la ley de amor es la base de la salud y el progreso.",
    "Contexto": "Código de Amor Universal Tomo 1 (Capítulo Tercero).",
    "Conexiones": ["Espíritu", "Periespíritu", "Cuerpo"],
    "Obras": ["Código de Amor Universal", "Conócete a ti mismo"]
  },
  "Freno de la Afinidad": {
    "Definición": "Principio regulador que actúa sobre el impulso creativo o procreador del amor. Garantiza que las uniones y las creaciones se realicen entre elementos vibratoriamente compatibles, evitando el desorden, el contagio de fluidos negativos y asegurando la estabilidad de la descendencia espiritual y material.",
    "Contexto": "Código de Amor Universal Tomo 1 (Párrafo sobre la Procreación Universal).",
    "Conexiones": ["Ley de Afinidad", "Amor", "Procreación"],
    "Obras": ["Código de Amor Universal", "Filosofía Enciclopédica Universal"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 2 de Código de Amor T1 (7 nodos) y 3 términos sinápticos.');
