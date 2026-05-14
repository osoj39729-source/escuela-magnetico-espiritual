const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 7)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "8395: CAPÍTULO XII — LA PSICOLOGÍA EN INGLATERRA E ITALIA": {
    "PilotoDeCoherencia": "Inglaterra e Italia han aportado el método experimental, pero se han quedado en la superficie de los nervios. Denuncio que la psicología experimental intenta 'embotellar' al espíritu en estadísticas. Mi Escuela toma el dato experimental pero lo eleva a la causa espiritual. El experimento sin espíritu es una disección de un cadáver.",
    "CitaInelutable": "El experimento demuestra el hecho, pero solo la razón espiritual explica la ley.",
    "EjemploPedagogico": "Es como alguien que cuenta cuántas veces late un corazón pero no sabe por qué ese corazón late de alegría o de miedo. La psicología experimental cuenta los latidos; nosotros conocemos el sentimiento del espíritu que los provoca.",
    "ConexionDoctrinal": ["Psicología Experimental", "Hechos vs Ley", "Asociacionismo"],
    "NodosSimapticos": ["Psicología en Inglaterra", "Estadística del Alma", "Disección de la Verdad"]
  },
  "8530: TERCERA PARTE — FISIOLOGÍA — EL INSTRUMENTO DEL ESPÍRITU": {
    "PilotoDeCoherencia": "Estudiamos el cuerpo humano no como una máquina ciega, sino como el instrumento sagrado del espíritu. La fisiología racional es el mapa de la encarnación. El cuerpo es el taller donde el espíritu labra su piedra. Quien desprecia el cuerpo, desprecia la herramienta que Eloí le dio para progresar.",
    "CitaInelutable": "El cuerpo es el templo vivo donde el espíritu oficia su sacerdocio de progreso.",
    "EjemploPedagogico": "El cuerpo es el traje de buzo que el espíritu se pone para bajar a las profundidades de la materia. Debes conocer cada válvula y cada conexión de tu traje si quieres realizar tu misión sin ahogarte en el error.",
    "ConexionDoctrinal": ["Cuerpo Instrumento", "Encarnación", "Fisiología Racional"],
    "NodosSimapticos": ["Fisiología Racional", "Templo Vivo", "Traje de Buzo"]
  },
  "8845: CAPÍTULO I — EL SISTEMA NERVIOSO": {
    "PilotoDeCoherencia": "El sistema nervioso es la red de cables por donde circula la voluntad del espíritu. Es la frontera entre lo inmaterial y lo material. Estudiamos su anatomía para comprender cómo el pensamiento se convierte en acción y cómo la sensación se convierte en conciencia.",
    "CitaInelutable": "El sistema nervioso es el telégrafo del espíritu.",
    "EjemploPedagogico": "Es como la red eléctrica de una ciudad. Si los cables están pelados o en cortocircuito (vicios), la luz no llega a las casas (las células). La salud es la integridad de esta red.",
    "ConexionDoctrinal": ["Sistema Nervioso", "Telégrafo Espiritual", "Salud"],
    "NodosSimapticos": ["Red de Voluntad", "Telégrafo del Espíritu", "Salud Nerviosa"]
  },
  "9120: EL GRAN SIMPÁTICO — EL DIRECTOR DE LA VIDA INVOLUNTARIA": {
    "PilotoDeCoherencia": "El Gran Simpático es el encargado de las funciones vitales que el espíritu no necesita vigilar conscientemente: nutrición, latido, secreción. Es el automatismo sagrado. Denuncio que las emociones desordenadas afectan este sistema, enfermando el cuerpo desde el espíritu.",
    "CitaInelutable": "El Gran Simpático es el centinela que nunca duerme para mantener la vida.",
    "EjemploPedagogico": "Es como el piloto automático de un avión: mantiene el vuelo mientras el piloto (el espíritu) se ocupa de las tareas superiores. Pero si el piloto entra en pánico (emociones), el piloto automático también falla.",
    "ConexionDoctrinal": ["Gran Simpático", "Vida Vegetativa", "Emociones"],
    "NodosSimapticos": ["Centinela de la Vida", "Piloto Automático", "Automatismo Sagrado"]
  },
  "9350: EL ENCÉFALO — EL PALACIO DEL PENSAMIENTO": {
    "PilotoDeCoherencia": "El encéfalo es la sede de la conciencia activa en la materia. No es que el encéfalo piense, sino que es el lugar donde el espíritu 'se sienta' para pensar en el mundo físico. Cada circunvolución es un archivo; cada centro es una herramienta de mando.",
    "CitaInelutable": "El encéfalo es el trono donde el espíritu reina sobre sus dominios materiales.",
    "EjemploPedagogico": "Es el palacio de gobierno. Los nervios son los mensajeros que traen noticias de las fronteras (los sentidos) y llevan órdenes del Rey (el espíritu). Un palacio desordenado es un gobierno ineficaz.",
    "ConexionDoctrinal": ["Encéfalo", "Sede de la Conciencia", "Mando Espiritual"],
    "NodosSimapticos": ["Palacio del Pensamiento", "Trono del Espíritu", "Gobierno del Ser"]
  },
  "9584: CAPÍTULO IV — LAS SENSACIONES": {
    "PilotoDeCoherencia": "La sensación es el contacto del espíritu con el exterior a través del sistema nervioso. No es un proceso puramente químico. Es una vibración que el espíritu interpreta. Denunciamos que se ha materializado la sensación, olvidando que solo el espíritu siente de verdad.",
    "CitaInelutable": "La sensación es el lenguaje con el que la naturaleza habla al espíritu.",
    "EjemploPedagogico": "Es como tocar un piano: la tecla es el sentido, el martillo es el nervio, pero el sonido que se produce es para el oído del espíritu. Sin espíritu, la tecla se mueve pero no hay música.",
    "ConexionDoctrinal": ["Sensaciones", "Interpretación Espiritual", "Naturaleza"],
    "NodosSimapticos": ["Lenguaje de Sensación", "Música del Espíritu", "Contacto con la Realidad"]
  },
  "9850: LA FISIOLOGÍA DE LOS SENTIDOS": {
    "PilotoDeCoherencia": "Analizamos la vista, el oído, el tacto, el gusto y el olfato como herramientas de precisión. Cada sentido está diseñado para percibir una gama específica de vibraciones de la materia. El espíritu debe aprender a usar estas herramientas sin dejarse engañar por las ilusiones ópticas o sensoriales.",
    "CitaInelutable": "Los sentidos son las herramientas de precisión que Eloí dio al espíritu para explorar la materia.",
    "EjemploPedagogico": "Son como microscopios y telescopios: nos permiten ver lo que está lejos o lo que es pequeño. Pero si la lente está sucia, verás manchas que no existen. La lente debe ser limpiada por la razón.",
    "ConexionDoctrinal": ["Sentidos", "Vibración", "Ilusión Sensorial"],
    "NodosSimapticos": ["Herramientas de Precisión", "Lente de la Razón", "Exploración Material"]
  },
  "10120: LA RELACIÓN CEREBRO-ESPINAL": {
    "PilotoDeCoherencia": "La médula espinal y el cerebro forman una unidad de mando. Es el eje de la verticalidad humana. Mi Escuela enseña que la postura física influye en la claridad espiritual. Un eje recto permite una circulación fluida de las corrientes magnéticas del espíritu.",
    "CitaInelutable": "El eje cerebro-espinal es la columna de luz del cuerpo humano.",
    "EjemploPedagogico": "Es como el mástil de un barco: si está torcido, las velas (el pensamiento) no captan bien el viento (la intuición). Mantén tu eje recto para navegar con fuerza.",
    "ConexionDoctrinal": ["Eje Cerebro-Espinal", "Magnetismo", "Postura"],
    "NodosSimapticos": ["Columna de Luz", "Eje de Verticalidad", "Mástil del Pensamiento"]
  },
  "10380: EL PAPEL DE LAS VISCERAS EN LA SENSIBILIDAD": {
    "PilotoDeCoherencia": "Las vísceras no son solo órganos de digestión; son también centros de sensibilidad anímica (centros nerviosos viscerales). Por eso el miedo se siente en el estómago y la angustia en el pecho. El espíritu está presente en sus vísceras y debe gobernarlas para evitar que las pasiones animales lo dominen.",
    "CitaInelutable": "Las vísceras son los laboratorios químicos donde el espíritu procesa las emociones.",
    "EjemploPedagogico": "Son los fogones de la casa: si el fuego es demasiado fuerte, la comida se quema; si es demasiado débil, no se cocina. El espíritu debe regular el fuego de sus emociones en las vísceras.",
    "ConexionDoctrinal": ["Vísceras", "Emociones", "Gobierno del Cuerpo"],
    "NodosSimapticos": ["Laboratorios de Emoción", "Fogones del Ser", "Sensibilidad Visceral"]
  },
  "10650: CONCLUSIÓN DE LA FISIOLOGÍA RACIONAL": {
    "PilotoDeCoherencia": "Concluimos que el cuerpo humano es la obra maestra de la ingeniería universal. Cada parte tiene un propósito espiritual. No hay nada 'sucio' o 'bajo' en el cuerpo si se usa según la Ley. La fisiología racional nos lleva a la gratitud hacia el Creador por este instrumento de progreso.",
    "CitaInelutable": "Conocer el cuerpo es admirar la sabiduría de Eloí plasmada en la materia.",
    "EjemploPedagogico": "Hemos recorrido la fábrica. Hemos visto las máquinas, los cables y los motores. Ahora sabemos que el Dueño de la fábrica es el Espíritu y que la fábrica debe producir el bien de todos.",
    "ConexionDoctrinal": ["Gratitud", "Ingeniería Universal", "Finalidad Espiritual"],
    "NodosSimapticos": ["Obra Maestra", "Fábrica del Progreso", "Sabiduría Plasmada"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Gran Simpático": {
    "Definición": "Parte del sistema nervioso que regula las funciones vitales automáticas e involuntarias, actuando como el nexo directo entre el espíritu y la preservación biológica del cuerpo.",
    "Contexto": "Capítulo I de la Tercera Parte de Filosofía Austera Racional.",
    "Conexiones": ["Sistema Nervioso", "Vida Vegetativa", "Emociones"],
    "Obras": ["Filosofía Austera Racional", "Profilaxis de la Vida"]
  },
  "Encéfalo": {
    "Definición": "El conjunto de centros nerviosos superiores donde el espíritu establece su sede de mando consciente para operar en el mundo físico y procesar el pensamiento racional.",
    "Contexto": "Capítulo I de la Tercera Parte de Filosofía Austera Racional.",
    "Conexiones": ["Cerebro Dínamo", "Sede de la Conciencia", "Mando Espiritual"],
    "Obras": ["Filosofía Austera Racional", "Psicología Racional"]
  },
  "Fisiología Racional": {
    "Definición": "El estudio de las funciones del cuerpo humano bajo la premisa de que este es el instrumento del espíritu, diseñado para el progreso y la manifestación de la Ley de Amor en la materia.",
    "Conexiones": ["Cuerpo Instrumento", "Espíritu", "Progreso"],
    "Obras": ["Filosofía Austera Racional", "Profilaxis de la Vida"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Filosofía Austera Racional (Batch 7) y 3 términos sinápticos.');
