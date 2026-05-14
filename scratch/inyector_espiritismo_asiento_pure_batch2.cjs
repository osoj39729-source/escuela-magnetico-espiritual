const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - El Espiritismo en su Asiento (Batch 2 - Claves 20 a 39)
const nuevosNodos = {
  "742: Cómo se estudia el espiritismo": {
    "PilotoDeCoherencia": "Método epistemológico de la Escuela. El espiritismo no admite fe parcial ni misticismo. Se estudia 'en todo, por todo y con todo', exigiendo una razón matemática y limpia de todo prejuicio religioso o científico dogmático.",
    "CitaInelutable": "El espiritismo se estudia en todo, por todo y con todo, primando la razón limpia absolutamente de prejuicio; porque si hay prejuicio, hay parcialidad y el espiritismo es la imparcialidad.",
    "EjemploPedagogico": "Para estudiar la luz no puedes usar lentes oscuros. Para estudiar el espiritismo, debes quitarte las gafas oscuras de la religión y la fe ciega.",
    "ConexionDoctrinal": ["Método de Estudio", "Razón sin Prejuicio"],
    "NodosSimapticos": []
  },
  "1078: CAPÍTULO IV: Cómo es necio negar el Espiritismo": {
    "PilotoDeCoherencia": "La necedad de la negación a priori. Negar las leyes universales (espiritismo) no las altera. El que niega lo que no ha estudiado se condena a la ignorancia y eventualmente, cuando choca con la realidad, descubre su propia cobardía intelectual.",
    "CitaInelutable": "Negando y afirmando, la verdad no cambia de su ser; pero el que niega la verdad, más tarde o más temprano descubre ésta y ve que fue necio en negar lo que no comprendía.",
    "EjemploPedagogico": "Decir que la gravedad no existe no evitará que te caigas. El detractor no destruye el espiritismo, solo demuestra su propia ignorancia.",
    "ConexionDoctrinal": ["La Necedad del Detractor", "Inmutabilidad de la Verdad"],
    "NodosSimapticos": ["Necedad Negacionista"]
  },
  "1187: CAPÍTULO V: Todo el universo es el espiritismo y su maestro, Eloí": {
    "PilotoDeCoherencia": "El sistema jerárquico del Universo. Aunque Eloí es el Creador absoluto, no hay saltos mágicos. El progreso exige pedir enseñanza al espíritu inmediatamente superior (maestro), creando una cadena ininterrumpida de solidaridad cósmica hasta llegar al Padre.",
    "CitaInelutable": "No hay dos espíritus del mismo grado de elevación y para obviar esto, un espíritu pide a su maestro; éste al otro inmediato; el otro al otro, hasta el que puede llegar a Eloí.",
    "EjemploPedagogico": "El alumno de primaria no le pide clases directas al Ministro de Educación; le pregunta a su maestro. En el universo, la solidaridad funciona como una escalera infinita de maestros y alumnos.",
    "ConexionDoctrinal": ["Jerarquía Magnética", "Cadena Solidaria", "Eloí como Cúspide"],
    "NodosSimapticos": ["Escalera Solidaria Cósmica"]
  },
  "1438: SEGUNDA PARTE": {
    "PilotoDeCoherencia": "Estructura formal que da paso a la identificación y aniquilación de los adversarios de la doctrina.",
    "CitaInelutable": "SEGUNDA PARTE",
    "EjemploPedagogico": "Transición de sección.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "1442: CAPÍTULO I: Enemigos del espiritismo": {
    "PilotoDeCoherencia": "Los tres monstruos abstractos. Trincado define que el espiritismo no tiene enemigos físicos (ni hombres ni mujeres); sus verdaderos enemigos son abstracciones creadas por la pasión y la sinrazón: El Dogma, la Supremacía y la Ignorancia.",
    "CitaInelutable": "En realidad, el espiritismo no tiene más enemigos que los dogmas, la supremacía y la ignorancia. Pero esas... no son cosa porque ninguna de ellas es hombre ni mujer.",
    "EjemploPedagogico": "No odiamos al sacerdote ni al banquero (son nuestros hermanos); combatimos el virus que los infecta: el dogma que miente y la supremacía que roba.",
    "ConexionDoctrinal": ["Los Tres Enemigos", "Dogma-Supremacía-Ignorancia"],
    "NodosSimapticos": ["El Virus Tricéfalo"]
  },
  "1616: CAPITULO II: Los médiums; lo que son y sus cualidades": {
    "PilotoDeCoherencia": "Gravedad de la mediumnidad. Ser médium (pararrayos) implica una responsabilidad colosal. Sus facultades no son para el show ni el lucro, son herramientas reguladas por el código que exigirán cuentas estrictas por su mal uso.",
    "CitaInelutable": "Entraña tanta grandeza, gravedad y responsabilidad para el médium que teniendo conocimiento de lo que son, no pudieron menos de espantarse hasta hoy que ya se rasga el crepúsculo. Lo mismo que el pararrayo...",
    "EjemploPedagogico": "El médium es la antena de radio. Si la usa para transmitir conocimiento (luz), es un pararrayos salvador. Si la usa para engañar (sombras), la descarga lo fulminará a él primero.",
    "ConexionDoctrinal": ["El Médium Pararrayos", "Responsabilidad Moral"],
    "NodosSimapticos": []
  },
  "1720: discusiones, les estorba la facultad.": {
    "PilotoDeCoherencia": "El sacrificio y la recompensa del Médium. Aunque la mediumnidad sea un sacrificio que les expone al desgaste ('discusiones que estorban'), reciben a cambio instrucciones directas de la sabiduría universal ('ángeles' o espíritus de luz), cumpliendo la promesa hecha a Abraham.",
    "CitaInelutable": "¿Pero cuándo el deber y el amor no es sacrificio? En cambio, pueden recibir avisos, órdenes y lecciones que no pueden recibir los otros... Por que hablarán con mis espíritus, que ángeles llamáis.",
    "EjemploPedagogico": "Es un trabajo agotador ser el traductor del universo, pero la recompensa es escuchar las lecciones de los grandes maestros de la historia en primera fila.",
    "ConexionDoctrinal": ["El Sacrificio Mediúmnico", "La Promesa de Abraham"],
    "NodosSimapticos": []
  },
  "1796: CAPÍTULO III: Las comunicaciones y manifestaciones": {
    "PilotoDeCoherencia": "La obligatoriedad de la comunicación. Los espíritus desencarnados no se comunican por hobby; están obligados por la Ley Suprema de Amor y la Afinidad a manifestarse y educar a los hombres en la Tierra, cumpliendo el testamento abrahámico.",
    "CitaInelutable": "Los espíritus, están obligados a comunicarse y manifestarse a los hombres. Y más obligados que todos, son los misioneros y maestros; además de que la afinidad los atrae y les está mandado por la ley suprema.",
    "EjemploPedagogico": "El graduado universitario tiene el deber moral de enseñar al analfabeto. Así mismo, el espíritu de luz está obligado por la Ley a bajar a la cátedra a enseñar.",
    "ConexionDoctrinal": ["Comunicación Obligatoria", "El Deber del Maestro"],
    "NodosSimapticos": ["Docencia Cósmica"]
  },
  "1996: CAPÍTULO IV: Consecuencias del mal uso del espiritismo": {
    "PilotoDeCoherencia": "El archivo de corrección. Trincado aclara que ya no escribe para prevenir (pues la humanidad ya erró), sino para corregir en plena transición hacia la Comuna, dejando constancia de la 'hidrofobia' y la insidia de los detractores y malversadores del espiritismo (espiritualistas/comerciantes).",
    "CitaInelutable": "No se escribe ya para prevenir, sino para corregir a los que están en la transición y porque esto es (a modo de memoria) para que rememoren... hasta donde llegó la insidia y la hidrofobia en los detractores.",
    "EjemploPedagogico": "El libro de texto no puede evitar que el alumno se haya equivocado en el pasado, pero sirve de mapa rojo para corregir el rumbo antes del examen final.",
    "ConexionDoctrinal": ["Corrección en Transición", "Hidrofobia Detractora"],
    "NodosSimapticos": ["Memoria de la Insidia"]
  },
  "2156: religiones y lo recomiendan así.": {
    "PilotoDeCoherencia": "La invencibilidad del progreso. Trincado desafía a la Iglesia recordando que ni la Inquisición, ni la calumnia, ni las hogueras, ni los venenos pudieron detener la evolución del intelecto humano ni el avance de la doctrina racional.",
    "CitaInelutable": "¿quién es capaz de detener el progreso? Sabed, que para detenerlo; la cristianísima iglesia, levantó la inquisición; inventó los venenos; usó el puñal y los potros... ¿Y qué? ¿Paró el progreso? Lo mismo pasó triunfante.",
    "EjemploPedagogico": "La iglesia intentó apagar el fuego de la razón tirándole madera (quemando herejes), pero solo logró que la hoguera del progreso brillara más.",
    "ConexionDoctrinal": ["Invencibilidad del Progreso", "Fracaso de la Inquisición"],
    "NodosSimapticos": ["El Fuego Inapagable"]
  },
  "2269: CAPÍTULO V: El bien que trae y a lo que obliga el Espiritismo": {
    "PilotoDeCoherencia": "El trinomio de la Paz Universal. El Espiritismo, al hacerle 'guerra sin cuartel' al error (las mentiras), es la única herramienta que puede traer la paz verdadera, sustentada en sus tres bases: Libertad de Conciencia, Sabiduría y Amor Universal.",
    "CitaInelutable": "Siendo el espiritismo la guerra sin cuartel a todo error, es por esto la Paz universal de cuerpos y almas, ya que sus bases son, la Libertad de conciencia, la Sabiduría y el Amor universal.",
    "EjemploPedagogico": "La paz no es el silencio de los cementerios que quiere la religión; la paz es la armonía de mentes libres y sabias que se aman. Para llegar a esa paz, hay que hacerle la guerra a la ignorancia.",
    "ConexionDoctrinal": ["Trinomio de la Paz", "Guerra al Error", "Libertad, Sabiduría y Amor"],
    "NodosSimapticos": ["Guerra Redentora"]
  },
  "2490: PARTE TERCERA": {
    "PilotoDeCoherencia": "Estructura formal que marca el inicio de la exposición sobre los eventos escatológicos y el régimen social definitivo.",
    "CitaInelutable": "PARTE TERCERA",
    "EjemploPedagogico": "Paso a la revelación socio-espiritual.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "2493: CAPÍTULO I: El reinado del Espiritismo": {
    "PilotoDeCoherencia": "El cumplimiento del plazo abrahámico. Trincado revela que el 'Reinado del Espiritismo' o la Era de Luz fue profetizada a Abraham hace 36 siglos, estableciendo que en la actualidad (el siglo XX) la humanidad ya está capacitada para recibir la luz directamente de los espíritus de Verdad.",
    "CitaInelutable": "Y los siglos serán 36 desde que escribiré mi ley, hasta que la tierra la sabrá; y de este siglo mis hijos serán de luz, porque verán la luz de su Padre que les darán mis espíritus.",
    "EjemploPedagogico": "El reloj cósmico marcó la hora. Los 36 siglos de oscuridad y preparación terminaron. Ahora empieza la universidad de la luz donde los profesores son los espíritus mayores.",
    "ConexionDoctrinal": ["Plazo de 36 Siglos", "Era de la Luz", "Cumplimiento Abrahámico"],
    "NodosSimapticos": ["El Reloj de Abraham"]
  },
  "2654: CAPÍTULO II: El juicio final y universal": {
    "PilotoDeCoherencia": "La desmitificación total del Juicio Final. No es un evento físico-apocalíptico de trompetas y muertos levantándose. Trincado lo define como un proceso de selección magnética (ya ocurrido) que pasó desapercibido para las masas, desenmascarando el 'escandaloso comercio' de miedo que las religiones montaron sobre él.",
    "CitaInelutable": "¡Cuántos cuentos fantásticos e irracionales se han hecho del juicio final! ¡Qué escandaloso comercio hizo la iglesia católica y cristiana de ese acto que ha pasado desapercibido para sus materias!",
    "EjemploPedagogico": "El Juicio Final no fue un tribunal en las nubes; fue un escaneo magnético del planeta. Los aprobados reencarnarán en la Comuna, los reprobados (de instintos bestiales) son exiliados a mundos primitivos. Silencioso y matemático.",
    "ConexionDoctrinal": ["El Verdadero Juicio Final", "Selección Magnética", "El Fin del Apocalipsis Mítico"],
    "NodosSimapticos": ["El Escáner Cósmico"]
  },
  "2820: CAPÍTULO III: El descubrimiento de la eterna verdad": {
    "PilotoDeCoherencia": "La cristalización de la ley. La 'eterna verdad' ya no es un secreto; ha sido descubierta y será hecha ley humana y social en el Código. Trincado advierte que antes solo se tenían 'verdades relativas' porque la humanidad cambiaba de posición, pero ahora se asienta la verdad absoluta materializada en el régimen comunal.",
    "CitaInelutable": "Está ya dicha la verdad eterna... y hecha ley en el 'código' que os llegará en breve... y como sólo han tenido verdades relativas a su estudio...",
    "EjemploPedagogico": "La humanidad pasó siglos buscando piezas del rompecabezas a oscuras (verdades relativas). Trincado prendió la luz y unió las piezas: la imagen final es el Espiritismo y la Comuna.",
    "ConexionDoctrinal": ["La Verdad Descubierta", "Transición de Verdad Relativa a Absoluta"],
    "NodosSimapticos": []
  },
  "2917: CAPÍTULO IV: La comuna es el régimen único del espiritismo": {
    "PilotoDeCoherencia": "La síntesis sociopolítica. El Espiritismo no puede coexistir con el capitalismo ni las supremacías. De la 'eterna verdad' surge una consecuencia ineludible en el plano material: la implantación de la Comuna como el único régimen económico y social válido y ordenado por el Universo.",
    "CitaInelutable": "De esa verdad del reinado del espíritu y por tanto del espiritismo, surge necesariamente, un régimen único... La comuna es el régimen único del espiritismo.",
    "EjemploPedagogico": "Tú no puedes decir que eres un espiritista de luz y luego ir a explotar al obrero en tu fábrica. El que entiende el espíritu, forzosamente abraza la igualdad económica de la Comuna.",
    "ConexionDoctrinal": ["Comuna como Consecuencia del Espiritismo", "Régimen Único de Vida"],
    "NodosSimapticos": ["Materialización de la Doctrina"]
  },
  "2988: resistiría a su mandato?": {
    "PilotoDeCoherencia": "El Decreto Mayor de Edad. La Comuna no es una opción política humana, es el decreto absoluto de Eloí dado a todos los mundos del Universo una vez que superan su etapa primitiva (su mayoría de edad) y pasan por el filtro del Juicio Final.",
    "CitaInelutable": "Es su decreto absoluto... decretó para todos los mundos la comuna, después de su mayoría de edad; después del juicio final; y este se celebró, dando una transición a las tres generaciones.",
    "EjemploPedagogico": "El Universo es una escuela: en primaria tienes reyes y curas; cuando te gradúas y entras a la universidad (mayoría de edad), el único sistema permitido es la Comuna de Amor y Ley.",
    "ConexionDoctrinal": ["Mayoría de Edad Planetaria", "Decreto de la Comuna", "Consecuencia del Juicio"],
    "NodosSimapticos": ["Graduación Planetaria"]
  },
  "3119: CAPITULO V: La creación es eterna por el espiritismo": {
    "PilotoDeCoherencia": "La demolición de la Nada. Trincado desafía a la ciencia materialista y a los dogmáticos a la vez: la creación no tuvo principio mágico ni tendrá fin apocalíptico. La materia se transforma eternamente, animada por la fuerza incesante del espíritu (el espiritismo cósmico).",
    "CitaInelutable": "Algunos timoratos se escandalizarán de este axioma... A algunos materialistas y negadores del espíritu, se les crisparán los pelos. Pero qué queréis; la verdad es así.",
    "EjemploPedagogico": "El Universo no es un juguete de cuerda que Dios creó hace 6000 años y que un día se apagará. Es un motor de éter de movimiento perpetuo, sin génesis ni apocalipsis.",
    "ConexionDoctrinal": ["Eternidad de la Creación", "Destrucción del Génesis Mítico", "Movimiento Perpetuo"],
    "NodosSimapticos": ["El Motor Eterno"]
  },
  "3198: tus misioneros, conforme a tu mandato.": {
    "PilotoDeCoherencia": "La guerra espiritual final. Trincado, como Juez, sella la obra pidiendo que se desate la justicia universal sobre los 'negros de hollín' (los espíritus detractores y dogmáticos) que se negaron a acatar la sentencia del Juicio Final y declararon la guerra a la Verdad, pidiendo protección para los trabajadores de la viña (los racionalistas).",
    "CitaInelutable": "Los hermanos 'negros de hollín' desde el día de la sentencia, encendieron la más terrible guerra declarando, no acatar. Por lo que, ahora, venga ya sobre nosotros tu justicia, para salvar a los que trabajan en tu viña.",
    "EjemploPedagogico": "El Juicio se dictó, pero la mafia clerical y materialista se amotinó y se resiste a morir. El Maestro levanta la bandera negra y llama a la ejecución magnética final contra los rebeldes.",
    "ConexionDoctrinal": ["La Rebelión de los Negros de Hollín", "Justicia sobre los Detractores", "Invocación de Cierre"],
    "NodosSimapticos": ["Rebelión del Hollín"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "El Virus Tricéfalo": {
    "Definición": "Concepto racionalista que engloba a los tres verdaderos y únicos enemigos del Espiritismo: El Dogma, la Supremacía y la Ignorancia. La Escuela no combate a los seres humanos, sino a estas tres abstracciones que envenenan la sociedad humana impidiendo la fraternidad y el razonamiento.",
    "Contexto": "El Espiritismo en su Asiento (Segunda Parte, Capítulo I).",
    "Conexiones": ["Dogma-Supremacía-Ignorancia", "Guerra al Error", "Guerra Redentora"],
    "Obras": ["El Espiritismo en su Asiento", "Filosofía Austera Racional"]
  },
  "El Escáner Cósmico (Juicio Final)": {
    "Definición": "La definición científica y desmitificada del 'Juicio Final'. La Escuela rechaza la ficción teológica del fin del mundo material. El juicio se define como un proceso de selección magnética e intelectual donde se evalúa el progreso de la humanidad, decretando el fin del régimen de supremacías y el paso ineludible a la Comuna.",
    "Contexto": "El Espiritismo en su Asiento (Tercera Parte, Capítulo II).",
    "Conexiones": ["Mayoría de Edad Planetaria", "El Fin del Apocalipsis Mítico", "Selección Magnética"],
    "Obras": ["El Espiritismo en su Asiento", "Los Extremos se Tocan"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 19 nodos PURA CALIDAD 1:1 de El Espiritismo en su Asiento (Batch 2) y 2 términos sinápticos.');
