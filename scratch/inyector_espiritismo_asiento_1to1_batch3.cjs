const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - El Espiritismo en su Asiento (Batch 3 - FINAL - Libro 2 Cap V y Libro 3)
const nuevosNodos = {
  "2269: LIBRO 2 - CAPÍTULO V: EL BIEN QUE TRAE EL ESPIRITISMO": {
    "PilotoDeCoherencia": "Se destruye la mentira de que el Espiritismo es solo para 'cosas del más allá'. El Espiritismo obliga al espíritu a legislar la vida material para renovar las leyes de opresión y establecer la Paz universal (Libertad, Sabiduría y Amor). El Espiritismo es la guerra sin cuartel a todo error político y social.",
    "CitaInelutable": "La afirmación de que el espiritismo no se relaciona con la vida material es el arma más funesta empleada para prohibir al espíritu legislar la tierra.",
    "EjemploPedagogico": "Es como decirle a un arquitecto que solo dibuje planos pero que no toque los ladrillos. El espíritu (arquitecto) tiene el deber y derecho de agarrar la política y la economía (ladrillos) para construir la Comuna.",
    "ConexionDoctrinal": ["Legislar la Materia", "Espiritismo Práctico", "Guerra al Error Social"],
    "NodosSimapticos": ["Derecho a Legislar", "Arquitecto Social"]
  },
  "2493: LIBRO 3 - CAPÍTULO I: EL REINADO DEL ESPIRITISMO": {
    "PilotoDeCoherencia": "El comienzo de la era de la Luz (el Siglo 36 desde la ley escrita de Abraham, 1911 d.C.). Trincado revela el Testamento secreto de Abraham, que Moisés ocultó en la piedra de Jacob. La promesa es que en este siglo reinará el conocimiento de Eloí a través de los espíritus de luz, marcando el fin del dogma.",
    "CitaInelutable": "Y los siglos serán 36 desde que escribiré mi ley... y de este siglo mis hijos serán de luz, porque verán la luz de su Padre.",
    "EjemploPedagogico": "Es el cumplimiento de un reloj de arena de 4000 años. El último grano cayó en 1911, decretando el fin del oscurantismo y el inicio del reinado de la razón.",
    "ConexionDoctrinal": ["El Siglo 36", "Testamento de Abraham", "Reinado de la Razón"],
    "NodosSimapticos": ["Reloj Cósmico", "Piedra de Jacob"]
  },
  "2654: LIBRO 3 - CAPÍTULO II: EL JUICIO FINAL Y UNIVERSAL": {
    "PilotoDeCoherencia": "Desmitificación total del Juicio Final bíblico. No hay huesos bailando ni montañas cayendo; no hay un 'fuego eterno'. El Juicio fue un acto de contabilidad evolutiva (1912) donde se separó a los espíritus de progreso de los rezagados. La religión charlataneó el juicio para robar dinero mediante el terror.",
    "CitaInelutable": "¡Qué escandaloso comercio hizo la iglesia del juicio final charlataneando con huesos bailando y montañas que aplastan para buscar dinero del creyente horrorizado!",
    "EjemploPedagogico": "El Juicio Final no es un volcán destruyendo el mundo; es el director de la escuela revisando las notas de fin de año. Los que aprobaron pasan de curso (Comuna), los reprobados son enviados a otra escuela primaria (mundos primitivos).",
    "ConexionDoctrinal": ["El Juicio Final Trincadista", "Comercio del Terror", "Separación de Clases Evolutivas"],
    "NodosSimapticos": ["Notas de Fin de Año", "Farsantes del Terror"]
  },
  "2820: LIBRO 3 - CAPÍTULO III: EL DESCUBRIMIENTO DE LA ETERNA VERDAD": {
    "PilotoDeCoherencia": "La verdad eterna no cambia, pero se entregó en grados a la humanidad (verdades relativas) porque no se podía dar toda de golpe. Ahora, tras el Juicio, la Verdad Suprema es revelada y codificada. Todos los seres del universo ('ángeles y demonios') están sujetos a esta misma y única ley del Padre.",
    "CitaInelutable": "La verdad suprema no se podía dar más que por grados. Pero el Padre no tiene más que una ley y rige con ella a todos los mundos.",
    "EjemploPedagogico": "A un niño de kínder no le enseñas trigonometría (verdad suprema), le enseñas a sumar (verdad relativa). Hoy la humanidad ya llegó a la universidad y recibe el libro completo.",
    "ConexionDoctrinal": ["Verdad Gradual", "Ley Única Universal", "Fin de las Verdades Relativas"],
    "NodosSimapticos": ["Libro Completo", "Luz en Grados"]
  },
  "2917-2988: LIBRO 3 - CAPÍTULO IV: LA COMUNA, RÉGIMEN ÚNICO DEL ESPIRITISMO": {
    "PilotoDeCoherencia": "La consecuencia directa del reinado del espíritu es el cambio ineludible del régimen económico-social en toda la Tierra: la implantación de la Comuna de Amor y Ley. Se borrarán las fronteras. Este decreto absoluto del Creador para los mundos en su mayoría de edad (post-juicio final) aplastará la resistencia.",
    "CitaInelutable": "Se cambia de forma de gobierno en toda la tierra, borrándose las fronteras y estableciéndose la comuna de amor y Ley. Es decreto del creador.",
    "EjemploPedagogico": "Cuando un niño cumple la mayoría de edad, deja los juguetes de la infancia. La Comuna es el traje de adulto de la Tierra; las naciones, guerras y monedas son los juguetes rotos que se tiran a la basura.",
    "ConexionDoctrinal": ["Comuna de Amor y Ley", "Mayoría de Edad del Planeta", "Decreto Absoluto"],
    "NodosSimapticos": ["Traje de Adulto", "Fin de las Fronteras"]
  },
  "3119-3198: LIBRO 3 - CAPÍTULO V: LA CREACIÓN ES ETERNA": {
    "PilotoDeCoherencia": "El axioma que horroriza a los materialistas y religiosos: la creación no tiene principio ni fin. El trabajo del espíritu no se detiene nunca; tras civilizar la Tierra, iremos a otros mundos. El Maestro cierra clamando la justicia de Eloí contra los espíritus recalcitrantes ('negros de hollín') que encendieron la guerra para no acatar la Ley.",
    "CitaInelutable": "Hemos de vivir en todos los mundos que existen, porque la creación sigue y no se acaba. Al que no quiera tomar la medicina a sorbos, la tomará de un trago.",
    "EjemploPedagogico": "El Universo es una fábrica infinita que nunca cierra. Cuando el trabajador (espíritu) termina de construir una máquina (mundo), el Ingeniero (Eloí) lo envía a construir la siguiente.",
    "ConexionDoctrinal": ["Eternidad de la Creación", "Trabajo Infinito", "Negros de Hollín (Recalcitrantes)"],
    "NodosSimapticos": ["Fábrica Infinita", "Medicina de un Trago"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Siglo 36 (La Era de Luz)": {
    "Definición": "Momento profético marcado en el testamento de Abraham, correspondiente a 1911 d.C., que señala el fin de las religiones y el inicio del reinado ineludible del conocimiento espiritual y la razón en la Tierra.",
    "Contexto": "Libro Tercero, Cap. I de El Espiritismo en su Asiento.",
    "Conexiones": ["Testamento de Abraham", "Era de Luz", "1911"],
    "Obras": ["El Espiritismo en su Asiento", "Filosofía Austera Racional"]
  },
  "Juicio Final Trincadista": {
    "Definición": "No es un cataclismo físico ni ardiente, sino un acto de contabilidad de la Ley Universal (ejecutado en 1912) donde se separó a los espíritus afines a la Comuna de aquellos retrasados que fueron condenados a emigrar a mundos primitivos.",
    "Contexto": "Libro Tercero, Cap. II de El Espiritismo en su Asiento.",
    "Conexiones": ["Mayoría de Edad", "Mundos de Expiación", "Justicia"],
    "Obras": ["El Espiritismo en su Asiento", "Los Cinco Amores"]
  },
  "Negros de Hollín": {
    "Definición": "Término severo aplicado a los espíritus supremáticos e inquisitoriales que, al escuchar la sentencia del Juicio Final, se rebelaron y encendieron las guerras mundiales para intentar evitar, en vano, el triunfo de la Comuna.",
    "Contexto": "Firma y cierre de El Espiritismo en su Asiento.",
    "Conexiones": ["Guerra Mundial", "Rebelión Espiritual", "Supremacía"],
    "Obras": ["El Espiritismo en su Asiento"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 6 nodos finales de El Espiritismo en su Asiento (Batch 3 - FINAL) y 3 términos sinápticos.');
