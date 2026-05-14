const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

// Inicializando esencia para Código de Amor T1
let esencia = {
  "METADATA": {
    "obra": "Código de Amor Universal - Tomo 1",
    "autor": "Joaquín Trincado",
    "estandar": "RE-DESTILACIÓN PURA 1:1 (Juez Amoroso)",
    "descripcion": "Cuerpo legislativo del Espiritismo Luz y Verdad. Contiene las leyes fundamentales del Universo, la Proclama de la Comuna Universal y los fundamentos de la Era de la Verdad."
  }
};

let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Batch 1 - Código de Amor Universal Tomo 1 (Claves 0 a 14)
const nuevosNodos = {
  "422: P R E S E N T A C I Ó N": {
    "PilotoDeCoherencia": "Legislación Universal. El Código de Amor no es solo un libro, es el cuerpo de leyes que debe regir a la humanidad en su mayoría de edad espiritual.",
    "CitaInelutable": "Esta edición debería ser la última que se pública separadamente... plasmando en el papel estas líneas.",
    "EjemploPedagogico": "Es la Constitución Nacional de la Tierra, redactada no por políticos, sino por las leyes naturales del espíritu.",
    "ConexionDoctrinal": ["Derecho Universal", "Misión Legislativa"],
    "NodosSimapticos": []
  },
  "483: Premisa al: ——— § ———": {
    "PilotoDeCoherencia": "Ley de Transformación. Trincado relata cómo su espíritu regresó a la materia tras una aparente muerte a los 23 años para cumplir la misión encomendada por la ley.",
    "CitaInelutable": "Debía devolverle a la madre tierra sus moléculas, y sólo por una ley de transformación... [regresé].",
    "EjemploPedagogico": "El obrero que deja su herramienta al final del día creyendo haber terminado, pero el arquitecto le pide un esfuerzo más para salvar el edificio.",
    "ConexionDoctrinal": ["Reincorporación Espiritual", "Misión de Trincado"],
    "NodosSimapticos": []
  },
  "772: PROCLAMA: El Universo, Solidarizado. El Mundo todo, Comunizado.": {
    "PilotoDeCoherencia": "Axioma de la Comuna. El fin último de la evolución es la solidaridad cosmogónica y la vida en comuna universal en la tierra.",
    "CitaInelutable": "El Universo, Solidarizado. El Mundo todo, Comunizado.",
    "EjemploPedagogico": "Un engranaje que por fin encaja perfectamente en el motor del universo, haciendo que toda la máquina funcione sin fricciones.",
    "ConexionDoctrinal": ["Comunismo Espiritual", "Solidaridad Cosmogónica"],
    "NodosSimapticos": ["Comunismo Espiritual"]
  },
  "775: La Ley es Una; La Sustancia Una.": {
    "PilotoDeCoherencia": "Unidad de la Sustancia. Todo lo existente proviene de un solo principio y tiende a un solo fin; la diversidad es solo grado de la misma ley única: Amor.",
    "CitaInelutable": "La Ley es Una; La Sustancia Una. Uno es el principio Uno es el fin. Todo es Magnetismo Espiritual.",
    "EjemploPedagogico": "Miles de gotas de agua, hielo y vapor; todos parecen distintos, pero todos son la misma sustancia H2O bajo diferentes estados de calor.",
    "ConexionDoctrinal": ["Sustancia Única", "Magnetismo Espiritual"],
    "NodosSimapticos": []
  },
  "799: “Siempre más allá”: El Maestro-Juez por el Maestro Superior": {
    "PilotoDeCoherencia": "Era de la Verdad. La datación oficial de la Escuela marca el inicio del reinado del espíritu y el fin de la 'Era Apócrifa' clerical.",
    "CitaInelutable": "Día 1, Mes 1, Año 24. Era de la Verdad.",
    "EjemploPedagogico": "Poner el reloj a cero después de una larga noche de pesadilla; el primer rayo de sol marca la hora real del día.",
    "ConexionDoctrinal": ["Era de la Verdad (Cronología)", "EMECU"],
    "NodosSimapticos": ["Era de la Verdad (Cronología)"]
  },
  "811: Código de Amor UniversAl: Máximun de la Ley del Padre": {
    "PilotoDeCoherencia": "Unidad de la Familia Humana. El Código es el máximo instrumento para unificar a los hombres en una sola familia solidaria con el cosmos.",
    "CitaInelutable": "Máximun de la Ley del Padre para la unidad de los hombres de la tierra en una sola familia.",
    "EjemploPedagogico": "La carta de amor de un padre que escribe a sus hijos peleados para que se den la mano y reconozcan que todos viven en la misma casa.",
    "ConexionDoctrinal": ["Familia Universal", "Solidaridad Cosmogónica"],
    "NodosSimapticos": []
  },
  "1046: CRIMINALES ANTE LA LEY DEL DERECHO DE VIDA.": {
    "PilotoDeCoherencia": "Misericordia en la Separación. Los espíritus retrógrados no son castigados con el fin, sino apartados por ley de afinidad para su propia curación.",
    "CitaInelutable": "Al ser separados los retrógrados, no son desheredados, ni destruidos; son hijos del mismo padre.",
    "EjemploPedagogico": "El enfermo contagioso que es llevado a un hospital; no es para castigarlo, sino para que reciba el tratamiento que su estado requiere sin dañar a los sanos.",
    "ConexionDoctrinal": ["Justicia de la Ley", "Lazareto de Mundos (Justicia)"],
    "NodosSimapticos": ["Lazareto de Mundos (Justicia)"]
  },
  "1054: PÍRITU NACE PARA NUNCA MÁS MORIR Y SIEMPRE PROGRESAR...": {
    "PilotoDeCoherencia": "Eternidad del Progreso. El espíritu es inmortal y su destino es el ascenso constante; incluso en el lazareto, el fin es el progreso.",
    "CitaInelutable": "Espíritu nace para nunca más morir y siempre progresar y siempre ascender.",
    "EjemploPedagogico": "Una semilla que puede caer en terreno pedregoso y tardar más, pero su naturaleza es siempre buscar la luz y crecer hacia arriba.",
    "ConexionDoctrinal": ["Inmortalidad del Espíritu", "Ley de Progreso"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Era de la Verdad (Cronología)": {
    "Definición": "Sistema cronológico instaurado por Joaquín Trincado que marca el inicio de la regeneración humana con la fundación de la EMECU en 1911. Sustituye a la 'Era Apócrifa' o cristiana, simbolizando el paso de la oscuridad dogmática a la luz de la razón y el magnetismo espiritual.",
    "Contexto": "Código de Amor Universal Tomo 1 (Proclama de 1934).",
    "Conexiones": ["EMECU", "Justicia Universal", "Joaquín Trincado"],
    "Obras": ["Código de Amor Universal", "Filosofía Enciclopédica Universal"]
  },
  "Lazareto de Mundos (Justicia)": {
    "Definición": "Metáfora para referirse a los mundos primitivos o de transición donde son destinados los espíritus que, tras el Juicio Final, no son aptos para la vida en la Tierra regenerada. Su estancia allí no es un castigo eterno, sino una etapa de curación moral y trabajo obligatorio para lavar sus culpas.",
    "Contexto": "Código de Amor Universal Tomo 1 (Prólogo a la Tierra).",
    "Conexiones": ["Juicio Final", "Expiación", "Mundos Primitivos"],
    "Obras": ["Código de Amor Universal", "Buscando a Dios"]
  },
  "Escuela Esénica de Moisés (Raíz)": {
    "Definición": "Origen histórico y espiritual de la doctrina trincadista. La EMECU se proclama como la reapertura de la Escuela de los Esenios, manteniendo la pureza de la ley de Moisés sin las deformaciones introducidas por el sacerdocio posterior.",
    "Contexto": "Código de Amor Universal Tomo 1 (Premisa de la obra).",
    "Conexiones": ["Moisés", "Esenios", "EMECU"],
    "Obras": ["Código de Amor Universal", "El Espiritismo en su Asiento"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Iniciada RE-DESTILACIÓN 1:1 de Código de Amor Tomo 1 (Batch 1, 8 nodos) y 3 términos sinápticos.');
