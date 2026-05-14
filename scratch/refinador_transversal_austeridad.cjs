const fs = require('fs');

const files = [
  'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json',
  'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json',
  'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json',
  'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json'
];

files.forEach(path => {
  if (!fs.existsSync(path)) return;
  let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

  for (let key in esencia) {
    let node = esencia[key];
    if (node.PilotoDeCoherencia) {
      node.PilotoDeCoherencia = node.PilotoDeCoherencia
        .replace(/Impone/g, 'Establece como necesidad unificadora')
        .replace(/imponer/g, 'establecer como necesidad')
        .replace(/Prohíbe/g, 'Declara incompatible con la armonía')
        .replace(/prohibe/g, 'declara incompatible')
        .replace(/castigo/g, 'consecuencia natural de desarmonía')
        .replace(/Castigo/g, 'Auto-exclusión por desarmonía')
        .replace(/dicta/g, 'sentencia por ley natural')
        .replace(/Dicta/g, 'Sentencia por ley natural')
        .replace(/obliga/g, 'conduce por ley de causa y efecto')
        .replace(/Obliga/g, 'Conduce por ley de causa y efecto')
        .replace(/mandato/g, 'principio de orden natural')
        .replace(/Mandato/g, 'Principio de orden natural');
    }
    if (node.IdeasSecundarias) {
      node.IdeasSecundarias = node.IdeasSecundarias.map(idea => 
        idea.replace(/prohibición/g, 'incompatibilidad con la armonía')
            .replace(/castigo/g, 'consecuencia de la desarmonía')
            .replace(/obliga/g, 'conduce naturalmente')
            .replace(/impuesta/g, 'necesaria por ley de afinidad')
      );
    }
  }

  fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
});

console.log('Refinamiento Transversal finalizado: Limpieza de sesgos despóticos y sentimentales completada en los 4 pilares.');
