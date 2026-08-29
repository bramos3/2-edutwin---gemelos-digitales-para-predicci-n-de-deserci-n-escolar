import React from 'react';
import { SimulationParameters, Student, School, Language } from '../../types';
import { evaluateScenarioImpact } from '../../services/mlEngine';
import { translations } from '../../i18n/translations';
import {
  Sliders,
  Sparkles,
  RefreshCw,
  Utensils,
  Bus,
  UserCheck,
  BookOpen,
  DollarSign,
  Wifi,
  TrendingDown,
  LifeBuoy,
  X
} from 'lucide-react';

interface SimulationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  simulationParams: SimulationParameters;
  setSimulationParams: React.Dispatch<React.SetStateAction<SimulationParameters>>;
  students: Student[];
  schools: School[];
  language: Language;
}

export const SimulationDrawer: React.FC<SimulationDrawerProps> = ({
  isOpen,
  onClose,
  simulationParams,
  setSimulationParams,
  students,
  schools,
  language
}) => {
  const t = translations[language];
  const impact = evaluateScenarioImpact(students, schools, simulationParams);

  if (!isOpen) return null;

  const handleSliderChange = (key: keyof SimulationParameters, value: number) => {
    setSimulationParams((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const handleReset = () => {
    setSimulationParams({
      mealProgramBoost: 0,
      transportSubsidy: 0,
      psychosocialMentoring: 0,
      remedialClasses: 0,
      familyCashTransfer: 0,
      connectivityAid: 0
    });
  };

  const handlePresetScenario = (type: 'food_transport' | 'comprehensive' | 'academic_mentoring') => {
    if (type === 'food_transport') {
      setSimulationParams({
        mealProgramBoost: 75,
        transportSubsidy: 80,
        psychosocialMentoring: 20,
        remedialClasses: 10,
        familyCashTransfer: 30,
        connectivityAid: 15
      });
    } else if (type === 'comprehensive') {
      setSimulationParams({
        mealProgramBoost: 85,
        transportSubsidy: 90,
        psychosocialMentoring: 80,
        remedialClasses: 70,
        familyCashTransfer: 60,
        connectivityAid: 50
      });
    } else {
      setSimulationParams({
        mealProgramBoost: 30,
        transportSubsidy: 20,
        psychosocialMentoring: 90,
        remedialClasses: 85,
        familyCashTransfer: 10,
        connectivityAid: 40
      });
    }
  };

  const isAnyActive = Object.values(simulationParams).some((v) => Number(v) > 0);

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-md bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col transition-all">
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              {t.simulator.title}
              {isAnyActive && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                  Live 3D
                </span>
              )}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {language === 'es' ? 'Ajuste políticas y vea el impacto en el gemelo 3D' : 'Adjust policies and see live impact on 3D twin'}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Preset Scenarios Buttons */}
      <div className="p-3 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 flex flex-wrap gap-1.5">
        <span className="w-full text-[11px] font-semibold text-slate-500 mb-1">
          {language === 'es' ? '⚡ Escenarios Preconfigurados:' : '⚡ Quick Presets:'}
        </span>
        <button
          onClick={() => handlePresetScenario('food_transport')}
          className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-amber-400 transition"
        >
          {language === 'es' ? 'Alimentación + Transporte' : 'Meals + Transit'}
        </button>
        <button
          onClick={() => handlePresetScenario('academic_mentoring')}
          className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-amber-400 transition"
        >
          {language === 'es' ? 'Tutoría + Refuerzo' : 'Tutoring + Academics'}
        </button>
        <button
          onClick={() => handlePresetScenario('comprehensive')}
          className="px-2.5 py-1 text-xs font-medium rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition"
        >
          {language === 'es' ? 'Plan Integral 360°' : '360° Comprehensive'}
        </button>
      </div>

      {/* Sliders Container */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
        {/* Slider 1: Food Boost */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-medium">
            <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200 font-semibold">
              <Utensils className="w-4 h-4 text-emerald-500" />
              {t.simulator.mealBoost}
            </span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400">
              +{simulationParams.mealProgramBoost}%
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={simulationParams.mealProgramBoost}
            onChange={(e) => handleSliderChange('mealProgramBoost', Number(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer"
          />
        </div>

        {/* Slider 2: Transport Subsidy */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-medium">
            <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200 font-semibold">
              <Bus className="w-4 h-4 text-sky-500" />
              {t.simulator.transportSubsidy}
            </span>
            <span className="font-bold text-sky-600 dark:text-sky-400">
              +{simulationParams.transportSubsidy}%
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={simulationParams.transportSubsidy}
            onChange={(e) => handleSliderChange('transportSubsidy', Number(e.target.value))}
            className="w-full accent-sky-500 cursor-pointer"
          />
        </div>

        {/* Slider 3: Psychosocial Mentoring */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-medium">
            <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200 font-semibold">
              <UserCheck className="w-4 h-4 text-indigo-500" />
              {t.simulator.mentoring}
            </span>
            <span className="font-bold text-indigo-600 dark:text-indigo-400">
              +{simulationParams.psychosocialMentoring}%
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={simulationParams.psychosocialMentoring}
            onChange={(e) => handleSliderChange('psychosocialMentoring', Number(e.target.value))}
            className="w-full accent-indigo-500 cursor-pointer"
          />
        </div>

        {/* Slider 4: Remedial Classes */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-medium">
            <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200 font-semibold">
              <BookOpen className="w-4 h-4 text-amber-500" />
              {t.simulator.remedial}
            </span>
            <span className="font-bold text-amber-600 dark:text-amber-400">
              +{simulationParams.remedialClasses}%
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={simulationParams.remedialClasses}
            onChange={(e) => handleSliderChange('remedialClasses', Number(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer"
          />
        </div>

        {/* Slider 5: Cash Transfer */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-medium">
            <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200 font-semibold">
              <DollarSign className="w-4 h-4 text-teal-500" />
              {t.simulator.cashTransfer}
            </span>
            <span className="font-bold text-teal-600 dark:text-teal-400">
              +{simulationParams.familyCashTransfer}%
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={simulationParams.familyCashTransfer}
            onChange={(e) => handleSliderChange('familyCashTransfer', Number(e.target.value))}
            className="w-full accent-teal-500 cursor-pointer"
          />
        </div>

        {/* Slider 6: Connectivity Aid */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-medium">
            <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200 font-semibold">
              <Wifi className="w-4 h-4 text-purple-500" />
              {t.simulator.connectivity}
            </span>
            <span className="font-bold text-purple-600 dark:text-purple-400">
              +{simulationParams.connectivityAid}%
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={simulationParams.connectivityAid}
            onChange={(e) => handleSliderChange('connectivityAid', Number(e.target.value))}
            className="w-full accent-purple-500 cursor-pointer"
          />
        </div>

        {/* Live Scenario Impact Card */}
        <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white border border-indigo-900/50 shadow-lg space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              {t.simulator.simulatedImpact}
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              ROI {impact.roiSocialMultiplier}x
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="bg-white/5 p-2.5 rounded-xl">
              <span className="text-[11px] text-slate-300 block">{t.simulator.riskReduction}</span>
              <span className="text-lg font-extrabold text-emerald-400 flex items-center gap-1">
                <TrendingDown className="w-4 h-4" />
                {impact.overallRiskReduction}%
              </span>
            </div>
            <div className="bg-white/5 p-2.5 rounded-xl">
              <span className="text-[11px] text-slate-300 block">{t.simulator.rescuedStudents}</span>
              <span className="text-lg font-extrabold text-sky-400 flex items-center gap-1">
                <LifeBuoy className="w-4 h-4" />
                +{impact.studentsRescuedCount}
              </span>
            </div>
          </div>

          <div className="pt-1 flex items-center justify-between text-xs text-slate-300 border-t border-white/10">
            <span>{t.simulator.estimatedCost}:</span>
            <span className="font-bold text-amber-300">${impact.totalCostEstimateUSD.toLocaleString()} USD</span>
          </div>
        </div>
      </div>

      {/* Footer Controls */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
        <button
          onClick={handleReset}
          className="px-3 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center gap-1.5"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>{t.simulator.resetSimulation}</span>
        </button>

        <button
          onClick={onClose}
          className="flex-1 py-2 text-xs font-bold rounded-xl bg-amber-500 hover:bg-amber-600 text-white shadow-md transition flex items-center justify-center gap-1.5"
        >
          <span>{language === 'es' ? 'Ver en Gemelo 3D' : 'View on 3D Twin'}</span>
        </button>
      </div>
    </div>
  );
};
