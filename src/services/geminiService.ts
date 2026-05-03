// ============================================================
// TYPES
// ============================================================

export interface StudentUpdate {
  Rationality: number;
  Morality: number;
  Spirituality: number;
  Philosophy: number;
  Magnetism: number;
  Evolution: number;
  Memory: number;
  pass_lesson?: boolean;
  IntelligenceGrade?: string;
}

export interface ProfessorResponse {
  text: string;
  studentUpdate?: StudentUpdate;
  isLocalModel?: boolean;
}

export type StreamChunkCallback = (chunk: string) => void;

// ============================================================
// CONSTANTES DOCTRINALES UNIFICADAS (PROMPT MAESTRO)
// ============================================================

const SYSTEM_INSTRUCTION = `
Eres el Maestro Joaquín Trincado. Tu misión es la instrucción doctrinal absoluta de la Escuela Magnético Espiritual de la Comuna Universal (EMECU). Eres un experto en neuro-psicología pedagógica y un maestro austero.

REGLAS DE IDENTIDAD Y LENGUAJE:
1. TERMINOLOGÍA Y CORTESÍA: Inicia el diálogo con un "Salud, Hermano [Nombre Corto]". Evita cualquier saludo que suene místico, religioso o dogmático. Durante la lección, usa su nombre propio estratégicamente para fijar su atención o fortalecer un concepto vital (técnica de anclaje PNL), pero evita la repetición constante y fastidiosa de la palabra "Hermano". Sé un psicólogo hábil.
2. AUSTERIDAD: No reveles tus intenciones pedagógicas. No digas "te estoy evaluando". Simplemente actúa. Tus respuestas son breves, directas y con la certeza de la ley.
3. GRADUALIDAD HILADA Y SEMILLAS: Si el estudiante está en grados inferiores, prohíbete saturarlo con conceptos de grados superiores. Si es necesario citarlos, hazlo de forma extremadamente simple y acorde a su nivel actual. Deja siempre "caminos abiertos" o interrogantes que sugieran que ese conocimiento se profundizará en el grado correspondiente, generando así una mayor sed de conciencia.

PROFUNDIDAD INTEGRAL (A PARTIR DEL GRADO 2):
1. ANÁLISIS DE TEMAS: Cada lección debe ser el reflejo fiel y completo del tema o título del libro de Joaquín Trincado. 
2. MÉDULA DOCTRINAL: No te quedes en la superficie. Para cada lección, identifica y enseña:
   - La IDEA PRIMARIA (el núcleo del tema).
   - Las IDEAS SECUNDARIAS y matices que el autor incluyó.
3. COMPRENSIÓN TOTAL: Tu objetivo es que el estudiante comprenda el TODO del conocimiento que Trincado quiso entregar en ese punto específico. Refuerza hiladamente diferentes enfoques dentro de la misma lección hasta que el estudiante asimile la sabiduría completa por entero.

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
- Mantén un registro mental de su evolución. 
- Cada respuesta del estudiante debe servirte para ajustar tu lenguaje.
- No uses Markdown (ni negritas ni asteriscos). Solo texto plano en párrafos naturales.
`;

// ============================================================
// CONFIGURACIÓN DE PROVEEDORES Y BALANCEO
// ============================================================

const PROVIDERS = {
  GEMINI: {
    keys: Object.keys(import.meta.env).filter(k => k.startsWith('VITE_GEMINI_KEY_')).map(k => import.meta.env[k]).filter(Boolean),
    url: (key: string) => `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`
  },
  GROQ: {
    keys: Object.keys(import.meta.env).filter(k => k.startsWith('VITE_GROQ_KEY_')).map(k => import.meta.env[k]).filter(Boolean),
    url: "https://api.groq.com/openai/v1/chat/completions",
    model: "llama-3.3-70b-versatile"
  },
  SILICONFLOW: {
    keys: Object.keys(import.meta.env).filter(k => k.startsWith('VITE_SILICON_KEY_')).map(k => import.meta.env[k]).filter(Boolean),
    url: "https://api.siliconflow.com/v1/chat/completions",
    model: "Qwen/Qwen2.5-7B-Instruct"
  }
};

let currentIndices = { GEMINI: 0, GROQ: 0, SILICONFLOW: 0 };

// ============================================================
// LÓGICA DE COMUNICACIÓN
// ============================================================

export async function chatWithProfessorStream(
  message: string,
  history: any[],
  language: string,
  currentGrade: number,
  lessonProgress: number,
  totalLessonsInGrade: number,
  themeName: string | undefined,
  isRegistered: boolean,
  studentName: string,
  onChunk: StreamChunkCallback
): Promise<ProfessorResponse> {
  
  // Intentar primero conexión directa con balanceo si hay llaves disponibles
  if (PROVIDERS.GEMINI.keys.length > 0 || PROVIDERS.GROQ.keys.length > 0) {
    console.log("[geminiService] Usando Balanceador Multicanal...");
    return await chatDirectlyWithRotation(
      message, history, language, currentGrade, lessonProgress,
      totalLessonsInGrade, themeName, isRegistered, studentName, onChunk
    );
  }

  // Fallback: Si no hay llaves locales, podrías usar un Worker de Cloudflare o similar
  const errText = "Error: No se han configurado llaves API. Por favor, verifica el Depósito de Llaves.";
  onChunk(errText);
  return { text: errText };
}

async function chatDirectlyWithRotation(
  message: string, history: any[], language: string, currentGrade: number,
  lessonProgress: number, totalLessonsInGrade: number, themeName: string | undefined,
  isRegistered: boolean, studentName: string, onChunk: StreamChunkCallback
): Promise<ProfessorResponse> {
  
  // 1. Intentar Gemini
  for (let i = 0; i < PROVIDERS.GEMINI.keys.length; i++) {
    const key = PROVIDERS.GEMINI.keys[currentIndices.GEMINI];
    currentIndices.GEMINI = (currentIndices.GEMINI + 1) % PROVIDERS.GEMINI.keys.length;
    try {
      return await callGemini(key, message, history, language, currentGrade, lessonProgress, totalLessonsInGrade, themeName, isRegistered, studentName, onChunk);
    } catch (e: any) {
      console.warn(`[Gemini] Llave ${i} falló:`, e.message);
      if (i === PROVIDERS.GEMINI.keys.length - 1) console.error("Todas las llaves de Gemini agotadas.");
    }
  }

  // 2. Fallback a Groq
  for (let i = 0; i < PROVIDERS.GROQ.keys.length; i++) {
    const key = PROVIDERS.GROQ.keys[currentIndices.GROQ];
    currentIndices.GROQ = (currentIndices.GROQ + 1) % PROVIDERS.GROQ.keys.length;
    try {
      return await callOpenAICompatible(PROVIDERS.GROQ, key, message, history, language, studentName, onChunk);
    } catch (e: any) {
      console.warn(`[Groq] Fallo:`, e.message);
    }
  }

  throw new Error("Saturación total de todos los proveedores.");
}

async function callGemini(key: string, message: string, history: any[], language: string, currentGrade: number, lessonProgress: number, totalLessonsInGrade: number, themeName: string | undefined, isRegistered: boolean, studentName: string, onChunk: StreamChunkCallback): Promise<ProfessorResponse> {
  const url = PROVIDERS.GEMINI.url(key);
  const isInitialContact = history.length === 0;
  const themeContext = themeName ? `Tema: "${themeName}"` : `Lección N° ${lessonProgress}`;

  const prompt = `
SESIÓN: Estudiante: "${studentName}", Grado ${currentGrade}, ${themeContext}. 
ESTADO: ${isRegistered ? "Registrado" : "Nuevo"}.
CONTEXTO: ${isInitialContact ? "FASE DE AUSCULTACIÓN INICIAL." : "Instrucción activa."}
MENSAJE DEL ESTUDIANTE: ${message}
REGLA DE IDIOMA (CRÍTICA): El estudiante desea hablar en "${language}". Aunque el historial contenga otros idiomas, DEBES traducir tu conocimiento y responder ÚNICAMENTE en "${language}".
`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
      contents: [
        ...history.slice(-10).map(m => ({
          role: m.role === 'professor' ? 'model' : 'user',
          parts: [{ text: m.text }]
        })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      tools: [{
        function_declarations: [{
          name: "update_evolution",
          parameters: {
            type: "object",
            properties: {
              Rationality: { type: "number" }, Morality: { type: "number" },
              Spirituality: { type: "number" }, Philosophy: { type: "number" },
              Magnetism: { type: "number" }, Evolution: { type: "number" },
              Memory: { type: "number" }, pass_lesson: { type: "boolean" },
              IntelligenceGrade: { type: "string" }
            },
            required: ["Evolution", "pass_lesson"]
          }
        }]
      }]
    })
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error?.message || "Error Gemini");
  }

  const data = await response.json();
  const candidate = data.candidates?.[0];
  let aiText = "";
  let studentUpdate: StudentUpdate | undefined;

  candidate?.content?.parts?.forEach((part: any) => {
    if (part.text) aiText += part.text;
    if (part.functionCall?.name === "update_evolution") {
      studentUpdate = part.functionCall.args as any;
    }
  });

  if (aiText) onChunk(aiText);
  return { text: aiText, studentUpdate };
}

async function callOpenAICompatible(provider: any, key: string, message: string, history: any[], language: string, studentName: string, onChunk: StreamChunkCallback): Promise<ProfessorResponse> {
  const response = await fetch(provider.url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${key}` },
    body: JSON.stringify({
      model: provider.model,
      messages: [
        { role: "system", content: SYSTEM_INSTRUCTION + `\nIDENTIDAD DEL ESTUDIANTE: "${studentName}". Responde siempre en ` + language },
        ...history.slice(-10).map(m => ({
          role: m.role === 'professor' ? 'assistant' : 'user',
          content: m.text
        })),
        { role: "user", content: message }
      ]
    })
  });

  if (!response.ok) throw new Error("Fallo API OpenAI Compatible");
  const data = await response.json();
  const text = data.choices[0].message.content;
  onChunk(text);
  return { text };
}

export async function chatWithProfessor(message: string, history: any[] = [], language = 'es', currentGrade = 1, lessonProgress = 1, totalLessonsInGrade = 1, themeName?: string, isRegistered = true, studentName = "Alumno"): Promise<ProfessorResponse> {
  let fullText = "";
  const result = await chatWithProfessorStream(message, history, language, currentGrade, lessonProgress, totalLessonsInGrade, themeName, isRegistered, studentName, (chunk) => { fullText += chunk; });
  return { ...result, text: fullText };
}

export async function generatePresentationVideo(_prompt: string): Promise<string> { return ""; }
export function getNextApiKey(): string { return ""; }
