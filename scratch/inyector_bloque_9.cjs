const fs = require('fs');
const path = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "3222: Capítulo Undécimo: MI SITUACIÓN, EL SILLABUS Y CONDENAS A CLÉRIGOS": {
    "PilotoDeCoherencia": "División Estructural.",
    "IdeasSecundarias": [],
    "CitasIneludibles": []
  },
  "3224: Párrafo I: BUSCANDO NUEVOS CAMINOS": {
    "PilotoDeCoherencia": "Trincado abandona toda esperanza de encontrar al Dios Amor en las religiones. Declara que Dios reside en la conciencia, en la naturaleza y en el propio aliento vital. Se declara inmune al miedo a la excomunión o las hogueras, asumiendo la misión de salvar a Jesús del baldón dogmático mediante la verdad desnuda.",
    "IdeasSecundarias": [
      "La humanidad vive en el escepticismo debido al milenario engaño de los sacerdotes.",
      "Para encontrar a Dios basta mirar al firmamento o sentir la propia vida.",
      "La conciencia es la única ley soberana frente a las amenazas del Vaticano."
    ],
    "CitasIneludibles": [
      "Ya no puedo pensar encontrar a mi Dios de Amor en las religiones... me bastaría alentar yo, para ver en mi aliento al Dios todo amor",
      "estoy curado de espanto y no temo que por excomunión me suceda como a Enrique IV"
    ]
  },
  "3272: Párrafo II: MAJANDO LAS GRANZAS": {
    "PilotoDeCoherencia": "Trincado utiliza los propios archivos históricos, bulas y sentencias judiciales para demostrar que la Iglesia Católica es una institución prevaricadora fundada sobre el odio, la avaricia y el crimen. Las pruebas de su maldad no son calumnias, sino realidades registradas en los tribunales civiles y criminales.",
    "IdeasSecundarias": [
      "La prevaricación iniciada en el siglo III por Manuel I es la causa del dolor espiritual de la humanidad.",
      "Las doctrinas originales de Jesús fueron abandonadas por la alianza de intereses clericales.",
      "Majar las granzas significa exponer la basura histórica que la iglesia intenta ocultar."
    ],
    "CitasIneludibles": [
      "Majaré pues las granzas... son la prueba irrebatible de la maldad de la iglesia que he condenado a su destrucción y olvido",
      "sentencias de los tribunales... prueban el odio, pasión y avaricia y los siete pecados capitales de esa prevaricadora iglesia"
    ]
  },
  "3806: Párrafo III: ALGUNAS CAUSAS DE CLÉRIGOS ANTE LA JUSTICIA": {
    "PilotoDeCoherencia": "La autocracia eclesiástica anula la libertad del hombre, exigiendo sumisión absoluta incluso a reyes y jefes de estado. Bajo el pretexto del 'derecho divino', la iglesia ha permitido crímenes, calumnias y vejámenes contra quienes no aceptan sus dogmas, misterios y milagros absurdos.",
    "IdeasSecundarias": [
      "Pío IX es señalado como la encarnación de la impiedad bajo el nombre de Pío.",
      "El sistema católico recompensa con indulgencias a quienes persiguen a los no-católicos.",
      "Se ha cometido lesa humanidad y lesa deidad en nombre de un dios sediento de sangre."
    ],
    "CitasIneludibles": [
      "nadie que no sea clérigo... no puede pensar, hablar ni rascarse la oreja sin permiso de la autoridad eclesiástica",
      "se puede hacer todo, hasta matar, en favor de esa religión y en nombre, nada menos que de su Dios que nunca se ve harto de sangre"
    ]
  },
  "3917: Párrafo IV: HISTORIA INTERESANTE, UN PAPAYPAPÁ QUE HACE RAYA. RODRIGO BORGIA O ALEJANDRO VI": {
    "PilotoDeCoherencia": "La vida de Rodrigo Borgia (Alejandro VI) es la prueba máxima de la depravación papal: engaños matrimoniales, asesinatos de clérigos y uso de venenos para heredar fortunas. Trincado expone cómo la iglesia ha desfigurado la historia para ocultar que sus líderes han sido verdugos de la conciencia humana.",
    "IdeasSecundarias": [
      "Borgia representa el epílogo de la política de maldad iniciada por los fundadores del papado.",
      "La iglesia ha borrado todo lo que podía dar luz a la razón sobre sus crímenes históricos.",
      "El descubrimiento del Dios Amor unificará a la familia humana contra sus antiguos verdugos."
    ],
    "CitasIneludibles": [
      "La iglesia católica, ha barrido y desfigurado, todo lo que podía dar luz a la razón",
      "estos hombres, al saber que vivieron engaños, se volverán contra los verdugos de su conciencia"
    ]
  },
  "4210: Párrafo V: LA CONDESA DE VALLADOLID ESPOSA DE BORGIA.": {
    "PilotoDeCoherencia": "Relato documental del engaño de Rodrigo Borgia a Doña Elvira. Borgia asesinó al sacerdote que los casó y envenenó a su suegro para robar su fortuna, demostrando que la lascivia y el crimen eran las verdaderas leyes que regían al Vaticano en la era de los Borgia.",
    "IdeasSecundarias": [
      "Borgia ocultó su estado eclesiástico para cometer sus fechorías matrimoniales.",
      "El uso del veneno fue una herramienta común de la 'representación de Dios' para el lucro personal.",
      "La tragedia de la familia de Doña Elvira es un ejemplo de lesa humanidad perpetrado por el papado."
    ],
    "CitasIneludibles": [
      "arregló las cosas de modo, que un curilla de una capilla cercana los bendijera, apareciendo en la misma noche el cura destrozado su cuerpo en su propia cama",
      "moría víctima de una enfermedad denunciante del veneno, el padre de Doña Elvira, quedando también en el secreto, pero heredando, Borgia, una cuantiosa fortuna."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de caps. 55-60 actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Criminalidad_Papal": {
    "palabras_clave": ["borgia", "alejandro VI", "veneno", "asesinato", "justicia", "expediente"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#3917: Párrafo IV: HISTORIA INTERESANTE, UN PAPAYPAPÁ QUE HACE RAYA. RODRIGO BORGIA O ALEJANDRO VI", "buscando-a-dios-joaquin-trincado_esencia.json#4210: Párrafo V: LA CONDESA DE VALLADOLID ESPOSA DE BORGIA."],
    "contexto_real": "Historial documentado de crímenes, asesinatos y depravación de los líderes del Vaticano, que desmiente su supuesta santidad o infalibilidad."
  },
  "Conciencia_Libre": {
    "palabras_clave": ["aliento", "naturaleza", "firmamento", "excomunión", "independencia"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#3224: Párrafo I: BUSCANDO NUEVOS CAMINOS"],
    "contexto_real": "Estado de soberanía espiritual donde el hombre encuentra a Dios en su propia vida y razón, sin necesidad de intermediarios religiosos."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado.');
