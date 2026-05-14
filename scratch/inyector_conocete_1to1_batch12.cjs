const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Conócete a ti mismo (Batch 12 - Organización y Mayorías)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "15367: LAS LEYES DE MAYORÍA COMO RETRATO": {
    "PilotoDeCoherencia": "Las leyes de mayoría son el espejo fiel del nivel moral de un pueblo. Si el pueblo es egoísta, sus leyes serán restrictivas y punitivas. Si el pueblo es ilustrado, sus leyes serán libertarias y solidarias. No culpes a la ley, culpa al grado de progreso que la engendró. El espíritu debe trabajar para que el espejo refleje luz, no sombras.",
    "CitaInelutable": "Dime qué leyes tienes y te diré qué progreso has alcanzado.",
    "EjemploPedagogico": "Es como una fotografía de un grupo: si todos salen despeinados y sucios, la foto no tiene la culpa, solo muestra la realidad. Para que la foto sea hermosa, el grupo debe higienizarse. La ley es la fotografía de la sociedad.",
    "ConexionDoctrinal": ["Espejo Social", "Nivel Moral", "Reflejo"],
    "NodosSimapticos": ["Fotografía de Grupo", "Espejo de Luz", "Sombras de la Ley"]
  },
  "15619: EL RESPETO A LAS LEYES ESTABLECIDAS": {
    "PilotoDeCoherencia": "El espíritu trino respeta las leyes de mayoría por disciplina y amor al orden, incluso si las considera imperfectas. El desorden es el peor enemigo del progreso. El cambio de la ley no se logra mediante la violencia, sino mediante la elevación de la conciencia colectiva que hará caer lo viejo por su propio peso de inutilidad.",
    "CitaInelutable": "La disciplina es el orden del espíritu; el caos es el triunfo del instinto.",
    "EjemploPedagogico": "Es como un semáforo en una calle solitaria: aunque no venga ningún coche, lo respetas por disciplina y para mantener el hábito del orden. Si todos se saltaran el semáforo cuando quisieran, la calle sería un cementerio.",
    "ConexionDoctrinal": ["Disciplina", "Orden Social", "Cambio Evolutivo"],
    "NodosSimapticos": ["Semáforo del Espíritu", "Hábito del Orden", "Peso de Inutilidad"]
  },
  "15766: APLICACIÓN JUSTA DE LAS LEYES": {
    "PilotoDeCoherencia": "La aplicación de la ley debe mirar siempre al bien común, sin acepción de personas. En el régimen racional, no hay 'privilegios' ni 'excepciones' para los poderosos. La ley es igual para todos porque todos somos hijos del mismo Padre. La justicia es la balanza que no se inclina por el peso del oro ni del apellido.",
    "CitaInelutable": "En la justicia de Eloí, solo pesa el amor y el cumplimiento del deber.",
    "EjemploPedagogico": "Es como una regla de medir: mide un metro tanto para el rey como para el mendigo. Si la regla cambiara según quién la usa, ya no sería una regla, sino un engaño. La justicia es nuestra regla inmutable.",
    "ConexionDoctrinal": ["Igualdad", "Bien Común", "Balanza Inmutable"],
    "NodosSimapticos": ["Regla de Medir", "Peso del Oro", "Justicia sin Apellidos"]
  },
  "15840: DESCENTRALIZACIÓN Y AUTONOMÍA INDUSTRIAL": {
    "PilotoDeCoherencia": "Propugnamos que cada región, cada industria y cada familia establezca sus propias leyes reglamentarias. La centralización es una forma de tiranía. Quién mejor que el obrero para legislar su trabajo, o la madre para legislar su hogar. La autonomía es la base de la libertad en la Comuna Universal.",
    "CitaInelutable": "Cada industria y región es soberana en su reglamento, bajo la Ley Única de Amor.",
    "EjemploPedagogico": "Es como un cuerpo humano: el estómago no le dice al ojo cómo tiene que ver, ni el ojo le dice al pulmón cómo respirar. Cada uno tiene su función y su 'ley' interna, pero todos trabajan para la vida del cuerpo entero.",
    "ConexionDoctrinal": ["Descentralización", "Autonomía", "Soberanía Regional"],
    "NodosSimapticos": ["Órganos Soberanos", "Legislación del Obrero", "Tiranía Central"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Leyes de Mayoría": {
    "Definición": "Normas de convivencia transitorias establecidas por el consenso de la sociedad para organizar la vida material según su grado medio de progreso espiritual.",
    "Contexto": "Organización social en Conócete a ti mismo.",
    "Conexiones": ["Consenso", "Disciplina", "Transitoriedad"],
    "Obras": ["Conócete a ti mismo", "Filosofía Austera Racional"]
  },
  "Descentralización": {
    "Definición": "Principio administrativo de la Comuna que otorga soberanía a las regiones e industrias para legislar sus propios asuntos internos bajo la ley de amor universal.",
    "Contexto": "Régimen de la Comuna en Conócete a ti mismo.",
    "Conexiones": ["Autonomía", "Libertad", "Soberanía"],
    "Obras": ["Conócete a ti mismo", "Profilaxis de la Vida"]
  },
  "Autonomía Industrial": {
    "Definición": "Facultad de las corporaciones de trabajadores para gestionar sus medios de producción y reglamentar su labor sin interferencias centralistas externas.",
    "Conexiones": ["Trabajo", "Obrero", "Economía Social"],
    "Obras": ["Conócete a ti mismo"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 4 nodos 1:1 de Conócete a ti mismo (Batch 12 - Autonomía) y 3 términos sinápticos.');
