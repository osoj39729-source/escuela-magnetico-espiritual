const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Filosofía Enciclopédica Universal Tomo 1 (Batch 6 - Claves 79 a 98)
const nuevosNodos = {
  "3123: Mayo 1 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Voluntad Racional. La voluntad debe ser hija de la razón, y ésta hija de la experiencia y la buena intención. La constancia es lo que define la fuerza de voluntad.",
    "CitaInelutable": "La voluntad debe ser hija de la razón, y la razón hija de la experiencia.",
    "EjemploPedagogico": "El deseo es el viento; la razón es el timón; la voluntad es la mano firme que lleva el barco al puerto justo.",
    "ConexionDoctrinal": ["Voluntad Racional", "Criterio de Verdad"],
    "NodosSimapticos": ["Voluntad Racional"]
  },
  "3162: Mayo 2 de 1911 - Escrita, Trincado": {
    "PilotoDeCoherencia": "Asistencia Médica Espiritual. Los protectores advierten sobre peligros físicos y recomiendan cuidados materiales (lavajes, cirugía) cuando la ley de materia lo exige.",
    "CitaInelutable": "Si no adelantara la curación del oído... será necesaria la operación quirúrgica.",
    "EjemploPedagogico": "El espíritu guía al médico, pero el médico debe operar el cuerpo; cada uno actúa en su reino.",
    "ConexionDoctrinal": ["Ciencia y Espiritismo", "Protección de la Niñez"],
    "NodosSimapticos": []
  },
  "3183: Mayo 2 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Administración Equitativa. Los bienes materiales deben ser administrados con la misma medida y equidad con que un padre reparte el pan entre sus hijos.",
    "CitaInelutable": "Lo espiritual es primero; mas no es de desdeñar lo material cuando... ha de hacerse el buen uso.",
    "EjemploPedagogico": "El dinero es la herramienta; el espíritu es el artesano. Una buena herramienta en manos de un mal artesano no construye nada.",
    "ConexionDoctrinal": ["Equidad Económica", "Uso de Bienes"],
    "NodosSimapticos": []
  },
  "3211: Mayo 7 de 1911 - Posesión M.P.": {
    "PilotoDeCoherencia": "Justicia de Revisión. Manifestación de Aurora Rodríguez, quien tras asesinar a su esposo busca luz, demostrando que incluso el crimen más grave puede encontrar redención mediante el arrepentimiento y la luz de la Escuela.",
    "CitaInelutable": "Me han traído mis enemigos... mató a su esposo... Recibió la luz.",
    "EjemploPedagogico": "La Escuela es un tribunal de amor donde el reo viene a soltar las cadenas de su odio.",
    "ConexionDoctrinal": ["Justicia de Revisión", "Redención Espiritual"],
    "NodosSimapticos": []
  },
  "3228: Mayo 9 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Ubicuidad del Auxilio. El hermano Juan transporta su espíritu a un hospital para diagnosticar y recetar a una niña grave, rompiendo las barreras del espacio físico.",
    "CitaInelutable": "Se transportó al Hospital de Niños... para ver una enfermita muy grave.",
    "EjemploPedagogico": "El pensamiento del espíritu de luz llega instantáneamente donde hay dolor para ofrecer consuelo y ciencia.",
    "ConexionDoctrinal": ["Transporte Espiritual", "Diagnóstico Mediúmnico"],
    "NodosSimapticos": []
  },
  "3241: Mayo 12 de 1911 - Posesión Pedro Portillo": {
    "PilotoDeCoherencia": "Multiplicación de Dones. El que tiene facultades o conocimientos y no los comparte, los pierde. El progreso individual depende de la ayuda colectiva.",
    "CitaInelutable": "El que tiene dones y los guarda, éste los aminora porque no los multiplica.",
    "EjemploPedagogico": "Un fuego que no se comparte termina apagándose en su propia ceniza; el que enciende otras velas brilla más.",
    "ConexionDoctrinal": ["Multiplicación de Dones", "Ley de Solidaridad"],
    "NodosSimapticos": ["Multiplicación de Dones"]
  },
  "3278: Mayo 14 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "La Profecía de Amor. La misión de Trincado es una profecía de Eloí que se cumplirá a pesar de los insultos de los 'necios' que se creen sabios.",
    "CitaInelutable": "Vosotros sois la profecía y la profecía se cumplirá; porque esa profecía procede de Dios.",
    "EjemploPedagogico": "El necio ladra a la luna; el sabio sabe que la luna sigue iluminando la noche sin inmutarse.",
    "ConexionDoctrinal": ["Misión de Trincado", "Autoridad Divina"],
    "NodosSimapticos": []
  },
  "3319: Mayo 16 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Perseverancia del Protector. Los espíritus siguen a sus protegidos durante muchas existencias para lograr 'enderezar sus pasos' hacia el cumplimiento del deber.",
    "CitaInelutable": "Muchas existencias te vengo siguiendo y gracias a Dios que logré enderezar los pasos.",
    "EjemploPedagogico": "El protector es el jardinero paciente que endereza el tallo de la planta durante años hasta que esta puede florecer.",
    "ConexionDoctrinal": ["Protección Inter-existencial", "Guía Espiritual"],
    "NodosSimapticos": []
  },
  "3436: Mayo 21 de 1911 - Posesión M. P.": {
    "PilotoDe Nazaret": "Lazos a través de los siglos. Isabel (Santa) explica cómo ha seguido a su protegida por siglos para que cumpla sus promesas de amor, superando el fracaso de vidas pasadas.",
    "CitaInelutable": "Muchos siglos la he seguido y muchas veces los he juntado y no se amaron.",
    "EjemploPedagogico": "El amor real a veces tarda vidas en madurar, pero el espíritu guía nunca desiste de reunir a las almas afines.",
    "ConexionDoctrinal": ["Lazos Espirituales", "Isabel (como Espíritu)"],
    "NodosSimapticos": ["Isabel (como Espíritu)"]
  },
  "3462: Mayo 23 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Urgencia de 'Buscando a Dios'. Millones de espíritus escuchan las lecturas de Trincado y urgen la publicación de la obra por la necesidad de luz en ambos mundos.",
    "CitaInelutable": "Por millones lo han estado escuchando... Acábala pronto porque hace falta.",
    "EjemploPedagogico": "El libro es el pan que saciará el hambre de verdad tanto de los que están en la tierra como de los que están en el espacio.",
    "ConexionDoctrinal": ["Buscando a Dios (Doctrinal)", "Necesidad de Instrucción"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Voluntad Racional": {
    "Definición": "Facultad del espíritu que permite ejecutar acciones basadas en el dictado de la razón y la experiencia, evitando los impulsos ciegos del instinto o el fanatismo. Es la fuerza de constancia que caracteriza al trabajador de la Verdad.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesión del 1 de Mayo de 1911).",
    "Conexiones": ["Razón", "Experiencia", "Constancia"],
    "Obras": ["Filosofía Enciclopédica Universal", "Filosofía Austera Racional"]
  },
  "Isabel (como Espíritu)": {
    "Definición": "Entidad espiritual que en la historia fue conocida como la Reina Santa Isabel. En la Escuela de Trincado, se manifiesta despojada de sus títulos monárquicos y religiosos para actuar como protectora de almas, trabajando por el amor y la unión de las familias a través de los siglos.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesión del 21 de Mayo de 1911).",
    "Conexiones": ["Protección Espiritual", "Lazos de Familia", "Revisión de Actos"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  },
  "Multiplicación de Dones": {
    "Definición": "Ley espiritual que establece que el conocimiento, las facultades mediúmnicas y los dones del espíritu se incrementan y fortalecen únicamente cuando se ponen al servicio de los demás. Por el contrario, el egoísmo y la reserva de estos dones para beneficio propio resultan en su atrofia y disminución.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesión de Pedro Portillo, Mayo de 1911).",
    "Conexiones": ["Servicio Fraterno", "Progreso Espiritual", "Ley de Solidaridad"],
    "Obras": ["Filosofía Enciclopédica Universal", "El Espiritismo Estudiado"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos PURA CALIDAD 1:1 de Filosofía Enciclopédica Tomo 1 (Batch 6) y 3 términos sinápticos.');
