const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/primer-rayo-de-luz_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Primer Rayo de Luz (Batch 3 - Rellenando Gaps)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "4756: CESAR MONTEMAYOR (FIRMA)": {
    "PilotoDeCoherencia": "Montemayor firma su postura materialista con la seguridad de quien se apoya en lo tangible. Para él, la ciencia es el único tribunal válido. Aunque yerre al negar el espíritu, su honestidad intelectual al denunciar la mentira religiosa es un paso necesario para la limpieza de la conciencia humana.",
    "CitaInelutable": "La ciencia ha realizado desde el siglo XVIII lo que la religión nunca pudo: investigar la verdad.",
    "EjemploPedagogico": "Es como un explorador que llega a una isla y describe perfectamente las rocas y las plantas, pero ignora que la isla misma flota sobre un océano profundo. Montemayor ve la roca, pero niega el océano del espíritu.",
    "ConexionDoctrinal": ["Materialismo", "Honestidad Intelectual", "Ciencia"],
    "NodosSimapticos": ["Explorador de Rocas", "Tribunal Tangible", "Limpieza de Conciencia"]
  },
  "5478: LA CONTRARRÉPLICA DE PODESTÁ": {
    "PilotoDeCoherencia": "Podestá intenta desesperadamente rescatar el edificio dogmático. Sus argumentos son circulares: cree porque la Iglesia dice que crea. Denunciamos esta servidumbre mental que impide al hombre ver la realidad. El teólogo teme a la luz porque sabe que sus sombras desaparecerán.",
    "CitaInelutable": "La teología es la ciencia de lo inexistente defendida por la fe de los ciegos.",
    "EjemploPedagogico": "Es como alguien que intenta sostener un muro que se cae usando solo pegamento de palabras. Por más que hable, la gravedad de la razón terminará por derribar el muro.",
    "ConexionDoctrinal": ["Servidumbre Mental", "Dogma", "Argumento Circular"],
    "NodosSimapticos": ["Muro de Palabras", "Ciencia de lo Inexistente", "Sombras del Temor"]
  },
  "5508: EL VALOR DE LAS OPINIONES DE LOS SABIOS": {
    "PilotoDeCoherencia": "Se discute si el talento de los sabios valida a Dios. Aclaramos: un sabio puede ser un gigante en la materia y un niño en el espíritu. Sus opiniones sobre Dios son respetables pero no son leyes. La única autoridad es la Verdad comprobada por la propia razón y el sentimiento puro.",
    "CitaInelutable": "El sabio de la materia no es necesariamente el sabio del espíritu.",
    "EjemploPedagogico": "Puedes ser el mejor matemático del mundo y no saber nada de música. Que sepas sumar no te da autoridad para juzgar una sinfonía. Así, que sepas de física no te da autoridad sobre el espíritu si no lo has estudiado.",
    "ConexionDoctrinal": ["Sabiduría vs Conocimiento", "Autoridad de la Verdad", "Opinión"],
    "NodosSimapticos": ["Gigante y Niño", "Matemático de Almas", "Sinfonía del Ser"]
  },
  "5758: ¿OPINIONES DE TEÓLOGO?": {
    "PilotoDeCoherencia": "Despreciamos las opiniones teológicas que no tienen base en la observación. El teólogo inventa un Dios y luego se asusta de su propio invento. La Filosofía Austera no opina, razona sobre hechos. El teólogo habla de lo que ignora; el filósofo calla hasta que comprende.",
    "CitaInelutable": "La teología es el arte de asustarse de los fantasmas que uno mismo ha creado.",
    "EjemploPedagogico": "Es como un niño que dibuja un monstruo en la pared y luego no quiere entrar a la habitación porque tiene miedo. El cura dibujó el infierno y ahora tiembla ante su propia pintura. Borra el dibujo y entra a la luz.",
    "ConexionDoctrinal": ["Fantasmas Dogmáticos", "Observación", "Filosofía vs Teología"],
    "NodosSimapticos": ["Monstruo en la Pared", "Arte de Asustarse", "Borrar el Infierno"]
  },
  "5820: CONCLUSIÓN DE LA RÉPLICA": {
    "PilotoDeCoherencia": "Concluimos que la teología ha sido derrotada en el campo de la lógica. Ya no tiene nada que decir que no sea insulto o ruego. El fin de la controversia se acerca y la victoria de la luz es inminente. El espíritu humano está listo para romper las últimas cadenas.",
    "CitaInelutable": "La lógica es el martillo que rompe las cadenas del dogma.",
    "EjemploPedagogico": "Es el final de un juicio donde todas las pruebas han sido presentadas. El culpable (el dogma) ya sabe su sentencia y solo espera el golpe final del mazo. Ese mazo es este libro.",
    "ConexionDoctrinal": ["Victoria de la Luz", "Juicio Final del Dogma", "Lógica"],
    "NodosSimapticos": ["Martillo de Lógica", "Final del Juicio", "Golpe de Mazo"]
  },
  "6441: OBSERVACIONES AL CONFLICTO": {
    "PilotoDeCoherencia": "Observamos que el conflicto es entre el pasado que se muere y el futuro que nace. Podestá representa la tumba; Montemayor el parto doloroso. Nosotros somos el médico que asiste al parto para que el nuevo hombre nazca sano y libre de las infecciones del pasado.",
    "CitaInelutable": "El conflicto es la lucha entre la tumba del dogma y el parto de la razón.",
    "EjemploPedagogico": "Es como el invierno luchando contra la primavera. El hielo intenta retener la vida, pero el sol de la verdad hace brotar la hierba a pesar de todo. Somos ese sol que calienta la tierra.",
    "ConexionDoctrinal": ["Pasado y Futuro", "Parto de la Razón", "Médico Social"],
    "NodosSimapticos": ["Sol de Primavera", "Tumba y Parto", "Médico de Almas"]
  },
  "6792: LA IMPOTENCIA DEL DOGMA": {
    "PilotoDeCoherencia": "La 4ª exposición de Podestá confirma su impotencia. No puede rebatir la eternidad de la materia ni la unidad de la ley. Se refugia en la oscuridad de los misterios para no confesar su derrota. El dogma es un náufrago que se agarra a una tabla podrida en medio del océano de la verdad.",
    "CitaInelutable": "El misterio es el refugio del que no puede dar razón de su esperanza.",
    "EjemploPedagogico": "Es como alguien que se está ahogando y en lugar de nadar hacia la orilla (la razón), se abraza a una piedra (el dogma) que lo hunde más rápido. Suéltate de la piedra y aprende a nadar.",
    "ConexionDoctrinal": ["Impotencia", "Misterio", "Derrota Dogmática"],
    "NodosSimapticos": ["Náufrago del Dogma", "Tabla Podrida", "Piedra del Error"]
  },
  "7454: LA ANALOGÍA DEL DEPÓSITO BANCARIO": {
    "PilotoDeCoherencia": "Tomamos la analogía de Montemayor: si afirmas que hay un tesoro (Dios) en un banco (el universo), pero al abrir la caja no hay nada comprobable, el tesoro no existe para la vida práctica. Eloí no es un tesoro guardado en una caja teológica; es la moneda de oro que circula en el trabajo y el amor de sus hijos.",
    "CitaInelutable": "No busques a Dios en cajas fuertes de dogma; búscalo en el valor real de tus obras.",
    "EjemploPedagogico": "Si alguien te dice que tiene un millón en el banco pero vive como un mendigo y no puede comprar pan, ¿de qué le sirve su dinero imaginario? La religión es el mendigo que sueña con millones que no puede usar.",
    "ConexionDoctrinal": ["Dios Real", "Obras", "Pragmatismo Espiritual"],
    "NodosSimapticos": ["Tesoro de Obras", "Banco del Universo", "Moneda de Amor"]
  },
  "8492: CESAR MONTEMAYOR (CIERRE DE EXPOSICIÓN)": {
    "PilotoDeCoherencia": "Montemayor cierra su exposición exigiendo pruebas y no palabras. Aunque su visión sea limitada a lo material, su exigencia de rigor es saludable. El espíritu no teme las pruebas; las busca. La verdad trincadista es la única que puede satisfacer la sed de pruebas del científico honesto.",
    "CitaInelutable": "Exigimos la presencia de la prueba ante la arrogancia de la fe.",
    "EjemploPedagogico": "Es como un inspector de pesas y medidas: no le importa si el comerciante es amable, le importa que el kilo pese mil gramos. Montemayor es el inspector; nosotros tenemos el peso exacto de la verdad.",
    "ConexionDoctrinal": ["Prueba Racional", "Rigor Científico", "Verdad"],
    "NodosSimapticos": ["Inspector de Verdad", "Peso Exacto", "Sed de Pruebas"]
  },
  "8500: EL DILEMA DEL MÉTODO": {
    "PilotoDeCoherencia": "El método científico de excavar para encontrar el mineral es el correcto. Pero el materialista excava solo en la tierra de la carne. El filósofo austero excava en las profundidades del espíritu. Ambos encontrarán que la vida es una, pero el filósofo verá también la mano que mueve la pala.",
    "CitaInelutable": "Excavar en el ser es la única forma de encontrar el oro de la sabiduría.",
    "EjemploPedagogico": "Es como buscar petróleo: el geólogo sabe dónde perforar. Si perforas en el lugar equivocado, solo sacarás agua sucia. Aprende a perforar en tu propio espíritu para sacar el combustible de la vida eterna.",
    "ConexionDoctrinal": ["Método de Investigación", "Oro de Sabiduría", "Interiorización"],
    "NodosSimapticos": ["Perforación del Ser", "Geólogo del Espíritu", "Combustible de Vida"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Prueba Racional": {
    "Definición": "El requisito de que toda afirmación doctrinal o científica sea verificable mediante la observación de los hechos, la lógica del pensamiento y la ley de causalidad.",
    "Contexto": "Método de controversia en Primer Rayo de Luz.",
    "Conexiones": ["Ciencia", "Rigor", "Verdad"],
    "Obras": ["Primer Rayo de Luz", "Filosofía Austera Racional"]
  },
  "Muro de Palabras": {
    "Definición": "Metáfora de Trincado para describir la retórica teológica que intenta ocultar la falta de argumentos reales mediante la acumulación de términos complejos y vacíos.",
    "Contexto": "Crítica a la teología en Primer Rayo de Luz.",
    "Conexiones": ["Teología", "Dogma", "Hipocresía"],
    "Obras": ["Primer Rayo de Luz"]
  },
  "Minería del Espíritu": {
    "Definición": "El proceso de introspección y estudio profundo orientado a descubrir las leyes espirituales que rigen la vida, comparado con la excavación científica de minerales preciosos.",
    "Conexiones": ["Conócete a ti mismo", "Sabiduría", "Investigación"],
    "Obras": ["Primer Rayo de Luz", "Buscando a Dios"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Primer Rayo de Luz (Batch 3 - Rellenando Gaps) y 3 términos sinápticos.');
