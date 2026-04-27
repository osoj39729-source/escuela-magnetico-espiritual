// localStorage-based persistence service (replaces Firebase)

export interface LocalUser {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string | null;
  emailVerified: boolean;
  isAnonymous: boolean;
  tenantId: string | null;
  providerData: {
    providerId: string;
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
  }[];
}

export interface StudentProfile {
  uid: string;
  fullName: string;
  email: string;
  address: string;
  phone: string;
  countryCode: string;
  economicActivity: string;
  educationLevel: string;
  idNumber: string;
  nationality: string;
  currentGrade: number;
  currentLesson: number;
  intelligenceScore: number;
  isVerified: boolean;
  role: 'admin' | 'student';
  registrationDate: any;
  lastInteraction: any;
  entries: any[];
  faculties: {
    perceptiveIntelligence: number;
    memory: number;
    imagination: number;
    attention: number;
    judgment: number;
    reason: number;
    will: number;
  };
  evolutionLog?: any[];
  password?: string;
  confirmPassword?: string;
}

export interface Certificate {
  id: string;
  studentId: string;
  grade: number;
  issueDate: any;
  studentName: string;
}

const STUDENTS_KEY = 'emecu_students';
const CERTIFICATES_KEY = 'emecu_certificates';
const CURRENT_USER_KEY = 'emecu_current_user';

// In-memory verification code store
const verificationCodes: Map<string, string> = new Map();

function generateUID(): string {
  return 'local_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 9);
}

// --- User / Auth ---

export function getCurrentUser(): LocalUser | null {
  const raw = localStorage.getItem(CURRENT_USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function setCurrentUser(user: LocalUser): void {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

export function clearCurrentUser(): void {
  localStorage.removeItem(CURRENT_USER_KEY);
}

// --- Security (Anti-XSS & Hashing) ---

export function sanitizeHTML(str: string): string {
  if (typeof str !== 'string') return str;
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

export function sanitizeObject<T>(obj: T): T {
  if (typeof obj === 'string') return sanitizeHTML(obj) as any;
  if (typeof obj !== 'object' || obj === null) return obj;
  if (Array.isArray(obj)) return obj.map(sanitizeObject) as any;
  
  const result: any = {};
  for (const [key, value] of Object.entries(obj)) {
    result[key] = sanitizeObject(value);
  }
  return result;
}

export async function hashPassword(password: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(password + "EMECU_SALT_2026");
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// --- Student Profiles ---

function getAllStudentsMap(): Record<string, StudentProfile> {
  const raw = localStorage.getItem(STUDENTS_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function saveAllStudentsMap(map: Record<string, StudentProfile>): void {
  localStorage.setItem(STUDENTS_KEY, JSON.stringify(map));
}

export async function saveStudentProfile(data: StudentProfile): Promise<void> {
  const map = getAllStudentsMap();
  const sanitized = sanitizeObject(data);
  map[data.uid] = sanitized;
  saveAllStudentsMap(map);
  
  // Sync with server for multi-user support
  try {
    await fetch('/api/save-student', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sanitized)
    });
  } catch (err) {
    console.warn("Server sync failed, data saved locally:", err);
  }
}

export function getStudentProfile(uid?: string): StudentProfile | null {
  const map = getAllStudentsMap();
  const id = uid || getCurrentUser()?.uid;
  if (!id) return null;
  return map[id] || null;
}

export function updateStudentProfile(uid: string, updates: Partial<StudentProfile>): void {
  const map = getAllStudentsMap();
  if (map[uid]) {
    const existing = map[uid];
    const merged = { ...existing };
    for (const [key, value] of Object.entries(updates)) {
      if (key === 'faculties' && typeof value === 'object' && value !== null) {
        // Merge faculties deeply
        merged[key] = { ...(existing[key] as any || {}), ...value };
      } else if (key === 'entries' && Array.isArray(value)) {
        // Append to existing entries
        merged[key] = [...(existing[key] as any[] || []), ...value];
      } else if (key === 'evolutionLog' && Array.isArray(value)) {
        // Append to existing evolutionLog
        merged[key] = [...(existing[key] as any[] || []), ...value];
      } else {
        merged[key] = value;
      }
    }
    map[uid] = sanitizeObject(merged);
    saveAllStudentsMap(map);
  }
}

export async function getAllStudents(): Promise<StudentProfile[]> {
  try {
    const res = await fetch('/api/students');
    const data = await res.json();
    if (data.success && Array.isArray(data.students)) {
      // Sync local storage with server data
      const map: Record<string, StudentProfile> = {};
      data.students.forEach((s: StudentProfile) => {
        if (s.uid) map[s.uid] = s;
      });
      saveAllStudentsMap(map);
      return data.students;
    }
  } catch (err) {
    console.warn("Failed to fetch students from server, using local data:", err);
  }
  
  const map = getAllStudentsMap();
  return Object.values(map);
}

// --- Certificates ---

function getAllCertificatesList(): Certificate[] {
  const raw = localStorage.getItem(CERTIFICATES_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveAllCertificatesList(list: Certificate[]): void {
  localStorage.setItem(CERTIFICATES_KEY, JSON.stringify(list));
}

export function saveCertificate(cert: Omit<Certificate, 'id'>): Certificate {
  const list = getAllCertificatesList();
  const newCert: Certificate = {
    ...cert,
    id: generateUID(),
  };
  list.push(newCert);
  saveAllCertificatesList(list);
  return newCert;
}

export function getCertificates(studentId: string): Certificate[] {
  return getAllCertificatesList().filter(c => c.studentId === studentId);
}

// --- Verification Codes ---

export function generateVerificationCode(email: string): string {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  verificationCodes.set(email, code);
  // Auto-expire after 10 minutes
  setTimeout(() => {
    verificationCodes.delete(email);
  }, 10 * 60 * 1000);
  return code;
}

export function verifyCode(email: string, code: string): boolean {
  const stored = verificationCodes.get(email);
  if (stored && stored === code) {
    verificationCodes.delete(email);
    return true;
  }
  return false;
}

// --- Helpers ---

export function serverTimestamp(): any {
  return new Date();
}

export function arrayUnion(...values: any[]): any {
  // Returns the values as-is; the caller should handle merging
  return values;
}

export function generateUIDSync(): string {
  return generateUID();
}
