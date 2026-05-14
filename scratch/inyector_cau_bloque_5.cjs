const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "1929: “conócete a ti mismo”.": {
    "PilotoDeCoherencia": "El hombre es el fin supremo de la creación universal. Su aparición no fue un acto mágico de barro y costillas, sino el resultado de la ley de afinidad que reunió millones de seres humanos simultáneamente en todo el globo tras la estabilización planetaria. No existió una sola pareja original, sino millones de 'Adanes y Evas'.",
    "IdeasSecundarias": [
      "El cuerpo humano es la síntesis de todos los componentes de los reinos de la naturaleza.",
      "Las religiones ridiculizan al Creador con mitos quirúrgicos e irracionales.",
      "La procreación es la ley máxima que permite al espíritu manifestarse en la materia."
    ],
    "CitasIneludibles": [
      "el fin de toda la creación de todo los mundos, el hombre es.",
      "no fue... una sola pareja, sino por millones juntas y en todas partes sólidas del globo."
    ]
  },
  "2031: Párrafo iii: la Procreación es ley Universal": {
    "PilotoDeCoherencia": "La procreación es el fin primordial de la vida y su motor es el amor desinteresado. La naturaleza utiliza el aumento de población y la emigración para forzar la ruptura de las fronteras geográficas y raciales, uniendo a la humanidad mediante el intercambio de ideas, afectos y trabajo.",
    "IdeasSecundarias": [
      "La grandeza de un pueblo está en proporción directa a su población y capacidad de intercambio.",
      "La afinidad y la justicia regulan el crecimiento poblacional para el bien comunal.",
      "El hombre que crea familia en un país extranjero disuelve el odio nacionalista en su propio corazón."
    ],
    "CitasIneludibles": [
      "La procreación es el fin primordial de las creaciones parciales de los mundos y de la creación universal; su acicate, es el amor; su freno, la afinidad.",
      "la naturaleza... tiende a romper las fronteras geográficas; y cuando por éste medio no lo consigue, promueve la emigración"
    ]
  },
  "2142: Párrafo i: la Unión de los seres ha de ser por Amor": {
    "PilotoDeCoherencia": "El matrimonio regulado por dogmas, cánones y conveniencias sociales es una mordaza a la libertad del espíritu y la fuente de crímenes y suicidios morales. La única unión legítima ante el Creador es la que nace del amor puro y el reconocimiento mutuo de las leyes de afinidad.",
    "IdeasSecundarias": [
      "Los legisladores han ignorado la fisiología y el sentimiento humano por seguir prejuicios de casta.",
      "La tiranía social obliga a la infidelidad y al desconcierto al prohibir la libertad de amar.",
      "La procreación sin amor desequilibra las leyes divinas de igualdad y libertad."
    ],
    "CitasIneludibles": [
      "Desde que el matrimonio es sujeto a leyes... no hay felicidad en la humanidad.",
      "los cánones son una mordaza, a la libertad del espíritu, las costumbres sociales... causan infinitos crímenes"
    ]
  },
  "2294: Párrafo ii: situación de la mujer unida sin amor. sus efectos": {
    "PilotoDeCoherencia": "La mujer ha sido esclavizada por leyes egoístas y prejuicios religiosos que la tratan como un mueble o juguete. Unirla sin amor es un crimen que mata el sentimiento del alma. Trincado reivindica la absoluta libertad de la mujer para amar y decidir sobre su destino, en igualdad total con el hombre.",
    "IdeasSecundarias": [
      "La frialdad en la unión forzada causa el desvío y la infelicidad de ambos compañeros.",
      "La educación religiosa en la mentira obliga a la mujer a suicidarse moralmente.",
      "La naturaleza impone el sentimiento como una ley que nadie puede burlar sin graves consecuencias."
    ],
    "CitasIneludibles": [
      "A la mujer no se la ha estudiado... se la ha figurado un mueble de su capricho",
      "se la obliga a suicidarse moralmente siempre... a la mujer se le prohíbe la santa libertad de amar a lo que su corazón ama"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia del CAU Tomo I (Bloque 5) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Aparicion_Simultanea_Humana": {
    "palabras_clave": ["creación", "adán y eva", "millones", "simultáneo", "biogénesis", "cataclismo"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#1929: “conócete a ti mismo”."],
    "contexto_real": "Realidad biológica-espiritual donde la humanidad surge en todo el globo simultáneamente por ley de afinidad, y no de una sola pareja mítica."
  },
  "Amor_Libre_y_Soberano": {
    "palabras_clave": ["matrimonio", "unión", "amor puro", "libertad", "mordaza", "cánones"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#2142: Párrafo i: la Unión de los seres ha de ser por Amor"],
    "contexto_real": "La única base legítima para la unión de dos seres, libre de ataduras legales o religiosas que coarten el sentimiento del espíritu."
  },
  "Emancipacion_de_la_Mujer": {
    "palabras_clave": ["mujer", "igualdad", "mueble", "sentimiento", "libertad de amar", "tiranía"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#2294: Párrafo ii: situación de la mujer unida sin amor. sus efectos"],
    "contexto_real": "Reivindicación de la mujer como ser soberano con iguales derechos que el hombre, cuyo sentimiento no debe ser esclavizado por leyes de conveniencia."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado.');
