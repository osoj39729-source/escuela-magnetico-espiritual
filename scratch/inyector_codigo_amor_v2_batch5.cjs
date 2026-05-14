const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Código de Amor Universal Tomo 2 (Batch 5 - Claves 60 a 74)
const nuevosNodos = {
  "3513: ARTÍCULO 1º- Con arreglo al Capítulo 7º... Maestro Nato": {
    "PilotoDeCoherencia": "Autoridad Designada. El Maestro Nato no es objeto de elección popular, pues su misión emana directamente del Espíritu de Verdad y el Consejo de Sión para regir bajo leyes universales.",
    "CitaInelutable": "Viene designado por el Espíritu de Verdad... no puede ser electo, ni dispuesto por el pueblo. Su voz es la del Consejo del Padre.",
    "EjemploPedagogico": "Un faro en la costa; los marineros no votan para decidir quién es el faro, sino que todos reconocen su luz porque es la que les guía a puerto seguro.",
    "ConexionDoctrinal": ["Maestro Nato (Designación)", "Gobierno Espiritual"],
    "NodosSimapticos": ["Maestro Nato (Designación)"]
  },
  "3760: ARTÍCULO 1º- Conforme al Art. 31... Pascua de la Verdad": {
    "PilotoDeCoherencia": "Fiesta de la Luz. La Pascua de la Verdad (1-7 de abril) es la fiesta máxima de la Comuna, celebrando la unidad con el Sol y el concierto de los mundos hermanos.",
    "CitaInelutable": "Denominará 'Pascua de la Verdad'... saludarán al astro nuestro centro progenitor, invitando en él a todos los mundos nuestros hermanos.",
    "EjemploPedagogico": "Una semana donde toda la ciudad deja las herramientas y sale a cantar al amanecer, sintiendo que el sol es el corazón de una gran familia de planetas que celebran juntos.",
    "ConexionDoctrinal": ["Pascua de la Verdad (Fiesta Máxima)", "Concierto Universal"],
    "NodosSimapticos": ["Pascua de la Verdad (Fiesta Máxima)"]
  },
  "4266: ARTÍCULO 1º- El tránsito del espíritu encarnado...": {
    "PilotoDeCoherencia": "Liberación Amorosa. El tránsito (muerte) es un acto natural y amoroso que devuelve al espíritu su libertad y conciencia plena, permitiéndole evaluar su progreso.",
    "CitaInelutable": "Acto amoroso de la ley divina y nos restituye a nuestra vida real, en la que el espíritu es consciente de su ser.",
    "EjemploPedagogico": "Un actor que se quita el disfraz después de la función; entra al camerino, se mira al espejo y recuerda quién es realmente, analizando si hizo bien su papel en el escenario.",
    "ConexionDoctrinal": ["Espíritu Liberto (Estado)", "Ley de Tránsito"],
    "NodosSimapticos": ["Espíritu Liberto (Estado)"]
  },
  "4377: ARTÍCULO 1º- Todos los seres, en la Comuna son iguales...": {
    "PilotoDeCoherencia": "Igualdad ante la Tierra. Tras el tránsito, se prohíben mausoleos y distinciones; el cuerpo regresa a la fosa de tierra para cumplir su ley de transformación natural.",
    "CitaInelutable": "Iguales en la sepultura... no tendrán mausoleos, sepulcros o nichos, y serán sepultados los cadáveres en fosa, en tierra.",
    "EjemploPedagogico": "Un jardín donde las hojas que caen se entierran para alimentar las raíces; no se ponen cajas de mármol a las hojas muertas, porque la tierra necesita su energía para crear nuevas flores.",
    "ConexionDoctrinal": ["Justicia de la Materia", "Transformación Natural"],
    "NodosSimapticos": []
  },
  "4765: ARTÍCULO 1º- Que los cantos, himnos y plegarias...": {
    "PilotoDeCoherencia": "Canto de la Cosmogonía. Los himnos de la Comuna son síntesis de la verdad histórica y deben cantarse con alegría y recogimiento, reflejando la gratitud al Creador y al Sol.",
    "CitaInelutable": "Síntesis de la verdad histórica emanada de los archivos de la cosmogonía... música sea expresión de la letra en consonancia con las vibraciones del espíritu.",
    "EjemploPedagogico": "Una canción antigua que cuenta la historia de los abuelos; nadie le cambia las palabras para que los nietos nunca olviden de dónde vienen y a quién le deben la vida.",
    "ConexionDoctrinal": ["Verdad Histórica", "Vibración Espiritual"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Pascua de la Verdad (Fiesta Máxima)": {
    "Definición": "Celebración central del calendario comunal que tiene lugar del 1 al 7 de abril. Es un periodo de solaz, alegría y estudio donde la humanidad agradece la vida, reconoce la paternidad del Sol y estrecha lazos de fraternidad con el resto de los mundos del universo.",
    "Contexto": "Código de Amor Universal Tomo 2 (Capítulo Doce).",
    "Conexiones": ["Fiesta", "Sol", "Unidad Universal"],
    "Obras": ["Código de Amor Universal"]
  },
  "Espíritu Liberto (Estado)": {
    "Definición": "Estado de conciencia que alcanza el ser tras abandonar la materia. Al desencarnar en ley, el espíritu se despoja de los velos de la ignorancia carnal y recupera la memoria de sus existencias anteriores, asumiendo la responsabilidad de sus actos para continuar su ascenso infinito.",
    "Contexto": "Código de Amor Universal Tomo 2 (Capítulo Trece).",
    "Conexiones": ["Tránsito", "Desencarnación", "Conciencia"],
    "Obras": ["Código de Amor Universal", "Conócete a ti mismo"]
  },
  "Maestro Nato (Designación)": {
    "Definición": "Concepto legislativo que define la autoridad del director o guía de la Comuna. A diferencia de los cargos administrativos electos, el Maestro Nato es reconocido por su trayectoria espiritual y su afinidad con el Espíritu de Verdad, actuando como mediador entre el Consejo de Sión y la humanidad.",
    "Contexto": "Código de Amor Universal Tomo 2 (Ley de Elecciones).",
    "Conexiones": ["Autoridad", "Sión", "Espíritu de Verdad"],
    "Obras": ["Código de Amor Universal", "Ley de Amor"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 5 de Código de Amor T2 (5 nodos) y 3 términos sinápticos. Pascua de la Verdad y Tránsito sellados.');
