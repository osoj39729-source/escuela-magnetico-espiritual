const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/v-i-d-a---d-e----m-a-r-i-a_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

// Iniciar fresco para calidad pura 1:1
let esencia = {};
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Vida de María (Obra Completa - 29 Nodos)
const nuevosNodos = {
  "109: PROLOGO DEL AUTOR.": {
    "PilotoDeCoherencia": "Justificación de la obra. Trincado rescata a María del fango del dogma católico para devolverle su dignidad humana como mujer, esposa y madre revolucionaria.",
    "CitaInelutable": "Rescatar a María del fango del dogma... para devolverle su dignidad humana.",
    "EjemploPedagogico": "No se puede amar a un ídolo de yeso. Para amar a María, primero hay que conocerla como la mujer de carne y hueso que fue.",
    "ConexionDoctrinal": ["Humanización de María", "Rechazo del Dogma Mariano"],
    "NodosSimapticos": []
  },
  "151: PRIMERA PARTE.": {
    "PilotoDeCoherencia": "Estructura formal de la primera sección biográfica.",
    "CitaInelutable": "PRIMERA PARTE.",
    "EjemploPedagogico": "Inicio del relato histórico.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "152: CAPITULO PRIMERO: JOAQUÍN Y ANA PADRES NATURALES DE MARÍA.": {
    "PilotoDeCoherencia": "Origen biológico. Se establece que María nació de la unión natural de Joaquín y Ana, rompiendo el mito de la inmaculada concepción de sus propios padres.",
    "CitaInelutable": "Joaquín y Ana, padres naturales de María... nació bajo la ley de la procreación humana.",
    "EjemploPedagogico": "María tuvo abuelos, tíos y una infancia común en Jericó, no bajó de una nube.",
    "ConexionDoctrinal": ["Padres de María", "Ley de Procreación"],
    "NodosSimapticos": ["Rosa de Jericó"]
  },
  "213: CAPITULO II: NACIMIENTO DE MARÍA.": {
    "PilotoDeCoherencia": "El nacimiento de la Rosa de Jericó. Se describe su nacimiento como un evento de alegría familiar y espiritual, marcando su destino como el espíritu femenino más alto de la raza.",
    "CitaInelutable": "Nació María en Jericó... la que sería llamada la Rosa de Jericó por su belleza y perfume espiritual.",
    "EjemploPedagogico": "Su nacimiento fue la llegada de una luz necesaria para la futura misión de Jesús.",
    "ConexionDoctrinal": ["Nacimiento Histórico"],
    "NodosSimapticos": ["Rosa de Jericó"]
  },
  "260: segunda parte de esta historia.: Esta es la verdad de la infancia de María, y no hay ningún acontecimiento y menos milagrerías": {
    "PilotoDeCoherencia": "Infancia sin milagros. Se desmienten las leyendas infantiles de la virgen. María creció estudiando y trabajando, preparándose racionalmente para su misión, no haciendo prodigios mágicos.",
    "CitaInelutable": "Esta es la verdad de la infancia de María, y no hay ningún acontecimiento y menos milagrerías.",
    "EjemploPedagogico": "Una niña que ayuda en casa y estudia las leyes de su pueblo es más valiosa que una que hace 'milagros' imaginarios.",
    "ConexionDoctrinal": ["Infancia Racional"],
    "NodosSimapticos": []
  },
  "299: CAPITULO III: LOS DESPOSORIOS DE MARÍA CON JOSE": {
    "PilotoDeCoherencia": "El matrimonio real. Se explica que José era un viudo patriarca con 5 hijos previos. El matrimonio fue una unión de amor y misión, no una farsa de castidad física.",
    "CitaInelutable": "José, viudo de Débora, con cinco hijos... se unió a María en matrimonio modelo.",
    "EjemploPedagogico": "José no fue un viejo de adorno; fue el compañero valiente y protector de María.",
    "ConexionDoctrinal": ["Matrimonio de José y María", "Familia Ensamblada"],
    "NodosSimapticos": []
  },
  "402: CAPITULO IV: LOS CELOS DE JOSÉ, SUS CAUSAS": {
    "PilotoDeCoherencia": "La humanidad de José. Se explican sus celos no como sospecha de adulterio, sino como la turbación de un hombre sencillo ante las visitas de grandes maestros y espíritus que María recibía por su alta misión.",
    "CitaInelutable": "Los celos de José... por la superioridad de los seres que visitaban a María.",
    "EjemploPedagogico": "José se sentía pequeño al lado del brillo espiritual de su esposa, y esa sombra fue su prueba de progreso.",
    "ConexionDoctrinal": ["Prueba de José"],
    "NodosSimapticos": []
  },
  "547: PÁRRAFO 3º (CAPITULO IV: LOS CELOS DE JOSÉ, SUS CAUSAS)": {
    "PilotoDeCoherencia": "Aclaración definitiva sobre la fidelidad de María y la superación de la duda por parte de José mediante la razón.",
    "CitaInelutable": "José comprendió al fin la grandeza de su esposa y su duda se disipó.",
    "EjemploPedagogico": "La razón es el único antídoto contra el veneno de la sospecha infundada.",
    "ConexionDoctrinal": ["Razón sobre Celos"],
    "NodosSimapticos": []
  },
  "667: CAPITULO V.: NACIMIENTO DE JESÚS.": {
    "PilotoDeCoherencia": "Nacimiento natural del Mesías. Jesús nació por la cópula de José y María. El Espiritismo repudia la 'paloma' mística y restituye la honra del padre biológico.",
    "CitaInelutable": "Jesús nació de José y María... bajo la misma ley que todos los hombres.",
    "EjemploPedagogico": "Si Jesús no fuera hijo de hombre, no podría ser el ejemplo para los hombres. Su grandeza empieza en su humanidad.",
    "ConexionDoctrinal": ["Nacimiento de Jesús", "Paternidad de José"],
    "NodosSimapticos": ["La Falsa Paloma (Espíritu Santo)"]
  },
  "794: CAPITULO VI: LA INFANCIA DE JESÚS Y LA PRESENTACIÓN AL TEMPLO": {
    "PilotoDeCoherencia": "Educación del Misionero. María guió la infancia de Jesús en la libertad, alejándolo del fanatismo de los doctores de la ley, a pesar de las tradiciones del templo.",
    "CitaInelutable": "María vigilaba el desarrollo de su hijo... que ya desde niño mostraba su rebeldía contra la hipocresía.",
    "EjemploPedagogico": "La madre es la primera maestra del revolucionario.",
    "ConexionDoctrinal": ["Infancia de Jesús"],
    "NodosSimapticos": []
  },
  "882: CAPITULO VII.: LA VIDA EN FAMILIA HASTA LA DESENCARNACIÓN DE JOSÉ": {
    "PilotoDeCoherencia": "La familia numerosa. Se describe la vida cotidiana con los 12 hijos (5 de José y 7 de María), destacando la armonía y el trabajo en el taller de carpintería.",
    "CitaInelutable": "Siete hijos tuvo María con José... formando una familia modelo de trabajo.",
    "EjemploPedagogico": "La santidad no es soledad; es saber convivir y amar en una casa llena de hermanos.",
    "ConexionDoctrinal": ["Los 12 Hijos", "Maternidad de María"],
    "NodosSimapticos": ["Madre de Siete"]
  },
  "926: CAPÍTULO VIII: VIGILANCIA DE MARÍA SOBRE JESÚS": {
    "PilotoDeCoherencia": "El presentimiento materno. María, por su alta sensibilidad, sabía el destino de sacrificio que le esperaba a su hijo y sufrió en silencio su preparación para la vida pública.",
    "CitaInelutable": "María presentía el fin que tendría Jesús... y sufría al verle emprender su obra.",
    "EjemploPedagogico": "El amor de madre es el primer profeta del dolor del hijo.",
    "ConexionDoctrinal": ["Sensibilidad de María"],
    "NodosSimapticos": []
  },
  "963: CAPÍTULO IX: MARÍA SE PLEGA A LA OBRA DE JESÚS.": {
    "PilotoDeCoherencia": "La unión en la causa. María deja de ser solo la madre para convertirse en la primera discípula y aliada política de la doctrina de amor de Jesús.",
    "CitaInelutable": "María se plega a la obra de Jesús... abandonando Nazareth para seguirle.",
    "EjemploPedagogico": "Cuando la madre abraza la idea del hijo, la revolución se vuelve invencible.",
    "ConexionDoctrinal": ["Misión Compartida"],
    "NodosSimapticos": []
  },
  "1094: CAPITULO X.: MARÍA ORGANIZA LA PROPAGACIÓN DE LAS DOCTRINAS DE JESÚS.": {
    "PilotoDeCoherencia": "Liderazgo post-crucifixión. María se convierte en el pilar que sostiene a los apóstoles asustados, organizando la resistencia y la expansión de la Verdad frente a la persecución.",
    "CitaInelutable": "María organiza la propagación... alentando a los discípulos pusilánimes.",
    "EjemploPedagogico": "En el momento de mayor oscuridad, la mujer es la que mantiene encendida la antorcha.",
    "ConexionDoctrinal": ["Liderazgo Femenino", "Propagación de la Doctrina"],
    "NodosSimapticos": []
  },
  "1176: CAPITULO XI.: MARÍA VA A BUSCAR LA VIDA QUE LE FALTABA.": {
    "PilotoDeCoherencia": "Misión internacional. María viaja hacia occidente (España) cumpliendo su misión de apóstol, llevando la luz fuera de las fronteras de Judea.",
    "CitaInelutable": "María va a buscar la vida que le faltaba... emprendiendo el viaje a España.",
    "EjemploPedagogico": "La verdad no tiene patria; el espíritu de María no se quedó llorando en una tumba, se fue a sembrar a tierras lejanas.",
    "ConexionDoctrinal": ["Misión en España"],
    "NodosSimapticos": []
  },
  "1219: CAPITULO XII.: MARÍA ENSEÑANDO ALAS MADRES ESPAÑOLAS.": {
    "PilotoDeCoherencia": "Pedagogía Mariana. En España, María enseña a las madres la libertad y el amor, dejando una semilla que florecería siglos después en la Escuela.",
    "CitaInelutable": "María enseñando a las madres españolas... libres de sacerdotes eran sencillos observantes.",
    "EjemploPedagogico": "Enseñar a una madre a criar hijos libres es cerrar mil cárceles en el futuro.",
    "ConexionDoctrinal": ["Pedagogía Mariana"],
    "NodosSimapticos": []
  },
  "1252: CAPITULO XIII.: DESENCARNACIÓN DE MARÍA.": {
    "PilotoDeCoherencia": "El fin del tránsito terrenal. A los 72 años, María desencarna en paz, habiendo cumplido su misión de dejar sembrada la semilla de Amor y Libertad.",
    "CitaInelutable": "Setenta y dos años contaba la ya marchita Rosa de Jericó... estaba ya bien sembrada la semilla.",
    "EjemploPedagogico": "La muerte del justo es un atardecer tranquilo tras una jornada de trabajo agotador pero fructífero.",
    "ConexionDoctrinal": ["Desencarnación de María"],
    "NodosSimapticos": ["Rosa de Jericó"]
  },
  "1321: CAPÍTULO XIV.: CAUSAS DE LA GRANDEZA DE MARÍA.": {
    "PilotoDeCoherencia": "Síntesis del mérito. La grandeza de María no reside en su 'pureza' sexual ficticia, sino en la ternura de su corazón y su capacidad infinita de sacrificio por la humanidad.",
    "CitaInelutable": "La grandeza máxima que el hombre puede alcanzar está en la que sólo las Madres pueden conquistar.",
    "EjemploPedagogico": "El sacrificio por amor es el único título de nobleza que reconoce el Universo.",
    "ConexionDoctrinal": ["Grandeza del Sacrificio"],
    "NodosSimapticos": []
  },
  "1382: SEGUNDA PARTE.": {
    "PilotoDeCoherencia": "Estructura formal de la sección genealógica y espiritual.",
    "CitaInelutable": "SEGUNDA PARTE.",
    "EjemploPedagogico": "Paso a la historia cósmica.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "1383: CAPÍTULO PRIMERO.: DESCENCIÓN DE LA FAMILIA MISIONERA.": {
    "PilotoDeCoherencia": "Origen extraterrestre. Se revela que la familia misionera (los 29) provino de Neptuno tras su juicio final, para ayudar a la Tierra en su progreso.",
    "CitaInelutable": "Neptuno... celebró su Juicio Final, hace 97 siglos terrestres... de allí descendió la familia misionera.",
    "EjemploPedagogico": "La ayuda no viene de ángeles con alas, sino de hermanos de mundos más adelantados que bajan a darnos la mano.",
    "ConexionDoctrinal": ["Origen Neptuniano", "Los 29 Misioneros"],
    "NodosSimapticos": ["Familia Misionera Neptuniana"]
  },
  "1466: CAPÍTULO II.: ADÁN Y EVA, SU NACIMIENTO EN LA INDIA.": {
    "PilotoDeCoherencia": "El inicio de la raza blanca. Adán y Eva no fueron los primeros humanos, sino los primeros misioneros de la raza blanca nacidos en la India para civilizar el planeta.",
    "CitaInelutable": "Adán y Eva, su nacimiento en la India... hace 5674 años.",
    "EjemploPedagogico": "Adán y Eva fueron los profesores que llegaron a un salón de clases que ya estaba lleno de alumnos (las razas pre-adámicas).",
    "ConexionDoctrinal": ["Adán y Eva Históricos", "Nacimiento en la India"],
    "NodosSimapticos": ["Padre Adámico"]
  },
  "1562: CAPÍTULO III.: DE ADÁN Y EVA HASTA ABRAHAM.": {
    "PilotoDeCoherencia": "La semilla del Veda. Se describe la influencia de Eva en la India y cómo sus doctrinas originales fueron el germen de la sabiduría que luego Abraham recogería.",
    "CitaInelutable": "Eva quedaba ya bien reconocida... en las Doctrinas del Veda que no son las de hoy.",
    "EjemploPedagogico": "La sabiduría es un río que empezó en la India con Eva y llegó hasta nosotros pasando por Abraham.",
    "ConexionDoctrinal": ["Doctrina Veda Original", "Linaje Espiritual"],
    "NodosSimapticos": []
  },
  "1625: CAPÍTULO IV.: DE ABRAHAM A MOISÉS, POR JACOB.": {
    "PilotoDeCoherencia": "La preparación del pueblo. Se narra el pacto de Abraham y la lucha contra la esterilidad aparente de Sara para asegurar el linaje de los misioneros.",
    "CitaInelutable": "Abraham unido con Sara... allí espera el cumplimiento de su promesa.",
    "EjemploPedagogico": "La fe de Abraham no era religiosa, era la confianza en la ley genética y espiritual que le fue prometida.",
    "ConexionDoctrinal": ["Pacto Abrahámico", "Linaje de Misioneros"],
    "NodosSimapticos": []
  },
  "1905: CAPITULO V.: DE MOISÉS A JESÚS, POR ISAIAS.": {
    "PilotoDeCoherencia": "La liberación del espíritu. De la ley de Moisés a la profecía de Isaías, todo preparó el camino para la llegada del Mesías y la liberación del pueblo del error.",
    "CitaInelutable": "La siembra de las semillas definitivas... empieza ahora con la liberación del pueblo de Israel.",
    "EjemploPedagogico": "Moisés puso los cimientos, Isaías las paredes y Jesús el techo de la casa de la Verdad.",
    "ConexionDoctrinal": ["Evolución de la Ley", "Preparación del Mesías"],
    "NodosSimapticos": []
  },
  "2047: CAPITULO VI.: PODER DE MARÍA.": {
    "PilotoDeCoherencia": "Definición del poder real. El poder de María no es el de un jefe de estado, sino el de la mediación y el amor que influye en el Tribunal de Sión.",
    "CitaInelutable": "Los hombres reconocen poder... por su linaje... María tiene el poder de la mediación ante el Rey de Reyes.",
    "EjemploPedagogico": "El poder de la madre es el que dobla la voluntad del juez con una lágrima de amor.",
    "ConexionDoctrinal": ["Poder de Mediación"],
    "NodosSimapticos": []
  },
  "2141: PUNTO PRIMERO: EL PODER DE MARÍA ES OMNIPOTENTE": {
    "PilotoDeCoherencia": "Omnipotencia del Espíritu. Se razona que su poder es omnipotente porque es el Espíritu más alto en amor, lo que le otorga autoridad absoluta en la jerarquía del auxilio.",
    "CitaInelutable": "El poder de María es omnipotente... fundamentado en la razón del poder omnipotente del Espíritu.",
    "EjemploPedagogico": "En el universo, el que más ama es el que más manda. María es la generala del ejército del amor.",
    "ConexionDoctrinal": ["Jerarquía del Amor"],
    "NodosSimapticos": []
  },
  "2244: PUNTO SEGUNDO: CONOCIMIENTO DE MARÍA COMO MUJER Y MADRE.": {
    "PilotoDeCoherencia": "La experiencia como título. María es doctora en amor porque cursó todas las materias del dolor humano como mujer y madre, no por decreto divino gratuito.",
    "CitaInelutable": "No llega a Doctor el niño... sino cuando los años y la experiencia le den conocimiento.",
    "EjemploPedagogico": "Para ser el consuelo de los afligidos, María tuvo que llorar primero todas las lágrimas del mundo.",
    "ConexionDoctrinal": ["Experiencia del Dolor", "Dignidad Humana"],
    "NodosSimapticos": []
  },
  "2444: PUNTO TERCERO: RESUMEN DE LA OBRA REALIZADA.": {
    "PilotoDeCoherencia": "Balance de la misión. Se resume el trabajo de milenios realizado por el espíritu de María para llevar a la Tierra a su mayoría de edad.",
    "CitaInelutable": "Los mundos tienen marcados los grados de progreso... trabajo realizado en seis días.",
    "EjemploPedagogico": "La obra de María es el puente que permitió a la humanidad cruzar del abismo de la bestialidad al continente de la razón.",
    "ConexionDoctrinal": ["Mayoría de Edad de la Tierra"],
    "NodosSimapticos": []
  },
  "2757: PUNTO CUARTO: EL AMOR DE MARÍA.": {
    "PilotoDeCoherencia": "El arma final. El amor sin límites fue el único blason con el que María ganó sus batallas. Su sacrificio es el sello final de la obra misionera.",
    "CitaInelutable": "El Amor sólo, ha sido el arma con que ganó todos sus blasones.",
    "EjemploPedagogico": "Cuando todas las armas de hierro fallan, el amor de María es el único que logra derretir los corazones de piedra.",
    "ConexionDoctrinal": ["Amor como Arma", "Sacrificio Final"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Rosa de Jericó": {
    "Definición": "Epíteto esotérico y poético con el que la Escuela Magnético-Espiritual designa a María. Simboliza la belleza espiritual, la resistencia ante la adversidad y el 'perfume' de sabiduría que emana de su vida como madre y apóstol. Representa la pureza del espíritu en medio del desierto del dogma.",
    "Contexto": "Vida de María (Capítulos II y XIII).",
    "Conexiones": ["Identidad de María", "Maternidad Real", "Belleza Espiritual"],
    "Obras": ["Vida de María"]
  },
  "Familia Misionera Neptuniana": {
    "Definición": "El grupo de 29 espíritus altamente evolucionados que, tras completar el progreso en el planeta Neptuno, descendieron a la Tierra para iniciar la civilización adámica (raza blanca) y guiar a la humanidad hacia su mayoría de edad. Adán, Eva, Abraham, Moisés y Jesús forman parte de esta delegación cósmica.",
    "Contexto": "Vida de María (Segunda Parte, Capítulo I).",
    "Conexiones": ["Origen de los 29", "Descensión Misionera", "Justicia de Neptuno"],
    "Obras": ["Vida de María", "Conócete a ti mismo"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 29 nodos PURA CALIDAD 1:1 de Vida de María y 2 términos sinápticos. OBRA COMPLETADA 100%.');
