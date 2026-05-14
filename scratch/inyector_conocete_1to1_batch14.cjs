const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Conócete a ti mismo (Batch 14 - Espiritu Final y Mundo Regenerado)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "18000: AMOR, JUSTICIA Y VERDAD COMO TRIADA FINAL": {
    "PilotoDeCoherencia": "Cerramos el gran argumento con la triada definitiva: Amor (ley del Creador), Justicia (mecánica de la ley) y Verdad (resultado del estudio). Estas tres potencias son la brújula del hombre regenerado. No es posible tener una sin las otras dos: el amor sin justicia es debilidad; la justicia sin verdad es tiranía; la verdad sin amor es frialdad mortal.",
    "CitaInelutable": "Amor, Justicia y Verdad: las tres llaves de la puerta de la Comuna.",
    "EjemploPedagogico": "Es como un trípode: necesita las tres patas para mantenerse en pie. Si le falta una, el conjunto cae. Mantén las tres patas de tu carácter siempre en equilibrio.",
    "ConexionDoctrinal": ["Trinidad Moral", "Amor", "Justicia"],
    "NodosSimapticos": ["Trípode del Ser", "Tres Llaves", "Brújula del Regenerado"]
  },
  "18100: EL ESPIRITISMO COMO CIENCIA Y GOBIERNO": {
    "PilotoDeCoherencia": "Definimos el Espiritismo Racional no como religión, sino como la ciencia que estudia al espíritu y su relación con las leyes universales. Es también la doctrina de gobierno de la futura humanidad. Quien estudia la verdad del espíritu, se convierte en el mejor legislador, porque su ley nace del amor y no del miedo.",
    "CitaInelutable": "El espiritismo es la ciencia madre de todas las ciencias y el gobierno de la Nueva Era.",
    "EjemploPedagogico": "Es como el sol que es a la vez fuente de luz (ciencia) y de calor (gobierno). El espiritismo ilumina la mente y calienta el corazón para la vida en comunidad.",
    "ConexionDoctrinal": ["Espiritismo Racional", "Ciencia", "Gobierno"],
    "NodosSimapticos": ["Ciencia Madre", "Nueva Era", "Legislador de Amor"]
  },
  "18298: UNA SOLA BANDERA Y UN SOLO CREDO": {
    "PilotoDeCoherencia": "Sentenciamos que la humanidad se dirige inevitablemente hacia una sola bandera: la del Amor Universal, y un solo credo: el de la Verdad Racional. No habrá más naciones, más credos, ni más partidos. Solo habrá la humanidad trabajadora y libre bajo la ley de Eloí.",
    "CitaInelutable": "Una sola bandera: el amor; un solo credo: la verdad; un solo pueblo: la humanidad.",
    "EjemploPedagogico": "Es como un río formado por muchos afluentes: cada uno tiene su nombre y su cauce, pero al unirse en el gran río, forman una sola corriente poderosa. La humanidad es ese gran río; la Comuna es el mar al que desemboca.",
    "ConexionDoctrinal": ["Unidad Universal", "Credo Racional", "Fin de Naciones"],
    "NodosSimapticos": ["Gran Río", "Afluentes Unidos", "Mar de la Comuna"]
  },
  "18403: NO SE PUEDE IR MÁS ALLÁ DEL ESPIRITISMO": {
    "PilotoDeCoherencia": "Afirmamos con rigor doctrinal que el Espiritismo Racional es el límite y la cima del progreso humano en este ciclo universal. No existe una doctrina más allá porque el Espiritismo ya incluye la mecánica de todas las ciencias y la ética de todos los códigos. Quien estudia aquí, tiene todo.",
    "CitaInelutable": "El Espiritismo es la ciencia de los siglos por venir.",
    "EjemploPedagogico": "Es como un mapa que contiene todos los caminos: no puedes ir más allá del mapa porque el mapa contiene todo. Si lo estudias bien, encontrarás cualquier destino sin perderte.",
    "ConexionDoctrinal": ["Cima del Progreso", "Límite Epistémico", "Mapa Universal"],
    "NodosSimapticos": ["Mapa del Todo", "Ciencia de Siglos", "Sin Más Allá"]
  },
  "18511: LA COMUNA COMO BANDERA Y ESPIRITISMO": {
    "PilotoDeCoherencia": "La bandera de la Escuela es la unión de los dos conceptos supremos: la Comuna (organización material perfecta) y el Espiritismo Racional (organización espiritual perfecta). No puede haber comuna sin el conocimiento del espíritu, ni espiritu verdadero sin organización comunal. Son inseparables.",
    "CitaInelutable": "La Comuna sin el Espiritismo es un cuerpo sin alma; el Espiritismo sin la Comuna es un alma sin cuerpo.",
    "EjemploPedagogico": "Es como el pájaro: necesita dos alas para volar. Un ala es la justicia social (la Comuna); la otra es la verdad espiritual (el Espiritismo). Sin las dos alas juntas, no se vuela hacia el horizonte de Eloí.",
    "ConexionDoctrinal": ["Dualidad Inseparable", "Plenitud", "Revolución Total"],
    "NodosSimapticos": ["Pájaro de Dos Alas", "Cuerpo y Alma Social", "Horizonte de Eloí"]
  },
  "18581: EL MUNDO REGENERADO": {
    "PilotoDeCoherencia": "El mundo regenerado es el horizonte que justifica todo el esfuerzo del estudio. En él, Eloí es el único adorado en el taller, la escuela y el hogar. No hay templos de piedra, sino templos de actos de amor. El obrero, el científico y el padre de familia son los únicos sacerdotes reconocidos por la ley.",
    "CitaInelutable": "El mundo regenerado no tiene más sacerdotes que los obreros del amor.",
    "EjemploPedagogico": "Es como imaginar que todos los soldados del mundo convierten sus armas en herramientas de construcción. La energía que se gastaba en destruir se convierte en energía para construir el hogar de todos.",
    "ConexionDoctrinal": ["Mundo Regenerado", "Nuevos Sacerdotes", "Adoración en Obras"],
    "NodosSimapticos": ["Templo de Actos", "Armas en Herramientas", "Sacerdote Obrero"]
  },
  "18797: APÉNDICE: FISIOLOGÍA, FISIOGNOMIA Y ÉTICA": {
    "PilotoDeCoherencia": "El apéndice de esta obra vincula la fisiología del cuerpo con la ética del espíritu. La forma del cuerpo refleja el grado de progreso del espíritu que lo habita. La fisiognomía es la lectura del libro del progreso escrito en la carne. Quien conoce las leyes de afinidad, puede leer la historia del espíritu en el rostro del hermano.",
    "CitaInelutable": "El rostro es el archivo del espíritu impreso en la materia.",
    "EjemploPedagogico": "Es como un árbol cuya forma refleja la historia de los vientos y las lluvias que ha soportado. El árbol que creció tortuoso en la tormenta y el que creció recto en el sol cuentan historias diferentes. Aprende a leer los árboles humanos con amor.",
    "ConexionDoctrinal": ["Fisiognomía", "Fisiología Espiritual", "Libro de la Carne"],
    "NodosSimapticos": ["Árbol y Viento", "Archivo del Rostro", "Historia del Cuerpo"]
  },
  "19280: BIBLIOGRAFÍA: OBRAS DEL MAESTRO": {
    "PilotoDeCoherencia": "La bibliografía de la obra señala el camino de las lecturas complementarias para el estudiante. Cada libro del Maestro es una etapa del mismo camino. 'Buscando a Dios' es el primer paso; 'Conócete a ti mismo' es el camino; la 'Filosofía Austera' es la madurez. Todos deben leerse en la luz del amor y el rigor.",
    "CitaInelutable": "Cada obra del Maestro es un peldaño hacia la cima del autoconocimiento.",
    "EjemploPedagogico": "Es como una carrera de estudio: no puedes saltar del primer grado al doctorado. El Maestro puso los libros en el orden correcto para que cada estudiante avance sin perderse.",
    "ConexionDoctrinal": ["Biblioteca Doctrinal", "Gradualidad", "Soberanía del Estudio"],
    "NodosSimapticos": ["Peldaños de Luz", "Carrera Doctrinal", "Orden del Maestro"]
  },
  "19286: CÓDIGO DE AMOR UNIVERSAL (TOMO I)": {
    "PilotoDeCoherencia": "Presentamos el Código de Amor Universal como el compendio de normas prácticas para el régimen de la Comuna. No es un código penal, sino un código de convivencia basado en la solidaridad y la justicia natural. Es la Constitución de la humanidad regenerada que reemplaza a todos los códigos anteriores basados en el miedo.",
    "CitaInelutable": "El Código de Amor es la Constitución de la humanidad libre.",
    "EjemploPedagogico": "Es como las reglas de una familia perfecta: 'ayúdate mutuamente', 'respeta el espacio del otro', 'trabaja para todos'. No hacen falta leyes complicadas cuando el amor es el principio.",
    "ConexionDoctrinal": ["Código de Amor", "Convivencia", "Constitución Universal"],
    "NodosSimapticos": ["Constitución de Amor", "Reglas de Familia", "Codex de la Luz"]
  },
  "EPÍLOGO: SÍNTESIS FINAL DE LA OBRA": {
    "PilotoDeCoherencia": "Esta obra cierra el gran ciclo del autoconocimiento. Has recorrido el camino desde la nebulosa hasta el mundo regenerado; desde el miedo al dogma hasta la soberanía del espíritu. El Maestro concluye con un mandato irrenunciable: 'Conócete a ti mismo y serás libre'. La libertad del espíritu es el principio, el medio y el fin de todo.",
    "CitaInelutable": "Conócete a ti mismo: he ahí la tarea y la recompensa de toda una eternidad.",
    "EjemploPedagogico": "Es como llegar al final de un gran viaje y darte cuenta de que el viaje mismo fue el destino. Has aprendido más en el camino que en la llegada. Sigue caminando, porque 'Siempre Más Allá' es la ley del espíritu eterno.",
    "ConexionDoctrinal": ["Soberanía del Espíritu", "Síntesis", "Mandato Final"],
    "NodosSimapticos": ["Viaje como Destino", "Camino y Recompensa", "Siempre Más Allá"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Espiritismo Racional": {
    "Definición": "Ciencia y doctrina de gobierno de la Nueva Era que estudia la naturaleza, las leyes y el progreso del espíritu, diferenciándose de las religiones por su carácter racional, experimental y libre de dogmas.",
    "Contexto": "Definición central en Conócete a ti mismo y toda la obra de Trincado.",
    "Conexiones": ["Espíritu", "Ciencia", "Gobierno", "Verdad"],
    "Obras": ["Conócete a ti mismo", "Filosofía Austera Racional", "Primer Rayo de Luz"]
  },
  "Código de Amor Universal": {
    "Definición": "Compendio normativo de convivencia de la Comuna Universal basado en los principios del amor, la justicia y el trabajo, concebido como la Constitución de la humanidad regenerada.",
    "Contexto": "Bibliografía y apéndice de Conócete a ti mismo.",
    "Conexiones": ["Comuna", "Convivencia", "Justicia", "Fraternidad"],
    "Obras": ["Conócete a ti mismo", "Profilaxis de la Vida"]
  },
  "Fisiognomía": {
    "Definición": "Arte racional de leer el grado de progreso del espíritu a través de los rasgos físicos del cuerpo, basado en las leyes de afinidad entre el espíritu y la materia.",
    "Conexiones": ["Fisiología", "Espíritu", "Afinidad", "Progreso"],
    "Obras": ["Conócete a ti mismo"]
  },
  "Mundo Regenerado": {
    "Definición": "Estado de la Tierra tras el Juicio de transición, donde el amor es la única ley, el trabajo es el único sacerdocio y la ciencia del espíritu rige la vida social sin dogmas ni fronteras.",
    "Conexiones": ["Transición", "Comuna", "Eloí", "Nuevo Ciclo"],
    "Obras": ["Conócete a ti mismo", "Profilaxis de la Vida"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Conócete a ti mismo (Batch 14 - FINAL) y 4 términos sinápticos. ¡OBRA COMPLETADA AL 100%!');
