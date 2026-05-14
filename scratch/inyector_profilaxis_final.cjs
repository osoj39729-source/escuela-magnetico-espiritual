const fs = require('fs');
const path = 'F:/trincado/public/data/contents/profilaxis-de-la-vida_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "10825 y 11134: La Higienización de la Tierra y el Cadáver del Dogma": {
    "PilotoDeCoherencia": "El Anciano 24 compara el estado actual de la tierra con el lecho de un leproso apestado que ha muerto. El 'cadáver' es el Dios religioso y sus dogmas asquerosos que han infectado al hombre. La justicia divina entra en acción para higienizar el planeta, purificando el ambiente de la 'inmunda lechonera' que dejaron las religiones mediante la salida del Sol de Justicia.",
    "IdeasSecundarias": [
      "El cuerpo del hombre es una figura imaginada por el Creador que el espíritu debe cuidar y sanar.",
      "Luchar contra la ley es 'machacar hierro frío'; la purificación de la tierra es inevitable y definitiva.",
      "Para ser religioso es necesario ser fanático e ignorante; la luz de la verdad disuelve esa condición."
    ],
    "CitasIneludibles": [
      "¿Qué otra cosa es la tierra... que el lecho donde ha expirado un enfermo apestado de todas las llagas?",
      "el Dios religioso, ya cadáver apestado que obliga a la divina justicia a la purificación",
      "la Justicia Divina ha entrado en acción, porque ya no dudamos de la incorregibilidad de los hombres"
    ]
  },
  "11596 al 11656: Economía del Tiempo y Economía Artística": {
    "PilotoDeCoherencia": "Denuncia la 'economixtificación' de las naciones (economía distorsionada por el lucro y el dogma) frente a la Economía Real que pone al espíritu en primer lugar. Establece la economía del tiempo como una distribución matemática del deber y el asueto, y la economía artística como el orden universal: 'un puesto para cada cosa y cada cosa en su puesto'.",
    "IdeasSecundarias": [
      "Ninguna función de la vida es perfecta si se desconoce el valor real del espíritu del hombre.",
      "El tiempo de trabajo es sagrado y obligatorio; el de asueto no debe ser sustituido por estudio ni descanso corporal forzado.",
      "La armonía del universo (mundos y nebulosas sin estorbarse) es el modelo para el ordenamiento de la ciudad y el hogar."
    ],
    "CitasIneludibles": [
      "en vez de economía, hubo economixtificación",
      "cada tiempo ha de ocupar su puesto a lo que la diligencia lo ha destinado",
      "Poner cada cosa en su puesto y preparar un puesto para cada cosa... constituye el todo de la economía artística"
    ]
  },
  "11682: Economía Animal y la Mujer como Arca Santa": {
    "PilotoDeCoherencia": "Define la economía animal como el conocimiento científico de las funciones del organismo para su preservación. Reivindica a la mujer como el 'Arca Santa de la Creación' encargada de perpetuar la especie, condenando su esclavitud o amargura como un acto atentatorio contra la fisiología humana y la ley natural.",
    "IdeasSecundarias": [
      "El hombre nace para el trabajo que embellece la naturaleza; la mujer es la compañera que endulza la vida.",
      "Invertir los factores de respeto hacia la mujer es irracional y contrario a la economía de la vida.",
      "Conocer el organismo propio es la antesala de la sabiduría del libro 'Conócete a ti mismo'."
    ],
    "CitasIneludibles": [
      "economía animal que consiste en conocer las funciones del organismo",
      "la mujer viene en primer término a ser... «El arca santa de la Creación»",
      "Esclavizar a la madre de nuestros hijos... es atentatorio a la fisiología de la mujer"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Profilaxis de la Vida (Bloque Final) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Higienizacion_de_la_Tierra": {
    "palabras_clave": ["higienización", "lecho de leproso", "purificación planetaria", "fin del dogma", "sol de justicia"],
    "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#10825 y 11134: La Higienización de la Tierra y el Cadáver del Dogma"],
    "contexto_real": "Proceso de limpieza vibracional y física del mundo para eliminar los restos de la influencia religiosa y las pasiones destructivas."
  },
  "Economixtificacion": {
    "palabras_clave": ["economixtificación", "economía falsa", "lucro", "desorden administrativo", "negación del espíritu"],
    "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11596 al 11656: Economía del Tiempo y Economía Artística"],
    "contexto_real": "Término utilizado por el Maestro para describir los sistemas económicos actuales que ignoran la ley espiritual y el bienestar humano real."
  },
  "Mujer_Arca_Santa": {
    "palabras_clave": ["arca santa", "maternidad sagrada", "respeto a la mujer", "perpetuación especie", "economía animal"],
    "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11682: Economía Animal y la Mujer como Arca Santa"],
    "contexto_real": "Reconocimiento del rol biológico y espiritual de la mujer como depositaria de la vida, exigiendo su plena dignidad y libertad."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque Final) para Profilaxis de la Vida.');
