const fs = require('fs');

const files = [
  'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json',
  'F:/trincado/public/data/contents/los-cinco-amores_esencia.json'
];

files.forEach(path => {
  if (!fs.existsSync(path)) return;
  let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

  for (let key in esencia) {
    if (key.includes("Trabajo") || key.includes("Justicia Racional")) {
      let node = esencia[key];
      node.PilotoDeCoherencia = node.PilotoDeCoherencia
        .replace(/quien se aparta del esfuerzo creativo, se desarmoniza con el sustento común y se priva a sí mismo del banquete de la vida/g, 
                 'el espíritu es el único responsable de sus actos; quien persiste en el parasitismo desarmoniza con la ley de la mayoría y se convierte en deudor de la Creación. Si no corrige su tendencia en la existencia presente, la justicia espiritual decreta su transmigración a mundos de inferior progreso donde su desarmonía no estorbe la marcha de la Comuna');
      
      node.IdeasSecundarias.push("El derecho al usufructo es la máxima para el espíritu que cumple con la ley de trabajo y armonía.");
      node.IdeasSecundarias.push("La transmigración es la solución natural de la ley para los espíritus recalcitrantes en el error y la ociosidad.");
    }
  }

  fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
});

console.log('Rectificación de la Sentencia del Trabajo y Transmigración integrada en Tomo 2 y Los Cinco Amores.');
