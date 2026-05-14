const fs = require('fs');
const path = 'F:/trincado/public/data/contents/primer-rayo-de-luz_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "174: Prólogo de la Razón y el Ateísmo Científico": {
    "PilotoDeCoherencia": "Trincado se presenta como un buscador sin prejuicios religiosos, sociales o científicos. Explica que su 'ateísmo' fue en realidad el camino hacia la convicción científica de la verdad de la vida: al no poder negarse a sí mismo, encontró la ley suprema que rige el ser, alejada de la idea dogmática de Dios.",
    "IdeasSecundarias": [
      "No milita en partidos ni sectas; su única herramienta es la razón fundada en lo irrebatible del ser.",
      "El estudio de uno mismo revela todos los instintos y luchas de la creación.",
      "La convicción de la verdad de la vida es un punto de partida científico, no un acto de fe."
    ],
    "CitasIneludibles": [
      "Yo, que no tengo religión; que no milito en ningún partido ni secta",
      "si pudiera caber el ateísmo habría sido el único ateo porque llegué a no creerme a mí mismo",
      "el camino científico de darme la convicción de la verdad de la vida"
    ]
  },
  "238: El Juicio a las Causas y la Hermandad Humana": {
    "PilotoDeCoherencia": "Establece el principio de juzgar la causa y no el efecto. Todos los hombres son hermanos; si un católico o anarquista es 'malo', es por la causa (religión/política) que lo deforma. La misión es destruir la causa errónea para que el efecto pernicioso desaparezca.",
    "IdeasSecundarias": [
      "La distinción entre hombres es artificial y producto de causas externas.",
      "El juicio y sentencia se dirige al sistema de ideas (efecto), no a la esencia del hermano.",
      "El fallo de la razón es inapelable y no reconoce al 'Dios' de los dogmas como autoridad superior."
    ],
    "CitasIneludibles": [
      "Para mí, los hombres, son todos mis hermanos",
      "a destruir la causa voy, para que no exista el efecto",
      "ni Dios levantará mi fallo entendiendo por Dios, lo que los católicos entienden"
    ]
  },
  "367 y 615: ¿Con Moisés o con Darwin? - El Conflicto de la Cultura": {
    "PilotoDeCoherencia": "Analiza el choque irremediable entre el cristianismo dogmático (Moisés) y la cultura moderna/ciencia (Darwin). Trincado sostiene que lo que una vez es, nunca deja de ser, y denuncia la amalgama de 'Jesucristo' como una invención impía que anula la razón.",
    "IdeasSecundarias": [
      "El Génesis bíblico (barro) vs. la Eternidad del mundo y la Ciencia.",
      "Conflicto entre la fe ciega y la libertad de los pueblos; la derrota del cristianismo es necesaria para el progreso de la cultura.",
      "Denuncia la inexistencia histórica de 'Cristo' como persona, distinguiéndolo del Jesús hombre."
    ],
    "CitasIneludibles": [
      "¿Con Moisés o con Darwin?",
      "Lo que una vez no es, nunca puede ser; como lo que una vez es, nunca puede dejar de ser",
      "los católicos... convierten a Jesús en Jesucristo y hacen la amalgama impía"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Primer Rayo de Luz (Bloque 2) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Juicio_a_la_Causa": {
    "palabras_clave": ["causa", "efecto", "destrucción de la causa", "hermandad", "juicio"],
    "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#238: El Juicio a las Causas y la Hermandad Humana"],
    "contexto_real": "Metodología de corrección social: atacar la raíz ideológica (religión, política sectaria) en lugar de condenar al individuo."
  },
  "Moises_vs_Darwin": {
    "palabras_clave": ["Moisés", "Darwin", "creacionismo", "evolucionismo", "ciencia", "dogma"],
    "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#367 y 615: ¿Con Moisés o con Darwin? - El Conflicto de la Cultura"],
    "contexto_real": "Dilema histórico entre la superstición bíblica y la evidencia científica sobre el origen del hombre y el universo."
  },
  "Ateismo_Cientifico_Trincadista": {
    "palabras_clave": ["ateísmo", "razón", "convicción científica", "ser", "verdad de la vida"],
    "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#174: Prólogo de la Razón y el Ateísmo Científico"],
    "contexto_real": "Negación de los dioses antropomórficos para descubrir la ley natural mediante el estudio riguroso de uno mismo."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque 2) para Primer Rayo de Luz.');
