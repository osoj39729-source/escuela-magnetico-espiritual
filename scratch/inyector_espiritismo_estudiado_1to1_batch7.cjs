const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - El Espiritismo Estudiado (Batch 7 - FINAL: Detractores)
const nuevosNodos = {
  "11350: CAPÍTULO DIEZ: GRANDES Y RAROS FENÓMENOS": {
    "PilotoDeCoherencia": "Se enumeran fenómenos excepcionales que marcan hitos en la historia, no por capricho sino por necesidad pedagógica de la humanidad. Estos raros fenómenos ocurren cuando una ley espiritual requiere demostrarse físicamente para derribar un dogma enquistado que la razón no ha podido vencer.",
    "CitaInelutable": "Los grandes fenómenos son la respuesta drástica del espíritu a la sordera de la materia.",
    "EjemploPedagogico": "Es como un terremoto: no ocurre todos los días, pero cuando la tensión de las placas tectónicas (dogmas) llega a su límite, la sacudida es necesaria para reacomodar la tierra. El gran fenómeno es el terremoto espiritual.",
    "ConexionDoctrinal": ["Grandes Fenómenos", "Demostración Excepcional", "Pedagogía Cósmica"],
    "NodosSimapticos": ["Terremoto Espiritual", "Sordera de la Materia", "Acomodación de Dogmas"]
  },
  "12527: QUINTA PARTE: DETRACTORES DEL ESPIRITISMO": {
    "PilotoDeCoherencia": "Introducción a la quinta y última parte de la obra. El Maestro asume el rol de fiscal y sienta en el banquillo a todos los enemigos de la verdad, desde las instituciones hasta los vicios individuales. Esta sección es el acta de acusación que precede al establecimiento de la Comuna.",
    "CitaInelutable": "Identificar al detractor es el primer paso para curar la herida que ha causado.",
    "EjemploPedagogico": "Es como el diagnóstico médico de una infección múltiple: se enumeran todas las bacterias (detractores) antes de aplicar el antibiótico (la razón).",
    "ConexionDoctrinal": ["Detractores", "Acta de Acusación", "Diagnóstico Moral"],
    "NodosSimapticos": ["Infección Múltiple", "Banquillo de Acusados", "Antibiótico Racional"]
  },
  "12530: CAPÍTULO PRIMERO: LAS RELIGIONES": {
    "PilotoDeCoherencia": "El detractor número uno y la causa de todos los demás. La religión es la antítesis del Espiritismo porque exige fe ciega donde el Espiritismo exige razón, y decreta misterios donde el Espiritismo exige investigación. Son el negocio montado sobre la ignorancia del espíritu.",
    "CitaInelutable": "La religión es el único negocio que vende la nada cobrando con la libertad del hombre.",
    "EjemploPedagogico": "Es como un falso guía que te venda los ojos para llevarte por tu propia casa, cobrándote por cada paso. La religión vendó los ojos de la humanidad; la Escuela se los quita.",
    "ConexionDoctrinal": ["Religiones", "Fe Ciega vs Razón", "Misterio como Negocio"],
    "NodosSimapticos": ["Guía Falso", "Venta de la Nada", "Venda de la Humanidad"]
  },
  "12630: CAPÍTULO SEGUNDO: EL ESPIRITUALISMO (Y REFUTACIÓN)": {
    "PilotoDeCoherencia": "El espiritualismo (junto a sus sectas como la teosofía) es religión encubierta. Al admitir misterios y negar la sacralidad de la materia (considerándola enemiga del alma), el espiritualismo se convierte en partícipe del error católico. La amalgama de verdades y mentiras es más peligrosa que la mentira pura.",
    "CitaInelutable": "El espiritualismo es el lobo religioso disfrazado con piel de filosofía.",
    "EjemploPedagogico": "Es como beber agua envenenada: el agua es pura (ideas espirituales), pero el veneno (dogma) te mata igual. La amalgama espiritualista es el vaso envenenado.",
    "ConexionDoctrinal": ["Espiritualismo", "Amalgama", "Religión Encubierta"],
    "NodosSimapticos": ["Lobo Disfrazado", "Vaso Envenenado", "Mentira Mezclada"]
  },
  "12818: CAPÍTULO TERCERO: EL MATERIALISMO Y SU COHORTE": {
    "PilotoDeCoherencia": "El materialismo dogmático ('grosero') niega toda causa inteligente y reduce la vida a química ciega. Su cohorte son los sectarios que, sin ser científicos, se escudan en la ciencia para justificar el egoísmo. El materialista científico al menos investiga la ley de afinidad en la materia; el sectario solo usa la materia para el abuso.",
    "CitaInelutable": "El materialismo que niega el espíritu es un árbol que niega sus propias raíces.",
    "EjemploPedagogico": "Es como un habitante de un sótano que niega la existencia del sol porque solo ve los ladrillos de su cueva. El materialismo sectario es el orgullo del sótano.",
    "ConexionDoctrinal": ["Materialismo Sectario", "Negación de la Causa", "Positivismo Limitado"],
    "NodosSimapticos": ["Árbol sin Raíces", "Orgullo de Sótano", "Química Ciega"]
  },
  "12931: CAPÍTULO CUARTO: EL FANATISMO": {
    "PilotoDeCoherencia": "El fanatismo es la testarudez de la ignorancia. Es el mayor peligro de cualquier idea, porque anula la razón y justifica la violencia en nombre de un ideal (religioso, político o incluso pseudocientífico). El Espiritismo condena el fanatismo porque la verdad no necesita furor, solo demostración.",
    "CitaInelutable": "El fanatismo es la razón asesinada por la pasión ciega.",
    "EjemploPedagogico": "Es como conducir con los ojos cerrados acelerando al máximo: no importa qué tan bueno sea el coche (la idea), el choque es inevitable. El fanático pisa el acelerador sin ver el camino.",
    "ConexionDoctrinal": ["Fanatismo", "Anulación de Razón", "Pasión Ciega"],
    "NodosSimapticos": ["Conductor Ciego", "Testarudez de Ignorancia", "Razón Asesinada"]
  },
  "13059: CAPÍTULO QUINTO: EL MISTICISMO": {
    "PilotoDeCoherencia": "El misticismo es la calamidad de la inacción. El místico se abstrae de la sociedad para 'contemplar a Dios', evadiendo la ley del trabajo y el servicio a los hermanos. Dios no quiere ser contemplado en el vacío, quiere ser honrado en el trabajo y la solidaridad.",
    "CitaInelutable": "El misticismo es el egoísmo vestido de santidad.",
    "EjemploPedagogico": "Es como el soldado que en medio de la batalla se sienta a rezar en lugar de defender a sus compañeros. El místico abandona la batalla de la vida social creyendo que Dios premia al desertor.",
    "ConexionDoctrinal": ["Misticismo", "Egoísmo Contemplativo", "Evasión del Trabajo"],
    "NodosSimapticos": ["Desertor de la Vida", "Egoísmo Santo", "Inacción Abstraída"]
  },
  "13175: CAPÍTULO SEXTO: LA MIXTIFICACIÓN": {
    "PilotoDeCoherencia": "La mixtificación es la burla y la mascarada en el campo espiritual. Ocurre cuando espíritus burlones o maliciosos engañan a médiums fanáticos o místicos que no usan la razón. El mixtificador invisible no podría actuar sin el mixtificador encarnado que, por vanidad, acepta el engaño.",
    "CitaInelutable": "El fraude espiritual es el hijo de la vanidad del médium y la burla del espíritu inferior.",
    "EjemploPedagogico": "Es como un estafador telefónico: si tú le crees por codicia o inocencia (vanidad), te roba. Si le pides pruebas (razón), cuelga. La Escuela enseña a pedir pruebas siempre.",
    "ConexionDoctrinal": ["Mixtificación", "Fraude Espiritual", "Vanidad"],
    "NodosSimapticos": ["Estafador Invisible", "Burla Consentida", "Mascarada del Espíritu"]
  },
  "13340: CAPÍTULO SÉPTIMO: LA SUPERCHERÍA": {
    "PilotoDeCoherencia": "La superchería es el engaño malicioso, el dolo y el fraude comercializado. Es convertir la mediumnidad en un instrumento de retroceso. Es la máxima vergüenza porque usa una facultad dada para la luz, desviándola conscientemente hacia la explotación del dolor y la credulidad ajena.",
    "CitaInelutable": "La superchería es la prostitución de la facultad espiritual.",
    "EjemploPedagogico": "Como el cuchillo: fue inventado para limpiar alimentos (vida), pero la ira lo usa para matar. La mediumnidad es el cuchillo; el superchero es el que mata con él cobrando por la herida.",
    "ConexionDoctrinal": ["Superchería", "Fraude Comercial", "Prostitución Espiritual"],
    "NodosSimapticos": ["Cuchillo Asesino", "Comercio del Dolor", "Vergüenza del Instrumento"]
  },
  "13390: CAPÍTULO OCTAVO: LOS FALSOS MAGOS, AGOREROS Y ADIVINAS": {
    "PilotoDeCoherencia": "Es el comercio de la superstición. Aunque despreciables, el Maestro señala que son menos hipócritas que las religiones formales, pues se exponen al juicio público. Juegan con el instinto y el miedo al futuro. El futuro no se adivina: se construye con los actos del presente bajo la ley de justicia.",
    "CitaInelutable": "El que adivina el futuro, estafa tu presente.",
    "EjemploPedagogico": "Es como comprar un mapa del tesoro dibujado ayer: sabes que es falso, pero tu codicia quiere creerlo. El adivino vende mapas falsos del destino.",
    "ConexionDoctrinal": ["Falsos Magos", "Adivinación", "Comercio de Superstición"],
    "NodosSimapticos": ["Mapa Falso del Destino", "Estafa del Presente", "Comerciantes del Instinto"]
  },
  "13566: CAPÍTULO NUEVE: LOS FALACES, PSEUDO SABIOS Y PSEUDO CIENTÍFICOS": {
    "PilotoDeCoherencia": "Son aquellos que, teniendo títulos académicos, carecen de la verdadera sabiduría que da la razón libre de prejuicios. Niegan a priori los fenómenos espirituales sin investigarlos, traicionando el principio básico de la ciencia. Su ignorancia dogmática retrasa la educación del pueblo.",
    "CitaInelutable": "El sabio que niega sin investigar, ha dejado de ser sabio para convertirse en sacerdote de su propio orgullo.",
    "EjemploPedagogico": "Es como un juez que dicta sentencia sin escuchar a los testigos ni ver las pruebas porque 'ya sabe' lo que pasó. La academia materialista ha sido el juez sordo del Espiritismo.",
    "ConexionDoctrinal": ["Pseudo Sabios", "Negación a Priori", "Dogma Académico"],
    "NodosSimapticos": ["Juez Sordo", "Sacerdote del Orgullo", "Academia Dogmática"]
  },
  "13751: CAPÍTULO DIEZ: LOS ENEMIGOS DEL TRABAJO Y DEL TRABAJADOR": {
    "PilotoDeCoherencia": "La culminación del diagnóstico: el verdadero enemigo del Espiritismo es el enemigo del trabajo. Quien vive del esfuerzo ajeno (el parásito social, el capitalista explotador, el cura que cobra diezmos) odia la Comuna y el Espiritismo porque instauran la ley del trabajo universal donde el que no trabaja, no come.",
    "CitaInelutable": "El enemigo del trabajo es el enemigo del Creador, porque el Creador es el primer trabajador del universo.",
    "EjemploPedagogico": "Es como la garrapata en el perro: la garrapata odia el remedio que limpia al perro. El parásito social odia la justicia de la Comuna.",
    "ConexionDoctrinal": ["Explotación", "Parasitismo", "Ley del Trabajo Universal"],
    "NodosSimapticos": ["Garrapata Social", "Parásito del Esfuerzo", "Justicia Laboral"]
  },
  "13929: APÉNDICE: LLAMADA A LOS CIENTÍFICOS": {
    "PilotoDeCoherencia": "El cierre de la obra es una llamada directa a los hombres de ciencia genuinos: el Maestro los invita a formar centros libres de la amalgama espiritualista. Comprende que se alejaron por asco a la superchería, pero ahora, con el método y la razón que la Escuela presenta, es el deber de la ciencia investigar sin miedo el océano de la verdad.",
    "CitaInelutable": "No tengáis miedo al océano de la verdad; la Escuela os da la brújula de la razón para no naufragar en la mentira.",
    "EjemploPedagogico": "Es como decirle a los grandes navegantes: 'Sabemos que el mar estaba lleno de piratas (supercheros) y por eso no queríais navegar; pero ahora hemos limpiado el mar y os damos un barco blindado (el Espiritismo Luz y Verdad)'.",
    "ConexionDoctrinal": ["Llamada a la Ciencia", "Investigación Genuina", "Cierre de Obra"],
    "NodosSimapticos": ["Barco Blindado", "Brújula de Razón", "Océano de Verdad"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Misticismo": {
    "Definición": "Actitud contemplativa y abstracta que aísla al individuo del deber social y del trabajo, catalogada por la doctrina como 'egoísmo vestido de santidad' y calamidad espiritual.",
    "Contexto": "Capítulo V, Quinta Parte de El Espiritismo Estudiado.",
    "Conexiones": ["Egoísmo", "Religión", "Evasión"],
    "Obras": ["El Espiritismo Estudiado"]
  },
  "Mixtificación": {
    "Definición": "Fraude o engaño en el plano espiritual donde entidades inferiores se burlan de la credulidad y vanidad de médiums y experimentadores que operan sin el filtro de la razón.",
    "Contexto": "Capítulo VI, Quinta Parte de El Espiritismo Estudiado.",
    "Conexiones": ["Fraude", "Vanidad", "Superchería"],
    "Obras": ["El Espiritismo Estudiado", "Conócete a ti mismo"]
  },
  "Enemigos del Trabajo": {
    "Definición": "Todo individuo o institución que vive del usufructo del esfuerzo ajeno (parásitos sociales, explotadores, religiosos), constituyendo el adversario final de la Comuna de Amor y Ley.",
    "Contexto": "Capítulo X, Quinta Parte de El Espiritismo Estudiado.",
    "Conexiones": ["Comuna", "Justicia Laboral", "Parásitos"],
    "Obras": ["El Espiritismo Estudiado"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 13 nodos 1:1 de El Espiritismo Estudiado (Batch 7 - FINAL COMPLETA) y 3 términos sinápticos.');
