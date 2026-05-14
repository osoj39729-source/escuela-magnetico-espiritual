const fs = require('fs');
const path = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

// Actualizar el nodo de Responsabilidad y Comuna
esencia["1683 al 1864: Responsabilidad Única del Espíritu"].IdeasSecundarias.push(
  "La Comuna es un régimen de orden y registro según el progreso lo indique, basado en la armonía de la Trinidad Humana."
);
esencia["1683 al 1864: Responsabilidad Única del Espíritu"].IdeasSecundarias.push(
  "El estado de conciencia del hombre trino impide la infracción de la ley, pero el espíritu sigue siendo el único responsable individual de cualquier daño que ocasione."
);

// Añadir un nuevo nodo específico sobre la Organización de la Comuna basado en el Prefacio/Prólogo
esencia["828 al 910: La Comuna: Organización de la Conciencia"] = {
  "PilotoDeCoherencia": "Define la Comuna no como un sistema desorganizado, sino como el régimen donde la Razón Eficiente y la Conciencia (Juez) operan en armonía. Establece que la Comuna mantiene registros y orden conforme al progreso, pero la soberanía del 'debe y haber' reside exclusivamente en el Espíritu. La solidaridad cubre la necesidad, pero no anula la responsabilidad individual.",
  "IdeasSecundarias": [
    "La Comuna es posible porque el espíritu ha demostrado su trinidad, equilibrando sus facultades.",
    "El orden administrativo es un byproduct de la razón; el espíritu es el contable de su propia evolución.",
    "La libertad en la Comuna es la capacidad de cumplir con el deber por conciencia, no por imposición externa."
  ],
  "CitasIneludibles": [
    "La Comuna de Amor y Ley, conquistada sin violencias.",
    "Sólo se es hombre en verdad, en el conocimiento de las entidades que lo componen.",
    "El espíritu es el único responsable de los actos del hombre."
  ]
};

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Conceptos de Comuna y Responsabilidad refinados en Conócete a ti mismo.');
