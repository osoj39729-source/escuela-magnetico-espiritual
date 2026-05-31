/**
 * generate-greetings.mjs
 * 
 * Genera los archivos WAV de los saludos del profesor e intro de registro.
 * Los textos son fijos (no dinámicos), así que se pre-generan UNA sola vez
 * con la voz Charon de Gemini TTS y se sirven como archivos estáticos.
 * 
 * USO: node scripts/generate-greetings.mjs
 * REQUISITO: El servidor local debe estar corriendo (npm run dev)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'audio');

// Asegurarse de que el directorio existe
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`[OK] Directorio creado: public/audio/`);
}

// ── Textos de los saludos ─────────────────────────────────────────────────────
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

const TTS_ENDPOINT = 'http://localhost:3000/api/tts';


async function generateFile(type, lang, text) {
  const filename = `${type}_${lang}.wav`;
  const filepath = path.join(OUTPUT_DIR, filename);

  // No regenerar si ya existe
  if (fs.existsSync(filepath)) {
    console.log(`[SKIP] ${filename} ya existe — elimínalo para regenerar`);
    return;
  }

  console.log(`[GEN]  Generando ${filename}...`);
  try {
    const res = await fetch(TTS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, lang }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error(`[ERR]  ${filename}: HTTP ${res.status} — ${err.substring(0, 100)}`);
      return;
    }

    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(filepath, buffer);
    console.log(`[OK]   ${filename} guardado — ${(buffer.length / 1024).toFixed(1)} KB`);
  } catch (e) {
    console.error(`[ERR]  ${filename}: ${e.message}`);
    console.error(`       ¿Está el servidor corriendo? Ejecuta: npm run dev`);
  }
}

async function main() {
  console.log('=== Generador de Saludos Pre-grabados ===');
  console.log(`Destino: public/audio/`);
  console.log(`Endpoint: ${TTS_ENDPOINT}`);
  console.log('');

  for (const [type, langs] of Object.entries(GREETINGS)) {
    for (const [lang, text] of Object.entries(langs)) {
      await generateFile(type, lang, text);
    }
  }

  console.log('');
  console.log('=== Completado ===');
  console.log('Archivos generados en public/audio/');
  console.log('Ahora haz: git add public/audio/ && git commit && git push');
}

main();
