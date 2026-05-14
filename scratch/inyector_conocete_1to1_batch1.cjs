const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Conócete a ti mismo (Batch 1 - Rellenando Gaps)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "5: CONÓCETE A TI MISMO (PORTADA Y LEMA)": {
    "PilotoDeCoherencia": "Lanzamos el grito definitivo: ¡Conócete a ti mismo! Esta obra es la brújula para que el espíritu encuentre su norte tras siglos de naufragio religioso. 'Siempre más allá' no es solo un lema, es la ley del progreso infinito que nos obliga a no detenernos jamás en la búsqueda de la Verdad.",
    "CitaInelutable": "Siempre más allá. Conócete a ti mismo.",
    "EjemploPedagogico": "Es como un hombre que ha vivido toda su vida en una habitación de espejos que deforman su imagen. Este libro rompe los espejos y le muestra su verdadero rostro. El rostro del espíritu es la luz de Eloí.",
    "ConexionDoctrinal": ["Identidad Espiritual", "Progreso Infinito", "Lema"],
    "NodosSimapticos": ["Brújula del Ser", "Espejos Deformantes", "Grito de Libertad"]
  },
  "577: CONSEJOS PARA EL ESTUDIANTE": {
    "PilotoDeCoherencia": "Reiteramos que el estudio es la única vía hacia la fe viva. El que no estudia es un ciego que sigue a otros ciegos. Exigimos rigor, silencio y respeto al Maestro interno. La Escuela no regala sabiduría; la sabiduría es el salario del trabajador del espíritu.",
    "CitaInelutable": "No queremos fe ciega, sino estudio y convencimiento.",
    "EjemploPedagogico": "Es como aprender un oficio: no serás carpintero solo por mirar las herramientas. Debes tomarlas, sudar y echar a perder madera hasta que sepas hacer una silla. La silla es tu propia conciencia bien armada.",
    "ConexionDoctrinal": ["Estudio", "Fe Viva", "Esfuerzo"],
    "NodosSimapticos": ["Carpintero del Alma", "Salario de Sabiduría", "Riguroso Respeto"]
  },
  "828: PREFACIO: EL LIBRO DE LOS ONCE AÑOS": {
    "PilotoDeCoherencia": "Este libro esperó once años en el silencio del archivo porque la humanidad no estaba lista. Es la medicina amarga para el egoísmo y la luz cegadora para la hipocresía. Ha llegado el momento de que el hombre se enfrente a su propia trinidad: Espíritu, Alma y Cuerpo.",
    "CitaInelutable": "Once años de espera para que la conciencia humana pudiera soportar la verdad.",
    "EjemploPedagogico": "Es como un sol fuerte que sale tras una noche de tormenta. Si sales de golpe, te ciegas. Hemos preparado el camino con las obras anteriores para que ahora puedas mirar al sol de frente sin quemarte.",
    "ConexionDoctrinal": ["Trinidad Humana", "Oportunidad Histórica", "Madurez Espiritual"],
    "NodosSimapticos": ["Medicina Amarga", "Sol tras la Tormenta", "Archivo del Tiempo"]
  },
  "911: PRÓLOGO: EL MUNDO EN EBULLICIÓN": {
    "PilotoDeCoherencia": "La segunda edición nace en un mundo que arde. Las instituciones viejas se derrumban porque no tienen cimientos de verdad. La 'Antena' de la Escuela capta las nuevas vibraciones de la justicia de Eloí. Ya no hay lugar para neutrales: o estás con la luz o estás con la sombra.",
    "CitaInelutable": "El mundo está en el crisol de la purificación; solo el oro de la verdad resistirá el fuego.",
    "EjemploPedagogico": "Es como un volcán en erupción: la lava quema todo lo que es falso y rústico. Pero cuando la lava se enfría, deja una tierra fértil para la nueva vida. Estamos en el momento de la lava.",
    "ConexionDoctrinal": ["Justicia de Eloí", "Purificación", "Vibraciones"],
    "NodosSimapticos": ["Crisol de Verdad", "Lava Renovadora", "Antena de Luz"]
  },
  "1170: LA VIDA ES ETERNA Y CONTINUADA": {
    "PilotoDeCoherencia": "Negar la continuidad de la vida individual es negar la justicia de Dios. Si el espíritu no vuelve a la materia para saldar sus cuentas y aprender nuevas lecciones, el universo sería un caos de injusticia. La reencarnación es la ley matemática que asegura que todo error sea corregido y todo esfuerzo premiado.",
    "CitaInelutable": "La vida es eterna; la continuación es la justicia.",
    "EjemploPedagogico": "Es como ir a la escuela: si repruebas un grado, debes volver al año siguiente para aprender lo que no supiste. ¿Qué clase de escuela sería esa si te echaran a la calle por un solo error? El universo es la escuela perfecta.",
    "ConexionDoctrinal": ["Reencarnación", "Justicia Matemática", "Eternidad"],
    "NodosSimapticos": ["Grado Escolar", "Justicia de Regreso", "Escuela Perfecta"]
  },
  "LA LUCHA ENTRE SERES (EL CONFLICTO TRINO)": {
    "PilotoDeCoherencia": "Analizamos la lucha interna del hombre. El espíritu quiere volar; el alma (instintos) quiere gozar; el cuerpo quiere descansar. El equilibrio solo llega cuando el espíritu toma el mando absoluto. La guerra en el mundo es solo el reflejo de la guerra que cada hombre libra en su interior.",
    "CitaInelutable": "La lucha es entre el espíritu que sabe y el alma que siente.",
    "EjemploPedagogico": "Es como un jinete (espíritu), un caballo (alma) y un carruaje (cuerpo). Si el caballo manda, el carruaje terminará en el barranco. Si el jinete domina al caballo, el viaje será seguro y el destino se alcanzará.",
    "ConexionDoctrinal": ["Trinidad", "Lucha Interna", "Dominio del Ser"],
    "NodosSimapticos": ["Jinete y Caballo", "Barranco del Instinto", "Mando del Espíritu"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Conócete a ti mismo": {
    "Definición": "Máxima socrática adoptada por la Escuela como el eje central de la evolución humana, implicando el descubrimiento de la trinidad (Espíritu, Alma, Cuerpo) y la presencia del Creador en el propio ser.",
    "Contexto": "Obra fundamental de Joaquín Trincado.",
    "Conexiones": ["Trinidad Humana", "Eloí", "Sabiduría"],
    "Obras": ["Conócete a ti mismo", "Filosofía Austera Racional"]
  },
  "Vida Continuada": {
    "Definición": "Principio que asegura la persistencia de la individualidad del espíritu a través de sucesivas encarnaciones, permitiendo el progreso infinito y la liquidación de deudas en justicia.",
    "Contexto": "Capítulo sobre la vida en Conócete a ti mismo.",
    "Conexiones": ["Reencarnación", "Eternidad", "Justicia"],
    "Obras": ["Conócete a ti mismo", "El Espiritismo en su Asiento"]
  },
  "Lucha entre Seres": {
    "Definición": "Conflicto interno característico del hombre en evolución, donde el espíritu (razón) debe imponerse sobre los instintos del alma y las necesidades del cuerpo para alcanzar la armonía trina.",
    "Conexiones": ["Trinidad", "Instinto", "Dominio"],
    "Obras": ["Conócete a ti mismo"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 6 nodos 1:1 de Conócete a ti mismo (Batch 1 - Rellenando Gaps) y 3 términos sinápticos.');
