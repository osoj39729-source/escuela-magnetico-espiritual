/**
 * Servicio de validación por esencias
 * Implementa la lógica para validar la comprensión del estudiante
 * basándose en las esencias (ideas principales) de cada lección
 */

import { VALIDATION_CONFIG } from '../config/validationConfig';
import { db } from '../firebase';
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';

// ============================================================
// TIPOS
// ============================================================

export interface EssenceData {
  PilotoDeCoherencia: string;
  CitaInelutable: string;
  EjemploPedagogico: string;
  NodosSinapticos: string[];
  IdeasPrincipales: string[];
  PuntosImportantes: string[];
}

export interface ValidationResult {
  aprobado: boolean;
  asertividad: number;
  ideasDetectadas: string[];
  ideasFaltantes: string[];
}

// ============================================================
// FUNCIONES DE CONFIGURACIÓN
// ============================================================

/**
 * Determina si la validación por esencias debe aplicarse a una lección específica
 * EXCLUSIÓN: Grado 1 Lección 1 mantiene su protocolo actual
 */
export function debeAplicarValidacion(grado: number, leccion: number): boolean {
  // Exclusión explícita: Grado 1 Lección 1
  if (VALIDATION_CONFIG.GRADO_1_LECCION_1_EXCLUIDA && grado === 1 && leccion === 1) {
    return false;
  }

  // Verificar si el grado está incluido
  if (!VALIDATION_CONFIG.GRADOS_INCLUIDOS.includes(grado)) {
    return false;
  }

  // Verificar si la lección está en la lista de exclusiones específicas
  const excluida = VALIDATION_CONFIG.LECCIONES_EXCLUIDAS.some(
    (ex) => ex.grado === grado && ex.leccion === leccion
  );
  if (excluida) {
    return false;
  }

  return true;
}

// ============================================================
// FUNCIONES DE CÁLCULO DE ASERTIVIDAD
// ============================================================

/**
 * Normaliza texto para comparación: minúsculas, sin acentos, sin puntuación
 */
function normalizarTexto(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, "")
    .trim();
}

/**
 * Verifica si una idea está presente en la respuesta del estudiante
 * Considera que al menos 70% de las palabras clave de la idea deben estar en la respuesta
 */
function verificarPresencia(respuesta: string, idea: string): boolean {
  const palabrasIdea = idea.split(/\s+/).filter((w) => w.length > 3);
  const palabrasRespuesta = respuesta.split(/\s+/);

  if (palabrasIdea.length === 0) return false;

  let coincidenciasPalabras = 0;
  for (const palabra of palabrasIdea) {
    if (
      palabrasRespuesta.some(
        (p) => p.includes(palabra) || palabra.includes(p)
      )
    ) {
      coincidenciasPalabras++;
    }
  }

  const ratio = coincidenciasPalabras / palabrasIdea.length;
  return ratio >= 0.7;
}

/**
 * Calcula el porcentaje de asertividad de una respuesta
 * comparándola con las ideas clave de la esencia
 */
export function calcularAsertividad(
  respuesta: string,
  ideasClave: string[]
): number {
  if (!ideasClave || ideasClave.length === 0) {
    return 0;
  }

  const respuestaNormalizada = normalizarTexto(respuesta);
  let coincidencias = 0;
  const ideasDetectadas: string[] = [];
  const ideasFaltantes: string[] = [];

  for (const idea of ideasClave) {
    const ideaNormalizada = normalizarTexto(idea);
    if (verificarPresencia(respuestaNormalizada, ideaNormalizada)) {
      coincidencias++;
      ideasDetectadas.push(idea);
    } else {
      ideasFaltantes.push(idea);
    }
  }

  const asertividad = (coincidencias / ideasClave.length) * 100;

  if (VALIDATION_CONFIG.MODO_DEBUG) {
    console.log('[EssenceValidator] Asertividad:', asertividad.toFixed(2) + '%');
    console.log('[EssenceValidator] Ideas detectadas:', ideasDetectadas);
    console.log('[EssenceValidator] Ideas faltantes:', ideasFaltantes);
  }

  return asertividad;
}

/**
 * Valida una respuesta del estudiante contra las ideas clave
 * Retorna objeto con resultado detallado
 */
export function validarRespuesta(
  respuesta: string,
  ideasClave: string[]
): ValidationResult {
  const asertividad = calcularAsertividad(respuesta, ideasClave);
  const aprobado = asertividad >= VALIDATION_CONFIG.UMBRAL_APROBACION;

  const respuestaNormalizada = normalizarTexto(respuesta);
  const ideasDetectadas: string[] = [];
  const ideasFaltantes: string[] = [];

  for (const idea of ideasClave) {
    const ideaNormalizada = normalizarTexto(idea);
    if (verificarPresencia(respuestaNormalizada, ideaNormalizada)) {
      ideasDetectadas.push(idea);
    } else {
      ideasFaltantes.push(idea);
    }
  }

  return {
    aprobado,
    asertividad,
    ideasDetectadas,
    ideasFaltantes,
  };
}

// ============================================================
// FUNCIONES DE TRACKING EN FIREBASE
// ============================================================

/**
 * Obtiene el contador de interacciones en la lección actual
 */
export async function contarInteraccionesEnLeccion(
  uid: string,
  grado: number,
  leccion: number
): Promise<number> {
  try {
    const docRef = doc(db, 'students', uid, 'validation', 'current');
    const snap = await getDoc(docRef);

    if (snap.exists()) {
      const data = snap.data();
      // Solo contar si es la misma lección
      if (data.grado === grado && data.leccion === leccion) {
        return data.interaccionesEnLeccion || 0;
      }
    }

    return 0;
  } catch (error) {
    console.error('[EssenceValidator] Error al contar interacciones:', error);
    return 0;
  }
}

/**
 * Incrementa el contador de interacciones en la lección actual
 */
export async function incrementarInteraccionesEnLeccion(
  uid: string,
  grado: number,
  leccion: number
): Promise<void> {
  try {
    const docRef = doc(db, 'students', uid, 'validation', 'current');
    const snap = await getDoc(docRef);

    if (snap.exists()) {
      const data = snap.data();
      // Si es la misma lección, incrementar
      if (data.grado === grado && data.leccion === leccion) {
        await updateDoc(docRef, {
          interaccionesEnLeccion: (data.interaccionesEnLeccion || 0) + 1,
        });
      } else {
        // Nueva lección, reiniciar contador
        await setDoc(docRef, {
          grado,
          leccion,
          interaccionesEnLeccion: 1,
          modoValidacionIntensiva: false,
          intentosValidacion: 0,
        });
      }
    } else {
      // Primer registro
      await setDoc(docRef, {
        grado,
        leccion,
        interaccionesEnLeccion: 1,
        modoValidacionIntensiva: false,
        intentosValidacion: 0,
      });
    }
  } catch (error) {
    console.error('[EssenceValidator] Error al incrementar interacciones:', error);
  }
}

/**
 * Activa el modo de validación intensiva
 */
export async function activarModoValidacionIntensiva(
  uid: string,
  grado: number,
  leccion: number
): Promise<void> {
  try {
    const docRef = doc(db, 'students', uid, 'validation', 'current');
    await updateDoc(docRef, {
      modoValidacionIntensiva: true,
    });

    if (VALIDATION_CONFIG.MODO_DEBUG) {
      console.log('[EssenceValidator] Modo de validación intensiva activado para G', grado, 'L', leccion);
    }
  } catch (error) {
    console.error('[EssenceValidator] Error al activar modo validación:', error);
  }
}

/**
 * Verifica si el modo de validación intensiva está activo
 */
export async function estaModoValidacionIntensiva(
  uid: string,
  grado: number,
  leccion: number
): Promise<boolean> {
  try {
    const docRef = doc(db, 'students', uid, 'validation', 'current');
    const snap = await getDoc(docRef);

    if (snap.exists()) {
      const data = snap.data();
      return (
        data.modoValidacionIntensiva === true &&
        data.grado === grado &&
        data.leccion === leccion
      );
    }

    return false;
  } catch (error) {
    console.error('[EssenceValidator] Error al verificar modo validación:', error);
    return false;
  }
}

/**
 * Reinicia el contador cuando se cambia de lección
 */
export async function reiniciarContadorLeccion(
  uid: string,
  nuevoGrado: number,
  nuevaLeccion: number
): Promise<void> {
  try {
    const docRef = doc(db, 'students', uid, 'validation', 'current');
    await setDoc(docRef, {
      grado: nuevoGrado,
      leccion: nuevaLeccion,
      interaccionesEnLeccion: 0,
      modoValidacionIntensiva: false,
      intentosValidacion: 0,
    });

    if (VALIDATION_CONFIG.MODO_DEBUG) {
      console.log('[EssenceValidator] Contador reiniciado para G', nuevoGrado, 'L', nuevaLeccion);
    }
  } catch (error) {
    console.error('[EssenceValidator] Error al reiniciar contador:', error);
  }
}

/**
 * Incrementa el contador de intentos de validación
 */
export async function incrementarIntentosValidacion(
  uid: string
): Promise<void> {
  try {
    const docRef = doc(db, 'students', uid, 'validation', 'current');
    const snap = await getDoc(docRef);

    if (snap.exists()) {
      const data = snap.data();
      await updateDoc(docRef, {
        intentosValidacion: (data.intentosValidacion || 0) + 1,
      });
    }
  } catch (error) {
    console.error('[EssenceValidator] Error al incrementar intentos:', error);
  }
}
