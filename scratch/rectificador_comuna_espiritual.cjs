const fs = require('fs');

const files = [
  'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json',
  'F:/trincado/public/data/contents/los-cinco-amores_esencia.json',
  'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json'
];

files.forEach(path => {
  if (!fs.existsSync(path)) return;
  let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

  for (let key in esencia) {
    if (key.includes("Comuna") || key.includes("Trabajo") || key.includes("Justicia Racional")) {
      let node = esencia[key];
      
      // Rectificar la fórmula de la Comuna
      node.PilotoDeCoherencia = node.PilotoDeCoherencia
        .replace(/a cada cual según su necesidad, de cada cual según su capacidad y amor/g, 'a cada cual según sus necesidades particulares')
        .replace(/a cada cual según su necesidad, de cada cual según sus obras/g, 'a cada cual según sus necesidades particulares');
      
      node.IdeasSecundarias = node.IdeasSecundarias.map(idea => {
        if (idea.includes("necesidad") && idea.includes("capacidad")) {
          return "La Comuna entrega a cada hermano según sus necesidades particulares, confiando en la voluntariedad del trabajo como acto de amor.";
        }
        return idea;
      });

      node.IdeasSecundarias.push("El espíritu es el único contable de su progreso; él lleva la cuenta de su debe y haber ante la Creación a través de las existencias.");
      node.IdeasSecundarias.push("El desequilibrio entre consumo y producción en una existencia es una deuda espiritual que se salda por ley de afinidad en el tiempo eterno.");
    }
  }

  fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
});

console.log('Rectificación de la Ley de la Comuna e integrada Contabilidad Espiritual en esencias clave.');
