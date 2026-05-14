const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Filosofía Enciclopédica Universal Tomo 1 (Batch 3 - Claves 37 a 56)
const nuevosNodos = {
  "1429: Julio 18 de 1910 (hora 12 del día) - hecho, al que no usó de misericordia”.": {
    "PilotoDeCoherencia": "Aviso físico. El movimiento espontáneo de objetos (varillas) como señal espiritual para llamar a la sesión y recibir instrucciones urgentes.",
    "CitaInelutable": "Dándome cuenta de que era un aviso, supliqué a la médium M.P. quisiera posesionarse.",
    "EjemploPedagogico": "Cuando la voz del espíritu no se oye en el alma, la ley de vibración mueve la materia para alertar al hombre.",
    "ConexionDoctrinal": ["Avisos Espirituales", "Fenomenología Física"],
    "NodosSimapticos": ["Aviso Espiritual"]
  },
  "1472: Julio 19 de 1910 - Escrita, Trincado": {
    "PilotoDeCoherencia": "Revolución en el espacio. Reporte de un gran acontecimiento en el mundo espiritual que moviliza a las legiones de protectores.",
    "CitaInelutable": "Hay en el espacio una revolución grande... día de un gran acontecimiento.",
    "EjemploPedagogico": "Lo que sucede en la tierra es solo el eco de las grandes batallas de ideas que ocurren en el universo espiritual.",
    "ConexionDoctrinal": ["Vida en el Espacio", "Eventos Espirituales"],
    "NodosSimapticos": []
  },
  "1501: Julio 21 de 1910 - Posesión de M.P.": {
    "PilotoDeCoherencia": "Ideas malignas. El peligro de los fluidos negativos y el odio cercano que pueden perturbar la paz del misionero.",
    "CitaInelutable": "Son tantos los malos fluidos que te llegan... el maremágnum de ideas malignas.",
    "EjemploPedagogico": "Un pensamiento de odio es como un gas tóxico; aunque no se vea, enferma el ambiente y requiere el filtro de la calma.",
    "ConexionDoctrinal": ["Efluvios y Fluidos", "Defensa Espiritual"],
    "NodosSimapticos": []
  },
  "1524: Julio 22 de 1910 - María de Nazaret": {
    "PilotoDe Nazaret": "Paz del alma. María de Nazareth trae paz al misionero por mandato de su protector, reafirmando el acompañamiento constante del espíritu de luz.",
    "CitaInelutable": "Vengo hoy mandada por tu protector, a traerte la paz de tu alma que yo te prometí.",
    "EjemploPedagogico": "Incluso en la tormenta más fuerte, el faro del amor espiritual brilla para guiar al navegante.",
    "ConexionDoctrinal": ["María de Nazareth", "Paz Espiritual"],
    "NodosSimapticos": []
  },
  "1548: Julio 24 de 1910 - Francisco Xavier": {
    "PilotoDeCoherencia": "Paciencia espiritual. Los espíritus de luz sufren por el padecimiento de los hombres y piden paciencia para los asilados y protegidos.",
    "CitaInelutable": "A nosotros no se nos hacen tan largas [las horas], si no fuera por lo que padecéis vosotros.",
    "EjemploPedagogico": "El tiempo del espíritu se mide en progresos, el del hombre en dolores.",
    "ConexionDoctrinal": ["Tiempo Espiritual", "Empatía Universal"],
    "NodosSimapticos": []
  },
  "1579: Julio 26 de 1910 - Posesión de M. P.": {
    "PilotoDeCoherencia": "Orden en la sesión. La posesión debe ser espontánea por la médium más dispuesta, evitando jerarquías arbitrarias y el agotamiento de los instrumentos.",
    "CitaInelutable": "La médium que más dispuesta esté, aquella tome posesión.",
    "EjemploPedagogico": "En una orquesta, el instrumento que mejor afinado esté es el que debe liderar la melodía del momento.",
    "ConexionDoctrinal": ["Higiene Mediumnímica", "Igualdad de Facultades"],
    "NodosSimapticos": []
  },
  "1645: Julio 29 de 1910 - Advertencia": {
    "PilotoDeCoherencia": "Espíritus Gnomos. Explicación de los fenómenos físicos menores como obra de espíritus 'juguetones' o gnomos, alejando el misticismo del hecho natural.",
    "CitaInelutable": "Se convierte en un espíritu Gnomo o juguetón, como decís.",
    "EjemploPedagogico": "El gnomo es el niño del mundo espiritual; juega con los objetos para anunciar una presencia sin malicia.",
    "ConexionDoctrinal": ["Espíritus Gnomos (o Juguetones)", "Mecánica de Fenómenos"],
    "NodosSimapticos": ["Espíritus Gnomos (o Juguetones)"]
  },
  "1705: Diciembre 31 de 1910 - Escrita": {
    "PilotoDeCoherencia": "Cierre del abismo. Trincado explica que su silencio fue acción intensa para cerrar peligros espirituales descubiertos en julio de 1910.",
    "CitaInelutable": "Estaba, sí, en el fondo del abismo descubierto, empeñado en cerrarlo.",
    "EjemploPedagogico": "A veces el cirujano debe trabajar en silencio y profundidad para cerrar una herida que amenaza la vida del paciente.",
    "ConexionDoctrinal": ["Lucha contra las Sombras", "Soberanía del Misionero"],
    "NodosSimapticos": []
  },
  "1731: Enero 1 de 1911 (Hora 0) - Joaquín.": {
    "PilotoDeCoherencia": "Victoria de la Justicia. Orden militar espiritual para que los enemigos entreguen las armas ante la nobleza y justicia del misionero.",
    "CitaInelutable": "La victoria es de él, ganada con las armas más nobles... La Justicia.",
    "EjemploPedagogico": "El que pelea con la verdad no necesita espadas de hierro; su sola presencia desarma al mentiroso.",
    "ConexionDoctrinal": ["Justicia como Arma", "Autoridad Espiritual"],
    "NodosSimapticos": []
  },
  "1745: Enero 1 de 1911 (Hora 010) - Silvestre": {
    "PilotoDeCoherencia": "Batallas del Señor. El año 1911 se anuncia con menores luchas materiales pero mayores desafíos espirituales de conciencia.",
    "CitaInelutable": "Las luchas materiales no serán tan grandes... pero las espirituales serán mayores.",
    "EjemploPedagogico": "Ya has vencido el hambre; ahora debes vencer la duda y el orgullo.",
    "ConexionDoctrinal": ["Lucha Espiritual", "Año de Transición"],
    "NodosSimapticos": []
  },
  "1760: Enero 1 (Hora, 030) - Escrita, Trincado": {
    "PilotoDeCoherencia": "Venciendo la escasez. Reconocimiento de los sacrificios pasados y la felicidad que espera en la nueva etapa de la obra.",
    "CitaInelutable": "No bastaba tu escasez por el robo de tus sudores.",
    "EjemploPedagogico": "El sudor del trabajador es la savia que alimenta el árbol de la justicia futura.",
    "ConexionDoctrinal": ["Sacrificio por la Causa"],
    "NodosSimapticos": []
  },
  "1785: Enero 1 de 1911 (Hora 7) - Francisco Xavier": {
    "PilotoDeCoherencia": "Despertar del letargo. Llamado a abrir los ojos a la luz para aprender a discernir más allá de la simple buena fe.",
    "CitaInelutable": "Horam est, jam nos, de Somno surgere... aprenderéis a discernir.",
    "EjemploPedagogico": "Tener buena fe no basta si caminas a ciegas; necesitas la luz de la razón para no tropezar.",
    "ConexionDoctrinal": ["Discernimiento Racional", "Luz de la Verdad"],
    "NodosSimapticos": []
  },
  "1813: Enero 3 de 1911 - por haberla arrancado de sus malos caminos.": {
    "PilotoDeCoherencia": "Alegría de los protectores. Los guías celebran la salud de los niños y el rescate de almas de caminos erróneos.",
    "CitaInelutable": "Feliz hora en la que los espíritus protectores pueden hablarles a sus protegidos.",
    "EjemploPedagogico": "El padre se alegra cuando el hijo vuelve a casa sano y con ganas de estudiar.",
    "ConexionDoctrinal": ["Alegría Espiritual", "Rescate de Almas"],
    "NodosSimapticos": []
  },
  "1833: Enero 3 de 1911 - sólo con tan gran ayuda pudo ser salvado.": {
    "PilotoDeCoherencia": "Negociación por la vida. El niño que 'no quería quedarse' es convencido por los espíritus mediante el compromiso de amor de sus padres.",
    "CitaInelutable": "Este pebete no quería quedarse, y ahora ya lo hemos convencido.",
    "EjemploPedagogico": "Incluso un espíritu pequeño puede decidir si encarna o no; solo el amor lo convence de aceptar la carga de la carne.",
    "ConexionDoctrinal": ["Libre Albedrío de Encarnación", "Amor como Vínculo"],
    "NodosSimapticos": []
  },
  "1850: Enero 10 de 1911 - Escrita, Trincado": {
    "PilotoDeCoherencia": "Consuelo moral y material. La asistencia espiritual debe atender tanto la causa moral como el padecimiento material del enfermo.",
    "CitaInelutable": "Padece mucho, moral y materialmente.",
    "EjemploPedagogico": "No puedes curar la fiebre si el alma está ardiendo en tristeza; cura la causa y el cuerpo sanará.",
    "ConexionDoctrinal": ["Asistencia Integral"],
    "NodosSimapticos": []
  },
  "1880: Enero 16 de 1911 - Obrar vosotros, porque lo quiero yo.": {
    "PilotoDeCoherencia": "Fundamento en el Amor. La ley de amor como base única de donde derivan todas las demás leyes y cimientos de la Escuela.",
    "CitaInelutable": "Empezar por la ley universal... el Amor... fundamento de tu obra.",
    "EjemploPedagogico": "El amor es la raíz; la justicia, la ciencia y la sabiduría son las ramas que crecen de ella.",
    "ConexionDoctrinal": ["Ley de Amor", "Cimientos de la Escuela"],
    "NodosSimapticos": []
  },
  "1918: Enero 15 de 1911 - Escrita, Trincado": {
    "PilotoDeCoherencia": "Ignacio de Loyola como guía. Manifestación de Ignacio para calmar las inquietudes del misionero y ofrecer respuestas directas.",
    "CitaInelutable": "Hijo amado: he presenciado la prontitud de mi guiado... ¿Tienes algo que preguntarme? – Sí, hermano Ignacio.",
    "EjemploPedagogico": "El guía no regaña, orienta; su sabiduría es el faro que calma la ansiedad del que camina.",
    "ConexionDoctrinal": ["Ignacio de Loyola (como Espíritu)", "Pregunta y Respuesta Espiritual"],
    "NodosSimapticos": ["Ignacio de Loyola (como Espíritu)"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Espíritus Gnomos (o Juguetones)": {
    "Definición": "Categoría de espíritus de baja escala evolutiva o en estado de 'niñez espiritual' que, sin maldad, realizan pequeños fenómenos físicos (ruidos, movimiento de objetos) para llamar la atención o simplemente por juego. La doctrina trincadista los desmitifica, explicándolos como operarios inconscientes de leyes físicas magnetizadas.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesión del 29 de Julio de 1910).",
    "Conexiones": ["Fenomenología Física", "Magnetismo", "Espíritus de Baja Escala"],
    "Obras": ["Filosofía Enciclopédica Universal", "El Espiritismo Estudiado"]
  },
  "Aviso Espiritual": {
    "Definición": "Señal física o intuitiva enviada por los espíritus protectores para alertar al encarnado sobre una situación urgente, peligro o necesidad de comunicación. En la Escuela, estos avisos son tomados con seriedad racional para ajustar la conducta o iniciar sesiones de auxilio.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Hecho del 18 de Julio de 1910).",
    "Conexiones": ["Mediumnidad Intuitiva", "Protección Espiritual", "Vibración"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  },
  "Ignacio de Loyola (como Espíritu)": {
    "Definición": "Espíritu que, habiendo sido el fundador de la Compañía de Jesús, se manifiesta en la Escuela de Trincado como un colaborador del espíritu de verdad, despojado de sus antiguos dogmas religiosos. Su labor es de guía y consejo directo, demostrando la transformación de los misioneros a través de los siglos.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Comunicaciones de Enero de 1911).",
    "Conexiones": ["Francisco Xavier", "Revisión de Actos", "Misioneros"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 17 nodos PURA CALIDAD 1:1 de Filosofía Enciclopédica Tomo 1 (Batch 3) y 3 términos sinápticos.');
