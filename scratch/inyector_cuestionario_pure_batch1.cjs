const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/cuestionario-espirita-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

// Iniciar fresco para calidad pura 1:1 de Cuestionario
let esencia = {};
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Cuestionario Espírita Racional (Batch 1 - Claves 0 a 19)
const nuevosNodos = {
  "3: Pregunta 1: CUESTIONARIO: ESPIRITA RACIONALISTA INICIAR ¿Cómo se llama nuestra Escuela?": {
    "PilotoDeCoherencia": "Estructura base de la primera pregunta que da inicio al cuestionario catequístico racionalista.",
    "CitaInelutable": "¿Cómo se llama nuestra Escuela?",
    "EjemploPedagogico": "El primer paso para conocer la doctrina es identificar la institución que la imparte.",
    "ConexionDoctrinal": ["Identidad de la Escuela", "Inicio del Cuestionario"],
    "NodosSimapticos": []
  },
  "14: ¿Cómo se llama nuestra: Escuela?": {
    "PilotoDeCoherencia": "La revelación del nombre fundacional. Trincado establece que la institución no es un centro místico, sino una 'Escuela' (lugar de estudio) de magnetismo (causa material) y espiritismo (causa inteligente), cuyo fin es la Comuna Universal.",
    "CitaInelutable": "Escuela Magnético-Espiritual de la Comuna Universal.",
    "EjemploPedagogico": "No es un templo para rezar, es una universidad cósmica donde aprendes a unir la física (magnetismo) con el alma (espiritual) para crear una sociedad perfecta (comuna).",
    "ConexionDoctrinal": ["Escuela Magnético-Espiritual", "Comuna Universal", "Identidad Trincadista"],
    "NodosSimapticos": ["Nombre Fundacional"]
  },
  "22: Pregunta 2: ¿Quién es su fundador?": {
    "PilotoDeCoherencia": "Pregunta de reconocimiento de autoría y linaje terrenal de la doctrina.",
    "CitaInelutable": "¿Quién es su fundador?",
    "EjemploPedagogico": "Reconocer al arquitecto del edificio antes de estudiar sus planos.",
    "ConexionDoctrinal": ["Autoría Doctrinal"],
    "NodosSimapticos": []
  },
  "27: ¿Quién es su fundador?": {
    "PilotoDeCoherencia": "Declaración oficial de la autoría. El fundador terreno es Joaquín Trincado, el cual asume la responsabilidad total de las enseñanzas impartidas en la Escuela.",
    "CitaInelutable": "El Maestro Joaquín Trincado.",
    "EjemploPedagogico": "El conocimiento universal siempre necesita un canal humano (un antena) que lo baje a la tierra, en este siglo ese canal fue Trincado.",
    "ConexionDoctrinal": ["Joaquín Trincado", "Fundador de la Escuela"],
    "NodosSimapticos": []
  },
  "33: Pregunta 3: ¿Cómo se prueba que es el: Maestro de la Escuela?": {
    "PilotoDeCoherencia": "La prueba de la Maestría no radica en milagros ni designaciones místicas, sino en las obras materiales y literarias que ha llevado al mundo entero (axiomas, cátedras y colonias).",
    "CitaInelutable": "Con los libros y axiomas que ha llevado a todo el mundo, con los que se han fundado muchas Cátedras y Colonias Comunales.",
    "EjemploPedagogico": "Al árbol se le conoce por sus frutos. Trincado no dice ser maestro porque una voz del cielo se lo dijo, sino porque escribió las leyes que hoy organizan a miles de personas en comunidades.",
    "ConexionDoctrinal": ["Evidencia de Maestría", "Libros y Axiomas", "Fundación de Cátedras"],
    "NodosSimapticos": ["Prueba por el Fruto"]
  },
  "48: Pregunta 4: ¿Cómo hombre se: diferencia de nosotros?": {
    "PilotoDeCoherencia": "El principio de igualdad absoluta. Trincado es el autor del axioma 'La ley es una y la sustancia una'; por lo tanto, biológica y espiritualmente es idéntico a cualquier otro hombre. La única deferencia es el amor y respeto debido a su labor de Maestro.",
    "CitaInelutable": "El ha sentado que 'la ley es una y la sustancia una'; entonces, como hombre, no se diferencia de los demás; como Maestro, le debemos amor y respeto.",
    "EjemploPedagogico": "El profesor de matemáticas está hecho de la misma carne que sus alumnos. Lo respetas porque sabe más matemáticas, no porque sea un semidiós.",
    "ConexionDoctrinal": ["Igualdad Humana", "Rechazo de Semidioses", "Amor y Respeto al Maestro"],
    "NodosSimapticos": ["Maestro Humano"]
  },
  "64: Pregunta 5: ¿Qué fines persigue: nuestra Escuela?": {
    "PilotoDeCoherencia": "El objetivo político y social del Espiritismo. La Escuela no busca 'salvar almas' en el cielo, sino implantar materialmente la fraternidad universal en la Tierra a través del régimen de la Comuna de Amor y Ley.",
    "CitaInelutable": "La implantación de la fraternidad universal en la Comuna de Amor y Ley.",
    "EjemploPedagogico": "La doctrina no es para aprender a levitar, es para aprender a convivir y a compartir la riqueza del mundo equitativamente.",
    "ConexionDoctrinal": ["Fines de la Escuela", "Fraternidad Universal", "Comuna de Amor y Ley"],
    "NodosSimapticos": ["Destino Político del Espiritismo"]
  },
  "78: Pregunta 6: ¿Qué se entiende por “La: Comuna”?": {
    "PilotoDeCoherencia": "Definición sociológica de la meta trincadista. La Comuna es la extensión del concepto de familia a toda la especie humana, eliminando fronteras y divisiones.",
    "CitaInelutable": "La Comuna es la fraternización de toda la humanidad, cual si fuera una sola familia.",
    "EjemploPedagogico": "Imagina que el mundo entero es una sola mesa de comedor donde todos los habitantes son hermanos. Eso es la Comuna.",
    "ConexionDoctrinal": ["Definición de Comuna", "La Humanidad como Familia"],
    "NodosSimapticos": ["Mesa de Comedor Global"]
  },
  "93: Pregunta 7: ¿Qué beneficios inmediatos recibirá la: humanidad con el establecimiento de la Comuna de Amor y Ley?": {
    "PilotoDeCoherencia": "El fin del sufrimiento estructural. El principal beneficio de la Comuna es material y legal: la abolición total de las fronteras, el dinero, los dogmas y toda forma de tiranía.",
    "CitaInelutable": "Innumerables son sus beneficios en todo lo que se refiere al bienestar, pero el mayor será, la abolición total de todas las supremacías, fronteras y religiones.",
    "EjemploPedagogico": "Sin dinero no hay pobreza; sin fronteras no hay guerras; sin religión no hay fanatismo. La Comuna es la cura a la enfermedad social.",
    "ConexionDoctrinal": ["Beneficios de la Comuna", "Abolición de Supremacías", "Fin de Fronteras"],
    "NodosSimapticos": ["Cura Social"]
  },
  "111: Pregunta 8: ¿Qué nombre reciben los que: acatan nuestras doctrinas?": {
    "PilotoDeCoherencia": "Identidad del estudiante. No son 'creyentes' ni 'fieles', son estudiosos que asumen el título oficial dictado por el Maestro.",
    "CitaInelutable": "Llámanse Espiritistas Racionalistas.",
    "EjemploPedagogico": "No somos ovejas siguiendo a un pastor. Somos racionalistas que investigan el espíritu.",
    "ConexionDoctrinal": ["Identidad Racionalista"],
    "NodosSimapticos": []
  },
  "124: Pregunta 9: ¿Por qué se llaman: Espiritistas Racionalistas?": {
    "PilotoDeCoherencia": "La justificación de la Razón. Se llaman así porque el 'Espiritismo Luz y Verdad' no es un culto, sino una Filosofía. Y como la Filosofía requiere el ejercicio incesante de razonar, sus practicantes deben ser 'Racionalistas'.",
    "CitaInelutable": "Porque practican el 'Espiritismo Luz y Verdad' que es Filosofía; y como Filosofía significa y es Razonar, son Racionalistas.",
    "EjemploPedagogico": "No puedes llamarte pensador si no piensas. No puedes llamarte Espiritista Luz y Verdad si no usas la Lupa de la Razón para analizar cada fenómeno.",
    "ConexionDoctrinal": ["Espiritismo como Filosofía", "El Deber de Razonar", "Identidad Racionalista"],
    "NodosSimapticos": ["Lupa de la Razón"]
  },
  "136: Pregunta 10: como Filosofía significa y es: Razonar, son Racionalistas. ¿El Espiritismo es religión?": {
    "PilotoDeCoherencia": "El axioma de separación definitiva. El Espiritismo y la religión son agua y aceite. Siendo el Espiritismo Razón (Filosofía), no puede ser religión (que exige fe ciega).",
    "CitaInelutable": "El Espiritismo, siendo Filosofía, es razón, y porque es razón, el Espiritismo, no es religión.",
    "EjemploPedagogico": "La ciencia te pide que cuestiones; la religión te exige que creas sin cuestionar. Por eso el Espiritismo, que es la ciencia del Todo, es el enemigo natural de la religión.",
    "ConexionDoctrinal": ["El Espiritismo NO es Religión", "Razón vs Fe Ciega"],
    "NodosSimapticos": ["Agua y Aceite Doctrinal"]
  },
  "152: Pregunta 11: ¿Por qué el Espiritismo no: puede ser religión?": {
    "PilotoDeCoherencia": "La incompatibilidad moral. El Espiritismo persigue la Luz y la Verdad absoluta, mientras que la Religión es tipificada doctrinalmente como falacia, engaño y mentira institucionalizada.",
    "CitaInelutable": "Porque el Espiritismo no puede amalgamarse con nada que sea falacia (engaño, fraude, mentira).",
    "EjemploPedagogico": "Mezclar espiritismo puro con ritos religiosos es como echarle veneno a un vaso de agua pura; el resultado ya no quita la sed, te mata.",
    "ConexionDoctrinal": ["Rechazo a la Amalgama", "Religión como Engaño", "Pureza Doctrinal"],
    "NodosSimapticos": ["Agua Envenenada"]
  },
  "167: Pregunta 12: ¿Cuántas clases de: Espiritismo hay?": {
    "PilotoDeCoherencia": "La unidad de la Verdad. Aunque el mundo ha deformado el término, Trincado decreta que solo existe un Espiritismo real y absoluto, al cual llamó 'Luz y Verdad' para deslindarlo de las farsas espiritualistas.",
    "CitaInelutable": "Uno solo, que nuestra Escuela, para distinguirlo de las amalgamas, lo llamó 'Espiritismo, Luz y Verdad'.",
    "EjemploPedagogico": "La Verdad no tiene versiones. La gravedad es una sola. El Espiritismo original es uno solo; el resto son parodias.",
    "ConexionDoctrinal": ["El Único Espiritismo", "Espiritismo Luz y Verdad"],
    "NodosSimapticos": ["La Verdad Sin Versiones"]
  },
  "182: Pregunta 13: ¿Cómo se llaman, pues, esos: centros que practican espiritismo y religión?": {
    "PilotoDeCoherencia": "El término despectivo o diferenciador. Los grupos que intentan mezclar fenómenos psíquicos con misas, santos y oraciones religiosas no son espiritistas; son 'espiritualistas'.",
    "CitaInelutable": "Llámanse esos centros y sus cultores espiritualistas.",
    "EjemploPedagogico": "El que reza el rosario mientras pide mensajes al más allá no es un científico del espíritu, es un místico confundido.",
    "ConexionDoctrinal": ["Diferencia Espiritismo/Espiritualismo", "Centros de Amalgama"],
    "NodosSimapticos": ["Misticismo Confundido"]
  },
  "197: Pregunta 14: ¿Es de algún provecho su: estudio para la humanidad?": {
    "PilotoDeCoherencia": "El daño de las escuelas mezcladas. Trincado advierte que el 'espiritualismo' no solo es inútil, sino perjudicial. Al mezclar ciencia con fe ciega, generan duda, estancamiento y fanatismo en sus adeptos.",
    "CitaInelutable": "Desde que es una amalgama de religión y ciencia que no pueden unirse, al contrario, reciben el daño de la duda y estancamiento, perjudicial para ellos.",
    "EjemploPedagogico": "Querer avanzar en la ciencia mientras estás amarrado a una iglesia es intentar correr un maratón con un ancla de plomo.",
    "ConexionDoctrinal": ["Daño del Espiritualismo", "Estancamiento por Amalgama"],
    "NodosSimapticos": ["Ancla de Plomo"]
  },
  "213: Pregunta 15: ¿Con qué fines los sostienen y los: apoyan tácitamente las religiones?. . .": {
    "PilotoDeCoherencia": "El complot teológico. Las religiones (especialmente la Iglesia) toleran e infiltran los centros espiritualistas para inocular sus errores y desviar al hombre del estudio del verdadero Espiritismo (Solidaridad Universal) que destruiría sus negocios.",
    "CitaInelutable": "No lo confiesan; pero se comprende que sus fines son inculcar todos los errores de que ellas son poseedoras y apartar a los hombres del estudio del verdadero Espiritismo.",
    "EjemploPedagogico": "La iglesia no puede detener el agua del conocimiento espírita, así que envenena el pozo (los centros) para que quien beba siga siendo esclavo del dogma.",
    "ConexionDoctrinal": ["Complot Religioso", "Infiltración Espiritualista", "Desvío de la Verdad"],
    "NodosSimapticos": ["Pozo Envenenado"]
  },
  "225: que ellas son poseedoras y apartar a los: hombres del estudio del verdadero Espiritismo, que es la solidaridad universal.": {
    "PilotoDeCoherencia": "Confirmación estructural de la respuesta 15 y enlace hacia la pregunta 16 para detectar a los falsos centros.",
    "CitaInelutable": "Y sin entrar en ellos. ¿Podréis conocer esos centros y hombres espiritualistas?",
    "EjemploPedagogico": "Pregunta de enlace para la detección de fraude.",
    "ConexionDoctrinal": ["Detección de Falsos Centros"],
    "NodosSimapticos": []
  },
  "232: Pregunta 16:": {
    "PilotoDeCoherencia": "La fórmula infalible para detectar centros falsos (espiritualistas). Si en un grupo se habla de 'santos, caridad (limosna), curaciones milagrosas, agorerías o adivinación', el lugar es un fraude, no practican espiritismo.",
    "CitaInelutable": "Basta que os hablen de santos, caridad, curaciones, agorerías y adivinanzas, para estar seguro de que lo que allí se practica, será todo, menos espiritismo.",
    "EjemploPedagogico": "Si entras a un lugar que dice ser científico y ves estampitas de santos y alguien adivinando el futuro con cartas, da la media vuelta: has entrado a una iglesia disfrazada.",
    "ConexionDoctrinal": ["Detección de Fraude", "Rechazo de Santos y Adivinanzas", "Falso Espiritismo"],
    "NodosSimapticos": ["Iglesia Disfrazada"]
  },
  "246: Pregunta 17: ¿Los espiritistas, creen en: dioses religiosos?. . .": {
    "PilotoDeCoherencia": "La abolición del panteón religioso. Los espiritistas repudian tajantemente la idea de 'dioses religiosos' castigadores o milagrosos. Solo reconocen científicamente al Padre Creador Universal presente en todas las cosas.",
    "CitaInelutable": "No; no creemos en ningún dios religioso; pero creemos en el Padre Creador, que lo consideramos en todas las cosas y los mundos del Universo.",
    "EjemploPedagogico": "Un dios religioso te pide que te arrodilles en un templo; el Creador Trincadista es el latido del Universo entero y te pide que estudies Su obra estando de pie.",
    "ConexionDoctrinal": ["Rechazo de Dioses Religiosos", "El Creador Universal"],
    "NodosSimapticos": ["Latido del Universo"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Espiritualista (Amalgama)": {
    "Definición": "Término despectivo/clasificador usado por la Escuela para definir a las personas o centros que intentan mezclar el fenómeno psíquico con rituales y dogmas religiosos (santos, misas, adivinación), generando duda, estancamiento y daño a la Razón.",
    "Contexto": "Cuestionario Espírita Racional (Preguntas 13 a 16).",
    "Conexiones": ["Espiritismo vs Espiritualismo", "Amalgama de la Verdad"],
    "Obras": ["Cuestionario Espírita Racional", "Filosofía Austera Racional"]
  },
  "Espiritismo Luz y Verdad": {
    "Definición": "Nombre y título oficial que Trincado le otorgó al Espiritismo Puro y Racionalista para deslindarlo tajantemente de todas las sectas, religiones y centros de amalgama que habían manchado la ciencia espiritual.",
    "Contexto": "Cuestionario Espírita Racional (Pregunta 12).",
    "Conexiones": ["Filosofía Racionalista", "Único Espiritismo"],
    "Obras": ["Cuestionario Espírita Racional", "Los Cinco Amores"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 20 nodos PURA CALIDAD 1:1 de Cuestionario Espirita Racional (Batch 1) y 2 términos sinápticos.');
