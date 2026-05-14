const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/laudode-rigor_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = {};
if (fs.existsSync(esenciaPath)) {
  esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
}
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Laudo de Rigor (Batch 1 - Claves 0 a 9)
const nuevosNodos = {
  "001: Prefacio - Necesidad del Rigor": {
    "PilotoDeCoherencia": "Disciplina Legislativa. Ante la superchería y los escándalos internos del espiritualismo, la Escuela impone el rigor para proteger la grandeza del Espiritismo como verdad eterna del Padre.",
    "CitaInelutable": "La austeridad que exigimos... para que no se excusen... obligación de prohibir las comunicaciones... para que nadie alegue ignorancia.",
    "EjemploPedagogico": "Un juez que cierra una sala de audiencias donde la gente grita y miente, permitiendo entrar solo a quienes respeten el protocolo y la verdad del proceso.",
    "ConexionDoctrinal": ["Laudo de Rigor (Concepto)", "Soberanía de la Escuela"],
    "NodosSimapticos": ["Laudo de Rigor (Concepto)"]
  },
  "002: Considerando - Superchería y Tribunal": {
    "PilotoDeCoherencia": "Justicia Ejemplar. Se registran casos de superchería como antecedentes para una base jurídico-penal que no admite apelación en caso de reincidencia.",
    "CitaInelutable": "AUTO FISCAL para base jurídico-penal de reincidencia que no admite apelación.",
    "EjemploPedagogico": "Un médico que usa títulos falsos; una vez descubierto, es expulsado del colegio médico para que no pueda volver a engañar a los pacientes con su negligencia.",
    "ConexionDoctrinal": ["Superchería (Doctrinal)", "Justicia Colectiva"],
    "NodosSimapticos": ["Superchería (Doctrinal)"]
  },
  "003: Art. 1-2: Suspensión de Facultades": {
    "PilotoDeCoherencia": "Archivo Disciplinario. Se suspenden las facultades medianímicas que no se ajusten a la ley, responsabilizando a los guías y familiares por cualquier desviación.",
    "CitaInelutable": "Queda archivado... en suspenso y sin uso... se hace responsable a los Guías, Protectores y familiares.",
    "EjemploPedagogico": "Un oficial que retira el arma a un guardia que ha demostrado no saber usarla, responsabilizando a su superior si el guardia intenta usarla de nuevo sin permiso.",
    "ConexionDoctrinal": ["Ley de las Mediumnidades", "Disciplina Espiritual"],
    "NodosSimapticos": []
  },
  "004: Art. 3-4: Orden de Sesiones y Local": {
    "PilotoDeCoherencia": "Centralización del Culto. Las comunicaciones son exclusivas del local de la Cátedra en días y horas fijos. Se prohíbe el misticismo doméstico fuera del orden escolar.",
    "CitaInelutable": "Absolutamente prohibida toda comunicación... fuera de los días, horas y puntos que se señalan.",
    "EjemploPedagogico": "Un banco que solo entrega dinero en sus ventanillas oficiales durante el horario de oficina; si alguien te ofrece dinero en un callejón a medianoche a nombre del banco, es una estafa.",
    "ConexionDoctrinal": ["Reglamento Interno", "Unidad de Cátedra"],
    "NodosSimapticos": []
  },
  "005: Art. 8: Prevaricato de Directores": {
    "PilotoDeCoherencia": "Responsabilidad de Mando. Los directores que consienten la superchería o ignoran el Laudo incurren en prevaricato, siendo responsables ante el Consejo Superior.",
    "CitaInelutable": "Bajo la culpabilidad de prevaricato, los Directores... cumplirán y harán cumplir.",
    "EjemploPedagogico": "Un capitán de barco que ve a sus marineros robando la carga y no hace nada; el capitán es tan culpable como el ladrón por no cumplir su deber de vigilancia.",
    "ConexionDoctrinal": ["Prevaricato (Espiritual)", "Justicia de los Consejos"],
    "NodosSimapticos": ["Prevaricato (Espiritual)"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Laudo de Rigor (Concepto)": {
    "Definición": "Decreto de carácter disciplinario y legislativo que establece las normas estrictas para el ejercicio de la mediumnidad dentro de la Escuela. Su fin primordial es erradicar el mercantilismo, el fanatismo y la superchería, asegurando que toda comunicación espiritual sea para el estudio y el progreso, bajo la supervisión de los consejos.",
    "Contexto": "Laudo de Rigor (Joaquín Trincado).",
    "Conexiones": ["Disciplina", "Mediumnidad", "Justicia"],
    "Obras": ["Laudo de Rigor", "Ley de las Mediumnidades"]
  },
  "Superchería (Doctrinal)": {
    "Definición": "Fenómeno de engaño en el que se simula una comunicación espiritual inexistente o se permite la intervención de espíritus mistificadores. En la Escuela, la superchería es considerada un delito contra la verdad y el progreso del espíritu, sancionada con la expulsión o el archivo de las facultades.",
    "Contexto": "Laudo de Rigor.",
    "Conexiones": ["Mistificación", "Prevaricato", "Ignorancia"],
    "Obras": ["Laudo de Rigor", "Filosofía Austera Racional"]
  },
  "Prevaricato (Espiritual)": {
    "Definición": "Delito cometido por quien, ostentando un cargo de dirección o responsabilidad en la Escuela, falta conscientemente a sus deberes legislados o consiente prácticas contrarias a la doctrina. Es la traición al orden establecido por el Espíritu de Verdad en beneficio de intereses personales o negligencia.",
    "Contexto": "Laudo de Rigor (Art. 8).",
    "Conexiones": ["Justicia", "Responsabilidad", "Autoridad"],
    "Obras": ["Laudo de Rigor", "Estatutos y Reglamentos"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 1 de Laudo de Rigor (5 nodos) y 3 términos sinápticos. Rigor legislativo sellado.');
