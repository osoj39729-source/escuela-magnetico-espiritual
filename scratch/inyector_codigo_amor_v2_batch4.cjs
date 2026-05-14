const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Código de Amor Universal Tomo 2 (Batch 4 - Claves 45 a 59)
const nuevosNodos = {
  "1810: ARTÍCULO 1º - Los desposados bajo este Código...": {
    "PilotoDeCoherencia": "Herencia Comunal. El matrimonio bajo el Código establece la herencia mutua y reconoce al Maestro Nato como heredero universal para facilitar la transición al régimen de comunización.",
    "CitaInelutable": "Confirmado y sellado por el Espíritu de Verdad en nombre del Padre el gran Eloí... se heredan mutuamente... y de todos el Maestro Nato.",
    "EjemploPedagogico": "Una pareja que une sus libros en una sola biblioteca; cuando ellos ya no estén, esa biblioteca pasará a ser de todos los niños de la aldea, bajo el cuidado del maestro.",
    "ConexionDoctrinal": ["Comunización de Bienes", "Maestro Nato"],
    "NodosSimapticos": []
  },
  "2049: ARTÍCULO 1º - Componen el Consejo de Higiene...": {
    "PilotoDeCoherencia": "Fisiocracia Integral. La higiene comunal se basa en el conocimiento de las leyes naturales (botánica, física, química) e integra las facultades psíquicas como herramientas de diagnóstico.",
    "CitaInelutable": "Comprendidas en la fisiocracia (conocimiento del poder de la naturaleza) y la fisiología.",
    "EjemploPedagogico": "Un médico que no solo mira el cuerpo, sino que entiende cómo el sol, las plantas y el magnetismo de la tierra trabajan juntos para sanar al ser.",
    "ConexionDoctrinal": ["Fisiocracia (Doctrinal)", "Salud Comunal"],
    "NodosSimapticos": ["Fisiocracia (Doctrinal)"]
  },
  "3007: ARTÍCULO 1º- Hasta nuevo Decreto, queda archivado...": {
    "PilotoDeCoherencia": "Soberanía sobre el Psiquismo. Se decreta el archivo de las facultades medianímicas para evitar el caos y la explotación, estableciendo la responsabilidad de los guías espirituales.",
    "CitaInelutable": "Quedan archivadas y suspendidas las facultades medianímicas y se hace responsable a los Guías, Protectores y familiares.",
    "EjemploPedagogico": "Un laboratorio delicado que se cierra bajo llave hasta que los científicos aprendan a usar los químicos sin causar explosiones; la llave la tiene el juez de la comuna.",
    "ConexionDoctrinal": ["Laudo de Suspensión (1930)", "Disciplina Espiritual"],
    "NodosSimapticos": ["Laudo de Suspensión (1930)"]
  },
  "3130: ARTÍCULO 1º- Todos los seres del mundo Tierra...": {
    "PilotoDeCoherencia": "Fraternidad Universal. La humanidad es una sola sociedad sin fronteras; el derecho al usufructo es igual para todos y el deber del trabajo es ineludible en cualquier continente.",
    "CitaInelutable": "Son una sola sociedad fraternal comunal. Nadie en todo el mundo es extranjero en ninguna parte.",
    "EjemploPedagogico": "Un hombre nacido en el norte que viaja al sur; en todas las casas encuentra una cama y comida si está dispuesto a trabajar en la huerta del vecino, porque la tierra es de todos.",
    "ConexionDoctrinal": ["Justicia Comunal", "Ciudadanía Universal"],
    "NodosSimapticos": []
  },
  "3321: Consejos. ART. 36º - La Ley es una...": {
    "PilotoDeCoherencia": "Unidad Lingüística. La armonía universal exige un solo idioma para la Tierra, eliminando la discordancia y permitiendo el concierto con otros mundos del infinito.",
    "CitaInelutable": "Uno solo puede ser el idioma... la Tierra que está en ese concierto, no puede ser la nota discordante.",
    "EjemploPedagogico": "Una orquesta donde cada músico toca en una tonalidad distinta produce ruido; cuando todos afinan en la misma nota, la música se escucha en todo el teatro del cosmos.",
    "ConexionDoctrinal": ["Idioma Único (Axioma)", "Concierto Universal"],
    "NodosSimapticos": ["Idioma Único (Axioma)"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Fisiocracia (Doctrinal)": {
    "Definición": "Ciencia del gobierno de la salud basada en el conocimiento profundo de las fuerzas naturales. En la Comuna, la fisiocracia integra la medicina física con el magnetismo y el conocimiento del alma para mantener el equilibrio perfecto del Hombre Trino.",
    "Contexto": "Código de Amor Universal Tomo 2 (Consejo de Higiene).",
    "Conexiones": ["Higiene", "Leyes Naturales", "Salud"],
    "Obras": ["Código de Amor Universal", "Profilaxis de la Vida"]
  },
  "Laudo de Suspensión (1930)": {
    "Definición": "Sentencia legislativa dictada por el Maestro Joaquín Trincado que archiva el ejercicio público de la mediumnidad. Su objetivo es erradicar el fanatismo, el mercantilismo y la confusión espiritual, exigiendo que la comunicación con el más allá sea estrictamente para el estudio y bajo el control de la Escuela.",
    "Contexto": "Código de Amor Universal Tomo 2 (Ley de las Mediumnidades).",
    "Conexiones": ["Mediumnidad", "Disciplina", "Justicia"],
    "Obras": ["Código de Amor Universal"]
  },
  "Idioma Único (Axioma)": {
    "Definición": "Imperativo de unidad comunicativa para la humanidad. Establece que la multiplicidad de lenguas es una barrera para el progreso y la fraternidad, y que el establecimiento de un solo idioma es requisito para que la Tierra entre en el concierto consciente de mundos del universo.",
    "Contexto": "Código de Amor Universal Tomo 2 (Capítulo Diez).",
    "Conexiones": ["Unidad", "Concierto Universal", "Fraternidad"],
    "Obras": ["Código de Amor Universal"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 4 de Código de Amor T2 (5 nodos) y 3 términos sinápticos. Laudo de 1930 e Idioma Único sellados.');
