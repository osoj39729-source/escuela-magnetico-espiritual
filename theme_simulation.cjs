require('dotenv').config();
const fs = require('fs');

async function simulate() {
    const filePath = 'src/data/contents/filosof-a-austera-racional_content.ts';
    const content = fs.readFileSync(filePath, 'utf8');
    const entryRegex = /"([^"]+)":\s*"((?:[^"\\]|\\.)*)"/g;
    const entries = [];
    let m;
    while ((m = entryRegex.exec(content)) !== null) {
        entries.push({ key: m[1], val: m[2] });
    }

    console.log(`Simulating 5 themes from Filosofía Austera Racional...`);
    const key = process.env.VITE_GEMINI_KEY_2 || process.env.VITE_GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`;

    const SYSTEM_INSTRUCTION = "Eres el Maestro Joaquín Trincado. Responde de forma literal y doctrinal usando el texto proporcionado.";

    for (let i = 0; i < 5; i++) {
        const entry = entries[i + 10]; // Empezamos un poco después del prefacio
        console.log(`\n>>> TEMA: ${entry.key}`);
        
        const prompt = `Basándote en este texto: "${entry.val.substring(0, 2000)}", explica brevemente este tema siguiendo tu doctrina.`;
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }]
                })
            });
            const data = await response.json();
            if (data.candidates) {
                console.log(`RESPUESTA: ${data.candidates[0].content.parts[0].text}`);
            } else {
                console.log(`ERROR: ${JSON.stringify(data)}`);
            }
        } catch (e) {
            console.log(`FETCH ERROR: ${e.message}`);
        }
    }
}

simulate();
