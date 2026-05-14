const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/estatutos-y-reglamentos_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = {};
if (fs.existsSync(esenciaPath)) {
  esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
}
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Estatutos y Reglamentos (Batch 1 - Claves 0 a 14)
const nuevosNodos = {
  "000: Prefacio - Finalidad de la Norma": {
    "PilotoDeCoherencia": "Guía Operativa. Los Estatutos y el Reglamento no son solo leyes frías, sino herramientas pedagógicas para profundizar en el aprendizaje de la reglamentación y vida de la Escuela.",
    "CitaInelutable": "Facilitar la comprensión, interpretación y análisis de sus artículos... permiten profundizar en el aprendizaje de nuestra reglamentación.",
    "EjemploPedagogico": "Un mapa detallado de una ciudad que no solo te dice dónde están las calles, sino que te explica las reglas de convivencia para que todos los ciudadanos vivan en armonía.",
    "ConexionDoctrinal": ["Orden Social", "Disciplina"],
    "NodosSimapticos": []
  },
  "001: Definición de Estatuto y Reglamento": {
    "PilotoDeCoherencia": "Base Normativa. El Estatuto rige la organización y vida de la entidad; el Reglamento regula la aplicación práctica de la ley y el régimen interno.",
    "CitaInelutable": "Estatuto: Norma o conjunto de normas que rigen la organización... Reglamento: Conjunto ordenado de reglas... que regulan la aplicación de una ley.",
    "EjemploPedagogico": "La Constitución de un país es el Estatuto (el qué); las leyes de tránsito son el Reglamento (el cómo se aplica en el día a día).",
    "ConexionDoctrinal": ["Justicia Legislativa", "Régimen Interno"],
    "NodosSimapticos": []
  },
  "002: Art. 1: Domicilio Legal y Elementos": {
    "PilotoDeCoherencia": "Identidad de la EMECU. La Escuela se constituye con domicilio legal en Buenos Aires, integrando su lema, bandera, proclama y sistema como identidad indivisible.",
    "CitaInelutable": "Constituye domicilio legal en la Capital de la nación Argentina... con su lema, bandera, proclama, programa, sistema.",
    "EjemploPedagogico": "El acta de nacimiento de una familia que establece su casa principal y define sus apellidos, sus valores y su escudo de armas.",
    "ConexionDoctrinal": ["EMECU (Fundación)", "Soberanía Argentina"],
    "NodosSimapticos": ["EMECU (Fundación)"]
  },
  "003: Art. 2: Neutralidad y Principios": {
    "PilotoDeCoherencia": "Apoliticidad y Anti-dogmatismo. La Escuela no tiene credo político ni religioso; lucha por principios y causas morales, no contra hombres, transformando hipótesis en axiomas.",
    "CitaInelutable": "No tiene credo político, ni color religioso, ni supremacías... ni discute a un hombre; pero discute y lucha los principios.",
    "EjemploPedagogico": "Un laboratorio científico que no se preocupa por el partido político de los investigadores, sino por la veracidad de las leyes químicas que descubren.",
    "ConexionDoctrinal": ["Sin Credo Político ni Religioso (Axioma)", "Lucha de Principios"],
    "NodosSimapticos": ["Sin Credo Político ni Religioso (Axioma)"]
  },
  "004: Art. 2 (Cont.): Adoración Racional": {
    "PilotoDeCoherencia": "Adoración sin Formas. Los adeptos no son ateos, sino que adoran a la Causa Primera sin ritos ni dogmas, fundamentando su fe en el amor al hermano.",
    "CitaInelutable": "Adoran (pero sin fórmulas, ritos ni dogmas) la causa primera de todas las cosas y aman al hermano, en su semejante.",
    "EjemploPedagogico": "Un hijo que ama a su padre no necesita arrodillarse ni recitar versos extraños cada mañana; le basta con actuar con respeto y cuidar a sus hermanos como prueba de ese amor.",
    "ConexionDoctrinal": ["Adoración Racional", "Causa Primera"],
    "NodosSimapticos": ["Adoración Racional"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "EMECU (Fundación)": {
    "Definición": "Escuela Magnético-Espiritual de la Comuna Universal. Institución fundada por Joaquín Trincado el 20 de septiembre de 1911 (legalizada en 1919) para la enseñanza de la filosofía espírita racionalista y la implantación de la Comuna de Amor y Ley en la Tierra.",
    "Contexto": "Estatutos y Reglamento (Art. 1).",
    "Conexiones": ["Comuna Universal", "Espiritismo", "Joaquín Trincado"],
    "Obras": ["Estatutos y Reglamentos", "Filosofía Austera Racional"]
  },
  "Sin Credo Político ni Religioso (Axioma)": {
    "Definición": "Principio fundamental de la EMECU que garantiza la independencia absoluta de la Escuela frente a las facciones políticas y dogmas religiosos. Establece que la verdad y la fraternidad universal están por encima de las divisiones humanas de partidos o iglesias.",
    "Contexto": "Estatutos y Reglamento (Art. 2).",
    "Conexiones": ["Libertad de Pensamiento", "Neutralidad", "Fraternidad"],
    "Obras": ["Estatutos y Reglamentos", "Los Extremos se Tocan"]
  },
  "Adoración Racional": {
    "Definición": "Reconocimiento consciente de la Causa Primera (Eloí) desprovisto de ceremonias, templos, ritos o intermediarios. Se manifiesta a través del estudio de las leyes naturales y la práctica efectiva de la fraternidad humana.",
    "Contexto": "Estatutos y Reglamento (Art. 2).",
    "Conexiones": ["Eloí", "Causa Primera", "Amor al Prójimo"],
    "Obras": ["Estatutos y Reglamentos", "Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 1 de Estatutos y Reglamentos (5 nodos) y 3 términos sinápticos. Identidad de la EMECU sellada.');
