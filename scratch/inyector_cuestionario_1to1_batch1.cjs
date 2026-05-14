const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/cuestionario-espirita-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

// Initialize files if they don't exist
if (!fs.existsSync(esenciaPath)) {
    fs.writeFileSync(esenciaPath, JSON.stringify({}, null, 2), 'utf8');
}
if (!fs.existsSync(dicPath)) {
    fs.writeFileSync(dicPath, JSON.stringify({}, null, 2), 'utf8');
}

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Cuestionario Espírita Racional (Batch 1 - Preguntas 1 a 17)
const nuevosNodos = {
  "3: Pregunta 1: ¿Cómo se llama nuestra Escuela?": {
    "PilotoDeCoherencia": "Se establece la identidad oficial de la institución. No es una religión ni una secta, es la Escuela Magnético-Espiritual de la Comuna Universal.",
    "CitaInelutable": "Escuela Magnético-Espiritual de la Comuna Universal.",
    "EjemploPedagogico": "El nombre mismo es un programa: 'Magnético' (la fuerza material), 'Espiritual' (la causa directriz) y 'Comuna Universal' (el objetivo social).",
    "ConexionDoctrinal": ["Identidad Institucional", "Nombre Oficial"],
    "NodosSimapticos": ["E.M.E. de la C.U.", "Programa en el Nombre"]
  },
  "22: Pregunta 2: ¿Quién es su fundador?": {
    "PilotoDeCoherencia": "Reconocimiento explícito de la autoría terrenal de la Escuela en la figura del Maestro Joaquín Trincado.",
    "CitaInelutable": "El Maestro Joaquín Trincado.",
    "EjemploPedagogico": "Así como la relatividad tiene a Einstein, el Espiritismo Racional sistematizado tiene a Joaquín Trincado.",
    "ConexionDoctrinal": ["Fundador", "Autoría"],
    "NodosSimapticos": ["Joaquín Trincado", "Sistematizador"]
  },
  "33: Pregunta 3: ¿Cómo se prueba que es el Maestro?": {
    "PilotoDeCoherencia": "La prueba de la maestría no radica en milagros ni dogmas, sino en sus obras escritas (libros y axiomas) que han fundado Cátedras y Colonias en todo el mundo. La obra material y doctrinaria es la única prueba aceptada por la razón.",
    "CitaInelutable": "Con los libros y axiomas que ha llevado a todo el mundo.",
    "EjemploPedagogico": "Es como probar que alguien es arquitecto mostrándole los edificios que construyó, no con promesas invisibles. Los libros son los edificios del Maestro.",
    "ConexionDoctrinal": ["Prueba de Maestría", "Obras Escritas", "Axiomas"],
    "NodosSimapticos": ["Edificios del Maestro", "Prueba por Obras"]
  },
  "48: Pregunta 4: ¿Cómo hombre se diferencia de nosotros?": {
    "PilotoDeCoherencia": "Afirmación rotunda de la igualdad sustancial. Como hombre no se diferencia en absoluto, porque la ley y la sustancia son únicas. Se rechaza cualquier idolatría o divinización del Maestro; solo se le debe amor y respeto por su sabiduría.",
    "CitaInelutable": "Como hombre no se diferencia de los demás; como Maestro, le debemos amor y respeto.",
    "EjemploPedagogico": "Un profesor universitario está hecho de la misma carne que el alumno de primer año; no es un dios, es un hermano mayor que ya estudió la lección.",
    "ConexionDoctrinal": ["Igualdad Humana", "Rechazo de Idolatría", "Hermano Mayor"],
    "NodosSimapticos": ["Profesor vs Dios", "Misma Sustancia", "Fin del Fanatismo"]
  },
  "64: Pregunta 5: ¿Qué fines persigue nuestra Escuela?": {
    "PilotoDeCoherencia": "El objetivo final y absoluto de la Escuela: la implantación de la fraternidad universal mediante el sistema político-espiritual de la Comuna de Amor y Ley.",
    "CitaInelutable": "La implantación de la fraternidad universal en la Comuna de Amor y Ley.",
    "EjemploPedagogico": "El fin no es adorar espíritus, el fin es arreglar la tierra para que la humanidad viva como una sola familia sin fronteras ni propiedad privada egoísta.",
    "ConexionDoctrinal": ["Fines de la Escuela", "Fraternidad Universal", "Comuna"],
    "NodosSimapticos": ["Fin Político-Espiritual", "Humanidad en Familia"]
  },
  "78: Pregunta 6: ¿Qué se entiende por La Comuna?": {
    "PilotoDeCoherencia": "Definición exacta de la Comuna: no es un régimen de terror ni imposición, sino la fraternización total de la humanidad viviendo 'cual si fuera una sola familia'.",
    "CitaInelutable": "La Comuna es la fraternización de toda la humanidad, cual si fuera una sola familia.",
    "EjemploPedagogico": "Es como una casa gigante donde todos los hermanos trabajan según su capacidad y consumen según su necesidad, sin que nadie explote a nadie.",
    "ConexionDoctrinal": ["Comuna de Amor y Ley", "Familia Humana"],
    "NodosSimapticos": ["Casa Gigante", "Fraternización"]
  },
  "93: Pregunta 7: Beneficios inmediatos de la Comuna": {
    "PilotoDeCoherencia": "El mayor beneficio inmediato de instaurar la Comuna no es místico, es supremamente material y vital: la abolición total y definitiva de todas las guerras, descritas como la 'vergüenza de la humanidad'.",
    "CitaInelutable": "El mayor beneficio será la abolición total de todas las guerras, vergüenza de la humanidad.",
    "EjemploPedagogico": "Al borrar las fronteras y el 'tuyo y mío', se elimina el motivo por el que los hombres se matan. Sin fronteras ni dinero, la guerra pierde su motor.",
    "ConexionDoctrinal": ["Abolición de Guerras", "Beneficio Material", "Vergüenza Humana"],
    "NodosSimapticos": ["Fin de las Guerras", "Sin Motor de Conflicto"]
  },
  "111: Preguntas 8-9: ¿Por qué Espiritistas Racionalistas?": {
    "PilotoDeCoherencia": "Se define el nombre de los adeptos. Se llaman 'Espiritistas' porque practican el 'Espiritismo Luz y Verdad' y 'Racionalistas' porque la base del estudio es la Filosofía, y Filosofía significa y es Razonar.",
    "CitaInelutable": "Porque practican el Espiritismo Luz y Verdad que es Filosofía; y Filosofía es Razonar.",
    "EjemploPedagogico": "Un espiritista sin razón es un fanático. El adepto de la Escuela une la causa (espíritu) con el método (razón).",
    "ConexionDoctrinal": ["Racionalismo", "Filosofía como Razón"],
    "NodosSimapticos": ["Método Racional", "Espiritista Pensante"]
  },
  "136: Preguntas 10-11: ¿El Espiritismo es religión?": {
    "PilotoDeCoherencia": "Axioma central de separación: El Espiritismo NO es religión. Como es filosofía y razón, no puede amoldarse a la fe ciega ni a los dogmas. Su naturaleza rechaza cualquier amalgama con la falacia (engaño, fraude, mentira) de los cultos.",
    "CitaInelutable": "El Espiritismo, siendo Filosofía, es razón... y no puede amalgamarse con nada que sea falacia.",
    "EjemploPedagogico": "Es como intentar mezclar agua pura (razón) con aceite quemado (dogma religioso). El Espiritismo repudia la mezcla porque su fin es la limpieza total.",
    "ConexionDoctrinal": ["Antagonismo Religión-Espiritismo", "Rechazo de Falacias", "Razón contra Fe"],
    "NodosSimapticos": ["Agua y Aceite", "Imposibilidad de Amalgama"]
  },
  "167: Preguntas 12-14: El Espiritualismo y la Amalgama": {
    "PilotoDeCoherencia": "Existe un solo Espiritismo (Luz y Verdad). Los centros que mezclan religión y fenómenos no son espiritistas, son 'espiritualistas'. Esta amalgama es altamente perjudicial porque sume al hombre en la duda, el estancamiento y la superstición, traicionando el propósito racional del estudio.",
    "CitaInelutable": "Hay un solo Espiritismo... Los centros que practican espiritismo y religión se llaman espiritualistas.",
    "EjemploPedagogico": "El espiritualismo es un lobo religioso disfrazado con piel de espiritismo. Al final, siempre te muerde con un dogma.",
    "ConexionDoctrinal": ["Espiritualismo", "Peligro de la Amalgama", "Unicidad del Espiritismo"],
    "NodosSimapticos": ["Lobo Disfrazado", "Piel de Espiritismo", "Veneno Mezclado"]
  },
  "213: Preguntas 15-16: ¿Cómo conocer los centros espiritualistas?": {
    "PilotoDeCoherencia": "Las religiones apoyan tácitamente al espiritualismo para desviar a los hombres del verdadero Espiritismo (que es solidaridad universal). La regla para identificarlos sin siquiera entrar es simple: si hablan de santos, caridad (limosna), curaciones milagrosas, agorerías o adivinanzas, NO es Espiritismo.",
    "CitaInelutable": "Basta que os hablen de santos, caridad, curaciones o agorerías, para estar seguro que eso es todo, menos espiritismo.",
    "EjemploPedagogico": "Es el detector de fraudes de la Escuela: si ves una estampita, una vela o escuchas promesas de curaciones mágicas, sal de ahí, es un negocio religioso, no una Cátedra.",
    "ConexionDoctrinal": ["Detector de Espiritualismo", "Rechazo de Supersticiones", "Caridad vs Solidaridad"],
    "NodosSimapticos": ["Detector de Fraude", "Santos y Agoreros", "Negocio Religioso"]
  },
  "246: Pregunta 17: ¿Creencia en dioses religiosos?": {
    "PilotoDeCoherencia": "La postura teológica de la Escuela. Se repudian y niegan enérgicamente todos los 'dioses religiosos' (castigadores, antropomórficos, partidistas). El espiritista solo concibe al Padre Creador como causa suprema manifestada en todas las cosas y mundos del Universo infinito.",
    "CitaInelutable": "No creemos en ningún dios religioso; pero creemos en el Padre Creador, manifestado en el Universo.",
    "EjemploPedagogico": "El dios religioso es un abuelo enojado sentado en una nube; el Creador racionalista es la fuerza de la Vida palpitando en cada átomo y galaxia.",
    "ConexionDoctrinal": ["Rechazo a Dioses Religiosos", "Concepto de Creador", "Panteísmo Trincadista"],
    "NodosSimapticos": ["Fuerza de Vida", "Abuelo Enojado", "Falso Dios"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Diccionario Sináptico
const terminosDic = {
  "Espiritismo Racionalista": {
    "Definición": "Práctica del 'Espiritismo Luz y Verdad' mediante el uso estricto de la Filosofía, la cual exige razonar cada principio, repudiando la fe ciega y el dogma.",
    "Contexto": "Preguntas 8 y 9 del Cuestionario Espírita Racional.",
    "Conexiones": ["Filosofía", "Razón", "Espiritismo Luz y Verdad"],
    "Obras": ["Cuestionario Espírita Racional"]
  },
  "Detector de Espiritualismo": {
    "Definición": "Regla heurística de la Escuela para identificar sectas amalgamas: la presencia de santos, adivinanzas, promesas de curación física o 'caridad' indica que el centro es religioso-espiritualista, no racionalista.",
    "Contexto": "Pregunta 16 del Cuestionario Espírita Racional.",
    "Conexiones": ["Amalgama", "Espiritualismo", "Superstición"],
    "Obras": ["Cuestionario Espírita Racional", "El Espiritismo Estudiado"]
  },
  "Dios Religioso vs Creador": {
    "Definición": "Diferenciación doctrinaria. El Espiritismo rechaza a los dioses antropomórficos y castigadores de las religiones, concibiendo únicamente a un Padre Creador Universal como fuerza motriz manifiesta en toda la Creación.",
    "Contexto": "Pregunta 17 del Cuestionario Espírita Racional.",
    "Conexiones": ["Ateísmo Religioso", "Creador", "Universo"],
    "Obras": ["Cuestionario Espírita Racional", "Buscando a Dios"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 12 nodos 1:1 (Preguntas 1-17 combinadas racionalmente) de Cuestionario Espírita Racional y 3 términos sinápticos.');
