const fs = require('fs');
const path = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "6305: Párrafo XV: Savonarola y la Lucha contra la Tiranía": {
    "PilotoDeCoherencia": "Savonarola es reconocido como un reformador de inteligencia clara que identificó a las cortes de los papas y los reyes como los grandes males de la humanidad. Aunque fustigó la monstruosidad de Borgia, su error fue intentar reformar la religión proponiendo a 'Cristo como Rey', cuando la religión es irreformable por ser la antítesis de la libertad.",
    "IdeasSecundarias": [
      "El amor divino y la libertad de los pueblos fueron los motores de la predicación de Savonarola.",
      "Denunció que Alejandro VI no era católico ni cristiano por sus actos de tiranía y crimen.",
      "La diferencia de clases (los Sforzi) frustró su búsqueda del amor por afinidad en la carne."
    ],
    "CitasIneludibles": [
      "Savonarola... fustigaba despiadamente al Pontífice, por la tiranía. Y de Borgia, decía, que no era católico ni cristiano",
      "A la humanidad, sólo dos cosas afligen... la corte de los pontífices y las de los reyes y príncipes"
    ]
  },
  "6582: Párrafo XVI y 6975: Párrafo XVII: La Consumación del Crimen Borgia": {
    "PilotoDeCoherencia": "Relata el trágico fin de Doña Elvira (muerta en calabozo) y Valencia (estuprada por su propio padre, el Papa). La muerte de Juanucho y el dolor de Valencia simbolizan el triunfo de la depravación clerical sobre la inocencia. Trincado afirma que los mandatos de los Papas Borgia siempre llevaban el 'sello de la muerte', destruyendo toda belleza y verdad a su paso.",
    "IdeasSecundarias": [
      "Lucrecia Borgia colaboró en la caída de Valencia por celos ante su hermosura y candidez.",
      "La muerte de los amantes (Juanucho y Valencia) es el testimonio final de la maldad del 'Dios de las religiones'.",
      "El doctor Aducio representa la lealtad que presencia el horror final de la santidad fingida."
    ],
    "CitasIneludibles": [
      "Muerte de la Condesa y Estupro de Valencia... los mandatos de este hombre, tenían siempre el sello de la muerte.",
      "Aducio... fue a palacio arrostrándolo todo... entregaron el cuerpo del desgraciado Juanucho"
    ]
  },
  "7089: Párrafo XVIII y 7398: La Historia como Juez Inapelable": {
    "PilotoDeCoherencia": "Sentencia final sobre los 19 siglos de dominio religioso. La historia es el juez que no permite borrar lo ocurrido. Define a la religión como una 'capa que tapa' la mentira y la aberración, la cual debe ser destruida por las 'cuchilladas de razón' del filósofo espiritualista. Proclama que la Iglesia Católica miente sistemáticamente porque solo la Razón posee la verdad.",
    "IdeasSecundarias": [
      "Lo que fue, no puede ser que no sea: la verdad histórica es inmutable.",
      "La religión no es regenerable porque no es una entidad real, sino un efecto de la ignorancia.",
      "El filósofo usa la razón como fiscal para acusar a la mentira religiosa ante el juicio público."
    ],
    "CitasIneludibles": [
      "La historia es un juez inapelable. Lo que fue, no puede ser que no sea.",
      "la religión... es la capa que tapa a esas dos grandes desgracias... cuchilladas de razón",
      "LA RAZÓN TIENE RAZÓN, LA IGLESIA CATÓLICA MIENTE"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Buscando a Dios (Bloque 3) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Savonarola_Reformador_Frustrado": {
    "palabras_clave": ["savonarola", "reforma", "cristo rey", "florencia", "tiranía", "borgia"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#6305: Párrafo XV: Savonarola y la Lucha contra la Tiranía"],
    "contexto_real": "Ejemplo de valentía individual contra el papado que falló al intentar mantener la estructura religiosa bajo una nueva forma."
  },
  "La_Historia_como_Juez": {
    "palabras_clave": ["historia", "juez", "inapelable", "pasado", "verdad histórica", "fiscal"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#7089: Párrafo XVIII y 7398: La Historia como Juez Inapelable"],
    "contexto_real": "Principio que establece que los hechos del pasado son la prueba definitiva para condenar las injusticias de las instituciones religiosas."
  },
  "Cuchilladas_de_Razon": {
    "palabras_clave": ["razón", "capa", "mentira", "aberración", "filosofía", "desenmascarar"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#7089: Párrafo XVIII y 7398: La Historia como Juez Inapelable"],
    "contexto_real": "Metodología de análisis crítico y lógico que busca destruir los dogmas y falacias de las religiones."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para Buscando a Dios.');
