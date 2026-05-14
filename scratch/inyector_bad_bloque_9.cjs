const fs = require('fs');
const path = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "9827: Párrafo IV: El Viejo Pastor y la Misión de Defensa": {
    "PilotoDeCoherencia": "Joaquín, el 'viejo pastor' y protector espiritual de Trincado, avala la obra y ofrece su cayado (autoridad y defensa) contra los ataques de la religión (el lobo devorador). Identifica a Trincado como la pieza clave codiciada por el error, pero resguardada por la sabiduría de los siglos para entregar la verdad al mundo.",
    "IdeasSecundarias": [
      "El pastor ha custodiado a la familia espiritual desde los tiempos de María y Jesús.",
      "La defensa de la verdad es inquebrantable y no admite rupturas ante la maldad clerical.",
      "El cayado simboliza el poder espiritual que no yerra al proteger la misión del Maestro."
    ],
    "CitasIneludibles": [
      "tú eres la oveja más codiciada del lobo devorador; pero el Padre, es un pastor que sabe lo que cada oveja ha de menester",
      "aquí está mi cayado que es muy duro porque es muy viejo y no se rompe",
      "Joaquín, el viejo pastor."
    ]
  },
  "9882: Párrafo V: Jesuitismo, Luz y el Choque de los Dioses": {
    "PilotoDeCoherencia": "Revelación sobre el origen puro de la visión de Ignacio de Loyola y su posterior corrupción institucional. Trincado (ex-jesuita) anuncia la batalla final entre el 'Dios Amor' y el 'Dios de las Venganzas' (el ídolo religioso). El choque de la luz con las tinieblas provocará la confusión necesaria para que la humanidad desierte de la mentira y abrace la doctrina verdadera.",
    "IdeasSecundarias": [
      "Ignacio copió la verdad fluídica como Moisés, pero sus hijos la dogmatizaron para el predominio.",
      "La verdad actúa como un imán que atraerá a los hombres de buena voluntad hacia la razón.",
      "El asqueroso comercio de los ministros de Dios es el obstáculo final que la luz debe disipar."
    ],
    "CitasIneludibles": [
      "La confusión nacerá, del brusco choque de la luz con las tinieblas... del 'Dios Amor' frente al monstruoso Dios de las venganzas",
      "En mi última existencia, yo, fui un Jesuita, sí. ¿Porqué no son todos como lo fuí yo?",
      "Ignacio copió... la verdad de lo que vio, como Moisés copió la verdad que le fue manifestada"
    ]
  },
  "10196: Párrafo II al 10699: El Juicio Final y el Epílogo de la Razón": {
    "PilotoDeCoherencia": "Convocatoria a juicio de todos los espíritus y hombres de la Tierra por el Espíritu de Verdad. Se establece que el galardón del progreso depende de la obra ejecutada, el trabajo y el amor universal. Trincado concluye que la humanidad ha vivido ciega a la belleza del ser espiritual, prefiriendo la epidermis de las formas sobre la esencia divina del hombre.",
    "IdeasSecundarias": [
      "La cadena dorada del amor une a todas las moradas siderales bajo una sola ley inflexible.",
      "El hombre no se atreve a pasar de la materia por el prejuicio y la falta de conocimiento de sí mismo.",
      "El libro cierra el ciclo de la búsqueda de Dios, dejando sentada la primera piedra de la Comuna Universal."
    ],
    "CitasIneludibles": [
      "vengo... a darle la paz a su alma que tanto necesita... por el trabajo, por la sumisión a la ley... os habéis de elevar",
      "el hombre no se atreve a pasar de [la materia] por el prejuicio",
      "Oculos habent et non videbunt (Tienen ojos y no verán)."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Buscando a Dios (Bloque 9) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Joaquín_el_Viejo_Pastor": {
    "palabras_clave": ["pastor", "joaquín", "cayado", "lobo", "defensa", "protección"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#9827: Párrafo IV: El Viejo Pastor y la Misión de Defensa"],
    "contexto_real": "Figura espiritual de alta jerarquía encargada de la custodia del Maestro y la integridad de la escuela."
  },
  "Jesuitismo_Origen_y_Desvio": {
    "palabras_clave": ["jesuita", "ignacio de loyola", "manresa", "visión", "corrupción", "dogma"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#9882: Párrafo V: Jesuitismo, Luz y el Choque de los Dioses"],
    "contexto_real": "Movimiento que nació de una verdad espiritual pero que fue desviado para fines de dominación y poder clerical."
  },
  "Juicio_de_Espiritus_y_Hombres": {
    "palabras_clave": ["juicio", "espíritu de verdad", "ley de amor", "progreso", "expiación", "galardón"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#10196: Párrafo II al 10699: El Juicio Final y el Epílogo de la Razón"],
    "contexto_real": "Proceso cósmico de evaluación de las obras de cada ser para determinar su siguiente grado de evolución en el universo."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para Buscando a Dios.');
