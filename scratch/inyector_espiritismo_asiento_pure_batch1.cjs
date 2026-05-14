const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

// Iniciar fresco para calidad pura 1:1 de El Espiritismo en su Asiento
let esencia = {};
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - El Espiritismo en su Asiento (Batch 1 - Claves 0 a 19)
const nuevosNodos = {
  "8: ESCUELA MAGNÉTICO - ESPIRITUAL DE LA COMUNA UNIVERSAL: ESPIRITISMO EN SU ASIENTO": {
    "PilotoDeCoherencia": "Estructura formal de la portada de la obra.",
    "CitaInelutable": "ESCUELA MAGNÉTICO - ESPIRITUAL DE LA COMUNA UNIVERSAL ESPIRITISMO EN SU ASIENTO JOAQUÍN TRINCADO PARTE 1",
    "EjemploPedagogico": "El acta de nacimiento del libro que viene a asentar la ciencia.",
    "ConexionDoctrinal": ["Identidad de la Obra"],
    "NodosSimapticos": []
  },
  "24: PROCLAMA": {
    "PilotoDeCoherencia": "Apertura de la Proclama Oficial que resume los postulados de la Escuela.",
    "CitaInelutable": "PROCLAMA",
    "EjemploPedagogico": "Estructura del texto.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "26: El Universo Solidarizado.": {
    "PilotoDeCoherencia": "Primer postulado de la Proclama. Nada existe aislado; la interdependencia cósmica rige todo el Universo material y espiritual.",
    "CitaInelutable": "El Universo Solidarizado.",
    "EjemploPedagogico": "No somos islas; el aleteo de un insecto afecta la gravedad de una estrella, y el pensamiento de un hombre afecta al éter del cosmos entero.",
    "ConexionDoctrinal": ["Solidaridad Universal", "Interdependencia"],
    "NodosSimapticos": ["Red Cósmica"]
  },
  "28: El mundo todo Comunizado.": {
    "PilotoDeCoherencia": "Segundo postulado de la Proclama. El destino inexorable de la Tierra: abatir fronteras para adoptar el régimen de la Comuna Universal, imitando la armonía del cosmos.",
    "CitaInelutable": "El mundo todo Comunizado.",
    "EjemploPedagogico": "La Tierra no puede ser un rompecabezas de naciones peleando; debe fundirse en una sola patria sin divisiones.",
    "ConexionDoctrinal": ["Comuna Mundial", "Destino Planetario"],
    "NodosSimapticos": ["Mundo sin Fronteras"]
  },
  "30: LA LEY es una. La sustancia una.": {
    "PilotoDeCoherencia": "Tercer postulado de la Proclama. Aniquilación de la dualidad (Dios/Satanás, cielo/infierno). Todo el universo proviene de una sola sustancia (Éter) y se rige por una sola ley (Afinidad).",
    "CitaInelutable": "LA LEY es una. La sustancia una. Uno es el principio. Uno es el fin.",
    "EjemploPedagogico": "El cosmos es de una sola pieza; no hay dos creadores ni dos materias. Todo es H2O cósmica vibrando a distintas velocidades.",
    "ConexionDoctrinal": ["Monismo Trincadista", "Unidad de la Creación"],
    "NodosSimapticos": ["Una Sola Pieza"]
  },
  "34: Todo es Magnetismo Espiritual.": {
    "PilotoDeCoherencia": "Cuarto postulado de la Proclama. La confirmación científica y filosófica final: toda fuerza y fenómeno material es impulsado y cohesionado por el espíritu a través del magnetismo.",
    "CitaInelutable": "Todo es Magnetismo Espiritual.",
    "EjemploPedagogico": "El imán no atrae al hierro por magia; es el espíritu atrayendo a la materia. El Magnetismo es la electricidad del alma.",
    "ConexionDoctrinal": ["Magnetismo Universal", "El Motor del Todo"],
    "NodosSimapticos": []
  },
  "36: APOTEGMAS ADOPTADOS": {
    "PilotoDeCoherencia": "Introducción de los axiomas prácticos que debe adoptar el estudiante.",
    "CitaInelutable": "APOTEGMAS ADOPTADOS",
    "EjemploPedagogico": "Estructura.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "38: MÁXIMA: Por el Fruto conocerás el árbol.": {
    "PilotoDeCoherencia": "El sello de calidad moral de la Escuela. El espiritismo no pide fe en palabras, exige comprobación mediante obras de progreso moral y material.",
    "CitaInelutable": "MÁXIMA: Por el Fruto conocerás el árbol.",
    "EjemploPedagogico": "No me digas qué tan elevado es tu espíritu; enséñame cuánto amas y trabajas por tus hermanos, y te creeré.",
    "ConexionDoctrinal": ["Comprobación por Obras", "Rechazo del Misticismo Verbal"],
    "NodosSimapticos": []
  },
  "40: Consejo: Busca el consuelo en la verdad.": {
    "PilotoDeCoherencia": "El ancla de la resiliencia y el rechazo a la ilusión. Y los Mandatos fundamentales del progreso individual y colectivo.",
    "CitaInelutable": "Consejo: Busca el consuelo en la verdad. Mandatos: Conócete a ti mismo. Ama a tu hermano.",
    "EjemploPedagogico": "El consuelo no está en una mentira piadosa sobre el cielo; el consuelo está en saber que la vida no termina y que tú eres el arquitecto de tu destino. Para ello, analízate a ti mismo y sirve al prójimo.",
    "ConexionDoctrinal": ["Consuelo en la Razón", "Doble Mandato Doctrinal"],
    "NodosSimapticos": ["Consuelo Racional"]
  },
  "44: AXIOMA: En él estaba la vida, y la vida es la luz de los hombres.": {
    "PilotoDeCoherencia": "Postulado sobre la chispa inmanente. La vida no está 'afuera' en un templo; reside dentro del espíritu del hombre, y es esa vida/razón la que ilumina su camino.",
    "CitaInelutable": "AXIOMA: En él estaba la vida, y la vida es la luz de los hombres.",
    "EjemploPedagogico": "No busques faroles fuera de tu casa si el generador de luz está dentro de tu alma.",
    "ConexionDoctrinal": ["La Luz del Espíritu", "Vida Inmanente"],
    "NodosSimapticos": []
  },
  "46: PROGRAMA PERPETUO DE ESTUDIOS: LA VIDA ETERNA Y CONTINUADA": {
    "PilotoDeCoherencia": "Declaración del currículo de la Escuela. El espiritismo no es una carrera finita; estudia la evolución constante del espíritu a través de las encarnaciones, sin principio ni fin.",
    "CitaInelutable": "PROGRAMA PERPETUO DE ESTUDIOS: LA VIDA ETERNA Y CONTINUADA",
    "EjemploPedagogico": "En las universidades del mundo te gradúas en 5 años; en la Escuela del Espiritismo te pasas la eternidad entera aprendiendo, porque la vida nunca se detiene.",
    "ConexionDoctrinal": ["Vida Eterna", "Estudio Perpetuo", "Evolución Continua"],
    "NodosSimapticos": ["Currículo Eterno"]
  },
  "50: DISTRIBUCIÓN: CONFERENCIAS VERBALES Y MEDIANÍMICAS": {
    "PilotoDeCoherencia": "Organización práctica de la Escuela en su época fundacional y presentación de las ediciones de la obra.",
    "CitaInelutable": "DISTRIBUCIÓN. CONFERENCIAS VERBALES Y MEDIANÍMICAS... 1ª. EDICIÓN, agosto de 1919.",
    "EjemploPedagogico": "El registro administrativo y temporal del libro, marcando el orden de las cátedras y el desarrollo de la obra.",
    "ConexionDoctrinal": ["Estructura Administrativa", "Registro de Ediciones"],
    "NodosSimapticos": []
  },
  "74: Prólogo de la 2ª. Edición": {
    "PilotoDeCoherencia": "El propósito estratégico de la obra. Trincado declara que este libro fue enviado como la luz definitiva después de haber mandado sus libros previos (Strossmayer y Primer Rayo de Luz) como una maquinaria destructora ('Draga y Aplanadora') para derribar los dogmas.",
    "CitaInelutable": "Destinado como fué “El Espiritismo en su Asiento” a rasgar el crepúsculo... Como Draga y como Aplanadora, mandamos por delante el acerado folleto 'Strossmayer' y el aplastante de errores: 'El Primer Rayo de Luz'.",
    "EjemploPedagogico": "Primero pasó el tractor demoliendo la iglesia y el fanatismo. Ahora llega este libro trayendo los ladrillos científicos para asentar la nueva casa del intelecto.",
    "ConexionDoctrinal": ["Función de la Obra", "Estrategia Doctrinal", "Aplanadora de Errores"],
    "NodosSimapticos": ["Draga Doctrinal"]
  },
  "95: llevar a sus lectores a las mansiones de “ATHANASIA” (inmortalidad) seguro de conseguir su": {
    "PilotoDeCoherencia": "La promesa del libro. Su lectura razonada garantizará a los hombres el entendimiento pleno de la Athanasia (inmortalidad), sacándolos del miedo a la muerte ficticia.",
    "CitaInelutable": "Llevar a sus lectores a las mansiones de 'ATHANASIA' (inmortalidad) seguro de conseguir su fin, con todo el que lo lea razonando.",
    "EjemploPedagogico": "Este libro es un pasaporte a la inmortalidad consciente. Quien lo lee usando la lógica, jamás vuelve a temerle a un ataúd.",
    "ConexionDoctrinal": ["Athanasia", "Inmortalidad Consciente", "El Fin de la Muerte"],
    "NodosSimapticos": ["Mansiones de Inmortalidad"]
  },
  "99: ilustrado a los hombres en los axiomas de la verdad suprema, en más de CIEN CÁTEDRAS,": {
    "PilotoDeCoherencia": "El impacto y avance de la Escuela. Trincado celebra la expansión física del movimiento y la inevitable caída de las religiones a medida que los hombres recuperan los derechos que antes 'relegaron' en manos del clero.",
    "CitaInelutable": "En más de CIEN CÁTEDRAS... Así lo confirman las religiones en su irremediable caída y desaparición, pues los hombres, recobran los derechos que en la ignorancia RELEGARON.",
    "EjemploPedagogico": "Las 100 cátedras son 100 antorchas encendidas. Mientras más iluminan, más rápido se derrite el hielo de las religiones y el hombre recupera su libertad secuestrada.",
    "ConexionDoctrinal": ["Expansión de la Escuela", "Caída de las Religiones", "Recuperación de Derechos"],
    "NodosSimapticos": ["Recuperación del Intelecto"]
  },
  "137: “Siempre más allá”": {
    "PilotoDeCoherencia": "El lema incombustible de la Escuela y la firma con la cronología de la Nueva Era (Año 18), marcando la ruptura total con el calendario cristiano.",
    "CitaInelutable": "“Siempre más allá” Buenos Aires, 1º de abril de 1929 era vulgar: día 13 del mes 7 del año 18 Nueva Era.",
    "EjemploPedagogico": "El progreso no tiene punto final; el lema es no detenerse jamás. Y como la era religiosa murió, fechamos los documentos en el Año 18 de la Nueva Era espiritual.",
    "ConexionDoctrinal": ["Lema de la Escuela", "Cronología de la Nueva Era", "Siempre más allá"],
    "NodosSimapticos": ["Nueva Era Trincadista"]
  },
  "148: Premisa": {
    "PilotoDeCoherencia": "El diagnóstico del siglo. Trincado describe la época como momentos 'terribles' y 'agónicos', donde la humanidad está asfixiada por la incertidumbre, el dolor y los nubarrones oscuros de la ignorancia, justificando la urgencia de asentar la verdad.",
    "CitaInelutable": "Terribles son los momentos por los que atraviesa la humanidad de la tierra. Agónica la situación que soporta cada hombre... Incierto y obscuro está el horizonte.",
    "EjemploPedagogico": "La humanidad está en un barco en medio de una tormenta sin brújula. Trincado no escribe para filosofar en paz, escribe para tirar un salvavidas en medio del huracán social.",
    "ConexionDoctrinal": ["El Crepúsculo Humano", "Diagnóstico del Mundo", "Urgencia de la Verdad"],
    "NodosSimapticos": ["El Huracán Social"]
  },
  "334: PREFACIO": {
    "PilotoDeCoherencia": "La metáfora del Crepúsculo. Se anuncia que la noche (la religión/ignorancia) ha pasado, pero el amanecer actual es un 'crepúsculo incierto', porque los rezagos dogmáticos amenazan con nublar el día. La obra viene a ser el sol fuerte que rasgue esos nubarrones.",
    "CitaInelutable": "Pasó la noche; en el horizonte se anuncia el sol; pero es la hora del crepúsculo incierto y es terrible, porque pueden dominar los nubarrones y sin gozar de la bella alborada, entrar en un día tormentoso.",
    "EjemploPedagogico": "Ya matamos al monstruo del dogmatismo (la noche), pero ahora el mundo puede caer en el fanatismo científico o en el espiritualismo falso (los nubarrones). Este libro es el Sol de Mediodía que seca toda confusión.",
    "ConexionDoctrinal": ["El Crepúsculo Incierto", "El Sol de la Razón", "Transición de Eras"],
    "NodosSimapticos": ["Nubarrones Dogmáticos"]
  },
  "584: LIBRO PRIMERO – PARTE PRIMERA": {
    "PilotoDeCoherencia": "Estructura formal que da inicio a la exposición técnica de la obra.",
    "CitaInelutable": "LIBRO PRIMERO – PARTE PRIMERA",
    "EjemploPedagogico": "Apertura del tratado.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "588: CAPÍTULO I: ¿Qué es el espiritismo?": {
    "PilotoDeCoherencia": "El rescate del trabajo de Allan Kardec. Trincado reconoce la labor de su predecesor (Kardec) afirmando que este fue enviado a recoger 'fragmentos diseminados' para preparar el terreno, pero que la obra final y el asiento total le corresponde a la Escuela Magnética.",
    "CitaInelutable": "Sé que Kardec dijo este mismo título y otros más que se le mandó hacer, recogiendo los fragmentos diseminados en todo el mundo, para preparar el camino a la obra que ahora se termina.",
    "EjemploPedagogico": "Kardec fue el albañil que recogió los ladrillos sueltos por el mundo. Trincado es el arquitecto final que asienta esos ladrillos y le pone el techo a la casa del Espiritismo.",
    "ConexionDoctrinal": ["El Rol de Allan Kardec", "Preparación del Camino", "La Obra Terminada"],
    "NodosSimapticos": ["El Albañil y el Arquitecto"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Draga Doctrinal (Aplanadora)": {
    "Definición": "Términos militares-filosóficos con los que Trincado describe la función de sus libros previos ('Primer Rayo de Luz' y 'Strossmayer'). Estos sirvieron como maquinaria pesada para destruir los cimientos del dogmatismo religioso, limpiando el terreno para que 'El Espiritismo en su Asiento' pudiera construir la ciencia pura sobre bases sólidas.",
    "Contexto": "Prólogo de la 2ª Edición de El Espiritismo en su Asiento.",
    "Conexiones": ["Estrategia Doctrinal", "Destrucción del Error", "Asiento de la Verdad"],
    "Obras": ["El Espiritismo en su Asiento", "Primer Rayo de Luz"]
  },
  "Athanasia (Inmortalidad)": {
    "Definición": "Término griego adoptado para representar la Inmortalidad Racional y Consciente del espíritu humano. Se alcanza no por fe, sino leyendo, comprendiendo y razonando las leyes universales, lo que elimina permanentemente el miedo al dogma de la muerte física.",
    "Contexto": "Prólogo de la 2ª Edición de El Espiritismo en su Asiento.",
    "Conexiones": ["Vida Eterna y Continuada", "El Fin de la Muerte Ficticia"],
    "Obras": ["El Espiritismo en su Asiento"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 20 nodos PURA CALIDAD 1:1 de El Espiritismo en su Asiento (Batch 1) y 2 términos sinápticos.');
