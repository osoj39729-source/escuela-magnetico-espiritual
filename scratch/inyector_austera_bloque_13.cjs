const fs = require('fs');
const path = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "18428 al 18515: Clasificación y División de la Realidad": {
    "PilotoDeCoherencia": "Describe la clasificación y la división como operaciones intelectuales que permiten al espíritu organizar la multiplicidad de la materia. Establece que la clasificación mental es filosófica y complicada, pues busca las conexiones entre el género absoluto y la especie ínfima basándose en la esencia y la diferencia real, no solo en apariencias físicas.",
    "IdeasSecundarias": [
      "La división debe preceder a la clasificación para separar los elementos de una unidad antes de categorizarlos.",
      "Los predicables (género, especie, diferencia) son los modos con que el nombre universal se aplica a la materia.",
      "La esencia de las cosas tiene frecuentemente su origen en el accidente, que la inteligencia debe saber leer."
    ],
    "CitasIneludibles": [
      "No se puede clasificar sin antes distribuir, separar los diferentes elementos",
      "la especie humana del género animal",
      "extremos de una clasificación son, el género absoluto... y la especie ínfima"
    ]
  },
  "18618: Filosofía vs. Química y el Demonio Activo": {
    "PilotoDeCoherencia": "Eleva la filosofía sobre todas las ciencias, definiendo a la química como una 'humilde servidora' que solo ocupa un grado del conocimiento. Exige que el definidor de la verdad posea una 'Moral completa', actuando como un 'Demonio Activo' (trabajador e investigador) y rechazando la figura del 'Ángel parásito y místico' que solo contempla sin obrar.",
    "IdeasSecundarias": [
      "La química es maravillosa en los hechos, pero la filosofía es la que le da color y sentido universal.",
      "Las definiciones teológicas o dogmáticas son absurdas por carecer de base racional y moral activa.",
      "El estudiante de la escuela debe ser un demonio de actividad para no caer en el misticismo paralizante."
    ],
    "CitasIneludibles": [
      "la química es, una humilde servidora de la filosofía",
      "ser demonio activo y jamás Ángel parásito y místico",
      "si ha dividido bien el filósofo, podrá hacer buenas y axiomáticas definiciones el químico"
    ]
  },
  "18879 al 19097: El Raciocinio Físico-Metafísico": {
    "PilotoDeCoherencia": "Define el razonamiento no como una simple equivalencia verbal, sino como una inferencia donde un hecho es probado por su conexión necesaria con otros. Distingue los juicios científicos (solo físicos) de los juicios filosóficos (físico-metafísicos), utilizando la deducción y el silogismo para establecer leyes universales de comportamiento y deber.",
    "IdeasSecundarias": [
      "La inferencia es el asentimiento que otorgamos a una verdad en virtud de otra verdad anterior probada.",
      "El silogismo permite conectar dos términos mediante un 'término medio' que revela la relación oculta entre las cosas.",
      "La deducción categórica establece leyes ineludibles: si el trabajo es ley, todos los hombres tienen la obligación de trabajar."
    ],
    "CitasIneludibles": [
      "inferir una proposición de otra... equivale a razonar y al mismo tiempo aprobar",
      "Los raciocinios deductivos... son físico-metafísicos",
      "los dos términos de las premisas... sólo pueden conexionarse mediante un término común (término medio)"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Filosofía Austera Racional (Bloque 13) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Demonio_Activo": {
    "palabras_clave": ["demonio activo", "trabajador", "investigador", "rechazo misticismo", "acción moral", "definidor"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#18618: Filosofía vs. Química y el Demonio Activo"],
    "contexto_real": "Perfil del estudiante del Espiritismo Luz y Verdad: alguien que busca la sabiduría a través del trabajo y la investigación incesante."
  },
  "Angel_Parasito": {
    "palabras_clave": ["ángel parásito", "místico", "contemplativo", "inactivo", "error religioso", "angelicalismo"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#18618: Filosofía vs. Química y el Demonio Activo"],
    "contexto_real": "Crítica a la figura religiosa de la santidad pasiva que no aporta progreso material ni espiritual a la humanidad."
  },
  "Juicio_Fisico-Metafisico": {
    "palabras_clave": ["físico-metafísico", "lógica superior", "más allá de la ciencia", "inferencia espiritual", "razonamiento completo"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#18879 al 19097: El Raciocinio Físico-Metafísico"],
    "contexto_real": "Modo de razonamiento de la Escuela que integra los datos de la materia con las leyes del espíritu para llegar a la verdad total."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque 13) para Filosofía Austera Racional.');
