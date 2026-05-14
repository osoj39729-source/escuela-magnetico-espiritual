const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "3438: procede de la maldad de las religiones.": {
    "PilotoDeCoherencia": "Las madres poseen la fuerza moral para regenerar el mundo mediante la educación y el trabajo. Al apartarse de los parásitos religiosos y redirigir los recursos hacia el bienestar común, obligarán a los holgazanes a trabajar la tierra, logrando así su verdadera regeneración espiritual.",
    "IdeasSecundarias": [
      "El trabajo es el único medio real de regeneración para el espíritu.",
      "La sabiduría y la virtud son las únicas bases de la verdadera grandeza humana.",
      "Ignorar estas verdades conduce al espíritu a la curación forzosa en mundos primitivos."
    ],
    "CitasIneludibles": [
      "Vosotras, las madres, podéis mover el mundo... todo lo que dejáis a los parásitos... sería muy de sobra para crear el bienestar de todas las familias",
      "el trabajo todo lo regenera."
    ]
  },
  "3463: Punto séptimo: la comuna de los hijos de la libertad se impone urgente": {
    "PilotoDeCoherencia": "La comuna universal exige el reconocimiento pleno de los hijos nacidos fuera del matrimonio tradicional (Hijos de la Libertad). Ellos son el primer eslabón de la nueva sociedad de justicia que se establecerá en las próximas tres generaciones, superando los prejuicios de herencia y casta.",
    "IdeasSecundarias": [
      "La sabiduría divina utiliza incluso el desequilibrio actual para forzar la implantación de la comuna.",
      "El matrimonio de imposición genera efectos naturales que solo la comuna puede redimir.",
      "La redención social comienza por la igualdad absoluta de todos los hijos ante la ley."
    ],
    "CitasIneludibles": [
      "La comuna de los hijos de la libertad o de las madres sin esposo y las de los divorciados.",
      "hijos de la libertad que el orgullo, el prejuicio y la malicia deshereda... primer eslabón de esta comunidad"
    ]
  },
  "3477: las tres generaciones sentenciadas.": {
    "PilotoDeCoherencia": "La Tierra ha entrado en su Séptimo Día o epopeya de luz, integrándose a la cadena de mundos de felicidad universal. El progreso es infinito y la felicidad se conquista mediante la sabiduría de la Ley de Amor. Quien no acepte la igualdad comunal se auto-excluye de la familia terrestre.",
    "IdeasSecundarias": [
      "Todos los mundos pasan por seis etapas de trabajo antes de entrar en la paz del séptimo día.",
      "Las leyes de afinidad, justicia e igualdad imponen la vida comunal como fin último.",
      "Los reacios a la luz son destinados a mundos de dolor para despertar su amor por la ley."
    ],
    "CitasIneludibles": [
      "La tierra ha entrado en ese Séptimo día... el Padre exige, en su amor, el reconocimiento comunal de todos los seres racionales",
      "todos, por justicia, tienen el mismo fin; el progreso indefinido e infinito y la felicidad"
    ]
  },
  "3605: Punto octavo: el celibato es la negación de la ley divina y causa": {
    "PilotoDeCoherencia": "El celibato es una afrenta contra la ley de procreación y la causa de crímenes y desequilibrios sociales profundos. La naturaleza imprime un goce sublime en la procreación para motivar al espíritu a cumplir su mandato de reproducción y progreso a pesar de la densidad de la materia.",
    "IdeasSecundarias": [
      "La sabiduría eterna diseñó el goce material para estimular los sentimientos más profundos del alma.",
      "El espíritu sufre un letargo instintivo en sus primeras fases por la presión del cuerpo.",
      "Negar la procreación es oponerse al mandato de progreso evolutivo y metafísico del Padre."
    ],
    "CitasIneludibles": [
      "el celibato es la negación de la ley divina y causa del desequilibrio social... fuente originaria de los mayores escándalos",
      "la sabiduría eterna... al imponer la procreación, imprime a ésta función el goce más sublime que la materia posee"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia del CAU Tomo I (Bloque 7) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Hijos_de_la_Libertad": {
    "palabras_clave": ["hijos", "libertad", "maternidad", "comuna", "reconocimiento", "igualdad"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#3463: Punto séptimo: la comuna de los hijos de la libertad se impone urgente"],
    "contexto_real": "Hijos nacidos fuera del control legal o religioso del matrimonio, reconocidos por Trincado como los cimientos puros de la futura Comuna Universal."
  },
  "Septimo_Dia_Terrestre": {
    "palabras_clave": ["séptimo día", "epopeya", "luz", "paz imperturbable", "mundos de dicha"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#3477: las tres generaciones sentenciadas."],
    "contexto_real": "Era de la Verdad iniciada en 1934, donde la Tierra deja de ser un mundo de expiación para convertirse en un mundo de progreso y felicidad espiritual."
  },
  "Goce_Sublime_Natural": {
    "palabras_clave": ["goce", "procreación", "sexo", "sabiduría eterna", "atracción", "fibras"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#3605: Punto octavo: el celibato es la negación de la ley divina y causa"],
    "contexto_real": "Principio que valida el placer sexual como un mecanismo divino para el cumplimiento de la ley de procreación y la expansión del sentimiento espiritual."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado.');
