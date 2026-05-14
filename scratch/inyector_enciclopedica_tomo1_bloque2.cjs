const fs = require('fs');
const path = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-1_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "La Jerarquía de la Luz: Xavier, el Maestro": {
    "PilotoDeCoherencia": "Declara la supremacía espiritual de Francisco Xavier (protector de Trincado) sobre la figura de Jesús, afirmando que Xavier posee un grado más de perfección. Esto establece una escala de progreso infinito donde ningún espíritu es el límite. Define a Jesús como un hermano grande, pero no único ni divino en el sentido religioso.",
    "IdeasSecundarias": [
      "Francisco Xavier manda sobre millones de espíritus y es el guía directo de la Escuela.",
      "La idolatría a Jesús es un obstáculo que la razón fría de la filosofía debe remover.",
      "El Juez (Trincado) actúa bajo el poder de Xavier, que es el poder de la justicia en este plano."
    ],
    "CitasIneludibles": [
      "Francisco Xavier... tiene un grado de perfección más que Jesús.",
      "Jesús es grande, pero no es el más ni el único hijo de Dios.",
      "El misionero pertenece a todos."
    ]
  },
  "Fisiología del Espíritu: La Chispa Divina": {
    "PilotoDeCoherencia": "Define al espíritu como una chispa de la divinidad lanzada a la materia en el momento preciso de la concepción. Explica que la materia, al oponer resistencia, obliga al espíritu a desarrollar sus fuerzas psíquicas y su conciencia. Niega el pecado original, sustituyéndolo por la ley de transformación y progreso continuo.",
    "IdeasSecundarias": [
      "Al tomar materia, el espíritu pierde su inocencia pero gana experiencia.",
      "La gota de sangre no se pierde; se transforma y sirve a la ley de conservación universal.",
      "El progreso es eterno y la perfección absoluta solo pertenece al Padre (Eloí)."
    ],
    "CitasIneludibles": [
      "El espíritu es una chispa de la divinidad, lanzada en el momento preciso que debe tomar materia.",
      "la sabiduría consiste en sacar bien del mal.",
      "por el amor llegará a la perfección relativa de este mundo."
    ]
  },
  "Medicina Espiritual: Juan el Bautista y la Curación": {
    "PilotoDeCoherencia": "Establece a Juan el Bautista como Director Médico de la Escuela. Su doctrina dicta que toda enfermedad física es reflejo de un espíritu enfermo. El tratamiento consiste en magnetizar el espíritu para que este cure la materia. Se prohíbe el cobro o la puesta de precios por la salud, considerándola un derecho natural del hermano.",
    "IdeasSecundarias": [
      "Las enfermedades de castigo o expiación se alivian, pero deben cumplirse por ley de justicia.",
      "Las tres potencias curativas son: Teresa de Jesús, Juan el Bautista y María de Nazaret.",
      "La curación no hace milagros (no pone miembros que falten), sino que restablece la armonía magnética."
    ],
    "CitasIneludibles": [
      "Curamos al espíritu enfermo; cuando lo conseguimos, todo lo curamos.",
      "No te permitimos cobrar nada, ni poner precios.",
      "La curación será facultad especial que se dará bajo otras formas."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Bloque 2 de Filosofía Enciclopédica Universal Tomo 1 inyectado.');
