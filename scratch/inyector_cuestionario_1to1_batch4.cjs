const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/cuestionario-espirita-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Cuestionario Espírita Racional (Batch 4 - FINAL - Preguntas 81 a 88)
const nuevosNodos = {
  "1347: Pregunta 81: ¿Dónde radica el alma?": {
    "PilotoDeCoherencia": "Diferenciación estricta entre alma y espíritu. El alma radica en 'todo el ser de los seres' y se manifiesta en la sensibilidad. Sirve como cuerpo neutro material para que el espíritu desencarnado pueda materializarse.",
    "CitaInelutable": "El alma radica en todo el ser de los seres, y se manifiesta en la sensibilidad que es su única facultad.",
    "EjemploPedagogico": "El alma es como la piel invisible del espíritu; siente y da forma, pero no es la mente que dirige.",
    "ConexionDoctrinal": ["Alma", "Sensibilidad", "Materialización"],
    "NodosSimapticos": ["Piel del Espíritu", "Cuerpo Neutro"]
  },
  "1358: Pregunta 82: ¿Qué es el espíritu y dónde radica?": {
    "PilotoDeCoherencia": "Definición del espíritu como la vida misma y partícula del Creador. Radica en todo el cuerpo, pero no es la sangre ni el cuerpo. El axioma máximo es que donde el hombre fija su pensamiento, allí está presente en espíritu.",
    "CitaInelutable": "El espíritu es la vida, porque es partícula del Creador. Donde fijemos nuestro pensamiento, estamos presentes en espíritu, porque el pensamiento es el espíritu mismo.",
    "EjemploPedagogico": "El espíritu es como la luz: la lámpara (cuerpo) y el cable (alma) no son la luz. La luz viaja a donde se proyecta; el espíritu viaja a donde piensa.",
    "ConexionDoctrinal": ["Espíritu es Pensamiento", "Ubicación del Espíritu", "Partícula del Creador"],
    "NodosSimapticos": ["Pensamiento como Espíritu", "Luz de la Vida"]
  },
  "1380: Pregunta 83: Relación entre los Mundos": {
    "PilotoDeCoherencia": "Abolición de la frontera entre el mundo material y el espiritual. Solo existe UN Universo solidario. Es un error hablar de dos mundos separados; todos los espíritus, encarnados o libres, cohabitan la misma patria unidos por la solidaridad de la sustancia única.",
    "CitaInelutable": "No es bien dicho hablar de dos mundos, espiritual y material, porque sólo hay el Universo, patria de todos los espíritus.",
    "EjemploPedagogico": "Es como el agua y el hielo: parecen dos cosas diferentes, pero están en la misma jarra y son la misma sustancia. El Universo contiene a encarnados (hielo) y desencarnados (agua fluida).",
    "ConexionDoctrinal": ["Universo Solidarizado", "Unidad de Mundos", "Sustancia Una"],
    "NodosSimapticos": ["Hielo y Agua", "Fin de Dos Mundos", "Patria Única"]
  },
  "1400: Preguntas 84-85: Los Médiums": {
    "PilotoDeCoherencia": "Se define al médium como intermediario hiper-sensible entre los hombres y los espíritus. Se aclara que del Padre Creador hacia abajo no existen seres excepcionales; los médiums son simplemente espíritus en un grado diferente de progreso sensitivo, con alta responsabilidad por su facultad.",
    "CitaInelutable": "Del Padre Creador abajo, no puede existir ningún ser excepcional; lo que sí existen es, grados diferentes de progreso.",
    "EjemploPedagogico": "Un médium no es un semidiós, es como un hombre que tiene un oído más fino que los demás para escuchar el telégrafo; es un trabajador con una herramienta más sensible.",
    "ConexionDoctrinal": ["Mediumnidad", "Rechazo de Excepcionalidad", "Responsabilidad Sensitiva"],
    "NodosSimapticos": ["Telégrafo Espiritual", "Fin del Semidiós"]
  },
  "1436: Preguntas 86-87: El Juramentado y la Presentación": {
    "PilotoDeCoherencia": "Deberes del estudiante de la Escuela. Ser juramentado significa haber acatado la Ley de Amor a todos los hombres. Ser presentado significa renovar la promesa de defender las doctrinas de fraternidad para implantar la Comuna.",
    "CitaInelutable": "Ser juramentado supone haber acatado la Ley de Amor que hemos prometido cumplir amando al hermano, que son todos los hombres.",
    "EjemploPedagogico": "Juramentarse no es hacer un rito mágico; es firmar un contrato de paz y trabajo con la humanidad entera.",
    "ConexionDoctrinal": ["Juramento de Amor", "Presentación en Cátedra", "Contrato Fraternal"],
    "NodosSimapticos": ["Firma de Paz", "Compromiso Comunal"]
  },
  "1473: Pregunta 88: El Deber ante Padres Opositores": {
    "PilotoDeCoherencia": "Mandato crítico y severo para jóvenes juramentados. Si los padres, por fanatismo religioso o prejuicio, prohíben el estudio de la Escuela, el hijo debe intentar conquistarlos con amor. Si fallan, la Ley Superior ordena desobedecer la prohibición. No se debe perder 'el amor mayor (la humanidad de dos billones)' por 'el amor menor (los dos padres errados)'.",
    "CitaInelutable": "Estoy obligado a no perder el amor mayor por el amor menor, ni a dejarme llevar por la esclavitud que las religiones inculcaron en mis padres.",
    "EjemploPedagogico": "Es como si tus padres te prohíben aprender a leer porque le tienen miedo a los libros. Los respetas como padres, pero aprendes a leer a escondidas, porque la ceguera de ellos no debe ser la tuya.",
    "ConexionDoctrinal": ["Desobediencia Filosófica Justa", "Amor Mayor vs Amor Menor", "Soberanía del Hijo"],
    "NodosSimapticos": ["Rebelión por Luz", "Humanidad sobre Familia Menor"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Alma vs Espíritu": {
    "Definición": "Diferenciación crucial de la Escuela. El Espíritu es la partícula de vida del Creador (El pensamiento); el Alma es la materia quintiescenciada (periespíritu) que le sirve de envoltura y que proviene de las almas animales.",
    "Contexto": "Preguntas 80 a 82 del Cuestionario Espírita Racional.",
    "Conexiones": ["Alma", "Espíritu", "Pensamiento"],
    "Obras": ["Cuestionario Espírita Racional", "Conócete a ti mismo"]
  },
  "Amor Mayor vs Amor Menor": {
    "Definición": "Axioma de justicia distributiva. El 'Amor Menor' corresponde a los deberes familiares consanguíneos (padres, hijos), mientras que el 'Amor Mayor' abarca el deber hacia la humanidad entera. El juramentado nunca debe sacrificar el Amor Mayor por la ignorancia del Amor Menor.",
    "Contexto": "Pregunta 88 del Cuestionario Espírita Racional.",
    "Conexiones": ["Justicia", "Familia Universal", "Rebelión Justa"],
    "Obras": ["Cuestionario Espírita Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 6 nodos finales (Preguntas 81-88) de Cuestionario Espírita Racional y 2 términos sinápticos.');
