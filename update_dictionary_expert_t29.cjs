const fs = require('fs');
const path = 'F:/trincado/public/data/diccionario_sinapsis.json';
const dictionary = JSON.parse(fs.readFileSync(path, 'utf8'));

const updates = {
  "Economia_Universal": {
    "palabras_clave": ["fin de fronteras", "riqueza comun", "herencia universal", "administracion planetaria"],
    "contexto_real": "Administracion de la riqueza del suelo y subsuelo como patrimonio de la humanidad entera, eliminando las fronteras y marcas impuestas por el egoismo nacional."
  },
  "Ley_de_Subsistencias": {
    "palabras_clave": ["reparto equitativo", "abundancia comunal", "necesidad y merito", "almacen comun"],
    "contexto_real": "Garantia de que todos los productos del trabajo pertenecen a la comunidad y se distribuyen segun la necesidad, erradicando el hambre y el acaparamiento."
  },
  "Higiene_Integral": {
    "palabras_clave": ["salud organica", "medicina preventiva", "consejo de higiene", "espiritu sano"],
    "contexto_real": "Ciencia de la vida que busca erradicar la enfermedad mediante la prevencion, la alimentacion pura y la armonia entre el espiritu y el cuerpo."
  },
  "Union_de_los_Seres": {
    "palabras_clave": ["amor racional", "ley de afinidad", "familia comunal", "libre eleccion"],
    "contexto_real": "Modelo de union familiar basado en la afinidad espiritual y el amor libre de dogmas, constituyendo la base afectiva de la sociedad regenerada."
  },
  "Cuerpos_Facultativos": {
    "palabras_clave": ["servidores de la vida", "educacion para la salud", "autoridad tecnica", "servicio gratuito"],
    "contexto_real": "Organismos tecnicos de la Comuna encargados de la salud y la higiene, que operan como educadores y servidores sin fines de lucro."
  }
};

for (const [key, data] of Object.entries(updates)) {
  if (dictionary.CONCEPTOS[key]) {
    dictionary.CONCEPTOS[key].palabras_clave = [...new Set([...dictionary.CONCEPTOS[key].palabras_clave, ...data.palabras_clave])];
    dictionary.CONCEPTOS[key].contexto_real = data.contexto_real;
  } else {
    dictionary.CONCEPTOS[key] = {
      ...data,
      "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#Tanda29"]
    };
  }
}

fs.writeFileSync(path, JSON.stringify(dictionary, null, 4), 'utf8');
console.log('Diccionario actualizado con conceptos de la Tanda 29.');
