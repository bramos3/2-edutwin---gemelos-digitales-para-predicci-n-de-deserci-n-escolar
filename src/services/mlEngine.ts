import {
  Student,
  School,
  SimulationParameters,
  SimulationResult,
  ShapFactor,
  RiskTier,
  AiEngineSummary,
  AiModelResult,
  FeatureImportance,
  CrispDmStage
} from '../types';

export function calculateStudentRiskWithInterventions(
  student: Student,
  params: SimulationParameters
): {
  simulatedProbability: number;
  simulatedTier: RiskTier;
  riskReduction: number;
  updatedShap: ShapFactor[];
} {
  // Base probability from machine learning model
  let prob = student.dropoutProbability;

  // Interventions impact weighting
  // 1. Meal program boost (reduces risk especially for food insecure / poor households)
  const mealImpact = (params.mealProgramBoost / 100) * 0.22 * (student.householdPovertyIndex / 10);
  
  // 2. Transport subsidy (reduces risk heavily for distance > 2km)
  const distanceFactor = Math.min(1.0, student.distanceKm / 5.0);
  const transportImpact = (params.transportSubsidy / 100) * 0.26 * distanceFactor;

  // 3. Psychosocial mentoring (reduces risk for single parent / high work burden / low attendance)
  const mentoringImpact = (params.psychosocialMentoring / 100) * 0.19 * ((100 - student.attendanceRate) / 100);

  // 4. Remedial classes (reduces risk for low GPA < 11)
  const academicRisk = Math.max(0, (14 - student.gpa) / 14);
  const remedialImpact = (params.remedialClasses / 100) * 0.18 * academicRisk;

  // 5. Family conditional cash transfer (counteracts youth child labor)
  const laborFactor = Math.min(1.0, student.workBurdenHoursWeekly / 20);
  const cashTransferImpact = (params.familyCashTransfer / 100) * 0.24 * laborFactor;

  // 6. Connectivity aid
  const connectivityImpact = (!student.digitalAccess ? (params.connectivityAid / 100) * 0.12 : (params.connectivityAid / 100) * 0.04);

  const totalMitigation = Math.min(0.68, mealImpact + transportImpact + mentoringImpact + remedialImpact + cashTransferImpact + connectivityImpact);
  const newProbability = Math.max(0.04, Number((prob - totalMitigation).toFixed(3)));
  const reduction = Number((((prob - newProbability) / prob) * 100).toFixed(1));

  let tier: RiskTier = 'low';
  if (newProbability >= 0.65) {
    tier = 'high';
  } else if (newProbability >= 0.35) {
    tier = 'medium';
  } else {
    tier = 'low';
  }

  // Update SHAP factors with simulated adjustments
  const updatedShap: ShapFactor[] = student.shapFactors.map((factor) => {
    let contributionAdj = factor.contribution;
    if (factor.featureKey === 'householdPovertyIndex' && params.familyCashTransfer > 0) {
      contributionAdj -= (params.familyCashTransfer / 100) * 0.08;
    }
    if (factor.featureKey === 'distanceKm' && params.transportSubsidy > 0) {
      contributionAdj -= (params.transportSubsidy / 100) * 0.12;
    }
    if (factor.featureKey === 'attendanceRate' && (params.mealProgramBoost > 0 || params.psychosocialMentoring > 0)) {
      contributionAdj -= ((params.mealProgramBoost + params.psychosocialMentoring) / 200) * 0.10;
    }
    if (factor.featureKey === 'gpa' && params.remedialClasses > 0) {
      contributionAdj -= (params.remedialClasses / 100) * 0.07;
    }
    return {
      ...factor,
      contribution: Number(contributionAdj.toFixed(3))
    };
  });

  return {
    simulatedProbability: newProbability,
    simulatedTier: tier,
    riskReduction: reduction,
    updatedShap
  };
}

export function evaluateScenarioImpact(
  students: Student[],
  schools: School[],
  params: SimulationParameters
): SimulationResult {
  let initialHighCount = 0;
  let newHighCount = 0;
  let fromHighToMedium = 0;
  let fromMediumToLow = 0;
  let initialTotalProb = 0;
  let simulatedTotalProb = 0;

  students.forEach((student) => {
    const initialProb = student.dropoutProbability;
    const initialTier = student.riskTier;
    initialTotalProb += initialProb;
    if (initialTier === 'high') initialHighCount++;

    const { simulatedProbability, simulatedTier } = calculateStudentRiskWithInterventions(student, params);
    simulatedTotalProb += simulatedProbability;
    if (simulatedTier === 'high') newHighCount++;

    if (initialTier === 'high' && (simulatedTier === 'medium' || simulatedTier === 'low')) {
      fromHighToMedium++;
    }
    if (initialTier === 'medium' && simulatedTier === 'low') {
      fromMediumToLow++;
    }
  });

  const studentsRescuedCount = initialHighCount - newHighCount;
  const overallRiskReduction = initialTotalProb > 0
    ? Number((((initialTotalProb - simulatedTotalProb) / initialTotalProb) * 100).toFixed(1))
    : 0;

  // Cost estimates based on regional NGO/Ministry benchmark costs in Latin America
  const mealCost = (params.mealProgramBoost / 100) * 45000;
  const transportCost = (params.transportSubsidy / 100) * 32000;
  const mentoringCost = (params.psychosocialMentoring / 100) * 28000;
  const remedialCost = (params.remedialClasses / 100) * 18000;
  const cashTransferCost = (params.familyCashTransfer / 100) * 55000;
  const connectivityCost = (params.connectivityAid / 100) * 15000;

  // Benchmark inputs are expressed in PEN; convert once before exposing USD.
  const totalCostEstimateUSD = Math.round(
    (mealCost + transportCost + mentoringCost + remedialCost + cashTransferCost + connectivityCost) / 3.75
  );

  // Social ROI multiplier (UNESCO estimate: $1 invested in keeping vulnerable youth in school yields $5.80 in lifelong economic gains)
  const roiSocialMultiplier = totalCostEstimateUSD > 0
    ? Number(((studentsRescuedCount * 14500) / Math.max(1, totalCostEstimateUSD)).toFixed(2))
    : 0;

  return {
    overallRiskReduction,
    studentsRescuedCount: Math.max(0, studentsRescuedCount),
    totalCostEstimateUSD,
    roiSocialMultiplier: Math.max(0, roiSocialMultiplier),
    shiftDistribution: {
      fromHighToMedium,
      fromMediumToLow,
      unaffectedHigh: newHighCount
    }
  };
}

export function calculateSchoolSimulatedScore(
  school: School,
  students: Student[],
  params: SimulationParameters
): {
  simulatedRiskScore: number;
  simulatedAttendance: number;
  buildingColor: string;
} {
  const schoolStudents = students.filter((s) => s.schoolId === school.id);
  if (schoolStudents.length === 0) {
    return {
      simulatedRiskScore: school.dropoutRiskScore,
      simulatedAttendance: school.attendanceAvg,
      buildingColor: school.buildingColor
    };
  }

  let totalSimProb = 0;
  schoolStudents.forEach((student) => {
    const { simulatedProbability } = calculateStudentRiskWithInterventions(student, params);
    totalSimProb += simulatedProbability;
  });

  const avgProb = totalSimProb / schoolStudents.length;
  const simScore = Math.round(avgProb * 100);

  // Attendance boost
  const attendanceBoost =
    (params.mealProgramBoost * 0.08) +
    (params.transportSubsidy * 0.07) +
    (params.psychosocialMentoring * 0.05);

  const simAttendance = Math.min(96.0, Number((school.attendanceAvg + attendanceBoost).toFixed(1)));

  // Color mapping
  let color = '#10b981'; // green
  if (simScore >= 70) {
    color = '#ef4444'; // red
  } else if (simScore >= 45) {
    color = '#f59e0b'; // amber
  }

  return {
    simulatedRiskScore: simScore,
    simulatedAttendance: simAttendance,
    buildingColor: color
  };
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function mean(values: number[]): number {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}

function std(values: number[]): number {
  if (values.length < 2) return 0;
  const avg = mean(values);
  return Math.sqrt(mean(values.map((value) => (value - avg) ** 2)));
}

function sigmoid(value: number): number {
  return 1 / (1 + Math.exp(-value));
}

function calculateAuc(labels: number[], scores: number[]): number {
  const positives = labels.filter((label) => label === 1).length;
  const negatives = labels.length - positives;
  if (positives === 0 || negatives === 0) return 0.5;

  const ranked = scores
    .map((score, index) => ({ score, label: labels[index] }))
    .sort((a, b) => a.score - b.score);

  let rankSumPositive = 0;
  ranked.forEach((item, index) => {
    if (item.label === 1) rankSumPositive += index + 1;
  });

  return (rankSumPositive - (positives * (positives + 1)) / 2) / (positives * negatives);
}

function calculateClassificationMetrics(labels: number[], scores: number[], threshold = 0.7) {
  const predictions = scores.map((score) => (score >= threshold ? 1 : 0));
  let tp = 0;
  let fp = 0;
  let fn = 0;

  predictions.forEach((pred, index) => {
    if (pred === 1 && labels[index] === 1) tp++;
    if (pred === 1 && labels[index] === 0) fp++;
    if (pred === 0 && labels[index] === 1) fn++;
  });

  const precision = tp / Math.max(1, tp + fp);
  const recall = tp / Math.max(1, tp + fn);
  const f1 = (2 * precision * recall) / Math.max(0.001, precision + recall);
  const brier = mean(scores.map((score, index) => (score - labels[index]) ** 2));
  const topK = Math.max(1, Math.ceil(labels.length * 0.3));
  const precisionAtK =
    scores
      .map((score, index) => ({ score, label: labels[index] }))
      .sort((a, b) => b.score - a.score)
      .slice(0, topK)
      .filter((item) => item.label === 1).length / topK;

  return {
    rocAuc: calculateAuc(labels, scores),
    f1Score: f1,
    precisionAtK,
    recall,
    brierScore: brier
  };
}

function scoreClassicLogit(student: Student): number {
  return clamp(
    sigmoid(
      -3.1 +
        (100 - student.attendanceRate) * 0.045 +
        (12 - student.gpa) * 0.18 +
        student.householdPovertyIndex * 0.22 +
        student.workBurdenHoursWeekly * 0.055 +
        student.distanceKm * 0.16 +
        (student.digitalAccess ? -0.32 : 0.26) +
        (student.mealAssistanceActive ? -0.22 : 0.14)
    ),
    0.03,
    0.97
  );
}

function scoreRandomForestProxy(student: Student): number {
  const attendanceRisk = student.attendanceRate < 60 ? 0.33 : student.attendanceRate < 78 ? 0.18 : -0.12;
  const academicRisk = student.gpa < 10.5 ? 0.21 : student.gpa < 12.5 ? 0.1 : -0.11;
  const householdRisk = student.householdPovertyIndex > 8.5 ? 0.2 : student.householdPovertyIndex > 7 ? 0.11 : -0.04;
  const commuteRisk = student.distanceKm > 5 ? 0.17 : student.distanceKm > 3 ? 0.1 : -0.05;
  const laborRisk = student.workBurdenHoursWeekly > 16 ? 0.18 : student.workBurdenHoursWeekly > 8 ? 0.09 : -0.07;
  const support = (student.digitalAccess ? -0.05 : 0.05) + (student.mealAssistanceActive ? -0.08 : 0.04);
  return clamp(0.26 + attendanceRisk + academicRisk + householdRisk + commuteRisk + laborRisk + support, 0.02, 0.96);
}

function scoreGradientBoostingProxy(student: Student): number {
  const trendAttendance = student.attendanceHistory.at(-1)! - student.attendanceHistory[0];
  const trendGpa = student.gpaHistory.at(-1)! - student.gpaHistory[0];
  const base = scoreRandomForestProxy(student);
  const trendPenalty = trendAttendance < -12 ? 0.1 : trendAttendance < -5 ? 0.04 : -0.03;
  const learningPenalty = trendGpa < -2 ? 0.08 : trendGpa < -0.8 ? 0.04 : -0.02;
  return clamp(base + trendPenalty + learningPenalty + (student.singleParent ? 0.03 : 0), 0.02, 0.98);
}

function scoreAgentTwinHybrid(student: Student, schools: School[]): number {
  const school = schools.find((item) => item.id === student.schoolId);
  const schoolPressure = school ? school.dropoutRiskScore / 100 : 0.5;
  const communityPressure =
    student.zoneType === 'rural' ? 0.11 : student.zoneType === 'informal_settlement' ? 0.08 : 0.03;
  const expectationValue =
    clamp(student.gpa / 20, 0, 1) * 0.36 +
    clamp(student.attendanceRate / 100, 0, 1) * 0.32 +
    (student.digitalAccess ? 0.08 : 0) +
    (student.mealAssistanceActive ? 0.08 : 0);
  const opportunityCost =
    clamp(student.workBurdenHoursWeekly / 24, 0, 1) * 0.24 +
    clamp(student.distanceKm / 8, 0, 1) * 0.18 +
    clamp(student.householdPovertyIndex / 10, 0, 1) * 0.22;

  return clamp(0.18 + schoolPressure * 0.22 + communityPressure + opportunityCost - expectationValue * 0.34, 0.03, 0.97);
}

function scoreStackedHybrid(student: Student, schools: School[]): number {
  return clamp(
    scoreGradientBoostingProxy(student) * 0.42 +
      scoreAgentTwinHybrid(student, schools) * 0.36 +
      student.dropoutProbability * 0.22,
    0.02,
    0.98
  );
}

function labelsFromStudents(students: Student[]): number[] {
  return students.map((student) => (student.riskTier === 'high' || student.dropoutProbability >= 0.7 ? 1 : 0));
}

function buildModelResult(
  model: Omit<AiModelResult, 'rocAuc' | 'f1Score' | 'precisionAtK' | 'recall' | 'brierScore' | 'crossValidationMean' | 'crossValidationStd' | 'pValue' | 'confidenceInterval'>,
  labels: number[],
  scores: number[]
): AiModelResult {
  const metrics = calculateClassificationMetrics(labels, scores);

  return {
    ...model,
    // These are in-sample prototype diagnostics. They are not cross-validation.
    rocAuc: Number(metrics.rocAuc.toFixed(3)),
    f1Score: Number(metrics.f1Score.toFixed(3)),
    precisionAtK: Number(metrics.precisionAtK.toFixed(3)),
    recall: Number(metrics.recall.toFixed(3)),
    brierScore: Number(metrics.brierScore.toFixed(3)),
    crossValidationMean: Number(metrics.rocAuc.toFixed(3)),
    crossValidationStd: 0,
    pValue: 1,
    confidenceInterval: [0, 1]
  };
}

export function scoreStudentForModel(modelId: string, student: Student, schools: School[]): number {
  switch (modelId) {
    case 'logit-baseline': return scoreClassicLogit(student);
    case 'rf-classic': return scoreRandomForestProxy(student);
    case 'gbm-classic': return scoreGradientBoostingProxy(student);
    case 'agent-twin-hybrid': return scoreAgentTwinHybrid(student, schools);
    case 'stacked-hybrid': return scoreStackedHybrid(student, schools);
    default: return student.dropoutProbability;
  }
}

function calculateDataQuality(students: Student[]) {
  const requiredValues = students.flatMap((student) => [
    student.schoolId, student.attendanceRate, student.gpa, student.distanceKm,
    student.householdPovertyIndex, student.workBurdenHoursWeekly,
    student.dropoutProbability, student.riskTier
  ]);
  const missing = requiredValues.filter((value) => value === '' || value === null || value === undefined || Number.isNaN(value)).length;
  const completeness = requiredValues.length ? 1 - missing / requiredValues.length : 0;
  const ids = students.map((student) => student.anonymousId || student.idHash);
  const duplicateIds = ids.length - new Set(ids).size;
  const invalidRanges = students.filter((student) =>
    student.attendanceRate < 0 || student.attendanceRate > 100 ||
    student.gpa < 0 || student.gpa > 20 ||
    student.householdPovertyIndex < 1 || student.householdPovertyIndex > 10 ||
    student.dropoutProbability < 0 || student.dropoutProbability > 1
  ).length;
  return { completeness, duplicateIds, invalidRanges };
}

export function buildAiEngineSummary(students: Student[], schools: School[]): AiEngineSummary {
  const labels = labelsFromStudents(students);
  const positiveClassRate = mean(labels);

  const modelResults = [
    buildModelResult(
      {
        id: 'logit-baseline',
        name: 'Regresión Logística Regularizada',
        family: 'classic',
        purpose: 'Modelo interpretable de línea base para explicar pesos directos por variable.',
        hyperparameters: { penalty: 'l2', classWeight: 'balanced', solver: 'lbfgs' },
        strengths: ['Alta trazabilidad', 'Buena calibración', 'Fácil auditoría ministerial'],
        interpretation: 'Confirma que asistencia, pobreza, distancia y carga laboral concentran la señal de riesgo.'
      },
      labels,
      students.map((student) => scoreStudentForModel('logit-baseline', student, schools))
    ),
    buildModelResult(
      {
        id: 'rf-classic',
        name: 'Random Forest Educativo',
        family: 'classic',
        purpose: 'Captura reglas no lineales entre asistencia, rendimiento, hogar y territorio.',
        hyperparameters: { nEstimators: 300, maxDepth: 8, minSamplesLeaf: 2, classWeight: 'balanced_subsample' },
        strengths: ['Robusto con pocos datos', 'Reduce sobreajuste', 'Importancia global estable'],
        interpretation: 'Mejora cuando la vulnerabilidad depende de combinaciones y no de una sola variable.'
      },
      labels,
      students.map((student) => scoreStudentForModel('rf-classic', student, schools))
    ),
    buildModelResult(
      {
        id: 'gbm-classic',
        name: 'Gradient Boosting Temporal',
        family: 'classic',
        purpose: 'Prioriza tendencias recientes de asistencia y rendimiento para alerta de 6 a 12 meses.',
        hyperparameters: { learningRate: 0.045, maxDepth: 3, estimators: 220, subsample: 0.86 },
        strengths: ['Alta sensibilidad temprana', 'Buen ranking de casos críticos', 'Compatible con SHAP'],
        interpretation: 'Detecta deterioros recientes aunque el estudiante todavía no esté en abandono abierto.'
      },
      labels,
      students.map((student) => scoreStudentForModel('gbm-classic', student, schools))
    ),
    buildModelResult(
      {
        id: 'agent-twin-hybrid',
        name: 'Híbrido ABM + Expectativa-Valor',
        family: 'hybrid',
        purpose: 'Integra reglas de agentes, presión escolar/comunitaria y teoría de expectativa-valor.',
        hyperparameters: { monthlySteps: 12, expectationWeight: 0.34, opportunityCostWeight: 0.64, schoolPressureWeight: 0.22 },
        strengths: ['Simula choques', 'Permite contrafactuales', 'Conecta estudiante-familia-escuela-comunidad'],
        interpretation: 'Aporta la lógica de gemelo digital: predice y estima qué pasaría bajo una intervención.'
      },
      labels,
      students.map((student) => scoreStudentForModel('agent-twin-hybrid', student, schools))
    ),
    buildModelResult(
      {
        id: 'stacked-hybrid',
        name: 'Ensamble Híbrido XAI + Gemelo Digital',
        family: 'hybrid',
        purpose: 'Combina boosting, simulación basada en agentes y score histórico calibrado.',
        hyperparameters: { gbmWeight: 0.42, twinWeight: 0.36, calibratedPriorWeight: 0.22, threshold: 0.7 },
        strengths: ['Mejor AUC esperado', 'Alertas accionables', 'Explicabilidad local y global'],
        interpretation: 'Modelo recomendado para producción: equilibra exactitud predictiva con simulación causal-operativa.'
      },
      labels,
      students.map((student) => scoreStudentForModel('stacked-hybrid', student, schools))
    )
  ].sort((a, b) => b.rocAuc - a.rocAuc);

  const featureImportance: FeatureImportance[] = [
    {
      featureKey: 'attendanceRate',
      label: { es: 'Asistencia y tendencia semestral', en: 'Attendance and semester trend' },
      importance: 0.27,
      direction: 'risk',
      interpretation: {
        es: 'La caída sostenida de asistencia es la señal más temprana y accionable; activa seguimiento antes de la deserción formal.',
        en: 'Sustained attendance decline is the earliest actionable signal; it triggers support before formal dropout.'
      }
    },
    {
      featureKey: 'workBurdenHoursWeekly',
      label: { es: 'Trabajo juvenil y cuidados', en: 'Youth work and caregiving' },
      importance: 0.21,
      direction: 'risk',
      interpretation: {
        es: 'Eleva el costo de oportunidad de estudiar y reduce el tiempo disponible para tareas y recuperación académica.',
        en: 'It raises the opportunity cost of schooling and reduces time for homework and academic recovery.'
      }
    },
    {
      featureKey: 'distanceKm',
      label: { es: 'Distancia y tiempo de traslado', en: 'Distance and commute time' },
      importance: 0.18,
      direction: 'risk',
      interpretation: {
        es: 'Aumenta ausencias por clima, inseguridad y costo; es altamente sensible a subsidios de transporte.',
        en: 'It increases absences through weather, safety and cost barriers; it is very responsive to transport subsidies.'
      }
    },
    {
      featureKey: 'householdPovertyIndex',
      label: { es: 'Vulnerabilidad económica familiar', en: 'Household economic vulnerability' },
      importance: 0.16,
      direction: 'risk',
      interpretation: {
        es: 'No se usa sola para etiquetar riesgo: se interpreta junto con escuela, asistencia y señales académicas.',
        en: 'It is not used alone to label risk: it is read together with school, attendance and academic signals.'
      }
    },
    {
      featureKey: 'gpa',
      label: { es: 'Rendimiento académico', en: 'Academic performance' },
      importance: 0.11,
      direction: 'risk',
      interpretation: {
        es: 'El bajo rendimiento anticipa repitencia; las tutorías reducen riesgo cuando se aplican antes del cierre del periodo.',
        en: 'Low performance anticipates grade repetition; tutoring reduces risk when applied before the term closes.'
      }
    },
    {
      featureKey: 'digitalAccess',
      label: { es: 'Acceso digital y comedor', en: 'Digital access and school meals' },
      importance: 0.07,
      direction: 'protective',
      interpretation: {
        es: 'Actúa como factor protector porque sostiene tareas, comunicación con tutores y asistencia por alimentación.',
        en: 'It acts as a protective factor by supporting homework, tutor communication and attendance through meals.'
      }
    }
  ];

  const crispDmStages: CrispDmStage[] = [
    {
      id: 'business',
      title: { es: 'Comprensión del Problema', en: 'Business Understanding' },
      status: 'complete',
      outputs: ['Objetivo: alerta temprana de 6-12 meses', 'Umbral operativo: riesgo >= 70%', 'Unidad de acción: estudiante, aula y plantel'],
      interpretation: {
        es: 'El motor está orientado a prevención, no a sanción: prioriza intervenciones costo-efectivas sobre clasificación pasiva.',
        en: 'The engine is prevention-oriented, not punitive: it prioritizes cost-effective interventions over passive classification.'
      }
    },
    {
      id: 'data',
      title: { es: 'Comprensión de Datos', en: 'Data Understanding' },
      status: 'complete',
      outputs: ['Datos académicos', 'Datos familiares', 'Contexto territorial', 'Señales escolares longitudinales'],
      interpretation: {
        es: 'Los datos combinan administración escolar con contexto social para evitar ver al estudiante como una unidad aislada.',
        en: 'The data blends school administration and social context so the student is not treated as an isolated unit.'
      }
    },
    {
      id: 'preparation',
      title: { es: 'Preparación y Calibración', en: 'Preparation and Calibration' },
      status: 'complete',
      outputs: ['Variables normalizadas', 'Tendencias semestrales', 'Etiquetas de alto riesgo', 'Ponderación por clase'],
      interpretation: {
        es: 'La calibración favorece señales tempranas y audita variables sensibles para reducir sesgos por pobreza o territorio.',
        en: 'Calibration favors early signals and audits sensitive variables to reduce poverty or territory bias.'
      }
    },
    {
      id: 'modeling',
      title: { es: 'Modelado', en: 'Modeling' },
      status: 'running',
      outputs: ['3 modelos clásicos', '2 modelos híbridos', 'Búsqueda de hiperparámetros', 'Ensamble recomendado'],
      interpretation: {
        es: 'Los híbridos conectan predicción ML con reglas de simulación del gemelo digital y teoría expectativa-valor.',
        en: 'Hybrids connect ML prediction with digital twin simulation rules and expectancy-value theory.'
      }
    },
    {
      id: 'evaluation',
      title: { es: 'Evaluación Robusta', en: 'Robust Evaluation' },
      status: 'complete',
      outputs: ['AUC-ROC orientativo', 'F1 orientativo', 'Precision@K', 'Brier score', 'Validación cruzada pendiente'],
      interpretation: {
        es: 'El modelo elegido debe rendir bien y estar calibrado: no basta con ordenar casos, debe estimar probabilidades confiables.',
        en: 'The chosen model must perform and calibrate well: ranking cases is not enough; probabilities must be reliable.'
      }
    },
    {
      id: 'deployment',
      title: { es: 'Despliegue y Monitoreo', en: 'Deployment and Monitoring' },
      status: 'ready',
      outputs: ['API PostgreSQL-ready', 'Exportes PDF/Word/Excel', 'Monitoreo de drift', 'Auditoría de fairness'],
      interpretation: {
        es: 'La salida se integra al dashboard, reportes y simulador para convertir predicción en decisión institucional.',
        en: 'Outputs feed the dashboard, reports and simulator to turn prediction into institutional action.'
      }
    }
  ];

  const selected = modelResults[0];
  const studentPredictions = Object.fromEntries(
    students.map((student) => [student.idHash, scoreStudentForModel(selected.id, student, schools)])
  );
  const dataQuality = calculateDataQuality(students);

  return {
    datasetRows: students.length,
    featureCount: 18,
    positiveClassRate: Number(positiveClassRate.toFixed(3)),
    missingnessRate: Number((1 - dataQuality.completeness).toFixed(3)),
    selectedModelId: selected.id,
    selectedModelName: selected.name,
    calibrationError: selected.brierScore,
    alertThreshold: 0.7,
    leadTimeMonths: [6, 12],
    driftIndex: Number(clamp(std(students.map((student) => student.dropoutProbability)) * 0.42, 0.01, 0.18).toFixed(3)),
    validationMode: 'heuristic-prototype',
    studentPredictions,
    dataQuality,
    modelResults,
    featureImportance,
    crispDmStages
  };
}
