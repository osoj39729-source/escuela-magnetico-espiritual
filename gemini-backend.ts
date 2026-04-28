import { GoogleGenAI, Type } from "@google/genai";

const loadApiKeys = (): string[] => {
  const envKeys = (process.env.GEMINI_API_KEY || process.env.API_KEY || "")
    .split(",")
    .map(k => k.trim())
    .filter(Boolean);
  const defaultKey = "AIzaSyD_oWl93UOy7mCGh00x0yLRM-IvV2WJQ3s";
  if (envKeys.length === 0) return [defaultKey];
  if (!envKeys.includes(defaultKey)) envKeys.push(defaultKey);
  console.log(`[Backend Keys] Cargadas ${envKeys.length} API Keys para rotación.`);
  return envKeys;
};

const API_KEYS: string[] = loadApiKeys();
let currentKeyIndex = 0;
let lastKeyFailTime: Record<number, number> = {};

export function getNextApiKey(): string {
  if (API_KEYS.length === 0) return "";
  const now = Date.now();
  for (let i = 0; i < API_KEYS.length; i++) {
    const idx = (currentKeyIndex + i) % API_KEYS.length;
    if ((now - (lastKeyFailTime[idx] || 0)) > 30000) {
      currentKeyIndex = idx;
      return API_KEYS[idx];
    }
  }
  const idx = currentKeyIndex;
  currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
  return API_KEYS[idx];
}

function markKeyFailed(keyIndex: number) {
  lastKeyFailTime[keyIndex] = Date.now();
  currentKeyIndex = (keyIndex + 1) % API_KEYS.length;
}

const aiClients = new Map<string, GoogleGenAI>();
function getAiClient(apiKey: string): GoogleGenAI {
  if (!aiClients.has(apiKey)) {
    aiClients.set(apiKey, new GoogleGenAI({ apiKey }));
  }
  return aiClients.get(apiKey)!;
}

const SYSTEM_INSTRUCTION = `
Eres el Profesor Joaquín Trincado. Tu misión es enseñar la doctrina de Joaquín Trincado de forma absoluta y magistral, fundamentando tu personalidad y conocimiento en todas sus obras disponibles (biblioteca, libros, web).

REGLA DE PUREZA DOCTRINAL:
1. NO DEBES tener sesgos religiosos dogmáticos ni usar palabras o conceptos místicos-religiosos.
2. NO DEBES tener sesgos de ciencia materialista limitante.
3. NO DEBES tener prejuicios de ningún tipo.
Eres un maestro por entero, expresando la armonía perfecta entre la estructura filosófica profunda, la psicología pura y la razón, tal como lo establece la Escuela Magnetico-Espiritual de la Comuna Universal.

NUNCA uses verbos de duda ("podría", "tal vez"). Enseña con absoluta certeza: "Es", "La ley es", "El principio establece".

REGLA ABSOLUTA DE ACTUACIÓN (ELIMINAR META-COMUNICACIÓN):
JAMÁS expliques lo que estás haciendo, JAMÁS digas por qué haces una pregunta, y JAMÁS uses palabras como "evaluar", "prueba", "medir tu nivel", "conocerte mejor", "analizar tus respuestas" ni "mi objetivo pedagógico". 
INCLUSO PARA NEGARLO: NUNCA digas "no te estoy evaluando" ni "no soy consciente de evaluar".
SIMPLEMENTE ACTÚA. Haz preguntas directas y naturales sobre el tema. Dialoga fluidamente. La mayéutica se ejecuta haciendo la pregunta, no anunciando que harás una pregunta.

METODOLOGÍA PEDAGÓGICA (Ejecútala, no la nombres):
1. PREGUNTAS DIAGNÓSTICAS NATURALES: Al iniciar, lanza una pregunta profunda pero conversacional sobre el tema para escuchar al estudiante.
2. ADAPTACIÓN AUTOMÁTICA: Si el estudiante responde con poca profundidad, baja el nivel y usa analogías. Si responde profundo, sube el nivel. 
3. REFORZAMIENTO SIN CORRECCIÓN DIRECTA: Si el estudiante se equivoca, no le digas "estás equivocado". Toma su respuesta, rescata lo válido y añade la verdad doctrinal diciendo: "Así es, y además la ley nos revela que..."
4. MAYÉUTICA CONSTANTE: Para enseñar, haz que él descubra la respuesta mediante preguntas guiadas o analogías de la vida real.

Tus respuestas deben:
1. Ser breves (MÁXIMO 400 PALABRAS).
2. Ser exclusivamente sobre la doctrina de la EMECU.
3. Citar directamente las obras de Trincado si es pertinente.
4. No usar Markdown (ni asteriscos, negritas o símbolos). Solo texto plano en párrafos naturales.
5. Preguntar el nombre en la primera interacción y usarlo con fraternidad.
`;

const MODEL = "gemini-2.0-flash";

function buildConfig(useTools: boolean) {
  const config: any = {
    systemInstruction: SYSTEM_INSTRUCTION,
    maxOutputTokens: 512,
    temperature: 0.7,
  };
  if (useTools) {
    config.tools = [{
      functionDeclarations: [{
        name: "student_evolution_update",
        description: "Update the student's spiritual faculties.",
        parameters: {
          type: Type.OBJECT,
          properties: {
            Rationality:  { type: Type.NUMBER, description: "0-100" },
            Morality:     { type: Type.NUMBER, description: "0-100" },
            Spirituality: { type: Type.NUMBER, description: "0-100" },
            Philosophy:   { type: Type.NUMBER, description: "0-100" },
            Magnetism:    { type: Type.NUMBER, description: "0-100" },
            Evolution:    { type: Type.NUMBER, description: "0-100" },
            Memory:       { type: Type.NUMBER, description: "0-100" },
          },
          required: ["Rationality","Morality","Spirituality","Philosophy","Magnetism","Evolution","Memory"]
        }
      }]
    }];
  }
  return config;
}

export async function handleChatStream(req: any, res: any) {
  const { message, history, language, currentGrade, lessonProgress, totalLessonsInGrade, themeName, isRegistered } = req.body;
  console.log(`[Backend] Petición recibida de: ${message?.substring(0, 50)}...`);
  
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'X-Accel-Buffering': 'no'
  });

  const sendEvent = (data: any) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  const langInstruction = language === 'es' ? "Responde SIEMPRE en español." : 
                          language === 'en' ? "Always respond in English." : 
                          language === 'pt' ? "Sempre responda em português." : 
                          "Toujours répondre en français.";

  const themeContext = themeName ? `Tema de esta lección: "${themeName}"` : `Tema N° ${lessonProgress}`;
  const prompt = `Grado: ${currentGrade}/13 | Lección: ${lessonProgress}/${totalLessonsInGrade} | ${isRegistered ? "Estudiante registrado" : "Visitante"}
${themeContext}

${message}

${langInstruction}`;

  const contents = [
    ...history.slice(-6).map((msg: any) => ({
      role: msg.role === 'professor' ? 'model' : 'user',
      parts: [{ text: msg.text }]
    })),
    { role: 'user', parts: [{ text: prompt }] }
  ];

  const useTools = history.length > 0;
  const maxAttempts = API_KEYS.length * 2;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const keyIndex = currentKeyIndex;
    const apiKey = getNextApiKey();

    try {
      const ai = getAiClient(apiKey);
      const config = buildConfig(useTools);

      const stream = await ai.models.generateContentStream({
        model: MODEL,
        contents,
        config,
      });

      let hasText = false;
      for await (const chunk of stream) {
        const chunkText = chunk.candidates?.[0]?.content?.parts?.[0]?.text || "";
        if (chunkText) {
          hasText = true;
          sendEvent({ text: chunkText });
        }
        
        const parts = chunk.candidates?.[0]?.content?.parts || [];
        for (const part of parts) {
          if (part.functionCall?.name === "student_evolution_update" && part.functionCall.args) {
            sendEvent({ studentUpdate: part.functionCall.args });
          }
        }
      }

      if (hasText) {
        res.write('data: [DONE]\n\n');
        res.end();
        return;
      }
      
      markKeyFailed(keyIndex);
      continue;

    } catch (error: any) {
      const errMsg = error?.message || String(error);
      console.warn(`[Backend Rotador] Intento ${attempt + 1} | Clave ${keyIndex} | ${errMsg.substring(0, 70)}`);
      markKeyFailed(keyIndex);
      if (errMsg.includes("429") || errMsg.includes("RESOURCE_EXHAUSTED")) {
        await new Promise(r => setTimeout(r, 300));
      }
    }
  }

  // Si todas las claves fallan
  sendEvent({ error: "ALL_KEYS_FAILED" });
  res.write('data: [DONE]\n\n');
  res.end();
}
