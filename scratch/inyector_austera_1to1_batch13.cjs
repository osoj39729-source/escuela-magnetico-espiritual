const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 13)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "14785: LA JUSTICIA DEL CREADOR": {
    "PilotoDeCoherencia": "Reto a las teologías y religiones: prueben que el Creador puede ser injusto distinguiendo a un hijo sobre otro. Es imposible. Todos somos iguales en esencia y derechos. El Creador no otorga gracias ni perdones; otorga la Vida Universal, y nosotros debemos demostrarla con progreso. La justicia es la única ley sin excepciones.",
    "CitaInelutable": "El Creador no hace todo cuanto quiere, sino todo cuanto debe.",
    "EjemploPedagogico": "Un padre justo no tiene hijos preferidos. Si uno es sabio y el otro ignorante, es por el esfuerzo de cada uno, no por el capricho del padre. Eloí es el Padre de la Justicia Absoluta.",
    "ConexionDoctrinal": ["Justicia Absoluta", "Igualdad", "Deber del Creador"],
    "NodosSimapticos": ["Justicia de Eloí", "Todo cuanto Debe", "Reto a las Religiones"]
  },
  "15055: LA PRUEBA CIENTÍFICO-METAFÍSICO-RACIONAL": {
    "PilotoDeCoherencia": "No admitimos discusiones basadas en dogmas. La verdad debe ser probada por la ciencia de los hechos, la metafísica del espíritu y la razón de la lógica. Solo esta triple prueba garantiza que no estamos ante una alucinación o un engaño clerical.",
    "CitaInelutable": "La verdad que no resiste la triple prueba de la ciencia, la metafísica y la razón, es una mentira.",
    "EjemploPedagogico": "Es como un trípode: si le falta una pata, se cae. La verdad necesita las tres patas para sostenerse en el mundo de los hombres.",
    "ConexionDoctrinal": ["Metodología", "Triple Prueba", "Racionalismo"],
    "NodosSimapticos": ["Trípode de la Verdad", "Prueba Racional", "Fin del Dogma"]
  },
  "15325: CAPÍTULO IX — LA CONCIENCIA SUPREMA": {
    "PilotoDeCoherencia": "La conciencia es la presencia de la Ley en el acto del pensamiento. Es el juez que no se puede sobornar. Denunciamos que se ha intentado adormecer la conciencia con rezos y ritos. La conciencia despierta es el primer paso para la libertad de la Comuna.",
    "CitaInelutable": "La conciencia es el espejo donde el espíritu ve su propia rectitud o su error.",
    "EjemploPedagogico": "La conciencia es el tribunal que llevas contigo a todas partes. Puedes engañar al mundo, pero no puedes engañar a tu propio espejo. Mantén tu espejo limpio para no asustarte de tu propia imagen.",
    "ConexionDoctrinal": ["Conciencia", "Juicio Interno", "Responsabilidad"],
    "NodosSimapticos": ["Conciencia Suprema", "Espejo del Espíritu", "Tribunal Portátil"]
  },
  "15605: CAPÍTULO X — LA VOLUNTAD SOBERANA": {
    "PilotoDeCoherencia": "La voluntad es el brazo del espíritu. Es la fuerza que mueve la materia. Una voluntad débil es una esclavitud; una voluntad soberana es la que se somete libremente a la Ley de Amor. Estudiamos cómo fortalecer la voluntad mediante el dominio de las pasiones.",
    "CitaInelutable": "Querer es poder, cuando el querer está en armonía con el deber.",
    "EjemploPedagogico": "La voluntad es el timón del barco. Si el timón es flojo, las olas te llevan donde quieren. Si el timón es firme, tú decides el rumbo aunque sople el viento en contra.",
    "ConexionDoctrinal": ["Voluntad", "Soberanía", "Poder Mental"],
    "NodosSimapticos": ["Voluntad Soberana", "Timón del Ser", "Querer es Poder"]
  },
  "15885: CAPÍTULO XI — LAS PASIONES Y SU GOBIERNO": {
    "PilotoDeCoherencia": "La pasión es la voluntad desviada por el egoísmo o la ignorancia. No pedimos matar las pasiones, sino gobernarlas. El fuego que quema la casa (pasión desordenada) es el mismo fuego que cocina el pan (pasión bajo la razón). El filósofo es el dueño de su fuego.",
    "CitaInelutable": "La pasión es la fuerza del espíritu que aún no conoce su ley.",
    "EjemploPedagogico": "La pasión es como un caballo salvaje: tiene mucha fuerza pero te puede tirar al barranco. La razón es el jinete que doma al caballo para que esa fuerza te lleve a la meta.",
    "ConexionDoctrinal": ["Pasiones", "Dominio de sí mismo", "Equilibrio"],
    "NodosSimapticos": ["Gobierno de Pasiones", "Caballo y Jinete", "Fuego del Espíritu"]
  },
  "16155: CAPÍTULO XII — EL HÁBITO Y LA COSTUMBRE": {
    "PilotoDeCoherencia": "El hábito es la mecanización del acto. Puede ser un aliado (hábitos de estudio, de limpieza) o un enemigo (vicios). Denunciamos el hábito de la obediencia ciega. El espíritu debe revisar sus hábitos constantemente para que no se conviertan en cárceles de la conciencia.",
    "CitaInelutable": "El hábito debe ser el ahorro de la voluntad, no la muerte de la atención.",
    "EjemploPedagogico": "Es como un sendero en el bosque: la primera vez te cuesta pasar, la décima ya vas solo. Asegúrate de que el sendero que estás trillando te lleve a la luz y no al abismo.",
    "ConexionDoctrinal": ["Hábito", "Costumbre", "Vicio vs Virtud"],
    "NodosSimapticos": ["Ahorro de Voluntad", "Sendero del Hábito", "Mecanización Racional"]
  },
  "16425: LA LIBERTAD DEL ESPÍRITU": {
    "PilotoDeCoherencia": "La libertad no es hacer lo que uno quiere, sino hacer lo que uno debe con alegría. El hombre más libre es el que mejor conoce y cumple la Ley. La libertad es el premio de la sabiduría. Denunciamos la falsa libertad del libertinaje que solo es esclavitud de la materia.",
    "CitaInelutable": "La libertad es la armonía consciente con la Ley Universal.",
    "EjemploPedagogico": "Un pájaro es libre porque sigue las leyes del vuelo. Si el pájaro dice 'soy libre de no mover las alas', se cae y muere. La verdadera libertad es volar según la ley del viento.",
    "ConexionDoctrinal": ["Libertad", "Deber", "Armonía"],
    "NodosSimapticos": ["Libertad Consciente", "Vuelo según la Ley", "Premio de Sabiduría"]
  },
  "16690: EL CARÁCTER Y LA PERSONALIDAD": {
    "PilotoDeCoherencia": "El carácter es el sello del espíritu; la personalidad es su máscara social. Buscamos que la personalidad sea el reflejo fiel del carácter espiritual. La hipocresía es la división entre lo que el espíritu es y lo que el hombre aparenta. El filósofo austero tiene una sola cara.",
    "CitaInelutable": "El carácter es la roca sobre la que se asienta la dignidad del hombre.",
    "EjemploPedagogico": "El carácter es el oro; la personalidad es la moneda. Una moneda falsa no tiene valor aunque brille. Asegúrate de que tu moneda (tus actos) sea de oro puro (tu carácter).",
    "ConexionDoctrinal": ["Carácter", "Personalidad", "Dignidad"],
    "NodosSimapticos": ["Sello del Espíritu", "Roca del Carácter", "Moneda de Oro"]
  },
  "16960: LA RESPONSABILIDAD INDIVIDUAL": {
    "PilotoDeCoherencia": "Nadie puede pagar por otro. La responsabilidad es intransferible. Denunciamos la mentira de la 'redención' por la sangre de otro. Cada espíritu es responsable de sus deudas y de sus méritos. El juicio es constante y se realiza en la propia conciencia.",
    "CitaInelutable": "Tú eres el único autor de tu destino y el único pagador de tus deudas.",
    "EjemploPedagogico": "Es como una deuda bancaria: no importa cuánto rece tu vecino, el banco te cobrará a ti. En el banco de la justicia universal, solo tú firmas los cheques de tus actos.",
    "ConexionDoctrinal": ["Responsabilidad", "Causalidad", "Justicia"],
    "NodosSimapticos": ["Autor del Destino", "Responsabilidad Intransferible", "Cheques de los Actos"]
  },
  "17230: EL FIN DE LA FILOSOFÍA RACIONAL": {
    "PilotoDeCoherencia": "El fin de todo este estudio es la acción. No queremos sabios de libro, sino hombres de obra. La Filosofía Austera Racional debe culminar en la implantación de la Comuna Universal, donde la justicia sea el aire y el amor sea el pan. ¡Adelante, hermanos, a la obra!",
    "CitaInelutable": "Filosofar es aprender a vivir para el bien de la humanidad.",
    "EjemploPedagogico": "Hemos estudiado el mapa, hemos revisado el barco y hemos aprendido a navegar. Ahora es el momento de levar anclas y dirigirnos al puerto de la Comuna Universal. El viaje ha comenzado.",
    "ConexionDoctrinal": ["Acción", "Comuna Universal", "Misión"],
    "NodosSimapticos": ["Fin es la Acción", "Puerto de la Comuna", "Levar Anclas"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Todo cuanto Debe": {
    "Definición": "Axioma trincadista que establece que el Creador (Eloí) no actúa por capricho ni voluntad arbitraria, sino que su acción es la expresión perfecta y necesaria de la Ley de Justicia Universal.",
    "Contexto": "Capítulo VIII de la Cuarta Parte de Filosofía Austera Racional.",
    "Conexiones": ["Justicia de Eloí", "Ley Universal", "Deber del Creador"],
    "Obras": ["Filosofía Austera Racional", "Código de Amor Universal"]
  },
  "Triple Prueba": {
    "Definición": "El método de validación de la verdad en la Escuela Magnético Espiritual, consistente en someter cualquier hecho o idea al escrutinio simultáneo de la Ciencia (hechos), la Metafísica (espíritu) y la Razón (lógica).",
    "Contexto": "Capítulo IX de Filosofía Austera Racional.",
    "Conexiones": ["Metodología", "Ciencia y Conciencia", "Racionalismo"],
    "Obras": ["Filosofía Austera Racional", "Espiritismo en su Asiento"]
  },
  "Voluntad Soberana": {
    "Definición": "La potencia del espíritu que, habiéndose liberado de las pasiones materiales y los dogmas, decide y actúa en plena armonía con la Ley de Amor y el Deber.",
    "Conexiones": ["Soberanía", "Libertad", "Poder Mental"],
    "Obras": ["Filosofía Austera Racional", "Conócete a ti mismo"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Filosofía Austera Racional (Batch 13) y 3 términos sinápticos.');
