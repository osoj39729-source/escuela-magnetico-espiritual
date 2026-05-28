import type { VercelRequest, VercelResponse } from '@vercel/node';

// Helper to convert standard JSON into Firestore REST format
function toFirestoreREST(obj: any): any {
  if (obj === null) return { nullValue: null };
  if (typeof obj === 'boolean') return { booleanValue: obj };
  if (typeof obj === 'number') return Number.isInteger(obj) ? { integerValue: obj.toString() } : { doubleValue: obj };
  if (typeof obj === 'string') return { stringValue: obj };
  if (Array.isArray(obj)) return { arrayValue: { values: obj.map(toFirestoreREST) } };
  if (typeof obj === 'object') {
    const fields: any = {};
    for (const [key, val] of Object.entries(obj)) {
      if (val !== undefined) fields[key] = toFirestoreREST(val);
    }
    return { mapValue: { fields } };
  }
  return { nullValue: null };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { token, uid, profilePayload, interactionPayload } = req.body;

  if (!token || !uid || !profilePayload || !interactionPayload) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const PROJECT_ID = "eme-de-la-cu";
  const API_KEY = process.env.VITE_FIREBASE_API_KEY || process.env.FIREBASE_API_KEY;

  if (!API_KEY) {
    return res.status(500).json({ error: 'Server configuration missing API KEY' });
  }

  try {
    // 1. Convert payloads to Firestore format
    const firestoreProfile = { fields: toFirestoreREST(profilePayload).mapValue.fields };
    const firestoreInteraction = { fields: toFirestoreREST(interactionPayload).mapValue.fields };

    // 2. Update Profile (PATCH request to allow merge)
    // Para hacer merge parcial, usar updateMask. Si mandamos todo el documento, no hace falta.
    // Como perfilActualizado contiene TODO el objeto, podemos hacer PATCH sin updateMask, o enviar los fields.
    const profileUrl = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/students/${uid}/cognitive/profile?key=${API_KEY}`;
    
    // We append updateMask parameters so it acts like { merge: true }
    const updateMaskParams = Object.keys(firestoreProfile.fields)
      .map(key => `updateMask.fieldPaths=${encodeURIComponent(key)}`)
      .join('&');

    const profileRes = await fetch(`${profileUrl}&${updateMaskParams}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(firestoreProfile)
    });

    if (!profileRes.ok) {
      const err = await profileRes.text();
      console.error("[Proxy] Error updating profile:", err);
      return res.status(profileRes.status).json({ error: 'Failed to update profile', details: err });
    }

    // 3. Save Interaction (POST request to interactions subcollection)
    const interactionUrl = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/students/${uid}/interactions?key=${API_KEY}`;
    
    const interactionRes = await fetch(interactionUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(firestoreInteraction)
    });

    if (!interactionRes.ok) {
      const err = await interactionRes.text();
      console.error("[Proxy] Error saving interaction:", err);
      return res.status(interactionRes.status).json({ error: 'Failed to save interaction', details: err });
    }

    // 4. Synchronize real-time cognitive stats back to the main student document for Admin visibility and Client sync
    try {
      const mainStudentUrl = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/students/${uid}?key=${API_KEY}`;
      
      const mainStudentPayload = {
        fields: toFirestoreREST({
          intelligenceScore: Math.round(profilePayload.puntajeGlobal),
          faculties: {
            perceptiveIntelligence: Math.round(profilePayload.facultades.inteligenciaPerceptiva?.nivel || 30),
            memory: Math.round(profilePayload.facultades.memoria?.nivel || 30),
            imagination: Math.round(profilePayload.facultades.imaginacion?.nivel || 30),
            attention: Math.round(profilePayload.facultades.atencion?.nivel || 30),
            judgment: Math.round(profilePayload.facultades.juicio?.nivel || 30),
            reason: Math.round(profilePayload.facultades.razon?.nivel || 30),
            will: Math.round(profilePayload.facultades.voluntad?.nivel || 30),
          }
        }).mapValue.fields
      };

      const mainStudentMaskParams = "updateMask.fieldPaths=intelligenceScore&updateMask.fieldPaths=faculties";

      const mainStudentRes = await fetch(`${mainStudentUrl}&${mainStudentMaskParams}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(mainStudentPayload)
      });

      if (!mainStudentRes.ok) {
        const err = await mainStudentRes.text();
        console.error("[Proxy] Error updating main student doc:", err);
      }
    } catch (mainDocErr) {
      console.error("[Proxy] Critical error updating main student doc:", mainDocErr);
    }

    return res.status(200).json({ success: true, message: 'Interaction and profile saved successfully via proxy' });

  } catch (error: any) {
    console.error("[Proxy] Internal error:", error);
    return res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
