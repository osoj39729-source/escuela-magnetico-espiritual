const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/estatutos-y-reglamentos_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Estatutos y Reglamentos (Batch 4 - FINAL - Claves 45 a 62)
const nuevosNodos = {
  "013: Art. 10: Requisitos para la Asamblea": {
    "PilotoDeCoherencia": "Mérito por Sacrificio. Para ser miembro de la Asamblea se requiere haber probado la calidad de adherente y ser obligacionista voluntario, reconociéndose esto como sacrificio real por la causa.",
    "CitaInelutable": "Serequiere haberdado pruebas deadherente... y ser obligacionista voluntario, porque esto se reconoce como sacrificio por la causa.",
    "EjemploPedagogico": "Un bombero voluntario que no solo tiene el uniforme, sino que ha pasado años apagando incendios y donando su propio equipo para la estación; su derecho a dirigir emana de ese esfuerzo previo.",
    "ConexionDoctrinal": ["Adherente Obligacionista", "Sacrificio y Derecho"],
    "NodosSimapticos": ["Adherente Obligacionista"]
  },
  "014: Art. 11: Mandato y Relevo": {
    "PilotoDeCoherencia": "Continuidad Honorífica. El mandato de los asambleístas es por tiempo indefinido y honorario. Las vacantes se cubren por orden de edad, asegurando la experiencia en el mando.",
    "CitaInelutable": "El mandato de los Asambleístas es por tiempo indefinido y es honorífico y honorario... bajas de los titulares las llenan los suplentes, por orden de edad.",
    "EjemploPedagogico": "Una mesa de ancianos sabios en una aldea; no se les paga un sueldo, sino que sirven por el honor de guiar a su pueblo, y cuando uno falta, el siguiente con más años de experiencia toma su lugar.",
    "ConexionDoctrinal": ["Mandato Indefinido", "Jerarquía por Experiencia"],
    "NodosSimapticos": []
  },
  "015: Art. 12: Comisiones y Personería": {
    "PilotoDeCoherencia": "Responsabilidad Civil Delegada. La Asamblea puede formar comisiones elegidas por plebiscito, las cuales adquieren personería jurídica y responsabilidad ante las leyes nacionales bajo credencial del Maestro Nato.",
    "CitaInelutable": "Formará comisiones... elegidos por votación plebiscitaria... tienen personería bajo credencial expedida por el maestro nato... adquiere cada comisión responsabilidad ante las leyes.",
    "EjemploPedagogico": "Un comité de obras vecinales que recibe un permiso oficial para gestionar fondos; son responsables legales de cada peso que gastan y deben rendir cuentas tanto a los vecinos como al estado.",
    "ConexionDoctrinal": ["Comisiones Plebiscitarias", "Personería Jurídica"],
    "NodosSimapticos": []
  },
  "016: Resumen - Estructura de la Norma (Cap. 1-2)": {
    "PilotoDeCoherencia": "Síntesis Legislativa. Los primeros dos capítulos establecen desde el domicilio y el apoliticismo hasta la dirección y autoridades, fijando el fin primordial de la comunización universal.",
    "CitaInelutable": "Capítulo 1ro: Siete artículos... normas generales... Capítulo 2do: Cinco artículos... dirección y autoridades.",
    "EjemploPedagogico": "Los cimientos y las vigas maestras de un edificio; sin ellos, por muy bonita que sea la fachada, la estructura se caería ante el primer viento.",
    "ConexionDoctrinal": ["Orden Legislativo", "EMECU (Estructura)"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Adherente Obligacionista": {
    "Definición": "Categoría de miembro de la EMECU que, además de aceptar la doctrina, asume un compromiso económico voluntario (obligación) para el sostenimiento de las casas comunales y la expansión de la obra. Esta figura representa el sacrificio material que valida el derecho a participar en el gobierno de la Escuela.",
    "Contexto": "Estatutos y Reglamento (Art. 10).",
    "Conexiones": ["Sacrificio y Derecho", "Asamblea Comunal", "Economía Comunal"],
    "Obras": ["Estatutos y Reglamentos"]
  },
  "Mandato Indefinido": {
    "Definición": "Principio de estabilidad administrativa en la EMECU que establece que los cargos de dirección y asamblea se mantienen mientras el individuo cumpla con los méritos y el orden estatuido. Evita las luchas de poder por periodos electorales, centrando el liderazgo en el mérito y la edad (experiencia).",
    "Contexto": "Estatutos y Reglamento (Art. 11).",
    "Conexiones": ["Autoridad", "Jerarquía", "Disciplina"],
    "Obras": ["Estatutos y Reglamentos"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ ¡OBRA COMPLETADA! Inyectado Batch 4 FINAL de Estatutos y Reglamentos. Estructura de la EMECU sellada.');
