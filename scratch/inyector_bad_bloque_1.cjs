const fs = require('fs');
const path = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "3806: Párrafo III: Autocracia de la Impiedad Clerical": {
    "PilotoDeCoherencia": "Denuncia de la Iglesia Católica como un sistema autocrático que anula el pensamiento libre y la dignidad humana. Define a la institución como el 'monstruoso verdugo de la humanidad' que actúa en nombre de un Dios sediento de sangre para justificar crímenes, calumnias y persecuciones bajo el pretexto del celo apostólico.",
    "IdeasSecundarias": [
      "La autoridad eclesiástica somete incluso a jefes de estado, prohibiendo cualquier acto sin su permiso.",
      "Se conceden indulgencias por delitos de lesa humanidad si se realizan en favor de la religión.",
      "La impiedad de figuras como Pío IX es vista como una negación afirmativa de la razón y la deidad."
    ],
    "CitasIneludibles": [
      "nadie que no sea clérigo... no puede pensar, hablar ni rascarse la oreja sin permiso de la autoridad eclesiástica",
      "su Dios que nunca se ve harto de sangre... ministros llamados de Dios y de derecho divino",
      "monstruoso verdugo de la humanidad."
    ]
  },
  "3917: Párrafo IV y 4210: Párrafo V: La Sombra de Rodrigo Borgia (Alejandro VI)": {
    "PilotoDeCoherencia": "Análisis histórico de Rodrigo Borgia como epítome de la corrupción papal. Trincado relata el engaño a Doña Elvira de Valladolid para usurpar su fortuna y ocultar su condición clerical, demostrando que el 'Dios de los católicos' es un monstruo que ampara la lascivia y el asesinato por ambición material.",
    "IdeasSecundarias": [
      "La Iglesia ha desfigurado la historia para impedir que la razón encuentre la luz del Dios Amor.",
      "Borgia utilizó el veneno y el asesinato (como el del cura que bendijo su unión) para proteger su ascenso al poder.",
      "El descubrimiento del asiento del Dios Amor es el castigo histórico para la iglesia de los crímenes."
    ],
    "CitasIneludibles": [
      "Rodrigo Borgia... ocultó su estado eclesiástico... heredando, Borgia... una cuantiosa fortuna.",
      "ministros de ese Dios monstruo de los católicos... dioses irracionales de todas las religiones que formaron la alianza."
    ]
  },
  "4448: Párrafo VI y 4714: Párrafo VII: Bacanales y Simonía en el Vaticano": {
    "PilotoDeCoherencia": "Descripción de la decadencia moral de la corte papal, donde la honra familiar se canjeaba por birretes cardenalicios. Utiliza el ejemplo de Julia Farnesio y la corrupción de los prelados para ilustrar que el sistema religioso es la antítesis del amor divino, operando mediante bacanales, intrigas y el deshonor de los propios hermanos.",
    "IdeasSecundarias": [
      "La sumisión de los individuos a los caprichos de la supremacía eclesiástica humilla el corazón humano.",
      "El Papa Alejandro VI celebraba bacanales mientras sus ministros vendían la honra por poder político.",
      "La historia de los horrores papales sirve como jalón para orientarse hacia la verdadera espiritualidad."
    ],
    "CitasIneludibles": [
      "mismo hermano y prelado por añadidura, el que compre el birrete de cardenal con la honra de su hermana",
      "Os lo agradecemos con toda el alma, hijo predilecto de la iglesia."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Buscando a Dios (Bloque 1) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Autocracia_Catolica_Inmoral": {
    "palabras_clave": ["iglesia", "autocracia", "verdugo", "impiedad", "clero", "pío ix"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#3806: Párrafo III: Autocracia de la Impiedad Clerical"],
    "contexto_real": "Sistema de opresión mental y física que utiliza la figura de Dios para perpetuar el poder de una casta sacerdotal."
  },
  "Rodrigo_Borgia_Alejandro_VI": {
    "palabras_clave": ["borgia", "alejandro vi", "lascivia", "papa", "veneno", "doña elvira"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#3917: Párrafo IV y 4210: Párrafo V: La Sombra de Rodrigo Borgia (Alejandro VI)"],
    "contexto_real": "Figura histórica que representa el grado máximo de corrupción y desvío moral dentro de la institución papal."
  },
  "Bacanales_Vaticanas_Historicas": {
    "palabras_clave": ["bacanal", "simonía", "julia farnesio", "honra", "vaticano", "crimen"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#4448: Párrafo VI y 4714: Párrafo VII: Bacanales y Simonía en el Vaticano"],
    "contexto_real": "Relatos de la decadencia interna de la Iglesia que sirven para desmitificar su pretendida santidad divina."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para Buscando a Dios.');
