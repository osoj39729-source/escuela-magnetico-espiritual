const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/el-magnetismo-en-su-origen_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - El Magnetismo en su Origen (Batch 6 - Claves 52 a 61)
const nuevosNodos = {
  "2146: ficciones, peligros, supercherías, etc.": {
    "PilotoDeCoherencia": "Utilidad de la operación en red. El operador puede convocar espíritus de líderes, diplomáticos o familiares enfrentados y, en estado de desdoblamiento, ponerlos de acuerdo en el plano astral para que al despertar inspiren la paz en sus materias.",
    "CitaInelutable": "Podéis atraer por la evocación, a tantos hombres, desdoblados... y si se trata de un adelanto nacional, o de una conveniencia internacional, los podéis poner de acuerdo a los traídos en sus espíritus.",
    "EjemploPedagogico": "Es como una cumbre de la ONU, pero secreta y en el plano astral. El magnetizador sienta a los espíritus de los gobernantes en una mesa redonda para que firmen la paz mientras sus cuerpos duermen.",
    "ConexionDoctrinal": ["Diplomacia Astral", "Resolución de Conflictos", "Evocación Múltiple"],
    "NodosSimapticos": ["Cumbre Astral"]
  },
  "2158: vez, cinco jefes de naciones diversas.": {
    "PilotoDeCoherencia": "Advertencia operativa. Trabajar reconciliaciones familiares o internacionales en el plano astral requiere un aplomo gigantesco y una serenidad inalterable por parte del operador para no sucumbir a las vibraciones bélicas o de odio de los espíritus convocados.",
    "CitaInelutable": "Otro de los muchos casos, fueron varios miembros de una familia que vivían vida de infierno y se justificaron unos y otros... Pero, hay que confesar que para estos trabajos, es necesario un aplomo muy grande.",
    "EjemploPedagogico": "Meterse a separar una pelea de espíritus llenos de odio es como meter las manos en fuego; necesitas la serenidad de una roca (el aplomo) para no quemarte.",
    "ConexionDoctrinal": ["Serenidad del Operador", "Peligro de Evocación Bélica"],
    "NodosSimapticos": ["Aplomo Inalterable"]
  },
  "2184: SEGUNDA": {
    "PilotoDeCoherencia": "Derecho al sustento vs Quimeras. El discípulo tiene pleno derecho a usar su magnetismo para ganarse la vida honradamente, pero Trincado repudia las 'quimeras' de otros métodos que enseñan afirmaciones petulantes como 'mi poder no puede ser vencido'.",
    "CitaInelutable": "Tienes derecho al provecho de tu poder para llenar las necesidades de la vida... pero es necio tener una letanía de quimeras como... 'El poder mío no puede ser vencido'.",
    "EjemploPedagogico": "Un médico cobra por su trabajo (derecho natural), pero si el médico grita '¡soy un dios invencible de la medicina!', es un petulante que niega la justicia cósmica.",
    "ConexionDoctrinal": ["Derecho al Sustento", "Rechazo de Letanías Petulantes"],
    "NodosSimapticos": ["Quimera de Invencibilidad"]
  },
  "2236: TERCERA: LA MIRADA Y EL ASEO": {
    "PilotoDeCoherencia": "Ética de la atracción. Trincado rechaza las palabras 'fascinación' y 'alucinación', considerándolas criminales porque implican esclavizar a la víctima. El verdadero magnetizador atrae no por dominación hipnótica, sino por la pureza de su mirada, la educación y el riguroso aseo personal.",
    "CitaInelutable": "Han llamado fascinación y alucinación, al poder de la mirada... En nuestros discípulos, no puede haber estos principios dominadores, un tanto criminales, porque esclavizan.",
    "EjemploPedagogico": "No necesitas hipnotizar a alguien como una serpiente a un ratón (fascinación). Si te presentas limpio, perfumado y con una mirada transparente, la persona se acercará a ti por pura afinidad natural.",
    "ConexionDoctrinal": ["Rechazo a la Fascinación", "Aseo como Magnetismo", "Atracción Natural"],
    "NodosSimapticos": ["Fascinación Criminal", "Magnetismo del Aseo"]
  },
  "2282: CUARTA: NO HAGÁIS DECLARACIÓN DE POBREZA": {
    "PilotoDeCoherencia": "Psicología social del magnetismo. En un mundo materialista, hacer alarde de pobreza genera rechazo instintivo. Trincado aconseja mantener el decoro y no pregonar carencias, pues la sociedad hipócrita huye de quien nada tiene, invalidando la capacidad del operador para influir positivamente.",
    "CitaInelutable": "El mundo, aún es así: todos huyen de la pobreza... la hipócrita educación ha sustituido por la maldad el aserto 'tanto puedes cuanto quieres' por el de 'tanto puedes cuanto tienes'.",
    "EjemploPedagogico": "Si tienes una tienda y te la pasas llorando en la puerta diciendo que estás quebrado, los clientes no entrarán. La pobreza material no debe anunciarse, pues corta la corriente del respeto social.",
    "ConexionDoctrinal": ["Psicología Social", "El Decoro Magnético"],
    "NodosSimapticos": ["Repelencia de la Pobreza"]
  },
  "2316: QUINTA: QUERER ES PODER": {
    "PilotoDeCoherencia": "Matización de un axioma clásico. 'Querer es poder' es cierto pero con límites. Trincado advierte que es un error empírico creer que basta con decir 'quiero' para vencer. El poder está condicionado por el grado de elevación, la justicia de la causa y el esfuerzo real (el sufrimiento previo) del operador.",
    "CitaInelutable": "Querer es poder... Esto es empírico, pero para cada uno en su grado; mas es erróneo, si con ello se afirma, que basta decir quiero, para poder y vencer.",
    "EjemploPedagogico": "Un niño de 5 años puede decir 'quiero levantar un camión', pero no tiene el grado de fuerza para hacerlo. Querer es poder solo si tienes el músculo y la ley de tu lado.",
    "ConexionDoctrinal": ["Límites del Querer", "El Poder Condicionado"],
    "NodosSimapticos": ["Empirismo del Querer"]
  },
  "2372: SEXTA: SUGESTIÓN CONSTANTE": {
    "PilotoDeCoherencia": "La preparación del terreno. Para lograr un objetivo lícito (ej. conseguir un trabajo o un favor), no basta con un choque magnético directo. Se requiere 'sugestión constante': un período de impregnación mental a distancia antes del contacto físico, para preparar la afinidad del sujeto receptor.",
    "CitaInelutable": "Acostumbrarse a sugerir y así podéis conseguir... antes de querer gozarlo, es preciso un tiempo de sugestión.",
    "EjemploPedagogico": "Un campesino no tira la semilla en la tierra seca (choque directo). Primero la ara, la riega y la abona durante días (sugestión constante). Luego siembra.",
    "ConexionDoctrinal": ["Sugestión Preparatoria", "Trabajo Previo a Distancia"],
    "NodosSimapticos": ["Abono Psíquico"]
  },
  "2422: SÉPTIMA: NECESIDAD DEL AMOR DE LA CARNE": {
    "PilotoDeCoherencia": "Axioma biológico-espiritual radical. El uso de la carne (sexo/amor físico) es la suprema ley de la materia. Trincado condena tajantemente el celibato religioso como un 'crimen de lesa humanidad' y una negación antinatural de la ley de perpetuación, destruyendo el ascetismo falso.",
    "CitaInelutable": "El uso de la carne (o el amor carnal como lo llamáis) es también la suprema ley de la materia... El celibato, es la negación de la ley y un crimen de lesa humanidad.",
    "EjemploPedagogico": "El cuerpo físico no es un pecado de barro, es la fábrica de la vida. Apagar las máquinas de la fábrica (celibato) creyendo que así agradas a Eloí, es insultar al ingeniero que la construyó.",
    "ConexionDoctrinal": ["Ley Suprema de la Materia", "Condena del Celibato", "Rechazo del Ascetismo"],
    "NodosSimapticos": ["Crimen de Lesa Humanidad (Celibato)", "Amor de la Carne"]
  },
  "2499: ley humana, si es mandato de ley divina?": {
    "PilotoDeCoherencia": "El cuerpo como instrumento con derechos. Negarle al cuerpo físico el 'único goce que como pago a su trabajo le da la ley' es prepararse para caer en aberraciones peores (como las que sufre el clero). La clave no es la castración, sino el equilibrio: uso sin vicio ni abuso.",
    "CitaInelutable": "Negarle al cuerpo... del único goce que como pago a su trabajo le da la ley, es cometer un crimen y preparar muchos crímenes sin duda; por lo que, no se lo neguéis con injusticia.",
    "EjemploPedagogico": "Si un caballo te lleva sobre su lomo todo el día y al final le niegas la alfalfa por 'puritanismo', el caballo se volverá loco y te morderá. El cuerpo necesita el pago de la ley de afinidad (sexo natural sin aberración).",
    "ConexionDoctrinal": ["Pago al Cuerpo", "Equilibrio Fisiológico", "Consecuencias del Puritanismo"],
    "NodosSimapticos": ["Aberración por Castración"]
  },
  "2570: LA SERENIDAD": {
    "PilotoDeCoherencia": "El cimiento definitivo del operador. Trincado cierra las instrucciones con la Serenidad. No es mera tranquilidad, es la verdadera potencia magnética, el centro de gravedad del alma. Sin ella, ninguna de las leyes anteriores funciona, y el magnetizador es un barco a la deriva.",
    "CitaInelutable": "Dejé a propósito esta instrucción para el último... sin la serenidad nada conseguiréis para vosotros y menos para los demás. La serenidad, es la verdadera potencia.",
    "EjemploPedagogico": "La serenidad es el centro de un huracán. Todo alrededor puede ser caos, enfermedad o ataques espirituales, pero si el operador pierde su centro, el huracán se lo traga.",
    "ConexionDoctrinal": ["La Verdadera Potencia", "Centro de Gravedad Espiritual"],
    "NodosSimapticos": ["Ojo del Huracán", "Serenidad Magnética"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Crimen de Lesa Humanidad (Celibato)": {
    "Definición": "Calificación jurídica y doctrinal impuesta por la Escuela al estado de celibato (especialmente el religioso). Se define como un crimen contra la especie, al negar la ley suprema de perpetuación biológica (el amor de la carne) y violentar la fisiología natural del cuerpo.",
    "Contexto": "Instrucción Séptima de la Tercera Parte de El Magnetismo en su Origen.",
    "Conexiones": ["Amor de la Carne", "Ascetismo Falso", "Ley de la Materia"],
    "Obras": ["El Magnetismo en su Origen", "Profilaxis de la Vida"]
  },
  "Magnetismo del Aseo": {
    "Definición": "Principio ético que rechaza las prácticas oscuras de 'fascinación' (esclavizar con la mirada) y establece que la verdadera y lícita atracción magnética inicial en el mundo físico se logra a través de la pulcritud, el decoro, el buen traje y una mirada franca.",
    "Contexto": "Instrucción Tercera de la Tercera Parte de El Magnetismo en su Origen.",
    "Conexiones": ["Fascinación", "Atracción Natural", "Aseo"],
    "Obras": ["El Magnetismo en su Origen"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos PURA CALIDAD 1:1 de El Magnetismo en su Origen (Batch 6) y 2 términos sinápticos.');
