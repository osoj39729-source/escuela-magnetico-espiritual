const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - El Espiritismo Estudiado (Batch 2 - Caps. V-X: Antigüedad, Moisés y Progreso)
const nuevosNodos = {
  "1735: CAP. V: ANTIGÜEDAD DEL ESPIRITISMO": {
    "PilotoDeCoherencia": "El Espiritismo no comenzó con Kardec en el siglo XIX. Es tan antiguo como el primer espíritu que preguntó '¿de dónde vengo?'. Moisés lo conoció, Jesús lo practicó, Abraham lo heredó. La Iglesia intentó enterrarlo; la Escuela lo desenterra con herramientas de razón y ciencia.",
    "CitaInelutable": "El Espiritismo es más antiguo que todas las religiones que pretenden negarlo.",
    "EjemploPedagogico": "Es como la electricidad: existió antes de que Franklin le pusiera nombre. Las tormentas eran eléctricas en la prehistoria aunque nadie supiera la palabra 'electricidad'. El Espiritismo es esa tormenta eterna de la inteligencia universal.",
    "ConexionDoctrinal": ["Antigüedad", "Preexistencia", "Historia Oculta"],
    "NodosSimapticos": ["Tormenta Prehistórica", "Antes de Kardec", "Electricidad sin Nombre"]
  },
  "1937: CAP. VI: MOISÉS Y EL ESPIRITISMO": {
    "PilotoDeCoherencia": "Moisés era espiritista. Conocía las leyes del espíritu mejor que la mayoría de sus contemporáneos. Lo que llamó 'comunicación con muertos' para prohibirla, era precisamente el espiritismo sin control que los 'Negros de Hollín' (espíritus aberrados) utilizaban para manipular al pueblo. Su prohibición no era contra el espíritu sino contra su uso incontrolado.",
    "CitaInelutable": "Moisés prohibió el espiritismo porque lo conocía demasiado bien.",
    "EjemploPedagogico": "Es como un médico que prohíbe la automedicación: no porque la medicina sea mala, sino porque sin conocimiento, el remedio puede envenenar. Moisés prohibió la 'automedicación' espiritual.",
    "ConexionDoctrinal": ["Moisés Espiritista", "Prohibición Justificada", "Espíritus Aberrados"],
    "NodosSimapticos": ["Automedicación Espiritual", "Médico del Pueblo", "Negros de Hollín"]
  },
  "2018: POR QUÉ MOISÉS PROHIBIÓ EL ESPIRITISMO": {
    "PilotoDeCoherencia": "La razón es revelada: los 'Negros de Hollín' del testamento de Abraham se hacían pasar por ángeles para manipular pueblos. Moisés, que sabía distinguirlos, prohibió el contacto indiscriminado con el plano espiritual para proteger a su pueblo de estos espíritus aberrados que causaban engaño y mal.",
    "CitaInelutable": "Los 'Negros de Hollín' son los espíritus aberrados que se disfrazan de ángeles para gobernar por el miedo.",
    "EjemploPedagogico": "Es como cerrar las puertas de una ciudad ante la amenaza de infiltrados enemigos: no porque la ciudad sea mala, sino porque los infiltrados la usarían en contra de sus propios ciudadanos.",
    "ConexionDoctrinal": ["Negros de Hollín", "Espíritus Aberrados", "Protección del Pueblo"],
    "NodosSimapticos": ["Infiltrados del Miedo", "Ángeles Falsos", "Protección Espiritual"]
  },
  "2547: CÓMO MOISÉS PROHIBIÓ EL ESPIRITISMO": {
    "PilotoDeCoherencia": "Moisés prohibió el espiritismo con la certeza del que tiene el poder. Su frase 'cuando tenga en mi mano la balanza de la justicia' revela que sabía que llegaría la hora en que la verdad triunfaría. Prohibió para proteger; pero la prohibición fue temporal y condicionada a la ignorancia del pueblo, no a la naturaleza del espíritu.",
    "CitaInelutable": "La prohibición de Moisés fue una vacuna, no un veredicto final.",
    "EjemploPedagogico": "Es como prohibir a los niños pequeños usar cuchillos en la cocina: no porque los cuchillos sean malos, sino porque los niños aún no tienen el juicio para usarlos con seguridad. Cuando crezcan (progresen), la prohibición cae.",
    "ConexionDoctrinal": ["Prohibición Temporal", "Vacuna Espiritual", "Juicio Maduro"],
    "NodosSimapticos": ["Vacuna de Moisés", "Niños con Cuchillos", "Balanza de Justicia"]
  },
  "2693: CUÁNDO EL HOMBRE COMPRENDE EL ESPIRITISMO": {
    "PilotoDeCoherencia": "El hombre puede presentir el Espiritismo cuando conoce las tres entidades (cuerpo, alma, espíritu). Puede ser espiritista cuando ciñe todos sus actos a la razón y lo investiga todo sin negar nada que no comprende. Solo llega a comprenderlo en plenitud cuando es Maestro de la Creación. Es un camino de gradualidad, no de revelación instantánea.",
    "CitaInelutable": "Se es espiritista cuando la razón y el amor guían cada acto sin excepción.",
    "EjemploPedagogico": "Es como el aprendizaje de un idioma: primero presentas las palabras sueltas (espíritu, alma, cuerpo), luego unes frases (leyes de afinidad), luego lees textos completos (cosmogonía). La maestría llega cuando el idioma ya es tu pensamiento.",
    "ConexionDoctrinal": ["Gradualidad", "Tres Entidades", "Razón como Guía"],
    "NodosSimapticos": ["Idioma del Espíritu", "Tres Palabras Base", "Maestría del Idioma"]
  },
  "2992: ES IMPOSIBLE SALIRSE DEL ESPIRITISMO": {
    "PilotoDeCoherencia": "Nadie puede escapar del Espiritismo porque nadie puede escapar de las leyes del universo. Incluso quienes actúan como 'demonios' actúan dentro del Espiritismo, pues son hijos del mismo Padre. La prohibición de Moisés al espiritismo confirma que existía y que era imposible ignorarlo.",
    "CitaInelutable": "Incluso quienes niegan el Espiritismo viven bajo sus leyes.",
    "EjemploPedagogico": "Es como el que dice que no cree en la gravedad: sigue cayendo si se asoma al abismo. Las leyes no piden creencia para funcionar. El Espiritismo es la gravedad del universo espiritual.",
    "ConexionDoctrinal": ["Imposibilidad de Escape", "Universalidad", "Leyes sin Permiso"],
    "NodosSimapticos": ["Gravedad Espiritual", "Abismo del Negador", "Ley sin Creencia"]
  },
  "3141: LA CREACIÓN EXISTE POR EL ESPIRITISMO": {
    "PilotoDeCoherencia": "Sin el espíritu como principio organizador, la materia sería caos inerte. La creación existe porque el espíritu la diseña, la sostiene y la progresa. La Teología crea dogmas; la Filosofía sienta axiomas. Un solo axioma del espiritismo vale más que mil dogmas teológicos porque el axioma es verificable y el dogma es prohibición de verificar.",
    "CitaInelutable": "La creación es el proyecto del espíritu materializado por amor.",
    "EjemploPedagogico": "Es como una casa: los ladrillos (materia) son necesarios, pero sin el arquitecto (espíritu) que diseña y dirige, los ladrillos son solo un montón de escombros. El Espiritismo es el arquitecto del universo.",
    "ConexionDoctrinal": ["Creación Espiritual", "Axioma vs Dogma", "Espíritu Organizador"],
    "NodosSimapticos": ["Arquitecto del Cosmos", "Escombros sin Espíritu", "Axioma Verificable"]
  },
  "3291: TODO PROGRESO ES ESPIRITISMO": {
    "PilotoDeCoherencia": "Cada avance de la ciencia material es, sin saberlo, un avance del Espiritismo. Cada descubrimiento que la química, la física o la astronomía hace, es una confirmación de las leyes del espíritu. Los materialistas hacen espiritismo sin saberlo, igual que el señor Jourdain hacía prosa sin saberlo.",
    "CitaInelutable": "El progreso humano es el Espiritismo avanzando disfrazado de ciencia material.",
    "EjemploPedagogico": "Es como alguien que aprende violín sin saber leer música. No sabe las notas en papel, pero la música que toca es real. El materialista que avanza en ciencia toca la música del Espiritismo sin leer la partitura.",
    "ConexionDoctrinal": ["Progreso Universal", "Materialismo Inconsciente", "Confirmación Científica"],
    "NodosSimapticos": ["Música sin Partitura", "Violinista Inconsciente", "Disfraz del Progreso"]
  },
  "3318: EL RETO SIN RESPUESTA": {
    "PilotoDeCoherencia": "El Maestro lanzó en 'Filosofía Austera Racional' y 'Primer Rayo de Luz' el reto: 'El Espiritismo es más materialista que el materialismo'. Nadie respondió el reto; el Catolicismo excomulgó la obra, lo que equivale a una confesión de derrota intelectual. El silencio y la excomunión son las dos formas que tienen los vencidos de reconocer su derrota.",
    "CitaInelutable": "La excomunión de la Iglesia es el aplauso involuntario de quien no puede refutar.",
    "EjemploPedagogico": "Es como un debate en que el adversario, al no poder responder, se levanta, llama al árbitro y pide que expulsen al contrincante. La expulsión no gana el argumento; lo pierde.",
    "ConexionDoctrinal": ["Reto Intelectual", "Excomunión como Derrota", "Victoria de la Razón"],
    "NodosSimapticos": ["Debate Ganado", "Árbitro Comprado", "Silencio del Vencido"]
  },
  "3641: SEGUNDA PARTE: FACULTADES DEL ESPIRITISMO": {
    "PilotoDeCoherencia": "La segunda parte de la obra estudia las facultades que el Espiritismo desarrolla en el hombre. No son poderes sobrenaturales: son las capacidades naturales del espíritu en progreso. Cada facultad es el desarrollo de un sentido espiritual que todos poseen en germen y que el estudio y el amor hacen florecer.",
    "CitaInelutable": "Las facultades del Espiritismo son los sentidos del espíritu en estado de madurez.",
    "EjemploPedagogico": "Es como los cinco sentidos del cuerpo: todos los tienen desde niños, pero se refinan con el uso y la práctica. Las facultades del espíritu son los cinco sentidos del alma: se refinan con el amor y el estudio.",
    "ConexionDoctrinal": ["Facultades Espirituales", "Desarrollo Natural", "Sentidos del Alma"],
    "NodosSimapticos": ["Sentidos del Espíritu", "Refinamiento de Amor", "Madurez Espiritual"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Diccionario Sináptico
const terminosDic = {
  "Negros de Hollín": {
    "Definición": "Espíritus aberrados o retrasados en su evolución que, según el testamento de Abraham citado por Trincado, se hacen pasar por ángeles para manipular y gobernar a los pueblos por el miedo.",
    "Contexto": "Capítulo VI de El Espiritismo Estudiado.",
    "Conexiones": ["Espíritus Aberrados", "Manipulación", "Moisés"],
    "Obras": ["El Espiritismo Estudiado", "Buscando a Dios"]
  },
  "Moisés (Espiritista)": {
    "Definición": "Reconocimiento de Moisés como conocedor avanzado de las leyes del espíritu, cuya prohibición del uso del espiritismo fue una medida protectora temporal ante el peligro de los espíritus aberrados.",
    "Contexto": "Capítulo VI de El Espiritismo Estudiado.",
    "Conexiones": ["Prohibición", "Espíritus Aberrados", "Protección"],
    "Obras": ["El Espiritismo Estudiado", "Primer Rayo de Luz"]
  },
  "Teología vs Filosofía": {
    "Definición": "Contraposición doctrinal entre la Teología (que crea dogmas irrevisables) y la Filosofía racional (que sienta axiomas verificables), siendo la segunda el único camino legítimo hacia la verdad.",
    "Conexiones": ["Dogma", "Axioma", "Razón"],
    "Obras": ["El Espiritismo Estudiado", "Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de El Espiritismo Estudiado (Batch 2 - Caps. V-X) y 3 términos sinápticos.');
