const fs = require('fs');
const path = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "2921: Capítulo Décimo: CULTOS, RITOS Y DOGMAS DE LA RELIGION CATOLICA": {
    "PilotoDeCoherencia": "División Estructural.",
    "IdeasSecundarias": [],
    "CitasIneludibles": []
  },
  "2923: Párrafo I: EL BOATO PROVOCADOR": {
    "PilotoDeCoherencia": "La Iglesia Católica ha utilizado el lujo y la suntuosidad (boato) para fascinar y subyugar a las masas hambrientas, eclipsando incluso a los reyes. Jesús nunca se proclamó hijo único de Dios de forma sobrenatural, sino hijo del hombre en la carne e hijo de Dios en espíritu, al igual que toda la humanidad.",
    "IdeasSecundarias": [
      "El boato es una herramienta de poder político para anublar la razón de los súbditos.",
      "El sacramento de la eucaristía es una profanación que distorsiona el mensaje de libertad de Jesús.",
      "Manuel I creó el compuesto 'Jesucristo' como secreto político para someter al pueblo judío y universal."
    ],
    "CitasIneludibles": [
      "ritos creados para esos cultos... suntuosidad y boato, que dejan tamañito a los lujos asiáticos... para fascinar los ojos de su grey que lo pagaba y moría de hambre",
      "Jesús vino a predicar la libertad y no como hijo de Dios en la forma que lo hacen ellos, sino, que fue y es hijo de Dios como lo somos todos"
    ]
  },
  "3027: Párrafo II: VERDADES MATEMÁTICAS": {
    "PilotoDeCoherencia": "Los dogmas de la trinidad, la encarnación y la eucaristía son absurdos irracionales sostenidos solo por la ignorancia. Trincado restablece la verdad matemática sobre el nacimiento de Jesús (Año 3760 de Adán), despojando al evento de los misterios y errores del calendario católico.",
    "IdeasSecundarias": [
      "La iglesia acumuló absurdos para rodear el nacimiento de Jesús de una mística falsa.",
      "La lógica y la razón son las únicas guías para estudiar la historia sin el velo del dogma.",
      "El nacimiento de Jesús fue un hecho natural sujeto a las leyes generales de la vida."
    ],
    "CitasIneludibles": [
      "trinidad, encarnación... eucaristía; son tres grandes absurdos que no merecerían la discusión, si no fuera por la fuerza que la ignorancia les ha dado",
      "nació Jesús al dar las doce el 25 de Diciembre. El año se olvidaron de ponerlo; lo pondré yo... era el 3760 de Adán"
    ]
  },
  "3108: Párrafo III: EL CRIMEN DEL SACRAMENTO DE LA EUCARISTIA": {
    "PilotoDeCoherencia": "La eucaristía es una impiedad que presenta a un Dios monstruoso y antropófago. Jesús, conocedor del verdadero Dios de Amor, jamás habría instituido semejante sacrificio sangriento. Trincado rescata la figura de Jesús del despotismo de sus supuestos ministros.",
    "IdeasSecundarias": [
      "Es irracional pensar que un Dios omnipotente exija beber la sangre de su hijo.",
      "El dogma de la eucaristía es una quimera escrita por manos interesadas en el control fanático.",
      "El verdadero Dios de Amor es incompatible con el monstruo horrible del sacrificio católico."
    ],
    "CitasIneludibles": [
      "Dios no puede hacer absurdos, ni es antropófago para querer estar bebiendo en todos los momentos la sangre de su hijo... ese Dios es un monstruo horrible",
      "Jesús conocía bien el verdadero Dios, que es el Dios de Amor que busco... sostengo que Jesús no es inventor impío de su mismo sacrificio."
    ]
  },
  "3146: Párrafo IV: PIO IX INFALIBLEMENTE FALIBLE": {
    "PilotoDeCoherencia": "Las proclamaciones de Pío IX sobre la Infalibilidad Papal y la Inmaculada Concepción son actos de soberbia suprema contra las leyes de la naturaleza. Intentar ahogar el pensamiento racional en pleno siglo de las luces fue el último y desesperado intento de la teocracia por reinstaurar el terror.",
    "IdeasSecundarias": [
      "Ni siquiera los papas más absolutos del pasado se atrevieron a sacar a María de la ley de procreación natural.",
      "La declaración de infalibilidad fue la sentencia de muerte política e intelectual de la iglesia.",
      "Los gobiernos fallaron en su deber de anular estos decretos que insultan a la razón humana."
    ],
    "CitasIneludibles": [
      "estamos frente al coloso Pío IX, imponiéndose a Dios declarándose ¡infalible!... es el colmo del descoco, de la soberbia y de la autocracia.",
      "ni aún Hildebrando... se atrevió a sacar a María de la ley general de la naturaleza"
    ]
  },
  "3194: Párrafo V: TRISTE FIN DE LA RELIGIÓN CATÓLICA": {
    "PilotoDeCoherencia": "Trincado acusa formalmente a la Iglesia Católica de prevaricación, usurpación de derechos, lesa humanidad y lesa deidad. Condena a la institución a la destrucción y al olvido eterno por haber rebajado la dignidad humana y coartado la voluntad de Dios.",
    "IdeasSecundarias": [
      "La iglesia es culpable de fratricidio y de ultrajar la memoria de Jesús.",
      "Se debe salvar a la humanidad del yugo dogmático para que el hombre recupere su libertad espiritual.",
      "La condena incluye a todas las sectas de la 'alianza' que sirven a sacerdotes y dogmas ciegos."
    ],
    "CitasIneludibles": [
      "acuso de prevaricadora de las doctrinas escritas y predicadas... a la iglesia católica... la acuso asimismo del delito de usurpación de derechos civiles... de lesa humanidad... de lesa deidad.",
      "condeno a la iglesia católica bajo todas las formas y títulos... a la destrucción y al olvido, para toda la eternidad"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de caps. 49-54 actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Eucaristia_Impia": {
    "palabras_clave": ["eucaristía", "sangre", "antropófago", "sacrificio", "impiedad", "misterio"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#3108: Párrafo III: EL CRIMEN DEL SACRAMENTO DE LA EUCARISTIA"],
    "contexto_real": "Rito irracional y cruel que insulta la inteligencia humana y presenta al Creador como un ser sediento de sangre, ajeno al verdadero Amor Universal."
  },
  "Infalibilidad_Papal": {
    "palabras_clave": ["infalible", "pío IX", "soberbia", "inmaculada concepción", "autocracia"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#3146: Párrafo IV: PIO IX INFALIBLEMENTE FALIBLE"],
    "contexto_real": "Dogma de soberbia absoluta proclamado para intentar detener el progreso de la ciencia y la razón, declarando que un hombre es incapaz de error."
  },
  "Sentencia_a_las_Religiones": {
    "palabras_clave": ["condena", "lesa humanidad", "lesa deidad", "destrucción", "olvido", "prevaricación"],
    "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#3194: Párrafo V: TRISTE FIN DE LA RELIGIÓN CATÓLICA"],
    "contexto_real": "Juicio final de la razón que condena a las instituciones religiosas al olvido eterno por sus crímenes contra la libertad y la dignidad del espíritu humano."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado.');
