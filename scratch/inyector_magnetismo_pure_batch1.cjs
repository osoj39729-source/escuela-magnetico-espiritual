const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/el-magnetismo-en-su-origen_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

// Iniciar fresco para calidad pura 1:1
let esencia = {};
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 Pura - El Magnetismo en su Origen (Batch 1 - Claves 1 a 12)
const nuevosNodos = {
  "11: ESCUELA MAGNETICO – ESPIRITUAL DE LA COMUNA UNIVERSAL: “EL MAGNETISMO EN SU ORIGEN”": {
    "PilotoDeCoherencia": "Presentación formal de la obra fundacional bajo el amparo de la Escuela Magnético-Espiritual de la Comuna Universal. Se asienta que el 'Método Supremo' no es un curso místico, sino un manual de educación rigurosa.",
    "CitaInelutable": "“EL MAGNETISMO EN SU ORIGEN” “ METODO SUPREMO “ (Manual de Educación Magnética)",
    "EjemploPedagogico": "No se trata de magia ni de ocultismo; es como recibir el manual de usuario de la energía fundamental del Universo.",
    "ConexionDoctrinal": ["Educación Magnética", "Método Supremo", "Comuna Universal"],
    "NodosSimapticos": ["Manual de Energía Cósmica"]
  },
  "31: JOAQUIN TRINCADO: °": {
    "PilotoDeCoherencia": "Sello de autoría del Maestro Fundador. La asunción de la responsabilidad autoral sobre el Método Supremo como piedra angular del magnetismo racional.",
    "CitaInelutable": "JOAQUIN TRINCADO",
    "EjemploPedagogico": "Una firma que no busca vanagloria, sino garantizar la autenticidad y la pureza de la doctrina magnética entregada.",
    "ConexionDoctrinal": ["Autoría Doctrinal", "Responsabilidad del Maestro"],
    "NodosSimapticos": ["Sello de Autenticidad"]
  },
  "44: CONSEJOS Y RECOMENDACIONES A NUESTROS": {
    "PilotoDeCoherencia": "Inicio de las advertencias éticas de la Escuela. El magnetismo no se regala; exige un sacrificio previo y una disposición de estudio por parte del alumno.",
    "CitaInelutable": "CONSEJOS Y RECOMENDACIONES A NUESTROS",
    "EjemploPedagogico": "Es el umbral del templo del saber: antes de entrar a aprender a mover fuerzas, debes aprender la disciplina moral.",
    "ConexionDoctrinal": ["Disciplina Moral", "Sacrificio Prevío"],
    "NodosSimapticos": ["Umbral del Saber"]
  },
  "46: DISCÍPULOS Y ADHERENTES": {
    "PilotoDeCoherencia": "Declaración austera de los deberes del estudiante. Se establece que el objetivo final es la 'Comuna de Amor y Ley'. Se rechaza tajantemente el regalismo y la fe ciega; los derechos se ganan creando obligaciones y el progreso requiere esfuerzo propio y convencimiento.",
    "CitaInelutable": "El que nada sacrifica, a nada tiene derecho. ¿Quieres tener derechos? Créate primero obligaciones. No queremos fe ciega, sino estudio.",
    "EjemploPedagogico": "No puedes reclamar un sueldo (derechos) sin antes haber trabajado la jornada (obligaciones). En la Escuela no hay creyentes perezosos, solo estudiantes activos.",
    "ConexionDoctrinal": ["Esfuerzo Propio", "Rechazo de Fe Ciega", "Comuna de Amor y Ley"],
    "NodosSimapticos": ["Derecho por Esfuerzo", "Fe Racional"]
  },
  "109: MÉTODO SUPREMO: Origen del Magnetismo CUARTA EDICIÓN": {
    "PilotoDeCoherencia": "Alocución triunfal a la Cuarta Edición fotograbada del Método Supremo. Se consagra la obra con laureles de honor y corona de roble por haber vencido el prejuicio mundial y haber convencido a los hombres de la realidad magnética.",
    "CitaInelutable": "Si a la TERCERA llegaste con gloria 'Método Supremo', a la CUARTA entras con los laureles de honor... con corona de Roble, que es la fortaleza del invencible.",
    "EjemploPedagogico": "El libro se personifica como un soldado invencible que, edición tras edición, derriba la ignorancia y se corona no con oro, sino con roble, símbolo de resistencia natural.",
    "ConexionDoctrinal": ["Victoria de la Razón", "Fortaleza del Invencible", "Consagración de la Obra"],
    "NodosSimapticos": ["Corona de Roble", "Soldado de la Verdad"]
  },
  ",": {
    "PilotoDeCoherencia": "Axioma absoluto de la interconexión universal: Todo en el universo es magnetismo espiritual porque hay un solo principio, una sola sustancia y una sola ley. Esto fundamenta lógicamente la solidaridad del universo y la necesidad de la Comuna.",
    "CitaInelutable": "Todo es magnetismo espiritual, porque Uno es el principio y uno es el fin; por lo que La ley es una y la substancia una y el universo está solidarizado.",
    "EjemploPedagogico": "Así como todas las gotas forman un único océano, todos los seres y mundos son parte de la misma sustancia magnética. Separarnos es tan absurdo como cortar el agua con un cuchillo.",
    "ConexionDoctrinal": ["Unidad de Sustancia", "Solidaridad del Universo", "Magnetismo Total"],
    "NodosSimapticos": ["Sustancia Única", "Océano Magnético"]
  },
  "135: TODO ES MAGNETISMO ESPIRITUAL?": {
    "PilotoDeCoherencia": "Defensa legal e histórica del magnetismo. Trincado señala cómo la religión condenaba el magnetismo por miedo y los códigos civiles lo perseguían por ignorancia. Sin embargo, el magnetismo (que es amoral en su origen pero se vuelve moral o inmoral por el uso del operador) triunfa sobre la persecución.",
    "CitaInelutable": "Entre el miedo y la condenación de las religiones al magnetismo y la persecución de los códigos, hay la diferencia, de lo moral a lo amoral.",
    "EjemploPedagogico": "El magnetismo es como la electricidad: no es buena ni mala. La religión condenaba la electricidad porque iluminaba sus rincones oscuros, y las leyes humanas la prohibían porque no sabían controlarla.",
    "ConexionDoctrinal": ["Persecución Religiosa y Civil", "Naturaleza Amoral de la Fuerza", "Uso Consciente"],
    "NodosSimapticos": ["Electricidad Amoral", "Fuerza Perseguida"]
  },
  "200: ya, para las generaciones, quedas FOTOGRABADO en tu totalidad y nadie podrá": {
    "PilotoDeCoherencia": "El fotograbado como garantía de inalterabilidad. Al ser fotograbado, el texto queda blindado contra las 'mistificaciones' de futuros detractores o falsificadores, garantizando la pureza doctrinal para las generaciones venideras.",
    "CitaInelutable": "Quedas FOTOGRABADO en tu totalidad y nadie podrá mistificarte... ponerte la coraza invulnerable.",
    "EjemploPedagogico": "Es como sellar un testamento en piedra y cristal antibalas. Nadie podrá tachar una coma ni añadir dogmas para ensuciar el método original.",
    "ConexionDoctrinal": ["Inalterabilidad de la Doctrina", "Coraza Invulnerable", "Legado Intacto"],
    "NodosSimapticos": ["Testamento Sellado", "Coraza Fotograbada"]
  },
  "218: PREFACIO": {
    "PilotoDeCoherencia": "El reconocimiento ineludible de la fuerza magnética. El autor constata que ya nadie puede dudar de que todo ser vivo posee magnetismo. Aunque al principio se consideraban 'fenómenos' incomprensibles, la acumulación de evidencias lo forzó a entrar en el campo del estudio científico formal.",
    "CitaInelutable": "Nadie duda ya del magnetismo y de que todo ser está dotado de esa fuerza... en millones de casos (tenidos por fenómenos).",
    "EjemploPedagogico": "Antes la gravedad parecía magia o un fenómeno raro si algo levitaba; hoy el magnetismo animal ha pasado de ser un truco de circo a una ciencia anatómica y natural.",
    "ConexionDoctrinal": ["Magnetismo como Ciencia", "Fin de la Duda", "Fuerza Universal Orgánica"],
    "NodosSimapticos": ["Fin del Truco", "Evidencia Universal"]
  },
  "281: PROLOGO A LA SEGUNDA EDICION": {
    "PilotoDeCoherencia": "Agradecimiento a los 'conscientes' de la ciencia magnética que agotaron la primera edición, a pesar de que salió con defectos tipográficos por la negligencia de un impresor. Es la prueba de que la sustancia importaba más que la forma.",
    "CitaInelutable": "Gracias, porque habéis sabido comprender el fondo, a pesar de la primera edición defectuosa (por obra y gracia del impresor que suprimió la última corrección).",
    "EjemploPedagogico": "Si tienes sed, bebes el agua pura sin importar si el vaso tiene un raspón. Los estudiosos buscaron el agua del magnetismo ignorando los errores de imprenta.",
    "ConexionDoctrinal": ["Sed de Conocimiento", "Valor del Fondo sobre la Forma"],
    "NodosSimapticos": ["Agua Pura en Vaso Roto"]
  },
  "415: PROLOGO A LA TERCERA EDICION: A la TERCERA has llegado con gloria HUMILDE MISIONERO MUDO para no poder": {
    "PilotoDeCoherencia": "Elevación poética de la obra como un 'Misionero Mudo'. El libro, incapaz de mentir o ser sobornado, funciona como un sol que ilumina hasta las conciencias más oscuras, hablando a todos en silencio pero con estridencia.",
    "CitaInelutable": "Humilde misionero mudo para no poder mentir. Mas tu estridencia se ha hecho oír de todos. Has hecho como el sol, iluminar los rincones de las conciencias.",
    "EjemploPedagogico": "Un libro de la Verdad es un maestro de papel; no grita, pero su silencio retumba más fuerte que las campanas de una iglesia al encender la razón del lector.",
    "ConexionDoctrinal": ["El Libro como Misionero", "Iluminación de Conciencias", "Silencio Elocuente"],
    "NodosSimapticos": ["Maestro de Papel", "Sol de Tinta"]
  },
  "486: MANUAL DE EDUCACIÓN MAGNÉTICA": {
    "PilotoDeCoherencia": "Apertura del bloque instruccional práctico. El magnetismo no es instinto ciego, requiere educación, método y consciencia para su correcto flujo y aplicación curativa o regeneradora.",
    "CitaInelutable": "MANUAL DE EDUCACIÓN MAGNÉTICA",
    "EjemploPedagogico": "Todos nacemos con músculos, pero no todos son atletas olímpicos. El manual es el gimnasio que entrena el 'músculo' de tu magnetismo.",
    "ConexionDoctrinal": ["Educación Práctica", "Entrenamiento Espiritual"],
    "NodosSimapticos": ["Gimnasio del Espíritu"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Coraza Fotograbada": {
    "Definición": "Metáfora y acción real mediante la cual el Maestro blindó el texto del Método Supremo (fotograbándolo) para impedir cualquier mistificación, interpolación o censura por parte de detractores futuros, garantizando soberanía doctrinal.",
    "Contexto": "Alocución a la 4ta edición de El Magnetismo en su Origen.",
    "Conexiones": ["Inalterabilidad de la Doctrina", "Soberanía Literaria"],
    "Obras": ["El Magnetismo en su Origen"]
  },
  "El Misionero Mudo": {
    "Definición": "Personificación del libro doctrinario como un agente incorruptible de la Verdad. Al ser 'mudo' (papel impreso), no puede ser sobornado ni puede alterar su mensaje por miedo, iluminando las conciencias de forma implacable.",
    "Contexto": "Prólogo a la 3ra edición de El Magnetismo en su Origen.",
    "Conexiones": ["Libro Doctrinal", "Iluminación Racional", "Incorruptibilidad"],
    "Obras": ["El Magnetismo en su Origen"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 12 nodos PURA CALIDAD 1:1 de El Magnetismo en su Origen (Batch 1) y 2 términos sinápticos. Archivo previo borrado.');
