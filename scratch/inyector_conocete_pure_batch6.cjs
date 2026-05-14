const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Conócete a ti mismo (Batch 6 - Claves 84 a 103)
const nuevosNodos = {
  "9407: Punto quinto: De MoisÉs a JUan Y JesÚs": {
    "PilotoDeCoherencia": "Historia desmitificada. Los hechos de la Biblia son ciertos en su base histórica, pero deben ser limpiados de milagros y sucesos antinaturales mediante el buen criterio.",
    "CitaInelutable": "Los hechos sean ciertos (a excepción de todo aquello que se relaciona con milagros).",
    "EjemploPedagogico": "Moisés lideró un pueblo, eso es historia; que el mar se abriera mágicamente es una alegoría que oculta la ley natural.",
    "ConexionDoctrinal": ["Historia vs Mito", "Criterio Racional"],
    "NodosSimapticos": []
  },
  "9659: Punto sexto: De JesÚs aL JUiCio De La TieRRa Y aL anTiCRisTo": {
    "PilotoDeCoherencia": "El reinado del error. Tras Jesús, se dio suelta al 'dragón' (el dogma religioso) que desvió la doctrina original hacia el sistema del Anticristo.",
    "CitaInelutable": "Se iba a dar suelta al dragón... al sistema del Anticristo.",
    "EjemploPedagogico": "La luz de Jesús fue encerrada en una lámpara de hierro por la Iglesia para que no iluminara a todos, sino solo a los que pagaran el aceite.",
    "ConexionDoctrinal": ["Anticristo (Doctrinal)", "Desvío de la Verdad"],
    "NodosSimapticos": ["Anticristo (Doctrinal)"]
  },
  "10114: Párrafo ii: Las ReLiGiones en GeneRaL Las religiones, todas han nacido de la ignorancia de los hombres;": {
    "PilotoDeCoherencia": "Indispensabilidad del error. Las religiones fueron necesarias solo como un grado primario de estudio para la humanidad ignorante, pero deben ser superadas por la ciencia del espíritu.",
    "CitaInelutable": "Las religiones, todas han nacido de la ignorancia... pero esta ignorancia es indispensable.",
    "EjemploPedagogico": "La religión es el andador para el niño que no sabe caminar; una vez que corre, el andador es un estorbo.",
    "ConexionDoctrinal": ["Origen de las Religiones", "Superación del Dogma"],
    "NodosSimapticos": []
  },
  "10261: Párrafo iii: Las ReLiGiones en PaRTiCULaR Quisiera ser benévolo, si me lo permitieran las religiones que voy a": {
    "PilotoDeCoherencia": "Sentencia del Juez. Trincado examina las religiones no desde el estudio académico, sino desde su autoridad como Juez de vivos y muertos tras haberlas recorrido todas.",
    "CitaInelutable": "No digo que voy a estudiarlas; las estudié cuando escribí el primer libro... antes que sabía que era el misionero.",
    "EjemploPedagogico": "El juez no estudia el código en el momento de la sentencia; ya lo conoce y solo aplica la ley sobre los hechos.",
    "ConexionDoctrinal": ["Autoridad del Misionero", "Juez de Vivos y Muertos"],
    "NodosSimapticos": []
  },
  "10453: Párrafo iV: CaRaCTeRÍsTiCas De aLGUnas ReLiGiones El carácter del individuo, lo analizamos de su constancia y aun de las": {
    "PilotoDeCoherencia": "Análisis ético. El carácter de las religiones se juzga por sus hechos y su ética, resultando en un fallo inapelable sobre su modo de ser.",
    "CitaInelutable": "Inapelable el fallo que se da... cuando es el resultado del estudio consciente de su ética.",
    "EjemploPedagogico": "Si una religión predica amor pero hace guerras, su carácter es el de la guerra, no el del amor.",
    "ConexionDoctrinal": ["Ética y Hechos"],
    "NodosSimapticos": []
  },
  "10743: Párrafo V: ToDas Las ReLiGiones son iDóLaTRas Si todas las religiones se acusan unas a otras de falsedad y aun luchan": {
    "PilotoDeCoherencia": "Idolatría universal. Toda religión que adore entidades ajenas al Creador único (Eloí) es idólatra. Al acusarse entre sí de falsedad, todas confiesan su propia mentira.",
    "CitaInelutable": "Todas son falsas. Si todas tienen adoraciones y cultos a entidades que no son el creador, son idólatras.",
    "EjemploPedagogico": "Poner a un santo, una virgen o un profeta en un altar es vendarse los ojos para no ver la luz directa del Padre.",
    "ConexionDoctrinal": ["Idolatría Religiosa", "Eloí vs Ídolos"],
    "NodosSimapticos": []
  },
  "10948: Párrafo Vi: ConseCUenCias FaTaLes De La MULTiTUD De ReLiGiones": {
    "PilotoDeCoherencia": "División de la humanidad. La multiplicidad de religiones ha creado razas, castas y clases sociales antagónicas, provocando catástrofes que la simple ignorancia no habría causado.",
    "CitaInelutable": "Consecuencias fatales... son principalmente las razas, castas y las clases... antagonismo.",
    "EjemploPedagogico": "Las religiones son cercas de espinas que separan a los hermanos en el mismo campo de la vida.",
    "ConexionDoctrinal": ["División Social Religiosa"],
    "NodosSimapticos": []
  },
  "11103: Párrafo Vii: soLo Las ReLiGiones son CULPaBLes DeL MaL MUnDiaL": {
    "PilotoDeCoherencia": "La raíz del veneno. Se identifica a la religión como el virus que envenenó la mente humana, siendo la única responsable del mal que asola al mundo.",
    "CitaInelutable": "Solo las religiones son culpables del mal mundial... germen y virus de la ponzoña.",
    "EjemploPedagogico": "La religión es el virus que apaga el sistema inmunológico de la razón.",
    "ConexionDoctrinal": ["Responsabilidad del Mal"],
    "NodosSimapticos": []
  },
  "11277: Punto primero (CaPÍTULo Vii: GRaDos De PRoGReso)": {
    "PilotoDeCoherencia": "Soberanía popular vs Moral religiosa. El poder soberano reside en el pueblo, pero las leyes humanas están manchadas por la moral religiosa, que es en realidad inmoralidad disfrazada.",
    "CitaInelutable": "El poder soberano es el pueblo... leyes manchadas por la moral religiosa.",
    "EjemploPedagogico": "Un rey que dice mandar por 'gracia de Dios' es un usurpador del derecho del pueblo.",
    "ConexionDoctrinal": ["Soberanía Popular", "Crítica a la Moral Religiosa"],
    "NodosSimapticos": []
  },
  "11414: Párrafo Viii: La CaRiDaD ReLiGiosa es Un BaLDón Que se haya escrito «charitas» (caridad) antes de cicerón, nada habrá": {
    "PilotoDeCoherencia": "Insulto a la justicia. La caridad es un término ajeno a las lenguas antiguas de sabiduría (griego, árabe, sánscrito); es una invención para humillar al hombre en lugar de darle justicia.",
    "CitaInelutable": "La caridad religiosa es un baldón... en el sánscrito no se encuentra... beneficencia no es lo mismo.",
    "EjemploPedagogico": "Darle una migaja al que tiene hambre por 'caridad' es una ofensa; darle el pan que le corresponde por justicia es la ley.",
    "ConexionDoctrinal": ["Caridad (Baldón Religioso)", "Beneficencia vs Caridad"],
    "NodosSimapticos": ["Caridad (Baldón Religioso)"]
  },
  "11543: Punto primero: La CaRiDaD anTe La VeRDaD HisTóRiCa": {
    "PilotoDeCoherencia": "Falsedad del altruismo religioso. La historia demuestra que la caridad ha sido el velo para ocultar el robo del derecho humano.",
    "CitaInelutable": "A las virtudes y a la belleza... elevan los hechos materiales.",
    "EjemploPedagogico": "Construir un hospital con el dinero robado al pueblo y llamarlo caridad es la mayor hipocresía de la historia.",
    "ConexionDoctrinal": ["Hipocresía Religiosa"],
    "NodosSimapticos": []
  },
  "11714: Punto segundo (CaPÍTULo Vii: GRaDos De PRoGReso)": {
    "PilotoDeCoherencia": "Obras vs Fe. La fe sin obras es muerta. Si existe justicia, la caridad es una palabra sin sentido que solo sirve para posponer el derecho real.",
    "CitaInelutable": "La fe sin obras es obra muerta... existiendo la justicia, la caridad es palabra sin sentido.",
    "EjemploPedagogico": "No me digas que crees en la hermandad si no compartes tu campo con el vecino.",
    "ConexionDoctrinal": ["Fe por Obras", "Aniquilación de la Caridad"],
    "NodosSimapticos": []
  },
  "11908: Párrafo iX: eL aMoR es eL ManDaTo Registrad el testamento de Abraham concierto del padre Eloí con": {
    "PilotoDeCoherencia": "Mandato único de amor. Desde Abraham hasta Moisés y Jesús, el único mandato real es el amor, incluso para los marginados.",
    "CitaInelutable": "El amor es el mandato... sólo amor respira.",
    "EjemploPedagogico": "La ley no se escribió con tinta, se escribió con amor para que no se borrara nunca.",
    "ConexionDoctrinal": ["Mandato de Amor"],
    "NodosSimapticos": []
  },
  "12081: Párrafo X: Las ReLiGiones son La neGaCión DeL CReaDoR": {
    "PilotoDeCoherencia": "Negación de Eloí. Al crear dogmas y rituales, las religiones niegan la existencia del Creador real y se fabrican un dios a su medida malvada.",
    "CitaInelutable": "Las religiones son la negación del creador... corona tejida con el mineral de su mal.",
    "EjemploPedagogico": "El que hace un dibujo de Dios y dice 'esto es Dios', está diciendo que Dios es pequeño y limitado como su dibujo.",
    "ConexionDoctrinal": ["Ateísmo Religioso"],
    "NodosSimapticos": []
  },
  "12385: CaPÍTULo Viii: ConoCiMienTo De CaUsas Y eFeCTos": {
    "PilotoDeCoherencia": "Estructura formal del capítulo sobre la ley de causalidad moral.",
    "CitaInelutable": "CaPÍTULo Viii: ConoCiMienTo De CaUsas Y eFeCTos.",
    "EjemploPedagogico": "La ley de siembra y cosecha.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "12388: Párrafo i: eL CRiMen en GeneRaL El crimen es, todo aquello que causa daño a otro y aun a sí mismo, ya": {
    "PilotoDeCoherencia": "Definición del Crimen. El crimen es cualquier daño causado por intención, ignorancia o indolencia. El peor es el crimen moral contra la dignidad.",
    "CitaInelutable": "El crimen es todo aquello que causa daño a otro... el mayor es el crimen moral.",
    "EjemploPedagogico": "Robar un pan es un crimen físico; robarle la esperanza a un pueblo es un crimen moral eterno.",
    "ConexionDoctrinal": ["Definición de Crimen", "Crimen Moral"],
    "NodosSimapticos": ["Crimen Moral"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Anticristo (Doctrinal)": {
    "Definición": "Concepto que designa al sistema de dogmas, religiones y rituales que suplantaron la enseñanza original de amor y libertad de Jesús. No se refiere a un individuo maléfico, sino a la hegemonía del error y la idolatría que ha dominado al mundo durante los siglos de oscuridad, negando la trinidad racional del hombre.",
    "Contexto": "Conócete a ti mismo (Capítulo VII, Punto Sexto).",
    "Conexiones": ["Religión", "Dogma", "Juicio Final"],
    "Obras": ["Conócete a ti mismo", "El Espiritismo en su Asiento"]
  },
  "Caridad (Baldón Religioso)": {
    "Definición": "Término rechazado por la Escuela por considerarlo un insulto a la justicia. La caridad se define como una invención religiosa para humillar al desposeído y lavar la conciencia del opresor, sustituyendo el derecho inalienable del hombre por una dádiva discrecional. En la Comuna, la caridad desaparece para dar paso a la justicia y la beneficencia legal.",
    "Contexto": "Conócete a ti mismo (Capítulo VII, Párrafo VIII).",
    "Conexiones": ["Justicia", "Comuna", "Religión"],
    "Obras": ["Conócete a ti mismo", "Cuestionario Espírita Racional"]
  },
  "Crimen Moral": {
    "Definición": "La forma más grave de transgresión contra la ley de amor. Consiste en herir la dignidad, la libertad o el sentimiento del espíritu humano mediante la calumnia, el engaño o la opresión religiosa. A diferencia del crimen físico, sus heridas no se curan con medicina material y generan deudas profundas en el archivo del espíritu.",
    "Contexto": "Conócete a ti mismo (Capítulo VIII, Párrafo I).",
    "Conexiones": ["Responsabilidad del Espíritu", "Dignidad Humana", "Causalidad"],
    "Obras": ["Conócete a ti mismo", "Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 16 nodos PURA CALIDAD 1:1 de Conócete a ti mismo (Batch 6) y 3 términos sinápticos.');
