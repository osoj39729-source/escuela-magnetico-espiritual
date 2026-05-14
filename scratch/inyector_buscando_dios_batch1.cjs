const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = {};
if (fs.existsSync(esenciaPath)) {
  esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
}
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// RE-DESTILACIÓN PURA 1:1 - Buscando a Dios (Batch 1 - Claves 11 a 132)
const nuevosNodos = {
  "001: PROCLAMA": {
    "PilotoDeCoherencia": "Llamada a la Unidad. Se anuncia la apertura del conocimiento universal para todos los hombres, superando los secretos de las castas religiosas.",
    "CitaInelutable": "PROCLAMA... El Universo Solidarizado... El Mundo Todo Comunizado.",
    "EjemploPedagogico": "Un heraldo que recorre las ciudades anunciando que los muros del palacio han caído y que todos los ciudadanos pueden ahora entrar a la biblioteca real para aprender.",
    "ConexionDoctrinal": ["Universo Solidarizado (Axioma)", "Mundo Comunizado"],
    "NodosSimapticos": ["Universo Solidarizado (Axioma)", "Mundo Comunizado"]
  },
  "002: EL UNIVERSO SOLIDARIZADO": {
    "PilotoDeCoherencia": "Unidad Cósmica. Todo el universo está unido por hilos invisibles de magnetismo y ley; lo que afecta a un mundo afecta al concierto total de la creación.",
    "CitaInelutable": "El Universo Solidarizado... La Ley es una. La Substancia una.",
    "EjemploPedagogico": "Una inmensa red de pescador; si tiras de una malla en un extremo, toda la red se tensa y se mueve, porque no hay parte que esté aislada del resto.",
    "ConexionDoctrinal": ["Ley de Afinidad", "Substancia Única"],
    "NodosSimapticos": ["Universo Solidarizado (Axioma)"]
  },
  "003: EL MUNDO TODO COMUNIZADO": {
    "PilotoDeCoherencia": "Geopolítica Universal. La meta final de la evolución terrestre es la desaparición de las parcelas y fronteras para formar una sola familia humana en propiedad común.",
    "CitaInelutable": "El Mundo Todo Comunizado... La Ley es una.",
    "EjemploPedagogico": "Una familia que vive en una casa; no ponen rejas entre la cocina y el salón ni cobran entrada por pasar de un cuarto a otro; toda la casa es para el disfrute de todos los hermanos.",
    "ConexionDoctrinal": ["Comuna Universal", "Mundo Comunizado"],
    "NodosSimapticos": ["Mundo Comunizado"]
  },
  "004: LA LEY ES UNA. LA SUBSTANCIA UNA": {
    "PilotoDeCoherencia": "Monismo Racional. Solo existe una ley (progreso) y una sola substancia (éter-espíritu) que se manifiesta en infinitas formas materiales y espirituales.",
    "CitaInelutable": "La Ley es una. La Substancia una. Todo es Magnetismo Espiritual.",
    "EjemploPedagogico": "El agua que puede ser hielo, vapor o líquido; parece diferente, pero en esencia es la misma molécula bajo distintas condiciones de energía y temperatura.",
    "ConexionDoctrinal": ["Substancia Única", "Magnetismo Espiritual"],
    "NodosSimapticos": []
  },
  "005: TODO ES MAGNETISMO ESPIRITUAL": {
    "PilotoDeCoherencia": "Dinámica de la Vida. El magnetismo es el lenguaje del espíritu y la fuerza que cohesiona la materia; buscar a Dios es entender esta dinámica en uno mismo.",
    "CitaInelutable": "Buscando a Dios y Asiento del Dios Amor... Todo es Magnetismo Espiritual.",
    "EjemploPedagogico": "La electricidad que recorre una ciudad; no la ves, pero sabes que está ahí porque las luces se encienden y los motores funcionan; el espíritu es la fuente y el magnetismo el cableado.",
    "ConexionDoctrinal": ["Asiento del Dios Amor", "Magnetismo Espiritual"],
    "NodosSimapticos": ["Asiento del Dios Amor"]
  },
  "006: PRÓLOGO": {
    "PilotoDeCoherencia": "Llamado a la Luz. La humanidad reclama justicia y luz; la Razón encuentra a Dios no como un tirano externo, sino como un Padre de Amor accesible a la inteligencia.",
    "CitaInelutable": "LUZ, LUZ y JUSTICIA pide la humanidad... el DIOS AMOR que la Razón encontró para dárselo a los hombres con el nombre de Padre.",
    "EjemploPedagogico": "Abrir las ventanas de una habitación que ha estado cerrada por siglos; la luz del sol entra no para castigar, sino para mostrar dónde está la suciedad y permitir que los habitantes vivan con alegría.",
    "ConexionDoctrinal": ["Dios Amor", "Razón"],
    "NodosSimapticos": []
  },
  "007: INTRODUCCIÓN": {
    "PilotoDeCoherencia": "Investigación Progresista. En un tiempo de avances materiales y ciencias matemáticas, el hombre debe aplicar el mismo rigor para investigar las verdades del espíritu y las entrañas de la tierra.",
    "CitaInelutable": "En este tiempo progresista... se investiga y se le arrancan las entrañas a la madre tierra... en este tiempo positivista.",
    "EjemploPedagogico": "Un arqueólogo que usa las herramientas más modernas para excavar; no busca tesoros por ambición, sino para entender la historia y la ley que permitió a esa civilización existir.",
    "ConexionDoctrinal": ["Ciencia y Espíritu", "Positivismo Racional"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Asiento del Dios Amor": {
    "Definición": "Título alternativo de la obra 'Buscando a Dios' que enfatiza que el Creador no reside en templos de piedra ni en rituales, sino en el 'asiento' del sentimiento de amor y justicia del espíritu humano desarrollado.",
    "Contexto": "Buscando a Dios (Portada).",
    "Conexiones": ["Dios Amor", "Sentimiento", "Conciencia"],
    "Obras": ["Buscando a Dios"]
  },
  "Universo Solidarizado (Axioma)": {
    "Definición": "Principio cosmogónico que establece la interconexión energética y legal de todos los mundos y seres bajo una misma ley de afinidad, formando una unidad solidaria indisoluble.",
    "Contexto": "Buscando a Dios (Proclama).",
    "Conexiones": ["Solidaridad", "Afinidad", "Ley Única"],
    "Obras": ["Buscando a Dios", "Filosofía Enciclopédica"]
  },
  "Mundo Comunizado": {
    "Definición": "Estado final de evolución social en la Tierra donde desaparecen las fronteras, las clases y la propiedad individual, instaurándose la Comuna Universal como reflejo de la armonía del universo.",
    "Contexto": "Buscando a Dios (Proclama).",
    "Conexiones": ["Comuna", "Justicia", "Unidad"],
    "Obras": ["Buscando a Dios", "Código de Amor Universal"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 1 de Buscando a Dios (7 nodos 1:1) y 3 términos sinápticos.');
