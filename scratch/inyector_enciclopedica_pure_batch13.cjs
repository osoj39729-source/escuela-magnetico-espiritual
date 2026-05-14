const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Filosofía Enciclopédica Universal Tomo 1 (Batch 13 - Claves 133 a 152)
const nuevosNodos = {
  "7240: Septiembre 10 de 1911 - Posesión P. Portillo": {
    "PilotoDeCoherencia": "Himno de Redención. Se anuncia que los tiempos de la profecía se han cumplido y es hora de que el misionero cante el himno de la libertad espiritual.",
    "CitaInelutable": "Se cumplieron los tiempos marcados en la profecía y es hora de que el misionero cante el himno de Redención.",
    "EjemploPedagogico": "El preso que oye sonar las llaves en la cerradura sabe que su tiempo de encierro ha terminado y empieza a cantar de alegría.",
    "ConexionDoctrinal": ["Cumplimiento de Tiempos", "Redención"],
    "NodosSimapticos": []
  },
  "7352: Septiembre 10 de 1911 (Hora 21) - Posesión M. P.": {
    "PilotoDeCoherencia": "Rémoras del Progreso. Aquellos que debieron ser lumbreras en la tierra y solo sirvieron de obstáculo (rémoras) por alimentarse de aberraciones, son llamados a juicio estrecho.",
    "CitaInelutable": "Los que debimos ser lumbreras... sólo fuimos la rémora, porque nos alimentamos de aberraciones.",
    "EjemploPedagogico": "Un faro que en lugar de luz proyecta humo, no solo no guía, sino que hace que los barcos choquen contra las rocas.",
    "ConexionDoctrinal": ["Responsabilidad del Cargo", "Juicio de la Razón"],
    "NodosSimapticos": ["Rémora (Espiritual)"]
  },
  "7429: Septiembre 13 de 1911 - Posesión Portillo": {
    "PilotoDeCoherencia": "Llagas de la Misión. Francisco Xavier se manifiesta como protector de L. B., señalando las 'llagas' o cargas que los misioneros llevan por el bien de la causa.",
    "CitaInelutable": "Dos grandes llagas... Una sobre el lado izquierdo, otra sobre el derecho.",
    "EjemploPedagogico": "El soldado que vuelve de la batalla con cicatrices demuestra su valor y su entrega total al servicio de la patria espiritual.",
    "ConexionDoctrinal": ["Protección de Francisco Xavier", "Sacrificio del Misionero"],
    "NodosSimapticos": []
  },
  "7609: Septiembre 24 de 1911 - ------": {
    "PilotoDeCoherencia": "Sujeción de Mahoma. El espíritu de Mahoma se manifiesta convulsionado y rebelde, siendo necesaria la energía del Maestro para llamarlo al orden y reducirlo a la obediencia de la Ley.",
    "CitaInelutable": "Es el espíritu de Mahoma... No y no y no... lo retendré.",
    "EjemploPedagogico": "Incluso el guerrero más fiero debe soltar la espada cuando se encuentra ante la majestad de la Verdad que no usa armas.",
    "ConexionDoctrinal": ["Mahoma (como Espíritu)", "Autoridad del Maestro"],
    "NodosSimapticos": ["Mahoma (como Espíritu)"]
  },
  "7691: Septiembre 24 de 1911 (hora 21) - Posesión P. Portillo": {
    "PilotoDeCoherencia": "Aviso del Inocente. El niño de 16 meses actúa como canal para un aviso espiritual, demostrando que la mediumnidad no tiene edad cuando la necesidad de comunicación apremia.",
    "CitaInelutable": "Hijo de 16 meses... se encara al médium y dice: Héee...Héee, a papá.",
    "EjemploPedagogico": "La luz de un fósforo en manos de un niño ilumina igual que la de un gigante; el mensaje es lo que importa.",
    "ConexionDoctrinal": ["Mediumnidad Infantil", "Avisos Espirituales"],
    "NodosSimapticos": []
  },
  "7725: Septiembre 31 de 1911 - Posesión P. Portillo": {
    "PilotoDeCoherencia": "Triunfo de las Libertades. Los espíritus intuyen y las masas se pliegan para protestar contra la guerra, marcando el camino hacia la paz universal y el amor.",
    "CitaInelutable": "Las masas se plegaron protestando la guerra... proclamando la paz universal.",
    "EjemploPedagogico": "Cuando miles de pequeñas gotas de agua se unen, forman un río que puede mover las piedras más pesadas (la guerra).",
    "ConexionDoctrinal": ["Paz Universal", "Libertad de los Pueblos"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Rémora (Espiritual)": {
    "Definición": "Calificativo aplicado a los espíritus que, habiendo tenido la misión y capacidad de ser guías o lumbreras para la humanidad, se convirtieron en obstáculos para el progreso debido a su apego a las aberraciones dogmáticas, el orgullo o la ambición material. Su juicio es más riguroso por haber fallado a un alto compromiso.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesión del 10 de Septiembre de 1911).",
    "Conexiones": ["Responsabilidad Moral", "Juicio de la Razón", "Progreso"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  },
  "Mahoma (como Espíritu)": {
    "Definición": "Entidad espiritual que en la Escuela de Trincado se manifiesta inicialmente con rebeldía y convulsiones, reflejando su estado de turbación tras haber sido una figura central de religiones dogmáticas. La doctrina muestra su sujeción a la Ley Única y su posterior proceso de educación bajo la dirección del Maestro.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesión del 24 de Septiembre de 1911).",
    "Conexiones": ["Fanatismo", "Redención", "Autoridad Espiritual"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  },
  "Paz Universal": {
    "Definición": "Estado de armonía global que la humanidad alcanzará mediante el triunfo de las libertades y la eliminación de las fronteras dogmáticas y territoriales. Según la doctrina, es el 'último escalón' que los pueblos deben subir colectivamente para ingresar plenamente en el imperio del Amor.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Protesta contra la guerra, Septiembre de 1911).",
    "Conexiones": ["Fraternidad", "Justicia Universal", "Amor"],
    "Obras": ["Filosofía Enciclopédica Universal", "El Espiritismo en su Asiento"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 6 nodos PURA CALIDAD 1:1 de Filosofía Enciclopédica Tomo 1 (Batch 13) y 3 términos sinápticos.');
