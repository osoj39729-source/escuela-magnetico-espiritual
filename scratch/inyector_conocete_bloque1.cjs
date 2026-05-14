const fs = require('fs');
const path = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';

const esencia = {
  "523 al 564: Premisa: El Alimento del Espíritu": {
    "PilotoDeCoherencia": "Declara que este libro es el 'máximo alimento del espíritu', escrito para que el hombre comprenda su propio ser tras haber sido preparado por las ocho obras anteriores. Define la Institución como la base de la unidad fraternal humana, estableciendo que no hay punto de la vida (físico, metafísico o social) que no tenga solución en el Espiritismo Luz y Verdad.",
    "IdeasSecundarias": [
      "El libro esperó once años en archivo para que la conciencia humana estuviera lista.",
      "Separa definitivamente los bandos: Espiritistas (Racionalistas) vs Espiritualistas (Religiosos).",
      "La meta es la unidad de la familia humana en una sola gran familia universal."
    ],
    "CitasIneludibles": [
      "No hay un punto de la vida... que no tenga solución en el espiritismo Luz y Verdad.",
      "conócete a ti mismo... para la justa comprensión del hombre.",
      "la unidad de toda la familia humana será pronto un hecho."
    ]
  },
  "989 al 1095: ¿Qué es la Vida? El Espíritu como Único Agente": {
    "PilotoDeCoherencia": "Sentencia de forma absoluta que 'La vida es el espíritu'. Desmiente a filósofos y científicos que atribuyen la vida a la sangre o al alma. Establece que la vida se demuestra en los tres reinos (mineral, vegetal, animal) por el movimiento y la procreación, pero que su raíz única es el Magnetismo Espiritual que todo lo llena.",
    "IdeasSecundarias": [
      "El alma y la sangre son solo conductores o depósitos, no la causa de la vida.",
      "El éter es el asiento de la vida universal donde todo se modifica y progresa.",
      "No existe la muerte; lo que el hombre llama muerte es solo el desenlace de la máquina material."
    ],
    "CitasIneludibles": [
      "¿Qué es la vida? La vida es el espíritu.",
      "el espíritu único e increado, todo lo llena y en él viven todas las cosas.",
      "Nada hay irracional en la ley divina, de la que toda vida depende."
    ]
  },
  "1254 al 1415: Vida Racional vs Vida Natural": {
    "PilotoDeCoherencia": "Diferencia la vida racional (exclusiva del hombre/espíritu) de la vida natural (instinto de los otros reinos). El raciocinio es la facultad del espíritu para regir la creación y ser co-creador con el Padre. Establece que el espíritu extrae la esencia de la materia para formar formas y bellezas, cumpliendo su mandato eterno.",
    "IdeasSecundarias": [
      "Los animales tienen cuerpo y alma, pero no espíritu (raciocinio).",
      "El espíritu es la voluntad ejecutora del Creador y el éter su pensamiento eterno.",
      "El hombre es hombre solo por el espíritu; sin él, es un animal inferior."
    ],
    "CitasIneludibles": [
      "la vida verdadera es la vida racional... es del espíritu en el hombre.",
      "el espíritu es la voluntad ejecutora del creador y el éter, su eterno pensamiento.",
      "el espíritu es consubstancial y coeterno con su padre el creador."
    ]
  },
  "1416 al 1591: El Alma: Materia Sensible y Temporaria": {
    "PilotoDeCoherencia": "Define al alma como materia refinada, sensible pero irresponsable e irracional. El alma es temporaria como individualidad hasta que el espíritu la toma para su forma individual eterna. Desmiente el dogma religioso que otorga al alma la inteligencia, devolviendo esa facultad exclusivamente al espíritu.",
    "IdeasSecundarias": [
      "El alma es el fruto más adelantado del 'árbol naturaleza', pero sigue siendo materia.",
      "La luz del alma no es propia, es el reflejo del espíritu que la habita.",
      "El alma se forma de las esencias filtradas de los tres reinos a través de las evoluciones."
    ],
    "CitasIneludibles": [
      "El alma humana... sólo tiene vida natural; no es inteligente, pero sí sensible.",
      "el alma será siempre materia, por más que pueda alumbrar más que un sol.",
      "el alma es temporaria, porque tiene principio en cada especie."
    ]
  },
  "1683 al 1864: Responsabilidad Única del Espíritu": {
    "PilotoDeCoherencia": "Establece que el Espíritu es el ÚNICO responsable de los actos del hombre, pues es quien elige el plan, los materiales (cuerpo/alma) y los progenitores. El cuerpo y el alma son herramientas irresponsables que sufren o gozan por reflexión de los actos del espíritu. La lucha entre el espíritu y el alma (instintos) es lo que genera el progreso o la deuda espiritual.",
    "IdeasSecundarias": [
      "El espíritu traza su plan de existencia y pide permiso al Maestro antes de encarnar.",
      "El sufrimiento es del espíritu; alma y cuerpo solo lo sienten por vibración material.",
      "Corregir un defecto del alma puede tomar cientos de existencias de lucha constante."
    ],
    "CitasIneludibles": [
      "Sólo el espíritu es responsable de los actos de los hombres.",
      "el cuerpo y el alma son herramientas del espíritu.",
      "El espíritu forma su plan... elige los materiales, el terreno y los instrumentos."
    ]
  }
};

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Bloque 1 de Conócete a ti mismo inyectado.');
