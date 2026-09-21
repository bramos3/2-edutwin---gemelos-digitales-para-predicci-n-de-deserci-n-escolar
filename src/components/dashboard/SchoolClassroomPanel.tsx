import React from 'react';
import { School, Classroom, Student, TwinLevel, SimulationParameters, Language } from '../../types';
import { calculateSchoolSimulatedScore, calculateStudentRiskWithInterventions } from '../../services/mlEngine';
import { translations } from '../../i18n/translations';
import {
  Building2,
  Layers,
  Sparkles,
  Users,
  AlertTriangle,
  ChevronRight,
  TrendingDown,
  BookOpen,
  Wifi,
  Utensils
} from 'lucide-react';

interface SchoolClassroomPanelProps {
  level: TwinLevel;
  setLevel: (level: TwinLevel) => void;
  schools: School[];
  selectedSchool: School | null;
  setSelectedSchool: (school: School | null) => void;
  selectedClassroom: Classroom | null;
  setSelectedClassroom: (classroom: Classroom | null) => void;
  selectedStudent: Student | null;
  setSelectedStudent: (student: Student | null) => void;
  students: Student[];
  simulationParams: SimulationParameters;
  language: Language;
  onOpenStudentModal: (student: Student) => void;
}

export const SchoolClassroomPanel: React.FC<SchoolClassroomPanelProps> = ({
  level,
  setLevel,
  schools,
  selectedSchool,
  setSelectedSchool,
  selectedClassroom,
  setSelectedClassroom,
  selectedStudent,
  setSelectedStudent,
  students,
  simulationParams,
  language,
  onOpenStudentModal
}) => {
  const t = translations[language];
  const activeSchool = selectedSchool && schools.some((school) => school.id === selectedSchool.id) ? selectedSchool : schools[0];

  if (!activeSchool) {
    return (
      <div className="bg-[#0F1115] border border-amber-900/60 rounded p-5 shadow-sm">
        <div className="flex items-center gap-3 text-amber-300">
          <AlertTriangle className="w-5 h-5" />
          <div>
            <h3 className="text-sm font-bold">{language === 'es' ? 'Sin datos para este nivel' : 'No data for this level'}</h3>
            <p className="text-xs text-slate-400 mt-1">{language === 'es' ? 'Selecciona una unidad escolar desde la vista Macro.' : 'Select a school unit from the Macro view.'}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0F1115] border border-slate-800 rounded p-3.5 sm:p-4 shadow-sm space-y-3.5">
      {/* Top Header Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-indigo-600/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
            <Building2 className="w-3.5 h-3.5" />
          </div>
          <div>
            <h3 className="text-xs font-mono font-bold text-slate-100 uppercase tracking-wide">
              {level === 'macro' && (language === 'es' ? 'PLANTELES EN LA REGIÓN' : 'SCHOOL UNITS IN REGION')}
              {level === 'meso' && (language === 'es' ? `AULAS: ${activeSchool.name}` : `CLASSROOMS: ${activeSchool.name}`)}
              {level === 'micro' && (language === 'es' ? 'NÓMINA DE ALUMNOS [HASH ANONIMIZADO]' : 'ANONYMIZED STUDENT ROSTER')}
            </h3>
            <p className="text-[10px] text-slate-500 font-mono">
              {level === 'macro' && (language === 'es' ? 'Explora la infraestructura y riesgo por micro-zona' : 'Explore infrastructure risk per zone')}
              {level === 'meso' && (language === 'es' ? 'Selecciona un aula para auditar estudiantes' : 'Select classroom to inspect students')}
              {level === 'micro' && (language === 'es' ? 'Foco en huella 3D y vector SHAP' : 'Focus on 3D footprint & SHAP vector')}
            </p>
          </div>
        </div>

        {/* Level Switch Quick Badges */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto">
          {level !== 'macro' && (
            <button
              onClick={() => setLevel('macro')}
              className="px-2 py-1 text-[10px] font-mono rounded bg-slate-900 border border-slate-700 text-slate-300 hover:text-white transition"
            >
              ← {language === 'es' ? 'NIVEL MACRO' : 'MACRO LEVEL'}
            </button>
          )}
          {level === 'micro' && (
            <button
              onClick={() => setLevel('meso')}
              className="px-2 py-1 text-[10px] font-mono rounded bg-slate-900 border border-slate-700 text-slate-300 hover:text-white transition"
            >
              ← {language === 'es' ? 'NIVEL MESO' : 'MESO LEVEL'}
            </button>
          )}
        </div>
      </div>

      {/* 1. Macro: Schools List */}
      {level === 'macro' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {schools.map((school) => {
            const { simulatedRiskScore, buildingColor } = calculateSchoolSimulatedScore(
              school,
              students,
              simulationParams
            );
            const isSelected = selectedSchool?.id === school.id;

            return (
              <div
                key={school.id}
                onClick={() => {
                  setSelectedSchool(school);
                  setLevel('meso');
                }}
                className={`p-3 rounded border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-indigo-500 bg-indigo-950/20 shadow-[0_0_10px_rgba(99,102,241,0.15)]'
                    : 'border-slate-800 bg-[#0A0B0E] hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-500">
                      {school.code} • {school.zoneCategory}
                    </span>
                    <h4 className="text-xs font-bold text-slate-200 line-clamp-1 mt-0.5">
                      {school.name}
                    </h4>
                  </div>
                  <span
                    className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold"
                    style={{
                      color: buildingColor,
                      backgroundColor: `${buildingColor}18`,
                      border: `1px solid ${buildingColor}40`
                    }}
                  >
                    {simulatedRiskScore}%
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-1.5 mt-2.5 text-[10px] font-mono">
                  <div className="bg-slate-900/90 p-1 rounded border border-slate-800 text-center">
                    <span className="block text-[9px] text-slate-500 uppercase">Matrícula</span>
                    <span className="font-bold text-slate-300">{school.totalStudents}</span>
                  </div>
                  <div className="bg-slate-900/90 p-1 rounded border border-slate-800 text-center">
                    <span className="block text-[9px] text-slate-500 uppercase">Asistencia</span>
                    <span className="font-bold text-slate-300">{school.attendanceAvg}%</span>
                  </div>
                  <div className="bg-slate-900/90 p-1 rounded border border-slate-800 text-center">
                    <span className="block text-[9px] text-slate-500 uppercase">Comedor</span>
                    <span className="font-bold text-slate-300">{school.mealPlanActive ? 'Sí' : 'No'}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 2. Meso: Classrooms in School */}
      {level === 'meso' && (
        <div className="space-y-2.5">
          <div className="flex items-center justify-between p-2 rounded bg-slate-900/80 border border-slate-800 text-xs font-mono">
            <span className="font-bold text-slate-300">
              {activeSchool.name} ({activeSchool.zone})
            </span>
            <span className="text-slate-500">
              {activeSchool.classrooms.length} {language === 'es' ? 'aulas monitoreadas' : 'classrooms'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {(activeSchool?.classrooms ?? []).map((cls) => {
              const isSelected = selectedClassroom?.id === cls.id;
              let clColor = '#10b981';
              if (cls.riskScore >= 75) clColor = '#ef4444';
              else if (cls.riskScore >= 50) clColor = '#f59e0b';

              return (
                <div
                  key={cls.id}
                  onClick={() => {
                    setSelectedClassroom(cls);
                    const matching = students.find((s) => s.classroomId === cls.id) || students[0];
                    setSelectedStudent(matching);
                    setLevel('micro');
                  }}
                  className={`p-3 rounded border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-indigo-500 bg-indigo-950/20 shadow-[0_0_10px_rgba(99,102,241,0.15)]'
                      : 'border-slate-800 bg-[#0A0B0E] hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[9px] font-mono text-slate-500">PISO {cls.floor}</span>
                      <h4 className="text-xs font-bold text-slate-200 mt-0.5">{cls.name}</h4>
                    </div>
                    <span
                      className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold"
                      style={{ color: clColor, backgroundColor: `${clColor}18`, border: `1px solid ${clColor}40` }}
                    >
                      {cls.riskScore}%
                    </span>
                  </div>

                  <p className="text-[10px] font-mono text-slate-500 mt-1.5 truncate">
                    {cls.teacherName}
                  </p>

                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mt-2 pt-1.5 border-t border-slate-800/80">
                    <span>{cls.studentCount} alumnos</span>
                    {cls.alertCount > 0 && (
                      <span className="text-rose-400 font-bold flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        {cls.alertCount} alertas
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. Micro: Students List (Anonymized Roster) */}
      {level === 'micro' && (
        <div className="space-y-2.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {students.length === 0 ? (
              <div className="col-span-full border border-amber-900/60 bg-amber-950/20 rounded p-5 text-sm text-amber-200">
                {language === 'es' ? 'No hay estudiantes disponibles para mostrar en este nivel.' : 'No students are available for this level.'}
              </div>
            ) : students.map((student) => {
              const { simulatedProbability, simulatedTier, riskReduction } = calculateStudentRiskWithInterventions(
                student,
                simulationParams
              );
              const isSelected = selectedStudent?.idHash === student.idHash;

              return (
                <div
                  key={student.idHash}
                  onClick={() => setSelectedStudent(student)}
                  className={`p-2.5 rounded border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'border-indigo-500 bg-indigo-950/30 ring-1 ring-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.2)]'
                      : 'border-slate-800 bg-[#0A0B0E] hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-7 h-7 rounded flex items-center justify-center text-white font-mono font-bold text-[10px] shadow"
                      style={{
                        backgroundColor:
                          simulatedTier === 'high' ? '#ef4444' : simulatedTier === 'medium' ? '#f59e0b' : '#10b981'
                      }}
                    >
                      {student.anonymousId.substring(1, 4)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-xs font-mono font-bold text-slate-200">
                          {student.anonymousId}
                        </h4>
                        <span className="text-[9px] font-mono text-slate-500">{student.classroomName.split('-')[0]}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 block">
                        Asist: {student.attendanceRate}% • GPA: {student.gpa}/20
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="text-right font-mono">
                      <span
                        className="text-xs font-bold block"
                        style={{
                          color:
                            simulatedTier === 'high' ? '#ef4444' : simulatedTier === 'medium' ? '#f59e0b' : '#10b981'
                        }}
                      >
                        {(simulatedProbability * 100).toFixed(0)}%
                      </span>
                      {riskReduction > 0 && (
                        <span className="text-[9px] text-emerald-400 font-bold">
                          -{riskReduction}%
                        </span>
                      )}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenStudentModal(student);
                      }}
                      className="p-1 rounded text-slate-400 hover:text-indigo-400 hover:bg-slate-800 transition"
                      title="Ver Ficha Completa & SHAP"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
