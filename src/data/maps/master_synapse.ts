
// MASTER SYNAPSE - ÍNDICE GLOBAL DE LA CAPA SEMÁNTICA ATÓMICA
// Este archivo es el punto de entrada definitivo para el RAG Soberano de la EMECU.

import { CONOCETE_A_TI_MISMO_PEDAGOGICAL_MAP } from './conocete-a-ti-mismo/structure';
import { LOS_EXTREMOS_SE_TOCAN_MAP } from './los-extremos-se-tocan/structure';
import { PROFILAXIS_DE_LA_VIDA_MAP } from './profilaxis-de-la-vida/structure';
import { LOS_CINCO_AMORES_MAP } from './los-cinco-amores/structure';
import { EL_MAGNETISMO_EN_SU_ORIGEN_MAP } from './el-magnetismo-en-su-origen/structure';
import { CODIGO_AMOR_UNIVERSAL_MAP } from './codigo-de-amor-universal/structure';
import { EL_ESPIRITISMO_EN_SU_ASIENTO_MAP } from './espiritismo-en-su-asiento/structure';
import { FILOSOFIA_AUSTERA_RACIONAL_MAP } from './filosofia-austera-racional/structure';
import { ALFAQUI_VADEMECUM_MAP } from './alfaqui-vademecum/structure';
import { BUSCANDO_A_DIOS_MAP } from './buscando-a-dios/structure';
import { CUESTIONARIO_ESPIRITA_RACIONAL_MAP } from './cuestionario-espirita-racional/structure';
import { EL_ESPIRITISMO_ESTUDIADO_MAP } from './el-espiritismo-estudiado/structure';
import { FILOSOFIA_ENCICLOPEDICA_UNIVERSAL_TOMO_1_MAP } from './filosofia-enciclopedica-universal-tomo-1/structure';
import { FILOSOFIA_ENCICLOPEDICA_UNIVERSAL_TOMO_2_MAP } from './filosofia-enciclopedica-universal-tomo-2/structure';
import { JESUS_HOMBRE_Y_NO_DIOS_PEDAGOGICAL_MAP } from './jes-s-hombre-y-no-dios/structure';
import { LA_REVOLUCION_DE_MEXICO_MAP } from './la-revolucion-de-mexico/structure';
import { LAUDO_DE_RIGOR_MAP } from './laudo-de-rigor/structure';
import { LEY_DE_LAS_MEDIUMNIDADES_MAP } from './ley-de-las-mediumnidades-en-general/structure';
import { PRIMER_RAYO_DE_LUZ_MAP } from './primer-rayo-de-luz/structure';
import { TERCERA_ETAPA_MAP } from './tercera-etapa/structure';
import { VIDA_DE_MARIA_MAP } from './vida-de-maria/structure';
import { DISCURSO_OBISPO_STROSSMAYER_MAP } from './discurso-obispo-strossmayer/structure';
import { ESTATUTOS_Y_REGLAMENTOS_MAP } from './estatutos-y-reglamentos/structure';
import { REGLAMENTO_INTERNO_MAP } from './reglamento-interno/structure';

export const MASTER_SYNAPSE_MAP = {
  version: "2.0.1-fidelity-fixed",
  total_books_mapped: 24,
  descripcion: "Arquitectura fractal de conocimiento doctrinal completa. 100% fidelidad atómica.",
  
  // Mapeo por Grados (Curriculum EMECU)
  curriculum: {
    grado_preliminar: [
      DISCURSO_OBISPO_STROSSMAYER_MAP,
      JESUS_HOMBRE_Y_NO_DIOS_PEDAGOGICAL_MAP,
      VIDA_DE_MARIA_MAP
    ],
    grado_1: [
      LOS_CINCO_AMORES_MAP,
      ALFAQUI_VADEMECUM_MAP
    ],
    grado_2: [
      CUESTIONARIO_ESPIRITA_RACIONAL_MAP,
      BUSCANDO_A_DIOS_MAP
    ],
    grado_3: [
      PRIMER_RAYO_DE_LUZ_MAP
    ],
    grado_4: [
      EL_ESPIRITISMO_EN_SU_ASIENTO_MAP,
      EL_ESPIRITISMO_ESTUDIADO_MAP
    ],
    grado_5: [
      EL_MAGNETISMO_EN_SU_ORIGEN_MAP,
      LEY_DE_LAS_MEDIUMNIDADES_MAP
    ],
    grado_6: [
      FILOSOFIA_ENCICLOPEDICA_UNIVERSAL_TOMO_1_MAP,
      FILOSOFIA_ENCICLOPEDICA_UNIVERSAL_TOMO_2_MAP
    ],
    grado_7: [
      LA_REVOLUCION_DE_MEXICO_MAP,
      TERCERA_ETAPA_MAP
    ],
    grado_8: [
      FILOSOFIA_AUSTERA_RACIONAL_MAP
    ],
    grado_9: [
      PROFILAXIS_DE_LA_VIDA_MAP
    ],
    grado_10: [
      LOS_EXTREMOS_SE_TOCAN_MAP
    ],
    grado_11: [
      CONOCETE_A_TI_MISMO_PEDAGOGICAL_MAP
    ],
    grado_12: [
      CODIGO_AMOR_UNIVERSAL_MAP
    ],
    ley_y_regimen: [
      LAUDO_DE_RIGOR_MAP,
      ESTATUTOS_Y_REGLAMENTOS_MAP,
      REGLAMENTO_INTERNO_MAP
    ]
  },

  // Grafo de Interconexiones Temáticas (Sinapsis)
  synapses: {
    "ELOI": {
      definicion: "Principio Inteligente Único. El Creador.",
      links: [
        { book: "CTM", ref: "eloi_centro_universo" },
        { book: "FAR", ref: "eloi_uno_solo" },
        { book: "ALF", ref: "eloi_definicion_vademecum" }
      ]
    },
    "JUSTICIA": {
      definicion: "Acción de la Ley de Amor para el equilibrio del Universo.",
      links: [
        { book: "LR", ref: "supercheria_perversidad_encarnada" },
        { book: "TE", ref: "vencerse_a_si_mismo" },
        { book: "EST", ref: "justicia_sentencia_religiones" }
      ]
    },
    "MEDIUMNIDAD": {
      definicion: "Facultad humana de comunicación entre mundos.",
      links: [
        { book: "LEY", ref: "mediumnidad_ley_natural" },
        { book: "LR", ref: "reglamento_sesiones_emecu" },
        { book: "ESA", ref: "mediumnidad_no_dogmatica" }
      ]
    },
    "COMMUNE": {
      definicion: "Estado natural de la humanidad en fraternidad y propiedad común.",
      links: [
        { book: "FAR", ref: "comuna_regimen_natural" },
        { book: "ER", ref: "trabajo_usufructo_comun" },
        { book: "CAU", ref: "amor_ley_comuna" }
      ]
    }
  }
};
