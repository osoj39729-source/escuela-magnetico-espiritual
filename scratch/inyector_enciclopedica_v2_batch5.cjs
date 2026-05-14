const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-2_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Filosofía Enciclopédica Universal Tomo 2 (Batch 5 - Claves 48 a 62)
const nuevosNodos = {
  "4706: Febrero 6 de 1912 - Cleopatra": {
    "PilotoDeCoherencia": "Transmigración y Juicio. Cleopatra revela su reencarnación como el Papa Jerónimo X, demostrando que la ley no distingue cargos materiales y que la rehabilitación es posible tras el arrepentimiento.",
    "CitaInelutable": "Cleopatra... reencarnado una vez y fue el Papa Jerónimo X que fue muy malo; fue admitido a la gracia en el juicio.",
    "EjemploPedagogico": "Una reina que se quita la corona para ponerse la tiara papal; el traje cambia pero las manchas del alma son las mismas hasta que el arrepentimiento las lava.",
    "ConexionDoctrinal": ["Reencarnación Trans-Sextual", "Rehabilitación Espiritual"],
    "NodosSimapticos": ["Rehabilitación Espiritual"]
  },
  "4752: Febrero 11 de 1912 (Portillo) - Monje de Mont -Blanc": {
    "PilotoDeCoherencia": "Justicia sobre el Dogma. Legiones de espíritus eclesiásticos (negros) son conducidos a juicio por Juana de Arco y el Patriarca Joaquín, rompiendo la impunidad clerical.",
    "CitaInelutable": "Inmensas legiones de espíritus negros... conducidos por la justicia. Les guiaban con su luz Juana de Arco.",
    "EjemploPedagogico": "Un ejército que creía estar por encima de la ley es rodeado por la luz de la verdad y obligado a comparecer ante el tribunal de la conciencia universal.",
    "ConexionDoctrinal": ["Juicio Universal", "Responsabilidad Colectiva"],
    "NodosSimapticos": []
  },
  "5026: Febrero 11 de 1912 Hora 21 (Portillo) - Chuilid de Lid Marte": {
    "PilotoDeCoherencia": "Resurrección de la Humanidad. La unión consciente entre el hombre y el espíritu marca el fin del divorcio espiritual y la integración de la Tierra en la familia universal.",
    "CitaInelutable": "Resurrección de la humanidad terrestre... el hombre y el espíritu que una misma cosa son, se unen.",
    "EjemploPedagogico": "Dos hermanos que vivían en la misma casa pero se ignoraban, finalmente se abrazan y reconocen que son una sola sangre y un solo destino.",
    "ConexionDoctrinal": ["Unidad Hombre-Espíritu", "Solidaridad Universal"],
    "NodosSimapticos": ["Espíritus de Otros Mundos (Testimonio)"]
  },
  "5818: Febrero 25 de 1912  (Portillo) - Calvino  y  Lutero": {
    "PilotoDeCoherencia": "Juicio al Protestantismo. Calvino y Lutero reconocen que su reforma fue solo el desgajo de una 'pequeña iglesia' y se someten al juicio para ser rehabilitados al trabajo.",
    "CitaInelutable": "Respondemos por nuestra pequeña Iglesia, desgajo de la otra pequeña Iglesia.",
    "EjemploPedagogico": "Dos ramas que se separaron del árbol seco creyendo ser el bosque entero, y ahora descubren que deben volver a la raíz única del amor.",
    "ConexionDoctrinal": ["Crítica a las Sectas", "Pequeñas Iglesias (Concepto Doctrinal)"],
    "NodosSimapticos": ["Pequeñas Iglesias (Concepto Doctrinal)"]
  },
  "6067: Febrero 25 de 1912 Hora 20  (Portillo) - El  Espíritu  de  Verdad": {
    "PilotoDeCoherencia": "Sentencia de las Moradas. El Espíritu de Verdad decreta que cada espíritu ocupe su morada de felicidad o sufrimiento según sus obras; los culpables de hoy serán redentores mañana.",
    "CitaInelutable": "Oíd espíritus del espacio, culpables de hoy y redentores del mañana... cada uno irá a ocupar su morada.",
    "EjemploPedagogico": "El director de la escuela que al final del curso asigna a cada alumno el aula que le corresponde según su esfuerzo y aprendizaje.",
    "ConexionDoctrinal": ["Justicia Retributiva Natural", "Moradas Espirituales"],
    "NodosSimapticos": []
  },
  "6196: Febrero 27 de 1912  (Portillo) - Juilis Juilis del Gof Duf.": {
    "PilotoDeCoherencia": "Lenguaje Universal de la Vida. Una entidad de otro mundo valida la vida divina y el amor universal, demostrando la interconexión de todas las familias espirituales del cosmos.",
    "CitaInelutable": "Dibili gabis... Vida divina, vida que Dios da a sus hijos con puro amor.",
    "EjemploPedagogico": "Un pájaro de un continente lejano que canta la misma melodía de alegría que el pájaro de tu jardín, confirmando que la primavera es para todos.",
    "ConexionDoctrinal": ["Universalidad del Amor", "Idiomas Espirituales"],
    "NodosSimapticos": []
  },
  "6320: Marzo 1 de 1912  (Portillo) - Xeim  Xeim": {
    "PilotoDeCoherencia": "Convocatoria Galáctica. Espíritus de mundos remotos acuden al juicio atraídos por la resonancia de la justicia universal en los espacios.",
    "CitaInelutable": "La voz de la justicia resuena en los espacios y llega de espíritu a espíritu y de mundo a mundo.",
    "EjemploPedagogico": "Un gran trueno de justicia que se oye en todas las montañas, haciendo que todos los viajeros se detengan y miren hacia el mismo punto.",
    "ConexionDoctrinal": ["Eco de la Justicia", "Solidaridad Intergaláctica"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Rehabilitación Espiritual": {
    "Definición": "Proceso mediante el cual un espíritu que ha cometido crímenes graves contra la ley de amor (como Cleopatra o jerarcas eclesiásticos) es admitido nuevamente al trabajo útil tras un arrepentimiento sincero y el sometimiento al juicio. Esta gracia permite al espíritu evitar el destierro a mundos primitivos para saldar su deuda mediante el servicio en la Tierra.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 2 (Juicios de Febrero de 1912).",
    "Conexiones": ["Justicia de la Ley", "Misericordia", "Progreso"],
    "Obras": ["Filosofía Enciclopédica Universal", "El Espiritismo en su Asiento"]
  },
  "Espíritus de Otros Mundos (Testimonio)": {
    "Definición": "Entidades procedentes de mundos más avanzados (como Marte, Gof Duf, etc.) que se manifiestan en la Escuela para validar la importancia del Juicio Final en la Tierra. Su testimonio demuestra que nuestro planeta es parte de una familia universal y que su progreso interesa a todo el cosmos.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 2 (Mensajes de Chuilid y Juilis).",
    "Conexiones": ["Pluralidad de Mundos", "Solidaridad Universal", "Cosmogonía"],
    "Obras": ["Filosofía Enciclopédica Universal", "Filosofía Austera Racional"]
  },
  "Pequeñas Iglesias (Concepto Doctrinal)": {
    "Definición": "Calificativo despectivo utilizado por los Maestros espirituales para referirse a todas las organizaciones religiosas y sectarias. Se consideran 'pequeñas' porque limitan la inmensidad de la verdad de Eloí a dogmas estrechos, rituales vacíos y prejuicios que dividen a la humanidad.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 2 (Juicio a Calvino y Lutero).",
    "Conexiones": ["Dogma", "Religión", "Cisma"],
    "Obras": ["Filosofía Enciclopédica Universal", "El Espiritismo en su Asiento"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 5 de Tomo 2 (7 nodos) e inyectada REHABILITACIÓN de Cleopatra y Jerarcas.');
