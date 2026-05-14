const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/el-magnetismo-en-su-origen_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - El Magnetismo en su Origen (Batch 2 - Usos y Grados del Magnetismo)
const nuevosNodos = {
  "807: LOS GENIOS": {
    "PilotoDeCoherencia": "Desmitificación de los llamados 'Genios'. No existen entidades mágicas asignadas a cada poder de la naturaleza. Los que se manifiestan como 'genios' son espíritus de hombres sabios pero recalcitrantes en la maldad, que se divierten con el orgullo y fanatismo del magnetizador imprudente, llevándolo a la impotencia.",
    "CitaInelutable": "No existen genios mágicos, existen espíritus sabios en la maldad que se burlan del ignorante orgulloso.",
    "EjemploPedagogico": "Es como un hacker experimentado divirtiéndose con un usuario novato que cree estar controlando la computadora mágica. El hacker (espíritu recalcitrante) le da falsos triunfos para luego hundirlo.",
    "ConexionDoctrinal": ["Falsos Genios", "Espíritus Burlones", "Peligro del Orgullo"],
    "NodosSimapticos": ["Hacker del Espacio", "Broma Cósmica", "Triunfo Falso"]
  },
  "854: LECCION QUINTA: ¿PARA QUÉ SE USA EL MAGNETISMO?": {
    "PilotoDeCoherencia": "La ley establece que el magnetismo solo puede usarse para el bien. Todo uso malicioso es transgresión y se paga. Se permite su uso defensivo (como escudo) y para la protección de terceros, operando siempre bajo el mandato supremo de 'Ama a tu hermano'.",
    "CitaInelutable": "El magnetismo es un arma divina autorizada para la defensa propia, jamás para la ofensa.",
    "EjemploPedagogico": "Es como las artes marciales: el verdadero maestro no las usa para atacar, sino para proteger al débil y desviar el golpe del agresor. El magnetismo es el arte marcial del espíritu.",
    "ConexionDoctrinal": ["Uso Defensivo", "Magnetismo para el Bien", "Ley de Amor"],
    "NodosSimapticos": ["Arte Marcial Espiritual", "Escudo Fluídico", "Prohibición de Ofensa"]
  },
  "897: EL MAGNETISMO EN LAS ENFERMEDADES": {
    "PilotoDeCoherencia": "Para curar magnéticamente se requieren dos condiciones: que el operador cumpla los requisitos morales/fluídicos y que el enfermo sea 'accesible'. Si el enfermo no es accesible (por causas de prueba o desequilibrio extremo), la cura física fracasa y debe recurrirse a la influencia espiritual pura. El magnetismo no es magia médica.",
    "CitaInelutable": "Donde no hay afinidad ni accesibilidad, el magnetismo físico no penetra.",
    "EjemploPedagogico": "Es como intentar conectar un enchufe en una pared de otra medida: la energía (magnetismo) está, pero el receptor (enfermo) no encaja. Hay que adaptar el receptor o no habrá luz.",
    "ConexionDoctrinal": ["Accesibilidad Fluídica", "Curación Magnética", "Condiciones del Operador"],
    "NodosSimapticos": ["Enchufe Fluídico", "Receptor Bloqueado", "Condición de Cura"]
  },
  "954: LA REGENERACIÓN POR EL MAGNETISMO": {
    "PilotoDeCoherencia": "El paciente queda momentáneamente bajo el poder del magnetizador. El peligro de este poder desaparece si el magnetizador obedece a las leyes del 'Método Supremo' de la Escuela, que exige superioridad moral. El verdadero operador no se relaciona con falsos genios, sino con la cosmogonía infinita.",
    "CitaInelutable": "El operador del Método Supremo no invoca genios, se conecta a la central del Universo.",
    "EjemploPedagogico": "Es como la anestesia general: el paciente entrega su vida al cirujano. Si el cirujano es ético (magnetizador racional), sale curado; si es un criminal, es un peligro. La ética de la Escuela es la garantía de la anestesia magnética.",
    "ConexionDoctrinal": ["Regeneración", "Ética del Operador", "Conexión Cósmica"],
    "NodosSimapticos": ["Anestesia Magnética", "Cirujano Ético", "Peligro Anulado"]
  },
  "1039: LECCIÓN SEXTA: GRADOS ESENCIALES DEL MAGNETISMO": {
    "PilotoDeCoherencia": "Clasificación de los estados magnéticos inducidos. Aunque hay grados infinitos intermedios, la Escuela establece seis esenciales para el estudio: Sopor, Sueño Inconsciente, Catalepsia Consciente, Sonambulismo, Telepatía y Desdoblamiento. Estos grados son peldaños de la emancipación del alma controlada por la razón.",
    "CitaInelutable": "Los grados del magnetismo son los escalones por donde el espíritu sale de su prisión de carne.",
    "EjemploPedagogico": "Es como la caja de cambios de un vehículo: cada marcha (grado) permite mayor velocidad e independencia del motor sobre el peso del chasis. El Maestro enseña a pasar las marchas sin romper el motor.",
    "ConexionDoctrinal": ["Escala Magnética", "Grados Esenciales", "Emancipación del Alma"],
    "NodosSimapticos": ["Marchas del Espíritu", "Peldaños Fluídicos", "Control Gradual"]
  },
  "1068: GRADO PRIMERO: SOPOR LETÁRGICO": {
    "PilotoDeCoherencia": "El primer efecto de la acción magnética. Se presenta como un suave desvanecimiento o aletargamiento. El alma aún no se separa, la materia cede placenteramente y la inteligencia se mantiene lúcida. Es el primer contacto donde el magnetizado empieza a recibir la influencia del operador.",
    "CitaInelutable": "El sopor es la tregua inicial que la materia concede al magnetismo.",
    "EjemploPedagogico": "Es como el momento justo antes de dormir: estás en la cama, los músculos se relajan, la mente divaga pero sigues escuchando los ruidos de la casa. Así empieza el trance.",
    "ConexionDoctrinal": ["Sopor", "Aletargamiento", "Contacto Inicial"],
    "NodosSimapticos": ["Tregua de la Carne", "Relajación Magnética", "Umbral del Trance"]
  },
  "1101: GRADO SEGUNDO: SUEÑO INCONSCIENTE": {
    "PilotoDeCoherencia": "El espíritu comienza a asomarse a la superficie del cuerpo pero aún teme separarse. Si el operador lo asiste con palabras y proyecciones amorosas, mostrándole cuadros de seguridad e invocando guías, el espíritu del magnetizado pierde el miedo ('por si acaso') y confía en el proceso.",
    "CitaInelutable": "En el sueño inconsciente, el espíritu se asoma a la ventana de la materia pero teme saltar.",
    "EjemploPedagogico": "Es como el niño en el borde de la piscina: quiere saltar pero le da miedo el agua. El magnetizador es el padre que desde el agua le da seguridad para que salte.",
    "ConexionDoctrinal": ["Miedo del Espíritu", "Asistencia del Operador", "Sueño Inconsciente"],
    "NodosSimapticos": ["Niño en la Piscina", "Ventana de la Materia", "Confianza Magnética"]
  },
  "1116: GRADO TERCERO: CATALEPSIA O SUEÑO PROFUNDO CONSCIENTE": {
    "PilotoDeCoherencia": "Estado de sueño profundo donde el magnetizado entra con plena voluntad, sabiendo que es un instrumento útil. El alma asume su rol de 'periespíritu' o traje del espíritu fuera de la densidad física. Se prohíbe terminantemente en la Escuela toda prueba violenta (perforar con agujas, armas) porque es profanar el cuerpo y abusar del trance.",
    "CitaInelutable": "La catalepsia es para investigar el espíritu, no para clavar agujas en la materia como en un circo.",
    "EjemploPedagogico": "El trance no es un espectáculo de faquires. Es como tener acceso a un telescopio potentísimo: un sabio mira las estrellas, un necio lo usa de martillo.",
    "ConexionDoctrinal": ["Catalepsia Consciente", "Prohibición de Violencia", "Abuso del Trance"],
    "NodosSimapticos": ["Falso Espectáculo", "Trance de Estudio", "Respeto al Vehículo"]
  },
  "1143: GRADO CUARTO: SONAMBULISMO LÚCIDO O VERBAL": {
    "PilotoDeCoherencia": "El 'desiderátum' de la magnetización. Requiere gran desarrollo y educación ética, pues el sonámbulo se emancipa y puede hablar con claridad. No debe limitarse a leer el pensamiento del operador, sino que se le debe enviar a investigar espacios o situaciones y relatar fielmente lo que observa.",
    "CitaInelutable": "El sonámbulo lúcido es el corresponsal del operador enviado al mundo invisible.",
    "EjemploPedagogico": "Es como un dron de exploración: el operador lo dirige hacia una zona desconocida, pero lo que la cámara (el sonámbulo) transmite es objetivo e independiente del operador.",
    "ConexionDoctrinal": ["Sonambulismo Lúcido", "Investigación a Distancia", "Emancipación Verbal"],
    "NodosSimapticos": ["Dron Espiritual", "Corresponsal Invisible", "Visión Objetiva"]
  },
  "1196: GRADO QUINTO: TELEPATÍA CONSCIENTE A DISTANCIA": {
    "PilotoDeCoherencia": "Grado muy elevado, utilizado para el bien común. El operador dirige al sonámbulo para que, a distancia y a una hora fija, transmita pensamientos e inspire decisiones beneficiosas en personas clave (líderes, autoridades). Es la acción magnética ejecutiva operando a través de la solidaridad universal.",
    "CitaInelutable": "La telepatía magnética es el consejo invisible que salva a un pueblo desde el silencio.",
    "EjemploPedagogico": "Es como una embajada secreta: el operador envía al diplomático (sonámbulo) a susurrar la paz en el oído del presidente enemigo mientras este duerme, sin usar fuerza física.",
    "ConexionDoctrinal": ["Telepatía Directiva", "Inspiración a Distancia", "Acción Ejecutiva"],
    "NodosSimapticos": ["Diplomacia Invisible", "Susurro de Paz", "Embajador Fluídico"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Sopor Letárgico": {
    "Definición": "Primer grado de la acción magnética caracterizado por un aletargamiento suave y placentero donde la inteligencia permanece lúcida y la materia cede al contacto inicial.",
    "Contexto": "Lección VI (Grados del Magnetismo) de El Magnetismo en su Origen.",
    "Conexiones": ["Magnetismo", "Trance", "Relajación"],
    "Obras": ["El Magnetismo en su Origen"]
  },
  "Sonambulismo Lúcido": {
    "Definición": "Cuarto grado magnético donde el sujeto se emancipa lo suficiente para actuar como investigador verbal en el plano invisible, transmitiendo información de forma independiente al pensamiento del operador.",
    "Contexto": "Lección VI de El Magnetismo en su Origen.",
    "Conexiones": ["Desdoblamiento", "Investigación", "Visión"],
    "Obras": ["El Magnetismo en su Origen", "El Espiritismo Estudiado"]
  },
  "Telepatía Magnética": {
    "Definición": "Quinto grado magnético. Capacidad directiva de influir a distancia, inspirando pensamientos beneficiosos en terceros, operado a través del sonámbulo en favor del progreso común.",
    "Contexto": "Lección VI de El Magnetismo en su Origen.",
    "Conexiones": ["Telepatía", "Influencia a Distancia", "Sugestión"],
    "Obras": ["El Magnetismo en su Origen"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de El Magnetismo en su Origen (Batch 2 - Grados) y 3 términos sinápticos.');
