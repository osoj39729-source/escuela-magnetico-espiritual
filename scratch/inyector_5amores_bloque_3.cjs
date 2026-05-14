const fs = require('fs');
const path = 'F:/trincado/public/data/contents/los-cinco-amores_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "2785: CAPÍTULO TERCERO: Educación y Sometimiento del Animal": {
    "PilotoDeCoherencia": "La educación es la imposición de la razón sobre los instintos naturales del hombre. Trincado explica que mientras el 'animal' (cuerpo y alma instintiva) protesta ante la disciplina, el espíritu es quien se somete y somete al animal para cumplir con el deber social y el progreso intelectual.",
    "IdeasSecundarias": [
      "La obediencia al maestro nace de la necesidad evolutiva del espíritu de trascender su etapa puramente instintiva.",
      "La educación es el puente necesario para que el ser humano pase del dominio animal al dominio de la inteligencia.",
      "La disciplina racional no es un castigo, sino un medio para armonizar el ser con el bien social."
    ],
    "CitasIneludibles": [
      "el que protesta es el animal y el que se somete y somete al animal es el espíritu, que nos hace hacer razón.",
      "EL AMOR A LA EDUCACIÓN, LO IMPONE LA CIUDADANÍA POR EL BIEN SOCIAL"
    ]
  },
  "3229: CAPÍTULO CUARTO y 3479: CAPÍTULO QUINTO: Moral, Comuna y Revolución": {
    "PilotoDeCoherencia": "La moral individual es el cimiento indestructible de la moral social. Trincado proclama la Comuna universal como el único sistema justo, basado en la fraternidad absoluta y la eliminación de fronteras, propiedad y dinero. Justifica la revolución como un acto de amor de los espíritus evolucionados cuando el progreso es obstaculizado por los retrasados.",
    "IdeasSecundarias": [
      "El fracaso de los sistemas políticos y anárquicos llevará a la humanidad a recurrir al Código de Amor Universal.",
      "La moral del espiritismo Luz y Verdad es el instrumento para la ilustración de las masas y la implantación de la justicia.",
      "Nadie detiene las leyes universales, pero el retraso de unos obliga a la acción enérgica de otros para renovar lo arcaico."
    ],
    "CitasIneludibles": [
      "La moral individual es el fundamento de la moral social.",
      "la comuna sin fronteras, sin parcelas, sin propiedad y sin dinero",
      "la evolución impone por 'amor en los evolucionados' la revolución, para empujar o quitar los retrasados"
    ]
  },
  "3728: CAPÍTULO SEXTO y 3778: PÁRRAFO I: Economía del Espíritu y del Tiempo": {
    "PilotoDeCoherencia": "La verdadera economía reconoce al espíritu humano como el valor supremo. Trincado establece la 'Economía del Tiempo' como una ley matemática donde el día debe dividirse estrictamente entre trabajo, asueto y descanso. Alterar esta distribución es un delito contra la producción social y el equilibrio del ser.",
    "IdeasSecundarias": [
      "La 'economixtificación' es el error de las naciones al no valorar al espíritu por encima de la materia.",
      "El tiempo de descanso es sagrado y su violación provoca el embotamiento del espíritu y el malestar del cuerpo.",
      "La educación es la fase profiláctica de la economía en la Comuna, asegurando que cada tiempo se use con precisión racional."
    ],
    "CitasIneludibles": [
      "Ninguno podrá preciarse de económico si no economiza el tiempo",
      "el tiempo destinado al trabajo ha de emplearse en el trabajo obligatorio; y el destinado al asueto, no se ha de substituir",
      "delito de robo a la producción, del que sois responsables ante la comunidad"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Los Cinco Amores (Bloque 3) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Espiritu_vs_Animal_Educacion": {
    "palabras_clave": ["educación", "animal", "instintos", "espíritu", "razón", "disciplina"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#2785: CAPÍTULO TERCERO: Educación y Sometimiento del Animal"],
    "contexto_real": "Conflicto interno entre la naturaleza biológica reactiva y la voluntad consciente del espíritu en el proceso de aprendizaje."
  },
  "Economia_del_Tiempo_Racional": {
    "palabras_clave": ["tiempo", "economía", "trabajo", "asueto", "descanso", "matemática"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#3728: CAPÍTULO SEXTO y 3778: PÁRRAFO I: Economía del Espíritu y del Tiempo"],
    "contexto_real": "Distribución equilibrada del tiempo diario para garantizar la productividad social y la salud integral del individuo."
  },
  "Revolucion_como_Amor_Evolucionado": {
    "palabras_clave": ["revolución", "amor", "evolución", "retrasados", "progreso", "estorbo"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#3229: CAPÍTULO CUARTO y 3479: CAPÍTULO QUINTO: Moral, Comuna y Revolución"],
    "contexto_real": "Acción colectiva necesaria para superar el estancamiento social provocado por sectores que se oponen a las leyes de evolución."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para Los Cinco Amores.');
