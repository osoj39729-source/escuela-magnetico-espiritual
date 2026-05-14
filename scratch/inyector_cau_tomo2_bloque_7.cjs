const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "1403: ARTÍCULO 1º al 3º: Trabajo como Ley de Amor y Fecundidad Magnética": {
    "PilotoDeCoherencia": "El trabajo es obligatorio y debe ejecutarse en amor para ser verdaderamente productivo. Las fuerzas magnéticas del cuerpo humano (el aura) influyen directamente en la naturaleza, pudiendo fecundar o esterilizar el fruto según el estado vibratorio del trabajador. En la Comuna no existen jerarquías de valor humano; todos pasarán por todos los cargos y el mando tiene el mismo merecimiento que la ejecución.",
    "IdeasSecundarias": [
      "La naturaleza responde con abundancia al amor y conocimiento impreso por el trabajador.",
      "La igualdad absoluta implica que todos son la unidad y se complementan sin primeros ni segundos.",
      "La capacidad física individual es respetada; cada uno da según su fuerza sin comparaciones odiosas."
    ],
    "CitasIneludibles": [
      "las fuerzas magnéticas del cuerpo humano esterilizan o fecundan el trabajo, según es la aureola que circunda al operador",
      "en la comuna no hay primeros ni segundos; todos son la unidad y todos a todos se complementan",
      "el que ordena y el que ejecuta, tienen la misma parte y el mismo merecimiento."
    ]
  },
  "1507: Prefacio (Ley de Subsistencias): El Organismo Humano de Esencias": {
    "PilotoDeCoherencia": "El organismo humano es una estructura de esencias preparada para digerir esencias de la naturaleza. El trabajo es el acto de solicitar a la madre naturaleza estas esencias vitales, la cual responde multiplicando la semilla según el grado de amor y ciencia aplicados al cultivo.",
    "IdeasSecundarias": [
      "La armonía universal permite que cada especie tome del éter solo lo que necesita sin estorbar a otra.",
      "El conocimiento y la ciencia son multiplicadores del producto natural cuando se aplican con amor.",
      "La naturaleza actúa como una madre amorosa que premia la unidad y el afecto del trabajador."
    ],
    "CitasIneludibles": [
      "el organismo del hombre está preparado para digerir esencias, porque de esencias es su organismo.",
      "el pedido es el trabajo, respondiendo ella con cariño de madre y nos da cuanto le sabemos pedir"
    ]
  },
  "1569: ARTÍCULO 1º al 3º: El Mundo Comunizado y la Justicia de Subsistencias": {
    "PilotoDeCoherencia": "En la Comuna, todos los productos (naturales o del trabajo) son propiedad comunal. El reparto es gestionado por los Consejos, priorizando el amor y la necesidad mutua sobre el consumo egoísta. Se establece un sistema de almacenamiento preventivo con excedentes del 25% para asegurar el suministro universal ante contingencias.",
    "IdeasSecundarias": [
      "Nadie puede consumir más de lo que le corresponde si deriva en perjuicio de un hermano.",
      "El que ama prefiere dar al ser amado antes de comer él mismo, siendo este el lazo de unión comunal.",
      "El intercambio entre ciudades garantiza que ningún producto necesario falte en ninguna región."
    ],
    "CitasIneludibles": [
      "todos los productos del trabajo de la comuna... son medios de subsistencia para la comunidad",
      "la subsistencia de una familia y de cada individuo se deje al reparto del Consejo",
      "Las cantidades almacenadas serán con la cuarta parte más de lo calculado"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia del CAU Tomo II (Bloque 7) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Fecundidad_Magnetica_del_Trabajador": {
    "palabras_clave": ["aura", "fecundidad", "fuerzas magnéticas", "esterilidad", "vibración", "trabajo en amor"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#1403: ARTÍCULO 1º al 3º: Trabajo como Ley de Amor y Fecundidad Magnética"],
    "contexto_real": "Influencia directa del estado emocional y espiritual del ser humano sobre la productividad y calidad de los frutos de la naturaleza."
  },
  "Organismo_de_Esencias": {
    "palabras_clave": ["esencias", "digestión", "fisiología", "organismo", "éter", "alimento espiritual"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#1507: Prefacio (Ley de Subsistencias): El Organismo Humano de Esencias"],
    "contexto_real": "Definición del cuerpo humano como un receptor de energías sutiles que requiere alimentos cargados de vida y amor."
  },
  "Justicia_de_Subsistencias": {
    "palabras_clave": ["subsistencia", "reparto", "consejo", "almacenamiento", "25 por ciento", "comunizado"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#1569: ARTÍCULO 1º al 3º: El Mundo Comunizado y la Justicia de Subsistencias"],
    "contexto_real": "Sistema de distribución equitativa de bienes básicos gestionado por la comunidad para erradicar el hambre y el acaparamiento."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para el Tomo II.');
