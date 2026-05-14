import { handleChatStream } from '../gemini-backend';

export default async function handler(req: any, res: any) {
  // Configurar headers para streaming (SSE)
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Llamar al handler original
    return await handleChatStream(req, res);
  } catch (error: any) {
    console.error("Vercel Function Error:", error);
    return res.status(500).json({ 
      error: 'Error interno del servidor en Vercel', 
      details: error?.message || String(error),
      stack: error?.stack 
    });
  }
}
