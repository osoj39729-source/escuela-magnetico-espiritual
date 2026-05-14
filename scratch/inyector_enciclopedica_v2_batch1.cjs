const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-2_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

// Reiniciando esencia para Tomo 2 con estándar 1:1 estricto
let esencia = {
  "METADATA": {
    "obra": "Filosofía Enciclopédica Universal - Tomo 2",
    "autor": "Joaquín Trincado",
    "estandar": "RE-DESTILACIÓN PURA 1:1 (Juez Amoroso)",
    "descripcion": "Segundo volumen que profundiza en los juicios espirituales, la familia natural de Jesús y la Cosmogonía Solidaria."
  }
};

let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Batch 1 - Filosofía Enciclopédica Tomo 2 (Claves 0 a 14)
const nuevosNodos = {
  "26: Al lector - Espiritismo Luz y Verdad.": {
    "PilotoDeCoherencia": "Rodillo de la Ley. Los axiomas de la Escuela actúan como un rodillo que aplasta el error dogmático de religiones y dioses, sin temor a la perversidad antigua.",
    "CitaInelutable": "Axiomas son el terrible rodillo de la ley que aplasta todo el error de las humanidades, religiones y dioses.",
    "EjemploPedagogico": "Un rodillo pesado que nivela el terreno lleno de baches (dogmas) para que se pueda construir el edificio de la verdad sobre suelo firme.",
    "ConexionDoctrinal": ["Justicia de la Ley", "Fin de las Religiones"],
    "NodosSimapticos": []
  },
  "77: Noviembre 26 de 1911 (hora 20) Portillo - Posesión  M. P.": {
    "PilotoDeCoherencia": "Recuerdos de José. José el Carpintero manifiesta que, tras 19 siglos, no olvida la ventura de su vida familiar con María y Jesús, reclamando la verdad histórica sobre su paternidad.",
    "CitaInelutable": "Haber pasado 19 siglos, yo no he olvidado tampoco; tiene este día eternos recuerdos de ventura.",
    "EjemploPedagogico": "El padre que vuelve a casa después de un largo viaje y exige que se le reconozca su lugar en la mesa familiar, desplazando al 'santo' de yeso que pusieron en su lugar.",
    "ConexionDoctrinal": ["José el Carpintero (Identidad)", "Familia Natural de Jesús"],
    "NodosSimapticos": ["José el Carpintero"]
  },
  "232: Diciembre 1 de 1911 - que al hombre lo hace temer.": {
    "PilotoDeCoherencia": "Engaño del Fanatismo. Un espíritu confiesa haber sido delincuente por causa del fanatismo religioso, denunciando a la religión cristiana como una falsedad que hace sufrir.",
    "CitaInelutable": "Fui engañado en esa falsedad que se llama religión cristiana, por cuyas doctrinas, fui delincuente por el fanatismo.",
    "EjemploPedagogico": "Un hombre al que le vendaron los ojos y le dijeron que empujara a otros al abismo en nombre de Dios; al quitarse la venda, descubre el horror de su obediencia ciega.",
    "ConexionDoctrinal": ["Crimen del Fanatismo", "Responsabilidad del Clero"],
    "NodosSimapticos": []
  },
  "274: Diciembre 3 de 1911   (Escrita Trincado) - como mandado me queda.": {
    "PilotoDeCoherencia": "Mandado de Xavier. Francisco Xavier se manifiesta para confirmar sus hechos y la importancia de la sencillez en la comunicación de las leyes espirituales.",
    "CitaInelutable": "Maestro y jefe de los espacios, me dio al amanecer la siguiente, sencilla pero importante, a los hechos de Xavier.",
    "EjemploPedagogico": "El arquitecto jefe que entrega los planos fundamentales al capataz en la madrugada, antes de que empiece el ruido del día.",
    "ConexionDoctrinal": ["Jerarquía de Xavier", "Simplicidad de la Verdad"],
    "NodosSimapticos": []
  },
  "328: Diciembre 3 de 1911 - Un enviado": {
    "PilotoDeCoherencia": "Aspiración de los Dos Mundos. La unión de pensamientos entre hombres y espíritus es la meta; los argumentos racionales agrandan el espíritu de los enviados.",
    "CitaInelutable": "Vuestras argumentaciones... son la aspiración de los dos mundos, del material y del espiritual.",
    "EjemploPedagogico": "Dos orillas de un río que por fin construyen un puente de palabras lógicas para que los habitantes de ambos lados puedan cruzarse.",
    "ConexionDoctrinal": ["Comunión de Pensamiento", "Progreso Racional"],
    "NodosSimapticos": []
  },
  "608: Diciembre  3 de 1911, hora 21 Portillo - que lo es, por cierto, para el malvado.": {
    "PilotoDeCoherencia": "Deber y Juramento. Los espíritus de luz no olvidan sus compromisos con la humanidad, especialmente en momentos de sedición y perfidia.",
    "CitaInelutable": "No nos olvidamos de nuestros deberes y de nuestros juramentos ante el Padre.",
    "EjemploPedagogico": "El guardián que se mantiene despierto en la noche más oscura porque juró proteger la ciudad contra los traidores.",
    "ConexionDoctrinal": ["Compromiso Espiritual", "Justicia contra la Perfidia"],
    "NodosSimapticos": []
  },
  "869: Diciembre 8 de 1911 Portillo - los atrapa, la serena águila real.": {
    "PilotoDeCoherencia": "Código de Amor. Se anuncia el inicio de la recepción del 'Código de Amor Universal', basado en experiencias de mundos mayores y dictado para la redención humana.",
    "CitaInelutable": "Es el principio del principio del 'Código de Amor' que habéis de dar a la humanidad.",
    "EjemploPedagogico": "La primera piedra de la gran catedral del derecho universal que se empieza a colocar bajo la dirección de maestros de otros mundos.",
    "ConexionDoctrinal": ["Código de Amor Universal (Anuncio)", "Inspiración de Mundos Mayores"],
    "NodosSimapticos": ["Código de Amor Universal (Anuncio)"]
  },
  "1295: Diciembre 8 de 1911 (Portillo) - Trincado.": {
    "PilotoDeCoherencia": "Ley de Adelanto Única. Adelantar es la ley universal, escrita de igual forma en la cosmogonía pero interpretada según la inteligencia de cada morada.",
    "CitaInelutable": "Adelantar es la ley. Esta ley, es una para todos los mundos; pero está escrita como corresponde a la inteligencia.",
    "EjemploPedagogico": "La ley de la gravedad es la misma en toda la tierra, pero el niño la entiende cayéndose y el científico mediante ecuaciones; la ley no cambia, cambia el que la observa.",
    "ConexionDoctrinal": ["Ley de Adelanto", "Relatividad de la Inteligencia"],
    "NodosSimapticos": []
  },
  "1518: Diciembre 17 de 1911 (Portillo) - Francisco Xavier": {
    "PilotoDeCoherencia": "Moradas de la Cosmogonía. El universo es un jardín dividido en moradas habitadas por obreros (espíritus) bajo una ley armónica constante.",
    "CitaInelutable": "Posibilidad de la ley armónica de los mundos, que son las distintas moradas en que el Padre dividió la Cosmogonía.",
    "EjemploPedagogico": "Un gran hotel (el universo) con infinitas habitaciones (mundos) donde cada huésped (espíritu) trabaja y progresa según su capacidad.",
    "ConexionDoctrinal": ["Cosmogonía (División)", "Pluralidad de Mundos Habitados"],
    "NodosSimapticos": ["Cosmogonía (División)"]
  },
  "1756: De éstos principios a dudar nadie se atreva - COMENTARIOS": {
    "PilotoDeCoherencia": "Máxima del Alma. Si el alma pierde su rumbo moral (derrotero), de nada sirven los logros materiales del mundo entero.",
    "CitaInelutable": "Si el alma pierde su derrotero / De nada sirve al hombre el mundo entero.",
    "EjemploPedagogico": "Un barco cargado de oro pero sin timón ni brújula; por más riqueza que lleve, terminará hundiéndose en el primer arrecife.",
    "ConexionDoctrinal": ["Derrotero del Alma", "Supremacía del Espíritu"],
    "NodosSimapticos": ["Derrotero del Alma"]
  },
  "1946: Diciembre 17  de 1911 Hora 21 Portillo - bolo.": {
    "PilotoDeCoherencia": "Dardos contra la Guerra. La lucha espiritual se dirige contra las guerras que roban la juventud al trabajo y contra los 'bomberos' que apagan la luz de la verdad.",
    "CitaInelutable": "Continuaremos nuestros dardos... contra las guerras, que sobre llenar de luto los hogares, restan los brazos potentes.",
    "EjemploPedagogico": "El maestro que lanza flechas de sabiduría para romper los tambores de guerra y desenmascarar a quienes intentan apagar la antorcha del progreso.",
    "ConexionDoctrinal": ["Antimilitarismo Doctrinal", "Bomberos (Simbología)"],
    "NodosSimapticos": ["Bomberos (Simbología Doctrinal)"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Código de Amor Universal (Anuncio)": {
    "Definición": "Notificación espiritual dada en diciembre de 1911 sobre la próxima codificación de la ley universal que regiría a la humanidad. Se describe como una recopilación de experiencias de mundos avanzados destinada a establecer el orden y la justicia definitiva en la Tierra.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 2 (Sesión del 8 de Diciembre de 1911).",
    "Conexiones": ["Justicia Universal", "Leyes del Padre", "Misión de Trincado"],
    "Obras": ["Filosofía Enciclopédica Universal", "Código de Amor Universal"]
  },
  "Derrotero del Alma": {
    "Definición": "Ruta ética y vibratoria que el espíritu debe mantener para cumplir su misión y evolucionar. Perder el derrotero significa sucumbir a las pasiones o al error dogmático, anulando el valor de cualquier éxito material obtenido.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 2 (Máxima de Francisco Xavier).",
    "Conexiones": ["Misión Espiritual", "Conciencia", "Progreso"],
    "Obras": ["Filosofía Enciclopédica Universal", "Conócete a ti mismo"]
  },
  "Cosmogonía (División)": {
    "Definición": "Concepción trincadista del universo como una unidad solidaria dividida en infinitas 'moradas' o mundos habitados. Cada morada representa un grado de progreso y todas están interconectadas por la ley armónica del Padre y el trabajo de los espíritus.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 2 (Explicación de Xavier sobre la Cosmogonía).",
    "Conexiones": ["Pluralidad de Mundos", "Universo Solidario", "Eloí"],
    "Obras": ["Filosofía Enciclopédica Universal", "Filosofía Austera Racional"]
  },
  "Bomberos (Simbología Doctrinal)": {
    "Definición": "Término metafórico utilizado por los espíritus para referirse a los agentes del dogma, la ignorancia o la traición que intentan 'apagar' el fuego de la verdad o desviar a los misioneros de su camino mediante engaños o distracciones.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 2 (Mensaje contra las guerras y el error).",
    "Conexiones": ["Dogma", "Oposición Espiritual", "Luz"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Iniciada RE-DESTILACIÓN 1:1 de Filosofía Enciclopédica Tomo 2 (Batch 1, 11 nodos) y 4 términos sinápticos.');
