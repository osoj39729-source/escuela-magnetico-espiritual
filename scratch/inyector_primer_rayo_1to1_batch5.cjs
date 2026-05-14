const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/primer-rayo-de-luz_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Primer Rayo de Luz (Batch 5 - Final)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "11595: SYLLABUS PÁRRAFO II: RACIONALISMO MODERADO": {
    "PilotoDeCoherencia": "La Iglesia intenta 'moderar' la razón sometiéndola al dogma. Nosotros decimos: la razón es absoluta o no es razón. No hay verdades que la razón no pueda investigar. El 'misterio' es solo el nombre que la ignorancia pone a lo que aún no estudia. Todo es explicable bajo la ley de Eloí.",
    "CitaInelutable": "La razón es el único juez de lo verdadero y de lo falso.",
    "EjemploPedagogico": "Es como un profesor que le dice al alumno: 'puedes pensar todo lo que quieras, siempre que al final digas que yo tengo razón'. Eso no es pensar, es repetir. La Escuela enseña a pensar hasta las últimas consecuencias.",
    "ConexionDoctrinal": ["Racionalismo", "Libertad de Estudio", "Misterio"],
    "NodosSimapticos": ["Pensar sin Permiso", "Misterio Explicado", "Juez de lo Verdadero"]
  },
  "11610: SYLLABUS PÁRRAFO III: INDIFERENTISMO": {
    "PilotoDeCoherencia": "El Papa excomulga la libertad de elegir religión según la razón. Nosotros proclamamos que el hombre es libre por derecho de nacimiento espiritual. La 'indiferencia' ante el dogma es salud mental. No hay una religión 'verdadera' por decreto, sino una Verdad única que cada espíritu encuentra en su progreso.",
    "CitaInelutable": "La libertad de conciencia es el derecho sagrado del espíritu.",
    "EjemploPedagogico": "Es como un menú de restaurante donde el dueño te obliga a comer el plato del día bajo amenaza de muerte. Nosotros decimos que cada comensal tiene derecho a elegir lo que mejor alimente su alma. La libertad es el mejor condimento.",
    "ConexionDoctrinal": ["Indiferentismo Racional", "Libertad de Elección", "Derecho de Nacimiento"],
    "NodosSimapticos": ["Menú de Conciencia", "Plato del Dogma", "Salud Mental"]
  },
  "11620: SYLLABUS PÁRRAFO IV: SOCIALISMO Y COMUNISMO": {
    "PilotoDeCoherencia": "La Iglesia llama 'pestes' al Socialismo y al Comunismo porque teme la igualdad de los hombres. Nosotros defendemos la Comuna Universal como la ley de amor hecha práctica. Quien condena la fraternidad social está condenando el mandato de Eloí. La religión es la verdadera peste que divide a los hermanos.",
    "CitaInelutable": "La Comuna es la justicia de Dios en la tierra; la religión es la injusticia del hombre en el cielo.",
    "EjemploPedagogico": "Es como un hermano mayor que se queda con todos los juguetes y llama 'enfermo' al hermano pequeño que pide jugar también. El cura es el hermano egoísta; la Comuna es el juego compartido.",
    "ConexionDoctrinal": ["Comuna Universal", "Justicia Social", "Anti-Religión"],
    "NodosSimapticos": ["Juguetes del Mundo", "Hermandad de Bienes", "Peste Religiosa"]
  },
  "11630: SYLLABUS PÁRRAFO V: DERECHOS DE LA IGLESIA": {
    "PilotoDeCoherencia": "La Iglesia se proclama 'sociedad perfecta' con leyes propias sobre el Estado. Nosotros decimos que no hay más sociedad perfecta que la humanidad unida sin castas sacerdotales. La Iglesia es un quiste en el cuerpo social que debe ser extirpado por la cirugía de la razón. Nadie está por encima de la ley común.",
    "CitaInelutable": "La Iglesia no tiene derechos; tiene solo responsabilidades por sus crímenes.",
    "EjemploPedagogico": "Es como una asociación de vecinos que pretende tener sus propias leyes, cárcel y policía dentro de un país, ignorando al gobierno de todos. Tal asociación es una amenaza a la paz. La Iglesia es esa amenaza.",
    "ConexionDoctrinal": ["Soberanía Humana", "Quiste Social", "Igualdad ante la Ley"],
    "NodosSimapticos": ["Cirugía de Razón", "Cuerpo Social", "Asociación de Engaño"]
  },
  "11667: SYLLABUS PÁRRAFO VI: SOCIEDAD CIVIL": {
    "PilotoDeCoherencia": "El Papa niega al Estado el derecho a educar sin la supervisión del cura. Nosotros exigimos la educación laica y racionalista. El niño pertenece a la humanidad, no a la secta. El Estado debe ser el protector del progreso, no el monaguillo de la sacristía.",
    "CitaInelutable": "La educación es de la razón y para la libertad; nunca de la fe para la esclavitud.",
    "EjemploPedagogico": "Es como si una escuela de música necesitara que un sordo aprobara las partituras. El cura es sordo a la razón; no puede dirigir la orquesta del conocimiento humano.",
    "ConexionDoctrinal": ["Educación Laica", "Estado y Razón", "Progreso Social"],
    "NodosSimapticos": ["Orquesta del Saber", "Monaguillo del Estado", "Niño Libre"]
  },
  "11715: SYLLABUS PÁRRAFO VIII: MORAL Y SANCIÓN DIVINA": {
    "PilotoDeCoherencia": "La Iglesia afirma que la moral no existe sin su sanción divina. Nosotros decimos: la moral es el cumplimiento de la ley natural de amor. No robamos porque amamos al hermano, no porque temamos al infierno. La moral religiosa es miedo; la moral trincadista es conciencia.",
    "CitaInelutable": "La moral es ley de conciencia, no mandato de miedo.",
    "EjemploPedagogico": "Es la diferencia entre el que no roba porque el policía lo está mirando y el que no roba porque entiende que el objeto no es suyo y respeta al dueño. Nosotros somos los que respetamos sin necesidad de policía divino.",
    "ConexionDoctrinal": ["Moral de Conciencia", "Ley Natural", "Miedo vs Amor"],
    "NodosSimapticos": ["Policía Divino", "Respeto por Amor", "Sanción de la Razón"]
  },
  "11739: SYLLABUS PÁRRAFO IX: MATRIMONIO CIVIL": {
    "PilotoDeCoherencia": "La Iglesia condena el matrimonio civil y exige el sacramento. Nosotros decimos que el matrimonio es un contrato de amor y responsabilidad ante la sociedad. El 'sacramento' es una cadena para esclavizar a la mujer y controlar la procreación. El amor no necesita bendición de quien no sabe amar.",
    "CitaInelutable": "El matrimonio es la unión de dos voluntades libres bajo la ley de la responsabilidad.",
    "EjemploPedagogico": "Es como dos personas que deciden caminar juntas por un bosque. El cura quiere cobrarles peaje por caminar y ponerles una soga al cuello para que no se separen si el camino se pone difícil. Nosotros quitamos la soga y el peaje.",
    "ConexionDoctrinal": ["Matrimonio Civil", "Responsabilidad", "Libre Voluntad"],
    "NodosSimapticos": ["Soga al Cuello", "Peaje del Amor", "Unión Libre"]
  },
  "11764: SYLLABUS PÁRRAFO X: PODER TEMPORAL DEL PAPA": {
    "PilotoDeCoherencia": "El Papa defiende su trono material como necesario para su misión espiritual. Nosotros decimos que el espíritu no necesita tronos de oro ni ejércitos. El poder temporal del Papa es la prueba de su ambición mundana. El verdadero maestro sirve; el Papa quiere ser servido. Su reino sí es de este mundo.",
    "CitaInelutable": "El trono del Papa es la tumba de la humildad espiritual.",
    "EjemploPedagogico": "Es como un médico que dice que para curar a los enfermos necesita vivir en un palacio, tener esclavos y que todos le besen el pie. El médico que quiere curar va a la cama del enfermo con sencillez. El Papa es un médico falso.",
    "ConexionDoctrinal": ["Poder Temporal", "Ambición Mundana", "Humildad"],
    "NodosSimapticos": ["Trono de Oro", "Médico de Palacios", "Beso al Pie"]
  },
  "12060: EL ÚLTIMO RAYO DE LUZ": {
    "PilotoDeCoherencia": "Cerramos esta obra con la sentencia final del Plebiscito Universal. El veredicto es claro: la religión ha muerto por su propia mano. El 'Primer Rayo de Luz' se convierte en el sol eterno de la Comuna. ¡Siempre más allá! La humanidad ha despertado.",
    "CitaInelutable": "La sentencia está dictada: Luz para los hombres, sombra para los ídolos.",
    "EjemploPedagogico": "Es el amanecer después de una noche de tormenta. Los monstruos de la oscuridad se disuelven con el sol. El caminante mira el horizonte y ve, por fin, el camino libre hacia su destino de gloria.",
    "ConexionDoctrinal": ["Sentencia Final", "Amanecer del Espíritu", "Siempre Más Allá"],
    "NodosSimapticos": ["Sol de la Comuna", "Fin de la Tormenta", "Destino de Gloria"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Indiferentismo Racional": {
    "Definición": "Estado de libertad espiritual donde el individuo se desvincula de los dogmas religiosos para buscar la verdad únicamente a través de la razón y el estudio de las leyes naturales.",
    "Contexto": "Defensa contra el Syllabus en Primer Rayo de Luz.",
    "Conexiones": ["Libertad de Conciencia", "Desmitificación", "Razón"],
    "Obras": ["Primer Rayo de Luz"]
  },
  "Matrimonio Civil": {
    "Definición": "Institución social que la Escuela defiende como el único vínculo legal válido para la familia humana, rechazando la necesidad de sacramentos religiosos para validar el amor y la responsabilidad mutua.",
    "Contexto": "Capítulo sobre el matrimonio en Primer Rayo de Luz.",
    "Conexiones": ["Hogar Racional", "Responsabilidad", "Ley Civil"],
    "Obras": ["Primer Rayo de Luz", "Filosofía Austera Racional"]
  },
  "Poder Temporal": {
    "Definición": "La ambición de las jerarquías religiosas por controlar territorios, gobiernos y riquezas materiales, denunciada por Trincado como la antítesis de la misión espiritual.",
    "Conexiones": ["Ambición", "Syllabus", "Iglesia-Estado"],
    "Obras": ["Primer Rayo de Luz", "Los Extremos se Tocan"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 9 nodos 1:1 de Primer Rayo de Luz (Batch 5 - Final) y 3 términos sinápticos.');
