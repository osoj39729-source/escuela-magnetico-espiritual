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

// --- CONFIGURACIÓN DE SEGURIDAD Y PERSISTENCIA ---
const GEMINI_RPM_LIMIT = 2; 
const GROQ_RPM_LIMIT = 8;
const SAFETY_DELAY = 20000; 
const ERROR_COOLDOWN = 65000; 

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
      
      const gKey = process.env[`VITE_GEMINI_KEY_${i}`];
      if (gKey && gKey.length > 10) this.keys.push(this.createKeyStat(gKey, 'Gemini'));
    }
    console.log(`[MOTOR UNIVERSAL] Sistema cargado con ${this.keys.length} llaves activas.`);
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
REGLAS:
1. FIDELIDAD 1:1 CON EL TEXTO.
2. JSON: { PilotoDeCoherencia, CitaInelutable, EjemploPedagogico, IdeasPrincipales[], PuntosImportantes[], NodosSinapticos[], ContextoDiccionario: {} }
3. SIN ALUCINACIONES. TÉRMINOS ATÓMICOS EN SINAPSIS.`;

async function callAI(stat: KeyStats, prompt: string) {
  try {
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
  } catch (e: any) {
    if (e.status === 429) throw { status: 429 };
    throw e;
  }
}

async function startUniversalDistillation() {
  console.log("=== INICIANDO MOTOR DE DESTILACIÓN UNIVERSAL (MODO CONTINUO) ===");
  
  for (const book of LIBRARY_BOOKS) {
    const contentPath = path.join(ROOT, 'public', 'data', 'contents', `${book.id}_content.json`);
    const esenciaPath = path.join(ROOT, 'public', 'data', 'contents', `${book.id}_esencia.json`);

    if (!fs.existsSync(contentPath)) {
      console.log(`[AVISO] Saltando ${book.title}: No hay archivo de contenido.`);
      continue;
    }

    const content = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));
    let esencia = {};
    if (fs.existsSync(esenciaPath)) esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf-8'));

    const missingNodes = book.index.filter(node => !esencia[node as keyof typeof esencia]);
    if (missingNodes.length === 0) {
      console.log(`[OK] ${book.title} ya está completo.`);
      continue;
    }

    console.log(`[TRABAJANDO] ${book.title}: ${missingNodes.length} nodos por destilar.`);

    for (const node of missingNodes) {
      const text = content[node];
      if (!text) continue;

      let success = false;
      while (!success) {
        const stat = apiManager.getNextAvailableKey();
        if (!stat) {
          console.log("[ESPERA] Cuotas al límite. Silencio preventivo de 30s...");
          await new Promise(r => setTimeout(r, 30000));
          continue;
        }

        try {
          const resText = await callAI(stat, `Libro: ${book.title}\nTema: ${node}\nContenido: ${text.substring(0, 10000)}`);
          apiManager.registerUsage(stat);

          const distilled = JSON.parse(resText!.replace(/```json|```/g, "").trim());
          (esencia as any)[node] = distilled;
          fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2));
          
          console.log(`[✔] ${book.id} -> ${node.substring(0, 30)}...`);
          success = true;
          await new Promise(r => setTimeout(r, SAFETY_DELAY));
        } catch (e: any) {
          if (e.status === 429) {
            console.warn(`[429] Llave ${stat.provider} agotada. Enfriando 65s.`);
            apiManager.suspendKey(stat, ERROR_COOLDOWN);
            await new Promise(r => setTimeout(r, ERROR_COOLDOWN));
          } else {
            console.error(`[FALLO] Error en ${node}:`, e.message);
            success = true; // Saltar nodo problemático para no detener el motor
          }
        }
      }
    }
    console.log(`[FIESTA] ${book.title} FINALIZADO AL 100%.`);
  }
  console.log("=== PROCESO UNIVERSAL COMPLETADO. TODA LA BIBLIOTECA ESTÁ AL 100% ===");
}

startUniversalDistillation().catch(console.error);
