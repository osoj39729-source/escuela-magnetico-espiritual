const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

// Initialize files if they don't exist
if (!fs.existsSync(esenciaPath)) {
    fs.writeFileSync(esenciaPath, JSON.stringify({}, null, 2), 'utf8');
}
if (!fs.existsSync(dicPath)) {
    fs.writeFileSync(dicPath, JSON.stringify({}, null, 2), 'utf8');
}

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - El Espiritismo en su Asiento (Batch 1 - Proclama, Prólogo y Premisa)
const nuevosNodos = {
  "24-44: PROCLAMA Y APOTEGMAS": {
    "PilotoDeCoherencia": "Los cinco principios absolutos que sostienen la Escuela: El Universo Solidarizado, El mundo todo Comunizado, La Ley es una, La sustancia una, Todo es Magnetismo Espiritual. Se adhieren los mandatos 'Conócete a ti mismo' y 'Ama a tu hermano', estableciendo que la vida es la luz de los hombres.",
    "CitaInelutable": "La Ley es una. La sustancia una. Todo es Magnetismo Espiritual.",
    "EjemploPedagogico": "Estos principios son las cinco columnas del templo universal: si quitas una sola (como pensar que hay dos leyes o dos sustancias), todo el edificio filosófico se derrumba.",
    "ConexionDoctrinal": ["Proclama Trincadista", "Pentagrama Cósmico", "Axiomas Básicos"],
    "NodosSimapticos": ["Columnas del Templo Universal", "Magnetismo como Todo"]
  },
  "46-50: PROGRAMA PERPETUO DE ESTUDIOS": {
    "PilotoDeCoherencia": "Se define el tema central y eterno de la Cátedra: 'La Vida Eterna y Continuada'. Este es el programa perpetuo porque desmitifica la muerte y asegura la evolución ininterrumpida del espíritu a través de las existencias.",
    "CitaInelutable": "Programa Perpetuo de Estudios: La Vida Eterna y Continuada.",
    "EjemploPedagogico": "A diferencia de las escuelas de la tierra que terminan en la graduación, esta Escuela enseña la única materia que no se agota: la continuidad de la vida sin fronteras de muerte.",
    "ConexionDoctrinal": ["Vida Eterna y Continuada", "Programa de la Cátedra"],
    "NodosSimapticos": ["Materia Inagotable", "Rechazo de la Muerte Final"]
  },
  "74-137: PRÓLOGO DE LA SEGUNDA EDICIÓN": {
    "PilotoDeCoherencia": "Trincado define la misión de esta obra magna. Junto con los folletos 'Strossmayer' (la draga) y 'El Primer Rayo de Luz' (la aplanadora que aplasta errores), 'El Espiritismo en su Asiento' viene a 'rasgar el crepúsculo'. Su fin es llevar al lector a la 'Athanasia' (inmortalidad consciente) recuperando los derechos que el hombre relegó por ignorancia religiosa.",
    "CitaInelutable": "Como Draga mandamos Strossmayer; como Aplanadora el Primer Rayo de Luz; y El Espiritismo en su Asiento viene a rasgar el crepúsculo.",
    "EjemploPedagogico": "Es una obra de ingeniería: primero pasas la draga para sacar la basura (falsedad histórica), luego la aplanadora para nivelar el terreno (razón), y finalmente pones los cimientos del edificio (Espiritismo).",
    "ConexionDoctrinal": ["Athanasia", "Rasgar el Crepúsculo", "Trilogía Demoledora"],
    "NodosSimapticos": ["Draga y Aplanadora", "Recuperación de Derechos"]
  },
  "148: PREMISA: LA INCERTIDUMBRE MUNDIAL": {
    "PilotoDeCoherencia": "Diagnóstico de la crisis terrestre. Trincado señala la agónica situación y la 'incertidumbre que nadie logra deshacer' pese a haber más hombres de conocimiento que nunca. Esta crisis es producto del colapso inminente de los sistemas religiosos y de supremacía que han ocultado la verdadera causa de la vida.",
    "CitaInelutable": "Incierto y obscuro está el horizonte, anubarrado de negruras que agobia a todos con una incertidumbre que nadie logra deshacer.",
    "EjemploPedagogico": "El mundo es como un barco de alta tecnología pero sin brújula, navegando en la niebla. Hay muchos mecánicos (científicos materiales), pero nadie sabe hacia dónde ir. La obra trae la brújula.",
    "ConexionDoctrinal": ["Crisis Mundial", "Incertidumbre Científica", "Caída de Supremacías"],
    "NodosSimapticos": ["Barco sin Brújula", "Agonía Social"]
  },
  "334: PREFACIO: LA HORA INDECISA": {
    "PilotoDeCoherencia": "Ubicación temporal del espíritu humano. El hombre ha pasado 'la noche' (ignorancia dogmática), y el sol se anuncia, pero está en la 'hora del crepúsculo incierto', una zona de penumbra y nubarrones tormentosos donde presiente negruras antes de que el sol del Espíritu llegue a su cénit y bañe de luz los corazones.",
    "CitaInelutable": "Pasó la noche; en el horizonte se anuncia el sol; pero es la hora del crepúsculo incierto y es terrible.",
    "EjemploPedagogico": "Justo antes del amanecer hace más frío y hay más sombras extrañas. La humanidad está en ese punto exacto: el terror del cambio antes de la luz total.",
    "ConexionDoctrinal": ["El Crepúsculo de la Humanidad", "Penumbra Dogmática", "Llegada de la Luz"],
    "NodosSimapticos": ["Frío del Amanecer", "Nubarrones Tormentosos"]
  },
  "588: CAPÍTULO I: ¿QUÉ ES EL ESPIRITISMO? (INICIO)": {
    "PilotoDeCoherencia": "El Maestro retoma el interrogante fundamental que Kardec esbozó, afirmando que Kardec solo recogió fragmentos diseminados para preparar el camino de esta obra que ahora culmina la doctrina definitiva y total de la Verdad.",
    "CitaInelutable": "Sé que Kardec recogió los fragmentos diseminados en todo el mundo, para preparar el camino a la obra que ahora se termina.",
    "EjemploPedagogico": "Kardec fue como el explorador que juntó las piezas del mapa roto; Trincado es quien arma el mapa completo, lee las coordenadas y asienta el territorio definitivo.",
    "ConexionDoctrinal": ["Misión de Kardec", "Culminación Doctrinal", "Definición Total"],
    "NodosSimapticos": ["Piezas del Mapa", "Camino Preparado"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Athanasia (Inmortalidad)": {
    "Definición": "Estado de conciencia superior donde el espíritu comprende su vida eterna y continuada, desterrando el temor a la muerte y reclamando los derechos que le fueron robados por el dogma.",
    "Contexto": "Prólogo a la 2ª Edición de El Espiritismo en su Asiento.",
    "Conexiones": ["Vida Eterna", "Despertar", "Recuperación de Derechos"],
    "Obras": ["El Espiritismo en su Asiento"]
  },
  "La Hora del Crepúsculo Incierto": {
    "Definición": "Metáfora temporal utilizada por el Maestro para definir la crisis espiritual del mundo contemporáneo: la noche del dogma ha pasado, pero el Sol de la verdad aún no alcanza el cénit, generando miedo y confusión social ante el cambio.",
    "Contexto": "Prefacio de El Espiritismo en su Asiento.",
    "Conexiones": ["Transición Planetaria", "Incertidumbre", "Luz"],
    "Obras": ["El Espiritismo en su Asiento"]
  },
  "La Draga y la Aplanadora": {
    "Definición": "Conceptos tácticos de la obra literaria de la Escuela. El Discurso de Strossmayer actúa como 'Draga' (arranca la mentira), El Primer Rayo de Luz como 'Aplanadora' (destruye prejuicios), preparando el terreno para el Asiento del Espiritismo.",
    "Contexto": "Prólogo de El Espiritismo en su Asiento.",
    "Conexiones": ["Estrategia Doctrinal", "Strossmayer", "Primer Rayo de Luz"],
    "Obras": ["El Espiritismo en su Asiento"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 6 nodos 1:1 de El Espiritismo en su Asiento (Batch 1 - Proemios) y 3 términos sinápticos.');
