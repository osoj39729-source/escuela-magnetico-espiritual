const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/v-i-d-a---d-e----m-a-r-i-a_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Vida de María (Batch 2 - FINAL - Segunda Parte: Historia Espiritual)
const nuevosNodos = {
  "1383-1466: LIBRO 2 - CAPÍTULOS I y II: LA DESCENSIÓN DESDE NEPTUNO": {
    "PilotoDeCoherencia": "Revelación cosmológica sobre el origen del espíritu de María y la familia misionera. Hace 97 siglos terrestres, el planeta Neptuno celebró su Juicio Final. Los espíritus desterrados fueron enviados a la Tierra. Para redimirlos, una familia misionera voluntaria descendió a la Tierra (hace 5674 años). Adán y Eva (la primera encarnación de María) nacieron en la India para iniciar la civilización.",
    "CitaInelutable": "Neptuno celebró su Juicio Final hace 97 siglos... La familia misionera voluntaria descendía para llevar a su Padre a los hijos de la Tierra. Adán y Eva nacieron en la India.",
    "EjemploPedagogico": "La humanidad terrestre es como una colonia penitenciaria. Adán y Eva fueron los primeros maestros voluntarios que bajaron en paracaídas a esa cárcel para enseñar a los presos a construir una sociedad.",
    "ConexionDoctrinal": ["Juicio Final de Neptuno", "Adán y Eva en la India", "Misioneros Voluntarios"],
    "NodosSimapticos": ["Desterrados Neptunianos", "Paracaidistas Cósmicos"]
  },
  "1562-1905: LIBRO 2 - CAPÍTULOS III al V: EL HILO MISIONERO HASTA JESÚS": {
    "PilotoDeCoherencia": "Trazado del hilo conductor de las encarnaciones misioneras. Desde la civilización Védica en la India (iniciada por Adán/Eva), pasando por Abraham (la esterilidad aparente de Sara), hasta la liberación del pueblo de Israel con Moisés. Se consolida el 'almácigo' misionero a través de los profetas (como Isaías), preparando el terreno genético y doctrinario para la llegada de Jesús.",
    "CitaInelutable": "La siembra de las semillas definitivas empieza con la liberación de Israel. El embrión Veda era el almácigo donde se encontraban los 29 misioneros.",
    "EjemploPedagogico": "Es una carrera de relevos milenaria. Eva pasó el testigo a Sara, luego a las madres de los profetas, hasta que la misma Eva encarnó de nuevo como María para cruzar la meta con Jesús.",
    "ConexionDoctrinal": ["Hilo Conductor Misionero", "Almácigo de Israel", "De Eva a María"],
    "NodosSimapticos": ["Carrera de Relevos", "Semilla Veda"]
  },
  "2047-2244: LIBRO 2 - CAPÍTULO VI (Puntos I y II): EL VERDADERO PODER DE MARÍA": {
    "PilotoDeCoherencia": "Trincado explica el 'Poder Omnipotente' de María no como un atributo mágico o divino, sino como la autoridad suprema ganada por la experiencia. Ella es 'Doctora' en Maternidad y Sacrificio. El dogma cristiano al hacerla 'Madre de Dios' intenta elevarla, pero lógicamente ser madre del Creador la haría superior al Creador, lo cual es el mayor absurdo. Su poder reside en su amor de mujer.",
    "CitaInelutable": "El dogma la declaró Madre de Dios, y ser madre es ser mayor que el hijo. No llega a Doctor el niño sino cuando la experiencia le da conocimiento; María es Doctora por experiencia.",
    "EjemploPedagogico": "El poder de María es como el de un General veterano lleno de cicatrices, a quien todo el ejército respeta por su valor en el frente, no porque alguien le haya puesto una corona de cartón.",
    "ConexionDoctrinal": ["Poder Omnipotente por Amor", "Doctorado en Sacrificio", "Absurdo de 'Madre de Dios'"],
    "NodosSimapticos": ["General con Cicatrices", "Autoridad por Experiencia"]
  },
  "2444-2757: LIBRO 2 - CAPÍTULO VI (Puntos III y IV): RESUMEN Y EL AMOR COMO ARMA": {
    "PilotoDeCoherencia": "Conclusión de la obra. Se explica el régimen de evolución de los mundos (los seis días de trabajo y el séptimo de disfrute). Se sentencia que el Amor fue la única arma con la que María ganó todos sus blasones en todas sus existencias. Ni ella ni los misioneros gozan de privilegios, todo fue pagado con sufrimiento y trabajo rudo.",
    "CitaInelutable": "El Amor sólo, ha sido el arma con que ganó todos sus blasones. María en su Amor no reconoció límite en todas sus existencias.",
    "EjemploPedagogico": "María no usó espada ni decreto real para vencer; usó el cincel del amor constante durante miles de años para tallar la libertad en la piedra dura del mundo.",
    "ConexionDoctrinal": ["El Amor como Única Arma", "Ausencia de Privilegios", "Los 7 Días de la Creación"],
    "NodosSimapticos": ["Cincel del Amor", "Blasones de Sufrimiento"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Descensión desde Neptuno": {
    "Definición": "Axioma histórico-cosmológico que revela que la actual humanidad terrestre proviene en gran parte del destierro de espíritus rezagados tras el Juicio Final del planeta Neptuno, hace 97 siglos.",
    "Contexto": "Libro Segundo, Cap. I de Vida de María.",
    "Conexiones": ["Juicio Final", "Solidaridad Universal", "Adán y Eva"],
    "Obras": ["Vida de María", "Conócete a ti mismo"]
  },
  "El Almácigo Misionero": {
    "Definición": "Metáfora utilizada para describir al pueblo de Israel y a la línea genealógica preparada genéticamente desde la India (Vedas) para encarnar a los 29 misioneros mayores, culminando en la dupla María-Jesús.",
    "Contexto": "Libro Segundo, Cap. V de Vida de María.",
    "Conexiones": ["Pueblo de Israel", "Genética Misionera", "Hilo Conductor"],
    "Obras": ["Vida de María", "Los Extremos se Tocan"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 4 nodos finales de Vida de María (Batch 2 - FINAL) y 2 términos sinápticos.');
