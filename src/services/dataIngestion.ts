import * as XLSX from 'xlsx';
import { Classroom, School, Student, RiskTier } from '../types';

export interface ImportedDataset {
  students: Student[];
  schools: School[];
  fileName: string;
  rowCount: number;
  warnings: string[];
}

type RawRow = Record<string, unknown>;

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const normalizeKey = (key: string) => key.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');

function numberValue(row: RawRow, aliases: string[], fallback: number): number {
  const entry = Object.entries(row).find(([key]) => aliases.includes(normalizeKey(key)));
  if (!entry) return fallback;
  const numeric = Number(String(entry[1]).replace(',', '.').replace('%', '').trim());
  return Number.isFinite(numeric) ? numeric : fallback;
}

function textValue(row: RawRow, aliases: string[], fallback: string): string {
  const entry = Object.entries(row).find(([key]) => aliases.includes(normalizeKey(key)));
  return entry?.[1] === undefined || entry?.[1] === null ? fallback : String(entry[1]).trim() || fallback;
}

function boolValue(row: RawRow, aliases: string[], fallback: boolean): boolean {
  const value = textValue(row, aliases, fallback ? 'true' : 'false').toLowerCase();
  return ['true', '1', 'si', 'sí', 'yes', 'y', 'activo', 'active'].includes(value);
}

function tierFromProbability(probability: number): RiskTier {
  return probability >= 0.65 ? 'high' : probability >= 0.35 ? 'medium' : 'low';
}

function inferProbability(row: RawRow, attendance: number, gpa: number, distance: number, poverty: number, workHours: number): number {
  const explicit = numberValue(row, ['dropoutprobability', 'dropoutrisk', 'riesgodesercion', 'probabilidaddesercion', 'riskprobability'], NaN);
  if (Number.isFinite(explicit)) return clamp(explicit > 1 ? explicit / 100 : explicit, 0.01, 0.99);
  const risk = 0.42 + (70 - attendance) * 0.008 + (10 - gpa) * 0.025 + distance * 0.018 + poverty * 0.018 + workHours * 0.009;
  return clamp(risk, 0.03, 0.97);
}

function classroomFor(school: School, classroomId: string, classroomName: string, index: number): Classroom {
  const existing = school.classrooms.find((classroom) => classroom.id === classroomId || classroom.name === classroomName);
  if (existing) return existing;
  return {
    id: classroomId || `${school.id}-imported-${index + 1}`,
    schoolId: school.id,
    grade: 1,
    section: 'A',
    name: classroomName || `Aula importada ${index + 1}`,
    floor: 1,
    studentCount: 0,
    riskScore: 0,
    attendanceAvg: 0,
    alertCount: 0,
    teacherName: 'Docente importado',
    position3D: { x: -3.5 + (index % 2) * 3.7, y: 0.8 + Math.floor(index / 2) * 1.7, z: -2.5 },
    dimensions3D: { width: 3.2, height: 1.6, depth: 2.4 }
  };
}

export function normalizeImportedRows(rows: RawRow[], existingSchools: School[], fileName: string): ImportedDataset {
  const warnings: string[] = [];
  const schoolMap = new Map<string, School>();
  const students: Student[] = [];

  rows.forEach((row, index) => {
    const sourceSchool = textValue(row, ['schoolname', 'school', 'colegio', 'institucioneducativa', 'ie', 'plantel'], existingSchools[0]?.name || 'Plantel importado');
    const existingSchool = existingSchools.find((school) => school.name.toLowerCase() === sourceSchool.toLowerCase() || school.code.toLowerCase() === sourceSchool.toLowerCase());
    const schoolKey = existingSchool?.id || sourceSchool.toLowerCase();
    if (!schoolMap.has(schoolKey)) {
      const base = existingSchool || existingSchools[0];
      schoolMap.set(schoolKey, {
        ...(base || {
          id: `school-imported-${schoolMap.size + 1}`,
          code: `IE-IMP-${schoolMap.size + 1}`,
          name: sourceSchool,
          zone: 'Zona importada',
          zoneCategory: 'periurban',
          latitude: -12.05,
          longitude: -77.05,
          educationLevel: 'Secundaria',
          totalStudents: 0,
          dropoutRiskScore: 0,
          attendanceAvg: 0,
          socioeconomicIndex: 5,
          mealPlanActive: false,
          infrastructureScore: 50,
          connectivityScore: 50,
          classrooms: [],
          position3D: { x: 0, y: 0, z: 0 },
          buildingColor: '#38bdf8',
          riskDistribution: { low: 0, medium: 0, high: 0 }
        }),
        id: existingSchool?.id || `school-imported-${schoolMap.size + 1}`,
        code: existingSchool?.code || `IE-IMP-${schoolMap.size + 1}`,
        name: sourceSchool,
        classrooms: existingSchool?.classrooms ? [...existingSchool.classrooms] : []
      });
    }

    const school = schoolMap.get(schoolKey)!;
    const classroomName = textValue(row, ['classname', 'classroom', 'aula', 'seccion', 'section'], 'Aula importada');
    const classroomId = textValue(row, ['classroomid', 'aulaid', 'sectionid'], '');
    const classroom = classroomFor(school, classroomId, classroomName, index);
    if (!school.classrooms.some((item) => item.id === classroom.id)) school.classrooms.push(classroom);

    const attendance = clamp(numberValue(row, ['attendancerate', 'attendance', 'asistencia', 'asistenciapromedio'], 75), 0, 100);
    const gpa = clamp(numberValue(row, ['gpa', 'nota', 'promedio', 'rendimiento'], 12), 0, 20);
    const distance = Math.max(0, numberValue(row, ['distancekm', 'distance', 'distancia', 'distanciakm'], 3));
    const poverty = clamp(numberValue(row, ['householdpovertyindex', 'povertyindex', 'poverty', 'pobreza', 'indicesocioeconomico'], 5), 1, 10);
    const workHours = Math.max(0, numberValue(row, ['workburdenhoursweekly', 'workhours', 'horastrabajo', 'cargalaboral'], 0));
    const probability = inferProbability(row, attendance, gpa, distance, poverty, workHours);
    const tier = tierFromProbability(probability);
    const anonymousId = textValue(row, ['idhash', 'anonymousid', 'studentid', 'student', 'id', 'codigo'], `IMP-${String(index + 1).padStart(4, '0')}`);
    const genderText = textValue(row, ['gender', 'genero', 'sexo'], 'Other').toUpperCase();
    const gender = genderText.startsWith('M') ? 'M' : genderText.startsWith('F') ? 'F' : 'Other';
    const student: Student = {
      idHash: `import-${index}-${anonymousId}`,
      anonymousId,
      schoolId: school.id,
      schoolName: school.name,
      classroomId: classroom.id,
      classroomName: classroom.name,
      grade: Math.max(1, Math.round(numberValue(row, ['grade', 'grado', 'year'], 1))),
      section: textValue(row, ['section', 'seccion'], 'A').slice(0, 2),
      age: Math.round(numberValue(row, ['age', 'edad'], 14)),
      gender,
      zoneType: school.zoneCategory,
      attendanceRate: attendance,
      attendanceHistory: [attendance, attendance, attendance, attendance, attendance, attendance],
      gpa,
      gpaHistory: [gpa, gpa, gpa, gpa, gpa, gpa],
      distanceKm: distance,
      travelTimeMinutes: Math.round(numberValue(row, ['traveltimeminutes', 'traveltime', 'tiempotraslado'], distance * 12)),
      householdPovertyIndex: poverty,
      siblingsCount: Math.max(0, Math.round(numberValue(row, ['siblingscount', 'siblings', 'hermanos'], 1))),
      workBurdenHoursWeekly: workHours,
      singleParent: boolValue(row, ['singleparent', 'singleparenthousehold', 'monoparental'], false),
      digitalAccess: boolValue(row, ['digitalaccess', 'internet', 'accesodigital', 'conectividad'], true),
      mealAssistanceActive: boolValue(row, ['mealassistanceactive', 'mealassistance', 'comedor', 'alimentacion'], false),
      dropoutProbability: probability,
      riskTier: tier,
      shapFactors: [],
      alerts: [],
      consentStatus: 'pending',
      activeInterventions: [],
      avatarStyle: { color: tier === 'high' ? '#ef4444' : tier === 'medium' ? '#f59e0b' : '#10b981', modelType: 'stylized_avatar' }
    };
    students.push(student);
  });

  if (!students.length) warnings.push('No se encontraron filas válidas en el archivo.');
  const importedSchools = [...schoolMap.values()].map((school) => {
    const schoolStudents = students.filter((student) => student.schoolId === school.id);
    const avgAttendance = schoolStudents.reduce((sum, student) => sum + student.attendanceRate, 0) / Math.max(1, schoolStudents.length);
    const avgRisk = schoolStudents.reduce((sum, student) => sum + student.dropoutProbability, 0) / Math.max(1, schoolStudents.length);
    const high = schoolStudents.filter((student) => student.riskTier === 'high').length;
    const medium = schoolStudents.filter((student) => student.riskTier === 'medium').length;
    const low = schoolStudents.length - high - medium;
    return {
      ...school,
      totalStudents: schoolStudents.length,
      attendanceAvg: Number(avgAttendance.toFixed(1)),
      dropoutRiskScore: Math.round(avgRisk * 100),
      riskDistribution: { low, medium, high },
      classrooms: school.classrooms.map((classroom) => {
        const classroomStudents = schoolStudents.filter((student) => student.classroomId === classroom.id);
        const risk = classroomStudents.reduce((sum, student) => sum + student.dropoutProbability, 0) / Math.max(1, classroomStudents.length);
        return { ...classroom, studentCount: classroomStudents.length, riskScore: Math.round(risk * 100), attendanceAvg: Number((classroomStudents.reduce((sum, student) => sum + student.attendanceRate, 0) / Math.max(1, classroomStudents.length)).toFixed(1)), alertCount: classroomStudents.filter((student) => student.riskTier === 'high').length };
      })
    };
  });
  return { students, schools: importedSchools, fileName, rowCount: students.length, warnings };
}

export async function importDatasetFile(file: File, existingSchools: School[]): Promise<ImportedDataset> {
  const workbook = XLSX.read(await file.arrayBuffer(), { type: 'array', cellDates: true });
  const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json<RawRow>(firstSheet, { defval: '' });
  return normalizeImportedRows(rows, existingSchools, file.name);
}

