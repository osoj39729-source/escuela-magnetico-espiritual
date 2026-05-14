const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 18)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "14793: EL PARTO DE LA TIERRA — EL NACIMIENTO DE LA LUNA": {
    "PilotoDeCoherencia": "Explicamos el origen de la Luna como un desprendimiento de la masa terrestre. La Tierra 'parió' su satélite en un momento de gran convulsión. Este hecho cambió la gravedad y el magnetismo del planeta, preparando el escenario para una vida más refinada. La Luna es parte de nuestra carne planetaria.",
    "CitaInelutable": "La Luna nació de la entraña de la Tierra para ser su espejo y regulador magnético.",
    "EjemploPedagogico": "Es como una madre que da a luz: el hijo es parte de su cuerpo pero ahora tiene su propia órbita. La Luna sigue unida a la Tierra por el cordón umbilical del magnetismo, influyendo en las mareas y en la vida misma.",
    "ConexionDoctrinal": ["Cosmogonía", "Luna", "Magnetismo Planetario"],
    "NodosSimapticos": ["Parto de la Tierra", "Hija de la Tierra", "Espejo Magnético"]
  },
  "15075: VEGETACIÓN ABRUPTA Y ANIMALES GIGANTES": {
    "PilotoDeCoherencia": "Antes del hombre, la Tierra era un taller de ensayo. La vegetación era leñosa y gigante; los animales eran monstruosos. Eran formas necesarias para procesar la materia densa y preparar la atmósfera. No eran 'errores' de la naturaleza, sino peldaños de fuerza bruta antes de la llegada de la inteligencia.",
    "CitaInelutable": "La frondosidad precedió al fruto, como la fuerza precedió a la razón.",
    "EjemploPedagogico": "Es como el desescombro de un terreno antes de construir una casa: necesitas máquinas pesadas y ruidosas. Los dinosaurios y los bosques de carbón fueron las máquinas pesadas de Eloí para limpiar el mundo.",
    "ConexionDoctrinal": ["Paleontología Racional", "Evolución", "Preparación Planetaria"],
    "NodosSimapticos": ["Fuerza Bruta", "Taller de Ensayo", "Gigantes de la Tierra"]
  },
  "15345: LA METAMORFOSIS DE LAS ALMAS": {
    "PilotoDeCoherencia": "La evolución no es solo de cuerpos, sino de almas (fluidos anímicos). La fiereza de los primeros animales se metamorfoseó en mansedumbre a medida que el alma colectiva se refinaba. La exuberancia de la materia disminuyó para ganar en finura y utilidad para el espíritu.",
    "CitaInelutable": "La fiereza se fundió en mansedumbre por la ley de refinamiento del alma.",
    "EjemploPedagogico": "Es como el hierro: primero es una roca sucia y dura. Pasado por el fuego del progreso, se convierte en acero fino y flexible. La vida es el fuego que refina el alma de las especies.",
    "ConexionDoctrinal": ["Refinamiento", "Alma Colectiva", "Progreso de las Especies"],
    "NodosSimapticos": ["Metamorfosis de Almas", "De la Fiereza a la Mansedumbre", "Acero del Espíritu"]
  },
  "15625: EL ENTIERRO DE LA VIDA — LAS CAPAS GEOLÓGICAS": {
    "PilotoDeCoherencia": "Los cataclismos que enterraron bosques y animales enteros fueron actos de sabiduría divina. La Tierra guardó esas esencias en su vientre (carbón, petróleo) para que el hombre del futuro tuviera la energía necesaria para su progreso. Nada se pierde; la muerte es solo un almacenamiento de vida.",
    "CitaInelutable": "La tierra enterró la vida vieja para alimentar la vida nueva del hombre.",
    "EjemploPedagogico": "Es como una despensa: la madre guarda los frutos del verano en conservas para que la familia tenga qué comer en el invierno. Las capas geológicas son la despensa de Eloí para sus hijos.",
    "ConexionDoctrinal": ["Geología Racional", "Transformación", "Providencia"],
    "NodosSimapticos": ["Entierro Sabio", "Despensa Geológica", "Ahorro de Vida"]
  },
  "15905: EL REBROTE DE LAS ESPECIES FINAS": {
    "PilotoDeCoherencia": "Tras el entierro de la vida gigante, rebrotaron las especies más pequeñas pero más nutritivas. El trigo, las frutas y los animales domésticos aparecieron para sustentar al hombre. La naturaleza se hizo 'delicada' para recibir al ser más delicado: el espíritu encarnado.",
    "CitaInelutable": "La naturaleza se hizo fina para nutrir al espíritu que llegaba.",
    "EjemploPedagogico": "Es como preparar la habitación del recién nacido: quitas los muebles pesados y pones cosas suaves y alimentos tiernos. El rebrote de las especies fue la cuna que la Tierra preparó para la humanidad.",
    "ConexionDoctrinal": ["Infancia de la Humanidad", "Nutrición", "Armonía Natural"],
    "NodosSimapticos": ["Rebrote Fino", "Cuna del Hombre", "Frutos del Espíritu"]
  },
  "16175: AFINIDAD DE INSTINTOS Y ESENCIAS": {
    "PilotoDeCoherencia": "Cada especie nueva absorbe de la tierra las esencias y los instintos que le son afines por vibración. No hay azar en la biología. El alma de cada especie 'sabe' qué tomar para seguir su línea de progreso. La afinidad es la ley que mantiene la identidad de los linajes de vida.",
    "CitaInelutable": "La especie absorbe lo que le es afín en la inmensa masa de la vida enterrada.",
    "EjemploPedagogico": "Es como una radio que sintoniza una emisora: aunque el aire esté lleno de ondas, la radio solo hace sonar la que coincide con su frecuencia. La especie sintoniza su propia vida.",
    "ConexionDoctrinal": ["Afinidad Vibratoria", "Linajes de Vida", "Identidad"],
    "NodosSimapticos": ["Sintonía Biológica", "Linajes de Vida", "Imán de Esencias"]
  },
  "16445: LA INFANCIA DE LA HUMANIDAD": {
    "PilotoDeCoherencia": "El hombre no apareció en un mundo hostil, sino en un mundo preparado amorosamente. Los 'largos primeros días' fueron una infancia protegida por la naturaleza misma. El espíritu humano debió aprender a usar su instrumento en un ambiente de abundancia y finura, antes de tener que luchar por el progreso.",
    "CitaInelutable": "La humanidad tuvo una infancia de luz antes de las sombras del dogma.",
    "EjemploPedagogico": "Miras a un niño en su cuna: todo está a su alcance, sin esfuerzo. Así fue el comienzo del hombre en la Tierra, rodeado de frutas finas y animales mansos, hasta que despertó su voluntad.",
    "ConexionDoctrinal": ["Origen del Hombre", "Edén Racional", "Protección Natural"],
    "NodosSimapticos": ["Infancia de Humanidad", "Edén de Razón", "Días de Luz"]
  },
  "16715: LA CREACIÓN CONTINUADA": {
    "PilotoDeCoherencia": "La creación no terminó en seis días. Es continuada y eterna. La Tierra sigue gestando nuevas formas y el espíritu sigue creando nuevas ideas. Negamos el concepto de un Dios descansando; Eloí es acción perpetua y nosotros somos sus colaboradores.",
    "CitaInelutable": "La creación es un parto eterno que no tiene descanso.",
    "EjemploPedagogico": "Es como un fuego que siempre necesita leña y siempre da calor. El Creador es el fuego; la leña es nuestra obra; y el calor es el progreso que nunca se detiene.",
    "ConexionDoctrinal": ["Acción Perpetua", "Progreso Infinito", "Deber del Ser"],
    "NodosSimapticos": ["Creación Eterna", "Acción de Eloí", "Colaboradores del Padre"]
  },
  "16985: EL ALMA COLECTIVA DE LAS ESPECIES": {
    "PilotoDeCoherencia": "Antes de la individualización espiritual, existe el alma colectiva de la especie. Es un fluido común que dirige al grupo. Esta alma colectiva es la que se refina y se funde hasta que, en el hombre, el espíritu individual toma el mando. Es el camino del 'uno' hacia el 'yo'.",
    "CitaInelutable": "Del alma colectiva nace la base para el espíritu individual.",
    "EjemploPedagogico": "Es como un río: al principio todas las gotas van juntas y revueltas (alma colectiva). Luego, una gota se separa en un cuenco de plata (el cuerpo humano) y dice 'yo soy yo'. El cuenco es la individualidad.",
    "ConexionDoctrinal": ["Alma Colectiva", "Individualización", "Fluido Anímico"],
    "NodosSimapticos": ["Alma de Especie", "Del Uno al Yo", "Río de Vida"]
  },
  "17255: LA SABIDURÍA DEL COSMOS": {
    "PilotoDeCoherencia": "Concluimos que el cosmos es una mente pensante. Cada astro, cada planeta y cada ser tiene un lugar y una función. Nada es por azar. El estudio de la cosmogonía racional nos lleva a la adoración de la inteligencia suprema que todo lo rige con justicia y amor.",
    "CitaInelutable": "El universo es el pensamiento de Eloí escrito en las estrellas y en las almas.",
    "EjemploPedagogico": "Mira el cielo nocturno: parece un desorden de luces. Pero el astrónomo sabe que cada una tiene su órbita y su ley. La filosofía austera es la astronomía del alma que ve el orden donde otros ven caos.",
    "ConexionDoctrinal": ["Orden Universal", "Eloí", "Cosmología"],
    "NodosSimapticos": ["Pensamiento de Eloí", "Orden Estelar", "Inteligencia Cósmica"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Parto de la Tierra": {
    "Definición": "Concepto cosmogónico que describe el desprendimiento de la Luna desde la masa terrestre primordial, marcando un cambio fundamental en el equilibrio magnético y gravitatorio del planeta.",
    "Contexto": "Cosmogonía Racional en Filosofía Austera Racional.",
    "Conexiones": ["Luna", "Magnetismo Planetario", "Evolución"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Metamorfosis de las Almas": {
    "Definición": "El proceso de refinamiento de los fluidos anímicos colectivos de las especies, que transforma la agresividad instintiva en mansedumbre y la tosquedad material en finura útil para el espíritu.",
    "Contexto": "Paleontología Racional en Filosofía Austera Racional.",
    "Conexiones": ["Refinamiento", "Alma Colectiva", "Evolución"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Infancia de la Humanidad": {
    "Definición": "Periodo inicial de la estancia del espíritu humano en la Tierra, caracterizado por una naturaleza armónica y preparada que facilitó el despertar de la conciencia en un ambiente de paz y abundancia.",
    "Conexiones": ["Edén Racional", "Origen del Hombre", "Progreso"],
    "Obras": ["Filosofía Austera Racional", "Buscando a Dios"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Filosofía Austera Racional (Batch 18) y 3 términos sinápticos.');
