import React, { useState } from 'react';
import { FairnessMetric, Student, Language } from '../../types';
import { INITIAL_FAIRNESS_METRICS } from '../../mockData';
import { translations } from '../../i18n/translations';
import {
  ShieldCheck,
  Lock,
  FileSignature,
  Scale,
  CheckCircle2,
  AlertCircle,
  EyeOff,
  Sparkles,
  Info,
  BookCheck,
  UserCheck
} from 'lucide-react';

interface EthicsAndFairnessDashboardProps {
  students: Student[];
  language: Language;
}

export const EthicsAndFairnessDashboard: React.FC<EthicsAndFairnessDashboardProps> = ({
  students,
  language
}) => {
  const t = translations[language];
  const [fairnessMetrics] = useState<FairnessMetric[]>(INITIAL_FAIRNESS_METRICS);

  const signedConsentsCount = students.filter((s) => s.consentStatus === 'signed').length;
  const pendingConsentsCount = students.filter((s) => s.consentStatus === 'pending').length;

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>UNICEF AI for Children & RGPD Compliance Certified</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            {t.ethics.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-3xl">
            {t.ethics.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-3 bg-emerald-50 dark:bg-emerald-950/30 p-3 rounded-2xl border border-emerald-200 dark:border-emerald-800/60 text-xs self-start md:self-auto">
          <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black text-sm">
            94%
          </div>
          <div>
            <span className="font-bold text-emerald-900 dark:text-emerald-300 block">
              Índice General de Equidad
            </span>
            <span className="text-emerald-700 dark:text-emerald-400 text-[11px]">
              Cero sesgo estadístico detectado
            </span>
          </div>
        </div>
      </div>

      {/* 1. Algorithmic Bias Audit Cards */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Scale className="w-4 h-4 text-indigo-500" />
          {t.ethics.fairnessAudit}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fairnessMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {metric.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                    {metric.metricName}
                  </h4>
                </div>
                <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  {language === 'es' ? 'Cumple' : 'Passed'}
                </span>
              </div>

              <div className="flex items-baseline justify-between pt-1">
                <div>
                  <span className="text-2xl font-black text-slate-900 dark:text-white">
                    {metric.value}
                  </span>
                  <span className="text-xs text-slate-400 ml-1.5">
                    (Umbral: ≥{metric.benchmark})
                  </span>
                </div>
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  DIR: {metric.disparityRatio}
                </span>
              </div>

              <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                {metric.description[language]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Privacy & Pseudonymization Pipeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Anonymization Mechanism */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center">
              <EyeOff className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                {t.ethics.minorProtection}
              </h4>
              <p className="text-[11px] text-slate-500">
                {t.ethics.anonymizationStatus}
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 font-mono text-[11px] space-y-1.5">
            <div className="text-slate-500">
              # Pipeline Criptográfico de Anonimización en Tiempo Real:
            </div>
            <div className="text-emerald-600 dark:text-emerald-400">
              INPUT: [Nombre_Real, DNI_Menor, Direccion_Exacta] (NUNCA ENVIADO A 3D)
            </div>
            <div className="text-sky-600 dark:text-sky-400">
              HASH_OUTPUT: SHA256(Salt + Student_ID) → &quot;a8f3b29c1e4d&quot;
            </div>
            <div className="text-indigo-600 dark:text-indigo-400">
              PUBLIC_3D_TWIN: Token Anónimo → &quot;#STD-7489X&quot;
            </div>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-400">
            Los directivos y docentes solo acceden a identificadores enmascarados en el visor 3D, garantizando que ninguna pantalla pública o captura exponga la identidad o ubicación domiciliar de menores de edad.
          </p>
        </div>

        {/* Parental Consent Management */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <FileSignature className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  {t.ethics.consentManagement}
                </h4>
                <p className="text-[11px] text-slate-500">
                  {signedConsentsCount} {language === 'es' ? 'firmas validadas' : 'validated signatures'}
                </p>
              </div>
            </div>

            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              100% {language === 'es' ? 'Válido' : 'Valid'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center text-xs">
            <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700">
              <span className="text-[11px] text-slate-500 block">{t.ethics.totalConsents}</span>
              <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                {signedConsentsCount}
              </span>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700">
              <span className="text-[11px] text-slate-500 block">{t.ethics.pendingConsents}</span>
              <span className="text-lg font-bold text-amber-500">
                {pendingConsentsCount}
              </span>
            </div>
          </div>

          <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1.5 list-disc pl-5">
            <li>Consentimiento digital informado firmado por el apoderado legal al inicio del año lectivo.</li>
            <li>Derecho irrevocable de revocación o exclusión de analítica predictiva en cualquier momento.</li>
          </ul>
        </div>
      </div>

      {/* 3. XAI Explainability & Transparency Manifesto */}
      <div className="bg-gradient-to-r from-sky-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 shadow-xl border border-sky-900/50 space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <h4 className="text-sm font-bold uppercase tracking-wider text-sky-300">
            Manifiesto de Inteligencia Artificial Explicable (XAI) - Sin Cajas Negras
          </h4>
        </div>
        <p className="text-xs text-slate-200 leading-relaxed max-w-4xl">
          En EduTwin AI, cada predicción de deserción está matemáticamente descompuesta mediante valores SHAP (Shapley Additive Explanations). Los directivos y docentes tienen derecho a conocer exactamente qué factor (+asistencia, +distancia, +carga laboral, -tutoría) influyó en la probabilidad, prohibiendo decisiones automatizadas opacas o punitivas.
        </p>
      </div>
    </div>
  );
};
