export type Language = 'es' | 'en';
export type ThemeMode = 'dark' | 'light';
export type UserRole = 'admin' | 'director' | 'counselor' | 'researcher';
export type TwinLevel = 'macro' | 'meso' | 'micro';
export type RiskTier = 'low' | 'medium' | 'high';

export interface ShapFactor {
  featureKey: string;
  featureName: { es: string; en: string };
  value: number | string;
  contribution: number; // Positive increases risk, negative decreases risk
  baseline: number;
  description: { es: string; en: string };
}

export interface StudentAlert {
  id: string;
  date: string;
  type: 'attendance' | 'academic' | 'socioeconomic' | 'behavioral';
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: { es: string; en: string };
  description: { es: string; en: string };
  resolved: boolean;
}

export interface Student {
  idHash: string;
  anonymousId: string;
  schoolId: string;
  schoolName: string;
  classroomId: string;
  classroomName: string;
  grade: number;
  section: string;
  age: number;
  gender: 'M' | 'F' | 'Other';
  zoneType: 'periurban' | 'rural' | 'informal_settlement';
  attendanceRate: number; // 0 - 100
  attendanceHistory: number[]; // Last 6 months
  gpa: number; // 0 - 20
  gpaHistory: number[]; // Last 6 evaluation periods
  distanceKm: number;
  travelTimeMinutes: number;
  householdPovertyIndex: number; // 1 - 10 (10 highest vulnerability)
  siblingsCount: number;
  workBurdenHoursWeekly: number;
  singleParent: boolean;
  digitalAccess: boolean;
  mealAssistanceActive: boolean;
  dropoutProbability: number; // 0.00 - 1.00
  riskTier: RiskTier;
  shapFactors: ShapFactor[];
  alerts: StudentAlert[];
  consentStatus: 'signed' | 'pending' | 'revoked';
  consentDate?: string;
  activeInterventions: string[];
  avatarStyle: {
    color: string;
    modelType: 'stylized_avatar';
  };
}

export interface Classroom {
  id: string;
  schoolId: string;
  grade: number;
  section: string;
  name: string;
  floor: number;
  studentCount: number;
  riskScore: number; // 0 - 100
  attendanceAvg: number; // 0 - 100
  alertCount: number;
  teacherName: string;
  position3D: { x: number; y: number; z: number };
  dimensions3D: { width: number; height: number; depth: number };
}

export interface School {
  id: string;
  code: string;
  name: string;
  zone: string;
  zoneCategory: 'periurban' | 'rural' | 'informal_settlement';
  latitude: number;
  longitude: number;
  educationLevel: 'Primaria' | 'Secundaria' | 'Integrada';
  totalStudents: number;
  dropoutRiskScore: number; // 0 - 100
  attendanceAvg: number; // 0 - 100
  socioeconomicIndex: number; // 1 - 10
  mealPlanActive: boolean;
  infrastructureScore: number; // 0 - 100
  connectivityScore: number; // 0 - 100
  classrooms: Classroom[];
  position3D: { x: number; y: number; z: number };
  buildingColor: string;
  riskDistribution: {
    low: number;
    medium: number;
    high: number;
  };
}

export interface SimulationParameters {
  mealProgramBoost: number; // 0 - 100%
  transportSubsidy: number; // 0 - 100%
  psychosocialMentoring: number; // 0 - 100%
  remedialClasses: number; // 0 - 100%
  familyCashTransfer: number; // 0 - 100%
  connectivityAid: number; // 0 - 100%
}

export interface SimulationResult {
  overallRiskReduction: number; // e.g. -18.4%
  studentsRescuedCount: number;
  totalCostEstimateUSD: number;
  roiSocialMultiplier: number;
  shiftDistribution: {
    fromHighToMedium: number;
    fromMediumToLow: number;
    unaffectedHigh: number;
  };
}

export type CrispDmStageId =
  | 'business'
  | 'data'
  | 'preparation'
  | 'modeling'
  | 'evaluation'
  | 'deployment';

export type AiModelFamily = 'classic' | 'hybrid';

export interface AiModelResult {
  id: string;
  name: string;
  family: AiModelFamily;
  purpose: string;
  rocAuc: number;
  f1Score: number;
  precisionAtK: number;
  recall: number;
  brierScore: number;
  crossValidationMean: number;
  crossValidationStd: number;
  pValue: number;
  confidenceInterval: [number, number];
  hyperparameters: Record<string, string | number | boolean>;
  strengths: string[];
  interpretation: string;
}

export interface FeatureImportance {
  featureKey: string;
  label: { es: string; en: string };
  importance: number;
  direction: 'risk' | 'protective';
  interpretation: { es: string; en: string };
}

export interface CrispDmStage {
  id: CrispDmStageId;
  title: { es: string; en: string };
  status: 'complete' | 'running' | 'ready';
  outputs: string[];
  interpretation: { es: string; en: string };
}

export interface AiEngineSummary {
  datasetRows: number;
  featureCount: number;
  positiveClassRate: number;
  missingnessRate: number;
  selectedModelId: string;
  selectedModelName: string;
  calibrationError: number;
  alertThreshold: number;
  leadTimeMonths: [number, number];
  driftIndex: number;
  validationMode: 'heuristic-prototype' | 'trained';
  studentPredictions: Record<string, number>;
  dataQuality: {
    completeness: number;
    duplicateIds: number;
    invalidRanges: number;
  };
  modelResults: AiModelResult[];
  featureImportance: FeatureImportance[];
  crispDmStages: CrispDmStage[];
}

export interface FairnessMetric {
  category: string;
  metricName: string;
  value: number;
  benchmark: number;
  status: 'passed' | 'warning' | 'alert';
  disparityRatio: number;
  description: { es: string; en: string };
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  contextLevel?: TwinLevel;
  targetEntityId?: string;
  suggestedActions?: { label: { es: string; en: string }; actionType: string; payload?: any }[];
}

export interface ReportConfig {
  format: 'pdf' | 'docx' | 'xlsx';
  schoolId: string;
  gradeFilter: string;
  riskTierFilter: string;
  timeframe: string;
  includeShap: boolean;
  includeHeatmaps: boolean;
  includeFairnessAudit: boolean;
  includeSimulations: boolean;
}
