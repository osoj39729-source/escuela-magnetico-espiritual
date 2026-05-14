const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - El Espiritismo en su Asiento (Batch 3 - Claves 39 a 58)
const nuevosNodos = {
  "3198: tus misioneros, conforme a tu mandato.": {
    "PilotoDeCoherencia": "Sello de firma del Libro Primero.",
    "CitaInelutable": "Joaquín Trincado",
    "EjemploPedagogico": "Cierre de sección.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "3209: FIN DEL LIBRO PRIMERO": {
    "PilotoDeCoherencia": "Estructura formal que indica el fin de la primera parte teórica.",
    "CitaInelutable": "FIN DEL LIBRO PRIMERO",
    "EjemploPedagogico": "Transición de sección.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "3217: LIBRO SEGUNDO: LEYES, PRUEBAS Y MANIFESTACIONES": {
    "PilotoDeCoherencia": "Apertura de la sección sobre la mecánica de la mediumnidad y la física espiritual.",
    "CitaInelutable": "LIBRO SEGUNDO: LEYES, PRUEBAS Y MANIFESTACIONES",
    "EjemploPedagogico": "Paso de la teoría sociológica a la ciencia de los fenómenos.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "3225: CAPITULO I: Ley de las mediumnidades en general(1)": {
    "PilotoDeCoherencia": "Estructura formal del capítulo uno del segundo libro.",
    "CitaInelutable": "CAPITULO I: Ley de las mediumnidades en general",
    "EjemploPedagogico": "Introducción de la ley.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "3233: PREFACIO": {
    "PilotoDeCoherencia": "La ignorancia mediúmnica. Trincado siente 'lástima y pena' por cómo se usan las facultades mediúmnicas. Lamenta que los médiums desconozcan su misión científica y operen bajo supersticiones, siendo víctimas de centros dogmáticos disfrazados.",
    "CitaInelutable": "Lástima y pena causa ver el uso que se hace de las facultades medianímicas... demuestran los médiums el desconocimiento de su misión, de dónde proceden sus facultades y sus demostraciones.",
    "EjemploPedagogico": "Un médium que no estudia es como un piloto sin entrenamiento intentando volar un avión de pasajeros. Tarde o temprano, se estrella en el fanatismo.",
    "ConexionDoctrinal": ["Desconocimiento Mediúmnico", "Pena por la Ignorancia"],
    "NodosSimapticos": ["Médium Ciego"]
  },
  "3267: todas direcciones?": {
    "PilotoDeCoherencia": "La denuncia de los centros espiritualistas. La causa de los malos médiums son los centros de educación dogmáticos ('hijos predilectos de la religión'). Trincado advierte que estos maestros son 'obispos disfrazados' que tienen miedo de expulsar a los reptiles del fanatismo de sus pechos.",
    "CitaInelutable": "La causa de haber tan malos médiums, es porque los centros donde se educan son dogmáticos e hijos predilectos de la religión y cuyos maestros son obispos disfrazados.",
    "EjemploPedagogico": "El espiritualismo amalgama es un seminario católico disfrazado con una sábana blanca. Dicen comunicarse con espíritus, pero siguen rezando rosarios y cobrando.",
    "ConexionDoctrinal": ["Obispos Disfrazados", "Centros Dogmáticos", "Amalgama Espiritualista"],
    "NodosSimapticos": ["Reptiles del Fanatismo"]
  },
  "3655: Acotaciones:": {
    "PilotoDeCoherencia": "Nota técnica sobre la inserción anticipada de la Ley de Mediumnidades en este libro por la necesidad urgente de educar a los directores, antes de que se imprimiera el 'Código de Amor Universal'.",
    "CitaInelutable": "Por necesidad de adelantar a los médiums y los directores... se inserta aquí esta Ley del 'Código de Amor Universal', porque éste, aún se tardará en imprimirlo.",
    "EjemploPedagogico": "No podíamos esperar a publicar el manual de seguridad industrial (el Código) porque los operarios (médiums) ya se estaban electrocutando.",
    "ConexionDoctrinal": ["Urgencia Educativa", "Adelanto del Código"],
    "NodosSimapticos": []
  },
  "4067: Acotaciones:": {
    "PilotoDeCoherencia": "Aviso disciplinario: La experiencia obliga a exigir a todos los directores y médiums el estudio continuo del Método Supremo, de lo contrario, el guía los abandona (se retira) y ruedan al abismo.",
    "CitaInelutable": "La experiencia nos obliga a exigir a los directores de cátedras y a todos los médiums el estudio continuo del 'Método Supremo'... El ser para quien se había provisto... prevaricó y se le retiró ese guía.",
    "EjemploPedagogico": "La protección espiritual no es incondicional. Si no estudias, el maestro invisible se va de tu lado y te deja a merced de tus propios errores.",
    "ConexionDoctrinal": ["Prevaricación Mediúmnica", "Estudio Obligatorio"],
    "NodosSimapticos": []
  },
  "4078: CAPITULO II: LEY DE APORTES": {
    "PilotoDeCoherencia": "La física de los Aportes (materialización de objetos). No son milagros mágicos; responden a una estricta ley de fuerzas ('La Potencia por La Sabiduría'). Es un fenómeno físico-químico ejecutado por inteligencias invisibles.",
    "CitaInelutable": "Es ley de fuerzas en libertad, sus artículos son, La Potencia, por La Sabiduría... Voy a explicar cómo se efectúa el aporte. Para los negadores del espíritu... esta explicación es la luz.",
    "EjemploPedagogico": "Hacer aparecer una flor en un cuarto cerrado no es magia. El espíritu la desmaterializa afuera, la pasa por los poros de la pared en forma de gas, y la vuelve a materializar adentro. Es física molecular, no milagros.",
    "ConexionDoctrinal": ["Física del Aporte", "Fuerzas en Libertad", "Rechazo del Milagro"],
    "NodosSimapticos": ["Física Molecular del Espíritu"]
  },
  "4298: CAPITULO III: No se puede ir más allá del espiritismo": {
    "PilotoDeCoherencia": "Estructura formal que abre el axioma supremo de la Escuela.",
    "CitaInelutable": "CAPITULO III: No se puede ir más allá del espiritismo",
    "EjemploPedagogico": "El límite absoluto del conocimiento.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "4304: PÁRRAFO I (CAPITULO III: No se puede ir más allá del espiritismo)": {
    "PilotoDeCoherencia": "La universalidad del Espiritismo. Trincado declara que este postulado da 'al traste' con todos los credos. El espiritismo es la 'religión universal' en el sentido de religar al hombre con el Universo, sin ser una religión positiva (dogmática).",
    "CitaInelutable": "No os escandalice esta afirmación... daréis al traste con todos los credos religiosos y aún políticos. El espiritismo... es la religión universal, sin ser religión positiva.",
    "EjemploPedagogico": "No puedes ir más allá de la verdad porque fuera de ella solo hay mentira. El espiritismo es el techo del Universo.",
    "ConexionDoctrinal": ["Tope del Conocimiento", "Religión Universal no Positiva"],
    "NodosSimapticos": ["El Techo Cósmico"]
  },
  "4394: PÁRRAFO II: Definición del hombre Voy a dar una breve definición del hombre, pero firme y asentada para tener fundamento": {
    "PilotoDeCoherencia": "Definición atómica del hombre contra el materialismo. La ciencia materialista acierta al decir que el cuerpo es un conjunto de átomos unidos por 'afinidad', pero falla al creer que la muerte es el fin. Esos átomos constituyen otros organismos, pero el principio vital e inteligente sobrevive.",
    "CitaInelutable": "Sostiene el materialismo 'que el hombre es un conjunto de átomos que se reúnen en virtud de la ley de atracción (yo digo de afinidad), para dispersarse después de la muerte'.",
    "EjemploPedagogico": "El materialista ve cómo se desarma un coche (el cuerpo) y cree que el chofer (el espíritu) también murió en el desarme. Trincado dice: el chofer simplemente se bajó para armar otro coche.",
    "ConexionDoctrinal": ["El Chofer y el Coche", "Refutación Materialista", "Ley de Afinidad Atómica"],
    "NodosSimapticos": []
  },
  "4546: Acotaciones:": {
    "PilotoDeCoherencia": "El estrellamiento de los materialistas. Las notas al pie advierten que buscar los hechos del espíritu solo en la materia es inútil y conduce al fracaso de la ciencia académica, a pesar de que el espíritu da pruebas constantes.",
    "CitaInelutable": "Por esto, los materialistas se han estrellado siempre y se estrellarán, buscando en las cosas materiales, los hechos del espíritu.",
    "EjemploPedagogico": "El científico intenta medir el amor o la inteligencia con un termómetro. Se estrella porque usa la herramienta equivocada para la dimensión equivocada.",
    "ConexionDoctrinal": ["El Fracaso Materialista", "Límites de la Ciencia Académica"],
    "NodosSimapticos": ["El Termómetro Equivocado"]
  },
  "4564: PÁRRAFO III: ¿De dónde viene? Ya queda contestada esta pregunta arriba. De la substancia única. Pero hay que razonar": {
    "PilotoDeCoherencia": "Aniquilación del Génesis bíblico. Trincado rechaza la hipótesis del Adán bíblico hecho de barro directo por Dios. El hombre viene de la 'Sustancia única' (Éter) tras eones de evolución desde el mineral, planta y animal, no por un soplo mágico repentino.",
    "CitaInelutable": "Hay dos hipótesis muy dignas de estudiar: la del Adán bíblico, que supone al hombre formado directamente por Dios, de un poco de barro... Ya queda contestada esta pregunta arriba. De la substancia única.",
    "EjemploPedagogico": "El hombre no es un muñeco de barro cocido al que le soplaron en la nariz. Es el resultado de un largo viaje evolutivo de la materia y el espíritu a través de todas las especies.",
    "ConexionDoctrinal": ["Falso Adán de Barro", "Evolución Cósmica", "Sustancia Única"],
    "NodosSimapticos": ["El Muñeco Bíblico"]
  },
  "4694: PÁRRAFO IV: ¿ Para qué estamos aquí? Ni la tierra ni los mundos que compone el sistema solar; ni todos los de las constelaciones": {
    "PilotoDeCoherencia": "El propósito del exilio planetario. La Tierra no es la mansión definitiva del espíritu. Estamos aquí para aprender, purificarnos y progresar a través del trabajo en la materia, hasta ganar el derecho a mundos superiores.",
    "CitaInelutable": "Ni la tierra ni los mundos... son la patria definitiva o mansión de los espíritus, ni en todos ellos está el límite de la felicidad... Los mundos son infinitos, pero la creación sigue.",
    "EjemploPedagogico": "La Tierra es un aula de clases, no es tu casa definitiva. Estás aquí para rendir los exámenes (aprender amando), y cuando te gradúes, te irás a una universidad superior.",
    "ConexionDoctrinal": ["La Tierra como Aula", "Progreso Infinito", "Propósito de la Encarnación"],
    "NodosSimapticos": ["El Aula Planetaria"]
  },
  "4790: PÁRRAFO V: ¿A dónde va? De lo expuesto está ya contestada esta pregunta. El espíritu va a su centro, con su archivo": {
    "PilotoDeCoherencia": "El destino final y el Archivo del Espíritu. No vamos a ningún cielo estático; vamos a nuestro 'centro' de afinidad llevando el 'archivo' de nuestras acciones buenas o malas, para continuar la ascensión.",
    "CitaInelutable": "El espíritu va a su centro, con su archivo pobre o rico y con sus goces o sus penas.",
    "EjemploPedagogico": "Al desencarnar no vas a un tribunal de santos; tu propia mochila (tu archivo de acciones) es tan pesada o tan ligera que por pura física magnética te hundirá o te elevará a tu verdadero nivel.",
    "ConexionDoctrinal": ["El Archivo del Espíritu", "Justicia Magnética Autónoma"],
    "NodosSimapticos": ["La Mochila Kármica"]
  },
  "4903: CAPITULO IV: La voz universal solidaria": {
    "PilotoDeCoherencia": "La justificación de Allan Kardec (Espíritu). Trincado incluye una comunicación de 1912 del espíritu de Kardec, donde este se justifica, reconociéndose como 'uno de los crucificados' y advirtiendo que él ya sabía que la filosofía que le daban no sería comprendida inmediatamente.",
    "CitaInelutable": "Justificación — El prólogo de Kardec. Abril 14 de 1912. Por el medium Portillo... También soy yo de los crucificados, que están entre los que tienen que justificarse.",
    "EjemploPedagogico": "El espíritu de Kardec baja a la cátedra de Trincado para pasarle la posta oficial y certificar que su trabajo fue el prólogo de esta obra final.",
    "ConexionDoctrinal": ["Justificación de Kardec", "El Pase de la Antorcha"],
    "NodosSimapticos": ["El Prólogo de Kardec"]
  },
  "5028: Acotaciones:": {
    "PilotoDeCoherencia": "Precisión temporal sobre el Sexto y Séptimo Día. Trincado aclara en una nota que el 'Sexto Día' (la era de trabajo forzado y expiación) terminó el 5 de abril de 1912 con el Juicio de Mayoría, abriendo la puerta a la Nueva Era (Séptimo Día).",
    "CitaInelutable": "Cuando esto se escribía, aún estábamos en el sexto día; pero este terminó el 5 de abril de 1912, con el acto del Juicio de Mayoría y final.",
    "EjemploPedagogico": "El 5 de abril de 1912 el Universo cerró la libreta de calificaciones de la Tierra. El examen terminó, y empezó la etapa de limpiar la casa (la Comuna).",
    "ConexionDoctrinal": ["El Fin del Sexto Día", "5 de Abril de 1912", "Juicio de Mayoría"],
    "NodosSimapticos": ["Cierre de Libreta Cósmica"]
  },
  "5286: inédita de esas tradiciones...": {
    "PilotoDeCoherencia": "La tradición escrita en Éter, no en tinta. Jesús no escribió nada en papel ('del polvo escribíais') porque sabía que la religión lo iba a alterar. Él escribió su ley de amor con la 'tinta del éter', que es la acción moral que el espiritismo ahora decodifica.",
    "CitaInelutable": "Jesús... sabía que vosotros, sólo del polvo escribíais y él traía la ley de amor que sólo con la tinta del éter puede escribirse.",
    "EjemploPedagogico": "La Biblia de papel fue alterada miles de veces por los hombres. El archivo de éter (las acciones reales) no puede ser hackeado, y de ahí saca la información la Escuela Magnética.",
    "ConexionDoctrinal": ["La Tinta del Éter", "Jesús no Escribió Textos Materiales"],
    "NodosSimapticos": ["Archivo Inhackeable"]
  },
  "5575: Acotaciones:": {
    "PilotoDeCoherencia": "La condescendencia semántica. Una nota dictada por María (espíritu) explica por qué Trincado todavía debe usar la palabra 'Dios' en esta obra de transición: para ser entendido por una humanidad acostumbrada a esa tinta negra, esperando que las nuevas generaciones usen conceptos más elevados (Eloí/Creador).",
    "CitaInelutable": "Aun debo aquí, hijo mío, usar la palabra 'Dios' para ser mejor entendida, me dijo María. Vuestras leyes, son tinta de la tierra y la tinta es negra y la luz, no es tinta.",
    "EjemploPedagogico": "Es como hablarle a un niño pequeño: debes usar palabras simples al principio. La palabra 'Dios' es un andador temporal que la Escuela desechará cuando la humanidad aprenda a caminar racionalmente.",
    "ConexionDoctrinal": ["Uso Temporal del Concepto 'Dios'", "Tinta Negra vs Luz", "Condescendencia Pedagógica"],
    "NodosSimapticos": ["El Andador Semántico"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Obispos Disfrazados (Amalgama)": {
    "Definición": "Calificativo aplicado a los líderes de centros 'espiritualistas' que mezclan fenómenos mediúmnicos con dogmas religiosos (rezos, santos, misticismo). Trincado advierte que estos maestros no son espiritistas, sino sacerdotes camuflados que mantienen a los médiums en la ignorancia.",
    "Contexto": "El Espiritismo en su Asiento (Libro Segundo, Capítulo I).",
    "Conexiones": ["Reptiles del Fanatismo", "Espiritualismo Falso", "Peligro Mediúmnico"],
    "Obras": ["El Espiritismo en su Asiento", "Cuestionario Espírita Racional"]
  },
  "El Fin del Sexto Día (5 de Abril 1912)": {
    "Definición": "Fecha exacta y trascendental en la cronología trincadista. Marca el acto del 'Juicio de Mayoría y Final' de la Tierra, cerrando el ciclo milenario de trabajo expiatorio (Sexto Día) y abriendo la transición forzosa hacia la Comuna Universal (Séptimo Día o Era de Luz).",
    "Contexto": "El Espiritismo en su Asiento (Libro Segundo, Acotaciones del Cap. IV).",
    "Conexiones": ["Juicio de Mayoría", "Cierre de Libreta Cósmica", "El Reloj de Abraham"],
    "Obras": ["El Espiritismo en su Asiento", "Los Extremos se Tocan"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 20 nodos PURA CALIDAD 1:1 de El Espiritismo en su Asiento (Batch 3) y 2 términos sinápticos.');
