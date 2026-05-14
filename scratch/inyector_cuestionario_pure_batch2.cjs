const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/cuestionario-espirita-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Cuestionario Espírita Racional (Batch 2 - Claves 20 a 39)
const nuevosNodos = {
  "262: Pregunta 18: ¿Cómo se llama nuestro: Padre, en el Universo?": {
    "PilotoDeCoherencia": "Identificación formal del Creador en la doctrina racionalista.",
    "CitaInelutable": "¿Cómo se llama nuestro Padre, en el Universo? Llámasele, Eloí.",
    "EjemploPedagogico": "No se usa el nombre 'Dios' porque está manchado por las religiones; se usa Eloí, que representa el principio activo y universal.",
    "ConexionDoctrinal": ["El Nombre del Creador", "Eloí"],
    "NodosSimapticos": []
  },
  "274: Pregunta 19: ¿Cómo se le adora y qué: oración le agrada?": {
    "PilotoDeCoherencia": "La abolición del rezo místico. Trincado establece que la verdadera adoración a Eloí no se hace con plegarias o ritos, sino 'Amando al hermano', y que la única oración que le satisface es el 'trabajo productivo'.",
    "CitaInelutable": "Se le adora, AMANDO AL HERMANO; y el trabajo productivo, es la oración que más le satisface.",
    "EjemploPedagogico": "Arrodillarte frente a un altar murmurando palabras no sirve de nada. Sembrar trigo para alimentar a tu hermano es la oración más ruidosa y hermosa para el Creador.",
    "ConexionDoctrinal": ["La Verdadera Adoración", "El Trabajo como Oración", "Amor al Hermano"],
    "NodosSimapticos": ["Oración Productiva"]
  },
  "289: Pregunta 20: ¿El que come y no trabaja, comete: algún delito ante nuestro Padre?": {
    "PilotoDeCoherencia": "La condena al parasitismo. El que vive del esfuerzo ajeno sin trabajar no solo es un transgresor de la ley divina, sino un usurpador del trabajo social, aunque esté amparado por leyes civiles de supremacía (capitalismo/herencias) que son injustas.",
    "CitaInelutable": "Ante nuestro Padre es un trasgresor de su ley, y ante los hombres, es usurpador del trabajo ajeno; amparado por leyes de supremacía, cuya usurpación la hacen legal injustamente.",
    "EjemploPedagogico": "Un millonario que hereda y no produce nada útil es, ante la ley del Cosmos, un delincuente que roba el pan del trabajador, aunque el código penal del hombre lo proteja.",
    "ConexionDoctrinal": ["El Parasitismo Social", "Delito de Inactividad", "Leyes de Supremacía Injustas"],
    "NodosSimapticos": ["Transgresor Divino", "Usurpador Legal"]
  },
  "305: Pregunta 21: ¿En el Espiritismo hay algún: santo o ser, de origen divino?": {
    "PilotoDeCoherencia": "El fin del politeísmo encubierto y la santidad humana. En el Espiritismo Racionalista se decreta que ningún hombre o espíritu es 'santo' o 'divino'. El único ser que ostenta la santidad y la divinidad absolutas es el Padre, Eloí.",
    "CitaInelutable": "El único santo y divino es, nuestro Padre Eloí.",
    "EjemploPedagogico": "El hombre más bondadoso de la Tierra sigue siendo hombre, sujeto a error y progreso. Llamarlo 'divino' es idolatría.",
    "ConexionDoctrinal": ["Rechazo de Santos", "Unicidad de la Divinidad"],
    "NodosSimapticos": ["Fin del Politeísmo"]
  },
  "321: Pregunta 22:": {
    "PilotoDeCoherencia": "La motivación comercial de la santidad. Trincado explica que la creación masiva de santos por parte de la religión católica responde a un modelo de negocio basado en la ignorancia: más santos significa más estatuas, más fanatismo y, por ende, mayores ganancias.",
    "CitaInelutable": "Porque como han vivido de la ignorancia, mientras más cantidad de santos hiciera, mayores serían sus ganancias y supremacías, porque habría más fanatismo.",
    "EjemploPedagogico": "Cada santo nuevo es como abrir una nueva sucursal comercial en la iglesia. Venden estampitas y favores lucrando con la desesperación de los ignorantes.",
    "ConexionDoctrinal": ["La Industria de los Santos", "Lucro Religioso", "Fabricación de Fanatismo"],
    "NodosSimapticos": ["Sucursal de Ignorancia"]
  },
  "336: Pregunta 23: ¿Sabes de algunos santos católicos: que no pueden ser católicos?": {
    "PilotoDeCoherencia": "La denuncia del robo histórico. Las religiones (especialmente la católica) se apropiaron indebidamente de grandes espíritus misioneros (Moisés, Abraham, Jesús, los profetas) para santificarlos y usarlos como estandartes, siendo que estos personajes vivieron siglos antes de que la iglesia existiera, o combatieron precisamente el dogmatismo que ella representa.",
    "CitaInelutable": "Muchos, pero entre otros, Moisés, Isaac, Jacob, Abraham, Juan, Jesús, Santiago, todos los apóstoles... que vivieron siglos antes de la fundación de la [iglesia].",
    "EjemploPedagogico": "Es como si hoy una empresa registrara a Aristóteles como su empleado del mes. La iglesia secuestró a los misioneros antiguos para ponerles una etiqueta católica.",
    "ConexionDoctrinal": ["Robo Histórico Religioso", "Falsos Santos Católicos", "Secuestro de Misioneros"],
    "NodosSimapticos": ["Secuestro Histórico"]
  },
  "354: Pregunta 24: ¿Es racional creer en los: milagros de dioses y santos?": {
    "PilotoDeCoherencia": "La aniquilación científica del milagro. Trincado decreta que el milagro es un absurdo inexistente e imposible, porque implicaría que las leyes universales, que son inmutables y perfectas desde su origen, pueden quebrarse por el capricho de un ser.",
    "CitaInelutable": "El milagro es un absurdo que no ha existido, ni existe, ni existir puede, porque quebraría las leyes universales, que no cambian.",
    "EjemploPedagogico": "Si Dios detuviera el sol a petición de un hombre (un milagro), la Tierra se congelaría y morirían todos. El Universo no rompe sus engranajes para complacer a nadie.",
    "ConexionDoctrinal": ["Imposibilidad del Milagro", "Inmutabilidad de las Leyes", "Absurdo Místico"],
    "NodosSimapticos": ["El Fin del Milagro"]
  },
  "370: ¿Cómo se explican esas curaciones y": {
    "PilotoDeCoherencia": "Pregunta de enlace para explicar científicamente los mal llamados milagros.",
    "CitaInelutable": "¿Cómo se explican esas curaciones y esas irradiaciones tenidas por milagros?",
    "EjemploPedagogico": "Preparación para revelar la causa magnética de los fenómenos.",
    "ConexionDoctrinal": ["Explicación de Curaciones"],
    "NodosSimapticos": []
  },
  "372: Pregunta 25:": {
    "PilotoDeCoherencia": "Estructura base de la pregunta 25.",
    "CitaInelutable": "PREGUNTA 25",
    "EjemploPedagogico": "Continuación de la refutación del milagro.",
    "ConexionDoctrinal": ["Estructura del Cuestionario"],
    "NodosSimapticos": []
  },
  "376: ¿Cómo se explican esas curaciones y": {
    "PilotoDeCoherencia": "Reiteración categórica de la Pregunta 24 como respuesta a la 25: Las curaciones y radiaciones que las masas ignorantes llaman 'milagros' son simplemente la aplicación de leyes universales (magnetismo y espiritismo) que ellos no comprenden.",
    "CitaInelutable": "El milagro es un absurdo que no ha existido, ni existe, ni existir puede...",
    "EjemploPedagogico": "Hace mil años, curar una infección con penicilina habría sido llamado 'milagro' por los ignorantes. Hoy es química. Las curaciones espirituales son física adelantada.",
    "ConexionDoctrinal": ["Ciencia vs Milagro", "Leyes Incomprendidas"],
    "NodosSimapticos": ["Física Adelantada"]
  },
  "386: Pregunta 26: ¿Qué quiere decir religión?": {
    "PilotoDeCoherencia": "La etimología trincadista de la religión. Desvincula la palabra de su origen tradicional (religare/unir con Dios) y la define estricta y socialmente como la 'Relegación de derechos'.",
    "CitaInelutable": "¿Qué quiere decir religión? Relegación de derechos.",
    "EjemploPedagogico": "Religión no significa unirse a Dios; significa entregarle tus libertades a un sacerdote.",
    "ConexionDoctrinal": ["Etimología de Religión", "Relegación de Derechos"],
    "NodosSimapticos": []
  },
  "397: Pregunta 27: ¿Qué es relegación de: derechos?": {
    "PilotoDeCoherencia": "La definición de esclavitud mental. Relegar derechos significa renunciar a lo más sagrado que tiene el hombre: su libertad de pensamiento y acción, sometiéndose a un dogma.",
    "CitaInelutable": "Renunciar de algo, o de todo lo que es libertad del hombre.",
    "EjemploPedagogico": "Es como cortarte las propias manos para que otro te dé de comer. Eso es la relegación.",
    "ConexionDoctrinal": ["Renuncia a la Libertad", "Esclavitud Voluntaria"],
    "NodosSimapticos": ["Castración de la Libertad"]
  },
  "411: ¿Exigen las religiones a sus": {
    "PilotoDeCoherencia": "Enlace hacia la demostración empírica de cómo operan las religiones exigiendo renuncias de derechos.",
    "CitaInelutable": "¿Exigen las religiones a sus adeptos que renuncien de algo?",
    "EjemploPedagogico": "Paso previo para explicar el dogma.",
    "ConexionDoctrinal": ["Estructura del Cuestionario"],
    "NodosSimapticos": []
  },
  "413: Pregunta 28:": {
    "PilotoDeCoherencia": "Estructura formal de la pregunta 28.",
    "CitaInelutable": "PREGUNTA 28",
    "EjemploPedagogico": "Estructura base.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "417: ¿Exigen las religiones a sus": {
    "PilotoDeCoherencia": "La castración del intelecto. Trincado acusa a la religión de prohibir al creyente pensar con su propia cabeza. Al exigir 'fe ciega', se le obliga a tragarse los absurdos sacerdotales, lo que constituye la máxima ofensa al progreso: la relegación del pensamiento libre.",
    "CitaInelutable": "Al religioso le está prohibido pensar con su propia cabeza y tiene que creer todo lo que le digan los sacerdotes por absurdo que ello sea, pídeles fé ciega, lo que es relegar el pensamiento.",
    "EjemploPedagogico": "La fe ciega es ponerle una venda a tu cerebro. Si el sacerdote dice que 2+2 es 5, el religioso debe aceptarlo. El espiritista, en cambio, se quita la venda y exige ver los números.",
    "ConexionDoctrinal": ["La Fe Ciega como Esclavitud", "Prohibición de Pensar", "Relegación del Pensamiento"],
    "NodosSimapticos": ["Venda Cerebral"]
  },
  "428: Pregunta 29: ¿El que piensa y razona fuera de lo: que la iglesia quiere, qué pena tiene?": {
    "PilotoDeCoherencia": "El terrorismo teológico. Quien se atreve a pensar con su cabeza recibe la máxima pena de la iglesia: la excomunión (condenación al falso fuego eterno) y en vida, el repudio de la masa fanática que, como en la Inquisición, llevaba al tormento físico.",
    "CitaInelutable": "La excomunión, o sea la condenación al fuego eterno, y mientras viven, quedan condenados al desprecio de los demás católicos... como en la inquisición.",
    "EjemploPedagogico": "La iglesia operaba como una mafia: si no sigues sus reglas (el dogma), te excomulgan (te declaran muerto socialmente) y te amenazan con tortura eterna.",
    "ConexionDoctrinal": ["Terrorismo Religioso", "La Excomunión", "Represión del Pensamiento Libre"],
    "NodosSimapticos": ["Mafia Teológica", "Falso Fuego Eterno"]
  },
  "442: Pregunta 30: como en Enrique IV y miles más en la: inquisición. ¿Los espiritistas relegan en alguien sus derechos?": {
    "PilotoDeCoherencia": "La soberanía absoluta del Racionalista. Al estar guiados por la razón, los verdaderos espiritistas no cometen el error de entregar su voluntad a sacerdotes ni ídolos. No relegan nada ante nadie, cumpliendo así el mandato de soberanía individual impuesto por el Creador.",
    "CitaInelutable": "Si son espiritistas, porque son racionalistas, no cometen tal error; por lo tanto, no relegan nada, ni ante nadie, por mandato expreso del Creador.",
    "EjemploPedagogico": "El racionalista es un rey de su propio intelecto. No le da la corona de su cerebro a nadie, porque sabe que el Creador se lo dio para que lo use, no para que lo regale.",
    "ConexionDoctrinal": ["Soberanía Racional", "No Relegación", "Libertad Intelectual Absoluta"],
    "NodosSimapticos": ["Rey del Intelecto"]
  },
  "463: Pregunta 31:": {
    "PilotoDeCoherencia": "Política de admisión de la Escuela. Trincado aclara que la Escuela no es sectaria; acoge a todos (sabios e ignorantes) siempre que vengan de buena voluntad para aprender a usar la Razón. Su único rechazo es a la formación de esclavos y fanáticos.",
    "CitaInelutable": "Nuestra Escuela acoge a todos los hombres de buena voluntad, ignorantes y sabios: sus adeptos aprenden del sabio y enseñan al ignorante; por lo tanto, no quiere la Escuela esclavos ni fanáticos.",
    "EjemploPedagogico": "La Escuela es un hospital del intelecto. Si vienes ignorante (enfermo de fanatismo) pero con ganas de sanar, eres bienvenido. Si vienes a imponer fe ciega, no cabes.",
    "ConexionDoctrinal": ["Rechazo de Fanáticos", "Solidaridad del Conocimiento", "Misión Educativa"],
    "NodosSimapticos": ["Hospital del Intelecto"]
  },
  "478: Pregunta 32: ¿Nuestra Escuela es: racionalista entonces?. . .": {
    "PilotoDeCoherencia": "El sello distintivo y triple de la Escuela Magnética: es Filosófica (estudia las causas), es Racionalista (usa la lógica estricta) y es Fraternista (su meta final es el amor solidario, no solo la teoría intelectual).",
    "CitaInelutable": "Sí, es filosófica-racionalista y puramente fraternista.",
    "EjemploPedagogico": "No somos solo una biblioteca fría de mentes brillantes (racionalismo); somos una familia que usa esa inteligencia para construir un hogar común (fraternismo).",
    "ConexionDoctrinal": ["Filosófica-Racionalista-Fraternista", "El Triple Sello Doctrinal"],
    "NodosSimapticos": ["Sello Trincadista"]
  },
  "492: Pregunta 33: ¿Nuestra Escuela, se diferencia en: algo del comunismo rojo o marxista?": {
    "PilotoDeCoherencia": "La abismal diferencia entre la Comuna Espiritual y el Comunismo Soviético. Aunque ambos buscan abolir supremacías, la Escuela difiere *absolutamente en todo*, ya que persigue la fraternidad (Amor y Ley) sin usar la violencia, sin derramamiento de sangre y basándose en la evolución del espíritu, no solo en la materia.",
    "CitaInelutable": "Absolutamente en todo, puesto que perseguimos la implantación de la 'Comuna de Amor y Ley' (que quiere decir fraternidad) sin derramamiento de sangre.",
    "EjemploPedagogico": "El comunismo rojo quiso imponer la igualdad a punta de fusil y odio de clases. La Comuna Trincadista impone la igualdad a punta de Razón y elevación moral.",
    "ConexionDoctrinal": ["Rechazo del Comunismo Rojo", "Comuna de Amor y Ley", "Revolución sin Sangre"],
    "NodosSimapticos": ["Igualdad por Razón"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "La Industria de los Santos": {
    "Definición": "Calificación racionalista que describe el método de lucro y dominación de la Iglesia Católica. Al inventar y multiplicar figuras de 'santos', la religión fomentaba el fanatismo en las masas ignorantes para aumentar sus ganancias y supremacías sociales, llegando incluso a robarse figuras históricas previas a su fundación (como Abraham o Jesús).",
    "Contexto": "Cuestionario Espírita Racional (Preguntas 21 a 23).",
    "Conexiones": ["Lucro Religioso", "Rechazo de Santos", "Falso Milagro"],
    "Obras": ["Cuestionario Espírita Racional", "Los Cinco Amores"]
  },
  "Relegación de Derechos": {
    "Definición": "La etimología y definición sociológica que Joaquín Trincado le da a la palabra 'Religión'. Significa la renuncia voluntaria a la libertad de pensamiento y acción, sometiéndose a la fe ciega y al dictado absurdo de un sacerdocio, lo cual constituye una esclavitud mental.",
    "Contexto": "Cuestionario Espírita Racional (Preguntas 26 a 28).",
    "Conexiones": ["Religión como Esclavitud", "Fe Ciega", "Prohibición de Pensar"],
    "Obras": ["Cuestionario Espírita Racional", "Conócete a ti mismo"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 20 nodos PURA CALIDAD 1:1 de Cuestionario Espirita Racional (Batch 2) y 2 términos sinápticos.');
