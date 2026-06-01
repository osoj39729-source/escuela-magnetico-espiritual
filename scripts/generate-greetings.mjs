/**
 * generate-greetings.mjs — v2
 * 
 * Genera los 8 archivos WAV de saludos llamando DIRECTAMENTE a Azure TTS API.
 * No depende del servidor local — garantiza la voz correcta (FedericoNeural).
 * 
 * USO: node scripts/generate-greetings.mjs
 * REQUISITO: Variables AZURE_TTS_KEY_1 y AZURE_TTS_REGION en .env (o en entorno)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';

// Cargar .env para obtener las llaves Azure
config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'audio');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// ── Configuración Azure TTS ───────────────────────────────────────────────────
const AZURE_REGION = process.env.AZURE_TTS_REGION || 'eastus';
const AZURE_KEYS = [];
for (let i = 1; i <= 5; i++) {
  const k = process.env[`AZURE_TTS_KEY_${i}`];
  if (k && k.trim().length > 10) AZURE_KEYS.push(k.trim());
}

if (AZURE_KEYS.length === 0) {
  console.error('[ERR] No se encontraron llaves AZURE_TTS_KEY_1..5 en el .env');
  process.exit(1);
}

console.log(`[OK] Azure region: ${AZURE_REGION} | Llaves disponibles: ${AZURE_KEYS.length}`);

// ── Mapa de voces — mismas que usa la app en producción ──────────────────────
const VOICE_MAP = {
  es: { voice: 'es-NI-FedericoNeural', lang: 'es-NI' },
  en: { voice: 'en-US-BrandonNeural',  lang: 'en-US' },
  pt: { voice: 'pt-BR-FabioNeural',    lang: 'pt-BR' },
  fr: { voice: 'fr-FR-HenriNeural',    lang: 'fr-FR' },
};

// ── Textos exactos de los saludos ─────────────────────────────────────────────
const GREETINGS = {
  professor: {
    es: "Saludos, hermano. Soy Joaquín Trincado Mateo, fundador de la Escuela Magnetico-Espiritual de la Comuna Universal. Aquí encontrarás la luz del conocimiento racional y el camino de la evolución del espíritu. Regístrate para comenzar tu formación, o si ya estás registrado, inicia sesión e ingresa al estudio.",
    en: "Greetings, brother. I am Joaquín Trincado Mateo, founder of the Magnético Espiritual School of the Universal Commune. Here you will find the light of rational knowledge and the path of spiritual evolution. Register to begin your formation, or if you are already registered, sign in to enter the classroom.",
    pt: "Saudações, irmão. Sou Joaquín Trincado Mateo, fundador da Escola Magnético Espiritual da Comuna Universal. Aqui você encontrará a luz do conhecimento racional e o caminho da evolução espiritual. Registre-se para começar sua formação, ou se já estiver registrado, faça login e entre no estudo.",
    fr: "Salutations, frère. Je suis Joaquín Trincado Mateo, fondateur de l'École Magnétique Spirituelle de la Commune Universelle. Ici vous trouverez la lumière de la connaissance rationnelle et le chemin de l'évolution spirituelle. Inscrivez-vous pour commencer votre formation, ou si vous êtes déjà inscrit, connectez-vous et entrez dans l'étude.",
  },
  registration: {
    es: "Bienvenido, hermano. Por favor, completa tu registro para que podamos iniciar formalmente tu cátedra doctrinal.",
    en: "Welcome, brother. Please complete your registration so we can formally begin your doctrinal lecture.",
    pt: "Bem-vindo, irmão. Por favor, complete seu registro para que possamos iniciar formalmente sua aula doutrinária.",
    fr: "Bienvenue, frère. Veuillez compléter votre inscription afin que nous puissions commencer formellement votre conférence doctrinale.",
  },
};

// ── Construir SSML — mismo formato que usa la app en producción ───────────────
function buildSSML(text, lang) {
  const { voice, lang: xmlLang } = VOICE_MAP[lang] || VOICE_MAP['es'];
  const safe = text
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
  return `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='${xmlLang}'><voice name='${voice}'><prosody rate='-5%' pitch='-5%'>${safe}</prosody></voice></speak>`;
}

// ── Llamada directa a Azure TTS API ──────────────────────────────────────────
async function generateAzure(type, lang, text) {
  const filename = `${type}_${lang}.wav`;
  const filepath = path.join(OUTPUT_DIR, filename);
  const endpoint = `https://${AZURE_REGION}.tts.speech.microsoft.com/cognitiveservices/v1`;
  const ssml = buildSSML(text, lang);

  console.log(`[GEN]  ${filename} (${VOICE_MAP[lang]?.voice || 'desconocida'})...`);

  for (let idx = 0; idx < AZURE_KEYS.length; idx++) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Ocp-Apim-Subscription-Key': AZURE_KEYS[idx],
          'Content-Type': 'application/ssml+xml',
          'X-Microsoft-OutputFormat': 'riff-24khz-16bit-mono-pcm',
          'User-Agent': 'MaestroTrincado-Generator/2.0',
        },
        body: ssml,
      });

      if (res.status === 429) { console.warn(`       Llave ${idx+1} agotada → rotando`); continue; }
      if (!res.ok) { console.error(`       Error ${res.status}: ${(await res.text()).substring(0, 100)}`); continue; }

      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(filepath, buf);
      console.log(`[OK]   ${filename} — ${(buf.length / 1024).toFixed(1)} KB (Azure directo ✓)`);
      return true;
    } catch (e) {
      console.error(`       Excepción llave ${idx+1}: ${e.message}`);
      continue;
    }
  }
  console.error(`[ERR]  ${filename}: Azure falló — archivo no generado`);
  return false;
}

async function main() {
  console.log('=== Generador de Saludos — Azure TTS Directo ===');
  console.log(`Voz español: ${VOICE_MAP.es.voice}`);
  console.log(`Destino: public/audio/`);
  console.log('');

  let ok = 0, fail = 0;
  for (const [type, langs] of Object.entries(GREETINGS)) {
    for (const [lang, text] of Object.entries(langs)) {
      // Siempre regenerar (borrar si existe)
      const filepath = path.join(OUTPUT_DIR, `${type}_${lang}.wav`);
      if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
      const success = await generateAzure(type, lang, text);
      success ? ok++ : fail++;
    }
  }

  console.log('');
  console.log(`=== Completado: ${ok} OK, ${fail} fallidos ===`);
  if (ok > 0) console.log('Siguiente paso: git add public/audio/ && git commit -m "fix: WAV saludos con FedericoNeural Azure directo" && git push');
}

main();
