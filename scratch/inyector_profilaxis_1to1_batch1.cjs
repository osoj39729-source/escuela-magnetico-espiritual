const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/profilaxis-de-la-vida_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Profilaxis de la Vida (Batch 1 - Rellenando Gaps Iniciales)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "5: PROFILAXIS DE LA VIDA (INTRODUCCIÓN)": {
    "PilotoDeCoherencia": "Definimos la Profilaxis como la ley de prevención que evita el dolor y la enfermedad. Esta obra es un tratado de higiene total: física, moral y espiritual. El cuerpo es el taller del espíritu y debe mantenerse limpio y sano para que el trabajo evolutivo no se detenga. La salud es un deber, no un azar.",
    "CitaInelutable": "Profilaxis de la Vida: Tratado de higiene individual y colectiva.",
    "EjemploPedagogico": "Es como un maquinista que aceita y limpia su locomotora antes de iniciar el viaje. Si la máquina está sucia, se trabará en medio del camino. Tu cuerpo es la máquina; tu espíritu es el maquinista. ¡Mantén limpia tu locomotora!",
    "ConexionDoctrinal": ["Salud Integral", "Taller del Espíritu", "Prevención"],
    "NodosSimapticos": ["Maquinista del Ser", "Locomotora Humana", "Higiene Total"]
  },
  "92: LAS CÁTEDRAS DE LOS 24 ANCIANOS": {
    "PilotoDeCoherencia": "Iniciamos las enseñanzas de los 24 Ancianos, espíritus de alta luz que guían a la humanidad. No son 'divinidades', sino hermanos mayores que han recorrido el camino antes que nosotros. Su sabiduría es técnica, moral y científica, orientada a la implantación de la Comuna Universal.",
    "CitaInelutable": "Los 24 Ancianos: El Consejo Superior de la Pedagogía Universal.",
    "EjemploPedagogico": "Son como los catedráticos de una universidad que vienen a dar lecciones a los alumnos de primaria. No vienen a ser adorados, sino a ser escuchados y puestos en práctica. Su aula es el mundo.",
    "ConexionDoctrinal": ["Jerarquía Espiritual", "Pedagogía Universal", "Cátedras"],
    "NodosSimapticos": ["Catedráticos de Luz", "Aula del Mundo", "Hermanos Mayores"]
  },
  "105: EL ANCIANO TERCERO: CRÍTICA A LA HIPOCRESÍA": {
    "PilotoDeCoherencia": "El Anciano Tercero denuncia a los 'sepulcros blanqueados' que usan la religión para ocultar su podredumbre moral. La fe sin obras es fe muerta. La verdadera espiritualidad se demuestra en el taller, en la familia y en el cumplimiento del deber, no en los templos de piedra.",
    "CitaInelutable": "Sois sepulcros blanqueados llenos de inmundos gusanos.",
    "EjemploPedagogico": "Es como una casa que por fuera está recién pintada y tiene flores, pero por dentro está llena de basura y ratas. No engañes al mundo con tu pintura religiosa; limpia tu casa interior.",
    "ConexionDoctrinal": ["Hipocresía Religiosa", "Fe Viva vs Fe Muerta", "Limpieza Interior"],
    "NodosSimapticos": ["Pintura Religiosa", "Casa Interior", "Gusanos del Dogma"]
  },
  "115: EL ANCIANO CUARTO: LA LEY DE SANTIAGO": {
    "PilotoDeCoherencia": "El Anciano Cuarto recupera la enseñanza de Santiago: el cuerpo sin espíritu es cadáver. Reivindica el valor del trabajo y la justicia de los hechos. El espíritu de Santiago, transmigrado desde Shet, nos recuerda que la sabiduría se gana con el sudor de la frente y la luz del entendimiento.",
    "CitaInelutable": "La fe se conquista con el valor, con el trabajo y con la sabiduría.",
    "EjemploPedagogico": "Es como un motor: puedes tener el chasis más hermoso (el cuerpo) y el mejor combustible (la fe), pero si no hay chispa (el espíritu trabajando), el coche no se mueve. Sé el motor de tu propia vida.",
    "ConexionDoctrinal": ["Transmigración", "Trabajo", "Justicia de Hechos"],
    "NodosSimapticos": ["Motor de Vida", "Chispa del Ser", "Justicia en Acción"]
  },
  "125: EL CÓDIGO DE AMOR UNIVERSAL": {
    "PilotoDeCoherencia": "Anunciamos el Código de Amor Universal como la constitución de la Nueva Era. No es una ley de castigos, sino de armonía. El amor es la fuerza que cohesiona los átomos y las sociedades. Bajo este código, el egoísmo desaparece y nace la Comuna de Amor y Ley.",
    "CitaInelutable": "El Código de Amor Universal es la pauta de la educación de los seres.",
    "EjemploPedagogico": "Es como la partitura de una gran orquesta: si cada músico sigue su propia idea, solo hay ruido. Si todos siguen la partitura (el amor), nace la sinfonía universal. Seamos músicos del amor.",
    "ConexionDoctrinal": ["Código de Amor", "Nueva Era", "Armonía Universal"],
    "NodosSimapticos": ["Sinfonía del Amor", "Partitura Divina", "Constitución del Alma"]
  },
  "205: EL ANCIANO QUINTO: LA ECONOMÍA DEL SER": {
    "PilotoDeCoherencia": "El Anciano Quinto introduce la verdadera economía: el uso sabio de las fuerzas vitales. No malgastes tu energía en vicios ni tu tiempo en ociosidad. La economía universal dicta que nada debe desperdiciarse, desde el pedazo de pan hasta el pensamiento más fugaz.",
    "CitaInelutable": "La economía universal es la administración justa de la vida.",
    "EjemploPedagogico": "Es como un tesoro que recibes al nacer. Si lo gastas todo en baratijas (vicios), llegarás al final del camino como un mendigo. Si lo inviertes en sabiduría, llegarás como un rey de tu propio espíritu.",
    "ConexionDoctrinal": ["Economía Universal", "Administración de Vida", "Vicios y Virtudes"],
    "NodosSimapticos": ["Tesoro del Tiempo", "Inversión en Sabiduría", "Mendigo de Espíritu"]
  },
  "215: EL ANCIANO SEXTO: EL TALLER SAGRADO": {
    "PilotoDeCoherencia": "Definimos el cuerpo humano como el taller sagrado donde el espíritu fabrica su progreso. Cada órgano tiene una función divina; cada célula es un trabajador. Profanar el cuerpo con sustancias nocivas es un acto de sabotaje contra el plan del Creador.",
    "CitaInelutable": "Tu cuerpo es el taller; no permitas que entre la suciedad del error.",
    "EjemploPedagogico": "Es como el taller de un artesano: si dejas que las herramientas se oxiden y que el suelo se llene de basura, nunca harás una obra de arte. Tu vida es la obra de arte; mantén limpio tu taller.",
    "ConexionDoctrinal": ["Fisiología Racional", "Progreso", "Higiene Corporal"],
    "NodosSimapticos": ["Artesano de Vida", "Herramientas del Ser", "Sabotaje Orgánico"]
  },
  "305: EL ANCIANO SÉPTIMO: LA LEY DE AFINIDAD": {
    "PilotoDeCoherencia": "La afinidad es el imán que une a los seres. En la familia y en la comuna, la afinidad debe ser la base de toda unión. Denunciamos los matrimonios por interés o por dogma. Solo la unión de espíritus afines produce frutos sanos y una sociedad equilibrada.",
    "CitaInelutable": "La afinidad es la única ley de unión legítima ante Eloí.",
    "EjemploPedagogico": "Es como dos imanes: si intentas unirlos por la fuerza en polos opuestos, se rechazarán siempre. Si los dejas libres, se buscarán y se unirán con fuerza natural. Deja que tu afinidad guíe tu corazón.",
    "ConexionDoctrinal": ["Afinidad", "Matrimonio Racional", "Equilibrio Social"],
    "NodosSimapticos": ["Imán de Almas", "Unión Natural", "Polos del Amor"]
  },
  "315: EL ANCIANO OCTAVO: LA REPRODUCCIÓN COMO DEBER": {
    "PilotoDeCoherencia": "La reproducción no es un pecado, es el deber de perpetuar la vida. Cada ser que nace es una oportunidad de progreso para un espíritu. Quien huye de la paternidad por egoísmo, está negando el pan del progreso a sus hermanos. La profilaxis asegura que esta reproducción sea consciente y sana.",
    "CitaInelutable": "La procreación es la ley de la vida eterna en la materia.",
    "EjemploPedagogico": "Es como una carrera de relevos: si un corredor se queda sentado y no pasa el testigo, la carrera se detiene. Pasa el testigo de la vida con responsabilidad y amor.",
    "ConexionDoctrinal": ["Procreación", "Responsabilidad", "Vida Eterna"],
    "NodosSimapticos": ["Testigo de Vida", "Carrera de Almas", "Pan de Progreso"]
  },
  "325: EL ANCIANO NOVENO: LA MUJER Y LA MATERNIDAD": {
    "PilotoDeCoherencia": "Reivindicamos la maternidad como el acto más sagrado de la naturaleza. La mujer embarazada debe ser tratada como un templo viviente. Su estado de ánimo, sus pensamientos y su salud física determinan el futuro del nuevo ser. La profilaxis empieza en el útero materno.",
    "CitaInelutable": "La madre es la primera pedagoga de la humanidad.",
    "EjemploPedagogico": "Es como el molde de una estatua: si el molde está torcido o sucio, la estatua saldrá deforme por más que el bronce sea puro. Cuida el molde (la madre) para que el fruto (el hijo) sea perfecto.",
    "ConexionDoctrinal": ["Maternidad", "Influencia Materna", "Higiene Prenatal"],
    "NodosSimapticos": ["Molde de Almas", "Templo Viviente", "Primer Pedagogo"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Profilaxis": {
    "Definición": "Ley de prevención integral que abarca la higiene del cuerpo, la rectitud del pensamiento y la pureza del sentimiento, con el fin de evitar enfermedades y deudas espirituales.",
    "Contexto": "Concepto central en Profilaxis de la Vida.",
    "Conexiones": ["Higiene Total", "Prevención", "Salud"],
    "Obras": ["Profilaxis de la Vida"]
  },
  "24 Ancianos": {
    "Definición": "Jerarquía de espíritus superiores que actúan como el Consejo Pedagógico de la Tierra, encargados de transmitir conocimientos científicos y morales para la evolución humana.",
    "Contexto": "Cátedras en Profilaxis de la Vida.",
    "Conexiones": ["Jerarquía Espiritual", "Pedagogía Universal", "Cátedras"],
    "Obras": ["Profilaxis de la Vida", "El Espiritismo en su Asiento"]
  },
  "Economía Universal": {
    "Definición": "Administración justa y matemática de todos los recursos (tiempo, energía, bienes, vida) basada en la solidaridad y el aprovechamiento máximo para el progreso común.",
    "Conexiones": ["Comuna", "Solidaridad", "Justicia"],
    "Obras": ["Profilaxis de la Vida", "Los Cinco Amores"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Profilaxis de la Vida (Batch 1 - Rellenando Gaps) y 3 términos sinápticos.');
