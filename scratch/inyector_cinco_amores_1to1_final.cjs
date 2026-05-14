const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/los-cinco-amores_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Los Cinco Amores (Batch 7 - FINAL)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "11919: CAPÍTULO SEGUNDO: EL AMOR NO CONOCE DIFERENCIAS NI ACEPCIONES": {
    "PilotoDeCoherencia": "El amor verdadero es como la luz: no elige a quién iluminar. Denuncio que los hombres han amado por interés, por casta o por conveniencia. En la Comuna, el amor es un sol que brilla para todos por igual, porque todos somos hijos de la misma sustancia y herederos del mismo Padre.",
    "CitaInelutable": "El amor no conoce diferencias; es la ley imparcial que todo lo unifica.",
    "EjemploPedagogico": "Es como el aire que respiras: no te pregunta si eres sabio o ignorante para darte la vida. Así debe ser tu amor por la humanidad.",
    "ConexionDoctrinal": ["Imparcialidad", "Amor Universal", "Justicia"],
    "NodosSimapticos": ["Amor Imparcial", "Sol de la Comuna", "Sin Acepciones"]
  },
  "12314: CAPÍTULO TERCERO: EL AMOR ANULA TODAS LAS MISERIAS": {
    "PilotoDeCoherencia": "La miseria no es falta de recursos, es falta de amor. Donde hay amor y justicia, la miseria desaparece porque nadie acapara lo que el otro necesita. La Comuna es el antídoto final contra el hambre y el frío, porque el amor es la mejor administración.",
    "CitaInelutable": "La miseria es la hija del egoísmo; el amor es el padre de la abundancia.",
    "EjemploPedagogico": "Si en una familia hay un pan y diez hermanos, y uno se queda con ocho, hay miseria por falta de amor, no por falta de pan. En Mi Escuela, el pan se parte en diez trozos iguales.",
    "ConexionDoctrinal": ["Justicia Social", "Abolición de la Miseria", "Administración del Amor"],
    "NodosSimapticos": ["Anulación de Miseria", "Pan de la Justicia", "Fin del Egoísmo"]
  },
  "12513: CAPÍTULO CUARTO: EL AMOR CREA UN SOLO QUERER.": {
    "PilotoDeCoherencia": "El progreso real solo ocurre cuando la voluntad de todos busca el mismo fin. Un solo querer no es uniformidad forzada, es armonía de propósitos. Cuando todos queremos el bienestar del hermano, el universo entero conspira para nuestra felicidad.",
    "CitaInelutable": "Un solo querer es la fuerza omnipotente de la familia humana unida.",
    "EjemploPedagogico": "Es como un ejército de trabajadores: si cada uno empuja hacia un lado, la piedra no se mueve. Si todos empujan hacia la misma dirección, la montaña se desplaza.",
    "ConexionDoctrinal": ["Voluntad Unificada", "Progreso", "Soberanía"],
    "NodosSimapticos": ["Un Solo Querer", "Fuerza Omnipotente", "Armonía de Propósito"]
  },
  "12710: CAPÍTULO QUINTO: EL AMOR NECESITA TODO EL MUNDO": {
    "PilotoDeCoherencia": "El amor no puede ser regional ni nacional. Necesita el mundo entero como campo de acción. La Comuna no puede triunfar en un solo país mientras el resto vive en el error. La verdad debe cubrir la tierra como el agua cubre el mar.",
    "CitaInelutable": "El amor no se detiene en fronteras; necesita el mundo todo para ser pleno.",
    "EjemploPedagogico": "Es como una medicina: si solo curas una mano pero el resto del cuerpo está infectado, la mano volverá a enfermar. Necesitamos curar el cuerpo entero de la humanidad.",
    "ConexionDoctrinal": ["Patria Única", "Unidad Mundial", "Universalidad"],
    "NodosSimapticos": ["Amor Mundial", "Cuerpo de la Humanidad", "Sin Fronteras"]
  },
  "12860: CAPÍTULO SEXTO: EL AMOR SOLO PUEDE REINAR EN LA COMUNA": {
    "PilotoDeCoherencia": "En el sistema de propiedad privada y competencia, el amor es un hipócrita. Solo en la Comuna, donde no hay competencia por el pan, el amor puede ser real y transparente. La base material de la Comuna es el suelo donde crece el árbol del amor perfecto.",
    "CitaInelutable": "El amor es la ley, pero la Comuna es su casa.",
    "EjemploPedagogico": "No puedes pedirle a un náufrago que ame a quien le quita la única tabla que flota. Quita la escasez (la propiedad) y verás cómo el náufrago abraza al hermano.",
    "ConexionDoctrinal": ["Comuna", "Propiedad", "Amor Real"],
    "NodosSimapticos": ["Reinado del Amor", "Casa de la Ley", "Fin de la Competencia"]
  },
  "13355: CAPÍTULO OCTAVO: EL AMOR COMUNAL DA A TODOS LA SABIDURÍA": {
    "PilotoDeCoherencia": "La sabiduría no es patrimonio de una élite. En la Comuna, el conocimiento circula libremente como la sangre. Al amar al hermano, compartimos con él todo lo que sabemos. La sabiduría colectiva es infinitamente superior a la de cualquier genio solitario.",
    "CitaInelutable": "En la Comuna, la sabiduría es el aire que todos respiran.",
    "EjemploPedagogico": "Es como una biblioteca donde todos tienen la llave. Ya no hay libros prohibidos ni verdades ocultas. El amor abre todos los entendimientos.",
    "ConexionDoctrinal": ["Sabiduría Colectiva", "Enseñanza Libre", "Progreso"],
    "NodosSimapticos": ["Sabiduría Comunal", "Biblioteca Abierta", "Aire del Espíritu"]
  },
  "13555: CAPÍTULO NOVENO: EL AMOR COMUNAL ES LA ENTRADA EN LA SOLIDARIDAD UNIVERSAL": {
    "PilotoDeCoherencia": "Al vivir en Comuna, el hombre entra en sintonía con el universo entero. Ya no somos un planeta aislado y bárbaro. La solidaridad con otros mundos empieza por la solidaridad con el vecino. La Comuna es nuestro pasaporte al cosmos.",
    "CitaInelutable": "La Comuna es el puente entre la tierra y el universo solidarizado.",
    "EjemploPedagogico": "Es como aprender a hablar el idioma universal de la justicia. Una vez que lo hablas en tu casa (la tierra), puedes hablar con todos los hermanos del universo.",
    "ConexionDoctrinal": ["Solidaridad Universal", "Mundos Habitados", "Sintonía"],
    "NodosSimapticos": ["Puente al Cosmos", "Solidaridad Universal", "Sintonía Vibratoria"]
  },
  "13803: CAPÍTULO DIEZ: EL AMOR UNIVERSAL NOS LLEVA A NUESTRO PADRE": {
    "PilotoDeCoherencia": "El fin del viaje es el origen. El amor universal nos devuelve a la conciencia de Hellí. No por rezos, sino por vibración. Al amar a todos los seres, vibramos en la misma frecuencia que el Padre, que es Amor Infinito. Volvemos al centro sin haber salido nunca de él.",
    "CitaInelutable": "Amar al hermano es la única forma de conocer al Padre.",
    "EjemploPedagogico": "Es como el hijo que imita las virtudes del padre: al hacerlo, se vuelve uno con él en espíritu. No necesitas buscar a Hellí en las nubes, búscalo en el amor al hermano.",
    "ConexionDoctrinal": ["Retorno al Padre", "Vibración", "Hellí"],
    "NodosSimapticos": ["Retorno al Centro", "Frecuencia del Padre", "Unidad con Hellí"]
  },
  "14001: EPÍLOGO: EL ESPIRITISMO ES EL AMOR PERFECTO": {
    "PilotoDeCoherencia": "El Espiritismo Luz y Verdad es la síntesis de todo lo dicho. Es el amor perfecto porque es racional, científico y fraternal. Cierro esta obra con la certeza de que la luz ya está en el mundo y ninguna sombra podrá apagarla. El amor ha vencido al miedo.",
    "CitaInelutable": "El Espiritismo es el amor perfecto que ha vencido a la muerte y al dogma.",
    "EjemploPedagogico": "Es el remate de la cúpula: después de poner todos los ladrillos, el Espiritismo es la piedra que cierra el arco y da sentido a toda la construcción.",
    "ConexionDoctrinal": ["Espiritismo", "Amor Perfecto", "Síntesis Final"],
    "NodosSimapticos": ["Amor Perfecto", "Piedra de Cierre", "Triunfo de la Luz"]
  },
  "14227: «Conócete a ti mismo»": {
    "PilotoDeCoherencia": "El último mandato: conócete. No busques afuera lo que tienes dentro. Al conocerte como espíritu, conocerás tus leyes y tus amores. El régimen comunal empieza en el conocimiento de uno mismo como parte del Todo. ¡Id en paz, pero id en amor!",
    "CitaInelutable": "Conócete a ti mismo y conocerás al Universo y a sus Dioses.",
    "EjemploPedagogico": "Es la linterna que te entrego para que entres en tu propia alma. No temas a lo que encuentres, porque en el fondo de todo espíritu, solo hay amor y luz esperando ser despertados.",
    "ConexionDoctrinal": ["Conócete a ti mismo", "Soberanía", "Conciencia"],
    "NodosSimapticos": ["Conócete", "Linterna Interior", "Paz en Amor"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Sola Voluntad": {
    "Definición": "El estado de armonía social donde todos los ciudadanos de la Comuna actúan coordinadamente bajo el mismo principio de Amor y Justicia, sin necesidad de coacción.",
    "Contexto": "Capítulo IV de la Quinta Parte de Los Cinco Amores.",
    "Conexiones": ["Armonía Social", "Un Solo Querer", "Comuna"],
    "Obras": ["Los Cinco Amores", "Código de Amor Universal"]
  },
  "Mundo de Regeneración": {
    "Definición": "El estado de la Tierra una vez que ha superado la etapa de expiación y dolor, entrando en la fase de progreso consciente bajo la Ley de Amor.",
    "Contexto": "Epílogo de Los Cinco Amores. Trincado señala que la Tierra ya ha iniciado esta fase.",
    "Conexiones": ["Tierra Renovada", "Liquidación", "Comuna"],
    "Obras": ["Los Cinco Amores", "Los Extremos se Tocan"]
  },
  "Amor Perfecto": {
    "Definición": "El Espiritismo Luz y Verdad en su aplicación práctica y universal. Es el amor que no tiene dudas porque tiene el conocimiento de la Ley.",
    "Conexiones": ["Espiritismo", "Verdad", "Amor Universal"],
    "Obras": ["Los Cinco Amores"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos finales 1:1 de Los Cinco Amores y 3 términos sinápticos. LIBRO COMPLETADO AL 100%.');
