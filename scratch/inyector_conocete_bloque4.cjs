const fs = require('fs');
const path = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "8513 al 10113: La Escalera del Progreso: De la Tribu a la Comuna": {
    "PilotoDeCoherencia": "Traza el camino evolutivo de la humanidad desde los primeros hombres autómatas hasta la organización social consciente. Explica que la necesidad y el dolor obligaron al hombre a unirse, creando la tribu y luego las naciones. Establece que la estabilidad social nació del cariño del hombre a las obras de sus manos y de la distribución racional del tiempo y el trabajo.",
    "IdeasSecundarias": [
      "El progreso es una fuerza fatal que empuja al hombre a descubrir su trinidad a través del esfuerzo propio.",
      "Las emigraciones y el encuentro de diferentes tribus forzaron el estudio de nuevas costumbres y lenguajes.",
      "La meta del progreso no es la acumulación, sino la fraternidad y el reconocimiento del Padre común."
    ],
    "CitasIneludibles": [
      "el progreso se adquiere por esfuerzo propio.",
      "la estabilidad de la tribu, por el beneficio y el cariño del hombre a las obras de sus manos.",
      "el dolor, el escarmiento, y... Santa necesidad, nos obligó a darnos la mano."
    ]
  },
  "12081 al 12384: Sentencia Final: Las Religiones son la Negación del Creador": {
    "PilotoDeCoherencia": "Emite la sentencia judicial-espiritual definitiva: las religiones, al adorar pasiones e ídolos y dividir a los hermanos, niegan al verdadero Creador. El Juez proclama que salvará a la humanidad hundiendo todos los dogmas y misterios que esclavizaron la conciencia. Declara que las religiones son el mayor estigma de los mundos en expiación.",
    "IdeasSecundarias": [
      "Adorar en 'espíritu y verdad' es lo opuesto a la idolatría religiosa que busca a Dios fuera del hombre.",
      "La religión romana es denunciada como sanguinaria por anteponer su defensa a la vida de la humanidad.",
      "El sacerdocio es el parásito de la ignorancia que retrasa el camino derecho del espíritu hacia su centro."
    ],
    "CitasIneludibles": [
      "Las religiones son la negación del creador.",
      "salvaré a la humanidad, a costa de hundir y reducir al no ser, a todas las religiones.",
      "las religiones sólo adoran las pasiones, mataron al espíritu y fueron idólatras."
    ]
  },
  "18581 al 19295: El Mundo Regenerado y la Comuna de Amor y Ley": {
    "PilotoDeCoherencia": "Celebra la victoria final del hombre que se conoce a sí mismo y descubre a Eloí en su propio espíritu. Define la Comuna como el régimen de libertad absoluta donde el hombre vive en los dos mundos (material y espiritual) en armonía. La Comuna no es desorganización, sino el orden supremo de la conciencia donde cada uno toma según sus necesidades particulares y aporta por amor voluntario.",
    "IdeasSecundarias": [
      "El hombre regenerado ya no teme al Creador, pues sabe que es todo amor porque él mismo ya ama.",
      "Se eliminan las leyes absurdas y fronteras que divorciaban al cuerpo del espíritu.",
      "La Comuna es el puerto de paz donde el espíritu salda sus cuentas de debe y haber de forma soberana."
    ],
    "CitasIneludibles": [
      "¡Te conoces a ti mismo, hombre! ... dentro de ti mismo está el incomprensible creador.",
      "tomas en libertad y justicia lo que antes por leyes absurdas te era prohibido.",
      "La comuna de amor y ley, conquistada sin violencias."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Bloque 4 de Conócete a ti mismo inyectado. Obra completada.');
