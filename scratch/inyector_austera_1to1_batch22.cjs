const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 22)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "14799: LA ETOLOGÍA RACIONAL": {
    "PilotoDeCoherencia": "La etología es la ciencia del carácter. Pero no para catalogarlo como en un museo, sino para formarlo. La educación es el arte verdadero de la etología. Estudiamos las leyes de formación del carácter para que el hombre sea dueño de sus tendencias y no un esclavo de sus herencias. La etología es la forja del hombre nuevo.",
    "CitaInelutable": "La educación es el arte verdadero de la Etología racional.",
    "EjemploPedagogico": "Es como cultivar un campo: la etología te dice qué tipo de tierra tienes (el carácter base) y la educación te enseña cómo ararla y qué semillas poner para que el fruto sea de justicia y no de maleza.",
    "ConexionDoctrinal": ["Etología", "Educación", "Carácter"],
    "NodosSimapticos": ["Ciencia del Carácter", "Forja del Ser", "Arte de Educar"]
  },
  "15090: GRADOS VS CLASES — LA GRAN DISTINCIÓN": {
    "PilotoDeCoherencia": "Denunciamos la división de la sociedad en clases. Las clases son antagónicas, nacen del privilegio y elevan a los malvados. Los grados, en cambio, son sucesivos y nacen del progreso espiritual. Los grados no rebajan a nadie, son el estímulo para ascender. En la Comuna no hay clases, solo hay grados de sabiduría.",
    "CitaInelutable": "Las clases son antagónicas y deprimentes; los grados son sucesivos y estimulantes.",
    "EjemploPedagogico": "Imagina una escalera: cada peldaño es un grado. El que está arriba ayuda al que está abajo a subir. Las clases son muros que separan habitaciones: el que está en una habitación de lujo desprecia al que está en la choza. Queremos escaleras, no muros.",
    "ConexionDoctrinal": ["Grados de Estudio", "Igualdad Social", "Comuna"],
    "NodosSimapticos": ["Grados vs Clases", "Escalera de Progreso", "Muros de Privilegio"]
  },
  "15360: LA SUPREMACÍA DE LOS MAL EDUCADOS": {
    "PilotoDeCoherencia": "Los que hoy dirigen el mundo son a menudo 'mal educados' que han confundido los grados con las clases. Han usado su posición para oprimir en lugar de para servir. Denunciamos esta etología deprimente que solo busca mantener el statu quo del error. El verdadero superior es el que más sirve, no el que más manda.",
    "CitaInelutable": "La supremacía de los mal educados es la causa del atraso social.",
    "EjemploPedagogico": "Es como un capitán de barco que no sabe navegar pero tiene el título por herencia. El barco se hundirá. El verdadero capitán es el que conoce el mar y cuida de su tripulación por su propio mérito y estudio.",
    "ConexionDoctrinal": ["Crítica Social", "Mérito", "Servicio"],
    "NodosSimapticos": ["Mal Educados", "Falso Mando", "Atraso Social"]
  },
  "15640: EL MÉTODO INDUCTIVO-INVERSO EN ETOLOGÍA": {
    "PilotoDeCoherencia": "Usamos el método inductivo-inverso para estudiar la sociedad. Miramos los efectos (la división, la guerra, la miseria) y vamos hacia atrás hasta encontrar la causa: la falta de educación racional y el predominio de los instintos bajos. Al conocer la causa, podemos proceder a la cura mediante la Escuela.",
    "CitaInelutable": "Del efecto social a la causa etológica: ese es nuestro camino de investigación.",
    "EjemploPedagogico": "Si ves una enfermedad en un árbol, vas a la raíz. Si ves una enfermedad en la sociedad (las clases), vas a la educación de los caracteres. El método inverso nos revela la raíz del problema.",
    "ConexionDoctrinal": ["Metodología", "Inducción Inversa", "Diagnóstico Social"],
    "NodosSimapticos": ["Inducción Inversa", "Raíz Social", "Diagnóstico del Ser"]
  },
  "15920: QUINTA PARTE — LA ÉTICA DE LA LEY": {
    "PilotoDeCoherencia": "Iniciamos el estudio de la Ética. Pero no la ética de las conveniencias sociales o religiosas. La Ética Racional es la ciencia de la conducta humana en total armonía con la Ley de Amor. Es el código de comportamiento del espíritu en su marcha hacia la perfección. No hay moral sin razón.",
    "CitaInelutable": "La Ética es la práctica constante de la justicia en cada acto de la vida.",
    "EjemploPedagogico": "La lógica es el plano de la casa; la ética es el acto de poner cada ladrillo con rectitud. Una ética sin lógica es una construcción torcida que se caerá ante la primera prueba.",
    "ConexionDoctrinal": ["Ética Racional", "Conducta", "Ley de Amor"],
    "NodosSimapticos": ["Moral de la Ley", "Práctica de Justicia", "Código del Espíritu"]
  },
  "16190: FUNDAMENTOS DE LA ÉTICA": {
    "PilotoDeCoherencia": "Los fundamentos de la ética no están en libros sagrados, sino en la esencia del espíritu. El primer fundamento es la responsabilidad. Cada acto tiene una consecuencia eterna. El segundo es la solidaridad. No puedes ser feliz si tu hermano sufre. Estos fundamentos son inamovibles porque son naturales.",
    "CitaInelutable": "La ética se fundamenta en la responsabilidad del ser y la solidaridad de la especie.",
    "EjemploPedagogico": "Es como la gravedad: si saltas de un muro, caes. Esa es la ley física. Si dañas a un hermano, tu espíritu se ensombrece. Esa es la ley ética. Ambas son leyes de la naturaleza.",
    "ConexionDoctrinal": ["Responsabilidad", "Solidaridad", "Leyes Naturales"],
    "NodosSimapticos": ["Fundamentos Éticos", "Gravedad Moral", "Eterna Consecuencia"]
  },
  "16460: LA EDUCACIÓN COMO TRANSFORMADORA": {
    "PilotoDeCoherencia": "Reafirmamos que la educación racional es la única herramienta capaz de transformar al animal-hombre en hombre-espíritu. La educación debe ser universal, gratuita y basada en la verdad demostrada. Solo así eliminaremos los prejuicios que dividen a la humanidad.",
    "CitaInelutable": "La educación es el cincel que libera la belleza del espíritu atrapada en la piedra de la materia.",
    "EjemploPedagogico": "Imagina una estatua de mármol cubierta de barro. La educación no crea la estatua; la educación quita el barro (la ignorancia) para que la obra maestra de Eloí (el espíritu) pueda ser vista.",
    "ConexionDoctrinal": ["Educación Universal", "Transformación", "Luz"],
    "NodosSimapticos": ["Cincel del Espíritu", "Limpieza de Barro", "Hombre-Espíritu"]
  },
  "16730: EL ANTAGONISMO DE LAS CLASES": {
    "PilotoDeCoherencia": "Las clases sociales son el resultado del odio y el robo histórico. Generan antagonismo porque unos viven del sudor de los otros. Mi Escuela propone disolver las clases en la fraternidad de los grados. Donde hay clases hay guerra; donde hay grados hay emulación santa y progreso común.",
    "CitaInelutable": "Donde la clase separa, el grado une por el mérito del trabajo.",
    "EjemploPedagogico": "Es como un equipo de fútbol: hay defensas y delanteros (grados de función), pero todos son el mismo equipo y ganan o pierden juntos. Las clases serían como si los delanteros quisieran ser los dueños del campo y no dejaran jugar a los defensas.",
    "ConexionDoctrinal": ["Antagonismo", "Fraternidad", "Justicia Económica"],
    "NodosSimapticos": ["Guerra de Clases", "Emulación Santa", "Función y Grado"]
  },
  "17000: LA CÚSPIDE DE LOS GRADOS SUPERIORES": {
    "PilotoDeCoherencia": "El objetivo de la vida es ascender por la escala de los grados hasta la sabiduría total. No para despreciar a los de abajo, sino para tener más luz que compartir. El grado superior conlleva la mayor responsabilidad. Ser el primero significa ser el servidor de todos.",
    "CitaInelutable": "En la cúspide del progreso solo hay lugar para el amor y el servicio universal.",
    "EjemploPedagogico": "Es como el sol: está en lo más alto (grado superior) no para mandar, sino para dar luz y calor a toda la tierra sin distinción. Cuanta más luz tengas, más obligado estás a iluminar.",
    "ConexionDoctrinal": ["Sabiduría", "Servicio", "Responsabilidad Mayor"],
    "NodosSimapticos": ["Cúspide de Grado", "Servidor de Todos", "Sol de Sabiduría"]
  },
  "17270: EL FIN DE LA SUPREMACÍA": {
    "PilotoDeCoherencia": "El tiempo de las supremacías basadas en la fuerza o el oro ha terminado. La única supremacía legítima es la de la sabiduría puesta al servicio de la justicia. La Comuna enterrará para siempre el concepto de 'mando' para sustituirlo por el de 'orientación fraternal'.",
    "CitaInelutable": "El mando es del error; la orientación es de la Verdad.",
    "EjemploPedagogico": "En el pasado, el jefe usaba el látigo. En el futuro, el hermano mayor usa la lámpara. El látigo obliga al cuerpo; la lámpara guía al espíritu. Elige la lámpara.",
    "ConexionDoctrinal": ["Fin de Tiranías", "Orientación Fraternal", "Verdad"],
    "NodosSimapticos": ["Fin de Supremacías", "Lámpara del Hermano", "Mando vs Orientación"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Etología": {
    "Definición": "La ciencia del carácter y su formación a través de la educación racional, orientada a liberar al espíritu de sus ataduras instintivas y herencias negativas.",
    "Contexto": "Quinta Parte de Filosofía Austera Racional.",
    "Conexiones": ["Educación", "Carácter", "Psicología"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Grados vs Clases": {
    "Definición": "Distinción sociológica fundamental de la Escuela: las clases son divisiones artificiales y antagónicas basadas en el privilegio; los grados son niveles sucesivos de progreso basados en el mérito y la sabiduría.",
    "Contexto": "Sociología Racional en Filosofía Austera Racional.",
    "Conexiones": ["Igualdad", "Progreso", "Comuna"],
    "Obras": ["Filosofía Austera Racional", "Código de Amor Universal"]
  },
  "Ética Racional": {
    "Definición": "La ciencia de la conducta humana basada en la razón y la armonía con la Ley de Amor, rechazando toda moral dogmática o de conveniencia social.",
    "Conexiones": ["Moral", "Justicia", "Responsabilidad"],
    "Obras": ["Filosofía Austera Racional", "Código de Amor Universal"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Filosofía Austera Racional (Batch 22) y 3 términos sinápticos.');
