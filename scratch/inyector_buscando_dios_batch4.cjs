const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// RE-DESTILACIÓN PURA 1:1 - Buscando a Dios (Batch 4 - Claves 935 a 1637)
const nuevosNodos = {
  "021: PARRAFO III: EL ALMA ES EL ARCHIVO-CONCIENCIA": {
    "PilotoDeCoherencia": "Depósito de Experiencia. El alma no es el espíritu, sino su envoltura y archivo donde se graban todas las sensaciones y juicios, permitiendo la continuidad de la conciencia.",
    "CitaInelutable": "EL ALMA ES EL ARCHIVO-CONCIENCIA DEL HOMBRE... se graba en ella hasta el más leve pensamiento.",
    "EjemploPedagogico": "Un disco duro que guarda todos los documentos y fotos que has creado; el disco no es el escritor (espíritu), pero sin él, el escritor no tendría memoria de lo que ha hecho anteriormente.",
    "ConexionDoctrinal": ["Alma (Archivo)", "Continuidad del Espíritu"],
    "NodosSimapticos": ["Archivo-Conciencia (Alma)"]
  },
  "022: PARRAFO IV: EL HOMBRE VA SIEMPRE MAS ALLA": {
    "PilotoDeCoherencia": "Inconformismo Evolutivo. El hombre nunca se detiene porque su espíritu es infinito; el discernimiento le impide resignarse a la ignorancia y lo empuja a buscar la causa de todo.",
    "CitaInelutable": "¿Por qué el hombre obra con discernimiento y se resigna? El hombre va siempre más allá.",
    "EjemploPedagogico": "Un explorador que llega a la cima de una montaña; descansa un momento, pero enseguida mira hacia la siguiente cordillera, porque sabe que su destino no es la cima, sino el horizonte infinito.",
    "ConexionDoctrinal": ["Progreso Infinito", "Discernimiento"],
    "NodosSimapticos": []
  },
  "023: CAPITULO SEXTO: LAS RELIGIONES: SU FIN": {
    "PilotoDeCoherencia": "Caducidad Dogmática. Las religiones han cumplido un papel de freno o de infancia para la humanidad, pero su fin es inevitable ante la luz de la razón y el espíritu libre.",
    "CitaInelutable": "LAS RELIGIONES: SU FIN... se ha llegado al término de su reinado de sombras.",
    "EjemploPedagogico": "Los andamios de una obra en construcción; son necesarios mientras se levantan las paredes, pero una vez que el edificio está terminado, los andamios deben retirarse para que la gente pueda entrar a vivir.",
    "ConexionDoctrinal": ["Fin de las Religiones", "Juicio de Mayorías"],
    "NodosSimapticos": []
  },
  "024: Párrafo I: LA RELIGIÓN FÚLICA": {
    "PilotoDeCoherencia": "Religiosidad Primordial. La religión fúlica representa el primer estadio del miedo humano ante lo desconocido, divinizando los fenómenos naturales sin comprender su ley.",
    "CitaInelutable": "LA RELIGION FULICA... el miedo hizo a los dioses.",
    "EjemploPedagogico": "Un niño que se esconde bajo las sábanas cuando truena, creyendo que el cielo está enojado con él; su miedo crea un 'monstruo' (dios) donde solo hay una descarga eléctrica.",
    "ConexionDoctrinal": ["Religión Fúlica (Origen)", "Miedo Metafísico"],
    "NodosSimapticos": ["Religión Fúlica (Origen)"]
  },
  "025: Párrafo II: LA RAZA ADÁMICA": {
    "PilotoDeCoherencia": "Hito Evolutivo. La raza adámica es una de las muchas familias espirituales que han poblado la tierra; su mito ha sido usado por las religiones para centralizar un origen falso.",
    "CitaInelutable": "LA RAZA ADAMICA... el primer ensayo de fraternidad bajo la ley escrita.",
    "EjemploPedagogico": "Una de las muchas ramas de un gran árbol; las religiones pretenden que esa rama es todo el árbol, ignorando las raíces profundas y las demás ramas que crecieron antes y después.",
    "ConexionDoctrinal": ["Raza Adámica (Concepto)", "Prehistoria Espiritual"],
    "NodosSimapticos": ["Raza Adámica (Concepto)"]
  },
  "026: Párrafo III: LA VEDANTA": {
    "PilotoDeCoherencia": "Sabiduría Oriental. La Vedanta representa un esfuerzo del espíritu por comprender la unidad de la substancia, aunque a menudo se perdió en el quietismo o el misticismo.",
    "CitaInelutable": "LA VEDANTA... el espíritu busca su origen en la contemplación.",
    "EjemploPedagogico": "Un hombre que mira el reflejo del sol en un lago tranquilo; se maravilla con la belleza del reflejo, pero a veces olvida que debe remar para llegar a la orilla real.",
    "ConexionDoctrinal": ["Vedantismo", "Sabiduría Antigua"],
    "NodosSimapticos": []
  },
  "027: Párrafo IV: EL DECALOGO DE MOISES": {
    "PilotoDeCoherencia": "Ley Escrita. Moisés establece las bases de la convivencia social mediante mandatos que buscan frenar el egoísmo, aunque su interpretación fue luego dogmatizada.",
    "CitaInelutable": "LA LEY ESCRITA O DECALOGO DE MOISES... para poner orden en el caos de la ambición.",
    "EjemploPedagogico": "Las señales de tránsito en una ciudad nueva; dicen por dónde ir y dónde frenar para evitar choques, pero no son el destino del viaje, solo las reglas para circular con seguridad.",
    "ConexionDoctrinal": ["Moisés", "Ley de Justicia"],
    "NodosSimapticos": []
  },
  "028: Párrafo V: TRAGEDIA ENTRE MOISES Y EL PUEBLO": {
    "PilotoDeCoherencia": "Resistencia al Progreso. El conflicto entre la visión de Moisés y la terquedad del pueblo simboliza la lucha eterna entre la ley de justicia y el deseo de volver a los ídolos.",
    "CitaInelutable": "TRAGEDIA ENTRE MOISES Y EL PUEBLO... el becerro de oro frente a la ley del espíritu.",
    "EjemploPedagogico": "Un guía de montaña que intenta llevar a su grupo a la cima, pero ellos prefieren quedarse a mitad de camino bailando alrededor de una fogata, ignorando que la tormenta se acerca.",
    "ConexionDoctrinal": ["Becerro de Oro (Símbolo)", "Moisés"],
    "NodosSimapticos": []
  },
  "029: Párrafo VI: RELIGIONES DEL SINAI": {
    "PilotoDeCoherencia": "Derivaciones del Dogma. Se analiza cómo las religiones posteriores desvirtuaron la ley de Moisés para crear sistemas de control basados en el castigo y el privilegio.",
    "CitaInelutable": "RELIGIONES QUE SIGUEN LA LEY DEL SINAI... desvirtuaron el mandato por la conveniencia de los sacerdotes.",
    "EjemploPedagogico": "Un testamento claro dejado por un abuelo que es reescrito por los albaceas para quedarse con la herencia, diciendo a los nietos que 'así lo quiso el abuelo'.",
    "ConexionDoctrinal": ["Sinaí", "Desviación Doctrinal"],
    "NodosSimapticos": []
  },
  "030: Párrafo VII: LA RELIGIÓN BUDA": {
    "PilotoDeCoherencia": "Renunciación y Compasión. Buda propone la eliminación del deseo como vía de liberación, un paso importante pero que puede llevar a la inacción si no se une a la justicia social.",
    "CitaInelutable": "LA RELIGION BUDA O IGLESIA BUDA... la eliminación del dolor por el conocimiento.",
    "EjemploPedagogico": "Un médico que enseña a los pacientes a no sentir dolor mediante la meditación, pero olvida darles la medicina que cura la herida física; el alivio es real, pero la curación está incompleta.",
    "ConexionDoctrinal": ["Budismo", "Justicia y Compasión"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Archivo-Conciencia (Alma)": {
    "Definición": "Concepto trincadista que define al alma como el periespíritu o depósito dinámico donde se graban todas las experiencias, juicios y sensaciones del espíritu. Es el puente entre el pensamiento abstracto y la ejecución material.",
    "Contexto": "Buscando a Dios (Capítulo Quinto).",
    "Conexiones": ["Alma", "Memoria", "Espíritu"],
    "Obras": ["Buscando a Dios", "Conócete a ti mismo"]
  },
  "Religión Fúlica (Origen)": {
    "Definición": "Etapa primaria de la religiosidad humana caracterizada por el miedo irracional a las fuerzas de la naturaleza. Es la raíz de todos los sistemas sacerdotales que basan su poder en el temor a Dios y el castigo.",
    "Contexto": "Buscando a Dios (Capítulo Sexto).",
    "Conexiones": ["Miedo", "Dogma", "Religión"],
    "Obras": ["Buscando a Dios"]
  },
  "Raza Adámica (Concepto)": {
    "Definición": "Representa una oleada de espíritus en un grado específico de evolución que pobló la Tierra. La doctrina aclara que no fue la primera ni la única, desmitificando el Génesis bíblico como origen biológico absoluto.",
    "Contexto": "Buscando a Dios (Capítulo Sexto).",
    "Conexiones": ["Evolución", "Prehistoria", "Shet"],
    "Obras": ["Buscando a Dios", "Filosofía Enciclopédica"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 4 de Buscando a Dios (10 nodos 1:1) y 3 términos sinápticos. Religiones y Alma sellados.');
