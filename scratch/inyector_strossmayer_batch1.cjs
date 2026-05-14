const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/discurso-obispo-strossmayer_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = {};
if (fs.existsSync(esenciaPath)) {
  esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
}
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// RE-DESTILACIÓN PURA 1:1 - Discurso del Obispo Strossmayer (Batch 1 - Claves 1 a 3)
const nuevosNodos = {
  "001: PROCLAMA": {
    "PilotoDeCoherencia": "Solidaridad Universal. La EMECU proclama la unión de todos los mundos y espíritus bajo la bandera de la justicia suprema, anunciando la caída de las 'estrellas' (falsas luces) que arrastran al error.",
    "CitaInelutable": "El Universo, solidarizado... Y caerá una Estrella que arrastrará una tercera parte de la tierra.",
    "EjemploPedagogico": "Un faro que se enciende en medio de la niebla para avisar a los barcos que las luces que ven en la costa son trampas de piratas, y que el puerto seguro está en la unidad del mar.",
    "ConexionDoctrinal": ["Justicia Suprema", "Universo Solidarizado"],
    "NodosSimapticos": []
  },
  "002: A LOS HOMBRES LIBRES Y LAS MADRES ULTRAJADAS": {
    "PilotoDeCoherencia": "Toque de Atención. Se denuncia al 'enemigo común del progreso' que se entromete en la vida civil y promueve guerras mediante el odio religioso.",
    "CitaInelutable": "La hora de la justicia es llegada... resuena su voz en la conciencia de los libres... odio, por la religión, única causa de las contiendas.",
    "EjemploPedagogico": "Un centinela que grita '¡fuego!' en un pueblo dormido, señalando que el incendio no es un accidente, sino provocado por quienes viven de vender agua a precio de oro.",
    "ConexionDoctrinal": ["Odio Religioso", "Justicia sin Misericordia"],
    "NodosSimapticos": []
  },
  "003: EL JURAMENTO DE LOS CABALLEROS DE COLÓN": {
    "PilotoDeCoherencia": "Denuncia de la Intolerancia. Se reproduce el juramento secreto para exponer la sumisión absoluta al Papado y la intención de destruir gobiernos y comunidades 'herejes'.",
    "CitaInelutable": "Tiene poder para deponer reyes herejes... y destruirlos sin prejuicio alguno... defenderé ésta doctrina y los derechos y costumbres de Su Santidad.",
    "EjemploPedagogico": "Un pacto secreto de una banda que jura lealtad a un jefe mafioso, prometiendo quemar cualquier negocio que no pague tributo, llamando a esa extorsión 'derecho divino'.",
    "ConexionDoctrinal": ["Juramento de los Caballeros de Colón (Contexto)", "Supremacía"],
    "NodosSimapticos": ["Juramento de los Caballeros de Colón (Contexto)"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Obispo Strossmayer (Figura)": {
    "Definición": "Josip Juraj Strossmayer (1815-1905). Obispo croata y figura histórica central que, durante el Concilio Vaticano I, pronunció un discurso demoledor contra la infalibilidad papal, negando la primacía de Pedro basada en las escrituras y la historia. Es rescatado por Trincado como un ejemplo de valor civil dentro de la institución.",
    "Contexto": "Discurso del Obispo Strossmayer.",
    "Conexiones": ["Infalibilidad Papal", "Vaticano", "Verdad"],
    "Obras": ["Discurso del Obispo Strossmayer"]
  },
  "Infalibilidad Papal (Crítica)": {
    "Definición": "Dogma católico que atribuye al Papa la incapacidad de errar en cuestiones de fe y moral. Trincado lo denuncia como la máxima aberración del orgullo humano, una blasfemia que pretende usurpar los derechos de la razón y la justicia del Creador.",
    "Contexto": "Discurso del Obispo Strossmayer (Prólogo).",
    "Conexiones": ["Dogma", "Blasfemia", "Supremacía"],
    "Obras": ["Discurso del Obispo Strossmayer", "Los Extremos se Tocan"]
  },
  "Juramento de los Caballeros de Colón (Contexto)": {
    "Definición": "Documento de carácter fanático y violento que Trincado publica para evidenciar la naturaleza inquisitorial de las organizaciones que defienden el papado. Simboliza la 'Sociedad del Veneno y de la Cuchilla' que combate el progreso y la libertad de pensamiento.",
    "Contexto": "Discurso del Obispo Strossmayer (Sección A los hombres libres).",
    "Conexiones": ["Fanatismo", "Caballeros de Colón", "Intolerancia"],
    "Obras": ["Discurso del Obispo Strossmayer"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 1 de Discurso del Obispo Strossmayer (3 nodos 1:1) y 3 términos sinápticos.');
