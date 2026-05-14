const fs = require('fs');
const https = require('https');

const envFile = fs.readFileSync('.env', 'utf8');
const keys = { gemini: [], groq: [], silicon: [] };

envFile.split('\n').forEach(line => {
  if (line.includes('GEMINI_API_KEY') || line.includes('GEMINI_KEY')) keys.gemini.push(line.split('=')[1].trim());
  if (line.includes('GROQ_KEY')) keys.groq.push(line.split('=')[1].trim());
  if (line.includes('SILICON_KEY')) keys.silicon.push(line.split('=')[1].trim());
});

const testGemini = (key) => new Promise(resolve => {
  https.get(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash?key=${key}`, (res) => {
    resolve(res.statusCode === 200 ? '✅ ACTIVA' : `❌ RECHAZADA (${res.statusCode})`);
  }).on('error', () => resolve('❌ ERROR DE CONEXIÓN'));
});

const testGroq = (key) => new Promise(resolve => {
  const options = {
    hostname: 'api.groq.com',
    path: '/openai/v1/models',
    method: 'GET',
    headers: { 'Authorization': `Bearer ${key}` }
  };
  const req = https.request(options, (res) => {
    resolve(res.statusCode === 200 ? '✅ ACTIVA' : `❌ RECHAZADA (${res.statusCode})`);
  });
  req.on('error', () => resolve('❌ ERROR DE CONEXIÓN'));
  req.end();
});

const testSilicon = (key) => new Promise(resolve => {
  const options = {
    hostname: 'api.siliconflow.cn',
    path: '/v1/models',
    method: 'GET',
    headers: { 'Authorization': `Bearer ${key}` }
  };
  const req = https.request(options, (res) => {
    resolve(res.statusCode === 200 ? '✅ ACTIVA' : `❌ RECHAZADA (${res.statusCode})`);
  });
  req.on('error', () => resolve('❌ ERROR DE CONEXIÓN'));
  req.end();
});

async function runTests() {
  console.log('=========================================');
  console.log('🕵️  INICIANDO DIAGNÓSTICO DE LLAVES  🕵️');
  console.log('=========================================\n');

  console.log('--- 🧠 GEMINI (GOOGLE) ---');
  for (let i = 0; i < keys.gemini.length; i++) {
    const status = await testGemini(keys.gemini[i]);
    console.log(`Llave Gemini ${i + 1} (...${keys.gemini[i].slice(-5)}): ${status}`);
  }

  console.log('\n--- ⚡ GROQ ---');
  for (let i = 0; i < keys.groq.length; i++) {
    const status = await testGroq(keys.groq[i]);
    console.log(`Llave Groq ${i + 1} (...${keys.groq[i].slice(-5)}): ${status}`);
  }

  console.log('\n--- 🐉 SILICONFLOW ---');
  for (let i = 0; i < keys.silicon.length; i++) {
    const status = await testSilicon(keys.silicon[i]);
    console.log(`Llave Silicon ${i + 1} (...${keys.silicon[i].slice(-5)}): ${status}`);
  }
}

runTests();
