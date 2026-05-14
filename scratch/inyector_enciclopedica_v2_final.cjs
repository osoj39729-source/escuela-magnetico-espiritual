const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-2_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Filosofía Enciclopédica Universal Tomo 2 (Batch 7 - FINAL - Claves 77 a 90)
const nuevosNodos = {
  "8036: Marzo  26  de  1912  (Portillo) - Jesús  de  Nazaret.": {
    "PilotoDeCoherencia": "Derribo de la Cruz. Jesús se declara aliviado al ver su cruz dogmática derribada por el Maestro, reconociendo el fin de siglos de resignación ante el error.",
    "CitaInelutable": "Me siento aliviado de mi pesada cruz... derribada al fin por el que juró al Padre.",
    "EjemploPedagogico": "El prisionero que ve cómo por fin queman el uniforme de presidiario que le impusieron por un crimen que no cometió, recuperando su nombre de hombre libre.",
    "ConexionDoctrinal": ["Fin del Dogma", "Identidad Humana de Jesús"],
    "NodosSimapticos": []
  },
  "8195: Pidió entrada el Espíritu de una mujer... Adelaida Suxter": {
    "PilotoDeCoherencia": "Misericordia del Manto. María de Nazareth utiliza su fluido para cubrir la vergüenza de los espíritus arrepentidos, demostrando que la luz del amor protege incluso en el juicio.",
    "CitaInelutable": "Cuanta vergüenza... María le tendió su manto fluidico... ved como el Juez me ha cubierto.",
    "EjemploPedagogico": "Una madre que abraza a su hijo que vuelve sucio y avergonzado, poniéndole su propia capa para que entre en casa sin que nadie lo señale.",
    "ConexionDoctrinal": ["Manto Fluídico (Protección)", "Justicia con Amor"],
    "NodosSimapticos": ["Manto Fluídico (Protección)"]
  },
  "8316: Marzo 30 de 1912  (Portillo) - Yo,  Zakiammuni.": {
    "PilotoDeCoherencia": "Unidad de los Maestros. Siddhartha Gautama (Buda) reconoce la voz única del Padre (Eloí) tras el llamado estridente del juicio, unificando las grandes corrientes espirituales.",
    "CitaInelutable": "Se han oído dos llamados estridentes... pregoneros de Alá, de Budha y de Eloí.",
    "EjemploPedagogico": "Varios ríos que bajan de distintas montañas con nombres diferentes, pero que al llegar al valle se funden en el mismo mar inmenso del Padre.",
    "ConexionDoctrinal": ["Unidad de las Escuelas", "Justicia Universal"],
    "NodosSimapticos": []
  },
  "8457: Marzo 31 de 1912  (Portillo) - El  Juez.": {
    "PilotoDeCoherencia": "Rectificación de Colón. Cristóbal Colón reconoce su error al clavar la cruz en América, admitiendo que su intención de 'baluarte' se convirtió en un instrumento de división.",
    "CitaInelutable": "Yo fui el primero que clavo sobre esta tierra americana la cruz que en mi intención era un baluarte.",
    "EjemploPedagogico": "El sembrador que creía estar plantando trigo pero descubre que las semillas eran cizaña; hoy vuelve para ayudar a limpiar el campo de la américa que amó.",
    "ConexionDoctrinal": ["Justicia Trans-Encarnatoria", "Historia Real de América"],
    "NodosSimapticos": ["Justicia Trans-Encarnatoria"]
  },
  "8601: Marzo  31  de  1912  Hora  20  (Portillo) - El Espíritu de Verdad   Xavier.": {
    "PilotoDeCoherencia": "Sello del Programa Final. El Espíritu de Verdad (Xavier) aprueba el plan de sentencia del Maestro Trincado, validando la autoridad humana en la ejecución del juicio espiritual.",
    "CitaInelutable": "-- El programa que tengo trazado, para el día de la sentencia; ¿está conforme? -- Heme aquí.",
    "EjemploPedagogico": "El arquitecto que firma los planos finales que el capataz ha dibujado, dándole el permiso para poner el sello de 'obra terminada'.",
    "ConexionDoctrinal": ["Jerarquía de Xavier", "Sentencia del 5 de Abril"],
    "NodosSimapticos": []
  },
  "8863: Abril  2  de  1912 - APENDICE  DE  GRAN  INTERES": {
    "PilotoDeCoherencia": "Reencarnación de Concepción Arenal. Se revela que la niña Estrella es la reencarnación de la reformadora Concepción Arenal, protegida del odio de espíritus que se oponían a su luz.",
    "CitaInelutable": "El espíritu que anima el cuerpo de esta niña es el que fue la gran Concepción de Arenales.",
    "EjemploPedagogico": "Una flor delicada que vuelve a brotar en un campo de espinas; los vientos intentan arrancarla, pero el jardinero la protege con un muro invisible de amor.",
    "ConexionDoctrinal": ["Misión Reencarnatoria", "Protección del Misionero"],
    "NodosSimapticos": []
  },
  "9009: Domingo  30  de  Marzo  de  1930 - D A V I D.": {
    "PilotoDeCoherencia": "Grandeza del Espiritismo. El rey David cierra el ciclo de juicios en 1930, reafirmando que el Espiritismo es la grandeza que sostiene la libertad del alma.",
    "CitaInelutable": "Espititismo que es la grandeza de todos los tiempos.",
    "EjemploPedagogico": "El veterano guerrero que guarda su espada y señala que la verdadera victoria no es la de la fuerza, sino la de la luz que ilumina la mente de los hombres.",
    "ConexionDoctrinal": ["Triunfo del Espiritismo", "Justicia Histórica"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Manto Fluídico (Protección)": {
    "Definición": "Envoltura de fluidos de alta vibración proyectada por espíritus de luz (especialmente María de Nazareth) para resguardar el periespíritu de entidades que comparecen ante el juicio con gran vergüenza o debilidad. Funciona como un escudo de amor que permite la justificación sin el tormento de la exposición total a la mirada de los otros.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 2 (Juicio a las monjas disidentes).",
    "Conexiones": ["Periespíritu", "Justicia con Amor", "Misericordia"],
    "Obras": ["Filosofía Enciclopédica Universal", "Vida de María"]
  },
  "Justicia Trans-Encarnatoria": {
    "Definición": "Axioma que establece que las deudas morales y las responsabilidades históricas de los grandes personajes no se borran con la muerte ni con la fama terrestre. Cada espíritu debe responder por sus obras en el espacio y, frecuentemente, reencarnar en condiciones humildes o específicas (como Colón o Concepción Arenal) para rectificar sus errores o comprobar el progreso de su obra.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 2 (Casos de Colón, Sum Puchap y Concepción Arenal).",
    "Conexiones": ["Juicio Universal", "Reencarnación", "Justicia de la Ley"],
    "Obras": ["Filosofía Enciclopédica Universal", "El Espiritismo en su Asiento"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ ¡OBRA COMPLETADA! Inyectados últimos 7 nodos de Filosofía Enciclopédica Tomo 2 y 2 términos finales.');
