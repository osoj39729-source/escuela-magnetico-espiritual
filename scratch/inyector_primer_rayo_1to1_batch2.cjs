const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/primer-rayo-de-luz_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Primer Rayo de Luz (Batch 2 - Rellenando Gaps Medios)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "297: EL JUEZ OCULTO": {
    "PilotoDeCoherencia": "Me declaro Juez Oculto de esta controversia. No intervengo para defender a un hombre, sino para salvar la Verdad. Registraré cada argumento de los contendientes y los pesaré en la balanza de la razón imparcial. El mundo ignora muchas cosas por la fuerza religiosa, pero la sabiduría salvará al hombre.",
    "CitaInelutable": "Me he creído con el deber de ser Juez, oculto, de las dos causas.",
    "EjemploPedagogico": "Es como un árbitro en un partido donde los jugadores están cegados por la pasión. El árbitro no patea la pelota, pero señala la falta y marca el camino del juego limpio. Mi silbato es la razón.",
    "ConexionDoctrinal": ["Justicia Imparcial", "Sabiduría", "Juicio"],
    "NodosSimapticos": ["Balanza de Razón", "Juez de Causas", "Salvación por Sabiduría"]
  },
  "301: LA RESPONSABILIDAD DE LA CAUSA": {
    "PilotoDeCoherencia": "No odio al hombre, por fanático o criminal que sea, porque reconozco en mí todos los instintos de la naturaleza. Mi ataque es contra la Causa (la religión) que deforma al espíritu. Destruyendo la causa, el efecto pernicioso desaparece. El hombre es solo el producto de su educación.",
    "CitaInelutable": "A destruir la causa voy, para que no exista el efecto.",
    "EjemploPedagogico": "Si un árbol da frutos amargos, no golpees al fruto; revisa la raíz y el suelo. La religión es el suelo envenenado; el fanatismo es el fruto amargo. Cambiemos el suelo por la verdad.",
    "ConexionDoctrinal": ["Causa y Efecto", "Comprensión Humana", "Raíz del Error"],
    "NodosSimapticos": ["Raíz de la Verdad", "Fruto del Fanatismo", "Lucha contra la Causa"]
  },
  "2241: LA MISERIA DE LA CALUMNIA": {
    "PilotoDeCoherencia": "Observamos cómo la controversia desciende al insulto cuando falta la razón. La calumnia es el refugio de la impotencia dogmática. Denunciamos que se use la religión para perseguir políticamente a los hombres de ideas libres. La verdad no necesita de 'leyes de residencia' para triunfar.",
    "CitaInelutable": "La calumnia es el arma del que no tiene luz propia.",
    "EjemploPedagogico": "Es como un luchador que, al verse vencido en fuerza y técnica, empieza a tirar barro a los ojos del público. El barro mancha, pero no quita la victoria al que tiene la razón.",
    "ConexionDoctrinal": ["Calumnia", "Ética de Controversia", "Libertad de Pensamiento"],
    "NodosSimapticos": ["Barro de Impotencia", "Lucha Noble", "Persecución Ideológica"]
  },
  "2654: ¿CON MOISÉS O CON DARWIN? (II)": {
    "PilotoDeCoherencia": "Planteamos el dilema central de la cultura moderna. ¿Seguimos el mito del barro (Moisés dogmático) o la evolución animal (Darwin materialista)? Nosotros decimos: Moisés sabía más de lo que la Biblia dice, y Darwin vio solo la cáscara del proceso. El espíritu es el motor que ambos ignoraron en su plenitud.",
    "CitaInelutable": "El dilema es de hierro: o con la Tierra o con el Cielo; o con Moisés o con Darwin.",
    "EjemploPedagogico": "Es como elegir entre un cuento de hadas para niños y un manual de anatomía para cadáveres. Nosotros buscamos el libro de la vida, donde el espíritu es el autor y la materia el escenario.",
    "ConexionDoctrinal": ["Evolución Racional", "Moisés Legislador", "Darwinismo"],
    "NodosSimapticos": ["Mito del Barro", "Cáscara del Proceso", "Dilema de Hierro"]
  },
  "3542: LA RÉPLICA DEL MIEDO": {
    "PilotoDeCoherencia": "La réplica de la teología siempre se basa en el miedo al castigo eterno y en la anulación del hombre. Denunciamos que se use la 'santidad' para encubrir la falta de lógica. El teólogo se agita porque siente que el suelo de sus dogmas se resquebraja ante la geología y la astronomía.",
    "CitaInelutable": "El dogma es una venda que se rompe ante el primer rayo de luz científica.",
    "EjemploPedagogico": "Es como alguien que intenta tapar el sol con un colador. La luz (la ciencia) pasa por los agujeros de su ignorancia y termina por quemar su mano. El dogma no puede detener la luz.",
    "ConexionDoctrinal": ["Crítica Teológica", "Miedo Dogmático", "Luz Científica"],
    "NodosSimapticos": ["Venda del Dogma", "Colador de Ignorancia", "Suelo de Arena"]
  },
  "3567: LA CHANZA COMO DEFENSA": {
    "PilotoDeCoherencia": "Advertimos que el uso de la burla y la chanza por parte de los materialistas desmerece la seriedad de la búsqueda. La verdad es un asunto grave que requiere respeto. No nos reímos del error, lo analizamos y lo superamos. El filósofo austero mantiene su dignidad incluso frente al ridículo.",
    "CitaInelutable": "La risa del ignorante es imbecilidad; la burla del sabio es innecesaria.",
    "EjemploPedagogico": "Es como un cirujano que se burla de la herida del paciente en lugar de curarla. El paciente necesita la cura, no el chiste. El mundo necesita la verdad, no la sátira.",
    "ConexionDoctrinal": ["Seriedad", "Respeto", "Método Racional"],
    "NodosSimapticos": ["Cirujano de la Verdad", "Dignidad del Filósofo", "Fin de la Chanza"]
  },
  "3710: LA OPINIÓN HUMANA VS LA LEY DIVINA": {
    "PilotoDeCoherencia": "Separamos la opinión de los teólogos de la verdadera Ley del Creador. Lo que los hombres dicen de Dios no es Dios. Eloí no necesita defensores que insulten; necesita hijos que vivan en justicia. La opinión es variable; la Ley es eterna e inmutable.",
    "CitaInelutable": "La opinión de un teólogo no es más que el eco de su propio prejuicio.",
    "EjemploPedagogico": "Es como mil personas opinando sobre el color de un objeto en una habitación a oscuras. Cada uno dirá una cosa diferente. Enciende la luz (la razón) y todos verán el mismo color. Esa es la diferencia entre opinión y verdad.",
    "ConexionDoctrinal": ["Opinión y Verdad", "Prejuicio", "Ley Eterna"],
    "NodosSimapticos": ["Eco de Prejuicio", "Luz de la Ley", "Habitación a Oscuras"]
  },
  "3832: OBSERVACIONES SOBRE EL FANATISMO": {
    "PilotoDeCoherencia": "El fanatismo es una enfermedad del alma que ciega el entendimiento. El fanático no busca la verdad, busca confirmar su error. Denunciamos que se considere 'celo religioso' a lo que es simple odio al progreso. El amor universal es la única cura para el fanatismo.",
    "CitaInelutable": "El fanatismo es el veneno que la religión inyecta en el corazón del hombre.",
    "EjemploPedagogico": "Es como un caballo con anteojeras que solo ve el camino que el jinete (el cura) le marca. Quítale las anteojeras y el caballo verá todo el campo y podrá elegir su propio camino hacia el horizonte.",
    "ConexionDoctrinal": ["Fanatismo", "Odio al Progreso", "Cura de Amor"],
    "NodosSimapticos": ["Anteojeras del Ser", "Veneno Religioso", "Horizonte Libre"]
  },
  "3961: LA ANATOMÍA DE LA BIBLIA": {
    "PilotoDeCoherencia": "Realizamos la anatomía de la Biblia no por burla, sino por necesidad higiénica. Debemos separar los 'cuentitos frívolos' de las realidades históricas. El Viejo Testamento es un ensayo burlesco de historia si se lee literalmente, pero esconde símbolos de una sabiduría antigua que el espíritu debe desentrañar.",
    "CitaInelutable": "La anatomía de la Biblia es la disección necesaria para encontrar la verdad entre el lodo.",
    "EjemploPedagogico": "Es como buscar una perla en el lodo: te ensucias las manos (estudiando errores), pero si eres paciente y sabes buscar, encontrarás la perla que vale más que todo el fango que la rodeaba.",
    "ConexionDoctrinal": ["Crítica Bíblica", "Simbología", "Higiene Mental"],
    "NodosSimapticos": ["Perla en el Lodo", "Disección Necesaria", "Cuentos y Verdades"]
  },
  "4426: LA CONTRARRÉPLICA DE LA RAZÓN": {
    "PilotoDeCoherencia": "En la contrarréplica, la razón debe mostrarse invencible. No respondemos al insulto con insulto, sino con hechos científicos. La geología y la biología son nuestros testigos. El edificio de la fe ciega no puede resistir el embate de la realidad física. Estamos ganando la batalla de las conciencias.",
    "CitaInelutable": "La contrarréplica racional es el golpe de gracia a la falacia dogmática.",
    "EjemploPedagogico": "Es como una partida de ajedrez: el contrincante puede gritar y mover las piezas con rabia, pero si tú sigues las leyes de la lógica, el jaque mate es inevitable. La verdad siempre da el jaque mate final.",
    "ConexionDoctrinal": ["Lógica", "Hechos Científicos", "Victoria de la Verdad"],
    "NodosSimapticos": ["Jaque Mate de Verdad", "Embate de Realidad", "Batalla de Conciencia"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Juez Oculto": {
    "Definición": "Posición pedagógica y ética que asume Joaquín Trincado para analizar imparcialmente las controversias humanas, basándose en la ley de causa y efecto y el magnetismo espiritual.",
    "Contexto": "Introducción de Primer Rayo de Luz.",
    "Conexiones": ["Justicia Imparcial", "Razón", "Juicio"],
    "Obras": ["Primer Rayo de Luz"]
  },
  "Leyes de Residencia": {
    "Definición": "Referencia a la persecución política y xenófoba utilizada por los poderes religiosos y conservadores para expulsar o silenciar a los pensadores libres y anarquistas.",
    "Contexto": "Crítica política en Primer Rayo de Luz.",
    "Conexiones": ["Persecución", "Fanatismo", "Libertad"],
    "Obras": ["Primer Rayo de Luz"]
  },
  "Anatomía de la Biblia": {
    "Definición": "Método de análisis crítico propuesto por la Escuela para desglosar los textos sagrados, diferenciando entre los mitos dogmáticos, los errores de traducción y las verdades simbólicas subyacentes.",
    "Conexiones": ["Crítica Bíblica", "Simbología", "Higiene Mental"],
    "Obras": ["Primer Rayo de Luz", "Los Extremos se Tocan"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Primer Rayo de Luz (Batch 2 - Rellenando Gaps Medios) y 3 términos sinápticos.');
