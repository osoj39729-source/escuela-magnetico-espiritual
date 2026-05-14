const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Conócete a ti mismo (Batch 8 - Claves 116 a 135)
const nuevosNodos = {
  "15237: Párrafo ii: eL HoMBRe HaCe LeYes PoR MaYoRÍa conócete a ti Mismo": {
    "PilotoDeCoherencia": "Ley como sentimiento. La ley verdadera no es opinión; es el sentimiento colectivo de justicia que debe ser inflexible para perdurar.",
    "CitaInelutable": "Principio de lo que es ley... es 'sentimiento' y no opinión.",
    "EjemploPedagogico": "La ley de no matar no es una opinión política; es el sentimiento de respeto a la vida que todos compartimos.",
    "ConexionDoctrinal": ["Ley de Mayoría", "Sentimiento de Justicia"],
    "NodosSimapticos": ["Ley de Mayoría"]
  },
  "15367: Párrafo iii: Las LeYes De La MaYoRÍa, son eL ReTRaTo De La HUManiDaD": {
    "PilotoDeCoherencia": "Espejo social. Las leyes que un pueblo se da a sí mismo son la exposición real de su grado de adelanto o atraso moral.",
    "CitaInelutable": "Las leyes de la mayoría, son el retrato de la humanidad.",
    "EjemploPedagogico": "Si un pueblo tiene leyes crueles, el pueblo es cruel; la ley es la fotografía de su espíritu colectivo.",
    "ConexionDoctrinal": ["Reflejo Social"],
    "NodosSimapticos": []
  },
  "15619: Párrafo iV: Los HoMBRes son oBLiGaDos a ResPeTaR Las LeYes De La MaYoRÍa": {
    "PilotoDeCoherencia": "Respeto al Código. Bajo el Código de Amor, la humanidad debe respetar la ley de mayoría como reflexión de la ley divina para el orden común.",
    "CitaInelutable": "Bajo esta base que se le aconseja a la humanidad el respeto a la ley de mayoría.",
    "EjemploPedagogico": "En la Comuna, respetar la ley no es miedo al castigo, sino amor al orden que nos beneficia a todos.",
    "ConexionDoctrinal": ["Respeto a la Ley", "Código de Amor"],
    "NodosSimapticos": []
  },
  "15766: Párrafo V: en La aPLiCaCión JUsTiCia De Las LeYes De MaYoRÍa no se CoMeTe inJUsTiCia, PeRo PUeDe HaBeR ResPonsaBiLiDaDes": {
    "PilotoDeCoherencia": "Justicia y Responsabilidad. Aplicar la ley de mayoría con justicia no es injusto, pero quienes la ejecutan asumen la responsabilidad espiritual de su rectitud.",
    "CitaInelutable": "No se comete injusticia, pero puede haber responsabilidades.",
    "EjemploPedagogico": "El juez que aplica la ley debe estar seguro de que su intención es la justicia, o cargará con la deuda del error cometido.",
    "ConexionDoctrinal": ["Responsabilidad Judicial"],
    "NodosSimapticos": []
  },
  "15840: Párrafo Vi: CaUsas QUe Han De ConCURRiR PaRa eL esTaBLeCiMienTo De Las LeYes De La MaYoRÍa": {
    "PilotoDeCoherencia": "Flexibilidad geográfica. Aunque el Código es inflexible en derechos y obligaciones, la ley económica debe adaptarse a la fisiología y el clima de cada región.",
    "CitaInelutable": "No puede ser una ley económica aplicable por igual a todos los climas.",
    "EjemploPedagogico": "No puedes exigir el mismo trabajo o dieta en el Polo Norte que en el Ecuador; la ley debe ser justa con la naturaleza.",
    "ConexionDoctrinal": ["Adaptabilidad de la Ley"],
    "NodosSimapticos": []
  },
  "15915: Párrafo Vii: no es LeY aDMiTiDa T oDa LeY iMPUesTa o sUGeRiDa PoR La FUeRZa": {
    "PilotoDeCoherencia": "Rechazo a la tiranía. Ninguna ley impuesta por la fuerza o la sugerencia malintencionada es válida ante la conciencia del hombre libre.",
    "CitaInelutable": "No está obligado el hombre a admitir ninguna ley impuesta... por la fuerza.",
    "EjemploPedagogico": "Si te obligan a firmar un contrato con una pistola en la cabeza, ese contrato no tiene valor moral ni espiritual.",
    "ConexionDoctrinal": ["Libertad de Conciencia", "Ilegitimidad de la Fuerza"],
    "NodosSimapticos": []
  },
  "16068: Párrafo Viii: Las LeYes LLeVan iMPReso eL seR ÉTniCo DeL QUe Las HaCe": {
    "PilotoDeCoherencia": "Impronta étnica. Las leyes reflejan la naturaleza física y el ambiente de quienes las redactan; si son impuestas por extraños, no representan al pueblo.",
    "CitaInelutable": "Las leyes llevan impreso el ser étnico del que las hace.",
    "EjemploPedagogico": "Una ley hecha en un desierto difícilmente servirá para gobernar un pueblo de pescadores en el océano.",
    "ConexionDoctrinal": ["Ser Étnico en la Ley"],
    "NodosSimapticos": []
  },
  "16140: Párrafo iX: LeY QUe HaCe eXTRaÑos, no es LeY CiViLiZaDa": {
    "PilotoDeCoherencia": "Civilización y Sabiduría. Una ley que crea extranjeros o excluidos no es civilizada; la verdadera civilización practica la justicia por la justicia misma.",
    "CitaInelutable": "Ley que hace extraños, no es ley civilizada... practicar la justicia por la justicia misma.",
    "EjemploPedagogico": "En un mundo civilizado no existen los 'extranjeros'; todos somos hermanos en la misma casa.",
    "ConexionDoctrinal": ["Definición de Civilización"],
    "NodosSimapticos": []
  },
  "16224: Párrafo X: eL TRaBaJo es La LeY ineXoRaBLe iMPUesTa a ToDo HoMBRe": {
    "PilotoDeCoherencia": "Deber del trabajo. Todo trabajo manual o intelectual que produzca progreso para la humanidad es obligatorio. Lo demás es trabajo perdido.",
    "CitaInelutable": "El trabajo es la ley inexorable impuesta a todo hombre.",
    "EjemploPedagogico": "En la colmena, toda abeja trabaja; la que solo consume sin producir daña la vida de las demás.",
    "ConexionDoctrinal": ["Trabajo (Ley Inexorable)", "Progreso Comunal"],
    "NodosSimapticos": ["Trabajo (Ley Inexorable)"]
  },
  "16292: CaPÍTULo X: DeFiniCiones JUZGaDas": {
    "PilotoDeCoherencia": "Estructura formal del capítulo sobre las síntesis finales.",
    "CitaInelutable": "CaPÍTULo X: DeFiniCiones JUZGaDas.",
    "EjemploPedagogico": "El resumen de las verdades juzgadas.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "16295: Párrafo i: eLoÍ, eL esPÍRiTU Y La ViDa: o, CReaDoR, HoMBRe Y MUnDo": {
    "PilotoDeCoherencia": "Trinidad Cosmogonía. Eloí (Causa), Espíritu (Hombre) y Vida (Mundo/Materia) forman la unidad indisoluble de la existencia.",
    "CitaInelutable": "Eloí, el espíritu y la vida: o, creador, hombre y mundo.",
    "EjemploPedagogico": "El sol, el rayo de luz y el calor; no puedes quitar uno sin que desaparezcan los demás.",
    "ConexionDoctrinal": ["Trinidad Cosmogónica"],
    "NodosSimapticos": []
  },
  "16446: Párrafo ii: esPÍRiTU, aLMa Y CUeRPo": {
    "PilotoDeCoherencia": "Trinidad Humana. El hombre es obligatoriamente la unión de espíritu, alma y cuerpo; sin una de estas tres, no existe el ser racional.",
    "CitaInelutable": "Espíritu, alma y cuerpo... sin cuyas tres entidades no puede ser el hombre.",
    "EjemploPedagogico": "El piloto, el mando y el avión; si falta uno, el vuelo de la vida es imposible.",
    "ConexionDoctrinal": ["Hombre Trino"],
    "NodosSimapticos": ["Hombre Trino"]
  },
  "16781: Párrafo iii: eneRGÍa, MoViMienTo, LUZ Y CaLoR": {
    "PilotoDeCoherencia": "Trinidad Física. La ciencia física ha llegado al borde de la metafísica al estudiar la energía, el movimiento y sus efectos de luz y calor.",
    "CitaInelutable": "Energía, movimiento, luz y calor... al borde mismo de la metafísica espiritual.",
    "EjemploPedagogico": "La física ve la llama; la metafísica ve el espíritu que encendió el fuego.",
    "ConexionDoctrinal": ["Física y Metafísica"],
    "NodosSimapticos": []
  },
  "16839: Párrafo iV: LeY DiVina, LeY naTURaLe Y LeY HUMana": {
    "PilotoDeCoherencia": "Trinidad Legislativa. El argumento central de la obra es la armonía entre la ley de amor (divina), las leyes fatales (naturales) y el derecho (humano).",
    "CitaInelutable": "Ley divina, ley natural y ley humana... todo el argumento de esta obra.",
    "EjemploPedagogico": "El arquitecto diseña (Divina), la gravedad actúa (Natural) y el habitante pone las reglas de la casa (Humana).",
    "ConexionDoctrinal": ["Trinidad Legislativa"],
    "NodosSimapticos": []
  },
  "16890: Párrafo V: La saBiDURÍa, eL PRoGReso Y Las CienCias": {
    "PilotoDeCoherencia": "Trinidad Evolutiva. La verdadera sabiduría no es solo acumular datos, sino demostrar la civilización completa mediante el progreso y las ciencias aplicadas.",
    "CitaInelutable": "La sabiduría, el progreso y las ciencias... sabiduría en su completa civilización.",
    "EjemploPedagogico": "Saber cómo funciona el átomo es ciencia; usarlo para dar luz a todos es sabiduría.",
    "ConexionDoctrinal": ["Sabiduría Racional"],
    "NodosSimapticos": []
  },
  "17115: Párrafo Vi: La MeCÁniCa, La FÍsiCa Y La MeTaFÍsiCa": {
    "PilotoDeCoherencia": "Trinidad de la Realidad. El orden real empieza en la Metafísica (causa) que genera efectos Físicos y se manifiesta en la Mecánica de las formas.",
    "CitaInelutable": "La mecánica, la física y la metafísica... la metafísica hubo de ser antes.",
    "EjemploPedagogico": "Primero es la idea del relojero (Metafísica), luego los resortes (Física) y finalmente las agujas marcando la hora (Mecánica).",
    "ConexionDoctrinal": ["Metafísica Espiritual (Trincadista)"],
    "NodosSimapticos": ["Metafísica Espiritual (Trincadista)"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Ley de Mayoría": {
    "Definición": "Principio político y moral que establece que la legislación social legítima debe surgir del sentimiento y consenso de la mayoría de la comunidad. Esta ley debe ser inflexible para garantizar el orden, pero siempre subordinada a la reflexión de las leyes divinas de amor y justicia.",
    "Contexto": "Conócete a ti mismo (Capítulo IX, Párrafo II).",
    "Conexiones": ["Derecho Humano", "Soberanía Popular", "Justicia Comunal"],
    "Obras": ["Conócete a ti mismo", "Estatutos y Reglamentos"]
  },
  "Trabajo (Ley Inexorable)": {
    "Definición": "Mandato universal que obliga a todo ser humano a contribuir con su esfuerzo (manual o intelectual) al progreso colectivo de la humanidad. El trabajo se define como toda acción que produce bienestar para la Comuna; el consumo sin producción se considera una carga injusta para el cuerpo social.",
    "Contexto": "Conócete a ti mismo (Capítulo IX, Párrafo X).",
    "Conexiones": ["Comunismo Universal", "Progreso", "Obligación Social"],
    "Obras": ["Conócete a ti mismo", "Filosofía Austera Racional"]
  },
  "Metafísica Espiritual (Trincadista)": {
    "Definición": "Ciencia que estudia las causas primeras e invisibles (el Espíritu y sus leyes) que preceden y generan los efectos físicos y mecánicos en el universo. A diferencia de la metafísica abstracta o mística, la trincadista es racional, demostrable mediante el estudio de la vida y el magnetismo.",
    "Contexto": "Conócete a ti mismo (Capítulo X, Párrafo VI).",
    "Conexiones": ["Espíritu", "Física Espiritual", "Causalidad"],
    "Obras": ["Conócete a ti mismo", "El Magnetismo en su Origen"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 16 nodos PURA CALIDAD 1:1 de Conócete a ti mismo (Batch 8) y 3 términos sinápticos.');
