import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenerativeAI } from "@google/generative-ai";
import Groq from "groq-sdk";
import { LIBRARY_BOOKS } from '../src/data/library.js';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');

dotenv.config({ path: path.join(ROOT, '.env') });

const GEMINI_RPM_LIMIT = 2; 
const GROQ_RPM_LIMIT = 10;
const SAFETY_DELAY = 20000; 
const ERROR_COOLDOWN = 60000; 

type Provider = 'Gemini' | 'Groq';

interface KeyStats {
  key: string;
  provider: Provider;
  rpmCount: number;
  lastMinuteReset: number;
  suspendedUntil: number;
}

class ApiManager {
  private keys: KeyStats[] = [];
  private currentIndex = 0;

  constructor() {
    this.loadKeys();
  }

  private loadKeys() {
    for (let i = 1; i <= 5; i++) {
      const qKey = process.env[`VITE_GROQ_KEY_${i}`];
      if (qKey && qKey.length > 10) this.keys.push(this.createKeyStat(qKey, 'Groq'));
    }
    for (let i = 1; i <= 5; i++) {
      const gKey = process.env[`VITE_GEMINI_KEY_${i}`];
      if (gKey && gKey.length > 10) this.keys.push(this.createKeyStat(gKey, 'Gemini'));
    }
  }

  private createKeyStat(key: string, provider: Provider): KeyStats {
    return { key, provider, rpmCount: 0, lastMinuteReset: Date.now(), suspendedUntil: 0 };
  }

  public getNextAvailableKey(): KeyStats | null {
    const now = Date.now();
    for (let i = 0; i < this.keys.length; i++) {
      const idx = (this.currentIndex + i) % this.keys.length;
      const stat = this.keys[idx];
      if (now - stat.lastMinuteReset >= 60000) { stat.rpmCount = 0; stat.lastMinuteReset = now; }
      if (stat.suspendedUntil === 0 && stat.rpmCount < (stat.provider === 'Gemini' ? GEMINI_RPM_LIMIT : GROQ_RPM_LIMIT)) {
        this.currentIndex = (idx + 1) % this.keys.length;
        return stat;
      }
    }
    return null;
  }

  public registerUsage(stat: KeyStats) { stat.rpmCount++; }
  public suspendKey(stat: KeyStats, ms: number) { stat.suspendedUntil = Date.now() + ms; }
}

const apiManager = new ApiManager();

const SYSTEM_PROMPT = `Eres el Maestro Joaquín Trincado. Destila la ESENCIA DOCTRINAL absoluta.
REGLAS DE ORO:
1. FIDELIDAD 1:1.
2. JSON OBLIGATORIO: { 
    PilotoDeCoherencia: "DNA doctrinal", 
    CitaInelutable: "Frase literal", 
    EjemploPedagogico: "Analogía usada", 
    IdeasPrincipales: [], 
    PuntosImportantes: [], 
    NodosSinapticos: ["Terminos_Atomicos_Cortos"], 
    ContextoDiccionario: { "Termino": "Contexto de uso por el autor" } 
}
3. IMPORTANTE: Los NodosSinapticos DEBEN ser términos atómicos (máximo 2 palabras) para linkear con el diccionario global.
4. SIN ALUCINACIONES.`;

async function callAI(stat: KeyStats, prompt: string) {
  if (stat.provider === 'Gemini') {
    const genAI = new GoogleGenerativeAI(stat.key);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash", systemInstruction: SYSTEM_PROMPT });
    const result = await model.generateContent(prompt);
    return (await result.response).text();
  } else {
    const groq = new Groq({ apiKey: stat.key });
    const result = await groq.chat.completions.create({
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, { role: 'user', content: prompt }],
      model: "llama-3.3-70b-versatile",
      response_format: { type: "json_object" }
    });
    return result.choices[0].message.content;
  }
}

async function distillSafe() {
  const book = LIBRARY_BOOKS.find(b => b.id === 'buscando-a-dios-joaquin-trincado');
  if (!book) return;

  const contentPath = path.join(ROOT, 'public', 'data', 'contents', `${book.id}_content.json`);
  const esenciaPath = path.join(ROOT, 'public', 'data', 'contents', `${book.id}_esencia.json`);

  const content = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));
  const esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf-8'));

  const missingNodes = book.index.filter(node => !esencia[node]);
  console.log(`[CONTINUANDO] Procesando 3 temas más con pausas de seguridad.`);

  for (const node of missingNodes.slice(0, 3)) {
    const text = content[node];
    if (!text) continue;

    let success = false;
    while (!success) {
      const stat = apiManager.getNextAvailableKey();
      if (!stat) {
        await new Promise(r => setTimeout(r, 10000));
        continue;
      }

      console.log(`[SEGURIDAD] ${node} con ${stat.provider}...`);
      try {
        const resText = await callAI(stat, `Obra: ${book.title}\nTema: ${node}\nTexto: ${text.substring(0, 8000)}`);
        apiManager.registerUsage(stat);

        const distilled = JSON.parse(resText!.replace(/```json|```/g, "").trim());
        esencia[node] = distilled;
        fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2));
        
        console.log(`[OK] ${node} guardado. Pausa de 20s...`);
        success = true;
        await new Promise(r => setTimeout(r, SAFETY_DELAY));
      } catch (e: any) {
        console.error(`[ALERTA] Re-intentando tras enfriamiento.`);
        apiManager.suspendKey(stat, ERROR_COOLDOWN);
        await new Promise(r => setTimeout(r, ERROR_COOLDOWN));
      }
    }
  }
}

distillSafe().catch(console.error);
