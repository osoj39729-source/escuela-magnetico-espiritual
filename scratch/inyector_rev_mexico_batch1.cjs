const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/la-revolucion-de-mexico_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = {};
if (fs.existsSync(esenciaPath)) {
  esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
}
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - La Revolución de México (Batch 1 - Capítulos 1 a 6)
const nuevosNodos = {
  "001: Prefacio - La Metafísica de los Hechos": {
    "PilotoDeCoherencia": "Sabiduría Preventiva. La verdadera sabiduría no consiste en curar los males, sino en prevenirlos mediante el estudio de la metafísica de los hechos históricos.",
    "CitaInelutable": "La sabiduría consiste en precaver y prevenir los males, para no tener que curarlos.",
    "EjemploPedagogico": "Un ingeniero que refuerza los cimientos antes de que aparezca la grieta, en lugar de esperar a que el edificio se derrumbe para reconstruirlo.",
    "ConexionDoctrinal": ["Metafísica de los Hechos", "Justicia Histórica"],
    "NodosSimapticos": ["Metafísica de los Hechos"]
  },
  "002: Capítulo 1-3: La Chispa de Madero y Villa": {
    "PilotoDeCoherencia": "Motor de la Libertad. Francisco I. Madero y Pancho Villa son vistos como instrumentos de la justicia para purificar las manchas del suelo mexicano y asfixiar la tiranía.",
    "CitaInelutable": "La chispa que debía provocar el incendio que purificara las manchas del suelo mexicano.",
    "EjemploPedagogico": "Un relámpago que ilumina la noche oscura de un calabozo, permitiendo que los prisioneros vean la llave que los tiranos habían escondido.",
    "ConexionDoctrinal": ["Revolución (Justicia)", "Francisco I. Madero"],
    "NodosSimapticos": []
  },
  "003: Capítulo 4-6: La Causa de las Guerras": {
    "PilotoDeCoherencia": "Odio Religioso. Se identifica al odio religioso como la principal y única causa de que en el mundo no reine el amor, impidiendo la existencia de la Comuna.",
    "CitaInelutable": "El valuarte de la comuna... sólo la combaten los hijos del odio religioso, principal y única causa de que en el mundo no reine el amor.",
    "EjemploPedagogico": "Un veneno que se vierte en el pozo del pueblo; aunque todos tengan sed y quieran amarse, el agua contaminada por el dogma los vuelve unos contra otros.",
    "ConexionDoctrinal": ["Odio Religioso (Causa)", "Comuna Universal"],
    "NodosSimapticos": ["Odio Religioso (Causa)"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Metafísica de los Hechos": {
    "Definición": "Estudio de las causas espirituales y leyes universales que subyacen tras los acontecimientos históricos y sociales. Permite comprender que las revoluciones y cambios no son azares, sino ejecuciones de la Justicia Universal para el progreso de los pueblos.",
    "Contexto": "La Revolución de México (Prefacio).",
    "Conexiones": ["Justicia", "Historia", "Espíritu"],
    "Obras": ["La Revolución de México", "Filosofía Austera Racional"]
  },
  "Odio Religioso (Causa)": {
    "Definición": "Identificado por Trincado como la raíz de todos los conflictos bélicos y divisiones humanas. Es el producto de los dogmas que separan a los hombres en 'salvos' y 'condenados', impidiendo el reconocimiento de la fraternidad universal y la implantación de la Comuna.",
    "Contexto": "La Revolución de México (Capítulo Diecisiete y Prefacio).",
    "Conexiones": ["Religión", "Guerra", "Dogma"],
    "Obras": ["La Revolución de México", "Los Extremos se Tocan"]
  },
  "Revolución (Justicia)": {
    "Definición": "Movimiento social impelido por la necesidad de equilibrio y libertad. En la doctrina trincadista, la revolución es la respuesta natural de la Ley de Justicia ante la opresión, actuando como un fuego purificador que limpia las instituciones de la tiranía y el privilegio.",
    "Contexto": "La Revolución de México.",
    "Conexiones": ["Libertad", "Progreso", "Justicia"],
    "Obras": ["La Revolución de México", "Filosofía Universal"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 1 de La Revolución de México (3 nodos) y 3 términos sinápticos. Metafísica de los hechos sellada.');
