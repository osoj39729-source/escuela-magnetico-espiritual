const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/profilaxis-de-la-vida_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Profilaxis de la Vida (Batch 2 - Gaps Medios)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "3550: LA HIGIENE COMO CULTO AL CREADOR": {
    "PilotoDeCoherencia": "La higiene no es vanidad, es el respeto que el espíritu debe a la obra de Eloí. Un cuerpo sucio es un templo profanado. Denunciamos el descuido físico como una forma de pereza espiritual. La limpieza del hogar y del cuerpo atrae vibraciones de salud y claridad mental.",
    "CitaInelutable": "La limpieza es la primera ley del taller del espíritu.",
    "EjemploPedagogico": "Es como un altar: nadie pondría flores podridas en un altar. Tu cuerpo es el altar de tu espíritu; mantenlo fresco y limpio para que la luz del Padre pueda reflejarse en ti.",
    "ConexionDoctrinal": ["Higiene Corporal", "Respeto a la Obra", "Vibración"],
    "NodosSimapticos": ["Altar del Cuerpo", "Limpieza y Luz", "Pereza Física"]
  },
  "4000: EL ANCIANO DÉCIMO: LA MUJER Y SU DIGNIDAD": {
    "PilotoDeCoherencia": "El Anciano Décimo enfatiza que la mujer es el eje de la salud familiar. Su educación en profilaxis es vital para la supervivencia de la especie. La mujer debe conocer su anatomía y sus ciclos para no ser víctima de la ignorancia o del abuso dogmático.",
    "CitaInelutable": "La salud de la humanidad descansa en el conocimiento de la mujer.",
    "EjemploPedagogico": "Es como la capitana de un barco: si ella no sabe leer las cartas de navegación (las leyes de la vida), el barco (la familia) encallará en las rocas de la enfermedad. Instruye a la capitana.",
    "ConexionDoctrinal": ["Dignidad de la Mujer", "Eje Familiar", "Ciclos Naturales"],
    "NodosSimapticos": ["Capitana del Hogar", "Navegación Vital", "Instrucción Femenina"]
  },
  "4100: EL ANCIANO UNDÉCIMO: EL AIRE Y EL SOL": {
    "PilotoDeCoherencia": "El Anciano Undécimo prescribe el aire puro y el sol como los mejores medicamentos profilácticos. Denunciamos las habitaciones cerradas y oscuras de los conventos como focos de infección moral y física. Abre las ventanas: que la luz y el aire disuelvan la sombra del error.",
    "CitaInelutable": "Donde entra el sol y el aire, no entra el médico ni el cura.",
    "EjemploPedagogico": "Es como una planta guardada en un sótano: se pondrá amarilla y morirá. Saca tu espíritu al sol de la verdad y tu cuerpo al aire del campo. La naturaleza es la farmacia de Eloí.",
    "ConexionDoctrinal": ["Naturismo", "Salud Física", "Luz y Aire"],
    "NodosSimapticos": ["Farmacia de Eloí", "Sol de Verdad", "Focos de Infección"]
  },
  "4500: EL ANCIANO DUODÉCIMO: LA ALIMENTACIÓN PURA": {
    "PilotoDeCoherencia": "El Anciano Duodécimo establece que somos lo que comemos. El alimento debe ser sencillo, nutritivo y preparado con amor. Condenamos el exceso de carne y las bebidas alcohólicas que nublan el juicio y enferman la sangre. La templanza en la mesa es el principio de la sabiduría.",
    "CitaInelutable": "Alimenta tu cuerpo para que sirva a tu espíritu, no para que lo esclavice.",
    "EjemploPedagogico": "Es como el combustible de una lámpara: si usas aceite sucio, la llama será pequeña y echará humo negro. Usa aceite puro (alimento sano) y tu llama (tu inteligencia) brillará con fuerza.",
    "ConexionDoctrinal": ["Alimentación Racional", "Templanza", "Energía Vital"],
    "NodosSimapticos": ["Combustible del Ser", "Llama de Inteligencia", "Aceite Puro"]
  },
  "5500: ESCARMIENTO VS CONCIENCIA": {
    "PilotoDeCoherencia": "Aclaramos que el 'escarmiento' no es castigo divino, sino la lección que el espíritu extrae del error. El espíritu no se asusta, aprende. El dolor es el preceptor que avisa que nos hemos salido de la ley de profilaxis. La conciencia es el fruto de mil lecciones bien aprendidas.",
    "CitaInelutable": "El escarmiento es la nueva profilaxis del que ya no quiere repetir el error.",
    "EjemploPedagogico": "Es como un niño que toca una estufa caliente: el dolor le enseña a no tocarla de nuevo. No es que la estufa lo castigue, es que la naturaleza le enseña su límite. Aprende el límite y no tendrás que sufrir.",
    "ConexionDoctrinal": ["Escarmiento", "Ley de Causalidad", "Aprendizaje Espiritual"],
    "NodosSimapticos": ["Preceptor del Dolor", "Lección del Error", "Fruto de Conciencia"]
  },
  "5800: LA INFECCIÓN DOGMÁTICA": {
    "PilotoDeCoherencia": "Denunciamos que las religiones han infectado el mundo con el miedo y la culpa. Esta infección es más peligrosa que la peste, porque mata la voluntad del hombre. La profilaxis mental exige desterrar la idea del 'pecado' para sustituirla por la responsabilidad del progreso.",
    "CitaInelutable": "El miedo es el virus que la religión inyecta en la voluntad humana.",
    "EjemploPedagogico": "Es como un virus informático que borra los archivos del conocimiento y bloquea el sistema. La religión es ese virus; el estudio de la verdad es el antivirus que restaura el sistema del alma.",
    "ConexionDoctrinal": ["Miedo y Culpa", "Responsabilidad", "Virus Religioso"],
    "NodosSimapticos": ["Antivirus del Alma", "Infección de Voluntad", "Conocimiento Restaurador"]
  },
  "6200: LA HERENCIA DE LA CARNE Y EL ESPÍRITU": {
    "PilotoDeCoherencia": "Diferenciamos la herencia biológica de la espiritual. El cuerpo hereda rasgos de los padres, pero el espíritu trae su propia historia de mundos anteriores. La profilaxis ayuda a que el cuerpo sea un instrumento digno para el espíritu que encarna. No somos esclavos de la sangre, sino señores de nuestra evolución.",
    "CitaInelutable": "Heredas el cuerpo de tus padres, pero la sabiduría la heredas de tu propio trabajo eterno.",
    "EjemploPedagogico": "Es como un pianista que hereda un piano viejo (el cuerpo). El piano puede tener teclas desafinadas, pero si el pianista es maestro (espíritu sabio), sabrá sacar música hermosa a pesar del instrumento.",
    "ConexionDoctrinal": ["Herencia", "Evolución", "Cuerpo e Instrumento"],
    "NodosSimapticos": ["Pianista Eterno", "Instrumento del Ser", "Señores de Evolución"]
  },
  "6800: LA TRADICIÓN COMO CÁRCEL": {
    "PilotoDeCoherencia": "La tradición es la cárcel de los muertos donde encierran a los vivos. Mantener costumbres absurdas 'porque siempre se hizo así' es negar la ley de renovación. El espíritu trincadista es revolucionario por naturaleza: rompe con lo viejo para que brille lo nuevo.",
    "CitaInelutable": "La tradición es el ancla que impide al barco de la humanidad llegar al puerto de la verdad.",
    "EjemploPedagogico": "Es como alguien que insiste en usar una vela para iluminarse teniendo una instalación eléctrica en casa, solo porque su abuelo usaba velas. Tira la vela; enciende la luz de la modernidad espiritual.",
    "ConexionDoctrinal": ["Tradición", "Renovación", "Progreso"],
    "NodosSimapticos": ["Cárcel de Muertos", "Ancla del Pasado", "Luz de Modernidad"]
  },
  "7200: EL ANCIANO TRECE: LA JUSTICIA DE NECESIDAD": {
    "PilotoDeCoherencia": "El Anciano Trece explica que cuando el hombre no aprende por amor, la ley aplica la 'justicia de necesidad'. Eventos catastróficos que obligan al hombre a reflexionar y cambiar de rumbo. No es maldad de Dios, es la profilaxis extrema de la naturaleza para salvar la vida del planeta.",
    "CitaInelutable": "La catástrofe es el grito de la naturaleza pidiendo justicia y equilibrio.",
    "EjemploPedagogico": "Es como una fiebre muy alta: el cuerpo se calienta para matar la infección. La tierra tiene fiebre (guerras, terremotos) para matar el virus del egoísmo. Ayuda a bajar la fiebre viviendo en amor.",
    "ConexionDoctrinal": ["Justicia de Necesidad", "Equilibrio Planetario", "Catástrofe"],
    "NodosSimapticos": ["Fiebre Planetaria", "Grito de Naturaleza", "Profilaxis Extrema"]
  },
  "7500: EL ANCIANO CATORCE: EL PESO DEL PENSAMIENTO": {
    "PilotoDeCoherencia": "El Anciano Catorce revela una verdad científica: los pensamientos pesan y ocupan lugar en el espacio. El pensamiento oscuro de las masas religiosas ha creado una costra de opacidad sobre la tierra. La profilaxis mental consiste en generar pensamientos de luz para higienizar la atmósfera espiritual del mundo.",
    "CitaInelutable": "Tus pensamientos son ladrillos: construye con ellos un palacio de luz, no una mazmorra de odio.",
    "EjemploPedagogico": "Es como el humo de las fábricas que tapa el cielo de una ciudad. El odio y el miedo son ese humo; el amor y la sabiduría son el viento que limpia el cielo. Respira y piensa con pureza.",
    "ConexionDoctrinal": ["Pensamiento Vibración", "Higiene Mental", "Atmósfera Espiritual"],
    "NodosSimapticos": ["Ladrillos de Luz", "Mazmorra de Odio", "Humo de Pensamiento"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Higiene Mental": {
    "Definición": "Práctica de cultivar pensamientos positivos, racionales y fraternos para mantener la salud del espíritu y evitar la contaminación de la atmósfera psíquica del planeta.",
    "Contexto": "Enseñanza de los Ancianos en Profilaxis de la Vida.",
    "Conexiones": ["Pensamiento Vibración", "Profilaxis", "Luz"],
    "Obras": ["Profilaxis de la Vida", "Conócete a ti mismo"]
  },
  "Justicia de Necesidad": {
    "Definición": "Intervención de las leyes naturales y espirituales que, mediante el rigor o la catástrofe, obliga a la humanidad a corregir su rumbo cuando ha ignorado la ley de amor.",
    "Contexto": "Explicación de los Ancianos en Profilaxis de la Vida.",
    "Conexiones": ["Ley de Causalidad", "Equilibrio", "Juicio"],
    "Obras": ["Profilaxis de la Vida", "El Espiritismo en su Asiento"]
  },
  "Fisiología Racional": {
    "Definición": "Estudio del cuerpo humano no solo como materia, sino como un laboratorio sagrado donde el espíritu opera bajo leyes matemáticas y biológicas para su progreso.",
    "Conexiones": ["Taller del Espíritu", "Salud", "Ciencia"],
    "Obras": ["Profilaxis de la Vida", "Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Profilaxis de la Vida (Batch 2 - Gaps Medios) y 3 términos sinápticos.');
