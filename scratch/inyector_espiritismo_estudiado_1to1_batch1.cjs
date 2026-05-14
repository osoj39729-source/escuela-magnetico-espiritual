const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - El Espiritismo Estudiado (Batch 1 - Caps. I-IV y Leyes)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "340: PRIMERA PARTE: EXISTENCIA DEL ESPIRITISMO": {
    "PilotoDeCoherencia": "El Espiritismo no es una moda ni una secta: es la existencia misma del universo manifestada en leyes. El Espiritismo existe desde antes de que el hombre pusiera nombre a las cosas, porque sus leyes son las que rigen cada átomo, cada estrella y cada espíritu. Negar el Espiritismo es negar la existencia de la inteligencia en el universo.",
    "CitaInelutable": "El Espiritismo existe porque el universo existe; y el universo existe porque el amor existe.",
    "EjemploPedagogico": "Es como negar la ley de gravedad: puedes ignorarla pero si te caes, la gravedad no te perdonará por tu ignorancia. Las leyes del Espiritismo actúan aunque el hombre no las conozca.",
    "ConexionDoctrinal": ["Existencia", "Leyes Eternas", "Universo Solidarizado"],
    "NodosSimapticos": ["Gravedad del Espíritu", "Antes del Nombre", "Ley sin Permiso"]
  },
  "346: CAP. I: LO QUE FORMA Y SE LLAMA ESPIRITISMO": {
    "PilotoDeCoherencia": "El Espiritismo es el conjunto de leyes que rigen las relaciones entre los espíritus, los mundos y el Creador. No es lo que los charlatanes llaman 'espiritismo' (comunicaciones con muertos para curiosidad). Es la ciencia, la ética y el gobierno de todo lo que existe bajo la ley de amor.",
    "CitaInelutable": "El Espiritismo real es el tejido invisible que mantiene cohesionado el universo.",
    "EjemploPedagogico": "Es como la diferencia entre 'astronomía' y 'astrología': una es ciencia de leyes; la otra es especulación. El Espiritismo Racional es la astronomía del espíritu; la charlatanería es su astrología.",
    "ConexionDoctrinal": ["Definición", "Ciencia vs Charlatanería", "Gobierno Universal"],
    "NodosSimapticos": ["Astronomía del Espíritu", "Tejido Invisible", "Ciencia de Leyes"]
  },
  "473: CÓMO SE FORMA EL ESPIRITISMO": {
    "PilotoDeCoherencia": "El Espiritismo se forma por la unión de todas las leyes del universo bajo el principio del amor. Cada ley (gravitación, afinidad, justicia) es un artículo de la Constitución del Espiritismo. El universo entero es el mejor y único libro de texto del espiritismo.",
    "CitaInelutable": "Cada ley natural es un capítulo del Código de Amor Universal.",
    "EjemploPedagogico": "Es como una empresa: tiene estatutos (leyes naturales), departamentos (mundos y planos) y un consejo directivo (espíritus elevados). El Espiritismo es esa empresa infinita de progreso gestionada por el amor.",
    "ConexionDoctrinal": ["Formación", "Leyes Articuladas", "Constitución Universal"],
    "NodosSimapticos": ["Empresa del Amor", "Estatutos de Luz", "Código Natural"]
  },
  "592: CAP. II: PATERNIDAD DE LOS ESPÍRITUS": {
    "PilotoDeCoherencia": "Todos los espíritus son hijos del mismo Padre. No hay razas espirituales superiores, ni ángeles de primera clase y demonios de segunda. Hay espíritus en diferente grado de progreso, todos con el mismo origen y el mismo destino: regresar al Padre siendo maestros de la creación. La paternidad divina garantiza la igualdad absoluta de origen.",
    "CitaInelutable": "Somos hijos del mismo Padre: distintos en progreso, iguales en origen y destino.",
    "EjemploPedagogico": "Es como una familia grande: el hermano mayor ya sabe leer y el pequeño aún gatea. Pero son hijos del mismo padre y tendrán los mismos derechos cuando crezcan. Eloí nunca deshereda a ningún hijo.",
    "ConexionDoctrinal": ["Paternidad Divina", "Igualdad de Origen", "Progreso Diferencial"],
    "NodosSimapticos": ["Familia Cósmica", "Hermano Mayor", "Mismo Destino"]
  },
  "724: CAÍN Y ABEL: LA PRIMERA GUERRA FRATRICIDA": {
    "PilotoDeCoherencia": "Caín y Abel no son solo personajes bíblicos: son el símbolo eterno de la guerra entre el instinto (Caín) y el amor (Abel). El instinto puede matar al amor momentáneamente, pero la ley de afinidad devuelve a Abel (la conciencia del amor) en cada nueva era. La humanidad es Caín aprendiendo dolorosamente a ser Abel.",
    "CitaInelutable": "Caín mató a Abel; pero no mató al amor, que resucita en cada nuevo ciclo.",
    "EjemploPedagogico": "Es como una mala cosecha que destruye el grano, pero la semilla guardada florece la próxima temporada. El amor es esa semilla guardada: ningún Caín puede destruirla definitivamente.",
    "ConexionDoctrinal": ["Caín y Abel", "Instinto vs Amor", "Ciclos de Resurrección"],
    "NodosSimapticos": ["Semilla del Amor", "Instinto Fratricida", "Ciclo de Abel"]
  },
  "888: MANDATO DEL PADRE A SUS HIJOS": {
    "PilotoDeCoherencia": "El mandato del Padre a cada nuevo espíritu que envía al mundo es preciso y doble: 'Id y acrecentad la Creación; y cuando seáis Maestros, volved a Mí'. La sanción moral es igualmente concisa: 'Si odias, tendrás que amar; si matas, resucitarás al muerto'. Es el código mínimo e irrenunciable de la vida espiritual.",
    "CitaInelutable": "Id, hijos míos, acrecentad la Creación; cuando seáis Maestros, venid a mí.",
    "EjemploPedagogico": "Es como el padre que manda al hijo a estudiar fuera: 'Aprende, trabaja honradamente y cuando seas profesional, vuelve para construir juntos'. El hijo que regresa sin diploma debe repetir el ciclo.",
    "ConexionDoctrinal": ["Mandato del Padre", "Maestros de la Creación", "Código Mínimo"],
    "NodosSimapticos": ["Diploma de Maestro", "Carta Política", "Ciclo de Retorno"]
  },
  "971: EL MUNDO DE EXPIACIÓN": {
    "PilotoDeCoherencia": "El mundo de expiación es el teatro donde el espíritu actúa todos los roles: víctima, agresor, sabio e ignorante. La expiación no es un castigo divino sino la oportunidad de vivir las consecuencias de las decisiones propias. En la Tierra, cada hombre 'se paga y se cobra' a sí mismo con desgana pero por obligación de la Ley.",
    "CitaInelutable": "El mundo de expiación es el aula donde el espíritu aprende pagando sus propias deudas.",
    "EjemploPedagogico": "Es como la práctica clínica de un médico: debe vivir las noches de guardia, los errores de diagnóstico y los éxitos. Solo así aprende. La Tierra es la guardia perpetua del espíritu en aprendizaje.",
    "ConexionDoctrinal": ["Expiación", "Responsabilidad", "Teatro de la Vida"],
    "NodosSimapticos": ["Guardia Perpetua", "Deuda Propia", "Teatro de Roles"]
  },
  "1165: 120 MILLONES: LA SANGRE DE LAS RELIGIONES": {
    "PilotoDeCoherencia": "El Maestro presenta la estadística del horror: 120 millones de seres humanos ejecutados por las religiones en 57 siglos. No es retórica: son datos de la Biblioteca Roja de la Sociedad Filológica. La religión es la institución más asesina de la historia humana. Esta sangre es el acta de acusación definitiva que la Escuela presenta ante el Juicio de la Era.",
    "CitaInelutable": "120 millones de muertos son el precio de Dios negociado por la religión.",
    "EjemploPedagogico": "Es como el contador forense que analiza los libros de una empresa criminal: los números no mienten. Los 120 millones son los libros de la empresa llamada Iglesia. La Escuela es el auditor que los hace públicos.",
    "ConexionDoctrinal": ["Crímenes Religiosos", "Inquisición", "Acta de Acusación"],
    "NodosSimapticos": ["Auditor Forense", "Libros del Crimen", "Empresa Asesina"]
  },
  "1438: LEY ÚNICA DEL ESPIRITISMO: EL AMOR": {
    "PilotoDeCoherencia": "Después del catálogo de horrores religiosos, el Maestro respira y declara la ley única que los vence todos: el Amor. El amor no es sentimentalismo: es la fuerza estructurante del universo, la ley que sobrevive a todos los crímenes y vuelve a imponerse. Cada crimen de la religión no pudo matar al amor porque la ley es más fuerte que cualquier institución.",
    "CitaInelutable": "El amor es la ley única porque es la única que el universo obedece.",
    "EjemploPedagogico": "Es como el sol que sigue saliendo cada mañana aunque haya habido tormenta toda la noche. Los crímenes son la tormenta; el amor es el sol. Nadie ha podido apagar el sol.",
    "ConexionDoctrinal": ["Amor como Ley", "Victoria del Amor", "Fuerza Estructurante"],
    "NodosSimapticos": ["Sol de la Ley", "Tormenta de Crímenes", "Ley que Sobrevive"]
  },
  "1512: LEY DE AFINIDAD: EL IMÁN INTELIGENTE": {
    "PilotoDeCoherencia": "La Ley de Afinidad es el mecanismo por el cual el amor del Padre baña todo el universo y atrae a los seres hacia sus semejantes en progreso. No es solo atracción física (magnetismo): es la inteligencia del amor que organiza las familias, los pueblos y los mundos según el grado de vibración de cada espíritu.",
    "CitaInelutable": "La afinidad es el amor del Padre expresado como organización inteligente del universo.",
    "EjemploPedagogico": "Es como el sistema de recomendaciones de una gran biblioteca: te sugiere libros según los que ya leíste y disfrutaste. La afinidad es el sistema de recomendaciones del universo que te pone junto a los hermanos que más pueden ayudarte a crecer.",
    "ConexionDoctrinal": ["Afinidad", "Magnetismo Inteligente", "Organización Familiar"],
    "NodosSimapticos": ["Biblioteca Cósmica", "Recomendaciones del Amor", "Imán de Progreso"]
  },
  "1593: LEY DE JUSTICIA: CIEGA Y TODO OJOS": {
    "PilotoDeCoherencia": "La Ley de Justicia es 'absolutamente ciega para lograr sus fines, pero toda ojos para obrar sus hechos'. Es decir: no hay excepciones, no hay favoritismos, pero tampoco hay crueldad. Actúa con precisión matemática para dar a cada uno lo que le corresponde según sus actos, asegurando la armonía magnética del conjunto.",
    "CitaInelutable": "La justicia divina: ciega para el privilegio, con ojos para cada hecho.",
    "EjemploPedagogico": "Es como la balanza de un laboratorio de precisión: no importa quién pone el objeto, siempre mide el peso exacto. No hace descuentos al rico ni recargos al pobre. La justicia divina es esa balanza sin errores.",
    "ConexionDoctrinal": ["Justicia Divina", "Precisión Matemática", "Armonía Magnética"],
    "NodosSimapticos": ["Balanza de Precisión", "Sin Descuentos", "Todo Ojos"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Diccionario Sináptico
const terminosDic = {
  "Espiritismo (Existencia)": {
    "Definición": "Conjunto de leyes eternas que rigen las relaciones entre espíritus, mundos y el Creador, preexistente a toda religión y verificable por la razón y la ciencia.",
    "Contexto": "Primera Parte de El Espiritismo Estudiado.",
    "Conexiones": ["Leyes Naturales", "Amor", "Ciencia"],
    "Obras": ["El Espiritismo Estudiado", "Filosofía Austera Racional"]
  },
  "Mandato del Padre": {
    "Definición": "Instrucción fundamental emitida a cada espíritu al nacer: crecer, trabajar en la creación y regresar al Padre cuando sea Maestro, bajo la sanción moral de que todo odio debe convertirse en amor.",
    "Contexto": "Capítulo III de El Espiritismo Estudiado.",
    "Conexiones": ["Misión", "Maestro de Creación", "Retorno"],
    "Obras": ["El Espiritismo Estudiado", "Buscando a Dios"]
  },
  "Ley de Afinidad": {
    "Definición": "Principio universal que atrae a los seres, formas y espíritus hacia aquellos de similar grado de vibración y progreso, garantizando la organización armónica del universo.",
    "Contexto": "Capítulo IV de El Espiritismo Estudiado.",
    "Conexiones": ["Amor", "Magnetismo", "Organización"],
    "Obras": ["El Espiritismo Estudiado", "Conócete a ti mismo"]
  },
  "Ley de Justicia": {
    "Definición": "Ley universal que opera con precisión matemática para dar a cada espíritu las consecuencias exactas de sus actos, sin favoritismos ni crueldad, garantizando la armonía del conjunto.",
    "Conexiones": ["Afinidad", "Causa y Efecto", "Armonía"],
    "Obras": ["El Espiritismo Estudiado", "Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 11 nodos 1:1 de El Espiritismo Estudiado (Batch 1 - Caps. I-IV) y 4 términos sinápticos.');
