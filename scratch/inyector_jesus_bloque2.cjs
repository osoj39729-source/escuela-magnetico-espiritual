const fs = require('fs');
const path = 'F:/trincado/public/data/contents/jes-s-hombre-y-no-dios_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "767 al 940: Juan el Solitario: La Voz de la Justicia": {
    "PilotoDeCoherencia": "Presenta a Juan (Elías) como el genio de la verdad dura y condiscípulo de Saulo en la escuela de Gamaliel. Define su misión como la roturación del terreno mediante la denuncia de las 'víboras' (supremacías). Establece que el bautismo fue una herramienta política de higiene aprovechada para la prédica, y no un rito místico.",
    "IdeasSecundarias": [
      "Juan no conocía a Jesús en la carne al inicio, pero estaban unidos por la Ley Suprema y el espíritu de misión.",
      "La religión ocultó la formación académica de Juan para mantener el mito del 'iluminado' salvaje.",
      "Juan entrega su herencia (discípulos) a Jesús en la prisión, ordenándole 'darse prisa' en la siembra."
    ],
    "CitasIneludibles": [
      "Juan no es filósofo: es el genio de la verdad dura y desnuda.",
      "¿quién os enseñó a temer... Raza de víboras?",
      "Juan fue el precursor de Jesús... concordando ambos en sus doctrinas."
    ]
  },
  "941 al 1072: La Estrategia del 'Hijo de Dios'": {
    "PilotoDeCoherencia": "Explica que Jesús adoptó el título de 'Hijo de Dios' por consejo de Juan para prolongar su vida y darse autoridad ante las masas ignorantes. Define este título como un derecho de filiación por obras y cumplimiento de la ley, accesible a todo hombre consciente. Desmiente la divinidad como una invención de la fe ciega.",
    "IdeasSecundarias": [
      "La persecución de los sacerdotes se basaba en el odio al principio de igualdad y la pérdida de sus privilegios.",
      "Los 'milagros' son efectos naturales de causas naturales (Magnetismo, Psiquismo y Botánica).",
      "La fe de luz (investigar, palpar) es la única que honra al Creador; la fe ciega es la herramienta del tirano."
    ],
    "CitasIneludibles": [
      "Jesús... se proclama 'hijo de Dios', para tener mayor autoridad.",
      "el único milagro que existe es la ignorancia.",
      "comprobar, palpar lo que uno debe saber y creer... fe de luz."
    ]
  },
  "501 al 766: El Intento de Domesticación: Magdalena y Caná": {
    "PilotoDeCoherencia": "Revela que las Bodas de Caná fueron una trama familiar para casar a Jesús con María de Magdala y detener su vida nómada revolucionaria. Jesús rechaza el matrimonio y el vino material, estableciendo que su misión no admite las cadenas del hogar egoísta. Define a Magdalena como una mujer noble y terna que amó al hombre y no al ídolo.",
    "IdeasSecundarias": [
      "María de Magdala no fue prostituta, sino una mujer rica y bella que buscaba proteger la vida de Jesús.",
      "El 'milagro del vino' fue un comentario irónico de Jesús sobre la capacidad de la gente de consumir lo material.",
      "Jesús reconoció a Magdalena como la única que penetró en su realidad de hombre con virtudes y defectos."
    ],
    "CitasIneludibles": [
      "No es prudente mi estancia entre esta gente, capaz de consumir el agua... si se convirtiera en vino.",
      "Magdalena... ofreciendo su amor para la seguridad de su vida.",
      "Jesús, hombre con defectos y virtudes como todos los hombres."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Bloque 2 de Jesús Hombre y no Dios inyectado.');
