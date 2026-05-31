import type { VercelRequest, VercelResponse } from '@vercel/node';

// ── Mapa de voces por idioma ─────────────────────────────────────────────────
// Todas masculinas, graves y solemnes — perfectas para el Maestro Trincado
const VOICE_MAP: Record<string, string> = {
  es: 'Charon',  // Profundo, oscuro, solemne (barquero del Hades)
  en: 'Fenrir',  // Autoritario, sereno
  pt: 'Orus',    // Cálido, formal
  fr: 'Charon',  // Igualmente solemne
};

// ── Instrucción de habla — le dice a Gemini TTS CÓMO hablar ─────────────────
// Va ANTES del texto. La IA la lee como directiva de interpretación.
const SPEECH_INSTRUCTION: Record<string, string> = {
  es: 'Habla como un maestro espiritual sereno y austero. Tono profundo y grave. Ritmo pausado y reflexivo. Pausa natural entre oraciones. Sin apresuramiento.\n\n',
  en: 'Speak as a serene and austere spiritual teacher. Deep, grave tone. Slow, reflective pace. Natural pause between sentences. No rushing.\n\n',
  pt: 'Fale como um mestre espiritual sereno e austero. Tom profundo e grave. Ritmo pausado e reflexivo. Pausa natural entre as frases.\n\n',
  fr: 'Parle comme un maître spirituel serein et austère. Ton profond et grave. Rythme lent et réfléchi. Pause naturelle entre les phrases.\n\n',
};

// ── PCM 16-bit → WAV ─────────────────────────────────────────────────────────
// Gemini TTS devuelve PCM crudo. El navegador necesita cabecera WAV (44 bytes).
function pcmToWav(pcm: Buffer, sampleRate = 24000, channels = 1, bitDepth = 16): Buffer {
  const byteRate = sampleRate * channels * (bitDepth / 8);
  const blockAlign = channels * (bitDepth / 8);
  const dataSize = pcm.length;
  const header = Buffer.alloc(44);
  header.write('RIFF', 0);
  header.writeUInt32LE(dataSize + 36, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);       // Chunk size
  header.writeUInt16LE(1, 20);        // PCM format
  header.writeUInt16LE(channels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitDepth, 34);
  header.write('data', 36);
  header.writeUInt32LE(dataSize, 40);
  return Buffer.concat([header, pcm]);
}

// ── Handler principal ────────────────────────────────────────────────────────
export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { text, lang = 'es' } = (req.body || {}) as { text?: string; lang?: string };

  if (!text || typeof text !== 'string' || text.trim().length < 2) {
    return res.status(400).json({ error: 'Texto vacío o inválido' });
  }

  const voiceName = VOICE_MAP[lang] || 'Charon';
  const instruction = SPEECH_INSTRUCTION[lang] || SPEECH_INSTRUCTION['es'];
  const fullPrompt = instruction + text.trim();

  // ── Recolectar llaves Gemini disponibles (solo Gemini, nunca Groq) ─────────
  const geminiKeys: string[] = [];
  for (let i = 1; i <= 5; i++) {
    const k = process.env[`GEMINI_KEY_${i}`];
    if (k && k.trim().length > 10) geminiKeys.push(k.trim());
  }

  if (geminiKeys.length === 0) {
    console.error('[TTS] Sin llaves Gemini en entorno → fallback al cliente');
    return res.status(503).json({ error: 'TTS no disponible' });
  }

  // ── Rotación: probar cada llave hasta obtener audio ───────────────────────
  for (let idx = 0; idx < geminiKeys.length; idx++) {
    const apiKey = geminiKeys[idx];
    const keyTag = `KEY_${idx + 1}`;

    try {
      const geminiRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: fullPrompt }] }],
            generationConfig: {
              responseModalities: ['AUDIO'],
              speechConfig: {
                voiceConfig: {
                  prebuiltVoiceConfig: { voiceName },
                },
              },
            },
          }),
        }
      );

      if (geminiRes.status === 429) {
        console.warn(`[TTS Rotación] ${keyTag} agotada (429). Rotando a siguiente...`);
        continue;
      }

      if (!geminiRes.ok) {
        const errSnippet = (await geminiRes.text()).substring(0, 120);
        console.warn(`[TTS] ${keyTag} error ${geminiRes.status}: ${errSnippet}`);
        continue;
      }

      const data = await geminiRes.json() as any;
      const audioB64: string | undefined =
        data?.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

      if (!audioB64) {
        console.warn(`[TTS] ${keyTag} respondió pero sin campo de audio.`);
        continue;
      }

      // Convertir PCM base64 → WAV reproducible
      const pcmBuffer = Buffer.from(audioB64, 'base64');
      const wavBuffer = pcmToWav(pcmBuffer);

      console.log(`[TTS] Audio generado con ${keyTag} — ${wavBuffer.length} bytes WAV`);
      res.setHeader('Content-Type', 'audio/wav');
      res.setHeader('Content-Length', String(wavBuffer.length));
      return res.status(200).end(wavBuffer);

    } catch (err: any) {
      console.warn(`[TTS] Excepción con ${keyTag}:`, String(err?.message || err).substring(0, 80));
      continue;
    }
  }

  // Todas las llaves fallaron → el cliente usará Web Speech API automáticamente
  console.error('[TTS] Todas las llaves Gemini fallaron → activando fallback en cliente');
  return res.status(503).json({ error: 'TTS Gemini no disponible temporalmente' });
}
