const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 2)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "2234: PÁRRAFO 7° — LOS GRECOLATINOS": {
    "PilotoDeCoherencia": "La grandeza de Grecia se hundió en la sangre de sus mártires: Antulio y Sócrates. El asesinato de la razón por la mano de la religión y la política corrupta llevó al mundo grecolatino al ocaso. Denuncio que la civilización que mata a sus pensadores se condena a la barbarie.",
    "CitaInelutable": "El gravísimo pecado de Grecia en el asesinato de Antulio, reincidiendo en Sócrates, fue su sentencia de muerte.",
    "EjemploPedagogico": "Es como una casa que quema sus propios planos y mata al arquitecto: pronto se llenará de grietas y terminará en ruinas. Grecia fue esa casa en ruinas por su falta de respeto a la luz.",
    "ConexionDoctrinal": ["Mártires de la Verdad", "Ocaso de Civilizaciones", "Antulio"],
    "NodosSimapticos": ["Pecado de Grecia", "Antulio y Sócrates", "Asesinato de la Razón"]
  },
  "2599: PÁRRAFO 8° — NEOS Y CRISTIANOS DE LA ERA VULGAR": {
    "PilotoDeCoherencia": "En los inicios de la era vulgar, el pensamiento se fragmenta. Los Neos Greco-Romanos intentan salvar la sabiduría antigua, pero ya están contaminados por el escepticismo. El cristianismo empieza a infiltrarse, no como razón, sino como fe que ciega el juicio.",
    "CitaInelutable": "La era vulgar marca el inicio de la mezcla confusa entre la sabiduría antigua y el dogma naciente.",
    "EjemploPedagogico": "Es como intentar mezclar agua pura (sabiduría) con lodo (dogma): al final, solo tienes lodo. El pensamiento humano entró en un periodo de turbidez.",
    "ConexionDoctrinal": ["Era Vulgar", "Mezcla Dogmática", "Decadencia"],
    "NodosSimapticos": ["Neos Greco-Romanos", "Inicio de la Confusión", "Agua y Lodo"]
  },
  "2886: JUAN EL SOLITARIO (1)": {
    "PilotoDeCoherencia": "Juan el Solitario (Juan el Bautista) fue el precursor que preparó el camino con la austeridad. Su misión fue recordar la ley en medio de la corrupción. No fue un místico de cueva, sino un guerrero de la verdad que pagó con su cabeza su lealtad a la justicia.",
    "CitaInelutable": "Juan el Solitario es la voz que clama en el desierto de la ignorancia humana.",
    "EjemploPedagogico": "Es la primera ráfaga de viento fresco que anuncia la tormenta necesaria para limpiar el aire. Juan fue la advertencia antes de la llegada del Maestro Jesús.",
    "ConexionDoctrinal": ["Precursores", "Austeridad", "Misioneros"],
    "NodosSimapticos": ["Juan el Solitario", "Voz en el Desierto", "Precursor de la Luz"]
  },
  "4355: PÁRRAFO 10° — GNOSTICISMO Y LOS GNÓSTICOS": {
    "PilotoDeCoherencia": "El gnosticismo fue un intento de salvar la chispa de la verdad mediante el conocimiento (Gnosis). Pero se perdió en el sincretismo y la metafísica abstracta. Reconocemos su valor al oponerse al dogma ciego, pero denunciamos su alejamiento de la realidad práctica de la Comuna.",
    "CitaInelutable": "Gnosticismo es el conocimiento que intenta elevarse, pero a menudo se pierde en las nubes de la abstracción.",
    "EjemploPedagogico": "El gnosticismo es como un globo que se eleva mucho pero no tiene timón. Ve la luz del sol, pero no sabe cómo traer ese calor a la tierra para calentar a los hermanos.",
    "ConexionDoctrinal": ["Gnosis", "Sincretismo", "Metafísica"],
    "NodosSimapticos": ["Gnosticismo", "Conocimiento sin Timón", "Chispa de Verdad"]
  },
  "4728: PÁRRAFO 11° — EL NEOPLATONISMO — FILÓN": {
    "PilotoDeCoherencia": "Filón intenta unir a Moisés con Platón. Es un esfuerzo loable de síntesis, pero cae en la alegoría que debilita la fuerza de la ley. El neoplatonismo es la antesala de la teología cristiana: un puente de seda que no aguanta el peso de la razón pura.",
    "CitaInelutable": "Filón busca la unión de lo espiritual y lo humano, pero se queda en la alegoría.",
    "EjemploPedagogico": "Es como intentar unir dos orillas con una cuerda de seda: es bonita a la vista, pero no sirve para que pase el carro pesado del progreso social. Se necesita un puente de piedra: la Razón.",
    "ConexionDoctrinal": ["Neoplatonismo", "Alegoría", "Síntesis"],
    "NodosSimapticos": ["Filón", "Puente de Seda", "Ante-Teología"]
  },
  "4830: PÁRRAFO 12° — EL CRISTIANISMO — LOS APOLOGISTAS": {
    "PilotoDeCoherencia": "Denuncio a los apologistas cristianos que usaron la razón solo para defender la sinrazón del dogma. Tertuliano es el ejemplo máximo: al ver que el dogma no resiste el análisis, se ve obligado a declarar el 'libre examen' por desesperación. La fe ciega es la muerte del filósofo.",
    "CitaInelutable": "Tertuliano se ve obligado a declarar de necesidad el libre examen ante la evidencia de la razón.",
    "EjemploPedagogico": "Es como alguien que intenta tapar el sol con un dedo: al final, el dedo se quema y debe reconocer que el sol existe. Los apologistas intentaron tapar la razón con el dogma y fracasaron.",
    "ConexionDoctrinal": ["Apologética", "Libre Examen", "Muerte de la Razón"],
    "NodosSimapticos": ["Apologistas", "Libre Examen Forzado", "Tertuliano"]
  },
  "5049: PÁRRAFO 13° — LOS SISTEMÁTICOS — SAN CLEMENTE": {
    "PilotoDeCoherencia": "San Clemente intenta sistematizar el vacío. Su idea de la trinidad es una construcción mental sin base en la realidad de la vida. ¿Cómo puede haber una filosofía basada en la fe ciega? Es una contradicción absoluta. Mi Escuela rechaza estos sistemas como castillos en el aire.",
    "CitaInelutable": "No podemos ser Clementes con San Clemente: su fundamento es todo un vacío.",
    "EjemploPedagogico": "Es como intentar construir una casa empezando por el tejado y sosteniéndola con nubes. San Clemente puso palabras hermosas donde faltaban hechos y leyes naturales.",
    "ConexionDoctrinal": ["Trinidad", "Vacío Filosófico", "Sistemáticos"],
    "NodosSimapticos": ["San Clemente", "Fundamento Vacío", "Castillos en el Aire"]
  },
  "5325: PÁRRAFO 14° — LA PATRÍSTICA — SAN AGUSTÍN": {
    "PilotoDeCoherencia": "San Agustín es el gran mixtificador. Toma la luz de Platón y la encierra en la mazmorra del dogma católico. Su 'Ciudad de Dios' es una utopía tiránica basada en la culpa y el miedo. Niego su autoridad porque esclavizó el espíritu a la voluntad de una institución.",
    "CitaInelutable": "San Agustín encierra la libertad del espíritu en los muros del dogma eclesiástico.",
    "EjemploPedagogico": "San Agustín es como un carcelero que usa llaves de oro (palabras bellas) para cerrar las celdas de la ignorancia. Nosotros venimos a romper esas llaves y abrir las puertas.",
    "ConexionDoctrinal": ["Patrística", "Ciudad de Dios", "Esclavitud Espiritual"],
    "NodosSimapticos": ["San Agustín", "Llaves de Oro", "Carcelero del Espíritu"]
  },
  "5512: PÁRRAFO 15° — LA ESCOLÁSTICA — SANTO TOMÁS": {
    "PilotoDeCoherencia": "La Escolástica es el intento de domesticar a Aristóteles para servir a la Iglesia. Santo Tomás de Aquino creó una jaula de lógica para el espíritu. Denuncio que usó la inteligencia para justificar la servidumbre. La verdadera filosofía no sirve a señores, solo a la Verdad.",
    "CitaInelutable": "La escolástica es la domesticación de la razón al servicio del trono y el altar.",
    "EjemploPedagogico": "Es como un caballo poderoso (la razón) al que le han puesto anteojeras para que solo vea el camino que el cura le marca. Mi Escuela quita las anteojeras.",
    "ConexionDoctrinal": ["Escolástica", "Aristotelismo Mixtificado", "Razón Esclava"],
    "NodosSimapticos": ["Santo Tomás", "Jaula de Lógica", "Anteojeras de la Razón"]
  },
  "5820: PÁRRAFO 16° — EL RENACIMIENTO — LA LIBERACIÓN": {
    "PilotoDeCoherencia": "El Renacimiento es el despertar del espíritu tras la larga noche de la Edad Media. El hombre vuelve a mirar a la Naturaleza y a sí mismo. Es el inicio de la liquidación del dogma. Los misioneros vuelven a encarnar para traer la ciencia y el arte liberadores.",
    "CitaInelutable": "El Renacimiento es el alba que anuncia el fin del reinado de la tiniebla eclesiástica.",
    "EjemploPedagogico": "Es el momento en que el prisionero sale de la mazmorra y, aunque le duelen los ojos por la luz, empieza a caminar por el campo. El Renacimiento es el primer paso de libertad.",
    "ConexionDoctrinal": ["Renacimiento", "Liquidación del Dogma", "Despertar"],
    "NodosSimapticos": ["Alba del Renacimiento", "Fin de la Tiniebla", "Retorno a la Naturaleza"]
  }
};

// Actualizar Esencia
delete esencia["2234 al 5820: De los Grecolatinos al Renacimiento"]; // Si existiera una agrupación así

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Libre Examen": {
    "Definición": "El derecho y deber del espíritu de analizar, juzgar y decidir sobre cualquier doctrina, ley o creencia usando su propia razón, sin someterse a dogmas impuestos.",
    "Contexto": "Párrafo 12° de Filosofía Austera Racional. Trincado señala que hasta los apologistas como Tertuliano tuvieron que reconocerlo ante la fuerza de la razón.",
    "Conexiones": ["Razón", "Soberanía", "Anti-Dogma"],
    "Obras": ["Filosofía Austera Racional", "Espiritismo en su Asiento"]
  },
  "Escolástica": {
    "Definición": "Periodo de la filosofía mixtificada donde se intentó subordinar la razón a la fe religiosa, usando la lógica formal para justificar dogmas absurdos.",
    "Contexto": "Párrafo 15° de Filosofía Austera Racional. Trincado la define como la 'domesticación de la razón'.",
    "Conexiones": ["Santo Tomás", "Jaula de Lógica", "Mixtificación"],
    "Obras": ["Filosofía Austera Racional"]
  },
  "Juan el Solitario": {
    "Definición": "Misionero precursor (Juan el Bautista) cuya labor fue preparar el terreno para la llegada de la luz mediante la austeridad y la denuncia de la corrupción.",
    "Contexto": "Párrafo 9° de Filosofía Austera Racional.",
    "Conexiones": ["Precursores", "Austeridad", "Jesús"],
    "Obras": ["Filosofía Austera Racional", "Jesús Hombre y no Dios"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Filosofía Austera Racional (Batch 2) y 3 términos sinápticos.');
