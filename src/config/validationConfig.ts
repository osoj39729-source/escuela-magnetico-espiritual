/**
 * Configuración del sistema de validación por esencias
 * Define parámetros para el modo de validación intensiva
 */

export const VALIDATION_CONFIG = {
  // Número mínimo de interacciones antes de activar el modo de validación intensiva
  INTERACCIONES_MINIMAS: 10,

  // Techo de seguridad universal: fuerza pass_lesson tras este número de interacciones
  TECHO_SEGURIDAD_UNIVERSAL: 15,

  // Porcentaje de asertividad requerido para aprobar la lección
  UMBRAL_APROBACION: 60,

  // Exclusión explícita: Grado 1 Lección 1 mantiene su protocolo actual
  GRADO_1_LECCION_1_EXCLUIDA: true,

  // Modo debug para ver logs de validación en consola
  MODO_DEBUG: false,

  // Grados donde aplicar el sistema (todos por defecto)
  GRADOS_INCLUIDOS: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],

  // Lecciones específicas a excluir (array vacío = ninguna)
  LECCIONES_EXCLUIDAS: [] as Array<{ grado: number; leccion: number }>,
};
