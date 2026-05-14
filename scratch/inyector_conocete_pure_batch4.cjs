const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Conócete a ti mismo (Batch 4 - Claves 52 a 71)
const nuevosNodos = {
  "5267: Punto quinto: CaUsas DeL sUFRiMienTo DeL esPÍRiTU": {
    "PilotoDeCoherencia": "Raíces del dolor. El sufrimiento del espíritu se reduce a dos causas: el amor (que exige sacrificio) y la ignorancia (que genera error por falta de experiencia).",
    "CitaInelutable": "Las causas del sufrimiento del espíritu... se reducen a sólo dos, al amor y a la ignorancia.",
    "EjemploPedagogico": "Sufres porque amas y no quieres ver sufrir al otro, o sufres porque no sabes cómo manejar una situación y te equivocas.",
    "ConexionDoctrinal": ["Origen del Sufrimiento"],
    "NodosSimapticos": []
  },
  "5425: Párrafo Vii: sU TRiUnFo Y sU GoZo es soLo PoR sU saBiDURÍa": {
    "PilotoDeCoherencia": "Valor del contraste. No hay goce real sin el sufrimiento previo que permite apreciar el bien. El mal solo es una falta de sabiduría.",
    "CitaInelutable": "Sin antes sufrir no puede existir el goce... el mal no existe más que en la ignorancia.",
    "EjemploPedagogico": "El agua sabe más dulce para el que viene caminando días por el desierto.",
    "ConexionDoctrinal": ["Ley del Contraste", "Triunfo de la Sabiduría"],
    "NodosSimapticos": []
  },
  "5517: Párrafo Viii: La CaUsa De sU TRiUnFo Y sieMPRe TRiUnFa": {
    "PilotoDeCoherencia": "Invencibilidad espiritual. El espíritu puede caer millones de veces, pero siempre triunfa porque su destino es la luz y no hay fuerza capaz de detener su ascenso eterno.",
    "CitaInelutable": "Aunque el espíritu sucumba millones de veces... siempre triunfa.",
    "EjemploPedagogico": "El espíritu es como el sol; aunque las nubes lo tapen mil veces, él sigue brillando arriba y siempre termina despejando el cielo.",
    "ConexionDoctrinal": ["Triunfo Final del Espíritu"],
    "NodosSimapticos": []
  },
  "5586: CaPÍTULo V: eL CUeRPo DeL HoMBRe": {
    "PilotoDeCoherencia": "Estructura formal del tratado sobre la materia humana.",
    "CitaInelutable": "CaPÍTULo V: eL CUeRPo DeL HoMBRe.",
    "EjemploPedagogico": "Estudio del instrumento físico.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "5593: Párrafo i: eL CUeRPo DeL HoMBRe Lo FoRMa sU MisMo esPÍRiTU": {
    "PilotoDeCoherencia": "Autoconstrucción física. El espíritu es el arquitecto que fabrica su propio cuerpo; una verdad científica que la humanidad solo puede digerir en la paz de la Comuna.",
    "CitaInelutable": "El cuerpo del hombre lo forma su mismo espíritu... éste fabricaba hasta su cuerpo.",
    "EjemploPedagogico": "Tu cuerpo no es un regalo del azar; es la casa que tú mismo construiste con los materiales de la naturaleza según tu propio plano espiritual.",
    "ConexionDoctrinal": ["Autoconstrucción Orgánica", "Espíritu como Arquitecto Físico"],
    "NodosSimapticos": []
  },
  "5636: Párrafo ii: La BeLLeZa es a CaUsa DeL PRoGReso DeL esPÍRiTU": {
    "PilotoDeCoherencia": "Estética espiritual. La armonía y belleza del cuerpo físico son el reflejo externo del progreso y la experiencia acumulada por el espíritu.",
    "CitaInelutable": "La belleza es a causa del progreso del espíritu.",
    "EjemploPedagogico": "Un espíritu que ha aprendido a amar y razonar esculpe un rostro más armonioso y una mirada más profunda en sus encarnaciones sucesivas.",
    "ConexionDoctrinal": ["Belleza y Progreso"],
    "NodosSimapticos": []
  },
  "5831: Párrafo iii: La saLUD Y Las enFeRMeDaDes son oBRa DeL esPÍRiTU, en JUsTiCia": {
    "PilotoDeCoherencia": "Justicia fisiológica. Las enfermedades son traídas por el espíritu como consecuencia de sus actos pasados; la salud es el equilibrio de la armonía espiritual.",
    "CitaInelutable": "La salud y las enfermedades son obra del espíritu, en justicia.",
    "EjemploPedagogico": "Si dañaste tus pulmones en una vida por vicios, traes la mancha en tu archivo que se materializa como enfermedad en la siguiente para que aprendas a valorar la salud.",
    "ConexionDoctrinal": ["Salud y Enfermedad (como Justicia)"],
    "NodosSimapticos": ["Salud y Enfermedad (como Justicia)"]
  },
  "6013: Párrafo iV: eL CUeRPo HUMano Con Contains Las esenCias De ToDos Los Reinos": {
    "PilotoDeCoherencia": "Riqueza y pobreza del hombre. El cuerpo encierra las esencias de los tres reinos (mineral, vegetal, animal), lo que le da riqueza material pero también la 'pobreza' de los instintos inferiores.",
    "CitaInelutable": "Toda la esencia de los minerales, vegetales y animales la encierra el hombre en su cuerpo.",
    "EjemploPedagogico": "Eres un tesoro que guarda todas las piedras preciosas de la tierra, pero también los colmillos del lobo; el espíritu debe usar el fuego de su potencia para transmutar esos instintos.",
    "ConexionDoctrinal": ["Síntesis de Reinos"],
    "NodosSimapticos": ["Arca de Noé (Cuerpo Humano)"]
  },
  "6099: Párrafo V: Las RaZas Y CoLoRes no inDiCan inFeRioRiDaD en La LeY": {
    "PilotoDeCoherencia": "Igualdad universal. No hay razas inferiores ni superiores ante la Ley; todos somos la misma familia espiritual salida del mismo Padre.",
    "CitaInelutable": "Las razas y colores no indican inferioridad en la ley... en el Universo, sólo hay una raza.",
    "EjemploPedagogico": "En un jardín hay flores rojas, blancas y amarillas; ninguna es más 'flor' que la otra ante el sol.",
    "ConexionDoctrinal": ["Igualdad Racial", "Familia Universal"],
    "NodosSimapticos": []
  },
  "6223: Párrafo Vi: ToDos Los ConTinenTes DeL MUnDo no son DeL MisMo TieMPo": {
    "PilotoDeCoherencia": "Geología progresiva. El espíritu ha utilizado diferentes continentes en distintas épocas para su progreso, según la formación de la Tierra.",
    "CitaInelutable": "Todos los continentes del mundo no son del mismo tiempo.",
    "EjemploPedagogico": "La Tierra ha ido abriendo habitaciones nuevas (continentes) a medida que el espíritu necesitaba más espacio para sus talleres de estudio.",
    "ConexionDoctrinal": ["Geología Doctrinal"],
    "NodosSimapticos": []
  },
  "6386: Párrafo Vli: conócete a ti Mismo eL seR ÉTniCo Lo Da eL CLiMa, Los CUeRPos son seMeJanTes a La FeRaCiDaD DeL TeRReno": {
    "PilotoDeCoherencia": "Influencia ambiental. El clima y la tierra moldean el cuerpo físico (ser étnico), adaptando el instrumento al ambiente de trabajo.",
    "CitaInelutable": "El ser étnico lo da el clima, los cuerpos son semejantes a la feracidad del terreno.",
    "EjemploPedagogico": "El espíritu elige nacer en el frío o el calor para templar su instrumento según la lección que deba aprender.",
    "ConexionDoctrinal": ["Determinismo Geográfico-Físico"],
    "NodosSimapticos": []
  },
  "6463: Párrafo Viii: Las RaZas se FUnDen en Una PoR CRUZaMienTo Y La MÁs BeLLeZa DoMina a T oDas": {
    "PilotoDeCoherencia": "Fusión Cosmopolita. El cruce de razas es el camino hacia la unidad y la belleza superior, proceso que se acelera en los 'países nuevos'.",
    "CitaInelutable": "Las razas se funden en una por cruzamiento... la más bella domina a todas.",
    "EjemploPedagogico": "El mestizaje no es pérdida; es la ganancia de todas las virtudes en un solo tipo humano universal.",
    "ConexionDoctrinal": ["Fusión de Razas", "Mestizaje Universal"],
    "NodosSimapticos": ["Fusión de Razas"]
  },
  "6785: Párrafo iX: Los esPÍRiTUs naTURaLes FoRMan Los CUeRPos De Los aniMaLes": {
    "PilotoDeCoherencia": "Formación animal. A diferencia del hombre, los cuerpos animales son formados por espíritus naturales subordinados, bajo el ordenamiento del espíritu maestro del mundo.",
    "CitaInelutable": "Los espíritus naturales forman los cuerpos de los animales... sólo el espíritu es el autor.",
    "EjemploPedagogico": "El animal es una obra por encargo; el hombre es una obra de autoría propia.",
    "ConexionDoctrinal": ["Instinto y Formación Natural"],
    "NodosSimapticos": []
  },
  "6904: CaPÍTULo Vi: eL HoMBRe": {
    "PilotoDeCoherencia": "Estructura formal del capítulo definitivo sobre el ser.",
    "CitaInelutable": "CaPÍTULo Vi: eL HoMBRe.",
    "EjemploPedagogico": "Compendio del ser racional.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "6911: Párrafo i: eL CUeRPo DeL HoMBRe Aquí ya se puede compendiar el hombre en todo su ser, para compren-": {
    "PilotoDeCoherencia": "Compendio del instrumento. El cuerpo humano se entiende finalmente tras haber estudiado toda la cosmogonía y la acción del espíritu.",
    "CitaInelutable": "Aquí ya se puede compendiar el hombre en todo su ser... lo que no se podría hacer sin saber todo lo que antecede.",
    "EjemploPedagogico": "Ahora que sabes de qué metal está hecho el barco y quién es el capitán, puedes entender por qué el barco tiene esa forma.",
    "ConexionDoctrinal": ["Compendio Humano"],
    "NodosSimapticos": []
  },
  "7100: Párrafo ii: eL aLMa DeL HoMBRe Hemos hablado del cuerpo del hombre como si fuera una entidad": {
    "PilotoDeCoherencia": "Sensibilidad del alma. El alma es la entidad que siente en la vida natural, pero es el espíritu el que le otorga la conciencia superior.",
    "CitaInelutable": "El alma... lo es [consciente] en la vida natural; mas no lo es en la vida espiritual.",
    "EjemploPedagogico": "El alma siente el frío (vida natural); el espíritu comprende por qué hace frío (vida racional).",
    "ConexionDoctrinal": ["Sensibilidad vs Conciencia"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Salud y Enfermedad (como Justicia)": {
    "Definición": "Concepto que despoja a la enfermedad de su carácter 'accidental' o 'divino'. La Escuela enseña que el espíritu atrae las condiciones de salud o enfermedad según su archivo de deudas y créditos (justicia); las dolencias físicas son efectos de causas espirituales previas para el escarmiento y progreso del ser.",
    "Contexto": "Conócete a ti mismo (Capítulo V, Párrafo III).",
    "Conexiones": ["Justicia Universal", "Archivo del Espíritu", "Responsabilidad del Espíritu"],
    "Obras": ["Conócete a ti mismo", "Profilaxis de la Vida"]
  },
  "Fusión de Razas": {
    "Definición": "Proceso evolutivo, biológico y espiritual mediante el cual las diferentes ramas de la humanidad se amalgaman a través del mestizaje y la convivencia cosmopolita. Este proceso busca eliminar los prejuicios de casta y color para dar lugar a una 'raza única y más bella', que será la base física de la Comuna Universal.",
    "Contexto": "Conócete a ti mismo (Capítulo V, Párrafos V y VIII).",
    "Conexiones": ["Igualdad Universal", "Comuna Universal", "Mestizaje Racional"],
    "Obras": ["Conócete a ti mismo", "El Espiritismo Estudiado"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 16 nodos PURA CALIDAD 1:1 de Conócete a ti mismo (Batch 4) y 2 términos sinápticos.');
