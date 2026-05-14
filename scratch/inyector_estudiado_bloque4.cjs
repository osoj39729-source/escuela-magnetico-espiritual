const fs = require('fs');
const path = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "9682 al 12526: Fenomenología Racional: El Desdoblamiento Estratégico": {
    "PilotoDeCoherencia": "Explica los fenómenos espirituales (videncia, posesión, desdoblamiento) como funciones mecánicas y legales del espíritu. Destaca el desdoblamiento como una herramienta del Gobierno del Espiritismo, permitiendo a los misioneros encarnados atender llamados colectivos de socorro y justicia en cualquier punto del planeta durante el sueño del cuerpo.",
    "IdeasSecundarias": [
      "El querer mayoritario de un pueblo evoca por ley al espíritu protector, quien adquiere representación ante los consejos superiores.",
      "El desdoblamiento es un acto de potencia que une la necesidad material con el auxilio espiritual.",
      "La videncia real es imposible sin un grado de desdoblamiento que permita al espíritu observar fuera de las limitaciones del ojo físico."
    ],
    "CitasIneludibles": [
      "el desdoblamiento es un acto de la potencia del espíritu.",
      "el espíritu llamado... está obligado a acudir y llevar el mensaje.",
      "son disposiciones del gobierno del espiritismo."
    ]
  },
  "12527 al 13339: Los Detractores: El Polo Negativo del Progreso": {
    "PilotoDeCoherencia": "Define a los detractores como las fuerzas regresivas que, por miedo o interés, se oponen a la luz del Espiritismo. Los sitúa como 'polos negativos' necesarios cuya oposición termina por confirmar la verdad. Sentencia que el progreso es un rodillo inmenso que igualará a detractores y adeptos en la ley del trabajo.",
    "IdeasSecundarias": [
      "Los detractores temen la pérdida de sus privilegios basados en la ignorancia y el dogma.",
      "La calumnia es el arma de los impotentes ante la majestad de los principios axiomáticos.",
      "Al final del juicio de mayoría, los detractores morosos serán desterrados para aprender en mundos inferiores lo que aquí rechazaron."
    ],
    "CitasIneludibles": [
      "los detractores... cada día son menos.",
      "el progreso... como inmenso y eterno rodillo, pasa igualándolo todo.",
      "¡Basta de engaños, señores verdugos del pueblo!"
    ]
  },
  "13391 al Final: Conclusión: La Comuna como Único Puerto": {
    "PilotoDeCoherencia": "Cierra la obra reafirmando que el Espiritismo Luz y Verdad es el único camino hacia la Comuna Universal. Proclama el fin del reinado de la materia y sus dioses de vergüenza, dando paso al gobierno del Espíritu donde solo el Amor es la Ley. Exhorta al trabajador a no odiar, sino a derribar el trono de la plutocracia mediante el hombro solidario.",
    "IdeasSecundarias": [
      "La Comuna de Amor y Ley es la meta final de la evolución humana en la Tierra.",
      "Negar elementos de vida a la religión es el arma más eficaz para su sepultura definitiva.",
      "El mundo regenerado vive en paz bajo un solo credo y una sola bandera de fraternidad."
    ],
    "CitasIneludibles": [
      "Hoy gobierna el Espíritu, con su Padre el Creador, y sólo el amor es la ley.",
      "¡Abajo para siempre y en verdad las armas!",
      "La Comuna de Amor y Ley... única Ley del Espiritismo."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Bloque 4 de El Espiritismo Estudiado inyectado. Obra completada.');
