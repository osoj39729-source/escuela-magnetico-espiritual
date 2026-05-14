const fs = require('fs');
const path = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "1442 al 1615: Enemigos y Detractores: El Espiritualismo": {
    "PilotoDeCoherencia": "Declara que el Espiritismo no tiene enemigos reales, pues el mal no tiene forma en la ley eterna. Identifica a los detractores (religiones y espiritualismo) como conglomerados de pasiones irracionales que temen la luz de la verdad. Denuncia al Espiritualismo como una forma cobarde de detracción que, amparándose en el nombre del Espiritismo, intenta conciliar la ciencia con el dogma religioso.",
    "IdeasSecundarias": [
      "El espiritualismo es la antesala de la religión y la negación de la acción del espíritu.",
      "La lucha de los 29 misioneros ha sido contra billones de detractores que defendían sus dioses de barro.",
      "La calumnia es el arma del vil que no puede resistir la luz del día."
    ],
    "CitasIneludibles": [
      "el espiritualismo... se ampara hipócritamente en el Espiritismo, para así dar el zarpazo a mansalva.",
      "No hay enemigos del espiritismo... pero sí hay detractores, mistificadores, calumniadores.",
      "Anticristo en los secretos de la justicia, dice Verdad descubierta."
    ]
  },
  "1616 al 1795: Médiums: Pararrayos y Misioneros": {
    "PilotoDeCoherencia": "Define al médium como un pararrayos biológico que recoge las vibraciones del ambiente. Establece que la responsabilidad de un médium equivale a la de diez mil hombres, dada su posición como puente entre mundos. Desmitifica la locura, explicando que es solo la perturbación del espíritu que no logra someter a su animal (cuerpo/alma) por falta de disciplina o prejuicio.",
    "IdeasSecundarias": [
      "Los médiums nacen, no se hacen; cualquier provocación artificial es superchería.",
      "El médium debe ser un instrumento neutro y educado, evitando la vanidad y el orgullo que atraen al detractor.",
      "La locura se cura desarrollando la facultad y sometiendo los instintos a la razón del espíritu."
    ],
    "CitasIneludibles": [
      "lo mismo que el pararrayos sobre una altura... es un médium entre los hombres.",
      "el médium tiene responsabilidades... como diez mil hombres del mundo en que actúa.",
      "la locura no existe; pero si existe la perturbación del espíritu."
    ]
  },
  "1796 al 1995: Comunicaciones: El Derecho de los Espíritus": {
    "PilotoDeCoherencia": "Establece como obligación ineludible que el espíritu se comunique en los mundos para demostrar la vida continuada. Exige que todo espíritu se identifique con su nombre real (de alguna de sus existencias) para asumir la responsabilidad de su palabra. Proclama la máxima: 'Hablen los médiums y razonen los hombres' para guiar las asambleas de estudio.",
    "IdeasSecundarias": [
      "El espíritu que se encubre es porque teme la luz o elude su responsabilidad ante la justicia.",
      "La comunicación espiritual es el consuelo en la verdad y el motor del progreso científico-metafísico.",
      "El médium de posesión no debe discutir como hombre, sino servir de canal para la sentencia espiritual."
    ],
    "CitasIneludibles": [
      "Se acabaron las discusiones y empiezan los razonamientos; hablen los médiums y razonen los hombres.",
      "aquel comunicante que se encubre, es porque quiere eludir responsabilidades, o no puede resistir la luz.",
      "la comunicación... es la razón de su existencia (del espíritu)."
    ]
  },
  "1996 al 2489: Mal Uso, Beneficios y Obligaciones": {
    "PilotoDeCoherencia": "Advierte sobre las graves consecuencias de convertir las sesiones en centros de consulta material o curiosidad banal. El beneficio del Espiritismo es la liberación de la conciencia y la salud del alma por el discernimiento. Obliga a todo espiritista a ser un obrero del progreso, a estudiar sin descanso y a defender la verdad con el ejemplo de una moral completa.",
    "IdeasSecundarias": [
      "El mal uso de la facultad atrae a los 'negros de hollín' y provoca la desarmonía de los círculos.",
      "La mayor caridad es enseñar la verdad al ignorante para que se liberte a sí mismo.",
      "El Espiritismo obliga a la fraternidad real y al reconocimiento de un solo Padre: Eloí."
    ],
    "CitasIneludibles": [
      "el espiritismo lo es todo... solidaridad (necesaria para la armonía del gobierno del Creador).",
      "el beneficio... es la salud del alma por el discernimiento del Espíritu.",
      "defender los principios del Espiritismo Luz y Verdad... sin leerlas, no podéis conocerlas."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Bloque 2 de El Espiritismo en su Asiento inyectado.');
