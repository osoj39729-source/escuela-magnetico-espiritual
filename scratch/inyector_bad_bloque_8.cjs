const fs = require('fs');
const path = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "9356: Párrafo IV: Sión, el Centro de la Vía Láctea": {
    "PilotoDeCoherencia": "Sión es una realidad astronómica y espiritual situada en el centro justo de la Vía Láctea. Es un mundo material de alta perfección que funciona como el sol del primer plano de la cosmogonía y asiento de los Consejos Superiores. Nuestro Sol y sistema dependen directamente de las leyes y consejos emanados de Sión.",
    "IdeasSecundarias": [
      "La astronomía debe usar la razón para trascender el telescopio y confirmar la existencia de mundos rectores.",
      "Sión es la ciudad de la luz revelada históricamente pero incomprendida por el dogma religioso.",
      "Existe una jerarquía de planos cosmogónicos donde cada centro depende de uno superior en el infinito."
    ],
    "CitasIneludibles": [
      "Sión está situado en el centro justo de La Vía láctea... asiento de los consejos del plano primero.",
      "Sión es un mundo perfectamente material y regido como todos por la misma ley"
    ]
  },
  "9470: Párrafo V y 9604: Mundos de Expiación y el Código de Amor": {
    "PilotoDeCoherencia": "La Tierra es definida como un mundo de expiación o 'bachillerato' para humanidades en formación. El progreso se basa en la ley matemática de unidad entre espíritu y materia. Trincado justifica su misión de entregar el Código de Amor como la síntesis final de las leyes de Adán, Moisés y Jesús, restaurando la ley natural sin dogmas sacerdotales.",
    "IdeasSecundarias": [
      "La atracción y afinidad determinan la morada espiritual que corresponde a cada alma tras su paso por la Tierra.",
      "El Código de Amor no admite interpretaciones dogmáticas; su letra es espíritu y verdad directa.",
      "La Comuna Universal será el escenario donde la humanidad cante finalmente la armonía de la belleza divina."
    ],
    "CitasIneludibles": [
      "mundos de expiación para las humanidades que llegan, diríamos, al bachillerato",
      "progreso unísono del espíritu y la materia... amor fraternal de todos los hombres",
      "el mistificado Anticristo viene a implantar el Amor con el 'Dios Amor'"
    ]
  },
  "9699: Párrafo II: El Testimonio de Juan el Bautista (Elías)": {
    "PilotoDeCoherencia": "Juan el Bautista confirma su identidad como el espíritu de Elías y su presencia en el Sinaí durante la entrega de la ley a Moisés. Avala la misión de Trincado (el Juez) para restaurar la ley corrompida por las religiones, afirmando que los Consejos de Dios han decretado que la ley de amor es inmutable y no pasará aunque el cielo y la tierra cambien.",
    "IdeasSecundarias": [
      "Juan preparó el camino para Jesús, y ambos pagaron con su vida la declaración de la verdad.",
      "El despotismo religioso actual es denunciado como cien veces peor que el de la antigüedad.",
      "La unión de la familia terrestre se basa en un solo credo de estudio eterno, sin templos ni sacerdotes."
    ],
    "CitasIneludibles": [
      "Yo fuí el profeta Elías; Yo fuí al Sinaí... mi Ley no pasará.",
      "un solo credo, que ni puede llamarse credo puesto que es estudio eterno",
      "Juan y Jesús cumplen su deber y pagan como yo, con su sangre."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Buscando a Dios (Bloque 8) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Sión_Centro_Galactico": {
    "palabras_clave": ["sión", "vía láctea", "centro", "consejos", "plano primero", "astronomía"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#9356: Párrafo IV: Sión, el Centro de la Vía Láctea"],
    "contexto_real": "Mundo rector de nuestra nebulosa desde donde se coordina el progreso espiritual y material de los sistemas solares afiliados."
  },
  "Mundos_de_Expiación_Bachillerato": {
    "palabras_clave": ["expiación", "bachillerato", "tierra", "progreso", "afinidad", "ley matemática"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#9470: Párrafo V y 9604: Mundos de Expiación y el Código de Amor"],
    "contexto_real": "Clasificación planetaria para mundos donde las almas encarnan para saldar deudas y cursar sus primeras etapas de desarrollo consciente."
  },
  "Juan_Bautista_Elías": {
    "palabras_clave": ["juan bautista", "elías", "sinaí", "testimonio", "hebilla", "preparador"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#9699: Párrafo II: El Testimonio de Juan el Bautista (Elías)"],
    "contexto_real": "Espíritu misionero recurrente encargado de preparar los grandes hitos de la justicia divina en la Tierra."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para Buscando a Dios.');
