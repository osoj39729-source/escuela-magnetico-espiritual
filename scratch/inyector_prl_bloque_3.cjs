const fs = require('fs');
const path = 'F:/trincado/public/data/contents/primer-rayo-de-luz_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "2997: Rechazo de los Evangelios y la Manipulación de Constantino": {
    "PilotoDeCoherencia": "Trincado desautoriza los Evangelios como fuentes de juicio, denunciando que fueron seleccionados arbitrariamente por Constantino (a quien califica de asesino) para amalgamar ritos y teologías con el fin de engañar a los pueblos. Considera que el 'Nuevo Testamento' es una construcción sin autoría divina real.",
    "IdeasSecundarias": [
      "Constantino organizó concilios para 'comprar' ritos a las religiones y centralizar el poder.",
      "De un 'número fabuloso' de evangelios, solo se eligieron cuatro para conveniencia de la Iglesia.",
      "La religión natural o teológica no es admitida como prueba en el juicio de la razón."
    ],
    "CitasIneludibles": [
      "Yo no tomo los Evangelios porque al llamado (Concilio)... escogieron los cuatro que insertan",
      "no hay Dios que diga de quién es ese testamento",
      "Constantino el asesino de su suegro"
    ]
  },
  "3765 y 3837: El Secuestro de los Sabios por la Teología": {
    "PilotoDeCoherencia": "Analiza cómo la Iglesia intenta apropiarse de figuras como Newton, Linneo o Pascal para validar su dogma. Trincado afirma que estos 'sabios' no eran católicos ni cristianos en el sentido dogmático, y que sus espíritus sufren al ser usados para defender la fe ciega que ellos mismos superaron mediante la observación de la naturaleza.",
    "IdeasSecundarias": [
      "Newton admiraba al Creador en la ley mecánica, no al Dios de las venganzas de la Biblia.",
      "Linneo veía a Dios en las obras de la naturaleza, lo cual es opuesto al dogma del barro y el milagro.",
      "El catolicismo usa frases de sabios fuera de contexto para confundir a los ignorantes."
    ],
    "CitasIneludibles": [
      "haciéndolos sufrir en sus espíritus, porque ninguno de ellos fue ni quiere ser católico",
      "He visto a Dios... a través de la creación (Linneo)",
      "El hombre que no admira a Dios, es un loco (Newton)"
    ]
  },
  "3940: El Requisito de la Razón sobre la Chanza": {
    "PilotoDeCoherencia": "En el marco de la controversia, se exige el abandono del chiste y la burla ('chanza') para dar paso al razonamiento sereno, claro y ordenado. Trincado observa que la verdad no necesita de recursos oratorios vulgares, sino de la confrontación de principios y métodos científicos.",
    "IdeasSecundarias": [
      "La burla es el recurso del que no tiene argumentos sólidos (referencia a Montemayor).",
      "La seriedad y la concreción son indispensables para que el lector pueda juzgar el mérito de las ideas.",
      "La confusión de términos es una estrategia para evitar el deslinde de responsabilidades históricas."
    ],
    "CitasIneludibles": [
      "indispensable que el señor Montemayor deje de lado la chanza",
      "Seriedad y concreción, argumentos y método, claridad",
      "solamente de esta manera podrán apreciar el mérito de nuestras respectivas argumentaciones"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Primer Rayo de Luz (Bloque 3) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Fraude_Evangelico": {
    "palabras_clave": ["evangelios", "Constantino", "manipulación", "concilio", "nuevo testamento", "teología"],
    "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#2997: Rechazo de los Evangelios y la Manipulación de Constantino"],
    "contexto_real": "Denuncia histórica de la selección interesada de textos bíblicos para crear un dogma de control social."
  },
  "Sabios_Teistas_no_Catolicos": {
    "palabras_clave": ["Newton", "Linneo", "Pascal", "sabios", "teísmo", "naturaleza vs dogma"],
    "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#3765 y 3837: El Secuestro de los Sabios por la Teología"],
    "contexto_real": "Aclaración de que la admiración de los grandes científicos por el Creador no valida las instituciones religiosas."
  },
  "Metodo_de_Discusion_Racional": {
    "palabras_clave": ["razonamiento sereno", "claridad", "argumento vs chanza", "método", "concreción"],
    "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#3940: El Requisito de la Razón sobre la Chanza"],
    "contexto_real": "Estándar de diálogo exigido por la Escuela para elevar el debate por encima de la oratoria vacía o el insulto."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque 3) para Primer Rayo de Luz.');
