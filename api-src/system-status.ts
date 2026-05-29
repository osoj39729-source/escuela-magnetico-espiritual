export default async function handler(req: any, res: any) {
  if (req.method !== 'GET' && req.method !== 'OPTIONS') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    const { handleSystemStatus } = await import('./gemini-backend.js');
    return await handleSystemStatus(req, res);
  } catch (error: any) {
    console.error("Vercel SystemStatus Error:", error);
    return res.status(500).json({ error: 'Error al obtener estado' });
  }
}
