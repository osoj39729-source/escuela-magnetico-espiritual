const fs = require('fs');
const path = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "12915: La Matemática Pura y la Misión del Espíritu": {
    "PilotoDeCoherencia": "Sostiene que solo existe una matemática que el espíritu comprende en libertad (Macrocosmos). Al encarnar, el espíritu se somete a la 'opacidad y pesantez' de la materia por la necesidad de cumplir su mandato: extraer las esencias de los mundos y embellecerlos, adaptándose al grado rústico de la materia para perfeccionarla.",
    "IdeasSecundarias": [
      "El espíritu deriva el tiempo, el espacio y la materia como equivalentes para sus mediciones en el mundo físico.",
      "La encarnación es un acto de voluntad para extraer la sabiduría contenida en la forma rústica.",
      "La matemática analítica es la herramienta para seccionar y entender lo microscópico antes de abarcar el todo."
    ],
    "CitasIneludibles": [
      "el espíritu entiende y penetra el Macrocosmo, cuando está en su estado libre",
      "necesidad de cumplir su mandato de extraer a la materia sus esencias y embellecer a la vez los mundos",
      "se ve coartado por la opacidad y la pesantez... por la necesidad de cumplir su mandato"
    ]
  },
  "12998 y 13137: El Dolor como Lastre y Medicina de la Ley": {
    "PilotoDeCoherencia": "Define el placer y el dolor como compañeros inseparables y necesarios para la vida consciente. Compara el dolor con el 'lastre' de un buque, indispensable para navegar derecho y mantener el equilibrio moral. El dolor es la 'medicina infalible de la ley' que corrige a la materia y al espíritu, y su temor nace solo de la ignorancia y la falta de higiene físico-psíquica.",
    "IdeasSecundarias": [
      "El placer se mide por el dolor que deja su ausencia; el dolor por el placer que le sucede.",
      "La falta de educación magnética causa que el dolor se convierta en anormalidad y pesadumbre moral.",
      "El centro bulbar es el punto vital donde se procesa el mecanismo físico de esta sensibilidad correctiva."
    ],
    "CitasIneludibles": [
      "necesita cada cual cierta cantidad de... dolores... como necesita lastre el buque para mantenerse a plomo",
      "El dolor es necesariamente a la vida... y es la medicina infalible de la ley",
      "por las pasiones... no aceptamos el dolor y éste se impone"
    ]
  },
  "13256 al 13365: El Cerebro como Micrófono y la Memoria-Reflector": {
    "PilotoDeCoherencia": "Desmitifica al cerebro como generador de pensamiento; afirma que este solo actúa como una 'placa sensible' o 'micrófono reproductor' de las vibraciones del intelecto espiritual. Define la memoria como una 'campana sonora' o 'reflector' que traduce vibraciones en voces y figuras, señalando que la falta de imágenes mentales claras (como en el gusto) causa la irregularidad del recuerdo.",
    "IdeasSecundarias": [
      "Las emociones son los efectos conscientes de causas intelectuales que residen únicamente en el espíritu.",
      "El intelecto no es del cerebro, sino del espíritu; el cerebro solo proyecta sus vibraciones.",
      "La irregularidad de la memoria emotiva demuestra que esta no es un depósito estático, sino una respuesta vibracional."
    ],
    "CitasIneludibles": [
      "el cerebro... sólo obra como placa sensible, cono micrófono reproductor",
      "la memoria... es nada más que un reflector, una campana sonora",
      "intelecto... no es del cerebro, sino del espíritu"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Filosofía Austera Racional (Bloque 9) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Lastre_del_Dolor": {
    "palabras_clave": ["lastre", "dolor necesario", "medicina de la ley", "equilibrio moral", "estabilidad del ser"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#12998 y 13137: El Dolor como Lastre y Medicina de la Ley"],
    "contexto_real": "Función estabilizadora del sufrimiento que obliga al espíritu a mantener el rumbo hacia la ley y la verdad."
  },
  "Cerebro_Microfono": {
    "palabras_clave": ["cerebro micrófono", "placa sensible", "reproductor de ideas", "intelecto espiritual", "no generador"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#13256 al 13365: El Cerebro como Micrófono y la Memoria-Reflector"],
    "contexto_real": "Definición fisiológica que reduce al cerebro a un hardware de comunicación para el software espiritual."
  },
  "Memoria_Campana_Sonora": {
    "palabras_clave": ["campana sonora", "reflector de memoria", "vibración sonora", "traducción de figuras", "vacío vibrante"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#13256 al 13365: El Cerebro como Micrófono y la Memoria-Reflector"],
    "contexto_real": "Mecanismo por el cual la memoria proyecta los recuerdos mediante la resonancia de las experiencias pasadas."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque 9) para Filosofía Austera Racional.');
