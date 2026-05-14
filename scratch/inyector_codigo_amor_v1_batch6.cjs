const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Código de Amor Universal Tomo 1 (Batch 6 - Claves 75 a 89)
const nuevosNodos = {
  "7540: Párrafo i: la familia está solo en los espíritus": {
    "PilotoDeCoherencia": "Familia Espiritual. El parentesco real se basa en la afinidad y atracción de los espíritus en el espacio; los lazos materiales de la tierra son transitorios para el cumplimiento de deberes.",
    "CitaInelutable": "La familia se forma en los espíritus por atracción... obedeciendo a la ley de afinidad.",
    "EjemploPedagogico": "Un grupo de estudiantes que se eligen para hacer un trabajo juntos por amistad y metas comunes; en clase se sientan juntos (familia), pero su unión viene de antes y sigue después.",
    "ConexionDoctrinal": ["Ley de Afinidad", "Familia Universal"],
    "NodosSimapticos": []
  },
  "7591: Párrafo ii: la propiedad material no existe en la ley divina": {
    "PilotoDeCoherencia": "Propiedad de Sabiduría. Nada material pertenece al ser; el espíritu solo posee la sabiduría y la luz que ha ganado mediante su esfuerzo y progreso.",
    "CitaInelutable": "La propiedad material no existe en la ley divina y sólo es propiedad del espíritu la sabiduría ganada.",
    "EjemploPedagogico": "Un músico que posee muchos instrumentos; si se incendia su casa pierde los instrumentos, pero nunca perderá su talento y conocimiento de la música (su propiedad real).",
    "ConexionDoctrinal": ["Propiedad del Espíritu", "Justicia Comunal"],
    "NodosSimapticos": ["Propiedad del Espíritu"]
  },
  "7720: Párrafo iii: Los títulos nobiliarios son ficticios e injustos": {
    "PilotoDeCoherencia": "Falsedad de la Nobleza. Los títulos de nobleza son marcas de prevaricación contra la ley de igualdad; el espíritu cambia de posición social en cada existencia para aprender.",
    "CitaInelutable": "Títulos nobiliarios son ficticios e injustos... solo es señal de que han prevaricado de la ley divina de igualdad.",
    "EjemploPedagogico": "El actor que hoy hace de rey y mañana de mendigo; si al terminar la obra el que hizo de rey se cree superior al otro, demuestra que no entendió que solo era un papel transitorio.",
    "ConexionDoctrinal": ["Igualdad de los Seres", "Justicia Trans-Encarnatoria"],
    "NodosSimapticos": []
  },
  "8097: Párrafo vi: la Comuna es el régimen que el Creador dio a sus hijos": {
    "PilotoDeCoherencia": "Régimen Natural. La Comuna es la forma de organización política dada por el Padre; ha sido calumniada por los tiranos para evitar el fin de su dominio.",
    "CitaInelutable": "La Comuna es el régimen que el Creador dio a sus hijos... hasta este santo nombre ha sido ultrajado.",
    "EjemploPedagogico": "Una familia grande donde todos trabajan en el huerto y todos comen de lo que se cosecha; nadie es dueño de la tierra, pero todos son dueños del fruto de su amor.",
    "ConexionDoctrinal": ["Comuna Universal", "Comunismo Espiritual"],
    "NodosSimapticos": []
  },
  "8183: Punto primero: la caridad, lejos de ser una virtud, es un baldón": {
    "PilotoDeCoherencia": "Fin de la Caridad. La caridad es el insulto de una sociedad que no aplica la justicia; en la Era de la Verdad, el derecho sustituye a la limosna.",
    "CitaInelutable": "La caridad, lejos de ser una virtud, es un baldón.",
    "EjemploPedagogico": "Darle las sobras a un hermano que tiene hambre después de haberle robado su parte de la comida; eso no es amor, es vergüenza para el que da y para el que recibe.",
    "ConexionDoctrinal": ["Caridad (Baldón)", "Derecho de Vida"],
    "NodosSimapticos": ["Caridad (Baldón)"]
  },
  "8345: Párrafo vii: la tierra en su séptimo día de la humanidad": {
    "PilotoDeCoherencia": "Sétimo Día de Progreso. La Tierra ha entrado en su fase final de perfeccionamiento (Comuna) que durará hasta que la humanidad esté lista para mundos de mayor luz.",
    "CitaInelutable": "Estamos en la primera hora del día séptimo, del día de la comuna... del día de Eloí.",
    "EjemploPedagogico": "El último curso de una carrera universitaria; es el tiempo de aplicar todo lo aprendido antes de graduarse y pasar a una vida superior de trabajo.",
    "ConexionDoctrinal": ["Sétimo Día (Cronología Cosmogónica)", "Era de la Verdad"],
    "NodosSimapticos": ["Sétimo Día (Cronología Cosmogónica)"]
  },
  "8648: Párrafo ii: los espíritus en su marcha triunfal": {
    "PilotoDeCoherencia": "Metamorfosis Planetaria. Al alcanzar el límite del progreso terrestre, la humanidad y el planeta sufren una transformación hacia un nuevo estado de luz y creación.",
    "CitaInelutable": "Humanidad de la tierra llegará al límite del progreso... metamorfosis... el espíritu lleva en valor de fuerza y sabiduría, representado en luz.",
    "EjemploPedagogico": "La oruga que después de comer y crecer llega a su límite, se encierra en el capullo (metamorfosis) y resurge como mariposa volando hacia el sol.",
    "ConexionDoctrinal": ["Transformación de los Mundos", "Progreso Infinito"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Sétimo Día (Cronología Cosmogónica)": {
    "Definición": "Concepto que define la etapa final de una humanidad en un mundo de expiación que ha pasado su Juicio Final. Representa el reinado del espíritu, la instauración de la Comuna Universal y el periodo de máxima sabiduría antes de que el planeta sufra su metamorfosis hacia una morada de mayor luz.",
    "Contexto": "Código de Amor Universal Tomo 1 (Párrafo sobre el séptimo día).",
    "Conexiones": ["Era de la Verdad", "Juicio Final", "Metamorfosis"],
    "Obras": ["Código de Amor Universal", "Buscando a Dios"]
  },
  "Propiedad del Espíritu": {
    "Definición": "Axioma ontológico que declara que la única posesión eterna y legítima de un ser es su acervo de sabiduría, amor y méritos ganados por el progreso propio. Niega la propiedad privada material como un derecho divino, estableciendo que los bienes del mundo son de uso común para la evolución colectiva.",
    "Contexto": "Código de Amor Universal Tomo 1 (Capítulo sobre la Propiedad).",
    "Conexiones": ["Sabiduría", "Justicia Comunal", "Despojo"],
    "Obras": ["Código de Amor Universal", "Filosofía Austera Racional"]
  },
  "Caridad (Baldón)": {
    "Definición": "Crítica radical a la caridad religiosa, considerándola una marca de ignominia para la sociedad que la ejerce. Sostiene que la caridad humilla al ser y encubre la falta de justicia social; en la doctrina trincadista, es reemplazada por el Derecho de Vida y la solidaridad obligatoria entre hermanos.",
    "Contexto": "Código de Amor Universal Tomo 1 (Párrafo sobre la caridad).",
    "Conexiones": ["Justicia Social", "Derecho de Vida", "Religión"],
    "Obras": ["Código de Amor Universal", "Profilaxis de la Vida"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 6 de Código de Amor T1 (7 nodos) y 3 términos sinápticos. Sétimo Día sellado.');
