const fs = require('fs');
const path = 'F:/trincado/public/data/contents/los-extremos-se-tocan_esencia.json';
let esencia = {};

Object.assign(esencia, {
  "7: Premisa y el Escalpelo de la Verdad": {
    "PilotoDeCoherencia": "Presenta la obra como un foco de luz potente y un escalpelo quirúrgico que busca curar a la humanidad mediante la verdad, sin importar los lamentos de los sectores dogmáticos que intentaron impedir su publicación. Afirma que las sentencias y profecías contenidas se cumplen inexorablemente a pesar de los complots del 'Rey-Dios-Oro'.",
    "IdeasSecundarias": [
      "La obra esperó 14 años en el archivo antes de ver la luz, tiempo en el cual se validaron sus premisas.",
      "Los 'diosezuelos' y el poder económico intentaron silenciar el libro sin éxito.",
      "Es un juicio inapelable que no ataca a individuos, sino a sistemas de ideas erróneos."
    ],
    "CitasIneludibles": [
      "Foco de luz demasiado fuerte... y escalpelo sin misericordia de cirujano",
      "los diosezuelos... se complotaron y exigieron de su Rey-Dios-Oro, negar los medios",
      "las profecías y sentencias se habían de cumplir igual"
    ]
  },
  "581 y 721: El Amor y las Cuatro Leyes Fatales": {
    "PilotoDeCoherencia": "Define el Amor como la Ley Única y Madre que rige el universo. De ella se derivan cuatro 'Leyes Fatales' (necesarias por justicia): Afinidad, Justicia, Igualdad y Compensación. Estas leyes aseguran la armonía individual y, por extensión, la armonía universal cuando la mayoría de los seres logran su equilibrio interno.",
    "IdeasSecundarias": [
      "El Amor es la fuerza omnipotente que el espíritu utiliza para dominar la materia.",
      "Las leyes fatales son de cumplimiento obligatorio para restaurar la justicia y la compensación de deudas.",
      "La armonía universal es imposible mientras el hombre no sienta amor y actúe por instintos egoístas."
    ],
    "CitasIneludibles": [
      "El Amor, es la Ley única que rige el universo; es la ley madre de todas las demás leyes",
      "Leyes Fatales: Afinidad, Justicia, Igualdad y Compensación",
      "mientras que en la conciencia, los hombres no sientan amor, cada hombre es un gallinero con un raposo dentro"
    ]
  },
  "244 y 1387: Jehová como Padre y la Doctrina del Sánscrito": {
    "PilotoDeCoherencia": "Aclara que 'Jehová' significa Padre y no el Dios castigador de las religiones. Vincula este concepto con la doctrina del Sánscrito (Ley de Shet), que hace 57 siglos sentó el axioma: 'Los hombres todos son hermanos'. Esta verdad fue velada en símbolos por la brutalidad de la raza humana de entonces, pero hoy se exige como mandato imperativo.",
    "IdeasSecundarias": [
      "Jesús justificó a Isaías al predicar que todos los hombres son hermanos e hijos del mismo Padre.",
      "El Sánscrito es la doctrina de la verdad diseñada para la regeneración de la familia humana.",
      "La humanidad pasó 44 millones de siglos en el reinado de las pasiones antes de recibir la luz de la razón."
    ],
    "CitasIneludibles": [
      "Jehová, que significa Padre, y no Dios",
      "Los hombres todos son hermanos",
      "El Sánscrito es la doctrina de la verdad y lo suficiente claro para la secular epopeya"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Los Extremos se Tocan (Bloque 1) creada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Leyes_Fatales": {
    "palabras_clave": ["afinidad", "justicia", "igualdad", "compensación", "necesidad", "fatalidad"],
    "nodos_sinapticos": ["los-extremos-se-tocan_esencia.json#581 y 721: El Amor y las Cuatro Leyes Fatales"],
    "contexto_real": "Mecanismos derivados de la Ley de Amor que operan automáticamente para equilibrar las acciones y deudas de los espíritus."
  },
  "Jehova_es_Padre": {
    "palabras_clave": ["Jehová", "Padre", "no es Dios", "Creador", "Hellí", "consubstancial"],
    "nodos_sinapticos": ["los-extremos-se-tocan_esencia.json#244 y 1387: Jehová como Padre y la Doctrina del Sánscrito"],
    "contexto_real": "Corrección terminológica para distinguir al Creador universal de las proyecciones antropomórficas y castigadoras de las religiones."
  },
  "Doctrina_del_Sanscrito": {
    "palabras_clave": ["Sánscrito", "Shet", "57 siglos", "hermandad", "Ley de Shet", "verdad velada"],
    "nodos_sinapticos": ["los-extremos-se-tocan_esencia.json#244 y 1387: Jehová como Padre y la Doctrina del Sánscrito"],
    "contexto_real": "Origen primordial de la doctrina de fraternidad universal, entregada a la humanidad para iniciar su proceso de regeneración."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para Los Extremos se Tocan.');
