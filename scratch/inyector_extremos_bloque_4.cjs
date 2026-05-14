const fs = require('fs');
const path = 'F:/trincado/public/data/contents/los-extremos-se-tocan_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "7598: El Cuerpo Ideal del Día del Amor": {
    "PilotoDeCoherencia": "Propone una anatomía simbólica para la nueva sociedad: los pies son la Paz y la Libertad (soporte); el cuerpo es el Pueblo Consciente y la Matemática (progreso); los brazos son la Afinidad y la Justicia (acción); y la cabeza es el Amor y el Espíritu del Creador (guía). Este cuerpo no es abstracto, sino una realidad tangible en la conducta humana universal.",
    "IdeasSecundarias": [
      "Lo que se buscó siempre en lo abstracto es hoy una realidad divinamente humana.",
      "Cada individuo es parte de este cuerpo y lo agranda hasta el infinito al comprender su unión con el universo.",
      "La dualidad entre lo material y lo espiritual desaparece bajo el rigor de la matemática pura (C.G.S.)."
    ],
    "CitasIneludibles": [
      "Pies: Paz y Libertad. Cuerpo: Pueblo consciente; matemática o progreso",
      "Brazos: Afinidad y Justicia. Cabeza: Amor, espíritu o Creador",
      "ese cuerpo verdaderamente divino, pero divinamente humano"
    ]
  },
  "7837 y 8124: La Verdadera Civilización y el Grado de Sabiduría": {
    "PilotoDeCoherencia": "Define la civilización como el conocimiento y fruición de todas las leyes, artes y ciencias que constituyen la vida. Sostiene que para alcanzarla son necesarios Maestros de alto grado (Geómetras de la Creación). En el 'Día del Amor' (Post-Liquidación), no existirán ignorantes, solo seres en distintos niveles de progreso hacia la maestría universal.",
    "IdeasSecundarias": [
      "La sabiduría es el aula abierta por la ley de amor; el Espiritismo es el credo de los mundos regenerados.",
      "La sabiduría necesaria para graduarse de maestro es el conocimiento de la Ley de Amor.",
      "El progreso es infinito y todos han de llegar al grado de instructores en el tiempo."
    ],
    "CitasIneludibles": [
      "Civilización quiere decir: conocimiento y fruición de todo lo que constituye la vida de un pueblo",
      "no quedan ignorantes; quedan menos sabios",
      "la sabiduría necesaria para graduarse de maestro, es la del Amor"
    ]
  },
  "8507 y 8795: Eloí como Único Propietario del Universo": {
    "PilotoDeCoherencia": "Reafirma que solo el Creador (Eloí) es el propietario del universo y de los mundos. El espíritu es el único responsable de la creación de formas, utilizando al alma y al cuerpo como instrumentos temporales. Denuncia que las 666 religiones y el egoísmo de fronteras han causado un escepticismo que solo la Ley de Amor puede curar.",
    "IdeasSecundarias": [
      "El espíritu es el autor de las formas demostrativas de la vida; alma y cuerpo son herramientas sin responsabilidad propia.",
      "El hombre no puede encerrarse en fronteras estrechas; el amor debe expandirse del hogar a la nación y de ahí al universo.",
      "Eloí es la fuente de la vida que llena el infinito, y solo el espíritu espiritualizado puede llegar a su centro."
    ],
    "CitasIneludibles": [
      "Sólo él (el espíritu) es responsable y no lo pueden ser los instrumentos... alma y cuerpo",
      "Solo Eloí es Propietario del Universo",
      "666 religiones grandes, el mundo cayó en un espantoso escepticismo"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Los Extremos se Tocan (Bloque 4) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Cuerpo_Ideal_Social": {
    "palabras_clave": ["paz y libertad", "pueblo consciente", "afinidad y justicia", "amor y espíritu", "anatomía social"],
    "nodos_sinapticos": ["los-extremos-se-tocan_esencia.json#7598: El Cuerpo Ideal del Día del Amor"],
    "contexto_real": "Estructura organizativa de la Comuna Universal donde cada función social se corresponde con una facultad humana elevada."
  },
  "Eloi_Propietario_Unico": {
    "palabras_clave": ["Eloí", "propietario", "universo", "abolición propiedad", "creador", "toda la tierra"],
    "nodos_sinapticos": ["los-extremos-se-tocan_esencia.json#8507 y 8795: Eloí como Único Propietario del Universo"],
    "contexto_real": "Fundamento económico-espiritual que niega la propiedad privada individual sobre los recursos del mundo en favor de la propiedad del Creador para uso de todos."
  },
  "Geometras_de_la_Creacion": {
    "palabras_clave": ["geómetras", "matemática pura", "maestros sabios", "metafísica de la creación", "instrucción"],
    "nodos_sinapticos": ["los-extremos-se-tocan_esencia.json#7837 y 8124: La Verdadera Civilización y el Grado de Sabiduría"],
    "contexto_real": "Espíritus de alto progreso encargados de dirigir el desarrollo científico y moral de los mundos en regeneración."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque 4) para Los Extremos se Tocan.');
