const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/el-magnetismo-en-su-origen_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - El Magnetismo en su Origen (Batch 5 - Instrucciones Generales)
const nuevosNodos = {
  "2073: GRADO SÉPTIMO Y SUPREMO: DESDOBLAMIENTO Y ATRACCIÓN": {
    "PilotoDeCoherencia": "Culminación teórica de la escala magnética. En este grado se demuestra que es imposible separar el Magnetismo de su tronco, el Espiritismo. Desde el quinto grado (Telepatía) ya se opera en espiritismo puro. Negar el Espiritismo tras comprender esto es la quimera más ignorante o maliciosa de las ciencias oficiales.",
    "CitaInelutable": "Negar el Espiritismo después de operar el magnetismo es negar la vida misma.",
    "EjemploPedagogico": "Es como un físico que estudia la luz pero se niega a admitir que existe el sol. El magnetismo es la luz; el Espiritismo es el sol.",
    "ConexionDoctrinal": ["Grado Supremo", "Indivisibilidad Magnetismo-Espiritismo", "Atracción Espiritual"],
    "NodosSimapticos": ["Sol del Magnetismo", "Quimera Científica", "Unión Inexorable"]
  },
  "2136: INSTRUCCIÓN PRIMERA: OPERAR EN CADENA": {
    "PilotoDeCoherencia": "Es posible operar con varios sonámbulos a la vez, enviándolos a diferentes puntos o convocando entidades (desdoblados) para inspiración conjunta de líderes mundiales. Este grado exige un aplomo absoluto y serenidad inalterable por parte del operador para contrarrestar influencias de espíritus engañosos (ficciones).",
    "CitaInelutable": "El maestro sabio puede dirigir una orquesta de espíritus para inspirar la paz de las naciones.",
    "EjemploPedagogico": "Es como un director de orquesta que controla múltiples instrumentos (sonámbulos) para que toquen una sinfonía perfecta (progreso social). Si el director duda, la orquesta desafina.",
    "ConexionDoctrinal": ["Cadena Magnética", "Operación Múltiple", "Inspiración Internacional"],
    "NodosSimapticos": ["Orquesta Espiritual", "Aplomo del Maestro", "Sinfonía de Progreso"]
  },
  "2184: INSTRUCCIÓN SEGUNDA: PROVECHO SIN QUIMERAS": {
    "PilotoDeCoherencia": "El discípulo tiene derecho a usar su poder magnético para su sustento material, pero no debe caer en afirmaciones quiméricas u orgullosas como 'mi poder no puede ser vencido'. La ley de fuerzas dicta que siempre habrá un espíritu más sabio capaz de doblegar al orgulloso. El reto constante trae un calvario de humillaciones.",
    "CitaInelutable": "La quimera de la invencibilidad es el prólogo del calvario del orgulloso.",
    "EjemploPedagogico": "Es como el luchador que grita que nadie puede vencerle: tarde o temprano aparece uno más fuerte y lo humilla. El sabio usa su fuerza para vivir, no para retar al universo.",
    "ConexionDoctrinal": ["Provecho Material Justo", "Contra el Orgullo Magnético", "Ley de Fuerzas"],
    "NodosSimapticos": ["Reto Temerario", "Humillación del Orgulloso", "Derecho al Sustento"]
  },
  "2236: INSTRUCCIÓN TERCERA: LA MIRADA Y EL ASEO": {
    "PilotoDeCoherencia": "Se repudia el uso criminal de la fascinación o alucinación forzada, que esclaviza al prójimo. El Método Supremo basa su influencia material en dos elementos lícitos: la mirada franca y el aseo personal (limpieza). Estos atraen la simpatía de forma natural, permitiendo usar la sugestión mental para conseguir trabajo justo, nunca regalos.",
    "CitaInelutable": "La fascinación esclaviza; la mirada franca y el aseo atraen la justicia sin robar la libertad.",
    "EjemploPedagogico": "Es como abrir una puerta: la fascinación criminal la derriba a patadas (robo); el aseo y la mirada franca piden la llave con amabilidad. Ambos entran, pero solo el segundo es bienvenido.",
    "ConexionDoctrinal": ["Fascinación Condenada", "Aseo como Atracción", "Simpatía Natural"],
    "NodosSimapticos": ["Puerta Amable", "Llave del Aseo", "Rechazo de Esclavitud"]
  },
  "2282: INSTRUCCIÓN CUARTA: NO DECLARAR POBREZA": {
    "PilotoDeCoherencia": "Instrucción social y psicológica: no hacer alarde de pobreza material ante una sociedad hipócrita que huye de ella. La miseria material espanta las oportunidades generadas por el magnetismo. Solo debe confesarse la pobreza cuando la justicia lo exija estrictamente (por ejemplo, ante la pareja para evitar engaños).",
    "CitaInelutable": "En un mundo hipócrita, pregonar la pobreza es ahuyentar el progreso material.",
    "EjemploPedagogico": "Es como ir a buscar trabajo vestido con harapos para dar lástima: en lugar de empleo, te darán limosna o la espalda. El magnetizador debe proyectar dignidad, no miseria.",
    "ConexionDoctrinal": ["Manejo Social", "Dignidad Material", "Evitar Lástima"],
    "NodosSimapticos": ["Harapos del Alma", "Rechazo de la Lástima", "Dignidad Magnética"]
  },
  "2316: INSTRUCCIÓN QUINTA: QUERER ES PODER (CON LEY)": {
    "PilotoDeCoherencia": "El axioma 'Querer es Poder' es verdadero solo si está ajustado al grado de progreso del individuo y a la ley de justicia. No basta con desear algo caprichosamente para vencer. El poder real se forja asumiendo grandes misiones y soportando sufrimientos existenciales en favor de la regeneración ajena.",
    "CitaInelutable": "Querer es poder, pero solo cuando el querer está alineado con la ley universal del trabajo.",
    "EjemploPedagogico": "Es como querer levantar un muro de ladrillos solo con pensarlo: no puedes. 'Querer es poder' significa tener la voluntad de poner los ladrillos uno por uno, sudando, hasta terminar el muro.",
    "ConexionDoctrinal": ["Querer es Poder", "Ley de Progreso", "Misión y Sufrimiento"],
    "NodosSimapticos": ["Muro de Esfuerzo", "Voluntad Operativa", "Ley vs Capricho"]
  },
  "2372: INSTRUCCIÓN SEXTA: SUGESTIÓN CONSTANTE": {
    "PilotoDeCoherencia": "Técnica de persuasión lícita: si se requiere un servicio o ayuda justa de otra persona, el magnetizador debe primero establecer un contacto físico (hablar de frente). Luego, a distancia y en momentos de reposo del sujeto, proyectar la sugestión de forma constante (varias veces al día) hasta alcanzar el fin deseado.",
    "CitaInelutable": "Acostumbrarse a sugerir es aprender a conseguir por la vía invisible de la afinidad.",
    "EjemploPedagogico": "Es como regar una semilla: no le tiras un cubo de agua de golpe, le das gotas constantes cada día. La sugestión repetida es el agua que hace germinar la voluntad ajena a tu favor.",
    "ConexionDoctrinal": ["Sugestión Lícita", "Constancia Mental", "Influencia a Distancia"],
    "NodosSimapticos": ["Goteo Magnético", "Riego del Pensamiento", "Persuasión Invisible"]
  },
  "2422: INSTRUCCIÓN SÉPTIMA: NECESIDAD DEL AMOR DE LA CARNE": {
    "PilotoDeCoherencia": "Reivindicación absoluta de la sexualidad (el amor carnal) como ley suprema de la materia para la procreación y la regeneración. El Maestro condena enérgicamente el celibato religioso como un 'crimen de lesa humanidad' y una blasfemia que insulta al Creador de la vida y bloquea el progreso físico y espiritual.",
    "CitaInelutable": "El celibato dogmático es un crimen de lesa humanidad que blasfema contra el Creador de la vida.",
    "EjemploPedagogico": "Es como tapar un manantial cristalino porque crees que el agua es impura. Al taparlo, el agua se estanca, se pudre o rompe la roca por otro lado (vicios). El amor carnal es el manantial de la vida.",
    "ConexionDoctrinal": ["Amor Carnal", "Condena del Celibato", "Procreación como Ley"],
    "NodosSimapticos": ["Manantial de Vida", "Crimen Celibatario", "Suprema Ley de la Carne"]
  },
  "2570: LA SERENIDAD (CIERRE DE INSTRUCCIONES)": {
    "PilotoDeCoherencia": "La virtud que corona el 'Método Supremo'. Sin serenidad, ningún poder magnético es estable. La serenidad es hija de la sabiduría y del amor. Los científicos materiales que no tienen amor carecen de serenidad; son 'luces de bengala' que brillan un instante en su orgullo y luego se apagan en la frustración.",
    "CitaInelutable": "La serenidad es la verdadera potencia magnética; sin ella, todo poder es efímero.",
    "EjemploPedagogico": "Es como el centro de un huracán: afuera hay ruido y viento (el mundo), pero adentro hay calma absoluta. El magnetizador sereno opera desde el centro del huracán.",
    "ConexionDoctrinal": ["Serenidad", "Sabiduría y Amor", "Control de Fuerzas"],
    "NodosSimapticos": ["Centro del Huracán", "Luz Constante vs Bengala", "Potencia Silenciosa"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Sinfonía Magnética (Operación en Cadena)": {
    "Definición": "Técnica magnética avanzada donde un operador, con aplomo inalterable, dirige simultáneamente a varios sonámbulos desdoblados para influir solidariamente en las decisiones de líderes o conjuntos sociales.",
    "Contexto": "Instrucción Primera, Parte Tercera de El Magnetismo en su Origen.",
    "Conexiones": ["Sonambulismo", "Telepatía", "Solidaridad Universal"],
    "Obras": ["El Magnetismo en su Origen"]
  },
  "Celibato (Crimen de Lesa Humanidad)": {
    "Definición": "Estado forzado de negación sexual impuesto por religiones, catalogado por la Escuela como blasfemia contra las leyes de procreación y causante de vicios ocultos y freno al progreso encarnatorio.",
    "Contexto": "Instrucción Séptima, Parte Tercera de El Magnetismo en su Origen.",
    "Conexiones": ["Amor de la Carne", "Religiones", "Naturaleza"],
    "Obras": ["El Magnetismo en su Origen", "Profilaxis de la Vida"]
  },
  "Serenidad Magnética": {
    "Definición": "Estado de equilibrio absoluto derivado de la sabiduría y el amor ('Conócete a ti mismo'), que permite al magnetizador operar fuerzas cósmicas sin que estas lo desborden ni agoten.",
    "Contexto": "Instrucción Final de El Magnetismo en su Origen.",
    "Conexiones": ["Sabiduría", "Amor", "Aplomo"],
    "Obras": ["El Magnetismo en su Origen"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 9 nodos 1:1 de El Magnetismo en su Origen (Batch 5 - Instrucciones Generales) y 3 términos sinápticos.');
