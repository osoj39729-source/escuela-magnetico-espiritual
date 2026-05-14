const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 25)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "14805: EL ORIGEN DE LAS CARIÁTIDES": {
    "PilotoDeCoherencia": "Explicamos el origen de las columnas cariátides como un monumento a la humillación de las mujeres de Carianda. Los griegos las obligaron a cargar el peso de los templos como castigo. Lo que hoy se ve como 'arte', es en realidad el registro de una crueldad histórica contra la mujer y la libertad.",
    "CitaInelutable": "La arquitectura inmortalizó en las cariátides el peso de la injusticia griega sobre la mujer.",
    "EjemploPedagogico": "Es como si hoy hiciéramos estatuas de esclavos cargando edificios para 'adornar' nuestras calles. El arte sin moral es un insulto a la razón. El filósofo debe ver la historia de dolor que hay detrás de cada columna.",
    "ConexionDoctrinal": ["Historia Racional", "Cariátides", "Humillación"],
    "NodosSimapticos": ["Columnas de Dolor", "Monumento a Crueldad", "Mujeres de Carianda"]
  },
  "15105: CICERÓN Y LA PALABRA CHARITAS": {
    "PilotoDeCoherencia": "Revelamos que Cicerón creó la palabra 'Charitas' no para pedir limosna, sino para denunciar la inhumanidad de los griegos contra las mujeres de Carianda. Era un himno al amor, valor y cordura de aquellas mujeres que soportaron el peso con dignidad. La charitas original es amor heroico, no compasión humillante.",
    "CitaInelutable": "Charitas es el himno al valor y amor de las mujeres cariandanas, hoy desfigurado por el dogma.",
    "EjemploPedagogico": "Es como una medalla al valor que un general le da a un héroe. Con el tiempo, esa medalla es robada por un mendigo que la usa para dar lástima. La religión es el mendigo que robó la medalla de la charitas de Cicerón.",
    "ConexionDoctrinal": ["Cicerón", "Etimología Racional", "Amor Heroico"],
    "NodosSimapticos": ["Himno de Cicerón", "Amor Heroico", "Robo de Palabras"]
  },
  "15375: LA DEVALUACIÓN RELIGIOSA DE LA CARIDAD": {
    "PilotoDeCoherencia": "Denunciamos cómo las religiones convirtieron la 'Charitas' (amor heroico) en 'Caridad' (limosna). Esta deformación busca mantener al pobre en la miseria y al rico en la soberbia de 'dar'. La caridad religiosa es un parche que oculta la falta de justicia social. Odiamos la caridad porque amamos la justicia.",
    "CitaInelutable": "La caridad de las religiones es el insulto que el rico lanza al rostro del pobre.",
    "EjemploPedagogico": "Es como si alguien te rompe una pierna (injusticia) y luego te regala una muleta de mala calidad (caridad) para que le des las gracias. Nosotros no queremos muletas, queremos que nadie rompa piernas.",
    "ConexionDoctrinal": ["Crítica a la Caridad", "Justicia Social", "Hipocresía"],
    "NodosSimapticos": ["Insulto de Limosna", "Parche de Injusticia", "Muletas de Religión"]
  },
  "15655: AMOR VS CARIDAD": {
    "PilotoDeCoherencia": "En Mi Escuela sustituimos la caridad por el Amor y la Justicia. El Amor reconoce al hermano como igual; la caridad lo mira desde arriba. La Justicia da a cada uno lo que le corresponde por su trabajo; la caridad da lo que le sobra al ocioso. En la Comuna no existe la caridad porque reina la Justicia.",
    "CitaInelutable": "Donde hay Justicia, el Amor florece; donde hay caridad, el espíritu se envilece.",
    "EjemploPedagogico": "Es la diferencia entre invitar a tu hermano a sentarse a tu mesa (Amor) o lanzarle las sobras por la ventana (caridad). La mesa de la Comuna tiene sitio para todos los hijos del Padre.",
    "ConexionDoctrinal": ["Amor Universal", "Justicia", "Comuna"],
    "NodosSimapticos": ["Mesa del Padre", "Igualdad vs Compasión", "Fin de la Limosna"]
  },
  "15935: EL VALOR DE LAS MUJERES CARIANDANAS": {
    "PilotoDeCoherencia": "Honramos el espíritu de las mujeres de Carianda. Ellas demostraron que el amor es una fuerza que resiste cualquier carga. Su sacrificio no fue en vano, pues sirvió para que la razón (a través de Cicerón) comprendiera la grandeza de la mujer. Son precursoras de la libertad femenina racional.",
    "CitaInelutable": "Las mujeres de Carianda son el símbolo de la resistencia del amor frente a la tiranía.",
    "EjemploPedagogico": "Son como el diamante: cuanto más peso y presión reciben, más brillan y más duras se vuelven. El amor trincadista tiene la dureza del diamante ante la injusticia.",
    "ConexionDoctrinal": ["Resistencia", "Sacrificio", "Dignidad Femenina"],
    "NodosSimapticos": ["Diamantes de Carianda", "Resistencia de Amor", "Precursoras de Luz"]
  },
  "16205: LA ARQUITECTURA COMO TESTIGO": {
    "PilotoDeCoherencia": "El arte y la arquitectura son los testigos mudos de la historia del espíritu. Pero hay que saber leerlos. El filósofo austero no se deja engañar por la belleza estética si esta encubre una verdad de opresión. Debemos redimir al arte poniéndolo al servicio del progreso social.",
    "CitaInelutable": "El arte debe ser el libro de la Verdad, no el velo de la injusticia.",
    "EjemploPedagogico": "Es como leer un jeroglífico: el ignorante ve dibujos bonitos; el sabio lee una advertencia sobre el pasado. Aprende a leer las piedras para no repetir los errores de los constructores antiguos.",
    "ConexionDoctrinal": ["Arte y Verdad", "Arquitectura", "Lectura Histórica"],
    "NodosSimapticos": ["Piedras que Hablan", "Velo de Injusticia", "Redención del Arte"]
  },
  "16475: LA LLAVE DE LA CIUDAD RENDIDA": {
    "PilotoDeCoherencia": "Las mujeres cariandanas portaban la llave de la ciudad como señal de derrota. Hoy, nosotros portamos la llave de la Sabiduría para abrir las puertas de la Comuna. Hemos transformado el símbolo de la rendición en el símbolo de la victoria del espíritu sobre el dogma.",
    "CitaInelutable": "La llave de la humillación se ha convertido en la llave de la libertad espiritual.",
    "EjemploPedagogico": "Es como tomar los grilletes de un esclavo y fundirlos para hacer una llave que abra todas las prisiones. Eso es lo que hace la Filosofía Austera con la historia de dolor de la humanidad.",
    "ConexionDoctrinal": ["Simbología", "Libertad", "Sabiduría"],
    "NodosSimapticos": ["Llave de Libertad", "De Grillete a Llave", "Victoria del Espíritu"]
  },
  "16745: EL TRIBUNO DE LA RAZÓN — CICERÓN": {
    "PilotoDeCoherencia": "Reconocemos en Cicerón a un defensor de la razón y la humanidad. Su valentía al fustigar la crueldad griega nos sirve de ejemplo. El filósofo debe ser un tribuno que hable por los que no tienen voz y que use la palabra para restaurar la justicia herida.",
    "CitaInelutable": "Cicerón puso la palabra al servicio del Amor herido; nosotros ponemos la vida entera.",
    "EjemploPedagogico": "Cicerón fue el abogado de las Cariándanas ante el tribunal de la historia. Tú debes ser el abogado de la Verdad ante el tribunal de tu propia conciencia y de tu sociedad.",
    "ConexionDoctrinal": ["Defensa de la Razón", "Cicerón", "Tribunado"],
    "NodosSimapticos": ["Tribuno de Razón", "Abogado de Verdad", "Palabra Justa"]
  },
  "17015: LA DEFORMACIÓN DEL LENGUAJE": {
    "PilotoDeCoherencia": "Denunciamos que el enemigo ha robado nuestras palabras para quitarles su fuerza. 'Charitas', 'Espíritu', 'Amor'. El procedimiento de la Escuela es restaurar el significado original y racional de cada término. Sin palabras claras no hay pensamiento recto.",
    "CitaInelutable": "Restaurar la palabra es el primer paso para restaurar el mundo.",
    "EjemploPedagogico": "Es como limpiar un pozo que ha sido envenenado. No puedes beber hasta que quites el veneno (el dogma) del agua (la palabra). Limpiamos el lenguaje para saciar la sed de verdad.",
    "ConexionDoctrinal": ["Lingüística Racional", "Claridad", "Lucha contra el Dogma"],
    "NodosSimapticos": ["Pozo Limpio", "Restauración de Palabra", "Veneno del Dogma"]
  },
  "17285: LA CHARITAS COMO AMOR EN ACCIÓN": {
    "PilotoDeCoherencia": "Concluimos que la verdadera 'Charitas' es el Amor en medio del sacrificio y el trabajo. Es la fuerza que sostiene el mundo. No pidas caridad; ofrece Amor. No des caridad; haz Justicia. Esa es la síntesis de la ética que nos llevará a la Comuna Universal.",
    "CitaInelutable": "La verdadera caridad es la Justicia que se hace con Amor.",
    "EjemploPedagogico": "Es el abrazo entre dos trabajadores que han levantado un muro juntos: hay sudor (sacrificio) pero hay alegría y fraternidad (Amor). Ese abrazo es la Charitas de la Comuna.",
    "ConexionDoctrinal": ["Amor en Acción", "Síntesis Ética", "Comuna"],
    "NodosSimapticos": ["Amor en Sacrificio", "Abrazo de Trabajador", "Síntesis de Comuna"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Charitas (Cicerón)": {
    "Definición": "Concepto original acuñado por Cicerón como un himno al valor, amor y resistencia de las mujeres de Carianda frente a la opresión griega; muy alejado del concepto religioso de limosna.",
    "Contexto": "Etimología e Historia en Filosofía Austera Racional.",
    "Conexiones": ["Amor Heroico", "Justicia", "Cariátides"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Cariátides (Significado Racional)": {
    "Definición": "Representación arquitectónica de la humillación impuesta a las mujeres de Carianda, utilizada por Trincado para denunciar la crueldad histórica disfrazada de arte.",
    "Contexto": "Crítica histórica en Filosofía Austera Racional.",
    "Conexiones": ["Historia de Dolor", "Injusticia", "Resistencia"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Limosna": {
    "Definición": "Deformación religiosa de la caridad que perpetúa la desigualdad y humilla al receptor, siendo el antónimo de la Justicia que propugna la Comuna.",
    "Conexiones": ["Caridad Religiosa", "Injusticia", "Hipocresía"],
    "Obras": ["Filosofía Austera Racional", "Los Cinco Amores"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Filosofía Austera Racional (Batch 25) y 3 términos sinápticos.');
