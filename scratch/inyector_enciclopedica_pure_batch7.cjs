const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Filosofía Enciclopédica Universal Tomo 1 (Batch 7 - Claves 89 a 108)
const nuevosNodos = {
  "3538: Mayo 30 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Lectura de la Rosa de Jericó. La lectura de la vida de Jesús dictada por él mismo atrae a espíritus de gran moderación y afecto que validan la historia real del Maestro.",
    "CitaInelutable": "Di lectura del capítulo 14 de la 'Vida de Jesús dictada por él mismo'... un gran agobio pero una mirada poco común.",
    "EjemploPedagogico": "La verdad histórica sobre Jesús es un imán que atrae a los espíritus que presenciaron los hechos para dar su testimonio.",
    "ConexionDoctrinal": ["Vida de Jesús (Realidad)", "Rosa de Jericó"],
    "NodosSimapticos": ["Vida de Jesús (dictada por él mismo)"]
  },
  "3618: Mayo 31 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Recuperación de la Razón. Un espíritu que fue 'una mala madre' recupera la cordura y la paz al llegar a la Escuela, solicitando luz por caridad.",
    "CitaInelutable": "Errante he andado mucho tiempo... aquí he presentido la gracia de Dios... y recobré la razón.",
    "EjemploPedagogico": "La Escuela es el puerto de paz donde los náufragos de la moral encuentran tierra firme para volver a empezar.",
    "ConexionDoctrinal": ["Redención de la Conciencia", "Recuperación de la Razón"],
    "NodosSimapticos": []
  },
  "3665: Junio 2 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Búsqueda Inter-existencial de Amor. El espíritu busca el amor verdadero a través de múltiples roles (hijo, madre) hasta que comprende que el amor es una ley universal y no solo un vínculo sanguíneo.",
    "CitaInelutable": "Son muchas existencias que ando buscando amor. He sido hijo y madre... y no conseguí el amor que busco.",
    "EjemploPedagogico": "Buscas el amor en el nombre de la familia, pero el amor real no tiene apellidos, es la vibración que une a todos los seres.",
    "ConexionDoctrinal": ["Evolución de los Sentimientos", "Lazos Familiares"],
    "NodosSimapticos": []
  },
  "3691: Junio 2 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Autoridad del Viejito. La oferta del cayado (símbolo de guía y autoridad) para corregir a las 'descarriadas' mediante la energía justa.",
    "CitaInelutable": "Yo estoy contento y sólo falta mi cayado. ¿Lo quieres, guiado querido?",
    "EjemploPedagogico": "La autoridad no es para mandar, sino para sostener al que tropieza y marcar el camino al que se pierde.",
    "ConexionDoctrinal": ["Autoridad Espiritual", "El Viejito"],
    "NodosSimapticos": []
  },
  "3743: Junio 3 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Desdoblamiento Terapéutico. El espíritu de un hombre encarnado habla a su propia materia para recriminarle sus faltas y exigirle el cumplimiento del deber.",
    "CitaInelutable": "Evocamos su propio espíritu. Se desdobló y por la médium habló a su propia materia.",
    "EjemploPedagogico": "Es como si tu conciencia saliera de ti y se pusiera frente a ti para decirte la verdad sin excusas.",
    "ConexionDoctrinal": ["Desdoblamiento (Terapéutico)", "Responsabilidad de la Materia"],
    "NodosSimapticos": ["Desdoblamiento (Terapéutico)"]
  },
  "3752: Junio 4 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Corrección de Pasiones. La necesidad de limpiar el espíritu de imperfecciones y pasiones para poder ser un portador digno de la semilla de la verdad.",
    "CitaInelutable": "Aún tenéis muchas imperfecciones... muchas pasiones que desechar.",
    "EjemploPedagogico": "No puedes llevar agua pura en un cántaro sucio; primero debes lavar el recipiente (tu alma) para que el agua no se contamine.",
    "ConexionDoctrinal": ["Depuración del Espíritu", "Lucha contra las Pasiones"],
    "NodosSimapticos": []
  },
  "3795: Junio 7 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Ventaja del Misionero. Trincado lucha con la ventaja del conocimiento y el apoyo total del espíritu, a diferencia de otros misioneros del pasado.",
    "CitaInelutable": "Nada temas, porque tú luchas con ventaja.",
    "EjemploPedagogico": "El que conoce el mapa y tiene al guía a su lado, no puede temer a la selva.",
    "ConexionDoctrinal": ["Protección del Misionero", "Ventaja de la Verdad"],
    "NodosSimapticos": []
  },
  "3838: Junio 8 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Labrador de Corazones. El espíritu que prefiere labrar almas antes que tierras, pero que no escapa a la envidia y calumnia de los hombres.",
    "CitaInelutable": "Yo, labraba más corazones que tierra, y no me libré por eso de la envidia.",
    "EjemploPedagogico": "El sembrador de ideas siempre tendrá que enfrentar las piedras que le tiran los que no quieren ver crecer el trigo.",
    "ConexionDoctrinal": ["Envidia y Calumnia", "Trabajo Espiritual"],
    "NodosSimapticos": []
  },
  "3891: Junio 9 de 1911 - Escrita, Trincado": {
    "PilotoDeCoherencia": "Traición Espiritual. Un espíritu que recibió ayuda para su 'hambre espiritual' confiesa su intento de traición, revelando la fragilidad de la gratitud ante el orgullo.",
    "CitaInelutable": "Soy yo, hermano... quien te quiso traicionar.-¿Eh?...¿Tú eres un hombre grande?",
    "EjemploPedagogico": "Incluso quien ha sido saciado por tu mano puede morderla si su orgullo es mayor que su amor; esto sirve de advertencia al misionero.",
    "ConexionDoctrinal": ["Traición Espiritual", "Fragilidad Humana/Espiritual"],
    "NodosSimapticos": ["Traición Espiritual"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Desdoblamiento (Terapéutico)": {
    "Definición": "Fenómeno mediúmnico en el cual se evoca el espíritu de una persona que se encuentra encarnada y despierta, permitiendo que dicho espíritu se manifieste a través de un médium para comunicarse directamente con su propia materia (su cuerpo y mente consciente). Se utiliza en la Escuela para que el ser tome conciencia de sus errores y asuma compromisos de cambio.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Caso de Manuel Fernández, Junio de 1911).",
    "Conexiones": ["Mediumnidad", "Espíritu", "Conciencia", "Materia"],
    "Obras": ["Filosofía Enciclopédica Universal", "El Espiritismo Estudiado"]
  },
  "Vida de Jesús (dictada por él mismo)": {
    "Definición": "Referencia doctrinal a las comunicaciones en las que el espíritu de Jesús relata su verdadera historia, despojada de adornos bíblicos. Trincado utilizaba estas lecturas (como 'Rosa de Jericó') para atraer a espíritus de alta vibración y educar a los asistentes en la realidad histórica del Maestro.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesiones de Mayo-Junio de 1911).",
    "Conexiones": ["Jesús", "Rosa de Jericó", "Historia Real"],
    "Obras": ["Filosofía Enciclopédica Universal", "Jesús Hombre y No Dios"]
  },
  "Traición Espiritual": {
    "Definición": "Acto de deslealtad cometido por un espíritu (encarnado o desencarnado) hacia la misión o el misionero, a pesar de haber recibido beneficios o luz de estos. Se origina generalmente en el orgullo, la envidia o la persistencia de prejuicios que impiden la gratitud real y el reconocimiento de la Verdad.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Manifestación del espíritu que quiso traicionar a Trincado).",
    "Conexiones": ["Orgullo", "Envidia", "Responsabilidad Moral"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 9 nodos PURA CALIDAD 1:1 de Filosofía Enciclopédica Tomo 1 (Batch 7) y 3 términos sinápticos.');
