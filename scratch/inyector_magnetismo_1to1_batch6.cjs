const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/el-magnetismo-en-su-origen_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - El Magnetismo en su Origen (Batch 6 - FINAL)
const nuevosNodos = {
  "2629: INICIACIÓN Y MÁXIMAS": {
    "PilotoDeCoherencia": "Cierre metodológico. La simple lectura del Método resquebraja la cáscara del alma del discípulo, permitiéndole empezar por donde otras escuelas terminan. Se reafirman los mandatos ('Conócete a ti mismo', 'Ama a tu hermano') y el axioma final que corona la obra: 'En él estaba la Vida y la Vida es la luz de los hombres'.",
    "CitaInelutable": "La lectura de la verdad resquebraja la cáscara del alma para que entre la luz.",
    "EjemploPedagogico": "Es como un huevo: desde afuera parece roca, pero con el calor adecuado (el estudio racional), el cascarón se rompe para dar paso a la vida. El Método es la incubadora.",
    "ConexionDoctrinal": ["Iniciación Magnética", "Mandatos", "Axioma Final"],
    "NodosSimapticos": ["Cáscara del Alma", "Luz de la Vida", "Fin de la Escuela Menor"]
  },
  "2694: ESLABÓN": {
    "PilotoDeCoherencia": "El capítulo puente. Trincado declara que el Método Supremo quedaría incompleto si no demostrara físicamente que el Espiritismo es la raíz del Magnetismo. Este eslabón irrompible sirve de preparación obligatoria para el estudio profundo de la Cosmogonía que vendrá en la obra magna 'El Espiritismo en su Asiento'.",
    "CitaInelutable": "El magnetismo es el eslabón irrompible que ata la ciencia material a la raíz espiritual.",
    "EjemploPedagogico": "Es como la cadena del ancla de un barco: no ves el fondo del mar, pero sabes que el ancla (el Espiritismo) está ahí porque la cadena (el magnetismo) sostiene al barco en la tormenta.",
    "ConexionDoctrinal": ["Eslabón Irrompible", "Preparación Cosmogonía", "Puente a El Espiritismo en su Asiento"],
    "NodosSimapticos": ["Cadena del Ancla", "Tronco y Raíz", "Transición Doctrinal"]
  },
  "2729: LO QUE ABARCA EL ESPIRITISMO": {
    "PilotoDeCoherencia": "Declaración categórica: El Espiritismo lo abarca todo. No hay ciencia, fenómeno, ni grado de vida que escape a sus leyes. Llegará el tiempo en que todos lo reconozcan, lo quieran o no, porque la ley es inexorable. El Maestro advierte que él viene a señalar jalones ('rasgar el crepúsculo') sin entrar en debates menores.",
    "CitaInelutable": "El Espiritismo es todo; la humanidad lo aceptará por amor o por el rodillo de la ley.",
    "EjemploPedagogico": "Es como la ley de gravedad: puedes negarla en un debate filosófico, pero si saltas por la ventana, te estrellas igual. El Espiritismo es la gravedad del Universo.",
    "ConexionDoctrinal": ["Universalidad", "Jalones de Verdad", "Crepúsculo Rasgado"],
    "NodosSimapticos": ["Gravedad del Universo", "Rodillo de la Ley", "Fin de la Incertidumbre"]
  },
  "2872: COMO ES NECIO NEGAR EL ESPIRITISMO": {
    "PilotoDeCoherencia": "La advertencia final contra la cobardía intelectual. El que niega lo que no comprende es necio, pero el que lo niega por cobardía a rasgar su propio crepúsculo (por el qué dirán o por interés material) prefiere la incertidumbre. La ley pasará sobre ellos como un 'inmenso rodillo aplanador' sin oír lamentos.",
    "CitaInelutable": "Negar la verdad por cobardía no detiene al rodillo inexorable del progreso.",
    "EjemploPedagogico": "Es como taparse los ojos en medio de una vía de tren pensando que si no ves la locomotora, no te atropellará. El necio se tapa los ojos; el sabio se aparta de la vía de la ignorancia.",
    "ConexionDoctrinal": ["Necedad", "Cobardía Intelectual", "El Rodillo de la Justicia"],
    "NodosSimapticos": ["Tren del Progreso", "Ojos Vendados", "Justicia Aplanadora"]
  },
  "2986-3011: APÉNDICE CIENTÍFICO FILOSÓFICO (PROCLAMA)": {
    "PilotoDeCoherencia": "La rúbrica cósmica del 'Método Supremo' de la Escuela Magnético-Espiritual de la Comuna Universal. Se condensan las cinco máximas absolutas que sostienen todo el edificio Trincadista: El Universo Solidarizado, El Mundo Comunizado, La Ley Una, La Substancia Una, y la conclusión: 'Todo es Magnetismo Espiritual'.",
    "CitaInelutable": "Todo es Magnetismo Espiritual, porque uno es el principio y uno es el fin.",
    "EjemploPedagogico": "Es la ecuación E=mc² de la doctrina. Cinco axiomas breves que explican desde la caída de una hoja hasta la formación de una galaxia. Es la Cúpula Máxima de la instrucción.",
    "ConexionDoctrinal": ["Cúpula Máxima", "Axiomas Absolutos", "Proclama Universal"],
    "NodosSimapticos": ["Ecuación Trincadista", "Pentagrama Cósmico", "Resumen Supremo"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Eslabón Irrompible": {
    "Definición": "El Magnetismo entendido no como ciencia independiente, sino como la fuerza visible y práctica que ata irrevocablemente la materia con su causa superior: el Espiritismo.",
    "Contexto": "Capítulo Eslabón al final de El Magnetismo en su Origen.",
    "Conexiones": ["Magnetismo", "Espiritismo", "Indivisibilidad"],
    "Obras": ["El Magnetismo en su Origen", "El Espiritismo en su Asiento"]
  },
  "El Rodillo de la Ley": {
    "Definición": "Metáfora que describe la acción implacable e inexorable del progreso universal y la justicia divina, que aplana sin piedad toda oposición dogmática, fanatismo y necedad en su avance.",
    "Contexto": "Última sección explicativa de El Magnetismo en su Origen.",
    "Conexiones": ["Justicia", "Progreso Inexorable", "Ley Divina"],
    "Obras": ["El Magnetismo en su Origen", "Los Cinco Amores"]
  },
  "Cúpula Máxima": {
    "Definición": "La proclamación de los axiomas absolutos de la Escuela que resumen la constitución del Universo: Sustancia Una, Ley Una, Solidaridad Universal y Comunismo Mundial.",
    "Contexto": "Apéndice de El Magnetismo en su Origen.",
    "Conexiones": ["Comuna Universal", "Axiomas", "Solidaridad"],
    "Obras": ["El Magnetismo en su Origen"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 5 nodos 1:1 de El Magnetismo en su Origen (Batch 6 - FINAL) y 3 términos sinápticos.');
