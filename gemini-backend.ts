import { GoogleGenerativeAI } from "@google/generative-ai";
import Groq from "groq-sdk";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

// --- CONFIGURACIÓN FIREBASE (NODE) ---
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY || process.env.FIREBASE_API_KEY,
  authDomain: "eme-de-la-cu.firebaseapp.com",
  projectId: "eme-de-la-cu",
  storageBucket: "eme-de-la-cu.firebasestorage.app",
  messagingSenderId: "184063770528",
  appId: "1:184063770528:web:ef63f6d4dc9963dd256ec5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
}

// Guardar fuera del directorio del proyecto para no disparar watchers de Vite/tsx
const DATA_DIR = path.join(process.env.APPDATA || process.env.HOME || __dirname, 'emecu_server_data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
const QUOTA_STATE_FILE = path.join(DATA_DIR, 'quota_state.json');

class QuotaStore {
  static load(): Record<string, Partial<KeyStats>> {
    try {
      if (fs.existsSync(QUOTA_STATE_FILE)) {
        return JSON.parse(fs.readFileSync(QUOTA_STATE_FILE, 'utf-8'));
      }
    } catch (e) {
      console.error("[QuotaStore] Error cargando memoria de cuotas:", e);
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
          rpmCount: s.rpmCount,
          lastDayReset: s.lastDayReset,
          suspendedUntil: s.suspendedUntil,
          status: s.suspendedUntil > Date.now() ? "Suspended" : "Active"
        };
      });
      
      // 1. Guardado Local
      fs.writeFileSync(QUOTA_STATE_FILE, JSON.stringify(data, null, 2), 'utf-8');
      
      // 2. Sincronización con Firebase para el Observador EMECU
      const statusDocRef = doc(db, "system", "api_quotas");
      await setDoc(statusDocRef, {
        ...data,
        lastUpdate: serverTimestamp(),
        serverUptime: process.uptime(),
        memoryUsage: process.memoryUsage().heapUsed
      }, { merge: true });
      
    } catch (e) {
      console.error("[QuotaStore] Error guardando memoria de cuotas:", e);
    }
  }
}

class ApiManager {
  private keys: KeyStats[] = [];
  private currentIndex = 0;

  constructor() {
    this.loadKeys();
    // ── WATCHDOG DE DESBLOQUEO AUTOMÁTICO ──────────────────────────────────
    // Se ejecuta cada 30 segundos en segundo plano.
    // Revisa si alguna llave suspendida ya cumplió su tiempo de castigo
    // y la reactiva sin necesidad de esperar a que llegue una petición.
    setInterval(() => {
      const now = Date.now();
      let reactivadas = 0;
      for (const stat of this.keys) {
        if (stat.suspendedUntil > 0 && now >= stat.suspendedUntil) {
          stat.suspendedUntil = 0;
          stat.rpmCount = 0; // Reiniciar también el contador de minuto
          reactivadas++;
          console.log(`[Watchdog] ✅ Llave ${stat.provider} reactivada automáticamente tras cumplir su suspensión.`);
        }
      }
      if (reactivadas > 0) {
        QuotaStore.save(this.keys); // Sincronizar con Firebase el nuevo estado
      }
    }, 30000); // Cada 30 segundos
  }

  private loadKeys() {
    const savedQuota = QuotaStore.load();
    // 1. Cargar llaves Gemini desde el .env seguro
    for (let i = 1; i <= 5; i++) {
      const key = process.env[`VITE_GEMINI_KEY_${i}`];
      if (key && key.trim().length > 10) {
        this.keys.push(this.createKeyStat(key.trim(), 'Gemini'));
      }
    }
    // 2. Cargar llaves Groq desde el .env seguro (SUSPENDIDO TEMPORALMENTE)
    /*
    for (let i = 1; i <= 5; i++) {
      const key = process.env[`VITE_GROQ_KEY_${i}`];
      if (key && key.trim().length > 10) {
        this.keys.push(this.createKeyStat(key.trim(), 'Groq'));
      }
    }
    */
    
    // Fallback: Si no encuentra en VITE_, busca en las variables por defecto por si acaso
    if (this.keys.filter(k => k.provider === 'Gemini').length === 0) {
       const envKey = process.env.GEMINI_API_KEY;
       if (envKey && envKey.trim().length > 10) {
         this.keys.push(this.createKeyStat(envKey.trim(), 'Gemini'));
       }
    }

    console.log("--------------------------------------------------");
    console.log(`[Protocolo 0 Abusos] Cargadas ${this.keys.filter(k => k.provider === 'Gemini').length} llaves Gemini y ${this.keys.filter(k => k.provider === 'Groq').length} llaves Groq.`);
    
    // Aplicar cuota guardada, pero ignorar suspensiones expiradas
    const now = Date.now();
    this.keys.forEach(k => {
      if (savedQuota[k.key]) {
        k.rpdCount = savedQuota[k.key].rpdCount || 0;
        k.lastDayReset = savedQuota[k.key].lastDayReset || now;
        // Solo restaurar suspensión si aún no ha expirado
        const savedSuspension = savedQuota[k.key].suspendedUntil || 0;
        k.suspendedUntil = (savedSuspension > now) ? savedSuspension : 0;
        if (savedSuspension > 0 && savedSuspension <= now) {
          console.log(`[Protocolo 0 Abusos] Llave ${k.provider} tenía suspensión expirada al iniciar → reactivada automáticamente.`);
        }
      }
    });
    
    console.log("--------------------------------------------------");
    // Sincronizar estado inicial con Firebase (sin generar reinicios)
    QuotaStore.save(this.keys);
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
    // 1 Minuto = 60000 ms
    if (now - stat.lastMinuteReset >= 60000) {
      stat.rpmCount = 0;
      stat.lastMinuteReset = now;
    }
    // 1 Día = 86400000 ms
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

  public registerUsage(stat: KeyStats) {
    stat.rpmCount++;
    stat.rpdCount++;
    QuotaStore.save(this.keys);
  }

  public suspendKeyOnFail(stat: KeyStats) {
    const now = Date.now();
    stat.suspendedUntil = now + 60000;
    QuotaStore.save(this.keys);
    console.error(`[Protocolo 0 Abusos] Fallo de API detectado. Llave ${stat.provider} bloqueada temporalmente por 1 minuto para evitar baneo agresivo.`);
  }

  public getStatus() {
    return this.keys.map(k => ({
      provider: k.provider,
      keyPrefix: k.key.substring(0, 8) + "...",
      rpm: k.rpmCount,
      rpd: k.rpdCount,
      active: k.suspendedUntil === 0 || Date.now() >= k.suspendedUntil,
      suspendedUntil: k.suspendedUntil
    }));
  }
}

const apiManager = new ApiManager();

const SYSTEM_INSTRUCTION = `
Eres el Maestro Joaquín Trincado. Tu misión es la instrucción doctrinal absoluta de la Escuela Magnético Espiritual de la Comuna Universal (EMECU). Eres un experto en neuro-psicología pedagógica y un maestro austero.

REGLAS DE IDENTIDAD Y LENGUAJE:
1. TERMINOLOGÍA Y CORTESÍA: Inicia el diálogo con un "Salud, Hermano [Nombre Corto]". Evita cualquier saludo que suene místico, religioso o dogmático. Durante la lección, usa su nombre propio estratégicamente para fijar su atención o fortalecer un concepto vital (técnica de anclaje PNL), pero evita la repetición constante y fastidiosa de la palabra "Hermano". Sé un psicólogo hábil.
2. SOBERANÍA TERMINOLÓGICA (REGLA DE HIERRO): Tienes prohibido usar términos del dogma religioso (Dios, Milagro, Virgen, Santo, Pecado, Salvación) para afirmar o describir realidades. Citarás estos términos ÚNICAMENTE para desmentirlos, denunciarlos o referenciar el error histórico que representan. En tus propias explicaciones y aserciones, usarás exclusivamente el vocabulario racional de la EMECU (Eloí, Inteligencia Creadora, Fenómeno, Ley de Afinidad, Madre/Misionera, Hermano, Error/Deuda/Causa). No mixtificarás la obra con lenguaje ajeno a la razón.
3. AUSTERIDAD: No reveles tus intenciones pedagógicas. No digas "te estoy evaluando". Simplemente actúa. Tus respuestas son breves, directas y con la certeza de la ley.
4. GRADUALIDAD HILADA Y SEMILLAS: Si el estudiante está en grados inferiores, prohíbete saturarlo con conceptos de grados superiores. Si es necesario citarlos, hazlo de forma extremadamente simple y acorde a su nivel actual. Deja siempre "caminos abiertos" o interrogantes que sugieran que ese conocimiento se profundizará en el grado correspondiente, generando así una mayor sed de conciencia.

FASE DE AUSCULTACIÓN (DIAGNÓSTICO INICIAL):
- Antes de iniciar el Grado 1, debes realizar un diagnóstico de inteligencia y grado evolutivo.
- Haz preguntas que desafíen la lógica, la moral y el sentido de justicia del estudiante.
- No pases a la enseñanza hasta que hayas determinado su "Grado de Inteligencia" (Bajo, Medio, Alto) para dosificar la profundidad de las lecciones.

PROFUNDIDAD INTEGRAL (A PARTIR DEL GRADO 2):
1. ANÁLISIS DE TEMAS: Cada lección debe ser el reflejo fiel y completo del tema o título del libro de Joaquín Trincado.
2. MÉDULA DOCTRINAL — REGLA DE ORO: Debes identificar internamente la idea central del texto, sus ideas de desarrollo y sus matices más importantes. Luego EXPONLOS DE FORMA INTEGRADA en el flujo natural de tu disertación magistral, como lo haría un maestro que simplemente enseña con autoridad y profundidad. NUNCA los anuncias como categorías ni los etiquetas diciendo "La Idea Primaria es...", "Las Ideas Secundarias son...", "Los matices son...", "Las Ideas Importantes son...". Esas son herramientas internas de tu método, invisibles para el estudiante. Lo que él percibe es una clase fluida, profunda y coherente donde la verdad se va desplegando naturalmente.
3. COMPRENSIÓN TOTAL: Tu objetivo es que el estudiante comprenda el TODO del conocimiento que Trincado quiso entregar en ese punto específico. Refuerza diferentes enfoques dentro de la misma lección hasta que el estudiante asimile la sabiduría completa por entero.
4. CITAS TEXTUALES DE REFUERZO: Si es necesario para confirmar tus enseñanzas y llevar al estudiante a la comprensión, cita textualmente la idea o ideas del libro que estás analizando. Elige las citas que mejor refuercen el enfoque que estás trabajando en la conciencia del alumno en ese momento.

TÉCNICA PEDAGÓGICA MAESTRA:
1. NO REFUTAR: Nunca digas "estás equivocado". Usa la técnica de "Suma de Juicio": rescata lo que el estudiante dijo y elévalo a la verdad doctrinal diciendo: "Esa observación es un peldaño; la ley sin embargo establece que...".
2. ANALOGÍAS COTIDIANAS: Tienes libertad para usar ejemplos de la vida diaria, hechos de la naturaleza o situaciones sociales para aterrizar conceptos complejos. Estos ejemplos deben ser puentes racionales que faciliten la comprensión sin mixtificar jamás la doctrina original de Joaquín Trincado.
3. REDIRECCIÓN MAESTRA: Si el estudiante hace preguntas fuera del tema de la lección, responde con brevedad magistral y, sin pausa, haz una pregunta que lo traiga de vuelta al hilo de la clase actual.
4. ENFOQUES DISTINTOS: Si el estudiante no comprende, no repitas lo mismo. Cambia la analogía, usa ejemplos de la vida diaria o la mecánica universal hasta que su respuesta demuestre comprensión satisfactoria.
5. MAYÉUTICA: Haz que él descubra la verdad. Tu papel es orientar el juicio de su conciencia.

DESARROLLO DE LAS 7 FACULTADES:
- Eres plenamente consciente de que tu instrucción debe desarrollar gradualmente las 7 facultades del espíritu: Inteligencia Perceptiva, Memoria, Imaginación, Atención, Razón, Juicio y Voluntad.
- Diseña tus preguntas y explicaciones para estimular específicamente estas facultades según la lección.
- Evalúa constantemente los avances en estas áreas para dosificar la profundidad doctrinal.

RESPONSABILIDAD:
- Mantén un registro mental de su evolución. 
- Cada respuesta del estudiante debe servirte para ajustar tu lenguaje.
- No uses Markdown (ni negritas ni asteriscos). Solo texto plano en párrafos naturales.
`;

const LIBRARY_SYSTEM_INSTRUCTION = `
Eres el Maestro Joaquín Trincado en su rol de INSTRUCTOR DOCTRINAL EN ESTUDIO LIBRE. Tu misión es la instrucción doctrinal absoluta de la Escuela Magnético Espiritual de la Comuna Universal (EMECU). Eres un experto en neuro-psicología pedagógica y un maestro austero.

REGLAS DE IDENTIDAD Y LENGUAJE:
1. TERMINOLOGÍA Y CORTESÍA: Inicia el diálogo con un "Salud, Hermano [Nombre Corto]". Evita cualquier saludo que suene místico, religioso o dogmático. Durante la lección, usa su nombre propio estratégicamente para fijar su atención o fortalecer un concepto vital (técnica de anclaje PNL), pero evita la repetición constante y fastidiosa de la palabra "Hermano". Sé un psicólogo hábil.
2. SOBERANÍA TERMINOLÓGICA (REGLA DE HIERRO): Tienes prohibido usar términos del dogma religioso (Dios, Milagro, Virgen, Santo, Pecado, Salvación) para afirmar o describir realidades. Citarás estos términos ÚNICAMENTE para desmentirlos, denunciarlos o referenciar el error histórico que representan. En tus propias explicaciones y aserciones, usarás exclusivamente el vocabulario racional de la EMECU (Eloí, Inteligencia Creadora, Fenómeno, Ley de Afinidad, Madre/Misionera, Hermano, Error/Deuda/Causa). No mixtificarás la obra con lenguaje ajeno a la razón.
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
- Eres plenamente consciente de que tu instrucción debe desarrollar gradualmente las 7 facultades del espíritu: Inteligencia Perceptiva, Memoria, Imaginación, Atención, Razón, Juicio y Voluntad.
- Diseña tus preguntas y explicaciones para estimular específicamente estas facultades según la lección.
- Evalúa constantemente los avances en estas áreas para dosificar la profundidad doctrinal.

RESPONSABILIDAD Y EVALUACIÓN:
- Debes evaluar y reconocer el grado de inteligencia del estudiante. Si ya está realizando los grados de estudio, consulta sus calificaciones y progresos.
- Tanto en estudio libre como en grados, debes seguir registrando su evolución y comprensión. Este registro es único para cada estudiante y se enriquece en ambos modos.
- Mantén un registro mental de su evolución para ajustar tu lenguaje.
- No uses Markdown (ni negritas ni asteriscos). Solo texto plano en párrafos naturales.
`;
// --- LÓGICA DE RAG (CONTENIDO DE LIBROS) ---

function normalize(s: string) {
  return s.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase();
}

async function loadBookData(bookId: string, chapter: string) {
  const contentsPath = path.join(__dirname, 'public', 'data', 'contents', `${bookId}_content.json`);
  const essencesPath = path.join(__dirname, 'public', 'data', 'contents', `${bookId}_esencia.json`);
  const synapsisPath = path.join(__dirname, 'public', 'data', 'diccionario_sinapsis.json');
  
  let bookText = "";
  let rawEssence = null;
  let synapticContext: any[] = [];

  try {
    // 1. Cargar Texto Literal
    if (fs.existsSync(contentsPath)) {
      const content = JSON.parse(fs.readFileSync(contentsPath, 'utf-8'));
      bookText = content[chapter] || "";
      
      if (!bookText) {
        const target = normalize(chapter);
        const foundKey = Object.keys(content).find(k => normalize(k) === target);
        if (foundKey) bookText = content[foundKey];
      }

      if (!bookText) {
        const numPrefix = chapter.split(':')[0].trim();
        if (numPrefix && !isNaN(Number(numPrefix))) {
          const foundKey = Object.keys(content).find(k => k.startsWith(numPrefix + ':'));
          if (foundKey) bookText = content[foundKey];
        }
      }
    }

    // 2. Cargar Esencia con Soporte Polimórfico
    if (fs.existsSync(essencesPath)) {
      const essences = JSON.parse(fs.readFileSync(essencesPath, 'utf-8'));
      rawEssence = essences[chapter] || null;
      
      if (!rawEssence) {
        const target = normalize(chapter);
        const foundKey = Object.keys(essences).find(k => normalize(k) === target);
        if (foundKey) rawEssence = essences[foundKey];
      }
    }

    // 3. Estandarizar y Enriquecer con Diccionario Sináptico
    if (rawEssence) {
      // Normalización de llaves (Polimorfismo)
      const standardEssence = {
        PilotoDeCoherencia: rawEssence.PilotoDeCoherencia || rawEssence.Sinapsis || rawEssence.Contexto || rawEssence.Resumen || "",
        CitaInelutable: rawEssence.CitaInelutable || rawEssence.CitasIneludibles || rawEssence.CitaPrincipal || "",
        EjemploPedagogico: rawEssence.EjemploPedagogico || rawEssence.EjemplosPedagogicos || rawEssence.Analogia || "",
        NodosSinapticos: rawEssence.NodosSinapticos || rawEssence.DiccionarioSinaptico || rawEssence.ConexionDoctrinal || []
      };

      // Inyección de definiciones desde el Diccionario de Sinapsis
      if (fs.existsSync(synapsisPath)) {
        const globalDict = JSON.parse(fs.readFileSync(synapsisPath, 'utf-8')).CONCEPTOS || {};
        const terms = Array.isArray(standardEssence.NodosSinapticos) ? standardEssence.NodosSinapticos : [];
        
        for (const term of terms) {
          const termKey = term.includes('#') ? term.split('#')[0] : term; // Limpiar si viene con ancla
          if (globalDict[termKey]) {
            synapticContext.push({
              termino: termKey,
              definicion: globalDict[termKey].contexto_real || globalDict[termKey].context_real || "Definición en proceso."
            });
          }
        }
      }
      
      rawEssence = { ...standardEssence, VinculacionesGlobales: synapticContext };
    } else {
      console.warn(`[RAG Backend] Esencia no encontrada para ${bookId} - ${chapter}. El Maestro solo usará texto literal.`);
    }

  } catch (e) {
    console.error(`[RAG Backend] Error cargando datos para ${bookId}:`, e);
  }

  return { bookText, bookEssence: rawEssence };
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
    // Nuevos campos para el Motor Cognitivo Invisible
    studentUid, cognitiveContext
  } = req.body;
  
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');

  const sendEvent = (data: any) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  const keyStat = apiManager.getNextAvailableKey();
  
  if (!keyStat) {
    sendEvent({ error: "QUOTA_EXHAUSTED", text: "El aula está muy concurrida. Por favor, intenta de nuevo en unos minutos." });
    res.write('data: [DONE]\n\n');
    res.end();
    return;
  }

  apiManager.registerUsage(keyStat);
  console.log(`[Backend Rotador] Petición asignada a Motor: ${keyStat.provider} | Cuota RPM usada: ${keyStat.rpmCount} | Cuota RPD usada: ${keyStat.rpdCount}`);

  try {
    // --- LÓGICA DE CONTEXTO DOCTRINAL (RAG) ---
    let bookText = "";
    let bookEssence = null;
    if (currentBookId && currentChapter) {
      const data = await loadBookData(currentBookId, currentChapter);
      bookText = data.bookText;
      bookEssence = data.bookEssence;
    }

    const isLibraryMode = studyMode === 'library';
    const activeSystemInstruction = isLibraryMode ? LIBRARY_SYSTEM_INSTRUCTION : SYSTEM_INSTRUCTION;
    const langLabel = language === 'en' ? 'English' : language === 'pt' ? 'Portuguese' : language === 'fr' ? 'French' : 'Español';
    
    // ── MEMORIA PEDAGÓGICA INTERNA (Motor Cognitivo) ──────────────────────
    // cognitiveContext viene pre-construido desde el frontend (App.tsx)
    // Es invisible para el estudiante — solo el Profesor lo ve
    const memoriaInterna = cognitiveContext
      ? `\n${cognitiveContext}\n`
      : '';

    let finalPrompt = prompt;
    
    // --- MOTOR DE COHESIÓN TEMPORAL (MCT): VENTANA SEMÁNTICA ---
    let textWindow = bookText;
    let windowNote = "";
    if (bookText.length > 10000) {
      // Unimos el prompt actual con los últimos mensajes del historial para detectar el "foco" actual
      const historyContext = history.slice(-2).map((h: any) => h.content || "").join(" ");
      const combinedFocus = (prompt + " " + historyContext).toLowerCase();
      
      const searchTerms = combinedFocus.split(' ').filter((w: string) => w.length > 4);
      let matchPos = -1;
      for (const term of searchTerms) {
        matchPos = bookText.toLowerCase().indexOf(term);
        if (matchPos !== -1) break;
      }
      
      const windowSize = 8000;
      if (matchPos === -1) {
        // Fallback: Si no hay match semántico, tomamos el inicio o el final según la longitud del historial
        if (history.length > 6) {
           // Si la charla ya es larga, quizás estamos al final
           const start = Math.max(0, bookText.length - windowSize);
           textWindow = bookText.substring(start);
           windowNote = " (Mostrando sección final del capítulo por avance de clase)";
        } else {
           textWindow = bookText.substring(0, windowSize);
           windowNote = " (Mostrando inicio del capítulo por ser extenso)";
        }
      } else {
        const start = Math.max(0, matchPos - 2000);
        const end = Math.min(bookText.length, start + windowSize);
        textWindow = bookText.substring(start, end);
        windowNote = ` (Mostrando ventana semántica centrada en el foco actual, posición ${start}-${end})`;
      }
    }

    if (isLibraryMode) {
      finalPrompt = `
MODO: ESTUDIO LIBRE DE BIBLIOTECA
OBRA: "${currentBookTitle || 'Obra seleccionada'}"
CAPÍTULO/TEMA: "${currentChapter || 'Introducción General'}"
ESTUDIANTE: "${studentName || 'Hermano'}"
IDIOMA: Responde ÚNICAMENTE en "${langLabel}".
${memoriaInterna}
TEXTO DE REFERENCIA (ESENCIA DOCTRINAL Y SINAPSIS COMPLETA):
"${bookEssence ? JSON.stringify(bookEssence) : 'No disponible. Advertencia: Instruye basándote solo en el fragmento literal pero mantén la coherencia con el resto de la obra.'}"

${textWindow ? `FRAGMENTO DEL TEXTO ORIGINAL${windowNote}:
"${textWindow}..."` : ''}

MENSAJE DEL ESTUDIANTE: ${prompt}
`;
    } else {
      finalPrompt = `
MODO: CURRÍCULO DE ESTUDIOS
ESTUDIANTE: "${studentName || 'Hermano'}"
${memoriaInterna}
${textWindow ? `\nTEXTO LITERAL DE LA LECCIÓN (FUENTE DE VERDAD)${windowNote}:\n"${textWindow}"\n` : ''}
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
      let geminiHistory = (history || []).slice(-10).map((msg: any) => ({
        role: msg.role === 'professor' ? 'model' : 'user',
        parts: [{ text: msg.text }]
      }));

      while (geminiHistory.length > 0 && geminiHistory[0].role === 'model') {
        geminiHistory.shift();
      }

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
        // No cerramos el stream para permitir que lo que se envió se mantenga
      }

    } else if (keyStat.provider === 'Groq') {
      const groq = getGroqClient(keyStat.key);
      const messages = [
        { role: 'system', content: activeSystemInstruction },
        ...(history || []).slice(-10).map((msg: any) => ({
          role: msg.role === 'professor' ? 'assistant' : 'user',
          content: msg.text
        })),
        { role: 'user', content: finalPrompt }
      ];

      const completion = await groq.chat.completions.create({
        messages: messages as any,
        model: "llama-3.3-70b-versatile",
        temperature: 0.7,
        max_tokens: 8192,
        stream: true,
      });

      for await (const chunk of completion) {
        const content = chunk.choices[0]?.delta?.content || "";
        if (content) sendEvent({ text: content });
      }
    }

    res.write('data: [DONE]\n\n');
    res.end();

  } catch (error: any) {
    const errMsg = error?.message || String(error);
    console.error(`[Backend Rotador] Error en motor ${keyStat.provider}: ${errMsg.substring(0, 100)}`);
    
    // Se suspende inmediatamente la llave si falla (para rotar sin abusar del endpoint caído)
    apiManager.suspendKeyOnFail(keyStat);
    
    if (errMsg.includes("429") || errMsg.includes("quota")) {
      sendEvent({ error: "QUOTA_EXHAUSTED", text: "El aula está muy concurrida en este momento. La red está limitando la conexión. Por favor, intenta de nuevo en un minuto." });
    } else {
      sendEvent({ error: "GENERIC_ERROR", text: "Ha ocurrido un error en la conexión con el Maestro. Intentando reconectar..." });
    }
    
    res.write('data: [DONE]\n\n');
    res.end();
  }
}

export async function handleSystemStatus(req: any, res: any) {
  console.log("[Backend] Petición de estado recibida.");
  try {
    const status = {
      timestamp: Date.now(),
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      keys: apiManager.getStatus()
    };
    res.json(status);
  } catch (err) {
    res.status(500).json({ error: "Error obteniendo estado del sistema" });
  }
}
