
// ÍNDICE MAESTRO - Código de Amor Universal (Grado 12)
// Unificación de la estructura atómica para RAG

import { CAU_PRINCIPIOS } from './cap1_3_principios';
import { CAU_FAMILIA } from './cap4_familia';
import { CAU_UNION } from './cap5_union';
import { CAU_INSTITUCIONES } from './cap6_7_instituciones';
import { CAU_SOCIEDAD } from './cap8_sociedad';
import { CAU_PROPIEDAD } from './cap9_propiedad';
import { CAU_TRIUNFO } from './cap10_triunfo';

export const CODIGO_AMOR_UNIVERSAL_MAP = {
  book_id: "codigo-de-amor-universal",
  titulo: "Código de Amor Universal",
  grado: 12,
  filtro_pedagogico: "Grado 12 — Ley y Constitución: La carta magna de la Comuna Universal.",
  eje_central: "La codificación definitiva de las leyes que regirán la nueva sociedad. Define la familia, el matrimonio, la propiedad, el trabajo y la justicia bajo el único mandato del Amor Fraternal.",
  
  secciones: [
    CAU_PRINCIPIOS,
    CAU_FAMILIA,
    CAU_UNION,
    CAU_INSTITUCIONES,
    CAU_SOCIEDAD,
    CAU_PROPIEDAD,
    CAU_TRIUNFO
  ],

  indice_rapido: {
    "constitucion": { ref: "amor_constitucion_unica" },
    "celibato": { ref: "celibato_crimen_cau" },
    "maternidad": { ref: "casas_maternidad_comunales" },
    "matrimonio": { ref: "matrimonio_dogmatico_nulo" },
    "divorcio": { ref: "matrimonio_dogmatico_nulo" },
    "clases sociales": { ref: "sociedad_sin_clases" },
    "racismo": { ref: "razas_division_antinatural" },
    "propiedad": { ref: "propiedad_material_no_existe_ley" },
    "comuna": { ref: "commune_regimen_creador" },
    "ejercitos": { ref: "ejercitos_guerra_crimen" },
    "jueces": { ref: "criminologia_causas_sociales" }
  }
};
