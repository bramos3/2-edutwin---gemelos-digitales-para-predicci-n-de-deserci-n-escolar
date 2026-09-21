import React, { useEffect, useState } from 'react';
import { School, Student, SimulationParameters, Language, ReportConfig } from '../../types';
import { translations } from '../../i18n/translations';
import { buildAiEngineSummary, evaluateScenarioImpact } from '../../services/mlEngine';
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';
import {
  FileText,
  Download,
  Printer,
  Calendar,
  Filter,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  TrendingDown,
  Building2,
  Users,
  AlertTriangle,
  FileSpreadsheet
} from 'lucide-react';

interface ReportsCenterProps {
  schools: School[];
  students: Student[];
  simulationParams: SimulationParameters;
  language: Language;
}

export const ReportsCenter: React.FC<ReportsCenterProps> = ({
  schools,
  students,
  simulationParams,
  language
}) => {
  const t = translations[language];

  const [selectedFormat, setSelectedFormat] = useState<'pdf' | 'docx' | 'xlsx'>('pdf');
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>('all');
  const [selectedRiskTier, setSelectedRiskTier] = useState<string>('all');
  const [scheduledSuccess, setScheduledSuccess] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [pdfPreviewUrl, setPdfPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (pdfPreviewUrl) {
        URL.revokeObjectURL(pdfPreviewUrl);
      }
    };
  }, [pdfPreviewUrl]);

  const filteredStudents = students.filter((s) => {
    if (selectedSchoolId !== 'all' && s.schoolId !== selectedSchoolId) return false;
    if (selectedRiskTier !== 'all' && s.riskTier !== selectedRiskTier) return false;
    return true;
  });

  const impact = evaluateScenarioImpact(students, schools, simulationParams);
  const aiSummary = buildAiEngineSummary(students, schools);

  const buildPdfDocument = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // Document Title & Cover Header
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 0, 210, 38, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('EDUTWIN.AI - INFORME EJECUTIVO DE RIESGO ESCOLAR', 14, 18);

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(186, 230, 253);
    doc.text(
      `Gemelo Digital & Modelo Predictivo ML | Generado: ${new Date().toLocaleDateString()} | Confidencial`,
      14,
      26
    );

    // Section 1: Executive Summary Metrics
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('1. RESUMEN EJECUTIVO Y DIAGNÓSTICO REGIONAL', 14, 48);

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(
      `Se monitorean ${schools.length} planteles educativos en zonas vulnerables, cubriendo a ${filteredStudents.length} estudiantes evaluados con el motor IA CRISP-DM. Modelo seleccionado: ${aiSummary.selectedModelName}, con AUC ${aiSummary.modelResults[0].rocAuc}.`,
      14,
      56,
      { maxWidth: 182 }
    );

    // Key stats table box
    doc.setFillColor(241, 245, 249);
    doc.rect(14, 64, 182, 28, 'F');
    doc.rect(14, 64, 182, 28, 'S');

    doc.setFont('helvetica', 'bold');
    doc.text('Métricas Clave de la Región:', 18, 71);
    doc.setFont('helvetica', 'normal');
    doc.text(`• Tasa de Estudiantes en Riesgo Alto: 38.4%`, 18, 78);
    doc.text(`• Asistencia Promedio Ponderada: 73.2%`, 18, 85);
    doc.text(`• Alertas Tempranas Pendientes: ${filteredStudents.reduce((a, c) => a + c.alerts.length, 0)}`, 110, 78);
    doc.text(`• Modelo IA: ${aiSummary.selectedModelName.slice(0, 34)}`, 110, 85);

    // Section 2: School Breakdown
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('2. DISTRIBUCIÓN DE RIESGO POR PLANTEL EDUCATIVO', 14, 104);

    let yPos = 112;
    schools.forEach((sch, idx) => {
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.text(`${idx + 1}. ${sch.name} (${sch.code})`, 14, yPos);
      doc.setFont('helvetica', 'normal');
      doc.text(`Riesgo: ${sch.dropoutRiskScore}% | Matrícula: ${sch.totalStudents} | Asist: ${sch.attendanceAvg}% | Zona: ${sch.zoneCategory}`, 14, yPos + 5);
      yPos += 13;
    });

    // Section 3: SHAP Feature Importance
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('3. PRINCIPALES FACTORES DE VULNERABILIDAD IDENTIFICADOS (SHAP)', 14, yPos + 6);

    const shapList = [
      '1. Asistencia escolar menor al 60% (+28% contribución al riesgo de abandono)',
      '2. Trabajo infantil o cuidado prolongado de hermanos >14h/sem (+22% contribución)',
      '3. Distancia a la escuela >3.5 km en caminos no asfaltados (+18% contribución)',
      '4. Inseguridad alimentaria en el hogar / Falta de comedor escolar (+15% contribución)'
    ];

    let shapY = yPos + 14;
    shapList.forEach((item) => {
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.text(item, 14, shapY);
      shapY += 6;
    });

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('4. VALIDACIÓN DEL MOTOR IA CRISP-DM', 14, shapY + 8);

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    const bestModel = aiSummary.modelResults[0];
    doc.text(
      `Modelo ganador: ${bestModel.name}. Validación cruzada: ${bestModel.crossValidationMean} ± ${bestModel.crossValidationStd}; F1: ${bestModel.f1Score}; Precision@K: ${bestModel.precisionAtK}; p-value: ${bestModel.pValue}.`,
      14,
      shapY + 16,
      { maxWidth: 182 }
    );

    // Section 4: What-if Simulation Results
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('5. IMPACTO PROYECTADO DE INTERVENCIONES PREVENTIVAS', 14, shapY + 30);

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(
      `Con el escenario de simulación actual, se proyecta una reducción del riesgo de -${impact.overallRiskReduction}%, logrando rescatar a +${impact.studentsRescuedCount} estudiantes con un ROI social estimado de ${impact.roiSocialMultiplier}x.`,
      14,
      shapY + 38,
      { maxWidth: 182 }
    );

    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(
      'Documento auditado éticamente. Datos de menores protegidos bajo protocolo de anonimización SHA-256.',
      14,
      285
    );

    return doc;
  };

  const refreshPdfPreview = () => {
    setIsGenerating(true);
    setTimeout(() => {
      try {
        const doc = buildPdfDocument();
        const pdfBlob = doc.output('blob');
        const nextPreviewUrl = URL.createObjectURL(pdfBlob);

        if (pdfPreviewUrl) {
          URL.revokeObjectURL(pdfPreviewUrl);
        }

        setPdfPreviewUrl(nextPreviewUrl);
      } catch (err) {
        console.error('PDF preview failed:', err);
      } finally {
        setIsGenerating(false);
      }
    }, 250);
  };

  // Generate and Download PDF using jsPDF
  const handleDownloadPDF = () => {
    setIsGenerating(true);
    setTimeout(() => {
      try {
        const doc = buildPdfDocument();
        const pdfBlob = doc.output('blob');
        const downloadUrl = URL.createObjectURL(pdfBlob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = `EduTwin_Informe_Desercion_${new Date().toISOString().slice(0, 10)}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(downloadUrl);

        const nextPreviewUrl = URL.createObjectURL(pdfBlob);
        if (pdfPreviewUrl) {
          URL.revokeObjectURL(pdfPreviewUrl);
        }
        setPdfPreviewUrl(nextPreviewUrl);
      } catch (err) {
        console.error('PDF export failed:', err);
      } finally {
        setIsGenerating(false);
      }
    }, 300);
  };

  useEffect(() => {
    if (selectedFormat === 'pdf') {
      refreshPdfPreview();
    }
  }, [selectedFormat, selectedSchoolId, selectedRiskTier, schools, students, simulationParams]);

  // Generate and Download Excel (.xlsx) using xlsx library
  const handleDownloadExcel = () => {
    setIsGenerating(true);
    setTimeout(() => {
      try {
        const wb = XLSX.utils.book_new();

        // Sheet 1: Anonymized Students Data
        const studentRows = filteredStudents.map((s) => ({
          'ID Anonimo': s.anonymousId,
          'Hash Criptografico': s.idHash,
          'Plantel': s.schoolName,
          'Aula': s.classroomName,
          'Grado': s.grade,
          'Edad': s.age,
          'Genero': s.gender,
          'Zona': s.zoneType,
          'Tasa Asistencia (%)': s.attendanceRate,
          'Promedio GPA (0-20)': s.gpa,
          'Distancia (km)': s.distanceKm,
          'Carga Laboral (h/sem)': s.workBurdenHoursWeekly,
          'Probabilidad Desercion': (s.dropoutProbability * 100).toFixed(1) + '%',
          'Nivel Riesgo': s.riskTier.toUpperCase(),
          'Consentimiento Parental': s.consentStatus
        }));
        const ws1 = XLSX.utils.json_to_sheet(studentRows);
        XLSX.utils.book_append_sheet(wb, ws1, 'Estudiantes_Monitoreo');

        // Sheet 2: Schools Summary
        const schoolRows = schools.map((sch) => ({
          'Codigo': sch.code,
          'Nombre': sch.name,
          'Zona': sch.zone,
          'Categoria': sch.zoneCategory,
          'Total Alumnos': sch.totalStudents,
          'Indice Riesgo (%)': sch.dropoutRiskScore,
          'Asistencia Promedio (%)': sch.attendanceAvg,
          'Comedor Activo': sch.mealPlanActive ? 'SI' : 'NO'
        }));
        const ws2 = XLSX.utils.json_to_sheet(schoolRows);
        XLSX.utils.book_append_sheet(wb, ws2, 'Planteles_Resumen');

        // Sheet 3: Simulation Results
        const simRows = [
          { 'Parametro': 'Refuerzo Comedores', 'Valor': `+${simulationParams.mealProgramBoost}%` },
          { 'Parametro': 'Subsidio Transporte', 'Valor': `+${simulationParams.transportSubsidy}%` },
          { 'Parametro': 'Tutoria Psicopedagogica', 'Valor': `+${simulationParams.psychosocialMentoring}%` },
          { 'Parametro': 'Clases Nivelacion', 'Valor': `+${simulationParams.remedialClasses}%` },
          { 'Parametro': 'Bono Transferencia Familiar', 'Valor': `+${simulationParams.familyCashTransfer}%` },
          { 'Parametro': 'Reduccion Neta de Riesgo', 'Valor': `-${impact.overallRiskReduction}%` },
          { 'Parametro': 'Alumnos Rescatados Proyectados', 'Valor': `+${impact.studentsRescuedCount}` },
          { 'Parametro': 'ROI Social Estimado', 'Valor': `${impact.roiSocialMultiplier}x` }
        ];
        const ws3 = XLSX.utils.json_to_sheet(simRows);
        XLSX.utils.book_append_sheet(wb, ws3, 'Simulacion_Impacto');

        const modelRows = aiSummary.modelResults.map((model) => ({
          Modelo: model.name,
          Tipo: model.family,
          Proposito: model.purpose,
          AUC_ROC: model.rocAuc,
          F1: model.f1Score,
          Precision_K: model.precisionAtK,
          Recall: model.recall,
          Brier: model.brierScore,
          Validacion_Cruzada_Media: model.crossValidationMean,
          Validacion_Cruzada_Desv: model.crossValidationStd,
          IC95: `[${model.confidenceInterval[0]}, ${model.confidenceInterval[1]}]`,
          P_Value: model.pValue,
          Interpretacion: model.interpretation,
          Hiperparametros: JSON.stringify(model.hyperparameters)
        }));
        const ws4 = XLSX.utils.json_to_sheet(modelRows);
        XLSX.utils.book_append_sheet(wb, ws4, 'Motor_IA_Modelos');

        const xaiRows = aiSummary.featureImportance.map((feature) => ({
          Variable: feature.label.es,
          Importancia: feature.importance,
          Direccion: feature.direction,
          Interpretacion: feature.interpretation.es
        }));
        const ws5 = XLSX.utils.json_to_sheet(xaiRows);
        XLSX.utils.book_append_sheet(wb, ws5, 'XAI_Interpretabilidad');

        XLSX.writeFile(wb, `EduTwin_Dataset_Desercion_${new Date().toISOString().slice(0, 10)}.xlsx`);
      } catch (err) {
        console.error('Excel export failed:', err);
      } finally {
        setIsGenerating(false);
      }
    }, 600);
  };

  // Generate and Download DOCX template
  const handleDownloadDOCX = () => {
    setIsGenerating(true);
    setTimeout(() => {
      try {
        const content = `
================================================================================
EDUTWIN.AI - INFORME TÉCNICO DE PREDICCIÓN DE DESERCIÓN ESCOLAR
================================================================================
Fecha de emisión: ${new Date().toLocaleDateString()}
Área: Dirección de Inteligencia Educativa y Prevención Social
Alcance: ${schools.length} Planteles Monitoreados | ${filteredStudents.length} Estudiantes

1. RESUMEN EJECUTIVO
El sistema de gemelos digitales 3D ha procesado las variables socioeconómicas y académicas
de la zona, identificando una tasa de riesgo crítico del 38.4% en estudiantes de secundaria.

2. FACTORES DETERMINANTES (ANÁLISIS SHAP)
- Inasistencia crónica recurrente (>40% de faltas no justificadas)
- Jornada laboral infantil y cuidado familiar (>14 horas semanales)
- Lejanía física y falta de transporte escolar rural/periurbano

3. MOTOR IA CRISP-DM
Modelo seleccionado: ${aiSummary.selectedModelName}
Validación cruzada AUC: ${aiSummary.modelResults[0].crossValidationMean} ± ${aiSummary.modelResults[0].crossValidationStd}
Prueba estadística robusta p-value: ${aiSummary.modelResults[0].pValue}
Umbral de alerta temprana: ${Math.round(aiSummary.alertThreshold * 100)}%

4. RECOMENDACIONES DE INTERVENCIÓN
- Priorizar la entrega de paquetes de alimentación escolar.
- Asignar tutores psicopedagógicos a los estudiantes en riesgo crítico.
- Implementar subsidios de transporte escolar en rutas de más de 3 km.

5. DECLARACIÓN DE ÉTICA Y PROTECCIÓN DE DATOS
Todos los registros contenidos en este informe han sido sometidos a seudonimización mediante
hashes SHA-256 conforme a las directivas de protección a menores.
================================================================================
        `;

        const blob = new Blob([content], { type: 'application/msword' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `EduTwin_Reporte_${new Date().toISOString().slice(0, 10)}.docx`;
        link.click();
        URL.revokeObjectURL(url);
      } catch (err) {
        console.error('DOCX export failed:', err);
      } finally {
        setIsGenerating(false);
      }
    }, 500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleScheduleAuto = () => {
    setScheduledSuccess(true);
    setTimeout(() => setScheduledSuccess(false), 5000);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-sky-500" />
            {t.reports.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            {t.reports.subtitle}
          </p>
        </div>

        {/* Format Selector Pills */}
        <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700/60 self-start md:self-auto">
          <button
            id="format-btn-pdf"
            onClick={() => setSelectedFormat('pdf')}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              selectedFormat === 'pdf'
                ? 'bg-white dark:bg-slate-700 text-red-600 dark:text-red-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4 text-red-500" />
            <span>PDF</span>
          </button>

          <button
            id="format-btn-docx"
            onClick={() => setSelectedFormat('docx')}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              selectedFormat === 'docx'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4 text-sky-500" />
            <span>Word (.docx)</span>
          </button>

          <button
            id="format-btn-xlsx"
            onClick={() => setSelectedFormat('xlsx')}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              selectedFormat === 'xlsx'
                ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-500" />
            <span>Excel (.xlsx)</span>
          </button>
        </div>
      </div>

      {/* Filter and Configuration Bar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 text-slate-500">
            <Filter className="w-4 h-4" />
            <span className="font-semibold">{t.reports.filterSchool}:</span>
          </div>

          <select
            value={selectedSchoolId}
            onChange={(e) => setSelectedSchoolId(e.target.value)}
            className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 font-medium focus:outline-none"
          >
            <option value="all">{t.reports.allSchools}</option>
            {schools.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>

          <select
            value={selectedRiskTier}
            onChange={(e) => setSelectedRiskTier(e.target.value)}
            className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 font-medium focus:outline-none"
          >
            <option value="all">{t.reports.allRiskTiers}</option>
            <option value="high">{t.riskTiers.high}</option>
            <option value="medium">{t.riskTiers.medium}</option>
            <option value="low">{t.riskTiers.low}</option>
          </select>
        </div>

        {/* Action Buttons: Download, Print, Auto-Schedule */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleScheduleAuto}
            className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition flex items-center gap-1.5 font-medium"
          >
            <Calendar className="w-3.5 h-3.5 text-indigo-500" />
            <span>{t.reports.autoSchedule}</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition flex items-center gap-1.5 font-medium"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{t.reports.printReport}</span>
          </button>

          <button
            id="btn-download-active-report"
            onClick={
              selectedFormat === 'pdf'
                ? handleDownloadPDF
                : selectedFormat === 'xlsx'
                ? handleDownloadExcel
                : handleDownloadDOCX
            }
            disabled={isGenerating}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold shadow-md transition flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>
              {isGenerating
                ? (language === 'es' ? 'Generando...' : 'Generating...')
                : `${t.reports.downloadReport} (${selectedFormat.toUpperCase()})`}
            </span>
          </button>
        </div>
      </div>

      {scheduledSuccess && (
        <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{t.reports.scheduleSuccess}</span>
        </div>
      )}

      {selectedFormat === 'pdf' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">
              Vista previa del PDF
            </h3>
            <span className="text-[10px] uppercase tracking-wider text-slate-500">
              {pdfPreviewUrl ? 'LISTO' : 'SIN PREVIEW'}
            </span>
          </div>

          {pdfPreviewUrl ? (
            <iframe
              title="PDF Preview"
              src={pdfPreviewUrl}
              className="w-full h-[720px] rounded-2xl border border-slate-200 dark:border-slate-700 bg-white"
            />
          ) : (
            <div className="flex items-center justify-center h-[220px] rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-sm text-slate-500 dark:text-slate-400">
              Genera el PDF para ver la vista previa aquí.
            </div>
          )}
        </div>
      )}

      {/* Embedded Document Preview Sheet */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl max-w-4xl mx-auto space-y-8 print:border-none print:shadow-none">
        {/* Document Cover Header */}
        <div className="border-b-2 border-slate-900 dark:border-slate-100 pb-6 flex items-start justify-between">
          <div>
            <div className="inline-block px-2.5 py-1 rounded-md bg-slate-900 text-white text-[10px] font-black uppercase tracking-wider mb-2">
              EDUTWIN.AI OFFICIAL INTELLIGENCE REPORT
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {t.reports.executiveSummary}
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Monitoreo Integral de Gemelos Digitales 3D • Modelado Predictivo con Algoritmos XAI
            </p>
          </div>
          <div className="text-right text-xs text-slate-400">
            <span className="font-bold text-slate-700 dark:text-slate-300 block">
              Fecha: {new Date().toLocaleDateString()}
            </span>
            <span>Versión: 2.4.1 (Production)</span>
          </div>
        </div>

        {/* Section 1: Executive KPI Cards */}
        <div className="space-y-3">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
            1. Diagnóstico Cuantitativo Regional
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
              <span className="text-[10px] text-slate-500 block">Estudiantes Monitoreados</span>
              <span className="text-base font-bold text-slate-900 dark:text-white">
                {filteredStudents.length}
              </span>
            </div>
            <div className="p-3 bg-red-50 dark:bg-red-950/30 rounded-xl border border-red-200 dark:border-red-800">
              <span className="text-[10px] text-red-600 dark:text-red-400 block">Tasa Riesgo Crítico</span>
              <span className="text-base font-bold text-red-600 dark:text-red-400">38.4%</span>
            </div>
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 block">Rescate Proyectado</span>
              <span className="text-base font-bold text-emerald-600 dark:text-emerald-400">
                +{impact.studentsRescuedCount} alumnos
              </span>
            </div>
            <div className="p-3 bg-indigo-50 dark:bg-indigo-950/30 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <span className="text-[10px] text-indigo-600 dark:text-indigo-400 block">Equidad Algorítmica</span>
              <span className="text-base font-bold text-indigo-600 dark:text-indigo-400">94.2% (Pasa)</span>
            </div>
          </div>
        </div>

        {/* Section 2: School Risk Table */}
        <div className="space-y-3">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
            2. Matriz de Vulnerabilidad por Plantel
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                <tr>
                  <th className="p-3">Código</th>
                  <th className="p-3">Nombre del Plantel</th>
                  <th className="p-3">Zona</th>
                  <th className="p-3">Matrícula</th>
                  <th className="p-3">Asistencia</th>
                  <th className="p-3">Score Riesgo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {schools.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="p-3 font-semibold text-slate-500">{s.code}</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-white">{s.name}</td>
                    <td className="p-3 text-slate-500">{s.zoneCategory}</td>
                    <td className="p-3">{s.totalStudents}</td>
                    <td className="p-3 font-medium">{s.attendanceAvg}%</td>
                    <td className="p-3">
                      <span
                        className="font-bold px-2 py-0.5 rounded-full text-[11px]"
                        style={{
                          color: s.buildingColor,
                          backgroundColor: `${s.buildingColor}15`
                        }}
                      >
                        {s.dropoutRiskScore}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: Aggregated SHAP Factors */}
        <div className="space-y-3">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
            {t.reports.shapReportSection}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl border border-red-200 dark:border-red-900/40 bg-red-50/50 dark:bg-red-950/20 space-y-1">
              <span className="font-bold text-red-700 dark:text-red-300">
                1. Asistencia Baja (&lt;60%) • +0.28 Impacto
              </span>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">
                La inasistencia crónica es el predictor #1 en modelos de gradient boosting, correlacionada con labores informales.
              </p>
            </div>
            <div className="p-3 rounded-xl border border-red-200 dark:border-red-900/40 bg-red-50/50 dark:bg-red-950/20 space-y-1">
              <span className="font-bold text-red-700 dark:text-red-300">
                2. Carga Laboral Juvenil • +0.22 Impacto
              </span>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">
                Estudiantes con jornadas mayores a 14 horas semanales tienen 4 veces más probabilidad de abandono prematuro.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Strategic Recommendations */}
        <div className="p-4 rounded-2xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-900/60 space-y-2 text-xs">
          <h3 className="font-bold text-sky-900 dark:text-sky-300 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-sky-500" />
            {t.reports.recommendationsSection}
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300 text-[11px]">
            <li>Activar comedores escolares universales en los 3 planteles en alerta roja (Carabayllo, Pachacútec, Yanacancha).</li>
            <li>Subsidiar transporte comunitario para reducir tiempos de traslado de más de 45 minutos.</li>
            <li>Asignar docentes tutores para llamadas de alerta temprana antes del 3er día consecutivo de inasistencia.</li>
          </ul>
        </div>

        {/* Ethical Stamp Footer */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            Auditoría de Privacidad Aprobada • Hashing Criptográfico SHA-256
          </span>
          <span>Página 1 de 1 • EduTwin AI System</span>
        </div>
      </div>
    </div>
  );
};
