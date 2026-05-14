const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "850: Capítulo I: ECONOMÍA DEL TIEMPO": {
    "PilotoDeCoherencia": "El tiempo es el recurso supremo de la Comuna y debe distribuirse con diligencia matemática entre trabajo, estudio y asueto. Se prohíbe el sobretrabajo y la invasión de las horas de descanso, ya que un cuerpo agotado o embotado es ineficiente y su falta de productividad se considera un robo al progreso común.",
    "IdeasSecundarias": [
      "La educación profiláctica enseña a valorar cada minuto sin precipitación ni hastío.",
      "El descanso es una obligación para mantener las facultades creativas del espíritu.",
      "La distribución racional del tiempo elimina el desequilibrio entre la mente y la materia."
    ],
    "CitasIneludibles": [
      "Ninguno podrá decir que es económico si no economiza el tiempo, distribuyéndolo con diligencia racional y provechosa",
      "El tiempo destinado al trabajo ha de aplicarse al trabajo obligatorio; y el destinado al asueto, no se ha de substituir por trabajo o estudio",
      "se ha hecho un robo a la producción, del que sois deudores al común del Progreso."
    ]
  },
  "871: Capítulo II: ECONOMÍA ARTÍSTICA": {
    "PilotoDeCoherencia": "Consiste en la armonía de poner cada cosa y cada ser en su puesto correspondiente según sus aptitudes naturales. La imposición de tareas para las que un individuo es inepto es una violación de la economía artística y del orden universal, similar a invertir los roles naturales.",
    "IdeasSecundarias": [
      "La naturaleza de cada individuo revela su vocación; forzarla es perder tiempo y recursos.",
      "El orden en la casa y la ciudad debe imitar el concierto de los sistemas planetarios.",
      "Nadie puede pedir responsabilidades a quien se le obliga a realizar una tarea para la que no es apto."
    ],
    "CitasIneludibles": [
      "Poner cada cosa en su puesto y preparar un puesto para cada cosa... es de toda necesidad para el orden y concierto",
      "es contra el arte poner hombres ineptos al frente de cosas para las que no son capaces",
      "La naturaleza de cada individuo revela sus aptitudes; y sacarlo de ellas es contra la economía artística"
    ]
  },
  "891: Capítulo III: ECONOMÍA ANIMAL": {
    "PilotoDeCoherencia": "Requiere el conocimiento científico de las funciones fisiológicas del organismo humano y de los seres convivientes. Reivindica la libertad y el respeto a la mujer como 'Arca Santa de la Creación', advirtiendo que su esclavitud amarga la existencia del hombre y destruye el Edén familiar.",
    "IdeasSecundarias": [
      "El hombre nace para el trabajo que embellece la naturaleza; la mujer para endulzar la vida y perpetuar la especie.",
      "Invertir los factores fisiológicos es irracional y contrario a la ley inflexible del progreso.",
      "El conocimiento del propio ser (Conócete a ti mismo) es la cátedra final de la economía animal."
    ],
    "CitasIneludibles": [
      "Esclavizar a la madre de nuestros hijos... es atentatorio a la fisiología de la mujer y es labrarse un infierno",
      "la mujer viene en primer término a ser la compañera amante... a la par que es 'El arca santa de la Creación'",
      "esto no puede tolerarse en el régimen comunal y cada hombre y cada mujer, desde su infancia, conocerá su fisiología"
    ]
  },
  "939: Capítulo V: ECONOMÍA MORAL Y CIENTÍFICA": {
    "PilotoDeCoherencia": "La economía moral es la planificación mental (pensamiento) que idealiza la obra antes de ejecutarla, mientras que la economía científica es la ejecución (voluntad) mediante la matemática. Juntas permiten realizar obras de sabiduría con el mínimo costo de fuerzas, ahorrando tiempo y material mediante la previsión exacta.",
    "IdeasSecundarias": [
      "La economía moral se identifica con el éter (sustancia única) como pensamiento del Creador.",
      "Se debe 'pensar más que pesar y medir' para asegurar la eficiencia del trabajo humano.",
      "La planificación matemática evita errores de diseño y el desperdicio de fuerzas brutas."
    ],
    "CitasIneludibles": [
      "La economía moral consiste en disponer todo lo concerniente para una obra antes de ejecutarla y pesar todo bien en la mente del autor",
      "la economía moral, es el pensamiento; la economía científica, es la voluntad",
      "se debe pensar más que pesar y medir."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia del CAU Tomo II (Bloque 4) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Economia_del_Tiempo_Comunal": {
    "palabras_clave": ["tiempo", "asueto", "trabajo obligatorio", "descanso", "diligencia", "robo al progreso"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#850: Capítulo I: ECONOMÍA DEL TIEMPO"],
    "contexto_real": "Régimen de vida que prohíbe la explotación del tiempo de descanso para asegurar la salud y eficiencia del trabajador."
  },
  "Economia_Artistica_Vocacional": {
    "palabras_clave": ["aptitudes", "vocación", "puesto", "inepto", "armonía", "arte"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#871: Capítulo II: ECONOMÍA ARTÍSTICA"],
    "contexto_real": "Principio organizativo que asigna a cada individuo tareas acordes a su naturaleza espiritual y capacidades naturales."
  },
  "Economia_Moral_y_Cientifica": {
    "palabras_clave": ["planificación", "pensamiento", "voluntad", "matemática", "previsión", "éter"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#939: Capítulo V: ECONOMÍA MORAL Y CIENTÍFICA"],
    "contexto_real": "Unificación de la teoría y la práctica donde la idealización mental previa optimiza la ejecución material de cualquier obra."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para el Tomo II.');
