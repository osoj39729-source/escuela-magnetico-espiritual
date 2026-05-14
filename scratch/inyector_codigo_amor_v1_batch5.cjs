const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Código de Amor Universal Tomo 1 (Batch 5 - Claves 60 a 74)
const nuevosNodos = {
  "5731: Párrafo ii: Comprobaciones por sus hechos": {
    "PilotoDeCoherencia": "Página Negra del Dogma. Las religiones positivas han sembrado sangre por supremacía; el Padre las fusiona mediante el progreso hacia una verdad única.",
    "CitaInelutable": "Religiones llamadas positivas tienen una página negra y de sangre... ocasionada por la concupiscencia y supremacía.",
    "EjemploPedagogico": "Un río que arrastra barro y lodo de las orillas (religiones); pero al final, el agua se decanta y queda pura en el lago de la verdad universal.",
    "ConexionDoctrinal": ["Suprematismo (Concepto Doctrinal)", "Historia del Dogma"],
    "NodosSimapticos": ["Suprematismo (Concepto Doctrinal)"]
  },
  "5844: Párrafo i: los estados civiles feudos de las religiones": {
    "PilotoDeCoherencia": "Feudalismo Religioso. Los estados civiles han sido apéndices de las religiones, impidiendo la justicia real y causando el dolor de la humanidad.",
    "CitaInelutable": "No ha habido estado civil... que no fuera feudo de las religiones.",
    "EjemploPedagogico": "Un juez que debe dictar sentencia pero tiene a un cura soplándole al oído lo que debe decir según el dogma; así no hay justicia, hay tiranía.",
    "ConexionDoctrinal": ["Justicia Civil vs Dogma", "Soberanía del Estado"],
    "NodosSimapticos": []
  },
  "6031: Párrafo ii: los ejércitos y las guerras": {
    "PilotoDeCoherencia": "Origen Sacerdotal de la Guerra. Las guerras nacieron con el sacerdocio para saciar la concupiscencia de supremacía que la religión impuso sobre los pueblos.",
    "CitaInelutable": "Guerras nacieron con la primera religión... bajo cualquier forma se inició el sacerdocio.",
    "EjemploPedagogico": "El que enciende una hoguera para que otros se quemen mientras él se queda con el botín de los que mueren; el sacerdote es el que enciende la mecha de la guerra.",
    "ConexionDoctrinal": ["Origen de la Guerra", "Crítica al Sacerdocio"],
    "NodosSimapticos": []
  },
  "6144: Párrafo iii: las armadas y la paz armada": {
    "PilotoDeCoherencia": "Militarismo Criminal. Entregar instrumentos de exterminio a la juventud en lugar de herramientas de trabajo es un crimen contra la moral y la economía comunal.",
    "CitaInelutable": "Juventud... con un instrumento criminal entre sus manos, en cambio de la esteva del arado.",
    "EjemploPedagogico": "Un padre que en lugar de darle un libro o una pala a su hijo para que aprenda a vivir, le da un puñal para que aprenda a matar al vecino.",
    "ConexionDoctrinal": ["Paz Armada (Crítica)", "Economía de la Comuna"],
    "NodosSimapticos": ["Paz Armada (Crítica)"]
  },
  "6421: Párrafo i: la sociedad dividida en clases es un absurdo": {
    "PilotoDeCoherencia": "Absurdo de las Clases. La división social en castas contradice la herencia universal de los hijos de Dios establecida en el Testamento de Abraham.",
    "CitaInelutable": "Dios uno... los hombres son sus hijos y él su herencia. Esta cláusula... anula todas las clases.",
    "EjemploPedagogico": "En una mesa donde hay pan para todos los hermanos, uno decide que él es 'noble' y se queda con todo el pan, dejando a los demás como 'siervos'.",
    "ConexionDoctrinal": ["Igualdad Universal", "Testamento de Abraham"],
    "NodosSimapticos": []
  },
  "6823: Párrafo iii: la Criminología: sus causas": {
    "PilotoDeCoherencia": "Raíz del Crimen. El crimen es producto de la ignorancia y de la religión católica; en mundos superiores donde impera el amor y la comuna, el crimen no existe.",
    "CitaInelutable": "Crimen existe en la tierra y mundos inferiores por la ignorancia y porque existen religiones.",
    "EjemploPedagogico": "Un cuarto a oscuras donde la gente tropieza y se hiere (crimen); la luz (amor/sabiduría) hace que todos vean el camino y dejen de golpearse.",
    "ConexionDoctrinal": ["Causa Raíz del Crimen", "Mundos Superiores"],
    "NodosSimapticos": ["Causa Raíz del Crimen"]
  },
  "7185: Párrafo v: los tribunales y los jueces": {
    "PilotoDeCoherencia": "Dependencia Judicial. Los tribunales fallan porque sus rituales e insignias son reflejo del poder religioso del que dependen, alejándose de la justicia de la ley.",
    "CitaInelutable": "Tribunales de justicia... son dependientes del poder religioso.",
    "EjemploPedagogico": "Un árbitro de fútbol que pita el partido llevando la camiseta de uno de los equipos; sus fallos nunca podrán ser imparciales.",
    "ConexionDoctrinal": ["Reforma Judicial Espiritual", "Crítica al Sistema Legal"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Suprematismo (Concepto Doctrinal)": {
    "Definición": "Ideología y práctica de castas sociales, políticas o religiosas que pretenden una superioridad intrínseca sobre el resto de la humanidad. Se basa en el despojo de los derechos comunes establecidos por el Padre y es la causa primordial de la desigualdad, la esclavitud y el dolor social.",
    "Contexto": "Código de Amor Universal Tomo 1 (Párrafo sobre las clases sociales).",
    "Conexiones": ["Igualdad", "Testamento de Abraham", "Despojo"],
    "Obras": ["Código de Amor Universal", "Filosofía Austera Racional"]
  },
  "Paz Armada (Crítica)": {
    "Definición": "Estado de falsa tranquilidad internacional mantenido mediante el armamentismo y el reclutamiento forzoso de la juventud. Es denunciado como un derroche criminal de recursos y una escuela de inmoralidad que enseña el exterminio en lugar del trabajo productivo y solidario.",
    "Contexto": "Código de Amor Universal Tomo 1 (Párrafo sobre las armadas).",
    "Conexiones": ["Militarismo", "Guerra", "Comuna Universal"],
    "Obras": ["Código de Amor Universal", "Profilaxis de la Vida"]
  },
  "Causa Raíz del Crimen": {
    "Definición": "Axioma trincadista que sitúa el origen de toda delincuencia y maldad social en la ignorancia de las leyes naturales y en la influencia corruptora de las religiones. Propugna que la responsabilidad moral final recae sobre los líderes de los sistemas dogmáticos que mantienen al pueblo en la oscuridad.",
    "Contexto": "Código de Amor Universal Tomo 1 (Capítulo sobre la Criminología).",
    "Conexiones": ["Religión", "Ignorancia", "Responsabilidad Moral"],
    "Obras": ["Código de Amor Universal", "Conócete a ti mismo"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 5 de Código de Amor T1 (7 nodos) y 3 términos sinápticos. Sociología trincadista activa.');
