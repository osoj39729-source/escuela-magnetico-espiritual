const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "1640: PREFACIO y 1700: Ley de Unión de los Seres": {
    "PilotoDeCoherencia": "La familia comunal se fundamenta exclusivamente en la afinidad espiritual, eliminando la esclavitud de los matrimonios por conveniencia. Se establece una educación sexual y parental profunda basada en el respeto y el amor, distinguiendo claramente entre libertad y libertinaje. En el Séptimo Día, muchas uniones servirán para saldar deudas de vidas pasadas (justicia) antes de alcanzar la afinidad plena.",
    "IdeasSecundarias": [
      "La consanguinidad es una ficción que no sobrevive a la cuarta generación; la verdadera familia es el espíritu.",
      "La mujer tiene total libertad para declarar su amor y elegir a su afín sin represalias legales.",
      "Las madres son las encargadas de transmitir a sus hijas los secretos de la maternidad y la vida conyugal."
    ],
    "CitasIneludibles": [
      "sólo el amor por la afinidad, constituye la familia en todos los mundos de luz y progreso",
      "edúquese ampliamente a los seres de ambos sexos... en las obligaciones de los Padres",
      "enseñar lo que es libertad y libertinaje, y cuándo el amor es por afinidad"
    ]
  },
  "1810: ARTÍCULO 1º al 5º: Estatus de los Hijos y la Mujer en la Unión": {
    "PilotoDeCoherencia": "Los hijos son considerados 'Hijos de la Comuna', garantizando su amparo, educación y defensa universal. Se elimina la categoría de 'hijo ilegítimo', reconociendo la legitimidad de todo ser que nace. La mujer, por unidad de hogar, declina su representación legal en el hombre para actos mercantiles, reconociendo la solidaridad total de la pareja.",
    "IdeasSecundarias": [
      "Los desposados se heredan mutuamente mientras se completa el proceso de comunización.",
      "La autoridad del Maestro Nato vela por la protección de todos los descendientes de la Comuna.",
      "Las uniones son selladas por el Espíritu de Verdad como pactos sagrados ante la creación."
    ],
    "CitasIneludibles": [
      "hijos... son y están en todo momento bajo el patriarcado y autoridad del Maestro Nato, como hijos de la Comuna",
      "ningún ser entra al mundo por puerta falsa... los hijos nacidos de estas uniones... son y se reconocen legítimos"
    ]
  },
  "1840: Prefacio y 2049: Ley de Higiene y Cuerpos Facultativos": {
    "PilotoDeCoherencia": "En la Comuna, la medicina tradicional desaparece al erradicarse las enfermedades mediante la higiene del espíritu y la materia. Se establece el Consejo de Higiene basado en la Fisiocracia (poder de la naturaleza), ordenando la eliminación perentoria del consumo de carnes y alcohol para purificar el organismo humano de esencias.",
    "IdeasSecundarias": [
      "La vida humana reside en el espíritu; el alma solo provee la vida animal común.",
      "Solo individuos con verdadera vocación y amor podrán desempeñar cargos en el Consejo de Higiene.",
      "Las mediumnidades se integran a la ciencia médica para diagnosticar las causas espirituales de los males."
    ],
    "CitasIneludibles": [
      "como médicos desaparecen, porque han de desaparecer las enfermedades, por razón de la higiene de la materia y más especialmente por la higiene del espíritu",
      "eliminar las carnes y los alcoholes... en tanto se desarrollan la multitud de nuevas plantas",
      "componen el Consejo de Higiene... las mediumnidades... comprendidas en la fisiocracia"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia del CAU Tomo II (Bloque 8) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Afinidad_Espiritual_Familiar": {
    "palabras_clave": ["afinidad", "unión de los seres", "hogar", "consanguinidad", "familia espiritual", "matrimonio"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#1640: PREFACIO y 1700: Ley de Unión de los Seres"],
    "contexto_real": "Vínculo sagrado basado en la atracción de espíritus afines que constituye la base de la sociedad comunal."
  },
  "Hijos_de_la_Comuna": {
    "palabras_clave": ["hijos", "legitimidad", "amparo", "maestro nato", "puerta falsa", "derechos del niño"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#1810: ARTÍCULO 1º al 5º: Estatus de los Hijos y la Mujer en la Unión"],
    "contexto_real": "Reconocimiento de todos los niños como miembros plenos de la familia universal, protegidos por el Estado Comunal desde su nacimiento."
  },
  "Fisiocracia_y_Higiene_Espiritual": {
    "palabras_clave": ["higiene", "fisiocracia", "carnes", "alcohol", "salud", "enfermedad", "espíritu"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#1840: Prefacio y 2049: Ley de Higiene y Cuerpos Facultativos"],
    "contexto_real": "Ciencia de la salud integral que previene el mal mediante la pureza de pensamiento y la dieta vegetariana."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para el Tomo II.');
