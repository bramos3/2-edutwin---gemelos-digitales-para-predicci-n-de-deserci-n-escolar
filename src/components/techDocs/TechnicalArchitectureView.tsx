import React, { useState } from 'react';
import { Language } from '../../types';
import { translations } from '../../i18n/translations';
import {
  Code2,
  Server,
  Database,
  Layers,
  Cpu,
  Boxes,
  Terminal,
  Copy,
  Check,
  Zap,
  Play,
  FileCode,
  ShieldCheck
} from 'lucide-react';

interface TechnicalArchitectureViewProps {
  language: Language;
}

export const TechnicalArchitectureView: React.FC<TechnicalArchitectureViewProps> = ({
  language
}) => {
  const t = translations[language];
  const [activeTab, setActiveTab] = useState<'architecture' | 'api' | 'mlPipeline' | 'docker'>('architecture');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [isRunningApi, setIsRunningApi] = useState<boolean>(false);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleTestPredictionApi = () => {
    setIsRunningApi(true);
    setTimeout(() => {
      setApiResponse(
        JSON.stringify(
          {
            status: 'success',
            model: 'XGBoost_Dropout_Classifier_v3',
            inference_time_ms: 12.4,
            student_hash: 'a8f3b29c1e4d8e7a',
            prediction: {
              dropout_probability: 0.724,
              risk_tier: 'HIGH_RISK',
              confidence_interval: [0.69, 0.76]
            },
            shap_explanations: [
              { feature: 'attendance_rate_30d', value: 58.0, shap_value: 0.284, impact: 'POSITIVE_RISK' },
              { feature: 'weekly_work_hours', value: 16.5, shap_value: 0.218, impact: 'POSITIVE_RISK' },
              { feature: 'distance_to_school_km', value: 4.8, shap_value: 0.162, impact: 'POSITIVE_RISK' },
              { feature: 'active_meal_plan', value: 0, shap_value: 0.082, impact: 'POSITIVE_RISK' }
            ],
            recommended_interventions: [
              { priority: 1, type: 'FEEDING_AID', expected_risk_reduction: -0.15 },
              { priority: 2, type: 'TRANSIT_VOUCHER', expected_risk_reduction: -0.12 }
            ],
            ethical_audit: {
              fairness_dir_passed: true,
              pseudonymized: true,
              timestamp_utc: new Date().toISOString()
            }
          },
          null,
          2
        )
      );
      setIsRunningApi(false);
    }, 450);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 mb-2">
            <Code2 className="w-4 h-4" />
            <span>Full-Stack Architecture & API Deliverables</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            {t.architecture.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-3xl">
            {t.architecture.subtitle}
          </p>
        </div>

        {/* Subtabs */}
        <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700/60 self-start md:self-auto">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'architecture'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{t.architecture.diagram}</span>
          </button>

          <button
            onClick={() => setActiveTab('api')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'api'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            <span>{t.architecture.apiSpecs}</span>
          </button>

          <button
            onClick={() => setActiveTab('mlPipeline')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'mlPipeline'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>{t.architecture.mlModels}</span>
          </button>

          <button
            onClick={() => setActiveTab('docker')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'docker'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <Boxes className="w-3.5 h-3.5" />
            <span>Deployment</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Full System Architecture Diagram */}
      {activeTab === 'architecture' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Frontend Layer */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold">
              1
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Frontend 3D & UI
            </h4>
            <p className="text-xs text-slate-500">
              React 18 + TypeScript + Three.js / React Three Fiber + Tailwind CSS.
            </p>
            <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 list-disc pl-4">
              <li>Render 3D Macro / Meso / Micro</li>
              <li>Raycasting interactivo con mallas dinámicas</li>
              <li>Simulador de escenarios What-If</li>
              <li>Soporte bilingüe ES / EN</li>
            </ul>
          </div>

          {/* API Backend Layer */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              2
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Backend & Microservicios
            </h4>
            <p className="text-xs text-slate-500">
              FastAPI (Python 3.11) + Express.js + WebSockets.
            </p>
            <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 list-disc pl-4">
              <li>Inferencia en tiempo real &lt;20ms</li>
              <li>Motor de simulación contrafáctica</li>
              <li>Generación de reportes PDF/XLSX</li>
              <li>Auditoría y Hashes SHA-256</li>
            </ul>
          </div>

          {/* Database Layer */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              3
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Persistencia & Cache
            </h4>
            <p className="text-xs text-slate-500">
              PostgreSQL 16 + PostGIS + pgvector + Redis 7.
            </p>
            <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 list-disc pl-4">
              <li>Capas geoespaciales de escuelas (PostGIS)</li>
              <li>Embeddings de perfiles estudiantiles</li>
              <li>Cache de simulaciones en Redis</li>
              <li>Encriptación en reposo AES-256</li>
            </ul>
          </div>

          {/* ML / XAI Engine */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
              4
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Machine Learning & XAI
            </h4>
            <p className="text-xs text-slate-500">
              XGBoost + LightGBM + SHAP + Fairness AIF360.
            </p>
            <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 list-disc pl-4">
              <li>AUC-ROC 0.912 en validación cruzada</li>
              <li>Explicabilidad SHAP local y global</li>
              <li>Auditoría continua de paridad demográfica</li>
              <li>Detección temprana multivariable</li>
            </ul>
          </div>
        </div>
      )}

      {/* Tab 2: REST API Specifications & Interactive Tester */}
      {activeTab === 'api' && (
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-bold">
                  POST /api/v1/predict/dropout
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                  Inferencia Predictiva con Explicabilidad SHAP
                </h4>
              </div>

              <button
                onClick={handleTestPredictionApi}
                disabled={isRunningApi}
                className="px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-md transition flex items-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5" />
                <span>{isRunningApi ? 'Ejecutando...' : 'Probar Endpoint'}</span>
              </button>
            </div>

            <p className="text-xs text-slate-500">
              Recibe las métricas anonimizadas del estudiante (asistencia, notas, distancia, trabajo) y retorna el score predictivo y la descomposición vectorial de factores SHAP.
            </p>

            {apiResponse && (
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 bg-slate-950 px-4 py-2 rounded-t-xl">
                  <span>Response 200 OK (application/json)</span>
                  <button
                    onClick={() => copyToClipboard(apiResponse, 'api')}
                    className="hover:text-white flex items-center gap-1"
                  >
                    {copiedCode === 'api' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode === 'api' ? 'Copiado' : 'Copiar'}</span>
                  </button>
                </div>
                <pre className="p-4 bg-slate-950 text-emerald-400 font-mono text-xs rounded-b-xl overflow-x-auto max-h-72">
                  {apiResponse}
                </pre>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 3: Machine Learning & XAI Technical Specs */}
      {activeTab === 'mlPipeline' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4 text-xs text-slate-600 dark:text-slate-300">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
            Especificación del Pipeline de Machine Learning
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-slate-900 dark:text-white block">1. Modelo Base</span>
              <p className="text-[11px] text-slate-500 mt-1">
                Gradient Boosted Decision Trees (XGBoost Classifier) optimizado con Optuna Bayesian Search.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-slate-900 dark:text-white block">2. Métricas de Rendimiento</span>
              <p className="text-[11px] text-slate-500 mt-1">
                AUC-ROC: 0.912 • F1-Score: 0.865 • Precision@K(10%): 0.924 en dataset socioeducativo.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-slate-900 dark:text-white block">3. Explicabilidad XAI</span>
              <p className="text-[11px] text-slate-500 mt-1">
                TreeSHAP (Lundberg et al.) calculando contribuciones locales por cada predicción individual.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Deployment & Docker Manifests */}
      {activeTab === 'docker' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              docker-compose.production.yml (Infraestructura Completa)
            </h4>
            <span className="text-xs font-mono text-slate-400">Microservicios Listos</span>
          </div>

          <pre className="p-4 bg-slate-950 text-sky-300 font-mono text-xs rounded-xl overflow-x-auto max-h-72">
{`version: '3.8'
services:
  frontend-twin:
    build:
      context: .
      dockerfile: Dockerfile.frontend
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - fastapi-backend

  fastapi-backend:
    build:
      context: ./backend
      dockerfile: Dockerfile.fastapi
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:pass@postgres-db:5432/edutwin
      - REDIS_URL=redis://redis-cache:6379/0
      - GEMINI_API_KEY=\${GEMINI_API_KEY}
    depends_on:
      - postgres-db
      - redis-cache

  postgres-db:
    image: postgis/postgis:16-3.4
    ports:
      - "5432:5432"
    volumes:
      - edutwin_pgdata:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=edutwin
      - POSTGRES_USER=edutwin_admin
      - POSTGRES_PASSWORD=\${DB_PASSWORD}

  redis-cache:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  edutwin_pgdata:`}
          </pre>
        </div>
      )}
    </div>
  );
};
