const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Código de Amor Universal Tomo 2 (Batch 6 - FINAL - Claves 60 a 73)
const nuevosNodos = {
  "3396: Prefacio (Maestro Nato)": {
    "PilotoDeCoherencia": "Evolución Social. La sociedad ha pasado por todas las fases de gobierno, pero se esclavizó al nacer el sacerdocio y la supremacía. La Comuna es el retorno a la libertad.",
    "CitaInelutable": "Desde que el hombre llegó a formar tribu y ciudad haciendo nacer el sacerdocio... se esclavizó.",
    "EjemploPedagogico": "Un niño que juega libre hasta que alguien le impone reglas injustas para quedarse con sus juguetes; la Comuna es el momento en que el niño recupera sus juguetes y la paz.",
    "ConexionDoctrinal": ["Evolución Social", "Libertad"],
    "NodosSimapticos": []
  },
  "3677: CAPÍTULO DOCE: LEY DE FIESTAS UNIVERSALES Y MÁXIMA": {
    "PilotoDeCoherencia": "Alegría del Espíritu. Las fiestas son la demostración de la tranquilidad de conciencia y alegría general, necesarias para el solaz del espíritu.",
    "CitaInelutable": "Los sentimientos del corazón... se demuestran en las grandes fiestas de los pueblos.",
    "EjemploPedagogico": "El descanso después de una cosecha exitosa donde todos bailan y ríen juntos bajo las estrellas.",
    "ConexionDoctrinal": ["Solaz Espiritual", "Pascua de la Verdad"],
    "NodosSimapticos": []
  },
  "4027: CAPÍTULO TRECE: LEY DE TRANSITO DE LOS SERES": {
    "PilotoDeCoherencia": "Naturalidad del Tránsito. La desencarnación es un acto natural de la ley divina; el horror ante la muerte es fruto de la ignorancia acumulada por siglos.",
    "CitaInelutable": "Acto natural de la ley divina... no han bastado a la humanidad todos los siglos... repitiéndose en todos los segundos.",
    "EjemploPedagogico": "Alguien que tiene miedo de cruzar una puerta a una habitación iluminada solo porque ha vivido siempre en la penumbra.",
    "ConexionDoctrinal": ["Desencarnación", "Ley de Tránsito"],
    "NodosSimapticos": []
  },
  "4336: CAPÍTULO CATORCE: LEY DESPUÉS DEL TRÁNSITO DE LOS SERES": {
    "PilotoDeCoherencia": "Dignidad de la Materia. La materia que sirvió al espíritu tiene derechos y leyes de transformación que la Comuna debe respetar con justicia.",
    "CitaInelutable": "La materia también tiene derecho y ley... ha prestado las energías que tomó del lagar infinito.",
    "EjemploPedagogico": "Tratar con respeto la herramienta que te permitió construir tu casa, devolviéndola al almacén limpia y lista para ser fundida en algo nuevo.",
    "ConexionDoctrinal": ["Justicia de la Materia", "Transformación"],
    "NodosSimapticos": []
  },
  "4422: CAPÍTULO QUINCE: DECRETO (Tránsito)": {
    "PilotoDeCoherencia": "Consuelo Consciente. Se deben dar consideraciones y consuelo al transitante, hablándole con lucidez sobre la justicia y el progreso del espíritu.",
    "CitaInelutable": "Dar toda clase de consuelos al transitante por ser un acto natural de necesidad y de justicia.",
    "EjemploPedagogico": "Despedir a un viajero en la estación con palabras de ánimo y recordándole lo mucho que aprenderá en su destino.",
    "ConexionDoctrinal": ["Consuelo Espiritual", "Justicia"],
    "NodosSimapticos": []
  },
  "4756: CAPÍTULO DIECISÉIS: PAUTA HISTÓRICA PARA HIMNOS Y CANTOS": {
    "PilotoDeCoherencia": "Síntesis de la Verdad. Los himnos y cantos son la expresión de gratitud a la cosmogonía y al Creador, basados en los archivos de la verdad histórica.",
    "CitaInelutable": "Síntesis de la verdad histórica emanada de los archivos de la cosmogonía.",
    "EjemploPedagogico": "Un libro de historia que se canta para que la memoria del corazón nunca olvide los sacrificios de los antepasados.",
    "ConexionDoctrinal": ["Himno del Vencedor", "Cosmogonía"],
    "NodosSimapticos": []
  },
  "4765: ARTÍCULO 1º- Que los cantos... (FINAL)": {
    "PilotoDeCoherencia": "Ley de Amor y Sentencia. El libro culmina con la pauta para los cantos de amor, la solidaridad y el Acta del Juicio Final, sellando el contrato de Abraham.",
    "CitaInelutable": "El amor de la carne es base del amor espiritual... Acta del Juicio Final es el documento preciado.",
    "EjemploPedagogico": "La firma de una escritura de propiedad colectiva que garantiza que la tierra es de todos los hijos para siempre.",
    "ConexionDoctrinal": ["Acta del Juicio Final", "Testamento de Abraham", "Ley de Amor"],
    "NodosSimapticos": ["Acta del Juicio Final", "Testamento de Abraham"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Acta del Juicio Final (Documento)": {
    "Definición": "Documento histórico y espiritual redactado el 5 de abril de 1912 por el Maestro Joaquín Trincado. Decreta la entrada de la Tierra a la luz, el desalojo de las sombras y el inicio de la Era de la Comuna Universal bajo la Ley de Amor.",
    "Contexto": "Código de Amor Universal Tomo 2 (Capítulo Dieciséis).",
    "Conexiones": ["Juicio Final", "Anticristo", "Nueva Era"],
    "Obras": ["Código de Amor Universal", "Filosofía Universal"]
  },
  "Himno del Vencedor (Axioma)": {
    "Definición": "Síntesis lírica y pedagógica que narra la epopeya del espíritu desde su origen en el centro creador hasta su triunfo sobre las pasiones y la ignorancia en el mundo de expiación. Es el canto de victoria de la humanidad consciente.",
    "Contexto": "Código de Amor Universal Tomo 2 (Pauta de Cantos).",
    "Conexiones": ["Progreso", "Evolución", "Gratitud"],
    "Obras": ["Código de Amor Universal"]
  },
  "Justicia de la Materia (Principio)": {
    "Definición": "Reconocimiento de los derechos de la materia física como herramienta del espíritu. Establece que el cuerpo, tras el tránsito, debe ser reintegrado a la tierra con dignidad y sencillez para facilitar sus ciclos naturales de transformación energética.",
    "Contexto": "Código de Amor Universal Tomo 2 (Capítulo Catorce).",
    "Conexiones": ["Tránsito", "Transformación", "Igualdad"],
    "Obras": ["Código de Amor Universal", "Profilaxis de la Vida"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ ¡OBRA COMPLETADA! Inyectado Batch 6 FINAL de Código de Amor T2. Acta del Juicio Final y Justicia de la Materia sellados.');
