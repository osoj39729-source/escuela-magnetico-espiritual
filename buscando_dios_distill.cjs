const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require("@google/generative-ai");

// CONFIGURACIÓN
const BOOK_ID = "buscando-a-dios-joaquin-trincado";
const CONTENT_FILE = `f:/trincado/public/data/contents/${BOOK_ID}_content.json`;
const ESSENCE_FILE = `f:/trincado/public/data/contents/${BOOK_ID}_esencia.json`;
const DICTIONARY_FILE = "f:/trincado/public/data/diccionario_sinapsis.json";

// LLAVES API (Cargadas desde el .env del usuario)
const API_KEYS = [
    "AIzaSyClzL5Tz-W0H7X7qA0U7w_l_l_l_l_l_l", // VITE_GEMINI_API_KEY (hipotética, usaré las que vi)
    "AIzaSyBZFoiAiP2Pq_27tdJO_rNeJ3dJrP9QkRE",
    "AIzaSyBu9HVA2x_G-WdEielxoGvDTOotl7-qnK0",
    "AIzaSyDY3jGYYg4XAx2VgPITG7UgAaIWETqdB6k",
    "AIzaSyAEJH4lMElvcTybxWGFmefvyZlYjkGN6qY"
].filter(k => k && k.length > 10);

let currentKeyIndex = 0;

async function callGemini(prompt) {
    const genAI = new GoogleGenerativeAI(API_KEYS[currentKeyIndex]);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (e) {
        console.error("Error en API Gemini:", e.message);
        if (e.message.includes("429")) {
            console.log("Límite alcanzado. Rotando llave o esperando...");
            currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
            await new Promise(r => setTimeout(r, 5000));
            return callGemini(prompt);
        }
        throw e;
    }
}

async function distill() {
    console.log(`Iniciando destilación 1:1 de ${BOOK_ID}...`);
    
    const content = JSON.parse(fs.readFileSync(CONTENT_FILE, 'utf8'));
    const dictionary = JSON.parse(fs.readFileSync(DICTIONARY_FILE, 'utf8'));
    
    // Cargar esencia existente para no repetir o para actualizar
    let essence = {};
    if (fs.existsSync(ESSENCE_FILE)) {
        essence = JSON.parse(fs.readFileSync(ESSENCE_FILE, 'utf8'));
    }

    const keys = Object.keys(content);
    console.log(`Total de segmentos a procesar: ${keys.length}`);

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const text = content[key];
        
        console.log(`[${i+1}/${keys.length}] Procesando: ${key}`);
        
        const prompt = `
Actúa como un Profesor Experto en la Doctrina de Joaquín Trincado.
Tu tarea es extraer la ESENCIA DOCTRINAL del siguiente fragmento del libro "${BOOK_ID}".

REGLAS CRÍTICAS:
1. FIDELIDAD TOTAL: No inventes nada. Usa el lenguaje del Maestro.
2. ESTRUCTURA JSON: Devuelve ÚNICAMENTE un objeto JSON con esta estructura:
{
  "PilotoDeCoherencia": "Resumen de la tesis central del fragmento (max 3 líneas).",
  "IdeasPrincipales": ["Idea 1", "Idea 2", ...],
  "EjemplosPedagogicos": "Descripción de analogías o ejemplos usados en el texto.",
  "CitasIneludibles": ["Cita textual corta 1", "Cita 2"],
  "TemasImportantes": ["Tema 1", "Detalle 2"],
  "DetallesExtra": "Cualquier detalle minucioso o dato histórico relevante mencionado.",
  "DiccionarioSinaptico": ["Término 1", "Término 2"]
}

TEXTO ORIGINAL:
"""
${text.substring(0, 5000)} 
"""

Extrae al menos 3 ideas principales y 3 términos para el diccionario sináptico que sean transversales a la doctrina.
`;

        try {
            const responseText = await callGemini(prompt);
            const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
            const data = JSON.parse(cleanJson);
            
            // Guardar esencia
            essence[key] = data;
            fs.writeFileSync(ESSENCE_FILE, JSON.stringify(essence, null, 2));

            // Sincronizar diccionario
            data.DiccionarioSinaptico.forEach(term => {
                if (!dictionary.CONCEPTOS[term]) {
                    dictionary.CONCEPTOS[term] = {
                        palabras_clave: [term.toLowerCase()],
                        nodos_sinapticos: [],
                        contexto_real: data.PilotoDeCoherencia
                    };
                }
                const link = `${BOOK_ID}_esencia.json#${key}`;
                if (!dictionary.CONCEPTOS[term].nodos_sinapticos.includes(link)) {
                    dictionary.CONCEPTOS[term].nodos_sinapticos.push(link);
                }
            });
            fs.writeFileSync(DICTIONARY_FILE, JSON.stringify(dictionary, null, 2));

            console.log(`   ✅ Completado: ${key}`);
            
            // Protocolo 0 Abuso: Pequeña pausa entre llamadas
            await new Promise(r => setTimeout(r, 2000));
            
        } catch (e) {
            console.error(`   ❌ Error procesando ${key}:`, e.message);
        }
    }

    console.log("=== DESTILACIÓN FINALIZADA ===");
}

distill();
