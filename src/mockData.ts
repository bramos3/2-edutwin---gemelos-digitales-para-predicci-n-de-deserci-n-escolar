import { School, Student, FairnessMetric } from './types';

export const INITIAL_SCHOOLS: School[] = [
  {
    id: 'school-1',
    code: 'IE-2084',
    name: 'I.E. 2084 Las Lomas de Carabayllo',
    zone: 'Carabayllo - Sector San Pedro',
    zoneCategory: 'informal_settlement',
    latitude: -11.8482,
    longitude: -77.0321,
    educationLevel: 'Secundaria',
    totalStudents: 480,
    dropoutRiskScore: 78,
    attendanceAvg: 68.4,
    socioeconomicIndex: 9.2,
    mealPlanActive: false,
    infrastructureScore: 42,
    connectivityScore: 35,
    buildingColor: '#ef4444', // High risk red
    position3D: { x: -8, y: 0, z: -4 },
    riskDistribution: { low: 22, medium: 33, high: 45 },
    classrooms: [
      {
        id: 'cls-1-1',
        schoolId: 'school-1',
        grade: 1,
        section: 'A',
        name: 'Aula 1° A - Secundaria',
        floor: 1,
        studentCount: 32,
        riskScore: 82,
        attendanceAvg: 64.2,
        alertCount: 14,
        teacherName: 'Prof. Marco Antonio Quispe',
        position3D: { x: -3.5, y: 0.8, z: -2.5 },
        dimensions3D: { width: 3.2, height: 1.6, depth: 2.4 }
      },
      {
        id: 'cls-1-2',
        schoolId: 'school-1',
        grade: 2,
        section: 'B',
        name: 'Aula 2° B - Secundaria',
        floor: 1,
        studentCount: 30,
        riskScore: 74,
        attendanceAvg: 70.1,
        alertCount: 9,
        teacherName: 'Prof. Rosa Elena Mendoza',
        position3D: { x: 0.2, y: 0.8, z: -2.5 },
        dimensions3D: { width: 3.2, height: 1.6, depth: 2.4 }
      },
      {
        id: 'cls-1-3',
        schoolId: 'school-1',
        grade: 3,
        section: 'A',
        name: 'Aula 3° A - Secundaria',
        floor: 2,
        studentCount: 28,
        riskScore: 86,
        attendanceAvg: 61.5,
        alertCount: 18,
        teacherName: 'Prof. Carlos Alberto Silva',
        position3D: { x: -3.5, y: 2.5, z: -2.5 },
        dimensions3D: { width: 3.2, height: 1.6, depth: 2.4 }
      },
      {
        id: 'cls-1-4',
        schoolId: 'school-1',
        grade: 4,
        section: 'A',
        name: 'Aula 4° A - Secundaria',
        floor: 2,
        studentCount: 26,
        riskScore: 69,
        attendanceAvg: 74.0,
        alertCount: 7,
        teacherName: 'Prof. Gladys Huamán',
        position3D: { x: 0.2, y: 2.5, z: -2.5 },
        dimensions3D: { width: 3.2, height: 1.6, depth: 2.4 }
      }
    ]
  },
  {
    id: 'school-2',
    code: 'IE-5128',
    name: 'I.E. 5128 Sagrado Corazón - Pachacútec',
    zone: 'Ventanilla - Asentamiento Humano',
    zoneCategory: 'informal_settlement',
    latitude: -11.8791,
    longitude: -77.1354,
    educationLevel: 'Secundaria',
    totalStudents: 520,
    dropoutRiskScore: 71,
    attendanceAvg: 71.2,
    socioeconomicIndex: 8.8,
    mealPlanActive: true,
    infrastructureScore: 48,
    connectivityScore: 40,
    buildingColor: '#f97316', // High/Med amber-orange
    position3D: { x: 6, y: 0, z: -6 },
    riskDistribution: { low: 28, medium: 36, high: 36 },
    classrooms: [
      {
        id: 'cls-2-1',
        schoolId: 'school-2',
        grade: 1,
        section: 'B',
        name: 'Aula 1° B - Ciencias',
        floor: 1,
        studentCount: 34,
        riskScore: 68,
        attendanceAvg: 73.5,
        alertCount: 8,
        teacherName: 'Prof. Jorge Luis Flores',
        position3D: { x: -3.5, y: 0.8, z: -2.5 },
        dimensions3D: { width: 3.2, height: 1.6, depth: 2.4 }
      },
      {
        id: 'cls-2-2',
        schoolId: 'school-2',
        grade: 3,
        section: 'B',
        name: 'Aula 3° B - Letras',
        floor: 1,
        studentCount: 31,
        riskScore: 79,
        attendanceAvg: 67.8,
        alertCount: 13,
        teacherName: 'Prof. Carmen Teresa Díaz',
        position3D: { x: 0.2, y: 0.8, z: -2.5 },
        dimensions3D: { width: 3.2, height: 1.6, depth: 2.4 }
      },
      {
        id: 'cls-2-3',
        schoolId: 'school-2',
        grade: 5,
        section: 'A',
        name: 'Aula 5° A - Promoción',
        floor: 2,
        studentCount: 29,
        riskScore: 65,
        attendanceAvg: 75.0,
        alertCount: 6,
        teacherName: 'Prof. Hernán Velásquez',
        position3D: { x: -3.5, y: 2.5, z: -2.5 },
        dimensions3D: { width: 3.2, height: 1.6, depth: 2.4 }
      }
    ]
  },
  {
    id: 'school-3',
    code: 'IE-6066',
    name: 'I.E. 6066 Villa El Salvador - Sector 2',
    zone: 'Villa El Salvador - Periurbana',
    zoneCategory: 'periurban',
    latitude: -12.2133,
    longitude: -76.9388,
    educationLevel: 'Integrada',
    totalStudents: 610,
    dropoutRiskScore: 54,
    attendanceAvg: 79.5,
    socioeconomicIndex: 7.1,
    mealPlanActive: true,
    infrastructureScore: 62,
    connectivityScore: 58,
    buildingColor: '#eab308', // Medium yellow
    position3D: { x: -5, y: 0, z: 6 },
    riskDistribution: { low: 46, medium: 34, high: 20 },
    classrooms: [
      {
        id: 'cls-3-1',
        schoolId: 'school-3',
        grade: 2,
        section: 'A',
        name: 'Aula 2° A - Integrada',
        floor: 1,
        studentCount: 35,
        riskScore: 52,
        attendanceAvg: 80.2,
        alertCount: 4,
        teacherName: 'Prof. Ana María Ruiz',
        position3D: { x: -3.5, y: 0.8, z: -2.5 },
        dimensions3D: { width: 3.2, height: 1.6, depth: 2.4 }
      },
      {
        id: 'cls-3-2',
        schoolId: 'school-3',
        grade: 4,
        section: 'B',
        name: 'Aula 4° B - Integrada',
        floor: 1,
        studentCount: 32,
        riskScore: 56,
        attendanceAvg: 78.4,
        alertCount: 5,
        teacherName: 'Prof. Manuel Benítez',
        position3D: { x: 0.2, y: 0.8, z: -2.5 },
        dimensions3D: { width: 3.2, height: 1.6, depth: 2.4 }
      }
    ]
  },
  {
    id: 'school-4',
    code: 'IE-80034',
    name: 'I.E. 80034 Yanacancha Andina',
    zone: 'Sánchez Carrión - Comunidad Rural',
    zoneCategory: 'rural',
    latitude: -7.8124,
    longitude: -78.0491,
    educationLevel: 'Secundaria',
    totalStudents: 210,
    dropoutRiskScore: 84,
    attendanceAvg: 59.8,
    socioeconomicIndex: 9.6,
    mealPlanActive: false,
    infrastructureScore: 32,
    connectivityScore: 18,
    buildingColor: '#dc2626', // Critical red
    position3D: { x: 7, y: 0, z: 4 },
    riskDistribution: { low: 14, medium: 28, high: 58 },
    classrooms: [
      {
        id: 'cls-4-1',
        schoolId: 'school-4',
        grade: 1,
        section: 'U',
        name: 'Aula 1°-2° Multigrado',
        floor: 1,
        studentCount: 24,
        riskScore: 88,
        attendanceAvg: 57.0,
        alertCount: 16,
        teacherName: 'Prof. Santos Gabriel Condori',
        position3D: { x: -3.5, y: 0.8, z: -2.5 },
        dimensions3D: { width: 3.2, height: 1.6, depth: 2.4 }
      },
      {
        id: 'cls-4-2',
        schoolId: 'school-4',
        grade: 3,
        section: 'U',
        name: 'Aula 3°-5° Multigrado',
        floor: 1,
        studentCount: 22,
        riskScore: 80,
        attendanceAvg: 62.5,
        alertCount: 12,
        teacherName: 'Prof. Marilú Chaccara',
        position3D: { x: 0.2, y: 0.8, z: -2.5 },
        dimensions3D: { width: 3.2, height: 1.6, depth: 2.4 }
      }
    ]
  },
  {
    id: 'school-5',
    code: 'IE-1182',
    name: 'I.E. 1182 El Bosque - San Juan de Lurigancho',
    zone: 'SJL - Quebrada Canto Grande',
    zoneCategory: 'informal_settlement',
    latitude: -11.9567,
    longitude: -76.9942,
    educationLevel: 'Secundaria',
    totalStudents: 680,
    dropoutRiskScore: 63,
    attendanceAvg: 75.1,
    socioeconomicIndex: 8.1,
    mealPlanActive: true,
    infrastructureScore: 56,
    connectivityScore: 48,
    buildingColor: '#f59e0b', // Amber
    position3D: { x: 0, y: 0, z: -9 },
    riskDistribution: { low: 36, medium: 39, high: 25 },
    classrooms: [
      {
        id: 'cls-5-1',
        schoolId: 'school-5',
        grade: 2,
        section: 'C',
        name: 'Aula 2° C - Secundaria',
        floor: 1,
        studentCount: 36,
        riskScore: 66,
        attendanceAvg: 73.0,
        alertCount: 9,
        teacherName: 'Prof. Walter Zambrano',
        position3D: { x: -3.5, y: 0.8, z: -2.5 },
        dimensions3D: { width: 3.2, height: 1.6, depth: 2.4 }
      }
    ]
  },
  {
    id: 'school-6',
    code: 'IE-3095',
    name: 'I.E. 3095 Licenciados - Comas',
    zone: 'Comas - Altura Pampa de Collique',
    zoneCategory: 'periurban',
    latitude: -11.9123,
    longitude: -77.0456,
    educationLevel: 'Secundaria',
    totalStudents: 490,
    dropoutRiskScore: 38,
    attendanceAvg: 88.2,
    socioeconomicIndex: 6.2,
    mealPlanActive: true,
    infrastructureScore: 78,
    connectivityScore: 72,
    buildingColor: '#10b981', // Emerald green
    position3D: { x: 0, y: 0, z: 8 },
    riskDistribution: { low: 62, medium: 28, high: 10 },
    classrooms: [
      {
        id: 'cls-6-1',
        schoolId: 'school-6',
        grade: 3,
        section: 'A',
        name: 'Aula 3° A - Polivalente',
        floor: 1,
        studentCount: 30,
        riskScore: 35,
        attendanceAvg: 89.4,
        alertCount: 2,
        teacherName: 'Prof. Silvia Poma',
        position3D: { x: -3.5, y: 0.8, z: -2.5 },
        dimensions3D: { width: 3.2, height: 1.6, depth: 2.4 }
      }
    ]
  }
];

export const INITIAL_STUDENTS: Student[] = [
  {
    idHash: 'a8f3b29c1e4d',
    anonymousId: '#STD-7489X',
    schoolId: 'school-1',
    schoolName: 'I.E. 2084 Las Lomas de Carabayllo',
    classroomId: 'cls-1-1',
    classroomName: 'Aula 1° A - Secundaria',
    grade: 1,
    section: 'A',
    age: 14,
    gender: 'M',
    zoneType: 'informal_settlement',
    attendanceRate: 54.0,
    attendanceHistory: [78, 70, 62, 58, 52, 54],
    gpa: 9.8,
    gpaHistory: [12.4, 11.2, 10.5, 9.8, 9.2, 9.8],
    distanceKm: 4.8,
    travelTimeMinutes: 55,
    householdPovertyIndex: 9.4,
    siblingsCount: 4,
    workBurdenHoursWeekly: 18,
    singleParent: true,
    digitalAccess: false,
    mealAssistanceActive: false,
    dropoutProbability: 0.86,
    riskTier: 'high',
    consentStatus: 'signed',
    consentDate: '2026-03-15',
    activeInterventions: [],
    avatarStyle: { color: '#ef4444', modelType: 'stylized_avatar' },
    shapFactors: [
      {
        featureKey: 'attendanceRate',
        featureName: { es: 'Baja Asistencia (<60%)', en: 'Low Attendance (<60%)' },
        value: '54.0%',
        contribution: +0.28,
        baseline: 0.22,
        description: {
          es: 'Faltas recurrentes en los días lunes y viernes por jornadas de trabajo informal.',
          en: 'Recurrent absences on Mondays and Fridays due to informal labor duties.'
        }
      },
      {
        featureKey: 'householdPovertyIndex',
        featureName: { es: 'Extrema Vulnerabilidad Hogar', en: 'Extreme Household Vulnerability' },
        value: '9.4/10',
        contribution: +0.22,
        baseline: 0.22,
        description: {
          es: 'Ingreso per cápita bajo la línea de pobreza extrema, sin red de seguridad.',
          en: 'Per capita income below extreme poverty line, lacking safety net.'
        }
      },
      {
        featureKey: 'workBurdenHoursWeekly',
        featureName: { es: 'Carga Laboral Juvenil (18h/sem)', en: 'Youth Labor Burden (18h/wk)' },
        value: '18 horas/sem',
        contribution: +0.19,
        baseline: 0.22,
        description: {
          es: 'Trabajo como ayudante de mototaxi y comercio ambulatorio para sustento familiar.',
          en: 'Works in informal transportation and street retail to support family.'
        }
      },
      {
        featureKey: 'distanceKm',
        featureName: { es: 'Distancia y Traslado Difícil (4.8km)', en: 'Distance & Difficult Commute (4.8km)' },
        value: '4.8 km / 55 min',
        contribution: +0.14,
        baseline: 0.22,
        description: {
          es: 'Camino peatonal no asfaltado en ladera sin transporte público directo.',
          en: 'Unpaved hillside pedestrian path without direct public transit.'
        }
      },
      {
        featureKey: 'gpa',
        featureName: { es: 'Riesgo de Repitencia (GPA < 11)', en: 'Grade Retention Risk (GPA < 11)' },
        value: '9.8 / 20',
        contribution: +0.09,
        baseline: 0.22,
        description: {
          es: 'Dificultades en comprensión lectora y álgebra elemental.',
          en: 'Struggles in reading comprehension and basic algebra.'
        }
      },
      {
        featureKey: 'protectiveFactor',
        featureName: { es: 'Vínculo con Tutor Escolar (-)', en: 'Tutor Connection Factor (-)' },
        value: 'Positivo',
        contribution: -0.06,
        baseline: 0.22,
        description: {
          es: 'Asiste a entrevistas con el docente tutor cuando es convocado.',
          en: 'Attends counselor interviews when called.'
        }
      }
    ],
    alerts: [
      {
        id: 'alt-101',
        date: '2026-08-22',
        type: 'attendance',
        severity: 'critical',
        title: { es: 'Inasistencia consecutiva de 4 días', en: '4 consecutive days of absence' },
        description: {
          es: 'El estudiante no asiste desde el martes. Padre no responde llamadas.',
          en: 'Student has not attended since Tuesday. Guardian uncontactable.'
        },
        resolved: false
      },
      {
        id: 'alt-102',
        date: '2026-08-14',
        type: 'socioeconomic',
        severity: 'high',
        title: { es: 'Reporte de trabajo infantil en horario escolar', en: 'Report of child labor during school hours' },
        description: {
          es: 'Vecinos reportan que atiende puesto familiar en el mercado local.',
          en: 'Community reports student working at market stall.'
        },
        resolved: false
      }
    ]
  },
  {
    idHash: 'e3d4c7810b5f',
    anonymousId: '#STD-8821B',
    schoolId: 'school-1',
    schoolName: 'I.E. 2084 Las Lomas de Carabayllo',
    classroomId: 'cls-1-3',
    classroomName: 'Aula 3° A - Secundaria',
    grade: 3,
    section: 'A',
    age: 15,
    gender: 'F',
    zoneType: 'informal_settlement',
    attendanceRate: 58.5,
    attendanceHistory: [82, 75, 68, 64, 60, 58.5],
    gpa: 10.4,
    gpaHistory: [13.1, 12.0, 11.5, 10.8, 10.2, 10.4],
    distanceKm: 3.5,
    travelTimeMinutes: 40,
    householdPovertyIndex: 8.9,
    siblingsCount: 3,
    workBurdenHoursWeekly: 14,
    singleParent: true,
    digitalAccess: false,
    mealAssistanceActive: false,
    dropoutProbability: 0.81,
    riskTier: 'high',
    consentStatus: 'signed',
    consentDate: '2026-03-18',
    activeInterventions: [],
    avatarStyle: { color: '#ef4444', modelType: 'stylized_avatar' },
    shapFactors: [
      {
        featureKey: 'workBurdenHoursWeekly',
        featureName: { es: 'Cuidado de Hermanos Menores (14h/sem)', en: 'Childcare Burden for Younger Siblings' },
        value: '14 horas/sem',
        contribution: +0.24,
        baseline: 0.22,
        description: {
          es: 'Responsable del cuidado y alimentación de 3 hermanos mientras madre trabaja.',
          en: 'Responsible for feeding and caring for 3 siblings while mother works.'
        }
      },
      {
        featureKey: 'attendanceRate',
        featureName: { es: 'Deserción Temporal / Faltas Frecuentes', en: 'Chronic Absenteeism' },
        value: '58.5%',
        contribution: +0.21,
        baseline: 0.22,
        description: {
          es: 'Faltas repetidas en primeras horas de la mañana.',
          en: 'Frequent morning tardiness and absences.'
        }
      },
      {
        featureKey: 'digitalAccess',
        featureName: { es: 'Brecha Digital / Cero Conectividad', en: 'Digital Exclusion / No Internet' },
        value: 'Sin Internet',
        contribution: +0.16,
        baseline: 0.22,
        description: {
          es: 'Sin teléfono inteligente propio ni computadora para tareas escolares.',
          en: 'No dedicated smartphone or computer for school homework.'
        }
      }
    ],
    alerts: [
      {
        id: 'alt-201',
        date: '2026-08-25',
        type: 'academic',
        severity: 'high',
        title: { es: 'Incumplimiento reiterado de entregas en 3 materias', en: 'Missed assignments in 3 subjects' },
        description: {
          es: 'Sin posibilidad de entregar trabajos digitales de ciencias y comunicación.',
          en: 'Unable to submit digital assignments in science and language.'
        },
        resolved: false
      }
    ]
  },
  {
    idHash: 'c7b19a024fe8',
    anonymousId: '#STD-4209K',
    schoolId: 'school-4',
    schoolName: 'I.E. 80034 Yanacancha Andina',
    classroomId: 'cls-4-1',
    classroomName: 'Aula 1°-2° Multigrado',
    grade: 2,
    section: 'U',
    age: 14,
    gender: 'M',
    zoneType: 'rural',
    attendanceRate: 51.2,
    attendanceHistory: [68, 62, 55, 54, 49, 51.2],
    gpa: 8.9,
    gpaHistory: [11.0, 10.2, 9.5, 9.0, 8.7, 8.9],
    distanceKm: 7.2,
    travelTimeMinutes: 90,
    householdPovertyIndex: 9.8,
    siblingsCount: 5,
    workBurdenHoursWeekly: 24,
    singleParent: false,
    digitalAccess: false,
    mealAssistanceActive: false,
    dropoutProbability: 0.91,
    riskTier: 'high',
    consentStatus: 'signed',
    consentDate: '2026-03-10',
    activeInterventions: [],
    avatarStyle: { color: '#dc2626', modelType: 'stylized_avatar' },
    shapFactors: [
      {
        featureKey: 'distanceKm',
        featureName: { es: 'Distancia Extrema Rural (7.2 km caminata)', en: 'Extreme Rural Distance (7.2 km walk)' },
        value: '7.2 km / 90 min',
        contribution: +0.32,
        baseline: 0.22,
        description: {
          es: 'Caminata de 1h30m en senderos de puna con bajas temperaturas y lluvia.',
          en: '1h30m walk on highland trails with severe cold and rain.'
        }
      },
      {
        featureKey: 'workBurdenHoursWeekly',
        featureName: { es: 'Labores Agrícolas Estacionales (24h/sem)', en: 'Seasonal Agricultural Work (24h/wk)' },
        value: '24 horas/sem',
        contribution: +0.27,
        baseline: 0.22,
        description: {
          es: 'Participa en cosecha y pastoreo de ganado familiar.',
          en: 'Participates in harvest and livestock herding.'
        }
      },
      {
        featureKey: 'householdPovertyIndex',
        featureName: { es: 'Inseguridad Alimentaria Severa', en: 'Severe Food Insecurity' },
        value: '9.8/10',
        contribution: +0.20,
        baseline: 0.22,
        description: {
          es: 'Falta de desayuno nutritivo causa fatiga y falta de concentración en clase.',
          en: 'Lack of nutritious breakfast causes fatigue in class.'
        }
      }
    ],
    alerts: [
      {
        id: 'alt-301',
        date: '2026-08-20',
        type: 'attendance',
        severity: 'critical',
        title: { es: 'Alerta de deserción inminente por época de siembra', en: 'Imminent dropout alert due to planting season' },
        description: {
          es: 'Familia comunicó que el menor dejará la escuela temporalmente para trabajar el campo.',
          en: 'Family stated student will pause schooling to work in field.'
        },
        resolved: false
      }
    ]
  },
  {
    idHash: 'f4128a99de01',
    anonymousId: '#STD-5510M',
    schoolId: 'school-2',
    schoolName: 'I.E. 5128 Sagrado Corazón - Pachacútec',
    classroomId: 'cls-2-2',
    classroomName: 'Aula 3° B - Letras',
    grade: 3,
    section: 'B',
    age: 15,
    gender: 'M',
    zoneType: 'informal_settlement',
    attendanceRate: 72.0,
    attendanceHistory: [88, 82, 78, 75, 71, 72],
    gpa: 11.8,
    gpaHistory: [14.0, 13.2, 12.5, 12.0, 11.5, 11.8],
    distanceKm: 2.1,
    travelTimeMinutes: 25,
    householdPovertyIndex: 7.5,
    siblingsCount: 2,
    workBurdenHoursWeekly: 8,
    singleParent: false,
    digitalAccess: true,
    mealAssistanceActive: true,
    dropoutProbability: 0.52,
    riskTier: 'medium',
    consentStatus: 'signed',
    consentDate: '2026-03-20',
    activeInterventions: ['Comedor Escolar QaliWarma'],
    avatarStyle: { color: '#f59e0b', modelType: 'stylized_avatar' },
    shapFactors: [
      {
        featureKey: 'attendanceRate',
        featureName: { es: 'Descenso en Asistencia Último Mes', en: 'Recent Attendance Drop' },
        value: '72.0%',
        contribution: +0.14,
        baseline: 0.22,
        description: {
          es: 'Faltas esporádicas en días de evaluación.',
          en: 'Occasional absences on exam days.'
        }
      },
      {
        featureKey: 'mealAssistanceActive',
        featureName: { es: 'Beneficiario de Comedor Escolar (-)', en: 'School Meal Beneficiary (-)' },
        value: 'Activo',
        contribution: -0.15,
        baseline: 0.22,
        description: {
          es: 'El comedor escolar asegura asistencia y nutrición regular.',
          en: 'School cafeteria ensures regular attendance and nutrition.'
        }
      },
      {
        featureKey: 'digitalAccess',
        featureName: { es: 'Acceso a Celular Familiar (-)', en: 'Access to Family Phone (-)' },
        value: 'Conectado',
        contribution: -0.08,
        baseline: 0.22,
        description: {
          es: 'Recibe material de estudio vía mensajería instantánea.',
          en: 'Receives study materials via instant messaging.'
        }
      }
    ],
    alerts: [
      {
        id: 'alt-401',
        date: '2026-08-10',
        type: 'academic',
        severity: 'medium',
        title: { es: 'Riesgo de desaprobación en Matemáticas', en: 'Risk of failing Mathematics' },
        description: {
          es: 'Requiere reforzamiento en fracciones y ecuaciones de 1er grado.',
          en: 'Needs tutoring in basic algebra and fractions.'
        },
        resolved: true
      }
    ]
  },
  {
    idHash: '7a19ff33b1e9',
    anonymousId: '#STD-2190L',
    schoolId: 'school-3',
    schoolName: 'I.E. 6066 Villa El Salvador - Sector 2',
    classroomId: 'cls-3-1',
    classroomName: 'Aula 2° A - Integrada',
    grade: 2,
    section: 'A',
    age: 14,
    gender: 'F',
    zoneType: 'periurban',
    attendanceRate: 85.0,
    attendanceHistory: [92, 90, 88, 86, 84, 85],
    gpa: 14.5,
    gpaHistory: [15.2, 14.8, 14.6, 14.2, 14.0, 14.5],
    distanceKm: 1.2,
    travelTimeMinutes: 15,
    householdPovertyIndex: 6.2,
    siblingsCount: 1,
    workBurdenHoursWeekly: 0,
    singleParent: false,
    digitalAccess: true,
    mealAssistanceActive: true,
    dropoutProbability: 0.16,
    riskTier: 'low',
    consentStatus: 'signed',
    consentDate: '2026-03-12',
    activeInterventions: ['Comedor Escolar', 'Taller de Liderazgo Estudiantil'],
    avatarStyle: { color: '#10b981', modelType: 'stylized_avatar' },
    shapFactors: [
      {
        featureKey: 'attendanceRate',
        featureName: { es: 'Alta Asistencia Regular (>85%) (-)', en: 'High Regular Attendance (>85%) (-)' },
        value: '85.0%',
        contribution: -0.22,
        baseline: 0.22,
        description: {
          es: 'Asistencia constante y puntualidad destacada.',
          en: 'Consistent attendance and punctual behavior.'
        }
      },
      {
        featureKey: 'distanceKm',
        featureName: { es: 'Cercanía al Plantel (1.2 km) (-)', en: 'Proximity to School (1.2 km) (-)' },
        value: '1.2 km / 15 min',
        contribution: -0.14,
        baseline: 0.22,
        description: {
          es: 'Acceso peatonal seguro y corto sin costo de transporte.',
          en: 'Short safe pedestrian access with zero transport cost.'
        }
      },
      {
        featureKey: 'gpa',
        featureName: { es: 'Buen Rendimiento Académico (-)', en: 'Good Academic Performance (-)' },
        value: '14.5 / 20',
        contribution: -0.12,
        baseline: 0.22,
        description: {
          es: 'Promedio destacado con participación activa en proyectos.',
          en: 'High GPA with active project engagement.'
        }
      }
    ],
    alerts: []
  },
  {
    idHash: 'bb924018ca72',
    anonymousId: '#STD-9034P',
    schoolId: 'school-6',
    schoolName: 'I.E. 3095 Licenciados - Comas',
    classroomId: 'cls-6-1',
    classroomName: 'Aula 3° A - Polivalente',
    grade: 3,
    section: 'A',
    age: 15,
    gender: 'F',
    zoneType: 'periurban',
    attendanceRate: 92.4,
    attendanceHistory: [95, 94, 93, 91, 92, 92.4],
    gpa: 16.2,
    gpaHistory: [16.0, 16.5, 16.0, 16.2, 16.4, 16.2],
    distanceKm: 0.8,
    travelTimeMinutes: 10,
    householdPovertyIndex: 5.5,
    siblingsCount: 2,
    workBurdenHoursWeekly: 0,
    singleParent: false,
    digitalAccess: true,
    mealAssistanceActive: true,
    dropoutProbability: 0.08,
    riskTier: 'low',
    consentStatus: 'signed',
    consentDate: '2026-03-14',
    activeInterventions: ['Beca de Excelencia', 'Club de Robótica Escolar'],
    avatarStyle: { color: '#10b981', modelType: 'stylized_avatar' },
    shapFactors: [
      {
        featureKey: 'attendanceRate',
        featureName: { es: 'Asistencia Ejemplar (92.4%) (-)', en: 'Exemplary Attendance (92.4%) (-)' },
        value: '92.4%',
        contribution: -0.28,
        baseline: 0.22,
        description: {
          es: 'Cero inasistencias injustificadas en el año lectivo.',
          en: 'Zero unexcused absences during academic year.'
        }
      },
      {
        featureKey: 'householdStability',
        featureName: { es: 'Entorno Familiar Estable (-)', en: 'Stable Family Environment (-)' },
        value: 'Bajo Riesgo',
        contribution: -0.18,
        baseline: 0.22,
        description: {
          es: 'Padres con empleo formal y acompañamiento educativo activo.',
          en: 'Guardians in formal employment with active educational support.'
        }
      }
    ],
    alerts: []
  }
];

export const INITIAL_FAIRNESS_METRICS: FairnessMetric[] = [
  {
    category: 'Género / Gender',
    metricName: 'Disparate Impact Ratio (DIR) M/F',
    value: 0.94,
    benchmark: 0.80,
    status: 'passed',
    disparityRatio: 0.94,
    description: {
      es: 'La tasa de predicción positiva para estudiantes mujeres vs varones cumple el estándar de las 4/5 partes (DIR >= 0.80).',
      en: 'Positive prediction rate between female and male students satisfies the 4/5ths standard (DIR >= 0.80).'
    }
  },
  {
    category: 'Género / Gender',
    metricName: 'Equalized Odds Difference',
    value: 0.034,
    benchmark: 0.05,
    status: 'passed',
    disparityRatio: 0.96,
    description: {
      es: 'La tasa de falsos positivos (FPR) y falsos negativos (FNR) entre géneros difiere en menos de 3.4 puntos porcentuales.',
      en: 'FPR and FNR differences between genders stay under 3.4 percentage points.'
    }
  },
  {
    category: 'Zona Geográfica / Geographic Zone',
    metricName: 'Rural vs. Periurbana Fairness Parity',
    value: 0.89,
    benchmark: 0.80,
    status: 'passed',
    disparityRatio: 0.89,
    description: {
      es: 'Los pesos predictivos ponderan adecuadamente los factores de lejanía física sin estigmatizar escuelas rurales.',
      en: 'Predictive weights properly balance rural commute factors without penalizing rural schools unfairly.'
    }
  },
  {
    category: 'Nivel Socioeconómico / Socioeconomic Tier',
    metricName: 'Demographic Parity Index',
    value: 0.91,
    benchmark: 0.85,
    status: 'passed',
    disparityRatio: 0.91,
    description: {
      es: 'El modelo no clasifica desproporcionadamente en alto riesgo únicamente por condición de extrema pobreza sin factores escolares.',
      en: 'The model avoids disproportionate high-risk classification based purely on poverty without academic/attendance factors.'
    }
  },
  {
    category: 'Privacidad / Privacy & Ethics',
    metricName: 'Índice de Anonimización Criptográfica',
    value: 1.0,
    benchmark: 1.0,
    status: 'passed',
    disparityRatio: 1.0,
    description: {
      es: '100% de los registros de estudiantes visualizados en el gemelo 3D cuentan con identificadores hash unidireccionales.',
      en: '100% of student records rendered in the 3D twin use one-way cryptographic hash identifiers.'
    }
  }
];
