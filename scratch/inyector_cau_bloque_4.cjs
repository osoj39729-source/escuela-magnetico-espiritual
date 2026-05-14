const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "1219: Párrafo ii: Ley de Afinidad": {
    "PilotoDeCoherencia": "La Ley de Afinidad rige el progreso universal mediante el principio de causalidad: a iguales causas, iguales efectos. El avance científico terrestre ha sido lento porque las religiones impusieron un dique de censura, obligando a los pioneros a filtrar la verdad a hurtadillas.",
    "IdeasSecundarias": [
      "La ciencia ha avanzado más en los últimos 50 años gracias al debilitamiento del control religioso.",
      "Los descubrimientos son inspiraciones de mundos superiores atraídas por afinidad de pensamiento.",
      "No existe el estancamiento real, sino barreras artificiales creadas por la concupiscencia."
    ],
    "CitasIneludibles": [
      "«Siempre que se reúnen las causas, que originan los efectos, se producen los mismos efectos».",
      "las religiones... habían hecho un dique con los cuerpos y sangre de los progresistas... los hombres de progreso... tenían que militar en esas filas y, como a hurtadillas, lanzaban un nuevo principio"
    ]
  },
  "1483: Párrafo iii: ley de Justicia": {
    "PilotoDeCoherencia": "La Justicia Universal es sabiduría en acción y debe ser 'toda ojos', no ciega. La casualidad no existe; es solo el nombre que la ignorancia da a las causas que no comprende. Cada hecho, sea material o espiritual, es un cumplimiento irrevocable de la ley de amor.",
    "IdeasSecundarias": [
      "La justicia recibe los hechos de la afinidad y los sitúa en su lugar exacto.",
      "La fatalidad es simplemente justicia de necesidad.",
      "El magistrado que invoca la casualidad declara su propia ignorancia de las leyes de la vida."
    ],
    "CitasIneludibles": [
      "el amor, de hecho, es sabiduría: y por lo tanto, de derecho, es justicia: y la justicia... tiene que ser toda ojos.",
      "No existe la casualidad... lo que hay es ignorancia e imprevisión... el juez que pronuncie casualidad, declara su ignorancia"
    ]
  },
  "1623: Párrafo iv: la ley de igualdad y compensación": {
    "PilotoDeCoherencia": "La Ley de Igualdad es inflexible; el espíritu puede resistirse o retrasarse, pero inevitablemente será llevado a la armonía mediante la compensación. El tiempo es eterno y siempre presente, por lo que el retraso solo perjudica al propio espíritu, obligándolo a trabajar más para saldar su deuda.",
    "IdeasSecundarias": [
      "Nadie puede sustraerse de los deberes de la comuna universal.",
      "Existen mundos acordes a todos los niveles de afección (odio o luz) para que el espíritu aprenda por experiencia.",
      "El desengaño es el punto final de toda obstinación contra la ley."
    ],
    "CitasIneludibles": [
      "Inflexibles y llevan a los seres al cumplimiento de sus deberes en voluntad y amor. Podrá el hombre resistirse... pero todo en vano.",
      "al final, él solo se hace el daño, creándose nueva deuda que le obliga a trabajar más"
    ]
  },
  "1752: Párrafo i: la trinidad del hombre. su creación": {
    "PilotoDeCoherencia": "El hombre es el ser supremo de la creación material, compuesto por una trinidad (espíritu, alma y cuerpo). El prejuicio religioso ha esclavizado la procreación y la visión de la mujer, impidiendo que la ciencia comprenda el alto destino espiritual de la humanidad.",
    "IdeasSecundarias": [
      "La doctrina de libertad de Jesús fue sepultada por dos siglos de malinterpretación.",
      "La anatomía del espíritu es desentrañada por el Espíritu de Verdad para nuestra inteligencia.",
      "El reinado del espíritu y la paz imperturbable son la meta de la Ley de Amor."
    ],
    "CitasIneludibles": [
      "hacen de media humanidad un esclavo, un juguete, a pesar de que sin esa media humanidad no podría haber nacido la otra mitad",
      "el Espíritu de Verdad da otra (aunque éste las desentraña hasta anatomizarlas para su inteligencia)"
    ]
  },
  "1867: Párrafo ii: Cómo apareció el hombre en la tierra": {
    "PilotoDeCoherencia": "El hombre aparece al final de la 'quinta epopeya' una vez que el mundo está estabilizado. El conocimiento de su origen debe ser conquistado por el esfuerzo humano; el Padre no da nada por gracia. El tiempo es una hora eterna y presente en todos los mundos del universo.",
    "IdeasSecundarias": [
      "Sin prejuicios, la física y la química ya habrían descubierto el origen biológico-espiritual del hombre.",
      "El hombre aparece de la misma manera en todos los mundos de la cosmogonía.",
      "La vida es eterna y el tiempo relativo a cada órbita planetaria, pero absoluto en espíritu."
    ],
    "CitasIneludibles": [
      "El hombre es lo último que aparece en el mundo... al final de la quinta epopeya... el Padre, no da nada de gracia a nadie; lo pone todo a nuestra disposición... quiere que lo conquistemos.",
      "sin el prejuicio, la física y la química hubieran encontrado el cómo el hombre apareció sobre la tierra"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia del CAU Tomo I (Bloque 4) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Inexistencia_del_Azar": {
    "palabras_clave": ["casualidad", "azar", "accidente", "causas", "efectos", "ley de afinidad"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#1483: Párrafo iii: ley de Justicia", "codigo-de-amor-universal-tomo-1_esencia.json#1219: Párrafo ii: Ley de Afinidad"],
    "contexto_real": "Principio racional que demuestra que todo evento es el resultado necesario de causas previas atraídas por afinidad, eliminando la idea de suerte o milagro."
  },
  "Justicia_Omnividente": {
    "palabras_clave": ["justicia", "sabiduría", "ojos", "equidad", "magistrado", "juez"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#1483: Párrafo iii: ley de Justicia"],
    "contexto_real": "La justicia universal no es ciega; es el conocimiento total de las causas y efectos que sitúa cada acto en su justa compensación."
  },
  "Conquista_del_Saber": {
    "palabras_clave": ["gracia", "esfuerzo", "conquista", "trabajo espiritual", "mérito"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#1867: Párrafo ii: Cómo apareció el hombre en la tierra"],
    "contexto_real": "Ley de mérito que establece que el Creador no regala sabiduría ni progreso; el espíritu debe ganarlo mediante su propio trabajo y estudio."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado.');
