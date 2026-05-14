const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 23)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "14801: DEBERES DEL HOMBRE HACIA SÍ MISMO": {
    "PilotoDeCoherencia": "El primer deber del hombre es hacia su propio instrumento: el cuerpo. No por vanidad, sino por responsabilidad misionera. El espíritu necesita un cuerpo sano para cumplir su ley. Descuidar la salud es sabotear la obra del Creador. Tú eres el guardián de tu propia vida material.",
    "CitaInelutable": "El cuerpo es el taller del espíritu; mantenerlo limpio y fuerte es el primer acto de justicia.",
    "EjemploPedagogico": "Es como un artesano que tiene una sola herramienta para toda su vida. Si deja que la herramienta se oxide o se rompa por descuido, no podrá trabajar y morirá de hambre. Tu cuerpo es esa herramienta única de tu espíritu.",
    "ConexionDoctrinal": ["Deber Individual", "Salud", "Instrumento"],
    "NodosSimapticos": ["Guardián del Cuerpo", "Responsabilidad Misionera", "Taller del Espíritu"]
  },
  "15095: LA VIRTUD DE LA TEMPLANZA": {
    "PilotoDeCoherencia": "La templanza es el equilibrio en la satisfacción de las necesidades nutritivas. Ni el ayuno místico que debilita, ni la gula animal que embrutece. La regla es clara: Come para vivir y no vivas para comer. El espíritu templado es el que domina sus apetitos para mantener la mente despejada.",
    "CitaInelutable": "Come para vivir y no vivas para comer; he ahí la ley de la templanza.",
    "EjemploPedagogico": "Es como echarle leña al fuego: si echas poca, se apaga; si echas demasiada, provocas un incendio que lo quema todo. Echa la leña justa para que el fuego de tu vida ilumine y caliente sin destruir.",
    "ConexionDoctrinal": ["Templanza", "Equilibrio", "Nutrición Racional"],
    "NodosSimapticos": ["Fuego de la Vida", "Dominio del Apetito", "Regla de Oro"]
  },
  "15365: DEBERES NEGATIVOS — EVITAR LA DESINTEGRACIÓN": {
    "PilotoDeCoherencia": "Tenemos el deber de evitar todo lo que comprometa la integridad de la vida. Esto incluye sustancias perniciosas (vicios) y actos que desgasten inútilmente el organismo. El espíritu que daña su cuerpo conscientemente está faltando a la ley de amor que debe empezar por uno mismo.",
    "CitaInelutable": "Evitar la desintegración parcial es el deber de conservar la vida para el progreso.",
    "EjemploPedagogico": "Es como una casa: si ves una gotera y no la arreglas, terminará pudriendo el techo. Los vicios son las goteras que, si no se detienen, destruyen el hogar del espíritu.",
    "ConexionDoctrinal": ["Higiene Moral", "Vicios", "Integridad"],
    "NodosSimapticos": ["Evitar el Desgaste", "Goteras del Vicio", "Amor Propio Racional"]
  },
  "15645: LAS REGLAS RESTRICTIVAS DE LA HIGIENE": {
    "PilotoDeCoherencia": "La higiene no es solo limpieza exterior, es moral aplicada. Abstenerse de lo que altera la salud es un deber ético. Denunciamos que se considere la higiene como algo mundano; es una necesidad del espíritu para que sus vibraciones no encuentren obstáculos en una carne enferma o intoxicada.",
    "CitaInelutable": "La higiene es la base física de la moral racional.",
    "EjemploPedagogico": "Es como limpiar las lentes de un telescopio. Si la lente está sucia, no verás las estrellas. Si tu cuerpo está sucio por dentro, tu espíritu no verá la verdad con claridad.",
    "ConexionDoctrinal": ["Higiene", "Salud y Espíritu", "Pureza Orgánica"],
    "NodosSimapticos": ["Higiene Moral", "Lentes del Espíritu", "Pureza de la Carne"]
  },
  "15925: CONDENA AL CELIBATO CATÓLICO": {
    "PilotoDeCoherencia": "Denunciamos el celibato como un crimen contra la naturaleza y un suicidio moral. El hombre y la mujer fueron creados para unirse y procrear. Negar esta ley es violentar el organismo y el espíritu, creando desequilibrios que llevan a la hipocresía y al vicio oculto. El celibato es una mutilación espiritual.",
    "CitaInelutable": "El celibato es un suicidio lento que condena la razón y la vida.",
    "EjemploPedagogico": "Es como intentar detener el curso de un río con una presa de paja. El agua (la fuerza vital) terminará pudriéndose o desbordándose por caminos oscuros. La unión natural es el cauce que lleva el río al mar del amor.",
    "ConexionDoctrinal": ["Anti-Celibato", "Unión Natural", "Crítica a las Religiones"],
    "NodosSimapticos": ["Suicidio Moral", "Mutilación Espiritual", "Río Estancado"]
  },
  "16195: EL SUICIDIO Y LAS MUTILACIONES": {
    "PilotoDeCoherencia": "El suicidio es la mayor falta de responsabilidad. Es huir de la misión antes de tiempo. Las mutilaciones voluntarias por 'santidad' son ofensas a la sabiduría de Eloí que nos dio un cuerpo perfecto. El espíritu debe enfrentar su destino con valor y no destruir el instrumento que él mismo pidió.",
    "CitaInelutable": "Destruir el cuerpo es traicionar la confianza que el universo puso en tu espíritu.",
    "EjemploPedagogico": "Es como un soldado que abandona su puesto en plena batalla y destruye sus armas. No solo pierde la batalla, sino que deja desprotegidos a sus hermanos. El suicida es un desertor del progreso.",
    "ConexionDoctrinal": ["Anti-Suicidio", "Responsabilidad", "Misión"],
    "NodosSimapticos": ["Traición al Destino", "Desertor del Progreso", "Misión Sagrada"]
  },
  "16465: DEBERES CORRESPONDIENTES A LA SENSIBILIDAD": {
    "PilotoDeCoherencia": "El espíritu tiene el deber de educar su sensibilidad. No dejarse arrastrar por el dolor excesivo ni por el placer desenfrenado. El equilibrio sensible nos permite percibir la realidad sin distorsiones emocionales. El filósofo debe ser dueño de sus sentidos.",
    "CitaInelutable": "La sensibilidad educada es la armonía del espíritu con el mundo exterior.",
    "EjemploPedagogico": "Es como un sismógrafo: si es demasiado sensible, cualquier viento lo vuelve loco. Si es poco sensible, no nota el terremoto. Educa tu sensibilidad para notar la verdad sin perder el centro.",
    "ConexionDoctrinal": ["Sensibilidad", "Equilibrio Emocional", "Dominio"],
    "NodosSimapticos": ["Sismógrafo del Ser", "Educación Sensible", "Centro del Espíritu"]
  },
  "16735: EL TRABAJO COMO DEBER ÉTICO": {
    "PilotoDeCoherencia": "El trabajo es la ley de la vida. Quien no trabaja, no tiene derecho a comer. El trabajo dignifica y es el medio por el cual el espíritu transforma la materia. Denunciamos la ociosidad de las clases privilegiadas como un robo a la humanidad. Todos deben producir según su capacidad.",
    "CitaInelutable": "El trabajo es la única oración que el progreso escucha.",
    "EjemploPedagogico": "Un músculo que no se usa, se atrofia. Un espíritu que no trabaja, se embrutece. El trabajo es el ejercicio que mantiene vivo y fuerte al espíritu en su marcha eterna.",
    "ConexionDoctrinal": ["Trabajo", "Justicia Social", "Derecho a la Vida"],
    "NodosSimapticos": ["Oración del Trabajo", "Ley de Acción", "Atrofia del Ser"]
  },
  "17005: LA INTEGRIDAD DEL ORGANISMO": {
    "PilotoDeCoherencia": "Cuidar la integridad del organismo es un mandato moral. Evitar accidentes por imprudencia y enfermedades por vicio. El espíritu responsable sabe que cada cicatriz en el cuerpo es una dificultad añadida a su misión. La profilaxis es la mejor amiga de la ética.",
    "CitaInelutable": "Conserva tu integridad física para que tu espíritu no tenga cadenas materiales.",
    "EjemploPedagogico": "Es como un mensajero que debe entregar una carta urgente. Si el mensajero no cuida sus pies (su cuerpo), la carta no llegará. Cuida tus pies para que el mensaje del espíritu sea entregado.",
    "ConexionDoctrinal": ["Profilaxis", "Cuidado del Cuerpo", "Misión"],
    "NodosSimapticos": ["Mensajero del Espíritu", "Integridad Física", "Cadenas Materiales"]
  },
  "17275: LA REGLA DE LA VERDADERA VIDA": {
    "PilotoDeCoherencia": "Concluimos los deberes individuales con una sentencia: vive de tal modo que tu cuerpo sea un canal puro para la luz de tu espíritu. Todo lo que te manche, te debilite o te aisle de la naturaleza, queda condenado por la Ética Racional. La vida es un regalo que se agradece con salud y obra.",
    "CitaInelutable": "La verdadera vida es la armonía total entre el taller de la carne y el arquitecto del espíritu.",
    "EjemploPedagogico": "Tú eres el director de una orquesta donde el único músico es tu cuerpo. Toca la sinfonía de la vida con alegría, fuerza y orden. Esa es la mejor ofrenda a Eloí.",
    "ConexionDoctrinal": ["Armonía Vital", "Ofrenda de Obra", "Ética Práctica"],
    "NodosSimapticos": ["Sinfonía de Vida", "Canal de Luz", "Arquitecto y Taller"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Templanza Racional": {
    "Definición": "La virtud del equilibrio en la satisfacción de las necesidades biológicas, basada en la premisa de que el cuerpo debe ser mantenido como un instrumento eficiente para el trabajo del espíritu.",
    "Contexto": "Ética Individual en Filosofía Austera Racional.",
    "Conexiones": ["Higiene Moral", "Equilibrio", "Deber"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Suicidio Moral": {
    "Definición": "Término con el que Trincado califica al celibato y otras prácticas ascéticas que violentan las leyes naturales de la vida, considerándolas una traición a la misión del espíritu.",
    "Contexto": "Condena de prácticas religiosas en Filosofía Austera Racional.",
    "Conexiones": ["Anti-Celibato", "Responsabilidad", "Leyes Naturales"],
    "Obras": ["Filosofía Austera Racional", "Espiritismo en su Asiento"]
  },
  "Higiene Moral": {
    "Definición": "El conjunto de reglas de conducta orientadas a preservar la integridad y salud del cuerpo físico como requisito indispensable para la claridad de las percepciones espirituales.",
    "Conexiones": ["Salud", "Higiene", "Ética"],
    "Obras": ["Filosofía Austera Racional", "Profilaxis de la Vida"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Filosofía Austera Racional (Batch 23) y 3 términos sinápticos.');
