const fs = require('fs');
const path = 'F:/trincado/public/data/diccionario_sinapsis.json';
const dictionary = JSON.parse(fs.readFileSync(path, 'utf8'));

const updates = {
  "Ley_de_las_Mediumnidades": {
    "palabras_clave": ["telegrafo espiritual", "instruccion pura", "fin de misticismo", "comunicacion sideral"],
    "contexto_real": "Regulacion de las facultades psiquicas para el estudio y el gobierno de la Comuna, prohibiendo su uso mercantil o dogmatico para restaurar su fin natural de progreso."
  },
  "Igualdad_de_Razas": {
    "palabras_clave": ["fin de prejuicios", "fusion racial", "humanidad una", "sin distincion de color"],
    "contexto_real": "Reconocimiento de que las razas son estados transitorios de la materia y que todos los seres son iguales ante la Ley de Amor, eliminando supremacias de casta o etnia."
  },
  "Ley_de_Elecciones": {
    "palabras_clave": ["jerarquia del saber", "servicio tecnico", "maestro nato", "rotatividad de cargos"],
    "contexto_real": "Sistema de designacion de responsables basado en la sabiduria y capacidad de servicio, supervisado por el Maestro Nato para asegurar la unidad de accion."
  },
  "Transito_del_Espiritu": {
    "palabras_clave": ["fin del luto", "liberacion espiritual", "acto amoroso", "retorno al hogar"],
    "contexto_real": "Desmitificacion de la muerte como un paso natural y alegre del espiritu encarnado hacia su libertad original, celebrado como un hito de progreso."
  },
  "Fiestas_Universales": {
    "palabras_clave": ["celebracion del progreso", "union cosmogonica", "alegria comunal", "hitos de la ley"],
    "contexto_real": "Celebraciones colectivas de la Comuna para conmemorar la solidaridad universal, los transitos de espiritus y los triunfos de la razon sobre el dogma."
  }
};

for (const [key, data] of Object.entries(updates)) {
  if (dictionary.CONCEPTOS[key]) {
    dictionary.CONCEPTOS[key].palabras_clave = [...new Set([...dictionary.CONCEPTOS[key].palabras_clave, ...data.palabras_clave])];
    dictionary.CONCEPTOS[key].contexto_real = data.contexto_real;
  } else {
    dictionary.CONCEPTOS[key] = {
      ...data,
      "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#Tanda30"]
    };
  }
}

fs.writeFileSync(path, JSON.stringify(dictionary, null, 4), 'utf8');
console.log('Diccionario actualizado con conceptos de la Tanda 30.');
