const fs = require('fs');
const path = 'F:/trincado/public/data/contents/primer-rayo-de-luz_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "11776 al 11795: La Excomunión del Progreso y la Sentencia Final": {
    "PilotoDeCoherencia": "Analiza el cierre del Syllabus, donde el Papa prohíbe explícitamente que la Iglesia se reconcilie con el progreso, el liberalismo y la civilización moderna. Trincado emite su sentencia basándose en esta 'confesión' de parte: la religión católica es incompatible con la libertad de conciencia y el bienestar social, cerrándose ella misma la puerta a la evolución humana.",
    "IdeasSecundarias": [
      "La Iglesia condena la libertad de culto para extranjeros y el libre pensamiento público.",
      "El Syllabus declara que el catolicismo no puede transigir con la cultura moderna.",
      "La sentencia de Trincado es benigna aun si aplicara la ley del talión, dada la magnitud de los crímenes históricos del dogma."
    ],
    "CitasIneludibles": [
      "sea excomulgado el que diga: El Pontífice Romano puede y debe reconciliarse y transigir con el Progreso",
      "la imposible hermandad de Ciencia y Religión",
      "Vistos: Autos y pruebas con sus mismas letras que tienen el valor de 'confesión'"
    ]
  },
  "11965 y 12060: El Plebiscito Universal y el Juez Supremo": {
    "PilotoDeCoherencia": "Define que el juicio final sobre esta controversia no corresponde a tribunales humanos limitados, sino al Plebiscito Universal de todos los seres de la tierra, sin distinción de raza o clase. En última instancia, el Creador y los espíritus son los únicos jueces supra-humanos. Reitera que el ataque es contra las 'Causas Originales' y no contra las personas.",
    "IdeasSecundarias": [
      "La mayoría de la humanidad (plebiscito) es la que hace la ley en el plano humano.",
      "El juicio no es personal; se ataca a la institución y al dogma que deforma al hombre.",
      "La fe viva son las obras, no las palabras ni la fe ciega exigida por el catolicismo."
    ],
    "CitasIneludibles": [
      "el juez para lo humano es, el plebiscito universal, sin distinción de razas ni clases",
      "no se ha atacado... a nadie individualmente, sino a las causas originales",
      "las obras que es 'fe hecha obras': Fe viva"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Primer Rayo de Luz (Bloque Final) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Plebiscito_Universal": {
    "palabras_clave": ["plebiscito", "voto universal", "mayoría", "juicio de la humanidad", "voto individual"],
    "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#11965 y 12060: El Plebiscito Universal y el Juez Supremo"],
    "contexto_real": "Mecanismo democrático-espiritual para validar la verdad y la justicia por encima de las imposiciones jerárquicas."
  },
  "Incompatibilidad_Ciencia_Religion": {
    "palabras_clave": ["incompatible", "ciencia vs religión", "progreso", "atraso dogmático", "confesión Syllabus"],
    "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#11776 al 11795: La Excomunión del Progreso y la Sentencia Final"],
    "contexto_real": "Realidad histórica y filosófica donde el dogma religioso se opone por definición al avance científico y la libertad de pensamiento."
  },
  "Causas_Originales_vs_Personas": {
    "palabras_clave": ["causas originales", "efecto", "no juzgar personas", "justicia racional", "raíz del mal"],
    "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#11965 y 12060: El Plebiscito Universal y el Juez Supremo"],
    "contexto_real": "Enfoque de la Escuela que busca sanar la sociedad atacando los sistemas de ideas erróneos, manteniendo el respeto fraternal por el individuo."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque Final) para Primer Rayo de Luz.');
