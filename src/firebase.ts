import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithRedirect,
  getRedirectResult,
  setPersistence,
  browserLocalPersistence
} from 'firebase/auth';
import { 
  getFirestore, 
  enableIndexedDbPersistence,
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  addDoc, 
  collection, 
  query, 
  orderBy, 
  onSnapshot,
  serverTimestamp,
  arrayUnion,
  getDocs
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "eme-de-la-cu.firebaseapp.com",
  projectId: "eme-de-la-cu",
  storageBucket: "eme-de-la-cu.firebasestorage.app",
  messagingSenderId: "184063770528",
  appId: "1:184063770528:web:ef63f6d4dc9963dd256ec5",
  measurementId: "G-Q11ZKWBJ8J"
};

console.log("[Observador] Inicializando Firebase con Proyecto ID:", firebaseConfig.projectId);
if (!firebaseConfig.apiKey) console.error("[Observador] CRÍTICO: La API Key de Firebase no se ha cargado. Verifica tu archivo .env");

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Tarea 3a: Persistencia offline — Firestore cachea datos en IndexedDB del navegador.
// Cuando la conexión cae (ECONNRESET Code 14), las lecturas devuelven datos cacheados
// en lugar de null, evitando el reset de grado al volver de modo biblioteca.
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
    // Múltiples tabs abiertas — solo funciona en una
    console.warn('[Firestore] Persistencia offline no disponible: múltiples tabs activas');
  } else if (err.code === 'unimplemented') {
    // Navegador no soporta IndexedDB (Safari privado, etc.)
    console.warn('[Firestore] Persistencia offline no soportada en este navegador');
  }
});

export { 
  auth, 
  db, 
  signInWithPopup, 
  GoogleAuthProvider, 
  googleProvider, 
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithRedirect,
  getRedirectResult,
  setPersistence,
  browserLocalPersistence,
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  addDoc, 
  collection, 
  query, 
  orderBy, 
  onSnapshot,
  serverTimestamp,
  arrayUnion,
  getDocs
};

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export function handleFirestoreError(error: unknown, _operationType: OperationType, _path: string | null) {
  console.error('Firestore Error:', error);
}

export async function hashPassword(password: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(password + "EMECU_SALT_2026");
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export interface LocalUser {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  emailVerified: boolean;
  isAnonymous: boolean;
  tenantId: string | null;
  providerData: any[];
}
