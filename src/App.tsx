import React, { useState, useEffect } from 'react';
import {
  TwinLevel,
  UserRole,
  Language,
  ThemeMode,
  SimulationParameters,
  School,
  Classroom,
  Student
} from './types';
import { INITIAL_SCHOOLS, INITIAL_STUDENTS } from './mockData';
import { translations } from './i18n/translations';
import { ExecutiveMetrics } from './components/dashboard/ExecutiveMetrics';
import { DigitalTwinCanvas } from './components/3d/DigitalTwinCanvas';
import { SchoolClassroomPanel } from './components/dashboard/SchoolClassroomPanel';
import { SimulationDrawer } from './components/dashboard/SimulationDrawer';
import { StudentDetailModal } from './components/dashboard/StudentDetailModal';
import { ReportsCenter } from './components/reports/ReportsCenter';
import { EthicsAndFairnessDashboard } from './components/ethics/EthicsAndFairnessDashboard';
import { TechnicalArchitectureView } from './components/techDocs/TechnicalArchitectureView';
import { AiChatbotModal } from './components/chat/AiChatbotModal';
import {
  Layers,
  Sparkles,
  Sliders,
  Maximize2,
  Minimize2,
  Eye,
  Info,
  ShieldCheck,
  Building2,
  FileText,
  Code2,
  Activity,
  Search,
  Globe,
  Sun,
  Moon,
  Database,
  Menu,
  X,
  Compass,
  Cpu,
  MessageCircle
} from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'twin3d' | 'analytics' | 'reports' | 'ethics' | 'techDocs'>('twin3d');
  const [level, setLevel] = useState<TwinLevel>('macro');
  const [role, setRole] = useState<UserRole>('director');
  const [language, setLanguage] = useState<Language>('es');
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // Core Data State
  const [schools, setSchools] = useState<School[]>(INITIAL_SCHOOLS);
  const [students, setStudents] = useState<Student[]>(INITIAL_STUDENTS);

  // Selected Entities
  const [selectedSchool, setSelectedSchool] = useState<School | null>(INITIAL_SCHOOLS[0]);
  const [selectedClassroom, setSelectedClassroom] = useState<Classroom | null>(INITIAL_SCHOOLS[0].classrooms[0]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(INITIAL_STUDENTS[0]);

  // Simulation Parameters
  const [simulationParams, setSimulationParams] = useState<SimulationParameters>({
    mealProgramBoost: 0,
    transportSubsidy: 0,
    psychosocialMentoring: 0,
    remedialClasses: 0,
    familyCashTransfer: 0,
    connectivityAid: 0
  });

  // Modal / Drawer visibility
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [studentModal, setStudentModal] = useState<Student | null>(null);
  const [isFullscreen3D, setIsFullscreen3D] = useState<boolean>(false);

  // Sync theme to HTML root element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenAiForStudent = (student: Student) => {
    setStudentModal(null);
    setSelectedStudent(student);
    setIsChatOpen(true);
  };

  const handleToggleIntervention = (studentId: string, interventionName: string) => {
    setStudents((prev) =>
      prev.map((s) => {
        if (s.id !== studentId) return s;
        const exists = s.interventions.some((i) => i.name === interventionName);
        return {
          ...s,
          interventions: exists
            ? s.interventions.filter((i) => i.name !== interventionName)
            : [
                ...s.interventions,
                {
                  id: Date.now().toString(),
                  name: interventionName,
                  type: 'academic',
                  startDate: new Date().toISOString().slice(0, 10),
                  status: 'active',
                  assignedBy: 'Sistema EduTwin AI'
                }
              ]
        };
      })
    );
  };

  const t = translations[language];

  // Live aggregated counts
  const totalSchools = schools.length;
  const highRiskCount = students.filter((s) => s.riskTier === 'high').length;
  const avgDropoutRate = (
    (students.filter((s) => s.riskTier === 'high').length / Math.max(1, students.length)) *
    100
  ).toFixed(1);

  return (
    <div className="flex h-screen w-full bg-[#0A0B0E] text-slate-300 font-sans overflow-hidden select-none">
      {/* 1. High Density Command Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 border-r border-slate-800 bg-[#0F1115] flex flex-col transition-transform duration-300 lg:static lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center shadow-[0_0_12px_rgba(99,102,241,0.35)]">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <span className="font-bold text-slate-100 tracking-tight leading-tight block text-sm">
                DIGITAL TWIN
              </span>
              <span className="text-[10px] text-indigo-400 font-mono tracking-wider">
                PRED_SCHOOL_V2
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden text-slate-400 hover:text-white p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation items */}
        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {/* Section: Core Navigation */}
          <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold px-2 pb-2">
            {language === 'es' ? 'Niveles Digital Twin' : 'Digital Twin Levels'}
          </div>

          <button
            onClick={() => {
              setCurrentTab('twin3d');
              setLevel('macro');
              setIsSidebarOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-3 py-2 text-xs rounded transition-colors text-left ${
              currentTab === 'twin3d' && level === 'macro'
                ? 'bg-indigo-600/15 text-indigo-400 border-l-2 border-indigo-600 font-medium'
                : 'hover:bg-slate-800/60 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div
              className={`w-2.5 h-2.5 rounded-full ${
                currentTab === 'twin3d' && level === 'macro' ? 'bg-indigo-400 shadow-[0_0_6px_rgba(99,102,241,0.8)]' : 'border border-slate-600'
              }`}
            />
            <span className="truncate">{language === 'es' ? 'Región: Macro-Nivel' : 'Region: Macro-Level'}</span>
          </button>

          <button
            onClick={() => {
              setCurrentTab('twin3d');
              setLevel('meso');
              setIsSidebarOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-3 py-2 text-xs rounded transition-colors text-left ${
              currentTab === 'twin3d' && level === 'meso'
                ? 'bg-indigo-600/15 text-indigo-400 border-l-2 border-indigo-600 font-medium'
                : 'hover:bg-slate-800/60 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div
              className={`w-2.5 h-2.5 rounded-full ${
                currentTab === 'twin3d' && level === 'meso' ? 'bg-indigo-400 shadow-[0_0_6px_rgba(99,102,241,0.8)]' : 'border border-slate-600'
              }`}
            />
            <span className="truncate">{language === 'es' ? 'Unidad Escolar (Meso)' : 'School Unit (Meso)'}</span>
          </button>

          <button
            onClick={() => {
              setCurrentTab('twin3d');
              setLevel('micro');
              setIsSidebarOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-3 py-2 text-xs rounded transition-colors text-left ${
              currentTab === 'twin3d' && level === 'micro'
                ? 'bg-indigo-600/15 text-indigo-400 border-l-2 border-indigo-600 font-medium'
                : 'hover:bg-slate-800/60 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div
              className={`w-2.5 h-2.5 rounded-full ${
                currentTab === 'twin3d' && level === 'micro' ? 'bg-indigo-400 shadow-[0_0_6px_rgba(99,102,241,0.8)]' : 'border border-slate-600'
              }`}
            />
            <span className="truncate">{language === 'es' ? 'Aulas y Nodos (Micro)' : 'Desks & Nodes (Micro)'}</span>
          </button>

          <button
            onClick={() => setIsSimulating(true)}
            className="w-full flex items-center justify-between px-3 py-2 text-xs rounded hover:bg-slate-800/60 text-amber-400/90 hover:text-amber-300 transition-colors text-left group"
          >
            <div className="flex items-center gap-3">
              <Sliders className="w-3.5 h-3.5 text-amber-500" />
              <span>{language === 'es' ? 'Simulador de Impacto' : 'Impact Simulator'}</span>
            </div>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400">
              {Object.values(simulationParams).some((v) => Number(v) > 0) ? 'ACTIVE' : 'READY'}
            </span>
          </button>

          {/* Section: Administration & Audit */}
          <div className="pt-5 text-[10px] uppercase tracking-widest text-slate-500 font-bold px-2 pb-2">
            {language === 'es' ? 'Administración y Auditoría' : 'Governance & Audit'}
          </div>

          <button
            onClick={() => {
              setCurrentTab('reports');
              setIsSidebarOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-3 py-2 text-xs rounded transition-colors text-left ${
              currentTab === 'reports'
                ? 'bg-indigo-600/15 text-indigo-400 border-l-2 border-indigo-600 font-medium'
                : 'hover:bg-slate-800/60 text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            <span className="truncate">{language === 'es' ? 'Reportes Legales (PDF/XLSX)' : 'Legal Reports (PDF/XLSX)'}</span>
          </button>

          <button
            onClick={() => {
              setCurrentTab('ethics');
              setIsSidebarOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-3 py-2 text-xs rounded transition-colors text-left ${
              currentTab === 'ethics'
                ? 'bg-indigo-600/15 text-indigo-400 border-l-2 border-indigo-600 font-medium'
                : 'hover:bg-slate-800/60 text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
            <span className="truncate">{language === 'es' ? 'Auditoría de Sesgo & Ética' : 'Bias Audit & Ethics'}</span>
          </button>

        </nav>

        {/* Sidebar Telemetry & Quick Settings */}
        <div className="p-3.5 border-t border-slate-800 bg-[#0A0B0E]/80 space-y-2.5">
          {/* Version and Language */}
          <div className="flex justify-between items-center">
            <span className="text-[11px] font-mono text-slate-500">v1.14.2-stable</span>
            <div className="flex gap-1 bg-slate-900 border border-slate-800 rounded p-0.5">
              <button
                onClick={() => setLanguage('es')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  language === 'es' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  language === 'en' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Role selector */}
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-slate-500">{t.roles.roleLabel}:</span>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as UserRole)}
              className="bg-slate-900 text-slate-300 text-[10px] font-mono border border-slate-800 rounded px-1.5 py-0.5 focus:outline-none focus:border-indigo-500"
            >
              <option value="director">{t.roles.director}</option>
              <option value="admin">{t.roles.admin}</option>
              <option value="counselor">{t.roles.counselor}</option>
              <option value="researcher">{t.roles.researcher}</option>
            </select>
          </div>

          {/* PostgreSQL + PostGIS Live Indicator */}
          <div className="flex items-center justify-between pt-1 border-t border-slate-800/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.7)] animate-pulse" />
              <span className="text-[10px] font-mono text-slate-400">PostgreSQL + PostGIS</span>
            </div>
            <button
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
              className="text-slate-400 hover:text-amber-400 p-1 transition"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-300" />}
            </button>
          </div>
        </div>
      </aside>

      {/* 2. Main High-Density Workspace Container */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#0A0B0E]">
        {/* Top Operational Command Header */}
        <header className="h-14 border-b border-slate-800 flex items-center justify-between px-4 sm:px-6 bg-[#0F1115] shrink-0 z-10">
          <div className="flex items-center gap-3 sm:gap-6">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-1 text-slate-400 hover:text-white"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              <h2 className="text-slate-100 font-semibold text-xs sm:text-sm tracking-tight flex items-center gap-1.5 truncate">
                <span className="text-indigo-400 font-mono uppercase text-[11px] px-1.5 py-0.5 bg-indigo-950/60 border border-indigo-800/60 rounded">
                  {level.toUpperCase()}
                </span>
                <span className="truncate">
                  {selectedSchool?.name || 'Sector Periurbano Sur-Este'}
                </span>
                <span className="text-slate-500 font-normal hidden sm:inline text-xs">/ Distrito 402</span>
              </h2>
            </div>

            <div className="h-4 w-[1px] bg-slate-800 hidden md:block" />

            {/* Header Telemetry Stat Counters */}
            <div className="hidden md:flex items-center gap-4">
              <div className="text-xs flex items-center gap-1.5">
                <span className="text-slate-500">{language === 'es' ? 'Escuelas:' : 'Schools:'}</span>
                <span className="text-indigo-400 font-mono font-bold">{totalSchools}</span>
              </div>
              <div className="text-xs flex items-center gap-1.5">
                <span className="text-slate-500">{language === 'es' ? 'Riesgo Crítico:' : 'Critical Risk:'}</span>
                <span className="text-rose-500 font-mono font-bold">{highRiskCount}</span>
              </div>
              <div className="text-xs flex items-center gap-1.5">
                <span className="text-slate-500">{language === 'es' ? 'Deserción Est.:' : 'Est. Dropout:'}</span>
                <span className="text-amber-400 font-mono font-bold">{avgDropoutRate}%</span>
              </div>
            </div>
          </div>

          {/* Header Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick chatbot trigger */}
            <button
              onClick={() => setIsChatOpen(true)}
              className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 px-2.5 py-1.5 rounded text-xs font-mono border border-slate-700 flex items-center gap-1.5 transition shadow-sm"
              title="Abrir Asistente IA"
            >
              <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
              <span className="hidden sm:inline">Chatbot</span>
            </button>

            {/* Simular Intervencion CTA */}
            <button
              onClick={() => setIsSimulating(true)}
              className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-sm text-xs font-bold transition shadow-[0_0_12px_rgba(99,102,241,0.3)]"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span className="uppercase tracking-wider text-[11px]">
                {language === 'es' ? 'Simular Intervención' : 'Simulate Policy'}
              </span>
            </button>
          </div>
        </header>

        {/* Dynamic Main Viewport (Scrollable container) */}
        <main className="flex-1 overflow-y-auto p-3 sm:p-5 space-y-4">
          {/* High Density Metric Cards Strip */}
          <ExecutiveMetrics
            schools={schools}
            students={students}
            simulationParams={simulationParams}
            language={language}
          />

          {/* TAB 1: 3D DIGITAL TWIN + ROSTER */}
          {currentTab === 'twin3d' && (
            <div className="space-y-4">
              {/* 3D Digital Twin Command Box */}
              <div
                className={`relative rounded-lg overflow-hidden border border-slate-800 bg-[#050608] shadow-2xl transition-all duration-300 ${
                  isFullscreen3D ? 'fixed inset-0 z-50 rounded-none h-screen w-screen' : 'h-[500px] sm:h-[580px] w-full'
                }`}
              >
                {/* Background dot grid pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-25 pointer-events-none" />

                {/* 3D Three.js WebGL canvas */}
                <DigitalTwinCanvas
                  level={level}
                  setLevel={setLevel}
                  schools={schools}
                  selectedSchool={selectedSchool}
                  setSelectedSchool={setSelectedSchool}
                  selectedClassroom={selectedClassroom}
                  setSelectedClassroom={setSelectedClassroom}
                  selectedStudent={selectedStudent}
                  setSelectedStudent={setSelectedStudent}
                  students={students}
                  simulationParams={simulationParams}
                  theme={theme}
                  language={language}
                />

                {/* Canvas Top-Right Quick Controls */}
                <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
                  <button
                    onClick={() => setIsFullscreen3D(!isFullscreen3D)}
                    title={isFullscreen3D ? 'Salir de pantalla completa' : 'Pantalla Completa'}
                    className="p-2 bg-[#0F1115]/90 hover:bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700/80 backdrop-blur-md transition shadow-md"
                  >
                    {isFullscreen3D ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* HUD: Twin Controls Panel (Bottom Left) */}
                <div className="absolute bottom-3 left-3 z-20 bg-[#0F1115]/90 border border-slate-800 rounded p-2.5 backdrop-blur-md shadow-2xl space-y-1.5 max-w-[210px]">
                  <div className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">
                    {language === 'es' ? 'Controles Twin' : 'Twin Controls'}
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    <button
                      onClick={() => setLevel('macro')}
                      className={`px-2 py-1 text-[10px] font-mono rounded border transition text-center ${
                        level === 'macro'
                          ? 'bg-indigo-600/30 text-indigo-300 border-indigo-500 font-bold'
                          : 'bg-slate-900/80 text-slate-400 border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      MACRO
                    </button>
                    <button
                      onClick={() => setLevel('meso')}
                      className={`px-2 py-1 text-[10px] font-mono rounded border transition text-center ${
                        level === 'meso'
                          ? 'bg-indigo-600/30 text-indigo-300 border-indigo-500 font-bold'
                          : 'bg-slate-900/80 text-slate-400 border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      MESO
                    </button>
                    <button
                      onClick={() => setLevel('micro')}
                      className={`px-2 py-1 text-[10px] font-mono rounded border transition text-center ${
                        level === 'micro'
                          ? 'bg-indigo-600/30 text-indigo-300 border-indigo-500 font-bold'
                          : 'bg-slate-900/80 text-slate-400 border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      MICRO
                    </button>
                    <button
                      onClick={() => {
                        setSelectedSchool(schools[0]);
                        setSelectedClassroom(schools[0].classrooms[0]);
                        setSelectedStudent(students[0]);
                      }}
                      className="px-2 py-1 bg-slate-900/80 text-[10px] font-mono rounded border border-slate-700 text-slate-400 hover:text-white text-center transition"
                    >
                      RESET
                    </button>
                  </div>
                </div>

                {/* HUD: Predictive Score Card with Live SHAP Determinants (Top/Mid Right) */}
                <div className="absolute top-12 right-3 z-20 w-72 hidden md:flex flex-col gap-2.5 pointer-events-auto">
                  <div className="bg-[#0F1115]/95 border border-slate-800 rounded shadow-2xl p-3.5 backdrop-blur-md">
                    <div className="flex justify-between items-start mb-2.5">
                      <div>
                        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                          {language === 'es' ? 'Score Predictivo' : 'Predictive Score'}
                        </div>
                        <div className="text-xl font-mono text-rose-500 font-bold">
                          {selectedStudent ? `${Math.round(selectedStudent.riskScore * 100)}%` : '84.2%'}
                        </div>
                      </div>
                      <span className="px-2 py-0.5 bg-rose-500/10 text-rose-400 border border-rose-500/40 text-[10px] font-mono rounded">
                        {language === 'es' ? 'CRÍTICO' : 'CRITICAL'}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="text-[10px] text-slate-400 font-mono">
                        SHAP: {language === 'es' ? 'Factores Determinantes' : 'Determinant Factors'}
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <div className="text-[9px] w-20 truncate uppercase font-mono text-slate-400">
                            {language === 'es' ? 'Distancia' : 'Distance'}
                          </div>
                          <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-rose-500" style={{ width: '75%' }} />
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-[9px] w-20 truncate uppercase font-mono text-slate-400">
                            {language === 'es' ? 'Asistencia' : 'Attendance'}
                          </div>
                          <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-rose-400" style={{ width: '60%' }} />
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-[9px] w-20 truncate uppercase font-mono text-slate-400">
                            {language === 'es' ? 'Socio-Econ' : 'Socio-Econ'}
                          </div>
                          <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-500" style={{ width: '45%' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mini AI Companion Terminal Card */}
                  <div className="bg-[#0F1115]/95 border border-slate-800 rounded shadow-2xl flex flex-col h-44 backdrop-blur-md overflow-hidden">
                    <div className="p-2.5 border-b border-slate-800 bg-indigo-600/5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
                        <span className="text-[10px] font-bold uppercase text-indigo-300 font-mono">
                          {language === 'es' ? 'Asistente IA Grounded' : 'Grounded AI Assistant'}
                        </span>
                      </div>
                      <button
                        onClick={() => setIsChatOpen(true)}
                        className="text-slate-400 hover:text-white text-[10px] font-mono"
                      >
                        [EXPAND]
                      </button>
                    </div>
                    <div className="flex-1 p-2.5 overflow-y-auto space-y-2 font-mono text-[10px] leading-relaxed">
                      <div className="text-indigo-400">[SYS]: {language === 'es' ? 'Entorno 3D sincronizado' : '3D twin synced'}</div>
                      <div className="text-slate-400">
                        <span className="text-slate-200 uppercase">IA:</span>{' '}
                        {language === 'es'
                          ? 'Zona ESC_04A muestra 6 alumnos en alto riesgo por distancia > 6km. Se aconseja subsidio de transporte.'
                          : 'School ESC_04A shows 6 students with severe dropout probability due to travel commute.'}
                      </div>
                    </div>
                    <div className="p-1.5 border-t border-slate-800 bg-slate-900/50 flex gap-1.5">
                      <button
                        onClick={() => setIsChatOpen(true)}
                        className="w-full text-center py-1 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 text-[10px] font-mono rounded border border-indigo-500/40 transition"
                      >
                        {language === 'es' ? 'Consultar chatbot' : 'Ask chatbot'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* High-Density Matrix Panel: Schools / Classrooms / Student Roster */}
              <SchoolClassroomPanel
                level={level}
                setLevel={setLevel}
                schools={schools}
                selectedSchool={selectedSchool}
                setSelectedSchool={setSelectedSchool}
                selectedClassroom={selectedClassroom}
                setSelectedClassroom={setSelectedClassroom}
                selectedStudent={selectedStudent}
                setSelectedStudent={setSelectedStudent}
                students={students}
                simulationParams={simulationParams}
                language={language}
                onOpenStudentModal={(std) => setStudentModal(std)}
              />
            </div>
          )}

          {/* TAB 2: REPORTS & LEGAL DELIVERABLES */}
          {currentTab === 'reports' && (
            <ReportsCenter
              schools={schools}
              students={students}
              simulationParams={simulationParams}
              language={language}
            />
          )}

          {/* TAB 3: ETHICS, FAIRNESS & ANONYMIZATION AUDIT */}
          {currentTab === 'ethics' && (
            <EthicsAndFairnessDashboard
              students={students}
              language={language}
            />
          )}

          {/* TAB 4: TECHNICAL ARCHITECTURE & API DOCS */}
          {currentTab === 'techDocs' && (
            <TechnicalArchitectureView
              language={language}
            />
          )}
        </main>

        {/* 3. High Density Telemetry Footer */}
        <footer className="h-10 border-t border-slate-800 bg-[#0F1115] px-4 sm:px-6 flex items-center justify-between shrink-0 text-xs">
          <div className="flex items-center gap-4 text-[10px] text-slate-500 font-mono">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-rose-500 rounded-sm" /> {language === 'es' ? 'RIESGO CRÍTICO (>65%)' : 'CRITICAL (>65%)'}
            </span>
            <span className="flex items-center gap-1 hidden sm:flex">
              <div className="w-2 h-2 bg-amber-500 rounded-sm" /> {language === 'es' ? 'RIESGO MEDIO (35-65%)' : 'MEDIUM (35-65%)'}
            </span>
            <span className="flex items-center gap-1 hidden sm:flex">
              <div className="w-2 h-2 bg-green-500 rounded-sm" /> {language === 'es' ? 'BAJO RIESGO (<35%)' : 'LOW (<35%)'}
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
            <button
              onClick={() => setCurrentTab('reports')}
              className="hover:text-indigo-400 transition-colors"
            >
              {language === 'es' ? 'Generar Reporte PDF' : 'Generate PDF Report'}
            </button>
            <button
              onClick={() => setCurrentTab('reports')}
              className="hover:text-indigo-400 transition-colors hidden md:inline"
            >
              {language === 'es' ? 'Exportar Dataset .XLSX' : 'Export .XLSX'}
            </button>
            <button
              onClick={() => setCurrentTab('ethics')}
              className="hover:text-indigo-400 transition-colors text-slate-500"
            >
              [HASH_ON]
            </button>
          </div>
        </footer>
      </div>

      {/* Modals & Floating Drawers */}
      <SimulationDrawer
        isOpen={isSimulating}
        onClose={() => setIsSimulating(false)}
        simulationParams={simulationParams}
        setSimulationParams={setSimulationParams}
        students={students}
        schools={schools}
        language={language}
      />

      <StudentDetailModal
        student={studentModal}
        onClose={() => setStudentModal(null)}
        simulationParams={simulationParams}
        language={language}
        onAskAI={handleOpenAiForStudent}
        onToggleIntervention={handleToggleIntervention}
      />

      <AiChatbotModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        schools={schools}
        selectedSchool={selectedSchool}
        setSelectedSchool={setSelectedSchool}
        selectedStudent={selectedStudent}
        setSelectedStudent={setSelectedStudent}
        level={level}
        setLevel={setLevel}
        simulationParams={simulationParams}
        language={language}
      />

      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          title={language === 'es' ? 'Abrir chatbot' : 'Open chatbot'}
          aria-label={language === 'es' ? 'Abrir chatbot' : 'Open chatbot'}
          className="fixed right-4 bottom-14 sm:right-6 sm:bottom-6 z-40 w-14 h-14 rounded-full bg-sky-600 hover:bg-sky-500 text-white shadow-[0_8px_24px_rgba(14,165,233,0.4)] flex items-center justify-center transition-transform hover:scale-105"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0A0B0E]" />
        </button>
      )}
    </div>
  );
}

