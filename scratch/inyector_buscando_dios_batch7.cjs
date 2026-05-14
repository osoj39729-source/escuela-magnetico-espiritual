const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// RE-DESTILACIÓN PURA 1:1 - Buscando a Dios (Batch 7 - Claves 3027 a 4210)
const nuevosNodos = {
  "048: Párrafo II: VERDADES MATEMÁTICAS": {
    "PilotoDeCoherencia": "Rigor contra el Dogma. Se aplican verdades matemáticas e históricas para demostrar lo absurdo de los dogmas religiosos que no resisten el análisis de la razón fría.",
    "CitaInelutable": "VERDADES MATEMÁTICAS... frente a las cuales el dogma se deshace como la niebla ante el sol.",
    "EjemploPedagogico": "Intentar sumar 2+2 y que alguien te diga que el resultado es 5 porque 'así lo dice un libro sagrado'; la matemática te da la verdad ineludible, el dogma te pide que cierres los ojos.",
    "ConexionDoctrinal": ["Razón Matemática", "Realidad Objetiva"],
    "NodosSimapticos": []
  },
  "049: Párrafo III: EL CRIMEN DEL SACRAMENTO DE LA EUCARISTIA": {
    "PilotoDeCoherencia": "Antropofagia Simbólica. Se denuncia la eucaristía como un rito que pretende 'comerse a Dios', calificándolo de aberración moral que aleja al hombre de la verdadera comunión espiritual.",
    "CitaInelutable": "EL CRIMEN DEL SACRAMENTO DE LA EUCARISTIA... insulto a la razón y a la majestad del Creador.",
    "EjemploPedagogico": "Un hijo que dice amar a su padre y para 'demostrarlo' decide comerse un trozo de su carne; la escena es de terror, no de amor; el verdadero amor se demuestra siguiendo sus consejos, no ingiriéndolo.",
    "ConexionDoctrinal": ["Eucaristía (Crítica)", "Ritos (Crítica)"],
    "NodosSimapticos": ["Eucaristía (Crítica)"]
  },
  "050: Párrafo IV: PIO IX INFALIBLEMENTE FALIBLE": {
    "PilotoDeCoherencia": "Ironía Histórica. Se analiza la figura de Pío IX y su proclamación de la infalibilidad como el acto supremo de soberbia que selló la caída moral del Vaticano.",
    "CitaInelutable": "PIO IX INFALIBLEMENTE FALIBLE... el hombre que quiso ser Dios y solo fue un tirano.",
    "EjemploPedagogico": "Un capitán que, mientras el barco se hunde, proclama que él es 'incapaz de hundirse'; su declaración no detiene el agua, solo hace que su fracaso sea más ridículo y trágico.",
    "ConexionDoctrinal": ["Infalibilidad Papal", "Pío IX"],
    "NodosSimapticos": []
  },
  "051: Párrafo V: TRISTE FIN DE LA RELIGIÓN CATÓLICA": {
    "PilotoDeCoherencia": "Sentencia Final. Se predice el final de la institución como consecuencia de sus propios crímenes y su alejamiento de la ley de amor universal.",
    "CitaInelutable": "TRISTE FIN DE LA RELIGIÓN CATÓLICA... arrastrada por el lodo de su propia concupiscencia.",
    "EjemploPedagogico": "Un árbol viejo y podrido por dentro que ha vivido de parásitos; cuando llega el viento de la verdad (justicia), el árbol se desploma porque ya no tiene raíces sanas que lo sostengan.",
    "ConexionDoctrinal": ["Fin de las Religiones", "Liquidación"],
    "NodosSimapticos": []
  },
  "052: Capítulo Undécimo: EL SILLABUS Y CONDENAS A CLÉRIGOS": {
    "PilotoDeCoherencia": "Documentación del Error. Trincado usa el Syllabus para mostrar cómo la iglesia condena el progreso, la ciencia y la libertad, autoexcluyéndose de la civilización.",
    "CitaInelutable": "MI SITUACIÓN, EL SILLABUS Y CONDENAS A CLÉRIGOS... la confesión propia de su odio al progreso.",
    "EjemploPedagogico": "Un hombre que publica una lista de todas las cosas que odia: la luz, el aire puro, los libros y la paz; al publicar esa lista (Syllabus), se está definiendo a sí mismo como un enemigo de la vida.",
    "ConexionDoctrinal": ["Syllabus (Contexto)", "Odio al Progreso"],
    "NodosSimapticos": ["Syllabus (Contexto)"]
  },
  "053: Párrafo I: BUSCANDO NUEVOS CAMINOS": {
    "PilotoDeCoherencia": "Renacimiento Espiritual. Ante el fracaso de las religiones, el hombre busca nuevas vías de conocimiento basadas en la experiencia directa y la razón libre.",
    "CitaInelutable": "BUSCANDO NUEVOS CAMINOS... hacia la aurora de la verdad sin velos.",
    "EjemploPedagogico": "Abandonar una carretera cortada por un derrumbe para caminar por el campo; es más difícil, pero es la única forma de llegar a la ciudad cuando el camino oficial ha dejado de existir.",
    "ConexionDoctrinal": ["Libre Estudio", "Nueva Era"],
    "NodosSimapticos": []
  },
  "054: Párrafo II: MAJANDO LAS GRANZAS": {
    "PilotoDeCoherencia": "Separación de la Verdad. Se realiza un trabajo de limpieza doctrinal, separando el grano (verdad) de la paja o granzas (errores y dogmas) acumulados por siglos.",
    "CitaInelutable": "MAJANDO LAS GRANZAS... para que solo quede el trigo limpio de la doctrina.",
    "EjemploPedagogico": "Un campesino que golpea el trigo para soltar la cáscara; el polvo vuela y molesta, pero es necesario para que el pan sea puro y alimente realmente al pueblo.",
    "ConexionDoctrinal": ["Limpieza Doctrinal", "Rigor"],
    "NodosSimapticos": []
  },
  "055: Párrafo III: CAUSAS DE CLÉRIGOS ANTE LA JUSTICIA": {
    "PilotoDeCoherencia": "Justicia Civil. Se exponen casos donde el clero fue juzgado por leyes civiles, demostrando que no están por encima de la responsabilidad común de los hombres.",
    "CitaInelutable": "ALGUNAS CAUSAS DE CLÉRIGOS ANTE LA JUSTICIA... el brazo de la ley llega hasta los altares.",
    "EjemploPedagogico": "Un criminal que se esconde en una iglesia creyendo que el lugar lo hace 'sagrado'; la policía entra y lo detiene porque el crimen no se borra con incienso ni con rezos.",
    "ConexionDoctrinal": ["Justicia Civil", "Responsabilidad"],
    "NodosSimapticos": []
  },
  "056: Párrafo IV: RODRIGO BORGIA (ALEJANDRO VI)": {
    "PilotoDeCoherencia": "Ejemplo de Concupiscencia. El papado de los Borgia se cita como la prueba máxima de que la jerarquía católica es una institución política y viciosa, ajena a todo espíritu santo.",
    "CitaInelutable": "HISTORIA INTERESANTE, UN PAPA Y PAPÁ QUE HACE RAYA. RODRIGO... la vergüenza del trono pontificio.",
    "EjemploPedagogico": "Un lobo que se pone la piel de la oveja reina para devorar a todo el rebaño desde adentro; su 'santidad' es solo una máscara para sus apetitos más bajos.",
    "ConexionDoctrinal": ["Rodrigo Borgia (Alejandro VI)", "Corrupción Papal"],
    "NodosSimapticos": ["Rodrigo Borgia (Alejandro VI)"]
  },
  "057: Párrafo V: LA CONDESA DE VALLADOLID ESPOSA DE BORGIA": {
    "PilotoDeCoherencia": "Realidad Humana del Clero. La existencia de familias y esposas secretas en el papado desmiente el celibato como mandato divino, revelándolo como una hipocresía institucional.",
    "CitaInelutable": "LA CONDESA DE VALLADOLID ESPOSA DE BORGIA... la vida privada que desmiente el dogma público.",
    "EjemploPedagogico": "Un hombre que predica el ayuno absoluto mientras tiene una despensa secreta llena de manjares; su prédica es una mentira diseñada para que los demás pasen hambre mientras él se sacia.",
    "ConexionDoctrinal": ["Celibato (Crítica)", "Hipocresía"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Eucaristía (Crítica)": {
    "Definición": "Sacramento católico denunciado por Trincado como un rito antropofágico y una aberración racional. Sostiene que la verdadera comunión es el cumplimiento de la ley de amor y no la ingestión simbólica de un cuerpo divino.",
    "Contexto": "Buscando a Dios (Capítulo Décimo).",
    "Conexiones": ["Rito", "Aberración", "Sacramento"],
    "Obras": ["Buscando a Dios"]
  },
  "Syllabus (Contexto)": {
    "Definición": "Documento papal de Pío IX (1864) que lista los 'errores' del mundo moderno (liberalismo, ciencia, libertad de culto). Trincado lo utiliza como prueba documental del odio de la iglesia hacia el progreso humano.",
    "Contexto": "Buscando a Dios (Capítulo Undécimo).",
    "Conexiones": ["Pío IX", "Progreso", "Condena"],
    "Obras": ["Buscando a Dios"]
  },
  "Rodrigo Borgia (Alejandro VI)": {
    "Definición": "Papa de origen español cuya vida disoluta, ambición y familia (los Borgia) son citados por Trincado para demostrar la naturaleza puramente política y corrupta de la institución vaticana.",
    "Contexto": "Buscando a Dios (Capítulo Undécimo).",
    "Conexiones": ["Concupiscencia", "Papado", "Historia"],
    "Obras": ["Buscando a Dios"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 7 de Buscando a Dios (10 nodos 1:1) y 3 términos sinápticos. Borgia y Eucaristía sellados.');
