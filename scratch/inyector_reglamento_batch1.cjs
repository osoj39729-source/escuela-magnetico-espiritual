const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/reglamento-interno_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = {};
if (fs.existsSync(esenciaPath)) {
  esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
}
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// RE-DESTILACIÓN PURA 1:1 - Reglamento Interno (Batch 1 - Claves 0 a 6)
const nuevosNodos = {
  "000: INTRODUCCIÓN": {
    "PilotoDeCoherencia": "Fundamentación Administrativa. El reglamento interno no es una imposición caprichosa, sino una herramienta de orden para garantizar la libertad y el estudio racional.",
    "CitaInelutable": "El reglamento es para el régimen de sesiones y conferencias... para asegurar la marcha con seguridad y limpia moral.",
    "EjemploPedagogico": "Un mapa y una brújula para un grupo de viajeros; no les dicen a dónde ir, pero les aseguran que no se perderán ni caerán en barrancos durante el trayecto.",
    "ConexionDoctrinal": ["Régimen de Sesiones", "Orden Comunal"],
    "NodosSimapticos": ["Régimen de Sesiones"]
  },
  "001: AUMENTADA Y REFORMADA": {
    "PilotoDeCoherencia": "Evolución Normativa. Las leyes de la Escuela se adaptan al progreso de los tiempos, reformándose mediante Actas oficiales del Consejo Central para mayor claridad.",
    "CitaInelutable": "Aumentada y reformada del Reglamento Interno... Acta N° 55.",
    "EjemploPedagogico": "Una casa que se amplía para recibir a más hermanos; se mantienen los cimientos, pero se abren nuevas ventanas para que entre más luz y aire.",
    "ConexionDoctrinal": ["Acta 55 (Axioma)", "Progreso Administrativo"],
    "NodosSimapticos": ["Acta 55 (Axioma)"]
  },
  "002: REGLAMENTO INTERNO": {
    "PilotoDeCoherencia": "Disciplina de Cátedra. Se establecen los fundamentos para que las sesiones sean espacios de estudio serio y no de superchería o distracción egoísta.",
    "CitaInelutable": "Para el régimen de sesiones y conferencias... asegurar la marcha con seguridad y limpia moral.",
    "EjemploPedagogico": "Un laboratorio de química donde todos deben seguir normas estrictas de seguridad; si alguien juega o improvisa, puede causar una explosión que afecte a todos.",
    "ConexionDoctrinal": ["Limpieza Moral", "Régimen de Sesiones"],
    "NodosSimapticos": ["Régimen de Sesiones"]
  },
  "003: CREACIÓN DE UN COMISARIADO": {
    "PilotoDeCoherencia": "Centralización Responsable. La creación del Comisariado busca unificar los esfuerzos de las comisiones para la correcta ejecución de los planes del Consejo.",
    "CitaInelutable": "Reunido en Asamblea de Consejo y comisiones... para la creación de un comisariado.",
    "EjemploPedagogico": "Un director de orquesta que asegura que todos los músicos toquen la misma sinfonía, evitando que cada instrumento siga su propio ritmo de forma caótica.",
    "ConexionDoctrinal": ["Comisariado (EMECU)", "Gobierno de la Escuela"],
    "NodosSimapticos": ["Comisariado (EMECU)"]
  },
  "004: REFORMA DEL REGLAMENTO INTERNO": {
    "PilotoDeCoherencia": "Legalidad Publicada. Toda reforma debe ser promulgada y publicada oficialmente (LA BALANZA) para que sea ley reconocida por toda la Comuna.",
    "CitaInelutable": "Promulgada y publicada en LA BALANZA N° 61... con lo que ya formaba parte del Reglamento Interno.",
    "EjemploPedagogico": "Un aviso en la plaza pública que informa a todos de las nuevas reglas del mercado; así nadie puede alegar ignorancia ni abusar de otros.",
    "ConexionDoctrinal": ["La Balanza (Órgano)", "Ley de la Escuela"],
    "NodosSimapticos": []
  },
  "005: PARTE PRIMERA (TERCERA EDICIÓN)": {
    "PilotoDeCoherencia": "Vigencia Doctrinal. Se reafirma la autoridad de la tercera edición como el marco legal vigente para la Escuela Magnético-Espiritual.",
    "CitaInelutable": "Escuela Magnético - Espiritual de la Comuna Universal... TERCERA EDICION.",
    "EjemploPedagogico": "Un sello de garantía que certifica que el producto es auténtico y que cumple con todos los estándares de calidad actuales.",
    "ConexionDoctrinal": ["EMECU", "Unidad de Doctrina"],
    "NodosSimapticos": []
  },
  "006: CONSIDERANDO": {
    "PilotoDeCoherencia": "Tiempo de Estudio. Se declara que la seriedad de la Escuela no se conoce en pocas visitas, sino que requiere años de existencia y recta conciencia.",
    "CitaInelutable": "La seriedad de esta Escuela no puede ser conocida en escasas visitas... sólo puede comprenderse en muchos años de existencia.",
    "EjemploPedagogico": "Plantar un árbol de roble; no puedes juzgar su fuerza al tercer día de plantado, sino después de años de crecimiento y raíces profundas.",
    "ConexionDoctrinal": ["Recta Conciencia", "Tiempo de Evolución"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Comisariado (EMECU)": {
    "Definición": "Organismo de control y coordinación central de la Escuela, creado para asegurar que todas las cátedras mantengan la unidad de doctrina y la limpieza moral exigida por el Consejo Central.",
    "Contexto": "Reglamento Interno (Sección 3).",
    "Conexiones": ["Consejo Central", "Orden", "Coordinación"],
    "Obras": ["Reglamento Interno"]
  },
  "Acta 55 (Axioma)": {
    "Definición": "Resolución fundamental que establece las reformas necesarias al Reglamento Interno para adaptar la marcha de las cátedras a la evolución de la justicia y la moral comunal.",
    "Contexto": "Reglamento Interno (Acta N° 55).",
    "Conexiones": ["Reforma", "Justicia", "Administración"],
    "Obras": ["Reglamento Interno"]
  },
  "Régimen de Sesiones": {
    "Definición": "Conjunto de normas que regulan el comportamiento, la frecuencia y la disciplina de los estudiantes y médiums durante las reuniones de estudio y mediumnidad en la Escuela.",
    "Contexto": "Reglamento Interno (Sección 2).",
    "Conexiones": ["Sesiones", "Disciplina", "Estudio"],
    "Obras": ["Reglamento Interno", "Laudo de Rigor"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 1 de Reglamento Interno (7 nodos 1:1) y 3 términos sinápticos.');
