const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/la-revolucion-de-mexico_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = {};
// Empezamos de cero para asegurar 1:1 total sin resúmenes.
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// RE-DESTILACIÓN PURA 1:1 - La Revolución de México (Batch 1 - Claves 0 a 6)
const nuevosNodos = {
  "000: PREFACIO": {
    "PilotoDeCoherencia": "Metafísica Histórica. La sabiduría consiste en precaver los males estudiando las causas naturales y espirituales de los hechos, superando el egoísmo y la ignorancia.",
    "CitaInelutable": "La sabiduría consiste en precaver y prevenir los males, para no tener que curarlos.",
    "EjemploPedagogico": "Un médico que enseña higiene para evitar la peste, en lugar de solo fabricar ataúdes cuando la enfermedad ya ha estallado.",
    "ConexionDoctrinal": ["Metafísica de los Hechos", "Justicia Preventiva"],
    "NodosSimapticos": ["Metafísica de los Hechos"]
  },
  "001: CAPÍTULO PRIMERO: MÉXICO EN LA ANTIGÜEDAD": {
    "PilotoDeCoherencia": "Ancestralidad Espiritual. México tiene raíces que se remontan a 57 siglos, conectando con la sabiduría de Shet, el primer hijo de Adán y Eva, rompiendo la idea de que no hay 'nada nuevo'.",
    "CitaInelutable": "Nuevo es debajo del Sol el hombre cuando se manifiesta libre de prejuicio... dicho hace 57 siglos por Shet.",
    "EjemploPedagogico": "Descubrir que una casa que creías nueva está construida sobre los cimientos de un templo milenario; el diseño es actual, pero la fuerza viene del origen.",
    "ConexionDoctrinal": ["Prehistoria Espiritual", "Shet"],
    "NodosSimapticos": []
  },
  "002: CAPITULO SEGUNDO: MÉXICO DESDE EL HUNDIMIENTO DE LA ATLÁNTIDA": {
    "PilotoDeCoherencia": "Continuidad Geológica. Tras la Atlántida, México permaneció en una beatitud aislada durante millones de siglos, conservando una pureza primitiva en el costillar de los Andes.",
    "CitaInelutable": "Habían vivido muchos millones de siglos... todos los habitantes del costillar de los Andes, aislados en verdad en lo material.",
    "EjemploPedagogico": "Un jardín vallado que permanece intacto mientras afuera ruge una tormenta que cambia todo el paisaje; al abrir la valla, el jardín conserva plantas que ya no existen fuera.",
    "ConexionDoctrinal": ["Atlántida", "Evolución Geológica"],
    "NodosSimapticos": ["Atlántida"]
  },
  "003: CAPITULO TERCERO: MÉXICO HASTA HERNÁN CORTÉS": {
    "PilotoDeCoherencia": "Transición de Eras. Se analiza el periodo hasta el siglo XVI (erróneamente llamado cristiano) bajo la lente metafísica, preparando el escenario para el choque de civilizaciones.",
    "CitaInelutable": "Era cristiana... es mal dicho porque es impropio... volvamos los ojos, por la metafísica de los hechos.",
    "EjemploPedagogico": "Un historiador que quita el marco dorado de un cuadro para ver los bocetos originales que el artista ocultó; el marco es la 'era cristiana', los bocetos son la verdad metafísica.",
    "ConexionDoctrinal": ["Metafísica de los Hechos", "Crítica a la Era Cristiana"],
    "NodosSimapticos": []
  },
  "004: CAPITULO CUARTO: MÉXICO DESDE HERNÁN CORTÉS HASTA SU EMANCIPACIÓN": {
    "PilotoDeCoherencia": "Maduración Nacional. El proceso desde la conquista hasta la independencia se compara con el desarrollo humano (infancia, juventud, madurez) necesario para forjar el carácter de un pueblo.",
    "CitaInelutable": "Para ser hombre, es necesario nacer, pasar la infancia... así es el hombre [y la nación].",
    "EjemploPedagogico": "Un adolescente que debe pasar por crisis y luchas para entender quién es y dejar de depender de sus padres; la emancipación es el grito de madurez de México.",
    "ConexionDoctrinal": ["Emancipación", "Desarrollo de las Naciones"],
    "NodosSimapticos": []
  },
  "005: CAPITULO QUINTO: MÉXICO DESDE SU INDEPENDENCIA HASTA EL DICTADOR DÍAZ": {
    "PilotoDeCoherencia": "Siglo de Liquidación. Periodo de luces materiales pero oscuridad metafísica, que desemboca en el siglo del juicio (XX) donde se liquidan las cuentas del egoísmo y la tiranía.",
    "CitaInelutable": "Este siglo, que es la verdad y del juicio y de la liquidación y por tanto de la Igualdad.",
    "EjemploPedagogico": "Una oficina que ha acumulado papeles y deudas durante años; llega un momento en que es necesario hacer un balance final y cerrar los libros para empezar de cero.",
    "ConexionDoctrinal": ["Juicio de Mayorías", "Justicia Social"],
    "NodosSimapticos": []
  },
  "006: CAPITULO SEXTO: JUICIO RACIONAL ETNO-ÉTICO": {
    "PilotoDeCoherencia": "Unidad de Familia Humana. Las naciones son solo familias del universal pueblo tierra. Se analiza la etnia y ética mexicana como parte de un concierto global ignorado por eras.",
    "CitaInelutable": "Las naciones... familias del universal pueblo, que es el mundo.",
    "EjemploPedagogico": "Un gran edificio de apartamentos; cada familia vive en su piso (nación), pero todos comparten el mismo techo, el mismo agua y el mismo destino si el edificio colapsa.",
    "ConexionDoctrinal": ["Fraternidad Universal", "Etno-ética"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Los términos del diccionario se mantienen y refuerzan.
const terminosDic = {
  "Metafísica de los Hechos": {
    "Definición": "Estudio de las causas espirituales y leyes universales que subyacen tras los acontecimientos históricos y sociales. Permite comprender que las revoluciones y cambios no son azares, sino ejecuciones de la Justicia Universal para el progreso de los pueblos.",
    "Contexto": "La Revolución de México (Prefacio).",
    "Conexiones": ["Justicia", "Historia", "Espíritu"],
    "Obras": ["La Revolución de México", "Filosofía Austera Racional"]
  },
  "Juicio de Liquidación": {
    "Definición": "Concepto trincadista que define al Siglo XX como el momento histórico donde la humanidad debe rendir cuentas de su progreso moral y espiritual, eliminando las supremacías y dogmas para instaurar la igualdad.",
    "Contexto": "La Revolución de México (Capítulo Quinto).",
    "Conexiones": ["Justicia", "Siglo XX", "Igualdad"],
    "Obras": ["La Revolución de México"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 1 (FIX) de La Revolución de México (7 nodos 1:1) y términos sinápticos. Estructura reparada.');
