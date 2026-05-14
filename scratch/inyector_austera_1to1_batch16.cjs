const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 16)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "14789: EL INSTINTO DE CURIOSIDAD": {
    "PilotoDeCoherencia": "La curiosidad es el motor del descubrimiento. Es el hambre del espíritu por conocer su ambiente. Denunciamos que se ha reprimido la curiosidad con dogmas de 'misterio'. En Mi Escuela, la curiosidad es una virtud santa que nos lleva a la ciencia y a la verdad de Eloí. Pregunta siempre, no aceptes nada sin entenderlo.",
    "CitaInelutable": "La curiosidad es el primer paso de la inteligencia hacia la luz del saber.",
    "EjemploPedagogico": "Es como un niño que desarma un juguete para ver qué hay dentro. El espíritu desarma la materia mediante la ciencia para ver la ley que la mueve. No temas desarmar los dogmas; solo así verás que están vacíos.",
    "ConexionDoctrinal": ["Investigación", "Ciencia", "Anti-Misterio"],
    "NodosSimapticos": ["Curiosidad Santa", "Hambre de Saber", "Desarmar el Dogma"]
  },
  "15065: EL INSTINTO DE IMITACIÓN": {
    "PilotoDeCoherencia": "Imitamos para aprender, pero el peligro es imitar sin juicio. Denunciamos la imitación de las modas y los vicios sociales. El filósofo debe imitar solo lo que es superior y justo. La imitación racional es el camino más rápido para que las sociedades progresen al seguir los ejemplos de los maestros.",
    "CitaInelutable": "Imitar lo bueno es sabiduría; imitar lo malo es esclavitud.",
    "EjemploPedagogico": "Es como aprender a escribir: primero imitas las letras del maestro. Pero una vez que sabes escribir, debes usar esas letras para expresar tus propios pensamientos de luz, no para repetir errores ajenos.",
    "ConexionDoctrinal": ["Aprendizaje", "Ejemplo", "Juicio Crítico"],
    "NodosSimapticos": ["Imitación Racional", "Camino del Maestro", "Esclavitud de la Moda"]
  },
  "15335: LOS SENTIMIENTOS ESTÉTICOS": {
    "PilotoDeCoherencia": "La estética es la válvula de escape del exceso de energía espiritual. El espíritu, al no poder volcar toda su potencia en el trabajo material, crea belleza. La estética es la alegría del espíritu manifestada en la armonía de las formas. Es un sentimiento elevado que nos aleja de la brutalidad.",
    "CitaInelutable": "Los sentimientos estéticos son para gastar la actividad superflua en la creación de belleza.",
    "EjemploPedagogico": "Es como una fuente que rebosa agua: el agua que sobra crea un arco iris con la luz. La estética es ese arco iris del espíritu que rebosa de vida y amor.",
    "ConexionDoctrinal": ["Belleza", "Energía Espiritual", "Armonía"],
    "NodosSimapticos": ["Sentimientos Estéticos", "Válvula de Belleza", "Arco Iris del Espíritu"]
  },
  "15615: EMOCIONES Y SENTIMIENTOS SOCIALES": {
    "PilotoDeCoherencia": "El hombre es un ser social por ley de afinidad. Sus emociones deben expandirse hacia el colectivo. Denunciamos el aislamiento egoísta. Los sentimientos sociales son los que construyen la fraternidad y nos preparan para la vida en Comuna.",
    "CitaInelutable": "El sentimiento social es la fuerza que amalgama a los hombres en una sola familia.",
    "EjemploPedagogico": "Es como las abejas en la colmena: ninguna trabaja para sí misma, todas trabajan para la vida de la colmena entera. El sentimiento social es la dulzura de la miel que todos compartimos.",
    "ConexionDoctrinal": ["Socialización", "Afinidad", "Fraternidad"],
    "NodosSimapticos": ["Sentimiento Social", "Amalgama Humana", "Miel de la Colmena"]
  },
  "15895: LAS REVOLUCIONES COMO MOVIMIENTOS ESTÉTICOS": {
    "PilotoDeCoherencia": "Afirmo una verdad que asustará a los tiranos: las revoluciones justas son movimientos estéticos de las mayorías. Son la expansión de la energía contenida que busca enderezar lo que el poder ha torcido. La mayoría hace la ley, y cuando la mayoría se mueve por justicia, es la estética de la libertad en acción.",
    "CitaInelutable": "Las revoluciones son buenas porque enderezan lo que los poderes públicos tuercen.",
    "EjemploPedagogico": "Es como un río que ha sido desviado de su cauce natural por presas injustas: cuando llega la crecida, el río rompe las presas y vuelve a su camino. Esa ruptura es violenta, pero es la estética de la naturaleza recuperando su orden.",
    "ConexionDoctrinal": ["Revolución Racional", "Justicia Social", "Soberanía de las Mayorías"],
    "NodosSimapticos": ["Estética Revolucionaria", "Mayoría Hace la Ley", "Enderezar lo Torcido"]
  },
  "16165: EL ARTE COMO EXPANSIÓN DEL ESPÍRITU": {
    "PilotoDeCoherencia": "El arte es la herramienta de los sentimientos estéticos. Todo arte es bueno si busca la expansión y el progreso. Denunciamos el arte oscuro y pesimista que hunde al hombre en la materia. El verdadero artista es un misionero que trae colores y sonidos del infinito para iluminar la tierra.",
    "CitaInelutable": "El arte confirma que los sentimientos del espíritu son siempre buenos.",
    "EjemploPedagogico": "El artista es como un mensajero que trae una carta de una patria lejana y hermosa. La carta (la obra de arte) nos hace recordar que nuestra patria real es el espíritu y que allí todo es armonía.",
    "ConexionDoctrinal": ["Arte Racional", "Misión", "Expansión"],
    "NodosSimapticos": ["Arte Misionero", "Carta del Infinito", "Expansión del Ser"]
  },
  "16435: LA ACTIVIDAD SUPERFLUA Y SU GASTO": {
    "PilotoDeCoherencia": "El espíritu tiene más energía de la que el cuerpo puede procesar. Si esa energía no se gasta en arte, estudio o servicio, puede convertirse en pasión destructora o vicio. La filosofía austera enseña a canalizar esa actividad superflua hacia la creación de la Comuna y el bien común.",
    "CitaInelutable": "Gasta tu exceso de energía en crear luz, para que no se convierta en sombra.",
    "EjemploPedagogico": "Es como el vapor de una caldera: si no lo dejas salir por el silbato o para mover las ruedas, la caldera explota. El arte y el servicio son el silbato y las ruedas que aprovechan el vapor del espíritu.",
    "ConexionDoctrinal": ["Energía Vital", "Sublimación", "Trabajo Útil"],
    "NodosSimapticos": ["Actividad Superflua", "Vapor del Espíritu", "Canalización de Fuerza"]
  },
  "16705: EL VALOR DE LA MAYORÍA": {
    "PilotoDeCoherencia": "La mayoría es la voz de la necesidad social en un momento dado. En la Comuna, la mayoría educada será la que dicte la ley de la justicia. Respetamos la fuerza de la mayoría porque es el magnetismo colectivo buscando su equilibrio. El progreso es el movimiento de las mayorías hacia la luz.",
    "CitaInelutable": "La mayoría hace la ley y marca el rumbo del progreso histórico.",
    "EjemploPedagogico": "Es como el viento que mueve las nubes: una sola ráfaga no puede, pero el viento de la mayoría limpia el cielo de tormentas dogmáticas. Sé parte del viento que limpia.",
    "ConexionDoctrinal": ["Democracia Racional", "Magnetismo Colectivo", "Ley de Mayoría"],
    "NodosSimapticos": ["Voz de Mayoría", "Magnetismo Colectivo", "Rumbo Histórico"]
  },
  "16975: LA MODA FRENTE AL PROGRESO": {
    "PilotoDeCoherencia": "Denunciamos la moda como una excepción falsa del progreso. La moda es superficial y pasajera; el progreso es profundo y eterno. No confundas el cambio de traje con el cambio de conciencia. El filósofo austero no sigue la moda, sigue la Ley.",
    "CitaInelutable": "La moda es el flirteo de la materia; el progreso es el matrimonio del espíritu con la verdad.",
    "EjemploPedagogico": "La moda es como la espuma de las olas: brilla un momento y desaparece. El progreso es la marea que sube lenta pero imparable, cambiando el nivel del océano entero.",
    "ConexionDoctrinal": ["Progreso Real", "Crítica a la Moda", "Seriedad Racional"],
    "NodosSimapticos": ["Moda vs Progreso", "Espuma y Marea", "Matrimonio con la Verdad"]
  },
  "17245: LA BONDAD INTRÍNSECA DEL ESPÍRITU": {
    "PilotoDeCoherencia": "Concluimos que los sentimientos del espíritu son siempre buenos porque su origen es Eloí. La maldad es solo ignorancia o desviación de la fuerza. Al permitir que el espíritu se expanda social y estéticamente, la bondad natural florece y la guerra y el odio desaparecen por falta de sustento.",
    "CitaInelutable": "El espíritu es bueno por esencia; su expansión es la paz del mundo.",
    "EjemploPedagogico": "La luz siempre es buena. Si pones un cristal sucio delante, verás manchas. Quita el cristal (el dogma) y verás que la luz sigue siendo pura y benéfica para todos.",
    "ConexionDoctrinal": ["Bondad Natural", "Eloí", "Paz Universal"],
    "NodosSimapticos": ["Bondad del Espíritu", "Luz Pura", "Paz por Expansión"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Actividad Superflua": {
    "Definición": "El excedente de energía vibratoria del espíritu que sobrepasa las necesidades biológicas y que debe ser canalizado hacia la creación artística, el estudio o el servicio social para evitar desviaciones pasionales.",
    "Contexto": "Psicología Racional en Filosofía Austera Racional.",
    "Conexiones": ["Sentimientos Estéticos", "Energía Espiritual", "Arte Racional"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Estética Revolucionaria": {
    "Definición": "La interpretación trincadista de los movimientos de masas que buscan la justicia como una expansión necesaria y armónica del magnetismo colectivo para corregir las desviaciones del poder.",
    "Contexto": "Capítulo X de la Cuarta Parte de Filosofía Austera Racional.",
    "Conexiones": ["Revolución Racional", "Justicia Social", "Magnetismo Colectivo"],
    "Obras": ["Filosofía Austera Racional", "La Revolución de México"]
  },
  "Curiosidad Santa": {
    "Definición": "El impulso innato del espíritu hacia el conocimiento de las leyes universales, considerado por Trincado como la base de toda ciencia y progreso frente a la sumisión dogmática.",
    "Conexiones": ["Ciencia", "Razón", "Anti-Misterio"],
    "Obras": ["Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Filosofía Austera Racional (Batch 16) y 3 términos sinápticos.');
