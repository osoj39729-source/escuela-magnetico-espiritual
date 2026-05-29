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
// LÓGICA DE COMUNICACIÓN (BACKEND UNIFICADO)
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
  onChunk: StreamChunkCallback,
  studyMode: 'curriculum' | 'library' = 'curriculum',
  currentBookTitle?: string,
  currentChapter?: string,
  currentBookId?: string,
  studentUid?: string,
  cognitiveContext?: string,
  themeGuideline?: string,
  modoValidacionIntensiva?: boolean
): Promise<ProfessorResponse> {
  
  try {
    const response = await fetch('/api/chat-stream', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: message,
        history: history.map(m => ({ role: m.role, text: m.text })),
        language,
        grade: currentGrade,
        lesson: lessonProgress,
        totalLessons: totalLessonsInGrade,
        theme: themeName,
        isRegistered,
        studentName,
        studyMode,
        currentBookTitle,
        currentChapter,
        currentBookId,
        studentUid,
        cognitiveContext,
        themeGuideline,
        modoValidacionIntensiva
      })
    });

    if (!response.ok) {
      try {
        const errorData = await response.json();
        throw new Error(`Error ${response.status}: ${errorData.details || errorData.error || 'Error desconocido'}`);
      } catch (e: any) {
        if (e.message.includes("Error " + response.status)) throw e;
        throw new Error(`Error en el servidor: ${response.status}`);
      }
    }

    const reader = response.body?.getReader();
    if (!reader) throw new Error("No se pudo iniciar el stream de lectura.");

    let fullText = "";
    let studentUpdate: StudentUpdate | undefined;
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      const lines = chunk.split('\n');

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const dataStr = line.slice(6).trim();
          if (dataStr === '[DONE]') continue;

          try {
            const data = JSON.parse(dataStr);
            if (data.text) {
              fullText += data.text;
              onChunk(data.text);
            }
            if (data.studentUpdate) {
              studentUpdate = data.studentUpdate;
            }
            if (data.error) {
              throw new Error(data.text || "Error en el motor de IA");
            }
          } catch (e) {
            // Ignorar errores de parseo parcial de buffer
          }
        }
      }
    }

    return { text: fullText, studentUpdate };

  } catch (error: any) {
    console.error("[geminiService] Error fatal en stream:", error);
    const errText = error?.message || "Error de conexión con el Maestro.";
    onChunk(errText);
    return { text: errText };
  }
}


