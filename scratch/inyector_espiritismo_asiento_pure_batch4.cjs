const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - El Espiritismo en su Asiento (Batch 4 - Claves 58 a 77)
const nuevosNodos = {
  "5639: I: Mayo 3 de 1912. Un espiritualista.": {
    "PilotoDeCoherencia": "El detractor espiritualista. Se expone la queja de un disconforme en la cátedra que, usando el pretexto del 'libre albedrío absoluto', acusaba al Espiritismo de coartar la libertad al separar a los espíritus perturbadores en el Juicio Final.",
    "CitaInelutable": "Dada lectura a las anteriores manifestaciones... uno de los asistentes a la reunión manifestó su disconformidad... apoyándose en que: 'el espíritu tiene libre albedrío absoluto y así era coartar la libertad'.",
    "EjemploPedagogico": "El falso espiritualista defiende el 'derecho' del lobo a comerse a las ovejas llamándolo 'libre albedrío'. Trincado le demostrará que la libertad termina donde empieza el derecho del universo a progresar.",
    "ConexionDoctrinal": ["El Falso Libre Albedrío", "La Queja del Espiritualista"],
    "NodosSimapticos": ["Defensa del Lobo"]
  },
  "5693: II (PARTE TERCERA: El derecho de los espíritus: Alta lección)": {
    "PilotoDeCoherencia": "La ley de Unión. El médium Portillo, en trance, responde a la queja estableciendo el primer principio cósmico: 'Por amor, uníos y amáos; esta es la ley general en todo el universo'. Se diferencia al espíritu de la materia inconsciente.",
    "CitaInelutable": "Aquí se posesionó el médium Portillo y dijo. Por amor, uníos y amáos; esta es la ley general en todo el universo. Los mundos son materia; y la materia es inconsciente, aunque viva.",
    "EjemploPedagogico": "La materia no tiene libre albedrío, la piedra no decide caer. El espíritu sí lo tiene, pero debe usarlo en la única dirección permitida por el cosmos: la unión por amor.",
    "ConexionDoctrinal": ["Ley General del Universo", "Materia Inconsciente vs Espíritu Libre"],
    "NodosSimapticos": []
  },
  "5981: escribe y proclama la ley y el axioma.": {
    "PilotoDeCoherencia": "El destierro como justicia pedagógica. A la humanidad sentenciada que no acata la ley se le da un mundo de 'tierra dura y pedregosa'. Esto no es un castigo, es la limpieza del jardín (la Tierra) de los malos aprendices, para dejarla en manos de los jardineros (los buenos).",
    "CitaInelutable": "Y si la humanidad sentenciada no lo acata... ya tiene su morada que le espera y será de tierra dura y pedregosa... para que el jardín ha de estar a su solo cuidado, sin estorbos de malos aprendices.",
    "EjemploPedagogico": "Si un jardinero se dedica a arrancar las flores en vez de regarlas, el dueño no lo mata, pero lo manda a picar piedras a la cantera para que no arruine el jardín de los demás.",
    "ConexionDoctrinal": ["El Destierro Planetario", "Limpieza del Jardín"],
    "NodosSimapticos": ["La Cantera del Exilio"]
  },
  "6062: Acotaciones:": {
    "PilotoDeCoherencia": "Condena al sometimiento femenino y el falso puritanismo. Trincado reprende severamente al espiritualista disconforme por haber acusado de 'delito' a una joven (Rosa). Se decreta el fin del 'código de los durmientes' y la emancipación absoluta de la mujer.",
    "CitaInelutable": "Esto es del código de los durmientes; esto es la esclavitud más onerosa. ¿Por qué presentas, hombre orgulloso, a la mujer atada? Rompe las esposas de sus manos y déjala pulsar la pluma.",
    "EjemploPedagogico": "La moralina religiosa ata las manos de la mujer para que no escriba ni progrese. Trincado rompe esas cadenas y declara a la mujer libre e igual.",
    "ConexionDoctrinal": ["Emancipación Femenina", "Rechazo del Puritanismo", "Código de los Durmientes"],
    "NodosSimapticos": ["Esposas Dogmáticas"]
  },
  "6319: IV (escribe y proclama la ley y el axioma.)": {
    "PilotoDeCoherencia": "El lazo cósmico. Comunicación del 5 de mayo. Se confirma que el amor no es un sentimiento romántico, sino un 'lazo indisoluble' que liga la cosmogonía entera. Por respeto a esa ley, los maestros invisibles bajan a saludar al Misionero (Trincado) en la Tierra.",
    "CitaInelutable": "Sí, amor; porque este es el lazo indisoluble, eterno, que liga toda la cosmogonía, por el que todos los seres son grandes... ¿Porqué venimos a saludar al misionero en la tierra?",
    "EjemploPedagogico": "El amor es la gravedad del mundo espiritual; es lo que mantiene a las almas orbitando en paz sin chocar.",
    "ConexionDoctrinal": ["El Amor como Ley Física", "El Saludo al Misionero"],
    "NodosSimapticos": ["Gravedad Espiritual"]
  },
  "6547: Acotaciones:": {
    "PilotoDeCoherencia": "El Apóstrofe contra los Reyes y Obispos. Trincado relata cómo los espíritus de la cátedra se desdoblaron para juzgar en el astral a la élite mundial (supremáticos religiosos, reyes y emperadores). Se confirma la materialización de esa condena con la caída histórica de tronos europeos.",
    "CitaInelutable": "Se dirigía a un punto donde la videncia comprobó que estaban reunidos en espíritu en desdoblamiento, muchos miles de supremáticos religiosos y civiles... reyes y emperadores que... han caído unos, caen otros.",
    "EjemploPedagogico": "La Primera Guerra Mundial y la caída de las monarquías no fueron casualidad; fueron la firma física de una sentencia dictada en la cátedra espírita de Buenos Aires.",
    "ConexionDoctrinal": ["Juicio Astral a la Élite", "Caída de Tronos"],
    "NodosSimapticos": ["Desdoblamiento Judicial"]
  },
  "6563: V (escribe y proclama la ley y el axioma.)": {
    "PilotoDeCoherencia": "La reescritura de la historia. Comunicación del 10 de mayo. Los espíritus de progreso bajan a luchar contra las tinieblas para evitar que la 'confusa verdad escrita' (la historia humana adulterada) siga cegando a los hombres. Se anuncia el 'día de luz'.",
    "CitaInelutable": "El día de luz, es el signo del porvenir... el pasado no es conocido, si no se escribe; del pasado, confusa es la verdad escrita y esto es lo que venimos a evitar.",
    "EjemploPedagogico": "La historia la escribieron los ganadores con tinta manchada de sangre e intereses. Los espíritus vienen a dictar la historia real para que no vivamos de cuentos.",
    "ConexionDoctrinal": ["Reescritura de la Historia", "Día de Luz"],
    "NodosSimapticos": []
  },
  "6919: VI (escribe y proclama la ley y el axioma.)": {
    "PilotoDeCoherencia": "La justificación del sacrificio de Abraham. Comunicación de Abraham (padre del Espiritismo). Se revela que su antiguo testamento contenía la verdad de la comunicación mediúmnica, y pide bendecir al Creador por enviar la luz tras tanto sufrimiento en beneficio de los 'desconocidos'.",
    "CitaInelutable": "¡Cuánto amor! ¡Cuánto trabajo! ¡Cuánto sufrimiento en beneficio de los desconocidos! Cantad vosotros al Padre... llegó entre vosotros su amigo y os dió su testamento, en el que está contenida toda la verdad.",
    "EjemploPedagogico": "Abraham, el abuelo de la raza blanca, confirma que su alianza original no era para crear el judaísmo, sino para preparar la médiumnidad y la Comuna.",
    "ConexionDoctrinal": ["El Testamento Abrahámico", "Sacrificio Misionero"],
    "NodosSimapticos": []
  },
  "7034: Acotaciones:": {
    "PilotoDeCoherencia": "La obra social previa y el Cataclismo profetizado. Trincado documenta su activismo previo (la reforma carcelaria en España) y alude a la conflagración mundial (guerra) que él ya tenía escrita y profetizada como la limpieza del final de los tiempos.",
    "CitaInelutable": "Se refiere a España, donde su actuación como defensora en los tribunales... dieron base a la ley de la reforma carcelaria... Alude a la conflagración mundial y al final cataclismo que ya teníamos escrito.",
    "EjemploPedagogico": "Trincado no solo era un filósofo místico, era un reformador social que actuaba en tribunales y cárceles antes de fundar la Escuela. La guerra mundial fue el cataclismo que él vio venir matemáticamente.",
    "ConexionDoctrinal": ["Reforma Carcelaria", "Profecía de la Conflagración", "Activismo Social"],
    "NodosSimapticos": []
  },
  "7044: VII (escribe y proclama la ley y el axioma.)": {
    "PilotoDeCoherencia": "El saludo de Adán (El Padre en la Materia). Comunicación del fundador biológico de la raza Adámica. Saluda a la cátedra confirmando que la cadena mágica de la sabiduría y el amor sigue intacta hasta el infinito.",
    "CitaInelutable": "Seim Seim Seim. El sol os saluda. Vuestro Padre en la materia os dice: Paz, amor... enlazados en la mágica cadena de la sabiduría, del amor, hasta el infinito.",
    "EjemploPedagogico": "Adán no es un pecador que nos condenó comiendo una manzana; es el fundador físico de la raza misionera que viene a saludar a sus descendientes que están terminando su obra.",
    "ConexionDoctrinal": ["Adán como Padre en la Materia", "Cadena Mágica de Sabiduría"],
    "NodosSimapticos": ["Padre Adámico"]
  },
  "7566: EL MAESTRO JUEZ: IX": {
    "PilotoDeCoherencia": "La firma del Juez. Trincado, como 'El Maestro Juez', sella la intervención espiritual depositando el recuerdo de la humanidad y la experiencia de los hermanos mayores para la inminente implantación de la Ley universal.",
    "CitaInelutable": "EL MAESTRO JUEZ... Heme aquí; yo también debo llegar y dar de lo que siento... depositar, de una humanidad el recuerdo y los amores, siempre en justificación de los hechos de la justicia.",
    "EjemploPedagogico": "El Juez no solo dicta sentencias; también archiva la memoria y el amor de una humanidad que sufrió para poder empezar de nuevo.",
    "ConexionDoctrinal": ["Intervención del Maestro Juez", "Justificación de la Ley"],
    "NodosSimapticos": []
  },
  "7931: X (escribe y proclama la ley y el axioma.)": {
    "PilotoDeCoherencia": "El axioma de la desunión vs la luz. Comunicación cósmica que explica que el bien y el mal solo existen en la 'desunión' de las dos potencias esenciales del hombre (materia y espíritu). Cuando se unen, solo hay luz y marcha clara.",
    "CitaInelutable": "Urti, Dei, de Gada Bugui... Porque el hombre se compone de dos potencias esenciales y en la desunión está el bien y el mal; pero unidas las dos potencias, sólo hay bien y caminan en marcha clara.",
    "EjemploPedagogico": "Si el caballo (cuerpo) y el jinete (espíritu) pelean por la dirección, hay dolor y caída (mal). Si el caballo obedece al jinete y ambos avanzan juntos, hay luz (bien).",
    "ConexionDoctrinal": ["Unión de Potencias", "El Origen del Mal en la Desunión"],
    "NodosSimapticos": ["Jinete y Caballo Cósmicos"]
  },
  "7964: curso eterno y llega a hacer el axioma.": {
    "PilotoDeCoherencia": "El sacrificio de la Mágica Sión. Se revela que los fundadores de la Escuela vinieron desde el faro central de la nebulosa (Sión) y se encarnaron como hombres para sacrificarse y escribir el Código en beneficio del progreso de la Tierra, que recién inicia su Séptimo Día.",
    "CitaInelutable": "El hombre de la tierra, está hoy en la primera hora de su séptimo día: el hermano, que con sus secretarios vino de aquel faro central de nuestra nebulosa, de la mágica Sión... se sacrifican en el amor.",
    "EjemploPedagogico": "Trincado y sus misioneros no son hijos originarios de la Tierra; son maestros de un centro superior (Sión) que bajaron a una escuela primaria violenta a dictar el último manual de supervivencia.",
    "ConexionDoctrinal": ["Misioneros de Sión", "Origen del Código de Amor", "Primera Hora del Séptimo Día"],
    "NodosSimapticos": ["La Embajada de Sión"]
  },
  "8153: Acotaciones:": {
    "PilotoDeCoherencia": "La profecía bélica confirmada materialmente. Trincado, escribiendo en 1929, confirma que los textos de 1912 se materializaron con una precisión letal: la caída de los tronos, la Primera Guerra Mundial y las revoluciones que barren el mundo.",
    "CitaInelutable": "Ese subrayado, está confirmado con la guerra europea, la caída de los tronos y las actuales guerras y revoluciones en todo el mundo. Marzo 30 de 1929.",
    "EjemploPedagogico": "El espiritismo científico no adivina la suerte con cartas; lee la física matemática de los espíritus opresores y sabe exactamente cuándo va a estallar la olla de presión del mundo.",
    "ConexionDoctrinal": ["Confirmación Histórica de las Profecías", "Caída de Tronos y Guerras"],
    "NodosSimapticos": ["La Olla de Presión Cósmica"]
  },
  "8306: CAPÍTULO V: Explicación del espiritismo": {
    "PilotoDeCoherencia": "Estructura formal del capítulo que decodificará el mecanismo del espiritismo mediante la comunicación del espíritu Dabet.",
    "CitaInelutable": "CAPÍTULO V: Explicación del espiritismo",
    "EjemploPedagogico": "Apertura.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "8317: I (CAPÍTULO V: Explicación del espiritismo)": {
    "PilotoDeCoherencia": "La prisa de las entidades de luz por limpiar la mentira. Comunicación veloz donde el espíritu ilustra lo abarrotado que está el 'tranvía' espiritual: millones de espíritus desean comunicarse urgentemente para desmentir las doctrinas falsas.",
    "CitaInelutable": "Aquí hay que entrar rápido y tomar asiento pronto; como en los tranvías... 'No hay asiento más que para uno'... Así entro yo, entre tantos como quieren llegar a ocu[par la cátedra].",
    "EjemploPedagogico": "Hay una fila de millones de desencarnados pidiendo el micrófono en la cátedra para gritarle al mundo que las religiones los engañaron.",
    "ConexionDoctrinal": ["Urgencia de Comunicación", "Desmitificación"],
    "NodosSimapticos": []
  },
  "8466: II (CAPÍTULO V: Explicación del espiritismo)": {
    "PilotoDeCoherencia": "El Rigor Doctrinal. El espíritu comunicante (Dabet) advierte que viene con 'más amor' y por lo tanto con 'más rigor' para corregir las falsedades que envenenan a la humanidad.",
    "CitaInelutable": "Tanto anhelo tienen de que aprovechéis las enseñanzas de esta escuela, que yo, no puedo menos de venir cada vez, si cabe, con más amor y por lo mismo, acaso con más rigor en mis palabras.",
    "EjemploPedagogico": "El cirujano que te ama te corta la pierna gangrenada sin dudarlo. El amor de la Escuela es riguroso: arranca de raíz la mentira, duela a quien le duela.",
    "ConexionDoctrinal": ["El Rigor del Amor", "Destrucción de Falsedades"],
    "NodosSimapticos": ["Cirugía Doctrinal"]
  },
  "8651: MACTHEUIX.": {
    "PilotoDeCoherencia": "La elevación de la cátedra de Dabet a texto sagrado. Trincado encarece a todos los estudiantes que aprendan 'de memoria' la comunicación de Dabet, pues es una sentencia probada e irrebatible contra el fraude religioso y espiritualista.",
    "CitaInelutable": "Encarezco a los adherentes de nuestra Escuela, que la comunicación del hermano Dabet, la estudien hasta que la aprendan de memoria. Sus acusaciones, todas están probadas: las sentencias... son irrebatibles.",
    "EjemploPedagogico": "Trincado no sugiere la lectura; exige la memorización como armadura mental. Quien se sabe esto de memoria es inmune a la mentira de las iglesias.",
    "ConexionDoctrinal": ["Memorización Obligatoria", "La Acusación Probada de Dabet", "Irrebatibilidad"],
    "NodosSimapticos": ["Armadura Intelectual"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Código de los Durmientes": {
    "Definición": "Término despectivo usado por la Escuela para definir las leyes morales de las religiones y la sociedad burguesa, las cuales se basan en el fanatismo y el sometimiento. Particularmente se aplica a la opresión que mantiene a la mujer atada y subyugada al hombre, prohibiéndole 'pulsar la pluma' y pensar libremente.",
    "Contexto": "El Espiritismo en su Asiento (Tercera Parte, Acotaciones del Cap. III).",
    "Conexiones": ["Emancipación Femenina", "Romper las Esposas", "Rechazo del Dogmatismo Social"],
    "Obras": ["El Espiritismo en su Asiento"]
  },
  "La Embajada de Sión": {
    "Definición": "El origen cósmico de la misión trincadista. Revelación que confirma que Joaquín Trincado y sus colaboradores no son espíritus nativos de la evolución terrestre, sino que provienen de mundos altamente adelantados ('el faro central de nuestra nebulosa, la mágica Sión'), sacrificándose para escribir el Código y gobernar la transición humana hacia el Séptimo Día.",
    "Contexto": "El Espiritismo en su Asiento (Tercera Parte, Cap. III, Comunicación de Portillo).",
    "Conexiones": ["Misioneros de Sión", "El Misionero Mayor", "Sacrificio Cósmico"],
    "Obras": ["El Espiritismo en su Asiento", "Conócete a ti mismo"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 18 nodos PURA CALIDAD 1:1 de El Espiritismo en su Asiento (Batch 4) y 2 términos sinápticos.');
