
// ÍNDICE MAESTRO - Conócete a ti Mismo (Grado 11)
// Este archivo unifica todos los capítulos atómicos y expone el mapa completo para el RAG

import { CTM_CAP1_VIDA } from './cap1_vida';
import { CTM_CAP2_ESPIRITU } from './cap2_espiritu';
import { CTM_CAP3_LEYES_UNIVERSO } from './cap3_leyes_universo';
import { CTM_CAP4_CREACION } from './cap4_creacion';
import { CTM_CAP5_CUERPO } from './cap5_cuerpo';
import { CTM_CAP6_HOMBRE } from './cap6_hombre';
import { CTM_CAP7_GRADOS_RELIGIONES } from './cap7_grados_religiones';
import { CTM_CAPS8_9_10 } from './caps8_9_10';

export const CONOCETE_A_TI_MISMO_PEDAGOGICAL_MAP = {
  book_id: "conocete-a-ti-mismo-1",
  titulo: "Conócete a ti Mismo",
  grado: 11,
  filtro_pedagogico: "Grado 11 — Metafísica Racional: anatomía técnica completa del ser humano como trinidad cuerpo-alma-espíritu",
  filtro_filosofico: "La trinidad no es religiosa. Es la estructura técnica del ser. Solo el espíritu es eterno y responsable. El alma es temporal. El cuerpo es el instrumento.",
  eje_central: "El libro más técnico de la obra: define qué es la vida, el espíritu, el alma, el cuerpo, las leyes del universo, los tipos de mundos, la historia de la humanidad y las religiones. La síntesis completa de toda la doctrina.",
  transicion_desde: "Los Extremos se Tocan (Grado 10) — comprendida la historia; ahora se conoce el protagonista de esa historia: el espíritu individual.",
  transicion_hacia: "Código de Amor Universal (Grado 12) — conocido el ser, se codifica la ley de su convivencia social.",

  // Mapa completo por capítulos — cada uno con todos sus párrafos y sub-ideas atómicas
  capitulos: [
    CTM_CAP1_VIDA,
    CTM_CAP2_ESPIRITU,
    CTM_CAP3_LEYES_UNIVERSO,
    CTM_CAP4_CREACION,
    CTM_CAP5_CUERPO,
    CTM_CAP6_HOMBRE,
    CTM_CAP7_GRADOS_RELIGIONES,
    CTM_CAPS8_9_10
  ],

  // Índice rápido de búsqueda por palabras clave → capítulo + párrafo
  indice_rapido: {
    "vida": { cap: 1, parrafo: "p1_que_es_la_vida" },
    "alma temporaria": { cap: 1, parrafo: "p7_alma_vida_temporal" },
    "alma inmortal": { cap: 1, parrafo: "p7_alma_vida_temporal", nota: "REFUTAR: alma NO es inmortal" },
    "responsabilidad espiritu": { cap: 1, parrafo: "p10_solo_espiritu_responsable" },
    "que es espiritu": { cap: 2, parrafo: "p1_que_es_espiritu" },
    "espiritu sin sexo": { cap: 2, parrafo: "p3_naturaleza_espiritu" },
    "espiritu sin raza": { cap: 2, parrafo: "p3_naturaleza_espiritu" },
    "leyes espiritu": { cap: 2, parrafo: "p4_leyes_espiritu" },
    "reencarnacion": { cap: 2, parrafo: "p4_leyes_espiritu", idea: "ley_equilibrio_reencarnacion" },
    "karma": { cap: 2, parrafo: "p4_leyes_espiritu", nota: "REFUTAR karma retributivo; aceptar equilibrio individual" },
    "commune fin mundos": { cap: 2, parrafo: "p8_que_es_la_commune" },
    "ley de amor": { cap: 3, parrafo: "p1_ley_unica_amor" },
    "ley de afinidad": { cap: 3, parrafo: "p2_leyes_derivadas_fatales" },
    "ley de justicia": { cap: 3, parrafo: "p2_leyes_derivadas_fatales" },
    "tipos de mundos": { cap: 4, parrafo: "p6_sacrificio_espiritu_mundos" },
    "mundos de prueba": { cap: 4, parrafo: "p6_sacrificio_espiritu_mundos" },
    "sufrimiento causa": { cap: 4, parrafo: "p6_sacrificio_espiritu_mundos", idea: "causas_sufrimiento_espiritu" },
    "espiritu forma cuerpo": { cap: 5, parrafo: "p1_espiritu_forma_cuerpo" },
    "salud enfermedad espiritu": { cap: 5, parrafo: "p3_salud_enfermedades_espiritu" },
    "razas igualdad": { cap: 5, parrafo: "p5_razas_colores" },
    "tierra nadie propietario": { cap: 5, parrafo: "p6_continentes_nadie_propietario" },
    "trinity cuerpo alma espiritu": { cap: 6, parrafo: "p5_hombre_vive_trinidad" },
    "mal no es satanas": { cap: 6, parrafo: "p6_mal_bien_donde_comienza" },
    "commune sociedad completa": { cap: 6, parrafo: "p8_sociedades_parciales_termino" },
    "religiones ignorancia": { cap: 7, parrafo: "religiones_en_general" },
    "jesus esenico": { cap: 7, parrafo: "moises_jesus" },
    "caridad baldon": { cap: 7, parrafo: "caridad_religiosa_baldon" },
    "castigo no educa": { cap: 8, parrafo: "p7_hombre_no_corrige_castigo" },
    "pena de muerte": { cap: 8, parrafo: "p8_hombre_no_puede_castigar" },
    "nadie desheredado": { cap: 8, parrafo: "p9_hombre_nunca_desheredado" },
    "trabajo ley natural": { cap: 9, parrafo: "p10_trabajo_ley_inexorable" },
    "trinidad cosmica": { cap: 10, parrafo: "p1_eloi_espiritu_vida" },
    "mundo regenerado": { cap: 10, parrafo: "p10_mundo_regenerado" }
  }
};
