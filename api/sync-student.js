// api-src/sync-student.ts
function toFirestoreREST(obj) {
  if (obj === null) return { nullValue: null };
  if (typeof obj === "boolean") return { booleanValue: obj };
  if (typeof obj === "number") return Number.isInteger(obj) ? { integerValue: obj.toString() } : { doubleValue: obj };
  if (typeof obj === "string") return { stringValue: obj };
  if (Array.isArray(obj)) return { arrayValue: { values: obj.map(toFirestoreREST) } };
  if (typeof obj === "object") {
    const fields = {};
    for (const [key, val] of Object.entries(obj)) {
      if (val !== void 0) fields[key] = toFirestoreREST(val);
    }
    return { mapValue: { fields } };
  }
  return { nullValue: null };
}
async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  const { token, uid, profilePayload, interactionPayload } = req.body;
  if (!token || !uid || !profilePayload || !interactionPayload) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const PROJECT_ID = "eme-de-la-cu";
  const API_KEY = process.env.VITE_FIREBASE_API_KEY || process.env.FIREBASE_API_KEY;
  if (!API_KEY) {
    return res.status(500).json({ error: "Server configuration missing API KEY" });
  }
  try {
    const firestoreProfile = { fields: toFirestoreREST(profilePayload).mapValue.fields };
    const firestoreInteraction = { fields: toFirestoreREST(interactionPayload).mapValue.fields };
    const profileUrl = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/students/${uid}/cognitive/profile?key=${API_KEY}`;
    const updateMaskParams = Object.keys(firestoreProfile.fields).map((key) => `updateMask.fieldPaths=${encodeURIComponent(key)}`).join("&");
    const profileRes = await fetch(`${profileUrl}&${updateMaskParams}`, {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(firestoreProfile)
    });
    if (!profileRes.ok) {
      const err = await profileRes.text();
      console.error("[Proxy] Error updating profile:", err);
      return res.status(profileRes.status).json({ error: "Failed to update profile", details: err });
    }
    const interactionUrl = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/students/${uid}/interactions?key=${API_KEY}`;
    const interactionRes = await fetch(interactionUrl, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(firestoreInteraction)
    });
    if (!interactionRes.ok) {
      const err = await interactionRes.text();
      console.error("[Proxy] Error saving interaction:", err);
      return res.status(interactionRes.status).json({ error: "Failed to save interaction", details: err });
    }
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
            will: Math.round(profilePayload.facultades.voluntad?.nivel || 30)
          }
        }).mapValue.fields
      };
      const mainStudentMaskParams = "updateMask.fieldPaths=intelligenceScore&updateMask.fieldPaths=faculties";
      const mainStudentRes = await fetch(`${mainStudentUrl}&${mainStudentMaskParams}`, {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
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
    return res.status(200).json({ success: true, message: "Interaction and profile saved successfully via proxy" });
  } catch (error) {
    console.error("[Proxy] Internal error:", error);
    return res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}
export {
  handler as default
};
