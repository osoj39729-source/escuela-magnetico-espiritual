// Firebase shim — all Firebase calls are now backed by localStorage
// This file provides the same API surface so App.tsx needs minimal changes.

import {
  getCurrentUser,
  setCurrentUser,
  clearCurrentUser,
  saveStudentProfile as saveProfile,
  getStudentProfile as getProfile,
  updateStudentProfile as updateProfile,
  getAllStudents,
  saveCertificate,
  getCertificates,
  serverTimestamp as localServerTimestamp,
  arrayUnion as localArrayUnion,
  generateUIDSync,
  hashPassword,
  type LocalUser,
  type StudentProfile,
} from './services/localStorageService';

export { hashPassword };

// Re-export types
export type { LocalUser };

let currentUser = getCurrentUser();

export const auth = {
  get currentUser(): LocalUser | null {
    return currentUser;
  },
};

class GoogleAuthProviderStub {
  constructor() {}
}

export const GoogleAuthProvider = GoogleAuthProviderStub;
export const googleProvider = new GoogleAuthProviderStub();

export function signInWithPopup(_auth: any, _provider: any, userData?: { displayName: string, email: string }): Promise<{ user: LocalUser }> {
  // For local mode: if userData is provided use it, otherwise show simple prompt
  if (currentUser && !userData) {
    return Promise.resolve({ user: currentUser });
  }
  
  const displayName = userData?.displayName || "Estudiante";
  const email = userData?.email || "usuario@gmail.com";
  
  if (!email) {
    return Promise.reject(new Error("Email is required"));
  }

  const user: LocalUser = {
    uid: generateUIDSync(),
    displayName: displayName || email.split('@')[0],
    email,
    photoURL: userData ? `https://lh3.googleusercontent.com/a/default-user=s96-c` : null,
    emailVerified: true,
    isAnonymous: false,
    tenantId: null,
    providerData: [{
      providerId: 'google.com',
      displayName: displayName || email.split('@')[0],
      email,
      photoURL: userData ? `https://lh3.googleusercontent.com/a/default-user=s96-c` : null,
    }],
  };

  currentUser = user;
  setCurrentUser(user);
  return Promise.resolve({ user });
}

export type Unsubscribe = () => void;

export function onAuthStateChanged(_auth: any, callback: (user: LocalUser | null) => void): Unsubscribe {
  // Check localStorage for existing user
  const existingUser = getCurrentUser();
  if (existingUser) {
    currentUser = existingUser;
  }
  callback(existingUser);
  return () => {};
}

export function signOut(_auth: any): Promise<void> {
  currentUser = null;
  clearCurrentUser();
  return Promise.resolve();
}

export async function signInWithEmailAndPassword(_auth: any, email: string, password: string): Promise<{ user: LocalUser }> {
  const students = await getAllStudents();
  const hashedPassword = await hashPassword(password);
  
  const student = students.find(s => s.email === email && s.password === hashedPassword);
  if (!student) {
    throw new Error("auth/user-not-found");
  }

  const user: LocalUser = {
    uid: student.uid,
    displayName: student.fullName || email.split('@')[0],
    email,
    photoURL: null,
    emailVerified: false,
    isAnonymous: false,
    tenantId: null,
    providerData: [{
      providerId: 'local',
      displayName: student.fullName || email.split('@')[0],
      email,
      photoURL: null,
    }],
  };

  currentUser = user;
  setCurrentUser(user);
  return { user };
}

export function createUserWithEmailAndPassword(_auth: any, email: string, _password: string): Promise<{ user: LocalUser }> {
  const existingProfile = getProfile();
  if (existingProfile) {
    const user = getCurrentUser();
    if (user) {
      currentUser = user;
      return Promise.resolve({ user });
    }
  }

  const user: LocalUser = {
    uid: generateUIDSync(),
    displayName: '',
    email,
    photoURL: null,
    emailVerified: false,
    isAnonymous: false,
    tenantId: null,
    providerData: [{
      providerId: 'local',
      displayName: '',
      email,
      photoURL: null,
    }],
  };

  currentUser = user;
  setCurrentUser(user);
  return Promise.resolve({ user });
}

// --- Firestore stubs ---

export const db = {};

export function doc(_db: any, collectionName: string, ...pathSegments: string[]): FirestoreDocRef {
  // Normalize: doc(db, 'students', uid) → { path: 'students/uid' }
  const fullPath = [collectionName, ...pathSegments].join('/');
  return new FirestoreDocRef(fullPath);
}

export async function setDoc(ref: FirestoreDocRef, data: any): Promise<void> {
  const parts = ref.path.split('/');
  if (parts.length === 2) {
    // doc(db, 'collection', 'id')
    const [, id] = parts;
    await saveProfile({ ...(data as StudentProfile), uid: id });
  }
}

export function getDoc(ref: FirestoreDocRef): Promise<{ exists: () => boolean; data: () => any; id: string }> {
  const parts = ref.path.split('/');
  const id = parts[parts.length - 1];
  const profile = getProfile(id);
  return Promise.resolve({
    exists: () => !!profile,
    data: () => profile,
    id,
  });
}

export function updateDoc(ref: FirestoreDocRef, updates: any): Promise<void> {
  const parts = ref.path.split('/');
  const id = parts[parts.length - 1];
  
  // Handle arrayUnion in updates — merge arrays
  const processed: any = {};
  for (const [key, value] of Object.entries(updates)) {
    if (value && typeof value === 'object' && 'isArrayUnion' in (value as any)) {
      // arrayUnion — skip, handled by caller
      processed[key] = (value as any).values;
    } else if (key === 'lastInteraction' || key === 'registrationDate') {
      processed[key] = { seconds: Date.now() / 1000, nanoseconds: 0 };
    } else {
      processed[key] = value;
    }
  }
  
  updateProfile(id, processed);
  return Promise.resolve();
}

export function addDoc(_collectionRef: any, data: any): Promise<{ id: string }> {
  const id = generateUIDSync();
  saveCertificate(data);
  return Promise.resolve({ id });
}

export function collection(_db: any, collectionName: string): FirestoreQuery {
  return new FirestoreQuery(collectionName);
}

export function query(_collectionOrQuery: any, ...constraints: any[]): FirestoreQuery {
  // Return the same query (constraints are no-ops in localStorage)
  if (_collectionOrQuery instanceof FirestoreQuery) {
    return _collectionOrQuery;
  }
  return new FirestoreQuery('');
}

export function orderBy(_field: string, _direction?: string): any {
  return { type: 'orderBy', field: _field };
}

export function onSnapshot(queryOrRef: any, callback: (snapshot: any) => void, errorCallback?: (error: any) => void): Unsubscribe {
  let isUnsubscribed = false;
  
  const fetchAndNotify = async () => {
    try {
      const students = await getAllStudents();
      if (isUnsubscribed) return;
      
      const snapshot = {
        docs: students.map(s => ({
          id: s.uid,
          data: () => s,
        })),
      };
      callback(snapshot);
    } catch (err) {
      if (isUnsubscribed) return;
      if (errorCallback) errorCallback(err);
      else console.error(err);
    }
  };

  fetchAndNotify();
  return () => { isUnsubscribed = true; };
}

export function serverTimestamp(): any {
  return localServerTimestamp();
}

export function arrayUnion(...values: any[]): { isArrayUnion: true; values: any[] } {
  return { isArrayUnion: true, values };
}

// --- Error handling ---

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export function handleFirestoreError(error: unknown, _operationType: OperationType, _path: string | null) {
  console.error('Firestore Error (localStorage):', error);
}

// --- Helper classes ---

class FirestoreDocRef {
  path: string;
  id: string;
  
  constructor(path: string) {
    this.path = path;
    this.id = path.split('/').pop() || '';
  }
}

class FirestoreQuery {
  private _collectionName: string;
  
  constructor(collectionName: string) {
    this._collectionName = collectionName;
  }
}
