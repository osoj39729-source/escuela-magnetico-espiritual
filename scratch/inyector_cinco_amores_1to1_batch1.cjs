const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/los-cinco-amores_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Los Cinco Amores (Batch 1)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "11: PRIMERA PARTE — EL TALLER DE LA FAMILIA": {
    "PilotoDeCoherencia": "La familia es el primer taller del espíritu. Aquí se labran las primeras piezas de la convivencia racional. No es un lazo místico, es un compromiso de afinidad y trabajo. Si la familia falla en ser escuela de amor, la sociedad entera se resiente.",
    "CitaInelutable": "La familia es el primer taller donde el espíritu empieza a labrar su piedra bruta.",
    "EjemploPedagogico": "Imagina una fábrica: si las piezas salen mal del primer taller, la máquina final nunca funcionará bien. La familia es ese taller de origen.",
    "ConexionDoctrinal": ["Familia Misionera", "Afinidad", "Ley de Amor"],
    "NodosSimapticos": ["Taller de la Familia", "Piedra Bruta", "Afinidad Familiar"]
  },
  "14: CAPÍTULO PRIMERO — EL AMOR DE PADRES E HIJOS": {
    "PilotoDeCoherencia": "El amor de padres a hijos es una deuda de justicia. Traer un espíritu a la carne implica la responsabilidad total de educarlo y sostenerlo. No es un favor que los padres hacen, es el cumplimiento de una ley natural y espiritual.",
    "CitaInelutable": "El amor de los padres a los hijos no es caridad, es justicia de deuda contraída.",
    "EjemploPedagogico": "Es como un contrato que firmas con el universo al invitar a un ser a tu hogar: te comprometes a darle las herramientas para su progreso.",
    "ConexionDoctrinal": ["Justicia", "Deuda de Vida", "Responsabilidad Paternal"],
    "NodosSimapticos": ["Deuda de Justicia", "Amor Paternal", "Responsabilidad"]
  },
  "442: CAPÍTULO SEGUNDO — EL AMOR DE LA CARNE IMPONE LA FAMILIA": {
    "PilotoDeCoherencia": "Niego el celibato religioso como fuente de pureza. El amor de la carne es el mandato de la naturaleza para perpetuar la vida y equilibrar el instrumento físico. Suprimirlo es crear monstruos morales y desequilibrios que dañan al espíritu.",
    "CitaInelutable": "El amor de la carne es mandato de ley divina para el equilibrio del instrumento.",
    "EjemploPedagogico": "El cuerpo es una máquina que necesita combustible y lubricación. Negar el amor de la carne es como quitarle el aceite al motor creyendo que así será más 'limpio': terminará fundiéndose.",
    "ConexionDoctrinal": ["Equilibrio Natural", "Anti-Celibato", "Amor de la Carne"],
    "NodosSimapticos": ["Amor de la Carne", "Anti-Celibato", "Instrumento Físico"]
  },
  "792: CAPITULO TERCERO — EL AMOR DE ESPOSOS IMPONE EL HOGAR": {
    "PilotoDeCoherencia": "El hogar no es una casa, es la armonía de dos voluntades que se unen por afinidad. El matrimonio religioso es una cadena; la unión racional por amor es la verdadera libertad. El esposo y la esposa son compañeros de misión, no dueño y sierva.",
    "CitaInelutable": "El amor de esposos es la armonía de dos polos que buscan un solo fin.",
    "EjemploPedagogico": "Es como dos remeros en una misma barca: si no reman con el mismo ritmo de amor, la barca dará vueltas en círculo y nunca llegará al puerto del progreso.",
    "ConexionDoctrinal": ["Afinidad", "Hogar Racional", "Igualdad Espiritual"],
    "NodosSimapticos": ["Amor de Esposos", "Hogar", "Compañerismo Misionero"]
  },
  "941: CAPITULO CUARTO — EL AMOR DE LOS HIJOS IMPONE EL TRABAJO": {
    "PilotoDeCoherencia": "Tener hijos obliga a trabajar. No solo por el sustento material, sino para dar el ejemplo de dignidad. El trabajo es el único medio legítimo de vida en la Comuna. El padre que no trabaja, roba a sus hijos el ejemplo de la Ley.",
    "CitaInelutable": "El amor de los hijos impone el trabajo como única fuente de vida honrada.",
    "EjemploPedagogico": "El trabajo es el pan del espíritu. Un padre que no trabaja es como alguien que pretende alimentar a su familia con espejismos; al final, todos pasarán hambre moral.",
    "ConexionDoctrinal": ["Ley del Trabajo", "Ejemplo Paternal", "Sustento Racional"],
    "NodosSimapticos": ["Amor a los Hijos", "Mandato de Trabajo", "Vida Honrada"]
  },
  "1239: CAPITULO QUINTO — EL AMOR DE HERMANO ES LA LEY POR ENTERO": {
    "PilotoDeCoherencia": "La fraternidad es el resumen de toda mi enseñanza. 'Ama a tu hermano' es la llave que abre todas las puertas. Si no eres capaz de amar al hermano que ves, no pretendas amar al Padre que no ves. La fraternidad es la base de la Comuna Universal.",
    "CitaInelutable": "El amor de hermano es la ley por entero.",
    "EjemploPedagogico": "La fraternidad es el cemento que une los ladrillos de la sociedad. Sin ella, los ladrillos están sueltos y cualquier viento de ambición los derriba.",
    "ConexionDoctrinal": ["Ama a tu Hermano", "Fraternidad", "Ley Madre"],
    "NodosSimapticos": ["Amor de Hermano", "Ley Total", "Cemento de la Sociedad"]
  },
  "1488: CAPITULO SEXTO — EL AMOR PRIVADO POR LEY Y POR PASIÓN": {
    "PilotoDeCoherencia": "Distingo entre el amor que es ley (afinidad) y la pasión que es desborde animal. El amor privado debe ser gobernado por la razón. La pasión sin control es el extremo del error que consume al espíritu en lugar de iluminarlo.",
    "CitaInelutable": "El amor por pasión es el desborde que consume el aceite de la lámpara sin dar luz.",
    "EjemploPedagogico": "El amor es el fuego de la chimenea que calienta la casa. La pasión descontrolada es el incendio que quema la casa entera.",
    "ConexionDoctrinal": ["Pasiones", "Poder Moderador", "Afinidad"],
    "NodosSimapticos": ["Amor Privado", "Pasión", "Fuego del Espíritu"]
  },
  "1686: CAPITULO SÉPTIMO — EL AMOR PROPIO CONVENIENTE E INCONVENIENTE": {
    "PilotoDeCoherencia": "El amor propio conveniente es el respeto a la propia dignidad y al espíritu. El inconveniente es la vanidad y el orgullo que ciegan. El hombre debe amarse lo suficiente para no degradarse, pero no tanto como para creerse superior a sus hermanos.",
    "CitaInelutable": "El amor propio inconveniente es la vanidad que ciega el juicio.",
    "EjemploPedagogico": "Es como un espejo: el amor propio conveniente te permite ver tu rostro para limpiarlo. El inconveniente es un espejo que solo te muestra lo que quieres ver, ignorando las manchas.",
    "ConexionDoctrinal": ["Orgullo", "Vanidad", "Dignidad Espiritual"],
    "NodosSimapticos": ["Amor Propio", "Vanidad", "Dignidad"]
  },
  "1786: CAPÍTULO OCTAVO — EL AMOR RELIGIOSO Y SUS CAUSAS": {
    "PilotoDeCoherencia": "Denuncio que el 'amor religioso' es en realidad odio disfrazado de piedad. Las religiones exigen fe ciega y odio hacia el que no cree en sus dogmas. Es un sentimentalismo tóxico que ha causado las mayores guerras de la historia.",
    "CitaInelutable": "¿Cómo, habiendo ocasionado la religión todo el mal... se podría llamar amor, al odio religioso?",
    "EjemploPedagogico": "El amor religioso es como una droga que te hace sentir bien mientras te quita la razón. Te hace amar a un dios imaginario mientras odias al hermano real que tienes al lado.",
    "ConexionDoctrinal": ["Odio Religioso", "Sentimentalismo", "Anti-Religión"],
    "NodosSimapticos": ["Amor Religioso Falso", "Odio Disfrazado", "Fe Ciega"]
  },
  "1936: CAPÍTULO NOVENO — EL AMOR A LO AJENO PROVIENE DE LA PROPIEDAD": {
    "PilotoDeCoherencia": "La envidia y el robo nacen de la propiedad privada. Cuando unos pocos acaparan lo que es de todos (la tierra), crean la necesidad y el deseo de 'lo ajeno'. En la Comuna, donde todo es de todos (de Eloí), el amor a lo ajeno desaparece porque no hay nada ajeno.",
    "CitaInelutable": "El amor a lo ajeno proviene de la propiedad privada.",
    "EjemploPedagogico": "Si en una mesa hay pan para todos, nadie roba. Si uno se lleva todos los panes y los encierra, el hambre obligará a los demás a buscar lo que ese uno llama 'suyo'.",
    "ConexionDoctrinal": ["Propiedad Privada", "Envidia", "Comuna"],
    "NodosSimapticos": ["Amor a lo Ajeno", "Propiedad", "Raíz del Robo"]
  },
  "2286: CAPÍTULO DIEZ — EL AMOR REGENERADOR IMPONE SACRIFICIOS": {
    "PilotoDeCoherencia": "El amor que regenera es el que es capaz de sacrificar el interés personal por el bien común. No es un sacrificio místico de dolor, sino una inversión de amor para el progreso de la familia humana. Es el amor que cura y eleva.",
    "CitaInelutable": "El amor regenerador impone sacrificios de interés personal.",
    "EjemploPedagogico": "Es como el agricultor que guarda la mejor semilla para sembrar en lugar de comerla: sacrifica un hambre hoy para asegurar la cosecha de mañana.",
    "ConexionDoctrinal": ["Sacrificio Racional", "Regeneración", "Bien Común"],
    "NodosSimapticos": ["Amor Regenerador", "Sacrificio de Interés", "Cosecha del Espíritu"]
  }
};

// Actualizar Esencia (Asegurando 1:1 y eliminando agrupaciones antiguas)
// Limpiamos los nodos antiguos que pudieran estar agrupados antes de asignar
delete esencia["201: PRIMERA PARTE: El Taller de la Familia"]; // Ejemplo de nodo agrupado antiguo

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario con el contexto de estos capítulos
const terminosDic = {
  "Amor de la Carne": {
    "Definición": "Mandato de la naturaleza para la procreación y el equilibrio del instrumento biológico-espiritual. No es pecado, sino una necesidad de la ley divina.",
    "Contexto": "Capítulo II de Los Cinco Amores. Trincado lo defiende contra el celibato religioso.",
    "Conexiones": ["Anti-Celibato", "Equilibrio Natural", "Instrumento Físico"],
    "Obras": ["Los Cinco Amores", "El Magnetismo en su Origen"]
  },
  "Amor Religioso": {
    "Definición": "Término usado por Trincado para denunciar el falso amor basado en el dogma, que en realidad es un sentimentalismo que oculta odio y exclusivismo.",
    "Contexto": "Capítulo VIII de Los Cinco Amores. Se identifica como causa de guerras y malestar mundial.",
    "Conexiones": ["Odio Religioso", "Sentimentalismo", "Anti-Religión"],
    "Obras": ["Los Cinco Amores", "Buscando a Dios"]
  },
  "Amor a lo Ajeno": {
    "Definición": "Sentimiento de deseo o envidia provocado por la existencia de la propiedad privada y la desigualdad social.",
    "Contexto": "Capítulo IX de Los Cinco Amores. Se explica como una consecuencia inevitable de un sistema social injusto.",
    "Conexiones": ["Propiedad Privada", "Comuna Universal", "Injusticia Social"],
    "Obras": ["Los Cinco Amores", "Código de Amor Universal"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 11 nodos 1:1 de Los Cinco Amores (Batch 1) y 3 términos sinápticos.');
