const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/cuestionario-espirita-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Cuestionario Espírita Racional (Batch 4 - Claves 60 a 74)
const nuevosNodos = {
  "982: Pregunta 60: ¿Quién lo asesinó?": {
    "PilotoDeCoherencia": "Responsabilidad histórica del asesinato de Jesús. Fueron las élites religiosas de su tiempo, específicamente los pontífices Anás y Caifás, quienes usurpaban los 'derechos divinos'.",
    "CitaInelutable": "Los sacerdotes de la religión, pues, Anás y Caifás, pontífices de aquella religión eran y se abrogaron derechos divinos.",
    "EjemploPedagogico": "Jesús no murió por voluntad divina; fue ejecutado políticamente por la mafia sacerdotal a la que estaba destruyéndole el negocio.",
    "ConexionDoctrinal": ["El Asesinato de Jesús", "Responsabilidad Sacerdotal"],
    "NodosSimapticos": []
  },
  "996: Pregunta 61: ¿Qué delito cometió Jesús,: para merecer tal venganza?": {
    "PilotoDeCoherencia": "La causa real de la crucifixión. Jesús fue asesinado por el mismo 'delito' que comete la Escuela hoy: predicar el amor fraternal y la moral mediante el trabajo productivo. Estas ideas arruinaban el sistema de castas religioso.",
    "CitaInelutable": "El mismo que cometemos ahora nosotros: predicar el amor fraternal y la moral por el trabajo productivo que regenera al hombre.",
    "EjemploPedagogico": "Si un hombre enseña que todos deben trabajar para comer, los reyes y sacerdotes que viven sin trabajar lo verán como su peor enemigo.",
    "ConexionDoctrinal": ["El Delito de Jesús", "Trabajo Productivo vs Parasitismo Religioso"],
    "NodosSimapticos": ["El Delito del Misionero"]
  },
  "1014: Pregunta 62:": {
    "PilotoDeCoherencia": "El odio sacerdotal hacia la emancipación. A los sacerdotes les molestaba la trilogía 'Amor, Fraternidad y Trabajo' porque ellos vivían de lo contrario: sin amor (condenando), sin fraternidad (creando jerarquías) y sin moral (no produciendo nada).",
    "CitaInelutable": "Sabemos que el amor trae el progreso; la fraternidad trae la dicha... y como observamos en los que se dicen sacerdotes que no son morales ni tienen amor a nadie, puesto que reniegan del progreso...",
    "EjemploPedagogico": "El parásito odia la medicina que sana al cuerpo. El sacerdote odia el trabajo y la razón porque sanan a la sociedad de la ignorancia.",
    "ConexionDoctrinal": ["El Odio Sacerdotal", "Parasitismo vs Progreso", "Trilogía Trincadista"],
    "NodosSimapticos": []
  },
  "1033: Pregunta 63: ¿Luego el infierno y el: purgatorio no existen? . . .": {
    "PilotoDeCoherencia": "Reiteración de la pregunta 55 para afirmar la postura anti-dogmática como base de las siguientes refutaciones marianas.",
    "CitaInelutable": "No: existen sólo en las mentes de los ignorantes y fanáticos.",
    "EjemploPedagogico": "Una base necesaria para derribar el dogma.",
    "ConexionDoctrinal": ["Inexistencia del Infierno"],
    "NodosSimapticos": []
  },
  "1051: Pregunta 64: ¿Jesús también nació como: nosotros?": {
    "PilotoDeCoherencia": "El principio de inmutabilidad biológica. Jesús nació exclusivamente por la Ley Natural (cópula). Creer en la inmaculada concepción es un absurdo que acusa al Creador de ser parcial (injusto) al romper sus propias leyes para favorecer a un hijo.",
    "CitaInelutable": "No se conoce, ni hay otro medio, ni hay otra Ley más que la natural: creer otra cosa al respecto es absurdo y se le acusa de parcial al Creador.",
    "EjemploPedagogico": "Si la gravedad funciona para todos, la biología reproductiva también. Eloí no hace trucos de magia en el vientre de una mujer.",
    "ConexionDoctrinal": ["Falsa Inmaculada Concepción", "Nacimiento Natural de Jesús", "Inmutabilidad Biológica"],
    "NodosSimapticos": ["Biología Imparcial"]
  },
  "1068: Pregunta 65: ¿Luego tuvo padre y madre, igual: que yo y que tú, Jesús? . . .": {
    "PilotoDeCoherencia": "Afirmación rotunda del origen carnal de Jesús, como preámbulo a la destrucción del mito del Espíritu Santo.",
    "CitaInelutable": "Exactamente lo mismo.",
    "EjemploPedagogico": "Jesús es hijo de fluidos seminales y óvulos, no de palomas místicas.",
    "ConexionDoctrinal": ["Origen Carnal de Jesús"],
    "NodosSimapticos": []
  },
  "1079: Pregunta 66: que, eso del espíritu santo, es: una burda mentira que nadie que razona debe creer. ¿Cómo se llamaban los padres de Jesús?. . .": {
    "PilotoDeCoherencia": "El hachazo al dogma central cristiano. El 'Espíritu Santo' es calificado directamente como una burda mentira irracional. Los padres reales y biológicos de Jesús fueron el patriarca José (el carpintero) y María.",
    "CitaInelutable": "Eso del espíritu santo, es una burda mentira que nadie que razona debe creer. José el Carpintero de Nazareth, patriarca... y María.",
    "EjemploPedagogico": "El Espíritu Santo es un invento teológico para encubrir la paternidad real de José y fabricar un Dios de molde.",
    "ConexionDoctrinal": ["Mentira del Espíritu Santo", "Paternidad de José", "La Falsa Paloma"],
    "NodosSimapticos": ["Burda Mentira Trinitaria"]
  },
  "1094: que es igual decir, padre de 12 hijos: y María de Jericó, que con José, fue madre": {
    "PilotoDeCoherencia": "La restitución del honor matrimonial de María. Trincado declara con precisión matemática que José fue padre de 12 hijos y María madre de 7. Por lo tanto, no fue virgen, sino madre y esposa modelo que cumplió con la Ley de la Materia.",
    "CitaInelutable": "María de Jericó, que con José, fue madre de 7 hijos. Por lo que no fue virgen y sí madre y esposa modelo.",
    "EjemploPedagogico": "Llamarla 'virgen' después de parir 7 hijos es un insulto a su maternidad biológica.",
    "ConexionDoctrinal": ["Maternidad Real de María", "Los 7 Hijos de María", "Rechazo de la Virginidad Perpetua"],
    "NodosSimapticos": ["Madre de Siete"]
  },
  "1100: Pregunta 67: ¿Luego sacan de la Ley: natural a María?": {
    "PilotoDeCoherencia": "La acusación jurídica contra el catolicismo. Al inventar que María tuvo un hijo sin la intervención de su esposo legítimo (José), la religión no solo la saca de la ley natural, sino que, según las leyes civiles del matrimonio, la difama tachándola implícitamente de adúltera.",
    "CitaInelutable": "No solamente la sacan de la Ley natural, sino que la difaman como adúltera; porque, ¿qué sería de una mujer casada que tuviera hijos que no fueran de su esposo?",
    "EjemploPedagogico": "El clero quiso hacer un favor mágico a María, pero en términos legales, si una mujer casada se embaraza de un 'espíritu' que no es su marido, los curas la están llamando adúltera sin darse cuenta.",
    "ConexionDoctrinal": ["La Difamación de María", "Absurdo del Dogma Mariano", "Adulterio Teológico"],
    "NodosSimapticos": ["Difamación Teológica"]
  },
  "1118: Pregunta 68: ¿Cómo es que siendo José esposo de: María, ésta tuvo 7 hijos y José tuvo 12?": {
    "PilotoDeCoherencia": "El árbol genealógico exacto. Trincado aclara la matemática: José era viudo de Débora, con quien tuvo 5 hijos previos. Al casarse con María, tuvieron 7 hijos en común. Total de José: 12. Total de María: 7.",
    "CitaInelutable": "José el Carpintero, cuando se casó con María, era viudo de Débora y llevó al matrimonio 5 hijos y 7 con María son los 12 hijos.",
    "EjemploPedagogico": "Un simple cálculo de familias ensambladas que destruye siglos de ocultamiento sacerdotal.",
    "ConexionDoctrinal": ["El Árbol Genealógico de José", "Los Hijos de Débora"],
    "NodosSimapticos": ["Familia Ensamblada Nazarena"]
  },
  "1134: Pregunta 69: ¿Cómo nos dicen, que tanto José como: María tenían hecho voto de castidad?": {
    "PilotoDeCoherencia": "La resignificación de la Castidad. Trincado destruye el concepto católico de castidad física (celibato). La verdadera castidad reside en la pureza de intención del espíritu. Un matrimonio puede ser casto y puro aunque engendre veinte hijos.",
    "CitaInelutable": "La castidad la tenían en su espíritu que es el que debe ser puro. Pero ¿acaso no pueden ser castos los esposos por muchos hijos que engendren?",
    "EjemploPedagogico": "La castidad no es odiar los órganos reproductivos; castidad es usar el sexo con amor matrimonial y sin vicio. José y María fueron castos teniendo 7 hijos.",
    "ConexionDoctrinal": ["La Verdadera Castidad", "Rechazo del Voto de Virginidad Falsa"],
    "NodosSimapticos": ["Castidad Proficua"]
  },
  "1154: Pregunta 70: ¿Cómo se llamaron los hijos: que tuvo María con José?": {
    "PilotoDeCoherencia": "El registro civil del Cuestionario. Se detallan por nombre los 7 hijos biológicos de María y José, confirmando a María como una 'madre proficua' (fecunda), lo que anula definitivamente el dogma mariano.",
    "CitaInelutable": "El primero fue Jesús; le siguen Efraín, Elizabetta, José, Andrea, Ana y Jaime; por ello es madre proficua, noble y grande.",
    "EjemploPedagogico": "Nombrar a sus hermanos es devolverle a Jesús su humanidad y a María su grandeza de madre de familia numerosa.",
    "ConexionDoctrinal": ["Los 7 Hijos de María", "Madre Proficua"],
    "NodosSimapticos": []
  },
  "1170: Pregunta 71: ¿Por qué es grande?": {
    "PilotoDeCoherencia": "La verdadera grandeza de María. Su mérito no fue ser 'virgen', sino ser valiente. A pesar de saber que su hijo Jesús sería asesinado por el sistema, lo apoyó y adoptó sus doctrinas de amor y libertad.",
    "CitaInelutable": "Sabiendo bien que Jesús, por sus prédicas sería asesinado por los enemigos de la libertad, no vaciló en acompañarlo y hacer suyas las doctrinas de Amor y libertad de su hijo.",
    "EjemploPedagogico": "Su grandeza es revolucionaria, no mística. Es la madre que marcha junto a su hijo hacia la guillotina sabiendo que pelean por la verdad.",
    "ConexionDoctrinal": ["El Valor de María", "Grandeza Revolucionaria", "Acompañamiento del Mártir"],
    "NodosSimapticos": ["Madre Valiente"]
  },
  "1184: como hermanos que somos, como él nos: enseñó. ¿Qué otra encarnación digna de mención": {
    "PilotoDeCoherencia": "Enlace hacia la historia espiritual milenaria del espíritu de María.",
    "CitaInelutable": "¿Qué otra encarnación digna de mención confirma el Espiritismo, que haya tenido María?",
    "EjemploPedagogico": "Prepara la revelación del linaje de Eva.",
    "ConexionDoctrinal": ["Estructura del Cuestionario"],
    "NodosSimapticos": []
  },
  "1189: Pregunta 72:": {
    "PilotoDeCoherencia": "Estructura formal de la pregunta 72.",
    "CitaInelutable": "PREGUNTA 72",
    "EjemploPedagogico": "Estructura.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "1193: ¿Qué otra encarnación digna de mención": {
    "PilotoDeCoherencia": "El arco encarnatorio supremo: de Eva a María. El mismo espíritu (el primer espíritu femenino de la raza Adámica) encarnó primero como Eva (el principio biológico de la raza blanca) y miles de años después como María (para cerrar el ciclo con el Mesías).",
    "CitaInelutable": "Nuestra madre en la raza... la primera en la tierra fue Eva y la última María, que entre las dos, valen por todas.",
    "EjemploPedagogico": "El Creador no escoge espíritus al azar; la que abrió la puerta genética de la raza (Eva) vino a parir al hijo mayor (Jesús) en su encarnación como María.",
    "ConexionDoctrinal": ["Identidad Eva-María", "Madre de la Raza", "Reencarnación Mayor"],
    "NodosSimapticos": ["El Arco Eva-María"]
  },
  "1205: Pregunta 73:": {
    "PilotoDeCoherencia": "El dolor astral de la mistificación. Trincado confirma que el espíritu libre de María sufre inmensamente al ver que la religión la desnaturaliza con el apodo de 'virgen'. La Escuela la reivindica amándola como 'la madre mayor' y no como un ídolo artificial.",
    "CitaInelutable": "¿Sufre mucho su espíritu con el apodo que la saca de la ley natural cuando la llaman virgen? Sí, mucho, muchísimo ha sufrido... pero ya somos muchos los que la amamos y la ponemos en el lugar de la madre mayor.",
    "EjemploPedagogico": "Llamar virgen a María es escupirle en la cara a su sacrificio de parir y criar 7 hijos físicos. Su espíritu llora la mentira, la Escuela la consuela con la verdad.",
    "ConexionDoctrinal": ["El Sufrimiento de María por el Dogma", "Reivindicación Espiritual", "Madre Mayor"],
    "NodosSimapticos": ["El Dolor Astral de la Virgen"]
  },
  "1223: Pregunta 74: ¿Jesús fundó iglesia o: religión?. . .": {
    "PilotoDeCoherencia": "La destrucción del mito fundacional cristiano. Jesús jamás fundó una religión; vino a destruir a las existentes (los mercaderes). El hecho de que fuera asesinado por los sacerdotes es la prueba irrefutable de que era anti-religioso.",
    "CitaInelutable": "No fundó ninguna, puesto que vino a destruir todas las que existían y lo demostró cuando sacó a latigazos a los sacerdotes del templo; pero más se confirma, siendo asesinado por los sacerdotes.",
    "EjemploPedagogico": "Decir que Jesús fundó el cristianismo católico es como decir que un abolicionista fundó un mercado de esclavos.",
    "ConexionDoctrinal": ["Jesús Anti-Religioso", "Inexistencia de la Fundación de la Iglesia", "El Látigo de la Verdad"],
    "NodosSimapticos": ["Fundación Falsa"]
  },
  "1240: ¿Cómo las religiones dicen que fué a los": {
    "PilotoDeCoherencia": "Enlace a la manipulación del episodio del templo (mercaderes vs sacerdotes).",
    "CitaInelutable": "¿Cómo las religiones dicen que fué a los mercaderes a los que sacó del templo?",
    "EjemploPedagogico": "Preparación para revelar la manipulación de los evangelios.",
    "ConexionDoctrinal": ["Estructura del Cuestionario"],
    "NodosSimapticos": []
  },
  "1242: Pregunta 75:": {
    "PilotoDeCoherencia": "Estructura formal de la pregunta 75.",
    "CitaInelutable": "PREGUNTA 75",
    "EjemploPedagogico": "Estructura.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "La Falsa Paloma (Espíritu Santo)": {
    "Definición": "Calificación trincadista para el dogma cristiano del Espíritu Santo. Se le define como una 'burda mentira' inventada por la teología para encubrir el proceso natural de fecundación biológica entre María y el patriarca José, difamando así el honor de la mujer.",
    "Contexto": "Cuestionario Espírita Racional (Preguntas 64 a 67).",
    "Conexiones": ["Difamación Teológica", "Mentira del Espíritu Santo", "Nacimiento Natural"],
    "Obras": ["Cuestionario Espírita Racional", "Vida de María", "Jesús Hombre y no Dios"]
  },
  "Difamación Teológica (Adulterio Dogmático)": {
    "Definición": "El absurdo jurídico generado por la religión. Al inventar que María concibió sin intervención de su legítimo esposo (José), la teología católica legalmente la sitúa en posición de adúltera. El Espiritismo restituye su honor demostrando su maternidad natural y proficua (7 hijos).",
    "Contexto": "Cuestionario Espírita Racional (Pregunta 67).",
    "Conexiones": ["Ley Natural", "Honor de María", "El Absurdo Mariano"],
    "Obras": ["Cuestionario Espírita Racional", "Vida de María"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 20 nodos PURA CALIDAD 1:1 de Cuestionario Espirita Racional (Batch 4) y 2 términos sinápticos.');
