const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

// Iniciar fresco para calidad pura 1:1 de Conócete a ti mismo
let esencia = {};
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Conócete a ti mismo (Batch 1 - Claves 0 a 19 del índice extraído)
const nuevosNodos = {
  "565: Proclama: El universo, solidarizado. El mundo todo, comunizado.": {
    "PilotoDeCoherencia": "Sello de la Proclama. Se establece el destino de la humanidad: la solidaridad universal y el régimen de la comuna sin fronteras.",
    "CitaInelutable": "El universo, solidarizado. El mundo todo, comunizado.",
    "EjemploPedagogico": "El cosmos es un solo cuerpo; la Tierra debe ser una sola casa.",
    "ConexionDoctrinal": ["Comunismo Universal", "Solidaridad Cósmica"],
    "NodosSimapticos": []
  },
  "568: La Ley es una: la sustancia una.": {
    "PilotoDeCoherencia": "Monismo existencial. Todo lo que existe proviene de una única fuente y se rige por un único principio motor.",
    "CitaInelutable": "La Ley es una: la sustancia una. Uno es el principio: uno es el fin.",
    "EjemploPedagogico": "La diversidad de la materia es solo vapor de una sola agua cósmica.",
    "ConexionDoctrinal": ["Monismo Trincadista", "Unidad de la Sustancia"],
    "NodosSimapticos": []
  },
  "570: Todo es magnetismo espiritual.": {
    "PilotoDeCoherencia": "La fuerza cohesiva. El magnetismo no es solo físico, es el vínculo espiritual que permite el estudio y la unión, a pesar de la oposición de los espiritualistas.",
    "CitaInelutable": "Todo es magnetismo espiritual... muros de la escuela, a la que sólo por la [afinidad se llega].",
    "EjemploPedagogico": "El magnetismo es el pegamento inteligente que mantiene unidos a los mundos y a las almas.",
    "ConexionDoctrinal": ["Magnetismo Espiritual"],
    "NodosSimapticos": []
  },
  "577: Consejos y recomendaciones:": {
    "PilotoDeCoherencia": "Ética del esfuerzo. El progreso no es un regalo; requiere sacrificio, cumplimiento de obligaciones y fe viva basada en obras, no en creencias ciegas.",
    "CitaInelutable": "¿Quieres tener derechos? créate primero obligaciones. El progreso se adquiere por esfuerzo propio.",
    "EjemploPedagogico": "Nadie puede ir al gimnasio por ti para que tú ganes músculo espiritual.",
    "ConexionDoctrinal": ["Derechos y Obligaciones", "Esfuerzo Propio", "Rechazo de la Fe Ciega"],
    "NodosSimapticos": ["Fe Viva"]
  },
  "828: PReFaCio": {
    "PilotoDeCoherencia": "Dificultad del autoconocimiento. Trincado advierte que conocerse a sí mismo ha sido difícil por la opresión de los 'seis días tristes', pero será natural en la Comuna del 'séptimo día'.",
    "CitaInelutable": "Este mandato es eterno... muy difícil en su cumplimiento hasta hoy... por la opresión.",
    "EjemploPedagogico": "En una celda oscura no puedes ver tu rostro; en la luz de la Comuna, el espejo es la razón limpia.",
    "ConexionDoctrinal": ["Transición al Séptimo Día", "Mandato de Autoconocimiento"],
    "NodosSimapticos": []
  },
  "911: Prólogo a la segunda edición: _______": {
    "PilotoDeCoherencia": "La reencarnación de la idea. Las ediciones de este libro son como reencarnaciones del espíritu: traen nuevos progresos para la etapa actual de la humanidad.",
    "CitaInelutable": "Los libros que encierran principios eternos, son como el espíritu... reencarnan con nuevos progresos.",
    "EjemploPedagogico": "El libro crece con la humanidad, adaptando su lenguaje pero manteniendo su alma eterna.",
    "ConexionDoctrinal": ["Evolución de la Obra"],
    "NodosSimapticos": []
  },
  "989: CaPÍTULo PRiMeRo: La ViDa": {
    "PilotoDeCoherencia": "Estructura formal del primer tratado ontológico.",
    "CitaInelutable": "CaPÍTULo PRiMeRo: La ViDa.",
    "EjemploPedagogico": "Definición del ser.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "992: Párrafo i: ¿QUÉ es La ViDa? Tan compleja han hecho los hombres esta pregunta, que los llamados": {
    "PilotoDeCoherencia": "Definición del espíritu como vida. La vida no es un misterio biológico inexplicable, es la presencia activa del espíritu, que es la vida misma.",
    "CitaInelutable": "El espíritu, único agente de la vida, porque es la vida misma.",
    "EjemploPedagogico": "El cuerpo es el foco, pero la corriente eléctrica que lo hace brillar es el espíritu.",
    "ConexionDoctrinal": ["El Espíritu es la Vida"],
    "NodosSimapticos": []
  },
  "1032: Párrafo ii: DeMosTRaCiones De La ViDa Nada en el mundo hay más sencillo que las demostraciones de la vida,": {
    "PilotoDeCoherencia": "Vida universal en los tres reinos. La vida no es exclusiva de los seres con sangre; los reinos mineral, vegetal y animal poseen la misma vida en diferentes grados de demostración.",
    "CitaInelutable": "Los tres reinos, mineral, vegetal y animal, tienen vida igual.",
    "EjemploPedagogico": "Una piedra vibra, una planta crece, un animal se mueve; es la misma canción tocada en diferentes instrumentos.",
    "ConexionDoctrinal": ["Vida Universal", "Los Tres Reinos"],
    "NodosSimapticos": []
  },
  "1096: Párrafo iii: ¿DonDe RaDiCa La ViDa? Expuesto lo que es la vida y sus demostraciones, sigue y se requiere": {
    "PilotoDeCoherencia": "Localización del principio vital. El hombre de la comuna debe comprender científicamente dónde radica la vida para dominar su propia razón.",
    "CitaInelutable": "El hombre de la comuna, tiene que saberlo en sus principios y generales... comprender lógica y positivamente.",
    "EjemploPedagogico": "Para arreglar un motor, primero debes saber dónde está la bujía.",
    "ConexionDoctrinal": ["Anatomía de la Vida"],
    "NodosSimapticos": []
  },
  "1170: Párrafo iV: La ViDa es eTeRna Y ConTinUaDa Que la vida es eterna, está en la mente de todos los hombres; pero": {
    "PilotoDeCoherencia": "Ley de la continuidad. La eternidad sin continuidad (reencarnación) sería una injusticia. El espíritu mantiene su conciencia y archivo a través de todas las existencias.",
    "CitaInelutable": "Si la vida, siendo eterna no fuera continuada, sería la más grande injusticia.",
    "EjemploPedagogico": "La vida no es una película de un solo acto; es una serie infinita donde el protagonista es siempre el mismo espíritu con diferentes disfraces.",
    "ConexionDoctrinal": ["Vida Continuada", "Justicia Reencarnacionista"],
    "NodosSimapticos": ["Eternidad Activa"]
  },
  "1254: Párrafo V: La ViDa VeRDaDeRa o RaCionaL La vida verdadera es la vida racional, y por lo tanto, ésta es de los": {
    "PilotoDeCoherencia": "El hombre trino. Solo el hombre razona porque es un ser trino (Espíritu, Alma, Cuerpo). La vida racional es la vida del espíritu consciente.",
    "CitaInelutable": "La vida verdadera es la vida racional... el hombre lo es por el espíritu... sólo cuando es trino.",
    "EjemploPedagogico": "Un animal vive en el presente; el hombre racional vive en la eternidad porque sabe quién es y de dónde viene.",
    "ConexionDoctrinal": ["Hombre Trino", "Vida Racional"],
    "NodosSimapticos": ["Conciencia del Espíritu"]
  },
  "1341: Párrafo Vi: La ViDa naTURaL Y no HaY Dos ViDas No puedo yo dejar la más pequeña confusión en los estudios que se le": {
    "PilotoDeCoherencia": "Unicidad de la vida. No hay dos vidas separadas (una espiritual y otra material); solo hay una vida con dos expresiones: instintiva (natural) y consciente (racional).",
    "CitaInelutable": "No hay dos vidas... la vida natural es del animal por instinto... la racional es del hombre.",
    "EjemploPedagogico": "El instinto es el piloto automático; la razón es el piloto consciente. Pero el avión es el mismo.",
    "ConexionDoctrinal": ["Unidad de la Vida", "Instinto vs Razón"],
    "NodosSimapticos": []
  },
  "1416: Párrafo Vii: eL aLMa soLo Tiene La ViDa naTURaL Y TeMPoRaRia": {
    "PilotoDeCoherencia": "Temporalidad del alma. El alma (cuerpo fluido) no es inteligente ni eterna por sí misma; es sensible y tiene vida temporal. Es el instrumento de enlace del espíritu con la materia.",
    "CitaInelutable": "El alma humana... sólo tiene vida natural; y ni unas ni otras son inteligentes, pero sí sensibles.",
    "EjemploPedagogico": "El alma es el guante de seda; el espíritu es la mano inteligente que lo mueve.",
    "ConexionDoctrinal": ["Naturaleza del Alma", "Sensibilidad sin Inteligencia"],
    "NodosSimapticos": ["Vida del Alma"]
  },
  "1592: Párrafo Viii: La ViDa De Los CUeRPos es Mas TeMPoRaRia": {
    "PilotoDeCoherencia": "Fragilidad de la materia. Los cuerpos son formas temporales necesarias para la experiencia, pero su vida es aún más fugaz que la del alma.",
    "CitaInelutable": "Lo temporal de la vida de los cuerpos de los hombres.",
    "EjemploPedagogico": "El cuerpo es el traje de buzo; se gasta y se rompe, pero el buzo sigue vivo para ponerse otro traje.",
    "ConexionDoctrinal": ["Temporalidad del Cuerpo"],
    "NodosSimapticos": []
  },
  "1683: Párrafo iX: eL CUeRPo Y eL aLMa no son ResPonsaBLes De sUs aCTos": {
    "PilotoDeCoherencia": "Ausencia de pecado en la materia. Ni el cuerpo ni el alma pueden pecar o ser responsables, pues son solo herramientas inconscientes formadas por las esencias de los reinos.",
    "CitaInelutable": "El cuerpo y el alma no son responsables de sus actos... son solo formación con las esencias de los tres reinos.",
    "EjemploPedagogico": "No puedes culpar al martillo si el carpintero se golpea el dedo.",
    "ConexionDoctrinal": ["Irresponsabilidad de la Materia"],
    "NodosSimapticos": []
  },
  "1722: Párrafo X: soLo eL esPÍRiTU es ResPonsaBLe De Los aCTos De Los HoMBRes": {
    "PilotoDeCoherencia": "El espíritu como único responsable. La responsabilidad nace del libre albedrío, y este solo le pertenece al espíritu. Él elige sus actos y debe asumir las consecuencias de su uso.",
    "CitaInelutable": "Sólo el espíritu es responsable... libre albedrío que sólo le es dado al espíritu.",
    "EjemploPedagogico": "El espíritu es el capitán del barco; si encalla, no es culpa de las maderas, sino de la dirección que tomó el capitán.",
    "ConexionDoctrinal": ["Responsabilidad del Espíritu", "Libre Albedrío"],
    "NodosSimapticos": ["El Capitán Responsable"]
  },
  "1865: CaPÍTULo seGUnDo: eL esPÍRiTU": {
    "PilotoDeCoherencia": "Estructura formal del capítulo dedicado al estudio profundo de la esencia.",
    "CitaInelutable": "CaPÍTULo seGUnDo: eL esPÍRiTU.",
    "EjemploPedagogico": "Estudio del ejecutor.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "1868: Párrafo i: conócete a ti Mismo ¿QUÉ es eL esPÍRiTU?": {
    "PilotoDeCoherencia": "Esencia primera. El espíritu es la esencia entre el Creador y la Materia. Es la vida universal y la vida material temporal de las formas.",
    "CitaInelutable": "El espíritu es la esencia primera entre el creador y la materia... es la vida universal.",
    "EjemploPedagogico": "El espíritu es el rayo de luz que une al sol con la tierra.",
    "ConexionDoctrinal": ["Definición de Espíritu"],
    "NodosSimapticos": ["Esencia Primera"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Hombre Trino": {
    "Definición": "Concepto central de la antropología trincadista que define al ser humano como una unidad compuesta por tres elementos distintos: Espíritu (el ser inteligente y responsable), Alma (cuerpo fluido o periespíritu, sede de la sensibilidad y enlace) y Cuerpo (envoltura material y herramienta de trabajo). Solo el hombre es trino en la Tierra, lo que le otorga la capacidad de razonar.",
    "Contexto": "Conócete a ti mismo (Capítulo I, Párrafo V).",
    "Conexiones": ["Espíritu", "Alma", "Cuerpo", "Vida Racional"],
    "Obras": ["Conócete a ti mismo", "Filosofía Austera Racional"]
  },
  "Vida Continuada": {
    "Definición": "Ley universal que establece que la existencia del espíritu no se interrumpe con la muerte física. La vida es una sola corriente que fluye a través de múltiples encarnaciones y estados (material y espiritual), permitiendo la acumulación de experiencias en un 'archivo' eterno. Negar la continuidad es negar la justicia del progreso.",
    "Contexto": "Conócete a ti mismo (Capítulo I, Párrafo IV).",
    "Conexiones": ["Eternidad del Espíritu", "Reencarnación", "Justicia Reencarnacionista"],
    "Obras": ["Conócete a ti mismo", "El Espiritismo en su Asiento"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 19 nodos PURA CALIDAD 1:1 de Conócete a ti mismo (Batch 1) y 2 términos sinápticos.');
