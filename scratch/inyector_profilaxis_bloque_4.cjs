const fs = require('fs');
const path = 'F:/trincado/public/data/contents/profilaxis-de-la-vida_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "8632 y 9153: La Liquidación Matemática de la Sociedad": {
    "PilotoDeCoherencia": "Explica que toda sociedad llega a un punto de saturación donde la ley exige una liquidación o juicio matemático de su trabajo. Este proceso es necesario para establecer un nuevo régimen (la Comuna). Sostiene que el juicio de la liquidación ya ha ocurrido y que las obras de cada ser son su única defensa ante la renovación inevitable de la tierra.",
    "IdeasSecundarias": [
      "El orgullo y la ignorancia ciegan a los hombres ante la necesidad de la transición definitiva.",
      "El progreso de 57 siglos ha alcanzado a la mayoría, permitiendo la declaración de mayoría de edad de la humanidad.",
      "Las guerras finales y los movimientos de la tierra son pruebas físicas de la liquidación espiritual en curso."
    ],
    "CitasIneludibles": [
      "toda sociedad llega al cumplimiento del tiempo estipulado y entonces es de ley hacer una liquidación",
      "el juicio de la liquidación fue y ya no será más",
      "vuestras obras que hacen fe, y no por vuestra fe que no demuestra obras"
    ]
  },
  "9685 y 10058: La Tragedia Final como Falta de Profilaxis": {
    "PilotoDeCoherencia": "Interpreta los horrores apocalípticos (guerras, pestes) como la consecuencia directa de la falta de profilaxis histórica y moral. Define la justicia en su mayor rigor como 'el extremo del amor del Padre', que actúa como un preceptor severo para enderezar al hombre desnaturalizado por el odio y las religiones ('la Ramera').",
    "IdeasSecundarias": [
      "La 'serpiente del odio' se ha enroscado en los hombres por causa de las fornicaciones religiosas.",
      "La justicia no es venganza de dioses, sino la aplicación de la ley para cortar lo que desnaturaliza al ser.",
      "La alegría pertenece a los justos que aceptan el rigor de la ley como medio de corrección."
    ],
    "CitasIneludibles": [
      "Tragedia final; sus horrores por falta de profilaxis",
      "la justicia, en su mayor rigor, es el extremo del amor del Padre",
      "la serpiente del odio se enroscó en los hombres y es la hora de meter la hoz"
    ]
  },
  "10094 y 10370: Los Tres Decretos y las Promesas Cumplidas": {
    "PilotoDeCoherencia": "Sintetiza los decretos del Creador: 1) Progreso mediante el trabajo y el esfuerzo; 2) Liquidación de cuentas para la mayoría de edad; 3) El reinado del Amor (Comuna). Afirma que la naturaleza cumple las promesas del Padre con un 'minuto matemático' y que incluso la dureza del 'Faraón' (la oposición) sirve para la liberación definitiva por mano fuerte.",
    "IdeasSecundarias": [
      "El trabajo es la norma natural del progreso; nada se embellece sin el sudor del trabajador.",
      "La Comuna es el régimen decretado para la humanidad que ha alcanzado su madurez espiritual.",
      "La ceguera de los hombres les impide ver el cumplimiento exacto de las promesas de Hellí en los eventos actuales."
    ],
    "CitasIneludibles": [
      "progreso impuesto por sólo el esfuerzo, es decir, por el trabajo",
      "la liquidación de cuentas para la declaración de la mayoría de edad de esta humanidad",
      "la Naturaleza las cumple al Minuto Matemático"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Profilaxis de la Vida (Bloque 4) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Liquidacion_de_Cuentas": {
    "palabras_clave": ["liquidación", "juicio matemático", "fin de ciclo", "deudas espirituales", "balance social", "cierre de sociedad"],
    "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#8632 y 9153: La Liquidación Matemática de la Sociedad"],
    "contexto_real": "Proceso universal de ajuste de cuentas que ocurre al final de cada etapa evolutiva para separar el progreso de la rémora."
  },
  "Mayoria_de_Edad_Humana": {
    "palabras_clave": ["mayoría de edad", "madurez espiritual", "fin de tutela", "humanidad consciente", "responsabilidad plena"],
    "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#10094 y 10370: Los Tres Decretos y las Promesas Cumplidas"],
    "contexto_real": "Estado evolutivo donde el ser humano ya no necesita de mitos ni deidades externas para regir su conducta y progreso."
  },
  "Minuto_Matematico": {
    "palabras_clave": ["minuto matemático", "precisión natural", "cumplimiento inexorable", "justicia a tiempo", "ley exacta"],
    "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#10094 y 10370: Los Tres Decretos y las Promesas Cumplidas"],
    "contexto_real": "Concepto que subraya la puntualidad y exactitud con la que las leyes naturales y el Creador ejecutan sus decretos."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque 4) para Profilaxis de la Vida.');
