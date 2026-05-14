const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 24)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "14803: DEBERES DE LA FAMILIA RACIONAL": {
    "PilotoDeCoherencia": "La familia es la primera escuela del espíritu y la célula básica de la Comuna. Estudiamos sus deberes no por tradición religiosa, sino por ley de afinidad y responsabilidad. El hogar debe ser un santuario de estudio y trabajo donde se preparen los ciudadanos del mundo. La familia que no progresa unida, se disuelve en el egoísmo.",
    "CitaInelutable": "La familia es el ensayo general de la fraternidad universal.",
    "EjemploPedagogico": "Es como un pequeño laboratorio: antes de que el científico trabaje en la gran industria (la sociedad), debe aprender a manejar las probetas y los reactivos en su mesa de trabajo (el hogar). Si no hay orden en la mesa, habrá explosión en la industria.",
    "ConexionDoctrinal": ["Familia", "Comuna", "Escuela del Espíritu"],
    "NodosSimapticos": ["Célula de Comuna", "Laboratorio del Hogar", "Ensayo de Fraternidad"]
  },
  "15100: LA DOCTRINA DEL FUERO JUZGO DE NAVARRA": {
    "PilotoDeCoherencia": "Elogiamos la sabiduría ancestral del fuero de Navarra como un vestigio de moral pura. En ella, el respeto a los progenitores y el orden del hogar reflejan leyes espirituales que el mundo moderno ha olvidado. Tomamos lo bueno de la tradición para cimentar la ética de la nueva era.",
    "CitaInelutable": "El fuero de Navarra guarda el secreto de la jerarquía natural basada en el amor.",
    "EjemploPedagogico": "Es como encontrar una moneda de oro en un campo de ruinas: la moneda sigue teniendo valor aunque el edificio haya caído. La doctrina de Navarra es esa moneda de oro de la moral familiar.",
    "ConexionDoctrinal": ["Tradición Racional", "Navarra", "Jerarquía Natural"],
    "NodosSimapticos": ["Sabiduría de Navarra", "Moneda de Oro Moral", "Respeto Ancestral"]
  },
  "15370: LA RESPONSABILIDAD DE LOS HIJOS": {
    "PilotoDeCoherencia": "Los hijos son dependientes de los padres mientras estos vivan, no por esclavitud, sino por gratitud y ley de sustento. El hijo tiene el deber sagrado de subvenir a la vejez de sus progenitores. Quien abandona a sus padres en el invierno de la vida, demuestra que no ha comprendido la ley de amor.",
    "CitaInelutable": "El hijo es el báculo donde el padre descansa tras la fatiga del trabajo.",
    "EjemploPedagogico": "Es como un árbol: las raíces (los padres) alimentaron a la rama (el hijo). Cuando las raíces se cansan, la rama debe devolver la savia en forma de sombra y protección. Es el ciclo del amor devolviéndose a su origen.",
    "ConexionDoctrinal": ["Gratitud", "Deber Filial", "Vejez"],
    "NodosSimapticos": ["Báculo del Padre", "Deuda de Amor", "Ciclo de la Savia"]
  },
  "15650: LA MUJER — REINA DEL HOGAR": {
    "PilotoDeCoherencia": "La mujer es la administradora suprema del interior del hogar. Su papel es fundamental para la economía y el orden espiritual de la familia. No es inferior al hombre; es su complemento necesario con funciones distintas pero de igual valor. El respeto a la madre es el respeto a la vida misma.",
    "CitaInelutable": "La esposa es la reina dentro del hogar y la previsora administradora de la vida.",
    "EjemploPedagogico": "Si el hombre es el que trae el trigo al granero (el trabajo exterior), la mujer es la que sabe convertir ese trigo en pan que alimente a todos (la administración interna). Sin pan, el trigo es solo semilla muerta.",
    "ConexionDoctrinal": ["Papel de la Mujer", "Administración", "Complemento"],
    "NodosSimapticos": ["Reina del Hogar", "Previsora Administradora", "Conversión del Trigo"]
  },
  "15930: EL HOMBRE — EJECUTOR DEL TRABAJO EXTERIOR": {
    "PilotoDeCoherencia": "Al hombre le corresponde la lucha en el mundo exterior, el trabajo de fuerza y la ejecución de los planes de sustento. Debe entrar al hogar con sus herramientas de trabajo y su vestido, reconociendo en la mujer la autoridad del orden interno. El hombre es el escudo que protege el santuario del hogar.",
    "CitaInelutable": "El esposo dispone y ejecuta el trabajo, descansando en la sabiduría de la madre.",
    "EjemploPedagogico": "Es como el capitán de un barco y el jefe de máquinas. El hombre es el capitán que mira el horizonte y lucha con las olas (el mundo); la mujer es el jefe de máquinas que mantiene el motor funcionando y el barco limpio. Ambos son necesarios para llegar a puerto.",
    "ConexionDoctrinal": ["Papel del Hombre", "Trabajo", "Protección"],
    "NodosSimapticos": ["Escudo del Hogar", "Ejecutor de Obra", "Herramientas de Trabajo"]
  },
  "16200: EL AJUAR Y LAS HERRAMIENTAS": {
    "PilotoDeCoherencia": "Defendemos la tradición donde la familia de la mujer pone el ajuar y el hombre sus herramientas. Esto simboliza que el hogar es el espacio de ella y el trabajo es el aporte de él. Es una unión de fuerzas para un fin común: la creación de un nuevo núcleo de progreso humano.",
    "CitaInelutable": "La unión matrimonial es el pacto entre el espacio del afecto y las herramientas de la obra.",
    "EjemploPedagogico": "Es como abrir un taller: uno pone el local limpio y acogedor, y el otro pone las máquinas para producir. Juntos, el taller (el hogar) da frutos de bienestar para todos.",
    "ConexionDoctrinal": ["Matrimonio Racional", "Economía Doméstica", "Simbolismo"],
    "NodosSimapticos": ["Ajuar y Herramientas", "Pacto de Unión", "Taller del Afecto"]
  },
  "16470: LA ECONOMÍA INTERNA TOTAL": {
    "PilotoDeCoherencia": "La administración de los recursos debe estar en manos de la mujer. Ella es la que mejor conoce las necesidades de los hijos y del hogar. El hombre entrega el fruto de su trabajo confiando en la sabiduría previsora de la madre. Esta división de funciones evita conflictos y asegura la prosperidad racional.",
    "CitaInelutable": "La economía del hogar es el arte de la previsión femenina al servicio de la paz familiar.",
    "EjemploPedagogico": "Es como un ministerio de finanzas: el hombre es el que recauda (produce), pero la mujer es la que asigna el presupuesto para que a nadie le falte nada. Un buen ministro (la madre) evita la bancarrota moral y física.",
    "ConexionDoctrinal": ["Administración", "Previsión", "Orden Doméstico"],
    "NodosSimapticos": ["Economía Interna", "Ministro del Hogar", "Bancarrota Moral"]
  },
  "16740: EL DESCANSO DEL PADRE DE FAMILIA": {
    "PilotoDeCoherencia": "El hombre encuentra en el hogar bien administrado el descanso necesario para reponer sus fuerzas. Al no tener que preocuparse por los detalles internos, su mente queda libre para planear el progreso mayor de la familia y la sociedad. El hogar es el oasis del trabajador.",
    "CitaInelutable": "El orden de la madre es el descanso del guerrero del trabajo.",
    "EjemploPedagogico": "Es como un soldado que vuelve de la batalla: si encuentra su tienda en desorden y sin comida, no podrá volver a luchar mañana. El hogar ordenado es la recarga magnética del hombre.",
    "ConexionDoctrinal": ["Descanso", "Magnetismo", "Sustento"],
    "NodosSimapticos": ["Oasis del Trabajador", "Recarga Magnética", "Descanso del Guerrero"]
  },
  "17010: EL RESPETO A LA MADRE PREVISORA": {
    "PilotoDeCoherencia": "El respeto a la madre no nace de una imposición, sino del reconocimiento de su labor previsora. Ella es la que ve el peligro antes de que llegue y la que guarda para el futuro. Su autoridad moral es el eje que mantiene unidos a los hijos incluso después de la muerte del padre.",
    "CitaInelutable": "La madre es la brújula moral del hogar por su don de previsión.",
    "EjemploPedagogico": "Es como el centinela en la torre: mientras todos duermen, ella vigila el horizonte. Su previsión salva a la familia de las tormentas de la vida.",
    "ConexionDoctrinal": ["Autoridad Moral", "Previsión", "Maternidad Racional"],
    "NodosSimapticos": ["Brújula Moral", "Centinela del Hogar", "Respeto a la Madre"]
  },
  "17280: LA UNIDAD DEL HOGAR RACIONAL": {
    "PilotoDeCoherencia": "Concluimos que el hogar racional es aquel donde reina la verdad y el trabajo. No hay secretos ni tiranías. Cada uno cumple su función con alegría porque sabe que es parte de un todo armónico. El hogar es el primer peldaño hacia la Comuna Universal de Amor y Ley.",
    "CitaInelutable": "En el hogar racional no hay esclavos, sino hermanos en diversos grados de servicio.",
    "EjemploPedagogico": "Es una sinfonía doméstica: el violín no intenta ser piano, ni el piano flauta. Cada uno suena en su momento y con su nota, y el resultado es la música de la paz. Que tu hogar sea música.",
    "ConexionDoctrinal": ["Armonía Familiar", "Comuna Universal", "Unidad"],
    "NodosSimapticos": ["Sinfonía Doméstica", "Hogar sin Tiranía", "Primer Peldaño"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Previsora Administradora": {
    "Definición": "Rol ético y económico de la mujer dentro del hogar racional, encargada de la gestión de recursos y la previsión de necesidades para garantizar el bienestar y descanso de la familia.",
    "Contexto": "Ética Familiar en Filosofía Austera Racional.",
    "Conexiones": ["Economía Interna", "Mujer", "Hogar Racional"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Hogar Racional": {
    "Definición": "La unidad básica de convivencia de la Escuela, caracterizada por la ausencia de dogmas, el respeto mutuo basado en grados de progreso y la administración justa de bienes y afectos.",
    "Contexto": "Ética en Filosofía Austera Racional.",
    "Conexiones": ["Familia", "Comuna", "Educación"],
    "Obras": ["Filosofía Austera Racional", "Código de Amor Universal"]
  },
  "Fuero Juzgo (Uso Moral)": {
    "Definición": "Referencia de Trincado a las antiguas leyes forales como ejemplo de una moral natural y un orden familiar basado en la gratitud filial y la dignidad del hogar.",
    "Conexiones": ["Tradición", "Justicia", "Familia"],
    "Obras": ["Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Filosofía Austera Racional (Batch 24) y 3 términos sinápticos.');
