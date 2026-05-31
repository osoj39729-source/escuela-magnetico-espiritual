// api-src/tts.ts
var VOICE_MAP = {
  es: "Charon",
  // Profundo, oscuro, solemne (barquero del Hades)
  en: "Fenrir",
  // Autoritario, sereno
  pt: "Orus",
  // Cálido, formal
  fr: "Charon"
  // Igualmente solemne
};
var SPEECH_INSTRUCTION = {
  es: "Habla como un maestro espiritual sereno y austero. Voz profunda, grave y solemne. Cadencia natural y reflexiva. Dicci\xF3n clara y serena.\n\n",
  en: "Speak as a serene and austere spiritual teacher. Deep, grave and solemn voice. Natural, reflective cadence. Clear and serene diction.\n\n",
  pt: "Fale como um mestre espiritual sereno e austero. Voz profunda, grave e solene. Cad\xEAncia natural e reflexiva. Dic\xE7\xE3o clara e serena.\n\n",
  fr: "Parle comme un ma\xEEtre spirituel serein et aust\xE8re. Voix profonde, grave et solennelle. Cadence naturelle et r\xE9fl\xE9chie. Diction claire et sereine.\n\n"
};
function pcmToWav(pcm, sampleRate = 24e3, channels = 1, bitDepth = 16) {
  const byteRate = sampleRate * channels * (bitDepth / 8);
  const blockAlign = channels * (bitDepth / 8);
  const dataSize = pcm.length;
  const header = Buffer.alloc(44);
  header.write("RIFF", 0);
  header.writeUInt32LE(dataSize + 36, 4);
  header.write("WAVE", 8);
  header.write("fmt ", 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(channels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitDepth, 34);
  header.write("data", 36);
  header.writeUInt32LE(dataSize, 40);
  return Buffer.concat([header, pcm]);
}
async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { text, lang = "es" } = req.body || {};
  if (!text || typeof text !== "string" || text.trim().length < 2) {
    return res.status(400).json({ error: "Texto vac\xEDo o inv\xE1lido" });
  }
  const voiceName = VOICE_MAP[lang] || "Charon";
  const instruction = SPEECH_INSTRUCTION[lang] || SPEECH_INSTRUCTION["es"];
  const fullPrompt = instruction + text.trim();
  const geminiKeys = [];
  for (let i = 1; i <= 5; i++) {
    const k = process.env[`GEMINI_KEY_${i}`];
    if (k && k.trim().length > 10) geminiKeys.push(k.trim());
  }
  if (geminiKeys.length === 0) {
    console.error("[TTS] Sin llaves Gemini en entorno \u2192 fallback al cliente");
    return res.status(503).json({ error: "TTS no disponible" });
  }
  for (let idx = 0; idx < geminiKeys.length; idx++) {
    const apiKey = geminiKeys[idx];
    const keyTag = `KEY_${idx + 1}`;
    try {
      const geminiRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: fullPrompt }] }],
            generationConfig: {
              responseModalities: ["AUDIO"],
              speechConfig: {
                voiceConfig: {
                  prebuiltVoiceConfig: { voiceName }
                }
              }
            }
          })
        }
      );
      if (geminiRes.status === 429) {
        console.warn(`[TTS Rotaci\xF3n] ${keyTag} agotada (429). Rotando a siguiente...`);
        continue;
      }
      if (!geminiRes.ok) {
        const errSnippet = (await geminiRes.text()).substring(0, 120);
        console.warn(`[TTS] ${keyTag} error ${geminiRes.status}: ${errSnippet}`);
        continue;
      }
      const data = await geminiRes.json();
      const audioB64 = data?.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (!audioB64) {
        console.warn(`[TTS] ${keyTag} respondi\xF3 pero sin campo de audio.`);
        continue;
      }
      const pcmBuffer = Buffer.from(audioB64, "base64");
      const wavBuffer = pcmToWav(pcmBuffer);
      console.log(`[TTS] Audio generado con ${keyTag} \u2014 ${wavBuffer.length} bytes WAV`);
      res.setHeader("Content-Type", "audio/wav");
      res.setHeader("Content-Length", String(wavBuffer.length));
      return res.status(200).end(wavBuffer);
    } catch (err) {
      console.warn(`[TTS] Excepci\xF3n con ${keyTag}:`, String(err?.message || err).substring(0, 80));
      continue;
    }
  }
  console.error("[TTS] Todas las llaves Gemini fallaron \u2192 activando fallback en cliente");
  return res.status(503).json({ error: "TTS Gemini no disponible temporalmente" });
}
export {
  handler as default
};
