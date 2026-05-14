const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Filosofía Enciclopédica Universal Tomo 1 (Batch 11 - Claves 121 a 140)
const nuevosNodos = {
  "5337: Julio 28 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Sabiduría Errante. Un espíritu sabio puede andar errante si carece de la práctica del bien; los buenos fluidos de la Escuela sirven de ancla para estos seres.",
    "CitaInelutable": "El espíritu... es un espíritu sabio, pero anda errante y donde encuentra buenos fluidos allí se detiene.",
    "EjemploPedagogico": "Un barco con una gran biblioteca pero sin brújula ni timón sigue estando a la deriva en el océano.",
    "ConexionDoctrinal": ["Sabiduría vs Práctica", "Atracción por Fluidos"],
    "NodosSimapticos": []
  },
  "5494: Julio 28 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Llegada del Apóstol. El equipo de Francisco Xavier anuncia la incorporación de un 'apóstol' necesario para fortalecer la misión de Trincado.",
    "CitaInelutable": "Hoy ha llegado a ti el apóstol que necesitabas para tu misión.",
    "EjemploPedagogico": "El general envía al especialista justo en el momento en que la batalla requiere una nueva estrategia de luz.",
    "ConexionDoctrinal": ["Equipo Espiritual", "Misión de Trincado"],
    "NodosSimapticos": []
  },
  "5512: Julio 31 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Sufrimiento de Ignacio. Ignacio de Loyola denuncia la 'grandeza sarcástica' con que la Iglesia lo honra, sufriendo por el culto hipócrita que ignora su realidad espiritual.",
    "CitaInelutable": "Grandeza sarcástica, que me consagran los que de boca me llaman su Padre.",
    "EjemploPedagogico": "Es como si te hicieran un monumento de oro mientras te dejan morir de hambre en la realidad; el honor externo es un insulto al dolor interno.",
    "ConexionDoctrinal": ["Ignacio de Loyola (Estado Espiritual)", "Grandeza Sarcástica"],
    "NodosSimapticos": ["Ignacio de Loyola (Estado Espiritual)", "Grandeza Sarcástica"]
  },
  "5584: Agosto 1 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Camino de Lucha. La vida en la tierra es un camino de luchas y expiaciones que incluso los espíritus hoy elevados tuvieron que transitar en su momento.",
    "CitaInelutable": "Nosotros también padecimos y pasamos el mismo camino de luchas que vosotros pasáis.",
    "EjemploPedagogico": "El maestro de hoy fue el alumno que ayer sudó sobre los mismos libros que tú tienes delante.",
    "ConexionDoctrinal": ["Evolución por Lucha", "Expiación"],
    "NodosSimapticos": []
  },
  "5641: Agosto 6 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Confesión de la Falsa Justicia. Un espíritu que defendió dogmas humanos confiesa que solo bajo la luz de la Escuela comprende la verdadera Justicia de Dios.",
    "CitaInelutable": "Nunca entendí la justicia como la presiento hoy. Ya es hora que confiese.",
    "EjemploPedagogico": "El juez que condenó por leyes ciegas, ahora se ve juzgado por la ley de la luz y descubre que su balanza estaba rota.",
    "ConexionDoctrinal": ["Justicia Humana vs Divina", "Confesión Espiritual"],
    "NodosSimapticos": []
  },
  "5741: Agosto 8 de 1911 - Posesión Pedro Portillo": {
    "PilotoDeCoherencia": "Almas Emancipadas. Los actos de las almas que han vencido sus pasiones sirven de ejemplo para comprender los acontecimientos de la vida humana.",
    "CitaInelutable": "Actos de las almas emancipadas de las pasiones... os pondrá en conocimiento.",
    "EjemploPedagogico": "El que ya no tiene miedo ni odio, ve el mundo con la claridad de quien mira un mapa desde la cima de una montaña.",
    "ConexionDoctrinal": ["Almas Emancipadas", "Superación de Pasiones"],
    "NodosSimapticos": ["Almas Emancipadas"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Ignacio de Loyola (Estado Espiritual)": {
    "Definición": "Estado de la entidad espiritual de Ignacio de Loyola en 1911, caracterizado por el remordimiento y el sufrimiento ante el culto idolátrico y la organización (Jesuitas) que fundó. Ignacio busca desvincularse de la estructura dogmática de la Iglesia para servir a la causa de la verdad racional en la Escuela Magnético-Espiritual.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesión del 31 de Julio de 1911).",
    "Conexiones": ["Jesuitas", "Revisión de Actos", "Ignacio de Loyola"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  },
  "Grandeza Sarcástica": {
    "Definición": "Término acuñado por Ignacio de Loyola para describir los honores, títulos y ceremonias que la Iglesia Católica dedica a sus 'santos' y fundadores. Se califica de 'sarcástica' porque se realiza en total desconocimiento de la verdadera situación espiritual de la entidad y a menudo contradice los principios de humildad y verdad que el espíritu ahora defiende.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Manifestación de Ignacio de Loyola).",
    "Conexiones": ["Hipocresía Religiosa", "Dogma", "Crítica a la Iglesia"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  },
  "Almas Emancipadas": {
    "Definición": "Espíritus que han logrado dominar sus pasiones inferiores (miedo, odio, orgullo, egoísmo) y actúan bajo la guía directa de la razón y el amor universal. Estas almas poseen una visión clara de la Ley y se dedican a la instrucción y protección de sus hermanos encarnados sin los sesgos de la materia.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesión del 8 de Agosto de 1911).",
    "Conexiones": ["Progreso Espiritual", "Dominio Propio", "Luz"],
    "Obras": ["Filosofía Enciclopédica Universal", "Conócete a ti mismo"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 6 nodos PURA CALIDAD 1:1 de Filosofía Enciclopédica Tomo 1 (Batch 11) y 3 términos sinápticos.');
