const fs = require('fs');
const path = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "22083: El Alma como Colección de Instintos": {
    "PilotoDeCoherencia": "Corrige el error de considerar al alma como un ser individual con leyes propias. Define al alma humana como una amalgama de todos los instintos de los seres animales de la creación. El único ser individual y consciente es el espíritu; el alma es el campo de batalla de los instintos que el espíritu debe gobernar.",
    "IdeasSecundarias": [
      "El alma es sensible al placer y al dolor porque repercute por la fuerza de los instintos que la componen.",
      "Cada emoción es un instinto herido por otro instinto de su misma familia o especie.",
      "La psicología universitaria yerra al no distinguir que la modalidad permanente reside en el espíritu y no en el alma colectiva."
    ],
    "CitasIneludibles": [
      "el alma humana no tiene ley, porque no es un ser individual",
      "formada de tantos instintos cuantos seres animales existen en la creación",
      "el espíritu, único Ser consciente"
    ]
  },
  "22290 al 22804: La Familia y la Justicia del Nacimiento": {
    "PilotoDeCoherencia": "Establece la familia como una institución natural necesaria para la protección del infante, cuyo sistema nervioso está incompleto al nacer. Lanza el axioma revolucionario: 'Ningún ser entra al mundo por puerta falsa', denunciando la injusticia social y religiosa contra los hijos llamados 'ilegítimos' y las madres solteras, pues todo nacimiento responde a un juicio y destino espiritual.",
    "IdeasSecundarias": [
      "El celibato es una aberración que se opone a la ley natural de conservación de la especie.",
      "El matrimonio es un vínculo moral y jurídico que hoy aceptamos como monogámico para el desarrollo social.",
      "La naturaleza entregó el germen del hombre al hombre; ya no hay generaciones espontáneas de la especie."
    ],
    "CitasIneludibles": [
      "Ningún ser hombre entra en el mundo por puerta falsa",
      "la injusticia con que se trata y juzga... a los hijos de la libertad y a las madres sin marido",
      "la familia es necesaria; es una institución natural"
    ]
  },
  "22882: El Proceso de Encarnación y el Sexo": {
    "PilotoDeCoherencia": "Describe la encarnación como un acto 'terrible' donde el espíritu se ve agobiado y oscurecido al tocar la materia. Revela que el espíritu influye en los sentimientos de la madre desde la concepción y que el sexo del cuerpo se define y solidifica en el quinto mes de gestación, previa autorización del Consejo Supremo para posibles permutas según las necesidades del destino.",
    "IdeasSecundarias": [
      "El espíritu está consciente durante la concepción pero pierde claridad al avanzar la gestación.",
      "La ternura de la madre es despertada por las vibraciones del espíritu encarnante para asegurar su cuidado.",
      "La formación del sexo en el quinto mes es el punto de no retorno para la configuración física del instrumento."
    ],
    "CitasIneludibles": [
      "el de la encarnación del espíritu es terrible... queda un tanto agobiado y obscurecido por el hecho mismo de tocar materia",
      "hacerse el sexo y no antes (quinto mes), por si las circunstancias le obligaran a la permuta",
      "reclamando materiales de su padre hasta el quinto mes"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Filosofía Austera Racional (Bloque 15) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Alma_Coleccion_de_Instintos": {
    "palabras_clave": ["alma instintiva", "colección de instintos", "amalgama", "no individual", "campo de batalla"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#22083: El Alma como Colección de Instintos"],
    "contexto_real": "Definición que despoja al alma de su 'santidad' religiosa para entenderla como la envoltura biológica-instintiva que el espíritu debe educar."
  },
  "Puerta_Falsa": {
    "palabras_clave": ["puerta falsa", "hijos de la libertad", "ilegitimidad", "justicia de nacimiento", "madres solteras"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#22290 al 22804: La Familia y la Justicia del Nacimiento"],
    "contexto_real": "Axioma que valida la dignidad de todo ser humano independientemente de las leyes civiles o religiosas de sus padres."
  },
  "Quinto_Mes_Sexo": {
    "palabras_clave": ["quinto mes", "definición de sexo", "permuta de sexo", "Consejo Supremo", "gestación espiritual"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#22882: El Proceso de Encarnación y el Sexo"],
    "contexto_real": "Hito biológico-espiritual donde se fija el género del cuerpo para cumplir la misión de la existencia actual."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque 15) para Filosofía Austera Racional.');
