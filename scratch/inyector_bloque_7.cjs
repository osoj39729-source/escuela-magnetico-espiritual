const fs = require('fs');
const path = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "2559: Párrafo III: PREMEDITACION INAUDITA": {
    "PilotoDeCoherencia": "La prevaricación de los sucesores de los apóstoles fue inmediata y dolorosa. Ignoraron el mandato de 'adorar en espíritu' para dejarse arrastrar por la concupiscencia y el poder material, estableciendo falsos 'derechos divinos' sobre el templo que Jesús vino a liberar.",
    "IdeasSecundarias": [
      "Los profetas israelitas fallaron en corregir la ley, y Juan y Jesús vinieron a aclarar los mandamientos.",
      "La influencia de la carne mató la pureza de la doctrina del Dios Amor en manos del clero naciente.",
      "Los sacerdotes se apropiaron del acceso a Dios para asegurar sus privilegios."
    ],
    "CitasIneludibles": [
      "Fatal es la influencia de la carne y la concupiscencia para la ley del Dios Amor.",
      "los sacerdotes no cedían sus pretendidos 'derechos divinos' para entender en las cosas de Dios y de su templo"
    ]
  },
  "2592: Párrafo IV: LA FALACIAYLA FUERZA BRUTAS JUNTAS": {
    "PilotoDeCoherencia": "La Iglesia Católica se fundó como un estado político basado en la astucia y la apropiación de ritos ajenos. El papado (Manuel I) utilizó una teología irracional para ganar el favor de emperadores, a sabiendas de que el concepto de 'Cristo' era un mito y no una persona real.",
    "IdeasSecundarias": [
      "La teología católica es una mezcla de ritos paganos y leyes mosaicas convertidas en dogma irracional.",
      "El nombre de Jesús fue usado por desprecio e irrisión por sus enemigos antes de ser convertido en estandarte del papado.",
      "Los sacramentos fueron robados de otras religiones para crear una apariencia de autoridad."
    ],
    "CitasIneludibles": [
      "monopolizar todos los cultos de las otras religiones de cuyas doctrinas forman una teología metafísica irracional y dogmática",
      "Manuel I, sabía que el cristo no era una persona, y sí un mito"
    ]
  },
  "2675: Párrafo V: LA IGLESIA CATOLICA IMPONE LA IGNORANCIA": {
    "PilotoDeCoherencia": "El papado se elevó como 'Rey de Reyes' explotando la ignorancia de los pueblos sobre las leyes naturales. Al conceder bendiciones divinas a guerras de usurpación, convirtió a los soberanos en esclavos ciegos del Vaticano, sometiendo a Europa bajo un yugo teocrático absoluto.",
    "IdeasSecundarias": [
      "La bendición papal se usó como arma política para derrocar reyes que no se sometían al dogma.",
      "Carlomagno fue uno de los tantos peones usados en la expansión del poder pontificio.",
      "El miedo y la ignorancia fueron los cimientos del imperio papal sobre los Césares."
    ],
    "CitasIneludibles": [
      "se convertían en esclavos ciegos del sumo pontífice y se obligaban a pagar tributo al representante de Jesucristo... fue el 'emperador de emperadores y rey de reyes'.",
      "Tuvo razón Manuel I, cuando dijo 'después de esto, yo me sé lo que me haré'."
    ]
  },
  "2735: Párrafo VI: LA ESPAÑA PAGANAYLA FOBIA DE LOS PAPAS": {
    "PilotoDeCoherencia": "Hildebrando (Gregorio VII) instauró la teocracia total imponiendo el celibato obligatorio para oponerse a la ley natural de procreación. Su meta era la dominación universal, tratando a reyes y pueblos como esclavos sin derechos, elevando al clero por encima de toda ley humana y natural.",
    "IdeasSecundarias": [
      "El celibato separó al clero del sentimiento humano para convertirlo en una herramienta de control papal.",
      "Para Gregorio VII, los reyes eran meros juguetes y el pueblo un buey de trabajo sin derechos.",
      "La iglesia arrebató al pueblo el derecho de elección para consolidar su tiranía absoluta."
    ],
    "CitasIneludibles": [
      "Hildebrando ha encontrado la iglesia católica la personificación de su teocracia... sellaría su obra, oponiéndose a la naturaleza... consagrando el celibato.",
      "Los reyes eran para este hombre, lo que los soldaditos de plomo para los niños"
    ]
  },
  "2890: Párrafo VII: LA CONCUPISCENCIA ESTA EN AUGE": {
    "PilotoDeCoherencia": "Con el celibato y el poder absoluto, la iglesia se hundió en el vicio y el crimen impune. Los papas utilizaron el terror, las hogueras y el envenenamiento para sostener su 'divina autoridad', acallando cualquier protesta mediante la calumnia y el asesinato sistemático.",
    "IdeasSecundarias": [
      "El desenfreno y la pasión dominaron a la grey ciega bajo mandatos hipócritas.",
      "El sistema papal se alimentó del robo del honor y la vida de quienes osaban cuestionar su inmundicia.",
      "El terror fue la muralla que protegió los actos punibles de los sucesores de Manuel I."
    ],
    "CitasIneludibles": [
      "la grey que se ha creado es ciega y nada verá aunque haya papas que deshonren a sus propias hijas y ahorquen, quemen, apuñalen y envenenen",
      "todo debía rendir tributo a su supremacía; a su divina autoridad. Si era necesario calumniar, se calumniaría"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de caps. 43-48 actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Teocracia_Papal": {
    "palabras_clave": ["papa", "manuel I", "hildebrando", "gregorio VII", "rey de reyes", "astucia"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#2592: Párrafo IV: LA FALACIAYLA FUERZA BRUTAS JUNTAS", "buscando-a-dios-joaquin-trincado_esencia.json#2735: Párrafo VI: LA ESPAÑA PAGANAYLA FOBIA DE LOS PAPAS"],
    "contexto_real": "Sistema político de dominación universal que utiliza la falacia religiosa para someter a gobiernos y pueblos bajo un poder absoluto e infalible."
  },
  "Celibato_Politico": {
    "palabras_clave": ["celibato", "procreación", "ley natural", "clero", "hildebrando"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#2735: Párrafo VI: LA ESPAÑA PAGANAYLA FOBIA DE LOS PAPAS"],
    "contexto_real": "Mandato anti-natural impuesto por el papado para deshumanizar al clero y convertirlo en un ejército político libre de lazos familiares."
  },
  "Inquisicion_y_Crimen": {
    "palabras_clave": ["hogueras", "envenenamiento", "terror", "concupiscencia", "calumnia"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#2890: Párrafo VII: LA CONCUPISCENCIA ESTA EN AUGE"],
    "contexto_real": "Mecanismos de terror utilizados por la teocracia para sostener su dominio mediante el asesinato y la difamación de los espíritus libres."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado.');
