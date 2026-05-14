const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - El Espiritismo Estudiado (Batch 4 - Patria, Régimen y Carta Orgánica)
const nuevosNodos = {
  "5993: CAPITULO NOVENO: LA PATRIA DEL ESPIRITISMO": {
    "PilotoDeCoherencia": "La patria del Espiritismo es el universo infinito. Como todos los espíritus son hijos del mismo Padre, todos los mundos son herencia común. El Espiritismo no reconoce fronteras planetarias ni exclusividades cósmicas: la pluralidad de mundos habitados es la geografía natural del espíritu.",
    "CitaInelutable": "La patria de los espíritus es todo el universo; cada mundo es una habitación de la misma casa.",
    "EjemploPedagogico": "Es como un ciudadano del mundo que no necesita pasaporte porque toda la Tierra es su casa. El espíritu es ciudadano del cosmos; su pasaporte es el amor.",
    "ConexionDoctrinal": ["Patria Universal", "Pluralidad de Mundos", "Herencia Común"],
    "NodosSimapticos": ["Ciudadano del Cosmos", "Casa Infinita", "Geografía del Espíritu"]
  },
  "6064: EL PATRIOTISMO ES LEY INELUDIBLE": {
    "PilotoDeCoherencia": "Aunque el Espiritismo borra las fronteras, el patriotismo local es ley ineludible mientras haya divisiones, porque es el entrenamiento para el amor universal. Quien no ama a la tierra donde nace y a los hermanos que lo rodean, mal puede amar al universo. El patriotismo verdadero es amor expansivo, no odio al extranjero.",
    "CitaInelutable": "El amor patrio es la escuela primaria del amor universal.",
    "EjemploPedagogico": "Es como el amor a la familia: amar a tus padres y hermanos no significa odiar a los vecinos. El patriotismo es el amor a tu familia grande (la nación) como paso previo a amar a la humanidad entera.",
    "ConexionDoctrinal": ["Patriotismo", "Escalón del Amor", "Universalismo"],
    "NodosSimapticos": ["Amor Expansivo", "Familia Grande", "Escuela de Amor"]
  },
  "6294: CAPÍTULO DIEZ: EL RÉGIMEN DEL ESPIRITISMO": {
    "PilotoDeCoherencia": "Todo gobierno tiene una política y un régimen. La política del Creador es la Unidad Universal (Amor). Su régimen forzoso en la Tierra, derivado de esa unidad, es el Comunismo de amor y ley (Comuna). No es el comunismo de la violencia política, sino la administración equitativa del trabajo y el usufructo común.",
    "CitaInelutable": "El régimen del Espiritismo es el trabajo común y el usufructo común bajo la ley del amor.",
    "EjemploPedagogico": "Es como el cuerpo humano: cada órgano trabaja para el conjunto y la sangre (recursos) se distribuye según la necesidad de cada célula. Ese es el régimen natural del universo.",
    "ConexionDoctrinal": ["Régimen", "Comunismo de Amor", "Trabajo y Usufructo"],
    "NodosSimapticos": ["Cuerpo Social", "Administración Universal", "Comuna de Ley"]
  },
  "6318: EL RÉGIMEN DE LA TIERRA HASTA HOY": {
    "PilotoDeCoherencia": "El régimen histórico de la Tierra ha sido la falacia, el engaño y el fraude, justificados por la 'política de Dios' de las religiones. A esto se le llama espiritualismo. La inmensa mayoría de los espíritus encarnados están listos para la ley del trabajo común, pero el sistema de explotación religioso-capitalista los mantiene divididos.",
    "CitaInelutable": "El régimen histórico del engaño fue sostenido por la religión y bendecido por la ignorancia.",
    "EjemploPedagogico": "Es como una finca donde el administrador roba las cosechas diciendo que es orden del dueño (Dios). La Escuela es el dueño que llega para despedir al administrador falso y repartir la tierra entre los trabajadores.",
    "ConexionDoctrinal": ["Régimen Histórico", "Falacia", "Explotación"],
    "NodosSimapticos": ["Administrador Falso", "Finca Robada", "Fin del Engaño"]
  },
  "6546: TERCERA PARTE: FACULTADES MEDIANÍMICAS": {
    "PilotoDeCoherencia": "Se abre la tercera parte, dedicada al estudio riguroso de las facultades medianímicas, separando la verdadera ciencia espiritual de la superchería y el milagrerismo. Se establece la necesidad de un método único y racional para dirigir las sesiones y cultivar los instrumentos.",
    "CitaInelutable": "Las facultades medianímicas son ciencia, no milagro; su uso exige método, no superstición.",
    "EjemploPedagogico": "Es como pasar de la alquimia a la química moderna: se dejan los sortilegios y se adoptan los métodos de laboratorio. Esta sección es el laboratorio del espíritu.",
    "ConexionDoctrinal": ["Facultades Medianímicas", "Método Científico", "Fin del Milagrerismo"],
    "NodosSimapticos": ["Laboratorio Espiritual", "Ciencia vs Superstición", "Método Único"]
  },
  "6550: QUÉ SON Y FORMA RACIONAL DE PRACTICARLAS": {
    "PilotoDeCoherencia": "Denuncia el estado de más del 90% de los centros espiritistas: llenos de milagrerismo, ignorancia y amalgama religiosa. Este libro se impone como la 'Carta Orgánica' y el código rector para limpiar la práctica del espiritismo, exigiendo que las sesiones se rijan por la razón, el orden y la dignidad.",
    "CitaInelutable": "La práctica del Espiritismo debe ser tan limpia como la verdad que busca.",
    "EjemploPedagogico": "Es como afinar una orquesta donde cada uno tocaba cualquier nota: suena a ruido (amalgama). El Maestro entrega la partitura y la batuta para que el ruido se vuelva sinfonía.",
    "ConexionDoctrinal": ["Práctica Racional", "Limpieza de Centros", "Amalgama Religiosa"],
    "NodosSimapticos": ["Orquesta Afinada", "Partitura de Luz", "Batuta de la Razón"]
  },
  "6646: CARTA ORGÁNICA DE LA ESCUELA": {
    "PilotoDeCoherencia": "El Maestro se presenta con su investidura completa: Maestro Fundador de la Escuela Magnético-Espiritual de la Comuna Universal y Secretario de los Consejos del Padre. Desde esta autoridad, promulga los códigos que regirán a la humanidad en la nueva era.",
    "CitaInelutable": "La autoridad del Maestro no se pide, se ejerce por mandato de los Consejos Superiores.",
    "EjemploPedagogico": "Es como el embajador plenipotenciario que presenta sus credenciales antes de firmar el tratado. El Maestro presenta sus credenciales cósmicas para fundar la Comuna.",
    "ConexionDoctrinal": ["Autoridad", "Escuela Magnético-Espiritual", "Consejos"],
    "NodosSimapticos": ["Embajador del Cosmos", "Credenciales de Luz", "Firma del Tratado"]
  },
  "6653: CÓDIGO DE AMOR UNIVERSAL": {
    "PilotoDeCoherencia": "Presentación del título del documento supremo que rige la vida del espíritu en todas sus manifestaciones. El Amor no como sentimiento débil, sino como Código legislativo, ejecutivo y judicial del universo entero.",
    "CitaInelutable": "El Amor es el código que legisla, ejecuta y juzga en el universo.",
    "EjemploPedagogico": "Es la Constitución del Cosmos. Ninguna ley humana puede contradecir este Código sin ser finalmente anulada por la naturaleza misma.",
    "ConexionDoctrinal": ["Código de Amor", "Constitución Cósmica", "Supremacía"],
    "NodosSimapticos": ["Ley Suprema", "Tribunal de Amor", "Legislación Divina"]
  },
  "6657: CONSTITUCIÓN Y PROCLAMACIÓN DE LA COMUNA": {
    "PilotoDeCoherencia": "El preámbulo de la Constitución de la Comuna de la Tierra, proclamada en nombre de ELOÍ UNIVERSAL (Uno y no Trino), en consonancia con el testamento de Abraham, los profetas, Jesús y los Maestros de la Cosmogonía. Es el documento fundacional de la nueva sociedad humana.",
    "CitaInelutable": "En nombre de Eloí, la Tierra es declarada Comuna de Amor y Ley.",
    "EjemploPedagogico": "Es como la Declaración de Independencia de un país, pero a escala planetaria y espiritual: la Tierra se declara independiente del dogma y ciudadana del universo.",
    "ConexionDoctrinal": ["Proclamación", "Comuna de la Tierra", "Eloí Uno y no Trino"],
    "NodosSimapticos": ["Independencia Planetaria", "Ciudadanía Universal", "Preámbulo de Luz"]
  },
  "6672: DECRETAMOS": {
    "PilotoDeCoherencia": "El decreto fundacional (Art. 1 y 2): Se proclama la Comuna de Amor y Ley en la Tierra, basada en la justicia del trabajo y el usufructo. Se decreta que el Espiritismo NO es religión, rechaza todo dogma, culto, rito o carrera sacerdotal, y consagra la libertad individual absoluta limitada solo por el perjuicio al prójimo.",
    "CitaInelutable": "Decretamos: El Espiritismo no es religión y la Tierra es una Comuna.",
    "EjemploPedagogico": "Es el acta de abolición de la esclavitud espiritual: se prohíbe el comercio con Dios (religión) y se instaura la hermandad de los trabajadores.",
    "ConexionDoctrinal": ["Decreto", "No Religión", "Abolición del Dogma"],
    "NodosSimapticos": ["Acta de Abolición", "Fin del Comercio Espiritual", "Hermandad de Ley"]
  },
  "6749-6753: LEY DE MEDIUMNIDADES Y PREFACIO": {
    "PilotoDeCoherencia": "Se introduce la Ley de las Mediumnidades (cuyo contenido pleno ya fue destilado como obra independiente). Se subraya la pena y lástima que causa el mal uso de las facultades por ignorancia de los médiums y culpa de los centros espiritistas dogmatizados que han mezclado la verdad con el error religioso.",
    "CitaInelutable": "La ignorancia del médium es la herramienta del detractor.",
    "EjemploPedagogico": "Es como dar un bisturí láser a un curandero que no sabe de anatomía. La herramienta es perfecta, pero en manos ignorantes causa pena y daño. Esta ley es la clase de anatomía para el médium.",
    "ConexionDoctrinal": ["Ignorancia", "Responsabilidad de Centros", "Regulación"],
    "NodosSimapticos": ["Bisturí Láser", "Anatomía del Espíritu", "Clase Magistral"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Régimen del Espiritismo (Comunismo)": {
    "Definición": "Sistema de administración natural del universo basado en la justicia del trabajo y el usufructo común, alejado de la violencia política y sostenido por la ley de amor.",
    "Contexto": "Capítulo X, Segunda Parte de El Espiritismo Estudiado.",
    "Conexiones": ["Comuna", "Trabajo", "Usufructo", "Justicia"],
    "Obras": ["El Espiritismo Estudiado", "Filosofía Austera Racional"]
  },
  "Patriotismo (Transición)": {
    "Definición": "Amor expansivo a la tierra natal y a los hermanos inmediatos, considerado como la escuela primaria y el paso necesario hacia el amor universal, sin implicar odio al extranjero.",
    "Contexto": "Capítulo IX, Segunda Parte de El Espiritismo Estudiado.",
    "Conexiones": ["Amor Universal", "Fronteras", "Universo"],
    "Obras": ["El Espiritismo Estudiado", "Conócete a ti mismo"]
  },
  "Constitución de la Comuna": {
    "Definición": "Documento supremo promulgado por la Escuela que decreta el fin de las religiones y los dogmas, instaurando la Comuna de Amor y Ley en la Tierra como reflejo del gobierno cósmico.",
    "Contexto": "Tercera Parte de El Espiritismo Estudiado.",
    "Conexiones": ["Decreto", "Carta Orgánica", "Comuna"],
    "Obras": ["El Espiritismo Estudiado", "Los Cinco Amores"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 11 nodos 1:1 de El Espiritismo Estudiado (Batch 4 - Patria, Régimen, Comuna) y 3 términos sinápticos.');
