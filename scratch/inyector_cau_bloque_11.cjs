const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "5731: Párrafo ii: Comprobaciones por sus hechos": {
    "PilotoDeCoherencia": "Las religiones positivas han utilizado el dominio y la sangre para mantener su supremacía. Su objetivo sistemático ha sido la explotación del hombre y la anulación de los derechos de la mujer, reduciéndola a un objeto de placer o una madre despreciada para librar al clero del trabajo productivo.",
    "IdeasSecundarias": [
      "El título de 'ministro de Dios' es una usurpación humana; el Padre no otorga privilegios a ningún hijo.",
      "La iglesia católica del siglo IV traicionó la unificación espiritual al resucitar el mito del Cristo.",
      "El acaparamiento de riquezas sin producirlas es el móvil oculto de todas las organizaciones religiosas."
    ],
    "CitasIneludibles": [
      "el objeto de sus ministros ha sido y es el dominio de los demás; librarse ellos del trabajo y rebajar a la mujer... convirtiéndola así en bestia destinada al placer.",
      "el Padre, por sus hijos de progreso, ha ido refundiendo todas las religiones... pero el cristianismo tiene aquel mismo principio corrompido"
    ]
  },
  "5844: Párrafo i: los estados civiles feudos de las religiones": {
    "PilotoDeCoherencia": "No existe libertad civil real en la Tierra mientras los estados sigan siendo feudos de las religiones. La política y la justicia operan bajo la influencia de clérigos que fanatizan a los pueblos mediante conceptos de 'guerras santas' o 'patria' para mantener sus privilegios de casta.",
    "IdeasSecundarias": [
      "El odio religioso es la semilla de todas las divisiones nacionales y conflictos armados.",
      "Los tiranos invocan a Dios para justificar el exterminio de sus semejantes por intereses económicos.",
      "La ley civil está paralizada por el temor y la bendición de los sacerdotes."
    ],
    "CitasIneludibles": [
      "no ha habido estado civil, ni sociedad libre aún en la tierra, porque todo, colectivo e individual, ha sido y aún es feudo de las religiones.",
      "fanatizados unos y otros hombres de todos los pueblos... cuando fue invocado su Dios por los tiranuelos, declarando guerras sin cuartel"
    ]
  },
  "6144: Párrafo iii: las armadas y la paz armada": {
    "PilotoDeCoherencia": "La Patria Universal es la única realidad legítima: la Tierra es una sola y nadie es extranjero. Trincado condena el militarismo como un entrenamiento criminal en el odio y profetiza que la humanidad, guiada por el Código de Amor, se negará a empuñar armas, reconociendo la fraternidad universal por encima de las fronteras.",
    "IdeasSecundarias": [
      "El servicio militar fanatiza a la juventud en el exterminio del semejante bajo el falso prejuicio de patria.",
      "La emigración es el mecanismo natural de hermandad que disuelve el odio nacionalista.",
      "El movimiento obrero internacional es el primer paso hacia la negación de la guerra y la unión comunal."
    ],
    "CitasIneludibles": [
      "la patria de todo hombre es el mundo todo y que en ninguna parte es extranjero.",
      "las guerras nacieron con la primera religión que el hombre inventó... no acaeció hasta que bajo cualquier forma se inició el sacerdocio",
      "el primer movimiento universal será negarse en todo los pueblos a empuñar los hombres las armas"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia del CAU Tomo I (Bloque 11) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Patria_Universal": {
    "palabras_clave": ["patria", "fronteras", "extranjero", "fraternidad", "unión", "mundo"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#6144: Párrafo iii: las armadas y la paz armada"],
    "contexto_real": "Concepto político-espiritual que declara a la Tierra como el hogar común de toda la humanidad, eliminando la división por naciones y el concepto de extranjero."
  },
  "Antimilitarismo_Racional": {
    "palabras_clave": ["ejército", "armas", "guerra", "militarismo", "huelga de armas", "fraternidad"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#6144: Párrafo iii: las armadas y la paz armada", "codigo-de-amor-universal-tomo-1_esencia.json#5844: Párrafo i: los estados civiles feudos de las religiones"],
    "contexto_real": "La negativa consciente del espíritu a empuñar instrumentos de muerte contra sus hermanos, fundamentada en el reconocimiento de la ley de amor universal."
  },
  "Clero_como_Causa_de_Guerra": {
    "palabras_clave": ["sacerdocio", "odio religioso", "guerras santas", "feudo", "supremacía"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#5844: Párrafo i: los estados civiles feudos de las religiones"],
    "contexto_real": "Denuncia histórica que sitúa el origen de los conflictos armados en la invención del sacerdocio y su necesidad de dominio sobre los pueblos."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado.');
