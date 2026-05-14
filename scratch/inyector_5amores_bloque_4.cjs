const fs = require('fs');
const path = 'F:/trincado/public/data/contents/los-cinco-amores_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "3887: PÁRRAFO IV y 3940: PÁRRAFO V: Economía Moral y Científica": {
    "PilotoDeCoherencia": "La economía moral es el pensamiento y la idealización de la obra en la mente, mientras que la economía científica es la voluntad ejecutora que materializa la idea. Ambas deben trabajar al unísono para lograr el máximo resultado con el menor costo de fuerzas, emulando el proceso de creación del Espíritu a partir del Éter.",
    "IdeasSecundarias": [
      "La meditación previa a la acción evita errores, ahorra tiempo y dignifica el trabajo humano.",
      "La voluntad es el Espíritu individualizado que da peso y medida a la creación en el mundo físico.",
      "La exactitud de los componentes y la preparación mental son las bases del éxito en cualquier empresa."
    ],
    "CitasIneludibles": [
      "La economía moral consiste en disponer todo lo concerniente para que una obra, antes de entrar a su ejecución, sea ya la obra",
      "la economía moral es el pensamiento y la economía científica la voluntad",
      "La economía científica... es pesar matemáticamente todas las cosas"
    ]
  },
  "3988: PÁRRAFO VI y 4038: PÁRRAFO VII: Economía Doméstica y Orgánica": {
    "PilotoDeCoherencia": "La economía doméstica debe ser una regla ascendente que busque el bienestar sin caer en la miseria o la tacañería, que castigan al organismo. La economía orgánica es la unión de esfuerzos individuales en colectividades para el beneficio común, ley divina que empuja el progreso tecnológico y social incluso bajo sistemas imperfectos.",
    "IdeasSecundarias": [
      "La miseria disfrazada de parsimonia produce enfermedades y raquitismo en la infancia.",
      "La colectividad es siempre más beneficiosa que la individualidad aislada para el progreso universal.",
      "La ley divina impone la unión de los hombres (ferrocarriles, telégrafos) para forzar la evolución hacia la Comuna."
    ],
    "CitasIneludibles": [
      "lo que es parsimonia, es miseria y esto no es economía.",
      "La colectividad, siendo un organismo eficiente, ha de atraer a otras colectividades",
      "la unión de las colectividades en una universal colectividad se puede obtener con beneficio."
    ]
  },
  "3815: PÁRRAFO III: Economía Animal y Fisiología": {
    "PilotoDeCoherencia": "Ley que dicta el respeto a las funciones biológicas del hombre y la mujer. Define el trabajo como embellecedor de la naturaleza para el varón y la protección de la especie como misión de la mujer. Esclavizar o amargar a la mujer es un atentado contra la fisiología humana y la armonía del Edén familiar.",
    "IdeasSecundarias": [
      "El conocimiento de las funciones fisiológicas es parte esencial de la sabiduría del 'Conócete a ti mismo'.",
      "Invertir los factores biológicos es irracional y contrario a la economía animal de la especie.",
      "El respeto a la dignidad de la mujer es la base para evitar el 'infierno' en la convivencia familiar."
    ],
    "CitasIneludibles": [
      "Esclavizar a la madre de nuestros hijos... es atentatorio a la fisiología de la mujer",
      "conocer las funciones del organismo en todo su ser",
      "el hombre nace para el trabajo... la mujer viene... a ser la compañera amante"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Los Cinco Amores (Bloque 4) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Economia_Moral_y_Cientifica": {
    "palabras_clave": ["pensamiento", "voluntad", "idealización", "ejecución", "éter", "espíritu"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#3887: PÁRRAFO IV y 3940: PÁRRAFO V: Economía Moral y Científica"],
    "contexto_real": "Dualidad operativa del espíritu donde la meditación previa garantiza la eficiencia de la acción material."
  },
  "Economia_Animal_y_Fisiologia": {
    "palabras_clave": ["fisiología", "mujer", "trabajo", "arca santa", "especie", "respeto"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#3815: PÁRRAFO III: Economía Animal y Fisiología"],
    "contexto_real": "Respeto a las leyes biológicas y la dignidad de los sexos como fundamento de la salud y la armonía familiar."
  },
  "Economia_Domestica_vs_Miseria": {
    "palabras_clave": ["doméstica", "miseria", "parsimonia", "bienestar", "organismo", "raquitismo"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#3988: PÁRRAFO VI y 4038: PÁRRAFO VII: Economía Doméstica y Orgánica"],
    "contexto_real": "Diferenciación entre la administración racional de recursos y la privación que degrada la vida física."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para Los Cinco Amores.');
