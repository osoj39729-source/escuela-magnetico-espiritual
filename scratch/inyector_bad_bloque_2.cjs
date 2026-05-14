const fs = require('fs');
const path = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "5205: Párrafo IX: El Espionaje del Pontífice y la Resistencia de Elvira": {
    "PilotoDeCoherencia": "Relata el enfrentamiento moral entre Doña Elvira y Alejandro VI. El Papa utiliza el espionaje y el chantaje (ofreciendo honores mundanos a cambio del silencio) para intentar someter a Elvira y su hija Valencia. La negativa firme de Elvira pone en marcha la maquinaria de persecución del Vaticano, demostrando que para la jerarquía eclesiástica los seres humanos son solo objetos de placer o estorbos legales.",
    "IdeasSecundarias": [
      "Lucrecia Borgia es citada como el modelo de deshonor amparado por el Papa.",
      "El espionaje clerical no respeta la privacidad ni la cortesía, buscando solo la dominación de las conciencias.",
      "La dignidad de la mujer es la única barrera que el Papa Borgia no logra comprar."
    ],
    "CitasIneludibles": [
      "Basta ya, exclamó Doña Elvira... abridme las puertas de palacio si aún os queda un resto de cortesía",
      "seguid a la mujer... antes de la mañana, quiero saber dónde habita."
    ]
  },
  "5577: Párrafo XI: El Martirio de Francisco y la Crueldad Clerical": {
    "PilotoDeCoherencia": "La muerte de Francisco, asesinado tras realizar un acto de misericordia (dar de comer a un hambriento), simboliza la incompatibilidad entre la bondad pura y el sistema papal. Trincado destaca que el Papa se alegra más del éxito de sus crímenes contra los inocentes que de cualquier milagro o victoria política, revelando la esencia maléfica de su mando.",
    "IdeasSecundarias": [
      "El cumplimiento de las obras de misericordia es castigado por la religión cuando amenaza el secreto clerical.",
      "La fatalidad que persigue a los protagonistas es alimentada por la traición y la mentira 'piadosa'.",
      "El inocente es sacrificado sin piedad para cubrir las huellas de la lascivia del Pontífice."
    ],
    "CitasIneludibles": [
      "asesinato refinado del desgraciado Francisco... se ocupó más de ellos que del milagro",
      "No quiera el cielo que nos separemos para siempre. Triste profecía..."
    ]
  },
  "5682: Párrafo XII y 5888: Párrafo XIII: Lujuria como Eje del Poder y Reyes Esclavos": {
    "PilotoDeCoherencia": "Alejandro VI manipula la política europea y pacta con sus enemigos solo para proteger sus pecados personales (bigamia y lujuria). Trincado denuncia la cobardía de los reyes ('pusilanimidad') que, por miedo al dogma, se convierten en siervos de un criminal, permitiendo que la religión sea la potencia mayor que esclaviza al pueblo mediante el concepto de 'Patria' y 'Derecho Divino'.",
    "IdeasSecundarias": [
      "Borgia redobla su tiranía para eliminar a quienes puedan acusarle de sus faltas morales.",
      "La política del Vaticano es una red de mentiras y pactos secretos diseñados para el ocultamiento.",
      "Los reyes sacrifican a sus hermanos esclavos para sostener el derecho divino de sus verdugos sacerdotales."
    ],
    "CitasIneludibles": [
      "El Papa... redoblaba su empeño en quitar las piedras que por su lujuria se había puesto él mismo en su camino",
      "la religión supo desde el principio que mientras hubiera pueblo ignorante allí imperaría ella",
      "¿Tenéis la osadía de presentaros ante nos con las manos vacías?"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Buscando a Dios (Bloque 2) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Lujuria_y_Crimen_Papal": {
    "palabras_clave": ["lujuria", "bigamia", "crimen", "pacto", "ocultamiento", "alejandro vi"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#5682: Párrafo XII y 5888: Párrafo XIII: Lujuria como Eje del Poder y Reyes Esclavos"],
    "contexto_real": "Uso del poder eclesiástico y político para satisfacer vicios personales y eliminar evidencias de inmoralidad."
  },
  "Martirio_de_la_Bondad_Francisco": {
    "palabras_clave": ["francisco", "misericordia", "asesinato", "inocente", "crueldad", "sacrificio"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#5577: Párrafo XI: El Martirio de Francisco y la Crueldad Clerical"],
    "contexto_real": "Ejemplo de cómo la pureza de intención es perseguida por las instituciones que predican falsamente la moral."
  },
  "Pusilanimidad_de_los_Reyes": {
    "palabras_clave": ["reyes", "esclavitud", "patria", "derecho divino", "miedo", "dogma"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#5682: Párrafo XII y 5888: Párrafo XIII: Lujuria como Eje del Poder y Reyes Esclavos"],
    "contexto_real": "Sumisión de los poderes civiles ante el chantaje espiritual y dogmático de la casta sacerdotal."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para Buscando a Dios.');
