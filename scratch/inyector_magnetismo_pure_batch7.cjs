const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/el-magnetismo-en-su-origen_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - El Magnetismo en su Origen (Batch 7 - Claves 62 a 71)
const nuevosNodos = {
  "2629: INICIACIÓN": {
    "PilotoDeCoherencia": "Cierre operativo del Método Supremo. Trincado confía en que la sola lectura de la obra ha resquebrajado la 'cáscara' del alma del estudiante, permitiéndole empezar su desarrollo en un nivel de sabiduría superior al de los graduados de otras escuelas.",
    "CitaInelutable": "Es seguro que sólo la lectura os ha resquebrajado la cáscara de vuestra alma y sabréis empezar, por donde acaban los discípulos de otras escuelas.",
    "EjemploPedagogico": "El libro actúa como un cascanueces magnético. Al romper la ignorancia (cáscara), el estudiante no empieza de cero; empieza desde la cumbre racional donde otras escuelas se quedan atascadas.",
    "ConexionDoctrinal": ["Rotura de la Ignorancia", "El Libro como Cascanueces", "Nivel Superior de Inicio"],
    "NodosSimapticos": ["Cáscara del Alma"]
  },
  "2672: MÁXIMA: Por el fruto conocerás el árbol.": {
    "PilotoDeCoherencia": "Sello de calidad moral. La Escuela no se defiende con palabras vacías, sino exigiendo que sus estudiantes demuestren la pureza del Método a través de las curaciones éticas y desinteresadas (los frutos).",
    "CitaInelutable": "MÁXIMA: Por el fruto conocerás el árbol.",
    "EjemploPedagogico": "No me digas que eres un maestro magnético; muéstrame a los pacientes que has curado sin cobrarles y sin esclavizarlos, y sabré de qué árbol vienes.",
    "ConexionDoctrinal": ["Evidencia de las Obras", "Máxima Doctrinal"],
    "NodosSimapticos": []
  },
  "2676: CONSEJO: Busca el consuelo en la verdad": {
    "PilotoDeCoherencia": "Pilar de resiliencia operatoria. El magnetizador enfrentará incomprensión y fatiga. Su consuelo no debe buscarse en el aplauso o en la ilusión, sino en la cruda, absoluta e invencible Verdad científica.",
    "CitaInelutable": "CONSEJO: Busca el consuelo en la verdad.",
    "EjemploPedagogico": "Cuando el mundo te llame loco por curar con fluidos, no llores pidiendo fe; apóyate en el axioma de que la gravedad funciona aunque el ciego la niegue.",
    "ConexionDoctrinal": ["Consuelo Racional", "Consejo Doctrinal"],
    "NodosSimapticos": []
  },
  "2680: MANDATOS: Conócete a tí mismo.": {
    "PilotoDeCoherencia": "La síntesis final de la obligación trincadista. Dos reglas de oro inquebrantables que sostienen toda la estructura del universo moral: Sabiduría (conocimiento propio) y Solidaridad (amor al prójimo).",
    "CitaInelutable": "MANDATOS: Conócete a tí mismo. Ama a tu hermano.",
    "EjemploPedagogico": "Es la brújula y el ancla. Si te conoces, no te engrandeces; si amas a tu hermano, no lo oprimes con tu fuerza magnética.",
    "ConexionDoctrinal": ["Mandatos Supremos", "Equilibrio Ético"],
    "NodosSimapticos": []
  },
  "2686: AXIOMA: En él estaba la Vida y la Vida es la luz de los hombres.": {
    "PilotoDeCoherencia": "Cierre oficial del Método Supremo como manual. La Vida (el Espíritu y su fuerza magnética) es declarada la luz intrínseca y material que ilumina a la humanidad. Firma el autor garantizando la autoridad doctrinal.",
    "CitaInelutable": "AXIOMA: En él estaba la Vida y la Vida es la luz de los hombres. JOAQUÍN TRINCADO. FIN DEL 'MÉTODO SUPREMO'.",
    "EjemploPedagogico": "La vida no es un soplo mágico; es energía radiante (luz) que reside en el interior del hombre, lista para ser encendida por la razón.",
    "ConexionDoctrinal": ["La Vida como Luz", "Axioma Final"],
    "NodosSimapticos": []
  },
  "2694: ESLABÓN": {
    "PilotoDeCoherencia": "El puente inevitable. Terminado el manual práctico, Trincado introduce el 'Eslabón' para probar que dejar el Magnetismo aislado es castrarlo. Es necesario engarzar el Método práctico al 'tronco y raíz' que es el Espiritismo científico.",
    "CitaInelutable": "Sería incompleto este Método... si no os dijera algo que pruebe que el Espiritismo es todo en el Universo y por lo tanto, tronco y raíz del magnetismo, el que no ha sido comprendido, porque se le quiso separar.",
    "EjemploPedagogico": "El Método Supremo enseñó a conducir el coche (Magnetismo). El Eslabón te enseña ahora cómo funciona el motor del universo que mueve a ese coche (Espiritismo).",
    "ConexionDoctrinal": ["El Eslabón Doctrinal", "Indivisibilidad Causa-Efecto", "Espiritismo y Magnetismo"],
    "NodosSimapticos": ["Puente Científico"]
  },
  "2729: LO QUE ABARCA EL ESPIRITISMO": {
    "PilotoDeCoherencia": "Definición cósmica absoluta. El Espiritismo es 'todo'. Abarca toda existencia. Si los hombres ya se conocieran, el libro podría cerrarse; pero como la humanidad está ignorante de esta ley inexorable, Trincado debe revelarlo de forma dosificada y razonada.",
    "CitaInelutable": "He dicho 'el espiritismo es en fin todo' y si todos los hombres se conocieran a sí mismos, ya habría que firmar y cerrar el libro: a eso llegarán todos los hombres en el tiempo, quieran que no quieran.",
    "EjemploPedagogico": "El Espiritismo no es sentarse a ver fantasmas; es la gravedad, el sol, las estrellas, la sociedad y el gobierno. Es la totalidad del Cosmos funcionando bajo una sola ley.",
    "ConexionDoctrinal": ["El Todo Espiritual", "Ley Inexorable", "Definición Totalizadora"],
    "NodosSimapticos": ["El Todo Cósmico", "Fin del Misterio"]
  },
  "2820: estad convencidos de mis afirmaciones.": {
    "PilotoDeCoherencia": "Declaración de autoridad del Juez. Trincado aclara que no viene a discutir con los científicos ni a suplicarles creencia; viene a 'señalar jalones' y rasgar el crepúsculo. Afirma categóricamente 'así veo yo la verdad' exigiendo estudio y no fe ciega.",
    "CitaInelutable": "No he de hacerla en todos los casos, porque yo vengo a señalar jalones, a rasgar el crepúsculo del espíritu... las podría evitar con una sola palabra... diciendo: 'así veo yo la verdad'.",
    "EjemploPedagogico": "Un agrimensor no discute con el terreno; clava las estacas (jalones) para marcar los límites de la propiedad. Trincado clava las estacas de la Verdad para que el mundo mida sobre ellas.",
    "ConexionDoctrinal": ["Autoridad Magisterial", "Los Jalones de la Verdad", "Certeza Doctrinal"],
    "NodosSimapticos": ["Estacas de la Verdad", "Jalones Espirituales"]
  },
  "2872: COMO ES NECIO NEGAR EL ESPIRITISMO": {
    "PilotoDeCoherencia": "La sentencia lógica. Negar la Verdad no destruye la Verdad. Los que niegan el Espiritismo por ignorancia son necios que terminan tropezando con la pared de la realidad magnética que ellos mismos emiten al hablar.",
    "CitaInelutable": "Negando y afirmando, la verdad, no deja de ser; pero el que niega la verdad, más tarde o más temprano descubre ésta y ve que fué necio, en negar lo que no comprendía.",
    "EjemploPedagogico": "Negar el espiritismo es como cerrar los ojos y decir que el sol no existe. Te quemarás la piel igual, pero además tropezarás en la oscuridad.",
    "ConexionDoctrinal": ["Necedad Científica", "La Verdad Inmutable", "Negación Absurda"],
    "NodosSimapticos": ["Ceguera Voluntaria"]
  },
  "2986: APÉNDICE CIENTÍFICO FILOSÓFICO: DEL EL MAGNETISMO EN SU ORIGEN": {
    "PilotoDeCoherencia": "Apertura de la sección terminal y más densa de la obra, donde se exponen las leyes atómicas, el éter y la anatomía física para anclar el Método Supremo en una base material irrebatible.",
    "CitaInelutable": "APÉNDICE CIENTÍFICO FILOSÓFICO DEL EL MAGNETISMO EN SU ORIGEN",
    "EjemploPedagogico": "Habiendo enseñado a usar el barco (método práctico), el Maestro procede a entregar los planos matemáticos del astillero (apéndice).",
    "ConexionDoctrinal": ["Fundamento Filosófico-Científico", "Estructura del Libro"],
    "NodosSimapticos": ["Planos del Astillero"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "La Cáscara del Alma": {
    "Definición": "Metáfora trincadista que describe el estado de ignorancia petrificada o dogmática que envuelve al espíritu humano. La lectura de la Verdad sin atenuantes resquebraja esta envoltura, permitiendo la iniciación magnética.",
    "Contexto": "Iniciación de la Segunda Parte de El Magnetismo en su Origen.",
    "Conexiones": ["Ignorancia Dogmática", "Iniciación Racional"],
    "Obras": ["El Magnetismo en su Origen"]
  },
  "Jalones de la Verdad": {
    "Definición": "Acción directa y austera del Maestro Trincado. Se refiere a establecer principios absolutos ('estacas' en el camino del progreso) sin ánimo de discutir con los detractores, sino marcando la ruta ineludible que la ciencia y la humanidad terminarán por aceptar.",
    "Contexto": "Explicación en la sección 'Eslabón' de El Magnetismo en su Origen.",
    "Conexiones": ["Autoridad Doctrinal", "Axiomas Absolutos"],
    "Obras": ["El Magnetismo en su Origen"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos PURA CALIDAD 1:1 de El Magnetismo en su Origen (Batch 7) y 2 términos sinápticos.');
