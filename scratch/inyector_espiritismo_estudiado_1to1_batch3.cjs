const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - El Espiritismo Estudiado (Batch 3 - Ciencias, Régimen y Facultades)
const nuevosNodos = {
  "3645: SABIDURÍA DEL ESPIRITISMO": {
    "PilotoDeCoherencia": "La sabiduría del Espiritismo no es acumulación de datos sino la capacidad del espíritu para leer el universo en sus leyes. El sabio espiritista puede responder las tres preguntas fundamentales (¿de dónde venimos, por qué estamos aquí, a dónde vamos?) con pruebas verificables, no con fe ciega. Esa capacidad de respuesta es la sabiduría.",
    "CitaInelutable": "La sabiduría del Espiritismo es la única que satisface las tres preguntas del alma.",
    "EjemploPedagogico": "Es como un maestro de geografía que no solo sabe los nombres de los países sino que ha viajado y puede describir el olor del mercado de Marrakech. La sabiduría del Espiritismo es esa geografía vivida del universo.",
    "ConexionDoctrinal": ["Sabiduría", "Tres Preguntas", "Verificación"],
    "NodosSimapticos": ["Geografía Vivida", "Tres Respuestas", "Maestro de Universo"]
  },
  "3862: ELASTICIDAD DEL ALMA": {
    "PilotoDeCoherencia": "El alma tiene la capacidad de expandirse y contraerse según el grado de amor y conocimiento del espíritu. Un alma elástica puede comunicarse con planos superiores, abarcar más perspectivas y sentir las penas y alegrías de sus hermanos como propias. La rigidez del alma es el egoísmo; su elasticidad es el amor.",
    "CitaInelutable": "El alma elástica del que ama abarca el universo; el alma rígida del egoísta solo se abarca a sí misma.",
    "EjemploPedagogico": "Es como un globo: inflado con amor, abarca más espacio y puede flotar más alto. Deshinchado por el egoísmo, queda arrugado y pegado al suelo. Infla tu alma con amor y verás más alto.",
    "ConexionDoctrinal": ["Elasticidad del Alma", "Egoísmo vs Amor", "Expansión"],
    "NodosSimapticos": ["Globo del Alma", "Rigidez Egoísta", "Flotación del Amor"]
  },
  "4037: LAS CIENCIAS ANTE EL ESPIRITISMO": {
    "PilotoDeCoherencia": "Todas las ciencias son hijas del Espiritismo aunque no lo sepan. La química, la física, la astronomía, la medicina: todas estudian fragmentos del mismo libro que el Espiritismo estudia completo. Cuando las ciencias acepten el principio espiritual, darán un salto de siglos en un solo instante.",
    "CitaInelutable": "Las ciencias son los capítulos separados del libro que el Espiritismo lee completo.",
    "EjemploPedagogico": "Es como los ciegos que tocan partes del elefante y cada uno describe un animal diferente. El que ve (el espiritista) ve al elefante completo. Las ciencias son los ciegos del elefante cósmico.",
    "ConexionDoctrinal": ["Ciencias Materiales", "Fragmento vs Totalidad", "Salto Epistemológico"],
    "NodosSimapticos": ["Elefante Cósmico", "Ciegos del Fragmento", "Libro Completo"]
  },
  "4115: MATERIALISTAS Y ESPIRITUALISTAS: LOS DOS ERRORES": {
    "PilotoDeCoherencia": "Denunciamos dos errores simétricos: el materialismo (que niega el espíritu) y el espiritualismo (que niega la materia). Ambos son dogmas que sostienen a la Iglesia Católica, aunque no lo saben. El Espiritismo Racional integra materia y espíritu como dos aspectos de la misma realidad bajo la ley del amor.",
    "CitaInelutable": "El Espiritismo es más materialista que el materialismo y más espiritual que el espiritualismo.",
    "EjemploPedagogico": "Es como dos médicos que discuten si el paciente tiene cuerpo o mente: uno niega la mente y otro niega el cuerpo. El buen médico (el espiritista) sabe que el paciente tiene ambos y que uno afecta al otro.",
    "ConexionDoctrinal": ["Materialismo", "Espiritualismo", "Síntesis Racional"],
    "NodosSimapticos": ["Médico Completo", "Dos Errores Simétricos", "Integración Materia-Espíritu"]
  },
  "4387: LAS RELIGIONES ANTE EL ESPIRITISMO": {
    "PilotoDeCoherencia": "Las religiones son el único adversario que el Espiritismo debe vencer sin usar sus armas. Practican un espiritismo negro (manipulación de fuerzas espirituales para controlar mentes) mientras niegan el Espiritismo Racional. Su hipocresía es total: condenan lo que practican en secreto.",
    "CitaInelutable": "Las religiones practican el espiritismo negro que condenan en público.",
    "EjemploPedagogico": "Es como el político que vota contra la corrupción en público y lleva una doble contabilidad en privado. El pueblo tarde o temprano descubre los libros contables. La Escuela es la auditoría que descubrió los libros de la religión.",
    "ConexionDoctrinal": ["Espiritismo Negro", "Hipocresía Religiosa", "Adversario"],
    "NodosSimapticos": ["Doble Contabilidad", "Auditoría de la Escuela", "Negros Públicos"]
  },
  "4588: LOS QUE PROTESTAN DEL ESPIRITISMO": {
    "PilotoDeCoherencia": "Catalogo de los protestantes: cobardes, vagos, ignorantes, fanáticos, materialistas, espiritualistas y teosofistas. Todos protestan por la misma razón: el Espiritismo los juzga con la espada de la razón y el fiel de la justicia y no pueden responder el argumento. Su protesta es la confirmación involuntaria de la verdad del Espiritismo.",
    "CitaInelutable": "Quien no puede refutar, protesta; su protesta es el mejor elogio de la verdad.",
    "EjemploPedagogico": "Es como el alumno que insulta al profesor que le dio la calificación justa por no haber estudiado. El insulto no cambia la calificación ni la verdad. La protesta de los ignorantes es el diploma de honor del maestro.",
    "ConexionDoctrinal": ["Detractores", "Protesta como Confirmación", "Justicia de la Razón"],
    "NodosSimapticos": ["Alumno que Insulta", "Diploma de Honor", "Espada de la Razón"]
  },
  "4789: LA MEDICINA ANTE EL ESPIRITISMO": {
    "PilotoDeCoherencia": "El médico no puede ser plenamente bueno sin ser médium, porque la medicina actúa en la frontera entre la vida y la muerte donde el espíritu es el factor decisivo. Miguel Servet y Paracelso son los modelos: médicos que comprendieron la dimensión espiritual de la salud. La medicina que ignora el espíritu cura el cuerpo y enferma el alma.",
    "CitaInelutable": "El mejor médico es el que es a la vez médico del cuerpo y del espíritu.",
    "EjemploPedagogico": "Es como un mecánico que solo repara la carrocería del coche pero ignora el motor. El coche puede estar brillante por fuera y muerto por dentro. La medicina sin espíritu es esa carrocería brillante sin motor.",
    "ConexionDoctrinal": ["Medicina Espiritual", "Médico Médium", "Servet y Paracelso"],
    "NodosSimapticos": ["Carrocería sin Motor", "Médico de Frontera", "Servet como Modelo"]
  },
  "5139: LA QUÍMICA ANTE EL ESPIRITISMO": {
    "PilotoDeCoherencia": "La química es la hermana más cercana al Espiritismo porque estudia las combinaciones de la materia que el espíritu usa para construir los cuerpos. La alquimia fue la química espiritual que guardó en secreto sus fórmulas hasta que el hombre fuera capaz de no usarlas para el exterminio. El Espiritismo es la alquimia desclasificada.",
    "CitaInelutable": "La alquimia fue la química del espíritu, guardada hasta que el hombre madurara.",
    "EjemploPedagogico": "Es como la receta de un explosivo guardada bajo llave hasta que el ingeniero sea ético. La alquimia guardó las fórmulas; el Espiritismo abre el archivo cuando el hombre ha aprendido a no usarlas para matar.",
    "ConexionDoctrinal": ["Alquimia", "Química Espiritual", "Madurez del Hombre"],
    "NodosSimapticos": ["Receta Guardada", "Archivo Abierto", "Ingeniero Ético"]
  },
  "5439: LA ASTRONOMÍA ANTE EL ESPIRITISMO": {
    "PilotoDeCoherencia": "Los astrónomos estudian mundos sin saber que los mundos están habitados por espíritus en progreso. Con sus telescopios ven hasta donde la luz llega, pero son ciegos a la dimensión espiritual de lo que observan. El Espiritismo les da los ojos que les faltan: los del conocimiento del espíritu que anima cada sistema solar.",
    "CitaInelutable": "La astronomía ve los mundos pero no los oye; el Espiritismo los oye y los comprende.",
    "EjemploPedagogico": "Es como ver el fuego de una ciudad desde un avión: sabes que existe, pero no puedes oír el bullicio de sus mercados ni oler el pan de sus hornos. El Espiritismo es el descenso al nivel de la ciudad.",
    "ConexionDoctrinal": ["Astronomía", "Mundos Habitados", "Vista vs Comprensión"],
    "NodosSimapticos": ["Fuego desde el Avión", "Bullicio del Mercado", "Descenso Espiritual"]
  },
  "5691: LA ELECTRICIDAD Y EL ESPIRITISMO": {
    "PilotoDeCoherencia": "Éter, Alma y Electricidad son la misma sustancia en diferentes estados de vibración. La electricidad es la materialización de las ondas etéreas que el espíritu domina y usa para construir los cuerpos y comunicar los planos. Comprender la electricidad es empezar a comprender el alma universal. Esta es la ciencia del futuro que el Espiritismo ya conoce.",
    "CitaInelutable": "Éter, Alma y Electricidad son tres nombres de la misma sustancia en tres estados.",
    "EjemploPedagogico": "Es como el hielo, el agua y el vapor: tres estados del mismo elemento. La electricidad es el vapor del alma universal; el Espiritismo enseña a condensarlo y usarlo con amor.",
    "ConexionDoctrinal": ["Electricidad", "Éter", "Alma Universal"],
    "NodosSimapticos": ["Tres Estados del Alma", "Vapor de Éter", "Condensación del Amor"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Elasticidad del Alma": {
    "Definición": "Capacidad del alma para expandirse en amor y conocimiento, abarcando perspectivas y sentimientos más amplios, en contraste con la rigidez del egoísmo que la contrae.",
    "Contexto": "Segunda Parte de El Espiritismo Estudiado.",
    "Conexiones": ["Alma", "Amor", "Egoísmo", "Expansión"],
    "Obras": ["El Espiritismo Estudiado", "Ley de las Mediumnidades"]
  },
  "Espiritismo Negro": {
    "Definición": "Uso manipulador y oculto de las fuerzas espirituales para controlar mentes y pueblos, practicado históricamente por las religiones mientras niegan el Espiritismo Racional.",
    "Contexto": "Capítulo III, Segunda Parte de El Espiritismo Estudiado.",
    "Conexiones": ["Manipulación", "Religión", "Mixtificación"],
    "Obras": ["El Espiritismo Estudiado", "El Espiritismo en su Asiento"]
  },
  "Éter-Alma-Electricidad": {
    "Definición": "Trinidad científica que identifica el Éter, el Alma Universal y la Electricidad como tres manifestaciones de la misma sustancia primordial del universo en diferentes estados de vibración.",
    "Contexto": "Capítulo VIII, Segunda Parte de El Espiritismo Estudiado.",
    "Conexiones": ["Electricidad", "Éter", "Alma", "Vibración"],
    "Obras": ["El Espiritismo Estudiado", "El Magnetismo en su Origen"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de El Espiritismo Estudiado (Batch 3 - Segunda Parte: Ciencias) y 3 términos sinápticos.');
