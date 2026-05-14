const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/reglamento-interno_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// RE-DESTILACIÓN PURA 1:1 - Reglamento Interno (Batch 2 - Claves 7 a 13)
const nuevosNodos = {
  "007: RÉGIMEN DE ADMISIÓN (ENTRÁTICOS)": {
    "PilotoDeCoherencia": "Responsabilidad de Identidad. Ningún hombre honrado teme dar su nombre; se exige filiación completa a todo visitante para garantizar la seriedad y seguridad de la asamblea.",
    "CitaInelutable": "A todo visitante... se le tomará su filiación completa y verdad... porque ningún hombre honrado tiene que temer.",
    "EjemploPedagogico": "Inscribirse en una biblioteca pública; entregas tus datos no para ser vigilado, sino para que la institución sepa que eres un lector responsable que cuidará los libros.",
    "ConexionDoctrinal": ["Entrático (EMECU)", "Filiación"],
    "NodosSimapticos": ["Entrático (EMECU)"]
  },
  "008: NOVATOS": {
    "PilotoDeCoherencia": "Primer Grado de Compromiso. Tras la cuarta visita y previa identificación oficial, el estudiante recibe la tarjeta de Novato, iniciando su proceso formal de formación.",
    "CitaInelutable": "En la cuarta visita como ENTRATICOS... se le entregará la Tarjeta de NOVATO.",
    "EjemploPedagogico": "Un aprendiz en un taller que, después de observar el trabajo durante unos días, recibe su primer uniforme y herramientas básicas para empezar a practicar bajo supervisión.",
    "ConexionDoctrinal": ["Novato (EMECU)", "Cédula de Identidad"],
    "NodosSimapticos": ["Novato (EMECU)"]
  },
  "009: SIMPATIZANTES": {
    "PilotoDeCoherencia": "Vigilancia Ética. La Escuela observa la conducta y el estudio de novatos y simpatizantes antes de otorgar credenciales definitivas, protegiendo la integridad del grupo.",
    "CitaInelutable": "Vigilar y saber si estudian y observan conducta conforme a nuestras doctrinas, antes de darles la credencial.",
    "EjemploPedagogico": "Un club de senderismo que invita a nuevos miembros a rutas cortas para ver si tienen el equipo adecuado y la actitud de compañerismo necesaria antes de llevarlos a la alta montaña.",
    "ConexionDoctrinal": ["Conducta", "Estudio Doctrinal"],
    "NodosSimapticos": []
  },
  "010: ASAMBLEA DE CONSEJO Y TITULARES": {
    "PilotoDeCoherencia": "Periodicidad Administrativa. El Consejo y los Ministerios se reúnen regularmente (jueves 2° y 4°) para coordinar la marcha de la Escuela conforme a los Estatutos.",
    "CitaInelutable": "Se reúnen los días jueves 2° y 4° de cada mes... de acuerdo a los Estatutos.",
    "EjemploPedagogico": "Una reunión de vecinos programada cada mes para revisar el mantenimiento del edificio y el presupuesto; el orden en las fechas evita el caos y los olvidos.",
    "ConexionDoctrinal": ["Consejo Central", "Asambleas"],
    "NodosSimapticos": []
  },
  "011: ESCALA DE CARGOS": {
    "PilotoDeCoherencia": "Jerarquía de Servicio. Se establece una escala clara de cargos (Director, Celador, etc.) basada en la responsabilidad y no en la supremacía, bajo el mando único del Maestro Fundador y sus sucesores.",
    "CitaInelutable": "Escala de cargos que deben reconocerse... Director... Celador... Gobierno del Espiritismo.",
    "EjemploPedagogico": "Un barco donde hay capitán, timonel y marineros; cada uno tiene una función crítica, y la jerarquía existe para que la nave llegue a puerto, no para que el capitán sea un rey.",
    "ConexionDoctrinal": ["Director de Cátedra", "Jerarquía Administrativa"],
    "NodosSimapticos": ["Director de Cátedra"]
  },
  "012: FORMACIÓN DE LAS ASAMBLEAS": {
    "PilotoDeCoherencia": "Participación Ordenada. Se permite la asistencia de diversas categorías en asambleas de proyectos siempre que demuestren ser obligacionistas consecuentes.",
    "CitaInelutable": "Destinada a exposiciones y proyectos, pueden ser admitidas las categorías anteriores... Obligacionistas consecuentes.",
    "EjemploPedagogico": "Un foro abierto donde los estudiantes pueden presentar ideas para mejorar la escuela, siempre que asistan a clase y paguen su matrícula puntualmente.",
    "ConexionDoctrinal": ["Obligacionistas", "Proyectos de Mejora"],
    "NodosSimapticos": []
  },
  "013: ACLARACIÓN DE JUSTICIA": {
    "PilotoDeCoherencia": "Límite al Poder. Los Directores no son dictadores; su cargo es de servicio y responsabilidad, pudiendo ser removidos si faltan a sus promesas o a la justicia de la Escuela.",
    "CitaInelutable": "Los Directores no son mandones. No se les dio el cargo de 'Dictadores' supremáticos.",
    "EjemploPedagogico": "Un empleado público que tiene la llave de la oficina; su poder es solo para abrir y cerrar, no para decidir quién puede entrar basándose en su capricho personal.",
    "ConexionDoctrinal": ["Justicia Administrativa", "Cátedras y Subcátedras"],
    "NodosSimapticos": ["Director de Cátedra"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Entrático (EMECU)": {
    "Definición": "Visitante en su primera fase de contacto con la Escuela. Se le toma filiación completa para asegurar la responsabilidad civil y moral dentro de las sesiones, rompiendo con el anonimato de las religiones.",
    "Contexto": "Reglamento Interno (Art. 11).",
    "Conexiones": ["Admisión", "Identidad", "Sesiones"],
    "Obras": ["Reglamento Interno"]
  },
  "Novato (EMECU)": {
    "Definición": "Categoría del estudiante que ha cumplido cuatro visitas como entrático y ha presentado documento de identidad. Recibe una tarjeta que acredita su compromiso inicial de estudio y conducta.",
    "Contexto": "Reglamento Interno (Art. 12).",
    "Conexiones": ["Estudiante", "Compromiso", "Grados"],
    "Obras": ["Reglamento Interno"]
  },
  "Director de Cátedra": {
    "Definición": "Cargo administrativo y espiritual responsable de la marcha de una cátedra. No tiene autoridad dictatorial, sino que es un servidor sujeto a los estatutos y al Consejo Central, responsable de la limpieza moral del grupo.",
    "Contexto": "Reglamento Interno (Escala de Cargos).",
    "Conexiones": ["Responsabilidad", "Consejo", "Administración"],
    "Obras": ["Reglamento Interno", "Estatutos y Reglamentos"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 2 de Reglamento Interno (7 nodos 1:1) y 3 términos sinápticos. Grados y Jerarquías sellados.');
