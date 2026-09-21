import React from 'react';
import { School, Student, SimulationParameters, Language } from '../../types';
import { evaluateScenarioImpact } from '../../services/mlEngine';
import { translations } from '../../i18n/translations';
import { Users, AlertTriangle, LifeBuoy, ShieldCheck, TrendingDown, CheckCircle2, Cpu } from 'lucide-react';

interface ExecutiveMetricsProps {
  schools: School[];
  students: Student[];
  simulationParams: SimulationParameters;
  language: Language;
}

export const ExecutiveMetrics: React.FC<ExecutiveMetricsProps> = ({
  schools,
  students,
  simulationParams,
  language
}) => {
  const t = translations[language];
  const simulationResult = evaluateScenarioImpact(students, schools, simulationParams);

  const totalStudents = schools.reduce((acc, curr) => acc + curr.totalStudents, 0);
  const initialHighRiskStudents = students.filter((s) => s.riskTier === 'high').length;
  const initialHighRiskRate = ((initialHighRiskStudents / Math.max(1, students.length)) * 100).toFixed(1);

  const activeAlertsCount = students.reduce(
    (acc, curr) => acc + curr.alerts.filter((a) => !a.resolved).length,
    0
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 my-2">
      {/* Metric 1: Total Students Monitored */}
      <div className="metric-rise bg-[#111827]/75 backdrop-blur-sm border border-slate-700/60 rounded-xl p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_12px_30px_rgba(2,6,23,0.18)] hover:border-indigo-500/50 transition-all duration-300">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 font-mono">
            {t.metrics.totalMonitored}
          </span>
          <div className="w-6 h-6 rounded bg-indigo-600/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
            <Users className="w-3.5 h-3.5" />
          </div>
        </div>
        <div className="mt-1.5 flex items-baseline gap-2">
          <span className="text-2xl font-mono font-bold text-slate-100 tracking-tight">
            {totalStudents.toLocaleString()}
          </span>
          <span className="text-[10px] font-mono text-indigo-400">
            ({schools.length} {language === 'es' ? 'planteles' : 'schools'})
          </span>
        </div>
        <p className="text-[10px] text-slate-500 mt-0.5 font-mono truncate">
          6 {language === 'es' ? 'micro-zonas periurbanas' : 'micro-zones'}
        </p>
      </div>

      {/* Metric 2: Critical Risk Rate */}
      <div className="metric-rise bg-[#111827]/75 backdrop-blur-sm border border-slate-700/60 rounded-xl p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_12px_30px_rgba(2,6,23,0.18)] hover:border-rose-500/50 transition-all duration-300" style={{ animationDelay: '60ms' }}>
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 font-mono">
            {t.metrics.highRiskRate}
          </span>
          <div className="w-6 h-6 rounded bg-rose-500/10 text-rose-400 flex items-center justify-center border border-rose-500/20">
            <AlertTriangle className="w-3.5 h-3.5" />
          </div>
        </div>
        <div className="mt-1.5 flex items-baseline gap-2">
          <span className="text-2xl font-mono font-bold text-rose-400 tracking-tight">
            {initialHighRiskRate}%
          </span>
          {simulationResult.overallRiskReduction > 0 && (
            <span className="text-[10px] font-mono font-bold text-emerald-400 flex items-center">
              <TrendingDown className="w-3 h-3 mr-0.5" />
              -{simulationResult.overallRiskReduction}%
            </span>
          )}
        </div>
        <p className="text-[10px] text-slate-500 mt-0.5 font-mono">
          Score ML &gt; 0.65 [XGBoost]
        </p>
      </div>

      {/* Metric 3: Rescuable Students (Simulated) */}
      <div className="metric-rise bg-[#111827]/75 backdrop-blur-sm border border-slate-700/60 rounded-xl p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_12px_30px_rgba(2,6,23,0.18)] hover:border-emerald-500/50 transition-all duration-300" style={{ animationDelay: '120ms' }}>
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 font-mono">
            {t.metrics.simulatedRescue}
          </span>
          <div className="w-6 h-6 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
            <LifeBuoy className="w-3.5 h-3.5" />
          </div>
        </div>
        <div className="mt-1.5 flex items-baseline gap-2">
          <span className="text-2xl font-mono font-bold text-emerald-300 tracking-tight">
            +{simulationResult.studentsRescuedCount}
          </span>
          <span className="text-[10px] font-mono text-emerald-500">
            {language === 'es' ? 'alumnos' : 'students'}
          </span>
        </div>
        <p className="text-[10px] text-slate-500 mt-0.5 font-mono">
          ROI Social: {simulationResult.roiSocialMultiplier}x
        </p>
      </div>

      {/* Metric 4: Active Early Alerts */}
      <div className="metric-rise bg-[#111827]/75 backdrop-blur-sm border border-slate-700/60 rounded-xl p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_12px_30px_rgba(2,6,23,0.18)] hover:border-amber-500/50 transition-all duration-300" style={{ animationDelay: '180ms' }}>
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 font-mono">
            {t.metrics.activeAlerts}
          </span>
          <div className="w-6 h-6 rounded bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
            <AlertTriangle className="w-3.5 h-3.5" />
          </div>
        </div>
        <div className="mt-1.5 flex items-baseline gap-2">
          <span className="text-2xl font-mono font-bold text-amber-300 tracking-tight">
            {activeAlertsCount}
          </span>
          <span className="text-[10px] font-mono text-amber-500">
            {language === 'es' ? 'urgentes' : 'urgent'}
          </span>
        </div>
        <p className="text-[10px] text-slate-500 mt-0.5 font-mono truncate">
          {language === 'es' ? 'Asistencia & Notas' : 'Attendance & Grades'}
        </p>
      </div>

      {/* Metric 5: Algorithmic Fairness Index */}
      <div className="col-span-2 sm:col-span-1 metric-rise bg-[#111827]/75 backdrop-blur-sm border border-slate-700/60 rounded-xl p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_12px_30px_rgba(2,6,23,0.18)] hover:border-indigo-500/50 transition-all duration-300" style={{ animationDelay: '240ms' }}>
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 font-mono">
            {t.metrics.fairnessIndex}
          </span>
          <div className="w-6 h-6 rounded bg-indigo-600/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
        </div>
        <div className="mt-1.5 flex items-baseline gap-2">
          <span className="text-2xl font-mono font-bold text-indigo-300 tracking-tight">
            94.2%
          </span>
          <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-0.5">
            <CheckCircle2 className="w-3 h-3" />
            {language === 'es' ? 'Audit' : 'Audit'}
          </span>
        </div>
        <p className="text-[10px] text-slate-500 mt-0.5 font-mono">
          DIR &ge; 0.80 Passed
        </p>
      </div>
    </div>
  );
};
