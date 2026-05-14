const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/el-magnetismo-en-su-origen_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - El Magnetismo en su Origen (Batch 2 - Claves 13 a 22)
const nuevosNodos = {
  "489: INTRODUCCIÓN": {
    "PilotoDeCoherencia": "Advertencia severa contra los charlatanes del magnetismo. Trincado denuncia que más del 95% de los que se autodenominan 'magnetizadores', 'hipnotizadores' o 'fascinadores' son impostores o apenas aprendices que desacreditan la verdadera ciencia magnética.",
    "CitaInelutable": "Cualquiera se presenta con el nombre pomposo de 'Magnetizador', 'Hipnotizador', 'Sugestionador' y hasta 'Fascinador', y de todos ellos, más del 95% son impostores.",
    "EjemploPedagogico": "Así como ponerte una bata blanca no te hace cirujano, aprender un par de pases magnéticos no te hace magnetizador. La mayoría son curanderos de feria que manchan el nombre de la ciencia.",
    "ConexionDoctrinal": ["Charlatanería vs Ciencia", "Impostores Magnéticos"],
    "NodosSimapticos": ["Fascinadores de Feria"]
  },
  "534: LECCIÓN PRIMERA: ¿QUE ES EL MAGNETISMO?": {
    "PilotoDeCoherencia": "Definición absoluta y materialista-espiritual del Magnetismo. Desafiando a la Academia, Trincado lo define como 'el resultado del movimiento universal'. Es la fuerza concreta creada por átomos, corpúsculos y electrones en su incesante fricción y movimiento.",
    "CitaInelutable": "Magnetismo es, (aún contra el sentir de la academia de la Lengua) el resultado del movimiento universal. Las fuerzas creadas en el Universo por los átomos... en su incesante fricción.",
    "EjemploPedagogico": "Si frotas tus manos, generas calor. Si el Universo entero se frota y se mueve constantemente, genera una fuerza cósmica palpable: eso es el Magnetismo.",
    "ConexionDoctrinal": ["Resultado del Movimiento Universal", "Física Espiritual", "Definición Científica"],
    "NodosSimapticos": ["Fricción Cósmica", "Resultado del Movimiento"]
  },
  "565: LECCIÓN SEGUNDA: I MAGNETISMO ANIMAL": {
    "PilotoDeCoherencia": "Rebautizo del concepto. Se rechaza la separación artificial entre magnetismo animal y universal. Lo correcto es llamarlo 'Magnetismo Espiritual', demostrando que esta fuerza no es un invento reciente, sino la base de la vida misma desde antes que se formaran los mundos.",
    "CitaInelutable": "No es éste diferente del Magnetismo Universal que debemos en verdad denominar 'Magnetismo Espiritual'.",
    "EjemploPedagogico": "Llamarle 'magnetismo animal' es como decir que el aire que respira un perro es 'aire canino'. El aire es uno solo, y el magnetismo que fluye por el animal es el mismo magnetismo espiritual del cosmos.",
    "ConexionDoctrinal": ["Unidad del Magnetismo", "Magnetismo Espiritual vs Animal"],
    "NodosSimapticos": ["Falsa División Magnética"]
  },
  "597: EL MAGNETISMO EN LOS ANIMALES, PLANTAS Y MINERALES": {
    "PilotoDeCoherencia": "El magnetismo es una ley única para todos los reinos de la naturaleza. Sin embargo, en los reinos inferiores al hombre (animal, vegetal, mineral), el magnetismo opera por afinidad ciega o provocada por la voluntad consciente del hombre, ya que ellos carecen de Razón para dirigirlo.",
    "CitaInelutable": "Hay una misma y única ley para el Magnetismo, en todos los seres de los Reinos del Universo... solo que, en los seres del hombre abajo, se manifiesta también por la afinidad.",
    "EjemploPedagogico": "El hierro atrae a la brújula por instinto físico (afinidad). El animal siente atracción por instinto. Solo el hombre puede tomar esa misma fuerza y dirigirla conscientemente para curar o investigar.",
    "ConexionDoctrinal": ["Magnetismo Inconsciente", "Afinidad en Reinos Inferiores"],
    "NodosSimapticos": ["Instinto Magnético"]
  },
  "619: LECCION TERCERA: I DEMOSTRACIÓN DEL MAGNETISMO": {
    "PilotoDeCoherencia": "Axioma de la causalidad material: Todas las obras del hombre son magnéticas a nivel absoluto. Para que el hombre produzca o actúe, utiliza el 'remanente magnético' de las cosas, demostrando los efectos siempre a través de la afinidad obligatoria.",
    "CitaInelutable": "Todas las obras del hombre, a lo absoluto, son Magnéticas. Pero en todas las cosas que el hombre encuentra, hay un remanente Magnético.",
    "EjemploPedagogico": "Un escultor no solo usa un cincel de metal; usa la afinidad magnética que mantiene unidos los átomos de su mano, la herramienta y la piedra. Sin magnetismo, la piedra se haría polvo antes de ser tocada.",
    "ConexionDoctrinal": ["Remanente Magnético", "Causalidad Magnética de las Obras"],
    "NodosSimapticos": ["Escultura Cósmica", "Remanente Magnético"]
  },
  "649: ELECTRICIDAD Y MATERIA": {
    "PilotoDeCoherencia": "Unificación de conceptos físicos. Trincado declara que hacer de la electricidad y la materia dos entidades separadas es un error fruto de la ignorancia. Ambas son simplemente 'dos grados diferentes del éter', o en términos metafísicos, la 'Vida' y la 'demostración de la Vida'.",
    "CitaInelutable": "Electricidad y Materia: Sólo por la ignorancia hay que hacer estas dos entidades... las tomo por dos grados diferentes del éter y en verdad debería decir: 'Vida y demostración de la Vida'.",
    "EjemploPedagogico": "El hielo y el vapor parecen distintos, pero ambos son agua a diferente temperatura. La materia (el cuerpo sólido) y la electricidad (la corriente invisible) son ambas el Éter vibrando en distintas frecuencias.",
    "ConexionDoctrinal": ["Electricidad y Materia", "Grados del Éter", "Muerte del Dualismo Físico"],
    "NodosSimapticos": ["Materia como Electricidad Congelada"]
  },
  "708: EL HOMBRE ES LA VERDADERA DINAMO": {
    "PilotoDeCoherencia": "Definición bio-energética del ser humano. El hombre resume y contiene los tres reinos de la naturaleza, sumando la Razón. Esta combinación anatómica y racional convierte al cuerpo humano en la verdadera 'Dínamo' demostradora de la vida universal.",
    "CitaInelutable": "A la construcción de una Dínamo, concurren todos los elementos... El hombre es la verdadera Dínamo demostradora de la vida universal.",
    "EjemploPedagogico": "Un generador de planta eléctrica es un juguete de metal al lado del ser humano. Tu cuerpo es una planta eléctrica perfecta, capaz de generar la luz del pensamiento y el fluido curativo.",
    "ConexionDoctrinal": ["Hombre Dínamo", "Síntesis de los Tres Reinos", "Razón como Conductor"],
    "NodosSimapticos": ["Dínamo Humana", "Generador Biológico"]
  },
  "760: LECCIÓN CUARTA: I ¿QUIENES PUEDEN USAR EL MAGNETISMO?": {
    "PilotoDeCoherencia": "Universalización de la facultad. Todo hombre, por mandato de su propia vida, puede y usa el magnetismo, incluso en la más absoluta ignorancia. La única diferencia es que unos lo usan inconscientemente para ser dominados, y otros conscientemente para dominar bajo la Ley de Amor.",
    "CitaInelutable": "Todos los hombres pueden y usan el Magnetismo aún en su ignorancia, porque no hay otro medio para obrar, ni para vivir.",
    "EjemploPedagogico": "Todos usamos la gravedad, desde un genio físico hasta un bebé que deja caer su sonajero. Igual con el magnetismo: lo usas al amar, al mirar, al hablar, sepas o no cómo se llama.",
    "ConexionDoctrinal": ["Facultad Universal", "Magnetismo Inconsciente vs Consciente"],
    "NodosSimapticos": ["Facultad Ineludible", "Respiración Magnética"]
  },
  "807: LOS GENIOS": {
    "PilotoDeCoherencia": "Desmitificación fulminante de los 'genios' y seres mágicos. Los genios no son entidades sobrenaturales o angelicales como enseñan las supersticiones (religiosas o místicas); son fantasías que hunden a los hombres en el fanatismo o la impotencia.",
    "CitaInelutable": "Todos esos genios, son fantasías supersticiosas y por lo tanto religiosas, que tienen por necesidad que llevar a los hombres a la impotencia o al fanatismo.",
    "EjemploPedagogico": "No hay un 'genio de la lámpara' ni un 'ángel de la guarda' haciendo milagros. Solo hay espíritus trabajando bajo leyes magnéticas naturales. Creer en genios te hace un esclavo de la fantasía.",
    "ConexionDoctrinal": ["Destrucción de la Superstición", "Rechazo de Entidades Fantásticas"],
    "NodosSimapticos": ["Fantasía Supersticiosa", "Impotencia Mística"]
  },
  "854: LECCION QUINTA: I ¿PARA QUE SE USA EL MAGNETISMO?": {
    "PilotoDeCoherencia": "Declaración del propósito ético y legal. En Ley, el magnetismo solo puede usarse para el Bien. Usarlo para el mal (manipulación, charlatanería, daño) es una violación flagrante de la Ley Universal. El Método Supremo llega para enderezar el entuerto milenario del mal uso de la fuerza.",
    "CitaInelutable": "El Magnetismo, en ley, no puede usarse más que para el bien. Usarlo para el mal es contra la ley... A enderezar ese entuerto, viene este 'Método Supremo'.",
    "EjemploPedagogico": "Es como un bisturí: está hecho por Ley para curar (el Bien), pero si lo usas para apuñalar a alguien, rompes la Ley. El Método Supremo es la escuela que enseña a no apuñalar.",
    "ConexionDoctrinal": ["Uso Ético del Magnetismo", "Violación de la Ley", "Propósito Curativo"],
    "NodosSimapticos": ["Bisturí del Bien", "Enderezar el Entuerto Magnético"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "La Dínamo Humana": {
    "Definición": "Concepto biológico-magnético. El cuerpo humano se concibe como una máquina generadora perfecta, compuesta por los tres reinos de la naturaleza y operada por la Razón, capaz de generar y emitir magnetismo consciente a voluntad.",
    "Contexto": "Lección Tercera de El Magnetismo en su Origen.",
    "Conexiones": ["Magnetismo", "Cuerpo Físico", "Voluntad"],
    "Obras": ["El Magnetismo en su Origen", "Conócete a ti mismo"]
  },
  "Remanente Magnético": {
    "Definición": "La carga de fuerza residual y cohesiva presente en toda materia y forma, que permite al hombre, mediante la afinidad, obrar sobre ellas y producir cualquier efecto físico o espiritual.",
    "Contexto": "Lección Tercera de El Magnetismo en su Origen.",
    "Conexiones": ["Afinidad", "Materia", "Electricidad"],
    "Obras": ["El Magnetismo en su Origen"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos PURA CALIDAD 1:1 de El Magnetismo en su Origen (Batch 2) y 2 términos sinápticos.');
