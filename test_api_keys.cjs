require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const Groq = require('groq-sdk');

async function testGeminiKey(keyStr, label) {
    if (!keyStr) return console.log(`${label}: Vacía`);
    try {
        const genAI = new GoogleGenerativeAI(keyStr);
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
        await model.generateContent('Hola');
        console.log(`${label}: ✅ ACTIVA Y FUNCIONANDO`);
    } catch (e) {
        console.log(`${label}: ❌ BANEADA o ERROR -> ${e.message.split('\n')[0]}`);
    }
}

async function testGroqKey(keyStr, label) {
    if (!keyStr) return console.log(`${label}: Vacía`);
    try {
        const groq = new Groq({ apiKey: keyStr });
        await groq.chat.completions.create({
            messages: [{ role: 'user', content: 'Hola' }],
            model: "llama-3.3-70b-versatile",
            max_tokens: 10
        });
        console.log(`${label}: ✅ ACTIVA Y FUNCIONANDO`);
    } catch (e) {
        console.log(`${label}: ❌ BANEADA o ERROR -> ${e.message.split('\n')[0]}`);
    }
}

async function run() {
    console.log("--- PRUEBA DE LLAVES GEMINI ---");
    for(let i=1; i<=5; i++) {
        await testGeminiKey(process.env[`VITE_GEMINI_KEY_${i}`], `Gemini Key ${i}`);
    }
    
    console.log("\n--- PRUEBA DE LLAVES GROQ ---");
    for(let i=1; i<=2; i++) {
        await testGroqKey(process.env[`VITE_GROQ_KEY_${i}`], `Groq Key ${i}`);
    }
}

run();
