const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Filosofía Enciclopédica Universal Tomo 1 (Batch 9 - Claves 106 a 125)
const nuevosNodos = {
  "4361: Junio 20 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Resurrección de la Conciencia. El llamado al juicio no es para los difuntos físicos, sino para los 'vivos' con conciencias muertas que sirven de sepulcro a la chispa divina.",
    "CitaInelutable": "Surgite mortui et venite ad judicium... muertos los que estáis vivos, resucitar.",
    "EjemploPedagogico": "El cuerpo que camina sin conciencia es una estatua de carne; la verdad es el soplo que le devuelve la vida real al ser pensante.",
    "ConexionDoctrinal": ["Conciencia Muerta", "Juicio de la Razón"],
    "NodosSimapticos": ["Conciencia Muerta"]
  },
  "4397: Junio 21 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Sufrimiento por la Idolatría. Los espíritus de luz sufren al ver sus imágenes grotescas convertidas en objeto de imbecilidad y comercio religioso.",
    "CitaInelutable": "Viendo sus imágenes grotescas y la imbecilidad y comercio de que ha sido objeto.",
    "EjemploPedagogico": "Es como si pintaran una caricatura fea de tu padre y cobraran entrada por verla; el hijo siente dolor por la falta de respeto a la esencia.",
    "ConexionDoctrinal": ["Crítica a la Idolatría", "Comercio de lo Sagrado"],
    "NodosSimapticos": []
  },
  "4435: Junio 23 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Evocación del Papa Pío X. El espíritu encarnado del Papa es atraído para enfrentar su orgullo, revelando su desprecio por el Dios de Amor y su persistencia en el dogma.",
    "CitaInelutable": "Quise atraer al espíritu encarnado del actual Papa Pío X... con ademanes de desprecio y orgullo.",
    "EjemploPedagogico": "Ni el trono más alto de la tierra protege al espíritu de la citación de la Justicia Universal; ante la Verdad, el Papa es solo un espíritu en deuda.",
    "ConexionDoctrinal": ["Pío X (Evocación en Vida)", "Soberanía del Espíritu"],
    "NodosSimapticos": ["Pío X (Evocación en Vida)"]
  },
  "4453: Junio 25 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Amor Universal. El descanso y la grandeza del espíritu se encuentran en amar a la humanidad sin distinción de ninguna clase.",
    "CitaInelutable": "Amad sin distinción a la humanidad y seréis más grandes aún.",
    "EjemploPedagogico": "El amor no es un círculo cerrado para los amigos, es un horizonte abierto para todos los seres.",
    "ConexionDoctrinal": ["Amor Universal", "Igualdad Humana"],
    "NodosSimapticos": []
  },
  "4531: Junio 27 de 1911 - Escrita, Trincado": {
    "PilotoDeCoherencia": "Desprecio de la Pobreza. Relato de una mujer pobre que experimentó cómo el mundo desprecia la virtud cuando no tiene el brillo del dinero.",
    "CitaInelutable": "En este planeta tierra el pobre es despreciado; la virtud...",
    "EjemploPedagogico": "El diamante en el lodo sigue siendo diamante, pero el hombre ciego solo ve el lodo y desprecia la joya.",
    "ConexionDoctrinal": ["Injusticia Social", "Valor de la Virtud"],
    "NodosSimapticos": []
  },
  "4643: Junio 29 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Negación del Infierno. El concepto de maldición divina y fuego eterno es una blasfemia contra la naturaleza amorosa del Padre.",
    "CitaInelutable": "La maldición de Dios no existe. Dios no sería Dios, si maldijera a sus hijos.",
    "EjemploPedagogico": "Un padre nunca construye un horno para quemar a sus hijos por siempre; el 'fuego' es solo el ardor del remordimiento que purifica, no que destruye.",
    "ConexionDoctrinal": ["Infierno Eterno (Negación)", "Amor de Eloí"],
    "NodosSimapticos": ["Infierno Eterno (Negación)"]
  },
  "4730: Julio 2 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Persistencia del Error. Los prejuicios que mataron a Jesús siguen vivos en aquellos que se aferran a doctrinas erróneas, impidiendo el progreso de la verdad.",
    "CitaInelutable": "Aún dominan los prejuicios... que entregaron a Jesús a su sayones.",
    "EjemploPedagogico": "El que odia la idea nueva porque rompe su viejo dogma, está volviendo a clavar los clavos en la cruz del Maestro.",
    "ConexionDoctrinal": ["Prejuicios Doctrinales", "Reincidencia Histórica"],
    "NodosSimapticos": []
  },
  "4777: Julio 3 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Salud y Resolución. El espíritu debe estar resuelto a ayudar a su materia para que esta no se perjudique; la salud es un equilibrio entre ambos planos.",
    "CitaInelutable": "Su espíritu no está resuelto del todo a ayudar a la materia; mas, pronto tendrá cambio.",
    "EjemploPedagogico": "Si el conductor no quiere manejar, el coche termina chocando o averiado; el espíritu debe tomar las riendas del cuerpo con decisión.",
    "ConexionDoctrinal": ["Justicia Fisiológica", "Relación Espíritu-Materia"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Pío X (Evocación en Vida)": {
    "Definición": "Acto mediúmnico realizado por Joaquín Trincado en 1911 donde se atrajo el espíritu del entonces Papa reinante para confrontar su autoridad eclesiástica con la Justicia Universal. Este hecho sienta el precedente doctrinal de que el espíritu es soberano sobre cualquier cargo material y que los jerarcas religiosos deben responder por sus actos ante el tribunal del Dios de Amor.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesión del 23 de Junio de 1911).",
    "Conexiones": ["Justicia Universal", "Desdoblamiento", "Soberanía del Espíritu"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  },
  "Infierno Eterno (Negación)": {
    "Definición": "Postura fundamental del espiritismo trincadista que rechaza la existencia de un castigo sin fin. Se argumenta que la idea de un infierno perpetuo es una contradicción lógica con la omnipotencia y el amor de Eloí, quien como Padre no puede maldecir a sus hijos eternamente. El sufrimiento post-mórtem se define como un estado transitorio de purificación y remordimiento consciente.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Crítica al 'Ite, maledicte', Junio de 1911).",
    "Conexiones": ["Justicia Universal", "Amor de Eloí", "Progreso"],
    "Obras": ["Filosofía Enciclopédica Universal", "El Espiritismo Estudiado"]
  },
  "Conciencia Muerta": {
    "Definición": "Estado de letargo o anulación de la voluntad superior del espíritu en un ser encarnado, debido al predominio absoluto de las pasiones materiales o el fanatismo dogmático. Un ser con conciencia muerta vive mecánicamente, convirtiendo su cuerpo en un sepulcro para la chispa divina que no logra manifestar su luz racional.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Llamado a la resurrección, Junio de 1911).",
    "Conexiones": ["Juicio de la Razón", "Espíritu", "Materia"],
    "Obras": ["Filosofía Enciclopédica Universal", "Conócete a ti mismo"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 8 nodos PURA CALIDAD 1:1 de Filosofía Enciclopédica Tomo 1 (Batch 9) y 3 términos sinápticos.');
