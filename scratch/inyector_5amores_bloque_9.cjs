const fs = require('fs');
const path = 'F:/trincado/public/data/contents/los-cinco-amores_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "9400: CAPÍTULO QUINTO: La Justicia como Corrección y Amor": {
    "PilotoDeCoherencia": "La justicia es el efecto tangible del Amor y su mayor expresión. Trincado redefine la justicia eliminando el concepto de castigo (odio) y sustituyéndolo por el de corrección (nobleza). Propone la abolición de las cárceles y la pena de muerte por ser desacatos a la vida, y cambia la iconografía de la justicia de la espada al ancla con balanza, simbolizando seguridad y salvación.",
    "IdeasSecundarias": [
      "La justicia divina, en su máximo rigor, es un acto de amor para la regeneración del espíritu.",
      "Los presidios son una afrenta histórica creada por la inmoralidad religiosa para dominar por el temor.",
      "La vida no es concebible sin libertad; por tanto, privar de libertad es privar de la esencia de la vida."
    ],
    "CitasIneludibles": [
      "La justicia no es castigo; es una corrección. La corrección, es noble; el castigo, es una ruindad.",
      "Justicia Divina en su mayor rigor, es Amor",
      "La justicia se representa en una balanza fina, que debe servirle de armadura una ancla"
    ]
  },
  "8803: CAPÍTULO TERCERO y 9150: CAPÍTULO CUARTO: Gobierno, Representación y Ley": {
    "PilotoDeCoherencia": "El poder político solo es legítimo cuando es otorgado plebiscitariamente por el pueblo. Trincado denuncia que los gobiernos actuales no son amados porque no representan la voluntad mayoritaria. Una ley descubierta o legislada es propiedad del pueblo; su ocultamiento o uso para el privilegio es un robo al progreso común.",
    "IdeasSecundarias": [
      "Las revoluciones y huelgas son la respuesta natural a gobiernos que imponen cargas hereditarias o por fuerza bruta.",
      "El gobernante o sabio consume del producto común y, por tanto, debe retribuir con servicios que beneficien a toda la colectividad.",
      "El descubrimiento de una ley científica o social obliga a su aplicación inmediata para el bienestar de la humanidad."
    ],
    "CitasIneludibles": [
      "Porque el pueblo en mayoría... no dio su poder y su confianza al gobierno... no es amado ningún poder",
      "El pueblo lo protesta y se rebela y nadie dirá que el rey reina, ni tampoco reina el pueblo",
      "Ley será una vez que los hombres la hayan comprendido y la apliquen al progreso"
    ]
  },
  "9648: CAPÍTULO SEXTO y 10286: CAPÍTULO SÉPTIMO: Educación Nacional y Pacto Social": {
    "PilotoDeCoherencia": "La educación nacional tiene el mandato de eliminar la ignorancia para evitar la esclavitud del pueblo. Define un pacto de armonía donde el productor manual sostiene al hombre de ciencia para que este desarrolle la técnica que elevará el progreso de todos. El amor nacional es un grado expansivo que conduce a la ruptura de fronteras mediante la Ética-Comunista.",
    "IdeasSecundarias": [
      "La ignorancia es la herramienta de los 'falaces' para subyugar al pueblo trabajador.",
      "La emulación entre regiones es el motor del progreso nacional, superando al dinero como incentivo.",
      "El egoísmo individual es una fase de la necesidad que debe evolucionar hacia la cooperación ciudadana y nacional."
    ],
    "CitasIneludibles": [
      "Los escarmientos de la ignorancia, trajeron como lógica consecuencia, matar la ignorancia.",
      "el productor trabaja en la producción para alimentar... al hombre de ciencia",
      "Amor Nacional es nada menos que el Cuarto Amor expansivo... propenden... a romper las fronteras"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Los Cinco Amores (Bloque 9) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Justicia_Correccion_no_Castigo": {
    "palabras_clave": ["justicia", "corrección", "amor", "ancla", "balanza", "abolición", "presidios"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#9400: CAPÍTULO QUINTO: La Justicia como Corrección y Amor"],
    "contexto_real": "Cambio de paradigma jurídico donde la ley busca la educación y regeneración del individuo en lugar de la venganza social."
  },
  "Convenio_Productor_y_Sabio": {
    "palabras_clave": ["productor", "sabio", "convenio tácito", "alimentación", "estudio", "armonía social"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#9648: CAPÍTULO SEXTO y 10286: CAPÍTULO SÉPTIMO: Educación Nacional y Pacto Social"],
    "contexto_real": "Base económica de la Comuna donde el trabajo manual y el intelectual se complementan para el progreso colectivo."
  },
  "Gobierno_Plebiscitario_Representativo": {
    "palabras_clave": ["gobierno", "plebiscito", "representación", "poder dado", "protesta", "legitimidad"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#8803: CAPÍTULO TERCERO y 9150: CAPÍTULO CUARTO: Gobierno, Representación y Ley"],
    "contexto_real": "Exigencia de que toda autoridad política emane del consentimiento directo y mayoritario de la población gobernada."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para Los Cinco Amores.');
