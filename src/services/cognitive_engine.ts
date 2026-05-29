/**
 * MOTOR COGNITIVO INVISIBLE — EMECU
 * Basado en las 7 Facultades del Espíritu de Joaquín Trincado.
 * Se ejecuta en silencio tras cada respuesta del estudiante.
 * El estudiante NUNCA sabe que está siendo evaluado.
 *
 * Escala: 0 (nulo) → 100 (maestría)
 * Nivel inicial de todo estudiante nuevo: 30 / 100
 */

import { db, auth } from '../firebase';
import {
  doc, getDoc, setDoc, updateDoc, serverTimestamp, collection, addDoc
} from 'firebase/firestore';

// ── Mapa de Traducción Maestro para Consistencia de Datos ────────────────────
export const TRADUCCION_FACULTADES: Record<string, string> = {
  // Español (Usado en el motor local y en el backend de IA en español)
  inteligenciaPerceptiva: 'perceptiveIntelligence',
  memoria: 'memory',
  imaginacion: 'imagination',
  atencion: 'attention',
  razon: 'reason',
  juicio: 'judgment',
  voluntad: 'will',

  // Legado de variables antiguas (Evita fallos con registros o lógicas obsoletas)
  Rationality: 'reason',
  Morality: 'judgment',
  Spirituality: 'will',
  Philosophy: 'perceptiveIntelligence',
  Magnetism: 'imagination',
  Evolution: 'attention',
  Memory: 'memory'
};

// ── Tipos ─────────────────────────────────────────────────────────────────────


export interface FacultadMedicion {
  nivel: number;          // 0-100
  tendencia: 'ascendente' | 'estable' | 'descendente';
  ultimaActualizacion: string;
}

export interface PerfilCognitivo {
  gradoInteligencia: 'Iniciado' | 'En Desarrollo' | 'Avanzado' | 'Maestría';
  puntajeGlobal: number;  // 0-100 (promedio ponderado de las 7 facultades)
  sesionesTotal: number;
  interaccionesTotal: number;
  ultimaSesion: string;
  facultades: {
    inteligenciaPerceptiva: FacultadMedicion;
    memoria: FacultadMedicion;
    imaginacion: FacultadMedicion;
    atencion: FacultadMedicion;
    razon: FacultadMedicion;
    juicio: FacultadMedicion;
    voluntad: FacultadMedicion;
  };
  conceptosDominados: string[];
  zonasEstancamiento: string[];
  historialNiveles: {
    fecha: string;
    puntajeGlobal: number;
    facultades: Record<string, number>;
  }[];
}

// ── Pesos por facultad (suman 100) ────────────────────────────────────────────
// Trincado da más peso a Razón y Juicio como pilares del espíritu libre
const PESOS_FACULTADES: Record<string, number> = {
  razon: 20,
  juicio: 20,
  inteligenciaPerceptiva: 15,
  atencion: 15,
  memoria: 12,
  imaginacion: 10,
  voluntad: 8,
};

// ── Perfil inicial para estudiante nuevo ──────────────────────────────────────
export function crearPerfilInicial(): PerfilCognitivo {
  const ahora = new Date().toISOString();
  return {
    gradoInteligencia: 'Iniciado',
    puntajeGlobal: 30,
    sesionesTotal: 0,
    interaccionesTotal: 0,
    ultimaSesion: ahora,
    facultades: {
      inteligenciaPerceptiva: { nivel: 30, tendencia: 'estable', ultimaActualizacion: ahora },
      memoria:                { nivel: 30, tendencia: 'estable', ultimaActualizacion: ahora },
      imaginacion:            { nivel: 30, tendencia: 'estable', ultimaActualizacion: ahora },
      atencion:               { nivel: 30, tendencia: 'estable', ultimaActualizacion: ahora },
      razon:                  { nivel: 30, tendencia: 'estable', ultimaActualizacion: ahora },
      juicio:                 { nivel: 30, tendencia: 'estable', ultimaActualizacion: ahora },
      voluntad:               { nivel: 30, tendencia: 'estable', ultimaActualizacion: ahora },
    },
    conceptosDominados: [],
    zonasEstancamiento: [],
    historialNiveles: [],
  };
}

// ── Completar perfil incompleto con valores por defecto (blindaje anti-undefined) ──
export function completarPerfilFaltante(perfilParcial: Partial<PerfilCognitivo>): PerfilCognitivo {
  const base = crearPerfilInicial();
  const ahora = new Date().toISOString();

  const facultadesBase = base.facultades;
  const facultadesParciales = perfilParcial.facultades || {};
  const NOMBRES_FACULTADES = ['inteligenciaPerceptiva','memoria','imaginacion','atencion','razon','juicio','voluntad'] as const;
  
  const facultadesCompletas = { ...facultadesBase };
  for (const nombre of NOMBRES_FACULTADES) {
    const fac = (facultadesParciales as any)[nombre];
    if (fac && typeof fac.nivel === 'number') {
      facultadesCompletas[nombre] = {
        nivel: fac.nivel,
        tendencia: fac.tendencia || 'estable',
        ultimaActualizacion: fac.ultimaActualizacion || ahora,
      };
    }
  }

  return {
    gradoInteligencia: perfilParcial.gradoInteligencia || 'Iniciado',
    puntajeGlobal: typeof perfilParcial.puntajeGlobal === 'number' ? perfilParcial.puntajeGlobal : 30,
    sesionesTotal: typeof perfilParcial.sesionesTotal === 'number' ? perfilParcial.sesionesTotal : 0,
    interaccionesTotal: typeof perfilParcial.interaccionesTotal === 'number' ? perfilParcial.interaccionesTotal : 0,
    ultimaSesion: perfilParcial.ultimaSesion || ahora,
    facultades: facultadesCompletas,
    conceptosDominados: Array.isArray(perfilParcial.conceptosDominados) ? perfilParcial.conceptosDominados : [],
    zonasEstancamiento: Array.isArray(perfilParcial.zonasEstancamiento) ? perfilParcial.zonasEstancamiento : [],
    historialNiveles: Array.isArray(perfilParcial.historialNiveles) ? perfilParcial.historialNiveles : [],
  };
}


// ── Análisis Semántico de Respuesta del Estudiante ────────────────────────────
function analizarRespuesta(
  mensajeEstudiante: string,
  preguntaProfesor: string,
  historialMensajes: { role: string; text: string }[]
): Record<string, number> {

  const texto = mensajeEstudiante.toLowerCase().trim();
  const palabras = texto.split(/\s+/).length;
  const deltas: Record<string, number> = {
    inteligenciaPerceptiva: 0,
    memoria: 0,
    imaginacion: 0,
    atencion: 0,
    razon: 0,
    juicio: 0,
    voluntad: 0,
  };

  // ── RAZÓN: conectores causales, relaciones causa-efecto ──
  const conectoresCausales = /\b(porque|por lo tanto|entonces|dado que|ya que|en consecuencia|por ende|de modo que|esto significa|lo que implica|se debe a|la causa es|el efecto|la ley|el principio)\b/g;
  const matchesCausal = (texto.match(conectoresCausales) || []).length;
  deltas.razon += Math.min(matchesCausal * 1.5, 5);

  // ── JUICIO: distinción moral, cuestionamiento racional ──
  const juicioPatrones = /\b(creo que|considero|no es correcto|es injusto|es justo|la ley indica|según la doctrina|el error es|la verdad es|sin embargo|en cambio|por el contrario|no coincide|difiero)\b/g;
  const matchesJuicio = (texto.match(juicioPatrones) || []).length;
  deltas.juicio += Math.min(matchesJuicio * 1.5, 5);

  // ── ATENCIÓN: coherencia con la pregunta del Profesor ──
  if (preguntaProfesor) {
    const palabrasClave = preguntaProfesor.toLowerCase()
      .split(/\s+/)
      .filter(p => p.length > 5)
      .slice(0, 5);
    const coincidencias = palabrasClave.filter(p => texto.includes(p)).length;
    deltas.atencion += coincidencias >= 2 ? 3 : coincidencias === 1 ? 1.5 : -1;
  }

  // ── MEMORIA: referencias a conceptos anteriores ──
  const mensajesAnteriores = historialMensajes
    .filter(m => m.role === 'professor')
    .map(m => m.text.toLowerCase())
    .join(' ');
  const conceptosDoctr = ['eloí', 'ley de afinidad', 'escuela', 'espíritu', 'facultad',
    'magnetismo', 'commune', 'procreación', 'desdoblamiento', 'telepatía',
    'trincado', 'espiritismo', 'justicia', 'moral', 'razón', 'conciencia'];
  const conceptosUsados = conceptosDoctr.filter(c => texto.includes(c) && mensajesAnteriores.includes(c));
  deltas.memoria += Math.min(conceptosUsados.length * 2, 6);

  // ── INTELIGENCIA PERCEPTIVA: analogías, síntesis, comprensión de metáforas ──
  const analogias = /\b(es como|similar a|se parece|al igual que|así como|podemos comparar|funciona igual|esto es análogo)\b/g;
  const matchesAnal = (texto.match(analogias) || []).length;
  deltas.inteligenciaPerceptiva += Math.min(matchesAnal * 2, 5);
  // Respuestas que sintetizan: más de 40 palabras con sustancia
  if (palabras >= 40) deltas.inteligenciaPerceptiva += 2;

  // ── IMAGINACIÓN: extrapolación, nuevos contextos, hipótesis ──
  const imaginacionPatrones = /\b(imagino que|si aplicáramos|en el futuro|podría significar|esto podría|en otro contexto|lo que sugiere|si pensamos en|llevando esto a)\b/g;
  const matchesImag = (texto.match(imaginacionPatrones) || []).length;
  deltas.imaginacion += Math.min(matchesImag * 2, 5);

  // ── VOLUNTAD: longitud y esfuerzo de la respuesta ──
  if (palabras >= 60) deltas.voluntad += 4;
  else if (palabras >= 30) deltas.voluntad += 2;
  else if (palabras <= 5) deltas.voluntad -= 2; // respuesta muy corta = poca voluntad

  // ── Límite de delta por sesión: max +6 min -3 por facultad ──
  Object.keys(deltas).forEach(k => {
    deltas[k] = Math.max(-3, Math.min(6, deltas[k]));
  });

  return deltas;
}

// ── Calcular puntaje global ponderado ─────────────────────────────────────────
function calcularPuntajeGlobal(facultades: PerfilCognitivo['facultades']): number {
  let total = 0;
  Object.entries(PESOS_FACULTADES).forEach(([key, peso]) => {
    const nivel = facultades[key as keyof typeof facultades]?.nivel || 30;
    total += (nivel * peso) / 100;
  });
  return Math.round(Math.min(100, Math.max(0, total)));
}

// ── Determinar grado de inteligencia ─────────────────────────────────────────
function calcularGradoInteligencia(puntaje: number): PerfilCognitivo['gradoInteligencia'] {
  if (puntaje >= 80) return 'Maestría';
  if (puntaje >= 60) return 'Avanzado';
  if (puntaje >= 40) return 'En Desarrollo';
  return 'Iniciado';
}

// ── Calcular tendencia ────────────────────────────────────────────────────────
function calcularTendencia(nivelAnterior: number, nivelNuevo: number): FacultadMedicion['tendencia'] {
  if (nivelNuevo > nivelAnterior + 0.5) return 'ascendente';
  if (nivelNuevo < nivelAnterior - 0.5) return 'descendente';
  return 'estable';
}

// ── Función Principal: Evaluar y Actualizar Firestore ─────────────────────────
export async function evaluarYActualizarPerfil(params: {
  uid: string;
  mensajeEstudiante: string;
  preguntaProfesor: string;
  historialMensajes: { role: string; text: string }[];
  temaActual?: string;
  gradoActual?: number;
  deltasOverride?: Record<string, number>; // Nueva opción para evaluación de IA
}): Promise<void> {
  const { uid, mensajeEstudiante, preguntaProfesor, historialMensajes, temaActual, gradoActual, deltasOverride } = params;
  if (!uid || (!mensajeEstudiante.trim() && !deltasOverride)) return;

  try {
    const profileRef = doc(db, 'students', uid, 'cognitive', 'profile');
    const snap = await getDoc(profileRef);

    // Siempre completar el perfil: si no existe, crear desde cero.
    // Si existe pero le faltan campos (perfiles antiguos), completar lo que falta.
    let perfil: PerfilCognitivo = completarPerfilFaltante(
      snap.exists() ? (snap.data() as Partial<PerfilCognitivo>) : {}
    );

    // Analizar la respuesta del estudiante (Priorizar IA sobre Heurística)
    const deltas = deltasOverride || analizarRespuesta(mensajeEstudiante, preguntaProfesor, historialMensajes);
    const ahora = new Date().toISOString();

    // Aplicar deltas a cada facultad (escala 0-100)
    const facultadesActualizadas = { ...perfil.facultades };
    Object.entries(deltas).forEach(([key, delta]) => {
      const fac = facultadesActualizadas[key as keyof typeof facultadesActualizadas];
      if (fac) {
        const nivelAnterior = fac.nivel;
        const nivelNuevo = Math.max(0, Math.min(100, fac.nivel + delta));
        facultadesActualizadas[key as keyof typeof facultadesActualizadas] = {
          nivel: nivelNuevo,
          tendencia: calcularTendencia(nivelAnterior, nivelNuevo),
          ultimaActualizacion: ahora,
        };
      }
    });

    // Calcular puntaje global y grado
    const puntajeGlobal = calcularPuntajeGlobal(facultadesActualizadas);
    const gradoInteligencia = calcularGradoInteligencia(puntajeGlobal);

    // Detectar conceptos dominados (nivel > 65)
    const conceptosDominados = Object.entries(facultadesActualizadas)
      .filter(([, f]) => f.nivel >= 65)
      .map(([k]) => k);

    // Detectar zonas de estancamiento (nivel < 40 después de 5+ interacciones)
    const interaccionesActuales = perfil.interaccionesTotal || 0;
    const zonasEstancamiento = (interaccionesActuales + 1) >= 5
      ? Object.entries(facultadesActualizadas)
          .filter(([, f]) => f.nivel < 40)
          .map(([k]) => k)
      : (perfil.zonasEstancamiento || []);

    // Agregar al historial (máximo 50 registros)
    const historialNiveles = [
      ...(perfil.historialNiveles || []).slice(-49),
      {
        fecha: ahora,
        puntajeGlobal,
        facultades: Object.fromEntries(
          Object.entries(facultadesActualizadas).map(([k, f]) => [k, f.nivel])
        ),
      },
    ];

    const perfilActualizado: PerfilCognitivo = {
      ...perfil,
      gradoInteligencia: gradoInteligencia || 'Iniciado',
      puntajeGlobal: puntajeGlobal || 0,
      interaccionesTotal: interaccionesActuales + 1,
      ultimaSesion: ahora,
      facultades: facultadesActualizadas,
      conceptosDominados: conceptosDominados || [],
      zonasEstancamiento: zonasEstancamiento || [],
      historialNiveles: historialNiveles || [],
    };

    // Objeto para la nueva interacción
    const nuevaInteraccion = {
      timestamp: ahora,
      mensaje: mensajeEstudiante ? mensajeEstudiante.substring(0, 500) : '',
      pregunta: preguntaProfesor ? preguntaProfesor.substring(0, 300) : '',
      deltas: deltas || {},
      puntajeGlobal: puntajeGlobal || 0,
      tema: temaActual || '',
      grado: gradoActual || null,
    };

    // Obtener Token de Autenticación
    const user = auth.currentUser;
    const token = user ? await user.getIdToken() : null;

    if (!token) {
      console.warn('[CognitiveEngine] No hay token de sesión válido, abortando guardado proxy.');
      return;
    }

    // Usar el Túnel HTTP Blindado (Vercel Backend)
    const response = await fetch('/api/sync-student', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token,
        uid,
        profilePayload: perfilActualizado,
        interactionPayload: nuevaInteraccion
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('[CognitiveEngine] El servidor rechazó el guardado proxy:', errText);
    }

  } catch (err) {
    // Error silencioso — no interrumpe el flujo del estudiante
    console.error('[CognitiveEngine] Error silencioso:', err);
  }
}

// ── Leer Perfil Cognitivo (para inyectar en el Profesor) ──────────────────────
export async function leerPerfilCognitivo(uid: string): Promise<PerfilCognitivo | null> {
  try {
    const snap = await getDoc(doc(db, 'students', uid, 'cognitive', 'profile'));
    return snap.exists() ? (snap.data() as PerfilCognitivo) : null;
  } catch {
    return null;
  }
}

// ── Construir Contexto Interno para el Profesor ───────────────────────────────
export function construirContextoProfesor(
  perfil: PerfilCognitivo | null,
  nombreEstudiante: string,
  grado: number,
  leccion: number,
  tema?: string
): string {
  if (!perfil) {
    // Contexto mínimo de emergencia: al menos le decimos al maestro en qué grado/lección está
    return `[MEMORIA PEDAGÓGICA INTERNA — EXCLUSIVA DEL MAESTRO — NO MENCIONAR AL ESTUDIANTE BAJO NINGUNA CIRCUNSTANCIA]
Estudiante: ${nombreEstudiante} | Sesiones: sin datos | Interacciones totales: sin datos
Puntaje Global: sin datos | Grado Evolutivo: En Desarrollo
Última sesión: hoy — Grado ${grado}, Lección ${leccion}${tema ? `, Tema: ${tema}` : ''}
INSTRUCCIÓN PEDAGÓGICA: El perfil detallado no está disponible aún. Entra directamente al contenido del Grado ${grado} Lección ${leccion}. NO realices diagnóstico inicial a menos que sea la primera interacción absoluta en Grado 1 Lección 1.
[FIN MEMORIA INTERNA]`.trim();
  }

  const facs = perfil.facultades;
  const debiles = Object.entries(facs)
    .filter(([, f]) => f.nivel < 45)
    .sort(([, a], [, b]) => a.nivel - b.nivel)
    .slice(0, 2)
    .map(([k, f]) => `${k} (${f.nivel.toFixed(0)}/100)`);

  const fuertes = Object.entries(facs)
    .filter(([, f]) => f.nivel >= 60)
    .sort(([, a], [, b]) => b.nivel - a.nivel)
    .slice(0, 2)
    .map(([k, f]) => `${k} (${f.nivel.toFixed(0)}/100)`);

  const diasDesdeUltima = Math.floor(
    (Date.now() - new Date(perfil.ultimaSesion).getTime()) / 86400000
  );

  return `
[MEMORIA PEDAGÓGICA INTERNA — EXCLUSIVA DEL MAESTRO — NO MENCIONAR AL ESTUDIANTE BAJO NINGUNA CIRCUNSTANCIA]
Estudiante: ${nombreEstudiante} | Sesiones: ${perfil.sesionesTotal} | Interacciones totales: ${perfil.interaccionesTotal}
Puntaje Global: ${perfil.puntajeGlobal}/100 | Grado Evolutivo: ${perfil.gradoInteligencia}
Facultades a reforzar: ${debiles.length > 0 ? debiles.join(', ') : 'ninguna crítica'}
Facultades desarrolladas: ${fuertes.length > 0 ? fuertes.join(', ') : 'en construcción'}
Conceptos asimilados: ${perfil.conceptosDominados.join(', ') || 'ninguno aún'}
Zonas de estancamiento: ${perfil.zonasEstancamiento.join(', ') || 'ninguna detectada'}
Última sesión: hace ${diasDesdeUltima === 0 ? 'hoy' : diasDesdeUltima + ' días'} — Grado ${grado}, Lección ${leccion}${tema ? `, Tema: ${tema}` : ''}
INSTRUCCIÓN PEDAGÓGICA: Adapta tu profundidad a su nivel ${perfil.gradoInteligencia}. ${debiles.length > 0 ? `Diseña preguntas que estimulen especialmente: ${debiles.map(d => d.split(' ')[0]).join(' y ')}.` : 'Mantén el nivel alcanzado y eleva la complejidad gradualmente.'} No repitas lo ya dominado. Continúa desde donde quedó.
[FIN MEMORIA INTERNA]
`.trim();
}

// Migracion automatica: completar todos los perfiles incompletos de Firebase
export async function migrarTodosLosPerfiles(): Promise<{ total: number; migrados: number; yaCompletos: number; errores: number }> {
  const { getDocs, collection: col } = await import('firebase/firestore');
  let total = 0, migrados = 0, yaCompletos = 0, errores = 0;
  try {
    const studentsSnap = await getDocs(col(db, 'students'));
    total = studentsSnap.docs.length;
    for (const studentDoc of studentsSnap.docs) {
      const uid = studentDoc.id;
      const studentData = studentDoc.data();
      if (studentData.role === 'admin') { total--; continue; }
      try {
        const profileRef = doc(db, 'students', uid, 'cognitive', 'profile');
        const snap = await getDoc(profileRef);
        if (!snap.exists()) {
          await setDoc(profileRef, completarPerfilFaltante({}));
          migrados++;
        } else {
          const data = snap.data() as Partial<PerfilCognitivo>;
          const camposFaltantes = ['gradoInteligencia','puntajeGlobal','interaccionesTotal','sesionesTotal','ultimaSesion','facultades','conceptosDominados','zonasEstancamiento','historialNiveles'].filter(c => data[c as keyof PerfilCognitivo] === undefined);
          if (camposFaltantes.length > 0) {
            await setDoc(profileRef, completarPerfilFaltante(data), { merge: true });
            migrados++;
          } else {
            yaCompletos++;
          }
        }
      } catch (e) { errores++; }
    }
  } catch (e) { errores++; }
  console.log(`[Migracion] Total:${total} | Migrados:${migrados} | Completos:${yaCompletos} | Errores:${errores}`);
  return { total, migrados, yaCompletos, errores };
}
