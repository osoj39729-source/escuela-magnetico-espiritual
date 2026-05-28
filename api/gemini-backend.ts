import { GoogleGenerativeAI } from "@google/generative-ai";

import Groq from "groq-sdk";

import { initializeApp } from "firebase/app";

import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";

import fs from "fs";

import path from "path";

import { fileURLToPath } from "url";

import dotenv from "dotenv";

import { structuralService } from "../src/services/structuralService.js";



// Solo cargar dotenv si no estamos en Vercel (Vercel ya inyecta las variables)

if (!process.env.VERCEL) {

  dotenv.config();

}



// --- CONFIGURACIÓN FIREBASE (NODE) ---

const firebaseConfig = {

  apiKey: process.env.VITE_FIREBASE_API_KEY || process.env.FIREBASE_API_KEY,

  authDomain: "eme-de-la-cu.firebaseapp.com",

  projectId: "eme-de-la-cu",

  storageBucket: "eme-de-la-cu.firebasestorage.app",

  messagingSenderId: "184063770528",

  appId: "1:184063770528:web:ef63f6d4dc9963dd256ec5"

};



if (!firebaseConfig.apiKey) {

  console.warn("[Backend] ADVERTENCIA: No se encontró VITE_FIREBASE_API_KEY. Firebase operará en modo limitado o fallará.");

}



const app = initializeApp(firebaseConfig);

const db = getFirestore(app);



// --- AUTENTICACIÓN ADMINISTRADOR DE BACKGROUND ---

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);



async function authenticateBackend() {

  const adminEmail = process.env.FIREBASE_ADMIN_EMAIL || process.env.VITE_FIREBASE_ADMIN_EMAIL;

  const adminPassword = process.env.FIREBASE_ADMIN_PASSWORD || process.env.VITE_FIREBASE_ADMIN_PASSWORD;



  if (adminEmail && adminPassword) {

    try {

      console.log(`[Backend Auth] Intentando autenticar como Administrador (${adminEmail.trim()})...`);

      await signInWithEmailAndPassword(auth, adminEmail.trim(), adminPassword.trim());

      console.log("[Backend Auth] ¡Autenticación exitosa! El bot ahora opera como Administrador en Firebase.");

    } catch (err) {

      console.error("[Backend Auth] Error al autenticar en Firebase:", err);

    }

  } else {

    console.log("[Backend Auth] Operando en modo anónimo (No se definieron FIREBASE_ADMIN_EMAIL y FIREBASE_ADMIN_PASSWORD).");

  }

}



let __dirname = '';

try {

  const __filename = fileURLToPath(import.meta.url);

  __dirname = path.dirname(__filename);

} catch (e) {

  __dirname = process.cwd();

}



// --- PROTOCOLO 0 ABUSOS: LÍMITES POR DEFECTO ---

// Se configuran ligeramente por debajo de los límites reales de la capa gratuita

const GEMINI_RPM_LIMIT = 14;

const GEMINI_RPD_LIMIT = 1400;

const GROQ_RPM_LIMIT = 25;

const GROQ_RPD_LIMIT = 14000;



type Provider = 'Gemini' | 'Groq';



interface KeyStats {

  key: string;

  provider: Provider;

  rpmCount: number;

  rpdCount: number;

  lastMinuteReset: number;

  lastDayReset: number;

  suspendedUntil: number; // 0 if active

  lastError?: string; // Nuevo campo para diagnóstico

}



// Guardar fuera del directorio del proyecto para no disparar watchers de Vite/tsx

// En Vercel, usaremos /tmp si es necesario, pero priorizaremos Firebase

const DATA_DIR = process.env.VERCEL ? '/tmp' : path.join(process.env.APPDATA || process.env.HOME || process.cwd(), 'emecu_server_data');

if (!fs.existsSync(DATA_DIR) && !process.env.VERCEL) {

  try { fs.mkdirSync(DATA_DIR, { recursive: true }); } catch(e) {}

}

const QUOTA_STATE_FILE = path.join(DATA_DIR, 'quota_state.json');



class QuotaStore {

  static async load(): Promise<Record<string, Partial<KeyStats>>> {

    // 1. Intentar carga rápida desde /tmp (Memoria de instancia caliente)

    try {

      if (fs.existsSync(QUOTA_STATE_FILE)) {

        return JSON.parse(fs.readFileSync(QUOTA_STATE_FILE, 'utf-8'));

      }

    } catch (e) {}



    // 2. Si no hay en /tmp o estamos en Vercel, cargar de Firebase

    try {

      const { getDoc, doc } = await import("firebase/firestore");

      const statusDocRef = doc(db, "system", "api_quotas");

      const snap = await getDoc(statusDocRef);

      if (snap.exists()) {

        console.log("[QuotaStore] Memoria recuperada desde Firebase.");

        return snap.data() as Record<string, Partial<KeyStats>>;

      }

    } catch (e) {

      console.error("[QuotaStore] Error recuperando memoria desde Firebase:", e);

    }

    return {};

  }



  static async save(stats: KeyStats[]) {

    try {

      const data: Record<string, any> = {};

      stats.forEach(s => {

        data[s.key.substring(0, 10) + "..."] = {

          provider: s.provider,

          rpdCount: s.rpdCount,

          // rpmCount: s.rpmCount, // Eliminado para evitar bloqueos falsos en Serverless

          lastDayReset: s.lastDayReset,

          suspendedUntil: s.suspendedUntil,

          status: s.suspendedUntil > Date.now() ? "Suspended" : "Active"

        };

      });

      

      // 1. Guardado Local (Opcional en Vercel)

      try {

        fs.writeFileSync(QUOTA_STATE_FILE, JSON.stringify(data, null, 2), 'utf-8');

      } catch (e) {

        // En Vercel esto fallará, lo ignoramos y seguimos con Firebase

      }

      

      // 2. Sincronización con Firebase para el Observador EMECU

      const statusDocRef = doc(db, "system", "api_quotas");

      await setDoc(statusDocRef, {

        ...data,

        lastUpdate: serverTimestamp(),

        serverUptime: process.uptime(),

        memoryUsage: process.memoryUsage().heapUsed

      });

      

    } catch (e) {

      console.error("[QuotaStore] Error guardando memoria de cuotas:", e);

    }

  }

}



class ApiManager {

  private keys: KeyStats[] = [];

  private currentIndex = 0;



  constructor() {

    // En Serverless, la carga se dispara por petición, no en el constructor global

  }



  public async initialize() {

    if (this.keys.length > 0) return; // Ya inicializado

    

    // Autenticar bot en Firebase como Administrador para evitar errores de cuotas

    await authenticateBackend();

    

    const savedQuota = await QuotaStore.load();

    

    // Inicialización de llaves Gemini

    for (let i = 1; i <= 5; i++) {

      const key = process.env[`GEMINI_KEY_${i}`];

      if (key && key.trim().length > 10) {

        this.keys.push(this.createKeyStat(key.trim(), 'Gemini'));

      }

    }



    // Inicialización de llaves Groq

    for (let i = 1; i <= 5; i++) {

      const key = process.env[`GROQ_KEY_${i}`];

      if (key && key.trim().length > 10) {

        this.keys.push(this.createKeyStat(key.trim(), 'Groq'));

      }

    }



    // Fallback: Si no hay ninguna, intentar con GEMINI_API_KEY única

    if (this.keys.length === 0) {

      const singleKey = process.env.GEMINI_API_KEY;

      if (singleKey) this.keys.push(this.createKeyStat(singleKey, 'Gemini'));

    }

    

    const now = Date.now();

    this.keys.forEach(k => {

      const prefix = k.key.substring(0, 10) + "...";

      if (savedQuota[prefix]) {

        k.rpdCount = savedQuota[prefix] ? (savedQuota[prefix] as any).rpdCount || 0 : 0;

        k.lastDayReset = savedQuota[prefix] ? (savedQuota[prefix] as any).lastDayReset || now : now;

        

        // Solo respetamos la suspensión si el registro existe y es MUY reciente (menos de 5 min)

        if (savedQuota[prefix]) {

          const savedSuspension = (savedQuota[prefix] as any).suspendedUntil || 0;

          if (savedSuspension > now && (savedSuspension - now) < 300000) {

            k.suspendedUntil = savedSuspension;

          } else {

            k.suspendedUntil = 0;

          }

        } else {

          k.suspendedUntil = 0;

        }

      }

    });

    

    if (this.keys.length === 0) {

      console.error("[Protocolo 0 Abusos] ¡CRÍTICO: No se encontraron API Keys en el entorno!");

    } else {

      console.log(`[Protocolo 0 Abusos] Cerebro inicializado con ${this.keys.length} llaves activas.`);

    }

  }



  private createKeyStat(key: string, provider: Provider): KeyStats {

    return {

      key,

      provider,

      rpmCount: 0,

      rpdCount: 0,

      lastMinuteReset: Date.now(),

      lastDayReset: Date.now(),

      suspendedUntil: 0

    };

  }



  private checkResets(stat: KeyStats) {

    const now = Date.now();

    // 1 Minuto = 60000 más

    if (now - stat.lastMinuteReset >= 60000) {

      stat.rpmCount = 0;

      stat.lastMinuteReset = now;

    }

    // 1 Día = 86400000 más

    if (now - stat.lastDayReset >= 86400000) {

      stat.rpdCount = 0;

      stat.lastDayReset = now;

    }

    // Levantar suspensión si ya pasó el tiempo de castigo/espera

    if (stat.suspendedUntil > 0 && now >= stat.suspendedUntil) {

      stat.suspendedUntil = 0;

      console.log(`[Protocolo 0 Abusos] Llave ${stat.provider} reactivada. La cuota está limpia.`);

    }

  }



  public getNextAvailableKey(): KeyStats | null {

    if (this.keys.length === 0) return null;

    

    const startIndex = this.currentIndex;

    const now = Date.now();

    

    for (let i = 0; i < this.keys.length; i++) {

      const idx = (startIndex + i) % this.keys.length;

      const stat = this.keys[idx];

      this.checkResets(stat);



      if (stat.suspendedUntil === 0) {

        const rpmLimit = stat.provider === 'Gemini' ? GEMINI_RPM_LIMIT : GROQ_RPM_LIMIT;

        const rpdLimit = stat.provider === 'Gemini' ? GEMINI_RPD_LIMIT : GROQ_RPD_LIMIT;



        if (stat.rpmCount < rpmLimit && stat.rpdCount < rpdLimit) {

          // Llave válida y con cuota disponible. Preparamos la rotación para la siguiente llamada.

          this.currentIndex = (idx + 1) % this.keys.length;

          return stat;

        } else {

          // Suspender preventivamente antes de que la red banee por abuso

          if (stat.rpdCount >= rpdLimit) {

            stat.suspendedUntil = now + 86400000;

            console.warn(`[Protocolo 0 Abusos] Llave ${stat.provider} AUTO-SUSPENDIDA por 24h (Límite Diario Alcanzado: ${stat.rpdCount}/${rpdLimit}).`);

          } else if (stat.rpmCount >= rpmLimit) {

            stat.suspendedUntil = now + 60000;

            console.warn(`[Protocolo 0 Abusos] Llave ${stat.provider} AUTO-SUSPENDIDA por 1 min (Límite por Minuto Alcanzado: ${stat.rpmCount}/${rpmLimit}).`);

          }

        }

      }

    }

    return null; // Todas están agotadas

  }



  public async registerUsage(stat: KeyStats) {

    stat.rpmCount++;

    stat.rpdCount++;

    // Solo persistimos el contador diario y la suspensión, el de minuto es volátil por instancia

    await QuotaStore.save(this.keys);

  }



  public async suspendKeyOnFail(stat: KeyStats, error?: any) {

    const now = Date.now();

    let errorMessage = (error?.message || String(error || "Fallo desconocido")).toLowerCase();

    

    // REDACCIÓN DE SEGURIDAD GLOBAL: Eliminar llaves de cualquier mensaje de error

    const redact = (t: string) => t.replace(/AIzaSy[A-Za-z0-9_-]{30,}/g, "[REDACTED]")

                                   .replace(/gsk_[A-Za-z0-9]{30,}/g, "[REDACTED]")

                                   .replace(/sk-[A-Za-z0-9]{30,}/g, "[REDACTED]");

    

    errorMessage = redact(errorMessage);

    stat.lastError = errorMessage;

    

    // Error 403 "Your project has been denied access" — El proyecto de Google Cloud está baneado.
    // Todas las llaves del mismo proyecto fallarán igual: suspender 24h y caer a Groq de inmediato.
    const isProjectDenied = errorMessage.includes("403") &&
                            (errorMessage.includes("denied access") ||
                             errorMessage.includes("forbidden") ||
                             errorMessage.includes("project has been denied"));

    // Si es un error de red o timeout, la suspensión es mínima (10 segundos)
    const isNetworkError = errorMessage.includes("econnreset") ||
                          errorMessage.includes("fetch failed") ||
                          errorMessage.includes("timeout") ||
                          errorMessage.includes("network");

    if (isProjectDenied) {
      stat.suspendedUntil = now + 86400000; // 24 horas — proyecto baneado por Google
      console.error(`[Protocolo 0 Abusos] ⛔ PROYECTO BLOQUEADO POR GOOGLE. Llave ${stat.provider} suspendida 24h. El sistema rotará a Groq automáticamente.`);
    } else if (isNetworkError) {
      stat.suspendedUntil = now + 10000; // 10 segundos
      console.warn(`[Protocolo 0 Abusos] Error de red detectado. Reintentando llave ${stat.provider} en 10s.`);
    } else if (errorMessage.includes("429") || errorMessage.includes("quota") || errorMessage.includes("limit reached")) {
      stat.suspendedUntil = now + 60000; // 1 minuto (Suficiente para que resetee el RPM de Google)
      console.warn(`[Protocolo 0 Abusos] Límite de cuota alcanzado en llave ${stat.provider}. Descansando 1 minuto.`);
    } else if (errorMessage.includes("safety") || errorMessage.includes("blocked") || errorMessage.includes("finish_reason")) {
      stat.suspendedUntil = now + 5000; // 5 segundos (Solo para saltar a la siguiente llave)
      console.warn(`[Protocolo 0 Abusos] Bloqueo de seguridad en llave ${stat.provider}. Saltando a la siguiente.`);
    } else {
      stat.suspendedUntil = now + 60000; // 1 minuto para otros errores
    }

    

    await QuotaStore.save(this.keys);

  }



  public getStatus() {

    return this.keys.map(k => ({

      provider: k.provider,

      keyPrefix: k.key.substring(0, 8) + "...",

      rpm: k.rpmCount,

      rpd: k.rpdCount,

      active: k.suspendedUntil === 0 || Date.now() >= k.suspendedUntil,

      suspendedUntil: k.suspendedUntil,

      lastError: k.lastError // Enviamos el error al frontend

    }));

  }



  public async forceResetAll() {

    this.keys.forEach(k => {

      k.rpmCount = 0;

      k.rpdCount = 0;

      k.suspendedUntil = 0;

    });

    await QuotaStore.save(this.keys);

    console.log("[Protocolo 0 Abusos] ¡TODAS LAS CUOTAS HAN SIDO RESETEADAS MANUALMENTE!");

  }

}



const apiManager = new ApiManager();



export const SYSTEM_INSTRUCTION = `Eres el Maestro Joaquín Trincado, fundador de la Escuela Magnético-Espiritual de la Comuna Universal (EMECU). Hablas con la autoridad, sabiduría y austeridad propias de un misionero que ha dedicado su existencia a la verdad. Eres además un maestro experto en neuro-psicología y psicología pedagógica, lo que te permite comprender la mente del estudiante y diseñar una instrucción que transforma la conciencia desde sus cimientos. Tu misión es la instrucción doctrinal absoluta del estudiante, eliminando errores religiosos, prejuicios y falsedades a través del Espiritismo Luz y Verdad.



REGLAS DE IDENTIDAD Y LENGUAJE:

1. SOBERANÍA TERMINOLÓGICA (REGLA DE HIERRO): Debes usar rigurosamente el término ELOÍ (siempre en mayúsculas y con acento en la Í) para referirte al Creador. Tienes terminantemente PROHIBIDO utilizar el artículo "el", "la", "los", "las" antes de ELOÍ (es un error gravísimo decir "el ELOÍ", "el eloi", "el Eloi" o "el ELOI"; siempre dirás simplemente "ELOÍ", sin artículo). ELOÍ no es un dios religioso, es el Concierto de todos los espíritus y la vida misma.

2. TRATO FRATERNAL Y GÉNERO: Dirígete al estudiante como "Hermano [Nombre]" o "Hermana [Nombre]" según corresponda a su nombre y género. Escribe siempre el nombre con su mayúscula inicial correspondiente (ej: Nelson, no nelson).

3. PROHIBICIÓN DOGMÁTICA: Tienes prohibido usar términos del dogma religioso (Dios, Milagro, Virgen, Santo, Pecado, Salvación) para afirmar realidades. Úsalos solo para desmentirlos. Usa exclusivamente el vocabulario racional de la EMECU (Inteligencia Creadora, Fenómeno, Ley de Afinidad, Causa).

4. AUSTERIDAD: No reveles tus intenciones pedagógicas. No digas "te estoy evaluando" ni "esta es una pregunta para tu juicio". Simplemente actúa. Tus respuestas son breves, directas y con la certeza de la ley.



FASE DE EDIFICACIÓN CONTINUA (DIAGNÓSTICO Y PROGRESIÓN):

1. LOS CIMIENTOS (REGLA ESTRICTA — solo si interacciones = 0 Y Grado = 1 Y Lección = 1): El diagnóstico inicial ÚNICAMENTE se realiza cuando la POSICIÓN ACADÉMICA OBLIGATORIA indica Grado 1, Lección 1 Y la MEMORIA PEDAGÓGICA confirma 0 interacciones totales. Si la posición es Grado > 1 o Lección > 1, o si hay interacciones previas, OMITE el diagnóstico COMPLETAMENTE y entra de inmediato al contenido de la lección indicada. NO hagas diagnóstico de ningún tipo en lecciones avanzadas.



PROTOCOLO DE DIAGNÓSTICO INICIAL — 5 INTERCAMBIOS FIJOS (OBLIGATORIO):

Paso 1 — Presentación (solo en el primer mensaje, sin que el estudiante haya respondido aún): Presenta la Escuela Magnético-Espiritual de la Comuna Universal en 2-3 párrafos: su identidad como escuela de estudio racional de las leyes del universo (fundada el 20 de septiembre de 1911), su eje doctrinal (el espíritu humano es eterno y evoluciona por conocimiento y amor, no por rituales), y sus dos mandatos: 'Conócete a ti mismo' y 'Ama a tu hermano'. Usa ÚNICAMENTE vocabulario racional. Termina con una primera pregunta natural que parezca curiosidad filosófica, no examen.

Paso 2 a 5 — Preguntas invisibles: En cada uno de los siguientes 4 intercambios, realiza UNA sola pregunta natural que sondee una facultad diferente del espíritu (Inteligencia Perceptiva, Razón/Juicio, Memoria/Atención, Imaginación, Voluntad). Las preguntas deben fluir como conversación filosófica genuina. NUNCA anuncies el número de preguntas ni que estás evaluando.

Paso 6 — Cierre obligatorio: Al recibir la 5ª respuesta del estudiante (la respuesta al 5º mensaje del estudiante en esta sesión), EMITE INCONDICIONALMENTE pass_lesson: true en el COGNITIVE_UPDATE, independientemente de la calidad de la respuesta. El diagnóstico termina SIEMPRE en el 5º intercambio, sin excepción.

2. EDIFICACIÓN POR EXPERIMENTACIÓN: Una vez sentadas las bases, no reinicies tu evaluación. Tu labor es una edificación constante donde cada pregunta y respuesta es un nuevo ladrillo que incorporas al edificio del conocimiento del alumno. Utiliza el historial y el puntaje de inteligencia previo para dosificar la complejidad sin retroceder a lo ya asimilado.

3. MEDICIÓN DINÁMICA E INVISIBLE: La evaluación no es un evento separado, es el flujo mismo de tu enseñanza. Ajusta tu profundidad en tiempo real basándote en la solidez de las respuestas del estudiante. Si demuestra dominio, eleva la exigencia doctrinal; si detectas debilidad en un cimiento, refuerza ese punto antes de intentar colocar un nuevo ladrillo de conocimiento superior.

4. MEMORIA DE OBRA: Prohíbete tratar al estudiante como un desconocido en cada sesión. Reconoce su progreso y continúa la construcción de su conciencia exActúamente desde donde quedó en la última interacción, manteniendo la fluidez total de la "Obra" que estás realizando en su espíritu.



PROFUNDIDAD INTEGRAL (MÉDULA DOCTRINAL - REGLA DE ORO):

1. ANÁLISIS DE TEMAS: Cada lección debe ser el reflejo fiel y completo del tema o título del libro de Joaquín Trincado que se está estudiando.

2. MÉDULA DOCTRINAL: Debes identificar internamente la idea central del texto, sus ideas de desarrollo y sus matices más importantes. Luego EXPONLOS DE FORMA INTEGRADA en el flujo natural de tu disertación magistral, como lo haría un maestro que simplemente enseña con autoridad. NUNCA los anuncias como categorías ni los etiquetas diciendo "La Idea Primaria es...", "Las Ideas Secundarias son...", "Los matices son...". Esas son herramientas internas de tu método, invisibles para el estudiante. Lo que él percibe es una clase fluida, profunda y coherente donde la verdad se va desplegando naturalmente.

3. COMPRENSIÓN TOTAL: Tu objetivo es que el estudiante comprenda el TODO del conocimiento. Refuerza diferentes enfoques dentro de la misma lección hasta que el estudiante asimile la sabiduría completa por entero.

4. CITAS TEXTUALES: Si es necesario para confirmar tus enseñanzas, cita textualmente la idea o ideas del libro analizado que mejor refuercen el enfoque que estás trabajando en ese momento.



TÉCNICA PEDAGÓGICA MAESTRA:

1. NO REFUTAR: Nunca digas "estás equivocado". Usa la técnica de "Suma de Juicio": rescata lo que el estudiante dijo y elévalo a la verdad doctrinal diciendo: "Esa observación es un peldaño; la ley sin embargo establece que...".

2. ANALOGÍAS COTIDIANAS: Usa ejemplos de la vida diaria o hechos de la naturaleza como puentes racionales que faciliten la comprensión sin mixtificar jamás la doctrina original.

3. REDIRECCIÓN MAESTRA: Si el estudiante se desvía, responde con brevedad magistral y vuelve inmediatamente al hilo de la clase.

4. MAYÉUTICA: Haz que él descubra la verdad. Orienta el juicio de su conciencia.



DESARROLLO DE LAS 7 FACULTADES:

Eres plenamente consciente de que tu instrucción debe desarrollar gradualmente las 7 facultades del espíritu: Inteligencia Perceptiva, Memoria, Imaginación, Atención, Razón, Juicio y Voluntad. Diseña tus preguntas para estimular específicamente estas facultades según el nivel de inteligencia detectado en el perfil cognitivo del estudiante.



RESPONSABILIDAD Y EVALUACIÓN COGNITIVA:

Cada respuesta del estudiante debe servirte para ajustar tu lenguaje. No uses Markdown complejo (negritas o asteriscos en exceso). Solo texto plano en párrafos naturales y fluidos.



DIRECTIVA DE EVALUACIÓN OCULTA (OBLIGATORIA): Al final absoluto de cada respuesta, añade UN SOLO BLOQUE de metadatos con la evaluación de la respuesta del estudiante. Este bloque debe ser invisible para el estudiante.

Formato: <!-- COGNITIVE_UPDATE: {"inteligenciaPerceptiva": delta, "memoria": delta, "imaginacion": delta, "atencion": delta, "razon": delta, "juicio": delta, "voluntad": delta} -->

Los deltas deben ser valores numéricos entre -2 y +4 basados estrictamente en la calidad de la respuesta del estudiante. Si es un saludo inicial y el estudiante aún no ha respondido, usa 0.0 para todos los valores. Adicionalmente, si consideras que la respuesta del alumno demuestra una asimilación completa de la lección actual o que ha culminado con éxito su diagnóstico inicial para empezar el Grado 1, puedes añadir el campo opcional 'pass_lesson': true dentro del JSON (Ejemplo: {"razon": 3.0, "juicio": 2.0, "pass_lesson": true}).

`;



const LIBRARY_SYSTEM_INSTRUCTION = `

Eres el Maestro Joaquín Trincado en su rol de INSTRUCTOR DOCTRINAL EN ESTUDIO LIBRE. Tu misión es la instrucción doctrinal absoluta de la Escuela Magnético Espiritual de la Comuna Universal (EMECU). Eres un experto en neuro-psicología y psicología pedagógica, lo que te permite comprender la estructura mental del estudiante y adaptar tu instrucción para que la verdad doctrinal sea absorbida con fluidez y profundidad. Eres un maestro austero y profundamente metódico.



REGLAS DE IDENTIDAD Y LENGUAJE:

1. TERMINOLOGÍA Y CORTESÍA: Dirígete al estudiante como "Hermano" o "Hermana" según corresponda a su nombre. Si el prompt indica que es una continuación de sesión, evita las presentaciones formales iniciales y entra directamente en la materia doctrinal.

2. SOBERANÍA TERMINOLÓGICA (REGLA DE HIERRO): Tienes prohibido usar términos del dogma religioso (Dios, Milagro, Virgen, Santo, Pecado, Salvación) para afirmar o describir realidades. Citarás estos términos ÚNICAMENTE para desmentirlos, denunciarlos o referenciar el error histórico que representan. En tus propias explicaciones y aserciones, usarás exclusivamente el vocabulario racional de la EMECU (ELOÍ -siempre escrito así: en mayúsculas y con acento en la Í, jamás precedido del artículo "el", siendo un gravísimo error decir "el ELOÍ", "el eloi", "el Eloi" o "el ELOI"; siempre dirás simplemente "ELOÍ"-, Inteligencia Creadora, Fenómeno, Ley de Afinidad, Madre/Misionera, Hermano, Error/Deuda/Causa). No mixtificarás la obra con lenguaje ajeno a la razón.

3. AUSTERIDAD: No reveles tus intenciones pedagógicas. No digas "te estoy evaluando". Simplemente actúa. Tus respuestas son breves, directas y con la certeza de la ley.



PROFUNDIDAD INTEGRAL:

1. ANÁLISIS DE TEMAS: Cada lección debe ser el reflejo fiel y completo del tema o título del libro de Joaquín Trincado.

2. MÉDULA DOCTRINAL — REGLA DE ORO: Debes identificar internamente la idea central del texto, sus ideas de desarrollo y sus matices más importantes. Luego EXPONLOS DE FORMA INTEGRADA en el flujo natural de tu disertación magistral, como lo haría un maestro que simplemente enseña con autoridad y profundidad. NUNCA los anuncias como categorías ni los etiquetas diciendo "La Idea Primaria es...", "Las Ideas Secundarias son...", "Los matices son...". Esas son herramientas internas de tu método, invisibles para el estudiante. Lo que él percibe es una clase fluida, profunda y coherente.

3. COMPRENSIÓN TOTAL: Tu objetivo es que el estudiante comprenda el TODO del conocimiento que Trincado quiso entregar en ese punto específico. Refuerza hiladamente diferentes enfoques dentro de la misma lección hasta que el estudiante asimile la sabiduría completa por entero.

4. CITAS Y VINCULACIÓN DOCTRINAL: Si es necesario para confirmar tus enseñanzas, cita textualmente la idea o ideas del libro que estás analizando. Además, tienes libertad para citar o mencionar conceptos de OTROS libros de tu autoría si esto refuerza el enfoque actual o si el estudiante hace una pregunta vinculativa que sea necesaria aclarar para lograr la conciencia total del tema. Hazlo solo si es vital para la comprensión profunda del estudiante.



TÉCNICA PEDAGÓGICA MAESTRA:

1. NO REFUTAR: Nunca digas "estás equivocado". Usa la técnica de "Suma de Juicio": rescata lo que el estudiante dijo y elévalo a la verdad doctrinal diciendo: "Esa observación es un peldaño; la ley sin embargo establece que...".

2. ANALOGÍAS COTIDIANAS: Tienes libertad para usar ejemplos de la vida diaria, hechos de la naturaleza o situaciones sociales para aterrizar conceptos complejos. Estos ejemplos deben ser puentes racionales que faciliten la comprensión sin mixtificar jamás la doctrina original de Joaquín Trincado.

3. REDIRECCIÓN MAESTRA: Si el estudiante hace preguntas fuera del tema de la lección, responde con brevedad magistral y, sin pausa, haz una pregunta que lo traiga de vuelta al hilo de la clase actual.

4. ENFOQUES DISTINTOS: Si el estudiante no comprende, no repitas lo mismo. Cambia la analogía, usa ejemplos de la vida diaria o la mecánica universal hasta que su respuesta demuestre comprensión satisfactoria.

5. MAYÉUTICA: Haz que él descubra la verdad. Tu papel es orientar el juicio de su conciencia.



DESARROLLO DE LAS 7 FACULTADES:

Eres plenamente consciente de que tu instrucción debe desarrollar gradualmente las 7 facultades del espíritu: Inteligencia Perceptiva, Memoria, Imaginación, Atención, Razón, Juicio y Voluntad. Diseña tus preguntas para estimular específicamente estas facultades según el nivel de inteligencia detectado en el perfil cognitivo del estudiante.



RESPONSABILIDAD Y EVALUACIÓN COGNITIVA:

- Debes evaluar y reconocer el grado de inteligencia del estudiante. Si ya está realizando los grados de estudio, consulta sus calificaciones y progresos.

- Tanto en estudio libre como en grados, debes seguir registrando su evolución y comprensión. Este registro es único para cada estudiante y se enriquece en ambos modos.

- No uses Markdown (ni negritas ni asteriscos). Solo texto plano en párrafos naturales.



DIRECTIVA DE EVALUACIÓN OCULTA (OBLIGATORIA): Al final absoluto de cada respuesta, añade UN SOLO BLOQUE de metadatos con la evaluación de la respuesta del estudiante.

Formato: <!-- COGNITIVE_UPDATE: {"inteligenciaPerceptiva": delta, "memoria": delta, "imaginacion": delta, "atencion": delta, "razon": delta, "juicio": delta, "voluntad": delta} -->

Los deltas deben ser valores numéricos entre -2 y +4 según la calidad de la respuesta. Adicionalmente, si consideras que la respuesta del alumno demuestra una asimilación completa del tema o lección actual, puedes añadir el campo opcional 'pass_lesson': true dentro del JSON.

`;



// --- LÓGICA DE RAG (CONTENIDO DE LIBROS) ---



// Alias explícito para libros cuyo nombre de archivo tiene caracteres acentuados

// convertidos incorrectamente (ej: filosofía → filosof-a)

const BOOK_FILE_ALIASES: Record<string, string> = {

  'filosofia-austera-racional': 'filosof-a-austera-racional',

  'discurso-obispo-strossmayer': '-1library-co--discurso-obispo-strossmayer',

};



function normalize(s: string) {

  return s.normalize("NFD")

    .replace(/[\u0300-\u036f]/g, "")

    .replace(/[^a-z0-9]/gi, "")

    .toLowerCase();

}



// Comparacion fuzzy: esqueleto consonantico

function consonantMatch(a, b) {

  const vowels = /[aeiou]/g;

  const ca = normalize(a).replace(vowels, '');

  const cb = normalize(b).replace(vowels, '');

  return ca.length >= 6 && cb.length >= 6 && (ca === cb || ca.includes(cb) || cb.includes(ca));

}



async function loadBookData(bookId, chapter) {

  const rootDir = process.cwd();

  let matchedBookId = bookId;

  const contentsDir = path.join(rootDir, 'public', 'data', 'contents');

  let contentsPath = '';

  let essencesPath = '';

  const synapsisPath = path.join(rootDir, 'public', 'data', 'diccionario_sinapsis.json');



  if (fs.existsSync(contentsDir)) {

    const files = fs.readdirSync(contentsDir);

    const targetNormalized = normalize(bookId);

    const aliasBase = BOOK_FILE_ALIASES[bookId];

    const aliasFile = aliasBase ? files.find(f => f === aliasBase + '_content.json') : undefined;

    const foundFile = aliasFile || files.find(f => {

      if (!f.endsWith('_content.json')) return false;

      const baseName = f.replace('_content.json', '');

      return normalize(baseName) === targetNormalized ||

             normalize(baseName).includes(targetNormalized) ||

             targetNormalized.includes(normalize(baseName)) ||

             consonantMatch(baseName, bookId);

    });

    if (foundFile) {

      matchedBookId = foundFile.replace('_content.json', '');

      contentsPath = path.join(contentsDir, foundFile);

      const ef = foundFile.replace('_content.json', '_esencia.json');

      const ep = path.join(contentsDir, ef);

      if (fs.existsSync(ep)) essencesPath = ep;

    }

  }



  let bookText = '';

  let activeChapterKey = chapter;

  let rawEssence = null;

  let synapticContext = [];



  try {

    if (contentsPath && fs.existsSync(contentsPath)) {

      const content = JSON.parse(fs.readFileSync(contentsPath, 'utf-8'));

      bookText = content[chapter] || '';



      if (!bookText) {

        const target = normalize(chapter);

        const fk = Object.keys(content).find(k => {

          const nk = normalize(k);

          return nk === target || nk.includes(target) || target.includes(nk);

        });

        if (fk) { bookText = content[fk]; activeChapterKey = fk; }

      }



      if (!bookText) {

        const num = chapter.split(':')[0].trim();

        if (num && !isNaN(Number(num))) {

          const fk = Object.keys(content).find(k => k.startsWith(num + ':'));

          if (fk) { bookText = content[fk]; activeChapterKey = fk; }

        }

      }



      if (!bookText && matchedBookId.includes('strossmayer')) {

        const fbKeys = ['10: DISCURSO DEL OBISPO STROSSMAYER','9: PROLOGO','11: EPILOGO','7: A LOS HOMBRES LIBRES Y LAS MADRES ULTRAJADAS'];

        for (const fk of fbKeys) {

          if (content[fk]) { bookText = content[fk]; activeChapterKey = fk; break; }

        }

      }

    }



    if (essencesPath && fs.existsSync(essencesPath)) {

      const essences = JSON.parse(fs.readFileSync(essencesPath, 'utf-8'));

      rawEssence = essences[activeChapterKey] || essences[chapter] || null;

      if (!rawEssence) {

        const target = normalize(activeChapterKey);

        const fk = Object.keys(essences).find(k => { const nk = normalize(k); return nk === target || nk.includes(target) || target.includes(nk); });

        if (fk) rawEssence = essences[fk];

      }

      if (rawEssence) {

        const se = {

          PilotoDeCoherencia: rawEssence.PilotoDeCoherencia || rawEssence.Sinapsis || rawEssence.Contexto || rawEssence.Resumen || '',

          CitaInelutable: rawEssence.CitaInelutable || rawEssence.CitasIneludibles || rawEssence.CitaPrincipal || '',

          EjemploPedagogico: rawEssence.EjemploPedagogico || rawEssence.EjemplosPedagogicos || rawEssence.Analogia || '',

          NodosSinapticos: rawEssence.NodosSinapticos || rawEssence.DiccionarioSinaptico || rawEssence.ConexionDoctrinal || [],

          IdeasPrincipales: rawEssence.IdeasPrincipales || rawEssence.Ideas || rawEssence.PuntosImportantes || rawEssence.Puntos || [],

          PuntosImportantes: rawEssence.PuntosImportantes || rawEssence.Puntos || rawEssence.IdeasPrincipales || []

        };

        if (fs.existsSync(synapsisPath)) {

          const gd = JSON.parse(fs.readFileSync(synapsisPath, 'utf-8')).CONCEPTOS || {};

          const termás = Array.isArray(se.NodosSinapticos) ? se.NodosSinapticos : [];

          for (const term of termás) {

            const tk = term.includes('#') ? term.split('#')[0] : term;

            const entry = gd[tk] || gd[tk.replace(/ /g, '_')];

            if (entry) synapticContext.push({ termino: tk, definicion: entry.contexto_real || entry.context_real || entry.definicion || 'Definicion en proceso.' });

          }

        }

        rawEssence = se;

      }

    }

  } catch (e) {

    console.error('[RAG Backend] Error:', e);

  }



  return { bookText, bookEssence: rawEssence, synapticContext, matchedBookId };

}



const aiClientsGemini = new Map<string, GoogleGenerativeAI>();

function getGeminiClient(apiKey: string): GoogleGenerativeAI {

  if (!aiClientsGemini.has(apiKey)) {

    aiClientsGemini.set(apiKey, new GoogleGenerativeAI(apiKey));

  }

  return aiClientsGemini.get(apiKey)!;

}



const aiClientsGroq = new Map<string, Groq>();

function getGroqClient(apiKey: string): Groq {

  if (!aiClientsGroq.has(apiKey)) {

    aiClientsGroq.set(apiKey, new Groq({ apiKey }));

  }

  return aiClientsGroq.get(apiKey)!;

}



export async function handleChatStream(req: any, res: any) {

  const { 

    prompt, history, language, studyMode, 

    currentBookId, currentChapter, currentBookTitle, studentName,

    // Posición curricular del estudiante

    grade, lesson, totalLessons, theme,

    // Motor Cognitivo Invisible

    studentUid, cognitiveContext,

    // Directiva de Cátedra (4to ingrediente: solo para lecciones derivadas del currículo)

    themeGuideline,
    // Modo de validacion intensiva por esencias
    modoValidacionIntensiva

  } = req.body;

  

  res.setHeader('Content-Type', 'text/event-stream');

  res.setHeader('Cache-Control', 'no-cache');

  res.setHeader('Connection', 'keep-alive');

  res.setHeader('X-Accel-Buffering', 'no');



  const sendEvent = (data: any) => {

    res.write(`data: ${JSON.stringify(data)}\n\n`);

  };



  await apiManager.initialize();

  

  // --- LÓGICA DE CONTEXTO DOCTRINAL (RAG) ---

  let bookText = "";

  let bookEssence: any = null;

  let synapticGlossary: any[] = [];

  let matchedBookId = "";

  let semanticMapContext = ""; // ← NUEVO: contexto del mapa semántico estructural

  if (currentBookId && currentChapter) {

    const data = await loadBookData(currentBookId, currentChapter);

    bookText = data.bookText;

    bookEssence = data.bookEssence;

    synapticGlossary = data.synapticContext || [];

    matchedBookId = data.matchedBookId || "";

    

    // ═══════════════════════════════════════════════════════════

    // CONEXIÓN AL STRUCTURAL SERVICE (MOTOR DE COHERENCIA SEMÁNTICA)

    // Busca el mapa semántico más relevante para la consulta activa

    // e inyecta sus ideas atómicas y filtros antidogma en el prompt.

    // ═══════════════════════════════════════════════════════════

    try {

      const queryForMap = `${prompt} ${theme || ''} ${currentChapter || ''}`.trim();

      const relevantMap = structuralService.findRelevantMap(queryForMap);

      if (relevantMap) {

        semanticMapContext = structuralService.formatMapForPrompt(relevantMap, queryForMap);

        console.log(`[StructuralService] Mapa semántico inyectado: "${relevantMap.titulo || relevantMap.id || 'Master Synapse'}"`);

      } else {

        console.log(`[StructuralService] No se halló mapa específico. Procediendo sin asiento doctrinal.`);

      }

    } catch (structErr) {

      console.error("[StructuralService] Error al buscar mapa semántico:", structErr);

    }

  }

  

  let retryCount = 0;

  const maxRetries = 10;

  let success = false;

  let lastError: any = null;



  while (retryCount < maxRetries && !success) {

    const keyStat = apiManager.getNextAvailableKey();

    

    if (!keyStat) {

      sendEvent({ error: "QUOTA_EXHAUSTED", text: "El aula está muy concurrida. Por favor, intenta de nuevo en unos minutos." });

      res.write('data: [DONE]\n\n');

      res.end();

      return;

    }



    await apiManager.registerUsage(keyStat);

    console.log(`[Backend Rotador] [Intento ${retryCount + 1}] Petición asignada a Motor: ${keyStat.provider} | Cuota RPM usada: ${keyStat.rpmCount} | Cuota RPD usada: ${keyStat.rpdCount}`);



    try {

      const isGroq = keyStat.provider === 'Groq';

      const windowSize = isGroq ? 2500 : 8000;

      const historySliceLimit = isGroq ? -4 : -10;



      const isLibraryMode = studyMode === 'library';

      const activeSystemInstruction = isLibraryMode ? LIBRARY_SYSTEM_INSTRUCTION : SYSTEM_INSTRUCTION;

      const langLabel = language === 'en' ? 'English' : language === 'pt' ? 'Portuguese' : language === 'fr' ? 'French' : 'Español';

      

      const memoriaInterna = cognitiveContext

        ? `\n${cognitiveContext}\n`

        : '';



      let finalPrompt = prompt;

      

      // --- MOTOR DE COHESIÓN POR HILACIÓN (MCH) ---

      let textWindow = bookText;

      let windowNote = "";

      if (bookText.length > (isGroq ? 3000 : 10000)) {

        const historyContext = history.slice(-2).map((h: any) => h.content || h.text || "").join(" ");

        const combinedFocus = (prompt + " " + historyContext).toLowerCase();

        

        const searchTermás = combinedFocus.split(' ').filter((w: string) => w.length > 5);

        let matchPos = -1;

        for (const term of searchTermás) {

          matchPos = bookText.toLowerCase().indexOf(term);

          if (matchPos !== -1) break;

        }



        if (matchPos !== -1) {

          // Enfoque semántico cuando el estudiante pregunta algo específico

          const start = Math.max(0, matchPos - (isGroq ? 500 : 2000));

          const end = Math.min(bookText.length, start + windowSize);

          textWindow = bookText.substring(start, end);

          windowNote = ` (Mostrando ventana semántica centrada en el foco actual, posición ${start}-${end})`;

        } else {

          // Enfoque de Hilación Secuencial (MCH) para el desarrollo continuo de la clase

          const turnCount = history ? history.length : 0;

          const overlap = isGroq ? 400 : 1000;

          const stepSize = windowSize - overlap;

          

          const activeSegmentIndex = Math.min(

            Math.floor(turnCount / 2),

            Math.floor(bookText.length / stepSize)

          );

          

          const start = activeSegmentIndex * stepSize;

          const end = Math.min(bookText.length, start + windowSize);

          textWindow = bookText.substring(start, end);

          windowNote = ` (Mostrando microsegmento secuencial por hilación [bloque ${activeSegmentIndex + 1}], posición ${start}-${end})`;

        }

      }



      if (isLibraryMode) {

        // Orden correcto de inyección RAG:

        // 1. Esencia pedagógica y sinóptica → 2. Glosario global → 3. Fragmento literal

        const essenceBlock = bookEssence

          ? `ESENCIA PEDAGÓGICA Y SINÓPTICA DEL SEGMENTO:\n${JSON.stringify(bookEssence, null, 2)}`

          : 'ESENCIA: No disponible. Instruye basándote en el fragmento literal manteniendo coherencia con el resto de la obra.';

        const glossaryBlock = synapticGlossary.length > 0

          ? `GLOSARIO GLOBAL (DICCIONARIO SINÁPTICO):\n${JSON.stringify(synapticGlossary, null, 2)}`

          : '';

        const fragmentBlock = textWindow

          ? `FRAGMENTO LITERAL DEL TEXTO ORIGINAL${windowNote}:\n"${textWindow}..."`

          : '';



        finalPrompt = `

MODO: ESTUDIO LIBRE DE BIBLIOTECA

OBRA: "${currentBookTitle || 'Obra seleccionada'}"

CAPÍTULO/TEMA: "${currentChapter || 'Introducción General'}"

ESTUDIANTE: "${studentName || 'Hermano'}"

IDIOMA: Responde ÚNICAMENTE en "${langLabel}".

${memoriaInterna}

${semanticMapContext}

${essenceBlock}



${glossaryBlock}



${fragmentBlock}



MENSAJE DEL ESTUDIANTE: ${prompt}

`;

      } else {

        const gradoActivo = grade || 1;

        const leccionActiva = lesson || 1;

        const totalLeccionesActivas = totalLessons || 50;

        const temaActivo = theme || '';

        

        // Detectar si es una lección derivada (sin texto físico propio en el libro)

        // Las lecciones 13 a 50 del Grado 1 son derivadas y usan el discurso principal de Strossmayer.

        const esDerivadaStrossmayer = matchedBookId.includes('strossmayer') && 

          theme && 

          !theme.includes(':'); // Los capítulos físicos tienen ':' en su formato como '1: PROCLAMA'



        // Orden correcto de inyección RAG:

        // 1. Esencia pedagógica y sinóptica → 2. Glosario global → 3. Fragmento literal

        const essenceBlockC = bookEssence

          ? `ESENCIA PEDAGÓGICA Y SINÓPTICA DEL SEGMENTO:\n${JSON.stringify(bookEssence, null, 2)}`

          : '';

        const glossaryBlockC = synapticGlossary.length > 0

          ? `GLOSARIO GLOBAL (DICCIONARIO SINÁPTICO):\n${JSON.stringify(synapticGlossary, null, 2)}`

          : '';

        const fragmentLabel = esDerivadaStrossmayer

          ? `CONTEXTO FUENTE — DISCURSO DEL OBISPO STROSSMAYER (analiza desde la perspectiva del tema indicado y la directiva de cátedra)${windowNote}:`

          : `TEXTO LITERAL DE LA LECCIÓN (FUENTE DE VERDAD)${windowNote}:`;

        const fragmentBlockC = textWindow ? `${fragmentLabel}\n"${textWindow}"` : '';



        finalPrompt = `

MODO: CURRÍCULO DE ESTUDIOS

ESTUDIANTE: "${studentName || 'Hermano'}"

POSICIÓN ACADÉMICA OBLIGATORIA: Grado ${gradoActivo}, Lección ${leccionActiva} de ${totalLeccionesActivas}${temaActivo ? `, Tema: "${temaActivo}"` : ''}

INSTRUCCIÓN DE POSICIÓN: Imparte la enseñanza correspondiente al Grado ${gradoActivo} Lección ${leccionActiva}. Esta es tu única directiva curricular. No puedes impartir una lección diferente a la indicada.

${themeGuideline ? `\nDIRECTIVA TEMÁTICA DE CÁTEDRA (OBLIGATORIA – el ángulo exacto que debes enseñar en esta lección):\n${themeGuideline}\nTienes TERMINANTEMENTE PROHIBIDO abordar conceptos de grados superiores (magnetismo universal, mediumnidad, cosmología avanzada, comunas superiores, ELOÍ). Esta lección está acotada estrictamente a la demolición racional del error dogmático indicado.\n` : ''}

${modoValidacionIntensiva ? `\n=== MODO DE VALIDACIÓN INTENSIVA ACTIVO ===\nEstás en modo de validación de comprensión. Tu única misión es validar que el estudiante ha comprendido las IdeasPrincipales y PuntosImportantes de la esencia de esta lección.\n\nINSTRUCCIONES:\n1. Deja de enseñar nuevo contenido. Genera preguntas orientadas específicamente a que el estudiante demuestre comprensión tácita de las ideas clave.\n2. Si la respuesta del estudiante demuestra 60% o más de asertividad con las ideas clave, emite pass_lesson: true.\n3. Si la respuesta NO alcanza 60%, genera una NUEVA pregunta con un ENFOQUE DIFERENTE (cambia el ángulo, usa una analogía diferente, pide que explique desde otra perspectiva).\n4. Continúa generando preguntas de validación con enfoques diferentes hasta lograr 60% de asertividad. No hay límite de intentos.\n5. No reveles al estudiante que es una "prueba" o "validación". Actúa como un maestro que verifica la comprensión.\n` : ''}

${memoriaInterna}

${semanticMapContext}

${essenceBlockC}



${glossaryBlockC}



${fragmentBlockC}

MENSAJE DEL ESTUDIANTE: ${prompt}

REGLA DE IDIOMA: Responde ÚNICAMENTE en "${langLabel}".

`;

      }



      if (keyStat.provider === 'Gemini') {
        const genAI = getGeminiClient(keyStat.key);
        const model = genAI.getGenerativeModel({ 
          model: "gemini-2.5-flash",
          systemInstruction: activeSystemInstruction
        });

        // Asegurar que el historial para Gemini siempre comience con un mensaje de 'user'
        let geminiHistory = (history || []).slice(historySliceLimit).map((másg: any) => ({
          role: másg.role === 'professor' ? 'model' : 'user',
          parts: [{ text: másg.text || másg.content || "" }]
        }));

        while (geminiHistory.length > 0 && geminiHistory[0].role === 'model') {
          geminiHistory.shift();
        }

        // Diagnóstico: tamaño aproximado del prompt en tokens (~4 chars = 1 token)
        const approxTokens = Math.round((activeSystemInstruction.length + finalPrompt.length) / 4);
        console.log(`[Backend Rotador] Prompt enviado a Gemini | ~${approxTokens} tokens estimados (system+user)`);

        const chatSession = model.startChat({
          history: geminiHistory,
          generationConfig: {
            maxOutputTokens: 8192,
            temperature: 0.7,
          }
        });

        const result = await chatSession.sendMessageStream(finalPrompt);
        try {
          for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            if (chunkText) sendEvent({ text: chunkText });
          }
        } catch (streamErr) {
          console.error("[Gemini Stream] Error parcial:", streamErr);
        }



      } else if (keyStat.provider === 'Groq') {

        const groq = getGroqClient(keyStat.key);

        const messages = [

          { role: 'system', content: activeSystemInstruction },

          ...(history || []).slice(historySliceLimit).map((másg: any) => ({

            role: másg.role === 'professor' ? 'assistant' : 'user',

            content: másg.text || másg.content || ""

          })),

          { role: 'user', content: finalPrompt }

        ];



        const completion = await groq.chat.completions.create({

          messages: messages as any,

          model: "llama-3.3-70b-versatile",

          temperature: 0.7,

          max_tokens: 3500, // Groq free tier: input (~4300) + output <= 12,000 TPM. 3500 cubre cualquier respuesta del Maestro (200-1400 tokens típicos) sin exceder el límite.

          stream: true,

        });



        for await (const chunk of completion) {

          const content = chunk.choices[0]?.delta?.content || "";

          if (content) sendEvent({ text: content });

        }

      }



      success = true; // Si llegó aquí sin error, fue exitoso!

    } catch (error: any) {

      let errmásg = error?.message || String(error);

      

      // REDACCIÓN DE SEGURIDAD

      const redactKeys = (text: string) => {

        return text.replace(/AIzaSy[A-Za-z0-9_-]{30,}/g, "[LLAVE_PROTEGIDA]")

                   .replace(/gsk_[A-Za-z0-9]{30,}/g, "[LLAVE_PROTEGIDA]")

                   .replace(/sk-[A-Za-z0-9]{30,}/g, "[LLAVE_PROTEGIDA]");

      };

      

      errmásg = redactKeys(errmásg);

      console.error(`[Backend Rotador] Error en motor ${keyStat.provider}: ${errmásg}`);

      

      // Se suspende inmediatamente la llave si falla con el mensaje limpio

      await apiManager.suspendKeyOnFail(keyStat, new Error(errmásg));

      

      lastError = error;

      retryCount++;

      if (retryCount >= maxRetries) {

        throw new Error(errmásg);

      }

    }

  }



  res.write('data: [DONE]\n\n');

  res.end();

}



export async function handleSystemStatus(req: any, res: any) {

  console.log("[Backend] Petición de estado recibida.");

  try {

    await apiManager.initialize();

    const status = {

      timestamp: Date.now(),

      uptime: process.uptime(),

      memory: process.memoryUsage(),

      keys: apiManager.getStatus()

    };

    res.json(status);

  } catch (error: any) {

    let safeMessage = error.message || "Error desconocido";

    // Limpieza profunda: eliminar cualquier rastro de llaves API en el mensaje de error

    safeMessage = safeMessage.replace(/AIzaSy[A-Za-z0-9_-]{30,}/g, "[KEY_REDACTED]");

    safeMessage = safeMessage.replace(/gsk_[A-Za-z0-9]{30,}/g, "[KEY_REDACTED]");

    safeMessage = safeMessage.replace(/sk-[A-Za-z0-9]{30,}/g, "[KEY_REDACTED]");

    

    console.error("[Backend] Error en chatWithProfessorStream (Protegido)");

    res.status(500).json({ error: "Error en el servidor", details: safeMessage });

  }

}



export async function handleResetQuotas(req: any, res: any) {

  console.log("[Backend] Petición de RESET de cuotas recibida.");

  try {

    await apiManager.initialize();

    await apiManager.forceResetAll();

    res.json({ status: "ok", message: "Todas las cuotas han sido reiniciadas." });

  } catch (err) {

    res.status(500).json({ error: "Error reiniciando cuotas" });

  }

}





