import { ESPIRITU_MAP } from '../data/maps/espiritu';
import { DISCURSO_OBISPO_STROSSMAYER_MAP } from '../data/maps/discurso-obispo-strossmayer/structure';
import { BUSCANDO_A_DIOS_MAP } from '../data/maps/buscando-a-dios/structure';
import { PRIMER_RAYO_DE_LUZ_MAP } from '../data/maps/primer-rayo-de-luz/structure';
import { EL_ESPIRITISMO_EN_SU_ASIENTO_PEDAGOGICAL_MAP } from '../data/maps/el-espiritismo-en-su-asiento/structure';
import { FILOSOFIA_AUSTERA_RACIONAL_MAP } from '../data/maps/filosofia-austera-racional/structure';
import { LOS_CINCO_AMORES_MAP } from '../data/maps/los-cinco-amores/structure';
import { EL_MAGNETISMO_EN_SU_ORIGEN_MAP } from '../data/maps/el-magnetismo-en-su-origen/structure';
import { EL_ESPIRITISMO_ESTUDIADO_MAP } from '../data/maps/el-espiritismo-estudiado/structure';
import { PROFILAXIS_DE_LA_VIDA_MAP } from '../data/maps/profilaxis-de-la-vida/structure';
import { LOS_EXTREMOS_SE_TOCAN_MAP } from '../data/maps/los-extremos-se-tocan/structure';
import { CONOCETE_A_TI_MISMO_PEDAGOGICAL_MAP } from '../data/maps/conocete-a-ti-mismo/structure';
import { CODIGO_AMOR_UNIVERSAL_MAP } from '../data/maps/codigo-de-amor-universal/structure';
import { ESTATUTOS_Y_REGLAMENTOS_MAP } from '../data/maps/estatutos-y-reglamentos/structure';
import { ALFAQUI_VADEMECUM_MAP } from '../data/maps/alfaqui-vademecum/structure';
import { CUESTIONARIO_ESPIRITA_RACIONAL_MAP } from '../data/maps/cuestionario-espirita-racional/structure';
import { JESUS_HOMBRE_Y_NO_DIOS_PEDAGOGICAL_MAP } from '../data/maps/jes-s-hombre-y-no-dios/structure';
import { FILOSOFIA_ENCICLOPEDICA_TOMO1_PEDAGOGICAL_MAP } from '../data/maps/filosofia-enciclopedica-tomo1/structure';
import { FILOSOFIA_ENCICLOPEDICA_TOMO2_PEDAGOGICAL_MAP } from '../data/maps/filosofia-enciclopedica-tomo2/structure';
import { VIDA_DE_MARIA_MAP } from '../data/maps/vida-de-maria/structure';
import { LA_REVOLUCION_DE_MEXICO_MAP } from '../data/maps/la-revolucion-de-mexico/structure';
import { TERCERA_ETAPA_MAP } from '../data/maps/tercera-etapa/structure';
import { LEY_MEDIUMNIDADES_PEDAGOGICAL_MAP } from '../data/maps/ley-mediumnidades/structure';
import { MASTER_SYNAPSE_MAP } from '../data/maps/master-synapse/synapse';

// ─── Diccionario de mapas por palabra clave ───────────────────────────────────
const STRUCTURAL_MAPS: Record<string, any> = {
  // Grado 1
  "strossmayer": DISCURSO_OBISPO_STROSSMAYER_MAP,
  "papa": DISCURSO_OBISPO_STROSSMAYER_MAP,
  "infalibilidad": DISCURSO_OBISPO_STROSSMAYER_MAP,
  "concilio vaticano": DISCURSO_OBISPO_STROSSMAYER_MAP,
  "roca petra": DISCURSO_OBISPO_STROSSMAYER_MAP,
  "caballeros de colon": DISCURSO_OBISPO_STROSSMAYER_MAP,
  // Grado 2
  "buscando a dios": BUSCANDO_A_DIOS_MAP,
  "borgia": BUSCANDO_A_DIOS_MAP,
  "escuela esenica": BUSCANDO_A_DIOS_MAP,
  "esenio": BUSCANDO_A_DIOS_MAP,
  // Grado 3
  "primer rayo": PRIMER_RAYO_DE_LUZ_MAP,
  "controversia": PRIMER_RAYO_DE_LUZ_MAP,
  "syllabus": PRIMER_RAYO_DE_LUZ_MAP,
  "darwin": PRIMER_RAYO_DE_LUZ_MAP,
  "montemayor": PRIMER_RAYO_DE_LUZ_MAP,
  "podesta": PRIMER_RAYO_DE_LUZ_MAP,
  // Grado 4
  "espiritismo en su asiento": EL_ESPIRITISMO_EN_SU_ASIENTO_PEDAGOGICAL_MAP,
  "medium": EL_ESPIRITISMO_EN_SU_ASIENTO_PEDAGOGICAL_MAP,
  "mediumnidad": EL_ESPIRITISMO_EN_SU_ASIENTO_PEDAGOGICAL_MAP,
  "juicio final": EL_ESPIRITISMO_EN_SU_ASIENTO_PEDAGOGICAL_MAP,
  "ley de aportes": EL_ESPIRITISMO_EN_SU_ASIENTO_PEDAGOGICAL_MAP,
  "comunicaciones espirituales": EL_ESPIRITISMO_EN_SU_ASIENTO_PEDAGOGICAL_MAP,
  // Grado 5
  "filosofia austera": FILOSOFIA_AUSTERA_RACIONAL_MAP,
  "antropomorfismo": FILOSOFIA_AUSTERA_RACIONAL_MAP,
  "giordano bruno": FILOSOFIA_AUSTERA_RACIONAL_MAP,
  "socrates": FILOSOFIA_AUSTERA_RACIONAL_MAP,
  // Grado 6
  "cinco amores": LOS_CINCO_AMORES_MAP,
  "14 economias": LOS_CINCO_AMORES_MAP,
  "economia del tiempo": LOS_CINCO_AMORES_MAP,
  "economia universal": LOS_CINCO_AMORES_MAP,
  "amor ciudadano": LOS_CINCO_AMORES_MAP,
  "amor universal": LOS_CINCO_AMORES_MAP,
  "justicia equitativa": LOS_CINCO_AMORES_MAP,
  // Grado 7
  "magnetismo en su origen": EL_MAGNETISMO_EN_SU_ORIGEN_MAP,
  "metodo supremo": EL_MAGNETISMO_EN_SU_ORIGEN_MAP,
  "sonambulismo": EL_MAGNETISMO_EN_SU_ORIGEN_MAP,
  "desdoblamiento": EL_MAGNETISMO_EN_SU_ORIGEN_MAP,
  "electron": EL_MAGNETISMO_EN_SU_ORIGEN_MAP,
  "atomo": EL_MAGNETISMO_EN_SU_ORIGEN_MAP,
  "curacion magnetica": EL_MAGNETISMO_EN_SU_ORIGEN_MAP,
  "grados magneticos": EL_MAGNETISMO_EN_SU_ORIGEN_MAP,
  // Grado 8
  "espiritismo estudiado": EL_ESPIRITISMO_ESTUDIADO_MAP,
  "moises prohibio": EL_ESPIRITISMO_ESTUDIADO_MAP,
  "comunicaciones 1912": EL_ESPIRITISMO_ESTUDIADO_MAP,
  // Grado 9
  "profilaxis": PROFILAXIS_DE_LA_VIDA_MAP,
  "educacion comunal": PROFILAXIS_DE_LA_VIDA_MAP,
  "concepcion espiritual": PROFILAXIS_DE_LA_VIDA_MAP,
  "herencia espiritual": PROFILAXIS_DE_LA_VIDA_MAP,
  "tradicion traicion": PROFILAXIS_DE_LA_VIDA_MAP,
  "ancianos": PROFILAXIS_DE_LA_VIDA_MAP,
  "sol de justicia": PROFILAXIS_DE_LA_VIDA_MAP,
  "24 ancianos": PROFILAXIS_DE_LA_VIDA_MAP,
  // Grado 10
  "extremos se tocan": LOS_EXTREMOS_SE_TOCAN_MAP,
  "historia humanidad": LOS_EXTREMOS_SE_TOCAN_MAP,
  "constantino": LOS_EXTREMOS_SE_TOCAN_MAP,
  "primera guerra": LOS_EXTREMOS_SE_TOCAN_MAP,
  "dia del amor": LOS_EXTREMOS_SE_TOCAN_MAP,
  "eloi propietario": LOS_EXTREMOS_SE_TOCAN_MAP,
  "adam adan": LOS_EXTREMOS_SE_TOCAN_MAP,
  // Grado 11
  "conocete a ti mismo": CONOCETE_A_TI_MISMO_PEDAGOGICAL_MAP,
  "trinidad humana": CONOCETE_A_TI_MISMO_PEDAGOGICAL_MAP,
  "alma temporaria": CONOCETE_A_TI_MISMO_PEDAGOGICAL_MAP,
  "espiritu responsable": CONOCETE_A_TI_MISMO_PEDAGOGICAL_MAP,
  "cuerpo alma espiritu": CONOCETE_A_TI_MISMO_PEDAGOGICAL_MAP,
  "mundos de prueba": CONOCETE_A_TI_MISMO_PEDAGOGICAL_MAP,
  "razas igualdad": CONOCETE_A_TI_MISMO_PEDAGOGICAL_MAP,
  // Grado 12
  "codigo de amor universal": CODIGO_AMOR_UNIVERSAL_MAP,
  "ley de afinidad": CODIGO_AMOR_UNIVERSAL_MAP,
  "ley de justicia": CODIGO_AMOR_UNIVERSAL_MAP,
  "matrimonio dogmatico": CODIGO_AMOR_UNIVERSAL_MAP,
  "celibato": CODIGO_AMOR_UNIVERSAL_MAP,
  "libertad mujer": CODIGO_AMOR_UNIVERSAL_MAP,
  "procreacion": CODIGO_AMOR_UNIVERSAL_MAP,
  "union seres": CODIGO_AMOR_UNIVERSAL_MAP,
  // Grado 13
  "estatutos": ESTATUTOS_Y_REGLAMENTOS_MAP,
  "reglamento": ESTATUTOS_Y_REGLAMENTOS_MAP,
  "laudo": ESTATUTOS_Y_REGLAMENTOS_MAP,
  "laudo de rigor": ESTATUTOS_Y_REGLAMENTOS_MAP,
  "maestro nato": ESTATUTOS_Y_REGLAMENTOS_MAP,
  "asamblea comunal": ESTATUTOS_Y_REGLAMENTOS_MAP,
  // Estudio Libre
  "alfaqui": ALFAQUI_VADEMECUM_MAP,
  "vademecum": ALFAQUI_VADEMECUM_MAP,
  "cuestionario": CUESTIONARIO_ESPIRITA_RACIONAL_MAP,
  "jesus hombre": JESUS_HOMBRE_Y_NO_DIOS_PEDAGOGICAL_MAP,
  "enciclopedia tomo 1": FILOSOFIA_ENCICLOPEDICA_TOMO1_PEDAGOGICAL_MAP,
  "enciclopedia tomo 2": FILOSOFIA_ENCICLOPEDICA_TOMO2_PEDAGOGICAL_MAP,
  "vida de maria": VIDA_DE_MARIA_MAP,
  "revolucion de mexico": LA_REVOLUCION_DE_MEXICO_MAP,
  "tercera etapa": TERCERA_ETAPA_MAP,
  "ley de mediumnidades": LEY_MEDIUMNIDADES_PEDAGOGICAL_MAP,
  // Transversales → Master Synapse
  "espiritu hereda": MASTER_SYNAPSE_MAP,
  "karma": MASTER_SYNAPSE_MAP,
  "herencia deudas": MASTER_SYNAPSE_MAP,
  "commune vs comunismo": MASTER_SYNAPSE_MAP,
  "justicia social": MASTER_SYNAPSE_MAP,
  "reencarnacion": MASTER_SYNAPSE_MAP,
  "commune universal": MASTER_SYNAPSE_MAP,
  "cadena curricular": MASTER_SYNAPSE_MAP,
  // Mapas básicos
  "espiritu": ESPIRITU_MAP,
  "eloi": ALFAQUI_VADEMECUM_MAP,
  "eloí": ALFAQUI_VADEMECUM_MAP,
  "alma": CONOCETE_A_TI_MISMO_PEDAGOGICAL_MAP,
  "dios": BUSCANDO_A_DIOS_MAP,
  "magnetismo": EL_MAGNETISMO_EN_SU_ORIGEN_MAP,
  "amor": LOS_CINCO_AMORES_MAP,
  "historia": LOS_EXTREMOS_SE_TOCAN_MAP,
  "guerra": LOS_EXTREMOS_SE_TOCAN_MAP,
  "jesus": CUESTIONARIO_ESPIRITA_RACIONAL_MAP,
  "iglesia": JESUS_HOMBRE_Y_NO_DIOS_PEDAGOGICAL_MAP,
  "moises": EL_ESPIRITISMO_ESTUDIADO_MAP,
  "maria": VIDA_DE_MARIA_MAP,
  "mexico": LA_REVOLUCION_DE_MEXICO_MAP,
  "educacion": PROFILAXIS_DE_LA_VIDA_MAP,
  "constitucion": CODIGO_AMOR_UNIVERSAL_MAP,
  "economia": LOS_CINCO_AMORES_MAP,
};

// ─── Consultas transversales que activan el Master Synapse directamente ───────
const SYNAPSE_TRIGGERS = [
  "hereda deuda", "karma", "herencia espiritual", "pecado original",
  "commune vs comunismo", "justicia social", "commune universal",
  "diferencia entre", "relacion entre", "como se conecta", "todos los libros",
  "en toda la obra", "segun trincado en general", "reencarnacion deuda"
];

export const structuralService = {

  /**
   * Determina si la consulta debe activar el Master Synapse (grafo global).
   */
  isSynapseQuery(query: string): boolean {
    const q = query.toLowerCase();
    return SYNAPSE_TRIGGERS.some(trigger => q.includes(trigger));
  },

  /**
   * Busca el mapa más relevante para la consulta del usuario.
   * Prioriza coincidencias más específicas (frases más largas).
   */
  findRelevantMap(query: string): any | null {
    const normalizedQuery = query.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // quitar acentos para comparar

    // 1. Verificar si es consulta transversal → Master Synapse
    if (this.isSynapseQuery(normalizedQuery)) {
      return MASTER_SYNAPSE_MAP;
    }

    // 2. Buscar por palabras clave, priorizando frases más largas (más específicas)
    const sortedKeys = Object.keys(STRUCTURAL_MAPS).sort((a, b) => b.length - a.length);
    for (const keyword of sortedKeys) {
      const normalizedKeyword = keyword.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (normalizedQuery.includes(normalizedKeyword)) {
        const map = STRUCTURAL_MAPS[keyword];
        if (map) return map;
      }
    }

    return null;
  },

  /**
   * Formatea el Master Synapse para el prompt cuando la consulta es transversal.
   */
  formatSynapseForPrompt(query: string): string {
    const synapse = MASTER_SYNAPSE_MAP;
    const q = query.toLowerCase();
    let context = `\n=== SINAPSIS DOCTRINAL TRANSVERSAL ===\n`;
    context += `CONSULTA DETECTADA COMO TRANSVERSAL. Aplica el grafo completo de interconexiones.\n\n`;

    // Buscar nodo relevante
    const relevantNode = synapse.nodos_transversales.find((n: any) =>
      q.includes(n.id.replace(/_/g, " ")) ||
      q.includes(n.concepto.toLowerCase().substring(0, 15))
    );

    if (relevantNode) {
      context += `CONCEPTO CENTRAL: ${relevantNode.concepto}\n`;
      context += `DEFINICIÓN DOCTRINAL: ${relevantNode.definicion_doctrinal}\n`;
      context += `FILTRO ANTIDOGMA: ${relevantNode.filtro_antidogma}\n`;
      if (relevantNode.diferencias_contextuales) {
        context += `DIFERENCIAS POR LIBRO:\n`;
        for (const [libro, descripcion] of Object.entries(relevantNode.diferencias_contextuales)) {
          context += `  - ${libro}: ${descripcion}\n`;
        }
      }
    }

    // Buscar arista crítica relevante
    const relevantEdge = synapse.aristas_criticas.find((e: any) =>
      q.includes(e.nodo_a.toLowerCase().substring(0, 10)) ||
      q.includes(e.nodo_b.toLowerCase().substring(0, 10))
    );

    if (relevantEdge) {
      context += `\nCONEXIÓN CRÍTICA: ${relevantEdge.descripcion}\n`;
      context += `DIFERENCIA CLAVE: ${relevantEdge.diferencia_clave}\n`;
    }

    return context + "==========================================================\n";
  },

  /**
   * Formatea un mapa en un contexto denso para el prompt de la IA,
   * aplicando los filtros de pedagogía y no-dogmatismo.
   */
  formatMapForPrompt(map: any, query: string): string {
    if (!map) return "";

    // Si es el Master Synapse, usar el formateador especial
    if (map.id === "master-synapse") {
      return this.formatSynapseForPrompt(query);
    }

    const normalizedQuery = query.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    let context = `\n=== ASIENTO DE COHERENCIA DOCTRINAL (${map.titulo}) ===\n`;
    context += `GRADO: ${map.grado || 'Estudio Libre'} | FILTRO: ${map.filtro_pedagogico || 'General'}\n`;
    context += `EJE CENTRAL: ${map.eje_central || ''}\n`;

    if (map.filtro_filosofico) {
      context += `FILTRO FILOSÓFICO GLOBAL: ${map.filtro_filosofico}\n`;
    }

    if (map.segmentos) {
      // Buscar el segmento más relevante
      const relevantSegment = map.segmentos.find((s: any) => {
        const segText = (s.id + " " + (s.titulo_literal || "") + " " + (s.eje_pedagogico || "")).toLowerCase()
          .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        if (normalizedQuery.split(" ").some((w: string) => w.length > 4 && segText.includes(w))) return true;
        return s.ideas_fuerza?.some((i: any) => {
          const ideaText = (i.id + " " + i.logica + " " + (i.texto_clave || "")).toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          return normalizedQuery.split(" ").some((w: string) => w.length > 4 && ideaText.includes(w));
        });
      });

      if (relevantSegment) {
        context += `\nSEGMENTO RELEVANTE: ${relevantSegment.titulo_literal || relevantSegment.id}\n`;
        context += `LÓGICA DEL SEGMENTO: ${relevantSegment.eje_pedagogico}\n`;

        // Buscar la idea atómica más precisa
        const relevantIdea = relevantSegment.ideas_fuerza?.find((i: any) => {
          const ideaText = (i.id + " " + i.logica + " " + (i.texto_clave || "")).toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          return normalizedQuery.split(" ").some((w: string) => w.length > 4 && ideaText.includes(w));
        });

        if (relevantIdea) {
          context += `\nIDEA ATÓMICA: ${relevantIdea.logica}\n`;
          if (relevantIdea.filtro_antidogma) {
            context += `FILTRO ANTIDOGMA: ${relevantIdea.filtro_antidogma}\n`;
          }
          if (relevantIdea.psicologia_aplicada) {
            context += `PSICOLOGÍA APLICADA: ${relevantIdea.psicologia_aplicada}\n`;
          }
          if (relevantIdea.texto_clave) {
            context += `ANCLAJE LITERAL: "${relevantIdea.texto_clave}"\n`;
          }
          // Mostrar interconexiones relevantes
          if (relevantIdea.interconexiones?.length > 0) {
            context += `INTERCONEXIONES CON OTROS LIBROS:\n`;
            relevantIdea.interconexiones.slice(0, 3).forEach((ic: any) => {
              context += `  → [${ic.libro}] ${ic.motivo}\n`;
            });
          }
        } else {
          // Sin idea específica, dar las 3 primeras ideas del segmento
          relevantSegment.ideas_fuerza?.slice(0, 3).forEach((i: any) => {
            context += `\n• ${i.logica}`;
            if (i.filtro_antidogma) context += ` | FILTRO: ${i.filtro_antidogma}`;
          });
        }
      } else {
        // Sin segmento específico, dar el eje general y los primeros 2 segmentos
        context += `\nSEGMENTOS PRINCIPALES DEL LIBRO:\n`;
        map.segmentos.slice(0, 2).forEach((s: any) => {
          context += `  [${s.titulo_literal || s.id}]: ${s.eje_pedagogico}\n`;
        });
      }
    } else {
      context += `LÓGICA: ${map.definicion_doctrinal || map.concepto || ''}\n`;
    }

    // Añadir información de transición si existe
    if (map.transicion_siguiente_grado) {
      context += `\nTRANSICIÓN: ${map.transicion_siguiente_grado.puente_conceptual}\n`;
    }

    return context + "==========================================================\n";
  }
};
