const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/los-extremos-se-tocan_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

const nuevosNodos = {
  "7598: CAPÍTULO VEINTE Y CUATRO — El Día del Amor": {
    "PilotoDeCoherencia": "El Día del Amor es la inauguración del 'Cuerpo Ideal'. Usamos la 'gran placa impresa' (la ley grabada en el espíritu) para organizar la sociedad sin abstracciones. Es el momento en que el hombre ya no es un lobo para el hombre, sino una célula consciente de un solo organismo.",
    "CitaInelutable": "Por fin podemos formar el cuerpo ideal sin nada abstracto.",
    "EjemploPedagogico": "Es como un coro donde cada uno canta su parte perfectamente porque todos leen la misma partitura de amor. No hay director autoritario, hay armonía consciente.",
    "ConexionDoctrinal": ["Cuerpo Ideal Social", "Gran Placa Impresa", "Día del Amor"],
    "NodosSimapticos": ["Día del Amor", "Cuerpo Ideal", "Placa Impresa del Espíritu"]
  },
  "7837: CAPÍTULO VEINTE Y CINCO — En el Día del Amor empieza la civilización": {
    "PilotoDeCoherencia": "Civilización no es cultura artística o refinamiento social; es el conocimiento y disfrute de todo lo que la naturaleza ofrece, compartido por todos. Lo anterior a este día fue barbarie disfrazada. La verdadera civilización empieza con la Comuna.",
    "CitaInelutable": "Civilización quiere decir: conocimiento y fruición de todo lo que la tierra produce.",
    "EjemploPedagogico": "Un palacio rodeado de chozas de miseria no es civilización, es un monumento al robo. Civilización es que todos tengan el pan y la luz asegurados por su trabajo.",
    "ConexionDoctrinal": ["Civilización Racional", "Comuna", "Fruición Universal"],
    "NodosSimapticos": ["Civilización Real", "Fruición", "Fin de la Barbarie"]
  },
  "8124: CAPÍTULO VEINTE Y SEIS — Los hombres en el primer grado de la sabiduría": {
    "PilotoDeCoherencia": "Al civilizarse, el hombre alcanza el primer grado de sabiduría: entender que su vida es parte de la vida universal. Ya no vive para el pequeño 'yo', sino para el 'nosotros' eterno. La sabiduría empieza por el reconocimiento de la ley.",
    "CitaInelutable": "Cuando los hombres se han civilizado... alcanzan el primer grado de la sabiduría.",
    "EjemploPedagogico": "Es como el niño que deja de creer que el mundo gira a su alrededor y empieza a entender que él es parte de una familia y una sociedad. Ese es el primer paso del espíritu adulto.",
    "ConexionDoctrinal": ["Sabiduría", "Conciencia Universal", "Grados de Progreso"],
    "NodosSimapticos": ["Primer Grado", "Sabiduría", "Conciencia de Unidad"]
  },
  "8219: CAPÍTULO VEINTE Y SIETE — Luz Plena en la Tierra": {
    "PilotoDeCoherencia": "La Luz Plena estorba a los ladrones y a los hipócritas. Cuando la verdad brilla para todos, el engaño ya no tiene dónde esconderse. La transparencia absoluta es la base de la nueva justicia social.",
    "CitaInelutable": "Sólo los malvados y los hipócritas temen la luz: a los ladrones les estorba la luz.",
    "EjemploPedagogico": "En una habitación a oscuras puedes esconder cualquier suciedad. Con luz plena, tienes que limpiar. La doctrina es esa luz que obliga a la limpieza moral del mundo.",
    "ConexionDoctrinal": ["Luz de la Verdad", "Transparencia Doctrinal", "Fin de la Hipocresía"],
    "NodosSimapticos": ["Luz Plena", "Fin de la Hipocresía", "Luz vs Ladrones"]
  },
  "8363: CAPÍTULO VEINTE Y OCHO — La Tierra, renovada, parece otro planeta": {
    "PilotoDeCoherencia": "La renovación no es solo moral, es física. La vibración del espíritu renovado afecta a la materia misma. La Tierra deja de ser un 'valle de lágrimas' para ser el paraíso que siempre debió ser. El hombre ha madurado y su casa (el planeta) refleja esa madurez.",
    "CitaInelutable": "Cuando hemos visto convertirse el niño en hombre... la tierra, renovada, parece otro planeta.",
    "EjemploPedagogico": "Es como un jardín descuidado que un buen jardinero toma a su cargo: en poco tiempo, las flores brotan donde antes había maleza. El espíritu racional es ese jardinero.",
    "ConexionDoctrinal": ["Renovación Planetaria", "Evolución de la Materia", "Mundo de Regeneración"],
    "NodosSimapticos": ["Tierra Renovada", "Otro Planeta", "Jardín del Espíritu"]
  },
  "8507: CAPÍTULO VEINTE Y NUEVE — ¿Quién opera toda esta obra?": {
    "PilotoDeCoherencia": "La obra no es de un hombre, es del Espiritismo Universal. Yo solo soy el secretario que escribe la sentencia. El espíritu de verdad opera a través de miles de misioneros encarnados y desencarnados para traer la Comuna.",
    "CitaInelutable": "¿Quién opera toda esta obra? ... El espiritismo.",
    "EjemploPedagogico": "No miréis al dedo que señala la luna (Trincado), mirad la luna (la obra del espíritu). Yo paso, la obra queda porque es de todos.",
    "ConexionDoctrinal": ["Espiritismo", "Espíritu de Verdad", "Obra Colectiva"],
    "NodosSimapticos": ["Operador de la Obra", "Espiritismo", "Secretario de la Verdad"]
  },
  "8651: CAPÍTULO TREINTA — La Ley no comete injusticia": {
    "PilotoDeCoherencia": "Cada ser ocupa el puesto que le corresponde por su grado de progreso. La ley de ascensión es constante. No hay injusticia en el universo, solo consecuencias que aún no comprendemos. Todo dolor es una lección; toda alegría es un premio al trabajo.",
    "CitaInelutable": "Todas las cosas en la naturaleza y el universo, siguen su curso de ascensión.",
    "EjemploPedagogico": "El agua no es injusta con la piedra por estar debajo; cada una ocupa su lugar por su densidad. El espíritu ocupa su lugar por su 'densidad' de amor y sabiduría.",
    "ConexionDoctrinal": ["Ley de Ascensión", "Justicia Perfecta", "No Injusticia"],
    "NodosSimapticos": ["Ley de Ascensión", "Justicia Matemática", "Sin Injusticia"]
  },
  "8795: CAPÍTULO TREINTA Y UNO — Solo Eloí es propietario del Universo": {
    "PilotoDeCoherencia": "Sentencia definitiva contra la propiedad privada. Si Eloí es el único dueño, el hombre solo es usufructuario. Reclamar propiedad sobre la tierra es rebelión contra el Padre. La Comuna es la única forma legal de posesión humana.",
    "CitaInelutable": "Solo Eloí es propietario del Universo.",
    "EjemploPedagogico": "En un hotel, los huéspedes usan las habitaciones pero no son dueños del edificio. La Tierra es el hotel de Eloí; nosotros somos los huéspedes que deben cuidarlo y compartirlo.",
    "ConexionDoctrinal": ["Eloí", "Anti-Propiedad Privada", "Comuna"],
    "NodosSimapticos": ["Solo Eloí", "Propiedad es Robo", "Usufructo Universal"]
  },
  "8890: CAPÍTULO TREINTA Y Y DOS — Todos los hombres son herederos del Universo": {
    "PilotoDeCoherencia": "La herencia de Eloí es para todos, sin distinción. Denuncio la caridad religiosa como un 'baldón' (insulto) al hombre. No queremos caridad, queremos nuestra herencia legítima que nos ha sido robada por las castas y las religiones.",
    "CitaInelutable": "Todos los hombres son herederos del Universo. ... La beneficencia ha sido acaparada por la religión bajo el nombre de Caridad.",
    "EjemploPedagogico": "Si un hermano le roba la herencia al otro y luego le da una moneda como limosna, eso no es amor, es burla. La religión hace eso con el pueblo.",
    "ConexionDoctrinal": ["Herencia Universal", "Anti-Caridad", "Justicia Social"],
    "NodosSimapticos": ["Herederos", "Anti-Caridad", "Justicia vs Limosna"]
  },
  "9033: CAPÍTULO TREINTA Y TRES — Un solo mandato": {
    "PilotoDeCoherencia": "Resumo toda la ley en una frase: 'Ama a tu hermano'. Mi luz di en Adán y la repito ahora. Es la única brújula necesaria. Quien ama, cumple la ley de Eloí sin necesidad de rituales ni códigos complejos.",
    "CitaInelutable": "Mi luz di en Adán para mis hijos... este sencillo mandato: AMA A TU HERMANO.",
    "EjemploPedagogico": "Como la clave que abre todas las puertas de un palacio: el amor es la llave maestra. No pierdas tiempo buscando llaves pequeñas (ritos); usa la maestra.",
    "ConexionDoctrinal": ["Mandato Único", "Ama a tu Hermano", "Shet"],
    "NodosSimapticos": ["Mandato Único", "Luz en Adán", "Clave Maestra"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Gran Placa Impresa": {
    "Definición": "Metáfora de la Ley de Amor grabada de forma indeleble en la esencia del espíritu. Es la brújula interna que guía la organización social en el Día del Amor.",
    "Contexto": "Capítulo XXIV de Los Extremos se Tocan. Trincado la contrapone a las leyes escritas de los hombres que son abstractas y cambiantes.",
    "Conexiones": ["Ley de Amor", "Conciencia Universal", "Día del Amor"],
    "Obras": ["Los Extremos se Tocan", "Código de Amor Universal"]
  },
  "Fruición Universal": {
    "Definición": "El derecho de todo ser humano a disfrutar plenamente de los recursos, conocimientos y bellezas del mundo por el solo hecho de ser hijo de Eloí y trabajador de la Comuna.",
    "Contexto": "Capítulo XXV de Los Extremos se Tocan. Es la definición real de civilización según la Escuela.",
    "Conexiones": ["Civilización Racional", "Herencia Universal", "Comuna"],
    "Obras": ["Los Extremos se Tocan"]
  },
  "Cimientos de Azúcar": {
    "Definición": "Instituciones y creencias basadas en el error y la mentira que parecen sólidas pero se deshacen ante la verdad. (Nota: ya agregado, se mantiene la coherencia).",
    "Conexiones": ["Agua del Desengaño", "Liquidación"],
    "Obras": ["Los Extremos se Tocan"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 (Cap XXIV-XXXIII) y 2 términos sinápticos nuevos.');
