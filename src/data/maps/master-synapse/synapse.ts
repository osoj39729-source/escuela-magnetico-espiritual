
// MASTER SYNAPSE - Grafo Global de Interconexiones de toda la Obra de Trincado
// Este archivo es el mapa de mapas: conecta las ideas atómicas entre todos los libros
// Úsalo cuando la consulta trasciende un solo libro y toca temas transversales

export const MASTER_SYNAPSE_MAP = {
  id: "master-synapse",
  titulo: "Mapa de Sinapsis Doctrinal - Interconexiones de toda la Obra",
  descripcion: "Grafo de las ideas fundamentales que atraviesan todos los libros de Trincado. Cada nodo es una idea atómica; cada arista es una conexión doctrinal verificable.",

  // ═══════════════════════════════════════════════════════
  // NODOS CONCEPTUALES TRANSVERSALES (Ideas que aparecen en múltiples libros)
  // ═══════════════════════════════════════════════════════
  nodos_transversales: [
    {
      id: "eloi_principio_inteligente",
      concepto: "Eloí como Principio Inteligente Único",
      definicion_doctrinal: "El Creador no es una persona ni un Dios-juez. Es el Principio Inteligente Amorfo que rige el universo mediante leyes naturales. No castiga ni premia; opera mediante la ley de causas y efectos.",
      filtro_antidogma: "Eliminar TODO antropomorfismo divino. Eloí no tiene emociones humanas, no toma partido, no interviene milagrosamente.",
      presencia_en_libros: [
        { libro: "Buscando a Dios", seccion: "7750: El Asiento del Dios de Amor", enfasis: "Primera revelación del Principio de Amor" },
        { libro: "Cuestionario Espirita Racional", seccion: "262: Pregunta 18: ¿Cómo se llama nuestro Padre?", enfasis: "Sistematización en pregunta-respuesta" },
        { libro: "Filosofía Austera Racional", seccion: "El Creador como Amorfo", enfasis: "Definición filosófica técnica" },
        { libro: "Conócete a ti Mismo", seccion: "3269: Ley única y suprema de amor", enfasis: "Ley del Creador en relación al universo" },
        { libro: "Los Extremos se Tocan", seccion: "8795: Solo Eloí es propietario del universo", enfasis: "Consecuencia económica: nadie puede apropiarse" }
      ]
    },
    {
      id: "commune_universal",
      concepto: "La Commune Universal como meta social",
      definicion_doctrinal: "La commune no es un experimento político. Es el estado social que resulta inevitablemente cuando los espíritus han evolucionado lo suficiente para operar desde el amor universal. Es la condición material para que la ley del amor funcione.",
      filtro_antidogma: "La commune de Trincado NO es el comunismo marxista (materialismo puro). Es la organización social que emerge del amor espiritual. Diferenciar siempre.",
      diferencias_contextuales: {
        "Grado 4 (Espiritismo en su Asiento)": "La commune como régimen social necesario para el espiritismo",
        "Grado 6 (Los Cinco Amores)": "La commune como destino del amor que progresa en círculos",
        "Grado 9 (Profilaxis)": "La commune como resultado de generaciones educadas en la profilaxis",
        "Grado 10 (Los Extremos)": "La commune como el Día del Amor al final del ciclo histórico",
        "Grado 11 (Conócete)": "La commune como el fin de toda humanidad en todo mundo",
        "Grado 12 (Código)": "La commune con su constitución jurídica completa",
        "Grado 13 (Estatutos)": "La Escuela como primera commune funcional en miniatura"
      },
      advertencia: "La commune en cada libro se describe desde el ángulo de ese grado. No son definiciones contradictorias; son facetas del mismo prisma."
    },
    {
      id: "espiritu_individual_eterno",
      concepto: "El espíritu individual: eterno, autónomo, único responsable",
      definicion_doctrinal: "El espíritu es la fracción individualizada del Principio Inteligente. Es eterno, evolutivo y el único responsable de sus actos. No hereda deudas de otros espíritus. Usa la reencarnación para equilibrarse con la Creación.",
      filtro_antidogma: "CRÍTICO: El espíritu NO hereda karma de sus ancestros. NO paga deudas de sus padres. NO es castigado por pecados de vidas anteriores de OTROS. Cada espíritu responde solo por sus propios actos.",
      diferencias_contextuales: {
        "Grado 2 (Buscando a Dios)": "El alma como archivo-conciencia (definición básica)",
        "Grado 9 (Profilaxis)": "El espíritu no hereda deudas - aplicación práctica en la familia",
        "Grado 11 (Conócete)": "Anatomía técnica completa: cuerpo/alma/espíritu + el alma es temporal + solo el espíritu es responsable",
        "Grado 12 (Código)": "La procreación como atracción del espíritu por afinidad"
      }
    },
    {
      id: "ley_justicia_equilibrio",
      concepto: "La Ley de Justicia como equilibrio, no como venganza",
      definicion_doctrinal: "La justicia no es retributiva (castigo = crimen). Es distributiva (cada ser recibe lo que necesita para evolucionar) y de equilibrio (toda causa tiene su efecto proporcional en el tiempo adecuado).",
      filtro_antidogma: "CRÍTICO: La Ley de Justicia NO es el karma hindú retributivo. NO es el Juicio Final como castigo eterno. Es la ley de causas y efectos operando sin juez externo.",
      diferencias_contextuales: {
        "Grado 4 (Espiritismo)": "El juicio final como balance individual de cuentas",
        "Grado 6 (Los Cinco Amores)": "El amor a la justicia equitativa - justicia distributiva",
        "Grado 10 (Los Extremos)": "La ley de compensación operando en la historia colectiva",
        "Grado 12 (Código)": "La ley de justicia como fundamento del Código",
        "Profilaxis Grado 9": "El espíritu no hereda deudas - la justicia es individual, no heredada"
      }
    },
    {
      id: "magnetismo_fuerza_unica",
      concepto: "El magnetismo como fuerza única del universo",
      definicion_doctrinal: "El magnetismo espiritual es la manifestación de la fuerza del Principio Inteligente en todos los planos. No hay diferencia de naturaleza entre el magnetismo del imán, el magnetismo animal y el magnetismo espiritual. Son la misma fuerza en distintos grados de organización.",
      filtro_antidogma: "El magnetismo no es 'energía mística'. Es una fuerza física medible que opera en todos los planos de la existencia.",
      diferencias_contextuales: {
        "Grado 2 (Buscando a Dios)": "La Ley es una, la Substancia una: primera introducción del magnetismo",
        "Grado 7 (Magnetismo)": "Definición técnica completa, los grados, el método de aplicación",
        "Grado 4 (Espiritismo)": "El magnetismo como base de las comunicaciones mediúmnicas",
        "Grado 11 (Conócete)": "El espíritu acciona mediante el sistema nervioso - canal magnético"
      }
    },
    {
      id: "reencarnacion_mecanismo_equilibrio",
      concepto: "La reencarnación como mecanismo de equilibrio propio",
      definicion_doctrinal: "La reencarnación no es castigo ni premio. Es el mecanismo que el espíritu usa para ponerse en equilibrio con la Creación y con sus hermanos mediante múltiples experiencias. Cada encarnación es una nueva oportunidad, no una deuda acumulada.",
      filtro_antidogma: "La reencarnación de Trincado es radicalmente diferente al karma oriental: NO hay herencia de deudas entre vidas. Cada espíritu llega limpio a cada encarnación.",
      diferencias_contextuales: {
        "Grado 9 (Profilaxis)": "La concepción como atracción del espíritu que elige a sus padres",
        "Grado 11 (Conócete)": "El alma temporaria vs. el espíritu eterno - la reencarnación como renovación del alma",
        "Grado 4 (Espiritismo)": "El juicio individual al final de cada vida como preludio a la siguiente encarnación"
      }
    },
    {
      id: "jesus_misionero_esenico",
      concepto: "Jesús como misionero de la Escuela Esénica, no como Dios",
      definicion_doctrinal: "Jesús fue un espíritu misionero de alto grado que aprendió en la Escuela Esénica y aplicó el conocimiento magnético-espiritual de esa tradición. Sus 'milagros' son magnetismo aplicado. No fue Dios encarnado ni murió para redimir pecados.",
      filtro_antidogma: "CRÍTICO: Eliminar la divinidad de Jesús, la redención por su sangre, la resurrección sobrenatural y la fundación de la Iglesia Romana por su parte. Son invenciones posteriores a él.",
      diferencias_contextuales: {
        "Grado 1 (Strossmayer)": "Jesús no dio jefatura a Pedro - la Iglesia como usurpación",
        "Grado 2 (Buscando a Dios)": "Jesús como hombre de la Escuela Esénica, no sobrenatural",
        "Grado 9 (Profilaxis)": "Jesús como eslabón de la cadena de misioneros de 57 siglos",
        "Grado 10 (Los Extremos)": "Jesús misionero vs. Constantino que traiciona su mensaje",
        "Libro Libre: Jesús Hombre y no Dios": "Análisis histórico completo de su vida sin dogma"
      }
    },
    {
      id: "moises_legislador_temporal",
      concepto: "Moisés como legislador temporal, no como profeta eterno",
      definicion_doctrinal: "Moisés fue un estadista espiritual que codificó las leyes naturales en forma accesible para un pueblo en infancia espiritual. Su Decálogo y sus prohibiciones (incluyendo la del espiritismo) fueron medidas pedagógicas temporales, no leyes eternas.",
      filtro_antidogma: "Las leyes de Moisés no son la voluntad eterna de Dios. Son la pedagogía adecuada para una civilización específica en un momento histórico determinado.",
      diferencias_contextuales: {
        "Grado 2 (Buscando a Dios)": "El Decálogo como pedagogía temporal para Israel",
        "Grado 8 (Espiritismo Estudiado)": "La prohibición del espiritismo: medida pedagógica de Moisés para proteger a Israel inmaduro",
        "Grado 10 (Los Extremos)": "Moisés en el contexto histórico completo: de Adán a Jesús"
      }
    },
    {
      id: "historia_ciclos_ley",
      concepto: "La historia como ciclos de la Ley, no como voluntad de Dios",
      definicion_doctrinal: "Los eventos históricos son el resultado predecible de la aplicación colectiva de leyes espirituales. Las civilizaciones que aplican el amor prosperan; las que aplican el poder y el dogma colapsan. La guerra no es castigo de Dios; es consecuencia lógica.",
      filtro_antidogma: "La Providencia Divina de la historia (Dios dirige los imperios) es falsa. La historia tiene sus propias leyes observables.",
      presencia_en_libros: [
        { libro: "Discurso Strossmayer", seccion: "Epílogo - juzgado por la razón y los hechos" },
        { libro: "Buscando a Dios", seccion: "Historia criminal del Vaticano" },
        { libro: "Los Extremos se Tocan", seccion: "Todos los capítulos - arco histórico completo" }
      ]
    },
    {
      id: "trinidad_ser_humano",
      concepto: "La Trinidad cuerpo-alma-espíritu",
      definicion_doctrinal: "Cuerpo: instrumento físico mortal, sin responsabilidad propia. Alma: archivo temporario de experiencias, se renueva con cada vida. Espíritu: motor inteligente eterno, único responsable de todos los actos.",
      filtro_antidogma: "La Trinidad cristiana (Padre-Hijo-Espíritu Santo) es la versión externalizada y distorsionada de esta trinidad interna del ser.",
      diferencias_contextuales: {
        "Grado 2 (Buscando a Dios)": "Primera definición del alma como archivo",
        "Grado 11 (Conócete a ti Mismo)": "Definición técnica completa de cada componente",
        "Alfaquí Vademécum": "Sistematización en preguntas del maestro al discípulo",
        "Grado 9 (Profilaxis)": "El espíritu no hereda deudas: consecuencia práctica de la trinidad"
      }
    }
  ],

  // ═══════════════════════════════════════════════════════
  // ARISTAS CRÍTICAS (Conexiones que el AI debe priorizar)
  // ═══════════════════════════════════════════════════════
  aristas_criticas: [
    {
      id: "justicia_social_vs_ley_justicia",
      descripcion: "Diferencia entre Justicia Social y Ley de Justicia",
      nodo_a: "Justicia Social (concepto político moderno)",
      nodo_b: "Ley de Justicia de Trincado (ley natural del equilibrio)",
      diferencia_clave: "La justicia social es un reclamo político de redistribución. La Ley de Justicia de Trincado es la ley natural de causas y efectos que opera automáticamente sin necesidad de Estado. Son conceptos relacionados pero DISTINTOS en origen y mecanismo.",
      libros_relevantes: ["Los Cinco Amores: Capítulo 9", "Código de Amor Universal: Párrafo III", "Los Extremos se Tocan: Capítulo 2"]
    },
    {
      id: "commune_vs_comunismo",
      descripcion: "Commune de Trincado vs. Comunismo marxista",
      nodo_a: "Commune Universal (espiritismo racional)",
      nodo_b: "Comunismo marxista (materialismo dialéctico)",
      diferencia_clave: "La commune emerge del amor espiritual evolucionado. El comunismo marxista se impone por lucha de clases. La commune respeta la individualidad del espíritu; el comunismo la diluye en el colectivo. La commune es el resultado de la educación; el comunismo intenta ser su punto de partida.",
      libros_relevantes: ["El Espiritismo en su Asiento: Capítulo IV", "Los Cinco Amores: Quinta Parte", "Código de Amor Universal"]
    },
    {
      id: "mediumnidad_vs_charlataneria",
      descripcion: "Mediumnidad científica vs. espiritismo fenomenico",
      nodo_a: "Mediumnidad de la Escuela (facultad natural regulada)",
      nodo_b: "Espiritismo fenomenico (charlatanería comercial)",
      diferencia_clave: "La mediumnidad de la Escuela es: gratuita, reglamentada, al servicio de la commune, verificable y sin culto a personalidad. El espiritismo fenomenico es: comercial, sin reglamento, al servicio del médium, no verificable e idolátrico.",
      libros_relevantes: ["El Espiritismo en su Asiento: Segunda Parte", "Ley de Mediumnidades", "El Magnetismo en su Origen: Grados magnéticos"]
    },
    {
      id: "karma_vs_justicia_trincado",
      descripcion: "Karma oriental vs. Ley de Justicia de Trincado",
      nodo_a: "Karma (herencia de deudas entre vidas)",
      nodo_b: "Ley de Justicia de Trincado (equilibrio individual sin herencia)",
      diferencia_clave: "El karma oriental implica que las deudas de vidas pasadas se heredan y deben pagarse en vidas futuras. Trincado contradice esto explícitamente: el espíritu llega limpio a cada vida. La reencarnación es para ponerse en equilibrio con la Creación, no para pagar deudas de vidas anteriores.",
      libros_relevantes: ["Profilaxis de la Vida: Capítulo I (concepción)", "Conócete a ti Mismo: Párrafo VII (el alma temporaria)", "Código de Amor Universal: Ley de Justicia"]
    },
    {
      id: "laudo_vs_reglamento_normal",
      descripcion: "El Laudo de Rigor como medida histórica, no como ley eterna",
      nodo_a: "Laudo de Rigor (suspensión temporal histórica)",
      nodo_b: "Reglamento Normal de la Escuela (uso regulado de facultades)",
      diferencia_clave: "El Laudo fue una medida extraordinaria para deprogramar el abuso de mediumnidades a principios del siglo XX. No es una ley eterna de la Escuela. El estado normal es el uso regulado de las facultades según el reglamento, NO su suspensión permanente.",
      libros_relevantes: ["Estatutos y Reglamentos: Laudo de Rigor", "El Espiritismo en su Asiento: Enemigos del espiritismo", "Ley de Mediumnidades"]
    }
  ],

  // ═══════════════════════════════════════════════════════
  // MAPA DE CADENA CURRICULAR (Progresión de los 13 Grados)
  // ═══════════════════════════════════════════════════════
  cadena_curricular: [
    { grado: 1, libro: "Discurso Strossmayer", pregunta_que_abre: "¿Quién tiene autoridad espiritual real?", pregunta_que_deja: "Destruida la autoridad falsa, ¿quién es el Creador real?" },
    { grado: 2, libro: "Buscando a Dios", pregunta_que_abre: "¿Quién es el Creador real?", pregunta_que_deja: "¿Cómo defiendo esta verdad en el debate público?" },
    { grado: 3, libro: "El Primer Rayo de Luz", pregunta_que_abre: "¿Cómo arbitro un debate sin perder la verdad?", pregunta_que_deja: "¿Qué ES exactamente el espiritismo?" },
    { grado: 4, libro: "El Espiritismo en su Asiento", pregunta_que_abre: "¿Qué es el espiritismo y cuáles son sus leyes?", pregunta_que_deja: "¿Dónde sitúo el espiritismo en la historia del pensamiento?" },
    { grado: 5, libro: "Filosofía Austera Racional", pregunta_que_abre: "¿Cómo se ubica el espiritismo en la filosofía universal?", pregunta_que_deja: "¿Cómo aplico esta doctrina a la vida social concreta?" },
    { grado: 6, libro: "Los Cinco Amores", pregunta_que_abre: "¿Cómo se aplica el amor como ley social?", pregunta_que_deja: "¿Cuál es la herramienta técnica para actuar con este conocimiento?" },
    { grado: 7, libro: "El Magnetismo en su Origen", pregunta_que_abre: "¿Cómo funciona el magnetismo y cómo se aplica?", pregunta_que_deja: "¿Cómo se regulan legalmente estas facultades?" },
    { grado: 8, libro: "El Espiritismo Estudiado", pregunta_que_abre: "¿Cuáles son las leyes que rigen el uso del espiritismo?", pregunta_que_deja: "¿Cómo vivo este conocimiento en la práctica cotidiana?" },
    { grado: 9, libro: "Profilaxis de la Vida", pregunta_que_abre: "¿Cómo vivo la doctrina desde la concepción hasta la vejez?", pregunta_que_deja: "¿Cómo encaja esta doctrina en la historia completa de la humanidad?" },
    { grado: 10, libro: "Los Extremos se Tocan", pregunta_que_abre: "¿Qué lugar tiene la doctrina en el arco histórico total?", pregunta_que_deja: "¿Quién soy yo como espíritu individual en esa historia?" },
    { grado: 11, libro: "Conócete a ti Mismo", pregunta_que_abre: "¿Qué soy yo como espíritu?", pregunta_que_deja: "¿Cómo organizo la sociedad de espíritus en la tierra?" },
    { grado: 12, libro: "Código de Amor Universal", pregunta_que_abre: "¿Cuál es la ley de convivencia de los espíritus?", pregunta_que_deja: "¿Cómo se organiza institucionalmente quien guardará este Código?" },
    { grado: 13, libro: "Estatutos y Reglamentos", pregunta_que_abre: "¿Cómo se organiza la Escuela?", pregunta_que_deja: "Estudio libre: profundizar en los aspectos que cada espíritu necesite." }
  ]
};
