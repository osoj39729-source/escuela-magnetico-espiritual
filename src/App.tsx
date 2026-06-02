import React, { useState, useEffect, useRef, useMemo, ChangeEvent, FormEvent } from 'react';
import { Send, BookOpen, BrainCircuit, Mic, Volume2, VolumeX, Sparkles, Activity, Play, Pause, Square, Download, CheckCircle2, PlayCircle, ArrowRight, ArrowLeft, Loader2, User, LogOut, Shield, ShieldAlert, Settings, ChevronRight, BarChart3, Users, Clock, Globe, CreditCard, GraduationCap, MapPin, Phone, Mail, Briefcase, Fingerprint, FastForward, Lock, Award, ShieldCheck, Eye, EyeOff, Search, X, RotateCw, MessageSquare } from 'lucide-react';
import { chatWithProfessorStream } from './services/geminiService';
import { motion, AnimatePresence } from 'motion/react';
import { jsPDF } from 'jspdf';
import { auth, db, googleProvider, signInWithPopup, signInWithRedirect, getRedirectResult, onAuthStateChanged, signOut, doc, setDoc, getDoc, updateDoc, collection, addDoc, query, orderBy, onSnapshot, handleFirestoreError, OperationType, serverTimestamp, createUserWithEmailAndPassword, signInWithEmailAndPassword, hashPassword, arrayUnion, setPersistence, browserLocalPersistence } from './firebase';
import { saveStudentProfile, getStudentProfile } from './services/localStorageService';
import { LIBRARY_BOOKS } from './data/library';
import { BLOCKED_NODES } from './data/blocked_nodes';
import type { LocalUser as FirebaseUser } from './firebase';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { iniciarSesion, cerrarSesion, registrarInteraccion, actualizarTemaEnSesion } from './services/session_tracker';
import { evaluarYActualizarPerfil, leerPerfilCognitivo, construirContextoProfesor, TRADUCCION_FACULTADES } from './services/cognitive_engine';
import { 
  debeAplicarValidacion, 
  contarInteraccionesEnLeccion, 
  incrementarInteraccionesEnLeccion, 
  activarModoValidacionIntensiva,
  estaModoValidacionIntensiva,
  reiniciarContadorLeccion
} from './services/essenceValidator';

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

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
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
    return (this as any).props.children;
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

const RegistrationForm = ({ t, onSubmit, onLogin, onSkip, onBack, user, language, externalError, setExternalError, onGoogleSignIn }: { t: any, onSubmit: (data: any) => void, onLogin: (email: string, pass: string) => void, onSkip?: () => void, onBack?: () => void, user: FirebaseUser | null, language: string, externalError?: any, setExternalError?: (err: any) => void, onGoogleSignIn?: () => void }) => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  // Detectar celular para ocultar Google Sign-In (redirect bloqueado por navegadores móviles)
  const isOnMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
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
  // ── Auto-actualización PWA ─────────────────────────────────────────────────
  // Cuando Vercel despliega una nueva versión, el service worker detecta el cambio,
  // toma control (skipWaiting+clientsClaim en vite.config), dispara controllerchange
  // y la app se recarga automáticamente en todos los celulares sin acción del usuario.
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      let reloading = false;
      const handleControllerChange = () => {
        if (!reloading) {
          reloading = true;
          window.location.reload();
        }
      };
      navigator.serviceWorker.addEventListener('controllerchange', handleControllerChange);
      return () => navigator.serviceWorker.removeEventListener('controllerchange', handleControllerChange);
    }
  }, []);

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
    <div className="w-full min-h-screen flex items-start sm:items-center justify-center p-4 sm:p-6 relative">
      {/* Background embellishments */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black z-0" />
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-amber-600/10 rounded-full blur-[150px] z-0" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[150px] z-0" />

      {/* Form Area */}
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-full max-w-2xl my-6 sm:my-0 p-6 sm:p-8 md:p-12 bg-slate-900/80 backdrop-blur-3xl rounded-[2rem] sm:rounded-[2.5rem] border border-amber-500/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col z-10 relative overflow-visible"
      >
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />
        
        {onBack && (
          <button 
            type="button" 
            onClick={onBack}
            className="absolute top-6 left-6 text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">
              {language === 'es' ? 'Volver' : language === 'en' ? 'Back' : language === 'pt' ? 'Voltar' : 'Retour'}
            </span>
          </button>
        )}

        <div className="mb-8 text-center flex flex-col items-center mt-2">
          <div className="p-4 bg-amber-500/10 rounded-full mb-4 ring-1 ring-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <GraduationCap className="w-10 h-10 text-amber-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-amber-400 tracking-wide mb-2">
            {t.introTitle}
          </h2>
          <p className="text-slate-400 font-light">
            {language === 'es' ? 'La luz del conocimiento racional' : 
             language === 'en' ? 'The light of rational knowledge' : 
             language === 'pt' ? 'A luz do conhecimento racional' : 'La lumière de la connaissance rationnelle'}
          </p>
        </div>

        {/* Toggle Login/Register */}
        <div className="flex bg-slate-800/50 p-1.5 rounded-2xl mb-8 ring-1 ring-slate-700/50">
          <button
            type="button"
            onClick={() => { setMode('login'); setError(''); }}
            className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${mode === 'login' ? 'bg-amber-500 text-slate-950 shadow-lg' : 'text-slate-400 hover:text-amber-300'}`}
          >
            {language === 'es' ? 'Iniciar Sesión' : language === 'en' ? 'Sign In' : language === 'pt' ? 'Entrar' : 'Se Connecter'}
          </button>
          <button
            type="button"
            onClick={() => { setMode('register'); setError(''); }}
            className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${mode === 'register' ? 'bg-amber-500 text-slate-950 shadow-lg' : 'text-slate-400 hover:text-amber-300'}`}
          >
            {language === 'es' ? 'Registrarse' : language === 'en' ? 'Sign Up' : language === 'pt' ? 'Cadastrar' : "S'inscrire"}
          </button>
        </div>

        {!user && !isOnMobileDevice && (
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
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder={mode === 'login'
                  ? (language === 'es' ? 'Escribe tu contraseña' : language === 'en' ? 'Enter your password' : language === 'pt' ? 'Digite sua senha' : 'Entrez votre mot de passe')
                  : (language === 'es' ? 'Crea una contraseña segura' : language === 'en' ? 'Create a strong password' : language === 'pt' ? 'Crie uma senha segura' : 'Créez un mot de passe sûr')}
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 outline-none transition-all pr-12"
              />
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
                  <input
                    required
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder={language === 'es' ? 'Repite la contraseña' : language === 'en' ? 'Repeat your password' : language === 'pt' ? 'Repita a senha' : 'Répétez le mot de passe'}
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 outline-none transition-all pr-12"
                  />
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
  const [systemStatus, setSystemStatus] = useState<any>(null);

  const fetchStatus = async () => {
    try {
      const res = await fetch('/api/system-status');
      if (res.ok) setSystemStatus(await res.json());
    } catch (e) { console.error(e); }
  };

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 10000);
    return () => clearInterval(interval);
  }, []);

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
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <h2 className="text-2xl font-bold text-amber-400 flex items-center gap-3">
          <Shield className="w-6 h-6" />
          {t.adminPanel}
        </h2>
        
        <div className="flex flex-col gap-4">
          <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/50">
            <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-3 font-bold">Estado de las Llaves</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {systemStatus?.keys?.map((k: any, i: number) => (
                <div key={i} className={`p-3 rounded-xl border flex flex-col gap-1 ${k.active ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-300 uppercase">{k.provider}</span>
                    <span className={`w-2 h-2 rounded-full ${k.active ? 'bg-green-500' : 'bg-red-500 animate-pulse'}`} />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>RPM: {k.rpm}</span>
                    <span>RPD: {k.rpd}</span>
                  </div>
                  {!k.active && k.lastError && (
                    <div className="text-[9px] text-red-400 mt-1 leading-tight line-clamp-2 italic">
                      Err: {k.lastError.substring(0, 50)}...
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-4 text-sm">
          <button 
            onClick={async () => {
              if (confirm('¿Estás seguro de que deseas reiniciar todas las cuotas y desbloquear las llaves?')) {
                try {
                  const res = await fetch('/api/reset-quotas', { method: 'POST' });
                  if (res.ok) {
                    alert('Sistema de cuotas reiniciado con éxito.');
                    fetchStatus();
                  }
                } catch (e) {
                  alert('Error al reiniciar cuotas.');
                }
              }
            }}
            className="px-4 py-2 bg-red-500/20 text-red-400 rounded-xl border border-red-500/30 hover:bg-red-500/30 transition-all flex items-center gap-2 h-fit self-end"
          >
            <ShieldAlert className="w-4 h-4" />
            Reiniciar Cuotas
          </button>
          <div className="px-4 py-2 bg-slate-900/50 rounded-xl border border-slate-800 text-slate-400 h-fit self-end">
            Total Estudiantes: <span className="text-amber-400 font-bold">{students.length}</span>
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
import { GRADE_1_GUIDELINES } from './data/grades/grade1_guidelines';

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

export function obtenerLibroActivoPorLeccion(gradeId: number, lessonIndex: number, defaultBookId: string): { bookId: string; bookTitle: string } {
  if (gradeId === 6) {
    if (lessonIndex <= 78) {
      return { bookId: "los-cinco-amores", bookTitle: "Los Cinco Amores" };
    } else {
      return { bookId: "filosofia-enciclopedica-universal-tomo-1", bookTitle: "Filosofía Enciclopédica Tomo 1" };
    }
  }
  if (gradeId === 7) {
    if (lessonIndex <= 100) {
      return { bookId: "filosofia-austera-racional", bookTitle: "Filosofía Austera Racional" };
    } else {
      return { bookId: "el-magnetismo-en-su-origen", bookTitle: "El Magnetismo en su Origen" };
    }
  }
  if (gradeId === 8) {
    if (lessonIndex <= 54) {
      return { bookId: "filosofia-austera-racional", bookTitle: "Filosofía Austera Racional" };
    } else {
      return { bookId: "el-espiritismo-estudiado", bookTitle: "El Espiritismo Estudiado" };
    }
  }
  if (gradeId === 9) {
    if (lessonIndex <= 63) {
      return { bookId: "filosofia-austera-racional", bookTitle: "Filosofía Austera Racional" };
    } else {
      return { bookId: "profilaxis-de-la-vida", bookTitle: "Profilaxis de la Vida" };
    }
  }
  if (gradeId === 10) {
    if (lessonIndex <= 55) {
      return { bookId: "los-extremos-se-tocan", bookTitle: "Los Extremos se Tocan" };
    } else {
      return { bookId: "filosofia-enciclopedica-universal-tomo-2", bookTitle: "Filosofía Enciclopédica Tomo 2" };
    }
  }
  if (gradeId === 11) {
    if (lessonIndex <= 149) {
      return { bookId: "conocete-a-ti-mismo-1", bookTitle: "Conócete a Ti Mismo" };
    } else {
      return { bookId: "alfaqui-vademecum", bookTitle: "Alfaquí Vademécum" };
    }
  }
  if (gradeId === 12) {
    if (lessonIndex <= 100) {
      return { bookId: "codigo-de-amor-universal-tomo-1", bookTitle: "Código de Amor Universal Tomo 1" };
    } else {
      return { bookId: "codigo-de-amor-universal-tomo-2", bookTitle: "Código de Amor Universal Tomo 2" };
    }
  }
  if (gradeId === 13) {
    // Parte 1: Estatutos y Reglamentos (temas 1-63)
    if (lessonIndex <= 63) {
      return { bookId: "estatutos-y-reglamentos", bookTitle: "Estatutos y Reglamentos" };
    }
    // Laudo de Rigor (temas 64-83, 20 temas)
    else if (lessonIndex <= 83) {
      return { bookId: "laudode-rigor", bookTitle: "Laudo de Rigor" };
    }
    // Ley de las Mediumidades en General (temas 84-123, 40 temas)
    else if (lessonIndex <= 123) {
      return { bookId: "ley-de-las-mediumidades-en-general", bookTitle: "Ley de las Mediumidades en General" };
    }
    // Parte 2: Reglamento Interno / Estatutos ampliados (temas 124-144, 21 temas)
    else {
      return { bookId: "estatutos-y-reglamentos", bookTitle: "Estatutos y Reglamentos (Parte 2)" };
    }
  }
  
  return { bookId: defaultBookId, bookTitle: "" };
}

function App() {
  const [introStep, setIntroStep] = useState<'intro' | 'choice' | 'video' | 'professor' | 'registration' | 'chat' | 'admin'>('intro');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [studentProfile, setStudentProfile] = useState<any>(null);
  const [isSynced, setIsSynced] = useState<boolean>(false);
  const [isAdminUser, setIsAdminUser] = useState(false);
  const [error, setError] = useState<string | React.ReactNode>('');
  
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<{ role: 'user' | 'professor'; text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [continuousListen, setContinuousListen] = useState(false);
  const [isPhotoEnlarged, setIsPhotoEnlarged] = useState(false);
  const [activeMobileTab, setActiveMobileTab] = useState<'chat' | 'grades' | 'libros' | 'perfil'>('chat');
  
  const enterApp = (p?: any) => {
    const prof = p || studentProfile;
    setShowIntro(false);
    setIntroStep('chat');
    fetchGreeting(prof?.currentGrade || 1, prof?.currentLesson || 1);
  };
  
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  useEffect(() => {
    console.log("EMECU APP - Versión 1.2.7 (Robusta & Fluida)");
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  const getBrowserLang = (): 'es' | 'en' | 'pt' | 'fr' => {
    try {
      const lang = navigator.language.slice(0, 2).toLowerCase();
      if (['es', 'en', 'pt', 'fr'].includes(lang)) return lang as 'es' | 'en' | 'pt' | 'fr';
    } catch(e) {}
    return 'es';
  };
  const [language, setLanguage] = useState<'es' | 'en' | 'pt' | 'fr'>(getBrowserLang());
  const t = translations[language];
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isAudioPaused, setIsAudioPaused] = useState(false);
  const [sessionAudioEnabled, setSessionAudioEnabled] = useState(true); // Silencio de sesión persistente
  const [audioSpeed, setAudioSpeed] = useState(() => {
    // Cargar velocidad guardada por este dispositivo (persiste entre sesiones)
    const saved = localStorage.getItem('tts_speed');
    return saved ? parseFloat(saved) : 1;
  });
  const [currentGrade, setCurrentGrade] = useState(1);
  const [lessonProgress, setLessonProgress] = useState(1);
  const [lessonTitle, setLessonTitle] = useState("Discurso del Obispo Stromayer");
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [showChoiceButtons, setShowChoiceButtons] = useState(false);
  const [unlockedAllGrades, setUnlockedAllGrades] = useState(false);
  const [showGradesMenu, setShowGradesMenu] = useState(false);
  const [showLessonsMenu, setShowLessonsMenu] = useState(false);
  const [showLibraryMenu, setShowLibraryMenu] = useState(false);
  const [showDownloadsMenu, setShowDownloadsMenu] = useState(false);
  const [studyMode, setStudyMode] = useState<'curriculum' | 'library'>('curriculum');
  const [currentLibraryBook, setCurrentLibraryBook] = useState<string | null>(null);
  const [currentLibraryChapter, setCurrentLibraryChapter] = useState<string | null>(null);
  const [librarySearch, setLibrarySearch] = useState('');
  const [adminPass, setAdminPass] = useState('');
  const [showAdminPassInput, setShowAdminPassInput] = useState(false);
  const [pendingGradeChange, setPendingGradeChange] = useState<number | null>(null);
  const [showGradeConfirm, setShowGradeConfirm] = useState(false);
  const [showDiploma, setShowDiploma] = useState<number | null>(null);
  const [maxReachedLesson, setMaxReachedLesson] = useState(1);
  const [maxReachedGrade, setMaxReachedGrade] = useState(1);
  const [cognitiveContext, setCognitiveContext] = useState<string>('');
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceURI, setSelectedVoiceURI] = useState<string>('');
  const [isPortrait, setIsPortrait] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [modoValidacionIntensiva, setModoValidacionIntensiva] = useState(false);
  const [interaccionesEnLeccion, setInteraccionesEnLeccion] = useState(0);

  useEffect(() => {
    const checkOrientation = () => {
      const isMobileDevice = window.innerWidth <= 768 || /Mobi|Android|iPhone/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
      const isCurrentlyPortrait = window.innerHeight > window.innerWidth;
      setIsPortrait(false);
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    if (screen.orientation) {
      screen.orientation.addEventListener('change', checkOrientation);
    }

    return () => {
      window.removeEventListener('resize', checkOrientation);
      if (screen.orientation) {
        screen.orientation.removeEventListener('change', checkOrientation);
      }
    };
  }, []);

  const handleForceLandscape = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().then(() => {
        const screenAny = screen as any;
        if (screenAny.orientation && screenAny.orientation.lock) {
          screenAny.orientation.lock('landscape').catch((err: any) => {
            console.warn("[Orientation] Lock failed:", err);
          });
        }
      }).catch(err => {
        console.warn("[Orientation] Fullscreen failed:", err);
      });
    }
  };

  // Load saved student profile from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('emecu_student');
      if (saved) {
        const profile = JSON.parse(saved);
        setStudentProfile(profile);
        setCurrentGrade(profile.currentGrade || 1);
        setLessonProgress(profile.currentLesson || 1);
        setMaxReachedGrade(profile.maxReachedGrade || profile.currentGrade || 1);
        setMaxReachedLesson(profile.maxReachedLesson || profile.currentLesson || 1);
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
      
      const speakGreeting = async () => {
        if (!isMounted) return;

        // Detener cualquier audio previo ANTES de iniciar el nuevo saludo
        if (currentGeminiAudioRef.current) {
          currentGeminiAudioRef.current.pause();
          currentGeminiAudioRef.current.src = '';
          currentGeminiAudioRef.current.load(); // Forzar liberación del buffer (celulares viejos)
          currentGeminiAudioRef.current = null;
        }
        if (window.speechSynthesis) window.speechSynthesis.cancel();

        // ── PRIORIDAD 1: Archivo WAV pre-generado (instantáneo, sin llamada API) ──
        const type = isReg ? 'registration' : 'professor';
        // v=3 fuerza refresco del caché del navegador/PWA con la voz nueva (Federico)
        const preGenUrl = `/audio/${type}_${language}.wav?v=3`;
        try {
          const checkRes = await fetch(preGenUrl, { method: 'HEAD' });
          if (checkRes.ok) {
            const audio = new Audio(preGenUrl);
            audio.playbackRate = audioSpeed;
            currentGeminiAudioRef.current = audio;
            audio.onended = () => { currentGeminiAudioRef.current = null; };
            audio.onerror = () => { currentGeminiAudioRef.current = null; speakGreetingGemini(); };
            audio.play().catch(() => speakGreetingGemini());
            return;
          }
        } catch { /* archivo no existe, continuar */ }

        speakGreetingGemini();
      };

      // ── PRIORIDAD 2: Gemini TTS (voz Charon) ──────────────────────────────────
      const speakGreetingGemini = async () => {
        if (!isMounted) return;
        try {
          const response = await fetch('/api/tts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: fullText.trim(), lang: language })
          });
          if (response.ok && isMounted) {
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const audio = new Audio(url);
            audio.playbackRate = audioSpeed;
            currentGeminiAudioRef.current = audio;
            audio.onended = () => { URL.revokeObjectURL(url); currentGeminiAudioRef.current = null; };
            audio.onerror = () => { URL.revokeObjectURL(url); currentGeminiAudioRef.current = null; speakGreetingFallback(); };
            audio.play().catch(() => speakGreetingFallback());
            return;
          }
        } catch { /* Gemini no disponible */ }
        speakGreetingFallback();
      };

      // Fallback: Web Speech API del navegador
      const speakGreetingFallback = () => {
        if (!isMounted || !window.speechSynthesis) return;
        const utterance = new SpeechSynthesisUtterance(fullText);
        utterance.rate = 0.9;
        utterance.pitch = 0.4;
        utterance.volume = 1;
        const voices = window.speechSynthesis.getVoices();
        let preferredVoice = voices.find(v => v.voiceURI === selectedVoiceURI) ||
                             voices.find(v => v.lang.startsWith('es') && v.name.toLowerCase().includes('male')) ||
                             voices.find(v => v.lang.startsWith(language));
        if (preferredVoice) { utterance.voice = preferredVoice; utterance.lang = preferredVoice.lang; }
        else { utterance.lang = language === 'es' ? 'es-ES' : language; }
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
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
      // FIX: Detener WAV pre-generado al cambiar paso (evita 2 voces simultáneas)
      if (currentGeminiAudioRef.current) {
        currentGeminiAudioRef.current.pause();
        currentGeminiAudioRef.current.src = '';
        currentGeminiAudioRef.current.load(); // Forzar liberación del buffer (celulares viejos)
        currentGeminiAudioRef.current = null;
      }
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    };
  }, [introStep, language, selectedVoiceURI]);
  
  const recognitionRef = useRef<any>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const photoTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  // Generación de voz: contador atómico que invalida cualquier proceso de voz anterior.
  // Cada vez que stopAudio() o speak() inician una nueva tanda, el contador incrementa.
  // processSpeechQueue y speakWithGemini capturan el valor al empezar y solo actúan
  // si la generación no cambió — eliminando la condición de carrera que causaba
  // que la voz robótica (Web Speech API) sonara junto con Azure/Gemini.
  const speakingGenerationRef = useRef(0);
  const speakingSessionRef = useRef(0);
  // Referencia al audio WAV de Gemini activo — para poder cancelarlo en stopAudio()
  const currentGeminiAudioRef = useRef<HTMLAudioElement | null>(null);
  // AbortController para cancelar el fetch de Gemini TTS si stopAudio() es llamado durante la carga
  const geminiAbortControllerRef = useRef<AbortController | null>(null);
  // Contador de generación: evita que un fetchGreeting pendiente (de grados)
  // hable después de que el usuario cambió a estudio libre. Cada cambio de modo
  // incrementa este contador. fetchGreeting verifica antes de llamar speak().
  const fetchGreetingGenRef = useRef(0);
  
  // TTS Queue para hablar
  const ttsQueueRef = useRef<string[]>([]);
  const isSpeakingQueueRef = useRef(false);
  const hasInitialGreetingBeenFetched = useRef(false);
  const lastLanguageRef = useRef(language);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  // Auth Listener Robusto para Móviles
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth as any, async (currentUser) => {
      try {
        if (currentUser) {
          setUser(currentUser);
          let profile = await getStudentProfile(currentUser.uid);
          
          // --- AUTO-FUSIÓN DE PROGRESO LOCAL Y CLOUD ---
          const savedLocalRaw = localStorage.getItem('emecu_student');
          if (savedLocalRaw) {
            try {
              const localProfile = JSON.parse(savedLocalRaw);
              
              if (profile) {
                // Comparación de progreso: ver si el local es más avanzado
                const localProgressValue = (localProfile.currentGrade || 1) * 1000 + (localProfile.currentLesson || 1);
                const cloudProgressValue = (profile.currentGrade || 1) * 1000 + (profile.currentLesson || 1);
                
                if (localProgressValue > cloudProgressValue) {
                  console.log("[Observador] FUSIÓN: El progreso local es más avanzado. Actualizando nube...");
                  // Fusionar datos locales sobre los de la nube
                  const mergedProfile = {
                    ...profile,
                    currentGrade: localProfile.currentGrade || 1,
                    currentLesson: localProfile.currentLesson || 1,
                    maxReachedGrade: Math.max(profile.maxReachedGrade || 1, localProfile.maxReachedGrade || 1, localProfile.currentGrade || 1),
                    maxReachedLesson: Math.max(profile.maxReachedLesson || 1, localProfile.maxReachedLesson || 1, localProfile.currentLesson || 1),
                    intelligenceScore: Math.max(profile.intelligenceScore || 0, localProfile.intelligenceScore || 0),
                  };
                  
                  // Fusionar facultades si existen localmente y son numéricas
                  if (localProfile.faculties) {
                    mergedProfile.faculties = {
                      ...(profile.faculties || {}),
                      ...localProfile.faculties
                    };
                  }
                  
                  await saveStudentProfile(mergedProfile);
                  profile = mergedProfile;
                } else {
                  console.log("[Observador] FUSIÓN: El progreso en la nube es más avanzado o igual. Sincronizando localmente...");
                  // Sincronizar localmente si la nube es más avanzada
                  localStorage.setItem('emecu_student', JSON.stringify(profile));
                }
              } else {
                // Si no hay perfil en la nube pero sí local, creamos el de la nube con los datos locales
                console.log("[Observador] FUSIÓN: Perfil no encontrado en la nube. Creando desde datos locales...");
                const newCloudProfile = {
                  ...localProfile,
                  uid: currentUser.uid,
                  email: currentUser.email || localProfile.email
                };
                await saveStudentProfile(newCloudProfile);
                profile = newCloudProfile;
              }
            } catch (errSync) {
              console.error("[Observador] Error durante la auto-fusión de perfiles:", errSync);
            }
          }
          
          if (profile) {
            setStudentProfile(profile);
            setIsAdminUser(profile.role === 'admin' || currentUser.email === "nelsonosoriogarcia@gmail.com");
            setCurrentGrade(profile.currentGrade || 1);
            setLessonProgress(profile.currentLesson || 1);
            setMaxReachedGrade(profile.maxReachedGrade || profile.currentGrade || 1);
            setMaxReachedLesson(profile.maxReachedLesson || profile.currentLesson || 1);
            setIsSynced(true);
            
            setShowIntro(true);
            setIntroStep('intro');
          } else {
            setShowIntro(true);
            setIntroStep('intro');
          }
        } else {
          setIsSynced(false);
          // Intentar capturar el resultado del redirect con más insistencia
          const result = await getRedirectResult(auth as any).catch(e => {
            console.warn("Redirect result failed (expected on normal load):", e);
            return null;
          });
          
          if (result?.user) {
            setUser(result.user);
            const profile = await getStudentProfile(result.user.uid);
            if (profile) {
              setStudentProfile(profile);
              setIsSynced(true);
              setShowIntro(true);
              setIntroStep('intro');
            } else {
              setIntroStep('registration');
            }
          } else {
            // Si no hay usuario ni resultado de redirect, mostrar intro
            setShowIntro(true);
            setIntroStep('intro');
          }
        }
      } catch (error: any) {
        console.error("Auth error:", error);
        setShowIntro(true);
        setIntroStep('intro');
      } finally {
        setTimeout(() => setIsAuthLoading(false), 1200);
      }
    });

    return () => unsubscribe();
  }, []);

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

  const lastGreetingTime = useRef(0);

  // Handle Language Change
  useEffect(() => {
    // El cambio de idioma ahora es pasivo. 
    // No disparamos fetchGreeting para evitar borrar el chat.
    // El Maestro responderá en el nuevo idioma en su próxima interacción normal.
  }, [language]);

  const fetchGreeting = async (gradeOverride?: number, lessonOverride?: number, modeOverride?: 'curriculum' | 'library', cognitiveOverride?: string) => {
    // Capturar generación actual — si cambia antes de speak(), este call es un fantasma
    const myGen = ++fetchGreetingGenRef.current;
    // Si el idioma cambió, permitimos el refresco aunque ya haya saludado antes
    const languageChanged = lastLanguageRef.current !== language;
    lastLanguageRef.current = language;

    if (hasInitialGreetingBeenFetched.current && !gradeOverride && !languageChanged) return;
    if (!gradeOverride && !languageChanged) hasInitialGreetingBeenFetched.current = true;
    
    setLoading(true);
    setChat([{ role: 'professor', text: '...' }]);
    try {
      const activeGrade = gradeOverride || currentGrade;
      const activeLesson = lessonOverride || lessonProgress;
      const activeMode = modeOverride || studyMode;
      const gradeData = CURRICULUM.find(g => g.id === activeGrade);
      const totalLessons = gradeData?.lessonsCount || 1;
      const themeName = gradeData?.themes ? gradeData.themes[activeLesson - 1] : undefined;
      let studentName = studentProfile?.fullName || "";
      let startPrompt = "";
      const bookData = currentLibraryBook ? LIBRARY_BOOKS.find(b => b.id === currentLibraryBook) : null;
      const currentBookTitle = bookData ? bookData.title : undefined;
      const effectiveChapter = currentLibraryChapter;
      const activeCognitiveContext = cognitiveOverride || cognitiveContext;

      // ═══════════════════════════════════════════════════════════
      // RESOLUCIÓN DINÁMICA CURRICULAR (Hilo faltante reparado)
      // Cuando activeMode === 'curriculum', resolver el libro y capítulo
      // correspondientes a la lección actual SIN TOCAR currentLibraryBook
      // ni currentLibraryChapter (preservar aislamiento absoluto entre modos).
      // ═══════════════════════════════════════════════════════════
      let resolvedCurriculumBookId = undefined;
      let resolvedCurriculumBookTitle = undefined;
      
      if (activeMode === 'curriculum' && gradeData) {
        const infoLibro = obtenerLibroActivoPorLeccion(activeGrade, activeLesson, gradeData.book || "");
        resolvedCurriculumBookId = infoLibro.bookId || undefined;
        resolvedCurriculumBookTitle = infoLibro.bookTitle ? `Grado ${activeGrade}: ${infoLibro.bookTitle}` : `Grado ${activeGrade}: ${gradeData.title || 'Obra doctrinal'}`;
      }
      
      const resolvedCurriculumChapter = activeMode === 'curriculum' ? (themeName || undefined) : undefined;
      const themeGuideline = themeName && activeGrade === 1 ? GRADE_1_GUIDELINES[themeName] : undefined;
      console.log(`[Currículo RAG] Resolviendo → bookId: ${resolvedCurriculumBookId} | chapter: ${resolvedCurriculumChapter} | guideline: ${themeGuideline ? 'Sí' : 'No'}`);

      if (activeGrade === 1 && activeLesson === 1 && activeMode === 'curriculum') {
        startPrompt = language === 'es'
          ? `Salud, hermano. Mi nombre es ${studentName || "estudiante"}. Vengo a recibir tu enseñanza en la Escuela Magnetico-Espiritual de la Comuna Universal.`
          : `Greetings, brother. My name is ${studentName || "student"}. I come to receive your teaching.`;
      } else {
        const themeContext = themeName ? `el tema: "${themeName}"` : `la Lección N° ${activeLesson}`;
        
        if (activeMode === 'library') {
          startPrompt = language === 'es'
            ? `[MODO ESTUDIO LIBRE] Salud, hermano. Deseo profundizar en la obra "${currentBookTitle || currentLibraryBook}" en su capítulo "${effectiveChapter || currentLibraryChapter}".`
            : language === 'en'
            ? `[FREE STUDY MODE] Greetings, brother. I wish to delve into the work "${currentBookTitle || currentLibraryBook}" in its chapter "${effectiveChapter || currentLibraryChapter}".`
            : language === 'pt'
            ? `[MODO ESTUDIO LIBRE] Saudações, irmão. Desejo aprofundar na obra "${currentBookTitle || currentLibraryBook}" em seu capítulo "${effectiveChapter || currentLibraryChapter}".`
            : `[MODE ÉTUDE LIBRE] Salutations, frère. Je souhaite approfondir l'œuvre "${currentBookTitle || currentLibraryBook}" dans son chapitre "${effectiveChapter || currentLibraryChapter}".`;
        } else if (modeOverride === 'curriculum') {
          startPrompt = language === 'es'
            ? `[CAMBIO A MODO ACADÉMICO] Salud, hermano. Dejemos el estudio libre y continuemos con el Grado ${activeGrade}, abordando ${themeContext}.`
            : `[SWITCH TO ACADEMY] Greetings. Let's switch to the academic program and continue with Grade ${activeGrade}, addressing ${themeContext}.`;
        } else {
          startPrompt = language === 'es'
            ? `Salud, hermano. Continuemos con el Grado ${activeGrade}, abordando ${themeContext}.`
            : `Greetings, brother. Let's continue with Grade ${activeGrade}, addressing ${themeContext}.`;
        }
      }
      

        let accumulated = '';
        let lastUpdate = 0;

        const result = await chatWithProfessorStream(
          startPrompt, 
          [], 
          language, 
          activeGrade, 
          activeLesson, 
          totalLessons, 
          themeName, 
          !!studentProfile,
          studentProfile?.fullName || 'Alumno',
          (chunk) => {
            accumulated += chunk;

            const now = Date.now();
            if (now - lastUpdate > 80) {
              const tempText = accumulated.replace(/<!-- COGNITIVE_UPDATE: \{[\s\S]*?\} -->/g, "").trim();
              setChat([{ role: 'professor', text: tempText || '...' }]);
              lastUpdate = now;
            }
          },
          activeMode,
          activeMode === 'curriculum' ? resolvedCurriculumBookTitle : currentBookTitle,
          activeMode === 'curriculum' ? resolvedCurriculumChapter : (effectiveChapter || undefined),
          activeMode === 'curriculum' ? resolvedCurriculumBookId : (currentLibraryBook || undefined),
          user?.uid || undefined,
          activeCognitiveContext,
          themeGuideline
        );

        let finalText = result.text;
        let aiDeltas: Record<string, number> | null = null;

        // Interceptación Silenciosa final
        const cognitiveMatch = finalText.match(/<!-- COGNITIVE_UPDATE: (\{[\s\S]*?\}) -->/);
        if (cognitiveMatch) {
          try {
            aiDeltas = JSON.parse(cognitiveMatch[1]);
            finalText = finalText.replace(/<!-- COGNITIVE_UPDATE: \{[\s\S]*?\} -->/g, "").trim();
          } catch (e) {
            console.warn("[Cognitive] Error parseando evaluación inicial:", e);
          }
        }

        setChat([{ role: 'professor', text: finalText }]);

        // GUARD: si el modo cambió mientras el AI generaba (usuario fue a estudio libre)
        // este fetchGreeting es un "fantasma" y NO debe hablar.
        if (fetchGreetingGenRef.current !== myGen) {
          console.log('[fetchGreeting] Cancelado — el modo cambió mientras cargaba. Sin audio.');
          return;
        }

        // Audio completo — Azure TTS (Federico) o Gemini (Charon) como respaldo
        speak(finalText);

        // Actualizar perfil si hay evaluación inicial
        if (user?.uid && aiDeltas) {
          evaluarYActualizarPerfil({
            uid: user.uid,
            mensajeEstudiante: "[INICIO_SESION]",
            preguntaProfesor: "Bienvenida",
            historialMensajes: [],
            temaActual: themeName,
            gradoActual: activeGrade,
            deltasOverride: aiDeltas
          });
        }
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

  const unlockAudio = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(" ");
      utterance.volume = 0;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Progressive TTS Queue
  const enqueueSpeech = (text: string) => {
    ttsQueueRef.current.push(text);
    if (!isSpeakingQueueRef.current) {
      processSpeechQueue();
    }
  };

  // ── Gemini TTS — Voz sabia del Maestro Trincado ────────────────────────────
  // Llama al endpoint /api/tts en Vercel (llave segura en servidor).
  // Recibe audio WAV completo y lo reproduce. Si falla → Web Speech API.
  const speakWithGemini = async (text: string, myGen: number): Promise<boolean> => {
    try {
      // AbortController: cancela el fetch HTTP si stopAudio() es llamado mientras carga
      const controller = new AbortController();
      geminiAbortControllerRef.current = controller;

      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: text.trim(), lang: language }),
        signal: controller.signal
      });
      geminiAbortControllerRef.current = null;

      if (!response.ok) {
        console.log(`[VOZ] /api/tts respondió ${response.status} — Azure y Gemini fallaron → se usará Web Speech como último recurso`);
        return false;
      }
      // Si la generación cambió mientras cargaba, no reproducir (evita eco y voz robótica)
      if (myGen !== speakingGenerationRef.current) {
        console.log(`[VOZ] Audio descartado — generación cambió durante carga (stopAudio fue llamado)`);
        return false;
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      // Aplicar velocidad del slider al audio de Gemini
      audio.playbackRate = audioSpeed;
      // Guardar referencia para poder detenerlo/pausarlo con stopAudio()/togglePause()
      currentGeminiAudioRef.current = audio;
      console.log(`[VOZ] ▶ Reproduciendo audio (Azure/Gemini) — ${blob.size} bytes, gen=${myGen}`);
      return new Promise((resolve) => {
        audio.onended = () => { URL.revokeObjectURL(url); currentGeminiAudioRef.current = null; console.log(`[VOZ] ✓ Audio completado gen=${myGen}`); resolve(true); };
        audio.onerror = () => { URL.revokeObjectURL(url); currentGeminiAudioRef.current = null; console.warn(`[VOZ] ✗ Error reproduciendo audio gen=${myGen}`); resolve(false); };
        audio.play().catch(() => { console.warn(`[VOZ] ✗ play() rechazado gen=${myGen}`); resolve(false); });
      });
    } catch (err: any) {
      geminiAbortControllerRef.current = null;
      if (err?.name === 'AbortError') {
        console.log(`[VOZ] Fetch abortado — stopAudio fue llamado durante carga`);
      }
      return false;
    }
  };

  const processSpeechQueue = async () => {
    // Capturar generación actual — si stopAudio() se llama mientras esperamos,
    // la generación cambia y este proceso se invalida automáticamente.
    const myGen = speakingGenerationRef.current;

    if (ttsQueueRef.current.length === 0) {
      isSpeakingQueueRef.current = false;
      setIsAudioPlaying(false);
      return;
    }

    isSpeakingQueueRef.current = true;
    setIsAudioPlaying(true);
    setIsAudioPaused(false);
    
    const text = ttsQueueRef.current.shift() || "";
    const cleanText = text.trim();
    
    // Intentar Azure/Gemini TTS (llama /api/tts → Azure primero, luego Gemini si falla)
    const geminiSuccess = await speakWithGemini(cleanText, myGen);
    if (geminiSuccess) { processSpeechQueue(); return; }

    // FIX: Si la generación cambió mientras esperábamos el fetch (stopAudio fue llamado),
    // NO iniciar Web Speech API. Silencio total, sin voz robótica.
    if (myGen !== speakingGenerationRef.current) {
      isSpeakingQueueRef.current = false;
      setIsAudioPlaying(false);
      setIsAudioPaused(false);
      return;
    }

    // Fallback a Web Speech API solo si Gemini falló por error real (no por abort)
    if (!window.speechSynthesis) {
      processSpeechQueue();
      return;
    }

    console.log(`[VOZ] ⚠ Azure y Gemini fallaron → usando Web Speech API del navegador (voz robótica) como último recurso`);

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = audioSpeed;
    utterance.pitch = 0.4;
    utterance.volume = 1;
    
    const voices = window.speechSynthesis.getVoices();
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

    utterance.onend = () => processSpeechQueue();
    utterance.onerror = () => processSpeechQueue();
    window.speechSynthesis.speak(utterance);
  };

  const speak = (text: string) => {
    if (!sessionAudioEnabled) return;
    stopAudio(); // incrementa la generación, invalidando cualquier voz en curso
    const cleanText = text.replace(/<!--[\s\S]*?-->/g, "").trim();
    // Límite 5000 chars — Azure TTS maneja textos largos sin timeout
    // Cubre respuestas completas en modo grados y modo biblioteca
    // (el texto completo siempre se muestra en pantalla)
    const ttsText = cleanText.length > 5000
      ? cleanText.substring(0, cleanText.lastIndexOf(' ', 5000)) || cleanText.substring(0, 5000)
      : cleanText;
    if (ttsText.length > 0) ttsQueueRef.current.push(ttsText);
    processSpeechQueue();
  };

  const stopAudio = () => {
    // Incrementar generación FIRST — invalida cualquier processSpeechQueue
    // o speakWithGemini que esté en vuelo, evitando que caigan al fallback
    // de Web Speech API (voz robótica).
    const oldGen = speakingGenerationRef.current;
    speakingGenerationRef.current++;
    console.log(`[VOZ] ⏹ stopAudio — generación ${oldGen} → ${speakingGenerationRef.current}`);
    ttsQueueRef.current = []; // Clear queue
    isSpeakingQueueRef.current = false;
    // Cancelar fetch en curso de Azure/Gemini TTS
    if (geminiAbortControllerRef.current) {
      geminiAbortControllerRef.current.abort();
      geminiAbortControllerRef.current = null;
    }
    // Detener audio WAV si está sonando
    if (currentGeminiAudioRef.current) {
      try {
        currentGeminiAudioRef.current.pause();
        currentGeminiAudioRef.current.src = '';
        currentGeminiAudioRef.current.load(); // Forzar liberación del decodificador (crítico en celulares viejos)
      } catch { /* ignorar */ }
      currentGeminiAudioRef.current = null;
    }
    if (!window.speechSynthesis) {
      setIsAudioPlaying(false);
      setIsAudioPaused(false);
      return;
    }
    // FIX Android: pause()+resume()+cancel() corrompe el audio context en Chrome Android
    // causando que audio.play() falle y caiga a voz robótica.
    // En Android usamos solo cancel(). En desktop usamos el truco pause+resume+cancel.
    const isAndroid = /Android/i.test(navigator.userAgent);
    try {
      if (!isAndroid) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      }
      window.speechSynthesis.cancel();
    } catch (e) {
      window.speechSynthesis.cancel();
    }
    setIsAudioPlaying(false);
    setIsAudioPaused(false);
  };

  const togglePauseResumeAudio = () => {
    // ── Si Gemini está sonando: pausar/reanudar el HTMLAudioElement ────────────
    if (currentGeminiAudioRef.current) {
      if (isAudioPaused) {
        currentGeminiAudioRef.current.play().catch(() => {});
        setIsAudioPaused(false);
      } else {
        currentGeminiAudioRef.current.pause();
        setIsAudioPaused(true);
      }
      return;
    }
    // ── Fallback: Web Speech API del navegador ─────────────────────────────────
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
    unlockAudio();
    enterApp();
  };

  const handleRegistration = async (data: any) => {
    setLoading(true);
    try {
      let user = auth.currentUser;
      
      // Si no hay usuario (Google), lo creamos por email
      if (!user) {
        console.log("[Observador] Creando nuevo usuario por email/password...");
        const cleanEmail = data.email.trim();
        const cleanPass = data.password.trim();
        const cred = await createUserWithEmailAndPassword(auth as any, cleanEmail, cleanPass);
        user = cred.user;
        console.log("[Observador] Usuario creado exitosamente en Firebase Auth:", user.uid);
      }
      
      // Iniciamos el overlay de transición inmediatamente después de crear/autenticar al usuario
      // Esto oculta los procesos de guardado y configuración que vienen a continuación
      setIsTransitioning(true);
      
      const hashedPassword = await hashPassword(data.password);
      const localStudent = { 
        ...data, 
        uid: user.uid,
        password: hashedPassword,
        role: 'student',
        currentGrade: 1, 
        currentLesson: 1, 
        intelligenceScore: 30,
        isVerified: true,
        registrationDate: new Date().toISOString(),
        faculties: {
          perceptiveIntelligence: 30,
          memory: 30,
          imagination: 30,
          attention: 30,
          judgment: 30,
          reason: 30,
          will: 30,
        }
      };
      delete localStudent.confirmPassword;
      
      await saveStudentProfile(localStudent);
      setStudentProfile(localStudent);
      setUser(user);
      
      // Pequeño retardo para asegurar que el overlay sea visible antes de cambiar las pantallas principales
      setTimeout(() => {
        setStudentProfile(localStudent);
        setUser(user);
        unlockAudio();
        enterApp(localStudent);
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
              enterApp(profile);
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
    setError('');
    const cleanEmail = email.trim();
    const cleanPass = pass.trim();
    
    console.log("[Observador] Iniciando proceso de login para:", cleanEmail);

    try {
      // Asegurar persistencia antes del login manual - Ahora no bloqueante
      try {
        console.log("[Observador] Configurando persistencia local...");
        await setPersistence(auth as any, browserLocalPersistence);
      } catch (persistErr) {
        console.warn("[Observador] Advertencia: No se pudo establecer persistencia, continuando login...", persistErr);
      }
      
      console.log("[Observador] Llamando a Firebase Auth Portero...");
      const { user } = await signInWithEmailAndPassword(auth as any, cleanEmail, cleanPass);
      console.log("[Observador] Autenticación exitosa. UID:", user.uid);

      console.log("[Observador] Recuperando perfil desde la nube...");
      const profile = await getStudentProfile(user.uid);
      
      if (profile) {
        // Activamos el overlay ANTES de cambiar estados de la UI
        setIsTransitioning(true);

        setStudentProfile(profile);
        setUser(user);
        setCurrentGrade(profile.currentGrade || 1);
        setLessonProgress(profile.currentLesson || 1);
        
        setTimeout(() => {
          unlockAudio();
          enterApp(profile);
          setTimeout(() => {
            setIsTransitioning(false);
          }, 1500);
        }, 2000);
      } else {
        throw new Error("Perfil no encontrado.");
      }
    } catch (error: any) {
      console.error("[Observador] ERROR TÉCNICO DETECTADO:", {
        code: error?.code,
        message: error?.message,
        authDomain: auth.config?.authDomain,
        apiKey: auth.config?.apiKey?.substring(0, 5) + "..."
      });

      let errorMsg = error?.message || String(error);
      
      // Traducción amigable de errores de Firebase para el usuario
      if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        errorMsg = "Correo o contraseña incorrectos. Verifica tus datos e intenta de nuevo. (Nota: Si te registraste con Google, debes usar el botón de Google).";
      } else if (error.code === 'auth/network-request-failed') {
        errorMsg = "Error de red. Verifica tu conexión a internet.";
      } else if (error.code === 'auth/too-many-requests') {
        errorMsg = "Demasiados intentos fallidos. Tu cuenta ha sido bloqueada temporalmente por seguridad. Intenta más tarde.";
      }
      
      setError(errorMsg);
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
    
    try {
      // Forzar persistencia para evitar que el navegador limpie la sesión al redirigir
      await setPersistence(auth as any, browserLocalPersistence);
      
      const isCapacitor = (window as any).Capacitor !== undefined;
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      // FORZAR selección de cuenta para evitar que use cuentas del desarrollador guardadas en el navegador
      googleProvider.setCustomParameters({ prompt: 'select_account' });
      
      if (isCapacitor) {
        await signInWithPopup(auth, googleProvider);
      } else if (isMobile) {
        await signInWithRedirect(auth, googleProvider);
      } else {
        const { user } = await signInWithPopup(auth as any, googleProvider as any);
        await handleAuthUser(user);
      }
    } catch (error: any) {
      console.error("Google sign in error:", error);
      setIsTransitioning(false);
      const errorMsg = error?.message || String(error);
      if (errorMsg.includes("missing-initial-state")) {
        setError("Error de seguridad (Bloqueo de cookies). Si usas Brave, desactiva el 'Escudo' o usa Chrome/Samsung Internet.");
      } else {
        setError("Error al iniciar sesión con Google. Intenta usar otro navegador o regístrate con correo.");
      }
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
    setMaxReachedGrade(profile.maxReachedGrade || profile.currentGrade || 1);
    setMaxReachedLesson(profile.maxReachedLesson || profile.currentLesson || 1);
    
    setTimeout(() => {
      unlockAudio();
      enterApp(profile);
      setTimeout(() => setIsTransitioning(false), 1500);
    }, 2000);
  };

  // ── MOTOR COGNITIVO Y RASTREADOR DE SESIONES ──
  useEffect(() => {
    // Generar contexto cognitivo si hay usuario
    if (user?.uid) {
      leerPerfilCognitivo(user.uid).then(perfil => {
        const tema = studyMode === 'library' ? currentLibraryChapter : undefined;
        const ctx = construirContextoProfesor(
          perfil, 
          studentProfile?.fullName || 'Estudiante', 
          currentGrade, 
          lessonProgress, 
          tema || undefined
        );
        setCognitiveContext(ctx);
      });
    }

    // Manejar el inicio y fin de la sesión de estudio
    if (introStep === 'chat' && user?.uid) {
      const tema = studyMode === 'library' ? currentLibraryChapter : undefined;
      iniciarSesion({
        uid: user.uid,
        nombre: studentProfile?.fullName || 'Estudiante',
        email: user.email || '',
        modo: studyMode,
        grado: currentGrade,
        leccion: lessonProgress,
        libro: currentLibraryBook,
        tema: tema
      });
    } else {
      cerrarSesion();
    }

    // Limpiar al desmontar
    return () => {
      cerrarSesion();
    };
    // currentGrade y lessonProgress incluidos para que el contexto se reconstruya al avanzar de lección
  }, [introStep, user?.uid, studyMode, currentGrade, lessonProgress]);

  // Actualizar la sesión si cambian los parámetros mientras estamos en chat
  useEffect(() => {
    if (introStep === 'chat') {
      const tema = studyMode === 'library' ? currentLibraryChapter : undefined;
      actualizarTemaEnSesion({
        modo: studyMode,
        libro: currentLibraryBook,
        tema: tema,
        grado: currentGrade,
        leccion: lessonProgress
      });
    }
  }, [studyMode, currentLibraryBook, currentLibraryChapter, currentGrade, lessonProgress]);


  const handleSendVerification = async (email: string): Promise<string> => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("DEV TIP: Verification code for", email, "is", code);
    
    // Generate motivational message using Gemini
    let motivationalMessage = "Bienvenido a la Escuela Magnetico-Espiritual de la Comuna Universal. Tu camino de luz comienza hoy.";
    try {
      // Delegar al backend la generación del saludo motivacional
      const baseUrl = ''; // Usar rutas relativas
      const response = await fetch(`${baseUrl}/api/chat-stream`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `Genera un mensaje motivacional corto (máximo 2 párrafos) para un nuevo estudiante de la Escuela Magnetico-Espiritual de la Comuna Universal. El mensaje debe ser inspirador, hablar sobre la evolución del espíritu y la luz del conocimiento racional. El idioma debe ser ${language === 'es' ? 'Español' : language === 'en' ? 'Inglés' : language === 'pt' ? 'Português' : 'Francés'}.`,
          history: [],
          language: language,
          grade: 1,
          lesson: 1,
          isRegistered: false,
          studentName: "Nuevo Hermano"
        })
      });
      
      const reader = response.body?.getReader();
      if (reader) {
        let aiText = "";
        const decoder = new TextDecoder();
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value);
          const lines = chunk.split('\n');
          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const dataStr = line.slice(6).trim();
              if (dataStr === '[DONE]') continue;
              try {
                const data = JSON.parse(dataStr);
                if (data.text) aiText += data.text;
              } catch (e) {}
            }
          }
        }
        if (aiText) motivationalMessage = aiText;
      }
    } catch (error) {
      console.error("Error generating motivational message:", error);
    }

    // Send via our API
    const baseUrl = ''; // Usar rutas relativas
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
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript + ' ';
          }
        }
        if (finalTranscript) {
          setMessage(prev => prev + finalTranscript);
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

  // ============================================================
  // FUNCIÓN: Abrir Libro en Modo Biblioteca
  // ============================================================
  const openLibraryBook = (bookId: string) => {
    const book = LIBRARY_BOOKS.find(b => b.id === bookId);
    if (!book) return;
    // Invalidar cualquier fetchGreeting pendiente de modo grados
    // para que no hable el intro curricular sobre el modo biblioteca.
    fetchGreetingGenRef.current++;
    stopAudio();
    setStudyMode('library');
    setCurrentLibraryBook(bookId);
    setCurrentLibraryChapter(null);
    setLibrarySearch('');
    setShowLibraryMenu(false);
    // Limpiar el chat y mostrar panel de bienvenida a la obra
    const welcomeMsg = language === 'es'
      ? `MODO_BIBLIOTECA|${book.title}|${JSON.stringify(book.index)}`
      : language === 'en'
      ? `LIBRARY_MODE|${book.title}|${JSON.stringify(book.index)}`
      : language === 'pt'
      ? `MODO_BIBLIOTECA|${book.title}|${JSON.stringify(book.index)}`
      : `MODE_BIBLIOTHÈQUE|${book.title}|${JSON.stringify(book.index)}`;
    setChat([{ role: 'professor', text: welcomeMsg }]);
  };

  const sendMessage = async (msg: string) => {
    if (!msg.trim()) return;

    // --- DETECTOR DE TEMAS/ÍNDICE ---
    let effectiveChapter = currentLibraryChapter;
    if (studyMode === 'library' && currentLibraryBook) {
      const book = LIBRARY_BOOKS.find(b => b.id === currentLibraryBook);
      if (book) {
        const lowerMsg = msg.toLowerCase();
        const matchedChapter = book.index.find(ch => lowerMsg.includes(ch.toLowerCase()));
        
        if (matchedChapter) {
          console.log(`[LibraryMode] Capítulo detectado: ${matchedChapter}`);
          if (matchedChapter !== currentLibraryChapter) {
            setCurrentLibraryChapter(matchedChapter);
            effectiveChapter = matchedChapter;
          }
          // Modificamos el mensaje para que sea una petición formal de ese tema
          msg = language === 'es' 
            ? `Maestro, quiero profundizar ahora en el tema "${matchedChapter}".`
            : `Master, I want to delve into the theme "${matchedChapter}" now.`;
        }
      }
    }

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
      
      // Invalidar cualquier fetchGreeting pendiente (evita fantasma de grados en estudio libre)
      fetchGreetingGenRef.current++;
      // Importante: detener cualquier audio anterior y preparar la cola de voz
      stopAudio();
      
      const book = studyMode === 'library' ? LIBRARY_BOOKS.find(b => b.id === currentLibraryBook) : null;

      // Resolución dinámica curricular (misma lógica que fetchGreeting)
      const sendGradeData = CURRICULUM.find(g => g.id === currentGrade);
      const sendThemeName = sendGradeData?.themes ? sendGradeData.themes[lessonProgress - 1] : undefined;
      let resolvedSendBookId = undefined;
      let resolvedSendBookTitle = undefined;
      
      if (studyMode === 'curriculum' && sendGradeData) {
        const infoLibro = obtenerLibroActivoPorLeccion(currentGrade, lessonProgress, sendGradeData.book || "");
        resolvedSendBookId = infoLibro.bookId || undefined;
        resolvedSendBookTitle = infoLibro.bookTitle ? `Grado ${currentGrade}: ${infoLibro.bookTitle}` : `Grado ${currentGrade}: ${sendGradeData.title || 'Obra doctrinal'}`;
      }
      
      const resolvedSendChapter = studyMode === 'curriculum' ? (sendThemeName || undefined) : undefined;
      const themeGuideline = sendThemeName && currentGrade === 1 ? GRADE_1_GUIDELINES[sendThemeName] : undefined;
      console.log(`[Currículo RAG] sendMessage → bookId: ${resolvedSendBookId} | chapter: ${resolvedSendChapter} | guideline: ${themeGuideline ? 'Sí' : 'No'}`);

      const result = await chatWithProfessorStream(
        msg, 
        currentHistory, 
        language, 
        currentGrade, 
        lessonProgress, 
        totalLessons, 
        themeName, 
        !!studentProfile,
        studentProfile?.fullName || 'Alumno',
        (chunk) => {
          accumulated += chunk;
          
          const now = Date.now();
          if (now - lastUpdate > 80) { // Actualizar máximo cada 80ms
            setChat(prev => {
              const updated = [...prev];
              updated[updated.length - 1] = { role: 'professor', text: accumulated };
              return updated;
            });
            lastUpdate = now;
          }
        },
        studyMode,
        studyMode === 'curriculum' ? resolvedSendBookTitle : (book?.title || undefined),
        studyMode === 'curriculum' ? resolvedSendChapter : (effectiveChapter || undefined),
        studyMode === 'curriculum' ? resolvedSendBookId : (currentLibraryBook || undefined),
        user?.uid,
        cognitiveContext,
        themeGuideline,
        modoValidacionIntensiva
      );

      // Final update to ensure everything is shown
      let finalText = result.text;
      let aiDeltas: Record<string, number> | null = null;

      // Interceptación Silenciosa: Extraer COGNITIVE_UPDATE si existe
      const cognitiveMatch = finalText.match(/<!-- COGNITIVE_UPDATE: (\{[\s\S]*?\}) -->/);
      if (cognitiveMatch) {
        try {
          aiDeltas = JSON.parse(cognitiveMatch[1]);
          // Limpiar el texto para que el estudiante no vea el código
          finalText = finalText.replace(/<!-- COGNITIVE_UPDATE: \{[\s\S]*?\} -->/g, "").trim();
        } catch (e) {
          console.warn("[Cognitive] Error parseando evaluación de IA:", e);
        }
      }

      setChat(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: 'professor', text: finalText };
        return updated;
      });
      
      // Lanzar evaluación en segundo plano (IA priorizada) e incorporar la sincronización local inmediata en el callback
      if (user?.uid) {
        evaluarYActualizarPerfil({
          uid: user.uid,
          mensajeEstudiante: msg,
          preguntaProfesor: currentHistory.length > 0 ? currentHistory[currentHistory.length - 1].text : '',
          historialMensajes: currentHistory,
          temaActual: effectiveChapter || themeName,
          gradoActual: currentGrade,
          deltasOverride: aiDeltas || undefined
        }).then(perfilActualizado => {
          if (perfilActualizado) {
            const tema = studyMode === 'library' ? currentLibraryChapter : undefined;
            const updatedCtx = construirContextoProfesor(
              perfilActualizado, 
              studentProfile?.fullName || 'Estudiante', 
              currentGrade, 
              lessonProgress, 
              tema || undefined
            );
            setCognitiveContext(updatedCtx);
            console.log("[Cognitive] Contexto sincronizado en caliente para el siguiente turno:", perfilActualizado.interaccionesTotal);
          }
        });
        registrarInteraccion();

        // Lógica de validación por esencias (solo en modo curriculum)
        if (studyMode === 'curriculum') {
          const debeValidar = debeAplicarValidacion(currentGrade, lessonProgress);
          
          if (debeValidar) {
            // Incrementar contador de interacciones en lección
            await incrementarInteraccionesEnLeccion(user.uid, currentGrade, lessonProgress);
            
            // Obtener contador actualizado
            const interacciones = await contarInteraccionesEnLeccion(user.uid, currentGrade, lessonProgress);
            setInteraccionesEnLeccion(interacciones);

            // Activar modo de validación intensiva a partir de la interacción 15
            if (interacciones >= 15 && !streamedStudentUpdate?.pass_lesson) {
              await activarModoValidacionIntensiva(user.uid, currentGrade, lessonProgress);
              setModoValidacionIntensiva(true);
              console.log('[Validación] Modo intensivo activado para G', currentGrade, 'L', lessonProgress);
            }
          }
        }
      }
      
      // Audio completo — 1 sola llamada Gemini TTS (voz Charon)
      speak(finalText);
      
      streamedStudentUpdate = result.studentUpdate || (aiDeltas && 'pass_lesson' in aiDeltas ? { pass_lesson: aiDeltas.pass_lesson } : null);

      // Tarea 2a: Techo de seguridad — 5 turnos máximos en el diagnóstico inicial.
      // Si el modelo no emitió pass_lesson tras 5 respuestas del estudiante en
      // Grado 1 Lección 1, se fuerza el avance para que el diagnóstico no sea infinito.
      if (currentGrade === 1 && lessonProgress === 1) {
        const userTurnsInDiagnostic = currentHistory.filter(m => m.role === 'user').length + 1;
        if (userTurnsInDiagnostic >= 5 && !streamedStudentUpdate?.pass_lesson) {
          if (!streamedStudentUpdate) streamedStudentUpdate = {};
          streamedStudentUpdate.pass_lesson = true;
          console.log('[Diagnóstico] Techo de 5 turnos alcanzado → pass_lesson forzado por el sistema');
        }
      }

      // Evaluar paso de lección por conciencia
      if (streamedStudentUpdate?.pass_lesson) {
        const gradeData = CURRICULUM.find(g => g.id === currentGrade);
        const totalCount = gradeData?.lessonsCount || 50;
        
        if (lessonProgress < totalCount) {
          // Avanzar a la siguiente lección
          const nextLesson = lessonProgress + 1;
          setLessonProgress(nextLesson);
          if (nextLesson > maxReachedLesson || currentGrade > maxReachedGrade) {
            setMaxReachedLesson(nextLesson);
          }
        } else if (currentGrade < 13) {
          // Fin de grado - Diploma
          setShowDiploma(currentGrade);
          const nextGrade = currentGrade + 1;
          setCurrentGrade(nextGrade);
          setLessonProgress(1);
          setMaxReachedGrade(nextGrade);
          setMaxReachedLesson(1);
          generateCertificate(currentGrade);
        }
      }

      // Guardar progreso
      if (studentProfile) {
        try {
          const updated = { 
            ...studentProfile, 
            currentGrade, 
            currentLesson: lessonProgress,
            maxReachedGrade: Math.max(maxReachedGrade, currentGrade),
            maxReachedLesson: Math.max(maxReachedLesson, lessonProgress)
          };
          const deltasParaAplicar = aiDeltas || (streamedStudentUpdate ? { ...streamedStudentUpdate } : null);
          if (deltasParaAplicar) {
             const newFaculties = studentProfile.faculties 
               ? { ...studentProfile.faculties } 
               : { perceptiveIntelligence: 30, memory: 30, imagination: 30, attention: 30, judgment: 30, reason: 30, will: 30 };
             
             Object.entries(deltasParaAplicar).forEach(([key, val]) => {
               if (typeof val === 'number') {
                 const claveEstandar = TRADUCCION_FACULTADES[key];
                 if (claveEstandar) {
                   const valorActual = typeof newFaculties[claveEstandar] === 'number' ? newFaculties[claveEstandar] : 30;
                   newFaculties[claveEstandar] = Math.max(0, Math.min(100, Math.round(valorActual + val)));
                 }
               }
             });
             
             updated.faculties = newFaculties;
             if (streamedStudentUpdate && typeof streamedStudentUpdate.IntelligenceGrade === 'string') {
               updated.intelligenceGrade = streamedStudentUpdate.IntelligenceGrade;
             }
          }
          localStorage.setItem('emecu_student', JSON.stringify(updated));

          // Tarea 3b: Sincronizar también el mapa emecu_students.
          // getStudentProfile() cae al fallback de este mapa cuando Firebase falla (ECONNRESET).
          // Sin esta sincronización, el fallback devuelve null → grado se resetea a 1.
          try {
            const studentsMap = JSON.parse(localStorage.getItem('emecu_students') || '{}');
            const mapKey = user?.uid || updated.uid || updated.email;
            if (mapKey) studentsMap[mapKey] = updated;
            localStorage.setItem('emecu_students', JSON.stringify(studentsMap));
          } catch(_syncErr) { /* no bloquear el flujo por error de sincronización */ }
          
          // Actualizar en Firestore si está logueado
          if (user) {
            const docRef = doc(db, 'students', user.uid);
            await updateDoc(docRef, {
              currentGrade: updated.currentGrade,
              currentLesson: updated.currentLesson,
              maxReachedGrade: updated.maxReachedGrade,
              maxReachedLesson: updated.maxReachedLesson,
              faculties: updated.faculties || {
                perceptiveIntelligence: 30,
                memory: 30,
                imagination: 30,
                attention: 30,
                judgment: 30,
                reason: 30,
                will: 30,
              }
            });
          }
        } catch(e) { console.error('Error saving progress:', e); }
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
      <AnimatePresence>
        {isPortrait && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-2xl flex flex-col items-center justify-center p-6 text-center select-none"
          >
            <div className="absolute inset-0 flex flex-col opacity-[0.03]">
              <div className="flex-1 bg-red-600"></div>
              <div className="flex-1 bg-orange-500"></div>
              <div className="flex-1 bg-yellow-400"></div>
              <div className="flex-1 bg-green-600"></div>
              <div className="flex-1 bg-blue-500"></div>
              <div className="flex-1 bg-indigo-600"></div>
              <div className="flex-1 bg-violet-600"></div>
            </div>
            
            <div className="relative z-10 flex flex-col items-center gap-6 max-w-md">
              <div className="relative w-32 h-32 mb-2">
                <div className="absolute inset-0 bg-amber-500/20 blur-[30px] rounded-full animate-pulse" />
                <img 
                  src="https://emecu.org.gt/wp-content/uploads/2021/03/Escudo_Emecu-PNG.webp" 
                  alt="EMECU" 
                  className="w-full h-full object-contain relative z-10" 
                  style={{ filter: "invert(85%)" }} 
                />
              </div>

              {/* Teléfono girando animado */}
              <motion.div
                animate={{ rotate: [0, -90, -90, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-20 border-4 border-amber-500/60 rounded-xl relative flex items-center justify-center mb-2"
              >
                <div className="w-1.5 h-1.5 bg-amber-500/60 rounded-full absolute bottom-1.5" />
              </motion.div>

              <h2 className="text-amber-400 font-serif text-2xl tracking-wide uppercase">Orientación Horizontal Requerida</h2>
              
              <p className="text-slate-300 text-sm font-light leading-relaxed px-4">
                Hermano, para una mejor experiencia de estudio doctrinal y una visualización óptima del aula, por favor coloca tu dispositivo en posición horizontal.
              </p>

              <button 
                onClick={handleForceLandscape}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 rounded-xl font-bold hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <RotateCw className="w-4 h-4 animate-spin-slow" />
                Activar y Girar Pantalla
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOnline && (
        <div className="fixed top-0 left-0 right-0 z-[1000] bg-red-600 text-white text-center py-1 text-sm font-bold shadow-md animate-pulse">
          {language === 'es' ? '⚠️ Sin conexión a Internet - El Maestro esperará tu regreso' : '⚠️ No internet connection - The Master will wait for your return'}
        </div>
      )}

      {isAuthLoading && (
        <div className="fixed inset-0 z-[2000] bg-slate-950 flex flex-col items-center justify-center p-8">
           <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center gap-8"
           >
             <div className="relative w-40 h-40">
               <div className="absolute inset-0 bg-amber-500/20 blur-[40px] rounded-full animate-pulse" />
               <img src="https://emecu.org.gt/wp-content/uploads/2021/03/Escudo_Emecu-PNG.webp" alt="EMECU" className="w-full h-full object-contain relative z-10" style={{ filter: "invert(85%)" }} />
             </div>
             <div className="flex flex-col items-center gap-4">
               <h2 className="text-amber-400 font-serif text-xl tracking-widest uppercase">Sincronizando con la Escuela</h2>
               <div className="w-48 h-1 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                 <motion.div 
                   className="h-full bg-amber-500"
                   animate={{ x: [-200, 200] }}
                   transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                 />
               </div>
             </div>
           </motion.div>
        </div>
      )}
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
                          if (studentProfile) {
                            stopAudio(); // Detener saludo del profesor al entrar al aula
                            enterApp(studentProfile);
                          } else {
                            stopAudio(); // Detener WAV antes de cambiar paso — crítico en celulares viejos
                            setIntroStep('registration');
                          }
                        }} className="flex-1 px-5 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 font-bold rounded-2xl shadow-lg hover:shadow-amber-500/30 transition-all text-sm flex items-center justify-center gap-2"><PlayCircle className="w-5 h-5" />{language === 'es' ? 'Entrar al Aula' : language === 'pt' ? 'Entrar na Aula' : 'Enter Classroom'}</button>
                        <button onClick={() => { stopAudio(); setIntroStep('registration'); }} className="flex-1 px-5 py-3 bg-transparent border-2 border-amber-500/40 text-amber-400 font-bold rounded-2xl hover:bg-amber-500/10 transition-all text-sm flex items-center justify-center gap-2"><GraduationCap className="w-5 h-5" />{language === 'es' ? 'Registrarse' : language === 'pt' ? 'Registrar' : 'Register'}</button>
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
                  onSkip={() => { unlockAudio(); setShowIntro(false); setIntroStep('chat'); fetchGreeting(); }}
                  onBack={() => setIntroStep('intro')}
                  externalError={error}
                  setExternalError={setError}
                  onGoogleSignIn={handleGoogleSignIn}
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
            <RegistrationForm t={t} onSubmit={handleRegistration} onLogin={handleLogin} onSkip={handleSkipRegistration} user={user} language={language} externalError={error} setExternalError={setError} onGoogleSignIn={handleGoogleSignIn} />
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

      {/* Diploma overlay */}
      <AnimatePresence>
        {showDiploma && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-2xl p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50, rotateY: 45 }}
              animate={{ scale: 1, y: 0, rotateY: 0 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 15, stiffness: 100 }}
              className="relative max-w-4xl w-full aspect-[1.414/1] bg-slate-950 border-4 border-amber-500/50 rounded-lg shadow-[0_0_100px_rgba(245,158,11,0.4)] overflow-hidden p-8 md:p-16 flex flex-col items-center justify-between text-center"
            >
              {/* Background watermark */}
              <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                <img src="https://emecu.org.gt/wp-content/uploads/2021/03/Escudo_Emecu-PNG.webp" className="w-2/3 object-contain" alt="" />
              </div>

              <div className="relative z-10 w-full flex flex-col items-center">
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-6"
                >
                  <Award className="w-16 h-16 md:w-24 md:h-24 text-amber-500 animate-pulse" />
                </motion.div>

                <h1 className="text-2xl md:text-5xl font-serif text-amber-400 mb-4 tracking-tighter">
                  {t.certificateTitle}
                </h1>
                
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-8" />
                
                <p className="text-slate-400 italic text-lg mb-4">{t.certificateAwarded}</p>
                
                <h2 className="text-3xl md:text-6xl font-serif text-white mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  {studentProfile?.fullName}
                </h2>
                
                <p className="max-w-2xl text-slate-300 text-lg md:text-xl leading-relaxed">
                  {t.certificateBody} <span className="text-amber-400 font-bold">GRADO {showDiploma}</span> de la Escuela Magnetico-Espiritual de la Comuna Universal.
                </p>
              </div>

              <div className="relative z-10 w-full flex flex-col items-center gap-6">
                <div className="flex flex-col items-center">
                   <div className="w-48 h-px bg-slate-700 mb-2" />
                   <p className="text-amber-200/60 font-serif text-sm">Joaquín Trincado Mateo</p>
                   <p className="text-slate-500 text-[10px] uppercase tracking-widest">Director Fundador</p>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => generateCertificate(showDiploma)}
                    className="px-8 py-3 bg-amber-500 text-slate-950 font-bold rounded-xl shadow-lg hover:bg-amber-400 transition-all flex items-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    {t.downloadCertificate}
                  </button>
                  <button 
                    onClick={() => {
                      setShowDiploma(null);
                      setChat([]);
                      fetchGreeting(currentGrade, 1);
                    }}
                    className="px-8 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-all"
                  >
                    {language === 'es' ? 'Continuar al Siguiente Grado' : 
                     language === 'en' ? 'Continue to Next Grade' : 
                     language === 'pt' ? 'Continuar para o Próximo Grau' : 'Continuer au Grade Suivant'}
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Confetti simulation */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="absolute inset-0 pointer-events-none"
            >
               {[...Array(20)].map((_, i) => (
                 <motion.div
                   key={i}
                   initial={{ 
                     top: -10, 
                     left: `${Math.random() * 100}%`,
                     rotate: 0 
                   }}
                   animate={{ 
                     top: '105%',
                     rotate: 360,
                     left: `${Math.random() * 100}%`
                   }}
                   transition={{ 
                     duration: 3 + Math.random() * 2, 
                     repeat: Infinity,
                     delay: Math.random() * 2 
                   }}
                   className="w-2 h-4 bg-amber-500 opacity-60 rounded-sm"
                 />
               ))}
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
                  onClick={async () => {
                    if (pendingGradeChange !== null) {
                      const targetGrade = pendingGradeChange;
                      setShowGradeConfirm(false);
                      setPendingGradeChange(null);
                      
                      setChat([{ role: 'professor', text: language === 'es' ? 'Preparando la nueva cátedra, aguarda un momento...' : 
                                                          language === 'en' ? 'Preparing the new lecture, please wait a moment...' : 
                                                          language === 'pt' ? 'Preparando a nova aula, aguarde um momento...' : 'Préparation de la nouvelle conférence, veuillez patienter...' }]);
                      
                      // PASO 2: Sincronización Total antes del Saludo
                      if (user?.uid) {
                        const perfil = await leerPerfilCognitivo(user.uid);
                        const cleanCtx = construirContextoProfesor(
                          perfil, 
                          studentProfile?.fullName || 'Estudiante', 
                          targetGrade, 
                          1, // Empezamos en lección 1 al cambiar grado
                          undefined
                        );
                        setCognitiveContext(cleanCtx);
                        setCurrentGrade(targetGrade);
                        setLessonProgress(1);
                        
                        // Disparo Atómico
                        fetchGreeting(targetGrade, 1, 'curriculum', cleanCtx);
                      } else {
                        fetchGreeting(targetGrade, 1, 'curriculum');
                      }
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
      <div className="w-full z-[100] text-center py-4 landscape:py-2 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 border-b border-amber-500/50 shadow-[0_4px_20px_rgba(245,158,11,0.15)] relative">
        <p className="text-amber-100 text-xs sm:text-sm md:text-base font-bold tracking-[0.3em] uppercase drop-shadow-md px-2">
          {t.introTitle}
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

      <header className="relative z-[50] flex flex-col landscape:flex-row md:flex-row items-center justify-between pb-4 border-b border-gradient-to-r border-amber-500/20 mb-8 landscape:mb-4 gap-5 landscape:gap-2 pt-2">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-5"
        >
          {/* Professor Portrait */}
          <div 
            className="w-20 h-20 landscape:w-12 landscape:h-12 md:w-28 md:h-28 rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-[0_8px_32px_rgba(245,158,11,0.15)] cursor-pointer hover:shadow-[0_8px_32px_rgba(245,158,11,0.35)] hover:border-amber-500/60 transition-all flex-shrink-0 relative group"
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
                {language === 'es' ? 'Profesor Virtual Doctrinal' : 
                 language === 'en' ? 'Virtual Doctrinal Professor' : 
                 language === 'pt' ? 'Professor Virtual Doutrinário' : 'Professeur Doctrinaire Virtuel'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Language Switcher in Header */}
        <div className="flex items-center gap-3">
          {!isMobile && (<>
          {/* Lessons Dropdown */}
          {studyMode === 'curriculum' && (
            <div className="relative group">
              <button
                onClick={() => { setShowLessonsMenu(!showLessonsMenu); setShowGradesMenu(false); setShowLibraryMenu(false); setShowDownloadsMenu(false); }}
                className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-800/50 rounded-xl text-amber-400 hover:bg-slate-800 hover:border-amber-500/30 transition-all shadow-lg text-xs font-bold"
              >
                <BookOpen className="w-5 h-5" />
                <span className="hidden sm:inline font-bold uppercase tracking-widest text-xs">
                  {language === 'es' ? `Lección ${lessonProgress}` : `Lesson ${lessonProgress}`}
                </span>
                <ChevronRight className={`w-4 h-4 transition-transform ${showLessonsMenu ? 'rotate-90' : ''}`} />
              </button>
              <AnimatePresence>
                {showLessonsMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full right-0 mt-2 w-72 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-[100]"
                  >
                    <div className="p-4 bg-slate-800/50 border-b border-slate-700/50 font-bold text-sm text-amber-400">
                      {language === 'es' ? 'Temas del Grado' : 'Grade Lessons'}
                    </div>
                    <div className="max-h-80 overflow-y-auto p-2 space-y-1">
                      {(CURRICULUM.find(g => g.id === currentGrade)?.themes || []).map((themeName, idx) => {
                        const lessonNum = idx + 1;
                        const isUnlocked = unlockedAllGrades || currentGrade < maxReachedGrade || (currentGrade === maxReachedGrade && lessonNum <= maxReachedLesson);
                        return (
                          <button
                            key={lessonNum}
                            disabled={!isUnlocked}
                            onClick={() => {
                              setLessonProgress(lessonNum);
                              fetchGreeting(currentGrade, lessonNum);
                              setShowLessonsMenu(false);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all ${
                              lessonProgress === lessonNum 
                                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' 
                                : isUnlocked 
                                  ? 'hover:bg-slate-800 text-slate-300' 
                                  : 'text-slate-700 cursor-not-allowed opacity-50'
                            }`}
                          >
                            <span className="truncate max-w-[200px]">
                              {lessonNum}. {themeName}
                            </span>
                            {!isUnlocked && <Lock className="w-3 h-3" />}
                            {isUnlocked && lessonProgress > lessonNum && <CheckCircle2 className="w-3 h-3 text-green-500" />}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Grades Dropdown */}
          <div className="relative group">
            <button
              onClick={() => { setShowGradesMenu(!showGradesMenu); setShowLessonsMenu(false); setShowLibraryMenu(false); setShowDownloadsMenu(false); }}
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
                          if (e.target.value === "TRINCADO_2026_ADMIN") {
                            setUnlockedAllGrades(true);
                            setShowAdminPassInput(false);
                            setAdminPass('');
                          }
                        }}
                      />
                    </div>
                  )}

                  <div className="max-h-80 overflow-y-auto p-2 space-y-1">
                    {CURRICULUM.map((grade) => {
                      const isUnlocked = unlockedAllGrades || grade.id <= maxReachedGrade;
                      return (
                        <button
                          key={grade.id}
                          disabled={!isUnlocked}
                          onClick={() => {
                            if (isUnlocked) {
                              // PASO 1: Cese inmediato de funciones de biblioteca
                              setCurrentLibraryBook(null);
                              setCurrentLibraryChapter(null);
                              setStudyMode('curriculum');
                              
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
                            <span className="truncate max-w-[160px]">
                              {(() => {
                                const title = grade.title;
                                if (language === 'es') return title;
                                
                                // Traducciones dinámicas de los títulos principales
                                const translations: Record<string, Record<string, string>> = {
                                  'en': {
                                    'Grado 1': 'Grade 1', 'Grado 2': 'Grade 2', 'Grado 3': 'Grade 3',
                                    'Grado 4': 'Grade 4', 'Grado 5': 'Grade 5', 'Grado 6': 'Grade 6',
                                    'Grado 7': 'Grade 7', 'Grado 8': 'Grade 8', 'Grado 9': 'Grade 9',
                                    'Grado 10': 'Grade 10', 'Grado 11': 'Grade 11', 'Grado 12': 'Grade 12',
                                    'Grado 13': 'Grade 13',
                                    'El Discurso del Obispo Stromayer': "Bishop Strossmayer's Speech",
                                    'Conócete a ti mismo': 'Know Thyself',
                                    'Profilaxis de la Vida': 'Prophylaxis of Life',
                                    'Buscando a Dios': 'Seeking God',
                                    'Filosofía Austera Racional': 'Austere Rational Philosophy',
                                    'Los Extremos se Tocan': 'Extremes Meet',
                                    'Espiritismo en su Asiento': 'Spiritism in its Seat',
                                    'Los Cinco Amores': 'The Five Loves',
                                    'El Primer Rayo de Luz': 'The First Ray of Light',
                                    'Historia Magnética': 'Magnetic History',
                                    'Alpha y Omega': 'Alpha and Omega',
                                    'Código de Amor': 'Code of Love',
                                    'Profecías': 'Prophecies'
                                  },
                                  'pt': {
                                    'Grado 1': 'Grau 1', 'Grado 2': 'Grau 2', 'Grado 3': 'Grau 3',
                                    'Grado 4': 'Grau 4', 'Grado 5': 'Grau 5', 'Grado 6': 'Grau 6',
                                    'Grado 7': 'Grau 7', 'Grado 8': 'Grau 8', 'Grado 9': 'Grau 9',
                                    'Grado 10': 'Grau 10', 'Grado 11': 'Grau 11', 'Grado 12': 'Grau 12',
                                    'Grado 13': 'Grau 13',
                                    'El Discurso del Obispo Stromayer': 'O Discurso do Bispo Strossmayer',
                                    'Conócete a ti mismo': 'Conhece-te a ti mesmo',
                                    'Profilaxis de la Vida': 'Profilaxia da Vida',
                                    'Buscando a Dios': 'Buscando a Deus',
                                    'Filosofía Austera Racional': 'Filosofia Austera Racional',
                                    'Los Extremos se Tocan': 'Os Extremos se Tocam',
                                    'Espiritismo en su Asiento': 'Espiritismo em seu Assento',
                                    'Los Cinco Amores': 'Os Cinco Amores',
                                    'El Primer Rayo de Luz': 'O Primeiro Raio de Luz',
                                    'Historia Magnética': 'História Magnética',
                                    'Alpha y Omega': 'Alfa e Ômega',
                                    'Código de Amor': 'Código de Amor',
                                    'Profecías': 'Profecias'
                                  },
                                  'fr': {
                                    'Grado 1': 'Grade 1', 'Grado 2': 'Grade 2', 'Grado 3': 'Grade 3',
                                    'Grado 4': 'Grade 4', 'Grado 5': 'Grade 5', 'Grado 6': 'Grade 6',
                                    'Grado 7': 'Grade 7', 'Grado 8': 'Grade 8', 'Grado 9': 'Grade 9',
                                    'Grado 10': 'Grade 10', 'Grado 11': 'Grade 11', 'Grado 12': 'Grade 12',
                                    'Grado 13': 'Grade 13',
                                    'El Discurso del Obispo Stromayer': "Le Discours de l'Évêque Strossmayer",
                                    'Conócete a ti mismo': 'Connais-toi toi-même',
                                    'Profilaxis de la Vida': 'Prophylaxie de la Vie',
                                    'Buscando a Dios': 'À la recherche de Dieu',
                                    'Filosofía Austera Racional': 'Philosophie Austère Rationnelle',
                                    'Los Extremos se Tocan': 'Les Extrêmes se Touchent',
                                    'Espiritismo en su Asiento': 'Le Spiritisme dans son Siège',
                                    'Los Cinco Amores': 'Les Cinq Amours',
                                    'El Primer Rayo de Luz': 'Le Premier Rayon de Lumière',
                                    'Historia Magnética': 'Histoire Magnétique',
                                    'Alpha y Omega': 'Alpha et Oméga',
                                    'Código de Amor': "Code d'Amour",
                                    'Profecías': 'Prophéties'
                                  }
                                };

                                let translatedTitle = title;
                                const langDict = translations[language];
                                if (langDict) {
                                  Object.keys(langDict).forEach(key => {
                                    translatedTitle = translatedTitle.replace(key, langDict[key]);
                                  });
                                }
                                return translatedTitle;
                              })()}
                            </span>
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

          {/* Botón silencio de sesión — persiste toda la clase */}
          <button
            onClick={() => { if (sessionAudioEnabled) stopAudio(); setSessionAudioEnabled(prev => !prev); }}
            title={sessionAudioEnabled ? 'Silenciar audio (toda la sesión)' : 'Activar audio de la sesión'}
            className={`p-2 rounded-xl border transition-all ${
              sessionAudioEnabled
                ? 'border-amber-500/30 text-amber-400 hover:bg-amber-500/10'
                : 'border-red-500/30 text-red-400 bg-red-500/10 hover:bg-red-500/20'
            }`}
          >
            {sessionAudioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

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
                onChange={(e) => {
                  const v = parseFloat(e.target.value);
                  setAudioSpeed(v);
                  localStorage.setItem('tts_speed', v.toString()); // Guardar por dispositivo
                }}
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
                .filter(v => v.lang.startsWith(language) && 
                  (v.name.toLowerCase().includes('male') || 
                   v.name.toLowerCase().includes('hombre') || 
                   v.name.toLowerCase().includes('federico') ||
                   v.name.toLowerCase().includes('natural') ||
                   v.name.toLowerCase().includes('google')))
                .sort((a, b) => {
                  // Priorizar Federico y Natural
                  const aScore = (a.name.includes('Federico') || a.name.includes('Natural')) ? 0 : 1;
                  const bScore = (b.name.includes('Federico') || b.name.includes('Natural')) ? 0 : 1;
                  return aScore - bScore || a.name.localeCompare(b.name);
                })
                .slice(0, 5) // Máximo 5 opciones
                .map(voice => (
                  <option key={voice.voiceURI} value={voice.voiceURI}>
                    {voice.name.replace('Microsoft ', '').replace('Online (Natural)', '✨').replace('Google ', '🌐 ')}
                  </option>
                ))}
            </select>
          </div>
          </>)}

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
      </header>

      {/* Floating Library Controls (Below Header) */}
      {!isMobile && (
      <div className="fixed top-20 md:top-24 right-4 md:right-8 z-40 flex flex-col items-end gap-2">
        {/* 2. Free Study Dropdown */}
        <div className="relative group w-full sm:w-auto">
          <button
            onClick={() => { setShowLibraryMenu(!showLibraryMenu); setShowGradesMenu(false); setShowDownloadsMenu(false); }}
            className={`flex items-center gap-2 px-4 py-2 border rounded-xl transition-all shadow-lg ${showLibraryMenu || studyMode === 'library' ? 'bg-blue-600/20 text-blue-300 border-blue-500/50' : 'bg-slate-900/50 text-slate-300 border-slate-800/50 hover:bg-slate-800 hover:border-blue-500/30'}`}
          >
            <BookOpen className="w-4 h-4" />
            <span className="font-bold uppercase tracking-widest text-[10px] md:text-xs">
              {language === 'es' ? 'Estudio Libre' : language === 'en' ? 'Free Study' : language === 'pt' ? 'Estudo Livre' : 'Étude Libre'}
            </span>
            <ChevronRight className={`w-3 h-3 transition-transform ${showLibraryMenu ? 'rotate-90' : ''}`} />
          </button>
          <AnimatePresence>
            {showLibraryMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="absolute top-full right-0 mt-2 w-72 md:w-80 bg-slate-900 border border-blue-900/50 rounded-2xl shadow-2xl overflow-hidden z-[100]"
              >
                <div className="p-3 md:p-4 bg-slate-800/50 border-b border-slate-700/50">
                  <span className="text-blue-400 font-bold text-xs md:text-sm">
                    {language === 'es' ? 'Obras de Estudio Libre' : language === 'en' ? 'Free Study Works' : language === 'pt' ? 'Obras de Estudo Livre' : 'Œuvres d\'Étude Libre'}
                  </span>
                </div>
                <div className="max-h-64 md:max-h-80 overflow-y-auto p-2 space-y-1">
                  {LIBRARY_BOOKS.map((book) => (
                    <button
                      key={book.id}
                      onClick={() => openLibraryBook(book.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs flex items-center justify-between transition-all ${
                        currentLibraryBook === book.id && studyMode === 'library'
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                          : 'hover:bg-slate-800 text-slate-300'
                      }`}
                    >
                      <span className="font-semibold line-clamp-1">{book.title}</span>
                      <PlayCircle className="w-4 h-4 text-blue-400 opacity-70" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 3. Downloads Library */}
        <div className="relative group w-full sm:w-auto">
          <button
            onClick={() => { setShowDownloadsMenu(!showDownloadsMenu); setShowGradesMenu(false); setShowLibraryMenu(false); }}
            className={`flex items-center gap-2 px-4 py-2 border rounded-xl transition-all shadow-lg ${showDownloadsMenu ? 'bg-emerald-600/20 text-emerald-300 border-emerald-500/50' : 'bg-slate-900/50 text-slate-300 border-slate-800/50 hover:bg-slate-800 hover:border-emerald-500/30'}`}
          >
            <Download className="w-4 h-4" />
            <span className="font-bold uppercase tracking-widest text-[10px] md:text-xs">
              {language === 'es' ? 'Biblioteca' : language === 'en' ? 'Library' : language === 'pt' ? 'Biblioteca' : 'Bibliothèque'}
            </span>
            <ChevronRight className={`w-3 h-3 transition-transform ${showDownloadsMenu ? 'rotate-90' : ''}`} />
          </button>
          <AnimatePresence>
            {showDownloadsMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="absolute top-full right-0 mt-2 w-72 md:w-80 bg-slate-900 border border-emerald-900/50 rounded-2xl shadow-2xl overflow-hidden z-[100]"
              >
                <div className="p-3 md:p-4 bg-slate-800/50 border-b border-slate-700/50">
                  <span className="text-emerald-400 font-bold text-xs md:text-sm">
                    {language === 'es' ? 'Descargar Obras Originales' : language === 'en' ? 'Download Original Works' : language === 'pt' ? 'Baixar Obras Originais' : 'Télécharger Œuvres Originales'}
                  </span>
                </div>
                <div className="max-h-64 md:max-h-80 overflow-y-auto p-2 space-y-1">
                  {LIBRARY_BOOKS.filter(b => b.pdfUrl).map((book) => (
                    <a
                      key={`dl-${book.id}`}
                      href={book.pdfUrl}
                      download
                      className="w-full text-left px-3 py-2.5 rounded-xl text-xs flex items-center justify-between transition-all hover:bg-emerald-900/30 text-slate-300 border border-transparent hover:border-emerald-500/30 group"
                    >
                      <span className="font-semibold line-clamp-1">{book.title}</span>
                      <Download className="w-4 h-4 text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      )}

      <main className={isMobile ? "relative z-10 flex flex-col w-full px-2 pb-24 mt-2" : "relative z-10 grid grid-cols-1 landscape:grid-cols-3 lg:grid-cols-4 gap-4 landscape:gap-6 lg:gap-10 mt-4 px-2 sm:px-4 overflow-y-visible lg:overflow-visible"}>
        {isMobile ? (
          <div className="flex-grow flex flex-col w-full space-y-4">
            {/* Contenido según la pestaña activa en celular */}
            {activeMobileTab === 'chat' && (
              <div className="flex flex-col flex-1 w-full space-y-4 min-h-[75vh]">
                {/* Cabecera del chat para celular (Control de Lecciones) */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800/50 shadow-xl">
                  <div className="flex items-center gap-2">
                    <button 
                      disabled={lessonProgress <= 1}
                      onClick={async () => {
                        if (lessonProgress > 1) {
                          const nuevaLeccion = lessonProgress - 1;
                          setLessonProgress(nuevaLeccion);
                          fetchGreeting(currentGrade, nuevaLeccion);
                          if (user?.uid && studyMode === 'curriculum') {
                            await reiniciarContadorLeccion(user.uid, currentGrade, nuevaLeccion);
                            setInteraccionesEnLeccion(0);
                            setModoValidacionIntensiva(false);
                          }
                        }
                      }}
                      className={`p-2 rounded-xl border transition-all ${lessonProgress <= 1 ? 'border-slate-800 text-slate-700 opacity-30 cursor-not-allowed' : 'border-amber-500/30 text-amber-400 hover:bg-amber-500/10'}`}
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    
                    <div className="flex flex-col items-center min-w-[70px]">
                      <span className="text-[8px] text-slate-500 uppercase font-bold tracking-[0.2em] mb-0.5">Lección</span>
                      <span className="text-amber-100 text-xs font-mono font-bold">{lessonProgress} / {CURRICULUM.find(g => g.id === currentGrade)?.lessonsCount || 1}</span>
                    </div>

                    <button 
                      disabled={!unlockedAllGrades && (lessonProgress >= maxReachedLesson && currentGrade >= maxReachedGrade)}
                      onClick={async () => {
                        const gradeData = CURRICULUM.find(g => g.id === currentGrade);
                        if (lessonProgress < (gradeData?.lessonsCount || 0)) {
                          const nuevaLeccion = lessonProgress + 1;
                          setLessonProgress(nuevaLeccion);
                          fetchGreeting(currentGrade, nuevaLeccion);
                          if (user?.uid && studyMode === 'curriculum') {
                            await reiniciarContadorLeccion(user.uid, currentGrade, nuevaLeccion);
                            setInteraccionesEnLeccion(0);
                            setModoValidacionIntensiva(false);
                          }
                        }
                      }}
                      className={`p-2 rounded-xl border transition-all ${(!unlockedAllGrades && (lessonProgress >= maxReachedLesson && currentGrade >= maxReachedGrade)) ? 'border-slate-800 text-slate-700 opacity-30 cursor-not-allowed' : 'border-amber-500/30 text-amber-400 hover:bg-amber-500/10'}`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {(isAudioPlaying || isAudioPaused) && (
                      <div className="flex gap-1 bg-slate-950/60 p-0.5 rounded-lg border border-slate-800/50 mr-1">
                        <button
                          onClick={togglePauseResumeAudio}
                          className="p-1.5 rounded-md text-amber-400 hover:bg-slate-800 transition-all"
                          title={isAudioPaused ? t.resume : t.pause}
                        >
                          {isAudioPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                        </button>
                        <button
                          onClick={stopAudio}
                          className="p-1.5 rounded-md text-red-400 hover:bg-slate-800 transition-all"
                          title={t.stop}
                        >
                          <Square className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                    {/* Botón silencio de sesión — celular */}
                    <button
                      onClick={() => { if (sessionAudioEnabled) stopAudio(); setSessionAudioEnabled(prev => !prev); }}
                      title={sessionAudioEnabled ? 'Silenciar' : 'Activar audio'}
                      className={`p-1.5 rounded-xl border transition-all ${
                        sessionAudioEnabled
                          ? 'border-amber-500/30 text-amber-400'
                          : 'border-red-500/30 text-red-400 bg-red-500/10'
                      }`}
                    >
                      {sessionAudioEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                    </button>
                    {isSynced ? (
                      <span className="flex items-center gap-1 px-2.5 py-1 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-[10px] font-bold">
                        <Globe className="w-3.5 h-3.5 animate-pulse" />
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 px-2.5 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-yellow-400 text-[10px] font-bold">
                        <ShieldAlert className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                </div>

                {/* Historial de Chat Celular */}
                <div className="flex-grow overflow-y-auto space-y-4 p-4 bg-slate-900/40 backdrop-blur-md rounded-3xl border border-slate-800/50 shadow-2xl relative scrollbar-thin max-h-[50vh] min-h-[300px]">
                  <AnimatePresence initial={false}>
                    {chat.map((msg, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className={`flex items-end gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                      >
                        {msg.role === 'professor' && (
                          <div className="flex-shrink-0 mb-0.5">
                            <div className="w-8 h-8 rounded-full overflow-hidden border border-amber-500/30 bg-slate-800">
                              <img src={TRINCADO_IMG} alt="Joaquín Trincado" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                          </div>
                        )}
                        {msg.role === 'professor' && (msg.text.startsWith('MODO_BIBLIOTECA|') || msg.text.startsWith('LIBRARY_MODE|') || msg.text.startsWith('MODE_BIBLIOTH')) ? (() => {
                          const parts = msg.text.split('|');
                          const bookTitle = parts[1] || '';
                          let chapters: string[] = [];
                          try { chapters = JSON.parse(parts[2] || '[]'); } catch {}
                          return (
                            <div className="w-full max-w-lg">
                              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                                className="p-4 bg-gradient-to-br from-blue-950/80 to-slate-900/90 backdrop-blur-xl rounded-2xl border border-blue-500/30 shadow-xl">
                                <div className="flex items-center gap-2 mb-3">
                                  <BookOpen className="w-4 h-4 text-blue-400" />
                                  <h3 className="text-amber-200 font-serif text-sm font-bold leading-tight">{bookTitle}</h3>
                                </div>
                                <div className="relative mb-3">
                                  <input 
                                    type="text"
                                    placeholder={language === 'es' ? 'Buscar tema...' : 'Search theme...'}
                                    value={librarySearch}
                                    onChange={(e) => setLibrarySearch(e.target.value)}
                                    className="w-full bg-slate-950/50 border border-blue-500/20 rounded-xl px-8 py-2 text-[11px] text-blue-200 outline-none"
                                  />
                                  <Search className="w-3.5 h-3.5 text-blue-500/50 absolute left-2.5 top-1/2 -translate-y-1/2" />
                                </div>
                                <div className="grid grid-cols-1 gap-1.5 max-h-48 overflow-y-auto pr-1 scrollbar-thin">
                                  {chapters
                                    .filter(ch => ch.toLowerCase().includes(librarySearch.toLowerCase()))
                                    .map((chapter, ci) => {
                                      const isBlocked = currentLibraryBook && BLOCKED_NODES[currentLibraryBook]?.includes(chapter);
                                      return (
                                        <button 
                                          key={ci} 
                                          disabled={isBlocked}
                                          onClick={() => {
                                            sendMessage(chapter);
                                          }}
                                          className={`w-full text-left px-3 py-2 rounded-lg text-[11px] transition-all ${
                                            currentLibraryChapter === chapter
                                              ? 'bg-blue-500 text-slate-950 font-bold'
                                              : 'bg-slate-900/50 text-slate-300 hover:bg-slate-800'
                                          }`}
                                        >
                                          {chapter}
                                        </button>
                                      );
                                    })}
                                </div>
                              </motion.div>
                            </div>
                          );
                        })() : (
                          <div className={`p-3 rounded-2xl text-[13px] max-w-[85%] shadow-md ${
                            msg.role === 'user' 
                              ? 'bg-amber-500 text-slate-950 rounded-br-sm' 
                              : 'bg-slate-800/90 text-slate-100 border border-slate-700/30 rounded-bl-sm'
                          }`}>
                            {studyMode === 'library' && msg.role === 'professor' && currentLibraryChapter && (
                              <div className="flex items-center gap-1.5 mb-1.5 pb-1.5 border-b border-blue-500/20 text-blue-400 font-bold uppercase tracking-wider text-[9px]">
                                <BookOpen className="w-3 h-3 flex-shrink-0" />
                                <span>{currentLibraryChapter}</span>
                              </div>
                            )}
                            <p className="leading-relaxed whitespace-pre-wrap font-sans">{msg.text}</p>
                            {msg.role === 'professor' && (
                              <div className="mt-2 pt-1.5 border-t border-slate-700/50 flex justify-end">
                                <button onClick={() => speak(msg.text)}
                                  className="flex items-center gap-1 px-2 py-1 bg-slate-900/50 hover:bg-amber-500/20 text-amber-400/70 hover:text-amber-400 rounded-lg text-[10px] font-medium transition-colors border border-slate-700/50">
                                  <Volume2 className="w-3.5 h-3.5" />
                                  {language === 'es' ? 'Repetir audio' : 'Repetir'}
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  {loading && (
                    <div className="flex justify-start">
                      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl rounded-tl-sm p-4 flex gap-1.5 items-center">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>

                {/* Input Flotante Celular */}
                <div className="flex gap-2 items-center bg-slate-900/80 backdrop-blur-xl p-2 rounded-2xl border border-amber-500/20 shadow-2xl relative z-40">
                  <button 
                    onClick={toggleMicrophone} 
                    className={`p-3 rounded-xl transition-all relative ${
                      continuousListen || isListening 
                        ? 'bg-red-500/20 text-red-400 animate-pulse' 
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {isListening ? <Activity className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                  </button>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage(message)}
                    className="flex-1 p-2.5 bg-transparent border-none focus:outline-none text-slate-200 text-xs"
                    placeholder={isListening ? t.listening : t.placeholder}
                  />
                  <button 
                    onClick={() => sendMessage(message)} 
                    disabled={!message.trim() || loading}
                    className="p-3 bg-gradient-to-r from-amber-600 to-amber-500 rounded-xl text-slate-950 disabled:opacity-40"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {activeMobileTab === 'grades' && (
              <div className="flex flex-col flex-1 p-4 space-y-4 text-left overflow-y-auto max-h-[75vh] pb-10">
                <h2 className="text-lg font-bold text-amber-400 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" /> {language === 'es' ? 'Grados de Estudio' : 'Grades'}
                </h2>
                <div className="space-y-4">
                  {CURRICULUM.map((grade) => {
                    const isUnlocked = unlockedAllGrades || grade.id <= maxReachedGrade;
                    return (
                      <div key={grade.id} className={`p-4 rounded-2xl border ${
                        grade.id === currentGrade 
                          ? 'bg-amber-500/10 border-amber-500/50' 
                          : 'bg-slate-900/50 border-slate-800'
                      }`}>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-xs font-bold text-amber-100">{grade.title}</h3>
                          {!isUnlocked && <Lock className="w-3.5 h-3.5 text-slate-600" />}
                        </div>
                        <p className="text-[10px] text-slate-400 mb-3 leading-relaxed">Temas: {grade.themes.length}</p>
                        
                        <div className="grid grid-cols-1 gap-2">
                          {grade.themes.map((theme, ti) => {
                            const lessonNum = ti + 1;
                            const isLessonUnlocked = isUnlocked && (grade.id < maxReachedGrade || lessonNum <= maxReachedLesson);
                            return (
                              <button
                                key={ti}
                                disabled={!isLessonUnlocked}
                                onClick={async () => {
                                  setCurrentGrade(grade.id);
                                  setLessonProgress(lessonNum);
                                  setStudyMode('curriculum');
                                  setActiveMobileTab('chat');
                                  setChat([]);
                                  fetchGreeting(grade.id, lessonNum);
                                  if (user?.uid) {
                                    await reiniciarContadorLeccion(user.uid, grade.id, lessonNum);
                                    setInteraccionesEnLeccion(0);
                                    setModoValidacionIntensiva(false);
                                  }
                                }}
                                className={`w-full text-left p-2.5 rounded-xl border text-[11px] flex items-center justify-between transition-all ${
                                  currentGrade === grade.id && lessonProgress === lessonNum && studyMode === 'curriculum'
                                    ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold' 
                                    : isLessonUnlocked 
                                      ? 'bg-slate-800/40 text-slate-200 border-slate-700 hover:bg-slate-800' 
                                      : 'bg-slate-950/20 text-slate-600 border-slate-900 opacity-40 cursor-not-allowed'
                                }`}
                              >
                                <span className="line-clamp-1">Tópico {lessonNum}: {theme}</span>
                                {isLessonUnlocked ? <PlayCircle className="w-4 h-4 flex-shrink-0" /> : <Lock className="w-3.5 h-3.5 flex-shrink-0" />}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeMobileTab === 'libros' && (
              <div className="flex flex-col flex-1 p-4 space-y-4 text-left overflow-y-auto max-h-[75vh] pb-10">
                <h2 className="text-lg font-bold text-amber-400 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> {language === 'es' ? 'Estudio Libre y Descargas' : 'Free Study'}
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {LIBRARY_BOOKS.map((book) => (
                    <div key={book.id} className="p-4 bg-slate-900/50 border border-slate-800 rounded-2xl flex flex-col gap-2">
                      <div>
                        <h3 className="text-xs font-bold text-slate-200 leading-tight">{book.title}</h3>
                      </div>
                      
                      <div className="flex gap-2 mt-2">
                        <button 
                          onClick={() => {
                            setActiveMobileTab('chat');
                            openLibraryBook(book.id);
                          }}
                          className="flex-grow py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-xl border border-blue-500/20 text-[11px] font-bold transition-all text-center"
                        >
                          Estudiar Obra
                        </button>
                        {book.pdfUrl && (
                          <a 
                            href={book.pdfUrl}
                            download
                            className="px-3 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/20 text-[11px] font-bold transition-all flex items-center justify-center gap-1"
                          >
                            <Download className="w-3.5 h-3.5" /> PDF
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeMobileTab === 'perfil' && (
              <div className="flex flex-col flex-1 p-4 space-y-6 text-left items-center overflow-y-auto max-h-[75vh] pb-10">
                <h2 className="text-lg font-bold text-amber-400 self-start flex items-center gap-2">
                  <User className="w-5 h-5" /> {language === 'es' ? 'Mi Progreso' : 'Profile'}
                </h2>
                
                <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500 flex items-center justify-center text-amber-400 shadow-xl mt-4">
                  <User className="w-8 h-8" />
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-bold text-amber-100">{studentProfile?.fullName || 'Invitado'}</h3>
                  <p className="text-[10px] text-slate-500 mt-0.5">{user?.email || 'Modo Local'}</p>
                </div>

                <div className="w-full grid grid-cols-2 gap-3 mt-4">
                  <div className="p-3 bg-slate-950/40 border border-slate-800 rounded-xl text-center">
                    <span className="text-[8px] text-slate-500 uppercase font-bold tracking-widest block mb-0.5">Grado Actual</span>
                    <span className="text-sm font-mono font-bold text-amber-400">{currentGrade}° Grado</span>
                  </div>
                  <div className="p-3 bg-slate-950/40 border border-slate-800 rounded-xl text-center">
                    <span className="text-[8px] text-slate-500 uppercase font-bold tracking-widest block mb-0.5">Lección Activa</span>
                    <span className="text-sm font-mono font-bold text-amber-400">Lección {lessonProgress}</span>
                  </div>
                </div>

                <button 
                  onClick={handleLogout}
                  className="w-full mt-6 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl border border-red-500/20 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  <LogOut className="w-4 h-4" /> {language === 'es' ? 'Cerrar Sesión' : 'Sign Out'}
                </button>
              </div>
            )}

            {/* Navegación Flotante Celular */}
            <div className="fixed bottom-0 left-0 right-0 h-16 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800/80 flex items-center justify-around px-4 z-50 shadow-[0_-5px_20px_rgba(0,0,0,0.6)]">
              <button 
                onClick={() => setActiveMobileTab('chat')}
                className={`flex flex-col items-center gap-1 transition-colors ${activeMobileTab === 'chat' ? 'text-amber-400' : 'text-slate-500'}`}
              >
                <MessageSquare className="w-5 h-5" />
                <span className="text-[9px] font-bold">Chat</span>
              </button>
              <button 
                onClick={() => setActiveMobileTab('grades')}
                className={`flex flex-col items-center gap-1 transition-colors ${activeMobileTab === 'grades' ? 'text-amber-400' : 'text-slate-500'}`}
              >
                <GraduationCap className="w-5 h-5" />
                <span className="text-[9px] font-bold">Grados</span>
              </button>
              <button 
                onClick={() => setActiveMobileTab('libros')}
                className={`flex flex-col items-center gap-1 transition-colors ${activeMobileTab === 'libros' ? 'text-amber-400' : 'text-slate-500'}`}
              >
                <BookOpen className="w-5 h-5" />
                <span className="text-[9px] font-bold">Libros</span>
              </button>
              <button 
                onClick={() => setActiveMobileTab('perfil')}
                className={`flex flex-col items-center gap-1 transition-colors ${activeMobileTab === 'perfil' ? 'text-amber-400' : 'text-slate-500'}`}
              >
                <User className="w-5 h-5" />
                <span className="text-[9px] font-bold">Perfil</span>
              </button>
            </div>
          </div>
        ) : (
          <>
            <motion.aside 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="landscape:col-span-1 lg:col-span-1 space-y-4 landscape:space-y-2 lg:space-y-8 pt-2 landscape:max-h-[calc(100vh-120px)] landscape:overflow-y-auto landscape:pr-2 scrollbar-thin"
        >
          <div className="p-6 bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-800/50 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-3 text-amber-400">
              <div className="p-2 bg-amber-500/10 rounded-lg">
                <BookOpen className="w-5 h-5" />
              </div>
              {language === 'es' ? 'Currículo Actual' : 
               language === 'en' ? 'Current Curriculum' : 
               language === 'pt' ? 'Currículo Atual' : 'Programme Actuel'}
            </h2>
            <div className="space-y-6 text-left">
              {/* Lesson Progress */}
              <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50">
                <p className="text-amber-200/80 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                  {language === 'es' ? 'Estudio Actual' : 
                   language === 'en' ? 'Current Study' : 
                   language === 'pt' ? 'Estudo Atual' : 'Étude Actuelle'}
                </p>
                <div className="flex flex-col gap-1 mb-4">
                  <span className="text-slate-400 text-xs font-medium">
                    {language === 'es' ? 'Libro:' : language === 'en' ? 'Book:' : language === 'pt' ? 'Livro:' : 'Livre:'}
                  </span>
                  <p className="text-amber-100/90 text-sm font-bold leading-tight">
                    {(() => {
                      const gradeData = CURRICULUM.find(g => g.id === currentGrade);
                      const activeBookInfo = gradeData 
                        ? obtenerLibroActivoPorLeccion(currentGrade, lessonProgress, gradeData.book || "")
                        : { bookId: "", bookTitle: "" };
                      const bookTitle = activeBookInfo.bookTitle || activeBookInfo.bookId;
                      if (language === 'es') return bookTitle;
                      const dict: Record<string, Record<string, string>> = {
                        'en': { 'El Discurso del Obispo Stromayer': "Bishop Strossmayer's Speech", 'Conócete a ti mismo': 'Know Thyself', 'Profilaxis de la Vida': 'Prophylaxis of Life', 'Buscando a Dios': 'Seeking God', 'Filosofía Austera Racional': 'Austere Rational Philosophy', 'Los Extremos se Tocan': 'Extremes Meet', 'Espiritismo en su Asiento': 'Spiritism in its Seat', 'Los Cinco Amores': 'The Five Loves', 'El Primer Rayo de Luz': 'The First Ray of Light', 'Historia Magnética': 'Magnetic History', 'Alpha y Omega': 'Alpha and Omega', 'Código de Amor': 'Code of Love', 'Profecías': 'Prophecies' },
                        'pt': { 'El Discurso del Obispo Stromayer': 'O Discurso do Bispo Strossmayer', 'Conócete a ti mismo': 'Conhece-te a ti mesmo', 'Profilaxis de la Vida': 'Profilaxia da Vida', 'Buscando a Dios': 'Buscando a Deus', 'Filosofía Austera Racional': 'Filosofia Austera Racional', 'Los Extremos se Tocan': 'Os Extremos se Tocam', 'Espiritismo en su Asiento': 'Espiritismo em seu Assento', 'Los Cinco Amores': 'Os Cinco Amores', 'El Primer Rayo de Luz': 'O Primeiro Raio de Luz', 'Historia Magnética': 'História Magnética', 'Alpha y Omega': 'Alfa e Ômega', 'Código de Amor': 'Código de Amor', 'Profecías': 'Profecias' },
                        'fr': { 'El Discurso del Obispo Stromayer': "Le Discours de l'Évêque Strossmayer", 'Conócete a ti mismo': 'Connais-toi toi-même', 'Profilaxis de la Vida': 'Prophylaxie de la Vie', 'Buscando a Dios': 'À la recherche de Dieu', 'Filosofía Austera Racional': 'Philosophie Austère Rationnelle', 'Los Extremos se Tocan': 'Les Extrêmes se Touchent', 'Espiritismo en su Asiento': 'Le Spiritisme dans son Siège', 'Los Cinco Amores': 'Les Cinq Amours', 'El Primer Rayo de Luz': 'Le Premier Rayon de Lumière', 'Historia Magnética': 'Histoire Magnétique', 'Alpha y Omega': 'Alpha et Oméga', 'Código de Amor': "Code d'Amour", 'Profecías': 'Prophéties' }
                      };
                      return dict[language]?.[bookTitle] || bookTitle;
                    })()}
                  </p>
                </div>
                <div className="flex flex-col gap-1 mb-4">
                  <span className="text-slate-400 text-xs font-medium">
                    {language === 'es' ? 'Capítulo:' : language === 'en' ? 'Chapter:' : language === 'pt' ? 'Capítulo:' : 'Chapitre:'}
                  </span>
                  <p className="text-slate-200 text-xs italic">
                    {language === 'es' ? 'Tema' : language === 'en' ? 'Theme' : language === 'pt' ? 'Tema' : 'Thème'} {lessonProgress}
                  </p>
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
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                    {language === 'es' ? 'Avance del Curso' : language === 'en' ? 'Course Progress' : language === 'pt' ? 'Avanço do Curso' : 'Progression du Cours'}
                  </span>
                  <span className="text-[10px] text-amber-500 font-bold">
                    {lessonProgress} / {CURRICULUM.find(g => g.id === currentGrade)?.lessonsCount || 1}
                  </span>
                </div>
              </div>

              {/* Total Progress */}
              <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50">
                <p className="text-amber-200/80 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                  {language === 'es' ? 'Carrera Académica (13 Grados)' : 
                   language === 'en' ? 'Academic Career (13 Grades)' : 
                   language === 'pt' ? 'Carreira Acadêmica (13 Graus)' : 'Carrière Académique (13 Grades)'}
                </p>
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
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                    {language === 'es' ? 'Grado en curso' : language === 'en' ? 'Current Grade' : language === 'pt' ? 'Grau em curso' : 'Grade en cours'}
                  </span>
                  <span className="text-[10px] text-blue-400 font-bold">
                    {currentGrade} {language === 'es' ? 'de' : language === 'en' ? 'of' : language === 'pt' ? 'de' : 'sur'} 13
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.aside>

        <section className="landscape:col-span-2 lg:col-span-3 flex flex-col flex-1 min-h-[400px] landscape:min-h-0 landscape:h-[calc(100vh-120px)] lg:h-[75vh]">
          {/* Student Header Bar - Harmonized above chat */}
          <div className="flex items-center justify-between px-6 py-3 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800/50 mb-4 shadow-xl">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <button 
                  disabled={lessonProgress <= 1}
                  onClick={async () => {
                    if (lessonProgress > 1) {
                      const nuevaLeccion = lessonProgress - 1;
                      setLessonProgress(nuevaLeccion);
                      fetchGreeting(currentGrade, nuevaLeccion);
                      // Reiniciar contador de validación al cambiar de lección
                      if (user?.uid && studyMode === 'curriculum') {
                        await reiniciarContadorLeccion(user.uid, currentGrade, nuevaLeccion);
                        setInteraccionesEnLeccion(0);
                        setModoValidacionIntensiva(false);
                      }
                    }
                  }}
                  className={`p-2 rounded-xl border transition-all ${lessonProgress <= 1 ? 'border-slate-800 text-slate-700 opacity-30 cursor-not-allowed' : 'border-amber-500/30 text-amber-400 hover:bg-amber-500/10'}`}
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>

                <div className="flex flex-col items-center min-w-[80px]">
                  <span className="text-[8px] text-slate-500 uppercase font-bold tracking-[0.2em] mb-1">
                    {language === 'es' ? 'Lección' : language === 'en' ? 'Lesson' : language === 'pt' ? 'Lição' : 'Leçon'}
                  </span>
                  <span className="text-amber-100 text-sm font-mono font-bold">{lessonProgress} / {CURRICULUM.find(g => g.id === currentGrade)?.lessonsCount || 1}</span>
                  {/* Indicador de progreso hacia validación */}
                  {debeAplicarValidacion(currentGrade, lessonProgress) && interaccionesEnLeccion > 5 && (
                    <div className="mt-1">
                      {modoValidacionIntensiva ? (
                        <span className="text-[8px] text-amber-400 font-bold">
                          {language === 'es' ? 'Validando...' : language === 'en' ? 'Validating...' : language === 'pt' ? 'Validando...' : 'Validation...'}
                        </span>
                      ) : (
                        <span className="text-[8px] text-slate-500">
                          {language === 'es' ? `Validación en ${15 - interaccionesEnLeccion}` : language === 'en' ? `Validation in ${15 - interaccionesEnLeccion}` : language === 'pt' ? `Validação em ${15 - interaccionesEnLeccion}` : `Validation en ${15 - interaccionesEnLeccion}`}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <button 
                  disabled={!unlockedAllGrades && (lessonProgress >= maxReachedLesson && currentGrade >= maxReachedGrade)}
                  onClick={async () => {
                    const gradeData = CURRICULUM.find(g => g.id === currentGrade);
                    if (lessonProgress < (gradeData?.lessonsCount || 0)) {
                      const nuevaLeccion = lessonProgress + 1;
                      setLessonProgress(nuevaLeccion);
                      fetchGreeting(currentGrade, nuevaLeccion);
                      // Reiniciar contador de validación al cambiar de lección
                      if (user?.uid && studyMode === 'curriculum') {
                        await reiniciarContadorLeccion(user.uid, currentGrade, nuevaLeccion);
                        setInteraccionesEnLeccion(0);
                        setModoValidacionIntensiva(false);
                      }
                    }
                  }}
                  className={`p-2 rounded-xl border transition-all ${(!unlockedAllGrades && (lessonProgress >= maxReachedLesson && currentGrade >= maxReachedGrade)) ? 'border-slate-800 text-slate-700 opacity-30 cursor-not-allowed' : 'border-amber-500/30 text-amber-400 hover:bg-amber-500/10'}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                  <User className="w-4 h-4 text-amber-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-slate-500 uppercase font-bold tracking-widest leading-none mb-0.5">Estudiante</span>
                  <span className="text-amber-100 text-xs font-serif truncate max-w-[100px]">{studentProfile?.fullName || 'Invitado'}</span>
                </div>
              </div>

              {/* Cloud Sync Indicator */}
              <div className="flex items-center gap-2">
                {isSynced ? (
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex items-center gap-1.5 px-2.5 py-1 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-[10px] font-bold shadow-[0_0_10px_rgba(34,197,94,0.1)] cursor-help group relative"
                    title="Progreso sincronizado en la nube de Firebase"
                  >
                    <Globe className="w-3.5 h-3.5 animate-pulse" />
                    <span className="hidden md:inline">Sincronizado</span>
                    
                    {/* Tooltip */}
                    <div className="absolute top-8 right-0 w-48 p-2 bg-slate-950 border border-green-500/30 text-slate-300 rounded-lg text-[9px] leading-relaxed shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 font-normal">
                      Tu progreso y calificaciones están guardados y sincronizados de forma segura en Firebase.
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex items-center gap-1.5 px-2.5 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-yellow-400 text-[10px] font-bold shadow-[0_0_10px_rgba(234,179,8,0.1)] cursor-help group relative"
                    title="Operando en modo local (sin guardar en la nube)"
                  >
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span className="hidden md:inline">Modo Local</span>

                    {/* Tooltip */}
                    <div className="absolute top-8 right-0 w-48 p-2 bg-slate-950 border border-yellow-500/30 text-slate-300 rounded-lg text-[9px] leading-relaxed shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 font-normal">
                      Estás estudiando en modo local. Inicia sesión para sincronizar tus avances y notas con tu celular.
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-1.5 bg-slate-950/50 hover:bg-red-500/10 border border-slate-800 hover:border-red-500/40 rounded-xl text-slate-400 hover:text-red-400 transition-all text-xs font-medium group"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
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
                  {msg.role === 'professor' && (msg.text.startsWith('MODO_BIBLIOTECA|') || msg.text.startsWith('LIBRARY_MODE|') || msg.text.startsWith('MODE_BIBLIOTH')) ? (() => {
                    const parts = msg.text.split('|');
                    const bookTitle = parts[1] || '';
                    let chapters: string[] = [];
                    try { chapters = JSON.parse(parts[2] || '[]'); } catch {}
                    return (
                      <div className="w-full max-w-lg">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                          className="p-6 bg-gradient-to-br from-blue-950/80 to-slate-900/90 backdrop-blur-xl rounded-3xl border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.15)]">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2.5 bg-blue-500/20 rounded-xl border border-blue-500/30">
                              <BookOpen className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                              <p className="text-[10px] text-blue-400/70 uppercase tracking-widest font-bold">
                                {language === 'es' ? 'Modo Biblioteca — Estudio Libre' : language === 'en' ? 'Library Mode — Free Study' : language === 'pt' ? 'Modo Biblioteca — Estudo Livre' : 'Mode Bibliothèque — Étude Libre'}
                              </p>
                              <h3 className="text-amber-200 font-serif text-base font-bold leading-tight mt-0.5">{bookTitle}</h3>
                            </div>
                          </div>
                          <p className="text-slate-400 text-xs leading-relaxed mb-5">
                            {language === 'es' ? 'Elige el capítulo que deseas estudiar. El Maestro se concentrará exclusivamente en ese texto.' : language === 'en' ? 'Choose the chapter you wish to study. The Master will focus exclusively on that text.' : language === 'pt' ? 'Escolha o capítulo que deseja estudar. O Mestre se concentrará exclusivamente nesse texto.' : 'Choisissez le chapitre que vous souhaitez étudier. Le Maître se concentrera exclusivement sur ce texte.'}
                          </p>
                          <div className="relative mb-4">
                            <input 
                              type="text"
                              placeholder={language === 'es' ? 'Buscar tema...' : 'Search theme...'}
                              value={librarySearch}
                              onChange={(e) => setLibrarySearch(e.target.value)}
                              className="w-full bg-slate-950/50 border border-blue-500/20 rounded-xl px-10 py-2.5 text-xs text-blue-200 focus:ring-1 focus:ring-blue-500 outline-none"
                            />
                            <Search className="w-4 h-4 text-blue-500/50 absolute left-3 top-1/2 -translate-y-1/2" />
                            {librarySearch && (
                              <button onClick={() => setLibrarySearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500/50 hover:text-blue-400">
                                <X className="w-4 h-4" />
                              </button>
                            )}
                          </div>

                          <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-blue-900/50">
                            {chapters
                              .filter(ch => ch.toLowerCase().includes(librarySearch.toLowerCase()))
                              .map((chapter, ci) => {
                                const isBlocked = currentLibraryBook && BLOCKED_NODES[currentLibraryBook]?.includes(chapter);
                                return (
                                  <motion.button 
                                    key={ci} 
                                    initial={{ opacity: 0, x: -10 }} 
                                    animate={{ opacity: 1, x: 0 }} 
                                    transition={{ delay: ci * 0.03 }}
                                    disabled={isBlocked}
                                    onClick={() => {
                                      setCurrentLibraryChapter(chapter);
                                      sendMessage(`Quiero estudiar el tema: "${chapter}" del libro "${bookTitle}". Por favor, preséntame este tema con profundidad.`);
                                    }}
                                    className={`flex items-center justify-between w-full px-4 py-3 border rounded-xl text-left transition-all group ${
                                      isBlocked 
                                        ? 'opacity-40 bg-slate-900/50 border-slate-800 cursor-not-allowed grayscale' 
                                        : 'bg-slate-800/60 hover:bg-blue-600/20 border-slate-700/50 hover:border-blue-500/50'
                                    }`}
                                  >
                                    <div className="flex items-center gap-3">
                                      <span className={`w-6 h-6 flex items-center justify-center rounded-lg text-[10px] font-bold font-mono flex-shrink-0 ${
                                        isBlocked ? 'bg-slate-800 text-slate-600' : 'bg-blue-500/10 text-blue-400'
                                      }`}>
                                        {ci + 1}
                                      </span>
                                      <span className={`text-sm font-medium transition-colors ${
                                        isBlocked ? 'text-slate-600 italic' : 'text-slate-200 group-hover:text-blue-200'
                                      }`}>
                                        {chapter} {isBlocked && (language === 'es' ? '(Título)' : '(Title)')}
                                      </span>
                                    </div>
                                    {!isBlocked ? (
                                      <PlayCircle className="w-4 h-4 text-blue-500 opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                                    ) : (
                                      <Lock className="w-3.5 h-3.5 text-slate-700 opacity-50 flex-shrink-0" />
                                    )}
                                  </motion.button>
                                );
                              })}
                          </div>
                          <button onClick={async () => { 
                            // 1. Limpieza de hilos
                            setCurrentLibraryBook(null); 
                            setCurrentLibraryChapter(null); 
                            setChat([]); 
                            setStudyMode('curriculum'); 
                            
                            // 2. Sincronización Forzada del Motor Cognitivo
                            if (user?.uid) {
                              const perfil = await leerPerfilCognitivo(user.uid);
                              const cleanCtx = construirContextoProfesor(
                                perfil, 
                                studentProfile?.fullName || 'Estudiante', 
                                currentGrade, 
                                lessonProgress, 
                                undefined // Forzamos limpieza de tema
                              );
                              setCognitiveContext(cleanCtx);
                              
                              // 3. Disparo con Contexto Directo (Sin esperas)
                              // Tarea 3c: Verificar grado real desde localStorage como fuente de
                              // verdad antes de fetchGreeting. Si Firebase falló durante la carga
                              // de sesión, currentGrade puede estar en 1 aunque el alumno tenga
                              // progreso avanzado. emecu_student es el registro más reciente.
                              let realGradeReturn = currentGrade;
                              let realLessonReturn = lessonProgress;
                              try {
                                const savedRaw = localStorage.getItem('emecu_student');
                                if (savedRaw) {
                                  const savedLocal = JSON.parse(savedRaw);
                                  const localGrade = savedLocal?.currentGrade;
                                  const localLesson = savedLocal?.currentLesson;
                                  if (localGrade && localGrade > realGradeReturn) {
                                    realGradeReturn = localGrade;
                                    realLessonReturn = localLesson || 1;
                                    setCurrentGrade(realGradeReturn);
                                    setLessonProgress(realLessonReturn);
                                    console.log(`[Retorno biblioteca] Grado corregido desde localStorage: G${realGradeReturn} L${realLessonReturn}`);
                                  }
                                }
                              } catch(_localErr) { /* mantener valores del estado React */ }
                              fetchGreeting(realGradeReturn, realLessonReturn, 'curriculum', cleanCtx);
                            } else {
                              // Sin usuario autenticado: también verificar localStorage
                              let realGradeLocal = currentGrade;
                              let realLessonLocal = lessonProgress;
                              try {
                                const savedRaw = localStorage.getItem('emecu_student');
                                if (savedRaw) {
                                  const savedLocal = JSON.parse(savedRaw);
                                  if (savedLocal?.currentGrade && savedLocal.currentGrade > realGradeLocal) {
                                    realGradeLocal = savedLocal.currentGrade;
                                    realLessonLocal = savedLocal.currentLesson || 1;
                                    setCurrentGrade(realGradeLocal);
                                    setLessonProgress(realLessonLocal);
                                  }
                                }
                              } catch(_e) { /* mantener valores del estado React */ }
                              fetchGreeting(realGradeLocal, realLessonLocal, 'curriculum');
                            }
                          }}
                            className="mt-4 w-full py-2.5 text-xs text-slate-500 hover:text-amber-400 border border-slate-700/30 hover:border-amber-500/30 rounded-xl transition-all">
                            ← {language === 'es' ? 'Volver a los Grados Académicos' : language === 'en' ? 'Back to Academic Grades' : language === 'pt' ? 'Voltar aos Graus Acadêmicos' : 'Retour aux Grades Académiques'}
                          </button>
                        </motion.div>
                      </div>
                    );
                  })() : (
                  <div className={`group relative max-w-[80%] p-5 rounded-3xl shadow-lg ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-br from-amber-600 to-amber-700 text-white rounded-br-sm'
                      : `bg-gradient-to-br ${studyMode === 'library' ? 'from-blue-950/80 to-slate-900 border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)]' : 'from-slate-900 to-slate-800 border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.1)]'} backdrop-blur-md text-amber-50 border rounded-bl-sm`
                  }`}>
                    {studyMode === 'library' && msg.role === 'professor' && currentLibraryChapter && (
                      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-blue-500/20">
                        <BookOpen className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                        <span className="text-[10px] text-blue-400/80 font-bold uppercase tracking-widest truncate">{currentLibraryChapter}</span>
                      </div>
                    )}
                    <p className={`leading-relaxed whitespace-pre-wrap ${msg.role === 'professor' ? 'font-serif text-[16px] md:text-[17px]' : 'font-sans text-[15px]'}`}>{msg.text}</p>
                    {msg.role === 'professor' && (
                      <div className="mt-4 pt-3 border-t border-slate-700/50 flex justify-end">
                        <button onClick={() => speak(msg.text)}
                          className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/50 hover:bg-amber-500/20 text-amber-400/70 hover:text-amber-400 rounded-lg text-xs font-medium transition-colors border border-slate-700/50">
                          <Volume2 className="w-4 h-4" />
                          {language === 'es' ? 'Repetir audio' : language === 'en' ? 'Repeat audio' : language === 'pt' ? 'Repetir áudio' : 'Répéter l\'audio'}
                        </button>
                      </div>
                    )}
                  </div>
                  )}
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
            className={`mt-4 flex gap-3 items-center bg-slate-900/80 backdrop-blur-xl p-2 rounded-3xl border border-amber-500/20 focus-within:border-amber-500/60 focus-within:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all shadow-2xl ${isMobile ? 'mb-20' : ''}`}
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
          </>
        )}
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

