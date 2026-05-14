const fs = require('fs');
const path = 'F:/trincado/public/data/contents/primer-rayo-de-luz_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "11069: La Historia como Dictador Supremo": {
    "PilotoDeCoherencia": "Recupera el argumento del obispo Strossmayer: el único dictador ante el cual incluso el Papa debe callar es la Historia. Sostiene que la historia es un 'diamante que esculpe palabras indelebles' y que, al no haber vestigio del papado en los tiempos apostólicos, la institución carece de legitimidad divina y es una construcción humana posterior.",
    "IdeasSecundarias": [
      "La historia no es una leyenda que se pueda reformar al gusto; es una realidad objetiva.",
      "La falta de pruebas históricas sobre el origen divino del papado es responsabilidad de la institución, no del historiador.",
      "Probar todas las cosas y sostener lo bueno es el mandato apostólico que la jerarquía ignora."
    ],
    "CitasIneludibles": [
      "tenemos un dictador ante el cual todos debemos postrarnos... Ese dictador es la Historia",
      "la Historia... como un diamante que esculpe en el cristal palabras indelebles",
      "si no encuentro vestigio alguno del Papado en los tiempos apostólicos; la falta es suya"
    ]
  },
  "11552 al 11667: El Syllabus de Pío IX - La Guerra contra el Progreso": {
    "PilotoDeCoherencia": "Analiza el Syllabus como un documento de odio e impotencia religiosa que excomulga todos los pilares de la civilización moderna. Trincado lo expone para demostrar que la Iglesia se opone formalmente a la libertad de conciencia, la ciencia, el panteísmo y la justicia social (comunismo/socialismo), considerándolos 'pestes'.",
    "IdeasSecundarias": [
      "Excomunión del Racionalismo: La Iglesia niega que la razón humana pueda alcanzar la verdad o que esté sujeta al progreso.",
      "Condena de la Tolerancia: Se excomulga a quien diga que el hombre es libre de elegir su religión según su razón.",
      "Supremacía Eclesiástica: El Syllabus reclama que la Iglesia está por encima del poder civil y de los derechos de los estados.",
      "Ataque al Socialismo: Define las luchas sociales por la igualdad como 'especies de pestes' condenables."
    ],
    "CitasIneludibles": [
      "Syllabus... fruto del odio y producto de la rabia, en la impotencia de evitar el desastre religioso",
      "Sea excomulgado el que diga: Que el hombre es libre para abrazar y profesar la religión que quiera",
      "Estas especies de pestes (Socialismo, Comunismo) están rebatidas y condenadas"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Primer Rayo de Luz (Bloque 6) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Dictador_Historia": {
    "palabras_clave": ["historia", "Strossmayer", "veracidad", "vestigio papado", "diamante", "legitimidad"],
    "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#11069: La Historia como Dictador Supremo"],
    "contexto_real": "Principio historiográfico que despoja a las instituciones religiosas de sus pretensiones de origen divino mediante la evidencia cronológica."
  },
  "Syllabus_Errorum_Analisis": {
    "palabras_clave": ["Syllabus", "Pío IX", "excomunión", "odio a la razón", "condena del progreso", "antiliberalismo"],
    "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#11552 al 11667: El Syllabus de Pío IX - La Guerra contra el Progreso"],
    "contexto_real": "Documento papal que cristaliza la oposición frontal del catolicismo a los derechos humanos y la libertad científica."
  },
  "Condena_del_Socialismo_Religioso": {
    "palabras_clave": ["pestes", "socialismo", "comunismo", "justicia social", "excomunión social"],
    "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#11618: PARRAFO IV: Sociedades clérigo-liberales.— Socialismo, comunismo"],
    "contexto_real": "Posición histórica del Vaticano contra los movimientos de liberación y colectivización económica."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque 6) para Primer Rayo de Luz.');
