const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 27)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "14809: EL APRECIO PÚBLICO Y LA REPUTACIÓN": {
    "PilotoDeCoherencia": "El aprecio público es el valor que la sociedad asigna al individuo según sus obras conocidas. Pero advertimos: la reputación puede ser falsa por la calumnia o la adulación. El filósofo no vive para la reputación, sino para la conciencia. El verdadero valor corriente del hombre es su grado de amor y sabiduría, sepa el mundo o no.",
    "CitaInelutable": "El aprecio público es el espejo social; la conciencia es la luz propia.",
    "EjemploPedagogico": "Es como el precio de una mercancía: a veces el mercado le pone un precio muy alto a algo que no vale nada (adulación) o un precio muy bajo a algo valioso (calumnia). No te preocupes por el precio que te ponga el mercado social; asegúrate de que tu peso en oro espiritual sea real.",
    "ConexionDoctrinal": ["Reputación", "Conciencia", "Valor Real"],
    "NodosSimapticos": ["Espejo Social", "Valor Corriente", "Oro del Espíritu"]
  },
  "15115: EL HONOR — DIGNIDAD Y VANIDAD": {
    "PilotoDeCoherencia": "Definimos el honor como una mezcla de dignidad (respeto a uno mismo) y vanidad (deseo de reconocimiento). Denunciamos el 'honor de casta' o de 'sangre' que ha causado tantas guerras. El único honor legítimo es la dignidad del espíritu que cumple su deber. La vanidad debe ser transmutada en amor al servicio.",
    "CitaInelutable": "El honor racional es la dignidad del ser que se sabe hijo de Eloí.",
    "EjemploPedagogico": "El honor falso es como un traje de luces que brilla por fuera pero cubre un cuerpo sucio. El honor verdadero es la piel limpia y sana que brilla por su propia salud. Prefiere la salud de tu dignidad al brillo de tu vanidad.",
    "ConexionDoctrinal": ["Honor Racional", "Dignidad", "Vanidad"],
    "NodosSimapticos": ["Dignidad del Ser", "Honor vs Vanidad", "Traje de Luces"]
  },
  "15385: LA CALUMNIA Y LA ADULACIÓN": {
    "PilotoDeCoherencia": "La calumnia es el arma del cobarde para manchar al superior. La adulación es la trampa del hipócrita para manipular al débil. Ambas distorsionan la verdad social. El filósofo austero debe ser inmune a ambas: ni el insulto le abate, ni el halago le ciega. Su centro está en la Verdad.",
    "CitaInelutable": "La calumnia es el barro del envidioso; la adulación es el perfume del traidor.",
    "EjemploPedagogico": "Si caminas bajo la lluvia (calumnia), te mojas pero no dejas de ser quien eres. Si te pones un perfume caro (adulación), hueles bien pero sigues teniendo los mismos defectos. Quítate el perfume y sécate la lluvia; lo que queda es tu verdad.",
    "ConexionDoctrinal": ["Verdad Social", "Inmunidad", "Carácter"],
    "NodosSimapticos": ["Barro y Perfume", "Inmunidad Racional", "Centro de Verdad"]
  },
  "15665: LAS SANCIONES JURÍDICAS": {
    "PilotoDeCoherencia": "Las leyes humanas solo sancionan lo que perturba el orden social visible. Pero la moral racional va más allá. Denunciamos la insuficiencia de la justicia de los hombres, que castiga el efecto pero no la causa. Buscamos una legislación que eduque al delincuente en lugar de solo encarcelarlo.",
    "CitaInelutable": "La sanción humana es un parche; la educación racional es la cura.",
    "EjemploPedagogico": "Es como poner una multa por chocar el coche (sanción) sin enseñar a conducir (educación). La multa no evita el próximo choque; el conocimiento sí. Queremos una sociedad de conductores expertos de su propia vida.",
    "ConexionDoctrinal": ["Justicia Humana", "Penalidad", "Educación"],
    "NodosSimapticos": ["Parche de Justicia", "Cura Racional", "Multa y Saber"]
  },
  "15945: EL POSTULADO DE KANT": {
    "PilotoDeCoherencia": "Kant comprendió que la justicia de este mundo es incompleta y postuló una sanción en la vida 'numénica' (espiritual). Coincidimos en la necesidad de la sanción espiritual, pero no como un castigo divino, sino como la consecuencia natural y automática de la ley de afinidad y progreso. Nadie escapa de sí mismo.",
    "CitaInelutable": "La sanción suprema no es un juicio externo, sino la confrontación del espíritu con su propia obra.",
    "EjemploPedagogico": "Es como un examen: el profesor (el universo) no te castiga si repruebas, simplemente tu ignorancia te impide pasar al siguiente curso (grado). Tú eres tu propio juez y tu propio verdugo en el tribunal de la conciencia.",
    "ConexionDoctrinal": ["Kant", "Sanción Espiritual", "Consecuencia"],
    "NodosSimapticos": ["Vida Numénica", "Auto-Juicio", "Examen del Ser"]
  },
  "16215: LA JUSTICIA DE ELOÍ": {
    "PilotoDeCoherencia": "La justicia del Creador es la armonía de la Ley. No hay perdón ni gracia caprichosa. Cada acto se graba en el archivo del espíritu y produce su fruto. La justicia de Eloí es matemática y eterna. Conocerla nos da la paz de saber que nada queda impune y que todo esfuerzo es recompensado por el progreso mismo.",
    "CitaInelutable": "La justicia de Eloí es el equilibrio perfecto que rige desde el átomo hasta el sol.",
    "EjemploPedagogico": "Es como la ley de la palanca: si aplicas una fuerza en un extremo, el otro se mueve exactamente en proporción. No hay error posible. Tu vida es la palanca; tus actos son la fuerza; tu destino es el movimiento resultante.",
    "ConexionDoctrinal": ["Justicia Automática", "Ley de Equilibrio", "Matemática Espiritual"],
    "NodosSimapticos": ["Equilibrio de Eloí", "Palanca del Destino", "Matemática de Ley"]
  },
  "16485: EL VALOR DE LA DIGNIDAD": {
    "PilotoDeCoherencia": "La dignidad es el cimiento de la ética. Es el autorreconocimiento de la chispa divina que somos. Quien tiene dignidad no puede ser esclavo ni puede ser injusto. La dignidad es la fuerza que nos hace caminar erguidos ante los poderosos y humildes ante la Verdad.",
    "CitaInelutable": "La dignidad es el báculo del espíritu en su ascenso al infinito.",
    "EjemploPedagogico": "Es como la columna vertebral: si está rota, te arrastras como un gusano. Si está firme, caminas como un hombre. La dignidad es la columna vertebral de tu moral.",
    "ConexionDoctrinal": ["Dignidad", "Soberanía Individual", "Ética"],
    "NodosSimapticos": ["Columna de Moral", "Cimiento Ético", "Camino Erguido"]
  },
  "16755: LA FUNCIÓN SOCIAL DEL CASTIGO": {
    "PilotoDeCoherencia": "El castigo social debe transformarse en medicina social. No buscamos el dolor del culpable, sino su redención por el trabajo y el estudio. Denunciamos la pena de muerte y las torturas como restos de la barbarie religiosa. En la Comuna, el 'castigo' será la obligación de reparar el daño y aprender la Ley.",
    "CitaInelutable": "Sustituye la celda por el aula y el látigo por la herramienta; así harás justicia.",
    "EjemploPedagogico": "Si un niño rompe un cristal, no le pegas, le enseñas a poner uno nuevo y le pides que trabaje para pagarlo. Así aprende el valor de las cosas y la responsabilidad de sus actos. Eso es justicia racional.",
    "ConexionDoctrinal": ["Redención", "Medicina Social", "Justicia Reparadora"],
    "NodosSimapticos": ["Medicina Social", "Aula vs Celda", "Reparación de Obra"]
  },
  "17025: EL CONCEPTO SOCIAL Y EL HONOR": {
    "PilotoDeCoherencia": "El concepto social solo afecta a quien vive para afuera. El filósofo debe educar sus sentimientos para que el honor no sea una carga de vanidad, sino una alegría de servicio. Que tu honor sea ser llamado 'hermano' por los humildes y 'justo' por los sabios.",
    "CitaInelutable": "El honor del hombre de la Comuna es la paz de su conciencia y el amor de sus hermanos.",
    "EjemploPedagogico": "Es como un árbol frutal: no le importa si la gente dice que es bonito o feo; lo que le importa es que sus raíces estén profundas en la tierra y que sus frutos sean dulces. Tu tierra es la Ley; tus frutos son tus obras.",
    "ConexionDoctrinal": ["Honor Social", "Vanidad", "Alegría de Servicio"],
    "NodosSimapticos": ["Honor de Hermano", "Paz de Conciencia", "Frutos Dulces"]
  },
  "17295: LA SÍNTESIS DE LA JUSTICIA": {
    "PilotoDeCoherencia": "Concluimos que la justicia es la ley de las leyes. Sin ella, el universo sería un caos. Todo nuestro estudio de la filosofía austera tiene un solo fin: comprender la justicia para vivirla. Sed justos con vosotros mismos, con vuestros hermanos y con Eloí. Esa es toda la Ética.",
    "CitaInelutable": "La justicia es el sol que ilumina el camino del espíritu hacia su Padre.",
    "EjemploPedagogico": "Imagina una balanza perfecta: en un plato está tu deber, en el otro tu derecho. Mantén la balanza en equilibrio y estarás en el centro de la creación. Sed la balanza viva de Eloí.",
    "ConexionDoctrinal": ["Justicia Universal", "Síntesis Ética", "Centro de Creación"],
    "NodosSimapticos": ["Ley de Leyes", "Balanza Viva", "Sol de Justicia"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Honor Racional": {
    "Definición": "Sentimiento compuesto de dignidad y autorrespeto basado en el cumplimiento del deber y la armonía con la Ley de Amor, despojado de vanidad y privilegios de casta.",
    "Contexto": "Ética Social en Filosofía Austera Racional.",
    "Conexiones": ["Dignidad", "Deber", "Vanidad"],
    "Obras": ["Filosofía Austera Racional", "Código de Amor Universal"]
  },
  "Sanción Espiritual": {
    "Definición": "Consecuencia automática e ineludible de los actos humanos grabada en el archivo del espíritu, que determina su grado de progreso o estancamiento según la ley de causalidad.",
    "Contexto": "Crítica a Kant en Filosofía Austera Racional.",
    "Conexiones": ["Justicia de Eloí", "Causalidad", "Archivo Eterno"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Justicia de Eloí": {
    "Definición": "El equilibrio perfecto y matemático que rige el universo, donde cada causa produce su efecto proporcional, asegurando que nada quede impune y todo progreso sea recompensado.",
    "Conexiones": ["Justicia Universal", "Equilibrio", "Leyes Naturales"],
    "Obras": ["Filosofía Austera Racional", "Buscando a Dios"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Filosofía Austera Racional (Batch 27) y 3 términos sinápticos.');
