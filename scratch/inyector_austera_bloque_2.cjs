const fs = require('fs');
const path = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "1747 y 2164: Los Maestros de Grecia y el Método de Estudio": {
    "PilotoDeCoherencia": "Reinterpreta a Sócrates como el hombre que demuestra la trinidad humana y el perfeccionamiento eterno. Transforma el 'Sólo sé que nada sé' en la máxima del sabio que 'sabe estudiar y sabe'. Define a Aristóteles como el 'Delicado Maestro' y primer pedagogo que dividió la sabiduría en ramas científicas para facilitar el estudio humano sin romper la unidad del árbol de la sabiduría.",
    "IdeasSecundarias": [
      "Sócrates escuchaba la voz de su 'guardián' (espíritu), practicando la metafísica antes de que fuera nombre de ciencia.",
      "Platón acertó al decir que el mundo sensible es un tránsito; toda idea del espíritu es realizable por ley universal.",
      "La división de las ciencias por Aristóteles fue una necesidad pedagógica para que el hombre no se abrumara ante la inmensidad del todo."
    ],
    "CitasIneludibles": [
      "El sabio nunca sabe: pero sabe estudiar y sabe",
      "nada que el pensamiento puede idear es irrealizable",
      "Delicado Maestro... primer Pedagogo Didáctico"
    ]
  },
  "2234 y 2599: La Migración de la Sabiduría y la Era de los Mixtificadores": {
    "PilotoDeCoherencia": "Explica que la prevaricación de Grecia (asesinato de Antulio y Sócrates) provocó que la Ley de Justicia le retirara la primacía, trasladando los depósitos de sabiduría a Roma. Identifica el inicio de la Era Vulgar como el periodo más peligroso, donde los historiadores fueron reemplazados por 'mixtificadores' que crearon el dogma del Cristo para ocultar la verdad.",
    "IdeasSecundarias": [
      "Roma impuso la ley civil para castigar la soberbia griega, pero también cayó ante el veneno religioso.",
      "La 'Paz dogmática' es una vergüenza que complementa la influencia desastrosa de los falsificadores de la historia.",
      "Juan el Solitario y Jesús enseñaron el amor, pero las 'víboras de raza' (supremacías) usaron a los incautos para destruir su obra."
    ],
    "CitasIneludibles": [
      "quitarle la primacía del poder, que lo da sólo la sabiduría",
      "surgido una pléyade de mixtificadores que harán obra perniciosa",
      "el pueblo libertado los domina (a las víboras), aunque no lo puede hacer como Juan y Jesús le enseñaron"
    ]
  },
  "4355: Gnosticismo y la Babilonia Sincrética": {
    "PilotoDeCoherencia": "Denuncia que la Iglesia Católica carece de filosofía propia y que, mediante la 'sincrasis' (fusión forzada) con el gnosticismo judaizante y paganizante, sepultó la verdad original. Define este proceso como la creación de la 'escandalosa Babilonia', donde el Nuevo Testamento es solo una manipulación para concordar con el Viejo.",
    "IdeasSecundarias": [
      "Los gnósticos Basilio y Valentino descubrieron que el catolicismo era una continuación deformada del judaísmo.",
      "La mixtificación católica ahogó en sangre y fuego a quienes buscaban la verdad metafísica original.",
      "La sincrasis resulta en una confusión ininteligible que impide al hombre encontrar la raíz de su ser."
    ],
    "CitasIneludibles": [
      "Carece la Iglesia Católica de filosofía y trata... de armonizarse con las filosofías cristianas antiguas",
      "sepultado la verdad en la sincrasis y mixtificación, que resulta, al final, la escandalosa Babilonia",
      "la religión católica, no es más que una continuación de la Judía"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Filosofía Austera Racional (Bloque 2) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Estudio_Racional": {
    "palabras_clave": ["saber estudiar", "método socrático", "perfeccionamiento", "pedagogía aristotélica", "ciencia universal"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#1747 y 2164: Los Maestros de Grecia y el Método de Estudio"],
    "contexto_real": "Actitud del espíritu frente al conocimiento: no poseer la verdad absoluta, sino dominar el arte de buscarla sin prejuicios."
  },
  "Mixtificacion": {
    "palabras_clave": ["mixtificación", "falsificación histórica", "era vulgar", "dogma", "sincrasis", "Babilonia"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#2234 y 2599: La Migración de la Sabiduría y la Era de los Mixtificadores"],
    "contexto_real": "Proceso sistemático de adulteración de la realidad histórica y espiritual realizado por las religiones para someter a las masas."
  },
  "Viboras_de_Raza": {
    "palabras_clave": ["víboras de raza", "supremacías", "Juan el Solitario", "clero", "tiranía civil", "fanatismo"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#2886: JUAN EL SOLITARIO (1)"],
    "contexto_real": "Metáfora de las castas de poder (religioso y político) que han perdido su fuerza real pero siguen causando daño a través de la ignorancia de los pueblos."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque 2) para Filosofía Austera Racional.');
