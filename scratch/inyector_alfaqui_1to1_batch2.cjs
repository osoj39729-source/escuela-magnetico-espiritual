const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/alfaqui-vademecum_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Alfaquí Vademécum (Batch 2 - FINAL - Capítulos VII al XI)
const nuevosNodos = {
  "976: CAPÍTULO VII: EL HOMBRE": {
    "PilotoDeCoherencia": "Definición anatómica y espiritual del Hombre. Es el ser racional de los mundos, y sobre él solo está el Creador. Su cuerpo material es la 'verdadera arca de Noé', ya que está formado por las esencias depuradas (de cuarto grado) de los tres reinos de la naturaleza (mineral, vegetal, animal).",
    "CitaInelutable": "El hombre es el ser racional de los mundos... Su cuerpo es la verdadera arca de Noé, por cuanto está formado de las esencias de cuarto grado de las materias de los tres reinos.",
    "EjemploPedagogico": "El cuerpo humano es una obra maestra de reciclaje cósmico. Tiene los minerales más finos de la tierra, la savia de las plantas y el instinto animal, todo coronado por la razón del espíritu.",
    "ConexionDoctrinal": ["Arca de Noé Fisiológica", "Supremacía del Hombre", "Esencias de Cuarto Grado"],
    "NodosSimapticos": ["Reciclaje Cósmico", "Rey de los Tres Reinos"]
  },
  "1280: CAPÍTULO VIII: GRADOS DE PROGRESO": {
    "PilotoDeCoherencia": "El progreso de las humanidades no se detiene nunca, pero socialmente un grado de progreso no se hace evidente ('Ley') hasta que la mayoría de los hombres alcanzan ese nivel. La costumbre se hace tradición, hasta que una nueva etapa evolutiva absorbe a la anterior.",
    "CitaInelutable": "No se manifiesta el grado de progreso adquirido hasta que la mayoría de los hombres están en ese mismo grado, porque entonces lo hace ley.",
    "EjemploPedagogico": "Un solo estudiante que aprende a leer no hace al pueblo alfabetizado. Cuando la mayoría aprende a leer, la lectura se convierte en la ley y la cultura del pueblo entero.",
    "ConexionDoctrinal": ["Masa Crítica de Progreso", "Evolución Social", "La Costumbre como Ley"],
    "NodosSimapticos": ["Ascenso Social Colectivo", "Mayoría Evolutiva"]
  },
  "1399: CAPÍTULO IX: CONOCIMIENTOS DE CAUSAS Y EFECTOS": {
    "PilotoDeCoherencia": "Todo hecho humano o natural es un efecto de una causa superior. Mientras el hombre carece de sabiduría pura, suele confundir los efectos con las causas. Los hechos físicos nunca son causas originarias, son siempre el resultado de la acción invisible del espíritu operando las leyes.",
    "CitaInelutable": "Todos los hechos de los hombres son efecto de su causa correspondiente; y aun los hechos de la naturaleza realizados en sabiduría son efecto de causa mayor.",
    "EjemploPedagogico": "El hombre ignorante cree que la lluvia (hecho físico) es la causa de que crezca la planta. El sabio sabe que la lluvia es un efecto de la evaporación, que es efecto del calor, que es efecto del sol, cuya causa primaria es la voluntad del Creador.",
    "ConexionDoctrinal": ["Causa y Efecto", "Ceguera de los Sentidos", "Causalidad Espiritual"],
    "NodosSimapticos": ["Espejismo Físico", "Motor Invisible"]
  },
  "1464: CAPÍTULO X: EL HOMBRE ANTE LA LEY": {
    "PilotoDeCoherencia": "El hombre lleva impresa en su ser la Ley de Amor. A pesar de todas sus caídas en la ignorancia o la prevaricación (religión/supremacía), siempre se rehabilita, porque la Ley es intrínseca a su naturaleza trina (cuerpo, alma, espíritu) y no puede ser borrada jamás.",
    "CitaInelutable": "Puesto que el hombre... sin embargo de tantas caídas siempre se rehabilita, ello es porque lleva impresa en su ser la ley de amor.",
    "EjemploPedagogico": "La Ley de Amor en el hombre es como el código genético: puedes mancharte de barro y parecer irreconocible, pero debajo de la suciedad, tu ADN sigue siendo humano y puro.",
    "ConexionDoctrinal": ["Ley de Amor Impresa", "Rehabilitación Ineludible", "Inmortalidad del Bien"],
    "NodosSimapticos": ["ADN Espiritual", "Resiliencia del Espíritu"]
  },
  "1554: CAPÍTULO XI: DEFINICIONES MÁXIMAS": {
    "PilotoDeCoherencia": "Refutación del dogma trinitario católico (Padre, Hijo, Espíritu Santo). Se califica de doctrina 'derogada y relegada' por irracional. El Maestro advierte que este es el artículo capital: la verdadera y única trinidad demostrable en la Tierra es Creador (Eloí), Espíritu (Ejecutor) y Naturaleza (Materia/Efecto), o en el individuo: Espíritu, Alma y Cuerpo.",
    "CitaInelutable": "En la doctrinas derogadas y relegadas existe una trinidad (Dios Padre, Hijo y Espíritu Santo) pero no puedo explicármela racionalmente... Oye y entiende bien, pues éste es el artículo capital.",
    "EjemploPedagogico": "La trinidad religiosa es un truco de magia ilógico (1=3). La trinidad racional es como un coche: Tienes al Conductor (Espíritu), el Motor y el volante (Alma/Éter), y la Carrocería (Cuerpo físico). Tres componentes reales que hacen un solo vehículo funcional.",
    "ConexionDoctrinal": ["Trinidad Racional vs Trinidad Dogmática", "Trilogía Universal", "Derogación del Dogma"],
    "NodosSimapticos": ["Falso Misterio Trinitario", "Cuerpo-Alma-Espíritu"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Arca de Noé Fisiológica": {
    "Definición": "Concepto biológico-espiritual que define al cuerpo humano físico como el resumen y cúspide de toda la evolución planetaria, al estar construido con las esencias más depuradas (esencias de cuarto grado) extraídas de los reinos mineral, vegetal y animal.",
    "Contexto": "Capítulo VII de Alfaquí Vademécum.",
    "Conexiones": ["Cuerpo Humano", "Evolución de las Esencias", "Reino Animal"],
    "Obras": ["Alfaquí Vademécum", "Conócete a ti mismo"]
  },
  "Trinidad Racional": {
    "Definición": "El artículo capital que destruye el dogma trinitario católico. En el Universo, la trinidad es: Creador (Eloí), Ejecutor (Espíritu) y Efecto (Naturaleza). En la criatura humana, se manifiesta como: Espíritu, Alma y Cuerpo.",
    "Contexto": "Capítulo XI de Alfaquí Vademécum.",
    "Conexiones": ["Cuerpo-Alma-Espíritu", "Derogación del Dogma", "Lógica Matemática"],
    "Obras": ["Alfaquí Vademécum", "Los Extremos se Tocan"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 5 nodos finales de Alfaquí Vademécum (Batch 2 - FINAL) y 2 términos sinápticos.');
