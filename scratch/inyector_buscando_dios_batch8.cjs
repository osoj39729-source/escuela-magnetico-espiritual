const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// RE-DESTILACIÓN PURA 1:1 - Buscando a Dios (Batch 8 - Claves 4448 a 6305)
const nuevosNodos = {
  "058: Párrafo VI: NOCHE DE TERRIBLES TRAGEDIAS": {
    "PilotoDeCoherencia": "Violencia Interna. Se narran los conflictos y crímenes de sangre dentro de las familias papales, mostrando que el odio y la ambición eran los motores de su existencia.",
    "CitaInelutable": "NOCHE DE TERRIBLES TRAGEDIAS... el crimen como herramienta de poder en la corte de los santos.",
    "EjemploPedagogico": "Una casa de espejos donde cada vez que alguien intenta ver la luz, se encuentra con una imagen de violencia provocada por su propio reflejo; la tragedia es el resultado natural del vicio.",
    "ConexionDoctrinal": ["Corrupción Papal", "Crimen"],
    "NodosSimapticos": []
  },
  "059: Párrafo VII: HORRORES Y BACANAL": {
    "PilotoDeCoherencia": "Degradación Moral. Descripción de las fiestas y excesos carnales en el Vaticano, contrastando el discurso de castidad con la realidad de las bacanales pontificias.",
    "CitaInelutable": "HORRORES Y BACANAL... la degradación del espíritu bajo el manto de la púrpura.",
    "EjemploPedagogico": "Un escenario de teatro donde se representa una misa solemne, pero detrás de las cortinas los actores están entregados a la glotonería y el vicio, riéndose de quienes creen en la función.",
    "ConexionDoctrinal": ["Bacanal (Crítica)", "Hipocresía"],
    "NodosSimapticos": ["Bacanal (Crítica)"]
  },
  "060: Párrafo VIII: CRÍMENES Y FRATRICIDIO": {
    "PilotoDeCoherencia": "Ausencia de Amor. El asesinato entre hermanos por el poder papal demuestra que en esa institución no existe rastro del amor de Dios ni de la fraternidad humana.",
    "CitaInelutable": "BACANAL, CRÍMENES Y FRATRICIDIO... donde el hermano asesina al hermano por una tiara de oro.",
    "EjemploPedagogico": "Dos lobos de la misma manada que se matan entre sí por un hueso, mientras el resto de la manada aúlla celebrando la victoria del más cruel; no hay ley de padre, solo ley de bestia.",
    "ConexionDoctrinal": ["Fratricidio", "Ambición"],
    "NodosSimapticos": []
  },
  "061: Párrafo IX: UN ESPÍA": {
    "PilotoDeCoherencia": "Intriga y Vigilancia. Se describe el uso de espías y soplones por parte de la iglesia para mantener el control sobre las conciencias y prevenir cualquier rebelión.",
    "CitaInelutable": "UN ESPÍA... los ojos y oídos del tirano en cada rincón de la vida privada.",
    "EjemploPedagogico": "Un hombre que se hace pasar por amigo para escuchar tus secretos y luego ir a vendérselos a tu enemigo; la iglesia usó la confesión y el espionaje para este fin.",
    "ConexionDoctrinal": ["Confesión (Crítica)", "Control Social"],
    "NodosSimapticos": []
  },
  "062: Párrafo X: LA FATALIDAD LOS PERSIGUE": {
    "PilotoDeCoherencia": "Ley de Causa y Efecto. La fatalidad no es un azar, sino el resultado inevitable de los actos criminales que terminan por destruir a sus propios autores.",
    "CitaInelutable": "LA FATALIDAD LOS PERSIGUE... porque nadie escapa a la justicia de sus propios hechos.",
    "EjemploPedagogico": "Un hombre que lanza piedras hacia arriba; puede que por un momento crea que ha escapado, pero la gravedad (la ley) hará que las piedras caigan sobre su propia cabeza tarde o temprano.",
    "ConexionDoctrinal": ["Causa y Efecto", "Justicia Natural"],
    "NodosSimapticos": []
  },
  "063: Párrafo XI: UNA MENTIRA PIADOSA LOS PIERDE A TODOS": {
    "PilotoDeCoherencia": "Efecto del Engaño. Se analiza cómo las mentiras creadas para 'proteger la fe' terminan por destruir la base moral de la institución y de quienes la siguen.",
    "CitaInelutable": "UNA MENTIRA PIADOSA LOS PIERDE A TODOS... el engaño como cimiento de una ruina segura.",
    "EjemploPedagogico": "Pintar una pared podrida para que parezca nueva; la pintura (mentira) engaña al ojo por un tiempo, pero la humedad sigue comiéndose el ladrillo hasta que toda la casa se desploma.",
    "ConexionDoctrinal": ["Mentira Piadosa (Crítica)", "Verdad"],
    "NodosSimapticos": []
  },
  "064: Párrafo XII: LA LUJURIA EN SU GRADO MÁXIMO": {
    "PilotoDeCoherencia": "Obsesión Material. La lujuria no es solo carnal, sino la ambición desmedida de poseer y disfrutar sin medida, característica del papado histórico.",
    "CitaInelutable": "LA LUJURIA EN SU GRADO MÁXIMO... el desenfreno de los sentidos sobre la razón.",
    "EjemploPedagogico": "Un fuego que consume todo lo que encuentra a su paso; no calienta la casa, sino que la quema, dejando solo cenizas de lo que una vez fue un hogar.",
    "ConexionDoctrinal": ["Lujuria", "Desequilibrio"],
    "NodosSimapticos": []
  },
  "065: Párrafo XIII: PUSILANIMIDAD DE LOS REYES": {
    "PilotoDeCoherencia": "Esclavitud Política. Los reyes perdieron su soberanía al someterse al miedo religioso, convirtiéndose en cómplices de la opresión de sus propios pueblos.",
    "CitaInelutable": "PUSILANIMIDAD DE LOS REYES ESCLAVOS DE LA RELIGION... coronas que se arrodillan ante la sandalia del pescador.",
    "EjemploPedagogico": "Un león que se deja poner un bozal por un ratón que le asusta con ruidos extraños; el león tiene la fuerza, pero el miedo lo hace esclavo de quien no tiene poder real.",
    "ConexionDoctrinal": ["Pusilanimidad (Reyes)", "Soberanía Civil"],
    "NodosSimapticos": ["Pusilanimidad (Reyes)"]
  },
  "066: Párrafo XIV: JUANUCHO HACE HONOR A SUS JURAMENTOS": {
    "PilotoDeCoherencia": "Cumplimiento del Mal. Se describe cómo los ejecutores del poder papal cumplían con crueldad sus juramentos de destrucción de la libertad.",
    "CitaInelutable": "JUANUCHO HACE HONOR A SUS JURAMENTOS... la lealtad al crimen como virtud institucional.",
    "EjemploPedagogico": "Un verdugo que afila su hacha con esmero para cumplir el mandato de un tirano; su 'eficacia' es su mayor pecado, porque pone su habilidad al servicio de la injusticia.",
    "ConexionDoctrinal": ["Juramento de los Caballeros de Colón (Contexto)", "Fanatismo"],
    "NodosSimapticos": []
  },
  "067: Párrafo XV: SAVONAROLA": {
    "PilotoDeCoherencia": "Reforma Inútil. Savonarola intentó limpiar la iglesia desde adentro, pero la institución no admite reformas porque su esencia misma es la corrupción.",
    "CitaInelutable": "SAVONAROLA... el monje que quiso quemar las vanidades y terminó quemado por la vanidad del Papa.",
    "EjemploPedagogico": "Intentar lavar una esponja llena de petróleo usando el mismo petróleo; por más que frotes, la esponja nunca estará limpia porque el líquido que usas es el que la ensucia.",
    "ConexionDoctrinal": ["Savonarola (Figura)", "Imposibilidad de Reforma"],
    "NodosSimapticos": ["Savonarola (Figura)"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Savonarola (Figura)": {
    "Definición": "Girolamo Savonarola (1452-1498). Monje dominico que denunció la corrupción de la corte de Alejandro VI. Trincado lo cita como ejemplo de cómo la iglesia devora a sus propios hijos cuando estos intentan restaurar la moral original.",
    "Contexto": "Buscando a Dios (Capítulo Undécimo).",
    "Conexiones": ["Reforma", "Martirio", "Corrupción"],
    "Obras": ["Buscando a Dios"]
  },
  "Pusilanimidad (Reyes)": {
    "Definición": "Falta de valor y soberanía de los monarcas históricos que, por temor a las excomuniones y al castigo eterno prometido por la iglesia, sometieron sus gobiernos y pueblos al arbitrio del Vaticano.",
    "Contexto": "Buscando a Dios (Capítulo Undécimo).",
    "Conexiones": ["Miedo", "Soberanía", "Esclavitud"],
    "Obras": ["Buscando a Dios", "La Revolución de México"]
  },
  "Bacanal (Crítica)": {
    "Definición": "Término peyorativo utilizado para describir las orgías y excesos de la corte pontificia durante el Renacimiento, evidenciando la contradicción total entre el dogma de santidad y la conducta real del clero.",
    "Contexto": "Buscando a Dios (Capítulo Undécimo).",
    "Conexiones": ["Concupiscencia", "Vaticano", "Vicio"],
    "Obras": ["Buscando a Dios"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 8 de Buscando a Dios (10 nodos 1:1) y 3 términos sinápticos. Historia Borgia y Savonarola sellados.');
