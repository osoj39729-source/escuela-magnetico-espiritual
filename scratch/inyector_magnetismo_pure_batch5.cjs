const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/el-magnetismo-en-su-origen_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - El Magnetismo en su Origen (Batch 5 - Claves 42 a 51)
const nuevosNodos = {
  "1932: LECCIÓN CUARTA (PARTE SEGUNDA: MODUS OPERANDI DEL MÉTODO SUPREMO)": {
    "PilotoDeCoherencia": "Estructura formal para la Lección Cuarta de la fase operativa.",
    "CitaInelutable": "LECCIÓN CUARTA",
    "EjemploPedagogico": "Marca el paso del sueño profundo a la verbalización astral.",
    "ConexionDoctrinal": ["Modus Operandi", "Transición Operativa"],
    "NodosSimapticos": []
  },
  "1934: GRADO CUARTO.: SONAMBULISMO VERBAL": {
    "PilotoDeCoherencia": "Manejo del sonámbulo lúcido. Una vez suelto en la palabra, el operador debe aprovechar para instruirlo en leyes espirituales ('ponerlo en luz'). El paciente verbaliza lo que su espíritu ve mientras el cuerpo yace anestesiado bajo el control magnético.",
    "CitaInelutable": "Una vez que entró en trance y suelto en la palabra, es hora de ponerlo en luz con pláticas breves, sentencias y ejemplos de la pesadez de la materia.",
    "EjemploPedagogico": "Cuando el teléfono astral se enciende (el médium empieza a hablar), el operador no hace preguntas frívolas, aprovecha para dictarle clases de luz que el espíritu asimila directamente.",
    "ConexionDoctrinal": ["Sonambulismo Lúcido", "Instrucción Astral"],
    "NodosSimapticos": ["Clase Astral", "Anestesia Magnética"]
  },
  "1986: LECCIÓN QUINTA (PARTE SEGUNDA: MODUS OPERANDI DEL MÉTODO SUPREMO)": {
    "PilotoDeCoherencia": "Estructura formal para la Lección Quinta de la fase operativa.",
    "CitaInelutable": "LECCIÓN QUINTA",
    "EjemploPedagogico": "Marca el ascenso hacia la telepatía operativa.",
    "ConexionDoctrinal": ["Modus Operandi", "Transición Operativa"],
    "NodosSimapticos": []
  },
  "1988: GRADO QUINTO: TELEPATÍA CONSCIENTE O SONAMBÚLlCA": {
    "PilotoDeCoherencia": "Operación de la telepatía pura. Se utiliza el buen instrumento (médium probado) como un vigía a distancia. El operador transmite su voluntad (querer) y el médium la registra y comunica sin necesidad de contacto físico o verbalización cercana.",
    "CitaInelutable": "Una vez que ya contáis con el buen instrumento, que vela, registra y os comunica lo que le habéis impuesto y ha trasmitido e inspirado vuestro querer...",
    "EjemploPedagogico": "El médium se convierte en un radar mental. El magnetizador dispara la onda (querer) y el médium rebota la información precisa de vuelta.",
    "ConexionDoctrinal": ["Telepatía Consciente", "Transmisión del Querer"],
    "NodosSimapticos": ["Radar Mental", "El Querer Magnético"]
  },
  "2026: LECCIÓN SEXTA. (PARTE SEGUNDA: MODUS OPERANDI DEL MÉTODO SUPREMO)": {
    "PilotoDeCoherencia": "Estructura formal para la Lección Sexta de la fase operativa.",
    "CitaInelutable": "LECCIÓN SEXTA.",
    "EjemploPedagogico": "El preludio al grado máximo del Espiritismo experimental.",
    "ConexionDoctrinal": ["Modus Operandi", "Transición Operativa"],
    "NodosSimapticos": []
  },
  "2028: GRADO SEXTO.: DESDOBLAMIENTO SONAMBÚLICO": {
    "PilotoDeCoherencia": "La fusión final entre el magnetismo material y el Espiritismo. Trincado declara que hasta este punto hemos estado subiendo por las 'ramas' del árbol, pero en el Desdoblamiento alcanzamos el 'tronco' (Espiritismo puro). El espíritu del médium opera de forma independiente al cuerpo físico.",
    "CitaInelutable": "Hasta aquí tiene la materia fuerza magnética... como ramas (aunque bajeras) del Espiritismo: pero aquí, ya, no podemos andarnos sólo por las ramas; necesitamos el tronco.",
    "EjemploPedagogico": "El magnetismo es la savia y las ramas; el Espiritismo es el tronco macizo de roble. En el desdoblamiento dejas de trepar por las hojas y te agarras a la madera central del Universo.",
    "ConexionDoctrinal": ["Espiritismo como Tronco", "Desdoblamiento Espiritual", "Fusión Doctrinal"],
    "NodosSimapticos": ["Tronco del Espiritismo", "Ramas del Magnetismo"]
  },
  "2071: LECCIÓN SÉPTIMA. (PARTE SEGUNDA: MODUS OPERANDI DEL MÉTODO SUPREMO)": {
    "PilotoDeCoherencia": "Estructura formal para la Lección Séptima de la fase operativa.",
    "CitaInelutable": "LECCIÓN SÉPTIMA.",
    "EjemploPedagogico": "La revelación del Grado Supremo y la atracción universal.",
    "ConexionDoctrinal": ["Modus Operandi", "Transición Operativa"],
    "NodosSimapticos": []
  },
  "2073: GRADO SÉPTIMO Y SUPREMO.: DESDOBLAMIENTO Y ATRACCIÓN": {
    "PilotoDeCoherencia": "La revelación máxima. El grado supremo donde la ciencia y los académicos se estrellan: es imposible separar el Magnetismo de su tronco (Espiritismo). En este nivel de atracción, las fuerzas universales convergen y demuestran la solidaridad total y espiritual de la existencia.",
    "CitaInelutable": "En esta escala, tendrán que ver quiera o no quieran las ciencias y sus hombres, lo imposible de separar el Magnetismo, de su tronco Espiritismo.",
    "EjemploPedagogico": "Querer aceptar el magnetismo y negar el espiritismo es como aceptar que existe la luz de la bombilla pero negar que existe la electricidad en los cables. Son inseparables.",
    "ConexionDoctrinal": ["Desdoblamiento y Atracción", "Inseparabilidad del Magnetismo y Espiritismo"],
    "NodosSimapticos": ["Atracción Suprema", "Derrota de la Ciencia Materialista"]
  },
  "2131: PARTE TERCERA.: INSTRUCCIONES GENERALES PARA EL PROVECHO PROPIO Y EL ADELANTO EN EL": {
    "PilotoDeCoherencia": "Apertura de la sección de utilidades prácticas y logísticas para el operador avanzado y el desarrollo de la escuela magnética en masa.",
    "CitaInelutable": "PARTE TERCERA. INSTRUCCIONES GENERALES PARA EL PROVECHO PROPIO Y EL ADELANTO EN EL DESARROLLO",
    "EjemploPedagogico": "El manual pasa de enseñarte a operar un solo motor, a enseñarte a dirigir toda la flota de transportes.",
    "ConexionDoctrinal": ["Instrucciones Prácticas", "Gestión de Facultades"],
    "NodosSimapticos": []
  },
  "2136: DESARROLLO: PRIMERA": {
    "PilotoDeCoherencia": "Técnica de operación simultánea o red magnética. Trincado instruye que se puede operar con varios sonámbulos a la vez, creando un escuadrón de instrumentos donde unos ejecutan tareas en distintos puntos y otro actúa como 'vigía' exclusivo para advertir al operador de cualquier peligro o interferencia.",
    "CitaInelutable": "Se puede operar con varios sonámbulos o médiums, a una misma vez... puedes dejar uno que sirva de vigía y te advierta de todo lo que suceda.",
    "EjemploPedagogico": "El operador se vuelve el general de un ejército invisible. Manda a varios exploradores (médiums) al campo astral, pero deja a uno en la retaguardia operando como radar (vigía) por seguridad.",
    "ConexionDoctrinal": ["Operación Múltiple", "El Médium Vigía", "Red Magnética"],
    "NodosSimapticos": ["Médium Vigía", "Escuadrón Astral"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "El Tronco del Espiritismo": {
    "Definición": "Metáfora fundacional que establece que el Magnetismo (la fuerza material y vital) es solo el ramaje operativo, mientras que el Espiritismo (la inteligencia y la vida del Espíritu libre) es el tronco macizo e inseparable de toda fenomenología universal.",
    "Contexto": "Explicación de los Grados 6° y 7° en El Magnetismo en su Origen.",
    "Conexiones": ["Espiritismo", "Desdoblamiento", "Ramas del Magnetismo"],
    "Obras": ["El Magnetismo en su Origen"]
  },
  "El Médium Vigía": {
    "Definición": "Técnica magnética avanzada donde el operador, al trabajar con múltiples sujetos en trance simultáneo, designa a uno exclusivamente para quedarse cerca (en el plano astral inmediato) funcionando como radar de seguridad para advertir de presencias u obstáculos.",
    "Contexto": "Instrucciones de la Tercera Parte de El Magnetismo en su Origen.",
    "Conexiones": ["Operación Múltiple", "Seguridad Magnética"],
    "Obras": ["El Magnetismo en su Origen"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos PURA CALIDAD 1:1 de El Magnetismo en su Origen (Batch 5) y 2 términos sinápticos.');
