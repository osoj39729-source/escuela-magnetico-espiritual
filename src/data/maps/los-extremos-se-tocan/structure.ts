
// ÍNDICE MAESTRO — Los Extremos se Tocan (VERSIÓN CONSOLIDADA v2)
// ─────────────────────────────────────────────────────────────────
// Cambio respecto a versión anterior:
//   ANTES: 4 archivos LEST_* (142 líneas activas, 715 huérfanas ignoradas)
//   AHORA: 9 segmentos con cobertura completa de los 34 capítulos
//
// Cobertura por segmento:
//   seg0 → Premisas / Prefacio / Prólogo / Dos Polos
//   seg1 → Cap I-II: Amor y Leyes Fatales
//   seg2 → Cap III-IV: Adán, Eva y el Sánscrito (NUEVO — era huérfano)
//   seg3 → Cap V-VI: De Adán a Jesús (NUEVO — era huérfano)
//   seg4 → Cap VII-X: Constantino a Napoleón (NUEVO — era huérfano)
//   seg5 → Cap XI-XII: Siglo XIX y Balcanes (NUEVO — era huérfano)
//   seg6 → Cap XIII-XVIII: La Gran Guerra (consolidado LEST+EST)
//   seg7 → Cap XIX-XXIV: Limpieza y Nueva Era (NUEVO — era huérfano)
//   seg8 → Cap XXV-XXXIV: La Commune y el Cierre (consolidado LEST+EST)

import { LEST_SEG0_PREMISAS }           from './seg0_premisas_prefacio';
import { LEST_SEG1_AMOR_LEYES }         from './seg1_amor_leyes_fatales';
import { LEST_SEG2_ORIGENES }           from './seg2_origenes_adan_sanscrito';
import { LEST_SEG3_ADAN_JESUS }         from './seg3_adan_a_jesus';
import { LEST_SEG4_CONSTANTINO_NAPOLEON } from './seg4_constantino_napoleon';
import { LEST_SEG5_SIGLO_XIX_BALCANES } from './seg5_siglo_xix_balcanes';
import { LEST_SEG6_GRAN_GUERRA }        from './seg6_gran_guerra';
import { LEST_SEG7_LIMPIEZA_NUEVA_ERA } from './seg7_limpieza_nueva_era';
import { LEST_SEG8_COMMUNE_CIERRE }     from './seg8_commune_cierre';

export const LOS_EXTREMOS_SE_TOCAN_MAP = {
  book_id: "los-extremos-se-tocan",
  titulo: "Los Extremos se Tocan",
  grado: 10,
  filtro_pedagogico: "Grado 10 — Sociología Espiritual: El arco histórico completo de la humanidad.",
  eje_central: "Una obra maestra de la sociología espiritual. Analiza cómo el dogmatismo y el materialismo han llevado a la humanidad a la guerra, trazando el arco histórico desde Adán hasta el Día del Amor. Propone la unificación bajo el mandato único: 'Ama a tu hermano' y el establecimiento de la Comuna Universal.",

  secciones: [
    LEST_SEG0_PREMISAS,
    LEST_SEG1_AMOR_LEYES,
    LEST_SEG2_ORIGENES,
    LEST_SEG3_ADAN_JESUS,
    LEST_SEG4_CONSTANTINO_NAPOLEON,
    LEST_SEG5_SIGLO_XIX_BALCANES,
    LEST_SEG6_GRAN_GUERRA,
    LEST_SEG7_LIMPIEZA_NUEVA_ERA,
    LEST_SEG8_COMMUNE_CIERRE
  ],

  indice_rapido: {
    // Conceptos del libro
    "ley del amor":           { seg: "seg1", ref: "amor_ley_fisica" },
    "leyes fatales":          { seg: "seg1", ref: "ley_afinidad_est" },
    "leyes fatales afinidad": { seg: "seg1", ref: "ley_afinidad_est" },
    "ley compensacion":       { seg: "seg1", ref: "ley_compensacion_est" },
    "adan y eva":             { seg: "seg2", ref: "adan_biblico_vs_real" },
    "sanscrito shet":         { seg: "seg2", ref: "sanscrito_primer_codigo" },
    "ley de shet":            { seg: "seg2", ref: "ley_de_shet" },
    "moises prohibio espiritismo": { seg: "seg3", ref: "prohibicion_espiritismo_moises" },
    "juan bautista magnetismo":    { seg: "seg3", ref: "juan_bautista_mision" },
    "constantino":            { seg: "seg4", ref: "constantino_usurpador" },
    "concilio nicea":         { seg: "seg4", ref: "constantino_usurpador" },
    "gregorio celibato":      { seg: "seg4", ref: "gregorio_vii_celibato" },
    "america libertad":       { seg: "seg4", ref: "descubrimiento_america_mision" },
    "revolucion francesa":    { seg: "seg4", ref: "revolucion_francesa_espiritu" },
    "napoleon":               { seg: "seg4", ref: "napoleon_misionero_inconsciente" },
    "espiritismo moderno":    { seg: "seg5", ref: "nacimiento_espiritismo_moderno" },
    "infalibilidad papal":    { seg: "seg5", ref: "infalibilidad_papal_reaccion" },
    "primera guerra":         { seg: "seg6", ref: "tierra_lodo_sangre" },
    "causa guerra":           { seg: "seg6", ref: "culpables_religiosos_guerra" },
    "dogma trono propiedad":  { seg: "seg6", ref: "trinidad_culpabilidad" },
    "culpables guerra":       { seg: "seg6", ref: "trinidad_culpabilidad" },
    "dia del amor":           { seg: "seg7", ref: "dia_del_amor_civilizacion" },
    "mision escuela":         { seg: "seg7", ref: "mision_emecu" },
    "eloi propietario":       { seg: "seg8", ref: "eloi_unico_propietario" },
    "propiedad privada":      { seg: "seg8", ref: "eloi_unico_propietario" },
    "ama a tu hermano":       { seg: "seg8", ref: "solo_mandato_ama" },
    "universo solidarizado":  { seg: "seg8", ref: "universo_solidarizado" },
    "extremos se tocan":      { seg: "seg0", ref: "extremos_se_tocan_tesis" },
    "premisa":                { seg: "seg0", ref: "foco_luz_potente" },
    "mandato":                { seg: "seg0", ref: "mandato_ama_hermano" }
  },

  // Archivos obsoletos que ya NO deben usarse (mantener como referencia histórica)
  _archivos_deprecados: [
    "cap1_2_principios.ts  → reemplazado por seg1_amor_leyes_fatales.ts",
    "cap3_11_historia.ts   → reemplazado por seg2+seg3+seg4+seg5",
    "cap12_18_catastrofe.ts → reemplazado por seg6_gran_guerra.ts",
    "cap19_38_futuro.ts    → reemplazado por seg7+seg8",
    "cap1_2_leyes.ts (huérfano)         → fusionado en seg1",
    "cap3_4_origenes.ts (huérfano)      → fusionado en seg2",
    "cap5_6_transicion.ts (huérfano)    → fusionado en seg3",
    "cap7_8_secuestro.ts (huérfano)     → fusionado en seg4",
    "cap9_10_revolucion.ts (huérfano)   → fusionado en seg4",
    "cap11_12_preparacion.ts (huérfano) → fusionado en seg5",
    "cap13_17_guerra.ts (huérfano)      → fusionado en seg6",
    "cap18_20_limpieza.ts (huérfano)    → fusionado en seg6+seg7",
    "cap21_24_nueva_era.ts (huérfano)   → fusionado en seg7",
    "cap25_29_regeneracion.ts (huérfano)→ fusionado en seg8",
    "cap30_34_finales.ts (huérfano)     → fusionado en seg8",
    "premisas_prefacio.ts (huérfano)    → fusionado en seg0"
  ]
};
