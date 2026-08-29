import React from 'react';
import { Student, SimulationParameters, Language } from '../../types';
import { calculateStudentRiskWithInterventions } from '../../services/mlEngine';
import { translations } from '../../i18n/translations';
import {
  X,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  Clock,
  MapPin,
  Briefcase,
  Users,
  Wifi,
  FileSignature,
  CheckCircle2
} from 'lucide-react';

interface StudentDetailModalProps {
  student: Student | null;
  onClose: () => void;
  simulationParams: SimulationParameters;
  language: Language;
  onAskAI: (student: Student) => void;
  onToggleIntervention: (studentId: string, interventionName: string) => void;
}

export const StudentDetailModal: React.FC<StudentDetailModalProps> = ({
  student,
  onClose,
  simulationParams,
  language,
  onAskAI,
  onToggleIntervention
}) => {
  if (!student) return null;

  const t = translations[language];
  const { simulatedProbability, simulatedTier, updatedShap, riskReduction } = calculateStudentRiskWithInterventions(
    student,
    simulationParams
  );

  const isSimulated = riskReduction > 0;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header with Anonymous Hash ID */}
        <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between bg-slate-50 dark:bg-slate-800/40">
          <div className="flex items-center gap-3.5">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-extrabold text-lg shadow-md"
              style={{
                backgroundColor:
                  simulatedTier === 'high' ? '#ef4444' : simulatedTier === 'medium' ? '#f59e0b' : '#10b981'
              }}
            >
              {student.anonymousId.substring(1, 4)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {student.anonymousId}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  {t.student.hashId}: {student.idHash}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {student.schoolName} • {student.classroomName} • {student.age} {language === 'es' ? 'años' : 'years'} • {student.gender === 'F' ? (language === 'es' ? 'Femenino' : 'Female') : (language === 'es' ? 'Masculino' : 'Male')}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Risk Probability Score Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
            <div>
              <span className="text-[11px] font-semibold text-slate-500 uppercase">
                {language === 'es' ? 'Probabilidad Inicial' : 'Baseline Probability'}
              </span>
              <div className="text-2xl font-black text-slate-800 dark:text-slate-200">
                {(student.dropoutProbability * 100).toFixed(0)}%
              </div>
              <span className="text-[11px] text-slate-400 font-medium">Modelo XGBoost / SHAP</span>
            </div>

            <div>
              <span className="text-[11px] font-semibold text-slate-500 uppercase">
                {isSimulated ? (language === 'es' ? 'Probabilidad Simulada' : 'Simulated Risk') : (language === 'es' ? 'Nivel de Riesgo' : 'Risk Tier')}
              </span>
              <div className="text-2xl font-black flex items-center gap-2">
                <span
                  style={{
                    color:
                      simulatedTier === 'high' ? '#ef4444' : simulatedTier === 'medium' ? '#f59e0b' : '#10b981'
                  }}
                >
                  {(simulatedProbability * 100).toFixed(0)}%
                </span>
                {isSimulated && (
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center">
                    <TrendingDown className="w-3.5 h-3.5 mr-0.5" />
                    -{riskReduction}%
                  </span>
                )}
              </div>
              <span className="text-[11px] text-slate-400 font-medium">
                {t.riskTiers[simulatedTier]}
              </span>
            </div>

            <div className="flex items-center sm:justify-end">
              <button
                onClick={() => onAskAI(student)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white shadow-md transition flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.student.askAiAboutStudent}</span>
              </button>
            </div>
          </div>

          {/* SHAP Waterfall / Explainability Breakdown */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-500" />
                {t.student.shapAnalysis}
              </h4>
              <span className="text-[11px] text-slate-400">
                {t.student.baseValue}: 22.0%
              </span>
            </div>

            <div className="space-y-2">
              {updatedShap.map((factor, idx) => {
                const isRisk = factor.contribution > 0;
                const percentage = Math.min(100, Math.abs(factor.contribution) * 200);

                return (
                  <div
                    key={idx}
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 space-y-1.5"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                        {isRisk ? (
                          <TrendingUp className="w-3.5 h-3.5 text-red-500" />
                        ) : (
                          <TrendingDown className="w-3.5 h-3.5 text-emerald-500" />
                        )}
                        {factor.featureName[language]}
                      </span>
                      <span
                        className={`font-bold ${
                          isRisk ? 'text-red-600 dark:text-red-400' : 'text-emerald-600 dark:text-emerald-400'
                        }`}
                      >
                        {isRisk ? '+' : ''}{(factor.contribution * 100).toFixed(1)}% (SHAP)
                      </span>
                    </div>

                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          isRisk ? 'bg-red-500' : 'bg-emerald-500'
                        }`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>

                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {factor.description[language]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Historical Trend Graphs: Attendance & GPA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Attendance Timeline */}
            <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 space-y-2">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-sky-500" />
                {t.student.attendanceHistory}
              </span>
              <div className="flex items-end gap-2 h-24 pt-2">
                {student.attendanceHistory.map((val, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                    <span className="text-[10px] text-slate-400">{val}%</span>
                    <div
                      className="w-full rounded-t-md transition-all duration-300"
                      style={{
                        height: `${val}%`,
                        backgroundColor: val < 60 ? '#ef4444' : val < 75 ? '#f59e0b' : '#10b981'
                      }}
                    />
                    <span className="text-[10px] text-slate-500">M{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic GPA Timeline */}
            <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 space-y-2">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-indigo-500" />
                {t.student.gradesHistory}
              </span>
              <div className="flex items-end gap-2 h-24 pt-2">
                {student.gpaHistory.map((val, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                    <span className="text-[10px] text-slate-400">{val}</span>
                    <div
                      className="w-full rounded-t-md transition-all duration-300"
                      style={{
                        height: `${(val / 20) * 100}%`,
                        backgroundColor: val < 11 ? '#ef4444' : val < 14 ? '#f59e0b' : '#10b981'
                      }}
                    />
                    <span className="text-[10px] text-slate-500">P{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Multidimensional Socioeconomic Factors */}
          <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/30 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              {t.student.socioeconomicFactors}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700">
                <span className="text-slate-400 block text-[11px]">{t.student.distanceKm}</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">{student.distanceKm} km ({student.travelTimeMinutes} min)</span>
              </div>
              <div className="bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700">
                <span className="text-slate-400 block text-[11px]">{t.student.workBurden}</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">{student.workBurdenHoursWeekly} h/sem</span>
              </div>
              <div className="bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700">
                <span className="text-slate-400 block text-[11px]">Vulnerabilidad Hogar</span>
                <span className="font-bold text-red-500">{student.householdPovertyIndex} / 10</span>
              </div>
            </div>
          </div>

          {/* Parental Consent & Data Privacy Footer Notice */}
          <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <div>
                <span className="font-bold text-emerald-900 dark:text-emerald-300">
                  {t.student.parentalConsent}: {student.consentStatus === 'signed' ? t.student.consentSigned : t.student.consentPending}
                </span>
                <p className="text-[11px] text-emerald-700 dark:text-emerald-400">
                  {t.student.protectedMinorNotice}
                </p>
              </div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
};
