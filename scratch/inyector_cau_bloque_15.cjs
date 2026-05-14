const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "8345: Párrafo vii: la tierra en su séptimo día de la humanidad": {
    "PilotoDeCoherencia": "La Tierra ha iniciado su Séptimo Día, un periodo de usufructo y reinado del espíritu que durará hasta que la humanidad extraiga toda la sabiduría de las fuerzas naturales del globo. A la Tierra le restan 75,000 años de existencia física antes de completar su misión y transmutar su valor material en luz espiritual.",
    "IdeasSecundarias": [
      "La meta del Séptimo Día es vivir conscientemente en la materia y en comunicación constante con el universo.",
      "Las enfermedades y la injusticia serán anuladas mediante el progreso de la sabiduría comunal.",
      "La sabiduría total de los moradores marcará el momento de emigrar hacia mundos de mayor progreso."
    ],
    "CitasIneludibles": [
      "Estamos en la primera hora de del día séptimo, del día de la comuna, del día del Amor, del reinado del espíritu",
      "la tierra nuestra morada... le faltan aún 75.000 años; 750 siglos"
    ]
  },
  "8576: Párrafo i: el día del Triunfo": {
    "PilotoDeCoherencia": "La astronomía materialista está limitada por el alcance del telescopio. Para conocer el universo infinito, la humanidad debe emplear la razón espiritual y el pensamiento, que actúan como las alas del espíritu permitiendo la comunicación real con otros mundos habitados.",
    "IdeasSecundarias": [
      "El espíritu solo sufre la metamorfosis del 'más' (progreso infinito), nunca la destrucción.",
      "Sujetar las leyes del espíritu a la materia es un error que impide el avance científico real.",
      "La comunicación intermundos es el único camino para superar las hipótesis astrónomicas actuales."
    ],
    "CitasIneludibles": [
      "El telescopio está sujeto a leyes materiales y jamás podría por sí revelar las cosas espirituales. Pero llega al límite de lo material, desde donde debe ser sustituido por la razón espiritual",
      "el espíritu la única metamorfosis que sufre es la del más, porque ésta es su ley."
    ]
  },
  "8718: Párrafo iii: ¿Qué será de la tierra después del séptimo día?": {
    "PilotoDeCoherencia": "Al final de su ciclo, la Tierra sufrirá una disgregación molecular para alimentar nuevos mundos. La materia y el espíritu son la misma sustancia en diferentes grados; nada se pierde, todo se transforma. Los cometas son restos de mundos disgregados cumpliendo esta ley de metamorfosis universal.",
    "IdeasSecundarias": [
      "La Tierra abandona su ruta orbital tras haber cumplido como madre amorosa de la humanidad.",
      "Las moléculas planetarias pasan por el pantógeno para cargarse de vida y formar parte de otros cuerpos celestes.",
      "Las estrellas fugaces son a menudo espíritus en tránsito que se dejan ver por los encarnados."
    ],
    "CitasIneludibles": [
      "la tierra ha cumplido como madre amorosa... abandona su ruta, guiada por otra ley. La eterna metamorfosis.",
      "fin de la tierra es su disgregación, para ir alimentando a otros mundos"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia del CAU Tomo I (Bloque 15) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Cronologia_del_Septimo_Dia": {
    "palabras_clave": ["75000 años", "750 siglos", "séptimo día", "final de la tierra", "luz espiritual"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#8345: Párrafo vii: la tierra en su séptimo día de la humanidad"],
    "contexto_real": "Periodo de 75,000 años de vida planetaria restante donde la humanidad debe alcanzar la maestría sobre la materia antes de su transmutación cósmica."
  },
  "Metamorfosis_Planetaria": {
    "palabras_clave": ["disgregación", "cometas", "metamorfosis", "madre amorosa", "pantógeno", "fin de la tierra"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#8718: Párrafo iii: ¿Qué será de la tierra después del séptimo día?"],
    "contexto_real": "Proceso natural donde un planeta, al cumplir su misión evolutiva, desintegra su materia para servir de sustento a nuevas creaciones en el universo."
  },
  "Astronomia_Racional_Espiritual": {
    "palabras_clave": ["telescopio", "razón espiritual", "pensamiento", "alas del espíritu", "comunicación intermundos"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#8576: Párrafo i: el día del Triunfo"],
    "contexto_real": "Ciencia del futuro que utiliza la potencia del espíritu para explorar el cosmos más allá de los límites físicos de la óptica material."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado.');
