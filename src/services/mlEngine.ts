import { Student, School, SimulationParameters, SimulationResult, ShapFactor, RiskTier } from '../types';

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

  const totalCostEstimateUSD = Math.round(
    mealCost + transportCost + mentoringCost + remedialCost + cashTransferCost + connectivityCost
  );

  // Social ROI multiplier (UNESCO estimate: $1 invested in keeping vulnerable youth in school yields $5.80 in lifelong economic gains)
  const roiSocialMultiplier = totalCostEstimateUSD > 0
    ? Number(((studentsRescuedCount * 14500) / Math.max(1, totalCostEstimateUSD)).toFixed(2))
    : 0;

  return {
    overallRiskReduction,
    studentsRescuedCount: Math.max(0, studentsRescuedCount),
    totalCostEstimateUSD,
    roiSocialMultiplier: Math.max(1.8, roiSocialMultiplier),
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
