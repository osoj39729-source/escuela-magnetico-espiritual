const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - El Espiritismo en su Asiento (Batch 5 FINAL - Claves 77 a 84)
const nuevosNodos = {
  "8651: MACTHEUIX.": {
    "PilotoDeCoherencia": "Validación de la comunicación de Dabet. Trincado ordena el estudio de memoria de este texto debido a que sus acusaciones y sentencias contra el error religioso son irrebatibles y están probadas por los hechos históricos.",
    "CitaInelutable": "Encarezco a los adherentes de nuestra Escuela, que la comunicación del hermano Dabet, la estudien hasta que la aprendan de memoria. Sus acusaciones, todas están probadas.",
    "EjemploPedagogico": "Dabet no habla por hablar; presenta el expediente criminal de las religiones. Memorizarlo es tener el código de justicia en la mente.",
    "ConexionDoctrinal": ["Rigor Doctrinal", "Sentencia de Dabet"],
    "NodosSimapticos": ["Mactheuix"]
  },
  "8668: III (CAPÍTULO V: Explicación del espiritismo)": {
    "PilotoDeCoherencia": "La lucha contra la aberración. Se describe la necesidad de 'abrirse paso a hachazos' entre los aberrados que ocupan cargos y dignidades. Los espíritus de luz no temen a la 'espada' de la verdad para cortar la ceguera dogmática.",
    "CitaInelutable": "Hay que abrirse paso a hachazos entre estos aberrados. ¡Qué ceguera hermanos, en seres que ocupan cargos y dignidades y quieren pasar por civilizados!",
    "EjemploPedagogico": "La verdad no pide permiso para entrar en el palacio del error; rompe la puerta con la lógica para liberar a los cautivos de la mentira.",
    "ConexionDoctrinal": ["Combate al Error", "Ceguera de las Dignidades"],
    "NodosSimapticos": ["Hachazo de Luz"]
  },
  "8867: IV (CAPÍTULO V: Explicación del espiritismo)": {
    "PilotoDeCoherencia": "La exclusividad del Asiento. Se usa la metáfora del gaucho: 'Tuve que dentrar a juerza de hombro y de codos'. Indica que en la cátedra de la verdad absoluta solo hay un asiento (una sola verdad), y los espíritus luchan por ocuparlo para educar, sin herir susceptibilidades pero con firmeza.",
    "CitaInelutable": "Tuve que dentrar a juerza de hombro y de codos... no hay más que un asiento y, ¡son tantos los que quisieran ocuparlo!",
    "EjemploPedagogico": "La verdad no es un sofá para muchos; es una silla única. El espíritu que llega a ella debe ganársela con mérito y amor al sacrificio.",
    "ConexionDoctrinal": ["Unicidad de la Verdad", "Esfuerzo Espiritual"],
    "NodosSimapticos": []
  },
  "9091: V (CAPÍTULO V: Explicación del espiritismo)": {
    "PilotoDeCoherencia": "Disciplina mediúmnica frente a la curiosidad. Se menciona una 'huelga de médiums' autorizada para evitar que los malos curiosos contaminen la sesión, priorizando el consejo de médiums del día siguiente.",
    "CitaInelutable": "Huelga hay por todas partes y a poco hay también huelga de médiums aquí. Sé que se les ha autorizado a faltar hoy, a fin de que no falten mañana al consejo de médiums.",
    "EjemploPedagogico": "Si el público viene a ver un espectáculo de magia y no a estudiar, la Escuela cierra sus puertas. Los médiums no son artistas de feria.",
    "ConexionDoctrinal": ["Disciplina en la Cátedra", "Rechazo a la Curiosidad Vana"],
    "NodosSimapticos": []
  },
  "9201: veréis, será el consejo que recibiréis.": {
    "PilotoDeCoherencia": "Superioridad de la Escuela sobre el Espiritualismo. El consejo que se recibe en la Escuela es más sublime y grande que cualquier 'fratelanza amalgamada'. Se subraya la ausencia de preferencias o distinciones personales; todos son juzgados por sus obras.",
    "CitaInelutable": "Es muy sublime y más grande que todo lo que habéis visto: más grande que todas esas sociedades y fratelanzas amalgamadas y espiritualistas. Allí veréis, que no hay preferencia nunca por nadie.",
    "EjemploPedagogico": "Mientras otros grupos adulan a los ricos o a los 'iluminados', la Escuela solo reconoce el brillo del trabajo y la fraternidad real.",
    "ConexionDoctrinal": ["Imparcialidad de la Escuela", "Superioridad sobre la Amalgama"],
    "NodosSimapticos": ["Fratelanzas Amalgamadas"]
  },
  "9225: VI (CAPÍTULO V: Explicación del espiritismo)": {
    "PilotoDeCoherencia": "Enlace al Primer Consejo de Médiums.",
    "CitaInelutable": "VI (CAPÍTULO V: Explicación del espiritismo) Agosto 4 de 1917. Por la medium Mercedes.",
    "EjemploPedagogico": "Registro de la sesión histórica.",
    "ConexionDoctrinal": ["Historia de la Escuela"],
    "NodosSimapticos": []
  },
  "9232: PRIMER CONSEJO DE MEDIUMS": {
    "PilotoDeCoherencia": "Fundación del órgano regulador. Se establece el Primer Consejo de Médiums con 15 facultades en desarrollo. Es el plantel bajo la sombra benéfica de la Escuela, única en su género por su rigor científico y moral.",
    "CitaInelutable": "PRIMER CONSEJO DE MEDIUMS... un plantel hermoso que a la sombra benéfica de esta Escuela, primera y única en su género.",
    "EjemploPedagogico": "El Consejo de Médiums es el gremio de los trabajadores del éter. Aquí no se viene a soñar, sino a ser entrenado como obrero de la verdad.",
    "ConexionDoctrinal": ["Consejo de Médiums", "Organización Mediúmnica"],
    "NodosSimapticos": ["Plantel de Médiums"]
  },
  "9580: EPÍLOGO": {
    "PilotoDeCoherencia": "Advertencia final y síntesis del mandato. Trincado clama a la humanidad que despierte ante la llegada del 'Simoum' (el cataclismo de limpieza). El libro cierra con los dos mandatos eternos que resumen la salvación por la razón: 'Ama a tu hermano' y 'Conócete a ti mismo'.",
    "CitaInelutable": "¡Humanidad! Despierta antes que llegue el simoum, cuyos ruidos ya se oyen... se te da la última ley, con el único mandato de 'Ama a tu hermano'. 'Conócete a ti mismo'.",
    "EjemploPedagogico": "El Simoum es el viento que barre la paja del trigo. Si te amas a ti mismo y al hermano, eres trigo; si eres fanático, eres paja que el viento llevará.",
    "ConexionDoctrinal": ["Simoum", "Mandatos Eternos", "Llamado a la Humanidad"],
    "NodosSimapticos": ["El Viento de la Verdad"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Simoum (El Viento de Limpieza)": {
    "Definición": "Metáfora trincadista del cataclismo o crisis final que barre el error de la Tierra. No es un fin del mundo destructivo, sino una purificación necesaria para que solo quede lo que tiene valor real ante la ley de afinidad. Se anuncia como un ruido de mugidos terribles que el sordo espiritual no quiere oír.",
    "Contexto": "Epílogo de El Espiritismo en su Asiento.",
    "Conexiones": ["Juicio Final", "Transición de Eras", "Purificación Planetaria"],
    "Obras": ["El Espiritismo en su Asiento", "Los Extremos se Tocan"]
  },
  "Consejo de Médiums": {
    "Definición": "Institución fundamental de la Escuela Magnético-Espiritual encargada de la educación, regulación y protección de las facultades medianímicas. A diferencia de los centros espiritualistas, aquí se exige el estudio del Método Supremo y se prohíbe el misticismo, el lucro y la curiosidad vana.",
    "Contexto": "El Espiritismo en su Asiento (Libro Segundo, Cap. V).",
    "Conexiones": ["Mediumnidad Racional", "Método Supremo", "Ley de las Mediumnidades"],
    "Obras": ["El Espiritismo en su Asiento", "Código de Amor Universal"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 8 nodos PURA CALIDAD 1:1 de El Espiritismo en su Asiento (Batch 5 FINAL) y 2 términos sinápticos. OBRA COMPLETADA 100%.');
