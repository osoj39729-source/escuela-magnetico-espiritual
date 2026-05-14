const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Conócete a ti mismo (Batch 5 - Claves 68 a 87)
const nuevosNodos = {
  "7354: Párrafo iii: eL esPÍRiTU DeL HoMBRe Ascendemos. Ya estamos en la cúpula del edificio universal. Podemos": {
    "PilotoDeCoherencia": "El hombre como templo. El espíritu humano es la cúpula del edificio universal, el único templo donde se puede adorar a Eloí en espíritu y verdad.",
    "CitaInelutable": "El conjunto, formará el solo templo donde únicamente puede adorarse al creador... el hombre.",
    "EjemploPedagogico": "No busques a Dios en paredes de piedra; búscalo en la conciencia del hombre que razona.",
    "ConexionDoctrinal": ["El Hombre como Templo"],
    "NodosSimapticos": []
  },
  "7466: Párrafo iV: eL HoMBRe sóLo es HoMBRe PoR eL esPÍRiTU": {
    "PilotoDeCoherencia": "Esencia de la humanidad. Sin espíritu, el cuerpo y el alma son solo una forma animal bella; la calidad de 'hombre' la otorga exclusivamente el espíritu.",
    "CitaInelutable": "Si no tuviera el espíritu, no sería el hombre. Sería un animal.",
    "EjemploPedagogico": "Un maniquí de cristal puede ser hermoso, pero no es un hombre porque no tiene el fuego de la vida inteligente.",
    "ConexionDoctrinal": ["Definición de Hombre"],
    "NodosSimapticos": []
  },
  "7513: Punto primero: ¿CóMo aCCiona eL esPÍRiTU?": {
    "PilotoDeCoherencia": "Acción por vibración. El espíritu no tiene sexo ni miembros; acciona mediante la inteligencia y la vibración en su alma, imitando el poder omnímodo del Creador.",
    "CitaInelutable": "El espíritu no tiene formas, miembros ni sexo; pero todo se lo hace en su alma, por su inteligencia.",
    "EjemploPedagogico": "El espíritu es como el pensamiento del compositor que se convierte en música sin necesidad de ser él mismo una nota musical.",
    "ConexionDoctrinal": ["Acción del Espíritu", "Impersonalidad del Espíritu"],
    "NodosSimapticos": []
  },
  "7572: Punto segundo: ¿DónDe esTÁ Y QUÉ es La MeMoRia?": {
    "PilotoDeCoherencia": "Conciencia vs Memoria. La memoria es una función animal de registro; la conciencia es una función humana de sentimiento y ley espiritual.",
    "CitaInelutable": "Memoria, es decir acción animal; y decir conciencia, es evocar sentimientos.",
    "EjemploPedagogico": "Una computadora tiene memoria (registra datos), pero solo el hombre tiene conciencia (sabe si esos datos son justos).",
    "ConexionDoctrinal": ["Conciencia vs Memoria (Trincadista)"],
    "NodosSimapticos": ["Conciencia vs Memoria (Trincadista)"]
  },
  "7647: Párrafo V: eL HoMBRe no Lo es, HasTa QUe ViVe sU TRiniDaD": {
    "PilotoDeCoherencia": "Mayoría de edad espiritual. El ser humano solo es verdaderamente 'hombre' cuando es responsable de sus actos a conciencia, dejando de ser un 'aspirante' o embrión de hombre.",
    "CitaInelutable": "El hombre no lo es, hasta que vive su trinidad... cuando pueda ser responsable de sus actos a conciencia.",
    "EjemploPedagogico": "Nacer no te hace hombre; te hace hombre el momento en que decides con justicia y asumes tus consecuencias.",
    "ConexionDoctrinal": ["Trinidad Humana Activa", "Responsabilidad Consciente"],
    "NodosSimapticos": []
  },
  "7845: Párrafo Vi: eL MaL Y eL Bien; DonDe CoMienZa (eL aRCa De noÉ)": {
    "PilotoDeCoherencia": "Inexistencia del mal absoluto. En las leyes divinas no existe el mal; lo que llamamos mal es solo el contraste necesario para que el espíritu aprenda y valore el bien.",
    "CitaInelutable": "En el universo, en sus leyes, en el creador, no existe el mal.",
    "EjemploPedagogico": "La sombra no es 'maldad'; es solo la ausencia de luz que te ayuda a identificar dónde está la lámpara.",
    "ConexionDoctrinal": ["Relatividad del Mal"],
    "NodosSimapticos": []
  },
  "8162: Párrafo Vii: eL PRoGReso Y La CiViLiZaCión": {
    "PilotoDeCoherencia": "Dúo evolutivo. El progreso y la civilización corren parejos; el progreso es la fuerza y la civilización es la forma y corona de esa evolución.",
    "CitaInelutable": "El progreso corre parejas con la civilización... el progreso tiene dos ramas.",
    "EjemploPedagogico": "El progreso es el motor que empuja; la civilización es el diseño del coche que permite viajar con elegancia y orden.",
    "ConexionDoctrinal": ["Progreso y Civilización"],
    "NodosSimapticos": []
  },
  "8247: Párrafo Viii: Las soCieDaDes PaRCiaLes Tienen sU TÉRMino": {
    "PilotoDeCoherencia": "Caducidad de lo parcial. Toda sociedad basada en regímenes temporales o injustos tiene un fin marcado por su propio incumplimiento; la mayoría tiene el deber de excluir lo que daña al cuerpo social.",
    "CitaInelutable": "Las sociedades parciales tienen su término... la mayoría puede enjuiciar y excluir de su seno a los malversadores.",
    "EjemploPedagogico": "Si un socio roba en la empresa, la empresa se rompe; así las naciones injustas desaparecen para dar paso a la Comuna.",
    "ConexionDoctrinal": ["Fin de las Sociedades Parciales"],
    "NodosSimapticos": []
  },
  "8379: Párrafo iX: La CoMUna es La PeRFeCCión Y eL Fin PeRseGUiDo PoR La LeY UniVeRsaL": {
    "PilotoDeCoherencia": "Meta final. La Comuna es el estado de perfección material y el inicio del reinado del espiritismo en la Tierra.",
    "CitaInelutable": "La comuna es la perfección de todo progreso material y la iniciación del reinado del espiritismo.",
    "EjemploPedagogico": "La Comuna es el puerto al que todos los barcos de la historia han estado tratando de llegar a través de las tormentas.",
    "ConexionDoctrinal": ["Comuna Universal", "Reinado del Espiritismo"],
    "NodosSimapticos": []
  },
  "8509: PaRTe TeRCeRa": {
    "PilotoDeCoherencia": "Estructura formal de la tercera parte: Historia y Grados de Progreso.",
    "CitaInelutable": "PaRTe TeRCeRa.",
    "EjemploPedagogico": "Estudio de la cronología espiritual.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "8510: CaPÍTULo Vii: GRaDos De PRoGReso": {
    "PilotoDeCoherencia": "Estructura formal del capítulo sobre la evolución histórica de la humanidad.",
    "CitaInelutable": "CaPÍTULo Vii: GRaDos De PRoGReso.",
    "EjemploPedagogico": "Los escalones de la civilización.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "8513: Párrafo i: DesDe La TRiBU, HasTa La soCieDaD aCTUaL": {
    "PilotoDeCoherencia": "Continuidad histórica. Se remite al estudio preliminar en 'Buscando a Dios' para fundamentar los grados de progreso social desde la tribu.",
    "CitaInelutable": "Os remito... al 'Buscando a Dios'... porque allí está estudiado cuanto debería decir en este capítulo.",
    "EjemploPedagogico": "La historia es una cadena; para entender el último eslabón, debes haber visto los primeros en los libros anteriores.",
    "ConexionDoctrinal": ["Evolución Social"],
    "NodosSimapticos": []
  },
  "8789: Punto primero: DesDe La Unión De PeRis Y FULo HasTa La CaTÁsTRoFe De La aTLÁnTiDa": {
    "PilotoDeCoherencia": "Origen de la Atlántida. Se menciona la unión de Peris y Fulo como el inicio de una migración que llevaría a la formación de la civilización atlante y sus futuros dioses/fetiches.",
    "CitaInelutable": "Desprenderse un rico gajo de la gran familia del oriente... para llegar al septentrión... bajo el nombre de un hombre, Peris.",
    "EjemploPedagogico": "La Atlántida no fue un mito; fue una sucursal del progreso humano que terminó en catástrofe por su propio desvío.",
    "ConexionDoctrinal": ["Atlántida Histórica", "Peris y Fulo"],
    "NodosSimapticos": ["Peris y Fulo"]
  },
  "8956: Punto segundo: DesDe eL HUnDiMienTo De La aTLÁnTiDa HasTa La VeniDa De aDÁn Y eVa": {
    "PilotoDeCoherencia": "Periodo de oscuridad y jeroglíficos. Tras el hundimiento atlante, la humanidad queda reducida y empieza a registrar hechos en signos, olvidando sus orígenes hasta la llegada de los misioneros.",
    "CitaInelutable": "Ha desaparecido la mitad de la humanidad... sólo en signos y jeroglíficos se apuntaban los hechos.",
    "EjemploPedagogico": "Un tiempo de amnesia colectiva donde el hombre volvió a ser casi un niño que apenas sabe escribir su nombre en las piedras.",
    "ConexionDoctrinal": ["Post-Atlántida"],
    "NodosSimapticos": []
  },
  "9086: Punto tercero: DE ADÁN Y EVA HASTA ABRAHAM - LA INVESTIGACIÓN": {
    "PilotoDeCoherencia": "Inicio de la regeneración. La llegada de Adán y Eva marca el punto culminante de la historia escrita y el comienzo de la recuperación de la sabiduría.",
    "CitaInelutable": "Este es... el punto más culminante de la historia... porque aquí empieza la historia escrita y la regeneración.",
    "EjemploPedagogico": "Adán y Eva fueron los profesores que trajeron los primeros cuadernos y libros a una escuela que estaba en ruinas.",
    "ConexionDoctrinal": ["Misión de Adán y Eva"],
    "NodosSimapticos": []
  },
  "9209: Punto cuarto: De aBRaHaM a MoisÉs, Con La LeY DeL sinaÍ": {
    "PilotoDeCoherencia": "Preparación del linaje. El periodo de Noé a Abraham fue una preparación del terreno para establecer reinados basados en las nuevas doctrinas, respetando aún cultos antiguos.",
    "CitaInelutable": "Fueron una buena preparación que hicieron los nietos y biznietos de Noé... establecían reinados a base de las nuevas doctrinas.",
    "EjemploPedagogico": "Abraham fue el arado que preparó la tierra para que la semilla de la Ley del Sinaí pudiera germinar en Moisés.",
    "ConexionDoctrinal": ["Evolución de la Ley"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Conciencia vs Memoria (Trincadista)": {
    "Definición": "Distinción psicológica y espiritual fundamental. La Memoria se define como una facultad animal y biológica de registro de hechos y datos. La Conciencia, en cambio, es la facultad exclusiva del Espíritu humano de percibir la Ley, juzgar los actos bajo la justicia y sentir la conexión con el Creador. Solo el hombre consciente es verdaderamente hombre.",
    "Contexto": "Conócete a ti mismo (Capítulo VI, Punto Segundo).",
    "Conexiones": ["Espíritu", "Responsabilidad Consciente", "Vida Racional"],
    "Obras": ["Conócete a ti mismo", "Filosofía Austera Racional"]
  },
  "Peris y Fulo": {
    "Definición": "Figuras históricas primitivas (posiblemente líderes o patriarcas de migraciones orientales) mencionadas por Trincado como los iniciadores del movimiento poblacional que dio origen a la civilización de la Atlántida tras desprenderse del núcleo de la India y China.",
    "Contexto": "Conócete a ti mismo (Capítulo VII, Punto Primero).",
    "Conexiones": ["Atlántida", "Historia de la Humanidad", "Migraciones Primitivas"],
    "Obras": ["Conócete a ti mismo"]
  },
  "Mundo de Transición": {
    "Definición": "Categoría de planetas destinados al descanso y preparación de los espíritus que han logrado superar las pruebas de los mundos de expiación. Es un estado intermedio donde la conciencia despierta plenamente y el ser se prepara para misiones de mayor elevación o para habitar mundos de regeneración.",
    "Contexto": "Conócete a ti mismo (Capítulo IV, Punto Cuarto).",
    "Conexiones": ["Jerarquía de Mundos", "Progreso Espiritual", "Descanso del Guerrero"],
    "Obras": ["Conócete a ti mismo", "El Espiritismo en su Asiento"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 16 nodos PURA CALIDAD 1:1 de Conócete a ti mismo (Batch 5) y 3 términos sinápticos.');
