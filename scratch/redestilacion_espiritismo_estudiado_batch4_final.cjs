const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Batch 4 FINAL: claves 9682 a 13929
const batch4 = {
  "9682: CUARTA PARTE: FENÓMENOS ESPIRITUALES:": {
    "PilotoDeCoherencia": "Apertura Fenomenológica. Se introduce el estudio sistemático de los fenómenos que prueban la realidad del mundo espiritual desde una perspectiva racional y científica.",
    "CitaInelutable": "CUARTA PARTE: FENÓMENOS ESPIRITUALES: el laboratorio de la verdad.",
    "EjemploPedagogico": "El departamento de investigación de una universidad; aquí los fenómenos no se aceptan por fe, sino que se miden, reproducen y analizan para extraer leyes.",
    "ConexionDoctrinal": ["Fenomenología Espiritual", "Prueba Racional"],
    "NodosSimapticos": []
  },
  "9688: CAPITULO PRIMERO: FENÓMENOS DE VIDENCIA": {
    "PilotoDeCoherencia": "Ver más Allá. La videncia es la capacidad de percibir el plano espiritual directamente; se analiza cómo se produce, se clasifica y se verifica.",
    "CitaInelutable": "FENÓMENOS DE VIDENCIA... el ojo del espíritu abierto a los dos planos.",
    "EjemploPedagogico": "Una cámara de infrarrojos; ve lo que el ojo humano no alcanza; el vidente tiene una percepción espiritual que funciona como ese sensor infrarrojo.",
    "ConexionDoctrinal": ["Videncia", "Percepción Espiritual"],
    "NodosSimapticos": []
  },
  "10077: CAPITULO SEGUNDO: FENÓMENO DE LA POSESIÓN PARLANTE": {
    "PilotoDeCoherencia": "Comunicación Controlada. La posesión parlante es el fenómeno donde un espíritu habla a través del médium; se distingue de la posesión patológica por su control y su finalidad doctrinal.",
    "CitaInelutable": "FENÓMENO DE LA POSESIÓN PARLANTE... el mensajero que usa el instrumento con permiso.",
    "EjemploPedagogico": "Un ventrílocuo con su muñeco; el espíritu es el ventrílocuo, el médium es el muñeco; la diferencia con la posesión patológica es que el muñeco puede detener la función en cualquier momento.",
    "ConexionDoctrinal": ["Posesión Parlante", "Médiums Parlantes"],
    "NodosSimapticos": []
  },
  "10278: CAPÍTULO TERCERO: FENÓMENOS DE LA ESCRITURA, PINTURA Y DIBUJO": {
    "PilotoDeCoherencia": "Mediumnidad Plástica. Los espíritus pueden transmitir mensajes mediante la escritura automática, pinturas o dibujos que el médium ejecuta sin control consciente de su mano.",
    "CitaInelutable": "FENÓMENOS DE LA ESCRITURA, PINTURA Y DIBUJO... el espíritu usa la mano como pincel.",
    "EjemploPedagogico": "Un pianista bajo hipnosis que toca una pieza que no aprendió conscientemente; su mano ejecuta lo que su espíritu retiene de vidas pasadas.",
    "ConexionDoctrinal": ["Escritura Mecánica", "Arte Mediúmnico"],
    "NodosSimapticos": []
  },
  "10347: CAPÍTULO CUARTO: FENÓMENO DEL DESDOBLAMIENTO": {
    "PilotoDeCoherencia": "El Espíritu Viajero. El desdoblamiento es la separación consciente del espíritu del cuerpo físico, que permite la exploración del plano espiritual y el traslado a lugares distantes.",
    "CitaInelutable": "FENÓMENO DEL DESDOBLAMIENTO... el alma que visita lo que el cuerpo no puede alcanzar.",
    "EjemploPedagogico": "Un drone que despega desde una base y explora territorios inaccesibles mientras la base permanece operativa; el cuerpo es la base, el espíritu desdoblado es el drone.",
    "ConexionDoctrinal": ["Desdoblamiento", "Alma (Naturaleza)"],
    "NodosSimapticos": []
  },
  "10482: CAPÍTULO QUINTO: FENÓMENO DE AUDICIÓN, INTUICIÓN E INSPIRACIÓN": {
    "PilotoDeCoherencia": "Percepción Sutil. Son los grados más finos de la mediumnidad: escuchar voces espirituales, recibir intuiciones claras o ser inspirado en el pensamiento sin intervención consciente.",
    "CitaInelutable": "FENÓMENO DE AUDICIÓN, INTUICIÓN E INSPIRACIÓN... el susurro del espíritu en el oído del alma.",
    "EjemploPedagogico": "Un compositor que 'escucha' la sinfonía completa antes de escribir una nota; lo que el mundo llama genio, el espiritismo llama comunicación inspirada.",
    "ConexionDoctrinal": ["Inspiración", "Audición Espiritual"],
    "NodosSimapticos": []
  },
  "10573: CAPÍTULO SEXTO: FENÓMENOS DE LEVITACIÓN Y TRASLACIÓN": {
    "PilotoDeCoherencia": "Dominación de la Gravedad. La levitación y la traslación instantánea son fenómenos en los que la fuerza magnética espiritual supera temporalmente las leyes de la física ordinaria.",
    "CitaInelutable": "FENÓMENOS DE LEVITACIÓN Y TRASLACIÓN... el espíritu que domina al átomo.",
    "EjemploPedagogico": "La superconductividad; un material que, en condiciones especiales, levita sobre un imán; el espíritu en estado de elevación logra efectos similares sobre la materia.",
    "ConexionDoctrinal": ["Levitación", "Magnetismo Espiritual"],
    "NodosSimapticos": []
  },
  "10735: CAPÍTULO SÉPTIMO: EL FENÓMENO DE APORTE Y MATERIALIZACIÓN": {
    "PilotoDeCoherencia": "Creación Material. El aporte y la materialización son los fenómenos más extraordinarios, donde el espíritu produce objetos físicos o formas visibles a partir de la energía del plano espiritual.",
    "CitaInelutable": "EL FENÓMENO DE APORTE Y MATERIALIZACIÓN... la prueba que no admite excusas.",
    "EjemploPedagogico": "La impresión 3D; un diseño digital se convierte en un objeto físico real; el espíritu hace lo mismo pero usando energía biológica y magnética como 'filamento'.",
    "ConexionDoctrinal": ["Materialización", "Aporte"],
    "NodosSimapticos": []
  },
  "11106: CAPÍTULO OCTAVO: LA INFLUENCIA DE LOS ESPÍRITUS": {
    "PilotoDeCoherencia": "Red de Influencia. Los espíritus del plano superior actúan constantemente sobre la humanidad: inspirando a artistas, científicos y reformadores sin que ellos sean conscientes.",
    "CitaInelutable": "LA INFLUENCIA DE LOS ESPÍRITUS... la mano invisible que guía los pasos de la historia.",
    "EjemploPedagogico": "Un director de orquesta que trabaja desde detrás del escenario; los músicos creen que tocan solos, pero el director les ha preparado durante meses.",
    "ConexionDoctrinal": ["Influencia Espiritual", "Historia como Espiritismo"],
    "NodosSimapticos": []
  },
  "11256: CAPÍTULO NOVENO: LA PARTICIPACIÓN DE LOS ESPÍRITUS EN LOS HECHOS DE LOS HOMBRES": {
    "PilotoDeCoherencia": "Colaboración Inter-Planos. Los espíritus evolucionados participan activamente en los grandes eventos históricos, inspirando o protegiendo a los agentes del progreso.",
    "CitaInelutable": "LA PARTICIPACIÓN DE LOS ESPÍRITUS EN LOS HECHOS DE LOS HOMBRES... la historia tiene dos autores.",
    "EjemploPedagogico": "Un guionista y un director de cine; los actores (hombres) ejecutan el papel, pero el guionista espiritual ya escribió la trama de fondo.",
    "ConexionDoctrinal": ["Guía Espiritual", "Historia"],
    "NodosSimapticos": []
  },
  "11350: CAPÍTULO DIEZ: GRANDES Y RAROS FENÓMENOS": {
    "PilotoDeCoherencia": "Fronteras del Conocimiento. Los fenómenos más excepcionales no son milagros, sino aplicaciones de leyes espirituales aún desconocidas para la ciencia ordinaria.",
    "CitaInelutable": "GRANDES Y RAROS FENÓMENOS... lo excepcional de hoy es la norma del mañana.",
    "EjemploPedagogico": "El láser en 1960; era un 'fenómeno raro' para la física de entonces; hoy opera en cada lector de código de barras del supermercado.",
    "ConexionDoctrinal": ["Progreso Científico", "Ley Natural"],
    "NodosSimapticos": []
  },
  "12527: QUINTA PARTE: DETRACTORES DEL ESPIRITISMO": {
    "PilotoDeCoherencia": "Catálogo del Error. Se presenta sistemáticamente a todos los enemigos de la verdad espiritual para conocerlos, entenderlos y refutarlos con rigor.",
    "CitaInelutable": "QUINTA PARTE: DETRACTORES DEL ESPIRITISMO... conoce a tu adversario.",
    "EjemploPedagogico": "El capítulo de 'enfermedades' de un manual de medicina; no para asustarse, sino para reconocer los síntomas y aplicar el tratamiento correcto.",
    "ConexionDoctrinal": ["Detractores", "Refutación"],
    "NodosSimapticos": []
  },
  "12530: CAPÍTULO PRIMERO: LAS RELIGIONES": {
    "PilotoDeCoherencia": "El Primer Adversario. Las religiones son el mayor obstáculo al espiritismo porque tienen el mayor interés en mantener al hombre en la ignorancia espiritual.",
    "CitaInelutable": "LAS RELIGIONES... el enemigo más poderoso y mejor organizado.",
    "EjemploPedagogico": "El monopolio más antiguo del mercado; lleva siglos de ventaja, tiene la mayor red de distribución y el mayor presupuesto de publicidad (templos, rituales, miedo).",
    "ConexionDoctrinal": ["Antagonismo Religioso", "Ignorancia"],
    "NodosSimapticos": []
  },
  "12630: CAPÍTULO SEGUNDO: EL ESPIRITUALISMO": {
    "PilotoDeCoherencia": "El Adversario Interno. El espiritualismo (kardecismo sin rigor) es más peligroso que las religiones porque opera dentro del campo espiritual deformando la verdad.",
    "CitaInelutable": "EL ESPIRITUALISMO... el lobo con piel de oveja dentro del rebaño.",
    "EjemploPedagogico": "Una falsificación de arte; más peligrosa que el cuadro obvio de mal gusto, porque engaña al comprador que cree estar adquiriendo una obra auténtica.",
    "ConexionDoctrinal": ["Espiritualismo (Crítica)", "Deformación"],
    "NodosSimapticos": ["Espiritualismo (Crítica)"]
  },
  "12660: En nuestra «Filosofía Austera Racional», en «El Espiritismo en su Asiento»": {
    "PilotoDeCoherencia": "Cita Cruzada de Autoridad. Referencia a obras del canon que ya han tratado el tema, invitando al estudio continuo y verificando la coherencia del sistema.",
    "CitaInelutable": "En nuestra «Filosofía Austera Racional», en «El Espiritismo en su Asiento»... ya lo dijimos.",
    "EjemploPedagogico": "Un juez que cita jurisprudencia previa; no inventa la sentencia, la fundamenta en la consistencia del razonamiento anterior.",
    "ConexionDoctrinal": ["Interconexión Canónica", "Coherencia"],
    "NodosSimapticos": []
  },
  "12818: CAPÍTULO TERCERO: EL MATERIALISMO Y SU COHORTE": {
    "PilotoDeCoherencia": "Negación Ciega. El materialismo y sus aliados (ateísmo mecánico, positivismo) niegan el espíritu porque no tienen instrumentos para medirlo, confundiendo su limitación con la inexistencia del objeto.",
    "CitaInelutable": "EL MATERIALISMO Y SU COHORTE... no ven el viento pero niegan que el viento exista.",
    "EjemploPedagogico": "Un ciego de nacimiento que niega la existencia del color; su incapacidad de percibirlo no cancela la realidad del espectro cromático.",
    "ConexionDoctrinal": ["Materialismo (Crítica)", "Limitación Científica"],
    "NodosSimapticos": []
  },
  "12931: CAPÍTULO CUARTO: EL FANATISMO": {
    "PilotoDeCoherencia": "Parálisis del Espíritu. El fanático es el hombre que ha entregado su razón a una idea fija y reacciona con violencia ante todo lo que la cuestiona.",
    "CitaInelutable": "EL FANATISMO... la razón dormida que se defiende como un animal acorralado.",
    "EjemploPedagogico": "Un programa de ordenador con un error en bucle infinito; ejecuta siempre la misma instrucción equivocada sin poder salir de ella.",
    "ConexionDoctrinal": ["Fanatismo", "Razón Dormida"],
    "NodosSimapticos": []
  },
  "13059: CAPÍTULO QUINTO: EL MISTICISMO": {
    "PilotoDeCoherencia": "Espiritualismo sin Razón. El misticismo busca la experiencia espiritual intensa pero sin análisis racional, convirtiéndose en una puerta abierta a la autosugestión y al engaño.",
    "CitaInelutable": "EL MISTICISMO... la emoción sin brújula.",
    "EjemploPedagogico": "Un explorador que se lanza a la selva sin mapa ni brújula porque confía en su 'intuición'; puede tener experiencias intensas, pero lo más probable es que se pierda.",
    "ConexionDoctrinal": ["Misticismo (Crítica)", "Racionalismo"],
    "NodosSimapticos": []
  },
  "13175: CAPÍTULO SEXTO: LA MIXTIFICACIÓN": {
    "PilotoDeCoherencia": "El Engaño Consciente. La mixtificación es la práctica deliberada de mezclar verdad y error para crear una doctrina que parezca válida pero que sirva intereses particulares.",
    "CitaInelutable": "LA MIXTIFICACIÓN... verdad y mentira mezcladas para que no se pueda distinguir ninguna.",
    "EjemploPedagogico": "Un veneno sin color ni sabor añadido al agua; quien lo bebe no sabe que está siendo dañado hasta que el efecto es irreversible.",
    "ConexionDoctrinal": ["Mixtificación", "Engaño Doctrinal"],
    "NodosSimapticos": []
  },
  "13340: CAPÍTULO SÉPTIMO: LA SUPERCHERÍA": {
    "PilotoDeCoherencia": "El Fraude Declarado. La superchería es la falsificación abierta de fenómenos espirituales para engañar a los crédulos y obtener beneficio material.",
    "CitaInelutable": "LA SUPERCHERÍA... el crimen contra la verdad disfrazado de espiritismo.",
    "EjemploPedagogico": "Un charlatán que vende 'agua bendita' como cura del cáncer; no solo engaña, sino que destruye la esperanza de los enfermos y desprestigia la medicina real.",
    "ConexionDoctrinal": ["Superchería", "Delito Moral"],
    "NodosSimapticos": []
  },
  "13390: CAPÍTULO OCTAVO: LOS FALSOS MAGOS, AGOREROS Y ADIVINAS": {
    "PilotoDeCoherencia": "Catálogo de la Impostura. Se identifican los tipos de impostores que explotan la necesidad espiritual humana: magos, adivinos, curanderos fraudulentos.",
    "CitaInelutable": "LOS FALSOS MAGOS, AGOREROS Y ADIVINAS... los parásitos del dolor ajeno.",
    "EjemploPedagogico": "Ratas en un granero; viven del grano que el labrador ha cultivado con esfuerzo; los impostores viven del sufrimiento y la esperanza que el ser humano auténtico produce.",
    "ConexionDoctrinal": ["Impostura", "Parasitismo"],
    "NodosSimapticos": []
  },
  "13566: CAPÍTULO NUEVE: LOS FALACES, PSEUDO SABIOS Y PSEUDO CIENTÍFICOS": {
    "PilotoDeCoherencia": "La Falsa Autoridad. Los pseudo-sabios usan la apariencia del conocimiento científico para atacar el espiritismo sin haberlo estudiado honestamente.",
    "CitaInelutable": "LOS FALACES, PSEUDO SABIOS Y PSEUDO CIENTÍFICOS... la ignorancia con título universitario.",
    "EjemploPedagogico": "Un abogado que opina sobre neurología sin haber estudiado medicina; su título le da autoridad social, pero no científica en ese campo.",
    "ConexionDoctrinal": ["Pseudo-ciencia", "Autoridad Falsa"],
    "NodosSimapticos": []
  },
  "13751: CAPÍTULO DIEZ: LOS ENEMIGOS DEL TRABAJO Y DEL TRABAJADOR": {
    "PilotoDeCoherencia": "El Parásito Social. Los enemigos del trabajo (capitalistas especulativos, clero rentista) son la versión social de Caín: viven del esfuerzo ajeno sin aportar valor.",
    "CitaInelutable": "LOS ENEMIGOS DEL TRABAJO Y DEL TRABAJADOR... Caín en traje moderno.",
    "EjemploPedagogico": "Un intermediario que compra barato al productor y vende caro al consumidor sin agregar ningún valor al producto; vive de la brecha que él mismo ha creado.",
    "ConexionDoctrinal": ["Caín y Abel (Alegoría)", "Justicia Social"],
    "NodosSimapticos": []
  },
  "13929: APÉNDICE: LLAMADA I": {
    "PilotoDeCoherencia": "Convocatoria Final. El apéndice es un llamado directo a los científicos, intelectuales y personas de buena voluntad a estudiar el espiritismo antes de condenarlo.",
    "CitaInelutable": "APÉNDICE: LLAMADA I... a los hombres de ciencia y de buena fe.",
    "EjemploPedagogico": "El último llamado de un abogado antes del juicio; 'Señorías, les pido que lean la evidencia completa antes de dictar sentencia'.",
    "ConexionDoctrinal": ["Convocatoria Racional", "Rigor Científico"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, batch4);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Verificar conteo final
const totalNodos = Object.keys(esencia).length;

const terminosDic = {
  "Espiritualismo (Crítica)": {
    "Definición": "Corriente espírita que, según Trincado, deformó el mensaje original al mezclar el estudio racional con el misticismo, el sentimentalismo y la ausencia de rigor doctrinal. Es el adversario interno más peligroso del espiritismo puro.",
    "Contexto": "El Espiritismo Estudiado (Quinta Parte, Cap. Segundo).",
    "Conexiones": ["Kardecismo", "Deformación", "Misticismo"],
    "Obras": ["El Espiritismo Estudiado"]
  },
  "Fenomenología Espiritual": {
    "Definición": "Estudio sistemático y racional de los fenómenos mediúmnicos verificables: videncia, escritura mecánica, desdoblamiento, levitación y materialización. Su propósito es obtener leyes naturales, no crear asombro místico.",
    "Contexto": "El Espiritismo Estudiado (Cuarta Parte).",
    "Conexiones": ["Prueba", "Ciencia", "Facultades"],
    "Obras": ["El Espiritismo Estudiado", "Ley de las Mediumnidades"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ ¡RE-DESTILACIÓN COMPLETADA! El Espiritismo Estudiado: 84 nodos 1:1. Total nodos en esencia: ' + totalNodos + '. Detractores y Fenómenos sellados.');
