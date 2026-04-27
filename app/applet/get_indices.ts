import { GoogleGenAI } from "@google/genai";
import * as fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  const books = [
    { grade: 1, title: "El Discurso del Obispo Stromayer" },
    { grade: 2, title: "Buscando a Dios" },
    { grade: 3, title: "Primer Rayo de Luz" },
    { grade: 4, title: "Espiritismo en su Asiento" },
    { grade: 5, title: "Filosofía Austera Racional" },
    { grade: 6, title: "Los Cinco Amores" },
    { grade: 7, title: "Magnetismo en su Origen" },
    { grade: 8, title: "Espiritismo Estudiado" },
    { grade: 9, title: "Profilaxis de la Vida" },
    { grade: 10, title: "Los Extremos se Tocan" },
    { grade: 11, title: "Conócete a ti Mismo" },
    { grade: 12, title: "Código de Amor Universal" },
    { grade: 13, title: "Compilación de Reglamentos de la EMECU" }
  ];

  const prompt = `Eres un conservador absoluto de la Biblioteca de la Escuela Magnético-Espiritual de la Comuna Universal (EMECU) fundada por Joaquín Trincado.
Se requiere recuperar el INDICE OFICIAL COMPLETO de estos 13 libros para digitalizarlos en un JSON. 
El libro 2 "Buscando a Dios" SABEMOS que tiene EXACTAMENTE 113 temas (o un índice de 113 epígrafes). 
Reconstruye con máxima precisión (y aproxima de forma estructurada si no tienes el índice total pero cumple con la cuota real de acápites de los libros de Trincado).

Escribe el output en formato JSON estricto con esta estructura:
[
  { "grade": 1, "title": "...", "themeCount": 20, "themes": ["...", "..."] },
  ... (para los 13 grados)
]
Genera los temas mas reales posibles correspondientes al índice (113 para el grado 2).`;

  try {
    const chat = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: prompt,
    });
    const text = chat.text || "[]";
    const cleaned = text.replace(/```json/g, "").replace(/```/g, "").trim();
    fs.writeFileSync('indices_trincado.json', cleaned);
    console.log("Indices written to indices_trincado.json");
  } catch (e) {
    console.error(e);
  }
}

run();
