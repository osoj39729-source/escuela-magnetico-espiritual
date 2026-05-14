const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Filosofía Enciclopédica Universal Tomo 1 (Batch 14 - Claves 139 a 144)
const nuevosNodos = {
  "7792: Octubre 1º de 1911 - Posesión P. Portillo": {
    "PilotoDeCoherencia": "Posposición de la Carne. El camino de la revelación exige posponer los intereses de la carne a los del espíritu, permitiendo que la alegría de la luz gravite en el ser.",
    "CitaInelutable": "Estamos en camino de posponer la carne al espíritu, los pechos se hinchen de alegría, por la luz.",
    "EjemploPedagogico": "El espíritu es el jinete y la carne es el caballo; para llegar al destino, el jinete debe decidir el rumbo, no el apetito del animal.",
    "ConexionDoctrinal": ["Predominio del Espíritu", "Revelación de los Espíritus de Verdad"],
    "NodosSimapticos": ["Posposición de la Carne"]
  },
  "7870: Octubre 1º de 1911 (Hora 21) - Posesión M. P.": {
    "PilotoDeCoherencia": "Afinidad Terapéutica. Antulio se manifiesta para curar a Trincado, basando su eficacia en la afinidad espiritual y el tratamiento magnético familiar.",
    "CitaInelutable": "Me sometió a los mismos tratamientos de las curas anteriores... confesando que era afín conmigo.",
    "EjemploPedagogico": "La curación fluye mejor entre amigos que entre extraños; la afinidad es el puente por donde pasa la medicina del fluido.",
    "ConexionDoctrinal": ["Curación por Afinidad", "Tratamiento Magnético"],
    "NodosSimapticos": []
  },
  "7920: Octubre 3 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Pilar de Zaragoza (Realidad). El espíritu que la religión divinizó como 'Virgen del Pilar' aclara su verdadera identidad como un espíritu de elevación que guía a sus protegidos.",
    "CitaInelutable": "Soy la hermana Pilar de Zaragoza (no fui la virgen), fui un espíritu de alguna elevación.",
    "EjemploPedagogico": "La historia real es el rostro limpio; la leyenda religiosa es la máscara de yeso que oculta la belleza del espíritu.",
    "ConexionDoctrinal": ["Identidad de los Espíritus", "Crítica a la Idolatría"],
    "NodosSimapticos": ["Pilar de Zaragoza (como Espíritu)"]
  },
  "7948: Octubre 6 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Igualación de Fluidos. La manifestación de espíritus de alta potencia requiere que la materia del médium iguale sus fluidos para resistir la vibración.",
    "CitaInelutable": "Ese espíritu es tremendo y no hay materia que pueda resistirlo sin antes igualarle los fluidos.",
    "EjemploPedagogico": "No puedes conectar una bombilla de bajo voltaje a una línea de alta tensión sin un transformador que iguale la carga.",
    "ConexionDoctrinal": ["Mecánica de la Mediumnidad", "Fluidos"],
    "NodosSimapticos": ["Igualación de Fluidos"]
  },
  "7986: Septiembre 10 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Consuelo de los Espíritus. No solo los hombres necesitan de los espíritus, sino que estos también necesitan el consuelo y la compañía de sus hermanos encarnados.",
    "CitaInelutable": "También nosotros necesitamos consuelo; porque el amor es el que nos une.",
    "EjemploPedagogico": "El amor es un abrazo que se dan dos seres; si uno no abraza, el otro siente frío, sea espíritu o sea hombre.",
    "ConexionDoctrinal": ["Comunión de los Espíritus", "Afecto Universal"],
    "NodosSimapticos": []
  },
  "8011: Octubre 13 de 1911 - Posesión P. Portillo": {
    "PilotoDeCoherencia": "Hambre Espiritual. El sufrimiento del espíritu se manifiesta como un hambre de verdad y de comunicación que solo se sacia cuando llega la hora de la luz.",
    "CitaInelutable": "Con qué hambre (como en la tierra se dice) esperaba esta hora; eran tan grandes mis sufrimientos.",
    "EjemploPedagogico": "El saber es al alma lo que el pan al cuerpo; un alma sin verdad está desnutrida y débil.",
    "ConexionDoctrinal": ["Necesidad de Instrucción", "Sufrimiento Espiritual"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Posposición de la Carne": {
    "Definición": "Concepto ético-metafísico que instruye al ser humano a subordinar los deseos, instintos y necesidades puramente materiales (la carne) a los mandatos de la razón y el progreso espiritual. No implica mortificación, sino el dominio del espíritu sobre su instrumento físico.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Mensaje de Octubre de 1911).",
    "Conexiones": ["Dominio Propio", "Espíritu", "Materia"],
    "Obras": ["Filosofía Enciclopédica Universal", "Profilaxis de la Vida"]
  },
  "Pilar de Zaragoza (como Espíritu)": {
    "Definición": "Identidad espiritual real de quien fuera una mujer de cierta elevación moral en la historia de Zaragoza. La doctrina trincadista desmiente su carácter de 'Virgen María' o 'Aparición Divina', mostrándola como un espíritu que trabaja en la Ley y asiste a sus hermanos por afinidad.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesión del 3 de Octubre de 1911).",
    "Conexiones": ["Crítica a la Idolatría", "María de Nazareth", "Revisión Histórica"],
    "Obras": ["Filosofía Enciclopédica Universal", "Vida de María"]
  },
  "Igualación de Fluidos": {
    "Definición": "Proceso vibratorio necesario en la mediumnidad para que un espíritu de alta potencia o gran densidad pueda manifestarse a través de un cuerpo físico sin dañarlo. Consiste en armonizar las frecuencias magnéticas del espíritu comunicante con las del periespíritu del médium.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Advertencia de Juan Bautista, Octubre de 1911).",
    "Conexiones": ["Mediumnidad", "Magnetismo", "Fluidos"],
    "Obras": ["Filosofía Enciclopédica Universal", "El Espiritismo Estudiado"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 6 nodos PURA CALIDAD 1:1 de Filosofía Enciclopédica Tomo 1 (Batch 14) y 3 términos sinápticos.');
