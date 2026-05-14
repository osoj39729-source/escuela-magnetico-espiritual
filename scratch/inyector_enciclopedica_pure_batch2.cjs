const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Filosofía Enciclopédica Universal Tomo 1 (Batch 2 - Claves 20 a 39)
const nuevosNodos = {
  "966: Junio 21 de 1910 - Raro fenómeno": {
    "PilotoDeCoherencia": "Permiso espiritual. Los espíritus necesitan permiso de sus maestros/protectores (como Francisco Xavier) para manifestarse y consolar a sus protegidos.",
    "CitaInelutable": "Francisco Xavier, mi maestro y tu protector, que me concedió su permiso para hablaros.",
    "EjemploPedagogico": "El mundo espiritual tiene un orden jerárquico; nadie actúa por capricho, sino por misión autorizada.",
    "ConexionDoctrinal": ["Jerarquía Espiritual", "Permiso de Manifestación"],
    "NodosSimapticos": []
  },
  "1015: Junio 22 de 1910 - Estando  la  m": {
    "PilotoDeCoherencia": "Materialización pedagógica. Antonio de Padua se materializa con su ropaje conocido para ser identificado, pero sin el niño, despojándose del mito católico.",
    "CitaInelutable": "Se le presentó materializado el espíritu de Antonio de Padua... pero sin niño.",
    "EjemploPedagogico": "El espíritu usa formas conocidas para que lo reconozcas, pero quita los adornos falsos para que veas la verdad.",
    "ConexionDoctrinal": ["Materialización Espiritual", "Desmitificación"],
    "NodosSimapticos": []
  },
  "1032: Junio 29 de 1910 - Francisco Xavier": {
    "PilotoDeCoherencia": "Necesidad de conferencia. La obra es tan grande que requiere una comunicación diaria y escrita entre el guía y el misionero.",
    "CitaInelutable": "Necesito tener todos los días conferencias escritas contigo... la obra es grande.",
    "EjemploPedagogico": "Un gran edificio requiere que el arquitecto y el jefe de obra hablen todas las mañanas para revisar los planos.",
    "ConexionDoctrinal": ["Conferencias Espirituales", "Misión de Trincado"],
    "NodosSimapticos": []
  },
  "1074: Junio 28 - Mónica, madre de Agustín": {
    "PilotoDeCoherencia": "Falsedad de los misterios. Mónica revela que se elevó por amor, no por dogmas, y que sufrió por haber impuesto creencias falsas a otros.",
    "CitaInelutable": "Habló de lo falso de ciertos misterios... se elevó por sus obras de amor y no por la creencia de los misterios.",
    "EjemploPedagogico": "Las llaves del cielo son los actos de amor, no las oraciones repetitivas a misterios que nadie entiende.",
    "ConexionDoctrinal": ["Obras vs Dogmas", "Revisión de Misioneros"],
    "NodosSimapticos": ["Mónica (como Espíritu)"]
  },
  "1089: Junio 29 de 1910 - Joaquín Trincado": {
    "PilotoDeCoherencia": "Oscuridad de los centros. Trincado critica a las sociedades espiritistas que trabajan en secreto y con miedo, ocultando la luz a sus propios hermanos.",
    "CitaInelutable": "Aquella sociedad trabajaba en la obscuridad y con miedo.",
    "EjemploPedagogico": "La verdad es como el sol; si la encierras en un cuarto oscuro, dejas de ver su belleza y solo ves sombras.",
    "ConexionDoctrinal": ["Crítica al Misticismo", "Fraternidad Real"],
    "NodosSimapticos": []
  },
  "1126: Junio 29 - Francisco Xavier": {
    "PilotoDeCoherencia": "Llamado a las armas. Ante el desprecio de los centros místicos, Francisco Xavier ordena fundar la propia escuela de verdad.",
    "CitaInelutable": "La lucha está entablada; a las armas, pues... en tu escuela podrán aprender a ser espiritistas.",
    "EjemploPedagogico": "Si el hospital donde estás no cura, debes salir y construir uno donde la medicina sea real.",
    "ConexionDoctrinal": ["Fundación de la Escuela", "Combate al Error"],
    "NodosSimapticos": []
  },
  "1146: Julio 1 de 1910 - De María Magdalena": {
    "PilotoDeCoherencia": "Verdad sobre María. María Magdalena confirma que María de Nazareth estuvo presente en la agonía de Jesús, aportando datos históricos desde el espíritu.",
    "CitaInelutable": "María, la madre de Jesús, estuvo al pie de la cruz durante la agonía.",
    "EjemploPedagogico": "Los testigos de la historia no han muerto; sus espíritus traen el relato exacto de lo que ocurrió.",
    "ConexionDoctrinal": ["Historia Espiritual", "María de Nazareth"],
    "NodosSimapticos": ["María Magdalena (como Espíritu)"]
  },
  "1153: Julio 1 - di todo lo que yo traía y lo que recibí.": {
    "PilotoDeCoherencia": "Enfermedad espiritual. El cuerpo enferma como reflejo de una perturbación o desvío en el espíritu.",
    "CitaInelutable": "Tenía cara de enfermo, pero además de enfermo corporal y espiritualmente.",
    "EjemploPedagogico": "Si el motor está roto, el coche no anda; si el espíritu está triste o en deuda, el cuerpo lo manifiesta.",
    "ConexionDoctrinal": ["Curación Espiritual (Mecánica)", "Psicosomática Doctrinal"],
    "NodosSimapticos": ["Curación Espiritual (Mecánica)"]
  },
  "1218: Julio 5 de 1910 - su tiempo; se despidió, dándonos su bendición.": {
    "PilotoDeCoherencia": "Nombre de la Escuela. La denominación de la obra de Trincado se daría a su debido tiempo, siguiendo un plan orquestado desde el espíritu.",
    "CitaInelutable": "Pregunté por el nombre que daría a mi 'Escuela' y me respondió que más adelante se me diría.",
    "EjemploPedagogico": "El nombre del niño no se pone antes de que sepa caminar; se espera a que su naturaleza se manifieste.",
    "ConexionDoctrinal": ["Plan de la Escuela"],
    "NodosSimapticos": []
  },
  "1223: Julio 6 de 1910 - Posesión de M. P.": {
    "PilotoDeCoherencia": "Fuerza y Prudencia. El misionero debe ser fuerte pero prudente, evitando la sobreexaltación para lograr objetivos duraderos.",
    "CitaInelutable": "Tienes que ser fuerte, y el ser fuerte no te quita de ser prudente.",
    "EjemploPedagogico": "El martillo es fuerte, pero si no se usa con prudencia, rompe la piedra en lugar de esculpir la estatua.",
    "ConexionDoctrinal": ["Prudencia del Misionero"],
    "NodosSimapticos": []
  },
  "1260: Julio 8 de 1910 - Posesión de M. P.": {
    "PilotoDeCoherencia": "Ejemplo de Gratitud. Los espíritus protectores dan el ejemplo de gratitud hacia aquellos encarnados que auxilian a sus protegidos.",
    "CitaInelutable": "Los espíritus protectores debemos dar el ejemplo de gratitud.",
    "EjemploPedagogico": "Si cuidas al hijo de un amigo, el amigo te lo agradecerá eternamente; así es entre el espíritu y el hombre.",
    "ConexionDoctrinal": ["Gratitud Espiritual", "Auxilio Fraterno"],
    "NodosSimapticos": []
  },
  "1292: Julio 10 de 1910 - Posesión de M.P.": {
    "PilotoDeCoherencia": "José el Carpintero. Manifestación del Patriarca José para saludar a la fraternidad bajo el nombre sencillo que él prefiere.",
    "CitaInelutable": "José el carpintero (como él quiere que se le llame)... aquí estoy.",
    "EjemploPedagogico": "La grandeza no necesita títulos pomposos; el padre de un maestro prefiere que lo llamen por su oficio de amor.",
    "ConexionDoctrinal": ["José el Carpintero (Patriarca José)"],
    "NodosSimapticos": ["José el Carpintero (Patriarca José)"]
  },
  "1305: Julio 10 de 1910 - Posesión de M. P.": {
    "PilotoDeCoherencia": "Poder de Curación. El poder de curar es un mandato dado por el Maestro a su representante para sanar el espíritu y, por ende, la materia.",
    "CitaInelutable": "Tienes poder para curar el espíritu y la materia se cura curando el espíritu.",
    "EjemploPedagogico": "Limpia la fuente y el agua que sale de ella será pura por sí sola.",
    "ConexionDoctrinal": ["Poder Terapéutico", "Representación del Maestro"],
    "NodosSimapticos": ["Curación Espiritual (Mecánica)"]
  },
  "1359: Julio 12 de 1910 - ¿Me has conocido, hermano – Sí, Teresa de Jesús.": {
    "PilotoDeCoherencia": "Misión compartida. Teresa de Jesús da consejos sobre la misión de Trincado, subrayando que las misiones individuales se entrelazan.",
    "CitaInelutable": "Solo le falta cumplir a lo que está obligada conmigo.",
    "EjemploPedagogico": "En un gran tejido, cada hilo tiene su color, pero todos deben cruzarse para formar el dibujo.",
    "ConexionDoctrinal": ["Entrelazamiento de Misiones"],
    "NodosSimapticos": ["Teresa de Jesús (como Espíritu)"]
  },
  "1368: Julio 17 de 1910 - Posesión M.P.": {
    "PilotoDeCoherencia": "Juan Bautista como Médico. El espíritu de Juan Bautista asume la dirección médica de la Escuela para curar espíritus enfermos.",
    "CitaInelutable": "Soy el que llaman Juan Bautista... soy el director médico para las curaciones.",
    "EjemploPedagogico": "Incluso el precursor de Jesús tiene un estetoscopio espiritual para sanar las almas de la nueva era.",
    "ConexionDoctrinal": ["Juan Bautista (como Director Médico)"],
    "NodosSimapticos": ["Juan Bautista (como Director Médico)"]
  },
  "1399: Julio 17 de 1910 - Julio 17 de 1910": {
    "PilotoDeCoherencia": "Respeto a la jerarquía. Trincado siente la presencia de María pero, por respeto y humildad ante el dogma antiguo, no se siente digno de su visita.",
    "CitaInelutable": "Yo presentía a la madre de Jesús; pero... no me creía digno de su visita.",
    "EjemploPedagogico": "Incluso el valiente se estremece ante la presencia de la pureza absoluta.",
    "ConexionDoctrinal": ["María de Nazareth", "Respeto a lo Sagrado"],
    "NodosSimapticos": []
  },
  "1410: Julio 18 de 1910 - Fenómeno espontáneo": {
    "PilotoDeCoherencia": "Confirmación de María. Teresa de Jesús confirma que la presencia sentida anteriormente era efectivamente María de Nazareth.",
    "CitaInelutable": "Yo afirmo que el espíritu de anoche, es el espíritu de María de Nazareth.",
    "EjemploPedagogico": "La verdad se confirma por dos o tres testigos; un espíritu de luz certifica la presencia de otro aún mayor.",
    "ConexionDoctrinal": ["Validación de Manifestaciones"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Mónica (como Espíritu)": {
    "Definición": "Espíritu de la madre de Agustín de Hipona que se manifestó en las sesiones de la Escuela para denunciar la falsedad de los misterios y dogmas católicos que ella misma ayudó a imponer. Su mensaje subraya que la elevación espiritual se logra por las obras de amor y no por la creencia en misterios irracionales.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesión del 28 de Junio de 1910).",
    "Conexiones": ["Agustín de Hipona", "Revisión de Actos", "Dogma vs Amor"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  },
  "María Magdalena (como Espíritu)": {
    "Definición": "Entidad espiritual que actúa como protectora y guía en la Escuela de Trincado. Su labor incluye el auxilio a espíritus necesitados y la aclaración de hechos históricos relacionados con la vida de Jesús, destacando el papel fundamental de las mujeres en la misión mesiánica.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Comunicaciones de Julio de 1910).",
    "Conexiones": ["Jesús", "María de Nazareth", "Protección Espiritual"],
    "Obras": ["Filosofía Enciclopédica Universal", "Vida de María"]
  },
  "José el Carpintero (Patriarca José)": {
    "Definición": "Espíritu de quien fuera el padre terrenal de Jesús. En la Escuela de Trincado, se manifiesta con sencillez extrema, rechazando títulos pomposos y actuando como un guía de fraternidad y orden. Es una figura clave en la restauración de la verdad histórica sobre la familia de Nazareth.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesión del 10 de Julio de 1910).",
    "Conexiones": ["Jesús", "María de Nazareth", "Familia Misionera"],
    "Obras": ["Filosofía Enciclopédica Universal", "Vida de María"]
  },
  "Juan Bautista (como Director Médico)": {
    "Definición": "Función espiritual asignada al espíritu de Juan el Bautista dentro de la Escuela. Se encarga de dirigir las operaciones de curación espiritual, bajo el principio de que al sanar el espíritu se eliminan las causas de las enfermedades materiales.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesión del 17 de Julio de 1910).",
    "Conexiones": ["Curación Espiritual", "Jesús", "Médium Curador"],
    "Obras": ["Filosofía Enciclopédica Universal", "El Espiritismo Estudiado"]
  },
  "Curación Espiritual (Mecánica)": {
    "Definición": "Principio doctrinal que establece que la salud o enfermedad de la materia es un efecto directo del estado del espíritu. La curación real consiste en armonizar al espíritu enfermo; una vez que la causa (espiritual) es removida, el efecto (físico) tiende a desaparecer por ley de afinidad y magnetismo.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Comunicaciones de Lázaro Ramos y Juan Bautista).",
    "Conexiones": ["Espíritu", "Magnetismo", "Justicia Fisiológica"],
    "Obras": ["Filosofía Enciclopédica Universal", "Profilaxis de la Vida"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 17 nodos PURA CALIDAD 1:1 de Filosofía Enciclopédica Tomo 1 (Batch 2) y 5 términos sinápticos.');
