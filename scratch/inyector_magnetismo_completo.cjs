const fs = require('fs');
const path = 'F:/trincado/public/data/contents/el-magnetismo-en-su-origen_esencia.json';

const esencia = {
  "Definición y Origen del Magnetismo": {
    "PilotoDeCoherencia": "El magnetismo no es una fuerza misteriosa ni una superstición — es la sustancia única de la que está hecho el Universo. Todo es Magnetismo Espiritual: la gravedad, el amor, el pensamiento, la vida. El 'Método Supremo' no es magia — es la ciencia de operar con esa fuerza desde la conciencia del espíritu.",
    "CitaInelutable": "Todo es Magnetismo Espiritual. La ley es una. La sustancia es una.",
    "EjemploPedagogico": "Cuando dos personas se atraen o repelen sin explicación racional visible, no es 'química' — es magnetismo espiritual operando por la ley de afinidad. El Método Supremo enseña a operar esa fuerza conscientemente.",
    "ConexionDoctrinal": ["Magnetismo Espiritual", "Sustancia Única", "Ley de Afinidad", "Método Supremo"],
    "NodosSimapticos": ["Magnetismo", "Sustancia Única", "Fuerza Universal", "Todo es Magnetismo"]
  },
  "Los 7 Grados del Método Supremo": {
    "PilotoDeCoherencia": "El Método Supremo es la ciencia de los 7 grados del desdoblamiento: desde el magnetismo físico básico hasta el desdoblamiento y atracción espiritual plenos. No son grados de poder sobrenatural — son grados de dominio del espíritu sobre la materia. Cada grado requiere estudio, práctica y pureza de intención.",
    "CitaInelutable": "Grado Séptimo y Supremo: Desdoblamiento y Atracción — en esta escala tendrán que ver, quieran o no quieran, las ciencias y sus hombres.",
    "EjemploPedagogico": "El músico que toca de oído está en el Grado 1. El que solfea con precisión está en el Grado 4. El que compone sinfonías que mueven multitudes opera desde el Grado 7. El magnetismo funciona igual: hay niveles de dominio, y cada uno requiere la capacidad del anterior.",
    "ConexionDoctrinal": ["Desdoblamiento", "Grados Espirituales", "Sonambulismo", "Mediumidad"],
    "NodosSimapticos": ["7 Grados", "Desdoblamiento", "Sonambulismo Clarividente", "Método Supremo"]
  },
  "Instrucciones Prácticas — La Mirada, el Aseo y la Serenidad": {
    "PilotoDeCoherencia": "El magnetismo opera a través del cuerpo físico como instrumento. La mirada es una de sus expresiones más directas — no 'fascinación' ni 'alucinación' como dice la ciencia, sino transmisión de voluntad espiritual. El aseo no es vanidad — es respeto al instrumento del espíritu. La serenidad es la condición base: sin ella, el magnetismo se dispersa.",
    "CitaInelutable": "Han llamado fascinación y alucinación al poder de la mirada: estas dos palabras son demasiado duras para definir algo tan natural.",
    "EjemploPedagogico": "Un médico nervioso comete errores que un médico sereno no comete — no porque el primero sepa menos, sino porque la serenidad permite que el conocimiento fluya sin obstáculos. El magnetizador funciona igual.",
    "ConexionDoctrinal": ["Magnetismo Práctico", "Instrumento del Espíritu", "Serenidad"],
    "NodosSimapticos": ["Mirada Magnética", "Aseo", "Serenidad", "Instrumento Físico"]
  },
  "La Necesidad del Amor de la Carne": {
    "PilotoDeCoherencia": "El celibato religioso no es virtud — es desequilibrio biológico y espiritual. El cuerpo necesita el amor de la carne porque es el mandato de la naturaleza para la perpetuación y el equilibrio. Negarle al cuerpo este derecho por supuesta 'pureza' espiritual es negar al instrumento del espíritu su mantenimiento necesario. Lo que es mandato de ley divina no puede ser pecado ante ninguna ley humana.",
    "CitaInelutable": "¿Cómo puede ser pecado ante la ley humana lo que es mandato de ley divina?",
    "EjemploPedagogico": "El monje que niega el amor de la carne no asciende espiritualmente — desequilibra su instrumento. Es como apagar el motor de un vehículo creyendo que así irá más lejos. La energía sexual es combustible espiritual — debe canalizarse, no suprimirse.",
    "ConexionDoctrinal": ["Amor de la Carne", "Anti-Celibato", "Equilibrio del Instrumento", "Mujer como Arca Santa"],
    "NodosSimapticos": ["Amor de la Carne", "Anti-Celibato", "Equilibrio Natural", "Necesidad del Cuerpo"]
  },
  "La Sugestión — Querer es Poder con Límites": {
    "PilotoDeCoherencia": "La sugestión constante es una herramienta real del magnetismo — pero 'Querer es Poder' es una verdad a medias. Basta querer dentro del propio grado de desarrollo. Quien dice 'quiero' sin el grado correspondiente no obtiene el resultado — es como querer mover una roca de toneladas sin palanca. El método da la palanca; el discípulo debe tener la voluntad.",
    "CitaInelutable": "'Querer es Poder' es empírico, pero para cada uno en su grado; es erróneo si se afirma que basta decir 'quiero' para poder.",
    "EjemploPedagogico": "Un estudiante de primer año puede querer con toda su fuerza pasar el examen de doctorado — pero su querer no suple los años de estudio que le faltan. El magnetismo opera igual: la voluntad es la dirección, el grado es el motor.",
    "ConexionDoctrinal": ["Voluntad", "Sugestión", "Grados del Método", "Poder Moderador"],
    "NodosSimapticos": ["Sugestión", "Querer es Poder", "Límites del Grado", "Voluntad Dirigida"]
  },
  "Apéndice Científico — Átomos, Moléculas y Electrones": {
    "PilotoDeCoherencia": "La ciencia del siglo XX descubre lo que la doctrina ya sabía: la materia no es sólida. Los átomos son sistemas en movimiento; los electrones son entidades activas que 'se burlan del experimentador'. Esta vitalidad de la materia a nivel subatómico es la demostración científica de que 'Todo es Magnetismo Espiritual': la vida opera desde lo más infinitesimal hasta lo más vasto del universo.",
    "CitaInelutable": "Los electrones parecen vivos. Atónito, el hombre experimentador queda un instante perplejo — su espíritu es misionero.",
    "EjemploPedagogico": "Los ingredientes del mundo — los 80+ elementos de la tabla periódica — son las variaciones de la sustancia única bajo diferentes frecuencias de vibración magnética. La química estudia las notas; la doctrina estudia la música completa.",
    "ConexionDoctrinal": ["Magnetismo Espiritual", "Sustancia Única", "Ciencia y Doctrina", "Electrones"],
    "NodosSimapticos": ["Átomos", "Electrones", "Moléculas", "Materia Viva", "Ciencia Magnética"]
  },
  "Religión es Concupiscencia — Sentencia del Apéndice": {
    "PilotoDeCoherencia": "La sentencia del Apéndice es definitiva: 'Religión es un conjunto de pasiones que se eleva a concupiscencia, simbolizada en un ente o artefacto que concentra...' No es un insulto — es la descripción técnica de lo que sucede cuando el miedo y el deseo se codifican en una institución que los gestiona como negocio.",
    "CitaInelutable": "Religión es un conjunto de pasiones que se eleva a concupiscencia, simbolizada en un ente o artefacto.",
    "EjemploPedagogico": "Como el traficante que necesita que el adicto siga siendo adicto, la religión necesita que el creyente siga en el miedo. La Escuela no vende nada — da herramientas para que el espíritu se libere solo.",
    "ConexionDoctrinal": ["Anti-Religión", "Ramera de Babilonia", "Concupiscencia Religiosa"],
    "NodosSimapticos": ["Religión como Concupiscencia", "Pasiones Codificadas", "Anti-Dogma"]
  },
  "La Proclama del Método Supremo — Cúpula Máxima": {
    "PilotoDeCoherencia": "El Método Supremo termina con la misma proclama que el libro Los Extremos se Tocan: El Universo solidarizado. El Mundo todo comunizado. La ley es una. La sustancia una. Todo es Magnetismo Espiritual. Esta repetición no es accidente — es la clave de bóveda de toda la obra de Trincado: todo libro, desde el más práctico hasta el más filosófico, llega al mismo teorema.",
    "CitaInelutable": "El Universo solidarizado. El Mundo todo comunizado. La ley es una. La substancia una. Todo es Magnetismo Espiritual.",
    "EjemploPedagogico": "Como las distintas partes de una sinfonía que terminan en el mismo tema principal, todos los libros de Trincado convergen en esta proclama. No es el final — es el punto de inicio para quien la comprende de verdad.",
    "ConexionDoctrinal": ["Proclama", "Magnetismo Espiritual", "Universo Solidarizado", "Cúpula Máxima"],
    "NodosSimapticos": ["Cúpula Máxima", "Proclama Final", "Magnetismo Espiritual", "Convergencia Doctrinal"]
  }
};

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('El Magnetismo en su Origen DESTILADO. Nodos:', Object.keys(esencia).length);

// Actualización del Diccionario
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic, {
  "Método Supremo": {
    "Definición": "La ciencia de los 7 grados del desdoblamiento magnético-espiritual. No es magia — es el dominio progresivo del espíritu sobre la materia, desde el magnetismo físico básico hasta el desdoblamiento y atracción plenos.",
    "Contexto": "Desarrollado en 'El Magnetismo en su Origen'. Los 7 grados van desde el magnetismo básico hasta el desdoblamiento sonambúlico y la atracción espiritual.",
    "Conexiones": ["Desdoblamiento", "7 Grados", "Magnetismo Espiritual", "Sonambulismo"],
    "Obras": ["El Magnetismo en su Origen"]
  },
  "Desdoblamiento": {
    "Definición": "La capacidad del espíritu de operar más allá de los límites del cuerpo físico. No es proyección astral mística — es la demostración de que el espíritu no está contenido en la materia sino que la usa como instrumento.",
    "Contexto": "Central en 'El Magnetismo en su Origen'. Los grados más altos del Método Supremo incluyen el desdoblamiento sonambúlico y la atracción a distancia.",
    "Conexiones": ["Método Supremo", "7 Grados", "Espíritu como Agente", "Instrumento Físico"],
    "Obras": ["El Magnetismo en su Origen", "Filosofía Austera Racional"]
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario: Método Supremo, Desdoblamiento.');
