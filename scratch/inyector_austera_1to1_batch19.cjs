const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 19)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "14795: EL JUICIO Y LA PROPOSICIÓN": {
    "PilotoDeCoherencia": "El juicio es el acto por el cual el espíritu afirma o niega la relación entre dos conceptos. La proposición es la vestidura verbal del juicio. Estudiamos la lógica no como un juego de palabras, sino como la herramienta para expresar la Verdad sin ambigüedades. Un juicio recto es la base de una vida justa.",
    "CitaInelutable": "El juicio es la sentencia del espíritu sobre la realidad de las cosas.",
    "EjemploPedagogico": "Tienes el concepto 'Hombre' y el concepto 'Libre'. El juicio es decir: 'El hombre es libre'. La proposición es escribirlo para que otros lo comprendan. Si el juicio es falso ('El hombre es esclavo'), la vida se tuerce.",
    "ConexionDoctrinal": ["Lógica Racional", "Juicio", "Proposición"],
    "NodosSimapticos": ["Acto de Juzgar", "Vestidura del Pensamiento", "Sentencia del Ser"]
  },
  "15080: LA CALIDAD DE LAS PROPOSICIONES": {
    "PilotoDeCoherencia": "Las proposiciones se dividen por su calidad en afirmativas y negativas. Afirmamos lo que es acorde a la Ley; negamos lo que la contradice. La claridad en la afirmación y la firmeza en la negación son las marcas del filósofo austero. No hay término medio para la verdad.",
    "CitaInelutable": "Sea tu palabra sí, sí; no, no; porque lo que es más de esto, de mal procede.",
    "EjemploPedagogico": "Es como un interruptor: o hay luz (afirmación) o hay oscuridad (negación). No busques la penumbra del dogma, busca la luz clara de la afirmación racional.",
    "ConexionDoctrinal": ["Afirmación", "Negación", "Claridad"],
    "NodosSimapticos": ["Calidad del Juicio", "Sí y No", "Luz y Oscuridad"]
  },
  "15350: LA CÓPULA — EL VÍNCULO DEL SER": {
    "PilotoDeCoherencia": "La cópula (el verbo ser) es el eje de la proposición. Expresa la identidad o la relación. En Mi Escuela, la cópula une al sujeto con su atributo de progreso. Decir 'El espíritu ES eterno' es vincular la esencia con su realidad inmutable.",
    "CitaInelutable": "La cópula es el puente que une la idea con su manifestación.",
    "EjemploPedagogico": "Es como el cemento que une dos ladrillos. Los ladrillos son el sujeto y el predicado; el cemento es la cópula. Sin cemento, no hay edificio de sabiduría, solo un montón de palabras sueltas.",
    "ConexionDoctrinal": ["Identidad", "Relación", "Verbo Ser"],
    "NodosSimapticos": ["Cópula Racional", "Vínculo del Ser", "Puente de la Idea"]
  },
  "15630: PROPOSICIONES AFIRMATIVAS": {
    "PilotoDeCoherencia": "En la proposición afirmativa, el sujeto entra en la esfera del predicado. 'Los hombres son mortales' (en su cuerpo). Afirmamos la realidad material para comprender la necesidad de la transición. La afirmación racional es el reconocimiento de las leyes de la naturaleza.",
    "CitaInelutable": "Afirmar la ley es el primer deber de la inteligencia.",
    "EjemploPedagogico": "Es como entrar en una habitación: tú (sujeto) estás dentro de la habitación (predicado). La afirmación te sitúa en la realidad correcta para poder actuar en ella.",
    "ConexionDoctrinal": ["Reconocimiento", "Realidad", "Inclusión"],
    "NodosSimapticos": ["Esfera del Predicado", "Afirmación de Ley", "Situación Real"]
  },
  "15910: PROPOSICIONES NEGATIVAS": {
    "PilotoDeCoherencia": "La negación excluye al sujeto de un atributo falso. 'Los envidiosos no son felices'. Negamos la felicidad al vicio porque es ontológicamente imposible. La negación racional es un acto de limpieza intelectual para quitar la maleza del camino del espíritu.",
    "CitaInelutable": "Negar el error es tan necesario como afirmar la verdad.",
    "EjemploPedagogico": "Es como poner una valla: 'Este terreno no es pantano'. Al negar el peligro, estás señalando el camino seguro. La negación protege a la verdad de la contaminación.",
    "ConexionDoctrinal": ["Exclusión", "Limpieza Intelectual", "Protección"],
    "NodosSimapticos": ["Exclusión del Error", "Valla de la Razón", "Limpieza de Maleza"]
  },
  "16180: LA CONVERSIÓN DE JUICIOS": {
    "PilotoDeCoherencia": "Estudiamos cómo un juicio negativo puede transformarse en afirmativo mediante el uso de adjetivos privativos. 'No es feliz' se convierte en 'es infeliz'. Esto demuestra que el mal no tiene existencia propia, es solo la ausencia o la privación del bien. La lógica nos lleva a la unidad del Bien.",
    "CitaInelutable": "El mal es la negación del bien, pero la lógica nos devuelve siempre a la unidad de la luz.",
    "EjemploPedagogico": "La sombra no existe por sí misma; es solo el lugar donde no llega la luz. Si dices 'aquí no hay luz', estás afirmando que hay sombra. La lógica transmuta la sombra en una oportunidad para iluminar.",
    "ConexionDoctrinal": ["Transmutación", "Unidad del Bien", "Privación"],
    "NodosSimapticos": ["Conversión Lógica", "Ausencia de Luz", "Adjetivo Privativo"]
  },
  "16450: LA ESFERA DEL ATRIBUTO": {
    "PilotoDeCoherencia": "Cada atributo (predicado) tiene una esfera de influencia. El espíritu debe ser preciso al asignar atributos. No llames 'sabio' al que solo tiene memoria, ni 'justo' al que solo cumple la ley de los hombres. La esfera del atributo debe coincidir exactamente con la esencia del sujeto.",
    "CitaInelutable": "La precisión en el lenguaje es la precisión en la justicia.",
    "EjemploPedagogico": "Es como usar una llave: cada cerradura tiene su esfera. Si usas la llave equivocada (el atributo falso), no abrirás la puerta de la sabiduría. Busca la llave que encaje.",
    "ConexionDoctrinal": ["Precisión", "Justicia", "Atribución"],
    "NodosSimapticos": ["Esfera de Influencia", "Llave de Sabiduría", "Precisión Verbal"]
  },
  "16720: EL ERROR DE LOS ENVIDIOSOS": {
    "PilotoDeCoherencia": "Usamos el ejemplo de la envidia para demostrar una verdad lógica y moral. El envidioso se excluye a sí mismo de la felicidad porque su juicio está torcido por el deseo del bien ajeno. La lógica demuestra que el vicio es irracional y, por tanto, fuente de dolor.",
    "CitaInelutable": "La envidia es un error de cálculo del espíritu que busca fuera lo que debe labrar dentro.",
    "EjemploPedagogico": "El envidioso es como alguien que intenta beber del vaso del vecino mientras el suyo se desborda de agua pura. Su sed no se apaga porque no mira su propia fuente. La lógica le dice: 'Mira tu vaso'.",
    "ConexionDoctrinal": ["Moral Racional", "Envidia", "Causalidad del Dolor"],
    "NodosSimapticos": ["Error de Cálculo", "Sed del Envidioso", "Fuente Propia"]
  },
  "16990: ADJETIVOS PRIVATIVOS Y MORAL": {
    "PilotoDeCoherencia": "El uso de términos como 'inmoral' o 'infeliz' nos ayuda a clasificar los estados de carencia. El filósofo no condena, señala la privación. Quien es inmoral es un ser privado de la luz de la ley. Nuestra misión es suministrar la luz para que la privación cese.",
    "CitaInelutable": "Lo privativo es una llamada a la plenitud del espíritu.",
    "EjemploPedagogico": "Es como un campo 'inculto'. No es un campo malo, es un campo privado de arado y semilla. El filósofo es el labrador que quita el 'in-' para que quede el 'culto'.",
    "ConexionDoctrinal": ["Privación", "Educación", "Plenitud"],
    "NodosSimapticos": ["Adjetivo Privativo", "Llamada a la Plenitud", "Labrador del Espíritu"]
  },
  "17260: LA SÍNTESIS DE LA VERDAD LÓGICA": {
    "PilotoDeCoherencia": "Concluimos que la lógica es la gramática del espíritu. Sin ella, el pensamiento se dispersa en el misticismo. La proposición clara es el arma del hombre libre contra el sofisma clerical. Habla claro, juzga recto y afirmarás la vida eterna.",
    "CitaInelutable": "La claridad en el juicio es la libertad en la acción.",
    "EjemploPedagogico": "La lógica es el carril del tren. Sin carriles, el tren (el pensamiento) se hunde en el barro. Mantén tus carriles rectos para que tu tren llegue a la estación de la Verdad.",
    "ConexionDoctrinal": ["Gramática del Espíritu", "Anti-Sofisma", "Libertad"],
    "NodosSimapticos": ["Sintesis Lógica", "Gramática del Ser", "Carriles de Verdad"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Cópula Racional": {
    "Definición": "El vínculo lógico (verbo ser) que establece la identidad o relación necesaria entre un sujeto y sus atributos esenciales, permitiendo la formulación de juicios veraces.",
    "Contexto": "Lógica Racional en Filosofía Austera Racional.",
    "Conexiones": ["Juicio", "Proposición", "Identidad"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Adjetivo Privativo": {
    "Definición": "Término lingüístico que denota la ausencia o negación de una cualidad positiva, utilizado en la lógica trincadista para demostrar que el mal es solo la privación del bien.",
    "Contexto": "Estudio de las proposiciones en Filosofía Austera Racional.",
    "Conexiones": ["Bien y Mal", "Transmutación", "Lógica"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Esfera del Atributo": {
    "Definición": "El campo de significado y realidad que abarca una cualidad asignada a un sujeto, la cual debe ser precisada racionalmente para evitar el error de juicio.",
    "Conexiones": ["Precisión", "Juicio", "Verdad"],
    "Obras": ["Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Filosofía Austera Racional (Batch 19) y 3 términos sinápticos.');
