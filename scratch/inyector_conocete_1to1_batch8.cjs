const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Conócete a ti mismo (Batch 8 - Historia y Religiones)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "8956: EL HUNDIMIENTO DE LA ATLÁNTIDA": {
    "PilotoDeCoherencia": "El hundimiento de la Atlántida no fue un castigo, sino un ajuste geológico y magnético necesario para el cambio de etapa. Los atlantes poseían una ciencia avanzada pero sin el equilibrio del amor. Su desaparición obligó a los sobrevivientes a dispersarse y empezar de nuevo en condiciones rústicas para aprender el valor del esfuerzo propio.",
    "CitaInelutable": "La Atlántida se hundió bajo el peso de su propia ciencia sin conciencia.",
    "EjemploPedagogico": "Es como un edificio mal construido: por más que tenga adornos de oro, si los cimientos no son de justicia, terminará cayendo. El océano fue el barrendero de Eloí que limpió el solar para la nueva construcción humana.",
    "ConexionDoctrinal": ["Atlántida", "Cambio Magnético", "Ciencia sin Amor"],
    "NodosSimapticos": ["Barrendero de Eloí", "Cimientos de Justicia", "Solar Limpio"]
  },
  "9086: ADÁN Y EVA: LA INVESTIGACIÓN": {
    "PilotoDeCoherencia": "Despojamos a Adán y Eva del mito bíblico. Fueron los líderes de una migración de espíritus que llegaron a la Tierra en un momento crítico. No hubo serpientes ni manzanas, sino la lucha por la supervivencia y el despertar de la responsabilidad procreadora. Adán es el símbolo del espíritu que asume el mando de la materia.",
    "CitaInelutable": "Adán y Eva: los primeros pedagogos de la procreación consciente.",
    "EjemploPedagogico": "Es como los pioneros que llegan a una tierra virgen: deben trabajar duro, sufrir el clima y organizar la casa. No son dioses, son hermanos mayores que nos enseñaron a ser hombres en este mundo.",
    "ConexionDoctrinal": ["Adán y Eva", "Migración Espiritual", "Responsabilidad"],
    "NodosSimapticos": ["Pioneros del Mundo", "Tierra Virgen", "Pedagogos de Vida"]
  },
  "9209: ABRAHAM Y LA LEY DEL SINAÍ": {
    "PilotoDeCoherencia": "Abraham marca el inicio de la línea de justicia que culminaría en la Escuela. La Ley del Sinaí fue un código de orden social necesario para sacar al pueblo de la idolatría egipcia. El decálogo es el preámbulo de la Ley de Amor, adaptado a la dureza de los corazones de aquel tiempo.",
    "CitaInelutable": "El Sinaí fue el primer grito de libertad contra la esclavitud del dogma.",
    "EjemploPedagogico": "Es como un reglamento escolar para niños rebeldes: 'no robes', 'no mates'. Son reglas básicas porque el niño aún no entiende el amor. Moisés puso el orden; nosotros ponemos la luz.",
    "ConexionDoctrinal": ["Ley del Sinaí", "Orden Social", "Idolatría"],
    "NodosSimapticos": ["Reglamento de Niños", "Grito de Libertad", "Preámbulo de Amor"]
  },
  "9407: DE MOISÉS A JESÚS": {
    "PilotoDeCoherencia": "Este periodo es la lucha constante entre los profetas (espíritus de luz) y los sacerdotes (mercaderes del dogma). Jesús vino a cumplir la ley, no a fundar una religión. Su mensaje fue la fraternidad universal, pero fue distorsionado por los mismos intereses que combatieron a Moisés.",
    "CitaInelutable": "Jesús es el hermano mayor, no el Dios de los templos.",
    "EjemploPedagogico": "Es como un reformador que viene a limpiar una casa llena de basura y los inquilinos lo matan para seguir viviendo en la suciedad. Jesús trajo la escoba de la verdad; la Iglesia la convirtió en un cetro de oro.",
    "ConexionDoctrinal": ["Jesús Hombre", "Lucha Profética", "Mercaderes del Templo"],
    "NodosSimapticos": ["Escoba de Verdad", "Inquilinos del Error", "Hermano Mayor"]
  },
  "9659: DEL ANTICRISTO AL JUICIO FINAL": {
    "PilotoDeCoherencia": "Identificamos al 'Anticristo' como la suma de todas las religiones que han negado la vida de Jesús en los hombres. El Juicio Final no es el fin del mundo físico, sino el fin de la ignorancia y el inicio de la era de la Razón. El Espíritu de Verdad ya está aquí para sentenciar al error.",
    "CitaInelutable": "El juicio es la liquidación de las deudas del pasado para entrar en la Comuna.",
    "EjemploPedagogico": "Es como el cierre de un año escolar: hay exámenes, hay notas y algunos pasan de grado mientras otros deben repetir. El Juicio es la entrega de notas de la humanidad.",
    "ConexionDoctrinal": ["Anticristo", "Juicio Final", "Espíritu de Verdad"],
    "NodosSimapticos": ["Notas de Humanidad", "Examen de Era", "Sentencia al Error"]
  },
  "10114: ORIGEN DE LAS RELIGIONES": {
    "PilotoDeCoherencia": "Las religiones nacieron del miedo y la ignorancia de los hombres ante los fenómenos naturales. Los astutos aprovecharon ese miedo para crear castas sacerdotales y dominar a los pueblos. La religión es la infancia intelectual de la humanidad que se niega a crecer.",
    "CitaInelutable": "La religión es el negocio de la ignorancia administrado por la malicia.",
    "EjemploPedagogico": "Es como un niño que le tiene miedo a la oscuridad y un adulto le dice que hay un monstruo, pero que si le da sus dulces, el monstruo no le hará nada. La religión es ese adulto mentiroso; el miedo es la oscuridad.",
    "ConexionDoctrinal": ["Miedo", "Dominación Sacerdotal", "Infancia Intelectual"],
    "NodosSimapticos": ["Negocio de Ignorancia", "Monstruo del Miedo", "Dulces del Dogma"]
  },
  "10261: LAS RELIGIONES EN PARTICULAR": {
    "PilotoDeCoherencia": "Analizamos las religiones como facciones que se dividen el botín de la conciencia humana. Todas pretenden tener la verdad, pero todas adoran la forma y el dinero. Denunciamos su hipocresía al hablar de amor mientras bendicen las armas de la guerra.",
    "CitaInelutable": "Cada religión es un muro que separa al hombre de su hermano.",
    "EjemploPedagogico": "Es como un grupo de herederos que se pelean por la fortuna del padre (la verdad) sin haber trabajado nunca por ella. Cada uno dice ser el favorito mientras rompen la casa familiar. No hay herederos, solo trabajadores.",
    "ConexionDoctrinal": ["Hipocresía", "División", "Codicia"],
    "NodosSimapticos": ["Botín de Conciencia", "Muros de Odio", "Herederos del Error"]
  },
  "10743: LA IDOLATRÍA RELIGIOSA": {
    "PilotoDeCoherencia": "Toda religión es idólatra porque busca a Dios en imágenes, ritos y hombres vestidos de seda. El verdadero Dios (Eloí) solo se adora en el taller, en el estudio y en el servicio al prójimo. La idolatría es la ceguera del espíritu que no sabe verse a sí mismo.",
    "CitaInelutable": "Adorar a Dios en espíritu y verdad es trabajar por la humanidad.",
    "EjemploPedagogico": "Es como alguien que ama una fotografía pero desprecia a la persona real que está a su lado. La imagen es la foto; el hermano es la realidad. Deja de besar papeles y empieza a amar seres.",
    "ConexionDoctrinal": ["Idolatría", "Adoración en Espíritu", "Servicio"],
    "NodosSimapticos": ["Beso de Papel", "Persona Real", "Ceguera de Espíritu"]
  },
  "10948: CONSECUENCIAS FATALES DEL DOGMA": {
    "PilotoDeCoherencia": "El dogma es el veneno que mata la voluntad y el raciocinio. Ha causado ríos de sangre y siglos de atraso. La mayor consecuencia del dogma es el ateísmo, pues al presentar a un Dios absurdo y cruel, empuja a los hombres razonables a negar toda espiritualidad. El cura es el padre del ateo.",
    "CitaInelutable": "El dogma es la cadena que el espíritu debe romper para ser libre.",
    "EjemploPedagogico": "Es como ponerle una venda a un cirujano antes de operar: el resultado será un desastre. El dogma venda los ojos de la inteligencia y el resultado es la historia de horrores de la humanidad.",
    "ConexionDoctrinal": ["Ateísmo", "Atraso", "Veneno Dogmático"],
    "NodosSimapticos": ["Cirujano Vendado", "Padre del Ateo", "Cadena del Alma"]
  },
  "11000: EL DESPERTAR DE LA CONCIENCIA": {
    "PilotoDeCoherencia": "A pesar de las religiones, el espíritu despierta. El dolor de las guerras y la luz de la ciencia obligan al hombre a buscar la verdad fuera de los templos. Este despertar es imparable y desemboca en la Comuna Universal, donde el hombre se conocerá por fin a sí mismo.",
    "CitaInelutable": "La luz de la verdad entra por las grietas que el dolor abre en el dogma.",
    "EjemploPedagogico": "Es como una planta que rompe el pavimento de la calle para salir a buscar el sol. Las religiones son el cemento; tu espíritu es la planta. No hay cemento que pueda detener la vida del espíritu.",
    "ConexionDoctrinal": ["Despertar", "Ciencia vs Dogma", "Comuna"],
    "NodosSimapticos": ["Planta en el Cemento", "Grietas de Luz", "Sol de Justicia"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Atlántida": {
    "Definición": "Continente desaparecido que albergó una civilización avanzada en ciencia pero carente de moral racional, cuyo hundimiento marcó el fin de una era y el inicio de un nuevo ciclo de aprendizaje.",
    "Contexto": "Historia universal en Conócete a ti mismo.",
    "Conexiones": ["Ciclos", "Ciencia", "Justicia"],
    "Obras": ["Conócete a ti mismo", "Buscando a Dios"]
  },
  "Adán y Eva": {
    "Definición": "Símbolos de las primeras oleadas de espíritus que lideraron la organización social y procreadora en la Tierra, despojados de la interpretación mística del pecado original.",
    "Contexto": "Antropogénesis en Conócete a ti mismo.",
    "Conexiones": ["Espíritu", "Procreación", "Humanidad"],
    "Obras": ["Conócete a ti mismo", "Buscando a Dios"]
  },
  "Religiones (Origen)": {
    "Definición": "Sistemas de control nacidos del miedo y la ignorancia que mistifican las leyes naturales para someter la conciencia humana bajo el poder sacerdotal.",
    "Conexiones": ["Ignorancia", "Dogma", "Esclavitud"],
    "Obras": ["Conócete a ti mismo", "Primer Rayo de Luz"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Conócete a ti mismo (Batch 8 - Historia) y 3 términos sinápticos.');
