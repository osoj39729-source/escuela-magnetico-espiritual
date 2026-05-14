const fs = require('fs');
const path = 'F:/trincado/public/data/contents/los-cinco-amores_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "4147: PÁRRAFO IX al 4299: PÁRRAFO XI: Economía Pública, Industrial y Geográfica": {
    "PilotoDeCoherencia": "La economía pública es la administración racional de la abundancia para evitar la miseria. Trincado redefine la economía política como 'Geográfica', revelando que el espíritu impulsa las migraciones para fusionar a la humanidad en una sola raza y garantizar que ningún ser sea extranjero en el planeta. La industria es vista como la aplicación de la sabiduría espiritual para embellecer la vida material.",
    "IdeasSecundarias": [
      "La miseria mundial es la prueba de que la verdadera economía pública no ha sido practicada por los gobiernos.",
      "La economía industrial en la Comuna utilizará la metafísica del espíritu para alcanzar progresos inimaginables.",
      "El intercambio regional de productos es una ley inspirada por el espíritu para evitar el estancamiento social."
    ],
    "CitasIneludibles": [
      "La economía pública... es la órbita donde gira la economía doméstica",
      "el espíritu prepara las emigraciones de los seres, para crearse y formar una sola raza",
      "ley que el espíritu, hecho hombre, deje depósitos en todas partes para no ser extranjero en ningún punto.",
      "La economía industrial consiste en la organización de todos los elementos... gastando menos para producir más."
    ]
  },
  "4326: PÁRRAFO XII y 4358: PÁRRAFO XIII: Economía Social y Espiritual": {
    "PilotoDeCoherencia": "La economía social reconoce a cada individuo como un grado del progreso universal y condena las fronteras como invenciones criminales de los enemigos del pueblo. La economía espiritual es la ciencia del esfuerzo psíquico unificado, el 'punto de apoyo' racionalista capaz de alinear a la humanidad con la ley del Creador mediante la unidad de pensamiento.",
    "IdeasSecundarias": [
      "El extranjerismo es una vergonzosa prevención maliciosa impuesta por autócratas y religiones.",
      "La unión de pensamientos es la fuerza definitiva que supera la fuerza bruta de la materia.",
      "El Espiritismo Luz y Verdad proporciona el cimiento granítico para la palanca del progreso universal."
    ],
    "CitasIneludibles": [
      "la economía social es un estudio incesante del progreso... cada individuo es un grano aromático y un grado del progreso universal.",
      "nadie será capaz de encontrar donde hubo fronteras... criminal educación",
      "La unión hace la fuerza... la palanca es la economía espiritual para el esfuerzo psíquico en un solo pensamiento"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Los Cinco Amores (Bloque 5) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Economia_Geografica_Sin_Fronteras": {
    "palabras_clave": ["geográfica", "sin fronteras", "migraciones", "raza única", "no extranjero", "tierra común"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#4147: PÁRRAFO IX al 4299: PÁRRAFO XI: Economía Pública, Industrial y Geográfica"],
    "contexto_real": "Visión planetaria de la administración de recursos que elimina las divisiones nacionales en favor de una sola familia humana."
  },
  "Esfuerzo_Psiquico_Unificado": {
    "palabras_clave": ["esfuerzo psíquico", "unidad de pensamiento", "economía espiritual", "palanca de arquímedes", "punto de apoyo"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#4326: PÁRRAFO XII y 4358: PÁRRAFO XIII: Economía Social y Espiritual"],
    "contexto_real": "Capacidad colectiva de la humanidad para influir en la realidad mediante la alineación mental con las leyes universales."
  },
  "Extranjerismo_como_Crimen": {
    "palabras_clave": ["extranjerismo", "fronteras", "crimen", "educación criminal", "odio", "recelo"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#4326: PÁRRAFO XII: ECONOMÍA SOCIAL"],
    "contexto_real": "Denuncia de la discriminación por origen nacional como una herramienta de dominación antinatural."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para Los Cinco Amores.');
