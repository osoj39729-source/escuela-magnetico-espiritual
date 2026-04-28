import 'dotenv/config';
import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const STUDENTS_FILE = path.join(__dirname, 'students.json');

function readStudentsFile(): any[] {
  try {
    if (fs.existsSync(STUDENTS_FILE)) {
      return JSON.parse(fs.readFileSync(STUDENTS_FILE, 'utf-8'));
    }
  } catch {
    console.error("Error reading students.json");
  }
  return [];
}

function appendStudent(student: any): void {
  const students = readStudentsFile();
  students.push(student);
  fs.writeFileSync(STUDENTS_FILE, JSON.stringify(students, null, 2), 'utf-8');
}

// In-memory verification code store (server-side)
const serverVerificationCodes: Map<string, string> = new Map();

import net from "net";

async function getAvailablePort(startPort: number): Promise<number> {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.listen(startPort, () => {
      const { port } = server.address() as net.AddressInfo;
      server.close(() => resolve(port));
    });
    server.on("error", () => {
      resolve(getAvailablePort(startPort + 1));
    });
  });
}

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || await getAvailablePort(3000);

  app.use(express.json());

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/send-verification", async (req, res) => {
    const { email, code, motivationalMessage } = req.body;
    
    // Store the code server-side
    if (code) {
      serverVerificationCodes.set(email, code);
      setTimeout(() => serverVerificationCodes.delete(email), 10 * 60 * 1000);
    }
    
    // In a real app, you would use an email service like SendGrid, Mailgun, or AWS SES.
    // For this demo, we will log the email content to the console and return success.
    console.log("--------------------------------------------------");
    console.log(`SENDING EMAIL TO: ${email}`);
    console.log(`SUBJECT: ¡Bienvenido a tu camino de luz!`);
    console.log(`MESSAGE: ${motivationalMessage}`);
    console.log(`VERIFICATION CODE: ${code}`);
    console.log("--------------------------------------------------");

    res.json({ success: true, message: "Email sent successfully (simulated)" });
  });

  app.post("/api/send-diploma", async (req, res) => {
    const { email, studentName, gradeTitle } = req.body;
    
    console.log("--------------------------------------------------");
    console.log(`SENDING DIPLOMA TO: ${email}`);
    console.log(`SUBJECT: ¡Felicidades! Has completado el ${gradeTitle}`);
    console.log(`RECIPIENT: ${studentName}`);
    console.log(`BODY: Adjunto encontrarás tu certificado de aprobación por completar satisfactoriamente todos los temas del ${gradeTitle}.`);
    console.log("--------------------------------------------------");

    res.json({ success: true, message: "Diploma sent successfully (simulated)" });
  });

  app.post("/api/verify-email", (req, res) => {
    const { email, code } = req.body;
    if (!email || !code) {
      return res.status(400).json({ success: false, error: "Email and code are required" });
    }
    const stored = serverVerificationCodes.get(email);
    if (stored && stored === code) {
      serverVerificationCodes.delete(email);
      return res.json({ success: true });
    }
    return res.status(400).json({ success: false, error: "Invalid or expired code" });
  });

  app.post("/api/save-student", (req, res) => {
    try {
      appendStudent(req.body);
      res.json({ success: true });
    } catch (err) {
      console.error("Error saving student:", err);
      res.status(500).json({ success: false, error: "Failed to save student" });
    }
  });

  app.get("/api/students", (req, res) => {
    try {
      const students = readStudentsFile();
      res.json({ success: true, students });
    } catch (err) {
      console.error("Error reading students:", err);
      res.status(500).json({ success: false, error: "Failed to read students" });
    }
  });

  // Importar y usar el handler de Gemini Backend
  const { handleChatStream } = await import('./gemini-backend.ts');
  app.post("/api/chat-stream", handleChatStream);

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
    
    // Abrir el navegador automáticamente
    import('child_process').then(({ exec }) => {
      const url = `http://localhost:${PORT}`;
      const start = process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open';
      exec(`${start} ${url}`);
    }).catch(err => console.error("Error al abrir navegador:", err));
  });
}

startServer();
