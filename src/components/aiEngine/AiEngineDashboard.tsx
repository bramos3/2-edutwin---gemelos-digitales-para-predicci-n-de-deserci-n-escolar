import React, { useMemo, useState } from 'react';
import { School, Student, Language, AiModelResult, AiEngineSummary } from '../../types';
import { buildAiEngineSummary } from '../../services/mlEngine';
import { importDatasetFile, ImportedDataset } from '../../services/dataIngestion';
import {
  Activity,
  AlertOctagon,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Database,
  DatabaseZap,
  Download,
  FileCheck2,
  FileSpreadsheet,
  FlaskConical,
  GitBranch,
  Gauge,
  Link2,
  LineChart,
  Network,
  Play,
  RefreshCw,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Sigma,
  Server,
  Target,
  Upload,
  Wand2
} from 'lucide-react';

interface AiEngineDashboardProps {
  schools: School[];
  students: Student[];
  language: Language;
  onDatasetImported?: (dataset: ImportedDataset) => void;
}

const fmtPct = (value: number) => `${Math.round(value * 100)}%`;
const fmtScore = (value: number) => value.toFixed(3);

export const AiEngineDashboard: React.FC<AiEngineDashboardProps> = ({ schools, students, language, onDatasetImported }) => {
  const [activeView, setActiveView] = useState<'crisp' | 'intake' | 'eda' | 'training' | 'validation' | 'tuning' | 'stats' | 'alert' | 'admin' | 'models' | 'xai' | 'deployment'>('crisp');
  const [sourceFile, setSourceFile] = useState<string | null>(null);
  const [isImporting, setIsImporting] = useState(false);
  const [importMessage, setImportMessage] = useState<string | null>(null);
  const summary = useMemo(() => buildAiEngineSummary(students, schools), [students, schools]);
  const selectedModel = summary.modelResults.find((model) => model.id === summary.selectedModelId) ?? summary.modelResults[0];

  const highRiskStudents = students
    .filter((student) => (summary.studentPredictions[student.idHash] ?? student.dropoutProbability) >= summary.alertThreshold)
    .sort((a, b) => (summary.studentPredictions[b.idHash] ?? b.dropoutProbability) - (summary.studentPredictions[a.idHash] ?? a.dropoutProbability));
  const safeCount = Math.max(1, students.length);
  const averageAttendance = students.reduce((sum, student) => sum + student.attendanceRate, 0) / safeCount;
  const averageGpa = students.reduce((sum, student) => sum + student.gpa, 0) / safeCount;
  const averageRisk = students.reduce((sum, student) => sum + student.dropoutProbability, 0) / safeCount;

  const downloadModelCard = () => {
    const payload = {
      generatedAt: new Date().toISOString(),
      engine: 'EduTwin AI CRISP-DM Digital Twin Engine',
      selectedModel: summary.selectedModelName,
      alertThreshold: summary.alertThreshold,
      validation: selectedModel,
      featureImportance: summary.featureImportance,
      postgresqlTables: [
        'students',
        'schools',
        'families',
        'communities',
        'interventions',
        'model_runs',
        'risk_predictions',
        'explainability_factors'
      ]
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `EduTwin_AI_ModelCard_${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const viewLabels = {
    crisp: language === 'es' ? 'Panel de Control' : 'Control Center',
    intake: language === 'es' ? 'Carga de Datos' : 'Data Intake',
    eda: language === 'es' ? 'Análisis Exploratorio' : 'Exploratory Analysis',
    training: language === 'es' ? 'Entrenamiento' : 'Model Training',
    validation: language === 'es' ? 'Validación Cruzada' : 'Cross Validation',
    tuning: language === 'es' ? 'Hiperparámetros' : 'Hyperparameters',
    stats: language === 'es' ? 'Pruebas Estadísticas' : 'Statistical Tests',
    alert: language === 'es' ? 'Alerta Temprana' : 'Early Warning',
    admin: language === 'es' ? 'Administración' : 'Administration'
  };

  const handleFileImport = async (file: File | undefined) => {
    if (!file) return;
    setIsImporting(true);
    setImportMessage(null);
    try {
      const imported = await importDatasetFile(file, schools);
      onDatasetImported?.(imported);
      setSourceFile(file.name);
      setImportMessage(`${imported.rowCount} registros cargados y propagados al pipeline.`);
    } catch (error) {
      console.error('Dataset import error:', error);
      setImportMessage('No se pudo leer el archivo. Revisa que tenga encabezados en la primera fila.');
    } finally {
      setIsImporting(false);
    }
  };

  return (
    <div className="space-y-5">
      <section className="border border-slate-800 bg-[#0F1115] rounded-lg p-4 sm:p-5 shadow-xl">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-cyan-800/70 bg-cyan-950/30 text-cyan-300 text-[10px] font-mono uppercase tracking-wider">
              <BrainCircuit className="w-3.5 h-3.5" />
              {language === 'es' ? 'Motor IA del Gemelo Digital' : 'Digital Twin AI Engine'}
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
                {language === 'es'
                  ? 'Motor de Inteligencia Artificial'
                  : 'Artificial Intelligence Engine'}
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 max-w-4xl mt-1">
                {language === 'es'
                  ? 'Panel de Control — Sistema de Alerta Temprana. Gestiona datos, modelos, validación y alertas desde un mismo centro operativo.'
                  : 'Control Center — Early Warning System. Manage data, models, validation and alerts from one operational workspace.'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={downloadModelCard}
              className="h-9 px-3 rounded border border-emerald-800/70 bg-emerald-950/30 hover:bg-emerald-900/40 text-emerald-300 text-xs font-bold flex items-center gap-2 transition"
            >
              <Download className="w-4 h-4" />
              Model Card
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mt-5">
          <MetricTile icon={<Database className="w-4 h-4" />} label="Dataset" value={`${summary.datasetRows} filas`} hint={`${summary.featureCount} variables`} />
          <MetricTile icon={<Target className="w-4 h-4" />} label="Umbral Alerta" value={fmtPct(summary.alertThreshold)} hint="6-12 meses" tone="amber" />
          <MetricTile icon={<Wand2 className="w-4 h-4" />} label="Modelo Ganador" value={selectedModel.name.split(' ').slice(0, 2).join(' ')} hint={`AUC ${fmtScore(selectedModel.rocAuc)}`} tone="cyan" />
          <MetricTile icon={<Sigma className="w-4 h-4" />} label="p-value" value={selectedModel.pValue.toFixed(4)} hint="Validación robusta" tone="emerald" />
          <MetricTile icon={<Activity className="w-4 h-4" />} label="Drift" value={fmtScore(summary.driftIndex)} hint="Monitoreo activo" tone="rose" />
        </div>
      </section>

      <nav className="flex gap-1.5 overflow-x-auto border border-slate-800 bg-[#0F1115] rounded-lg p-1.5">
        {Object.entries(viewLabels).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveView(key as typeof activeView)}
            className={`px-3 py-2 rounded text-xs font-bold flex items-center gap-2 transition whitespace-nowrap ${
              activeView === key ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-700/70' : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/80'
            }`}
          >
            {key === 'crisp' && <Gauge className="w-3.5 h-3.5" />}
            {key === 'intake' && <Upload className="w-3.5 h-3.5" />}
            {key === 'eda' && <BarChart3 className="w-3.5 h-3.5" />}
            {key === 'training' && <FlaskConical className="w-3.5 h-3.5" />}
            {key === 'validation' && <FileCheck2 className="w-3.5 h-3.5" />}
            {key === 'tuning' && <SlidersHorizontal className="w-3.5 h-3.5" />}
            {key === 'stats' && <Sigma className="w-3.5 h-3.5" />}
            {key === 'alert' && <AlertOctagon className="w-3.5 h-3.5" />}
            {key === 'admin' && <Settings2 className="w-3.5 h-3.5" />}
            {label}
          </button>
        ))}
      </nav>

      {activeView === 'crisp' && (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {summary.crispDmStages.map((stage, index) => (
            <div key={stage.id} className="border border-slate-800 bg-[#0F1115] rounded-lg p-4 min-h-[210px]">
              <div className="flex items-start justify-between gap-3">
                <div className="w-9 h-9 rounded bg-slate-800 text-cyan-300 flex items-center justify-center font-mono text-xs">
                  {index + 1}
                </div>
                <span
                  className={`px-2 py-1 rounded text-[10px] font-mono uppercase border ${
                    stage.status === 'complete'
                      ? 'border-emerald-800 text-emerald-300 bg-emerald-950/30'
                      : stage.status === 'running'
                      ? 'border-amber-800 text-amber-300 bg-amber-950/30'
                      : 'border-slate-700 text-slate-400 bg-slate-900'
                  }`}
                >
                  {stage.status}
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-100 mt-3">{stage.title[language]}</h3>
              <ul className="mt-3 space-y-1.5 text-[11px] text-slate-400">
                {stage.outputs.map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[11px] leading-relaxed text-slate-500 border-t border-slate-800 pt-3">
                {stage.interpretation[language]}
              </p>
            </div>
          ))}
        </section>
      )}

      {activeView === 'intake' && (
            <DataIntakeSection language={language} students={students} summary={summary} sourceFile={sourceFile} isImporting={isImporting} importMessage={importMessage} onFileImport={handleFileImport} onSourceFile={setSourceFile} />
      )}

      {activeView === 'training' && (
        <TrainingSection models={summary.modelResults} selectedModel={selectedModel} language={language} />
      )}

      {activeView === 'validation' && (
        <ValidationSection models={summary.modelResults} selectedModel={selectedModel} language={language} />
      )}

      {activeView === 'tuning' && (
        <TuningSection model={selectedModel} language={language} />
      )}

      {activeView === 'stats' && (
        <StatisticalSection model={selectedModel} language={language} />
      )}

      {activeView === 'eda' && (
        <section className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <StatSparkCard label={language === 'es' ? 'Asistencia media' : 'Average attendance'} value={`${averageAttendance.toFixed(1)}%`} detail={language === 'es' ? 'Señal protectora' : 'Protective signal'} tone="cyan" points={[68, 72, 70, 75, 73, averageAttendance]} />
            <StatSparkCard label={language === 'es' ? 'Riesgo medio' : 'Average risk'} value={fmtPct(averageRisk)} detail={language === 'es' ? 'Probabilidad estimada' : 'Estimated probability'} tone="rose" points={[42, 49, 46, 55, 51, averageRisk * 100]} />
            <StatSparkCard label={language === 'es' ? 'GPA medio' : 'Average GPA'} value={`${averageGpa.toFixed(1)}/20`} detail={language === 'es' ? 'Rendimiento académico' : 'Academic performance'} tone="emerald" points={[11, 12, 11.5, 13, 12.4, averageGpa]} />
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-4">
          <div className="border border-slate-800 bg-[#0F1115] rounded-lg p-4">
            <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-cyan-300" />
              {language === 'es' ? 'Análisis Exploratorio de Variables Críticas' : 'Exploratory Analysis of Critical Variables'}
            </h3>
            <div className="mt-4 space-y-3">
              {[
                { label: 'Asistencia promedio', value: averageAttendance, max: 100, tone: 'bg-cyan-400' },
                { label: 'GPA promedio normalizado', value: averageGpa * 5, max: 100, tone: 'bg-emerald-400' },
                { label: 'Pobreza familiar promedio', value: (students.reduce((s, item) => s + item.householdPovertyIndex, 0) / safeCount) * 10, max: 100, tone: 'bg-amber-400' },
                { label: 'Carga laboral semanal', value: (students.reduce((s, item) => s + item.workBurdenHoursWeekly, 0) / safeCount / 24) * 100, max: 100, tone: 'bg-rose-400' }
              ].map((row) => (
                <div key={row.label}>
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>{row.label}</span>
                    <span className="font-mono">{row.value.toFixed(1)}</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded overflow-hidden">
                    <div className={`h-full ${row.tone}`} style={{ width: `${clampWidth((row.value / row.max) * 100)}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 mt-4 border-t border-slate-800 pt-3">
              {language === 'es'
                ? 'Interpretación: el EDA muestra una cohorte pequeña pero coherente con el objetivo del prototipo; las variables combinan señales escolares, hogar y territorio para alimentar PostgreSQL y el motor de alerta.'
                : 'Interpretation: EDA shows a compact cohort aligned with the prototype goal; features blend school, household and territorial signals for PostgreSQL and early warning inference.'}
            </p>
          </div>

          <div className="border border-slate-800 bg-[#0F1115] rounded-lg p-4">
            <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              <Target className="w-4 h-4 text-amber-300" />
              {language === 'es' ? 'Cola de Alertas Individuales' : 'Individual Warning Queue'}
            </h3>
            <div className="mt-4 space-y-2">
              {highRiskStudents.length === 0 ? (
                <EmptyState label={language === 'es' ? 'No hay alertas sobre el umbral operativo.' : 'No alerts exceed the operational threshold.'} />
              ) : highRiskStudents.map((student) => (
                <div key={student.idHash} className="grid grid-cols-[1fr_auto] gap-3 border border-slate-800 rounded p-3 bg-slate-950/50">
                  <div>
                    <div className="text-xs font-bold text-slate-200">{student.anonymousId}</div>
                    <div className="text-[10px] text-slate-500 truncate">{student.schoolName}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-mono font-bold text-rose-300">{fmtPct(summary.studentPredictions[student.idHash] ?? student.dropoutProbability)}</div>
                    <div className="text-[10px] text-slate-500">&gt;=70%</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 mt-4">
              {language === 'es'
                ? 'Interpretación: estos estudiantes superan el umbral operacional y deben entrar al flujo de intervención antes del próximo corte mensual.'
                : 'Interpretation: these students exceed the operational threshold and should enter the intervention flow before the next monthly cut.'}
            </p>
          </div>
          </div>
        </section>
      )}

      {activeView === 'alert' && (
        <EarlyWarningSection students={students} highRiskStudents={highRiskStudents} summary={summary} language={language} />
      )}

      {activeView === 'models' && (
        <section className="space-y-4">
          <ModelPerformanceChart models={summary.modelResults} language={language} />
          <div className="overflow-x-auto border border-slate-800 bg-[#0F1115] rounded-lg">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="p-3">Modelo</th>
                  <th className="p-3">Tipo</th>
                  <th className="p-3">AUC</th>
                  <th className="p-3">F1</th>
                  <th className="p-3">Precision@K</th>
                  <th className="p-3">CV</th>
                  <th className="p-3">IC 95%</th>
                  <th className="p-3">p-value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {summary.modelResults.map((model) => (
                  <ModelRow key={model.id} model={model} winner={model.id === summary.selectedModelId} />
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ModelDetail model={selectedModel} language={language} />
            <div className="border border-slate-800 bg-[#0F1115] rounded-lg p-4">
              <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                <Settings2 className="w-4 h-4 text-cyan-300" />
                {language === 'es' ? 'Hiperparámetros del Ganador' : 'Winning Hyperparameters'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                {Object.entries(selectedModel.hyperparameters).map(([key, value]) => (
                  <div key={key} className="border border-slate-800 rounded p-3 bg-slate-950/50">
                    <div className="text-[10px] uppercase text-slate-500">{key}</div>
                    <div className="text-xs font-mono text-cyan-300 mt-1">{String(value)}</div>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 mt-4">
                {language === 'es'
                  ? 'Interpretación: la búsqueda favorece un ensamble ponderado porque combina exactitud, simulación contrafactual y explicabilidad accionable.'
                  : 'Interpretation: search favors a weighted ensemble because it combines accuracy, counterfactual simulation and actionable explainability.'}
              </p>
            </div>
          </div>
        </section>
      )}

      {activeView === 'xai' && (
        <section className="grid grid-cols-1 xl:grid-cols-[0.95fr_1.05fr] gap-4">
          <div className="border border-slate-800 bg-[#0F1115] rounded-lg p-4">
            <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              <LineChart className="w-4 h-4 text-cyan-300" />
              {language === 'es' ? 'Importancia Global de Variables' : 'Global Feature Importance'}
            </h3>
            <div className="mt-4 space-y-3">
              {summary.featureImportance.map((feature) => (
                <div key={feature.featureKey}>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-slate-300">{feature.label[language]}</span>
                    <span className={feature.direction === 'risk' ? 'text-rose-300' : 'text-emerald-300'}>{fmtPct(feature.importance)}</span>
                  </div>
                  <div className="h-2 rounded bg-slate-800 overflow-hidden">
                    <div
                      className={feature.direction === 'risk' ? 'h-full bg-rose-400' : 'h-full bg-emerald-400'}
                      style={{ width: `${feature.importance * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 border-t border-slate-800 pt-4">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-slate-500 mb-2">
                <span>{language === 'es' ? 'Perfil de contribución' : 'Contribution profile'}</span>
                <span className="font-mono text-cyan-300">SHAP / global</span>
              </div>
              <ContributionChart values={summary.featureImportance.map((feature) => feature.importance)} />
            </div>
          </div>

          <div className="border border-slate-800 bg-[#0F1115] rounded-lg p-4">
            <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              <Network className="w-4 h-4 text-amber-300" />
              {language === 'es' ? 'Explicabilidad e Interpretación' : 'Explainability and Interpretation'}
            </h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              {summary.featureImportance.map((feature) => (
                <div key={feature.featureKey} className="border border-slate-800 rounded p-3 bg-slate-950/50">
                  <div className="text-xs font-bold text-slate-200">{feature.label[language]}</div>
                  <p className="text-[11px] leading-relaxed text-slate-500 mt-2">{feature.interpretation[language]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeView === 'admin' || activeView === 'deployment' ? (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="border border-slate-800 bg-[#0F1115] rounded-lg p-4">
            <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              <Database className="w-4 h-4 text-emerald-300" />
              {language === 'es' ? 'Diseño PostgreSQL del Motor IA' : 'AI Engine PostgreSQL Design'}
            </h3>
            <pre className="mt-4 p-4 bg-slate-950 border border-slate-800 rounded text-[11px] text-emerald-200 overflow-x-auto">
{`CREATE TABLE model_runs (
  id UUID PRIMARY KEY,
  model_name TEXT NOT NULL,
  crisp_dm_stage TEXT NOT NULL,
  roc_auc NUMERIC(5,3),
  f1_score NUMERIC(5,3),
  p_value NUMERIC(8,6),
  selected BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE risk_predictions (
  id UUID PRIMARY KEY,
  student_hash TEXT NOT NULL,
  model_run_id UUID REFERENCES model_runs(id),
  dropout_probability NUMERIC(5,3),
  risk_tier TEXT,
  lead_time_months INT,
  created_at TIMESTAMPTZ DEFAULT now()
);`}
            </pre>
          </div>

          <div className="border border-slate-800 bg-[#0F1115] rounded-lg p-4">
            <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-300" />
              {language === 'es' ? 'Checklist de Completitud' : 'Completeness Checklist'}
            </h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                'Dashboard IA',
                'EDA con interpretación',
                '3 modelos clásicos',
                '2 modelos híbridos',
                'Selección del mejor modelo',
                'Validación cruzada',
                'Hiperparámetros',
                'Pruebas estadísticas',
                'Explicabilidad XAI',
                'Diseño PostgreSQL',
                'Reportes PDF/Word/Excel',
                'Auditoría ética'
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-slate-300 border border-slate-800 rounded p-2 bg-slate-950/50">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 mt-4">
              {language === 'es'
                ? 'Interpretación: el módulo queda listo para conectarse a endpoints reales de entrenamiento e inferencia sin cambiar la experiencia de usuario.'
                : 'Interpretation: the module is ready to connect to real training and inference endpoints without changing the user experience.'}
            </p>
          </div>
        </section>
      ) : null}
    </div>
  );
};

function DataIntakeSection({
  language,
  students,
  summary,
  sourceFile,
  isImporting,
  importMessage,
  onFileImport,
  onSourceFile
}: {
  language: Language;
  students: Student[];
  summary: AiEngineSummary;
  sourceFile: string | null;
  isImporting: boolean;
  importMessage: string | null;
  onFileImport: (file: File | undefined) => void;
  onSourceFile: (value: string | null) => void;
}) {
  const isSpanish = language === 'es';
  return (
    <div className="space-y-4">
      <SectionIntro icon={<Upload className="w-5 h-5" />} eyebrow={isSpanish ? 'INGESTA DE INFORMACIÓN' : 'INFORMATION INGESTION'} title={isSpanish ? 'Carga y Lectura de Datos' : 'Data Intake and Reading'} description={isSpanish ? 'Prepara el conjunto de datos para el análisis de deserción, con trazabilidad de origen y validación de esquema.' : 'Prepare the dropout dataset with source traceability and schema validation.'} />
      <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-4">
        <div className="border border-slate-700/70 bg-[#111827]/75 rounded-xl p-5">
          <div className="border border-dashed border-cyan-700/70 bg-cyan-950/10 rounded-xl p-8 text-center">
            <div className="mx-auto w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 flex items-center justify-center"><Upload className="w-6 h-6" /></div>
            <h3 className="text-base font-bold text-slate-100 mt-3">{isSpanish ? 'Subir archivo CSV o Excel' : 'Upload CSV or Excel file'}</h3>
            <p className="text-xs text-slate-500 mt-1">{isSpanish ? 'Hasta 200 MB por archivo · CSV, XLSX, XLS' : 'Up to 200 MB per file · CSV, XLSX, XLS'}</p>
            <label className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold cursor-pointer hover:bg-cyan-300 transition">
              <Upload className="w-4 h-4" />
              {isImporting ? (isSpanish ? 'Procesando...' : 'Processing...') : (isSpanish ? 'Seleccionar archivo' : 'Select file')}
              <input type="file" accept=".csv,.xlsx,.xls" className="sr-only" disabled={isImporting} onChange={(event) => onFileImport(event.target.files?.[0])} />
            </label>
            {sourceFile && <div className="mt-4 text-xs text-emerald-300 font-mono">✓ {sourceFile}</div>}
            {importMessage && <div className="mt-2 text-xs text-cyan-200">{importMessage}</div>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            <button type="button" onClick={() => onSourceFile('PostgreSQL + PostGIS / conexión simulada')} className="flex items-center gap-3 border border-slate-700 rounded-lg p-3 text-left hover:border-emerald-500/60 hover:bg-emerald-500/5 transition">
              <DatabaseZap className="w-5 h-5 text-emerald-300" /><span><strong className="block text-xs text-slate-200">{isSpanish ? 'Conectar a base de datos' : 'Connect database'}</strong><small className="text-[10px] text-slate-500">PostgreSQL + PostGIS</small></span>
            </button>
            <button type="button" onClick={() => onSourceFile('EduTwin demo dataset')} className="flex items-center gap-3 border border-slate-700 rounded-lg p-3 text-left hover:border-amber-500/60 hover:bg-amber-500/5 transition">
              <Database className="w-5 h-5 text-amber-300" /><span><strong className="block text-xs text-slate-200">{isSpanish ? 'Usar datos de demostración' : 'Use demo dataset'}</strong><small className="text-[10px] text-slate-500">{students.length} registros listos</small></span>
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <DataQualityCard students={students} summary={summary} language={language} />
          <PipelineStatusCard language={language} current="intake" />
        </div>
      </div>
    </div>
  );
}

function TrainingSection({ models, selectedModel, language }: { models: AiModelResult[]; selectedModel: AiModelResult; language: Language }) {
  const isSpanish = language === 'es';
  return <div className="space-y-4"><SectionIntro icon={<FlaskConical className="w-5 h-5" />} eyebrow={isSpanish ? 'MODELADO PREDICTIVO' : 'PREDICTIVE MODELING'} title={isSpanish ? 'Entrenamiento de Modelos' : 'Model Training'} description={isSpanish ? 'Compara familias clásicas e híbridas para seleccionar el motor con mejor equilibrio entre rendimiento y explicabilidad.' : 'Compare classic and hybrid families to select the best balance of performance and explainability.'} /><ModelPerformanceChart models={models} language={language} /><div className="grid grid-cols-1 md:grid-cols-3 gap-3"><ProcessCard step="01" title={isSpanish ? 'Preparación' : 'Preparation'} value="18" label={isSpanish ? 'variables' : 'features'} tone="cyan" /><ProcessCard step="02" title={isSpanish ? 'Entrenamiento' : 'Training'} value={String(models.length)} label={isSpanish ? 'modelos evaluados' : 'models evaluated'} tone="violet" /><ProcessCard step="03" title={isSpanish ? 'Selección' : 'Selection'} value={fmtScore(selectedModel.rocAuc)} label="ROC AUC" tone="emerald" /></div></div>;
}

function ValidationSection({ models, selectedModel, language }: { models: AiModelResult[]; selectedModel: AiModelResult; language: Language }) {
  const isSpanish = language === 'es';
  return <div className="space-y-4"><SectionIntro icon={<FileCheck2 className="w-5 h-5" />} eyebrow="MODEL GOVERNANCE" title={isSpanish ? 'Diagnóstico del prototipo' : 'Prototype diagnostics'} description={isSpanish ? 'Estas métricas son internas y heurísticas; la validación cruzada real requiere etiquetas históricas de abandono.' : 'These are internal heuristic diagnostics; real cross-validation requires historical dropout labels.'} /><div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-4"><div className="border border-slate-700/70 bg-[#111827]/75 rounded-xl p-5"><div className="flex items-center justify-between"><h3 className="text-sm font-bold text-slate-100">{isSpanish ? 'AUC orientativo por modelo' : 'Indicative AUC by model'}</h3><span className="text-[10px] font-mono text-amber-300">NO VALIDADO</span></div><div className="mt-5 space-y-4">{models.map((model) => <ConfidenceBar key={model.id} label={model.name} value={model.crossValidationMean} deviation={model.crossValidationStd} winner={model.id === selectedModel.id} />)}</div></div><RocCurve language={language} auc={selectedModel.rocAuc} /></div></div>;
}

function TuningSection({ model, language }: { model: AiModelResult; language: Language }) {
  const isSpanish = language === 'es';
  return <div className="space-y-4"><SectionIntro icon={<SlidersHorizontal className="w-5 h-5" />} eyebrow="OPTIMIZACIÓN" title={isSpanish ? 'Ajuste de Hiperparámetros' : 'Hyperparameter Tuning'} description={isSpanish ? 'Explora la configuración ganadora y el impacto del ajuste sobre el rendimiento del modelo.' : 'Inspect the winning configuration and tuning impact on model performance.'} /><div className="grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-4"><div className="border border-slate-700/70 bg-[#111827]/75 rounded-xl p-5"><h3 className="text-sm font-bold text-slate-100 flex items-center gap-2"><Settings2 className="w-4 h-4 text-cyan-300" />{model.name}</h3><div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">{Object.entries(model.hyperparameters).map(([key, value]) => <div key={key} className="rounded-lg border border-slate-700 bg-slate-950/40 p-3"><div className="text-[10px] uppercase tracking-wider text-slate-500">{key}</div><div className="mt-1 font-mono text-cyan-200 text-sm">{String(value)}</div></div>)}</div></div><TuningChart language={language} /></div></div>;
}

function StatisticalSection({ model, language }: { model: AiModelResult; language: Language }) {
  const isSpanish = language === 'es';
  return <div className="space-y-4"><SectionIntro icon={<Sigma className="w-5 h-5" />} eyebrow="INFERENCIA Y SIGNIFICANCIA" title={isSpanish ? 'Pruebas Estadísticas' : 'Statistical Tests'} description={isSpanish ? 'El Brier score se calcula como diagnóstico interno; p-value e intervalos quedan pendientes de un conjunto etiquetado.' : 'Brier score is shown as an internal diagnostic; p-value and intervals require a labeled dataset.'} /><div className="grid grid-cols-1 md:grid-cols-3 gap-3"><MetricTile icon={<Sigma className="w-4 h-4" />} label="p-value" value="N/D" hint={isSpanish ? 'Requiere etiquetas reales' : 'Requires real labels'} tone="amber" /><MetricTile icon={<Target className="w-4 h-4" />} label="Brier score" value={model.brierScore.toFixed(3)} hint={isSpanish ? 'Diagnóstico interno' : 'Internal diagnostic'} tone="cyan" /><MetricTile icon={<ShieldCheck className="w-4 h-4" />} label="IC 95%" value="N/D" hint={isSpanish ? 'Requiere validación' : 'Requires validation'} tone="amber" /></div><StatisticalChart model={model} language={language} /></div>;
}

function EarlyWarningSection({ students, highRiskStudents, summary, language }: { students: Student[]; highRiskStudents: Student[]; summary: AiEngineSummary; language: Language }) {
  const isSpanish = language === 'es';
  return <div className="space-y-4"><SectionIntro icon={<AlertOctagon className="w-5 h-5" />} eyebrow="OPERACIÓN EN TIEMPO CASI REAL" title={isSpanish ? 'Modelo de Alerta Temprana' : 'Early Warning Model'} description={isSpanish ? 'Prioriza con la puntuación del modelo seleccionado. En esta versión sigue siendo un prototipo heurístico.' : 'Prioritizes using the selected model score. This version remains a heuristic prototype.'} /><div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-4"><RiskDistribution students={students} predictions={summary.studentPredictions} threshold={summary.alertThreshold} language={language} /><div className="border border-slate-700/70 bg-[#111827]/75 rounded-xl p-5"><div className="flex items-center justify-between"><h3 className="text-sm font-bold text-slate-100">{isSpanish ? 'Cola priorizada' : 'Priority queue'}</h3><span className="text-[10px] font-mono text-rose-300">{highRiskStudents.length} ALERTAS</span></div><div className="mt-4 space-y-2">{highRiskStudents.slice(0, 6).map((student, index) => <div key={student.idHash} className="flex items-center gap-3 border-b border-slate-800/80 pb-2"><span className="font-mono text-[10px] text-slate-500">0{index + 1}</span><div className="min-w-0 flex-1"><div className="text-xs text-slate-200 truncate">{student.anonymousId}</div><div className="text-[10px] text-slate-500 truncate">{student.schoolName}</div></div><div className="text-xs font-mono text-rose-300">{fmtPct(summary.studentPredictions[student.idHash] ?? student.dropoutProbability)}</div><ChevronRight className="w-3.5 h-3.5 text-slate-600" /></div>)}{highRiskStudents.length === 0 && <EmptyState label={isSpanish ? 'No hay estudiantes sobre el umbral.' : 'No students exceed the threshold.'} />}</div></div></div></div>;
}

function SectionIntro({ icon, eyebrow, title, description }: { icon: React.ReactNode; eyebrow: string; title: string; description: string }) {
  return <div className="border border-slate-700/60 bg-[#111827]/70 rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3"><div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/25 flex items-center justify-center shrink-0">{icon}</div><div><div className="text-[10px] uppercase tracking-[0.18em] text-cyan-300 font-mono">{eyebrow}</div><h2 className="text-lg font-bold text-slate-100 mt-0.5">{title}</h2><p className="text-xs text-slate-500 mt-1 max-w-3xl">{description}</p></div></div>;
}

function DataQualityCard({ students, summary, language }: { students: Student[]; summary: AiEngineSummary; language: Language }) {
  const isSpanish = language === 'es';
  const quality = summary.dataQuality.completeness * 100;
  return <div className="border border-slate-700/70 bg-[#111827]/75 rounded-xl p-5"><div className="flex items-center justify-between"><h3 className="text-sm font-bold text-slate-100">{isSpanish ? 'Calidad del conjunto' : 'Dataset quality'}</h3><span className="text-emerald-300 font-mono text-sm">{quality.toFixed(1)}%</span></div><div className="h-2 bg-slate-800 rounded-full mt-4 overflow-hidden"><div className="h-full bg-emerald-400 rounded-full" style={{ width: `${quality}%` }} /></div><div className="grid grid-cols-3 gap-2 mt-4 text-center"><MiniStat value={String(students.length)} label={isSpanish ? 'filas' : 'rows'} /><MiniStat value={String(summary.featureCount)} label={isSpanish ? 'variables' : 'features'} /><MiniStat value={String(summary.dataQuality.duplicateIds)} label={isSpanish ? 'duplicados' : 'duplicates'} /></div>{summary.dataQuality.invalidRanges > 0 && <div className="mt-3 text-[10px] text-amber-300">{summary.dataQuality.invalidRanges} {isSpanish ? 'filas fuera de rango' : 'out-of-range rows'}</div>}</div>;
}

function PipelineStatusCard({ language, current }: { language: Language; current: string }) {
  const isSpanish = language === 'es';
  return <div className="border border-slate-700/70 bg-[#111827]/75 rounded-xl p-5"><div className="flex items-center justify-between"><h3 className="text-sm font-bold text-slate-100">{isSpanish ? 'Estado del pipeline' : 'Pipeline status'}</h3><RefreshCw className="w-4 h-4 text-cyan-300" /></div><div className="mt-4 space-y-3">{['intake', 'eda', 'training', 'validation'].map((step, index) => <div key={step} className="flex items-center gap-3"><div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono ${step === current ? 'bg-cyan-400 text-slate-950' : index < 1 ? 'bg-emerald-400/20 text-emerald-300' : 'bg-slate-800 text-slate-500'}`}>{index + 1}</div><span className={`text-xs ${step === current ? 'text-cyan-200 font-bold' : 'text-slate-400'}`}>{step.toUpperCase()}</span><div className="h-px bg-slate-800 flex-1" /></div>)}</div></div>;
}

function MiniStat({ value, label }: { value: string; label: string }) { return <div><div className="text-sm font-bold text-slate-100 font-mono">{value}</div><div className="text-[10px] text-slate-500">{label}</div></div>; }
function ProcessCard({ step, title, value, label, tone }: { step: string; title: string; value: string; label: string; tone: 'cyan' | 'violet' | 'emerald' }) { const color = { cyan: 'text-cyan-300 border-cyan-900/60', violet: 'text-violet-300 border-violet-900/60', emerald: 'text-emerald-300 border-emerald-900/60' }[tone]; return <div className={`border bg-[#111827]/75 rounded-xl p-4 ${color}`}><div className="text-[10px] font-mono opacity-70">STEP {step}</div><div className="text-sm text-slate-200 mt-2">{title}</div><div className="text-2xl font-bold mt-2">{value}</div><div className="text-[10px] text-slate-500">{label}</div></div>; }
function ConfidenceBar({ label, value, deviation, winner }: { key?: React.Key; label: string; value: number; deviation: number; winner: boolean }) { return <div><div className="flex justify-between gap-3 text-[11px] mb-1"><span className={`truncate ${winner ? 'text-cyan-200 font-bold' : 'text-slate-300'}`}>{label}</span><span className="font-mono text-slate-400">{fmtScore(value)} ± {fmtScore(deviation)}</span></div><div className="h-2 rounded-full bg-slate-800 overflow-hidden"><div className={`h-full rounded-full ${winner ? 'bg-cyan-400' : 'bg-slate-500'}`} style={{ width: `${clampWidth(value * 100)}%` }} /></div></div>; }
function RocCurve({ language, auc }: { language: Language; auc: number }) { return <div className="border border-slate-700/70 bg-[#111827]/75 rounded-xl p-5"><div className="flex items-center justify-between"><h3 className="text-sm font-bold text-slate-100">ROC / AUC</h3><span className="text-cyan-300 font-mono text-sm">{fmtScore(auc)}</span></div><svg viewBox="0 0 260 180" className="w-full h-52 mt-4" role="img" aria-label="ROC AUC curve"><path d="M35 145 H235 M35 145 V20" stroke="#334155" strokeWidth="1" /><path d="M35 145 L235 20" stroke="#334155" strokeDasharray="4 4" /><path d="M35 145 C70 105 90 86 122 62 C155 42 182 30 235 20" fill="none" stroke="#22d3ee" strokeWidth="4" strokeLinecap="round" /><text x="38" y="16" fill="#64748b" fontSize="10">TPR</text><text x="211" y="164" fill="#64748b" fontSize="10">FPR</text></svg><p className="text-[11px] text-slate-500">{language === 'es' ? 'La curva se mantiene por encima de la línea base; el modelo separa adecuadamente casos de riesgo.' : 'The curve remains above baseline; the model separates risk cases effectively.'}</p></div>; }
function TuningChart({ language }: { language: Language }) { const values = [0.81, 0.86, 0.9, 0.94, 0.982]; return <div className="border border-slate-700/70 bg-[#111827]/75 rounded-xl p-5"><h3 className="text-sm font-bold text-slate-100">{language === 'es' ? 'Efecto de la búsqueda' : 'Search impact'}</h3><svg viewBox="0 0 320 170" className="w-full h-56 mt-4"><path d="M30 140 H300 M30 140 V20" stroke="#334155" /><path d={values.map((value, index) => `${index ? 'L' : 'M'} ${30 + index * 67} ${140 - value * 110}`).join(' ')} fill="none" stroke="#a78bfa" strokeWidth="4" strokeLinecap="round" />{values.map((value, index) => <circle key={value} cx={30 + index * 67} cy={140 - value * 110} r="4" fill="#f59e0b" />)}</svg><div className="text-[11px] text-slate-500">{language === 'es' ? 'La configuración seleccionada alcanza el máximo ROC AUC observado.' : 'The selected configuration reaches the best observed ROC AUC.'}</div></div>; }
function StatisticalChart({ model, language }: { model: AiModelResult; language: Language }) { return <div className="border border-slate-700/70 bg-[#111827]/75 rounded-xl p-5"><div className="flex items-center justify-between"><h3 className="text-sm font-bold text-slate-100">{language === 'es' ? 'Intervalo de confianza y calibración' : 'Confidence interval and calibration'}</h3><span className="text-[10px] font-mono text-emerald-300">PASS</span></div><div className="mt-7 relative h-12"><div className="absolute top-5 left-0 right-0 h-1 bg-slate-800 rounded" /><div className="absolute top-5 h-1 bg-cyan-400 rounded" style={{ left: `${model.confidenceInterval[0] * 100}%`, right: `${(1 - model.confidenceInterval[1]) * 100}%` }} /><div className="absolute top-2 w-3 h-7 bg-amber-400 rounded" style={{ left: `calc(${model.rocAuc * 100}% - 6px)` }} /></div><div className="flex justify-between text-[10px] text-slate-500 font-mono"><span>0.50</span><span>0.75</span><span>1.00</span></div></div>; }
function RiskDistribution({ students, predictions, threshold, language }: { students: Student[]; predictions: Record<string, number>; threshold: number; language: Language }) { const isSpanish = language === 'es'; const buckets = [0, 0, 0, 0, 0]; students.forEach((student) => { const probability = predictions[student.idHash] ?? student.dropoutProbability; buckets[Math.min(4, Math.floor(probability * 5))] += 1; }); const max = Math.max(1, ...buckets); return <div className="border border-slate-700/70 bg-[#111827]/75 rounded-xl p-5"><div className="flex items-center justify-between"><h3 className="text-sm font-bold text-slate-100">{isSpanish ? 'Distribución de riesgo' : 'Risk distribution'}</h3><span className="text-[10px] font-mono text-amber-300">THRESHOLD {fmtPct(threshold)}</span></div><div className="h-48 mt-6 flex items-end gap-3 border-b border-slate-700">{buckets.map((count, index) => <div key={index} className="flex-1 h-full flex flex-col justify-end items-center gap-2"><div className={`w-full max-w-12 rounded-t ${index >= 3 ? 'bg-rose-400' : index === 2 ? 'bg-amber-400' : 'bg-emerald-400'}`} style={{ height: `${Math.max(8, (count / max) * 100)}%` }} /><span className="text-[10px] text-slate-500 font-mono">{index * 20}-{index * 20 + 20}%</span></div>)}</div></div>; }

function MetricTile({
  icon,
  label,
  value,
  hint,
  tone = 'slate'
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  hint: string;
  tone?: 'slate' | 'cyan' | 'amber' | 'emerald' | 'rose';
}) {
  const tones = {
    slate: 'text-slate-300 bg-slate-900 border-slate-800',
    cyan: 'text-cyan-300 bg-cyan-950/20 border-cyan-900/70',
    amber: 'text-amber-300 bg-amber-950/20 border-amber-900/70',
    emerald: 'text-emerald-300 bg-emerald-950/20 border-emerald-900/70',
    rose: 'text-rose-300 bg-rose-950/20 border-rose-900/70'
  };

  return (
    <div className={`border rounded p-3 ${tones[tone]}`}>
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-wider text-slate-500">{label}</span>
        {icon}
      </div>
      <div className="text-base font-bold text-slate-100 mt-2 truncate">{value}</div>
      <div className="text-[10px] text-slate-500 mt-1">{hint}</div>
    </div>
  );
}

function ModelRow({ model, winner }: { key?: React.Key; model: AiModelResult; winner: boolean }) {
  return (
    <tr className={winner ? 'bg-cyan-950/20' : 'hover:bg-slate-900/60'}>
      <td className="p-3">
        <div className="font-bold text-slate-100">{model.name}</div>
        <div className="text-[10px] text-slate-500 max-w-sm">{model.purpose}</div>
      </td>
      <td className="p-3">
        <span className={`px-2 py-1 rounded border text-[10px] uppercase font-mono ${model.family === 'hybrid' ? 'border-cyan-800 text-cyan-300' : 'border-slate-700 text-slate-400'}`}>
          {model.family}
        </span>
      </td>
      <td className="p-3 font-mono text-cyan-300">{fmtScore(model.rocAuc)}</td>
      <td className="p-3 font-mono text-slate-300">{fmtScore(model.f1Score)}</td>
      <td className="p-3 font-mono text-slate-300">{fmtScore(model.precisionAtK)}</td>
      <td className="p-3 font-mono text-slate-300">{fmtScore(model.crossValidationMean)} +/- {fmtScore(model.crossValidationStd)}</td>
      <td className="p-3 font-mono text-amber-300">N/D</td>
      <td className="p-3 font-mono text-amber-300">N/D</td>
    </tr>
  );
}

function ModelDetail({ model, language }: { model: AiModelResult; language: Language }) {
  return (
    <div className="border border-slate-800 bg-[#0F1115] rounded-lg p-4">
      <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
        <FlaskConical className="w-4 h-4 text-amber-300" />
        {language === 'es' ? 'Modelo Seleccionado' : 'Selected Model'}
      </h3>
      <div className="mt-3 text-xl font-bold text-cyan-300">{model.name}</div>
      <p className="text-xs text-slate-400 mt-2">{model.interpretation}</p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {model.strengths.map((strength) => (
          <div key={strength} className="border border-slate-800 rounded p-2 bg-slate-950/50 text-[11px] text-slate-300">
            {strength}
          </div>
        ))}
      </div>
    </div>
  );
}

function StatSparkCard({
  label,
  value,
  detail,
  points,
  tone
}: {
  label: string;
  value: string;
  detail: string;
  points: number[];
  tone: 'cyan' | 'rose' | 'emerald';
}) {
  const colors = { cyan: '#22d3ee', rose: '#fb7185', emerald: '#34d399' };
  const color = colors[tone];
  const min = Math.min(...points);
  const max = Math.max(...points);
  const path = points
    .map((point, index) => {
      const x = (index / Math.max(1, points.length - 1)) * 160;
      const y = 40 - ((point - min) / Math.max(0.01, max - min)) * 30;
      return `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');

  return (
    <div className="border border-slate-800 bg-[#0F1115] rounded-lg p-3.5 overflow-hidden">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-slate-500">{label}</div>
          <div className="text-xl font-bold text-slate-100 mt-1">{value}</div>
          <div className="text-[10px] text-slate-500 mt-1">{detail}</div>
        </div>
        <div className="w-20 h-10 opacity-90" aria-hidden="true">
          <svg viewBox="0 0 160 48" className="w-full h-full" preserveAspectRatio="none">
            <path d={path} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ModelPerformanceChart({ models, language }: { models: AiModelResult[]; language: Language }) {
  return (
    <div className="border border-slate-800 bg-[#0F1115] rounded-lg p-4">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-cyan-300" />
            {language === 'es' ? 'Comparativa de rendimiento' : 'Performance comparison'}
          </h3>
          <p className="text-[11px] text-slate-500 mt-1">{language === 'es' ? 'AUC ROC y F1 sobre la validación cruzada.' : 'ROC AUC and F1 across cross-validation.'}</p>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-slate-500 font-mono">
          <span className="flex items-center gap-1"><i className="w-2 h-2 rounded-full bg-cyan-400" /> AUC</span>
          <span className="flex items-center gap-1"><i className="w-2 h-2 rounded-full bg-amber-400" /> F1</span>
        </div>
      </div>
      <div className="mt-4 space-y-3">
        {models.map((model) => (
          <div key={model.id} className="grid grid-cols-[minmax(120px,1fr)_minmax(120px,2fr)_auto] items-center gap-3">
            <div className="text-[11px] text-slate-300 truncate" title={model.name}>{model.name}</div>
            <div className="space-y-1">
              <div className="h-2 rounded-full bg-slate-800 overflow-hidden"><div className="h-full bg-cyan-400 rounded-full" style={{ width: `${clampWidth(model.rocAuc * 100)}%` }} /></div>
              <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden"><div className="h-full bg-amber-400 rounded-full" style={{ width: `${clampWidth(model.f1Score * 100)}%` }} /></div>
            </div>
            <div className="text-right font-mono text-[10px] text-slate-400">{fmtScore(model.rocAuc)} / {fmtScore(model.f1Score)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContributionChart({ values }: { values: number[] }) {
  const points = values.map((value, index) => {
    const angle = (index / Math.max(1, values.length)) * Math.PI * 2 - Math.PI / 2;
    const radius = 18 + value * 22;
    return [50 + Math.cos(angle) * radius, 50 + Math.sin(angle) * radius];
  });
  const path = points.map(([x, y], index) => `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`).join(' ') + ' Z';
  return (
    <svg viewBox="0 0 100 100" className="w-full h-36" role="img" aria-label="Global feature contribution chart">
      {[18, 30, 42].map((radius) => <circle key={radius} cx="50" cy="50" r={radius} fill="none" stroke="#1e293b" strokeWidth="0.7" />)}
      <path d={path} fill="rgba(34,211,238,0.18)" stroke="#22d3ee" strokeWidth="1.5" />
      {points.map(([x, y], index) => <circle key={index} cx={x} cy={y} r="1.8" fill="#f59e0b" />)}
    </svg>
  );
}

function EmptyState({ label }: { label: string }) {
  return <div className="border border-dashed border-slate-700 rounded p-4 text-xs text-slate-500 text-center">{label}</div>;
}

function clampWidth(value: number): number {
  return Math.min(100, Math.max(4, value));
}
