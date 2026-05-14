const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "4609: Párrafo i: el uso de la carne es ley de la naturaleza, y ella es amor": {
    "PilotoDeCoherencia": "El acto sexual (uso de la carne) es una ley natural sublime, sagrada y universal. Las religiones han criminalizado y prejuiciado este acto para esclavizar la conciencia humana. Trincado reivindica que el sexo es la manifestación del amor por la cual el espíritu encarna para completar la obra del Padre en todos los mundos del universo.",
    "IdeasSecundarias": [
      "El nacimiento a través de la unión de varón y mujer es el método universal de procreación.",
      "El escándalo ante el sexo es una muestra de hipocresía religiosa frente a la perfección de la naturaleza.",
      "Solo el conocimiento superior permite entender el sexo como una función de amor puro y no como un pecado."
    ],
    "CitasIneludibles": [
      "el uso de la carne es ley de la naturaleza, y ella es amor",
      "se ha condenado tanto en letra; se ha prejuiciado tanto a la humanidad en lo más bello y sagrado de la ley de la naturaleza"
    ]
  },
  "4688: Párrafo ii: edad que los seres pueden hacer uso de la ley de la carne": {
    "PilotoDeCoherencia": "La vida humana se divide en tres épocas: Educación (estudio), Fuerza (procreación y trabajo) y Sensatez (amor espiritual reposado). El uso de la carne debe ser consciente y moderado, encontrando su fin primordial en la procreación durante la etapa de fuerza y como goce de gratitud en la madurez.",
    "IdeasSecundarias": [
      "La instrucción de los deberes sociales y espirituales pone límite y cordura al deseo sexual.",
      "En la época de la sensatez, la naturaleza otorga el goce supremo como pago al amor fiel de la pareja.",
      "El régimen comunal equilibrará las necesidades humanas eliminando los desórdenes pasionales."
    ],
    "CitasIneludibles": [
      "la humanidad tiene tres épocas: la de la educación, la de la fuerza y la de la sensatez... la de la fuerza, es la de la procreación",
      "la naturaleza está satisfecha de su cumplimiento y no les niega su pago del goce supremo de la materia"
    ]
  },
  "4744: Párrafo iii: se falta a la ley por demás y por de menos": {
    "PilotoDeCoherencia": "Se falta a la ley natural tanto por el abuso de la carne como por la abstención forzada (celibato). El espíritu avanzado 'está sobre la carne', dándole a la naturaleza lo que le pertenece con justicia y conciencia, sin dejarse dominar por la pasión ciega.",
    "IdeasSecundarias": [
      "La ley de justicia rige la sexualidad según el grado de progreso y las deudas del espíritu.",
      "La unión en amor y afinidad garantiza naturalmente el fruto de la procreación.",
      "La moderación es la clave para que los espíritus disfruten de las grandezas del universo sin atarse a la materia."
    ],
    "CitasIneludibles": [
      "la ley es de justicia y se falta por abuso y por falta de uso.",
      "cuando el hombre esta en la luz... está sobre la carne; sabe su medida"
    ]
  },
  "4898: Párrafo iv: los vicios y sus efectos, el amor sólo puede regenerarlos": {
    "PilotoDeCoherencia": "Los manuales de confesores son los mayores agentes de depravación social, enseñando el vicio bajo la excusa de corregirlo. La iglesia es responsable de envenenar la inocencia de las almas y llenar instituciones de reclusión mediante la insinuación de pecados que el hombre no habría inventado solo.",
    "IdeasSecundarias": [
      "La confesión es un acto criminal que exalta la concupiscencia de clérigos y penitentes.",
      "Solo el amor desinteresado y la verdad pueden regenerar los efectos de los vicios eclesiásticos.",
      "El sistema de absolución es una mentira que justifica y perpetúa el desorden moral."
    ],
    "CitasIneludibles": [
      "opúsculos tan inmorales que ellos son, con sus autores, los propagandistas de los vicios más nefandos",
      "Estos libros, puestos en manos del confesor, no pueden menos de exaltarles a ellos y de enseñar a los que a ellos se arrimen e entregarse al vicio"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia del CAU Tomo I (Bloque 9) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Ley_de_la_Carne": {
    "palabras_clave": ["sexo", "carne", "naturaleza", "sagrado", "procreación", "ley natural"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#4609: Párrafo i: el uso de la carne es ley de la naturaleza, y ella es amor"],
    "contexto_real": "Principio que valida la sexualidad como una función divina de amor y vida, eliminando el concepto de pecado e impureza impuesto por las religiones."
  },
  "Epocas_del_Hombre": {
    "palabras_clave": ["educación", "fuerza", "sensatez", "ciclos", "procreación", "madurez"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#4688: Párrafo ii: edad que los seres pueden hacer uso de la ley de la carne"],
    "contexto_real": "Etapas biológicas y espirituales del ser humano que determinan sus deberes y derechos en relación al trabajo, el estudio y la reproducción."
  },
  "Patologia_de_la_Confesion": {
    "palabras_clave": ["confesión", "vicio", "pecado", "clero", "manuales", "depravación", "veneno"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#4898: Párrafo iv: los vicios y sus efectos, el amor sólo puede regenerarlos"],
    "contexto_real": "Denuncia de la práctica religiosa de la confesión como un mecanismo que propaga el vicio y destruye la salud mental y moral de la sociedad."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado.');
