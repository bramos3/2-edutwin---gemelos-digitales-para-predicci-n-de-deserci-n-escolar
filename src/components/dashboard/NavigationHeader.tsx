import React from 'react';
import { UserRole, Language, ThemeMode, TwinLevel, SimulationParameters } from '../../types';
import { translations } from '../../i18n/translations';
import {
  BrainCircuit,
  Sliders,
  FileText,
  ShieldCheck,
  Code2,
  Globe,
  Sun,
  Moon,
  UserCheck,
  Bell,
  Sparkles,
  Layers,
  Building2,
  User
} from 'lucide-react';

interface NavigationHeaderProps {
  currentTab: 'twin3d' | 'analytics' | 'reports' | 'ethics' | 'techDocs';
  setCurrentTab: (tab: 'twin3d' | 'analytics' | 'reports' | 'ethics' | 'techDocs') => void;
  level: TwinLevel;
  setLevel: (level: TwinLevel) => void;
  role: UserRole;
  setRole: (role: UserRole) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: ThemeMode;
  toggleTheme: () => void;
  isSimulating: boolean;
  setIsSimulating: (val: boolean) => void;
  activeAlertsCount: number;
  openChatbot: () => void;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  currentTab,
  setCurrentTab,
  level,
  setLevel,
  role,
  setRole,
  language,
  setLanguage,
  theme,
  toggleTheme,
  isSimulating,
  setIsSimulating,
  activeAlertsCount,
  openChatbot
}) => {
  const t = translations[language];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 via-indigo-600 to-amber-500 flex items-center justify-center shadow-md shadow-sky-500/20 text-white font-bold">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white">
                  EduTwin<span className="text-sky-500 font-extrabold">.AI</span>
                </span>
                <span className="hidden md:inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                  Digital Twin 3D v2.4
                </span>
              </div>
              <p className="hidden sm:block text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-xs">
                {t.tagline}
              </p>
            </div>
          </div>

          {/* Center Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100 dark:bg-slate-800/70 p-1 rounded-xl border border-slate-200 dark:border-slate-700/60">
            <button
              id="tab-btn-twin3d"
              onClick={() => setCurrentTab('twin3d')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                currentTab === 'twin3d'
                  ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{t.nav.twin3d}</span>
            </button>

            <button
              id="tab-btn-reports"
              onClick={() => setCurrentTab('reports')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                currentTab === 'reports'
                  ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>{t.nav.reports}</span>
            </button>

            <button
              id="tab-btn-ethics"
              onClick={() => setCurrentTab('ethics')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                currentTab === 'ethics'
                  ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{t.nav.ethics}</span>
            </button>

            <button
              id="tab-btn-techdocs"
              onClick={() => setCurrentTab('techDocs')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                currentTab === 'techDocs'
                  ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>{t.nav.architecture}</span>
            </button>
          </nav>

          {/* Right Action Controls: Role, Language, Theme, Simulator, AI Agent */}
          <div className="flex items-center gap-2">
            {/* Quick Simulator Toggle */}
            <button
              id="btn-toggle-simulator-drawer"
              onClick={() => setIsSimulating(!isSimulating)}
              className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition border ${
                isSimulating
                  ? 'bg-amber-500 text-white border-amber-600 shadow-md shadow-amber-500/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.simulator.title.split(' ')[0]}</span>
              <span className="sm:hidden">Sim</span>
              {isSimulating && <span className="w-2 h-2 rounded-full bg-white animate-ping" />}
            </button>

            {/* AI Assistant Floating Button */}
            <button
              id="btn-open-ai-chat"
              onClick={openChatbot}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-sky-600 to-indigo-600 text-white hover:from-sky-500 hover:to-indigo-500 shadow-sm transition flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Chatbot</span>
            </button>

            {/* Role Selector */}
            <div className="relative hidden xl:flex items-center">
              <select
                id="select-user-role"
                value={role}
                onChange={(e) => setRole(e.target.value as UserRole)}
                className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-xl px-2.5 py-1.5 font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="admin">{t.roles.admin}</option>
                <option value="director">{t.roles.director}</option>
                <option value="counselor">{t.roles.counselor}</option>
                <option value="researcher">{t.roles.researcher}</option>
              </select>
            </div>

            {/* Language Toggle (ES ↔ EN) */}
            <button
              id="btn-toggle-language"
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              className="px-2.5 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition flex items-center gap-1"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language.toUpperCase()}</span>
            </button>

            {/* Theme Toggle (Dark / Light) */}
            <button
              id="btn-toggle-theme"
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Cambiar a Modo Oscuro'}
              className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="flex lg:hidden items-center justify-around py-2 border-t border-slate-200 dark:border-slate-800 text-xs">
          <button
            onClick={() => setCurrentTab('twin3d')}
            className={`flex items-center gap-1 py-1 px-2 rounded-md ${
              currentTab === 'twin3d' ? 'text-sky-600 dark:text-sky-400 font-bold' : 'text-slate-500'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>3D Twin</span>
          </button>
          <button
            onClick={() => setCurrentTab('reports')}
            className={`flex items-center gap-1 py-1 px-2 rounded-md ${
              currentTab === 'reports' ? 'text-sky-600 dark:text-sky-400 font-bold' : 'text-slate-500'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{t.nav.reports.split(' ')[0]}</span>
          </button>
          <button
            onClick={() => setCurrentTab('ethics')}
            className={`flex items-center gap-1 py-1 px-2 rounded-md ${
              currentTab === 'ethics' ? 'text-sky-600 dark:text-sky-400 font-bold' : 'text-slate-500'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.nav.ethics.split(' ')[0]}</span>
          </button>
          <button
            onClick={() => setCurrentTab('techDocs')}
            className={`flex items-center gap-1 py-1 px-2 rounded-md ${
              currentTab === 'techDocs' ? 'text-sky-600 dark:text-sky-400 font-bold' : 'text-slate-500'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Docs</span>
          </button>
        </div>
      </div>
    </header>
  );
};
