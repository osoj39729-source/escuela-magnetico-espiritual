const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "1000: Capítulo VII: ECONOMÍA ORGÁNICA": {
    "PilotoDeCoherencia": "Aprovechamiento armónico de organismos y recursos para el bien común. La ley divina utiliza el esfuerzo colectivo de las sociedades (incluso las explotadoras) para desarrollar progresos tecnológicos (electricidad, transporte) que finalmente pertenecerán a la Comuna. El secreto del Creador es implantar el progreso primero para luego colectivizar su disfrute mediante la sabiduría social.",
    "IdeasSecundarias": [
      "La colectividad es la única forma de alcanzar grandes hitos de progreso material.",
      "Los tres reinos de la naturaleza deben subir en belleza y armonía mediante el esfuerzo humano común.",
      "Nada vence a la ley divina, que aprovecha las herramientas del presente para construir el futuro comunal."
    ],
    "CitasIneludibles": [
      "el producto de ese progreso hecho con el común esfuerzo, lo disfrute la comunidad; y con su sabiduría, quitará los estorbos que haya.",
      "la colectividad es más beneficiosa... de su esfuerzo común han de aprovechar los otros organismos de los tres reinos"
    ]
  },
  "1030: Capítulo VIII: ECONOMÍA RURAL Y AGRÍCOLA": {
    "PilotoDeCoherencia": "La agricultura es la base única e inamovible del bienestar humano. Se debe aplicar toda la ciencia y el progreso técnico primero a la tierra, antes que al lujo personal, para que la naturaleza devuelva el sacrificio centuplicado en pan y bienestar. El descuido de la tierra es la causa del descontento y la carestía mundial.",
    "IdeasSecundarias": [
      "La tierra es agradecida y responde con abundancia al laboreo científico y al abono.",
      "Es un error priorizar el ornato de 'magnates y caballos' mientras el hombre cava como bestia.",
      "La economía rural depende de la unidad de las economías orgánica y científica."
    ],
    "CitasIneludibles": [
      "la agricultura es la única base posible del bienestar... Si se descuida la agricultura, pues la tierra nos descuida a nosotros",
      "darse satisfacción el hombre y aplicar el adelanto a la tierra, éste debe ser primero"
    ]
  },
  "1076: Capítulo IX: ECONOMÍA PÚBLICA": {
    "PilotoDeCoherencia": "Administración de ciudades y naciones que regula el consumo y facilita la producción para cubrir necesidades sin miseria. Esta economía solo es posible dentro del Régimen Comunal sin parcelas; fuera de él, bajo leyes egoístas, cualquier intento de economía pública está condenado al fracaso absoluto.",
    "IdeasSecundarias": [
      "Los gobiernos actuales han ignorado la economía pública, sumiendo al mundo en la miseria.",
      "La economía pública es la órbita necesaria para el equilibrio de la economía doméstica.",
      "Solo bajo la Ley de Amor se puede obtener el fruto de una administración justa."
    ],
    "CitasIneludibles": [
      "la economía Pública es sólo del Régimen Comunal... fuera de la Comuna sin parcelas, con la Ley de Amor, intente hacer economía Pública, porque fracasará",
      "regular el consumo y su costo, para que pueda la ciudad y la nación cubrir sus necesidades sin miseria."
    ]
  },
  "1104: Capítulo X: ECONOMÍA INDUSTRIAL": {
    "PilotoDeCoherencia": "Organización de la producción para maximizar el resultado con el mínimo gasto de recursos, aplicando química, física y metafísica. El espíritu, como maestro de la creación, demuestra la belleza de los mundos a través de la industria, siendo capaz de dominar la materia desde su conocimiento espiritual profundo.",
    "IdeasSecundarias": [
      "La economía industrial es el campo de aplicación de las economías moral y científica.",
      "El espíritu es sabio por procedencia y conoce todo, excepto el ser del ser increado.",
      "El hombre trino del séptimo día debe presentar obras que demuestren su maestría sobre la materia."
    ],
    "CitasIneludibles": [
      "La economía industrial consiste, en la organización de todos los elementos... gastando menos y produciendo más.",
      "el hombre ha de demostrar la belleza de los mundos... entrará con desenvoltura en la más profunda metafísica del espíritu"
    ]
  },
  "1136: Capítulo XI: ECONOMÍA POLÍTICA (HOY GEOGRÁFICA)": {
    "PilotoDeCoherencia": "Conocimiento de las riquezas regionales y continentales para el intercambio universal. Sustituye a la política tradicional por una gestión geográfica que prepara la unión de las razas mediante la emigración, asegurando que ningún ser humano sea extranjero en ningún punto de la Tierra.",
    "IdeasSecundarias": [
      "El espíritu inspira el intercambio comercial para evitar el estancamiento y participar del progreso.",
      "La ley de emigración permite que el espíritu deje depósitos de sabiduría en todas partes del globo.",
      "La economía geográfica es la base para la formación de una sola raza humana unificada."
    ],
    "CitasIneludibles": [
      "La economía política pronto cesa... se llamará geográfica... consiste, en el conocimiento de las riquezas o producciones de las regiones",
      "el espíritu, hecho hombre, deje depósitos en todas partes y no sea extranjero en ningún punto."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia del CAU Tomo II (Bloque 5) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Soberania_Agricola_Comunal": {
    "palabras_clave": ["agricultura", "tierra", "base del bienestar", "laboreo", "abono", "pan"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#1030: Capítulo VIII: ECONOMÍA RURAL Y AGRÍCOLA"],
    "contexto_real": "Principio que sitúa a la producción de alimentos como la prioridad absoluta de la ciencia y el gobierno para garantizar la vida."
  },
  "Metafisica_Industrial": {
    "palabras_clave": ["industria", "espíritu", "metafísica", "creación", "belleza", "química", "física"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#1104: Capítulo X: ECONOMÍA INDUSTRIAL"],
    "contexto_real": "Aplicación de la sabiduría espiritual a la transformación de la materia para embellecer el mundo y servir a la humanidad."
  },
  "Economia_Geografica_Universal": {
    "palabras_clave": ["geografía", "intercambio", "regiones", "emigración", "sin fronteras", "extranjero"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#1136: Capítulo XI: ECONOMÍA POLÍTICA (HOY GEOGRÁFICA)"],
    "contexto_real": "Sistema de distribución de recursos basado en la fraternidad universal y la libre circulación de seres y bienes por todo el planeta."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para el Tomo II.');
