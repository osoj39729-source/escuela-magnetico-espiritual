const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/laudode-rigor_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Laudo de Rigor (Batch 2 - FINAL - Claves 10 a 19)
const nuevosNodos = {
  "010: Art. 9: El Estudio como Defensa": {
    "PilotoDeCoherencia": "Supremacía del Conocimiento. Se suspenden las facultades fenoménicas para obligar al estudio de las obras, pues solo la sabiduría protege al médium del error.",
    "CitaInelutable": "Mandamos que, esas horas, las empleen en la lectura y estudio... el que defiende una cosa, debe ante todo saber lo que defiende.",
    "EjemploPedagogico": "Un soldado al que se le quita el fusil para que pase tiempo en la biblioteca estudiando tácticas y mapas, para que cuando vuelva al frente sepa realmente por qué lucha y cómo ganar.",
    "ConexionDoctrinal": ["Estudio Racional", "Disciplina"],
    "NodosSimapticos": []
  },
  "011: Art. 10: Magnetismo vs Espiritismo": {
    "PilotoDeCoherencia": "Deslinde Técnico. Queda prohibido magnetizar a los médiums; se debe distinguir al sonámbulo (fuerza anímica) del médium (instrumento espiritual).",
    "CitaInelutable": "El sonámbulo es una cosa y el médium es otra y queda prohibida tal práctica sobre las y los mediums.",
    "EjemploPedagogico": "No confundas un radio (médium) que recibe ondas externas con una batería (sonámbulo) que genera su propia energía; si intentas cargar el radio como una batería, lo quemas.",
    "ConexionDoctrinal": ["Sonámbulo vs Médium (Distinción)", "Magnetismo"],
    "NodosSimapticos": ["Sonámbulo vs Médium (Distinción)"]
  },
  "012: Art. 11: Horarios y Deberes de los Maestros": {
    "PilotoDeCoherencia": "Respeto a la Jerarquía Universal. Los maestros espirituales tienen deberes en otros mundos; no son esclavos de las sesiones humanas fuera de los horarios fijados.",
    "CitaInelutable": "Esos Maestros, también tienen deberes en otros mundos... y los rige en rigor la Justicia.",
    "EjemploPedagogico": "Un profesor de universidad que tiene horas de oficina; si un alumno lo busca en su casa a las 3 de la mañana, no encontrará al profesor, sino quizás a un impostor que se hace pasar por él.",
    "ConexionDoctrinal": ["Justicia Universal", "Superchería"],
    "NodosSimapticos": []
  },
  "013: Art. 12: Requisitos de la Sesión de Desarrollo": {
    "PilotoDeCoherencia": "Filtro de Calidad. La entrada a sesiones de desarrollo exige credencial, estudio comprobado de 2 libros y una cuota voluntaria como prueba de compromiso material.",
    "CitaInelutable": "Prueba del deber cumplido que le da derecho y ha demostrado su fe en sus obras.",
    "EjemploPedagogico": "Un club de ajedrez profesional que solo deja entrar a quienes han ganado torneos previos y pagan su membresía, para asegurar que el nivel de juego sea de excelencia.",
    "ConexionDoctrinal": ["Sesión a Puerta Cerrada (Protocolo)", "Deber y Derecho"],
    "NodosSimapticos": ["Sesión a Puerta Cerrada (Protocolo)"]
  },
  "014: Art. 13-15: Tolerancia y Aplicación": {
    "PilotoDeCoherencia": "Firmeza en el Mando. La tolerancia tiene límites: prevención, corrección y expulsión. El Laudo es de lectura mensual obligatoria para mantener viva la disciplina.",
    "CitaInelutable": "Tolerar, no es consentir... Al tolerado, Primero se le prevendrá; Segundo se le corregirá, y Tercero se le expulsará.",
    "EjemploPedagogico": "Un capitán que deja que un marinero aprenda poco a poco, pero si el marinero insiste en emborracharse y poner en peligro el barco tras varios avisos, lo baja en el siguiente puerto.",
    "ConexionDoctrinal": ["Tolerancia Doctrinal", "Soberanía Legislativa"],
    "NodosSimapticos": ["Tolerancia Doctrinal"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Sonámbulo vs Médium (Distinción)": {
    "Definición": "Clarificación técnica fundamental que diferencia al sonámbulo (que actúa bajo su propia fuerza anímica o magnética) del médium (que actúa como puente para un espíritu ajeno). El Laudo de Rigor prohíbe su mezcla para evitar la mistificación y el agotamiento del sistema nervioso del instrumento.",
    "Contexto": "Laudo de Rigor (Art. 10).",
    "Conexiones": ["Magnetismo", "Mediumnidad", "Fisiología"],
    "Obras": ["Laudo de Rigor", "El Magnetismo en su Origen"]
  },
  "Sesión a Puerta Cerrada (Protocolo)": {
    "Definición": "Régimen de estudio y desarrollo medianímico restringido exclusivamente a miembros titulados de la Escuela. Exige condiciones de moralidad, estudio previo y compromiso material (cuota), con el fin de crear una atmósfera vibratoria pura, libre de curiosos y escépticos.",
    "Contexto": "Laudo de Rigor (Art. 12).",
    "Conexiones": ["Disciplina", "Estudio", "Orden"],
    "Obras": ["Laudo de Rigor", "Reglamento Interno"]
  },
  "Tolerancia Doctrinal": {
    "Definición": "Principio pedagógico que respeta el ritmo evolutivo de cada individuo, permitiendo el error inicial siempre que haya voluntad de enmienda. Sin embargo, establece un límite riguroso basado en tres pasos: prevención, corrección y expulsión, para proteger la integridad de la Cátedra.",
    "Contexto": "Laudo de Rigor (Art. 13).",
    "Conexiones": ["Libre Albedrío", "Justicia", "Disciplina"],
    "Obras": ["Laudo de Rigor", "Estatutos y Reglamentos"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ ¡OBRA COMPLETADA! Inyectado Batch 2 FINAL de Laudo de Rigor. Disciplina de Cátedra sellada.');
