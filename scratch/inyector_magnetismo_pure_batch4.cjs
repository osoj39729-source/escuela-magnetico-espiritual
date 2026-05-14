const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/el-magnetismo-en-su-origen_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - El Magnetismo en su Origen (Batch 4 - Claves 33 a 42)
const nuevosNodos = {
  "1304: condiciones necesarias para conseguirlo.": {
    "PilotoDeCoherencia": "Rechazo de la dominación violenta. La primera condición para conseguir resultados es la 'Voluntad razonada'. Trincado repudia la terquedad petulante de otros métodos que imponen una voluntad invencible y dictatorial sobre el paciente, calificándolo como una locura que causa grandes desastres mentales.",
    "CitaInelutable": "No quiero que los discípulos del 'Método Supremo' caigan en la terquedad petulante que se estampa en cualquier Método donde les imponen una voluntad invencible, que es la mayor de las locuras.",
    "EjemploPedagogico": "El magnetizador no es un domador de leones con un látigo (voluntad invencible); es un guía experto que convence al sujeto con Razón, sin violentar su psiquis.",
    "ConexionDoctrinal": ["Voluntad Razonada", "Rechazo del Dominio Violento", "Respeto Psíquico"],
    "NodosSimapticos": ["Falsa Voluntad Invencible"]
  },
  "1400: LECCIÓN OCTAVA: LA RAZÓN DE LA DOMINACIÓN": {
    "PilotoDeCoherencia": "Aclaración sobre la estadística magnética. Trincado refuta la idea de que solo algunos pocos son refractarios al magnetismo. Explica que la dificultad de dominar a ciertos sujetos (el 5%) no se debe a que no tengan magnetismo, sino a una falta de afinidad con el operador o a un bloqueo de los prejuicios.",
    "CitaInelutable": "Rebato una teoría funesta... de que todos los individuos son magnetizables fácilmente el 95%; difíciles 3%; y dos refractarios... pone en un cuarto oscuro a los discípulos.",
    "EjemploPedagogico": "Nadie es inmune a la gravedad, pero un globo de helio parece desafiarla porque su afinidad es distinta. Todos son magnetizables si encuentras la llave vibratoria correcta.",
    "ConexionDoctrinal": ["Falso Concepto de Refractario", "Afinidad Universal"],
    "NodosSimapticos": ["Falsa Resistencia Magnética"]
  },
  "1493: LECCIÓN NOVENA: I EFECTOS DEL MAGNETISMO": {
    "PilotoDeCoherencia": "Axioma filosófico sobre el fin del magnetismo. El efecto real no es solo curar el cuerpo, sino la regeneración moral de los hombres y el adelanto de los rezagados hacia la verdad suprema. Como esa verdad pertenece a la Vida, y la Vida es del Espíritu, el verdadero efecto es conducir al Espiritismo Puro.",
    "CitaInelutable": "Los efectos del Magnetismo son; la regeneración de los hombres... pero la suprema verdad es, la Vida. Mas la vida es sólo del Espíritu y por lo tanto, esta verdad suprema es, El Espiritismo.",
    "EjemploPedagogico": "El magnetismo es el tren; el Espiritismo es la estación de destino. Curar un dolor de cabeza es solo el billete; el viaje es regenerar el alma del paciente.",
    "ConexionDoctrinal": ["Regeneración Moral", "Tránsito al Espiritismo"],
    "NodosSimapticos": ["Destino Espiritual"]
  },
  "1593: POTENCIA Y OBEDIENCIA DE LOS ESPÍRITUS NATURALES": {
    "PilotoDeCoherencia": "Confirmación del pampsiquismo trincadista. Trincado declara que pensar que la tierra o la naturaleza son insensibles es un error grave. Todo átomo y corpúsculo tiene vida propia ('espíritus naturales') y obedecen dócilmente a la voluntad del hombre que sabe mandarlos por medio del magnetismo.",
    "CitaInelutable": "Si pensáseis que la naturaleza es tierra insensible, estáis en el error más grave... Todo átomo y más bajo el átomo, el corpúsculo tiene vida propia.",
    "EjemploPedagogico": "La silla donde te sientas no es materia muerta; es una colmena de billones de átomos vivos (espíritus naturales) sostenidos por afinidad, que obedecen ciegamente a la ley magnética.",
    "ConexionDoctrinal": ["Espíritus Naturales", "Vida del Átomo", "Obediencia de la Materia"],
    "NodosSimapticos": ["Materia Viva", "Pampsiquismo Magnético"]
  },
  "1745: PARTE SEGUNDA: MODUS OPERANDI DEL MÉTODO SUPREMO": {
    "PilotoDeCoherencia": "Transición de la teoría a la práctica estricta de la Escuela Magnética. Se abre el manual de operaciones mecánicas e instrucciones para el desarrollista.",
    "CitaInelutable": "PARTE SEGUNDA: MODUS OPERANDI DEL MÉTODO SUPREMO",
    "EjemploPedagogico": "Terminada la clase teórica sobre cómo funciona el motor universal, el Maestro abre la caja de herramientas y nos enseña a usar la llave inglesa del Éter.",
    "ConexionDoctrinal": ["Práctica Magnética", "Mecánica Operativa"],
    "NodosSimapticos": ["Modus Operandi"]
  },
  "1749: REGLA GENERAL Y ÚNICA": {
    "PilotoDeCoherencia": "La regla de oro del desarrollista. Trincado advierte sobre lo escarpado del camino práctico. El operador debe medir sus fuerzas y usar la Razón como 'alcayata' (anclaje). Si el discípulo resbala por no seguir el Método, la caída y sus consecuencias son bajo su propia responsabilidad.",
    "CitaInelutable": "Mide bien tus pasos, pulsa bien tus fuerzas, asegura bien tu alcayata, la Razón y no dejes el camino inequívoco... Si resbalas, si tropiezas, todo será por tu cuenta.",
    "EjemploPedagogico": "Magnetizar es como escalar el Everest de la psiquis. El Método Supremo es el arnés, y la Razón es el ancla. Si te sueltas del ancla para lucirte, la caída es segura.",
    "ConexionDoctrinal": ["Responsabilidad del Operador", "La Razón como Ancla"],
    "NodosSimapticos": ["Alcayata Racional", "Caída Responsable"]
  },
  "1771: LECCIÓN PRIMERA (PARTE SEGUNDA: MODUS OPERANDI DEL MÉTODO SUPREMO)": {
    "PilotoDeCoherencia": "La preparación del entorno físico. Instrucciones técnicas: las sillas, la luz incidiendo en la espalda del operador (o luz cenital suave) y el paciente sentado frente a frente para propiciar el recogimiento necesario antes del contacto.",
    "CitaInelutable": "Colocar dos sillas, cuidando que la luz te dé a ti en la espalda (salvo que dispongas de una habitación con luz cenital suave y agradable que incite al recogimiento).",
    "EjemploPedagogico": "El quirófano magnético debe estar limpio de distracciones. La luz cenital suave no es misticismo, es simple biología ocular para no alterar los nervios del paciente.",
    "ConexionDoctrinal": ["Entorno Operativo", "Luz y Recogimiento"],
    "NodosSimapticos": ["Quirófano Magnético", "Luz Cenital"]
  },
  "1796: LECCIÓN SEGUNDA (PARTE SEGUNDA: MODUS OPERANDI DEL MÉTODO SUPREMO)": {
    "PilotoDeCoherencia": "El acto de enganche fluídico. Toma suave de las manos, orden de mirar fijamente mientras el operador mira al entrecejo (arranque de la nariz). El llamado mental a las fuerzas cosmogónicas que fluyen por ojos, rodillas y manos hacia el paciente.",
    "CitaInelutable": "Tomas las manos por la palma... ordenándole mirarte, fijamente a los ojos, mientras que tú, miras al arranque de la nariz, llamando en ese momento las fuerzas de la cosmogonía.",
    "EjemploPedagogico": "Es el momento de enchufar los cables. Mirar a la nariz evita la fatiga visual del operador y sirve como un embudo psíquico para canalizar la fuerza cosmogónica hacia la frente del paciente.",
    "ConexionDoctrinal": ["Técnica de Enganche", "Mirada al Entrecejo", "Flujo Cosmogónico"],
    "NodosSimapticos": ["Embudo Psíquico", "Enganche Fluídico"]
  },
  "1841: LECCIÓN TERCERA.: GRADOS ASCENSIONALES DEL DESARROLLO": {
    "PilotoDeCoherencia": "Instrucción sobre la progresión del discípulo. La parte mecánica para llevar al sujeto a través de la escalera del trance con seguridad, evitando que el paciente caiga en bloqueos o fatiga fluídica.",
    "CitaInelutable": "Aquí sólo tengo que indicar la parte mecánica para dirigir con seguridades al discípulo, en el triunfo de sus trabajos.",
    "EjemploPedagogico": "No pasas de 1ra a 5ta marcha de golpe en un coche. La parte mecánica te enseña a meter el embrague astral suavemente.",
    "ConexionDoctrinal": ["Ascenso Mecánico", "Seguridad del Paciente"],
    "NodosSimapticos": ["Marcha Magnética"]
  },
  "1856: GRADO TERCERO.: SUEÑO TELEPÁTICO": {
    "PilotoDeCoherencia": "En el tercer grado, el operador debe intensificar su potencia con sumo cuidado. Trincado prohíbe el uso de 'formulismos empíricos' (rituales ciegos), exigiendo que el magnetizador evalúe conscientemente las aptitudes de su sujeto como si lo graduara de Bachiller, listo para su misión espiritual.",
    "CitaInelutable": "En este grado es donde has de intensificar tu potencia... estás dando el grado de Bachiller a tu educando... No debes tener formulismos empíricos, pues éstos son insuficientes.",
    "EjemploPedagogico": "Llegar a este grado es como graduarse de preparatoria; el sujeto ya está listo para salir a las estrellas (telepatía), y el maestro no puede usar recetas mágicas, debe usar pura concentración y razón.",
    "ConexionDoctrinal": ["Telepatía Inicial", "Rechazo al Empirismo", "Graduación del Médium"],
    "NodosSimapticos": ["Bachiller Magnético", "Rechazo de Rituales"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Materia Viva (Pampsiquismo)": {
    "Definición": "Axioma cosmológico trincadista que establece que no existe la 'materia muerta'. Todo átomo y corpúsculo, hasta el polvo y la madera, poseen una forma de vida elemental (espíritus naturales) que obedece magnéticamente a la voluntad del hombre.",
    "Contexto": "Lección Novena de El Magnetismo en su Origen.",
    "Conexiones": ["Espíritus Naturales", "Materia Físico-Espiritual", "Obediencia Magnética"],
    "Obras": ["El Magnetismo en su Origen", "Conócete a ti mismo"]
  },
  "Alcayata Racional": {
    "Definición": "Metáfora usada en el Modus Operandi del magnetismo. Se refiere a la Razón y al sentido ético que el operador debe clavar firmemente en su mente antes de iniciar el trance, para evitar despeñarse por la fascinación o el mal uso de la fuerza.",
    "Contexto": "Regla General de la Segunda Parte de El Magnetismo en su Origen.",
    "Conexiones": ["Precaución Magnética", "Responsabilidad del Operador", "La Razón"],
    "Obras": ["El Magnetismo en su Origen"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos PURA CALIDAD 1:1 de El Magnetismo en su Origen (Batch 4) y 2 términos sinápticos.');
