/**
 * CLOUDFLARE WORKER: EL ESCUDO (V1.5 - PUENTE DIRECTO)
 * PRUEBA CON LLAVE HARDCODEADA
 */

export default {
  async fetch(request, env, ctx) {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
      "Access-Control-Max-Age": "86400",
    };

    if (request.method === "OPTIONS") return new Response(null, { headers });

    // LLAVE DIRECTA (CUIDADO: ESTO ES SOLO PARA PRUEBAS)
    const KEY = "AIzaSyAURo7mrnaEcidgNqemX0GOLCElyuYpPwU";

    try {
      if (request.method !== "POST") return new Response("Solo POST permitido", { status: 405, headers });

      const body = await request.json();
      const { message, history = [] } = body;

      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:streamGenerateContent?alt=sse&key=${KEY}`;
      
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: "Eres el Profesor Joaquín Trincado. Responde breve, en texto plano y con fraternidad. No uses markdown." }] },
          contents: [
            ...history.map(m => ({
              role: m.role === 'professor' || m.role === 'model' ? 'model' : 'user',
              parts: [{ text: m.text || "" }]
            })).filter(m => m.parts[0].text),
            { role: 'user', parts: [{ text: message }] }
          ],
          generationConfig: { temperature: 0.7, maxOutputTokens: 800 }
        })
      });

      if (!response.ok) {
        const err = await response.text();
        throw new Error(`Google API Error: ${response.status} - ${err}`);
      }

      // Re-formatear el stream para el frontend
      const { readable, writable } = new TransformStream();
      const writer = writable.getWriter();
      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      (async () => {
        try {
          let buffer = "";
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, { stream: true });
            let lines = buffer.split("\n");
            buffer = lines.pop();
            for (let line of lines) {
              if (line.startsWith("data: ")) {
                try {
                  const data = JSON.parse(line.substring(6));
                  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
                  if (text) await writer.write(new TextEncoder().encode(`data: ${JSON.stringify({ text })}\n\n`));
                } catch (e) {}
              }
            }
          }
          await writer.write(new TextEncoder().encode("data: [DONE]\n\n"));
        } catch (e) {} finally { writer.close(); }
      })();

      return new Response(readable, {
        headers: { ...headers, "Content-Type": "text/event-stream" }
      });

    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { ...headers, "Content-Type": "application/json" },
      });
    }
  },
};
