import { GoogleGenerativeAI } from "@google/generative-ai";

const loadApiKeys = (): string[] => {
  // LLAVE MAESTRA CONFIRMADA Y FUNCIONAL
  const masterKey = "AIzaSyDOQPCQ3X3I1Ez6HF7DCJOCRdfIm3IVuZ4";
  console.log(`[Backend Keys] Llave Maestra cargada.`);
  return [masterKey];
};

const API_KEYS: string[] = loadApiKeys();
let currentKeyIndex = 0;
let lastKeyFailTime: Record<number, number> = {};

// Inspector Automático de Llaves al iniciar (Corregido para nueva SDK)
(async () => {
  console.log("--------------------------------------------------");
  console.log("[INSPECTOR] Iniciando diagnóstico con SDK Oficial...");
  for (let i = 0; i < API_KEYS.length; i++) {
    const key = API_KEYS[i];
    const masked = key.substring(0, 8) + "..." + key.substring(key.length - 4);
    try {
      const genAI = new GoogleGenerativeAI(key);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const result = await model.generateContent("H");
      if (result.response) {
        console.log(`[INSPECTOR] Llave ${i} (${masked}): FUNCIONA ✅`);
      }
    } catch (e: any) {
      const msg = e.message || String(e);
      console.log(`[INSPECTOR] Llave ${i} (${masked}): ERROR (${msg.substring(0, 50)}) ❌`);
    }
  }
  console.log("--------------------------------------------------");
})();

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

const aiClients = new Map<string, GoogleGenerativeAI>();
function getAiClient(apiKey: string): GoogleGenerativeAI {
  if (!aiClients.has(apiKey)) {
    aiClients.set(apiKey, new GoogleGenerativeAI(apiKey));
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

const MODEL = "gemini-1.5-flash";

export async function handleChatStream(req: any, res: any) {
  const { prompt, history, language, grade, lesson, totalLessons, theme, isRegistered } = req.body;
  const apiKey = getNextApiKey();
  const keyIndex = API_KEYS.indexOf(apiKey);

  console.log(`[Backend] Petición recibida de: ${prompt.substring(0, 50)}...`);

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');

  const sendEvent = (data: any) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  try {
    const genAI = getAiClient(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: MODEL,
      systemInstruction: SYSTEM_INSTRUCTION
    });

    const chatSession = model.startChat({
      history: history.slice(-10).map((msg: any) => ({
        role: msg.role === 'professor' ? 'model' : 'user',
        parts: [{ text: msg.text }]
      })),
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      }
    });

    const result = await chatSession.sendMessageStream(prompt);

    let hasText = false;
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      if (chunkText) {
        hasText = true;
        sendEvent({ text: chunkText });
      }
    }

    if (!hasText) {
      sendEvent({ text: "El Maestro está reflexionando. Por favor, intenta preguntar de otra forma." });
    }

    res.write('data: [DONE]\n\n');
    res.end();

  } catch (error: any) {
    const errMsg = error?.message || String(error);
    console.error(`[Backend Rotador] Error | Clave ${keyIndex} | ${errMsg.substring(0, 100)}`);
    
    markKeyFailed(keyIndex);
    
    if (errMsg.includes("429")) {
      sendEvent({ error: "QUOTA_EXHAUSTED", text: "El aula está muy concurrida en este momento. Google está limitando la conexión. Por favor, intenta de nuevo en un minuto." });
    } else {
      sendEvent({ error: "GENERIC_ERROR", text: "Ha ocurrido un error en la conexión espiritual. Intentando reconectar..." });
    }
    
    res.write('data: [DONE]\n\n');
    res.end();
  }
}
