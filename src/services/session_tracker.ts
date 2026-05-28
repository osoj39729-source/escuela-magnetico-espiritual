/**
 * RASTREADOR DE SESIONES — EMECU
 * Registra cada sesión de estudio: duración, modo, tema y geografía.
 * Combina la IP real del usuario (ip-api.com) + datos del registro.
 * El estudiante nunca ve este registro.
 */

import { db } from '../firebase';
import {
  collection, addDoc, doc, updateDoc, serverTimestamp, getDoc, setDoc
} from 'firebase/firestore';
import { crearPerfilInicial } from './cognitive_engine';

// ── Tipos ─────────────────────────────────────────────────────────────────────

export interface RegistroSesion {
  uid: string;
  nombre: string;
  email: string;
  fechaInicio: string;
  fechaFin?: string;
  duracionMinutos?: number;
  modo: 'curriculum' | 'library';
  grado?: number | null;
  leccion?: number | null;
  libro?: string | null;
  temaEstudiado?: string | null;
  interacciones: number;
  calificacionSesion?: number;
  // Geografía combinada
  paisRegistro: string;
  ciudadRegistro: string;
  regionRegistro: string;
  paisIP?: string;
  ciudadIP?: string;
  regionIP?: string;
  ipDetectada?: string;
  latitud?: number;
  longitud?: number;
}

// ── Estado interno de sesión activa ──────────────────────────────────────────
let sesionActivaId: string | null = null;
let sesionInicio: number = 0;
let interaccionesEnSesion: number = 0;
let puntajesSesion: number[] = [];

// ── Obtener geografía por IP ──────────────────────────────────────────────────
async function obtenerGeoIP(): Promise<{
  pais: string; ciudad: string; region: string;
  ip: string; lat: number; lon: number;
} | null> {
  try {
    // Usar ipapi.co que soporta HTTPS de forma gratuita para peticiones básicas
    const res = await fetch('https://ipapi.co/json/', {
      signal: AbortSignal.timeout(3000)
    });
    const data = await res.json();
    return {
      pais: data.country_name || data.country || '',
      ciudad: data.city || '',
      region: data.region || '',
      ip: data.ip || '',
      lat: data.latitude || 0,
      lon: data.longitude || 0,
    };
  } catch {
    // Silencioso si el servicio no responde
  }
  return null;
}

// ── Obtener datos geográficos del perfil de registro ─────────────────────────
async function obtenerGeoRegistro(uid: string): Promise<{
  pais: string; ciudad: string; region: string;
}> {
  try {
    const snap = await getDoc(doc(db, 'students', uid));
    if (snap.exists()) {
      const data = snap.data();
      return {
        pais: data.nationality || data.pais || '',
        ciudad: data.ciudad || data.address?.split(',')[0] || '',
        region: data.region || '',
      };
    }
  } catch { /**/ }
  return { pais: '', ciudad: '', region: '' };
}

// ── Iniciar una nueva sesión de estudio ───────────────────────────────────────
export async function iniciarSesion(params: {
  uid: string;
  nombre: string;
  email: string;
  modo: 'curriculum' | 'library';
  grado?: number | null;
  leccion?: number | null;
  libro?: string | null;
  tema?: string | null;
}): Promise<void> {
  try {
    sesionInicio = Date.now();
    interaccionesEnSesion = 0;
    puntajesSesion = [];

    const [geoIP, geoReg] = await Promise.all([
      obtenerGeoIP(),
      obtenerGeoRegistro(params.uid)
    ]);

    const registro: RegistroSesion = {
      uid: params.uid,
      nombre: params.nombre,
      email: params.email,
      fechaInicio: new Date().toISOString(),
      modo: params.modo,
      grado: params.grado ?? null,
      leccion: params.leccion ?? null,
      libro: params.libro ?? null,
      temaEstudiado: params.tema ?? null,
      interacciones: 0,
      // Geo registro
      paisRegistro: geoReg.pais,
      ciudadRegistro: geoReg.ciudad,
      regionRegistro: geoReg.region,
      // Geo IP
      paisIP: geoIP?.pais || '',
      ciudadIP: geoIP?.ciudad || '',
      regionIP: geoIP?.region || '',
      ipDetectada: geoIP?.ip || '',
      latitud: geoIP?.lat || 0,
      longitud: geoIP?.lon || 0,
    };

    const ref = await addDoc(collection(db, 'sessions'), {
      ...registro,
      timestamp: serverTimestamp(),
    });

    sesionActivaId = ref.id;

    // También incrementar contador de sesiones en el perfil cognitivo
    const cogRef = doc(db, 'students', params.uid, 'cognitive', 'profile');
    const cogSnap = await getDoc(cogRef);
    if (cogSnap.exists()) {
      await updateDoc(cogRef, {
        sesionesTotal: (cogSnap.data().sesionesTotal || 0) + 1,
        ultimaSesion: new Date().toISOString(),
      });
    } else {
      // Crear el perfil cognitivo inicial inmediatamente en la primera sesión
      const perfilInicial = crearPerfilInicial();
      perfilInicial.sesionesTotal = 1;
      perfilInicial.ultimaSesion = new Date().toISOString();
      await setDoc(cogRef, perfilInicial);
    }
  } catch (err) {
    console.error('[SessionTracker] Error al iniciar sesión:', err);
  }
}

// ── Registrar una interacción (se llama tras cada mensaje del estudiante) ──────
export function registrarInteraccion(puntaje?: number): void {
  interaccionesEnSesion++;
  if (puntaje !== undefined) puntajesSesion.push(puntaje);
}

// ── Actualizar tema/modo en sesión activa ─────────────────────────────────────
export async function actualizarTemaEnSesion(params: {
  modo?: 'curriculum' | 'library';
  libro?: string | null;
  tema?: string | null;
  grado?: number | null;
  leccion?: number | null;
}): Promise<void> {
  if (!sesionActivaId) return;
  try {
    const updateData: Record<string, unknown> = {};
    if (params.modo !== undefined) updateData.modo = params.modo;
    if (params.libro !== undefined) updateData.libro = params.libro;
    if (params.tema !== undefined) updateData.temaEstudiado = params.tema;
    if (params.grado !== undefined) updateData.grado = params.grado;
    if (params.leccion !== undefined) updateData.leccion = params.leccion;
    await updateDoc(doc(db, 'sessions', sesionActivaId), updateData);
  } catch { /**/ }
}

// ── Cerrar la sesión activa ───────────────────────────────────────────────────
export async function cerrarSesion(): Promise<void> {
  if (!sesionActivaId || sesionInicio === 0) return;
  try {
    const duracion = Math.round((Date.now() - sesionInicio) / 60000);
    const puntajeMedio = puntajesSesion.length > 0
      ? puntajesSesion.reduce((a, b) => a + b, 0) / puntajesSesion.length
      : undefined;

    await updateDoc(doc(db, 'sessions', sesionActivaId), {
      fechaFin: new Date().toISOString(),
      duracionMinutos: duracion,
      interacciones: interaccionesEnSesion,
      ...(puntajeMedio !== undefined && { calificacionSesion: Math.round(puntajeMedio) }),
    });

    sesionActivaId = null;
    sesionInicio = 0;
    interaccionesEnSesion = 0;
    puntajesSesion = [];
  } catch (err) {
    console.error('[SessionTracker] Error al cerrar sesión:', err);
  }
}
