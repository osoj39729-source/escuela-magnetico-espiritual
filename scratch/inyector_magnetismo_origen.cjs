/**
 * INYECTOR: El Magnetismo en su Origen (Método Supremo)
 * Propósito: Insertar los nodos sinapticos del Magnetismo en el diccionario_sinapsis.json
 * Estándar: Juez Amoroso por Sabiduría - Anti-Dogmático
 */

const fs = require('fs');
const path = require('path');

const DICCIONARIO_PATH = path.resolve('F:/trincado/public/data/diccionario_sinapsis.json');

const NUEVOS_NODOS = {
  "Magnetismo_es_Movimiento": {
    "palabras_clave": [
      "magnetismo", "movimiento universal", "átomos", "moléculas", "yones",
      "corpúsculos", "eter materializado", "único magnetismo espiritual"
    ],
    "nodos_sinapticos": [
      "el-magnetismo-en-su-origen_esencia.json#Que_es_el_Magnetismo",
      "el-magnetismo-en-su-origen_esencia.json#El_Magnetismo_Animal"
    ],
    "contexto_real": "Magnetismo es 'el resultado del movimiento universal'. El Éter es la única sustancia; de él procede toda materia. El Magnetismo Animal es el mismo Magnetismo Espiritual materializado. No hay ciencias ocultas, solo ignorancia."
  },
  "Trinidad_Humana_Dinamo": {
    "palabras_clave": [
      "dínamo", "espíritu polo positivo", "alma resistencia", "cuerpo polo negativo",
      "trinidad del hombre", "razón equilibrio", "circuito magnético"
    ],
    "nodos_sinapticos": [
      "el-magnetismo-en-su-origen_esencia.json#El_Hombre_es_la_Dinamo",
      "alfaqui-vademecum_esencia.json#587: CAPITULO IV: LAS LEYES DEL UNIVERSO O DIVINAS"
    ],
    "contexto_real": "El hombre es la verdadera Dínamo: Espíritu (polo +) + Alma (resistencia) + Cuerpo (polo -). Solo produce luz cuando los tres están equilibrados por la Razón. Sin equilibrio, el magnetismo existe pero es estático e inconsciente."
  },
  "Siete_Grados_Desarrollo": {
    "palabras_clave": [
      "sopor letárgico", "sueño inconsciente", "sonambulismo verbal", "telepatía",
      "desdoblamiento", "médium", "magnetizador", "7 grados"
    ],
    "nodos_sinapticos": [
      "el-magnetismo-en-su-origen_esencia.json#Siete_Grados_Magnetismo"
    ],
    "contexto_real": "Los 7 grados del Magnetismo van del sopor letárgico al desdoblamiento supremo y atracción. Los grados 5-7 (telepatía, desdoblamiento, atracción) son ya Espiritismo puro. El 7° grado permite visitar mundos hermanos y recibir enseñanza directa de seres avanzados."
  },
  "Plano_Universal_Primero": {
    "palabras_clave": [
      "plano universal", "7 y media nebulosas", "vía láctea", "espíritu de verdad rector",
      "sistemas solares", "constelaciones", "dominio jerárquico"
    ],
    "nodos_sinapticos": [
      "el-magnetismo-en-su-origen_esencia.json#Cosmogonia_desde_Magnetismo",
      "filosofia-enciclopedica-universal-tomo-2_esencia.json#Triunvirato_Espiritual"
    ],
    "contexto_real": "El Plano Universal Primero (al que pertenece la Tierra) consta de 7 y media nebulosas. El maestro del plano es el 'Espíritu de Verdad'. La jerarquía es matemática: el más sabio domina al menos, desde el individuo hasta la nebulosa. Trincado es el Espíritu de Verdad."
  },
  "Mundos_Hermanos_Visitados": {
    "palabras_clave": [
      "marte", "venus", "heufi-fi", "churel", "sión sirio", "45 años luz",
      "desdoblamiento mundos", "hermanos mayores visitados"
    ],
    "nodos_sinapticos": [
      "el-magnetismo-en-su-origen_esencia.json#Cosmogonia_desde_Magnetismo",
      "filosofia-enciclopedica-universal-tomo-2_esencia.json#Schuwit_Mundos_de_Luz"
    ],
    "contexto_real": "Trincado visitó en desdoblamiento: Marte (régimen comunal, similar a la Tierra), Venus, Heufi-fi (45 años-luz de Sirio) y Churel (un siglo más antiguo que la Tierra, historiador de la Tierra). En esos mundos, los discípulos en misión copian conocimientos que luego inspiran artes y ciencias en la Tierra."
  },
  "Celibato_Crimen_Ley": {
    "palabras_clave": [
      "celibato crimen", "amor carnal ley", "procreación mandato", "familia obligatoria",
      "hijos ilegítimos valientes", "sacramento amor", "casta improductiva sacerdotal"
    ],
    "nodos_sinapticos": [
      "el-magnetismo-en-su-origen_esencia.json#Regeneracion_Sexual_Ley",
      "cuestionario-espirita-racional_esencia.json#Espiritismo_vs_Religión"
    ],
    "contexto_real": "El celibato es un crimen de lesa humanidad y la negación de la ley del Padre. El único sacramento real es el amor recíproco. Los hijos llamados 'ilegítimos' son valientes espíritus que encarnan sin padrinos. El discípulo del Método Supremo debe constituir familia y tener prole numerosa."
  },
  "Serenidad_Potencia_Real": {
    "palabras_clave": [
      "serenidad", "potencia real", "secreto del éxito", "amor como base",
      "sin serenidad no se consigue nada", "maestro sereno"
    ],
    "nodos_sinapticos": [
      "el-magnetismo-en-su-origen_esencia.json#Condiciones_del_Magnetizador"
    ],
    "contexto_real": "La Serenidad es la verdadera potencia y el secreto de todas las cosas. Solo la tiene el que ama; el ignorante no puede ser sereno porque todo ignorante es injusto y no puede Amar. Sin serenidad no se puede magnetizar ni enseñar."
  },
  "Fe_Viva_por_Obras": {
    "palabras_clave": [
      "fe sin obras", "fe viva", "estudio convencimiento", "no fe ciega",
      "obras hacen fe", "progreso esfuerzo propio"
    ],
    "nodos_sinapticos": [
      "el-magnetismo-en-su-origen_esencia.json#Consejos_Fundamentales",
      "filosofia-enciclopedica-universal-tomo-2_esencia.json#Prologo_del_Juez"
    ],
    "contexto_real": "La EMECU no quiere fe ciega sino estudio y convencimiento que hacen Fe viva. Solo las obras hacen Fe. El progreso se adquiere por esfuerzo propio. No comprender una cosa no da derecho a negarla."
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
  console.log(`\n✅ El Magnetismo en su Origen (Método Supremo) inyectado en el Diccionario de Sínapsis.`);
  console.log(`   Nodos insertados: ${insertados} | Omitidos (ya existían): ${omitidos}`);

} catch (error) {
  console.error('❌ ERROR en la inyección:', error.message);
  process.exit(1);
}
