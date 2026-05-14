/**
 * INYECTOR: Filosofía Enciclopédica Universal - Tomo 2, Bloque 1
 * Propósito: Insertar los nodos sinapticos del Tomo 2 en el diccionario_sinapsis.json
 * Estándar: Juez Amoroso por Sabiduría - Anti-Dogmático
 */

const fs = require('fs');
const path = require('path');

const DICCIONARIO_PATH = path.resolve('F:/trincado/public/data/diccionario_sinapsis.json');

const NUEVOS_NODOS = {
  "Triunvirato_del_Amor": {
    "palabras_clave": ["xavier", "jesús", "espíritu de verdad", "trinidad racional", "consejo de sión", "triunvirato"],
    "nodos_sinapticos": [
      "filosofia-enciclopedica-universal-tomo-2_esencia.json#Triunvirato_Espiritual",
      "filosofia-enciclopedica-universal-tomo-1_esencia.json#La Jerarquía de la Luz: Xavier, el Maestro"
    ],
    "contexto_real": "Estructura jerárquica del ciclo espiritual actual: Xavier (Jefe Superior de los espacios), Jesús (Preceptor del amor) y Trincado (Juez/Espíritu de Verdad). Trinidad de Amor racional en oposición a la trinidad dogmática de la Iglesia."
  },
  "Juicio_Universal_1930": {
    "palabras_clave": ["juicio", "sentencia inapelable", "obras", "fe sin obras", "rechinar de dientes", "espíritus juramentados"],
    "nodos_sinapticos": [
      "filosofia-enciclopedica-universal-tomo-2_esencia.json#Prologo_del_Juez"
    ],
    "contexto_real": "Juicio espiritual ocurrido antes de 1930 donde cada espíritu vio abierta su conciencia y fue sentenciado según sus obras, no su fe. Desde ese momento solo encarnan espíritus juramentados. Comprobación del axioma de Santiago: 'La fe sin obras es muerta'."
  },
  "Familia_Natural_de_Jesus": {
    "palabras_clave": ["jose carpintero", "maría nazaret", "esposo carnal", "padre natural", "hijo de hombre", "concepción carnal"],
    "nodos_sinapticos": [
      "filosofia-enciclopedica-universal-tomo-2_esencia.json#Jose_el_Carpintero",
      "filosofia-enciclopedica-universal-tomo-1_esencia.json#La Palabra de José: El Fin de la Idolatría"
    ],
    "contexto_real": "Testimonio directo de José el Carpintero (comunicación 1911): Jesús fue su hijo biológico, María su joven esposa carnal. No hay virginidad ni concepción sobrenatural. La Iglesia apócrifa borró a sus padres naturales para fabricar el mito de divinidad."
  },
  "Ley_de_los_Afines_Historica": {
    "palabras_clave": ["ley de afines", "momento histórico", "epopeya", "coincidencia matemática", "revolución", "misión colectiva"],
    "nodos_sinapticos": [
      "filosofia-enciclopedica-universal-tomo-2_esencia.json#Xavier_Cosmogonia_Universal",
      "alfaqui-vademecum_esencia.json#587: CAPITULO IV: LAS LEYES DEL UNIVERSO O DIVINAS"
    ],
    "contexto_real": "Ley desconocida para la ciencia que señala los momentos históricos de evolución: reúne matemáticamente en el mismo punto y tiempo a los espíritus afines que deben cumplir una misión colectiva. Rige lo que los hombres llaman 'casualidad' o 'destino'."
  },
  "Cosmogonia_es_Comunismo": {
    "palabras_clave": ["comunismo real", "cosmogonía", "igualdad universal", "ley del padre", "derechos comunes", "obrero mayor que su obra"],
    "nodos_sinapticos": [
      "filosofia-enciclopedica-universal-tomo-2_esencia.json#Schopenhauer_Cosmogonia_Comunal"
    ],
    "contexto_real": "El verdadero comunismo no es una ideología política: está escrito en la Cosmogonía. Todos son comunes en la ley del Padre y tienen igual derecho. El valor del obrero siempre supera al de la obra. La joya no vale más que el joyero."
  },
  "Magnetismo_Espiritual_Proclama": {
    "palabras_clave": ["magnetismo espiritual", "universo solidarizado", "mundo comunizado", "ley una", "sustancia una", "proclama final"],
    "nodos_sinapticos": [
      "filosofia-enciclopedica-universal-tomo-2_esencia.json#Schopenhauer_Cosmogonia_Comunal",
      "los-extremos-se-tocan_esencia.json#253 al 580: El Cortocircuito Universal y el C.G.S."
    ],
    "contexto_real": "Proclama final de Trincado: 'El Universo solidarizado. El mundo todo, comunizado. La ley es una; la sustancia una. Uno es el principio; uno es el fin. Todo es Magnetismo Espiritual.' Axioma fundacional y síntesis de toda la obra."
  },
  "Magistratura_Espiritual": {
    "palabras_clave": ["perdón espiritual", "víctima ayuda victimario", "remordimiento", "fanatismo religioso", "crimen religioso", "espacio corrector"],
    "nodos_sinapticos": [
      "filosofia-enciclopedica-universal-tomo-2_esencia.json#El_Herrero_y_el_Fanatismo"
    ],
    "contexto_real": "Sistema de justicia post-mortem no retributivo: la víctima perdona y ayuda al victimario desde el espacio espiritual, acelerando la evolución de ambos. El único castigo real es el remordimiento de la propia conciencia, no el fuego eterno."
  },
  "Mundos_de_Luz_Testigos": {
    "palabras_clave": ["mundo sol", "schuwit", "mundos mayores", "habitantes de otros mundos", "efluvios siderales", "hermanos mayores"],
    "nodos_sinapticos": [
      "filosofia-enciclopedica-universal-tomo-2_esencia.json#Schuwit_Mundos_de_Luz"
    ],
    "contexto_real": "Schuwit comunica desde el 'mundo Sol': confirma que todos los mundos comparten la misma ley del amor. Los mundos mayores observan y ayudan a la Tierra. Los avances técnicos (electricidad, telégrafos) son conocimientos copiados de esos mundos por espíritus encarnados."
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
  console.log(`\n✅ Bloque 1 de Filosofía Enciclopédica Universal Tomo 2 inyectado.`);
  console.log(`   Nodos insertados: ${insertados} | Omitidos (ya existían): ${omitidos}`);

} catch (error) {
  console.error('❌ ERROR en la inyección:', error.message);
  process.exit(1);
}
