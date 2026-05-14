const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "3130: ARTÍCULO 1º al 4º: Fraternidad Unida y Jerarquía de Maestros": {
    "PilotoDeCoherencia": "Toda la humanidad forma una sola sociedad fraternal sin extranjeros. Se anulan todos los títulos de dignidad previos, estableciendo el de 'Hermano' como único tratamiento universal. La única jerarquía reconocida es la del Maestro, dividida en grados funcionales (Nato, Regional, Intendente, Factor, Docente) basados en el progreso y la responsabilidad social.",
    "IdeasSecundarias": [
      "El título de hermano se aplica incluso en la relación paterno-filial para reflejar la verdad del espíritu.",
      "Nadie posee prerrogativas fuera del deber del trabajo y el derecho al usufructo igualitario.",
      "La disciplina en la Comuna se fundamenta en el respeto al saber y a la función del Maestro en su rama."
    ],
    "CitasIneludibles": [
      "Todos los seres del mundo Tierra... son una sola sociedad fraternal comunal.",
      "Nadie en todo el mundo es extranjero en ninguna parte",
      "Es sólo el título de hermano el tratamiento en todo el mundo",
      "Quedan sin efecto y son nulos todo tratamiento de dignidades"
    ]
  },
  "3321: ART. 36º al 37º: Idioma Español como Lengua Universal": {
    "PilotoDeCoherencia": "Se impone el idioma español (unificado por Cervantes) como la lengua oficial de la Comuna para eliminar la causa principal del extranjerismo y la división. La Tierra se une así al concierto de mundos de luz que ya poseen un solo idioma para las comunicaciones materiales y espirituales.",
    "IdeasSecundarias": [
      "Los antiguos idiomas se conservarán en un diccionario histórico como testimonio de la etapa de división.",
      "La unidad lingüística facilita la comunicación fluida entre hombres y espíritus en todo el globo.",
      "El español fue elegido por su riqueza, facilidad y por ser el vehículo de la propaganda del Juicio Final."
    ],
    "CitasIneludibles": [
      "uno solo puede ser el idioma... el idioma español unificado por el misionero Cervantes, es el más fácil, rico y comprensible",
      "la Tierra... no puede ser la nota discordante de que haya... unos que entienden y otros no"
    ]
  },
  "3513: ARTÍCULO 1º al 4º: El Maestro Nato y el Sistema de Plebiscito": {
    "PilotoDeCoherencia": "El Maestro Nato es designado por el Consejo de Sión y el Espíritu de Verdad, representando la voz de Eloí; su cargo es de derecho y no electivo. Los demás miembros de los Consejos son elegidos por mérito y ratificados por el pueblo en plebiscito público, asegurando que la madurez (50-60 años) y la sabiduría guíen la administración social.",
    "IdeasSecundarias": [
      "La ignorancia del pueblo permitió históricamente la supremacía de tiranos y sacerdotes.",
      "El plebiscito otorga 60 días de conocimiento público y 30 para presentar objeciones por escrito.",
      "El Consejo Supremo representa todas las ramas del saber humano mediante asesores elegidos por las regiones."
    ],
    "CitasIneludibles": [
      "el Maestro Nato viene designado por el Espíritu de Verdad, de acuerdo con los designios del Consejo de Sión",
      "No puede ser electo, ni dispuesto por el pueblo. Su voz es la del Consejo del Padre",
      "Los Asesores... representarán todas las ramas del saber humano... aprobados en plebiscito."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia del CAU Tomo II (Bloque 10) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Hermano_Titulo_Unico": {
    "palabras_clave": ["hermano", "trato", "igualdad", "títulos", "dignidades", "fraternidad"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#3130: ARTÍCULO 1º al 4º: Fraternidad Unida y Jerarquía de Maestros"],
    "contexto_real": "Eliminación de toda barrera social y jerárquica artificial mediante el reconocimiento de la filiación espiritual común."
  },
  "Idioma_Español_Universal": {
    "palabras_clave": ["español", "cervantes", "idioma único", "unificación", "comunicación", "concierto universal"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#3321: ART. 36º al 37º: Idioma Español como Lengua Universal"],
    "contexto_real": "Herramienta de unidad lingüística necesaria para la paz mundial y la integración de la Tierra en la comunidad galáctica."
  },
  "Maestro_Nato_y_Sion": {
    "palabras_clave": ["maestro nato", "sión", "designación", "espíritu de verdad", "autoridad", "sirio"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#3513: ARTÍCULO 1º al 4º: El Maestro Nato y el Sistema de Plebiscito"],
    "contexto_real": "Liderazgo espiritual de origen cósmico que guía a la humanidad en la aplicación de las leyes de la Comuna."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para el Tomo II.');
