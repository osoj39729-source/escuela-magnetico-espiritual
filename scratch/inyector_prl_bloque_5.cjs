const fs = require('fs');
const path = 'F:/trincado/public/data/contents/primer-rayo-de-luz_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "6199 y 8333: El Dios Comercial vs. la Fuerza de la Naturaleza": {
    "PilotoDeCoherencia": "Recoge la crítica radical al concepto teológico de Dios como una 'invención comercial' o el 'carbón que hierve la olla del cura'. Trincado sostiene que la teología, al intentar definir a Dios, solo logra demostrar su inexistencia como entidad dogmática, reduciéndolo a una palabra abstracta que oculta las fuerzas naturales que el hombre aún no comprende.",
    "IdeasSecundarias": [
      "El hombre ha creado al 'Dios' de las religiones a su imagen y semejanza para fines de control.",
      "Para desbaratar el dogma, basta dejar hablar al teólogo; su discurso se anula ante la mínima reflexión científica.",
      "Dios, en el sentido religioso, es un fantasma proyectado por la imaginación supersticiosa."
    ],
    "CitasIneludibles": [
      "Dios es el carbón que hace hervir la olla del cura; una pura invención comercial",
      "Para desbaratar la existencia de Dios, no hay como rogar a un teólogo que hable",
      "lo que dice es incompatible con la ciencia que atribuye a su Dios"
    ]
  },
  "8498: La Indisolubilidad de lo Físico y lo Metafísico": {
    "PilotoDeCoherencia": "Trincado critica la postura del anarquismo materialista (Montemayor) por intentar separar el espíritu (metafísico) de la materia (físico). Sostiene que es imposible que exista un efecto (creación/vida) sin una causa (espíritu/creador). La verdadera ciencia debe integrar ambos aspectos para ser completa y justa.",
    "IdeasSecundarias": [
      "El espíritu y el ser hombre son una unidad; desunirlos es un error de la ciencia materialista.",
      "No hay efecto sin causa: negar el principio creador es negar la lógica fundamental del universo.",
      "La razón debe ponerse del lado de la ciencia, pero de una ciencia que reconozca la ley del espíritu."
    ],
    "CitasIneludibles": [
      "aun quiere desunir lo físico de lo metafísico: es decir, el espíritu del ser hombre",
      "no hay efecto sin causa",
      "poner su razón sobre el platillo que es de justicia; es decir, del lado de la ciencia"
    ]
  },
  "7223 y 10019: El Valor del Testimonio de los Sabios": {
    "PilotoDeCoherencia": "Analiza la disputa sobre si los grandes sabios (Newton, Kelvin, Bruno) validan el dogma por ser 'creyentes'. Trincado aclara que su fe era en un Creador y en la inmortalidad del alma (principios universales), no en la divinidad de Jesucristo o en las 'paparruchadas' de los teólogos católicos.",
    "IdeasSecundarias": [
      "Newton creía en el Dios de la ley y el orden, no en el Dios de los milagros irracionales.",
      "Giordano Bruno fue un mártir de la ciencia y la libertad, no un defensor del catolicismo (fue quemado por él).",
      "El talento de Voltaire no se habría dejado engañar por la 'indigencia desoladora' de los argumentos teológicos."
    ],
    "CitasIneludibles": [
      "Newton... no cité como católico, sino como 'creyente' y 'cristiano'",
      "Giordano Bruno (¡), a quien ni siquiera nombré jamás (Podestá)",
      "Dios no es más que un nebuloso fantasma proyectado en los cielos"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Primer Rayo de Luz (Bloque 5) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Dios_Comercial": {
    "palabras_clave": ["negocio religioso", "carbón del cura", "invención comercial", "explotación", "teología mercantil"],
    "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#6199 y 8333: El Dios Comercial vs. la Fuerza de la Naturaleza"],
    "contexto_real": "Crítica a la utilización de la divinidad como medio de lucro y control social por parte de las castas sacerdotales."
  },
  "Unidad_Fisico_Metafisica": {
    "palabras_clave": ["físico", "metafísico", "causa y efecto", "espíritu-materia", "indisoluble", "monismo"],
    "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#8498: La Indisolubilidad de lo Físico y lo Metafísico"],
    "contexto_real": "Postura central del Espiritismo Luz y Verdad que rechaza tanto el misticismo vacío como el materialismo negador."
  },
  "Sabios_vs_Teologos": {
    "palabras_clave": ["sabios creyentes", "teólogos", "apropiación de figuras", "Newton", "fe racional vs fe ciega"],
    "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#7223 y 10019: El Valor del Testimonio de los Sabios"],
    "contexto_real": "Aclaración sobre la naturaleza de la fe de los científicos históricos, que era filosófica y no dogmática."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque 5) para Primer Rayo de Luz.');
