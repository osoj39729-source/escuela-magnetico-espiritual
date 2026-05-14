const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Batch 3: claves 6064 a 9534
const batch3 = {
  "6064: PÁRRAFO II: EL PATRIOTISMO ES LEY INELUDIBLE": {
    "PilotoDeCoherencia": "Patriotismo Racional. El amor a la patria es legítimo y necesario, pero debe trascender las fronteras para convertirse en fraternidad universal, su forma más elevada.",
    "CitaInelutable": "EL PATRIOTISMO ES LEY INELUDIBLE... pero tiene un horizonte más amplio que las fronteras.",
    "EjemploPedagogico": "Un río que ama su cauce pero sabe que su destino es el mar; el patriotismo es el cauce, la fraternidad universal es el océano.",
    "ConexionDoctrinal": ["Patriotismo", "Fraternidad Universal"],
    "NodosSimapticos": []
  },
  "6294: CAPÍTULO DIEZ: EL RÉGIMEN DEL ESPIRITISMO": {
    "PilotoDeCoherencia": "Gobierno de la Doctrina. El espiritismo tiene su propio orden administrativo basado en el amor y la razón, no en la jerarquía dogmática ni en el poder coercitivo.",
    "CitaInelutable": "EL RÉGIMEN DEL ESPIRITISMO... la ley y no el capricho es su norma.",
    "EjemploPedagogico": "Una cooperativa bien organizada; no hay un jefe que manda por capricho, sino un reglamento de amor que todos conocen y respetan voluntariamente.",
    "ConexionDoctrinal": ["Reglamento", "Administración Doctrinal"],
    "NodosSimapticos": []
  },
  "6318: en «El Espiritismo en su Asiento»": {
    "PilotoDeCoherencia": "Referencia Canónica. Vinculación expresa con el contenido de 'El Espiritismo en su Asiento', mostrando la continuidad del sistema doctrinal.",
    "CitaInelutable": "en «El Espiritismo en su Asiento»... la continuación de este estudio.",
    "EjemploPedagogico": "Una nota al pie que dice 'ver capítulo anterior'; el maestro no repite la lección, invita a que el alumno construya sobre lo ya aprendido.",
    "ConexionDoctrinal": ["El Espiritismo en su Asiento", "Interconexión Canónica"],
    "NodosSimapticos": []
  },
  "6546: TERCERA PARTE: FACULTADES MEDIANÍMICAS": {
    "PilotoDeCoherencia": "Apertura al Estudio Práctico. Se introduce la sección dedicada al análisis científico de las facultades que permiten la comunicación entre planos.",
    "CitaInelutable": "TERCERA PARTE: FACULTADES MEDIANÍMICAS.",
    "EjemploPedagogico": "El tercer capítulo de un manual de radio: los dos primeros explicaban la física de las ondas; este enseña a construir el transmisor y el receptor.",
    "ConexionDoctrinal": ["Mediumnidad", "Ciencia Espiritista"],
    "NodosSimapticos": []
  },
  "6550: CAPÍTULO PRIMERO: QUE SON FACULTADES MEDIANÍMICAS Y FORMA RACIONAL DE PRACTICAR EL": {
    "PilotoDeCoherencia": "Definición y Protocolo. Se establece qué son las facultades y cuál es el método racional para su ejercicio, alejándolo de la magia y del misticismo.",
    "CitaInelutable": "QUÉ SON FACULTADES MEDIANÍMICAS Y FORMA RACIONAL DE PRACTICAR EL ESPIRITISMO.",
    "EjemploPedagogico": "El manual del laboratorio de un hospital; define qué son los análisis clínicos y cómo deben hacerse correctamente para obtener resultados válidos.",
    "ConexionDoctrinal": ["Mediumnidad (Definición)", "Método Racional"],
    "NodosSimapticos": []
  },
  "6646: PÁRRAFO II: «CARTA ORGÁNICA»": {
    "PilotoDeCoherencia": "Fundación Legal. La Carta Orgánica es el documento constitutivo de la Escuela Magnético-Espiritual, otorgando la autoridad del Maestro Fundador.",
    "CitaInelutable": "«CARTA ORGÁNICA» Autorizado como maestro fundador de la «Escuela Magnético-Espiritual».",
    "EjemploPedagogico": "El acta de fundación de una empresa; establece quién la funda, con qué propósito y bajo qué principios, dando validez legal a todo lo que venga después.",
    "ConexionDoctrinal": ["Carta Orgánica", "Maestro Fundador"],
    "NodosSimapticos": ["Carta Orgánica"]
  },
  "6653: «CÓDIGO DE AMOR UNIVERSAL»": {
    "PilotoDeCoherencia": "Corpus Normativo. El Código de Amor Universal es el cuerpo de leyes morales y administrativas que rige la vida de la Escuela y la futura Comuna.",
    "CitaInelutable": "«CÓDIGO DE AMOR UNIVERSAL»... la constitución de la humanidad futura.",
    "EjemploPedagogico": "La constitución de una nación; no es una sugerencia, es la ley suprema que organiza la convivencia y protege los derechos de todos.",
    "ConexionDoctrinal": ["Código de Amor Universal", "Legislación Doctrinal"],
    "NodosSimapticos": []
  },
  "6657: CAPÍTULO PRIMERO: «Constitución por la que se hace la proclamación de la comuna en la Tierra.": {
    "PilotoDeCoherencia": "Proclamación Formal. Se lee el texto constitucional que decreta la implantación de la ley de amor en la Tierra como sistema político-espiritual.",
    "CitaInelutable": "Constitución por la que se hace la proclamación de la comuna en la Tierra. Ley del Universo.",
    "EjemploPedagogico": "La declaración de independencia de una nación; no es solo un deseo, es un acto formal que cambia la realidad jurídica del territorio.",
    "ConexionDoctrinal": ["Constitución de la Comuna", "Ley del Universo"],
    "NodosSimapticos": []
  },
  "6672: DECRETAMOS:": {
    "PilotoDeCoherencia": "Acto Soberano. Los artículos del decreto establecen los derechos y deberes de los miembros de la Escuela y de la futura humanidad comunizada.",
    "CitaInelutable": "DECRETAMOS:... en nombre de la ley del Padre y de la razón universal.",
    "EjemploPedagogico": "El articulado de una ley aprobada en un parlamento; cada 'artículo' es una instrucción concreta de cómo debe organizarse la vida justa.",
    "ConexionDoctrinal": ["Decreto", "Legislación de Amor"],
    "NodosSimapticos": []
  },
  "6749: PÁRRAFO III: LEY DE LAS MEDIUMIDADES EN GENERAL (1)": {
    "PilotoDeCoherencia": "Inserción del Código. Se incorpora al texto el código completo de las mediumnidades como parte integrante del sistema legal de la Escuela.",
    "CitaInelutable": "LEY DE LAS MEDIUMIDADES EN GENERAL (1)... parte integrante de la Constitución.",
    "EjemploPedagogico": "Un apéndice técnico en una ley de salud; el texto principal establece el derecho, el apéndice establece el protocolo médico para ejercerlo.",
    "ConexionDoctrinal": ["Ley de las Mediumnidades", "Sistema Doctrinal"],
    "NodosSimapticos": []
  },
  "6753: PREFACIO": {
    "PilotoDeCoherencia": "Marco Ético. El Prefacio del código establece el espíritu que debe animar a cada practicante: la humildad, el estudio y el amor sin fronteras.",
    "CitaInelutable": "PREFACIO... el espíritu que debe animar este código.",
    "EjemploPedagogico": "El prólogo de una ley; antes de los artículos, el legislador explica el porqué moral de la norma para que el juez la aplique con espíritu y no solo con letra.",
    "ConexionDoctrinal": ["Ética Mediúmnica", "Humildad"],
    "NodosSimapticos": []
  },
  "7652: CAPITULO SEGUNDO: QUÉ SON LOS MÉDIUMS": {
    "PilotoDeCoherencia": "Definición del Misionero. El médium es un espíritu evolucionado que posee facultades de comunicación entre planos y tiene la obligación de ponerlas al servicio de sus hermanos.",
    "CitaInelutable": "QUÉ SON LOS MÉDIUMS... espíritus con mayor desarrollo en la antena espiritual.",
    "EjemploPedagogico": "Una antena de radio de alta potencia instalada en una torre; puede captar frecuencias que los aparatos comunes no alcanzan.",
    "ConexionDoctrinal": ["Médium (Definición)", "Evolución"],
    "NodosSimapticos": []
  },
  "7804: CAPITULO TERCERO: CUALIDADES DEL MÉDIUM": {
    "PilotoDeCoherencia": "Perfil Moral. Las cualidades esenciales del médium son la humildad, el amor, la constancia en el estudio y la transparencia de vida.",
    "CitaInelutable": "CUALIDADES DEL MÉDIUM... el carácter es más importante que la facultad.",
    "EjemploPedagogico": "Un juez; lo que importa no es solo que sepa derecho, sino que tenga la rectitud moral para aplicarlo sin corrupción.",
    "ConexionDoctrinal": ["Cualidades del Médium", "Carácter"],
    "NodosSimapticos": []
  },
  "8103: PARRAFO II: CUALIDADES POLIGLOTAS": {
    "PilotoDeCoherencia": "Don de Lenguas. Algunos médiums pueden comunicar en idiomas que no conocen conscientemente, evidencia de que el espíritu trasciende las barreras culturales.",
    "CitaInelutable": "CUALIDADES POLIGLOTAS... el espíritu habla todos los idiomas porque no tiene patria.",
    "EjemploPedagogico": "Un computador que puede ejecutar software en cualquier lenguaje de programación; el espíritu evolucionado es el hardware universal.",
    "ConexionDoctrinal": ["Poliglotismo Espiritual", "Universalidad"],
    "NodosSimapticos": []
  },
  "8254: CAPITULO CUARTO: LOS MÉDIUMS MÉDICOS": {
    "PilotoDeCoherencia": "Facultad Sanadora. Los médiums médicos canalizan el magnetismo de amor para restaurar el equilibrio biológico, complementando (no sustituyendo) la medicina racional.",
    "CitaInelutable": "LOS MÉDIUMS MÉDICOS... la medicina del espíritu que acompaña a la del cuerpo.",
    "EjemploPedagogico": "Un fisioterapeuta que complementa al cirujano; la cirugía arregla el hueso, la fisioterapia restaura el movimiento; el médium médico restaura el equilibrio energético.",
    "ConexionDoctrinal": ["Sanación Magnética", "Medicina Complementaria"],
    "NodosSimapticos": []
  },
  "8553: CAPITULO QUINTO: LOS MÉDIUMS VIDENTES": {
    "PilotoDeCoherencia": "Visión Espiritual. El médium vidente percibe el plano espiritual directamente, viendo auras, espíritus y realidades que escapan a los cinco sentidos comunes.",
    "CitaInelutable": "LOS MÉDIUMS VIDENTES... ven lo que otros solo pueden imaginar.",
    "EjemploPedagogico": "Un médico con visión de rayos X; mientras otros ven la piel, él ve el hueso; el vidente ve la estructura espiritual que sustenta el cuerpo físico.",
    "ConexionDoctrinal": ["Videncia", "Percepción Espiritual"],
    "NodosSimapticos": []
  },
  "8653: CAPÍTULO SEXTO: LOS MÉDIUMS PARLANTES": {
    "PilotoDeCoherencia": "Comunicación Oral. Los médiums parlantes transmiten mensajes del plano espiritual mediante la palabra hablada, siendo los más útiles para la enseñanza doctrinal.",
    "CitaInelutable": "LOS MÉDIUMS PARLANTES... la voz del espíritu en la materia.",
    "EjemploPedagogico": "Un locutor de radio; transmite una señal que viene de un estudio lejano; él no inventa el mensaje, lo retransmite con fidelidad.",
    "ConexionDoctrinal": ["Médiums Parlantes", "Comunicación Espiritual"],
    "NodosSimapticos": []
  },
  "8952: CAPITULO SÉPTIMO: LOS MÉDIUMS DE EFECTOS FÍSICOS": {
    "PilotoDeCoherencia": "Fenomenología Física. Son quienes pueden producir fenómenos materiales verificables: golpes, movimientos de objetos, etc., como prueba de la realidad del mundo espiritual.",
    "CitaInelutable": "LOS MÉDIUMS DE EFECTOS FÍSICOS... la prueba material para las mentes materialistas.",
    "EjemploPedagogico": "Un experimento de laboratorio; los fenómenos físicos son la demostración tangible para quienes no pueden aceptar una verdad puramente conceptual.",
    "ConexionDoctrinal": ["Efectos Físicos", "Prueba Material"],
    "NodosSimapticos": []
  },
  "9101: CAPITULO OCTAVO: LOS MÉDIUMS DE APORTES Y OTROS": {
    "PilotoDeCoherencia": "Fenómenos de Materialización. Capacidad de traer objetos físicos de un lugar a otro mediante energía espiritual, representando el máximo desarrollo de los efectos físicos.",
    "CitaInelutable": "LOS MÉDIUMS DE APORTES Y OTROS... la materialización como prueba suprema.",
    "EjemploPedagogico": "Un teletransportador de la ciencia ficción que ya existe en el plano espiritual; lo que parece imposible a la física actual es una operación natural para el espíritu avanzado.",
    "ConexionDoctrinal": ["Aporte", "Materialización"],
    "NodosSimapticos": []
  },
  "9250: CAPITULO NOVENO: EL MAGNETISMO Y EL SONAMBULISMO": {
    "PilotoDeCoherencia": "Nexo entre Planos. El magnetismo y el sonambulismo son las puertas naturales entre el estado de vigilia y el estado espiritual, estudiables y utilizables racionalmente.",
    "CitaInelutable": "EL MAGNETISMO Y EL SONAMBULISMO... las llaves del mundo invisible.",
    "EjemploPedagogico": "Las puertas giratorias de un edificio; cuando las giras en el sentido correcto, pasas del exterior al interior sin esfuerzo; el magnetismo y el sonambulismo son esa puerta.",
    "ConexionDoctrinal": ["Magnetismo", "Sonambulismo"],
    "NodosSimapticos": []
  },
  "9534: CAPITULO DIEZ: LA SUGESTIÓN Y LA TELEPATÍA": {
    "PilotoDeCoherencia": "Comunicación Mental. La sugestión y la telepatía son el inicio del estudio del poder del pensamiento sobre la materia y sobre otras mentes.",
    "CitaInelutable": "LA SUGESTIÓN Y LA TELEPATÍA... el teléfono del espíritu.",
    "EjemploPedagogico": "El telégrafo antes del teléfono; la telepatía es la comunicación mental más básica, el primer paso hacia una comunicación espiritual más compleja.",
    "ConexionDoctrinal": ["Telepatía", "Sugestión"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, batch3);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Carta Orgánica": {
    "Definición": "Documento fundacional de la Escuela Magnético-Espiritual de la Comuna Universal, redactado por Joaquín Trincado en su carácter de Maestro Fundador. Establece los principios, derechos y deberes de los miembros.",
    "Contexto": "El Espiritismo Estudiado (Tercera Parte, Cap. I, Párrafo II).",
    "Conexiones": ["Fundación", "Escuela", "Derecho"],
    "Obras": ["El Espiritismo Estudiado", "Estatutos y Reglamentos"]
  },
  "Moisés (Estrategia)": {
    "Definición": "Interpretación trincadista de Moisés como un maestro espiritual de alto grado que prohibió el espiritismo de su época para proteger a su pueblo de la hechicería degenerada de Egipto. Acción de sabiduría, no de ignorancia.",
    "Contexto": "El Espiritismo Estudiado (Cap. Sexto).",
    "Conexiones": ["Israel", "Protección", "Historia"],
    "Obras": ["El Espiritismo Estudiado", "Buscando a Dios"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Batch 3/4 (21 nodos 1:1). El Espiritismo Estudiado — Tercera Parte completa. Facultades y tipos de médiums sellados.');
