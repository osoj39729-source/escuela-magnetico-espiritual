const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Código de Amor Universal Tomo 1 (Batch 3 - Claves 30 a 44)
const nuevosNodos = {
  "2559: Punto Primero: efectos dolorosos del matrimonio impuesto.": {
    "PilotoDeCoherencia": "Consecuencias del Error. El matrimonio por imposición o prejuicio engendra infanticidio y abandono, convirtiendo la procreación en una carga de amargura.",
    "CitaInelutable": "Efectos terribles que causa la unión en matrimonio por imposición... infanticidio en todas sus fases.",
    "EjemploPedagogico": "Una planta que se obliga a crecer en una caja de hierro sin sol; sus frutos serán amargos o nacerán muertos porque se violó la ley de su naturaleza.",
    "ConexionDoctrinal": ["Matrimonio por Amor vs Imposición", "Responsabilidad Procreadora"],
    "NodosSimapticos": []
  },
  "2839: Punto Tercero: las casas de comercio y de traición": {
    "PilotoDeCoherencia": "Espejo de la Injusticia. Los prostíbulos son la consecuencia inevitable de leyes y prejuicios sociales que niegan el amor; son la amargura de la sociedad escupida en su cara.",
    "CitaInelutable": "Puertas de estas casas son la boca que traga la amargura que causan las leyes y los prejuicios.",
    "EjemploPedagogico": "Una herida que supura porque no se limpió la infección original; el prostíbulo es la supuración de una sociedad enferma de prejuicios.",
    "ConexionDoctrinal": ["Justicia Social", "Efectos del Prejuicio"],
    "NodosSimapticos": []
  },
  "3106: Punto Quinto: los conventos de monjas son prostíbulos": {
    "PilotoDeCoherencia": "Denuncia del Claustro. Los conventos son señalados como centros de prostitución y crimen ocultos bajo la apariencia de santidad, violando la ley de libertad.",
    "CitaInelutable": "En la opinión pública, hablar de conventos ya es hablar de prostíbulos... prostitución y el crimen.",
    "EjemploPedagogico": "Una tumba pintada de blanco por fuera, pero llena de podredumbre y sombras por dentro; el hábito no oculta la violación de la ley natural.",
    "ConexionDoctrinal": ["Crítica al Monacato", "Libertad del Espíritu"],
    "NodosSimapticos": []
  },
  "3463: Punto séptimo: la comuna de los hijos de la libertad se impone urgente": {
    "PilotoDeCoherencia": "Regeneración Comunal. Se exige la creación de comunas para proteger a las madres solteras y a los hijos de la libertad, convirtiendo el estigma en dignidad.",
    "CitaInelutable": "Regeneración impone la comuna de los hijos de la libertad o de las madres sin esposo.",
    "EjemploPedagogico": "Un refugio seguro para las aves que fueron expulsadas del nido por no seguir un canto equivocado; allí encuentran calor y familia real.",
    "ConexionDoctrinal": ["Hijos de la Libertad (Concepto Doctrinal)", "Casas Comunales de Amor"],
    "NodosSimapticos": ["Hijos de la Libertad (Concepto Doctrinal)"]
  },
  "3605: Punto octavo: el celibato es la negación de la ley divina": {
    "PilotoDeCoherencia": "Crimen del Celibato. El celibato es una institución antinatural que causa el desequilibrio social y es la fuente de los mayores escándalos y crímenes ocultos.",
    "CitaInelutable": "Celibato es la negación de la ley divina... fuente originaria de los mayores escándalos.",
    "EjemploPedagogico": "Poner un tapón a un volcán activo; la presión interna terminará por romper la montaña y causar una catástrofe mucho mayor que si se dejara salir el fuego naturalmente.",
    "ConexionDoctrinal": ["Celibato (Crítica Trincadista)", "Leyes de la Naturaleza"],
    "NodosSimapticos": ["Celibato (Crítica Trincadista)"]
  },
  "3884: Punto décimo: las casas de maternidad deben ser casas comunales": {
    "PilotoDeCoherencia": "Sustitución del Baldón. Tras la desaparición del dogma, las casas de maternidad deben ser centros de amor comunal para borrar el mal causado por la iglesia.",
    "CitaInelutable": "Casas de maternidad deben ser casas comunales... para ir regenerando la humanidad dañada.",
    "EjemploPedagogico": "Transformar una cárcel oscura y fría en una escuela llena de luz y jardines donde los niños aprendan a reír sin miedo.",
    "ConexionDoctrinal": ["Casas Comunales de Amor", "Fin de la Iglesia"],
    "NodosSimapticos": ["Casas de Baldón"]
  },
  "4067: Párrafo iv: el amor da plena libertad a los seres": {
    "PilotoDeCoherencia": "Consuelo de la Libertad. A pesar de la inmundicia histórica, la percepción del fin del dogma consuela al Juez, augurando una tierra feliz por la libertad del amor.",
    "CitaInelutable": "El amor da plena libertad a los seres... se consuela el Juez de los largos miles de años.",
    "EjemploPedagogico": "El jardinero que después de pasar años quitando maleza y espinas, finalmente ve brotar la primera flor de un jardín que será eterno.",
    "ConexionDoctrinal": ["Libertad por el Amor", "Misión del Juez"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Hijos de la Libertad (Concepto Doctrinal)": {
    "Definición": "Término dignificante para referirse a los niños nacidos fuera del matrimonio civil o eclesiástico. La doctrina trincadista los considera frutos legítimos del amor y la naturaleza, rechazando el estigma de 'ilegitimidad' y exigiendo para ellos la protección prioritaria de la Comuna Universal.",
    "Contexto": "Código de Amor Universal Tomo 1 (Punto Séptimo sobre la Comuna).",
    "Conexiones": ["Comuna Universal", "Amor", "Igualdad"],
    "Obras": ["Código de Amor Universal", "Los Cinco Amores"]
  },
  "Celibato (Crítica Trincadista)": {
    "Definición": "Institución impuesta por las religiones que prohíbe el matrimonio y la procreación a sus clérigos. Es denunciada como una violación criminal de las leyes naturales y divinas, responsable de graves patologías psíquicas, crímenes ocultos y el desequilibrio demográfico y moral de la humanidad.",
    "Contexto": "Código de Amor Universal Tomo 1 (Puntos Octavo y Noveno).",
    "Conexiones": ["Leyes de la Naturaleza", "Religión", "Dogma"],
    "Obras": ["Código de Amor Universal", "Jesús hombre y no Dios"]
  },
  "Casas de Baldón": {
    "Definición": "Término utilizado para describir las instituciones de caridad religiosas destinadas a madres solteras, donde se estigmatiza el 'pecado' y se somete a la mujer y al hijo a la vergüenza pública. El Código propone su transformación en Casas Comunales de Amor y Dignidad.",
    "Contexto": "Código de Amor Universal Tomo 1 (Punto Décimo).",
    "Conexiones": ["Prejuicio", "Dignidad Humana", "Regeneración"],
    "Obras": ["Código de Amor Universal", "Profilaxis de la Vida"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 3 de Código de Amor T1 (7 nodos) y 3 términos sinápticos. Denuncia social completada.');
