const fs = require('fs');
const path = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "2229: Párrafo IV (CAPITULO SÉPTIMO)": {
    "PilotoDeCoherencia": "División Estructural.",
    "IdeasSecundarias": [],
    "CitasIneludibles": []
  },
  "2230: PERSECUCIÓN DE LOS SACERDOTESAJESÚS": {
    "PilotoDeCoherencia": "La persecución a Juan y Jesús fue el ataque de las instituciones corruptas (ramas abordencadas) contra la Verdad y el Amor. Juan fustigó a los privilegiados (sacerdotes, jueces y reyes) con la verdad desnuda, lo que le costó la vida ante el odio de los poderosos.",
    "IdeasSecundarias": [
      "Juan luchó con la nobleza contra la astucia y con la fe-luz contra la fe-ciega.",
      "Las instituciones sin amor solo producen hojarasca destructora.",
      "El vicio y la inmoralidad de los de arriba son los que más temen la denuncia de la verdad."
    ],
    "CitasIneludibles": [
      "Juan, lucha con la verdad frente a la mentira; con la nobleza contra la astucia; y con la fe-luz contra la fe-ciega.",
      "ataca a los grandes que componían el tronco... poniéndoles el dedo en la llaga, y, ¡cómo les dolió!"
    ]
  },
  "2357: Párrafo V (CAPITULO SÉPTIMO)": {
    "PilotoDeCoherencia": "División Estructural.",
    "IdeasSecundarias": [],
    "CitasIneludibles": []
  },
  "2358: FUNDACIÓN DE LA IGLESIA CRISTIANA": {
    "PilotoDeCoherencia": "La Iglesia Cristiana nació de la debilidad y el miedo de los apóstoles tras la crucifixión. Pedro, intentando 'no malquistarse' con los sacerdotes, mezcló la doctrina de Jesús con la astucia clerical, violando la máxima de no servir a dos señores y permitiendo la desviación del mensaje original.",
    "IdeasSecundarias": [
      "Los apóstoles trabajaron en la sombra por temor a morir como su maestro.",
      "El intento de Pedro de conciliar con los asesinos de Jesús mató la pureza de la doctrina.",
      "La astucia sacerdotal sustituyó a la luz del espíritu en los cimientos de la iglesia."
    ],
    "CitasIneludibles": [
      "Pedro, parece que no quería malquistarse con los que condenaron a Jesús... esto significaba muerte prematura y en la sombra, de la doctrina de Jesús",
      "faltaba a una de las más importantes máximas del maestro 'No se puede servir a dos señores a la vez'."
    ]
  },
  "2472: CAPITULO NOVENO: LA RELIGION CRISTIANAYLA IGLESIA CATOLICA": {
    "PilotoDeCoherencia": "División Estructural.",
    "IdeasSecundarias": [],
    "CitasIneludibles": []
  },
  "2474: Párrafo I: JESUS NI SUS APOSTOLES NO LEVANTARON TEMPLOS": {
    "PilotoDeCoherencia": "Jesús nunca fundó una religión con templos ni dogmas milagrosos. Su sabiduría innata desde niño es prueba de sus existencias pasadas, no de una divinidad sobrenatural. El catolicismo es un 'carro' de fanatismo al que los hombres son atados por herencia, pero del cual deben liberarse mediante la razón.",
    "IdeasSecundarias": [
      "La Iglesia Católica se apropió de los principios de amor de Jesús para someter al pueblo con mitos.",
      "Ni Jesús ni sus apóstoles construyeron edificios de piedra para la oración; su templo era la conciencia.",
      "El fanatismo es una herencia que se perdona por ignorancia, pero que debe ser superada por el uso de la razón."
    ],
    "CitasIneludibles": [
      "Jesús debía ser sabio al nacer, porque a la edad que nos lo muestran discutiendo con los doctores, no podía haber aprendido para tales aclaraciones",
      "me ataron al carro al que ellos habían sido atados; pero cuando he tenido mi razón por sacerdotes de mi propia conciencia, he visto que Jesús no levantó templos."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de caps. 37-42 actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Desviacion_Apostolica": {
    "palabras_clave": ["pedro", "apóstoles", "miedo", "astucia", "iglesia", "concupiscencia"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#2358: FUNDACIÓN DE LA IGLESIA CRISTIANA"],
    "contexto_real": "La doctrina de Jesús fue desvirtuada por el miedo de los apóstoles, quienes pactaron con las instituciones para sobrevivir, creando la astucia sacerdotal."
  },
  "Libertad_de_Dogmas": {
    "palabras_clave": ["templos", "dogma", "carro", "fanatismo", "razón"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#2474: Párrafo I: JESUS NI SUS APOSTOLES NO LEVANTARON TEMPLOS"],
    "contexto_real": "Jesús no fundó religiones ni templos. La verdadera espiritualidad reside en la razón y la libertad frente a los dogmas heredados."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado.');
