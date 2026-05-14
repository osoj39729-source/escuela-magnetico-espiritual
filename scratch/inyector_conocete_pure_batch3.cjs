const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Conócete a ti mismo (Batch 3 - Claves 36 a 55)
const nuevosNodos = {
  "4021: PaRTe seGUnDa": {
    "PilotoDeCoherencia": "Estructura formal de la segunda parte: Cosmogonía y Creación.",
    "CitaInelutable": "PaRTe seGUnDa.",
    "EjemploPedagogico": "Inicio del estudio de la formación de los mundos.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "4022: CaPÍTULo iV: La CReaCión": {
    "PilotoDeCoherencia": "Estructura formal del capítulo sobre el acto creativo continuo.",
    "CitaInelutable": "CaPÍTULo iV: La CReaCión.",
    "EjemploPedagogico": "Anatomía del cosmos.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "4025: Párrafo i: La CReaCión De Los MUnDos Ya conoce el hombre la vida, la causa de la vida, el espíritu, las leyes": {
    "PilotoDeCoherencia": "Espíritu como Creador Secundario. El espíritu es coeterno con Eloí y actúa como el motor inteligente que opera la creación constante de la materia.",
    "CitaInelutable": "El espíritu es el creador secundario porque es consubstancial y coeterno con el creador.",
    "EjemploPedagogico": "Dios es el arquitecto; el espíritu es el constructor que levanta los mundos ladrillo por ladrillo (átomo por átomo).",
    "ConexionDoctrinal": ["Creador Secundario", "Consubstancialidad Espiritual"],
    "NodosSimapticos": ["Creador Secundario"]
  },
  "4080: Punto primero: eL MUnDo en sU FUnCión HasTa FiJaRse en sU óRBiTa": {
    "PilotoDeCoherencia": "Maestría sobre la Ley. El espíritu maestro tiene la ley en sí mismo, mientras que el estudiante solo está dentro de la ley.",
    "CitaInelutable": "No es lo mismo estar en la ley el individuo, que estar la ley en él.",
    "EjemploPedagogico": "El músico novato lee la partitura (está en la ley); el maestro es la música misma (la ley está en él).",
    "ConexionDoctrinal": ["Grados de Maestría", "Ley Inmanente"],
    "NodosSimapticos": []
  },
  "4146: Punto segundo: La TieRRa en sU óRBiTa HasTa sU PaRTo, en QUe Dio La LUna": {
    "PilotoDeCoherencia": "Nacimiento de la Tierra. El sol engendra un nuevo 'hijo' (planeta), una nueva morada para familias de espíritus que ascienden.",
    "CitaInelutable": "El sol tiene un nuevo hijo... una nueva jornada de trabajo para una familia que asciende.",
    "EjemploPedagogico": "Cada planeta es una habitación nueva en la inmensa mansión del Padre.",
    "ConexionDoctrinal": ["Origen Solar de la Tierra", "Misión Planetaria"],
    "NodosSimapticos": []
  },
  "4234: Punto tercero: eL MUnDo en sU PRiMeR PaRTo en QUe Dio La LUna, HasTa La aPaRiCión DeL HoMBRe": {
    "PilotoDeCoherencia": "Preparación milenaria. 68 millones de siglos de transformaciones para preparar los materiales del cuerpo humano.",
    "CitaInelutable": "68 millones de siglos... no ha hecho más que preparar materiales para disponerse a engendrar al hombre.",
    "EjemploPedagogico": "El universo cocinó durante eones para servir un solo plato principal: el hombre racional.",
    "ConexionDoctrinal": ["Preparación de la Materia", "Centralidad del Hombre"],
    "NodosSimapticos": []
  },
  "4310: Punto cuarto: La aPaRiCión DeL HoMBRe en La TieRRa": {
    "PilotoDeCoherencia": "Germen telúrico. El hombre ya estaba en el germen que salió del sol, aunque su espíritu consciente encarnó después.",
    "CitaInelutable": "79 millones de siglos... desde que el germen telúrico (en el que ya iba el hombre) salió del sol.",
    "EjemploPedagogico": "La semilla del roble ya contiene al roble, aunque todavía sea solo un pequeño grano bajo la tierra.",
    "ConexionDoctrinal": ["Germen Telúrico", "Pre-existencia Humana"],
    "NodosSimapticos": []
  },
  "4568: Párrafo ii: PaRa QUe se CRean Los MUnDos claro es que ya no hay discusión de que para qué se crean los mundos,": {
    "PilotoDeCoherencia": "El sacrificio de la materia. Todo en el universo fue sacrificado y tamizado para permitir la aparición del hombre.",
    "CitaInelutable": "Todo fue sacrificado para hacer aparecer al hombre.",
    "EjemploPedagogico": "Se destruyeron mundos y se fundieron soles solo para que tú pudieras tener un cerebro capaz de pensar.",
    "ConexionDoctrinal": ["Propósito de la Creación"],
    "NodosSimapticos": []
  },
  "4715: Párrafo iii: ¿QUiÉn oPeRa La CReaCión De Los MUnDos?": {
    "PilotoDeCoherencia": "Voluntad Espiritual. La creación no es un accidente mecánico de la afinidad; es la voluntad de la universalidad de los espíritus operando bajo la ley de amor.",
    "CitaInelutable": "La acción de creación de los mundos, es ineludiblemente del espíritu y luego del hombre.",
    "EjemploPedagogico": "La ley de gravedad es la herramienta, pero el espíritu es el brazo que la mueve.",
    "ConexionDoctrinal": ["Operación del Espíritu"],
    "NodosSimapticos": []
  },
  "4779: Párrafo iV: La ViDa De Los MUnDos, sU DesaPaRiCión": {
    "PilotoDeCoherencia": "Temporalidad de los mundos. Los planetas, como los cuerpos, son formas temporales sujetas al progreso indefinido.",
    "CitaInelutable": "La vida del alma y del cuerpo es temporaria... lo que corresponde a los mundos.",
    "EjemploPedagogico": "Incluso las estrellas tienen fecha de caducidad; solo el espíritu es eterno.",
    "ConexionDoctrinal": ["Muerte Planetaria", "Progreso de la Materia"],
    "NodosSimapticos": []
  },
  "4839: Párrafo V: ¿QUiÉn LLeVa eL VaLoR De Los MUnDos? ¿Por qué he dicho, que las escorias de un mundo que desaparece van": {
    "PilotoDeCoherencia": "Reciclaje cósmico. Los residuos (escorias/cenizas) de un mundo que muere alimentan la formación de otros mundos nuevos.",
    "CitaInelutable": "Las escorias de un mundo que desaparece van por su ley a alimentar otros mundos.",
    "EjemploPedagogico": "El universo no desperdicia nada; la ceniza de un volcán muerto es el abono de una selva nueva en otro planeta.",
    "ConexionDoctrinal": ["Conservación de la Materia"],
    "NodosSimapticos": []
  },
  "4892: Párrafo Vi: saCRiFiCio DeL esPÍRiTU en Los MUnDos: sUs CaUsas": {
    "PilotoDeCoherencia": "El espíritu en la lucha. El espíritu llega sencillo a los mundos para enriquecerse mediante el sufrimiento y licenciarse en derecho.",
    "CitaInelutable": "El espíritu... lanzado a la lucha donde ha de enriquecerse y ser sabio por el sufrimiento.",
    "EjemploPedagogico": "El espíritu es un estudiante que entra a la universidad del dolor para graduarse en sabiduría.",
    "ConexionDoctrinal": ["Misión de Expiación", "Sabiduría por Sufrimiento"],
    "NodosSimapticos": ["Mundos de Expiación"]
  },
  "4925: Punto primero: MUnDos eMBRionaRios": {
    "PilotoDeCoherencia": "Estado de gestación. Mundos sin satélites donde se funden las esencias de los reinos.",
    "CitaInelutable": "Mundo embrionario... no ha aparecido un satélite, o luna.",
    "EjemploPedagogico": "Es el útero planetario donde todavía se están mezclando los ingredientes de la vida.",
    "ConexionDoctrinal": ["Mundos Embrionarios"],
    "NodosSimapticos": []
  },
  "4980: Punto segundo: MUnDos De PRUeBa": {
    "PilotoDeCoherencia": "Pesadez primera. Mundos de atmósfera espesa para espíritus con almas pesadísimas.",
    "CitaInelutable": "Día de espesa bruma... familia de espíritus pesadísimos.",
    "EjemploPedagogico": "Un colegio para alumnos que todavía no saben ni leer ni escribir y tienen mucha rabia acumulada.",
    "ConexionDoctrinal": ["Mundos de Prueba"],
    "NodosSimapticos": []
  },
  "5061: Punto tercero: MUnDos PRiMiTiVos": {
    "PilotoDeCoherencia": "El Infierno de Dante. Los mundos primitivos son los descritos por Dante Alighieri en su obra como principio fundamental de la vida del espíritu.",
    "CitaInelutable": "Ya están minuciosamente estudiados y descriptos por el Dante, en 'La Divina comedia'.",
    "EjemploPedagogico": "Dante no escribió ficción; fue un corresponsal de guerra que describió los planetas más violentos del universo.",
    "ConexionDoctrinal": ["Dante Alighieri como Misionero", "Mundos Primitivos"],
    "NodosSimapticos": ["Dante Alighieri (como Misionero)"]
  },
  "5183: Punto cuarto: MUnDo De TRansiCión": {
    "PilotoDeCoherencia": "Descanso del guerrero. Lugares para espíritus que han vencido la bravura de mundos inferiores y despiertan en conciencia.",
    "CitaInelutable": "Descansan allí los recién nacidos en la conciencia y vencedores.",
    "EjemploPedagogico": "Es el hotel de cinco estrellas para el soldado que regresa de la guerra victorioso.",
    "ConexionDoctrinal": ["Mundos de Transición"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Creador Secundario": {
    "Definición": "Concepto que designa al Espíritu como el agente activo y co-eterno de la creación. Mientras Eloí es la Causa Primera, el Espíritu es el encargado de operar la materia, formar mundos y guiar la evolución. El espíritu no crea 'de la nada', sino que transforma la sustancia única (Éter) por mandato de la Ley.",
    "Contexto": "Conócete a ti mismo (Capítulo IV, Párrafo I).",
    "Conexiones": ["Espíritu", "Eloí", "Sustancia Única"],
    "Obras": ["Conócete a ti mismo", "Alfaquí Vademécum"]
  },
  "Mundos de Expiación": {
    "Definición": "Planetas de grado inferior (como la Tierra en sus etapas pasadas) destinados al aprendizaje de los espíritus mediante el dolor, el esfuerzo y el contraste entre el mal y el bien. Se consideran 'colegios de necesidad' donde el espíritu se 'licencia en derecho' al comprender y acatar la Ley Universal.",
    "Contexto": "Conócete a ti mismo (Capítulo IV, Párrafo VI).",
    "Conexiones": ["Progreso por Sufrimiento", "Mundos de Prueba", "Ley de Justicia"],
    "Obras": ["Conócete a ti mismo", "El Espiritismo en su Asiento"]
  },
  "Dante Alighieri (como Misionero)": {
    "Definición": "Reconocimiento doctrinal del poeta florentino como un espíritu enviado por la Escuela para describir, mediante alegorías en 'La Divina Comedia', la realidad de los mundos primitivos y las penas del alma. Su obra se considera un estudio fundamental para comprender la vida del espíritu en sus grados inferiores.",
    "Contexto": "Conócete a ti mismo (Capítulo IV, Punto Tercero).",
    "Conexiones": ["Misioneros", "Mundos Primitivos", "La Divina Comedia"],
    "Obras": ["Conócete a ti mismo"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 16 nodos PURA CALIDAD 1:1 de Conócete a ti mismo (Batch 3) y 3 términos sinápticos.');
