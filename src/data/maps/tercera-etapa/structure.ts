
// ÍNDICE MAESTRO - Tercera Etapa
// Unificación de la estructura atómica para RAG

import { TE_COMENTARIO } from './cap1_comentario';
import { TE_FUNDACION } from './cap2_fundacion';
import { TE_SEPTIES } from './cap3_septies';

export const TERCERA_ETAPA_MAP = {
  book_id: "tercera-etapa",
  titulo: "Tercera Etapa",
  grado: "Histórico-Documental",
  filtro_pedagogico: "Historia de la Escuela: El nacimiento del nuevo ciclo (1916).",
  eje_central: "El diario de la transición de la Tierra hacia la regeneración. Documenta los fenómenos astronómicos de 1916, la inauguración de la EMECU (19 de marzo) y el acto supremo del 'Septies' (el perdón infinito), contrastando la paz de la Escuela con el caos de la Primera Guerra Mundial.",
  
  secciones: [
    TE_COMENTARIO,
    TE_FUNDACION,
    TE_SEPTIES
  ],

  indice_rapido: {
    "19 de marzo": { ref: "emecu_base_comuna" },
    "perihelio": { ref: "tierra_orbita_pura" },
    "fenomenos 1916": { ref: "tierra_orbita_pura" },
    "perdon": { ref: "vencerse_a_si_mismo" },
    "septies": { ref: "vencerse_a_si_mismo" },
    "comuna": { ref: "ley_una_substancia_una" },
    "mariana": { ref: "perdon_instrumento_prevaricador" }
  }
};
