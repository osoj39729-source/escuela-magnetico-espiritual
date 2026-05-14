require('dotenv').config();
const fs = require('fs');

async function callSiliconFlow(textToInject, themeName) {
  const key = process.env.VITE_SILICON_KEY_1;
  const url = `https://api.siliconflow.com/v1/chat/completions`;
  
  const LIBRARY_SYSTEM_INSTRUCTION = `Eres el Maestro Joaquín Trincado.`;
  const prompt = `SESIÓN: Estudiante: "Nelson", Grado 1, Estudio Libre sobre "${themeName}".\nTEXTO LITERAL:\n"${textToInject}"\nDebes usar este texto para extraer y entregar la Idea Primaria, Ideas Secundarias e Ideas Importantes.\nMENSAJE DEL ESTUDIANTE: Maestro, quiero profundizar ahora en el tema "${themeName}".\nREGLA DE IDIOMA (CRÍTICA): El estudiante desea hablar en "Español".`;

  console.log(`[SIMULADOR] Llamando a SiliconFlow (Qwen 2.5 7B)...`);
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
      },
      body: JSON.stringify({
        model: 'Qwen/Qwen2.5-7B-Instruct',
        messages: [
          { role: 'system', content: LIBRARY_SYSTEM_INSTRUCTION },
          { role: 'user', content: prompt }
        ]
      })
    });
    
    if (!res.ok) {
      console.log(`Error: ${res.status} - ${await res.text()}`);
      return;
    }
    const data = await res.json();
    console.log(`[SIMULADOR] RESPUESTA:`);
    console.log(JSON.stringify(data, null, 2));
  } catch (e) {
    console.log("Error de conexión:", e);
  }
}

const buf = fs.readFileSync('src/data/contents/buscando-a-dios-joaquin-trincado_content.ts');
const str = buf.toString('utf8');
const regex = /^\s{2}"([^"]+)":\s*"([\s\S]{0,8000})/gm;
let m;
while ((m = regex.exec(str)) !== null) {
  if (m[1].includes('1198')) {
    callSiliconFlow(m[2], m[1]);
    break;
  }
}
