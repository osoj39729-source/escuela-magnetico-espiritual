const fs = require('fs');

const contentPath = 'F:/trincado/public/data/contents/tercera-etapa_content.json';
const esenciaPath = 'F:/trincado/public/data/contents/tercera-etapa_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

const content = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
const dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
const keys = Object.keys(content);

// Classification logic
function classify(key, text) {
  const upper = key.toUpperCase();
  const textUp = text.toUpperCase();
  if (upper.includes('CONSEJO') || upper.includes('HOSANNA') || textUp.startsWith('HOSANNA')) return 'consejo';
  if (upper.includes('COMENTARIO') || upper.includes('COMMENTARY') || upper.includes('UN SACRIFICIO') || upper.includes('SESIÓN') || upper.includes('SESION')) return 'comentario';
  if (upper.includes('INDICE') || upper.includes('ÍNDICE') || upper.includes('PRESENTACION') || upper.includes('PRESENTACIÓN')) return 'indice';
  if (upper.includes('TERCERA ETAPA') || upper.includes('JOAQUIN TRINCADO') || upper.includes('ESCUELA MAGNÉTICO') || upper.includes('AÑO DE 1916')) return 'portada';
  if (upper.includes('ACCIÓN DE LA JUSTICIA') || upper.includes('ACCION DE LA JUSTICIA') || upper.includes('RECORTES')) return 'seccion';
  if (textUp.includes('HOSANNA') || textUp.includes('HEME AQUÍ') || textUp.includes('HEME AQUI')) return 'consejo';
  // Default: testimonio (news clipping)
  return 'testimonio';
}

// Extract date context from key
function getDateCtx(key) {
  const m = key.match(/ENERO|FEBRERO|MARZO|ABRIL|MAYO|JUNIO|JULIO|AGOSTO|SEPTIEMBRE|OCTUBRE|NOVIEMBRE|DICIEMBRE/i);
  return m ? m[0] : '1916';
}

// Specific consejo extracts (hand-crafted for the major ones)
const consejoMap = {
  '5': { cita: 'Luz, amor y órdenes pides al Padre... Bendito seas Maestro-Juez de la Tierra.', piloto: 'Primer Consejo del Año 1916. Los espíritus de luz dan las primeras instrucciones al Maestro para el año de la Esperanza, anunciando la acción de la justicia sobre la Tierra.' },
  '12': { cita: '¿Por qué los hombres se agitan? ¿Por qué no ordenan sus pasos adonde oyen la voz del enviado?', piloto: 'Llamado a la Rectitud. Ante la agitación mundial (guerras, catástrofes), los espíritus llaman al orden y a la confianza en la ley.' },
  '13': { cita: 'Hermanos luchar que el enemigo está vencido e impotente.', piloto: 'Victoria de la Ley. Se confirma que las fuerzas del error están sentenciadas y la atmósfera espiritual se limpia.' },
  '18': { cita: 'No es camino andado en vano... la argamasa está amasada con los cerebros de los materialistas.', piloto: 'Perseverancia en la Misión. Los guías espirituales exhortan al Maestro a continuar la acción sin descanso ante los sistemáticos.' },
  '44': { cita: 'Estamos en el puesto que nos corresponde. No dudamos del triunfo de la Santa Causa.', piloto: 'Confirmación del Puesto. Los espíritus reafirman su presencia activa en la defensa de la causa de la justicia.' },
  '46': { cita: 'Suenan Campanas de la Paz y llevan el eco todos los hombres.', piloto: 'Anuncio de la Paz. En medio de la guerra mundial, los espíritus anuncian la proximidad de la paz como fruto de la ley.' },
  '54': { cita: 'A todos os oigo hijos y hermanos míos y por todos hablaré a mi hijo.', piloto: 'El Padre Habla. Comunicación directa del Padre Creador al Maestro, ratificando la misión universal.' },
  '57': { cita: 'Cada palabra mía confirma tu ley y es así.', piloto: 'Confirmación Doctrinal. Los espíritus confirman que cada evento mundial es una validación de la doctrina.' },
  '61': { cita: 'Como en el mundo sólo miserias y clamores escucho, quisiera socorrer y no puedo.', piloto: 'Dolor del Guía. Los espíritus expresan su dolor ante la miseria humana, acelerando el plan de justicia.' },
  '65': { cita: 'Caminamos el último escollo del quebrado camino. La mayoría pide en Ley.', piloto: 'Cumplimiento Inminente. Se anuncia que la humanidad se acerca al umbral de la nueva era.' },
  '68': { cita: 'Si han torcido el camino; su primer paso en la carga arenosa que se han echado encima.', piloto: 'Consecuencia del Error. Los que se desvían de la ley cargan con el peso de sus propios actos.' }
};

const esencia = {};

keys.forEach((key, idx) => {
  const text = content[key] || '';
  const tipo = classify(key, text);
  const numStr = key.split(':')[0].trim();
  const titulo = key.split(':').slice(1).join(':').trim();
  const dateCtx = getDateCtx(key);
  const custom = consejoMap[numStr];

  let nodo = {};

  if (tipo === 'portada') {
    nodo = {
      "PilotoDeCoherencia": `Portada / Identificación. ${titulo}. Obra perteneciente a la Tercera Etapa del canon trincadista, año 1916, llamado "El Año de la Esperanza".`,
      "CitaInelutable": `${titulo}. Tercera Etapa, 1916.`,
      "EjemploPedagogico": "El sello de un libro de actas; certifica quién lo escribe, cuándo y bajo qué autoridad.",
      "ConexionDoctrinal": ["Tercera Etapa", "Maestro Fundador"],
      "NodosSimapticos": []
    };
  } else if (tipo === 'indice') {
    nodo = {
      "PilotoDeCoherencia": "Índice de la Obra. Mapa de todas las comunicaciones y testimonios de la justicia contenidos en la Tercera Etapa (1916).",
      "CitaInelutable": "INDICE: La Tercera Etapa — Año de la Esperanza.",
      "EjemploPedagogico": "El índice de un libro de actas; permite al investigador ubicar cada sesión y cada evento con precisión.",
      "ConexionDoctrinal": ["Tercera Etapa", "Bitácora Espiritual"],
      "NodosSimapticos": []
    };
  } else if (tipo === 'consejo') {
    const piloto = custom ? custom.piloto : `Consejo Espiritual (${dateCtx}). Los guías de luz transmiten instrucciones, aliento y confirmaciones doctrinales al Maestro durante el año de la Esperanza.`;
    const cita = custom ? custom.cita : text.substring(0, 200).replace(/\r?\n/g, ' ').trim() + '...';
    nodo = {
      "PilotoDeCoherencia": piloto,
      "CitaInelutable": cita,
      "EjemploPedagogico": "Un telegrama de campo en tiempos de guerra; el cuartel general envía instrucciones precisas al oficial en el frente para que sepa cómo actuar en cada situación.",
      "ConexionDoctrinal": ["Consejo Espiritual", "Misión de la Vida", "Tercera Etapa"],
      "NodosSimapticos": ["Consejo Espiritual (Tercera Etapa)"]
    };
  } else if (tipo === 'comentario') {
    nodo = {
      "PilotoDeCoherencia": `Comentario del Maestro. Trincado reflexiona sobre los hechos, las comunicaciones recibidas y el comportamiento de sus hermanos ante los mandatos de la ley.`,
      "CitaInelutable": text.substring(0, 200).replace(/\r?\n/g, ' ').trim() + '...',
      "EjemploPedagogico": "Las notas al margen de un científico; son su diálogo personal con los datos del experimento, interpretando lo que los números dicen.",
      "ConexionDoctrinal": ["Testimonio Personal", "Aplicación Práctica"],
      "NodosSimapticos": []
    };
  } else if (tipo === 'seccion') {
    nodo = {
      "PilotoDeCoherencia": `Sección: La Acción de la Justicia. Se introduce la serie de noticias mundiales que sirven como testimonio material de que las predicciones de los espíritus se cumplen puntualmente.`,
      "CitaInelutable": "LA ACCIÓN DE LA JUSTICIA. (Recortes de diarios)",
      "EjemploPedagogico": "La sección de pruebas de un juicio; el abogado presenta los documentos que confirman lo que su cliente argumentó.",
      "ConexionDoctrinal": ["Acción de la Justicia", "Prueba Material"],
      "NodosSimapticos": []
    };
  } else {
    // testimonio: news clipping
    const geo = text.substring(0, 80).replace(/\r?\n/g, ' ').trim();
    nodo = {
      "PilotoDeCoherencia": `Testimonio de la Ley (${dateCtx}). ${titulo}. Hecho material que confirma la acción de la justicia espiritual sobre el plano físico, cumpliendo las predicciones de los consejeros.`,
      "CitaInelutable": geo + '...',
      "EjemploPedagogico": "La lectura del periódico del día siguiente; confirma que el evento que el meteorólogo (espíritu) predijo efectivamente ocurrió en el lugar y momento anunciado.",
      "ConexionDoctrinal": ["Justicia Natural", "Acción de la Justicia", "Tercera Etapa"],
      "NodosSimapticos": []
    };
  }

  esencia[key] = nodo;
});

fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Add new sinaptic terms
const nuevosTerminos = {
  "Tercera Etapa (Obra)": {
    "Definición": "Obra doctrinal de Joaquín Trincado que recoge las comunicaciones espirituales recibidas durante 1916-1917 ('El Año de la Esperanza') intercaladas con recortes de prensa mundial que sirven como prueba material de la ley de justicia operando sobre los pueblos.",
    "Contexto": "Tercera Etapa (1916).",
    "Conexiones": ["Consejo Espiritual", "Justicia Natural", "Acción de la Justicia"],
    "Obras": ["Tercera Etapa"]
  },
  "Consejo Espiritual (Tercera Etapa)": {
    "Definición": "Cada una de las comunicaciones mediúmnicas recibidas por Trincado durante 1916, que comienzan con 'Hosanna a Eloíí' y contienen instrucciones, confirmaciones doctrinales y prophecías sobre los eventos mundiales.",
    "Contexto": "Tercera Etapa (1916).",
    "Conexiones": ["Mediumnidad", "Profecía", "Maestro Fundador"],
    "Obras": ["Tercera Etapa"]
  },
  "Acción de la Justicia": {
    "Definición": "Sección temática de la Tercera Etapa que agrupa los recortes periodísticos de catástrofes naturales, guerras y cataclismos mundiales como evidencia empírica de que la ley del universo aplica su justicia según lo predicho.",
    "Contexto": "Tercera Etapa (1916).",
    "Conexiones": ["Justicia Natural", "Prueba Material", "Profecía Cumplida"],
    "Obras": ["Tercera Etapa"]
  },
  "Año de la Esperanza (1916)": {
    "Definición": "Denominación espiritual dada al año 1916, en el que los guías de la Escuela prometieron el inicio de la liquidación de las fuerzas del error y el comienzo del nuevo ciclo de la humanidad.",
    "Contexto": "Tercera Etapa (Presentación).",
    "Conexiones": ["Nueva Era", "Esperanza", "Ciclo Cósmico"],
    "Obras": ["Tercera Etapa"]
  }
};

Object.assign(dic, nuevosTerminos);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ TERCERA ETAPA COMPLETADA: ' + Object.keys(esencia).length + ' nodos 1:1 generados. 4 términos sinápticos añadidos.');
