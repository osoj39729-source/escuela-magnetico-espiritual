const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "4336: CAPÍTULO CATORCE y 4377: Ley después del Tránsito de los Seres": {
    "PilotoDeCoherencia": "Establece la igualdad absoluta después de la desencarnación, prohibiendo mausoleos y distinciones de clase en los cementerios. La materia es respetada como herramienta ennoblecida por el espíritu, facilitando su transformación natural mediante la sepultura en fosa de tierra. Se reglamenta el velatorio racional (24 horas) con luz, flores y silencio para proteger el letargo del espíritu recién liberado.",
    "IdeasSecundarias": [
      "Las lágrimas de desahogo son naturales, pero los clamores y gritos mortifican al espíritu que aún oye.",
      "La defunción debe ser validada por un médium para asegurar la comprensión del estado psíquico del transitante.",
      "Se prohíben las autopsias innecesarias y las manipulaciones que causen padecimiento a espíritus aún apegados."
    ],
    "CitasIneludibles": [
      "Todos los seres, en la Comuna son iguales... iguales en la sepultura, sepelio y demás cosas.",
      "cementerios de la comuna no tendrán mausoleos, sepulcros o nichos... sepultados... en fosa, en tierra",
      "evocaciones al recién desencarnado son imprudentes, porque oye y aún no os puede contestar"
    ]
  },
  "4422: CAPÍTULO QUINCE: Decreto de Auxilio al Transitante": {
    "PilotoDeCoherencia": "Mandato de acompañamiento amoroso durante la agonía para facilitar el desprendimiento del espíritu. Se prohíbe la tristeza egoísta y se exige rodear al hermano de palabras de ánimo y miradas de afecto, recordándole su destino de luz y la presencia de sus guías espirituales.",
    "IdeasSecundarias": [
      "El objetivo es que el espíritu tome conciencia de su libertad desde el primer momento del tránsito.",
      "Se le debe hablar con amor sobre la necesidad de este acto para su progreso eterno.",
      "El último auxilio en la carne es un acto de justicia y solidaridad comunal."
    ],
    "CitasIneludibles": [
      "una vez entrado en la agonía, sólo palabras de ánimo y miradas amorosas le dirigiréis.",
      "animar al espíritu a desprenderse con dulzura y rapidez... ayuda y compañía de sus guías y afines espirituales."
    ]
  },
  "4756: CAPÍTULO DIECISÉIS y 4765: Pauta Histórica para Himnos y Cantos": {
    "PilotoDeCoherencia": "Define el arte como una facultad unida a la elevación espiritual para expresar las verdades de la cosmogonía de Sión. La música y la poesía en la Comuna deben ser hijas de la inspiración y vibrar en consonancia con el amor a Eloí, siendo herramientas de educación y progreso de la literatura universal.",
    "IdeasSecundarias": [
      "Los himnos son la síntesis de la verdad histórica emanada de los archivos de la cosmogonía (Sión).",
      "La poesía no es una profesión económica, sino una expresión de sabiduría que no excluye el trabajo material.",
      "La música debe buscar la alegría y el recogimiento, evitando juegos de palabras vacíos de sentimiento."
    ],
    "CitasIneludibles": [
      "cantos, himnos y plegarias... son la síntesis de la verdad histórica emanada de los archivos de la cosmogonía",
      "La música sea expresión de la letra en consonancia con las vibraciones del espíritu",
      "La poesía no es una profesión: es una facultad que va unida a la elevación de espíritu"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia del CAU Tomo II (Bloque 12) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Igualdad_Post_Mortem": {
    "palabras_clave": ["sepultura", "fosa", "cajón", "igualdad", "cementerio", "sin mausoleos", "transformación"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#4336: CAPÍTULO CATORCE y 4377: Ley después del Tránsito de los Seres"],
    "contexto_real": "Principio de humildad y respeto a la naturaleza que elimina las distinciones sociales tras el fin de la vida física."
  },
  "Auxilio_al_Transitante": {
    "palabras_clave": ["agonía", "auxilio", "desprendimiento", "ánimo", "guías", "amor", "palabras"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#4422: CAPÍTULO QUINCE: Decreto de Auxilio al Transitante"],
    "contexto_real": "Práctica de solidaridad espiritual que facilita el paso del espíritu al espacio en paz y conciencia."
  },
  "Arte_Vibratorio_Cosmogonico": {
    "palabras_clave": ["himnos", "cantos", "sión", "poesía", "vibración", "inspiración", "música"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#4756: CAPÍTULO DIECISÉIS y 4765: Pauta Histórica para Himnos y Cantos"],
    "contexto_real": "Uso de las artes para elevar la conciencia humana y sintonizarla con la armonía de los mundos superiores."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para el Tomo II.');
