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
    console.warn("[geminiService] Error de red o del servidor backend:", error);
    const errText = language === 'es'
      ? "El Profesor no puede conectarse a los servidores del éter. Intenta de nuevo."
      : "The Professor cannot connect right now. Please try again.";
    onChunk(errText);
    return { text: errText, isLocalModel: true };
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
