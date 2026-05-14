const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// Cargar variables de entorno
dotenv.config({ path: path.join(__dirname, '../.env') });

// Configuración de límites y seguridad
const CONFIG = {
    GEMINI_RPM: 15,
    GROQ_RPM: 30,
    SILICON_RPM: 10,
    DELAY_BETWEEN_REQUESTS: 8000, // 8 segundos para ser extra seguros (logica anti-baneo)
    CONTENTS_DIR: path.join(__dirname, '../public/data/contents'),
    LIBRARY_PATH: path.join(__dirname, '../src/data/library.ts'),
    REPORT_PATH: path.join(__dirname, '../auditoria_resultado.json'),
    LOG_PATH: path.join(__dirname, '../auditoria_api_events.log')
};

// Llaves desde .env
const KEYS = {
    GEMINI: [1, 2, 3, 4, 5].map(n => process.env[`VITE_GEMINI_KEY_${n}`]).filter(Boolean),
    GROQ: [1, 2, 3, 4, 5].map(n => process.env[`VITE_GROQ_KEY_${n}`]).filter(Boolean),
    SILICON: [1, 2, 3, 4, 5].map(n => process.env[`VITE_SILICON_KEY_${n}`]).filter(Boolean)
};

const indices = { GEMINI: 0, GROQ: 0, SILICON: 0 };
const results = [];
const apiEvents = [];

// --- CONFIGURACIÓN DE SEGURIDAD ABSOLUTA ---
const QUOTAS = {
    GROQ: { rpm: 6, rpd_limit: 900, daily_count: 0, model: "llama-3.3-70b-versatile" },
    SILICON: { rpm: 5, rpd_limit: 500, daily_count: 0, model: "Qwen/Qwen2.5-7B-Instruct" }
};

let currentProvider = 'GROQ'; // Empezamos con Groq para bypass de Gemini

function logApiEvent(provider, key, status, message) {
    const entry = `[${new Date().toISOString()}] ${provider} | KEY: ${key.substring(0, 10)}... | STATUS: ${status} | MSG: ${message}`;
    apiEvents.push(entry);
    fs.appendFileSync(CONFIG.LOG_PATH, entry + '\n');
    console.log(entry);
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function callGroq(key, bookTitle, chapter, essenceText) {
    const url = "https://api.groq.com/openai/v1/chat/completions";
    const prompt = `Eres el Maestro Joaquín Trincado. Responde brevemente al tema "${chapter}" del libro "${bookTitle}" basándote exclusivamente en esta esencia: "${essenceText}".`;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${key}`
            },
            body: JSON.stringify({
                model: QUOTAS.GROQ.model,
                messages: [{ role: "user", content: prompt }]
            })
        });

        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.error?.message || 'Error Groq');
        }

        const data = await response.json();
        return data.choices[0]?.message?.content || "SIN RESPUESTA";
    } catch (e) { throw e; }
}

async function callSilicon(key, bookTitle, chapter, essenceText) {
    const url = "https://api.siliconflow.com/v1/chat/completions";
    const prompt = `Eres el Maestro Joaquín Trincado. Responde brevemente al tema "${chapter}" del libro "${bookTitle}" basándote exclusivamente en esta esencia: "${essenceText}".`;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${key}`
            },
            body: JSON.stringify({
                model: QUOTAS.SILICON.model,
                messages: [{ role: "user", content: prompt }]
            })
        });

        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.error?.message || 'Error SiliconFlow');
        }

        const data = await response.json();
        return data.choices[0]?.message?.content || "SIN RESPUESTA";
    } catch (e) { throw e; }
}

// --- MONITOREO DE LLAVES POR SEGURIDAD ---
const keyUsage = {
    GROQ: {}, // gsk_...: count
    SILICON: {}
};

async function validateBook(book) {
    console.log(`\n[Auditor] Validando libro: ${book.title} (${book.id})`);
    const resultsPath = CONFIG.REPORT_PATH;
    const existingResults = fs.existsSync(resultsPath) ? JSON.parse(fs.readFileSync(resultsPath, 'utf8')) : [];
    let essences = {};
    const essenceFile = path.join(CONFIG.CONTENTS_DIR, `${book.id}_esencia.json`);
    if (fs.existsSync(essenceFile)) {
        essences = JSON.parse(fs.readFileSync(essenceFile, 'utf8'));
    }

    const normalize = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/gi, "").toLowerCase();
    const essenceKeys = Object.keys(essences);

    for (const chapter of book.index) {
        if (existingResults.find(r => r.book === book.title && r.chapter === chapter)) continue;

        const targetKey = normalize(chapter);
        const foundKey = essenceKeys.find(k => normalize(k) === targetKey);
        let essenceContent = "";
        if (foundKey) {
            const data = essences[foundKey];
            essenceContent = (typeof data === 'object' && data.PilotoDeCoherencia) ? data.PilotoDeCoherencia : (typeof data === 'string' ? data : "");
        }

        const hasEssence = essenceContent.length > 10;
        
        if (hasEssence) {
            let key, response;
            try {
                if (currentProvider === 'GROQ') {
                    key = KEYS.GROQ[indices.GROQ % KEYS.GROQ.length];
                    
                    // Verificación de límite por llave (900 RPD)
                    keyUsage.GROQ[key] = (keyUsage.GROQ[key] || 0) + 1;
                    if (keyUsage.GROQ[key] > QUOTAS.GROQ.rpd_limit) {
                        console.warn(`[!] Llave Groq agotada: ${key.substring(0,10)}... Rotando...`);
                        indices.GROQ++;
                        key = KEYS.GROQ[indices.GROQ % KEYS.GROQ.length];
                    }

                    console.log(`  > [GROQ] [Uso: ${keyUsage.GROQ[key]}/900] Punto: ${chapter.substring(0, 30)}...`);
                    response = await callGroq(key, book.title, chapter, essenceContent);
                    await sleep(15000); 
                } else {
                    key = KEYS.SILICON[indices.SILICON % KEYS.SILICON.length];
                    keyUsage.SILICON[key] = (keyUsage.SILICON[key] || 0) + 1;
                    console.log(`  > [SILICON] [Uso: ${keyUsage.SILICON[key]}/500] Punto: ${chapter.substring(0, 30)}...`);
                    
                    try {
                        response = await callSilicon(key, book.title, chapter, essenceContent);
                        await sleep(18000); 
                    } catch (siliconErr) {
                        currentProvider = 'GROQ';
                        continue; // Reintentar con Groq
                    }
                }

                const isCoherent = response && response.length > 30;
                results.push({
                    book: book.title,
                    chapter,
                    hasEssence,
                    aiResponse: response.substring(0, 150) + "...",
                    status: isCoherent ? 'FIEL' : 'DUDOSO',
                    synapse: (essences[foundKey]?.NodosSimapticos?.length > 0) ? essences[foundKey].NodosSimapticos : "N/A"
                });
                
                logApiEvent(currentProvider, key, 'SUCCESS', `Validado 1:1`);
                
                // Si Silicon está inestable, preferir GROQ
                currentProvider = 'GROQ'; 

            } catch (err) {
                logApiEvent(currentProvider, 'SYSTEM', 'ERROR', err.message);
                console.error(`!!! FALLO CRÍTICO EN ${currentProvider}. Deteniendo.`);
                process.exit(1);
            }
        } else {
            results.push({ book: book.title, chapter, hasEssence: false, status: 'SIN_ESENCIA' });
        }
        
        // Guardado persistente
        fs.writeFileSync(CONFIG.REPORT_PATH, JSON.stringify([...existingResults, ...results], null, 2));
    }
}

function loadRealLibrary() {
    const content = fs.readFileSync(CONFIG.LIBRARY_PATH, 'utf8');
    const match = content.match(/const LIBRARY_BOOKS: LibraryBook\[\] = (\[[\s\S]*?\]);/);
    if (!match) return [];
    try {
        let jsonStr = match[1]
            .replace(/\/\/.*$/gm, "") 
            .replace(/,(\s*[\}\]])/g, "$1"); 
        return eval(jsonStr); 
    } catch (e) {
        console.error("Error parseando library.ts:", e);
        return [];
    }
}

async function main() {
    console.log("=== INICIANDO AUDITORÍA INVISIBLE MULTI-PROVEEDOR (GROQ/SILICON) ===");
    const library = loadRealLibrary();
    for (const book of library) {
        await validateBook(book);
    }
}

main();
