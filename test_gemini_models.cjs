require('dotenv').config();
const fs = require('fs');

async function testModels() {
    const key = process.env.VITE_GEMINI_KEY_2 || process.env.VITE_GEMINI_API_KEY;
    const models = ['gemini-2.5-flash', 'gemini-1.5-flash', 'gemini-2.0-flash'];
    
    for (const model of models) {
        console.log(`Testing model: ${model}...`);
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: 'Hola, di "OK" si recibes este mensaje.' }] }]
                })
            });
            const data = await response.json();
            if (data.candidates) {
                console.log(`Result for ${model}: SUCCESS -> ${data.candidates[0].content.parts[0].text}`);
            } else {
                console.log(`Result for ${model}: FAILED -> ${JSON.stringify(data.error || data)}`);
            }
        } catch (e) {
            console.log(`Result for ${model}: ERROR -> ${e.message}`);
        }
    }
}

testModels();
