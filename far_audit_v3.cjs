const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Configuración de rutas
const FAR_ESSENCE_PATH = 'public/data/contents/filosof-a-austera-racional_esencia.json';
const FAR_CONTENT_PATH = 'public/data/contents/filosof-a-austera-racional_content.json';
const DICTIONARY_PATH = 'public/data/diccionario_sinapsis.json';
const KEYS_FAR_PATH = 'keys_far.json';

// Bloque de llaves (Simulación de rotación)
const KEYS = [
    process.env.VITE_SILICON_KEY_1,
    process.env.VITE_SILICON_KEY_2,
    process.env.VITE_SILICON_KEY_3,
    process.env.VITE_SILICON_KEY_4,
    process.env.VITE_SILICON_KEY_5
].filter(k => k && k.length > 0);

let currentKeyIndex = 0;

function getNextKey() {
    const key = KEYS[currentKeyIndex];
    currentKeyIndex = (currentKeyIndex + 1) % KEYS.length;
    return key;
}

async function runAudit() {
    console.log("=== INICIANDO AUDITORÍA PROFUNDA: FILOSOFÍA AUSTERA RACIONAL ===");
    
    const essence = JSON.parse(fs.readFileSync(FAR_ESSENCE_PATH, 'utf8'));
    const content = JSON.parse(fs.readFileSync(FAR_CONTENT_PATH, 'utf8'));
    const dictionary = JSON.parse(fs.readFileSync(DICTIONARY_PATH, 'utf8')).CONCEPTOS;
    const keys = JSON.parse(fs.readFileSync(KEYS_FAR_PATH, 'utf8'));

    const report = {
        total_nodos: keys.length,
        nodos_con_esencia: 0,
        terminos_diccionario_validados: 0,
        terminos_faltantes: [],
        muestras_rag: []
    };

    // 1. Verificación de Integridad Estructural
    for (const key of keys) {
        if (essence[key]) {
            report.nodos_con_esencia++;
            
            // Validar términos del diccionario sináptico
            const terms = essence[key].DiccionarioSinaptico || [];
            terms.forEach(term => {
                // Normalizar término para búsqueda (quitar espacios, camelcase o guiones)
                const normalizedTerm = term.replace(/\s+/g, '_');
                if (dictionary[normalizedTerm] || dictionary[term]) {
                    report.terminos_diccionario_validados++;
                } else {
                    if (!report.terminos_faltantes.includes(term)) {
                        report.terminos_faltantes.push(term);
                    }
                }
            });
        }
    }

    console.log(`- Nodos totales: ${report.total_nodos}`);
    console.log(`- Nodos con esencia: ${report.nodos_con_esencia}`);
    console.log(`- Términos validados en diccionario: ${report.terminos_diccionario_validados}`);
    console.log(`- Términos faltantes en diccionario: ${report.terminos_faltantes.length}`);

    // 2. Simulación de RAG (Primeros 3 nodos para no abusar de la API)
    const sampleKeys = keys.slice(0, 3);
    for (const key of sampleKeys) {
        const nodeEssence = essence[key];
        const nodeContent = content[key] ? content[key].substring(0, 500) + "..." : "CONTENIDO NO ENCONTRADO";
        
        // Construcción del "Package" que se enviaría a la IA
        const ragPackage = {
            role: "Juez Amoroso (Joaquín Trincado)",
            context: nodeEssence.PilotoDeCoherencia,
            synapsis: nodeEssence.DiccionarioSinaptico.map(t => {
                const normalized = t.replace(/\s+/g, '_');
                return { term: t, definition: dictionary[normalized]?.context_real || "Definición pendiente" };
            }),
            raw_text: nodeContent
        };

        console.log(`\n--- PROBANDO NODO: ${key} ---`);
        console.log(`[PAQUETE ENVIADO]: ${JSON.stringify(ragPackage).substring(0, 200)}...`);

        // Simulación de llamada a la API con rotación y espera
        const apiKey = getNextKey();
        const response = await simulateCall(apiKey, ragPackage, key);
        
        report.muestras_rag.push({
            nodo: key,
            input_preview: JSON.stringify(ragPackage).substring(0, 100),
            response_preview: response ? response.substring(0, 150) : "ERROR"
        });

        // Protocolo 0 Abuso: Esperar 1 segundo entre llamadas
        await new Promise(r => setTimeout(r, 1000));
    }

    fs.writeFileSync('far_audit_report_final.json', JSON.stringify(report, null, 2));
    console.log("\n=== AUDITORÍA FINALIZADA. Reporte guardado en far_audit_report_final.json ===");
}

async function simulateCall(key, pkg, theme) {
    const url = "https://api.siliconflow.com/v1/chat/completions";
    const prompt = `Eres el Maestro Joaquín Trincado. Responde al estudiante basándote en esta ESENCIA: ${pkg.context}. 
    Usa estos conceptos sinápticos: ${JSON.stringify(pkg.synapsis)}. 
    Texto original: ${pkg.raw_text}. 
    Pregunta: Maestro, explíqueme la esencia de "${theme}".`;

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${key}`
            },
            body: JSON.stringify({
                model: 'Qwen/Qwen2.5-7B-Instruct',
                messages: [{ role: 'user', content: prompt }],
                max_tokens: 300
            })
        });
        
        if (!res.ok) return `Error ${res.status}: ${await res.text()}`;
        const data = await res.json();
        return data.choices[0].message.content;
    } catch (e) {
        return `Error de conexión: ${e.message}`;
    }
}

runAudit();
