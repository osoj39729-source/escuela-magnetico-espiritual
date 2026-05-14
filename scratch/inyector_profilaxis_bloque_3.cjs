const fs = require('fs');
const path = 'F:/trincado/public/data/contents/profilaxis-de-la-vida_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "6044 y 6392: La Verdadera Herencia y el Reparto de Bienes": {
    "PilotoDeCoherencia": "Critica las leyes de herencia humana por ser injustas y basadas en el egoísmo. Proclama que en la Comuna Universal la verdadera herencia es la del espíritu, donde ningún hombre hereda de otro hombre, eliminando la raíz del bandidaje y la codicia material que Moisés intentó frenar con sus mandamientos adicionales.",
    "IdeasSecundarias": [
      "Moisés añadió los mandamientos de no codiciar bienes ajenos para frenar el libertinaje brutal de su época.",
      "La herencia material es una causa del desequilibrio que reina en el mundo actual.",
      "El decreto de Hellí sobre la herencia del espíritu se cumple tras 36 siglos de espera desde Abraham."
    ],
    "CitasIneludibles": [
      "ningún hombre hereda del hombre y sólo hereda del espíritu",
      "la verdadera herencia del hombre en los mundos",
      "la tradición es una traición al progreso"
    ]
  },
  "6576: La Tradición como Traición al Progreso": {
    "PilotoDeCoherencia": "Sostiene que la tradición es un ancla que detiene el avance de la humanidad y una traición al mandato de libertad. Reinterpreta la sentencia de Jesús 'La letra mata al espíritu', señalando que las religiones han usado la tradición para sofocar la luz del progreso y mantener las sombras del pasado bajo una apariencia de santidad.",
    "IdeasSecundarias": [
      "La iglesia cristiana usó la tradición para ocultar el asesinato del Gólgota y desvirtuar el mensaje de Jesús.",
      "Mantener costumbres por tradición es negar la ley de renovación eterna del universo.",
      "La libertad requiere romper con los 'entuertos' arraigados que impiden la visión racional del presente."
    ],
    "CitasIneludibles": [
      "la tradición es una traición al progreso",
      "La letra mata al espíritu",
      "desautorizar la sentencia de Jesús, en la que se ha apoyado la iglesia"
    ]
  },
  "7366 y 7668: Causas del Mal Mundial y el Desequilibrio de la Tierra": {
    "PilotoDeCoherencia": "Los Ancianos 13 y 14 denuncian que el mal mundial radica 'únicamente y por entero' en las religiones y su superstición. Explican que el pensamiento religioso es rústico y opaco, lo cual ha llegado a desequilibrar no solo la moral humana, sino la gravedad y la masa misma de la tierra mediante la acumulación de vibraciones negativas.",
    "IdeasSecundarias": [
      "La superstición es el producto de las religiones para mantener el control mediante el miedo.",
      "El número 13 es tildado de fatal por la justicia de necesidad que desenmascara el mal mundial.",
      "Los pensamientos pesan; la opacidad mental de las masas religiosas afecta el equilibrio geofísico del planeta."
    ],
    "CitasIneludibles": [
      "en las religiones... únicamente y por entero radica el mal mundial",
      "hasta la masa de la tierra se ha desequilibrado, porque hasta los pensamientos pesan",
      "la superstición también es de las religiones"
    ]
  },
  "8103: Bienestar mediante la Prevención": {
    "PilotoDeCoherencia": "Rechaza el dogma de que el sufrimiento y las enfermedades son necesarios para la purificación del espíritu. Afirma que 'el que previene no tiene que curarse' y que la verdadera profilaxis busca evitar el dolor inútil, el cual es antinatural y contrario a la ley de bienestar universal.",
    "IdeasSecundarias": [
      "El sufrimiento moral purifica al espíritu de sus deudas, pero no debe ser buscado como un bien en sí mismo.",
      "La profilaxis es una ley de necesidad tanto para la materia como para el espíritu.",
      "La salud es el estado natural; la enfermedad es la falta de profilaxis física o mental."
    ],
    "CitasIneludibles": [
      "El que previene no tiene que curarse",
      "los sufrimientos sean necesarios y convenientes para la elevación... es antinatural",
      "purifique la materia... purifique y lave el espíritu"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Profilaxis de la Vida (Bloque 3) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Tradicion_Traicion": {
    "palabras_clave": ["tradición", "traición al progreso", "la letra mata", "estancamiento", "atadura al pasado"],
    "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#6576: La Tradición como Traición al Progreso"],
    "contexto_real": "Concepto que invita a la renovación constante y al rechazo de costumbres que impiden la evolución del pensamiento."
  },
  "Peso_de_los_Pensamientos": {
    "palabras_clave": ["peso pensamiento", "desequilibrio tierra", "masa terrestre", "vibración rústica", "gravedad moral"],
    "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#7366 y 7668: Causas del Mal Mundial y el Desequilibrio de la Tierra"],
    "contexto_real": "Explicación metafísica de cómo la calidad del pensamiento colectivo influye en el estado físico del planeta."
  },
  "Herencia_del_Espiritu": {
    "palabras_clave": ["herencia espiritual", "fin propiedad privada", "reparto justo", "bienes de familia", "abolición herencia material"],
    "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#6044 y 6392: La Verdadera Herencia y el Reparto de Bienes"],
    "contexto_real": "Propuesta social de la Comuna donde los méritos y saberes son el único legado válido, eliminando la acumulación familiar injusta."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque 3) para Profilaxis de la Vida.');
