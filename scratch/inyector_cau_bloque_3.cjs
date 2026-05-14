const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "854: Prólogo A lA TierrA Y sUs esPACios": {
    "PilotoDeCoherencia": "La Tierra ha sido purificada de los espíritus de maldad. El hombre ya no tiene enemigos externos, solo su propia ignorancia y prejuicios que debe vencer mediante el estudio de la filosofía universal. Las religiones han sido derribadas por malversadoras, dejando paso a una única iglesia universal regida por Eloí y el Amor.",
    "IdeasSecundarias": [
      "Los espíritus de maldad fueron transportados a mundos acordes a su nivel.",
      "Buscando a Dios es el alfabeto necesario para comprender esta sabiduría superior.",
      "La verdad fue dictada por el Espíritu de Verdad y maestros de mundos de luz para toda la humanidad."
    ],
    "CitasIneludibles": [
      "Ya, los estorbos extraños al hombre que eran los espíritus de maldad, han sido quitados y transportados a mundos correspondientes. Sólo te quedan tus prejuicios y tu ignorancia",
      "implantada una sola iglesia que es de todos los mundos del universo, con un solo pontífice: Eloí; con un solo principio: Amor"
    ]
  },
  "1054: PÍRITU NACE PARA NUNCA MÁS MORIR Y SIEMPRE PROGRESAR Y SIEMPRE ASCENDER.": {
    "PilotoDeCoherencia": "El espíritu es inmortal y su destino es el ascenso infinito. El aislamiento de los espíritus retrógrados es una medida de protección para la humanidad (lazareto espiritual), no un castigo eterno, obligándolos a trabajar en mundos primitivos para despertar el germen del bien en su conciencia.",
    "IdeasSecundarias": [
      "El Creador no deshereda ni destruye a ninguno de sus hijos.",
      "El acaparamiento egoísta de bienes es la causa de la separación; el modelo es el uso comunal en justicia.",
      "El Código de Amor es la ley eterna compartida por todos los mundos del universo."
    ],
    "CitasIneludibles": [
      "EL ESPÍRITU NACE PARA NUNCA MÁS MORIR Y SIEMPRE PROGRESAR Y SIEMPRE ASCENDER.",
      "al separarlos a éstos, no se hace más que como con los pestilentes; ponerlos en el lazareto para que se curen y no contagien"
    ]
  },
  "1105: CAPÍTUlo Primero: Texto del testamento secreto de Abraham": {
    "PilotoDeCoherencia": "Hellí es el Creador Único de mundos infinitos. Los ángeles y demonios son simplemente hombres desencarnados, unos con luz por su progreso y otros oscurecidos por su maldad. Adán y su familia fueron una raza misionera avanzada que vino de otro mundo para salvar y civilizar a la raza primitiva de la Tierra.",
    "IdeasSecundarias": [
      "El hombre ha de vivir en todos los mundos existentes en su camino de progreso.",
      "Los demonios pelean con los hombres dándoles placeres carnales para esclavizarlos.",
      "La creación es continua y no tiene fin; los mundos se comunican en amor y justicia."
    ],
    "CitasIneludibles": [
      "Hellí uno, creador Universal, no tiene principio: es eterno. Los hombres son sus hijos y Él su herencia",
      "Todos los hijos de Hellí, que llamáis ángeles, hombres fueron... porque Adán y su familia vino con luz y sabiduría de Hellí"
    ]
  },
  "1171: Párrafo i: ¿Que es el Amor?": {
    "PilotoDeCoherencia": "La Ley de Amor es la ley madre del universo. Las religiones la sustituyeron por la 'caridad' para ocultar la injusticia social y la desigualdad. Mientras el amor es justicia y equidad, la caridad es una limosna que rebaja al que la recibe y encubre al criminal que acapara lo común.",
    "IdeasSecundarias": [
      "El amor puro es desinteresado y representa la perfección relativa del espíritu.",
      "La caridad fue consagrada por las religiones para proteger la supremacía de las castas.",
      "Saber leer en el libro de la naturaleza es comprender que el amor es el único principio del Creador."
    ],
    "CitasIneludibles": [
      "La santa ley de Amor, es la ley madre de todas las demás leyes que rigen el universo",
      "fue sustituido el amor, por una hija menor de ésta, que la religión la llamó caridad... para tapar la boca con un mendrugo... lo que significa rebajamiento del que lo recibe"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia del CAU Tomo I (Bloque 3) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Inmortalidad_del_Espiritu": {
    "palabras_clave": ["inmortal", "eterno", "progreso", "ascenso", "nunca morir"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#1054: PÍRITU NACE PARA NUNCA MÁS MORIR Y SIEMPRE PROGRESAR Y SIEMPRE ASCENDER."],
    "contexto_real": "Ley fundamental que establece que el ser espiritual no puede ser destruido y está destinado a la evolución infinita a través de múltiples mundos."
  },
  "Mito_de_Angeles_y_Demonios": {
    "palabras_clave": ["ángeles", "demonios", "espíritus", "luces", "tinieblas", "hombres"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#1105: CAPÍTUlo Primero: Texto del testamento secreto de Abraham"],
    "contexto_real": "Los ángeles no son seres divinos especiales, sino hombres que han progresado; los demonios son espíritus de hombres malvados. Ambos son la misma especie humana en distintos grados."
  },
  "Amor_vs_Caridad": {
    "palabras_clave": ["amor", "caridad", "justicia", "limosna", "rebajamiento", "mendrugo"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-1_esencia.json#1171: Párrafo i: ¿Que es el Amor?"],
    "contexto_real": "El amor es la ley de justicia universal. La caridad es un invento religioso para mantener la desigualdad y humillar al desposeído con migajas."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado.');
