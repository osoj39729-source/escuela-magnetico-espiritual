const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-2_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Filosofía Enciclopédica Universal Tomo 2 (Batch 2 - Claves 15 a 25)
const nuevosNodos = {
  "2506: Diciembre 31 de 1911 Hora 24 a 01 de Enero de 1912 - Sé que no estoy sólo ni perdido.": {
    "PilotoDeCoherencia": "Lucha y Universalidad. Xavier anuncia un año de grandes acontecimientos y luchas, instando a confiar en el Padre y en la protección de la universalidad espiritual.",
    "CitaInelutable": "Luchas os esperan en el año que empezáis... la universalidad os saluda.",
    "EjemploPedagogico": "El capitán que advierte a la tripulación sobre la tormenta que viene, pero les asegura que la flota entera (la universalidad) los escolta.",
    "ConexionDoctrinal": ["Protección Espiritual", "Progreso por Lucha"],
    "NodosSimapticos": []
  },
  "2523: Paz y amor  os traigo y la felicitación de la universalidad...": {
    "PilotoDeCoherencia": "Familia Natural en Acción. Jesús se presenta como hermano y afín, trayendo el beso de su padre José y anunciando la bendición de su madre María.",
    "CitaInelutable": "Vuestro hermano Jesús está con vosotros que sois sus afines; nuestro padre José os da un beso.",
    "EjemploPedagogico": "Una familia real que entra en la casa del amigo a felicitar el año, lejos de los tronos y altares donde los han petrificado.",
    "ConexionDoctrinal": ["Identidad Humana de Jesús", "Familia de Nazareth"],
    "NodosSimapticos": []
  },
  "2557: Hermano aún voy con mi botiquín para el espíritu enfermo...": {
    "PilotoDeCoherencia": "Medicina de la Razón. Los espíritus médicos traen 'botiquines' para el alma, señalando que la razón es la única medicina capaz de curar las aberraciones humanas.",
    "CitaInelutable": "Quiera el Padre, que en este año civil que empieza la razón sea la medicina que cure a los aberrados.",
    "EjemploPedagogico": "El médico que no receta pastillas de fe ciega, sino gotas de pensamiento lógico para limpiar la infección del dogma.",
    "ConexionDoctrinal": ["Razón como Medicina", "Curación Espiritual"],
    "NodosSimapticos": ["Botiquín Espiritual (Concepto)"]
  },
  "2574: La hermana Juana, nos trajo saludos de todos los agradecidos...": {
    "PilotoDeCoherencia": "Ley del Agradecimiento. Se distingue entre los espíritus agradecidos que progresan y los 'barrigones' (tercos/desagradecidos) cuya naturaleza es difícil de corregir.",
    "CitaInelutable": "Es al ñudo que lo fajen si barrigón ha nacido.",
    "EjemploPedagogico": "No puedes enderezar una columna que se construyó torcida desde su base sin derribarla primero; el desagradecimiento es una base torcida.",
    "ConexionDoctrinal": ["Gratitud vs Ingratitud", "Justicia de Carácter"],
    "NodosSimapticos": ["Agradecidos vs Desagradecidos"]
  },
  "2584: Enero 1 de 1912 Hora 12 - del que por justicia lucha.": {
    "PilotoDeCoherencia": "Presencia de María. María de Nazareth bendice la primera comida del año, reafirmando su amor maternal por los que luchan por la justicia en la tierra.",
    "CitaInelutable": "Con que alegría vengo a vosotros hijos queridos... para bendeciros en la primera comida.",
    "EjemploPedagogico": "La madre que pone la mesa para sus hijos que vuelven del trabajo, recordándoles que su esfuerzo es sagrado para la familia espiritual.",
    "ConexionDoctrinal": ["María de Nazareth (Amor)", "Santidad del Trabajo"],
    "NodosSimapticos": []
  },
  "2689: POSESION LL - Catalina": {
    "PilotoDeCoherencia": "Oscuridad del Crimen. Un espíritu joven confiesa el envenenamiento de sus padres por influencia de malos amigos, sufriendo la consecuencia natural de la oscuridad en el espacio.",
    "CitaInelutable": "Tenía por amigos malos espíritus encarnados y me aconsejaron que envenenara a mis padres.",
    "EjemploPedagogico": "El que apaga la luz de la vida de otros por un puñado de monedas, se encuentra luego viviendo en una cueva sin luz donde las monedas no sirven de nada.",
    "ConexionDoctrinal": ["Consecuencias del Crimen", "Influencias Espirituales Negativas"],
    "NodosSimapticos": []
  },
  "2738: Enero 7 de 1912 Portillo - El Secretario: Joaquín Trincado": {
    "PilotoDeCoherencia": "Predominio del Espíritu. Cuando el espíritu reina y asume su mando, la materia (el cuerpo) cumple con su deber sin las debilidades del error.",
    "CitaInelutable": "Donde el espíritu reina, la materia cumple su deber.",
    "EjemploPedagogico": "El capitán que toma el mando firme del barco durante la tempestad; la tripulación (la materia) deja de temblar y se pone a trabajar con orden.",
    "ConexionDoctrinal": ["Gobierno del Espíritu", "Responsabilidad Mediúmnica"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Botiquín Espiritual (Concepto)": {
    "Definición": "Recursos magnéticos y pedagógicos utilizados por espíritus especializados en sanación para equilibrar el periespíritu y la mente del misionero o del afligido. La principal herramienta de este botiquín es la 'Razón', considerada la única medicina eficaz contra las aberraciones del juicio.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 2 (Mensaje de Año Nuevo 1912).",
    "Conexiones": ["Curación Espiritual", "Razón", "Magnetismo"],
    "Obras": ["Filosofía Enciclopédica Universal", "Profilaxis de la Vida"]
  },
  "Agradecidos vs Desagradecidos": {
    "Definición": "Categorización moral de los seres basada en su respuesta a la ley de amor y al sacrificio de otros. El agradecimiento abre las puertas a la luz y al progreso rápido, mientras que la ingratitud es vista como un defecto de carácter ('barrigón de nacimiento') que retarda la evolución durante siglos.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 2 (Versos de la Hermana Juana).",
    "Conexiones": ["Justicia de Carácter", "Progreso Espiritual", "Responsabilidad"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  },
  "Materia en Deber": {
    "Definición": "Estado de equilibrio físico y biológico alcanzado cuando el espíritu asume el mando total de sus facultades, obligando a la materia a servir como instrumento fiel de la justicia y la verdad sin interferencias de bajas pasiones o enfermedades psicosomáticas.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 2 (Sesión del 7 de Enero de 1912).",
    "Conexiones": ["Gobierno del Espíritu", "Mediumnidad", "Higiene Mental"],
    "Obras": ["Filosofía Enciclopédica Universal", "Conócete a ti mismo"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 2 de Tomo 2 (7 nodos) y 3 términos sinápticos.');
