require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const TARGET_BOOKS = [
  'buscando-a-dios-joaquin-trincado',
  'los-cinco-amores',
  'primer-rayo-de-luz',
  'conocete-a-ti-mismo-1',
  'ley-de-las-mediumidades-en-general',
  'la-revoluci-n-de-m-xico',
  'reglamento-interno-e-m-e-delac--u--1',
  '-1library-co--discurso-obispo-strossmayer'
];

const DICTIONARY_PATH = path.join(__dirname, 'public/data/diccionario_sinapsis.json');

const GEMINI_KEYS = [
  process.env.VITE_GEMINI_KEY_1, process.env.VITE_GEMINI_KEY_2, 
  process.env.VITE_GEMINI_KEY_3, process.env.VITE_GEMINI_KEY_4, process.env.VITE_GEMINI_KEY_5
].filter(Boolean);

const GROQ_KEYS = [
  process.env.VITE_GROQ_KEY_1, process.env.VITE_GROQ_KEY_2, 
  process.env.VITE_GROQ_KEY_3, process.env.VITE_GROQ_KEY_4, process.env.VITE_GROQ_KEY_5
].filter(Boolean);

const SILICON_KEYS = [
  process.env.VITE_SILICON_KEY_1, process.env.VITE_SILICON_KEY_2, 
  process.env.VITE_SILICON_KEY_3, process.env.VITE_SILICON_KEY_4, process.env.VITE_SILICON_KEY_5
].filter(Boolean);

let providers = [
  { name: 'Gemini', keys: GEMINI_KEYS, currentIndex: 0 },
  { name: 'Groq', keys: GROQ_KEYS, currentIndex: 0 },
  { name: 'SiliconFlow', keys: SILICON_KEYS, currentIndex: 0 }
].filter(p => p.keys.length > 0);

let currentProviderIndex = 0;

async function callAPI(prompt) {
    const provider = providers[currentProviderIndex];
    const key = provider.keys[provider.currentIndex];
    
    console.log(`[>>] Usando Motor: ${provider.name} | Llave Index: ${provider.currentIndex}`);
    
    // Rotate key for next time
    provider.currentIndex = (provider.currentIndex + 1) % provider.keys.length;
    // Rotate provider for next time
    currentProviderIndex = (currentProviderIndex + 1) % providers.length;

    try {
        if (provider.name === 'Gemini') {
            const genAI = new GoogleGenerativeAI(key);
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
            const result = await model.generateContent(prompt);
            return { text: await result.response.text(), error: null, provider: 'Gemini' };
        } 
        else if (provider.name === 'Groq') {
            const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: { "Authorization": `Bearer ${key}`, "Content-Type": "application/json" },
                body: JSON.stringify({
                    model: "llama-3.1-8b-instant",
                    messages: [{ role: "user", content: prompt }],
                    max_tokens: 300
                })
            });
            if (!res.ok) return { text: null, error: `GROQ ERROR ${res.status}: ${await res.text()}`, provider: 'Groq' };
            const data = await res.json();
            return { text: data.choices[0].message.content, error: null, provider: 'Groq' };
        } 
        else if (provider.name === 'SiliconFlow') {
            const res = await fetch("https://api.siliconflow.com/v1/chat/completions", {
                method: "POST",
                headers: { "Authorization": `Bearer ${key}`, "Content-Type": "application/json" },
                body: JSON.stringify({
                    model: "Qwen/Qwen2.5-7B-Instruct",
                    messages: [{ role: "user", content: prompt }],
                    max_tokens: 300
                })
            });
            if (!res.ok) return { text: null, error: `SILICON ERROR ${res.status}: ${await res.text()}`, provider: 'SiliconFlow' };
            const data = await res.json();
            return { text: data.choices[0].message.content, error: null, provider: 'SiliconFlow' };
        }
    } catch (e) {
        return { text: null, error: e.message, provider: provider.name };
    }
}

async function runAudit() {
    console.log("=== INICIANDO AUDITORÍA RAG MULTI-MOTOR (CERO ABUSO) ===");
    
    let dictionary = { CONCEPTOS: {} };
    if (fs.existsSync(DICTIONARY_PATH)) {
        dictionary = JSON.parse(fs.readFileSync(DICTIONARY_PATH, 'utf8'));
    }

    const report = [];

    for (const bookId of TARGET_BOOKS) {
        const essencePath = path.join(__dirname, `public/data/contents/${bookId}_esencia.json`);
        const contentPath = path.join(__dirname, `public/data/contents/${bookId}_content.json`);
        
        console.log(`\n--- Auditando: ${bookId} ---`);
        
        let essenceData = {};
        let rawContent = {};
        let essencePresent = false;
        let contentPresent = false;

        if (fs.existsSync(essencePath)) {
            essenceData = JSON.parse(fs.readFileSync(essencePath, 'utf8'));
            essencePresent = Object.keys(essenceData).length > 0;
        }
        if (fs.existsSync(contentPath)) {
            rawContent = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
            contentPresent = Object.keys(rawContent).length > 0;
        }

        const keys = Object.keys(essenceData);
        if (keys.length === 0) {
            console.log("❌ Sin nodos de esencia para este libro.");
            report.push({
                libro: bookId,
                esencia_presente: false,
                sinapsis_presente: false,
                texto_original_presente: contentPresent,
                error: "No hay llaves en esencia.json"
            });
            continue;
        }

        // Test 1 nodo por libro
        const nodeKey = keys[0];
        const nodeData = essenceData[nodeKey];
        
        let synapsisPresent = false;
        let synapsisDetails = [];
        if (nodeData.DiccionarioSinaptico || nodeData.TemasInterconectados) {
            const arr = nodeData.DiccionarioSinaptico || nodeData.TemasInterconectados || [];
            if (arr.length > 0) synapsisPresent = true;
            arr.forEach(t => {
                const term = t.trim().toUpperCase();
                const def = (dictionary.CONCEPTOS && dictionary.CONCEPTOS[term]) ? "Definición encontrada" : "Definición pendiente";
                synapsisDetails.push({ termino: term, def });
            });
        }

        const prompt = `
Eres el Maestro Joaquín Trincado. 
Basado en esta ESENCIA: "${nodeData.PilotoDeCoherencia}"
Y estos Conceptos: ${JSON.stringify(synapsisDetails)}
Texto Literal de referencia: "${(rawContent[nodeKey] || "N/A").substring(0, 300)}"
El estudiante te pregunta: "Maestro, explíqueme la lección sobre: ${nodeKey}".
Responde en 2-3 párrafos cortos y directos (máx 300 tokens) sin salirte del dogma.
`;
        
        const logEntry = {
            libro: bookId,
            nodo: nodeKey,
            esencia_presente: essencePresent,
            sinapsis_presente: synapsisPresent,
            texto_original_presente: (rawContent[nodeKey] !== undefined),
            motor_utilizado: "",
            error_de_llave: null,
            prompt_enviado: prompt.substring(0, 400) + "...",
            respuesta_ia: "",
            diagnostico_alucinacion: "PENDIENTE DE REVISIÓN HUMANA"
        };

        const result = await callAPI(prompt);
        logEntry.motor_utilizado = result.provider;
        
        if (result.error) {
            console.log(`❌ ERROR API: ${result.error}`);
            logEntry.error_de_llave = result.error;
        } else {
            console.log(`✅ Respuesta IA recibida (Motor: ${result.provider})`);
            logEntry.respuesta_ia = result.text;
            
            // Basic heuristic diagnostic
            if (!result.text || result.text.length < 50) {
                logEntry.diagnostico_alucinacion = "SOSPECHA: Respuesta demasiado corta o vacía.";
            } else if (result.text.toLowerCase().includes("no puedo") || result.text.toLowerCase().includes("lo siento")) {
                logEntry.diagnostico_alucinacion = "SOSPECHA: Modelo rechazó responder por seguridad.";
            } else {
                logEntry.diagnostico_alucinacion = "OK: Respuesta parece doctrinaria.";
            }
        }
        
        report.push(logEntry);

        console.log("⏳ Esperando 8 segundos (Protocolo 0 Abuso)...");
        await new Promise(r => setTimeout(r, 8000));
    }

    fs.writeFileSync('targeted_audit_report.json', JSON.stringify(report, null, 2));
    console.log("\n=== AUDITORÍA FINALIZADA. Reporte guardado en targeted_audit_report.json ===");
}

runAudit();
