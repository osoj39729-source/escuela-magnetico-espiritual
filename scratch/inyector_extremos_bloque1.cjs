const fs = require('fs');
const path = 'F:/trincado/public/data/contents/los-extremos-se-tocan_esencia.json';

const esencia = {
  "1 al 252: Premisa: El Juicio al Dios-Oro": {
    "PilotoDeCoherencia": "Declara la derrota del 'Dios-Oro' (el capitalismo materialista) y de las religiones que impidieron la difusión de la verdad. Define la crisis de Wall Street de 1929 como un 'aviso amoroso' de la justicia suprema para que la humanidad se espiritualice. Establece que en la Comuna, el único dinero será el hombre y su trabajo.",
    "IdeasSecundarias": [
      "El dinero no alcanza porque ya no sirve ni reina ante la Ley de Justicia.",
      "La guerra mundial es la liquidación forzosa de una sociedad de malversores y parásitos.",
      "La Escuela Magnético-Espiritual triunfa 'con dinero y sin dinero' porque su fuerza es la idea razonada."
    ],
    "CitasIneludibles": [
      "BAJARÁN HASTA NO VALER NADA PORQUE DESAPARECERÁN.",
      "EL ÚNICO DINERO SERÁ EL HOMBRE.",
      "CON DINERO Y SIN DINERO HARÉ LA OBRA QUE TRAIGO."
    ]
  },
  "253 al 580: El Cortocircuito Universal y el C.G.S.": {
    "PilotoDeCoherencia": "Explica la dinámica de los mundos mediante la polaridad eléctrica. El Espíritu (Positivo) y la Materia (Negativo) deben ser equilibrados por el Alma (Resistencia). Define el 'cortocircuito' como el encuentro brusco de corrientes por falta de justicia, produciendo la guerra. Introduce el C.G.S. (Centímetro, Gramo, Segundo) como el artículo de fe de la matemática inacabable.",
    "IdeasSecundarias": [
      "La paz es el resultado de regular bien la resistencia intermedia del alma.",
      "Solo existe una substancia: el Éter, que la química y la física comprueban.",
      "El Juicio Final es una liquidación matemática donde se resta lo heterogéneo para dividir lo homogéneo."
    ],
    "CitasIneludibles": [
      "los extremos se tocaron... produciendo el terrible corto circuito.",
      "es la realidad C. G. S. por el que el hombre hizo la matemática.",
      "Solo una substancia existe."
    ]
  },
  "581 al 720: Capítulo I: La Ley Única del Amor": {
    "PilotoDeCoherencia": "Define el Amor como la ley madre, única y fatal (por necesidad de justicia) que rige el universo. Desmiente la caridad como un baldón de la humanidad, sustituyéndola por la justicia y el derecho al usufructo. Proclama la abolición de fronteras, castas y clases bajo un solo código de amor.",
    "IdeasSecundarias": [
      "El matriarcado es el compendio vivo de la ley de amor y la función creadora.",
      "El amor carnal es un deber sagrado para la continuación de la creación eterna.",
      "La caridad denigra al hombre; la beneficencia es justicia comunal obligatoria."
    ],
    "CitasIneludibles": [
      "El Amor, es la Ley única que rige el universo.",
      "la caridad, es injusticia.",
      "no ser extranjero nadie, en ninguna parte."
    ]
  }
};

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Bloque 1 de Los Extremos se Tocan inyectado.');
