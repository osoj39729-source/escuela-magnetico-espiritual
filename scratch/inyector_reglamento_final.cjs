const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/reglamento-interno_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// RE-DESTILACIÓN PURA 1:1 - Reglamento Interno (Batch 3 - FINAL - Claves 14 a 20)
const nuevosNodos = {
  "014: FIESTAS FIJAS DE LA ESCUELA": {
    "PilotoDeCoherencia": "Ciclo Litúrgico Racional. Se establecen las tres pascuas (Máxima, Grande y de Libertad) para conmemorar hitos del progreso espiritual y el juicio de mayorías, alejándose de las fechas religiosas tradicionales.",
    "CitaInelutable": "PASCUA MAXIMA: Del 1 al 7 de abril inclusives. Se conmemora el aniversario del Juicio de mayoría... PASCUA DE LIBERTAD: 3, 4 Y 5 de diciembre.",
    "EjemploPedagogico": "Un calendario civil donde en lugar de celebrar santos, se celebran hitos como el día de la constitución o el día de la independencia; en la Escuela se celebran los hitos de la libertad del espíritu.",
    "ConexionDoctrinal": ["Pascua Máxima (EMECU)", "Pascua de Libertad", "Juicio de Mayorías"],
    "NodosSimapticos": ["Pascua Máxima (EMECU)", "Pascua de Libertad"]
  },
  "015: PRESENTACIÓN DE NIÑOS": {
    "PilotoDeCoherencia": "Semilla de la Comuna. La presentación de niños es un acto de alta importancia para integrar a las nuevas generaciones en la causa universal, asegurando su educación sin prejuicios.",
    "CitaInelutable": "Deben empeñarse en presentar a la Escuela a cuantos niños puedan, por ser de la más grande importancia para la Gran Causa.",
    "EjemploPedagogico": "Un agricultor que cuida con especial esmero los brotes nuevos del huerto; sabe que de ellos depende la cosecha del próximo año y la supervivencia de la comunidad.",
    "ConexionDoctrinal": ["Presentación de Niños (Axioma)", "Educación Racional"],
    "NodosSimapticos": ["Presentación de Niños (Axioma)"]
  },
  "016: EXTRACTO DE LOS LIBROS DE ESTA ESCUELA": {
    "PilotoDeCoherencia": "Currículo Obligatorio. Se establece el orden estricto de estudio de las obras del Maestro Fundador como requisito para el progreso en los grados de la Escuela.",
    "CitaInelutable": "Extracto de los libros... que todos los adherentes deben tener y estudiar por el orden en que aquí se exponen.",
    "EjemploPedagogico": "Una carrera universitaria donde no puedes cursar el tercer año sin haber aprobado el primero; el orden de los libros garantiza que el conocimiento se construya sobre bases sólidas.",
    "ConexionDoctrinal": ["Orden de Estudio", "Bibliografía Doctrinal"],
    "NodosSimapticos": []
  },
  "017: DEFINE NUESTRA ESCUELA": {
    "PilotoDeCoherencia": "Sabiduría Final. El contenido de 'Conócete a ti mismo' es la respuesta definitiva a las preguntas eternas; no se dirá nada nuevo más allá de lo ya revelado en la doctrina.",
    "CitaInelutable": "Contiene la SABIDURIA para contestar estas preguntas... NADA MAS DE NUEVO SE LE DIRA NI AQUI NI MAS ALLA.",
    "EjemploPedagogico": "Un mapa completo del tesoro; una vez que tienes el mapa que muestra todos los rincones de la isla, no necesitas que te digan nada más, solo te queda caminar y encontrar el cofre.",
    "ConexionDoctrinal": ["Conócete a ti mismo", "Sabiduría Universal"],
    "NodosSimapticos": []
  },
  "018: LO QUE DICEN Y LO QUE DIGO YO": {
    "PilotoDeCoherencia": "Desmitificación. Se refutan las críticas que tildan al espiritismo de ilusión o fantasía, devolviendo el calificativo a quienes viven esclavos de dogmas y miedos imaginarios.",
    "CitaInelutable": "Si los hombres sólo son hombres por su espíritu, ¿somos también otra ilusión?... son ellos los fantásticos, los fantasiosos.",
    "EjemploPedagogico": "Un hombre que usa anteojos para ver la realidad y es criticado por un ciego que dice que ver es una 'ilusión'; el ciego llama fantasía a lo que él no puede percibir por su propia limitación.",
    "ConexionDoctrinal": ["Crítica al Dogma", "Realidad del Espíritu"],
    "NodosSimapticos": []
  },
  "019: FIN DE LA FIESTA": {
    "PilotoDeCoherencia": "Unicidad Doctrinal. Se advierte contra los 'picaflores' que intentan crear 'nuevos espiritismos' mezclando la doctrina de Trincado con errores antiguos; la verdad es una y no admite mixturas.",
    "CitaInelutable": "Quieren proclamar un 'Nuevo Espiritismo Racionalista'... con lo bueno del de Trincado y de otros... la verdad no tiene más que una cara.",
    "EjemploPedagogico": "Intentar mejorar una medicina pura mezclándola con veneno y azúcar; el resultado no es una 'nueva medicina mejorada', sino un brebaje peligroso que pierde su eficacia.",
    "ConexionDoctrinal": ["Pureza Doctrinal", "Picaflores (Crítica)"],
    "NodosSimapticos": []
  },
  "020: NOTA FINAL": {
    "PilotoDeCoherencia": "Sacrificio Fundacional. El Maestro Fundador deja constancia del agotamiento de su patrimonio y salud en favor de la Escuela, demostrando con hechos el axioma de 'Sacrificio es Derecho'.",
    "CitaInelutable": "Además de consumir para la Escuela todo nuestro patrimonio y nuestra persona física... también se consume todo el producto de nuestros libros.",
    "EjemploPedagogico": "Un padre que gasta todos sus ahorros y trabaja horas extras para que sus hijos tengan una educación superior; no lo hace por negocio, sino por el deber de amor hacia el progreso de su descendencia.",
    "ConexionDoctrinal": ["Sacrificio es Derecho", "Maestro Fundador"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Pascua Máxima (EMECU)": {
    "Definición": "Conmemoración del aniversario del Juicio de Mayoría (del 1 al 7 de abril), celebrando el final de la vieja humanidad y el inicio de la era de justicia y libertad para el espíritu en la Tierra.",
    "Contexto": "Reglamento Interno (Fiestas Fijas).",
    "Conexiones": ["Juicio de Mayorías", "Justicia", "Abril"],
    "Obras": ["Reglamento Interno"]
  },
  "Pascua de Libertad": {
    "Definición": "Festividad celebrada los días 3, 4 y 5 de diciembre en la Escuela para conmemorar el natalicio de Jesús y otras efemérides de liberación espiritual, sustituyendo las festividades religiosas de navidad.",
    "Contexto": "Reglamento Interno (Fiestas Fijas).",
    "Conexiones": ["Jesús", "Libertad", "Diciembre"],
    "Obras": ["Reglamento Interno"]
  },
  "Presentación de Niños (Axioma)": {
    "Definición": "Acto solemne y racional en la Escuela donde los padres presentan a sus hijos a la Comuna, simbolizando el compromiso de educarlos en la libertad, la verdad y el trabajo, sin dogmas ni bautismos religiosos.",
    "Contexto": "Reglamento Interno (Sección 15).",
    "Conexiones": ["Educación", "Comuna", "Nuevas Generaciones"],
    "Obras": ["Reglamento Interno"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ ¡OBRA COMPLETADA! Inyectado Batch 3 FINAL de Reglamento Interno (21 nodos 1:1 en total). Orden y Disciplina sellados.');
