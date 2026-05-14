const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "2699: Punto segundo: la mujer, en la vida pública, cumple un deber de justicia": {
    "PilotoDeCoherencia": "La prostitución es, en muchos casos, un proceso de justicia para espíritus que fueron libertinos y abandonaron hijos en vidas pasadas. Al encarnar como mujeres en esa condición, experimentan la vulnerabilidad y la injusticia social, logrando su regeneración a través de la maternidad y el desengaño del vicio.",
    "IdeasSecundarias": [
      "Muchas mujeres en la vida libre conservan un corazón noble y educan bien a sus hijos en secreto.",
      "La ley de compensación obliga al espíritu a vivir los efectos de las causas que generó por egoísmo.",
      "La mujer inteligente busca retirarse de la vida pública en cuanto sus hijos necesitan su presencia moral."
    ],
    "CitasIneludibles": [
      "la mujer, en la vida pública, cumple un deber de justicia... La justicia está en que esta mujer fue un libertino y desconoció en su libertinaje a los hijos que engendró",
      "en cuanto comprenden que éstos necesitan su constante presencia, se retiran y se regeneran"
    ]
  },
  "3106: Punto Quinto: los conventos de monjas son prostíbulos": {
    "PilotoDeCoherencia": "Trincado denuncia el monacato femenino como un sistema de prostitución encubierta y crimen bajo el mando absoluto del clero. Los conventos son espacios donde la ley civil no entra, permitiendo que el error y la mentira religiosa esclavicen a las mujeres bajo el falso título de 'esposas de Cristo'.",
    "IdeasSecundarias": [
      "La opinión pública intuye la verdad, pero los tribunales protegen el secreto del claustro por influencia clerical.",
      "La mujer educada es la única con la autoridad moral para cerrar estos lugares en nombre de la justicia.",
      "El clero inspira leyes cobardes en los estados para mantener sus privilegios de dominio sobre la mujer."
    ],
    "CitasIneludibles": [
      "los conventos de monjas son prostíbulos... allí sólo puede entrar el sultán amo de aquel serrallo, y éste es «un ministro de Dios...»",
      "Dejad legislar a la mujer educada y veréis que pronto tapia a piedra y lodo las puertas y ventanas"
    ]
  },
  "3349: Punto sexto: el desprecio y la calumnia.": {
    "PilotoDeCoherencia": "El prejuicio religioso anula el amor y genera calumnia, desprecio e infamia. Ante la ley universal, todos los hombres son iguales, pero la responsabilidad es mayor para quienes se apropian de más dones de la naturaleza. El Espíritu de Verdad guarda el archivo de cada acto para el juicio post-mortem.",
    "IdeasSecundarias": [
      "Trincado juzga los vicios y errores del sistema, no a los individuos como tales.",
      "El desengaño tras la desencarnación será proporcional a la soberbia mantenida en la Tierra.",
      "La ignorancia de las leyes divinas es la raíz de la nulidad del amor en la humanidad actual."
    ],
    "CitasIneludibles": [
      "la causa de esta corrupción, que es el prejuicio religioso... por lo que, el amor, en la humanidad presente, es nulo.",
      "es más responsable el que más dones se apropia de la naturaleza, porque más tiene que responder."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia del CAU Tomo I (Bloque 6) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Ley_de_Compensacion_Sexual": {
    "palabras_clave": ["prostitución", "libertino", "mujer", "justicia", "compensación", "maternidad"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#2699: Punto segundo: la mujer, en la vida pública, cumple un deber de justicia"],
    "contexto_real": "Mecanismo de la ley de justicia donde espíritus que abusaron del sexo o abandonaron familia regresan en condiciones opuestas para equilibrar su conciencia."
  },
  "Denuncia_del_Monacato": {
    "palabras_clave": ["conventos", "monjas", "prostíbulos", "clero", "claustro", "serrallo"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#3106: Punto Quinto: los conventos de monjas son prostíbulos"],
    "contexto_real": "Crítica radical al sistema de encierro religioso femenino como un espacio de degradación y control patriarcal clerical."
  },
  "Responsabilidad_Proporcional": {
    "palabras_clave": ["talentos", "dones", "naturaleza", "responsabilidad", "juez", "pontífice"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#3349: Punto sexto: el desprecio y la calumnia."],
    "contexto_real": "Principio que establece que ante la ley universal, quien más poder, conocimiento o riqueza acaparó, más estricto será su juicio y mayor su deuda."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado.');
