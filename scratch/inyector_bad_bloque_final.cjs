const fs = require('fs');
const path = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "10788: Párrafo II: La Identidad del Maestro (Jaime, hermano de Jesús)": {
    "PilotoDeCoherencia": "Revelación de la identidad espiritual de Joaquín Trincado como Jaime, hermano biológico de Jesús. Explica que su misión actual es cumplir el juramento de borrar la infamia de la palabra 'Cristo' (que significa 'peligro'), término que la religión utilizó para divinizar erróneamente a Jesús y lucrar con su sacrificio material.",
    "IdeasSecundarias": [
      "El espíritu archiva todas sus existencias, pero la justicia las oculta para evitar prejuicios sociales.",
      "La afinidad espiritual une a los misioneros en diferentes épocas para restaurar la verdad de la ley.",
      "La Iglesia católica compuso el término 'Jesucristo' para perpetuar la ignorancia y el negocio del dogma."
    ],
    "CitasIneludibles": [
      "¿Y yo quién soy? En mi traje soy el obrero; pero... se envuelve, el que juró al Padre, quitar el peligro 'Cristo'",
      "Jaime, hace juramento de borrar de su hermano, la infamia.",
      "Cristo... en lengua hebraica dice 'peligro'"
    ]
  },
  "11305: PUNTO FINAL y la Bestia 666": {
    "PilotoDeCoherencia": "Cierre de la obra reafirmando la Paternidad Universal del Creador (Hellí) frente al concepto religioso de 'Dios'. Trincado asume el código de la 'Bestia 666' como el símbolo de la sabiduría racionalista que destruye la mentira y el comercio de los ministros religiosos, estableciendo el Espiritismo de Luz y Verdad como el juicio final de las instituciones.",
    "IdeasSecundarias": [
      "El término 'Dios Amor' fue una concesión pedagógica para facilitar el tránsito del dogma a la razón.",
      "Solo el espíritu es racional y creador de formas; el Padre no deshereda a ningún hijo por sus errores.",
      "La Escuela Magnético-Espiritual ha juzgado ya a la humanidad presente y a los espíritus que la habitan."
    ],
    "CitasIneludibles": [
      "es padre y nada más, al que ninguno de sus hijos lo burla, ni lo birla",
      "usó el término 'Dios Amor' forzados, para sustituir en la mente humana a todos los Dioses",
      "PUNTO FINAL. LA BESTIA 666"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Buscando a Dios (Bloque Final) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Jaime_Hermano_de_Jesús": {
    "palabras_clave": ["jaime", "hermano de jesús", "identidad espiritual", "juramento", "peligro"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#10788: Párrafo II: La Identidad del Maestro (Jaime, hermano de Jesús)"],
    "contexto_real": "Identidad trascendente de Joaquín Trincado que explica su compromiso histórico con la desmitificación de la figura de Jesús."
  },
  "Cristo_como_Peligro": {
    "palabras_clave": ["cristo", "peligro", "infamia", "etimología", "hebreo", "jesucristo"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#10788: Párrafo II: La Identidad del Maestro (Jaime, hermano de Jesús)"],
    "contexto_real": "Significado oculto del término que la religión impuso a Jesús para ocultar su mensaje de libertad y amor racional."
  },
  "La_Bestia_666_Sabiduría": {
    "palabras_clave": ["bestia", "666", "sabiduría", "código", "juicio", "apocalipsis"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#11305: PUNTO FINAL y la Bestia 666"],
    "contexto_real": "Símbolo de la potencia intelectual y espiritual que viene a desenmascarar el error y establecer la Comuna Universal."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para Buscando a Dios.');
