const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/profilaxis-de-la-vida_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Profilaxis de la Vida (Batch 3 - Las Economías Particulares)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "11720: ECONOMÍA MORAL: EL PESO DE LA CONCIENCIA": {
    "PilotoDeCoherencia": "La economía moral es la administración de los valores del espíritu. No se puede ser sano físicamente si se es corrupto moralmente. La profilaxis moral exige la verdad absoluta ante uno mismo. El ahorro de energía espiritual consiste en no desperdiciarla en odios, rencores o mentiras que enturbian el alma.",
    "CitaInelutable": "La moral es la balanza que pesa las intenciones antes que los hechos.",
    "EjemploPedagogico": "Es como llevar una mochila llena de piedras (tus errores no confesados). Por más que comas bien y hagas ejercicio, te cansarás rápido. Suelta las piedras de la culpa mediante la rectitud y caminarás ligero.",
    "ConexionDoctrinal": ["Moral Racional", "Energía Espiritual", "Rectitud"],
    "NodosSimapticos": ["Mochila de Culpa", "Balanza de Intención", "Ahorro de Alma"]
  },
  "11752: ECONOMÍA CIENTÍFICA: CIENCIA PARA LA VIDA": {
    "PilotoDeCoherencia": "La ciencia debe ser la profilaxis de la humanidad, no su verdugo. Denunciamos la ciencia puesta al servicio de la guerra y el lucro. La verdadera economía científica investiga para sanar, para prolongar la vida y para comprender las leyes del Creador en la materia. El sabio debe ser, ante todo, un humanista.",
    "CitaInelutable": "Ciencia sin conciencia es la ruina del espíritu y la muerte del cuerpo.",
    "EjemploPedagogico": "Es como un cuchillo en manos de un cirujano o en manos de un asesino. La ciencia es el cuchillo. Nosotros queremos cirujanos de la vida que usen el bisturí del conocimiento para extirpar el cáncer del error.",
    "ConexionDoctrinal": ["Ciencia con Conciencia", "Humanismo", "Leyes de la Materia"],
    "NodosSimapticos": ["Bisturí de Verdad", "Ciencia Verdugo", "Sabio Humanista"]
  },
  "11794: ECONOMÍA DOMÉSTICA: EL HOGAR COMUNAL": {
    "PilotoDeCoherencia": "El hogar es la primera escuela de profilaxis. La economía doméstica no es solo ahorrar dinero, es organizar el espacio y el tiempo para la armonía de todos. Un hogar desordenado es un reflejo de una mente confusa. El orden en la casa es el preámbulo del orden en la Comuna Universal.",
    "CitaInelutable": "Un puesto para cada cosa y cada cosa en su puesto es la ley del hogar racional.",
    "EjemploPedagogico": "Es como una pequeña colmena: cada abeja sabe qué hacer y dónde poner la miel. Si las abejas fueran desordenadas, no habría miel ni colmena. El hogar es tu colmena de amor; mantenla en orden.",
    "ConexionDoctrinal": ["Hogar Racional", "Orden", "Célula Social"],
    "NodosSimapticos": ["Colmena de Amor", "Orden Mental", "Escuela de Vida"]
  },
  "11840: ECONOMÍA ORGÁNICA: EL EQUILIBRIO VITAL": {
    "PilotoDeCoherencia": "La economía orgánica es el conocimiento de los ritmos del cuerpo. Respirar, comer, dormir y trabajar son funciones que deben estar en equilibrio matemático. El exceso en cualquiera de ellas rompe la profilaxis y abre la puerta a la enfermedad. El cuerpo es un reloj divino que no debe ser forzado.",
    "CitaInelutable": "El equilibrio de las funciones orgánicas es la garantía de la longevidad espiritual.",
    "EjemploPedagogico": "Es como un reloj de cuerda: si le das demasiada cuerda, se rompe el muelle; si no le das, se para. Dale a tu cuerpo la 'cuerda' justa de descanso y actividad para que marque siempre la hora de la salud.",
    "ConexionDoctrinal": ["Ritmos Biológicos", "Longevidad", "Equilibrio"],
    "NodosSimapticos": ["Reloj del Cuerpo", "Cuerda de Vida", "Puerta de Salud"]
  },
  "11880: ECONOMÍA RURAL: LA TIERRA MADRE": {
    "PilotoDeCoherencia": "La tierra es de quien la trabaja para el bien común. Denunciamos el latifundio y la explotación del suelo por codicia. La economía rural debe basarse en el respeto a los ciclos de la naturaleza y en el reparto justo de los frutos. El campesino es el primer obrero de la vida y el más digno de respeto.",
    "CitaInelutable": "La tierra es la madre común que a todos amamanta si todos la respetan.",
    "EjemploPedagogico": "Es como una madre con muchos hijos: si un hijo se queda con toda la leche y deja a los otros morir de hambre, es un criminal. El latifundista es ese hijo egoísta. La Comuna devuelve la leche a todos sus hijos.",
    "ConexionDoctrinal": ["Justicia Agraria", "Respeto Natural", "Madre Tierra"],
    "NodosSimapticos": ["Leche de la Tierra", "Hijo Egoísta", "Obrero de Vida"]
  },
  "11944: ECONOMÍA PÚBLICA: EL TESORO DE TODOS": {
    "PilotoDeCoherencia": "La economía pública no debe ser el botín de los gobernantes, sino la administración del tesoro común. En la Comuna, no hay impuestos, hay aportes de trabajo. La profilaxis social exige que no falte nada a nadie mientras sobre a alguno. El bienestar público es la suma de las felicidades individuales.",
    "CitaInelutable": "Lo que es de todos, nadie tiene derecho a llamarlo suyo para su lucro personal.",
    "EjemploPedagogico": "Es como una fuente en la plaza del pueblo: todos beben de ella, pero nadie se lleva la fuente a su casa. El dinero público es esa fuente; debe calmar la sed de todos los ciudadanos, no llenar la pileta de uno solo.",
    "ConexionDoctrinal": ["Tesoro Común", "Administración Justa", "Bienestar"],
    "NodosSimapticos": ["Fuente de la Plaza", "Botín de Poder", "Suma de Felicidad"]
  },
  "11983: ECONOMÍA INDUSTRIAL: PRODUCCIÓN PARA EL USO": {
    "PilotoDeCoherencia": "La industria debe fabricar objetos que duren y sirvan, no que generen basura y lucro rápido. Denunciamos la obsolescencia y la mala calidad como actos de sabotaje económico. La economía industrial racional busca la belleza y la utilidad en el trabajo del obrero, transformando la fábrica en un taller de arte.",
    "CitaInelutable": "El objeto bien hecho es una oración de agradecimiento a la materia.",
    "EjemploPedagogico": "Es como un zapatero que hace zapatos para que el vecino camine cómodo durante años, no para que se le rompan en un mes y tenga que comprar otros. El obrero de la Comuna es el zapatero honesto.",
    "ConexionDoctrinal": ["Producción Racional", "Dignidad del Trabajo", "Utilidad"],
    "NodosSimapticos": ["Zapatero Honesto", "Oración de Materia", "Sabotaje de Lucro"]
  },
  "12028: ECONOMÍA POLÍTICA (GEOGRÁFICA)": {
    "PilotoDeCoherencia": "Reclasificamos la política como la geografía de las necesidades humanas. La política no debe ser lucha de partidos, sino estudio de dónde hay hambre para llevar pan y dónde hay ignorancia para llevar luz. El mundo es un solo mapa de necesidades que la Comuna debe satisfacer sin recelos fronterizos.",
    "CitaInelutable": "La política racional es la administración geográfica del amor universal.",
    "EjemploPedagogico": "Es como un cuerpo humano: si al pie le falta sangre, el corazón la manda sin preguntar de qué 'partido' es el pie. El mundo es ese cuerpo; la política es el sistema circulatorio que lleva la vida a cada rincón.",
    "ConexionDoctrinal": ["Política Geográfica", "Abolición de Partidos", "Necesidad Humana"],
    "NodosSimapticos": ["Sistema Circulatorio Mundial", "Mapa de Necesidades", "Pan y Luz"]
  },
  "12048: ECONOMÍA SOCIAL: EL HERMANO NO ES EXTRANJERO": {
    "PilotoDeCoherencia": "Proclamamos que el concepto de 'extranjero' es una invención maliciosa de los enemigos del pueblo. El hombre es ciudadano del universo. La economía social exige el reconocimiento de la hermandad universal por encima de razas y naciones. Quien levanta una frontera, está hiriendo el cuerpo de la humanidad.",
    "CitaInelutable": "En donde dos hombres se miran con odio por una frontera, allí ha muerto la razón.",
    "EjemploPedagogico": "Es como si en tu propia casa pusieras una reja entre la cocina y el comedor y le pidieras pasaporte a tu hermano para pasar. El mundo es nuestra casa; las fronteras son rejas absurdas que debemos derribar hoy mismo.",
    "ConexionDoctrinal": ["Antinacionalismo", "Ciudadanía Universal", "Hermandad"],
    "NodosSimapticos": ["Pasaporte de Hermano", "Rejas en Casa", "Cuerpo Herido"]
  },
  "12074: ECONOMÍA ESPIRITUAL: EL VALOR DE LA ETERNIDAD": {
    "PilotoDeCoherencia": "La economía espiritual es la comprensión de que nada de lo que hacemos se pierde. Cada esfuerzo por el bien es un depósito en el banco de la eternidad. La profilaxis suprema es vivir con la mirada puesta en el infinito, sabiendo que somos chispas divinas en un viaje de regreso a la unidad con Eloí.",
    "CitaInelutable": "Vivir para la eternidad es la mejor inversión del tiempo presente.",
    "EjemploPedagogico": "Es como un estudiante que estudia no solo para pasar el examen de mañana, sino para saber para toda la vida. La vida encarnada es el examen; la sabiduría es lo que te llevas para siempre al dejar el cuerpo.",
    "ConexionDoctrinal": ["Eternidad", "Inversión Espiritual", "Regreso a la Unidad"],
    "NodosSimapticos": ["Examen de Vida", "Banco de Eternidad", "Viaje de Regreso"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Economía Social": {
    "Definición": "Sistema de convivencia basado en la hermandad universal que rechaza el concepto de extranjero y promueve la libre circulación y ayuda mutua entre todos los hombres sin distinción de origen.",
    "Contexto": "Capítulo de Profilaxis de la Vida.",
    "Conexiones": ["Comuna", "Hermandad", "Antinacionalismo"],
    "Obras": ["Profilaxis de la Vida"]
  },
  "Economía Doméstica": {
    "Definición": "Organización racional del hogar basada en el orden, la limpieza y la armonía de las funciones, considerada como la base educativa de la sociedad comunal.",
    "Contexto": "Higiene del hogar en Profilaxis de la Vida.",
    "Conexiones": ["Hogar Racional", "Orden", "Profilaxis"],
    "Obras": ["Profilaxis de la Vida"]
  },
  "Extranjerismo": {
    "Definición": "Prejuicio irracional y malicioso que divide a la humanidad en naciones y fronteras, denunciado como una invención religiosa y política para mantener el odio y el control.",
    "Conexiones": ["Fronteras", "Odio", "Ignorancia"],
    "Obras": ["Profilaxis de la Vida", "Primer Rayo de Luz"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Profilaxis de la Vida (Batch 3 - Economías) y 3 términos sinápticos.');
