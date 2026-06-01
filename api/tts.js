// api-src/tts.ts
var AZURE_VOICE_MAP = {
  es: { voice: "es-ES-AlvaroNeural", lang: "es-ES" },
  // Formal, austero, europeo
  en: { voice: "en-US-BrandonNeural", lang: "en-US" },
  // Profundo, autoritario
  pt: { voice: "pt-BR-FabioNeural", lang: "pt-BR" },
  // Maduro, formal
  fr: { voice: "fr-FR-HenriNeural", lang: "fr-FR" }
  // Solemne, francés
};
function buildSSML(text, lang) {
  const { voice, lang: xmlLang } = AZURE_VOICE_MAP[lang] || AZURE_VOICE_MAP["es"];
  const safe = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  return `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='${xmlLang}'><voice name='${voice}'><prosody rate='-5%' pitch='-5%'>${safe}</prosody></voice></speak>`;
}
async function tryAzureTTS(text, lang) {
  const region = process.env.AZURE_TTS_REGION || "eastus";
  const endpoint = `https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`;
  const ssml = buildSSML(text, lang);
  const azureKeys = [];
  for (let i = 1; i <= 5; i++) {
    const k = process.env[`AZURE_TTS_KEY_${i}`];
    if (k && k.trim().length > 10) azureKeys.push(k.trim());
  }
  if (azureKeys.length === 0) return null;
  for (let idx = 0; idx < azureKeys.length; idx++) {
    const keyTag = `AZURE_KEY_${idx + 1}`;
    try {
      const azRes = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Ocp-Apim-Subscription-Key": azureKeys[idx],
          "Content-Type": "application/ssml+xml",
          "X-Microsoft-OutputFormat": "riff-24khz-16bit-mono-pcm",
          "User-Agent": "MaestroTrincado/1.0"
        },
        body: ssml
      });
      if (azRes.status === 429) {
        console.warn(`[Azure TTS] ${keyTag} cuota agotada (429) \u2192 rotando a siguiente llave`);
        continue;
      }
      if (!azRes.ok) {
        const err = (await azRes.text()).substring(0, 120);
        console.warn(`[Azure TTS] ${keyTag} error ${azRes.status}: ${err}`);
        continue;
      }
      const buf = Buffer.from(await azRes.arrayBuffer());
      console.log(`[Azure TTS] \u2713 Audio con ${keyTag} \u2014 ${buf.length} bytes WAV`);
      return buf;
    } catch (err) {
      console.warn(`[Azure TTS] Excepci\xF3n ${keyTag}:`, String(err?.message).substring(0, 80));
      continue;
    }
  }
  return null;
}
var GEMINI_VOICE_MAP = {
  es: "Charon",
  // Profundo, oscuro, solemne
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
async function tryGeminiTTS(text, lang) {
  const voiceName = GEMINI_VOICE_MAP[lang] || "Charon";
  const instruction = SPEECH_INSTRUCTION[lang] || SPEECH_INSTRUCTION["es"];
  const fullPrompt = instruction + text;
  const geminiKeys = [];
  for (let i = 1; i <= 5; i++) {
    const k = process.env[`GEMINI_KEY_${i}`];
    if (k && k.trim().length > 10) geminiKeys.push(k.trim());
  }
  if (geminiKeys.length === 0) return null;
  for (let idx = 0; idx < geminiKeys.length; idx++) {
    const keyTag = `GEMINI_KEY_${idx + 1}`;
    try {
      const geminiRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${geminiKeys[idx]}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: fullPrompt }] }],
            generationConfig: {
              responseModalities: ["AUDIO"],
              speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName } } }
            }
          })
        }
      );
      if (geminiRes.status === 429) {
        console.warn(`[Gemini TTS] ${keyTag} agotada (429) \u2192 rotando`);
        continue;
      }
      if (!geminiRes.ok) {
        const err = (await geminiRes.text()).substring(0, 120);
        console.warn(`[Gemini TTS] ${keyTag} error ${geminiRes.status}: ${err}`);
        continue;
      }
      const data = await geminiRes.json();
      const audioB64 = data?.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (!audioB64) {
        console.warn(`[Gemini TTS] ${keyTag} sin campo de audio`);
        continue;
      }
      const wav = pcmToWav(Buffer.from(audioB64, "base64"));
      console.log(`[Gemini TTS] \u2713 Audio con ${keyTag} \u2014 ${wav.length} bytes WAV`);
      return wav;
    } catch (err) {
      console.warn(`[Gemini TTS] Excepci\xF3n ${keyTag}:`, String(err?.message).substring(0, 80));
      continue;
    }
  }
  return null;
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
  const cleanText = text.trim();
  const azureWav = await tryAzureTTS(cleanText, lang);
  if (azureWav) {
    res.setHeader("Content-Type", "audio/wav");
    res.setHeader("Content-Length", String(azureWav.length));
    return res.status(200).end(azureWav);
  }
  console.warn("[TTS] Azure no disponible \u2192 intentando Gemini TTS");
  const geminiWav = await tryGeminiTTS(cleanText, lang);
  if (geminiWav) {
    res.setHeader("Content-Type", "audio/wav");
    res.setHeader("Content-Length", String(geminiWav.length));
    return res.status(200).end(geminiWav);
  }
  console.error("[TTS] Azure y Gemini fallaron \u2192 fallback Web Speech en cliente");
  return res.status(503).json({ error: "TTS no disponible temporalmente" });
}
export {
  handler as default
};
