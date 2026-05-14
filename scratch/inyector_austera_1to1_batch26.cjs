const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 26)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "14807: DEFINICIÓN RACIONAL DE LEY": {
    "PilotoDeCoherencia": "La ley no es el capricho de un gobernante, sino la voluntad de la mayoría ordenada por la razón para el bien común. Cualquier norma que no busque el beneficio de todos por igual, no es ley, es una imposición criminal. El espíritu libre solo obedece a la ley que emana de la justicia universal.",
    "CitaInelutable": "Ley quiere decir voluntad de las mayorías ordenada por la razón, con un fin de bien común.",
    "EjemploPedagogico": "Es como las reglas de un juego: si las reglas favorecen solo a un jugador, el juego es una estafa. La ley social debe ser el reglamento que permita que todos los jugadores (ciudadanos) progresen y ganen la vida eterna.",
    "ConexionDoctrinal": ["Ley Racional", "Bien Común", "Soberanía Popular"],
    "NodosSimapticos": ["Voluntad de Mayorías", "Sello de Bien Común", "Reglamento de Vida"]
  },
  "15110: LA USURPACIÓN DE DERECHOS": {
    "PilotoDeCoherencia": "Denunciamos a los poderes autócratas que legislan contra el pueblo. Dictar normas que privilegian a una clase sobre otra es usurpar el derecho sagrado de los hijos de Eloí. El pueblo es el único soberano y tiene el deber de retirar su consentimiento a los tiranos.",
    "CitaInelutable": "Las leyes sin conformidad del pueblo son una imposición autócrata y una usurpación de derechos.",
    "EjemploPedagogico": "Es como un administrador que roba el dinero de la comunidad para sus lujos. La comunidad tiene el derecho y el deber de despedirlo y exigir cuentas. El pueblo es el dueño; el gobernante es solo el administrador.",
    "ConexionDoctrinal": ["Derechos del Hombre", "Antiautocratismo", "Justicia"],
    "NodosSimapticos": ["Usurpación de Derechos", "Pueblo Soberano", "Administrador Infiel"]
  },
  "15380: EL DERECHO A LA REBELIÓN JUSTA": {
    "PilotoDeCoherencia": "Cuando las leyes atacan la moral y la libertad, el pueblo está obligado a derribar al poder injusto. No es una opción, es un deber ético. La paz no puede mantenerse a costa de la esclavitud. La revolución racional es la cirugía necesaria para extirpar el cáncer de la tiranía.",
    "CitaInelutable": "El pueblo está obligado a derribar al poder que ataca la moral y la libertad del hombre.",
    "EjemploPedagogico": "Si un incendio amenaza con quemar la ciudad, no pides permiso para usar el agua de la fuente. Derribas las puertas si es necesario para salvar la vida. La tiranía es el incendio; la rebelión es el agua de la justicia.",
    "ConexionDoctrinal": ["Revolución Racional", "Deber de Rebelión", "Libertad"],
    "NodosSimapticos": ["Rebelión Justa", "Cirugía Social", "Incendio de Tiranía"]
  },
  "15660: EL FIN DE LO ARCAICO — LA NUEVA CONSTITUCIÓN": {
    "PilotoDeCoherencia": "Las constituciones viejas son ropajes que ya no sirven al espíritu progresado. Debemos entregar el mando a asambleas dignas que renueven lo arcaico. La ley debe evolucionar con la conciencia humana. No permitiremos que los muertos (las tradiciones dogmáticas) sigan gobernando a los vivos.",
    "CitaInelutable": "Renovar lo arcaico es la misión de las asambleas dignas en la Comuna.",
    "EjemploPedagogico": "Es como la ropa de un niño: cuando crece, la ropa le aprieta y se rompe. La sociedad ha crecido en espíritu y la constitución vieja le aprieta. Necesitamos un traje nuevo: el Código de Amor Universal.",
    "ConexionDoctrinal": ["Constitución Racional", "Progreso Legislativo", "Comuna"],
    "NodosSimapticos": ["Renovación de lo Arcaico", "Traje del Espíritu", "Asamblea Digna"]
  },
  "15940: LA PUBLICIDAD Y LA TRANSPARENCIA": {
    "PilotoDeCoherencia": "Las leyes no pueden ser secretas. El secreto es el refugio del crimen político. El ciudadano tiene el derecho de conocer y protestar cada norma que le afecte. La transparencia absoluta es el aire que respira la democracia racional. Donde hay sombra, hay injusticia.",
    "CitaInelutable": "El que ignora una ley secreta no está obligado a cumplirla por ley de justicia.",
    "EjemploPedagogico": "Es como jugar al escondite en la oscuridad: no es un juego limpio. La ley debe ser un faro que todos vean y entiendan, para que nadie tropiece por ignorancia impuesta.",
    "ConexionDoctrinal": ["Transparencia", "Democracia Racional", "Luz"],
    "NodosSimapticos": ["Leyes sin Secreto", "Faro de la Norma", "Transparencia Total"]
  },
  "16210: EL ESTADO COMO REPRESENTANTE COLECTIVO": {
    "PilotoDeCoherencia": "El Estado no es un ente superior al hombre, sino el servidor del espíritu colectivo. Su única función es organizar la justicia y el progreso. Denunciamos al Estado-Ídolo que exige sacrificios humanos. En la Comuna, el Estado se disuelve en la administración fraternal de las cosas.",
    "CitaInelutable": "El Estado es el representante de la voluntad social, no su dueño.",
    "EjemploPedagogico": "Es como el sistema nervioso del cuerpo: lleva los mensajes y coordina el movimiento, pero no es el dueño del cuerpo. El dueño es el espíritu. El Estado debe servir al espíritu del pueblo.",
    "ConexionDoctrinal": ["Estado Racional", "Servicio Social", "Comuna"],
    "NodosSimapticos": ["Servidor Colectivo", "Estado-Nervio", "Administración Fraternal"]
  },
  "16480: EL DERECHO INDIVIDUAL FRENTE A LA LEY": {
    "PilotoDeCoherencia": "El derecho individual es sagrado mientras no viole el derecho del hermano. La ley racional protege la individualidad dentro de la armonía social. Si una ley ofende a un solo hombre injustamente, ofende a la humanidad entera. La justicia es indivisible.",
    "CitaInelutable": "El ofendido individual tiene el derecho de protestar la ley en todas las formas.",
    "EjemploPedagogico": "Es como una cadena: si un solo eslabón se rompe, la cadena no sirve. La ley debe cuidar cada eslabón (cada hombre) para que la unión social sea fuerte y duradera.",
    "ConexionDoctrinal": ["Derecho Individual", "Solidaridad", "Justicia Indivisible"],
    "NodosSimapticos": ["Eslabón Sagrado", "Derecho a Protesta", "Unidad de Justicia"]
  },
  "16750: LA ASAMBLEA DIGNA": {
    "PilotoDeCoherencia": "La asamblea digna es el órgano legislativo de la Comuna. Sus miembros no son políticos de carrera, sino hombres de ciencia y conciencia elegidos por su mérito. Su labor es traducir la Ley de Amor en normas de convivencia práctica. Es el cerebro pensante del pueblo soberano.",
    "CitaInelutable": "La asamblea digna es el faro que guía la legislación hacia el sol de la justicia.",
    "EjemploPedagogico": "Es un consejo de sabios y trabajadores que se reúnen para decidir cómo mejorar el riego de los campos de todos. No buscan el poder, buscan que el agua llegue a cada planta.",
    "ConexionDoctrinal": ["Asamblea", "Mérito", "Gobierno Racional"],
    "NodosSimapticos": ["Consejo de Sabios", "Cerebro del Pueblo", "Legislación de Amor"]
  },
  "17020: LA OBLIGACIÓN MORAL DEL CUMPLIMIENTO": {
    "PilotoDeCoherencia": "Cuando la ley es justa y emana de la razón, el cumplimiento es una obligación moral que el espíritu acepta con alegría. No por miedo al castigo, sino por amor al orden y al bien común. El filósofo austero es el ciudadano más ejemplar porque obedece por convicción, no por sumisión.",
    "CitaInelutable": "La obediencia racional es el acto de libertad del hombre que comprende la Ley.",
    "EjemploPedagogico": "Es como seguir las notas de una partitura: no lo haces por miedo al director, sino porque quieres que la música suene perfecta. Cumplir la ley justa es hacer sonar la música de la paz.",
    "ConexionDoctrinal": ["Obediencia Racional", "Convicción", "Orden"],
    "NodosSimapticos": ["Obediencia por Amor", "Partitura Social", "Convicción del Ser"]
  },
  "17290: HACIA EL ESTADO COMUNAL": {
    "PilotoDeCoherencia": "Concluimos que el fin de toda ley y estado es la instauración de la Comuna Universal. Un mundo sin fronteras, sin ejércitos y sin injusticias. Donde el derecho sea la vida y el deber sea el progreso. Estamos construyendo el andamiaje jurídico de la patria única del espíritu.",
    "CitaInelutable": "La meta de la ley racional es la Comuna Universal de Amor y Ley.",
    "EjemploPedagogico": "Estamos construyendo un gran barco para que toda la humanidad cruce el océano del tiempo hacia el sol del infinito. La ley es el timón; el Estado Comunal es el barco; y el Amor es el viento que nos mueve.",
    "ConexionDoctrinal": ["Patria Única", "Comuna Universal", "Futuro de la Humanidad"],
    "NodosSimapticos": ["Estado Comunal", "Timón de Ley", "Océano del Tiempo"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Ley Racional": {
    "Definición": "La expresión de la voluntad de las mayorías, filtrada por la razón y orientada exclusivamente al bien común y la justicia universal.",
    "Contexto": "Sociología y Derecho en Filosofía Austera Racional.",
    "Conexiones": ["Bien Común", "Justicia", "Soberanía Popular"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Derecho a la Rebelión": {
    "Definición": "Deber ético y social del pueblo de derribar a los poderes autócratas cuando estos legislan contra la moral, la libertad o el bienestar colectivo.",
    "Contexto": "Ética Social en Filosofía Austera Racional.",
    "Conexiones": ["Revolución Racional", "Libertad", "Tiranía"],
    "Obras": ["Filosofía Austera Racional", "La Revolución de México"]
  },
  "Asamblea Digna": {
    "Definición": "Órgano de representación y legislación de la Comuna, compuesto por individuos de mérito reconocido, cuya función es armonizar la convivencia social con la Ley de Amor.",
    "Conexiones": ["Gobierno Racional", "Comuna", "Justicia"],
    "Obras": ["Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Filosofía Austera Racional (Batch 26) y 3 términos sinápticos.');
