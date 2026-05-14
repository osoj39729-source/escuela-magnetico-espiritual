const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/primer-rayo-de-luz_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Primer Rayo de Luz (Batch 4 - Recta Final y Syllabus)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "6441: LA FATIGA DE LOS CONTENDIENTES": {
    "PilotoDeCoherencia": "Observamos que los contendientes han llegado al límite de sus fuerzas dialécticas. Podestá se repite sin convencer; Montemayor se limita a negar sin construir. El juicio debe cerrarse para que la Verdad tome el mando. La controversia ha cumplido su ciclo de limpiar el terreno de malezas.",
    "CitaInelutable": "La fatiga es la señal de que el error ha gastado todas sus balas.",
    "EjemploPedagogico": "Es como dos boxeadores que después de doce asaltos ya no pueden levantar los brazos. Solo el árbitro (la razón) permanece en pie para dar el veredicto final. El veredicto es la muerte del dogma.",
    "ConexionDoctrinal": ["Ciclo de Controversia", "Fatiga Dialéctica", "Veredicto"],
    "NodosSimapticos": ["Boxeo de Ideas", "Fin del Asalto", "Árbitro de Razón"]
  },
  "8505: LA QUINTA RÉPLICA TEOLÓGICA": {
    "PilotoDeCoherencia": "La quinta intervención de la teología es un lamento de impotencia. Ya no busca razonar, busca compasión o impone el silencio. Denunciamos que la Iglesia llame 'paz' a la sumisión ignorante. El espíritu no quiere la paz del cementerio dogmático, quiere la guerra de la luz contra la sombra.",
    "CitaInelutable": "La paz de la Iglesia es el silencio de las tumbas donde entierran la razón.",
    "EjemploPedagogico": "Es como un carcelero que pide 'paz' a los presos para que no hagan ruido con sus cadenas. Nosotros queremos romper las cadenas, no hacer silencio. El ruido de la razón es la música de la libertad.",
    "ConexionDoctrinal": ["Impotencia Teológica", "Falsa Paz", "Guerra de Luz"],
    "NodosSimapticos": ["Paz de Tumba", "Guerra de Conciencia", "Ruido de Libertad"]
  },
  "8535: EL VALOR DE LA CIENCIA EN EL JUICIO": {
    "PilotoDeCoherencia": "Reafirmamos que la ciencia es el único testigo imparcial. Si la ciencia dice que el mundo es eterno, la Biblia miente al decir que fue hecho en seis días de barro. No hay 'dos verdades', hay una sola y es la que se puede comprobar. La fe que contradice a la ciencia es un delirio.",
    "CitaInelutable": "La verdad es una sola; si la fe la contradice, la fe es mentira.",
    "EjemploPedagogico": "Si un libro dice que el fuego no quema y tú pones la mano y te quemas, ¿a quién le crees? ¿Al libro o a tu mano? Cree a tu mano (la ciencia) y tira el libro (el dogma) al fuego.",
    "ConexionDoctrinal": ["Unidad de Verdad", "Ciencia vs Dogma", "Comprobación"],
    "NodosSimapticos": ["Mano en el Fuego", "Testigo Imparcial", "Libro y Realidad"]
  },
  "8560: LA DESPEDIDA DE LOS ARGUMENTOS": {
    "PilotoDeCoherencia": "Los argumentos humanos cesan para dar paso a la Ley. Hemos permitido que hablaran el católico y el anarquista para que el mundo viera su desnudez. Ahora, el Juez toma la palabra definitiva. El tiempo de la opinión ha terminado; empieza el tiempo de la sentencia inapelable de Eloí.",
    "CitaInelutable": "Cesen las voces de los hombres para que se oiga la voz de la Ley.",
    "EjemploPedagogico": "Es como el silencio que se hace en la sala antes de que el juez dicte la sentencia. Todos han hablado, todos han mentido o han callado verdades. Ahora la Verdad misma se pone en pie.",
    "ConexionDoctrinal": ["Sentencia", "Ley de Amor", "Fin de Opinión"],
    "NodosSimapticos": ["Sala de Justicia", "Voz de la Ley", "Silencio de Sentencia"]
  },
  "8580: EL DESENMASCARAMIENTO FINAL": {
    "PilotoDeCoherencia": "Quitamos la máscara a la hipocresía religiosa. No atacamos a Dios, atacamos al 'ídolo' que los curas llaman Dios. Un Dios que pide sacrificios, que odia la ciencia y que condena al infierno es un monstruo creado por la ambición humana. El verdadero Creador es Amor y Sabiduría.",
    "CitaInelutable": "Tu Dios es un ídolo de barro; el nuestro es el Espíritu de la Vida.",
    "EjemploPedagogico": "Es como quitarle la sábana a alguien que se disfraza de fantasma para asustar a los niños. Debajo de la sábana no hay nada más que un hombre asustado y mentiroso. No tengas miedo al fantasma vacío.",
    "ConexionDoctrinal": ["Ídolos de Barro", "Dios-Amor", "Hipocresía"],
    "NodosSimapticos": ["Sábana de Fantasma", "Monstruo Humano", "Ídolo Vacío"]
  },
  "10025: EL ANÁLISIS DEL SYLLABUS": {
    "PilotoDeCoherencia": "Iniciamos la disección del Syllabus de Pío IX. Es el documento más vergonzoso de la historia humana, donde la Iglesia declara la guerra a la civilización. Analizarlo es necesario para comprender que el catolicismo es, por definición, enemigo del progreso y de la libertad del hombre.",
    "CitaInelutable": "El Syllabus es la confesión de parte que condena al catolicismo ante el tribunal de la historia.",
    "EjemploPedagogico": "Es como leer el diario secreto de un criminal donde confiesa todos sus odios y planes. La Iglesia dejó escrito su odio a la razón en el Syllabus. Solo hay que leerlo para condenarla.",
    "ConexionDoctrinal": ["Syllabus", "Enemigo del Progreso", "Tribunal de Historia"],
    "NodosSimapticos": ["Diario de Criminal", "Guerra a la Razón", "Confesión de Parte"]
  },
  "11555: SYLLABUS PÁRRAFO I: PANTEÍSMO Y RACIONALISMO": {
    "PilotoDeCoherencia": "La Iglesia excomulga a quien diga que Dios es la naturaleza o que está en el hombre. Nosotros decimos: ¡Sea excomulgada la Iglesia! Porque negar que Dios es Todo es negar la vida misma. El Panteísmo Racional es la verdad: nada existe fuera de la sustancia única de Eloí.",
    "CitaInelutable": "Si Dios no es la Naturaleza, entonces Dios es nada.",
    "EjemploPedagogico": "Es como si una ola dijera que el océano no existe o que ella no es parte del agua. La Iglesia es esa ola soberbia que intenta separarse de la vida para dominarla.",
    "ConexionDoctrinal": ["Panteísmo Racional", "Sustancia Única", "Excomunión"],
    "NodosSimapticos": ["Ola Soberbia", "Dios-Todo", "Unidad con la Vida"]
  },
  "11565: LA NEGACIÓN DEL PROGRESO DIVINO": {
    "PilotoDeCoherencia": "El Syllabus condena la idea de que la revelación divina progrese con la razón humana. Esto es absurdo: el espíritu progresa eternamente y su comprensión de la Ley también. La 'revelación' no es un paquete cerrado de mentiras bíblicas, sino la luz que crece en el alma que estudia.",
    "CitaInelutable": "La revelación es el progreso infinito del espíritu en la luz de la razón.",
    "EjemploPedagogico": "Es como decir que un niño de cinco años ya sabe todo lo que necesita saber y que nunca debe aprender nada nuevo. La Iglesia quiere que la humanidad sea un niño eterno y tonto.",
    "ConexionDoctrinal": ["Revelación Progresiva", "Evolución del Espíritu", "Razón"],
    "NodosSimapticos": ["Niño Eterno", "Luz que Crece", "Progreso Infinito"]
  },
  "11575: LA FE CONTRA LA RAZÓN": {
    "PilotoDeCoherencia": "El Papa excomulga a quien diga que la fe de Jesucristo se opone a la razón. Pero nosotros vemos que su 'fe' exige creer en milagros imposibles y mitos absurdos. Si la fe pide que 2+2 sean 5, la fe es enemiga de la razón. El cristianismo es la negación de la lógica.",
    "CitaInelutable": "La fe dogmática es el suicidio de la inteligencia.",
    "EjemploPedagogico": "Es como si te pidieran que caminaras con los ojos vendados hacia un precipicio y te dijeran que 'tener fe' es no caer. Nosotros preferimos quitar la venda y ver el camino.",
    "ConexionDoctrinal": ["Fe vs Razón", "Suicidio de Inteligencia", "Mitos"],
    "NodosSimapticos": ["Venda en los Ojos", "Precipicio Dogmático", "Lógica Racional"]
  },
  "11585: LAS PROFECÍAS COMO FICCIONES": {
    "PilotoDeCoherencia": "La Iglesia defiende las profecías y milagros como verdades divinas. Nosotros los denunciamos como ficciones místicas y mitos creados para engañar. El único 'milagro' es la ley natural cumpliéndose; la única 'profecía' es el cálculo matemático de la evolución. Todo lo demás es charlatanería.",
    "CitaInelutable": "Los milagros son las mentiras que los curas llaman 'poder de Dios'.",
    "EjemploPedagogico": "Es como un truco de magia: el espectador ignorante cree que es un milagro; el que conoce el mecanismo sabe que es una ilusión. La Iglesia es el mago; la humanidad es el espectador engañado. Venimos a enseñar el truco.",
    "ConexionDoctrinal": ["Milagros", "Profecías", "Leyes Naturales"],
    "NodosSimapticos": ["Truco de Magia", "Ilusión Religiosa", "Cálculo de Evolución"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Panteísmo Racional": {
    "Definición": "Doctrina que identifica a la Divinidad (Eloí) con la totalidad del universo, la naturaleza y la sustancia única, rechazando la separación dogmática entre creador y creación.",
    "Contexto": "Defensa contra el Syllabus en Primer Rayo de Luz.",
    "Conexiones": ["Pantógeno", "Unidad de Sustancia", "Eloí"],
    "Obras": ["Primer Rayo de Luz", "Filosofía Austera Racional"]
  },
  "Syllabus": {
    "Definición": "Documento emitido por Pío IX en 1864 que condena los errores modernos (racionalismo, socialismo, libertad de conciencia). Trincado lo usa como prueba de la incompatibilidad del catolicismo con el progreso.",
    "Contexto": "Análisis crítico en Primer Rayo de Luz.",
    "Conexiones": ["Dogma", "Inquisición", "Error Religioso"],
    "Obras": ["Primer Rayo de Luz", "Los Extremos se Tocan"]
  },
  "Revelación Progresiva": {
    "Definición": "Concepto de que el conocimiento de la verdad no es estático ni final, sino que se expande continuamente a medida que el espíritu humano evoluciona en su capacidad de razonar y amar.",
    "Conexiones": ["Progreso Infinito", "Evolución", "Luz"],
    "Obras": ["Primer Rayo de Luz", "El Espiritismo en su Asiento"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Primer Rayo de Luz (Batch 4 - Syllabus Parte 1) y 3 términos sinápticos.');
