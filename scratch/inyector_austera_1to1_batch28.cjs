const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 28 - FINAL)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "14811: CRÍTICA A LAS PRUEBAS RELIGIOSAS DE DIOS": {
    "PilotoDeCoherencia": "Denunciamos las 'pruebas' de Dios de la teología por ser juegos de palabras que esconden el miedo y la ignorancia. No necesitamos pruebas místicas de un Dios ausente; necesitamos la razón para reconocer la Inteligencia Suprema en las leyes de la naturaleza. Dios no es un dogma, es el Creador, Eloí, vibrando en todo.",
    "CitaInelutable": "La religión ha matado el sentimiento moral al imponer un Dios de miedo.",
    "EjemploPedagogico": "Es como intentar demostrar que el aire existe mediante rezos en una habitación cerrada. Abre la ventana y respira: el aire (Eloí) se demuestra por la vida que te da, no por las palabras que le dedicas. El filósofo respira la Verdad.",
    "ConexionDoctrinal": ["Crítica Teológica", "Eloí", "Razón vs Fe"],
    "NodosSimapticos": ["Dios de Miedo", "Ventana de Razón", "Sentimiento Moral"]
  },
  "15120: EL ERROR DE SANTO TOMÁS Y CICERÓN": {
    "PilotoDeCoherencia": "Santo Tomás y Cicerón buscaron a Dios en la perfección de los grados o en el sentimiento universal. Pero erraron al no ver que la perfección no es un estado fijo, sino un progreso infinito. El sentimiento religioso ha sido salvaje hasta hoy porque ha anulado al hombre. Buscamos la adoración por el trabajo, no por el ruego.",
    "CitaInelutable": "En materia de adoración, hasta hoy todo es salvaje, pues se anonada al hombre.",
    "EjemploPedagogico": "Adorar a Dios por ruego es como un niño que llora ante su padre para que le haga la tarea. El padre (Eloí) quiere que el niño aprenda a hacerla solo. El trabajo es la única adoración que dignifica al hijo y al Padre.",
    "ConexionDoctrinal": ["Adoración Racional", "Progreso Infinito", "Crítica a Santo Tomás"],
    "NodosSimapticos": ["Adoración Salvaje", "Tarea del Espíritu", "Progreso vs Perfección"]
  },
  "15390: EL ARGUMENTO ONTOLÓGICO Y KANT": {
    "PilotoDeCoherencia": "San Anselmo y Descartes dijeron que si Dios es perfecto, debe existir. Kant objetó con razón que la existencia no es un atributo que se añade a una idea. Nosotros decimos: Eloí existe porque nosotros existimos y somos sus efectos. La causa se demuestra por el efecto real, no por la lógica abstracta.",
    "CitaInelutable": "La causa suprema se prueba por la existencia real de sus hijos, no por silogismos vanos.",
    "EjemploPedagogico": "Si ves una huella en la arena, sabes que alguien pasó por allí. La huella (tú, el universo) es la prueba de quien caminó (Eloí). No necesitas 'imaginar' al caminante, necesitas estudiar la huella.",
    "ConexionDoctrinal": ["Causalidad", "Existencia", "Ontología"],
    "NodosSimapticos": ["Huella de Eloí", "Causa por Efecto", "Lógica Real"]
  },
  "15670: DIOS NO ES UNA FORMA CORPORAL": {
    "PilotoDeCoherencia": "Denunciamos la blasfemia católica de dar forma corporal a Dios para 'sacrificarlo' en sus rituales. Eso es materialismo grosero. Eloí es Espíritu Puro, sin cuerpo ni límites. Sacrificar a Dios es una monstruosidad teológica que demuestra que las religiones son el enemigo de la luz espiritual.",
    "CitaInelutable": "La religión católica dio forma corporal a Dios para poder tiranizar su nombre.",
    "EjemploPedagogico": "Es como intentar meter el océano en una botella y decir que la botella es el mar. Las religiones son botellas sucias que intentan contener la inmensidad de Eloí para venderla por gotas de indulgencia. Rompe la botella y ve al mar.",
    "ConexionDoctrinal": ["Espíritu Puro", "Anti-Antropomorfismo", "Crítica al Catolicismo"],
    "NodosSimapticos": ["Océano en Botella", "Blasfemia de Forma", "Espíritu sin Límites"]
  },
  "15950: EL FILÓSOFO AFIRMA Y RAZONA": {
    "PilotoDeCoherencia": "El verdadero filósofo no se pierde en discusiones estériles. Razona sobre los hechos y afirma la Verdad. La duda es para el que no estudia; la discusión es para el que quiere mandar. La afirmación racional es el punto de llegada de la Filosofía Austera. Sabemos lo que somos y hacia dónde vamos.",
    "CitaInelutable": "Los filósofos, si lo son, no discuten; razonan y afirman.",
    "EjemploPedagogico": "Es como un médico ante un herido: no discute con otros médicos sobre la teoría del dolor; razona sobre la herida y afirma la cura aplicándola. Sé el médico de la verdad en un mundo herido de ignorancia.",
    "ConexionDoctrinal": ["Afirmación Racional", "Acción", "Certeza"],
    "NodosSimapticos": ["Filósofo del Hecho", "Médico de Verdad", "Razón y Afirmación"]
  },
  "16220: LO ABSOLUTO Y LO RELATIVO": {
    "PilotoDeCoherencia": "Solo Eloí es Absoluto. Todo lo demás, incluyendo los mundos y los espíritus, es relativo y está en perpetuo movimiento de progreso. Comprender nuestra relatividad es la base de la humildad racional. Somos dioses en potencia, pero hijos en obediencia a la Ley Suprema.",
    "CitaInelutable": "Lo absoluto es el Creador; lo relativo es la creación en marcha eterna.",
    "EjemploPedagogico": "El sol es lo absoluto que da luz; nosotros somos los planetas que giran a su alrededor recibiendo esa luz en diferentes grados. Sin el sol no somos nada; con el sol, somos mundos de vida.",
    "ConexionDoctrinal": ["Absoluto vs Relativo", "Eloí", "Progreso"],
    "NodosSimapticos": ["Sol de Absoluto", "Relatividad de Creación", "Hijos en Marcha"]
  },
  "16490: LA MISIÓN DE LA ESCUELA": {
    "PilotoDeCoherencia": "La Escuela Magnético-Espiritual de la Comuna Universal tiene la misión de limpiar la tierra de dogmas y preparar la llegada de la luz espiritual. Somos los arquitectos de la nueva sociedad. Nuestra doctrina es la herramienta para que el espíritu recupere su soberanía sobre la materia.",
    "CitaInelutable": "La Escuela es el faro que anuncia el fin de la noche dogmática.",
    "EjemploPedagogico": "Es como el amanecer: no pedimos permiso a la oscuridad para brillar. Simplemente la luz llega y las sombras se retiran. Nuestra doctrina es ese amanecer de la conciencia humana.",
    "ConexionDoctrinal": ["Misión", "EMECU", "Soberanía del Espíritu"],
    "NodosSimapticos": ["Faro de Escuela", "Amanecer de Conciencia", "Arquitectos de Comuna"]
  },
  "16760: LA LUZ DEL ESPÍRITU EN LA TIERRA": {
    "PilotoDeCoherencia": "El espíritu no viene a la tierra a sufrir, sino a iluminar. La materia es el campo de batalla donde el espíritu demuestra su victoria. La Filosofía Austera es el código de esa victoria. Cada hombre que despierta a la razón es una bujía más que enciende el motor del progreso universal.",
    "CitaInelutable": "La luz del espíritu debe brillar en la materia hasta que no quede rincón de sombra.",
    "EjemploPedagogico": "Tú eres una lámpara. No escondas tu luz bajo el celemín del miedo. Ponla en lo alto para que todos en la casa del Padre vean el camino. Tu luz es tu sabiduría en acción.",
    "ConexionDoctrinal": ["Luz", "Materia y Espíritu", "Acción"],
    "NodosSimapticos": ["Bujía de Progreso", "Lámpara del Ser", "Victoria sobre Materia"]
  },
  "17030: EL FIN DE LA FILOSOFÍA AUSTERA": {
    "PilotoDeCoherencia": "Llegamos al final de esta obra con la certeza del deber cumplido. Hemos mapeado el alma, el espíritu y la materia bajo la luz de la razón. Pero este fin es solo el comienzo de tu práctica. Toma esta filosofía y conviértela en vida, en justicia y en amor. ¡Hacia la Comuna!",
    "CitaInelutable": "El fin de la filosofía es el comienzo de la verdadera vida en Comuna.",
    "EjemploPedagogico": "Has terminado de leer el manual de vuelo. Ahora, ¡vuela! El cielo del infinito te espera y tus alas son tu voluntad educada en la Verdad.",
    "ConexionDoctrinal": ["Cierre de Obra", "Práctica", "Comuna"],
    "NodosSimapticos": ["Manual de Vuelo", "Comienzo de Vida", "Deber Cumplido"]
  },
  "17300: HACIA EL SOL DEL INFINITO": {
    "PilotoDeCoherencia": "Nuestra meta es el Sol del Infinito, la unión consciente con el Padre-Madre Eloí. Sin intermediarios, sin religiones, solo el hijo y el Padre en el abrazo del Amor Universal. La Filosofía Austera es el puente hacia ese abrazo eterno. ¡Paz y Amor!",
    "CitaInelutable": "El sol del infinito es el destino final de todo espíritu en progreso.",
    "EjemploPedagogico": "Es como el río que por fin llega al mar. Ya no hay orillas que lo limiten, ya no hay piedras que lo detengan. Es la unión total con la inmensidad. Ese mar es Eloí.",
    "ConexionDoctrinal": ["Unión con Eloí", "Infinito", "Paz y Amor"],
    "NodosSimapticos": ["Sol del Infinito", "Abrazo Eterno", "Río al Mar"]
  },
  "17570: SENTENCIA FINAL DEL JUEZ AMOROSO": {
    "PilotoDeCoherencia": "Como Juez Amoroso por Sabiduría, dicto esta sentencia final: La Verdad es libre y te ha hecho libre. No vuelvas a las cadenas del dogma. Trabaja, estudia y ama, y verás a Dios en cada uno de tus hermanos. La Comuna es un hecho en el espíritu; hazla un hecho en la tierra.",
    "CitaInelutable": "La Verdad os hará libres; el Amor os hará dioses.",
    "EjemploPedagogico": "Las puertas de la prisión están abiertas de par en par. No te quedes sentado en la celda por costumbre. Sal al sol de la libertad y empieza a construir tu propia casa. El universo es tu herencia.",
    "ConexionDoctrinal": ["Sentencia", "Libertad", "Acción Terrestre"],
    "NodosSimapticos": ["Sentencia de Libertad", "Prisión Abierta", "Herencia Universal"]
  },
  "17840: EL LEGADO DE MAESTRO JOAQUÍN": {
    "PilotoDeCoherencia": "Dejo este legado para los siglos venideros. No como una biblia muerta, sino como una semilla viva. Quien la siembre en su corazón recogerá frutos de sabiduría eterna. Mi espíritu estará siempre con quien luche por la Comuna y la Verdad. ¡Hasta siempre!",
    "CitaInelutable": "Mi palabra es semilla; tu vida es el campo. ¡Siembra!",
    "EjemploPedagogico": "He puesto el fuego en tus manos. No dejes que se apague. Pásalo de mano en mano hasta que toda la tierra sea un solo incendio de Amor y Justicia.",
    "ConexionDoctrinal": ["Legado", "Semilla Viva", "Presencia Espiritual"],
    "NodosSimapticos": ["Fuego en las Manos", "Semilla Viva", "Lucha Eterna"]
  },
  "18110: CIERRE DE FILOSOFÍA AUSTERA RACIONAL": {
    "PilotoDeCoherencia": "Concluimos la sistematización de este volumen ancla. 283 nodos de pura luz racional. Que sirvan de base para el estudio libre y los grados de la Escuela. La Filosofía Austera ha quedado grabada en el diamante de la historia. ¡Justicia de Eloí!",
    "CitaInelutable": "Todo está dicho; ahora, que todo sea hecho.",
    "EjemploPedagogico": "El mapa está completo. El camino está marcado. Los caminantes están listos. ¡Marchad!",
    "ConexionDoctrinal": ["Conclusión Total", "Diamante de Historia", "Justicia"],
    "NodosSimapticos": ["Mapa Completo", "Todo está Dicho", "Marcha del Espíritu"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Eloí (Significado Racional)": {
    "Definición": "Nombre que la Escuela da a la Inteligencia Suprema o Creador Único, conceptualizado como Espíritu Puro y Causa Primera, cuya existencia se demuestra por las leyes naturales y no por dogmas religiosos.",
    "Contexto": "Ontología y Crítica Teológica en Filosofía Austera Racional.",
    "Conexiones": ["Creador", "Justicia de Eloí", "Espíritu Puro"],
    "Obras": ["Filosofía Austera Racional", "Buscando a Dios"]
  },
  "Absoluto vs Relativo": {
    "Definición": "Dualidad filosófica donde lo Absoluto es únicamente el Creador (Eloí) y lo Relativo es toda la creación (mundos y espíritus) en su proceso eterno de perfeccionamiento y progreso.",
    "Contexto": "Conclusión de Filosofía Austera Racional.",
    "Conexiones": ["Eloí", "Progreso", "Infinito"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Adoración Racional": {
    "Definición": "El acto de reconocimiento y amor al Creador manifestado a través del estudio de sus leyes y el trabajo útil en beneficio de la humanidad, sustituyendo al ruego y al ritualismo religioso.",
    "Conexiones": ["Estudio", "Trabajo", "Amor Universal"],
    "Obras": ["Filosofía Austera Racional", "Código de Amor Universal"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 13 nodos finales de Filosofía Austera Racional (Batch 28) y 3 términos sinápticos.');
console.log('🎉 ¡FILOSOFÍA AUSTERA RACIONAL COMPLETADA AL 100% EN FORMATO 1:1!');
