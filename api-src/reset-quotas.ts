export default async function handler(req: any, res: any) {
  if (req.method !== 'POST' && req.method !== 'OPTIONS') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    const { handleResetQuotas } = await import('./gemini-backend.js');
    return await handleResetQuotas(req, res);
  } catch (error: any) {
    console.error("Vercel ResetQuotas Error:", error);
    return res.status(500).json({ error: 'Error al reiniciar cuotas' });
  }
}
