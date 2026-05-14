export interface QAEntry {
  id: string;
  keywords: string[];
  question: string;
  answer: string;
  grade?: number;
  categories: string[];
}

export const DOCTRINAL_KB: QAEntry[] = [

// 1. BIOGRAFÍA
{
  id: "bio-01",
  keywords: ["biografía", "vida", "nacimiento", "quién fue", "trincado", "joaquín", "historia", "uruguay", "salto"],
  question: "¿Quién fue Joaquín Trincado?",
  answer: `Mi querido estudiante, Joaquín Trincado nació el 19 de agosto de 1866 en Salto, Uruguay. Desde muy joven mostró una inquietud espiritual extraordinaria que lo llevó a investigar las causas de los males que afligen a la humanidad. Fue un autodidacta insaciable: estudió filosofía, ciencias naturales, magnetismo y las grandes religiones comparadas, siempre con el firme propósito de hallar la verdad que unificara todo conocimiento humano.

A lo largo de su vida ejerció múltiples oficios —tipógrafo, periodista, maestro— lo cual le permitió estar en contacto directo con las necesidades reales del pueblo. Esta experiencia le otorgó esa voz cándida y directa que caracteriza sus obras, pues nunca escribió para eruditos encerrados en torres de marfil, sino para el hombre y la mujer comunes que buscan respuestas genuinas.

En 1911 fundó en Buenos Aires la Escuela Magnético Espiritual de la Comuna Universal (EMECU). Joaquín Trincado partió de este plano el 6 de febrero de 1935 en Buenos Aires, dejando tras de sí una obra monumental de más de veinte volúmenes que constituyen un sistema completo de conocimiento racional, filosófico y espiritual. Como él mismo afirmó: "No vine a fundar religión alguna; vine a despertar la conciencia del hombre mediante la razón".`,
  categories: ["biografía", "trincado"], grade: 1,
},
{
  id: "bio-02",
  keywords: ["obras", "libros", "escritos", "publicaciones", "bibliografía", "cuántos libros"],
  question: "¿Cuáles fueron las principales obras de Joaquín Trincado?",
  answer: `La obra del Maestro Trincado comprende más de veinte volúmenes que abarcan todas las ramas del saber humano: "Los Misterios Revelados", "Espiritismo en su Asiento", "Filosofía Austera Racional", "Los Cinco Amores", "Filosofía Enciclopédica Universal", "Magnetismo en su Origen", "Profilaxis de la Vida", "Conócete a ti Mismo", "El Alfaquí", "Código de Amor Universal", "Los Extremos se Tocan", "El Gran Catorce", "Primer Rayo de Luz", "Buscando a Dios" y "Discurso del Obispo Stromayer", entre otras.

Cada obra corresponde a un grado de instrucción dentro de los trece grados de la EMECU, formando un sistema pedagógico completo y progresivo. Lo más notable es que Trincado escribió todo esto sin pretensión de lucro. No vendió sus libros; los puso al alcance de todos: "La verdad no tiene precio; el que la conoce tiene el deber de difundirla".`,
  categories: ["biografía", "trincado", "obras"], grade: 1,
},
{
  id: "bio-03",
  keywords: ["muerte", "fallecimiento", "partió", "1935", "buenos aires", "últimos días"],
  question: "¿Cuándo y dónde murió Joaquín Trincado?",
  answer: `El Maestro Joaquín Trincado entregó su espíritu al Creador el 6 de febrero de 1935 en Buenos Aires, Argentina. Sus últimos años estuvieron dedicados por completo a la enseñanza y a consolidar la estructura de la EMECU. Partió en la más absoluta paz, sin riquezas materiales, pues nunca buscó enriquecerse con su obra.

Su verdadera herencia es esta doctrina de luz que hoy nos permite comprender la vida, la muerte y el propósito de nuestra existencia. Como enseñó: "Morir es cambiar de estado, como el agua que se evapora no deja de ser agua". La EMECU continuó expandiéndose tras su partida a Chile, Perú, Colombia, México, España y muchos otros países, demostrando que las ideas verdaderas no dependen de un individuo para subsistir.`,
  categories: ["biografía", "trincado", "muerte"], grade: 1,
},

// 2. EMECU
{
  id: "emecu-01",
  keywords: ["emecu", "escuela", "magnético", "espiritual", "comuna", "universal", "qué es"],
  question: "¿Qué es la EMECU?",
  answer: `La Escuela Magnético Espiritual de la Comuna Universal (EMECU) fue fundada por Joaquín Trincado el 1 de enero de 1911 en Buenos Aires, Argentina. No es una religión, ni una secta ni un club social: es una escuela de perfeccionamiento moral e intelectual basada en el estudio racional de las leyes naturales y espirituales.

Tiene por objeto enseñar al hombre a conocerse a sí mismo, a desarrollar sus siete facultades espirituales —Percepción, Memoria, Imaginación, Atención, Juicio, Razón y Voluntad— y a practicar la moral universal de los Cinco Amores. Su lema es "Ciencia, Razón y Verdad". Se organiza en trece grados con sus libros correspondientes. Los templos son lugares de estudio sin altares, imágenes ni rituales externos. Como decía Trincado: "Aquí no venimos a adorar, venimos a comprender".`,
  categories: ["emecu", "escuela"], grade: 1,
},
{
  id: "emecu-02",
  keywords: ["inscribirse", "registrarse", "unirse", "ingresar", "incorporarse", "requisitos", "cómo unirse"],
  question: "¿Cómo puedo inscribirme en la EMECU?",
  answer: `La inscripción a la EMECU es un acto de voluntad personal y absolutamente libre. No se cobra tarifa alguna ni se exige contribución económica. Trincado fue claro: "Nadie puede comerciar con lo que pertenece a la humanidad entera". La inscripción es gratuita y accesible para cualquier persona sincera.

Los requisitos son: ser mayor de edad o contar con autorización paterna, tener disposición sincera hacia el estudio y el perfeccionamiento moral, y respetar los principios de la Escuela. No se requiere abandonar tu religión ni tus creencias previas. La EMECU respeta la libertad de conciencia de cada individuo. Lo esencial es la voluntad de aprender y practicar lo aprendido en tu vida diaria.`,
  categories: ["emecu", "inscripción"], grade: 1,
},
{
  id: "emecu-03",
  keywords: ["grados", "13", "trece", "niveles", "estudio", "progresión", "avance", "estructura"],
  question: "¿Cuáles son los 13 grados de la EMECU?",
  answer: `La EMECU está organizada en trece grados de instrucción, cada uno con su libro de texto:

Grado 1: "Discurso del Obispo Stromayer" — Introducción a la filosofía racional.
Grado 2: "Buscando a Dios" — Búsqueda racional del Creador.
Grado 3: "Primer Rayo de Luz" — Primeros principios espirituales.
Grado 4: "Espiritismo en su Asiento" — Fundamentos del espiritismo racional.
Grado 5: "Filosofía Austera Racional" — Moral y ética racional.
Grado 6: "Los Cinco Amores" — Los cinco amores universales.
Grado 7: "Magnetismo en su Origen" — Magnetismo espiritual.
Grado 8: "Espiritismo Estudiado" — Espiritismo avanzado.
Grado 9: "Profilaxis de la Vida" — Profilaxis y salud integral.
Grado 10: "Los Extremos se Tocan" — Polaridades universales.
Grado 11: "Conócete a ti Mismo / El Alfaquí" — Autoconocimiento.
Grado 12: "Código de Amor Universal" — Legislación del amor.
Grado 13: "Compilación de Reglamentos" — Reglamento general.

Cada grado tiene sus temas específicos. Al completarlos y demostrar comprensión, se avanza al siguiente grado.`,
  categories: ["emecu", "grados"], grade: 1,
},
{
  id: "emecu-04",
  keywords: ["templo", "sede", "lugar", "reunión", "circunscripción", "donde"],
  question: "¿Dónde se reúne la EMECU? ¿Qué es un templo?",
  answer: `Los templos de la EMECU son lugares de estudio, práctica del magnetismo y confraternidad. No tienen altares, imágenes ni rituales externos. La estructura se organiza en Circunscripciones con templo principal y filiales. Las reuniones contemplan sesiones de estudio de los libros de texto, prácticas de magnetismo y charlas doctrinarias.

Trincado enseñaba: "Tu mente es tu templo más sagrado; no profanes tu templo con pensamientos bajos". El verdadero templo es el cuerpo y la mente del individuo. Puedes estar en comunión con la Escuela en cualquier lugar donde eleves tu pensamiento, aunque las reuniones presenciales son fundamentales para el desarrollo magnético.`,
  categories: ["emecu", "templo"],
},

// 3. CREADOR
{
  id: "creador-01",
  keywords: ["dios", "creador", "qué es dios", "existe", "naturaleza de dios"],
  question: "¿Qué es el Creador según la doctrina de Trincado?",
  answer: `El Creador, según Trincado, no es un ser antropomórfico con barba sentado en un trono. Es el Principio Inteligente del universo, la Causa Primera de todo lo que existe, de naturaleza atómica y esencial. Es energía inteligente pura, presente en cada átomo, célula y estrella. No está separado de su creación; está inmanente en ella.

Trincado escribió: "Dios no castiga ni premia; Dios no juzga; Dios no necesita intermediarios. Dios es la causa suprema de cuanto existe, y el hombre accede a Él mediante el uso de su razón". Basta con utilizar la herramienta más divina que poseemos: nuestra facultad de razonar.`,
  categories: ["creador", "dios"], grade: 2,
},
{
  id: "creador-02",
  keywords: ["dios castiga", "infierno", "castigo divino", "ira de dios", "pecado", "condenación", "demonio", "diablo"],
  question: "¿El Creador castiga a los seres humanos?",
  answer: `Rotundamente no. El Creador no castiga, no premia, no se enoja ni se complace en el sufrimiento. La idea de un Dios castigador nace del miedo y la ignorancia de los antiguos. Como enseñaba Trincado: "Dios no castiga porque Dios es amor y justicia, y el amor no castiga, la justicia no se venga".

Todo lo que experimentamos como "castigo" es la consecuencia natural de nuestros actos mediante la Ley de Causa y Efecto. Debemos desterrar la idea de un infierno de fuego eterno. El verdadero "infierno" es la ignorancia, y el verdadero "cielo" es el conocimiento. Elimina el miedo de tu corazón y reemplázalo por la comprensión racional de las leyes naturales.`,
  categories: ["creador", "moral"], grade: 2,
},
// 4. FACULTADES ESPIRITUALES
{
  id: "facultades-01",
  keywords: ["facultades", "siete", "7", "espirituales", "percepción", "memoria", "imaginación", "atención", "juicio", "razón", "voluntad"],
  question: "¿Cuáles son las 7 facultades espirituales?",
  answer: `Las siete facultades espirituales son las herramientas del espíritu: 1. Percepción — captar las impresiones del mundo. 2. Memoria — conservar y evocar lo aprendido. 3. Imaginación — recrear y combinar imágenes para crear nuevas ideas. 4. Atención — dirigir y concentrar la mente. 5. Juicio — comparar, analizar y determinar la verdad. 6. Razón — la facultad suprema: deducir, relacionar y llegar a conclusiones verdaderas. 7. Voluntad — decidir y ejecutar, transformando el pensamiento en acción.

Como decía Trincado: "El hombre que desarrolla sus siete facultades espirituales se convierte en un semidiós en potencia". Son los siete rayos de luz que iluminan el camino del espíritu hacia su perfeccionamiento.`,
  categories: ["facultades", "espiritual"], grade: 4,
},
{
  id: "facultades-02",
  keywords: ["razón", "racional", "razonar", "pensamiento", "lógica", "inteligencia"],
  question: "¿Por qué la razón es la facultad suprema?",
  answer: `La razón es suprema porque es el instrumento mediante el cual el espíritu accede a la verdad. Todas las demás facultades le sirven: la percepción proporciona datos, la memoria los conserva, la imaginación los combina, la atención los enfoca, el juicio los evalúa, y la voluntad ejecuta lo que la razón determina.

Trincado afirmaba: "La razón es la chispa divina que el Creador depositó en el hombre para que pudiera comprender Su obra y elevarse hasta Él". La fe ciega no es virtud sino pereza mental. La verdadera fe es la confianza que nace del conocimiento racional. Desarrolla tu razón y verás cómo se disipan las sombras de la ignorancia.`,
  categories: ["facultades", "razón"], grade: 4,
},
{
  id: "facultades-03",
  keywords: ["desarrollar", "ejercitar", "potenciar", "mejorar", "facultades"],
  question: "¿Cómo se desarrollan las facultades espirituales?",
  answer: `Las facultades se desarrollan mediante el uso consciente y constante. La Percepción se cultiva observando con atención. La Memoria, mediante la recapitulación diaria. La Imaginación, leyendo, creando y visualizando. La Atención, concentrándose en una sola cosa. El Juicio, analizando desde múltiples ángulos. La Razón, con estudio metódico y razonamiento lógico. La Voluntad, enfrentando dificultades sin ceder ante la pereza.

Trincado insistía: "La facultad que no se usa se atrofia; la que se ejercita se fortalece". No basta con leer los libros; hay que aplicar lo aprendido en la vida cotidiana. El desarrollo de las facultades espirituales es el verdadero propósito de la existencia humana.`,
  categories: ["facultades", "práctica"],
},

// 5. ESPÍRITU Y MUERTE
{
  id: "espiritu-01",
  keywords: ["espíritu", "alma", "cuerpo", "triple", "naturaleza", "ser humano"],
  question: "¿Cuál es la naturaleza del ser humano según Trincado?",
  answer: `El ser humano es un compuesto de tres elementos: cuerpo, alma y espíritu. El cuerpo es el vehículo material que nos permite actuar en el mundo tangible. El alma es el fluido vital que anima al cuerpo y lo conecta con el espíritu. El espíritu es la esencia inmortal, el principio inteligente y eterno que constituye nuestro verdadero ser.

Trincado lo explicaba así: "El cuerpo es como el traje que vistes; el alma es como la electricidad que lo ilumina; el espíritu es tú mismo, el que dentro de ese traje piensa, siente y decide". Cuando el cuerpo muere, el espíritu continúa su existencia en el plano espiritual con toda su experiencia y conocimiento acumulado.`,
  categories: ["espíritu", "muerte"], grade: 3,
},
{
  id: "espiritu-02",
  keywords: ["muerte", "morir", "qué pasa después", "fin", "eternidad", "inmortalidad"],
  question: "¿Qué pasa después de la muerte?",
  answer: `La muerte no es el fin; es un cambio de estado, una transición del plano material al espiritual. Como el agua que se evapora no deja de ser agua, el espíritu que abandona el cuerpo no deja de ser espíritu. Al morir, el alma se desconecta del organismo y el espíritu queda en libertad para continuar su evolución.

En el plano espiritual, el espíritu conserva su individualidad, memoria y conciencia. No se convierte en una entidad abstracta ni se funde con un todo cósmico. Revisa su vida pasada, comprende sus errores y aciertos, y se prepara para su próxima encarnación si es necesario. Trincado afirmaba: "La muerte es el nacimiento a la verdadera vida". No hay que temer a la muerte; hay que comprenderla.`,
  categories: ["espíritu", "muerte"], grade: 3,
},
// 6. REENCARNACIÓN
{
  id: "reencarnacion-01",
  keywords: ["reencarnación", "renacer", "reencarnar", "vidas", "pasadas", "múltiples"],
  question: "¿Qué es la reencarnación según Trincado?",
  answer: `La reencarnación es una de las leyes más sabias del Creador y pilar fundamental de nuestra doctrina. El espíritu vive múltiples vidas, encarnando sucesivamente en diferentes cuerpos para continuar su proceso evolutivo. Cada encarnación es una oportunidad de aprendizaje.

Trincado decía: "Una sola vida no le basta al espíritu para aprender todo lo que necesita. Sería como pretender que un niño aprendiera toda la ciencia en un solo día de escuela". La reencarnación no es un castigo sino un sistema educativo diseñado para que cada espíritu alcance su pleno desarrollo. Cada vida es un grado en la escuela universal de la evolución espiritual.`,
  categories: ["reencarnación"], grade: 3,
},
{
  id: "reencarnacion-02",
  keywords: ["reencarnación animal", "perro", "gato", "animal", "migración"],
  question: "¿El ser humano puede reencarnar en un animal?",
  answer: `Rotundamente no. Trincado fue categórico: "El espíritu humano jamás retrocede en la escala evolutiva. Lo que ha subido no baja; lo que ha evolucionado no involuciona". El ser humano reencarna siempre como ser humano.

La evolución espiritual es ascendente, no regresiva. Un ser humano que vive guiado por el instinto parece más animal precisamente porque no ha desarrollado sus facultades superiores, pero sigue siendo un espíritu humano con todo el potencial de grandeza que eso implica.`,
  categories: ["reencarnación"], grade: 3,
},
{
  id: "reencarnacion-03",
  keywords: ["recordar", "vidas pasadas", "olvido", "memoria", "recuerdo"],
  question: "¿Por qué no recordamos nuestras vidas pasadas?",
  answer: `El olvido es una sabia disposición del Creador. Si recordáramos todo, nuestra mente no podría soportar esa carga y quedaríamos condicionados por experiencias de otros contextos. Trincado explicaba que el olvido nos permite enfrentar cada vida con frescura y libertad.

Sin embargo, sí llevamos las consecuencias en forma de tendencias, aptitudes y debilidades innatas. Un niño prodigio trae de vidas anteriores el desarrollo de esa facultad. Trincado decía: "Aunque no recuerdes, tu espíritu sí lo sabe todo. Confía en él y avanza".`,
  categories: ["reencarnación", "espíritu"], grade: 3,
},
// 7. MAGNETISMO
{
  id: "magnetismo-01",
  keywords: ["magnetismo", "fluido", "vital", "fuerza", "energía", "magnético"],
  question: "¿Qué es el magnetismo según Trincado?",
  answer: `El magnetismo es la fuerza vital que impregna toda la creación. Trincado lo define como el fluido que conecta al espíritu con el cuerpo y que permite la comunicación entre los seres vivos y los planos de la naturaleza. Existe el magnetismo animal —la fuerza vital inherente a los organismos— y el magnetismo espiritual —la fuerza que el espíritu humano puede desarrollar y dirigir conscientemente.

El magnetismo espiritual permite la curación magnética, la transmisión de pensamientos y la práctica de la mediumnidad. Trincado enseñaba: "El magnetismo es el puente entre el mundo material y el mundo espiritual; es la lingua franca del universo".`,
  categories: ["magnetismo"], grade: 7,
},
{
  id: "magnetismo-02",
  keywords: ["pases", "curación", "sanación", "imposición", "manos", "curar"],
  question: "¿Qué son los pases magnéticos?",
  answer: `Los pases magnéticos son la aplicación del magnetismo espiritual mediante la imposición de las manos sobre el cuerpo del enfermo. No son un ritual mágico sino una técnica basada en la transmisión de fluidos vitales del operador al paciente. Trincado enseñaba que todo ser humano posee magnetismo y puede desarrollarlo con estudio y práctica.

El pase magnético no sustituye la medicina científica; la complementa. Trincado era firmemente partidario de la medicina: "El magnetismo es profilaxis; la medicina es ciencia; ambas deben trabajar juntas para el bien del enfermo". El operador debe estar en buen estado moral y mental, pues la calidad del fluido depende de la pureza del pensamiento.`,
  categories: ["magnetismo", "salud"], grade: 7,
},

// 8. MEDIUMNIDAD
{
  id: "mediumnidad-01",
  keywords: ["mediumnidad", "médium", "espiritismo", "comunicación", "canal"],
  question: "¿Qué es la mediumnidad?",
  answer: `La mediumnidad es la facultad que permite al ser humano comunicarse con los espíritus desencarnados y con las fuerzas invisibles de la naturaleza. Todo ser humano posee esta facultad en mayor o menor grado, pero requiere desarrollo y disciplina para manifestarse de manera útil y segura.

Trincado distinguía entre la mediumnidad inconsciente —que se manifiesta espontáneamente causando confusión— y la mediumnidad consciente y educada, desarrollada dentro de la EMECU. "La mediumnidad sin estudio es un peligro; con estudio es una bendición". Los tipos principales incluyen: videncia, audición, escritura y curación.`,
  categories: ["mediumnidad"], grade: 8,
},
{
  id: "mediumnidad-02",
  keywords: ["obsesión", "peligro", "riesgo", "posesión", "maligno", "negativo"],
  question: "¿Qué peligros tiene la mediumnidad sin estudio?",
  answer: `La mediumnidad sin estudio puede abrir la puerta a serios peligros, siendo el principal la obsesión —la influencia perturbadora de espíritus inferiores sobre la mente del médium—. Trincado advertía: "El médium sin estudio es como un niño con un cuchillo: puede herirse a sí mismo y a los demás".

La obsesión se manifiesta desde pensamientos negativos persistentes hasta la influencia sobre la voluntad. Por eso es indispensable buscar instrucción seria. Dentro de la EMECU, el desarrollo mediumnímico se realiza de manera gradual, protegida y supervisada, enseñando al estudiante a protegerse mediante el magnetismo y el pensamiento elevado.`,
  categories: ["mediumnidad", "peligro"], grade: 8,
},
// 9. MORAL
{
  id: "moral-01",
  keywords: ["pecado", "pecadora", "culpa", "remordimiento", "pecaminoso"],
  question: "¿Existe el pecado según Trincado?",
  answer: `En nuestra doctrina, el pecado no existe como lo conciben las religiones tradicionales. Lo que llaman "pecado" no es más que ignorancia. El ser humano no peca porque sea malvado; actúa equivocadamente porque no sabe, porque no comprende las consecuencias de sus actos.

Trincado lo expresó con admirable claridad: "No hay pecado; hay ignorancia. El que sabe no peca; el que peca es porque no sabe. Y cuando llega a saber, deja de pecar por convicción, no por miedo". La virtud es el resultado natural del conocimiento. Cuando comprendemos que hacer daño a otro es hacernos daño a nosotros mismos, dejamos de hacerlo por inteligencia, no por temor al castigo.`,
  categories: ["moral"], grade: 5,
},
{
  id: "moral-02",
  keywords: ["regla de oro", "amar", "prójimo", "tratar", "respeto", "ética"],
  question: "¿Cuál es la regla de oro de la moral trincadista?",
  answer: `La regla de oro es: "No hagas a otro lo que no quieres que te hagan a ti". Este principio universal es la base de toda la ética racional. Pero Trincado fue más allá con la regla de plata: "Haz por los demás todo el bien que desearías que te hicieran a ti". No basta con abstenerse del daño; hay que activamente hacer el bien.

La virtud es su propia recompensa. No practicamos el bien para ganar el cielo ni para evitar el infierno; lo hacemos porque es la forma inteligente de vivir. "La virtud verdadera es aquella que se práctica sin que nadie la vea, sin esperar aplauso ni reconocimiento", enseñaba Trincado. La conciencia limpia es la mayor riqueza.`,
  categories: ["moral"], grade: 5,
},
// 10. LOS CINCO AMORES
{
  id: "amores-01",
  keywords: ["cinco amores", "5 amores", "qué son", "amores universales"],
  question: "¿Cuáles son los Cinco Amores?",
  answer: `Los Cinco Amores constituyen el sistema moral completo de la doctrina de Trincado, y son la base de toda relación humana sana. Son: 1. Amor a sí mismo —el fundamento, pues no puedes amar a otro si no te amas primero con criterio racional—. 2. Amor al prójimo —el amor universal a todos los seres humanos sin distinción—. 3. Amor a la familia —el amor al núcleo más cercano, a los padres, hijos, hermanos—. 4. Amor a la patria —el amor a la comunidad, al país y a la humanidad como gran familia—. 5. Amor al Creador —la suprema aspiración, el amor al Principio Inteligente que nos dio la vida y la razón—.

Estos cinco amores no son compartimentos estancos sino una escala ascendente que comienza en uno mismo y se expande hasta abarcar al universo entero. Trincado dedicó un libro entero a este tema: "Los Cinco Amores". En él demuestra que el ser que ama verdaderamente en estos cinco niveles ha alcanzado la plenitud moral.`,
  categories: ["cinco amores", "moral"], grade: 6,
},
{
  id: "amores-02",
  keywords: ["amor propio", "amarse", "amor a sí mismo", "egoísmo", "egoísta"],
  question: "¿Qué significa amar a sí mismo?",
  answer: `Amarse a sí mismo no es egoísmo ni vanidad; es el reconocimiento racional de nuestro propio valor como seres espirituales. Trincado enseñaba que el amor propio bien entendido es el fundamento de toda la moral. No puedes amar genuinamente al prójimo si no te amas primero a ti mismo con sabiduría.

Amar a sí mismo significa cuidar tu cuerpo —que es el templo del espíritu—, cultivar tu mente mediante el estudio, desarrollar tus facultades espirituales y mantener tu pensamiento elevado. Significa también respetarte lo suficiente como para no degradarte con vicios, pensamientos bajos o conductas contrarias a la razón.

"El que no se ama a sí mismo, no puede amar a nadie", decía Trincado. Pero este amor no debe confundirse con el egoísmo, que es el amor exagerado y exclusivo a uno mismo en detrimento de los demás. El verdadero amor propio es el que te impulsa a ser mejor cada día para poder servir mejor a los demás.`,
  categories: ["cinco amores", "moral"], grade: 6,
},

// 11. RELIGIÓN
{
  id: "religion-01",
  keywords: ["religión", "iglesia", "católica", "cristiana", "sacerdote", "cura", "pastor"],
  question: "¿Qué opina Trincado de la religión?",
  answer: `Trincado no era enemigo de la religión sino del dogma irracional. Respetaba profundamente la fe sincera de cada persona, pero se oponía categóricamente a las instituciones religiosas que imponían creencias mediante el miedo, la amenaza y la autoridad injustificada. Enseñaba: "Cree en lo que tu razón te dicte; no en lo que otro te imponga por la fuerza".

La EMECU no es una religión y Trincado no es un profeta ni un mesías. Él repetía constantemente: "Yo no vine a fundar religión; vine a enseñar al hombre a pensar por sí mismo". Rechazaba la necesidad de sacerdotes, intermediarios entre Dios y los hombres, ya que según su doctrina cada ser humano puede comunicarse directamente con el Creador mediante su razón.

Sin embargo, Trincado reconocía que las religiones han cumplido una función histórica al mantener vivos ciertos principios morales en la humanidad. Lo que critica es que las religiones se hayan estancado en dogmas que la ciencia y la razón ya han superado. "La religión del futuro será la religión de la ciencia y la razón", afirmaba.`,
  categories: ["religión"], grade: 1,
},
{
  id: "religion-02",
  keywords: ["jesús", "cristo", "dios hecho hombre", "hijo de dios", "salvador"],
  question: "¿Quién fue Jesús según Trincado?",
  answer: `Jesús fue un hombre extraordinario, un gran maestro de la humanidad, pero no fue Dios hecho hombre ni el único hijo de Dios. Trincado reconoce en Jesús al más grande exponente de la moral universal, al ser que más se acercó a la comunión con el Creador mediante el desarrollo de sus facultades espirituales.

Jesús nació, vivió y murió como todo ser humano. Su grandeza radica en su ejemplo de amor, sacrificio y sabiduría, no en una supuesta naturaleza divina que lo separa del resto de la humanidad. Trincado enseñaba: "Jesús es el modelo que todo ser humano debe imitar; no el ídolo que se debe adorar. Él mismo dijo: 'Todo lo que yo hago, vosotros también lo haréis y cosas mayores'".

Deificar a Jesús, según nuestra doctrina, es en realidad un acto de injusticia, pues lo coloca en un pedestal inalcanzable en lugar de presentarlo como el ejemplo que todos podemos seguir. Cada ser humano lleva dentro de sí el potencial divino que Jesús manifestó; lo que nos falta es el desarrollo de nuestras facultades.`,
  categories: ["religión"], grade: 2,
},
{
  id: "religion-03",
  keywords: ["biblia", "evangelio", "sagrada escritura", "libro santo", "palabra de dios"],
  question: "¿Qué opina Trincado de la Biblia?",
  answer: `Trincado estudió la Biblia a fondo y reconoció las verdades morales que contiene, pero también señalaba sus errores, contradicciones y manipulaciones a lo largo de los siglos. No la consideraba la palabra infalible de Dios sino un libro escrito por hombres que fue modificado por concilios y traducciones con intereses políticos y religiosos.

"La Biblia contiene verdades invaluables mezcladas con errores humanos", afirmaba Trincado. Enseñaba a leerla con criterio racional, extrayendo lo valioso y descartando lo que contradice la razón y la ciencia. No se debe creer en la Biblia porque "es la palabra de Dios", sino porque lo que en ella hay de bueno puede ser verificado por la razón.

La EMECU no utiliza la Biblia como libro de texto, aunque respeta su valor histórico y moral. Nuestros libros de estudio son las obras de Trincado, escritas con lenguaje moderno, racional y accesible para el ser humano contemporáneo.`,
  categories: ["religión"], grade: 2,
},
// 12. LEY DE CAUSA Y EFECTO
{
  id: "causa-efecto-01",
  keywords: ["causa", "efecto", "karma", "consecuencia", "ley natural", "retribución"],
  question: "¿Qué es la Ley de Causa y Efecto?",
  answer: `La Ley de Causa y Efecto es una de las leyes más fundamentales del universo. Establece que toda acción genera una reacción proporcional y equivalente. No es una ley divina o sobrenatural; es una ley natural que opera de manera inexorable en todos los planos de la existencia, trascendiendo la muerte del cuerpo.

Diferente del karma oriental, que implica una carga mística o ritual, la Ley de Causa y Efecto es puramente racional: si siembras bondad, cosecharás bondad; si siembras ignorancia, cosecharás sus consecuencias; si haces daño, el daño volverá a ti. No hay un juez que dictamine; es la naturaleza misma la que responde.

Trincado explicaba: "Cada pensamiento, cada palabra y cada acción son semillas que germinarán en su debido tiempo. El ser humano es, al mismo tiempo, el sembrador y el cosechador de su propia vida". Esta ley nos responsabiliza completamente de nuestro destino y elimina la excusa del victimismo. Lo que te sucede no es casualidad ni destino ciego; es el resultado de causas que tú mismo pusiste en movimiento.`,
  categories: ["causa efecto", "ley"],
  grade: 5,
},
// 13. CIENCIA, FE Y RAZÓN
{
  id: "ciencia-fe-01",
  keywords: ["ciencia", "fe", "razón", "científico", "creencia", "demostración"],
  question: "¿Qué relación hay entre ciencia, fe y razón?",
  answer: `Para Trincado, la ciencia, la fe y la razón no son enemigas sino aliadas cuando se comprenden correctamente. La ciencia es el conocimiento de las leyes naturales mediante la observación y la experimentación. La razón es la facultad que nos permite interpretar ese conocimiento y extraer conclusiones. Y la fe —la verdadera fe, no la ciega— es la confianza en las verdades que la razón y la ciencia nos han demostrado.

Trincado distinguía entre la fe ciega y la fe racional. La fe ciega es creer sin entender, aceptar sin cuestionar, obedecer sin pensar. Es una actitud contraria al desarrollo espiritual. La fe racional es la confianza que nace del conocimiento: creo porque sé, porque he verificado, porque mi razón me lo confirma. "La fe sin razón es superstición; la razón sin fe es frialdad; la fe con razón es sabiduría".

La ciencia no contradice la espiritualidad genuina; al contrario, la confirma. A medida que la ciencia avanza, descubre verdades que la doctrina de Trincado ya había anunciado. Por eso nuestra escuela no teme a la ciencia; la abraza y la utiliza como herramienta de comprensión del universo.`,
  categories: ["ciencia", "razón", "fe"],
  grade: 4,
},

// 14. CREACIÓN ATÓMICA
{
  id: "atomica-01",
  keywords: ["átomo", "creación", "atómica", "materia", "fluido", "semilla"],
  question: "¿Qué es la Creación Atómica?",
  answer: `La Creación Atómica es la teoría cosmológica de Trincado sobre el origen y la naturaleza del universo. Enseña que el átomo es la unidad fundamental de toda la creación material y espiritual. Todo lo que existe está compuesto de átomos en diferentes estados de vibración y organización. El propio Creador es de naturaleza atómica: es el átomo primordial, la semilla de toda la creación.

Trincado explicaba: "El átomo es la semilla del universo. Del átomo nace la molécula, de la molécula la célula, de la célula el organismo, y así sucesivamente hasta las galaxias". La materia y el espíritu no son sustancias diferentes sino la misma sustancia en diferentes grados de densidad y vibración. La materia es espíritu condensado; el espíritu es materia sutilizada.

Los fluidos —concepto central en nuestra doctrina— son estados intermedios entre la materia densa y el espíritu puro. El fluido vital, el fluido magnético y otros fluidos son manifestaciones de la energía atómica en diferentes frecuencias. Esta visión unificada del universo permite comprender tanto los fenómenos materiales como los espirituales bajo un mismo marco conceptual racional.`,
  categories: ["creación atómica", "átomo"],
  grade: 7,
},
// 15. INSTINTO VS RAZÓN
{
  id: "instinto-01",
  keywords: ["instinto", "instintivo", "animal", "instintos", "vs razón"],
  question: "¿Qué diferencia hay entre instinto y razón?",
  answer: `El instinto y la razón representan los dos extremos de la escala evolutiva del comportamiento humano. El instinto es la guía natural que tienen los animales para sobrevivir: es automático, irracional y responde a estímulos inmediatos como el hambre, el miedo, la reproducción y la autopreservación. La razón, en cambio, es la capacidad de reflexionar, analizar y decidir conscientemente la mejor course de acción.

Todo ser humano posee tanto instintos como razón, pero el grado de desarrollo de cada uno varía enormemente entre individuos. El ser humano primitivo vive casi exclusivamente guiado por el instinto; el ser humano civilizado ha desarrollado parcialmente su razón; y el ser humano espiritualizado ha alcanzado un predominio de la razón sobre el instinto.

Trincado enseñaba: "El instinto es el motor del animal; la razón es el motor del dios. El ser humano está entre ambos, y su misión es elevarse del instinto a la razón". No se trata de eliminar los instintos —que son necesarios para la supervivencia— sino de subordinarlos a la guía superior de la razón. El ser guiado por el instinto es esclavo de sus apetitos; el ser guiado por la razón es dueño de sí mismo.`,
  categories: ["instinto", "razón"],
  grade: 5,
},
// 16. LIBRE ALBEDRÍO
{
  id: "albedrío-01",
  keywords: ["libre albedrío", "libertad", "libre voluntad", "destino", "fatalismo", "determinismo"],
  question: "¿Qué es el libre albedrío según Trincado?",
  answer: `El libre albedrío es la capacidad del ser humano para elegir entre diferentes cursos de acción de manera autónoma y responsable. No somos marionetas de un destino inexorable ni juguetes de fuerzas sobrenaturales; somos seres con la capacidad de decidir nuestro propio camino.

Trincado rechazaba tanto el fatalismo —la creencia de que todo está predeterminado— como la idea de que somos absolutamente libres sin consecuencias. Enseñaba: "Eres libre para elegir, pero no eres libre para escapar de las consecuencias de tu elección". El libre albedrío va inseparablemente unido a la responsabilidad.

La voluntad es la herramienta que materializa el libre albedrío. Sin voluntad, la libertad es solo una ilusión: puedes querer hacer algo pero si tu voluntad es débil, no lo harás. Por eso el desarrollo de la voluntad es fundamental en nuestra doctrina. "El ser humano verdaderamente libre es aquel que ha desarrollado su voluntad al punto de poder elegir racionalmente y ejecutar con firmeza lo que ha decidido", afirmaba Trincado.`,
  categories: ["libre albedrío", "voluntad"],
  grade: 5,
},
// 17. GRADOS (libros específicos)
{
  id: "grado-01",
  keywords: ["grado 1", "primer grado", "stromayer", "discurso"],
  question: "¿Qué se estudia en el Grado 1?",
  answer: `El Grado 1 de la EMECU tiene como libro de texto "Discurso del Obispo Stromayer". Es la puerta de entrada a toda la doctrina y constituye una introducción magistral a la filosofía racional de Joaquín Trincado. En este grado se presentan los principios fundamentales que el estudiante irá profundizando a lo largo de los trece grados.

En el Grado 1 se abordan temas como la existencia del Creador demostrada por la razón, la naturaleza triple del ser humano (cuerpo, alma, espíritu), la inmortalidad del espíritu, la Ley de Causa y Efecto, y la necesidad de una moral basada en el conocimiento y no en el miedo. Es el cimiento sobre el cual se construye todo el edificio doctrinario.

Trincado eligió el formato de un discurso —el de un obispo imaginario— para presentar estas ideas de manera accesible y atractiva, demostrando que la fe verdadera no necesita oponerse a la razón.`,
  categories: ["grados", "grado 1"],
  grade: 1,
},
{
  id: "grado-02",
  keywords: ["grado 2", "segundo grado", "buscando a dios"],
  question: "¿Qué se estudia en el Grado 2?",
  answer: `El Grado 2 tiene como libro "Buscando a Dios". Es una obra fundamental donde Trincado emprende la búsqueda racional del Creador, desmontando las concepciones antropomórficas y dogmáticas de las religiones tradicionales y presentando al Creador como el Principio Inteligente y Atómico del universo.

Se aborda la naturaleza del Creador, su inmanencia en la creación, la inutilidad de los intermediarios entre Dios y los hombres, y la demostración racional de la existencia divina mediante la observación de las leyes naturales. Trincado guía al estudiante paso a paso en esta búsqueda, despertando su capacidad de razonamiento.`,
  categories: ["grados", "grado 2"],
  grade: 2,
},
{
  id: "grado-03",
  keywords: ["grado 3", "tercer grado", "primer rayo de luz"],
  question: "¿Qué se estudia en el Grado 3?",
  answer: `El Grado 3 utiliza como libro de texto "Primer Rayo de Luz". En esta obra se introducen los primeros principios espirituales y se profundiza en la comprensión de la naturaleza espiritual del ser humano, la comunicación entre los planos material y espiritual, y los fundamentos del espiritismo racional.

Es como su nombre indica, el primer rayo que ilumina la mente del estudiante sobre las realidades del mundo invisible de manera ordenada y racional. Se sientan las bases para los grados posteriores donde se estudiará el magnetismo y la mediumnidad en mayor profundidad.`,
  categories: ["grados", "grado 3"],
  grade: 3,
},
];
