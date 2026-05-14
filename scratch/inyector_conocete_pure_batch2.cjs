const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Conócete a ti mismo (Batch 2 - Claves 19 a 39)
const nuevosNodos = {
  "2513: Párrafo V: oBRas DeL esPÍRiTU": {
    "PilotoDeCoherencia": "Justificación del error pasado. El espíritu debe pasar por el mal para conocer el bien; el dolor del pasado es el abono del reinado del amor actual.",
    "CitaInelutable": "Si no hubiéramos pasando por el mal ¿cómo conoceríamos el bien?",
    "EjemploPedagogico": "No valoras la luz si no has estado en la oscuridad absoluta.",
    "ConexionDoctrinal": ["Evolución por Contrastes"],
    "NodosSimapticos": []
  },
  "2541: Punto primero: eL esPÍRiTU UniVeRsaL": {
    "PilotoDeCoherencia": "Definición del Espíritu Universal. Es la suma de la potencia y amor de todos los espíritus del infinito que vibran con el Creador.",
    "CitaInelutable": "El espíritu universal es la potencia... sumado de todos los espíritus del infinito.",
    "EjemploPedagogico": "Es el coro universal donde cada voz es un espíritu y la canción es la ley de Eloí.",
    "ConexionDoctrinal": ["Espíritu Universal"],
    "NodosSimapticos": []
  },
  "2569: Punto segundo: Los esPÍRiTUs naTURaLes": {
    "PilotoDeCoherencia": "Jerarquía de mundos. Cada mundo tiene un maestro encargado de guiar su evolución biológica e histórica desde su formación.",
    "CitaInelutable": "Ya hay un maestro a quien la ley suprema entrega ese mundo... con el índice de todas las cosas.",
    "EjemploPedagogico": "Cada planeta tiene su director de obra que supervisa desde la primera piedra hasta el último habitante.",
    "ConexionDoctrinal": ["Maestros de Mundos"],
    "NodosSimapticos": []
  },
  "2630: Punto tercero: Los esPÍRiTUs eLeMenTaLes": {
    "PilotoDeCoherencia": "Regulación de la atmósfera. Espíritus encargados de absorber los miasmas de los hombres y regular los elementos naturales.",
    "CitaInelutable": "Se encarga de los vientos y la atmósfera... tendrá que absorber todos los miasmas de los hombres.",
    "EjemploPedagogico": "Son los recicladores invisibles que intentan limpiar el aire que el hombre ensucia con sus pensamientos y actos.",
    "ConexionDoctrinal": ["Espíritus Elementales", "Limpieza de Miasmas"],
    "NodosSimapticos": []
  },
  "2682: Punto cuarto: eL esPÍRiTU HUMano": {
    "PilotoDeCoherencia": "Arquitectura de la creación. El espíritu humano da belleza y forma viva al edificio del cosmos mediante su ingenio y trabajo sobre la materia.",
    "CitaInelutable": "Las obras del espíritu humano... constituyen la arquitectura del edificio de la creación.",
    "EjemploPedagogico": "El espíritu es el artista; la materia es el mármol tosco que él convierte en una escultura viva.",
    "ConexionDoctrinal": ["Misión del Espíritu Humano"],
    "NodosSimapticos": []
  },
  "2774: Párrafo Vi: eL esPÍRiTU es oMniPoTenTe, PeRo no oMnÍMoDo": {
    "PilotoDeCoherencia": "Poder limitado por la Ley. El espíritu gana omnipotencia mediante la inteligencia y el amor, pero no puede actuar fuera de la ley universal que lo rige.",
    "CitaInelutable": "El espíritu es omnipotente, pero no omnímodo... porque está sujeto a la ley.",
    "EjemploPedagogico": "Un rey es omnipotente en su reino, pero no puede decretar que el sol salga por el oeste porque hay leyes superiores.",
    "ConexionDoctrinal": ["Omnipotencia Espiritual", "Sujeción a la Ley"],
    "NodosSimapticos": ["Espíritu Omnipotente (no Omnímodo)"]
  },
  "2846: Párrafo Vii: TRaBaJo DeL esPÍRiTU; sU Fin": {
    "PilotoDeCoherencia": "El fin es la omnipotencia. El trabajo del espíritu consiste en cumplir las leyes para alcanzar el grado máximo de poder consciente en la comunión universal.",
    "CitaInelutable": "El trabajo del espíritu se encamina... a adquirir la omnipotencia; y es el fin que persigue.",
    "EjemploPedagogico": "El espíritu estudia para graduarse como un dios consciente en el universo.",
    "ConexionDoctrinal": ["Fin del Espíritu"],
    "NodosSimapticos": []
  },
  "2952: Párrafo Viii: ¿QUÉ es La CoMUna?": {
    "PilotoDeCoherencia": "La Comuna como destino social. Es el fin ineludible de todas las humanidades, donde todos los trabajos se eslabonan en armonía.",
    "CitaInelutable": "La comuna es el fin de las humanidades en los mundos.",
    "EjemploPedagogico": "La sociedad debe funcionar como un reloj donde cada pieza, por pequeña que sea, es necesaria para dar la hora de la paz.",
    "ConexionDoctrinal": ["La Comuna Universal"],
    "NodosSimapticos": []
  },
  "3075: Párrafo iX: La PoTenCia DeL esPÍRiTU PRoCeDe De sU saBiDURÍa": {
    "PilotoDeCoherencia": "Potencia acumulada. La fuerza del espíritu no es fuerza bruta, es la suma de conocimientos y sabidurías acumuladas en su archivo.",
    "CitaInelutable": "Potencia es, la suma de varias fuerzas... procede de su sabiduría.",
    "EjemploPedagogico": "La potencia de un motor no está en su tamaño, sino en la precisión de su ingeniería.",
    "ConexionDoctrinal": ["Potencia y Sabiduría"],
    "NodosSimapticos": []
  },
  "3195: Párrafo X: La PaTRia DeL esPÍRiTU La patria del espíritu es el Universo: los mundos son un destierro de": {
    "PilotoDeCoherencia": "Cosmopolitismo espiritual. El espíritu no pertenece a una nación o planeta; su hogar es el Universo entero. Los mundos son solo colegios temporales.",
    "CitaInelutable": "La patria del espíritu es el Universo: los mundos son un destierro de necesidad.",
    "EjemploPedagogico": "Eres un ciudadano del cosmos que está de intercambio en el colegio llamado Tierra.",
    "ConexionDoctrinal": ["Patria del Espíritu", "Mundos como Colegios"],
    "NodosSimapticos": ["Patria del Espíritu"]
  },
  "3262: CaPÍTULo iii: Las LeYes DeL UniVeRso": {
    "PilotoDeCoherencia": "Estructura formal del capítulo sobre la legislación cósmica.",
    "CitaInelutable": "CaPÍTULo iii: Las LeYes DeL UniVeRso.",
    "EjemploPedagogico": "El código penal y civil del cosmos.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "3269: Párrafo i: LeY ÚniCa Y sUPReMa De aMoR En el Universo todo es amor, porque el creador sólo es amor; por lo": {
    "PilotoDeCoherencia": "Omnipresencia del amor. Incluso en el rigor de la justicia, el fin es el amor, porque el Creador es solo amor.",
    "CitaInelutable": "En el Universo todo es amor... hasta en la justicia de mayor rigor.",
    "EjemploPedagogico": "El cirujano que corta con rigor lo hace por amor a la vida del paciente.",
    "ConexionDoctrinal": ["Ley Suprema de Amor"],
    "NodosSimapticos": []
  },
  "3500: Párrafo ii: LeYes DeRiVaDas Y FaTaLes Ya dijimos en el párrafo «leyes del espíritu» las funciones de estas": {
    "PilotoDeCoherencia": "Leyes de necesidad. Las leyes derivadas son fatales (inevitables) para que el hombre comprenda que nunca está desamparado de la justicia.",
    "CitaInelutable": "Leyes derivadas y fatales... para que el hombre... comprenda que no está desheredado.",
    "EjemploPedagogico": "Si sueltas una piedra, caerá; es fatal. Si haces un mal, recibirás su efecto; es justicia necesaria para aprender.",
    "ConexionDoctrinal": ["Leyes Fatales", "Justicia Necesaria"],
    "NodosSimapticos": []
  },
  "3602: Párrafo iii: Las LeYes HUManas son Una ReFLeXión De Las DiVinas": {
    "PilotoDeCoherencia": "Evolución legislativa. Las leyes humanas, aunque imperfectas e ignorantes al principio, son el intento del hombre de reflejar la armonía divina.",
    "CitaInelutable": "Las leyes humanas son una reflexión de las divinas.",
    "EjemploPedagogico": "El dibujo de un niño intentando copiar un paisaje hermoso; es imperfecto, pero demuestra su amor por la belleza.",
    "ConexionDoctrinal": ["Derecho Humano vs Divino"],
    "NodosSimapticos": []
  },
  "3751: Párrafo iV: eL esPÍRiTU no PUeDe eLUDiR Las LeYes DiVinas Y Las CUMPLe": {
    "PilotoDeCoherencia": "Desentrañando el 'incesto'. Trincado aborda con atrevimiento la consanguinidad, sugiriendo que las leyes divinas de afinidad trascienden los prejuicios sociales sobre la unión de cuerpos.",
    "CitaInelutable": "El incesto... como se ha llamado a la unión de cuerpos entre el primero, segundo y tercer grados de consanguinidad.",
    "EjemploPedagogico": "La ley de afinidad espiritual ignora las etiquetas de parentesco material que los hombres inventaron para el control social.",
    "ConexionDoctrinal": ["Leyes de Afinidad", "Crítica a la Moralidad Vulgar"],
    "NodosSimapticos": []
  },
  "3872: Párrafo V: Las LeYes DiVinas en sU MaYoR RiGoR son ToDo aMoR": {
    "PilotoDeCoherencia": "La amargura de la verdad. La posesión de la verdad hace llorar porque es amarga al principio, pero ese dolor es la mayor muestra de amor divino.",
    "CitaInelutable": "Únicamente la verdad es la que hace llorar, porque siempre es amarga.",
    "EjemploPedagogico": "La medicina que cura suele ser la más amarga al paladar.",
    "ConexionDoctrinal": ["Verdad y Rigor"],
    "NodosSimapticos": []
  },
  "3978: Párrafo Vi: eL ÚniCo Fin De Las LeYes DiVinas es La CReaCión Y La aRMonÍa": {
    "PilotoDeCoherencia": "Orden y armonía. El fin de toda ley cósmica es mantener la armonía de la creación, comparable a la carta orgánica de una nación civilizada.",
    "CitaInelutable": "El único fin de las leyes divinas es la creación y la armonía.",
    "EjemploPedagogico": "Las leyes no son para castigar, sino para que todos podamos bailar en el gran salón del universo sin pisarnos los pies.",
    "ConexionDoctrinal": ["Armonía Universal"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Espíritu Omnipotente (no Omnímodo)": {
    "Definición": "Concepto que define el poder del espíritu humano. El espíritu es omnipotente porque, mediante el progreso y la sabiduría, puede vencer todos los obstáculos de la naturaleza. Sin embargo, no es omnímodo porque su acción está siempre limitada y sujeta a la Ley Universal y al respeto del derecho ajeno; no puede ser una ley absoluta por sí mismo por encima del Creador.",
    "Contexto": "Conócete a ti mismo (Capítulo II, Párrafo VI).",
    "Conexiones": ["Omnipotencia Espiritual", "Sujeción a la Ley", "Libre Albedrío"],
    "Obras": ["Conócete a ti mismo"]
  },
  "Patria del Espíritu": {
    "Definición": "Revelación trincadista que establece que el hogar verdadero y definitivo del espíritu es el Universo Infinito. Los mundos materiales (como la Tierra) no son patrias, sino colegios, talleres o, en estados de atraso, destierros necesarios para el aprendizaje y la purificación del alma. El nacionalismo planetario es una ilusión de la materia.",
    "Contexto": "Conócete a ti mismo (Capítulo II, Párrafo X).",
    "Conexiones": ["Cosmopolitismo Universal", "Mundos como Colegios", "Eternidad del Espíritu"],
    "Obras": ["Conócete a ti mismo", "Buscando a Dios"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 17 nodos PURA CALIDAD 1:1 de Conócete a ti mismo (Batch 2) y 2 términos sinápticos.');
