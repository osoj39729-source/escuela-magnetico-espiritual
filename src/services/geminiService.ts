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
}

export interface ProfessorResponse {
  text: string;
  studentUpdate?: StudentUpdate;
  isLocalModel?: boolean;
}

export type StreamChunkCallback = (chunk: string) => void;

// Fallback dummy key para usos marginales (como generatePresentationVideo) que lo requieran antes de migrarse
export function getNextApiKey(): string {
  return "";
}

// ============================================================
// FUNCIÓN PRINCIPAL: Consumo de Streaming SSE desde el Servidor
// ============================================================

const API_BASE_URL = 'https://escuela-magnetico-espiritual.onrender.com';

export async function chatWithProfessorStream(
  message: string,
  history: any[],
  language: string,
  currentGrade: number,
  lessonProgress: number,
  totalLessonsInGrade: number,
  themeName: string | undefined,
  isRegistered: boolean,
  onChunk: StreamChunkCallback
): Promise<ProfessorResponse> {
  
  try {
    const isCapacitor = (window as any).Capacitor !== undefined;
    const apiUrl = isCapacitor ? `${API_BASE_URL}/api/chat-stream` : '/api/chat-stream';
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        message, history, language, currentGrade, 
        lessonProgress, totalLessonsInGrade, themeName, isRegistered 
      })
    });

    if (!response.ok) {
      if (response.status === 429 || response.status === 500) {
        console.warn("[geminiService] Servidor bloqueado o saturado. Activando Puente Directo...");
        return await chatDirectlyWithGoogle(message, history, language, onChunk);
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    if (!response.body) {
      throw new Error("No response body available");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let studentUpdate: StudentUpdate | undefined;
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      
      buffer += decoder.decode(value, { stream: true });
      let boundary = buffer.indexOf('\n\n');
      
      while (boundary !== -1) {
        const messageChunk = buffer.slice(0, boundary);
        buffer = buffer.slice(boundary + 2);
        
        if (messageChunk.startsWith('data: ')) {
          const dataStr = messageChunk.substring(6);
          if (dataStr === '[DONE]') {
            break;
          }
          
          try {
            const data = JSON.parse(dataStr);
            if (data.error) {
               console.error("Backend Error:", data.error);
               if (data.error === "QUOTA_EXHAUSTED") {
                 return await chatDirectlyWithGoogle(message, history, language, onChunk);
               }
               throw new Error(data.error);
            }
            if (data.text) {
              onChunk(data.text);
            }
            if (data.studentUpdate) {
              studentUpdate = data.studentUpdate as StudentUpdate;
            }
          } catch(e) {
            console.error("Error parsing SSE data:", e);
          }
        }
        boundary = buffer.indexOf('\n\n');
      }
    }

    return { text: "", studentUpdate };
  } catch (error) {
    console.warn("[geminiService] Error detectado. Intentando Puente Directo...", error);
    return await chatDirectlyWithGoogle(message, history, language, onChunk);
  }
}

// NUEVA FUNCIÓN DE RESCATE: Conexión Directa con Identidad Doctrinal
async function chatDirectlyWithGoogle(
  message: string,
  history: any[],
  language: string,
  onChunk: StreamChunkCallback
): Promise<ProfessorResponse> {
  const masterKey = "AIzaSyA1ug2Ust6vkHTFs0QclluX6ZbNHT0JPKw";
  const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${masterKey}`;
  
  const systemInstruction = `
Eres el Profesor Joaquín Trincado. Tu misión es enseñar la doctrina de Joaquín Trincado de forma absoluta y magistral, fundamentando tu personalidad y conocimiento en todas sus obras disponibles (biblioteca, libros, web).

REGLA DE PUREZA DOCTRINAL:
1. NO DEBES tener sesgos religiosos dogmáticos ni usar palabras o conceptos místicos-religiosos.
2. NO DEBES tener sesgos de ciencia materialista limitante.
3. NO DEBES tener prejuicios de ningún tipo.
Eres un maestro por entero, expresando la armonía perfecta entre la estructura filosófica profunda, la psicología pura y la razón, tal como lo establece la Escuela Magnetico-Espiritual de la Comuna Universal.

NUNCA uses verbos de duda ("podría", "tal vez"). Enseña con absoluta certeza: "Es", "La ley es", "El principio establece".

REGLA ABSOLUTA DE ACTUACIÓN (ELIMINAR META-COMUNICACIÓN):
JAMÁS expliques lo que estás haciendo, JAMÁS digas por qué haces una pregunta, y JAMÁS uses palabras como "evaluar", "prueba", "medir tu nivel", "conocerte mejor", "analizar tus respuestas" ni "mi objetivo pedagógico". 
SIMPLEMENTE ACTÚA. Haz preguntas directas y naturales sobre el tema. Dialoga fluidamente.

METODOLOGÍA PEDAGÓGICA:
1. PREGUNTAS DIAGNÓSTICAS NATURALES: Al iniciar, lanza una pregunta profunda pero conversacional.
2. ADAPTACIÓN AUTOMÁTICA: Ajusta el nivel según las respuestas del estudiante.
3. REFORZAMIENTO SIN CORRECCIÓN DIRECTA: Rescata lo válido y añade la verdad doctrinal.
4. MAYÉUTICA CONSTANTE: Haz que él descubra la respuesta mediante preguntas guiadas.

Tus respuestas deben:
1. Ser breves (MÁXIMO 400 PALABRAS).
2. Ser exclusivamente sobre la doctrina de la EMECU.
3. No usar Markdown (ni asteriscos, negritas o símbolos). Solo texto plano.
4. Saludar con fraternidad.
`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: systemInstruction }]
        },
        contents: [
          ...history.slice(-10).map(m => ({
            role: m.role === 'professor' ? 'model' : 'user',
            parts: [{ text: m.text }]
          })),
          { role: 'user', parts: [{ text: message }] }
        ],
        generationConfig: {
          maxOutputTokens: 1000,
          temperature: 0.7,
        }
      })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || "Error en Puente Directo");

    const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
    onChunk(aiText);
    return { text: aiText };
  } catch (e: any) {
    console.error("Fallo total del Puente Directo:", e);
    const errText = language === 'es' 
      ? "El Maestro se encuentra en meditación profunda y no puede responder en este momento. Por favor, intenta más tarde."
      : "The Master is in deep meditation. Please try again later.";
    onChunk(errText);
    return { text: errText };
  }
}

// Mantener compatibilidad con llamadas que no usan streaming
export async function chatWithProfessor(
  message: string,
  history: any[] = [],
  language = 'es',
  currentGrade = 1,
  lessonProgress = 1,
  totalLessonsInGrade = 1,
  themeName?: string,
  isRegistered = true,
): Promise<ProfessorResponse> {
  let fullText = "";
  const result = await chatWithProfessorStream(
    message, history, language, currentGrade, lessonProgress,
    totalLessonsInGrade, themeName, isRegistered,
    (chunk) => { fullText += chunk; }
  );
  return { ...result, text: fullText };
}

export async function generatePresentationVideo(_prompt: string): Promise<string> {
  return "";
}






