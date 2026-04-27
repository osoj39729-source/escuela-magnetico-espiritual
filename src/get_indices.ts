import { GoogleGenAI } from "@google/genai";
import * as fs from 'fs';

import { getNextApiKey } from "./services/geminiService";
const ai = new GoogleGenAI({ apiKey: getNextApiKey() });

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

  const prompt = `Imagina que tienes los libros originales de Joaquín Trincado. Voy a crear un Array de Grados con títulos reales en código fuente. 
Preciso generar un JSON detallado reproduciendo los nombres de los temas para cada libro. 
El libro "Buscando a Dios" (Grado 2) TIENE 113 TEMAS EXACTAMENTE. Genera 113 strings para él con títulos coherentes si no recuerdas exacta la lista empírica, pero usa los reales si los tienes. 
Devuelve SÓLO el Array en formato JSON, sin \`\`\`json ni nada más, que se pueda parsear directamente.
Formato:
[
  { "grade": 1, "title": "...", "themeCount": 20, "themes": ["...", "..."] },
  ...
]`;

  try {
    const chat = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: prompt,
    });
    const text = chat.text || "[]";
    const cleaned = text.replace(/```json/g, "").replace(/```/g, "").trim();
    fs.writeFileSync('indices.json', cleaned);
    console.log("Indices written to indices.json");
  } catch (e) {
    console.error(e);
  }
}

run();
