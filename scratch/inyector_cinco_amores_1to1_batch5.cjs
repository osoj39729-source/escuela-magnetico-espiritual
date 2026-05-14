const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/los-cinco-amores_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Los Cinco Amores (Batch 5)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "6864: CAPÍTULO SEXTO: EL AMOR AL PROGRESO SE IMPONE SOLO": {
    "PilotoDeCoherencia": "El progreso es la ley de la vida y no necesita de decretos humanos para existir. Se impone solo porque el espíritu siempre busca su expansión. Quien se opone al progreso es como quien intenta detener la marea con las manos: terminará arrastrado por la fuerza de la evolución.",
    "CitaInelutable": "El progreso no pide permiso para pasar; se impone por la fuerza de la ley universal.",
    "EjemploPedagogico": "El progreso es como la planta que rompe el pavimento para buscar la luz. El pavimento (el dogma) parece fuerte, pero la vida es invencible.",
    "ConexionDoctrinal": ["Ley de Progreso", "Evolución", "Fuerza Universal"],
    "NodosSimapticos": ["Amor al Progreso", "Fuerza de la Vida", "Invencibilidad"]
  },
  "7113: CAPÍTULO SÉPTIMO: EL AMOR A LA LIBERTAD ES INNATO": {
    "PilotoDeCoherencia": "La libertad no es una concesión de los gobiernos, es el estado natural del espíritu. Nacemos libres porque somos hijos de Eloí. Cualquier cadena, sea física o dogmática, es una transgresión a la ley de origen. El amor a la libertad es el motor que derriba tiranías.",
    "CitaInelutable": "La libertad es innata en el espíritu, porque es su ley de origen.",
    "EjemploPedagogico": "Un pájaro nacido en jaula sigue teniendo alas. Su instinto le dice que debe volar. El hombre puede estar encadenado por el dogma, pero su espíritu siempre soñará con el cielo de la libertad.",
    "ConexionDoctrinal": ["Libertad Innata", "Soberanía", "Derecho Natural"],
    "NodosSimapticos": ["Libertad Innata", "Motor de Tiranías", "Alas del Espíritu"]
  },
  "7362: CAPÍTULO OCTAVO: EL AMOR DESTRUYE ATAVISMOS": {
    "PilotoDeCoherencia": "El atavismo es la cadena de la costumbre vieja y el prejuicio heredado. El amor a la verdad es el ácido que disuelve esos atavismos. No podemos construir la Comuna con ladrillos podridos del pasado. Hay que amar lo nuevo para poder soltar lo viejo.",
    "CitaInelutable": "El amor a lo nuevo es la única fuerza capaz de romper los atavismos del pasado.",
    "EjemploPedagogico": "Los atavismos son como la ropa de un niño que el adulto insiste en usar: le aprieta, le impide moverse y le hace daño. El amor a la verdad es la ropa nueva del espíritu adulto.",
    "ConexionDoctrinal": ["Atavismos", "Renovación", "Prejuicio"],
    "NodosSimapticos": ["Destrucción de Atavismos", "Ácido de la Verdad", "Ropa Nueva del Espíritu"]
  },
  "7610: CAPÍTULO NUEVE: EL AMOR A LA IGUALDAD LLEVA A LA FRATERNIDAD": {
    "PilotoDeCoherencia": "La igualdad no es un ideal poético, es una necesidad matemática. Sin igualdad de condiciones no puede haber fraternidad real. Donde hay superioridad de casta o dinero, el amor es imposible. La igualdad es el puente que debemos cruzar para llegar a la Comuna.",
    "CitaInelutable": "La igualdad es la balanza; la fraternidad es el peso que la equilibra.",
    "EjemploPedagogico": "En una orquesta, todos los músicos son iguales en importancia para la sinfonía. Si el violinista se cree superior y no sigue el ritmo, rompe la armonía de todos.",
    "ConexionDoctrinal": ["Igualdad", "Fraternidad", "Balanza de Justicia"],
    "NodosSimapticos": ["Igualdad Matemática", "Puente a la Comuna", "Sinfonía Social"]
  },
  "7859: CAPÍTULO DIEZ: EL AMOR A LAS GRANDEZAS — EN QUÉ CONSISTE": {
    "PilotoDeCoherencia": "La verdadera grandeza no está en el trono ni en la espada, sino en el servicio. Grande es el que más ama y el que más trabaja por sus hermanos. Denuncio la falsa grandeza de los conquistadores que solo dejaron luto y sangre. La grandeza de la Comuna es la del espíritu que se entrega al bien común.",
    "CitaInelutable": "Grande es aquel que, siendo luz, se hace lámpara para iluminar al hermano en la sombra.",
    "EjemploPedagogico": "La verdadera grandeza es como el agua: busca siempre el lugar más bajo para servir a todos y dar vida. El orgullo es como la piedra que busca la cima, pero está seca y sola.",
    "ConexionDoctrinal": ["Grandeza Espiritual", "Servicio", "Anti-Orgullo"],
    "NodosSimapticos": ["Grandeza Real", "Lámpara del Hermano", "Servicio"]
  },
  "8207: PARTE CUARTA — EL AMOR NACIONAL ES MAS PERFECTO QUE EL REGIONAL": {
    "PilotoDeCoherencia": "Subimos un escalón más. El amor a la región es estrecho si no se expande a la nación entera. Pero cuidado: el amor nacional no debe ser chovinismo. Es la organización del pueblo para un fin común, un paso necesario hacia el amor universal de la Comuna.",
    "CitaInelutable": "El amor nacional es la expansión necesaria del afecto regional hacia la unidad del pueblo.",
    "EjemploPedagogico": "La región es el cuarto de la casa; la nación es la casa entera. No puedes amar tu cuarto y despreciar el resto de la casa sin que el techo se te caiga encima.",
    "ConexionDoctrinal": ["Unidad Nacional", "Progreso", "Estructura Social"],
    "NodosSimapticos": ["Amor Nacional", "Expansión del Afecto", "Unidad del Pueblo"]
  },
  "8211: CAPITULO PRIMERO — EL AMOR AL ESTADO: EL ESTADO ES EL PUEBLO": {
    "PilotoDeCoherencia": "Denuncio la mentira del 'Estado' como algo separado del pueblo. El Estado no es una entidad abstracta con derechos sobre el hombre; el Estado es el pueblo mismo organizado. Amar al Estado es amar la voluntad colectiva de justicia. Si el Estado oprime, ya no es Estado, es tiranía.",
    "CitaInelutable": "El Estado es el Pueblo; todo lo que no sea el pueblo, es una usurpación del nombre de Estado.",
    "EjemploPedagogico": "El Estado es como el cuerpo y el pueblo son sus células. Si el cuerpo decide atacar a sus propias células, se enferma y muere. El Estado debe ser el servidor de la vida de sus células.",
    "ConexionDoctrinal": ["Soberanía Popular", "Estado vs Tiranía", "Organización Social"],
    "NodosSimapticos": ["Estado es Pueblo", "Servidor de la Vida", "Voluntad Colectiva"]
  },
  "8505: CAPÍTULO SEGUNDO — EL AMOR AL PODER DEL ESTADO: SOBERANÍA": {
    "PilotoDeCoherencia": "La soberanía reside en el espíritu de los ciudadanos, no en las leyes de papel. El poder del Estado es delegado y revocable. Solo el pueblo soberano tiene el derecho de dictar su destino. La soberanía sin moralidad es fuerza bruta; la moralidad sin soberanía es debilidad.",
    "CitaInelutable": "La soberanía es el ejercicio de la voluntad racional del pueblo unido.",
    "EjemploPedagogico": "La soberanía es como el timón de un barco: le pertenece a los dueños del barco (el pueblo), no al timonel (el gobernante), quien solo debe seguir el rumbo marcado por los dueños.",
    "ConexionDoctrinal": ["Soberanía", "Poder Delegado", "Moralidad Social"],
    "NodosSimapticos": ["Soberanía Real", "Poder Delegado", "Timón del Pueblo"]
  },
  "8803: CAPÍTULO TERCERO — EL AMOR AL PODER DADO (GOBIERNO)": {
    "PilotoDeCoherencia": "Gobernar es servir. El amor al poder no debe ser amor al mando, sino amor a la responsabilidad. El gobernante en la Comuna es el que más obligaciones tiene. Quien busca el poder para beneficio propio es un ladrón de la soberanía ajena.",
    "CitaInelutable": "Gobernar es la carga de amor más pesada y honrosa que el pueblo puede dar.",
    "EjemploPedagogico": "El gobernante es como el guía de una expedición: no va delante para que lo admiren, sino para marcar el camino seguro y ayudar al que se cansa.",
    "ConexionDoctrinal": ["Gobierno", "Responsabilidad", "Servicio Público"],
    "NodosSimapticos": ["Poder como Carga", "Gobernar es Servir", "Responsabilidad"]
  },
  "9150: CAPÍTULO CUARTO — EL AMOR MUTUO EN LAS LEYES": {
    "PilotoDeCoherencia": "Denuncio las leyes de partido, las 'leyes de un día' que mueren cuando cae el que las impuso. Las leyes verdaderas deben nacer del amor mutuo y la justicia eterna. Una ley sin espíritu es una ley de muerte que retrasa el progreso. La ley debe ser el abrazo de todos los intereses.",
    "CitaInelutable": "Leyes sin espíritu son leyes de letra que matan el progreso.",
    "EjemploPedagogico": "Una ley de partido es como un muro que construyes para encerrar a tu vecino: mañana el vecino estará en el poder y construirá un muro para encerrarte a ti. La ley de amor es el puente que une a ambos.",
    "ConexionDoctrinal": ["Leyes de Letra", "Amor Mutuo", "Progreso Social"],
    "NodosSimapticos": ["Leyes de Letra", "Leyes de un Día", "Abrazo de Intereses"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Leyes de Letra": {
    "Definición": "Leyes frías, sin espíritu de justicia ni amor, dictadas por intereses partidistas o de casta, que buscan el control en lugar del progreso. Son temporales y mueren con sus creadores.",
    "Contexto": "Capítulo IV de la Cuarta Parte de Los Cinco Amores. Trincado las denuncia como el 'caos negro' de la legislación humana.",
    "Conexiones": ["Espíritu de la Ley", "Progreso", "Leyes de un Día"],
    "Obras": ["Los Cinco Amores", "Filosofía Austera Racional"]
  },
  "Atavismo": {
    "Definición": "La tendencia a repetir errores, costumbres y prejuicios del pasado por inercia o miedo al cambio. Es el ancla que detiene el barco del progreso espiritual.",
    "Contexto": "Capítulo VIII de la Tercera Parte de Los Cinco Amores. Trincado señala que el amor a la verdad es su único antídoto.",
    "Conexiones": ["Prejuicio", "Renovación", "Ley de Progreso"],
    "Obras": ["Los Cinco Amores", "Buscando a Dios"]
  },
  "Economixtificación": { // Asegurando que este término clave esté bien reforzado
    "Definición": "La adulteración de la economía real por el egoísmo y la avaricia, creando un sistema de escasez artificial y acumulación injusta.",
    "Conexiones": ["Avaricia", "Comuna", "Economía de Amor"],
    "Obras": ["Los Cinco Amores"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Los Cinco Amores (Batch 5) y 2 términos sinápticos.');
