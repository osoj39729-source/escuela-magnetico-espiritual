// ============================================================
// TYPES
// ============================================================

import { loadBookContent, loadBookEssence } from './contentLoader';
import { structuralService } from './structuralService';

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
  cognitiveContext?: string
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
        cognitiveContext
      })
    });

    if (!response.ok) {
      throw new Error(`Error en el servidor: ${response.status}`);
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

export async function chatWithProfessor(message: string, history: any[] = [], language = 'es', currentGrade = 1, lessonProgress = 1, totalLessonsInGrade = 1, themeName?: string, isRegistered = true, studentName = "Alumno"): Promise<ProfessorResponse> {
  let fullText = "";
  const result = await chatWithProfessorStream(message, history, language, currentGrade, lessonProgress, totalLessonsInGrade, themeName, isRegistered, studentName, (chunk) => { fullText += chunk; });
  return { ...result, text: fullText };
}

export async function generatePresentationVideo(_prompt: string): Promise<string> { return ""; }
export function getNextApiKey(): string { return ""; }
