/**
 * INYECTOR: Cuestionario Espirita Racionalista
 * Propósito: Insertar los nodos sinapticos del Cuestionario en el diccionario_sinapsis.json
 * Estándar: Juez Amoroso por Sabiduría - Anti-Dogmático
 */

const fs = require('fs');
const path = require('path');

const DICCIONARIO_PATH = path.resolve('F:/trincado/public/data/diccionario_sinapsis.json');

const NUEVOS_NODOS = {
  "Espiritismo_vs_Religion": {
    "palabras_clave": [
      "espiritismo", "religión", "filosofía", "razón", "amalgama",
      "espiritualismo", "falacia", "luz y verdad"
    ],
    "nodos_sinapticos": [
      "cuestionario-espirita-racional_esencia.json#Espiritismo_vs_Religión",
      "alfaqui-vademecum_esencia.json#34: PREFACIO"
    ],
    "contexto_real": "El Espiritismo es Filosofía y Razón. Por ser razón, NO es religión. No puede amalgamarse con la falacia. El 'Espiritismo Luz y Verdad' es el único verdadero; los centros que mezclan espiritismo y religión son 'espiritualistas', no espiritistas."
  },
  "Identidad_EMECU": {
    "palabras_clave": [
      "emecu", "escuela magnético-espiritual", "comuna universal", "trincado fundador",
      "comunas comunales", "fraternidad", "ley una sustancia una"
    ],
    "nodos_sinapticos": [
      "cuestionario-espirita-racional_esencia.json#Identidad_Institucional",
      "filosofia-enciclopedica-universal-tomo-1_esencia.json#Prólogo e Introito: La Cátedra del Espíritu de Verdad"
    ],
    "contexto_real": "La Escuela Magnético-Espiritual de la Comuna Universal (EMECU) fue fundada por Trincado. Como hombre no se diferencia de nadie; como Maestro merece amor y respeto. Su fin es la implantación de la fraternidad universal. La mayor conquista: abolición total de la guerra."
  },
  "Muerte_es_Transformacion": {
    "palabras_clave": [
      "muerte", "transformación", "desencarnación", "espíritu libre",
      "no existe la muerte", "lamentos", "guías"
    ],
    "nodos_sinapticos": [
      "cuestionario-espirita-racional_esencia.json#Muerte_Transformacion",
      "alfaqui-vademecum_esencia.json#883: CAPITULO VI: LOS SERES SOBRE LA TIERRA"
    ],
    "contexto_real": "LA MUERTE NO EXISTE. Es una transformación donde el espíritu se libera de su materia para progresar. El espíritu que desencarna ve y oye a sus familiares pero no puede volver; por eso la EMECU pide evitar los lamentos, que lo hacen sufrir."
  },
  "Infierno_Negocio_Clerical": {
    "palabras_clave": [
      "infierno", "purgatorio", "limbo", "banco", "mina", "misas",
      "responsos", "ricos", "pobres", "cielo falso"
    ],
    "nodos_sinapticos": [
      "cuestionario-espirita-racional_esencia.json#Infierno_Purgatorio_Mentira"
    ],
    "contexto_real": "El infierno es el banco de los ministros religiosos; el purgatorio su 'mina de oro'. Solo 'salen' los ricos que pagan misas. El infierno real es la pobreza extrema. Lo que sí existe son los mundos primitivos que Jesús llamó 'las muchas moradas del Padre'."
  },
  "Jesus_Hombre_Historico": {
    "palabras_clave": [
      "jesús nazareth", "hombre no dios", "asesinado sacerdotes",
      "4 de diciembre", "escuela esénica", "no murió en la cruz",
      "no fundó iglesia", "galileo"
    ],
    "nodos_sinapticos": [
      "cuestionario-espirita-racional_esencia.json#Jesus_Hombre_Historia",
      "jes-s-hombre-y-no-dios_esencia.json",
      "buscando-a-dios-joaquin-trincado_esencia.json#9823: Jesús de Nazareth."
    ],
    "contexto_real": "Jesús: hombre en diferente grado de progreso, asesinado por Anás y Caifás. Nació el 4 de diciembre en Nazareth. No murió en la Cruz: murió en la Escuela Esénica 88 días después. No fundó ninguna iglesia; vino a destruirlas. El 24 de diciembre es fecha mítica de dioses-mito."
  },
  "Jose_Maria_Padres_Reales": {
    "palabras_clave": [
      "josé carpintero nazareth", "maría jericó", "patriarca 12 hijos",
      "madre de 7 hijos", "viudo débora", "esposa carnal", "sin virginidad"
    ],
    "nodos_sinapticos": [
      "cuestionario-espirita-racional_esencia.json#Jose_y_Maria_Padres_Naturales",
      "filosofia-enciclopedica-universal-tomo-2_esencia.json#Jose_el_Carpintero"
    ],
    "contexto_real": "José el Carpintero fue esposo carnal de María, padre de 12 hijos (5 de Débora + 7 de María). María no fue virgen: madre modelo de 7 hijos. Llamarla virgen la difama como adúltera. Los hijos de María: Jesús, Efraín, Elizabetta, José, Andrea, Ana y Jaime. Eva y María son la misma alma."
  },
  "Reencarnacion_Prueba_Empirica": {
    "palabras_clave": [
      "niños prodigio", "música innata", "piano a los 5 años",
      "sabio innato", "vivir morir volver nacer", "schopenhauer",
      "kardec", "progreso sin reencarnación imposible"
    ],
    "nodos_sinapticos": [
      "cuestionario-espirita-racional_esencia.json#Reencarnacion_Prueba",
      "alfaqui-vademecum_esencia.json#883: CAPITULO VI: LOS SERES SOBRE LA TIERRA"
    ],
    "contexto_real": "Sin reencarnación no existe el progreso. Prueba empírica: niños de 5 años que tocan piano sin aprendizaje posible. Schopenhauer: 'Vivir, morir y volver a nacer, tal es la vida'. Las habilidades innatas son el archivo del alma de vidas pasadas. Las religiones ocultaron esto porque destruye el negocio del infierno."
  },
  "Etica_Juramentado": {
    "palabras_clave": [
      "juramentado", "ley de amor", "no violencia", "razón pura",
      "sin esclavos", "sin fanáticos", "colonia comunal", "hermano"
    ],
    "nodos_sinapticos": [
      "cuestionario-espirita-racional_esencia.json#Etica_del_Juramentado"
    ],
    "contexto_real": "El juramentado prometió cumplir la Ley de Amor amando al hermano. La EMECU no usa violencia: su arma es la razón pura. No quiere esclavos ni fanáticos. Los cargos son misiones de sacrificio, no de poder. El deber mayor a la ley superior no puede perderse por el amor menor a los padres errados."
  },
  "Religion_es_Relegacion": {
    "palabras_clave": [
      "religión relegación", "derechos renunciados", "fe ciega",
      "no pensar", "excomunión", "condenación", "sacerdote perverso"
    ],
    "nodos_sinapticos": [
      "cuestionario-espirita-racional_esencia.json#Espiritismo_vs_Religión",
      "buscando-a-dios-joaquin-trincado_esencia.json#2474: Párrafo I: JESUS NI SUS APOSTOLES NO LEVANTARON TEMPLOS"
    ],
    "contexto_real": "Religión = RELEGACIÓN de derechos. Al religioso le está prohibido pensar con su propia cabeza y debe creer todo lo que digan los sacerdotes por absurdo que sea. La pena: excomunión y condenación al fuego eterno. El sacerdote que indica el camino equivocado a sabiendas comete PERVERSIDAD."
  }
};

try {
  const rawData = fs.readFileSync(DICCIONARIO_PATH, 'utf8');
  const diccionario = JSON.parse(rawData);

  let insertados = 0;
  let omitidos = 0;

  for (const [clave, valor] of Object.entries(NUEVOS_NODOS)) {
    if (diccionario.CONCEPTOS[clave]) {
      console.log(`[OMITIDO] El nodo '${clave}' ya existe.`);
      omitidos++;
    } else {
      diccionario.CONCEPTOS[clave] = valor;
      console.log(`[INYECTADO] ${clave}`);
      insertados++;
    }
  }

  fs.writeFileSync(DICCIONARIO_PATH, JSON.stringify(diccionario, null, 2), 'utf8');
  console.log(`\n✅ Cuestionario Espirita Racionalista inyectado en el Diccionario de Sínapsis.`);
  console.log(`   Nodos insertados: ${insertados} | Omitidos (ya existían): ${omitidos}`);

} catch (error) {
  console.error('❌ ERROR en la inyección:', error.message);
  process.exit(1);
}
