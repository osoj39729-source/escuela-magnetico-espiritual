import React, { useState, useEffect, useRef, useMemo, ChangeEvent, FormEvent } from 'react';
import { Send, BookOpen, BrainCircuit, Mic, Volume2, Sparkles, Activity, Play, Pause, Square, Download, CheckCircle2, PlayCircle, ArrowRight, ArrowLeft, Loader2, User, LogOut, Shield, Settings, ChevronRight, BarChart3, Users, Clock, Globe, CreditCard, GraduationCap, MapPin, Phone, Mail, Briefcase, Fingerprint, FastForward, Lock, Award, ShieldCheck, Eye, EyeOff } from 'lucide-react';
import { chatWithProfessor, chatWithProfessorStream, generatePresentationVideo, getNextApiKey } from './services/geminiService';
import { motion, AnimatePresence } from 'motion/react';
import { jsPDF } from 'jspdf';
import { auth, db, googleProvider, signInWithPopup, signInWithRedirect, getRedirectResult, onAuthStateChanged, signOut, doc, setDoc, getDoc, updateDoc, collection, addDoc, query, orderBy, onSnapshot, handleFirestoreError, OperationType, serverTimestamp, createUserWithEmailAndPassword, signInWithEmailAndPassword, hashPassword, arrayUnion, setPersistence, browserLocalPersistence } from './firebase';
import { saveStudentProfile, getStudentProfile } from './services/localStorageService';
import type { LocalUser as FirebaseUser } from './firebase';
import { GoogleGenerativeAI } from "@google/generative-ai";

declare global {
  interface Window {
    aistudio?: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

const EmecuFlag = () => (
  <motion.div 
    className="flex flex-col w-12 h-8 shadow-md rounded-sm overflow-hidden border border-slate-700/50"
    animate={{ rotateZ: [-2, 2, -2], y: [-1, 1, -1] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className="flex-1 bg-red-600"></div>
    <div className="flex-1 bg-orange-500"></div>
    <div className="flex-1 bg-yellow-400"></div>
    <div className="flex-1 bg-green-600"></div>
    <div className="flex-1 bg-blue-500"></div>
    <div className="flex-1 bg-indigo-600"></div>
    <div className="flex-1 bg-violet-600"></div>
  </motion.div>
);

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: any;
}

class ErrorBoundary extends React.Component<any, any> {
  state: ErrorBoundaryState = { hasError: false, error: null };

  static getDerivedStateFromError(error: any) { return { hasError: true, error }; }
  componentDidCatch(error: any, errorInfo: any) { console.error("ErrorBoundary caught:", error, errorInfo); }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-8 text-center">
          <div className="bg-red-500/10 border border-red-500/20 p-8 rounded-3xl max-w-lg">
            <h1 className="text-2xl font-bold text-red-400 mb-4">Error de Renderizado</h1>
            <p className="text-slate-400 mb-6">{this.state.error?.message || "Algo salió mal al cargar el aula."}</p>
            <button onClick={() => window.location.reload()} className="px-6 py-3 bg-slate-800 text-slate-100 rounded-xl hover:bg-slate-700 transition-all">Reintentar</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Foto local del Maestro Joaquín Trincado (desde la carpeta del proyecto)
const TRINCADO_IMG = "https://raw.githubusercontent.com/osoj39729-source/escuela-magnetico-espiritual/main/public/joaquin_trincado.png";
const TRINCADO_IMG_FALLBACK = "https://raw.githubusercontent.com/osoj39729-source/escuela-magnetico-espiritual/main/public/joaquin_trincado.png";

const countryCodes = [
  { code: '+54', name: 'Argentina' },
  { code: '+55', name: 'Brasil' },
  { code: '+56', name: 'Chile' },
  { code: '+57', name: 'Colombia' },
  { code: '+58', name: 'Venezuela' },
  { code: '+591', name: 'Bolivia' },
  { code: '+593', name: 'Ecuador' },
  { code: '+595', name: 'Paraguay' },
  { code: '+598', name: 'Uruguay' },
  { code: '+502', name: 'Guatemala' },
  { code: '+503', name: 'El Salvador' },
  { code: '+504', name: 'Honduras' },
  { code: '+505', name: 'Nicaragua' },
  { code: '+506', name: 'Costa Rica' },
  { code: '+507', name: 'Panamá' },
  { code: '+52', name: 'México' },
  { code: '+34', name: 'España' },
  { code: '+1', name: 'USA/Canada' },
  { code: '+33', name: 'Francia' },
  { code: '+351', name: 'Portugal' },
];

// --- Components ---

const RegistrationForm = ({ t, onSubmit, onLogin, onSkip, onBack, user, language, externalError, setExternalError, onGoogleSignIn }: { t: any, onSubmit: (data: any) => void, onLogin: (email: string, pass: string) => void, onSkip?: () => void, onBack?: () => void, user: FirebaseUser | null, language: string, externalError?: any, setExternalError?: (err: any) => void, onGoogleSignIn?: () => void }) => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: user?.displayName || '',
    address: '',
    phone: '',
    countryCode: countryCodes.find(c => {
      if (language === 'es') return c.code === '+54'; // Default to Argentina for ES
      if (language === 'pt') return c.code === '+351'; // Default to Portugal for PT
      if (language === 'fr') return c.code === '+33'; // Default to France for FR
      return c.code === '+1';
    })?.code || '+1',
    email: user?.email || '',
    password: '',
    confirmPassword: '',
    economicActivity: '',
    educationLevel: '',
    idNumber: '',
    nationality: '',
    authorized: false,
  });
  const [verificationCode, setVerificationCode] = useState('');
  const [sentCode, setSentCode] = useState('');
  const [internalError, setInternalError] = useState('');
  const [loading, setLoading] = useState(false);

  const error = externalError || internalError;
  const setError = setExternalError || setInternalError;

  // Update form data when user changes (e.g. after Google Sign-In)
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        fullName: prev.fullName || user.displayName || '',
        email: prev.email || user.email || '',
      }));
    }
  }, [user]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === 'login') {
        onLogin(formData.email, formData.password);
      } else {
        if (!formData.authorized) return;
        if (formData.password !== formData.confirmPassword) {
          setError('Las contraseñas no coinciden');
          setLoading(false);
          return;
        }
        onSubmit(formData);
      }
    } catch (err: any) {
      setError(err.message || 'Error de autenticación');
      setLoading(false);
    }
  };  return (
    <div className="w-full h-screen flex items-center justify-center overflow-y-auto p-6 relative">
      {/* Background embellishments */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black z-0" />
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-amber-600/10 rounded-full blur-[150px] z-0" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[150px] z-0" />

      {/* Form Area */}
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-full max-w-2xl p-8 md:p-12 bg-slate-900/80 backdrop-blur-3xl rounded-[2.5rem] border border-amber-500/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col z-10 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />
        
        {onBack && (
          <button 
            type="button" 
            onClick={onBack}
            className="absolute top-6 left-6 text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Volver</span>
          </button>
        )}

        <div className="mb-8 text-center flex flex-col items-center mt-2">
          <div className="p-4 bg-amber-500/10 rounded-full mb-4 ring-1 ring-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <GraduationCap className="w-10 h-10 text-amber-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-amber-400 tracking-wide mb-2">
            Escuela Magnetico-Espiritual de la Comuna Universal
          </h2>
          <p className="text-slate-400 font-light">
            La luz del conocimiento racional
          </p>
        </div>

        {/* Toggle Login/Register */}
        <div className="flex bg-slate-800/50 p-1.5 rounded-2xl mb-8 ring-1 ring-slate-700/50">
          <button
            type="button"
            onClick={() => { setMode('login'); setError(''); }}
            className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${mode === 'login' ? 'bg-amber-500 text-slate-950 shadow-lg' : 'text-slate-400 hover:text-amber-300'}`}
          >
            Iniciar Sesión
          </button>
          <button
            type="button"
            onClick={() => { setMode('register'); setError(''); }}
            className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${mode === 'register' ? 'bg-amber-500 text-slate-950 shadow-lg' : 'text-slate-400 hover:text-amber-300'}`}
          >
            Registrarse
          </button>
        </div>

        {!user && (
          <button
            type="button"
            onClick={onGoogleSignIn}
            className="mb-8 w-full py-4 bg-white/5 border border-slate-700 text-slate-200 font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all shadow-lg"
          >
            <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
            {t.googleSignIn}
          </button>
        )}

        <form onSubmit={handleSubmit} className={`grid grid-cols-1 ${mode === 'register' ? 'md:grid-cols-2 gap-x-6 gap-y-5' : 'gap-y-6'} flex-1`}>
          
          {mode === 'register' && (
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-400 flex items-center gap-2 ml-1 uppercase tracking-wider"><User className="w-3.5 h-3.5 text-amber-500/70" /> {t.fullName}</label>
              <input required name="fullName" value={formData.fullName} onChange={handleChange} className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 outline-none transition-all" />
            </div>
          )}
          
          <div className={`space-y-1.5 ${mode === 'login' ? 'md:col-span-1' : ''}`}>
            <label className="text-xs font-semibold text-slate-400 flex items-center gap-2 ml-1 uppercase tracking-wider"><Mail className="w-3.5 h-3.5 text-amber-500/70" /> {t.email}</label>
            <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 outline-none transition-all" />
          </div>
          
          <div className={`space-y-1.5 ${mode === 'login' ? 'md:col-span-1' : ''}`}>
            <label className="text-xs font-semibold text-slate-400 flex items-center gap-2 ml-1 uppercase tracking-wider"><Lock className="w-3.5 h-3.5 text-amber-500/70" /> {t.password}</label>
            <div className="relative">
              <input required type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 outline-none transition-all pr-12" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-amber-500 transition-colors">
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {mode === 'register' && (
            <>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400 flex items-center gap-2 ml-1 uppercase tracking-wider"><Lock className="w-3.5 h-3.5 text-amber-500/70" /> {t.confirmPassword}</label>
                <div className="relative">
                  <input required type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 outline-none transition-all pr-12" />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-amber-500 transition-colors">
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400 flex items-center gap-2 ml-1 uppercase tracking-wider"><MapPin className="w-3.5 h-3.5 text-amber-500/70" /> {t.address}</label>
                <input required name="address" value={formData.address} onChange={handleChange} className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 outline-none transition-all" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400 flex items-center gap-2 ml-1 uppercase tracking-wider"><Phone className="w-3.5 h-3.5 text-amber-500/70" /> {t.phone}</label>
                <div className="flex gap-2">
                  <select 
                    name="countryCode" 
                    value={formData.countryCode} 
                    onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
                    className="w-24 bg-slate-950/50 border border-slate-800 rounded-xl px-2 py-3 text-slate-300 focus:border-amber-500/50 outline-none transition-all text-xs"
                  >
                    {countryCodes.map(c => (
                      <option key={c.code} value={c.code}>{c.code}</option>
                    ))}
                  </select>
                  <input required name="phone" value={formData.phone} onChange={handleChange} placeholder="123456789" className="flex-1 bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400 flex items-center gap-2 ml-1 uppercase tracking-wider"><Briefcase className="w-3.5 h-3.5 text-amber-500/70" /> {t.economicActivity}</label>
                <input required name="economicActivity" value={formData.economicActivity} onChange={handleChange} className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 outline-none transition-all" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400 flex items-center gap-2 ml-1 uppercase tracking-wider"><GraduationCap className="w-3.5 h-3.5 text-amber-500/70" /> {t.educationLevel}</label>
                <input required name="educationLevel" value={formData.educationLevel} onChange={handleChange} className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 outline-none transition-all" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400 flex items-center gap-2 ml-1 uppercase tracking-wider"><Fingerprint className="w-3.5 h-3.5 text-amber-500/70" /> {t.idNumber}</label>
                <input required name="idNumber" value={formData.idNumber} onChange={handleChange} className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 outline-none transition-all" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400 flex items-center gap-2 ml-1 uppercase tracking-wider"><Globe className="w-3.5 h-3.5 text-amber-500/70" /> {t.nationality}</label>
                <input required name="nationality" value={formData.nationality} onChange={handleChange} className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 outline-none transition-all" />
              </div>
              
              <div className="md:col-span-2 flex items-start gap-3 p-4 bg-slate-950/30 rounded-xl border border-amber-500/10 mt-2">
                <input 
                  required 
                  type="checkbox" 
                  name="authorized" 
                  checked={formData.authorized} 
                  onChange={handleChange}
                  className="mt-0.5 w-5 h-5 rounded border-slate-700 bg-slate-900 text-amber-500 focus:ring-amber-500/50 transition-all cursor-pointer"
                />
                <label className="text-xs text-slate-400 leading-relaxed cursor-pointer select-none">
                  {t.authorizeData}
                </label>
              </div>
            </>
          )}

          {error && <div className={`${mode === 'register' ? 'md:col-span-2' : ''} text-red-400 text-sm bg-red-400/10 p-3 rounded-xl border border-red-400/20 text-center font-medium`}>{error}</div>}

          <button 
            type="submit" 
            disabled={(mode === 'register' && !formData.authorized) || loading}
            className={`${mode === 'register' ? 'md:col-span-2' : ''} mt-4 py-4 rounded-xl font-bold text-lg transition-all transform flex items-center justify-center gap-3 ${
              ((mode === 'login') || (mode === 'register' && formData.authorized)) && !loading
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:-translate-y-0.5 active:scale-[0.98]' 
                : 'bg-slate-800 text-slate-500 cursor-not-allowed opacity-50'
            }`}
          >
            {loading ? <Activity className="w-6 h-6 animate-spin" /> : <GraduationCap className="w-6 h-6" />}
            {mode === 'login' ? 'Entrar al Estudio' : 'Aceptar y Continuar'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

const AdminPanel = ({ t }: { t: any }) => {
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'students'), orderBy('registrationDate', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setStudents(data);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'students');
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div className="flex justify-center p-20"><Loader2 className="w-10 h-10 animate-spin text-amber-500" /></div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-amber-400 flex items-center gap-3">
          <Shield className="w-6 h-6" />
          {t.adminPanel}
        </h2>
        <div className="flex gap-4 text-sm">
          <div className="px-4 py-2 bg-slate-900/50 rounded-xl border border-slate-800 text-slate-400">
            Total: <span className="text-amber-400 font-bold">{students.length}</span>
          </div>
        </div>
      </div>

      <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-800/50 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-widest">
                <th className="px-6 py-4 font-medium">{t.fullName}</th>
                <th className="px-6 py-4 font-medium">Grado/Lección</th>
                <th className="px-6 py-4 font-medium">{t.intelligence}</th>
                <th className="px-6 py-4 font-medium">{t.faculties}</th>
                <th className="px-6 py-4 font-medium">Última Actividad</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="font-medium text-slate-100">{student.fullName}</div>
                    <div className="text-xs text-slate-500">{student.email}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 rounded text-xs font-bold">G{student.currentGrade}</span>
                      <span className="text-slate-400 text-sm">L{student.currentLesson}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500" style={{ width: `${(student.intelligenceScore || 0) * 10}%` }} />
                      </div>
                      <span className="text-xs font-mono text-blue-400">{student.intelligenceScore || 0}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-1">
                      {Object.values(student.faculties || {}).map((val: any, i) => (
                        <div key={i} className="w-1 h-4 bg-slate-800 rounded-full overflow-hidden">
                          <div className="w-full bg-amber-500" style={{ height: `${(val || 0) * 10}%` }} />
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500">
                    {student.lastInteraction ? new Date(student.lastInteraction.seconds * 1000).toLocaleString() : 'N/A'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

import { CURRICULUM } from './data/grades';

const translations: { [key: string]: any } = {
  es: {
    greeting: "Hola.",
    listening: "Te escucho.",
    sending: "Enviando...",
    placeholder: "Escribe tu mensaje...",
    confirmGradeChange: "¿Deseas confirmar el cambio al grado solicitado o prefieres continuar en el que estás ahora?",
    confirm: "Confirmar Cambio",
    continueCurrent: "Continuar en el Actual",
    errorInit: "Lo siento, hubo un error de conexión al iniciar la clase.",
    errorProcess: "Lo siento, hubo un error al procesar tu solicitud.",
    quotaError: "Has excedido el límite de cuota actual de la API de Gemini. Por favor, espera un momento o verifica tu API Key en la configuración.",
    professor: "Profesor",
    you: "Tú",
    introTitle: "Escuela Magnetico-Espiritual de la Comuna Universal",
    introSubtitle: "",
    introStart: "Iniciar Clase",
    langCode: "es-MX",
    pause: "Pausar",
    resume: "Reanudar",
    stop: "Detener",
    downloadPdf: "Descargar Lección (PDF)",
    progress: "Progreso del Currículo",
    lesson: "Lección",
    studyGrades: "Grados de Estudio",
    unlockAll: "Activar Todos los Grados",
    adminPassLabel: "Clave Administrativa",
    gradeLocked: "Este grado está bloqueado hasta aprobar los anteriores.",
    diplomaSent: "Tu diploma ha sido enviado a tu correo electrónico.",
    registerTitle: "Registro de Estudiante",
    fullName: "Nombre Completo",
    address: "Dirección",
    phone: "Teléfono",
    email: "Correo Electrónico",
    economicActivity: "Actividad Económica",
    educationLevel: "Grado de Estudio",
    idNumber: "Número de Identificación",
    nationality: "Nacionalidad",
    submit: "Aceptar y Continuar",
    adminPanel: "Panel de Administración",
    studentList: "Lista de Estudiantes",
    intelligence: "Inteligencia",
    faculties: "Facultades",
    perceptiveIntelligence: "Percepción",
    memory: "Memoria",
    imagination: "Imaginación",
    attention: "Atención",
    judgment: "Juicio",
    reason: "Razón",
    will: "Voluntad",
    lastInteraction: "Última Interacción",
    grade: "Grado",
    verified: "Verificado",
    registrationDate: "Fecha de Registro",
    actions: "Acciones",
    noStudents: "No hay estudiantes registrados aún.",
    exportData: "Exportar Datos",
    sendCode: "Enviar Código de Verificación",
    codeSent: "Hemos enviado un código de verificación a tu correo.",
    verificationCode: "Código de Verificación",
    verify: "Verificar y Comenzar las Clases",
    skipRegistration: "Saltar Inscripción e Ingresar al Estudio",
    invalidCode: "Código inválido. Por favor intenta de nuevo.",
    resendCode: "Reenviar Código",
    professorName: "Joaquín Trincado Mateo",
    professorGreeting: "Saludos, hermano. Soy Joaquín Trincado Mateo, fundador de la Escuela Magnetico-Espiritual de la Comuna Universal. Aquí encontrarás la luz del conocimiento racional y el camino de la evolución del espíritu. Regístrate para comenzar tu formación, o si ya estás registrado, inicia sesión e ingresa al estudio.",
    professorVoice: "Voz del Profesor",
    audioSpeed: "Velocidad",
    registrationRequiredMsg: "Debes completar tu registro para comenzar las clases.",
    certificateTitle: "CERTIFICADO DE FINALIZACIÓN DE CURSO",
    certificateSubtitle: "Escuela Magnetico-Espiritual de la Comuna Universal",
    certificateAwarded: "otorga el presente certificado a",
    certificateBody: "Por haber completado satisfactoriamente todas las lecciones correspondientes al",
    congratulations: "¡Felicidades! Has completado el grado.",
    downloadCertificate: "Descargar Certificado",
    fillForm: "Completar Registro",
    authorizeData: "Autorizo el uso de mis datos para fines estadísticos y de estudio de la Escuela Magnetico-Espiritual de la Comuna Universal.",
    googleSignIn: "Iniciar Sesión con Google",
    authErrorTitle: "Error de Autenticación",
    authErrorMsg: "El método de registro con correo y contraseña no está habilitado en este proyecto de Firebase. Por favor, usa Google para registrarte o habilita el método en la consola de Firebase.",
    enableAuthLink: "Habilitar Correo/Contraseña en la consola Firebase",
    skipIntro: "Saltar Introducción"
  },
  en: {
    greeting: "Hello.",
    listening: "I'm listening.",
    sending: "Sending...",
    placeholder: "Type your message...",
    confirmGradeChange: "Do you wish to confirm the requested grade change or do you prefer to continue in your current one?",
    confirm: "Confirm Change",
    continueCurrent: "Continue in Current",
    errorInit: "Sorry, there was a connection error when starting the class.",
    errorProcess: "Sorry, there was an error processing your request.",
    quotaError: "You have exceeded the current quota limit of the Gemini API. Please wait a moment or check your API Key in settings.",
    professor: "Professor",
    you: "You",
    introTitle: "Magnético Espiritual School of the Universal Commune",
    introSubtitle: "",
    introStart: "Start Class",
    langCode: "en-US",
    pause: "Pause",
    resume: "Resume",
    stop: "Stop",
    downloadPdf: "Download Lesson (PDF)",
    progress: "Curriculum Progress",
    lesson: "Lesson",
    studyGrades: "Study Grades",
    unlockAll: "Unlock All Grades",
    adminPassLabel: "Administrative Password",
    gradeLocked: "This grade is locked until you pass previous ones.",
    diplomaSent: "Your diploma has been sent to your email.",
    registerTitle: "Student Registration",
    fullName: "Full Name",
    address: "Address",
    phone: "Phone",
    email: "Email",
    economicActivity: "Economic Activity",
    educationLevel: "Education Level",
    idNumber: "ID Number",
    nationality: "Nationality",
    submit: "Register and Start",
    adminPanel: "Admin Panel",
    studentList: "Student List",
    intelligence: "Intelligence",
    faculties: "Faculties",
    perceptiveIntelligence: "Perception",
    memory: "Memory",
    imagination: "Imagination",
    attention: "Attention",
    judgment: "Judgment",
    reason: "Reason",
    will: "Will",
    lastInteraction: "Last Interaction",
    grade: "Grade",
    verified: "Verified",
    registrationDate: "Registration Date",
    actions: "Actions",
    noStudents: "No students registered yet.",
    exportData: "Export Data",
    sendCode: "Send Verification Code",
    codeSent: "We have sent a verification code to your email.",
    verificationCode: "Verification Code",
    verify: "Verify and Continue",
    skipRegistration: "Skip Registration and Go to Study",
    invalidCode: "Invalid code. Please try again.",
    resendCode: "Resend Code",
    certificateTitle: "COURSE COMPLETION CERTIFICATE",
    certificateSubtitle: "The Magnético Espiritual School of the Universal Commune",
    certificateAwarded: "hereby awards this certificate to",
    certificateBody: "For having satisfactorily completed all the lessons corresponding to the",
    congratulations: "Congratulations! You have completed the grade.",
    downloadCertificate: "Download Certificate",
    professorName: "Joaquín Trincado",
    professorVoice: "Professor Voice",
    professorGreeting: "Greetings, brother. I am Joaquín Trincado Mateo, founder of the Magnético Espiritual School of the Universal Commune. Here you will find the light of rational knowledge and the path of spiritual evolution. Register to begin your formation, or if you are already registered, sign in to enter the classroom.",
    fillForm: "Fill out the Form",
    authorizeData: "I authorize the use of my data for statistical and study purposes of the Magnético Espiritual School of the Universal Commune.",
    googleSignIn: "Sign in with Google",
    authErrorTitle: "Authentication Error",
    authErrorMsg: "The email and password registration method is not enabled in this Firebase project. Please use Google to register or enable the method in the Firebase console.",
    enableAuthLink: "Enable Email/Password in Firebase Console",
    skipIntro: "Skip Introduction",
    audioSpeed: "Speed",
    registrationRequiredMsg: "You must complete your registration to begin classes.",
  },
  pt: {
    greeting: "Olá.",
    listening: "Estou ouvindo.",
    sending: "Enviando...",
    placeholder: "Digite sua mensagem...",
    confirmGradeChange: "Você deseja confirmar a mudança para o grau solicitado o prefere continuar no que está agora?",
    confirm: "Confirmar Mudança",
    continueCurrent: "Continuar no Atual",
    errorInit: "Desculpe, houve um erro de conexão ao iniciar a aula.",
    errorProcess: "Desculpe, houve um erro ao processar sua solicitação.",
    quotaError: "Você excedeu o limite de cota atual da API Gemini. Aguarde um momento ou verifique sua chave de API nas configurações.",
    professor: "Professor",
    you: "Você",
    introTitle: "Escola Magnético Espiritual da Comuna Universal",
    introSubtitle: "",
    introStart: "Iniciar Aula",
    langCode: "pt-BR",
    pause: "Pausar",
    resume: "Retomar",
    stop: "Parar",
    downloadPdf: "Baixar Lição (PDF)",
    progress: "Progresso do Currículo",
    lesson: "Lição",
    studyGrades: "Graus de Estudo",
    unlockAll: "Ativar Todos os Graus",
    adminPassLabel: "Senha Administrativa",
    gradeLocked: "Este grau está bloqueado até aprovar os anteriores.",
    diplomaSent: "Seu diploma foi enviado para o seu e-mail.",
    registerTitle: "Registro de Estudante",
    fullName: "Nome Completo",
    address: "Endereço",
    phone: "Telefone",
    email: "E-mail",
    economicActivity: "Atividade Econômica",
    educationLevel: "Nível de Escolaridade",
    idNumber: "Número de Identificação",
    nationality: "Nacionalidade",
    submit: "Registrar e Iniciar",
    adminPanel: "Painel de Administração",
    studentList: "Lista de Estudantes",
    intelligence: "Inteligência",
    faculties: "Faculdades",
    perceptiveIntelligence: "Percepção",
    memory: "Memória",
    imagination: "Imaginação",
    attention: "Atenção",
    judgment: "Juízo",
    reason: "Razão",
    will: "Vontade",
    lastInteraction: "Última Interação",
    grade: "Grau",
    verified: "Verificado",
    registrationDate: "Data de Registro",
    actions: "Ações",
    noStudents: "Nenhum estudante registrado ainda.",
    exportData: "Exportar Dados",
    sendCode: "Enviar Código de Verificação",
    codeSent: "Enviamos um código de verificação para o seu e-mail.",
    verificationCode: "Código de Verificação",
    verify: "Verificar e Continuar",
    skipRegistration: "Pular Registro e Ir ao Estudo",
    invalidCode: "Código inválido. Por favor, tente novamente.",
    resendCode: "Reenviar Código",
    certificateTitle: "CERTIFICADO DE CONCLUSÃO DE CURSO",
    certificateSubtitle: "A Escola Magnético Espiritual da Comuna Universal",
    certificateAwarded: "concede este certificado a",
    certificateBody: "Por ter concluído satisfatoriamente todas as lições correspondentes ao",
    congratulations: "Parabéns! Você concluiu o grau.",
    downloadCertificate: "Baixar Certificado",
    professorName: "Joaquín Trincado",
    professorVoice: "Voz do Professor",
    professorGreeting: "Saudações, irmão. Sou Joaquín Trincado Mateo, fundador da Escola Magnético Espiritual da Comuna Universal. Aqui você encontrará a luz do conhecimento racional e o caminho da evolução do espírito. Registre-se para começar sua formação, ou se já estiver registrado, inicie a sessão para entrar na aula.",
    fillForm: "Preencher o Formulário",
    authorizeData: "Autorizo o uso dos meus dados para fins estatísticos e de estudo da Escola Magnético Espiritual da Comuna Universal.",
    googleSignIn: "Entrar com o Google",
    authErrorTitle: "Erro de Autenticação",
    authErrorMsg: "O método de registro por e-mail e senha não está habilitado neste projeto do Firebase. Use o Google para se registrar ou habilite o método no console do Firebase.",
    enableAuthLink: "Habilitar E-mail/Senha no console Firebase",
    skipIntro: "Pular Introdução",
    audioSpeed: "Velocidade",
    registrationRequiredMsg: "Você deve completar seu registro para começar as aulas.",
  },
  fr: {
    greeting: "Bonjour.",
    listening: "J'écoute.",
    sending: "Envoi...",
    placeholder: "Tapez votre message...",
    confirmGradeChange: "Souhaitez-vous confirmer le changement vers le grade demandé ou préférez-vous continuer dans votre grade actuel ?",
    confirm: "Confirmer le changement",
    continueCurrent: "Continuer dans l'actuel",
    errorInit: "Désolé, une erreur de connexion est survenue lors du démarrage du cours.",
    errorProcess: "Désolé, une erreur s'est produite lors du traitement de votre demande.",
    quotaError: "Vous avez dépassé la limite de quota actuelle de l'API Gemini. Veuillez attendre un moment ou vérifier votre clé API dans les paramètres.",
    professor: "Professeur",
    you: "Vous",
    introTitle: "École Magnético-Spirituelle de la Commune Universelle",
    introSubtitle: "",
    introStart: "Commencer le cours",
    langCode: "fr-FR",
    pause: "Pause",
    resume: "Reprendre",
    stop: "Arrêter",
    downloadPdf: "Télécharger la leçon (PDF)",
    progress: "Progression du programme",
    lesson: "Leçon",
    playVideo: "Lire la vidéo de présentation",
    continueWithProfessor: "Continuer avec le professeur",
    videoLoading: "Génération de la vidéo de présentation spirituelle...",
    videoError: "Erreur lors du chargement de la vidéo.",
    videoPrompt: "Une vidéo cinématographique épique montrant le bouclier de l'École Magnético Espiritual de la Commune Universelle (le Grand Quatorze) brillant d'une lumière dorée, suivie d'images de l'évolution humaine de l'instinct à la raison spirituelle, de la fraternité universelle, des mondos habités dans le cosmos et de la lumière des connaissances rationnelles de Joaquin Trincado.",
    registerTitle: "Inscription de l'étudiant",
    fullName: "Nom complet",
    address: "Adresse",
    phone: "Téléphone",
    email: "E-mail",
    economicActivity: "Activité économique",
    educationLevel: "Niveau d'études",
    idNumber: "Numéro d'identification",
    nationality: "Nationalité",
    submit: "S'inscrire et commencer",
    adminPanel: "Panneau d'administration",
    studentList: "Liste des étudiants",
    intelligence: "Intelligence",
    faculties: "Facultés",
    perceptiveIntelligence: "Perception",
    memory: "Mémoire",
    imagination: "Imagination",
    attention: "Attention",
    judgment: "Jugement",
    reason: "Raison",
    will: "Volonté",
    lastInteraction: "Dernière interaction",
    grade: "Grade",
    verified: "Vérifié",
    registrationDate: "Date d'inscription",
    actions: "Actions",
    noStudents: "Aucun étudiant inscrit pour le moment.",
    exportData: "Exporter les données",
    sendCode: "Envoyer le code de vérification",
    codeSent: "Nous avons envoyé un code de vérification à votre adresse e-mail.",
    verificationCode: "Code de vérification",
    verify: "Vérifier et continuer",
    skipRegistration: "Passer l'Inscription et Aller à l'Étude",
    invalidCode: "Code invalide. Veuillez réessayer.",
    resendCode: "Renvoyer le code",
    certificateTitle: "CERTIFICAT DE FIN DE COURS",
    certificateSubtitle: "L'École Magnético Espiritual de la Commune Universelle",
    certificateAwarded: "décerne par la présente ce certificat à",
    certificateBody: "Pour avoir complété de manière satisfaisante toutes les leçons correspondant au",
    congratulations: "Félicitations ! Vous avez terminé le grade.",
    downloadCertificate: "Télécharger le certificat",
    professorName: "Joaquín Trincado",
    professorVoice: "Voix du Professeur",
    professorGreeting: "Salutations, frère. Je suis Joaquín Trincado Mateo, fondateur de l'École Magnético Espiritual de la Commune Universelle. Ici vous trouverez la lumière de la connaissance rationnelle et le chemin de l'évolution spirituelle. Inscrivez-vous pour commencer votre formation, ou si vous êtes déjà inscrit, connectez-vous pour entrer dans la classe.",
    fillForm: "Remplir le Formulaire",
    authorizeData: "J'autorise l'utilisation de mes données à des fins statistiques et d'étude de l'École Magnético Espiritual de la Commune Universelle.",
    googleSignIn: "Se connecter avec Google",
    authErrorTitle: "Erreur d'Authentification",
    authErrorMsg: "La méthode d'inscription par e-mail et mot de passe n'est pas activée dans ce projet Firebase. Veuillez utiliser Google pour vous inscrire ou activer la méthode dans la console Firebase.",
    enableAuthLink: "Activer E-mail/Mot de passe dans la console Firebase",
    skipIntro: "Passer l'Introduction",
    audioSpeed: "Vitesse",
    registrationRequiredMsg: "Vous devez compléter votre inscription pour commencer les cours.",
  }
};

// Foto local del Maestro Joaquín Trincado (desde la carpeta del proyecto)
// TRINCADO_IMG y TRINCADO_IMG_FALLBACK declarados arriba (antes de RegistrationForm)

function App() {
  const [introStep, setIntroStep] = useState<'intro' | 'choice' | 'video' | 'professor' | 'registration' | 'chat' | 'admin'>('intro');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showGoogleModal, setShowGoogleModal] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [studentProfile, setStudentProfile] = useState<any>(null);
  const [isAdminUser, setIsAdminUser] = useState(false);
  const [error, setError] = useState<string | React.ReactNode>('');
  
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<{ role: 'user' | 'professor'; text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [continuousListen, setContinuousListen] = useState(false);
  const [isPhotoEnlarged, setIsPhotoEnlarged] = useState(false);
  
  useEffect(() => {
    console.log("EMECU APP - Versión 1.1.2 (Puente Directo Activo)");
  }, []);
  const [language, setLanguage] = useState<'es' | 'en' | 'pt' | 'fr'>('es');
  const t = translations[language];
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isAudioPaused, setIsAudioPaused] = useState(false);
  const [audioSpeed, setAudioSpeed] = useState(1);
  const [currentGrade, setCurrentGrade] = useState(1);
  const [lessonProgress, setLessonProgress] = useState(1);
  const [lessonTitle, setLessonTitle] = useState("Discurso del Obispo Stromayer");
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [showChoiceButtons, setShowChoiceButtons] = useState(false);
  const [unlockedAllGrades, setUnlockedAllGrades] = useState(false);
  const [showGradesMenu, setShowGradesMenu] = useState(false);
  const [adminPass, setAdminPass] = useState('');
  const [showAdminPassInput, setShowAdminPassInput] = useState(false);
  const [pendingGradeChange, setPendingGradeChange] = useState<number | null>(null);
  const [showGradeConfirm, setShowGradeConfirm] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videoLoading, setVideoLoading] = useState(false);
  const [videoError, setVideoError] = useState<string | null>(null);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceURI, setSelectedVoiceURI] = useState<string>('');

  // Load saved student profile from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('emecu_student');
      if (saved) {
        const profile = JSON.parse(saved);
        setStudentProfile(profile);
        setCurrentGrade(profile.currentGrade || 1);
        setLessonProgress(profile.currentLesson || 1);
      }
    } catch(e) { console.log('No saved profile'); }
  }, []);

  // Reset selected voice when language changes
  useEffect(() => {
    setSelectedVoiceURI('');
  }, [language]);

  // Voice Loading and Selection
  useEffect(() => {
    const loadVoices = () => {
      if (!window.speechSynthesis) return;
      const allVoices = window.speechSynthesis.getVoices();
      setAvailableVoices(allVoices);
      
      // Select a default voice if none selected
      if (!selectedVoiceURI) {
        const voices = allVoices;
        // Priority for Microsoft Federico
        const federicoVoice = voices.find(v => 
          v.name.toLowerCase().includes('federico')
        ) || voices.find(v => 
          v.name.toLowerCase().includes('microsoft') && 
          v.lang.startsWith('es') && 
          (v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('natural'))
        );

        const defaultVoice = federicoVoice || voices.find(v => 
          v.lang.startsWith(language) && 
          (v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('hombre'))
        ) || voices.find(v => v.lang.startsWith(language));
        
        if (defaultVoice) {
          setSelectedVoiceURI(defaultVoice.voiceURI);
        }
      }
    };

    if (!window.speechSynthesis) return;
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => {
      if (window.speechSynthesis) window.speechSynthesis.onvoiceschanged = null;
    };
  }, [language, selectedVoiceURI]);

  // Hear the voice when selected
  useEffect(() => {
    if (selectedVoiceURI && !showIntro) {
      const testText = language === 'es' ? "Probando voz." : 
                       language === 'en' ? "Testing voice." : 
                       language === 'pt' ? "Testando voz." : "Test de voix.";
      if (!window.speechSynthesis) return;
      const utterance = new SpeechSynthesisUtterance(testText);
      const voices = window.speechSynthesis.getVoices();
      const voice = voices.find(v => v.voiceURI === selectedVoiceURI);
      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
        utterance.rate = audioSpeed;
        utterance.pitch = 0.4;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
      }
    }
  }, [selectedVoiceURI]);

  // Professor greeting logic
  useEffect(() => {
    let isMounted = true;
    let greetingTimeout: any;
    let choiceTimeout: any;

    if (introStep === 'professor' || introStep === 'registration') {
      const isReg = introStep === 'registration';
      const fullText = isReg 
        ? (language === 'es' ? "Bienvenido, hermano. Por favor, completa tu registro para que podamos iniciar formalmente tu cátedra doctrinal." : 
           language === 'en' ? "Welcome, brother. Please complete your registration so we can formally begin your doctrinal lecture." :
           language === 'pt' ? "Bem-vindo, irmão. Por favor, complete seu registro para que possamos iniciar formalmente sua aula doutrinária." :
           "Bienvenue, frère. Veuillez compléter votre inscription afin que nous puissions commencer formellement votre conférence doctrinale.")
        : t.professorGreeting;
      
      setCurrentPrompt(fullText);
      
      const speakGreeting = () => {
        if (!isMounted) return;
        if (!window.speechSynthesis) return;
        const utterance = new SpeechSynthesisUtterance(fullText);
        utterance.rate = 0.9;
        utterance.pitch = 0.4;
        utterance.volume = 1;

        const voices = window.speechSynthesis.getVoices();
        let preferredVoice = voices.find(v => v.voiceURI === selectedVoiceURI);
        
        if (!preferredVoice) {
          preferredVoice = voices.find(v => v.lang.startsWith('es') && v.name.toLowerCase().includes('male')) ||
                           voices.find(v => v.lang.startsWith('es')) ||
                           voices.find(v => v.lang.startsWith(language)) ||
                           voices[0];
        }
        
        if (preferredVoice) {
          utterance.voice = preferredVoice;
          utterance.lang = preferredVoice.lang;
        } else {
          utterance.lang = language === 'es' ? 'es-ES' : language;
        }
        
        if (window.speechSynthesis) {
          window.speechSynthesis.cancel();
          window.speechSynthesis.speak(utterance);
        }
      };

      greetingTimeout = setTimeout(() => speakGreeting(), 300);
      
      if (!isReg) {
        choiceTimeout = setTimeout(() => { if (isMounted) setShowChoiceButtons(true); }, 1500);
      }
    } else if (introStep === 'intro' || introStep === 'choice') {
      stopAudio();
    }

    return () => {
      isMounted = false;
      clearTimeout(greetingTimeout);
      clearTimeout(choiceTimeout);
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    };
  }, [introStep, language, selectedVoiceURI]);
  
  const recognitionRef = useRef<any>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const photoTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const shouldContinueSpeakingRef = useRef(true);
  const speakingSessionRef = useRef(0);
  
  // TTS Queue para hablar progresivamente
  const ttsQueueRef = useRef<string[]>([]);
  const isSpeakingQueueRef = useRef(false);

  // Auth Listener
  useEffect(() => {
    // Forzar persistencia local para móviles
    setPersistence(auth as any, browserLocalPersistence).catch(err => console.error("Persistence error:", err));

    const unsubscribe = onAuthStateChanged(auth as any, async (currentUser) => {
      // Only update if the user actually changed to avoid flickering
      if (currentUser?.uid === user?.uid && !!currentUser === !!user) return;
      
      setUser(currentUser);
      
      if (currentUser) {
        try {
          const profile = await getStudentProfile(currentUser.uid);
          if (profile) {
            setStudentProfile(profile);
            setIsAdminUser(profile.role === 'admin' || currentUser.email === "nelsonosoriogarcia@gmail.com");
            setCurrentGrade(profile.currentGrade || 1);
            setLessonProgress(profile.currentLesson || 1);
            
            // Usar update functions para evitar añadir dependencias externas
            setShowIntro(prev => {
              if (prev) setIntroStep('chat');
              return false;
            });
          } else {
            setIntroStep(prev => prev !== 'registration' ? 'registration' : prev);
          }
        } catch (error) {
          console.error("Error cargando perfil:", error);
        }
      }
    });
    return () => unsubscribe();
  }, [user?.uid]);

  const togglePhotoEnlarge = () => {
    if (isPhotoEnlarged) {
      if (photoTimeoutRef.current) clearTimeout(photoTimeoutRef.current);
      setIsPhotoEnlarged(false);
    } else {
      setIsPhotoEnlarged(true);
      photoTimeoutRef.current = setTimeout(() => {
        setIsPhotoEnlarged(false);
      }, 6000);
    }
  };

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat, loading]);

  // Intro Timer removed - User must click a button
  useEffect(() => {
    // No automatic transition
  }, []);

  // Initial greeting
  useEffect(() => {
    if (!showIntro && chat.length === 0) {
      fetchGreeting();
    }
  }, [showIntro]);

  // Handle Grade Change Confirmation Voice
  useEffect(() => {
    if (showGradeConfirm) {
      speak(t.confirmGradeChange);
    }
  }, [showGradeConfirm, language]);

  // Handle Language Change
  useEffect(() => {
    if (!showIntro && chat.length > 0) {
      // If we are already in a chat, we might want the professor to repeat the last message in the new language
      const lastProfessorMsg = [...chat].reverse().find(m => m.role === 'professor');
      if (lastProfessorMsg) {
        speak(lastProfessorMsg.text);
      }
    }
  }, [language]);

  const fetchGreeting = async (gradeOverride?: number, lessonOverride?: number) => {
    setLoading(true);
    // Mostrar mensaje inicial inmediatamente
    setChat([{ role: 'professor', text: '...' }]);
    try {
      const activeGrade = gradeOverride || currentGrade;
      const activeLesson = lessonOverride || lessonProgress;
      const gradeData = CURRICULUM.find(g => g.id === activeGrade);
      const totalLessons = gradeData?.lessonsCount || 1;
      const themeName = gradeData?.themes ? gradeData.themes[activeLesson - 1] : undefined;
      let studentName = studentProfile?.fullName || "";
      let startPrompt = "";
      if (activeGrade === 1 && activeLesson === 1) {
        startPrompt = language === 'es'
          ? `Salud, hermano. Mi nombre es ${studentName || "estudiante"}. Vengo a recibir tu enseñanza en la Escuela Magnetico-Espiritual de la Comuna Universal.`
          : `Greetings, brother. My name is ${studentName || "student"}. I come to receive your teaching.`;
      } else {
        const themeContext = themeName ? `el tema: "${themeName}"` : `la Lección N° ${activeLesson}`;
        startPrompt = language === 'es'
          ? `Salud, hermano. Continuemos con el Grado ${activeGrade}, abordando ${themeContext}.`
          : `Greetings, brother. Let's continue with Grade ${activeGrade}, addressing ${themeContext}.`;
      }
      // STREAMING REAL CON THROTTLE Y TTS PROGRESIVO
      let accumulated = '';
      let spokenLength = 0;
      let lastUpdate = 0;
      
      await chatWithProfessorStream(
        startPrompt, [], language, activeGrade, activeLesson, totalLessons, themeName, !!studentProfile,
        (chunk) => {
          accumulated += chunk;
          
          // Detectar oraciones completas para hablar inmediatamente
          const unseenText = accumulated.slice(spokenLength);
          const sentenceMatch = unseenText.match(/.*[.!?\n]/);
          if (sentenceMatch) {
            const sentenceToSpeak = sentenceMatch[0];
            spokenLength += sentenceToSpeak.length;
            if (sentenceToSpeak.trim().length > 1) {
              enqueueSpeech(sentenceToSpeak);
            }
          }

          const now = Date.now();
          if (now - lastUpdate > 80) { // Actualizar máximo cada 80ms
            lastUpdate = now;
            setChat([{ role: 'professor', text: accumulated }]);
          }
        }
      );
      
      // Hablar el fragmento final
      const remainingText = accumulated.slice(spokenLength);
      if (remainingText.trim().length > 1) {
        enqueueSpeech(remainingText);
      }
      
      // Actualización final garantizada
      setChat([{ role: 'professor', text: accumulated }]);
    } catch (error: any) {
      console.error(error);
      setChat([{ role: 'professor', text: t.errorInit }]);
    } finally {
      setLoading(false);
    }
  };

  // Sync lesson title with grade/lesson
  useEffect(() => {
    const grade = CURRICULUM.find(g => g.id === currentGrade);
    if (grade) {
      const themeName = grade.themes ? grade.themes[lessonProgress - 1] : `Tema ${lessonProgress}`;
      setLessonTitle(`${grade.book} - ${themeName}`);
    }
  }, [currentGrade, lessonProgress]);

  // Track classroom entries
  useEffect(() => {
    if (user && introStep === 'chat') {
      const updateEntry = async () => {
        try {
          const docRef = doc(db, 'students', user.uid);
          await updateDoc(docRef, {
            lastInteraction: serverTimestamp(),
            entries: arrayUnion(new Date())
          });
        } catch (error) {
          console.error("Error tracking entry:", error);
        }
      };
      updateEntry();
    }
  }, [user, introStep]);

  // Progressive TTS Queue
  const enqueueSpeech = (text: string) => {
    ttsQueueRef.current.push(text);
    if (!isSpeakingQueueRef.current && shouldContinueSpeakingRef.current) {
      processSpeechQueue();
    }
  };

  const processSpeechQueue = () => {
    if (!window.speechSynthesis) return;
    if (ttsQueueRef.current.length === 0 || !shouldContinueSpeakingRef.current) {
      isSpeakingQueueRef.current = false;
      setIsAudioPlaying(false);
      return;
    }

    isSpeakingQueueRef.current = true;
    setIsAudioPlaying(true);
    setIsAudioPaused(false);
    
    const text = ttsQueueRef.current.shift() || "";
    const utterance = new SpeechSynthesisUtterance(text.trim());
    utterance.rate = audioSpeed;
    utterance.pitch = 0.4;
    utterance.volume = 1;
    
    const voices = window.speechSynthesis.getVoices();
    // Priorizar voces masculinas en el idioma seleccionado
    const maleVoices = voices.filter(v => v.lang.startsWith(language) && 
      (v.name.toLowerCase().includes('male') || 
       v.name.toLowerCase().includes('hombre') || 
       v.name.toLowerCase().includes('federico') ||
       v.name.toLowerCase().includes('natural')));
    
    let preferredVoice = voices.find(v => v.voiceURI === selectedVoiceURI) || maleVoices[0];
    
    if (!preferredVoice) {
      preferredVoice = voices.find(v => v.lang.startsWith(language) && (v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('hombre'))) || 
                       voices.find(v => v.lang.startsWith(language));
    }
    
    if (preferredVoice) {
      utterance.voice = preferredVoice;
      utterance.lang = preferredVoice.lang;
    } else {
      utterance.lang = language === 'es' ? 'es-MX' : language === 'en' ? 'en-US' : language === 'pt' ? 'pt-BR' : 'fr-FR';
    }

    utterance.onend = () => {
      // Process next in queue
      processSpeechQueue();
    };

    utterance.onerror = () => {
      // Ignore errors and keep going
      processSpeechQueue();
    };

    if (window.speechSynthesis) window.speechSynthesis.speak(utterance);
  };

  const speak = (text: string) => {
    stopAudio();
    shouldContinueSpeakingRef.current = true;
    // Add text to queue
    const chunks = text.match(/[^.!?\n]+[.!?\n]+/g) || [text];
    chunks.forEach(chunk => {
      if (chunk.trim().length > 0) ttsQueueRef.current.push(chunk);
    });
    processSpeechQueue();
  };

  const stopAudio = () => {
    shouldContinueSpeakingRef.current = false;
    ttsQueueRef.current = []; // Clear queue
    isSpeakingQueueRef.current = false;
    if (!window.speechSynthesis) {
      setIsAudioPlaying(false);
      setIsAudioPaused(false);
      return;
    }
    // Known fix for Chromium/Edge: pause, resume, then cancel
    try {
      window.speechSynthesis.pause();
      window.speechSynthesis.resume();
      window.speechSynthesis.cancel();
    } catch (e) {
      window.speechSynthesis.cancel();
    }
    setIsAudioPlaying(false);
    setIsAudioPaused(false);
  };

  const togglePauseResumeAudio = () => {
    if (!window.speechSynthesis) return;
    if (isAudioPaused) {
      window.speechSynthesis.resume();
      setIsAudioPaused(false);
    } else {
      window.speechSynthesis.pause();
      setIsAudioPaused(true);
    }
  };

  const downloadLessonPdf = () => {
    const doc = new jsPDF();
    const margin = 20;
    let y = 30;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text(t.introTitle, margin, y);
    y += 10;
    
    doc.setFontSize(14);
    doc.text(`${t.lesson} ${lessonProgress}: ${lessonTitle}`, margin, y);
    y += 15;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);

    chat.forEach((msg) => {
      const role = msg.role === 'professor' ? t.professor : t.you;
      const text = msg.text.replace(/\n/g, ' ');
      const lines = doc.splitTextToSize(`${role}: ${text}`, 170);
      
      if (y + (lines.length * 7) > 280) {
        doc.addPage();
        y = 20;
      }

      doc.setFont("helvetica", "bold");
      doc.text(`${role}:`, margin, y);
      y += 7;
      
      doc.setFont("helvetica", "normal");
      doc.text(lines, margin, y);
      y += (lines.length * 7) + 5;
    });

    doc.save(`Leccion_${lessonProgress}_Escuela_Magnetico_Espiritual.pdf`);
  };

  const handleSkipRegistration = () => {
    setShowIntro(false);
    setIntroStep('chat');
    fetchGreeting();
  };

  const handleRegistration = async (data: any) => {
    setLoading(true);
    try {
      let user = auth.currentUser;
      
      // Si no hay usuario (Google), lo creamos por email
      if (!user) {
        const cred = await createUserWithEmailAndPassword(auth as any, data.email, data.password);
        user = cred.user;
      }
      
      // Iniciamos el overlay de transición inmediatamente después de crear/autenticar al usuario
      // Esto oculta los procesos de guardado y configuración que vienen a continuación
      setIsTransitioning(true);
      
      const hashedPassword = await hashPassword(data.password);
      const localStudent = { 
        ...data, 
        uid: user.uid,
        password: hashedPassword,
        currentGrade: 1, 
        currentLesson: 1, 
        registrationDate: new Date().toISOString() 
      };
      delete localStudent.confirmPassword;
      
      await saveStudentProfile(localStudent);
      setStudentProfile(localStudent);
      setUser(user);
      
      // Pequeño retardo para asegurar que el overlay sea visible antes de cambiar las pantallas principales
      setTimeout(() => {
        setStudentProfile(localStudent);
        setUser(user);
        setShowIntro(false);
        setIntroStep('chat');
        setTimeout(() => {
          setIsTransitioning(false);
        }, 1500);
      }, 2000);
    } catch (error: any) {
      console.error("Registration error:", error);
      
      // Si el email ya está en uso, intentamos loguear al usuario automáticamente
      if (error.code === 'auth/email-already-in-use') {
        try {
          const cred = await signInWithEmailAndPassword(auth as any, data.email, data.password);
          const profile = await getStudentProfile(cred.user.uid);
          
          if (profile) {
            // Activamos el overlay ANTES de cambiar cualquier estado visual
            setIsTransitioning(true);
            
            setStudentProfile(profile);
            setUser(cred.user);
            setCurrentGrade(profile.currentGrade || 1);
            setLessonProgress(profile.currentLesson || 1);
            
            setTimeout(() => {
              setShowIntro(false);
              setIntroStep('chat');
              fetchGreeting(profile.currentGrade || 1, profile.currentLesson || 1);
              setTimeout(() => setIsTransitioning(false), 1500);
            }, 2000);
            return;
          }
        } catch (loginErr) {
          setError("Este correo ya está registrado. Si es tuyo, por favor usa la opción de 'Iniciar Sesión' con tu contraseña correcta.");
          return;
        }
      }
      
      setError(error.message || String(error));
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (email: string, pass: string) => {
    setLoading(true);
    try {
      const { user } = await signInWithEmailAndPassword(auth as any, email, pass);
      const profile = await getStudentProfile(user.uid);
      
      if (profile) {
        // Activamos el overlay ANTES de cambiar estados de la UI
        setIsTransitioning(true);

        setStudentProfile(profile);
        setUser(user);
        setCurrentGrade(profile.currentGrade || 1);
        setLessonProgress(profile.currentLesson || 1);
        
        setTimeout(() => {
          setShowIntro(false);
          setIntroStep('chat');
          fetchGreeting(profile.currentGrade || 1, profile.currentLesson || 1);
          setTimeout(() => {
            setIsTransitioning(false);
          }, 1500);
        }, 2000);
      } else {
        throw new Error("Perfil no encontrado.");
      }
    } catch (error: any) {
      console.error("Login error:", error);
      const errorMsg = error?.message || String(error);
      if (errorMsg.includes("not-found")) {
        setError("Correo o contraseña incorrectos.");
      } else {
        setError(errorMsg);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      stopAudio();
      await signOut(auth as any);
      localStorage.removeItem('emecu_student');
      setUser(null);
      setStudentProfile(null);
      setShowIntro(true);
      setIntroStep('intro');
      setChat([]);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsTransitioning(true);
    setShowGoogleModal(false);
    
    try {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      if (isMobile) {
        await signInWithRedirect(auth as any, googleProvider as any);
        // La redirección sacará al usuario de la app, el resultado se maneja en el useEffect al volver
      } else {
        const { user } = await signInWithPopup(auth as any, googleProvider as any);
        await handleAuthUser(user);
      }
    } catch (error: any) {
      console.error("Google sign in error:", error);
      setIsTransitioning(false);
      setError("Error al iniciar sesión con Google.");
    }
  };

  const handleAuthUser = async (user: any) => {
    setUser(user);
    let profile = await getStudentProfile(user.uid);
    if (!profile) {
      profile = {
        uid: user.uid,
        fullName: user.displayName || user.email?.split('@')[0] || 'Estudiante',
        email: user.email || '',
        address: 'Google Account',
        phone: '',
        countryCode: '+1',
        economicActivity: 'Estudiante',
        educationLevel: 'Superior',
        idNumber: 'GOOGLE_AUTH',
        nationality: 'No especificada',
        currentGrade: 1,
        currentLesson: 1,
        intelligenceScore: 50,
        isVerified: true,
        role: 'student',
        registrationDate: serverTimestamp(),
        lastInteraction: serverTimestamp(),
        entries: [],
        faculties: {
          perceptiveIntelligence: 50,
          memory: 50,
          imagination: 50,
          attention: 50,
          judgment: 50,
          reason: 50,
          will: 50,
        }
      };
      await saveStudentProfile(profile);
    }

    setStudentProfile(profile);
    setIsAdminUser(profile.role === 'admin' || user.email === "nelsonosoriogarcia@gmail.com");
    setCurrentGrade(profile.currentGrade || 1);
    setLessonProgress(profile.currentLesson || 1);
    
    setTimeout(() => {
      setShowIntro(false);
      setIntroStep('chat');
      fetchGreeting(profile.currentGrade || 1, profile.currentLesson || 1);
      setTimeout(() => setIsTransitioning(false), 1500);
    }, 2000);
  };

  // Manejar el resultado de la redirección al cargar
  useEffect(() => {
    getRedirectResult(auth as any).then(async (result) => {
      if (result?.user) {
        setIsTransitioning(true);
        await handleAuthUser(result.user);
      }
    }).catch((error) => {
      console.error("Redirect result error:", error);
    });
  }, []);

  const handleSendVerification = async (email: string): Promise<string> => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("DEV TIP: Verification code for", email, "is", code);
    alert("DEV TIP: Verification code is " + code + " (Check console for motivational message)");
    
    // Generate motivational message using Gemini
    let motivationalMessage = "Bienvenido a la Escuela Magnetico-Espiritual de la Comuna Universal. Tu camino de luz comienza hoy.";
    try {
      // PUENTE DIRECTO PARA EL SALUDO
      const masterKey = "AIzaSyA1ug2Ust6vkHTFs0QclluX6ZbNHT0JPKw";
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${masterKey}`;
      const prompt = `Genera un mensaje motivacional corto (máximo 2 párrafos) para un nuevo estudiante de la Escuela Magnetico-Espiritual de la Comuna Universal. El mensaje debe ser inspirador, hablar sobre la evolución del espíritu y la luz del conocimiento racional. El idioma debe ser ${language === 'es' ? 'Español' : language === 'en' ? 'Inglés' : language === 'pt' ? 'Português' : 'Francés'}.`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });
      const data = await response.json();
      motivationalMessage = data.candidates?.[0]?.content?.parts?.[0]?.text || motivationalMessage;
    } catch (error) {
      console.error("Error generating motivational message:", error);
    }

    // Send via our API
    const isCapacitor = (window as any).Capacitor !== undefined;
    const baseUrl = isCapacitor ? 'https://escuela-magnetico-espiritual.onrender.com' : '';
    await fetch(`${baseUrl}/api/send-verification`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, code, motivationalMessage })
    });

    return code;
  };

  const generateCertificate = async (grade: number) => {
    if (!studentProfile) return;

    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });

    // Background
    pdf.setFillColor(15, 23, 42); // slate-950
    pdf.rect(0, 0, 297, 210, 'F');

    // Border
    pdf.setDrawColor(245, 158, 11); // amber-500
    pdf.setLineWidth(2);
    pdf.rect(10, 10, 277, 190);
    pdf.setLineWidth(0.5);
    pdf.rect(13, 13, 271, 184);

    // Title
    pdf.setTextColor(245, 158, 11);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(40);
    pdf.text(t.certificateTitle, 148.5, 50, { align: 'center' });

    // Body
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(20);
    pdf.setFont("helvetica", "normal");
    pdf.text("Se otorga a:", 148.5, 80, { align: 'center' });

    pdf.setFontSize(32);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(251, 191, 36); // amber-400
    pdf.text(studentProfile.fullName, 148.5, 100, { align: 'center' });

    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(16);
    pdf.setFont("helvetica", "normal");
    const bodyLines = pdf.splitTextToSize(`${t.certificateBody} - GRADO ${grade}`, 220);
    pdf.text(bodyLines, 148.5, 125, { align: 'center' });

    // Date
    pdf.setFontSize(12);
    pdf.text(`Fecha: ${new Date().toLocaleDateString()}`, 148.5, 160, { align: 'center' });

    // Signature
    pdf.setDrawColor(255, 255, 255);
    pdf.line(100, 185, 197, 185);
    pdf.text("Joaquín Trincado Mateo", 148.5, 192, { align: 'center' });
    pdf.setFontSize(10);
    pdf.text("Director Fundador", 148.5, 197, { align: 'center' });

    // Save
    pdf.save(`Certificado_EMECU_Grado_${grade}_${studentProfile.fullName.replace(/\s+/g, '_')}.pdf`);
    
    // Simulate sending to email
    try {
      const isCapacitor = (window as any).Capacitor !== undefined;
      const baseUrl = isCapacitor ? 'https://escuela-magnetico-espiritual.onrender.com' : '';
      await fetch(`${baseUrl}/api/send-diploma`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: studentProfile.email,
          studentName: studentProfile.fullName,
          gradeTitle: CURRICULUM.find(g => g.id === grade)?.title || `Grado ${grade}`
        })
      });
      alert(t.diplomaSent);
    } catch (e) {
      console.error("Error simulating diploma send:", e);
    }

    // Record in Firestore
    try {
      const studentDoc = doc(db, 'students', studentProfile.uid);
      await updateDoc(studentDoc, {
        currentGrade: Math.min(13, grade + 1),
        currentLesson: 1
      });
      setCurrentGrade(prev => Math.min(13, prev + 1));
      setLessonProgress(1);

      // Trigger new greeting for the active next grade
      const nextGrade = Math.min(13, grade + 1);
      setTimeout(() => {
        fetchGreeting(nextGrade, 1);
      }, 0);

      await addDoc(collection(db, 'certificates'), {
        studentId: studentProfile.uid,
        grade: grade,
        issueDate: serverTimestamp(),
        studentName: studentProfile.fullName
      });
    } catch (error) {
      console.error("Error saving certificate record:", error);
    }
  };

  // STT
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = t.langCode;
      recognition.continuous = true;
      recognition.interimResults = false;

      recognition.onresult = (event: any) => {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript.trim();

        if (transcript.toLowerCase().includes('profesor') || transcript.toLowerCase().includes('professor') || transcript.toLowerCase().includes('professeur')) {
          setIsListening(true);
          speak(t.listening);
        } else if (isListening) {
          sendMessage(transcript);
          setIsListening(false);
        } else {
          setMessage(transcript);
        }
      };

      recognition.onend = () => {
        if (continuousListen) {
          recognition.start();
        } else {
          setIsListening(false);
        }
      };

      recognitionRef.current = recognition;
    }
  }, [isListening, continuousListen]);

  const toggleMicrophone = () => {
    if (continuousListen) {
      setContinuousListen(false);
      setIsListening(false);
      recognitionRef.current?.stop();
    } else {
      setContinuousListen(true);
      recognitionRef.current?.start();
    }
  };

  const sendMessage = async (msg: string) => {
    if (!msg.trim()) return;
    setLoading(true);
    const currentHistory = [...chat];
    // Mostrar mensaje del usuario y placeholder del profesor INMEDIATAMENTE
    setChat(prev => [...prev, { role: 'user', text: msg }, { role: 'professor', text: '...' }]);
    setMessage('');
    try {
      const gradeData = CURRICULUM.find(g => g.id === currentGrade);
      const totalLessons = gradeData?.lessonsCount || 1;
      const themeName = gradeData?.themes ? gradeData.themes[lessonProgress - 1] : undefined;
      // STREAMING REAL CON THROTTLE Y TTS PROGRESIVO
      let accumulated = '';
      let streamedStudentUpdate: any = null;
      let lastUpdate = 0;
      let spokenLength = 0;
      
      // Importante: detener cualquier audio anterior y preparar la cola de voz
      stopAudio();
      shouldContinueSpeakingRef.current = true;
      
      const result = await chatWithProfessorStream(
        msg, currentHistory, language, currentGrade, lessonProgress, totalLessons, themeName, !!studentProfile,
        (chunk) => {
          accumulated += chunk;
          
          // Detectar oraciones completas para hablar progresivamente
          const unseenText = accumulated.slice(spokenLength);
          const sentenceMatch = unseenText.match(/.*[.!?\n]/);
          if (sentenceMatch) {
            const sentenceToSpeak = sentenceMatch[0];
            spokenLength += sentenceToSpeak.length;
            if (sentenceToSpeak.trim().length > 1) {
              enqueueSpeech(sentenceToSpeak);
            }
          }

          const now = Date.now();
          if (now - lastUpdate > 80) { // Actualizar máximo cada 80ms
            lastUpdate = now;
            setChat(prev => {
              const updated = [...prev];
              updated[updated.length - 1] = { role: 'professor', text: accumulated };
              return updated;
            });
          }
        }
      );
      
      // Actualización final garantizada
      setChat(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: 'professor', text: accumulated };
        return updated;
      });
      
      // Hablar el fragmento final si quedó algo
      const remainingText = accumulated.slice(spokenLength);
      if (remainingText.trim().length > 1) {
        enqueueSpeech(remainingText);
      }
      
      streamedStudentUpdate = result.studentUpdate || null;
      // Guardar progreso
      if (studentProfile) {
        try {
          const updated = { ...studentProfile, currentGrade, currentLesson: lessonProgress };
          if (streamedStudentUpdate) updated.faculties = streamedStudentUpdate;
          localStorage.setItem('emecu_student', JSON.stringify(updated));
        } catch(e) { console.error('Error saving progress:', e); }
      }
      // Detectar fin de lección
      if (accumulated.toLowerCase().includes("lección ha terminado") ||
          accumulated.toLowerCase().includes("lesson has ended") ||
          accumulated.toLowerCase().includes("lição terminou") ||
          accumulated.toLowerCase().includes("leçon est terminée")) {
        const grade = CURRICULUM.find(g => g.id === currentGrade);
        const totalCount = grade?.lessonsCount || 50;
        const nextLesson = Math.min(lessonProgress + 1, totalCount);
        setLessonProgress(nextLesson);
        if (nextLesson === totalCount) generateCertificate(currentGrade);
      }
    } catch (error: any) {
      console.error(error);
      const errorStr = error?.message || String(error);
      let errorMessage = t.errorProcess;
      if (errorStr.includes("429") || errorStr.includes("RESOURCE_EXHAUSTED")) errorMessage = t.quotaError;
      setChat(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: 'professor', text: errorMessage };
        return updated;
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showIntro && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto">
          {/* Flag Background */}
          <div className="absolute inset-0 flex flex-col opacity-90">
            <div className="flex-1 bg-red-600"></div>
            <div className="flex-1 bg-orange-500"></div>
            <div className="flex-1 bg-yellow-400"></div>
            <div className="flex-1 bg-green-600"></div>
            <div className="flex-1 bg-blue-500"></div>
            <div className="flex-1 bg-indigo-600"></div>
            <div className="flex-1 bg-violet-600"></div>
          </div>
          <div className="absolute inset-0 bg-black/80" />
          
          <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen py-10">
            <div className="relative flex items-center justify-center w-80 h-80 sm:w-96 sm:h-96 md:w-[35rem] md:h-[35rem] lg:w-[40rem] lg:h-[40rem] max-h-[60vh] max-w-[95vw] shrink-0">
              {introStep === 'intro' ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute inset-0 bg-amber-500/30 blur-[50px] rounded-full" />
                  <img src="https://emecu.org.gt/wp-content/uploads/2021/03/Escudo_Emecu-PNG.webp" alt="Escuela Magnetico-Espiritual de la Comuna Universal" className="w-full h-full object-contain relative z-10" style={{ filter: "invert(85%) sepia(20%) saturate(150%) hue-rotate(10deg) brightness(0.95) contrast(1.3) drop-shadow(0px 15px 25px rgba(0,0,0,0.95))" }} referrerPolicy="no-referrer" />
                </div>
              ) : introStep === 'professor' ? (
                <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-4 md:px-16">
                  <div className="relative flex-shrink-0 w-48 md:w-80 lg:w-96 rounded-2xl overflow-hidden border-4 border-amber-500/50 shadow-[0_0_100px_rgba(245,158,11,0.5)] z-20">
                    <img src={TRINCADO_IMG} onError={(e) => { const target = e.target as HTMLImageElement; if (target.src !== TRINCADO_IMG_FALLBACK) { target.src = TRINCADO_IMG_FALLBACK; }}} alt="Joaquin Trincado Mateo" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-shrink-0 max-w-lg lg:max-w-xl text-left px-6 py-6 bg-slate-900/90 backdrop-blur-2xl border-2 border-amber-500/40 rounded-3xl z-30 shadow-2xl relative group">
                    <div className="absolute -top-4 -right-4">
                      <button 
                        onClick={() => {
                          if (window.speechSynthesis) {
                            window.speechSynthesis.cancel();
                            const ut = new SpeechSynthesisUtterance(t.professorGreeting);
                            ut.lang = 'es-ES';
                            window.speechSynthesis.speak(ut);
                          }
                        }}
                        className="p-3 bg-amber-500 text-slate-900 rounded-full shadow-lg hover:scale-110 transition-transform"
                      >
                        <Volume2 className="w-5 h-5" />
                      </button>
                    </div>
                    <p className="text-sm md:text-lg lg:text-xl font-serif text-amber-50 leading-relaxed italic">{currentPrompt}</p>
                    {showChoiceButtons && (
                      <div className="flex flex-col sm:flex-row gap-3 mt-6">
                        <button onClick={() => { 
                          if (window.speechSynthesis) {
                            window.speechSynthesis.cancel();
                            // Desbloqueo de audio para móviles
                            const unlock = new SpeechSynthesisUtterance("");
                            unlock.volume = 0;
                            window.speechSynthesis.speak(unlock);
                          }
                          setShowIntro(false); 
                          setIntroStep('chat'); 
                          fetchGreeting(); 
                        }} className="flex-1 px-5 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 font-bold rounded-2xl shadow-lg hover:shadow-amber-500/30 transition-all text-sm flex items-center justify-center gap-2"><PlayCircle className="w-5 h-5" />{language === 'es' ? 'Entrar al Aula' : language === 'pt' ? 'Entrar na Aula' : 'Enter Classroom'}</button>
                        <button onClick={() => { if (window.speechSynthesis) window.speechSynthesis.cancel(); setIntroStep('registration'); }} className="flex-1 px-5 py-3 bg-transparent border-2 border-amber-500/40 text-amber-400 font-bold rounded-2xl hover:bg-amber-500/10 transition-all text-sm flex items-center justify-center gap-2"><GraduationCap className="w-5 h-5" />{language === 'es' ? 'Registrarse' : language === 'pt' ? 'Registrar' : 'Register'}</button>
                      </div>
                    )}
                  </div>
                </div>
              ) : null}
            </div>

            {introStep === 'intro' && (
              <div className="mt-8 text-center flex flex-col items-center">
                <button
                  onClick={() => {
                    if (window.speechSynthesis) {
                      const unlock = new SpeechSynthesisUtterance("");
                      unlock.volume = 0;
                      window.speechSynthesis.speak(unlock);
                    }
                    setIntroStep('professor');
                  }}
                  className="mt-12 px-12 py-5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:via-amber-300 hover:to-amber-400 text-slate-900 rounded-full font-bold uppercase tracking-[0.25em] transition-all shadow-[0_0_40px_rgba(245,158,11,0.6)] border-2 border-amber-200/50 flex items-center gap-4 group mx-auto"
                >
                  <span className="text-lg md:text-xl">Entrar a la Cátedra</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            )}

            {/* Registration Step */}
            {introStep === 'registration' && (
              <div className="fixed inset-0 z-[200] bg-slate-950 overflow-y-auto">
                <RegistrationForm 
                  t={t} 
                  user={user} 
                  language={language}
                  onSubmit={handleRegistration}
                  onLogin={handleLogin}
                  onSkip={() => { setShowIntro(false); setIntroStep('chat'); fetchGreeting(); }}
                  onBack={() => setIntroStep('intro')}
                  externalError={error}
                  setExternalError={setError}
                  onGoogleSignIn={() => setShowGoogleModal(true)}
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Registration Overlay for logged in users without profile */}
      {introStep === 'chat' && !studentProfile && !isTransitioning && (
        <div className="fixed inset-0 z-[150] bg-slate-950 overflow-y-auto">
          <div className="p-6 lg:p-8">
            <div className="mb-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-3xl text-amber-400 text-center font-medium shadow-2xl">
              <p className="text-lg mb-2">{t.registrationRequiredMsg}</p>
            </div>
            <RegistrationForm t={t} onSubmit={handleRegistration} onLogin={handleLogin} onSkip={handleSkipRegistration} user={user} language={language} externalError={error} setExternalError={setError} onGoogleSignIn={() => setShowGoogleModal(true)} />
          </div>
        </div>
      )}

      {introStep === 'admin' && (
        <div className="fixed inset-0 z-[150] flex flex-col bg-slate-950 p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto w-full">
            <button 
              onClick={() => setIntroStep('chat')}
              className="mb-8 px-6 py-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-amber-400 transition-all flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Regresar al Chat
            </button>
            <AdminPanel t={t} />
          </div>
        </div>
      )}

      {/* Smooth Transition Portal */}
      {isTransitioning && (
        <div className="fixed inset-0 z-[500] bg-slate-950 flex flex-col items-center justify-center p-6">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-600/10 via-transparent to-transparent opacity-30" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center relative z-10"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-900 rounded-full flex items-center justify-center mb-8 ring-2 ring-amber-500/30 shadow-[0_0_100px_rgba(245,158,11,0.2)] mx-auto relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent" />
                <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-amber-400 animate-pulse relative z-10" />
                <motion.div 
                  className="absolute inset-0 border-4 border-amber-500/50 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              <h2 className="text-3xl md:text-5xl font-serif text-amber-100 mb-4 tracking-tight drop-shadow-2xl">
                {language === 'es' ? 'Bienvenido a la Luz' : 
                 language === 'en' ? 'Welcome to the Light' : 
                 language === 'pt' ? 'Bem-vindo à Luz' : 'Bienvenue a la Lumiere'}
              </h2>
              <p className="text-slate-400 text-lg md:text-xl font-light italic opacity-80">
                {language === 'es' ? 'Preparando tu cátedra doctrinal...' : 
                 language === 'en' ? 'Preparing your doctrinal lecture...' : 
                 language === 'pt' ? 'Preparando sua aula doutrinária...' : 'Préparation de votre conférence doctrinale...'}
              </p>
              
              <div className="mt-12 w-64 md:w-80 h-1.5 bg-slate-900/50 rounded-full overflow-hidden mx-auto border border-slate-800/50 shadow-inner">
                <motion.div 
                  className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
        </div>
      )}

      {/* Google Account Picker Simulation */}
      {showGoogleModal && (
        <div className="fixed inset-0 z-[600] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden border border-slate-200">

              <div className="p-8 text-center">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" className="h-6 mx-auto mb-6" alt="Google" />
                <h2 className="text-xl font-medium text-slate-900 mb-1">Elige una cuenta</h2>
                <p className="text-sm text-slate-600 mb-8">para continuar a Escuela Magnetico-Espiritual de la Comuna Universal</p>
                
                <div className="space-y-1 text-left">
                  {[
                    { displayName: "Nelson Osorio", email: "nelsonosoriogarcia@gmail.com", img: "https://lh3.googleusercontent.com/a/default-user=s96-c" },
                    { displayName: "Estudiante EMECU", email: "estudiante.emecu@gmail.com", img: "https://lh3.googleusercontent.com/a/default-user=s96-c" },
                    { displayName: "Invitado de Honor", email: "invitado.luz@gmail.com", img: "https://lh3.googleusercontent.com/a/default-user=s96-c" }
                  ].map(acc => (
                    <button 
                      key={acc.email}
                      onClick={() => handleGoogleSignIn(acc)}
                      className="w-full flex items-center gap-4 p-4 hover:bg-slate-50 transition-all border-b border-slate-100 last:border-0 group"
                    >
                      <img src={acc.img} className="w-10 h-10 rounded-full border border-slate-200" alt="" />
                      <div className="flex flex-col flex-1 overflow-hidden">
                        <span className="text-sm font-semibold text-slate-900 truncate">{acc.displayName}</span>
                        <span className="text-xs text-slate-500 truncate">{acc.email}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                  <button 
                    onClick={() => {
                      const email = prompt("Introduce el correo de la cuenta Google:");
                      if (email) handleGoogleSignIn({ displayName: email.split('@')[0], email });
                    }}
                    className="w-full flex items-center gap-4 p-4 hover:bg-slate-50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                      <User className="w-5 h-5 text-slate-500" />
                    </div>
                    <span className="text-sm font-medium text-slate-900">Usar otra cuenta</span>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 transition-transform ml-auto" />
                  </button>
                </div>
              </div>
              <div className="bg-slate-50 p-6 flex justify-between items-center text-[11px] text-slate-500">
                <button onClick={() => setShowGoogleModal(false)} className="font-semibold text-blue-600 hover:text-blue-700">Cancelar</button>
                <div className="flex gap-3">
                  <span>Privacidad</span>
                  <span>Términos</span>
                </div>
              </div>
            </div>
          </div>
        )}
      {/* Photo Enlargement Overlay */}
      <AnimatePresence>
        {isPhotoEnlarged && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setIsPhotoEnlarged(false)}
          >
            <motion.div
              initial={{ scale: 0.5, rotateY: 90 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.5, rotateY: -90 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="relative max-w-full max-h-full"
            >
              <div className="p-2 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl shadow-[0_0_100px_rgba(217,119,6,0.6)]">
                <img 
                  src={TRINCADO_IMG} 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== TRINCADO_IMG_FALLBACK) {
                      target.src = TRINCADO_IMG_FALLBACK;
                    }
                  }}
                  alt="Joaquín Trincado Mateo" 
                  className="w-[80vw] md:w-[400px] h-auto object-contain rounded-2xl"
                  style={{ 
                    filter: "contrast(1.1) brightness(1.05)"
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grade Change Confirmation Floating Dialog */}
      {showGradeConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12 pointer-events-none">
          <div className="bg-slate-900/95 backdrop-blur-xl border-2 border-amber-500/50 rounded-[2.5rem] shadow-[0_0_50px_rgba(245,158,11,0.2)] p-8 max-w-lg w-full pointer-events-auto overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />
            
            <div className="flex flex-col items-center text-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl">
                  <img 
                    src={TRINCADO_IMG} 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== TRINCADO_IMG_FALLBACK) {
                        target.src = TRINCADO_IMG_FALLBACK;
                      }
                    }}
                    alt="Joaquín Trincado"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-amber-100 font-serif leading-tight">
                  {t.confirmGradeChange}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t.professor}: <span className="italic text-slate-300">"El progreso debe ser constante, pero la voluntad es tuya."</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full mt-2">
                <button
                  onClick={() => {
                    if (pendingGradeChange !== null) {
                      const targetGrade = pendingGradeChange;
                      setCurrentGrade(targetGrade);
                      setLessonProgress(1);
                      setShowGradeConfirm(false);
                      setPendingGradeChange(null);
                      setChat([{ role: 'professor', text: 'Preparando la nueva cátedra, aguarda un momento...' }]);
                      setTimeout(() => {
                         fetchGreeting(targetGrade, 1);
                      }, 50);
                    }
                  }}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-400 hover:to-amber-400 text-slate-900 font-bold rounded-2xl transition-all shadow-lg active:scale-95"
                >
                  {t.confirm}
                </button>
                <button
                  onClick={() => {
                    setShowGradeConfirm(false);
                    setPendingGradeChange(null);
                  }}
                  className="flex-1 px-6 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-2xl transition-all border border-slate-700 shadow-lg active:scale-95"
                >
                  {t.continueCurrent}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {!showIntro && (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative overflow-x-hidden flex flex-col">
      {/* School Name - Top Banner */}
      <div className="w-full z-[100] text-center py-4 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 border-b border-amber-500/50 shadow-[0_4px_20px_rgba(245,158,11,0.15)] relative">
        <p className="text-amber-100 text-xs sm:text-sm md:text-base font-bold tracking-[0.3em] uppercase drop-shadow-md px-2">
          Escuela Magnetico-Espiritual de la Comuna Universal
        </p>
      </div>

      <div className="p-4 md:p-8 flex-1 flex flex-col relative z-10 w-full max-w-[1920px] mx-auto">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-600/20 rounded-full blur-[120px] -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] -z-10"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <header className="relative z-[50] flex flex-col md:flex-row items-center justify-between pb-4 border-b border-gradient-to-r border-amber-500/20 mb-8 gap-5 pt-2">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-5"
        >
          {/* Professor Portrait */}
          <div 
            className="w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-[0_8px_32px_rgba(245,158,11,0.15)] cursor-pointer hover:shadow-[0_8px_32px_rgba(245,158,11,0.35)] hover:border-amber-500/60 transition-all flex-shrink-0 relative group"
            onClick={() => setIsPhotoEnlarged(true)}
          >
            <img 
              src={TRINCADO_IMG}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src !== TRINCADO_IMG_FALLBACK) {
                  target.src = TRINCADO_IMG_FALLBACK;
                }
              }}
              alt="Joaquín Trincado Mateo"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="text-left">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300 bg-clip-text text-transparent tracking-tight leading-tight">
              Joaquín Trincado Mateo
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-slate-500 text-[10px] md:text-xs font-medium tracking-wide">
                Profesor Virtual Doctrinal
              </p>
            </div>
          </div>
        </motion.div>

        {/* Language Switcher in Header */}
        <div className="flex items-center gap-3">
          {/* Grades Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setShowGradesMenu(!showGradesMenu)}
              className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-800/50 rounded-xl text-amber-400 hover:bg-slate-800 hover:border-amber-500/30 transition-all shadow-lg"
            >
              <GraduationCap className="w-5 h-5" />
              <span className="hidden sm:inline font-bold uppercase tracking-widest text-xs">{t.studyGrades}</span>
              <ChevronRight className={`w-4 h-4 transition-transform ${showGradesMenu ? 'rotate-90' : ''}`} />
            </button>
            <AnimatePresence>
              {showGradesMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full right-0 mt-2 w-72 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-[100]"
                >
                  <div className="p-4 bg-slate-800/50 border-b border-slate-700/50 flex justify-between items-center">
                    <span className="text-amber-400 font-bold text-sm">{t.studyGrades}</span>
                    <button 
                      onClick={() => setShowAdminPassInput(!showAdminPassInput)}
                      className="text-slate-500 hover:text-amber-400 transition-all"
                      title={t.unlockAll}
                    >
                      <ShieldCheck className="w-4 h-4" />
                    </button>
                  </div>

                  {showAdminPassInput && (
                    <div className="p-3 bg-slate-800/80 border-b border-slate-700/50">
                      <input 
                        type="password"
                        placeholder={t.adminPassLabel}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-amber-400 focus:ring-1 focus:ring-amber-500 outline-none"
                        value={adminPass}
                        onChange={(e) => {
                          setAdminPass(e.target.value);
                          if (e.target.value === "EMECU_SECRET") {
                            setUnlockedAllGrades(true);
                            setShowAdminPassInput(false);
                          }
                        }}
                      />
                    </div>
                  )}

                  <div className="max-h-80 overflow-y-auto p-2 space-y-1">
                    {CURRICULUM.map((grade) => {
                      const isUnlocked = true; // Temporary unlock all grades for testing
                      return (
                        <button
                          key={grade.id}
                          disabled={!isUnlocked}
                          onClick={() => {
                            if (isUnlocked) {
                              setPendingGradeChange(grade.id);
                              setShowGradeConfirm(true);
                              setShowGradesMenu(false);
                            }
                          }}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all ${
                            currentGrade === grade.id 
                              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' 
                              : isUnlocked 
                                ? 'hover:bg-slate-800 text-slate-300' 
                                : 'text-slate-700 cursor-not-allowed opacity-50'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-5 text-center font-mono opacity-50">{grade.id}</span>
                            <span className="truncate max-w-[160px]">{grade.title}</span>
                          </div>
                          {!isUnlocked && <Lock className="w-3 h-3" />}
                          {isUnlocked && currentGrade > grade.id && <ShieldCheck className="w-3 h-3 text-green-500" />}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={downloadLessonPdf}
            className="p-2.5 bg-slate-900/50 border border-slate-800/50 rounded-xl text-amber-400 hover:bg-slate-800 hover:border-amber-500/30 transition-all shadow-lg"
            title={t.downloadPdf}
          >
            <Download className="w-5 h-5" />
          </button>

          {(isAudioPlaying || isAudioPaused) && (
            <div className="flex gap-2 bg-slate-900/50 p-1 rounded-xl border border-slate-800/50">
              <button
                onClick={togglePauseResumeAudio}
                className="p-2 rounded-lg text-amber-400 hover:bg-slate-800 transition-all"
                title={isAudioPaused ? t.resume : t.pause}
              >
                {isAudioPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              </button>
              <button
                onClick={stopAudio}
                className="p-2 rounded-lg text-red-400 hover:bg-slate-800 transition-all"
                title={t.stop}
              >
                <Square className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Audio Speed Control */}
          <div className="flex flex-col items-center mr-4">
            <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">{t.audioSpeed}</div>
            <div className="flex items-center gap-2">
              <input 
                type="range" 
                min="0.5" 
                max="2" 
                step="0.1" 
                value={audioSpeed} 
                onChange={(e) => setAudioSpeed(parseFloat(e.target.value))}
                className="w-16 sm:w-24 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <span className="text-[10px] text-amber-500/60 font-mono w-8">{audioSpeed}x</span>
            </div>
          </div>

          {/* Voice Selector */}
          <div className="flex flex-col items-center mr-4">
            <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">{t.professorVoice}</div>
            <select
              value={selectedVoiceURI}
              onChange={(e) => setSelectedVoiceURI(e.target.value)}
              className="bg-slate-900/50 border border-slate-800/50 rounded-xl px-2 py-1 text-amber-400 text-[10px] outline-none hover:bg-slate-800 transition-all shadow-lg max-w-[120px]"
            >
              {availableVoices
                .filter(v => v.lang.startsWith(language))
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(voice => (
                  <option key={voice.voiceURI} value={voice.voiceURI}>
                    {voice.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="flex gap-2 bg-slate-900/50 p-1 rounded-xl border border-slate-800/50">
            {['es', 'en', 'pt', 'fr'].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang as any)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  language === lang 
                    ? 'bg-amber-500 text-slate-950 shadow-lg' 
                    : 'text-slate-400 hover:text-amber-400 hover:bg-slate-800'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {isAdminUser && (
            <button 
              onClick={() => setIntroStep('admin')}
              className="p-2 bg-slate-900/50 border border-slate-800/50 rounded-xl text-amber-400 hover:bg-amber-500/10 transition-all"
              title={t.adminPanel}
            >
              <Shield className="w-5 h-5" />
            </button>
          )}
        </div>
        <div className="flex gap-3">
          {/* Botón Iniciar Grado 1 eliminado */}
        </div>
      </header>

      <main className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-10 mt-4">
        <motion.aside 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1 space-y-8 pt-2"
        >
          <div className="p-6 bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-800/50 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-3 text-amber-400">
              <div className="p-2 bg-amber-500/10 rounded-lg">
                <BookOpen className="w-5 h-5" />
              </div>
              Currículo Actual
            </h2>
            <div className="space-y-6 text-left">
              {/* Lesson Progress */}
              <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50">
                <p className="text-amber-200/80 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">Estudio Actual</p>
                <div className="flex flex-col gap-1 mb-4">
                  <span className="text-slate-400 text-xs font-medium">Libro:</span>
                  <p className="text-amber-100/90 text-sm font-bold leading-tight">
                    {CURRICULUM.find(g => g.id === currentGrade)?.book}
                  </p>
                </div>
                <div className="flex flex-col gap-1 mb-4">
                  <span className="text-slate-400 text-xs font-medium">Capítulo:</span>
                  <p className="text-slate-200 text-xs italic">Tema {lessonProgress}</p>
                </div>
                
                <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800 mt-4 shadow-inner">
                  <motion.div 
                    className="bg-gradient-to-r from-amber-600 to-amber-400 h-full"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: `${(lessonProgress / (CURRICULUM.find(g => g.id === currentGrade)?.lessonsCount || 1)) * 100}%` 
                    }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider">Avance del Curso</span>
                  <span className="text-[10px] text-amber-500 font-bold">
                    {lessonProgress} / {CURRICULUM.find(g => g.id === currentGrade)?.lessonsCount || 1}
                  </span>
                </div>
              </div>

              {/* Total Progress */}
              <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50">
                <p className="text-amber-200/80 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">Carrera Académica (13 Grados)</p>
                <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800 mt-1 shadow-inner">
                  <motion.div 
                    className="bg-gradient-to-r from-blue-600 to-blue-400 h-full"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: `${((currentGrade - 1) / 13) * 100 + (lessonProgress / (CURRICULUM.find(g => g.id === currentGrade)?.lessonsCount || 50) / 13) * 100}%` 
                    }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider">Grado en curso</span>
                  <span className="text-[10px] text-blue-400 font-bold">
                    {currentGrade} de 13
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.aside>

        <section className="lg:col-span-3 flex flex-col h-[75vh]">
          {/* Student Header Bar - Harmonized above chat */}
          <div className="flex items-center justify-between px-6 py-3 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800/50 mb-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                <User className="w-4 h-4 text-amber-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] text-slate-500 uppercase font-bold tracking-widest leading-none mb-0.5">Estudiante en Sesión</span>
                <span className="text-amber-100 text-sm font-serif">{studentProfile?.fullName || 'Invitado'}</span>
              </div>
            </div>
            
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-950/50 hover:bg-red-500/10 border border-slate-800 hover:border-red-500/40 rounded-xl text-slate-400 hover:text-red-400 transition-all text-xs font-medium group"
            >
              <LogOut className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              <span>Cerrar Sesión</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-6 p-8 bg-slate-900/40 backdrop-blur-md rounded-3xl border border-slate-800/50 shadow-2xl scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent relative">
            <AnimatePresence initial={false}>
              {chat.map((msg, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className={`flex items-end gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  {msg.role === 'professor' && (
                    <div className="flex-shrink-0 mb-1">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-amber-500/40 shadow-lg bg-slate-800">
                        <img 
                          src={TRINCADO_IMG} 
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            if (target.src !== TRINCADO_IMG_FALLBACK) {
                              target.src = TRINCADO_IMG_FALLBACK;
                            }
                          }}
                          alt="Joaquín Trincado"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  )}
                  {msg.role === 'user' && (
                    <div className="flex-shrink-0 mb-1">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-500 flex items-center justify-center text-white shadow-lg">
                        <User className="w-6 h-6" />
                      </div>
                    </div>
                  )}
                  <div className={`group relative max-w-[80%] p-5 rounded-3xl shadow-lg ${
                    msg.role === 'user' 
                      ? 'bg-gradient-to-br from-amber-600 to-amber-700 text-white rounded-br-sm' 
                      : 'bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-md text-amber-50 border border-amber-500/30 rounded-bl-sm shadow-[0_0_15px_rgba(245,158,11,0.1)]'
                  }`}>
                    <p className={`leading-relaxed whitespace-pre-wrap ${msg.role === 'professor' ? 'font-serif text-[16px] md:text-[17px]' : 'font-sans text-[15px]'}`}>{msg.text}</p>
                    {msg.role === 'professor' && (
                      <div className="mt-4 pt-3 border-t border-slate-700/50 flex justify-end">
                        <button 
                          onClick={() => speak(msg.text)} 
                          className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/50 hover:bg-amber-500/20 text-amber-400/70 hover:text-amber-400 rounded-lg text-xs font-medium transition-colors border border-slate-700/50"
                          title={language === 'es' ? 'Repetir audio' : language === 'en' ? 'Repeat audio' : language === 'pt' ? 'Repetir áudio' : 'Répéter l\'audio'}
                        >
                          <Volume2 className="w-4 h-4" />
                          {language === 'es' ? 'Repetir audio' : language === 'en' ? 'Repeat audio' : language === 'pt' ? 'Repetir áudio' : 'Répéter l\'audio'}
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {loading && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl rounded-tl-sm p-5 flex gap-2 items-center">
                  <motion.div className="w-2 h-2 bg-amber-500 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                  <motion.div className="w-2 h-2 bg-amber-500 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                  <motion.div className="w-2 h-2 bg-amber-500 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                </div>
              </motion.div>
            )}
            <div ref={chatEndRef} />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 flex gap-3 items-center bg-slate-900/80 backdrop-blur-xl p-2 rounded-3xl border border-amber-500/20 focus-within:border-amber-500/60 focus-within:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all shadow-2xl"
          >
            <button 
              onClick={toggleMicrophone} 
              className={`p-4 rounded-2xl transition-all duration-300 relative ${
                continuousListen || isListening 
                  ? 'bg-red-500/20 text-red-400' 
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-amber-400'
              }`}
              title="Activar/Desactivar Micrófono"
            >
              {(continuousListen || isListening) && (
                <motion.div 
                  className="absolute inset-0 border border-red-500 rounded-2xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
              {isListening ? <Activity className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
            </button>
            
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage(message)}
              className="flex-1 p-4 bg-transparent border-none focus:outline-none text-slate-200 placeholder-slate-500"
              placeholder={isListening ? t.listening : t.placeholder}
            />
            
            <button 
              onClick={() => sendMessage(message)} 
              disabled={!message.trim() || loading}
              className="p-4 bg-gradient-to-r from-amber-600 to-amber-500 rounded-2xl hover:shadow-[0_0_20px_rgba(217,119,6,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed text-slate-950"
            >
              <Send className="w-6 h-6" />
            </button>
          </motion.div>
        </section>
      </main>
      </div>
    </div>
      )}
    </>
  );
}

export default function AppWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}

