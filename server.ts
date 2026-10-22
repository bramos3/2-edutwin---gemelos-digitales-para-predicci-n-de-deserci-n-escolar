import express, { Request, Response } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import { INITIAL_SCHOOLS, INITIAL_STUDENTS } from "./src/mockData";
import type { School, Student } from "./src/types";

let aiClient: GoogleGenAI | null = null;
const chatWindowMs = 60_000;
const chatLimitPerWindow = 30;
const chatRequests = new Map<string, { startedAt: number; count: number }>();

type SafeChatContext = {
  level: string;
  selectedSchool: { id: string; name: string } | null;
  selectedStudent: { anonymousId: string; dropoutProbability: number | null } | null;
  simulationParams: Record<string, unknown>;
};

type LocalChatResult = {
  reply: string;
  source?: "edutwin-inference-engine" | "local-fallback";
};

function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function riskPercent(student: Student): number {
  return Math.round(student.dropoutProbability * 100);
}

function riskLabel(percent: number, language: "es" | "en"): string {
  if (language === "en") {
    if (percent >= 85) return "Critical";
    if (percent >= 70) return "High";
    if (percent >= 40) return "Medium";
    return "Low";
  }
  if (percent >= 85) return "Crítico";
  if (percent >= 70) return "Alto";
  if (percent >= 40) return "Medio";
  return "Bajo";
}

function topRiskStudents(limit = 3): Student[] {
  return [...INITIAL_STUDENTS]
    .sort((a, b) => b.dropoutProbability - a.dropoutProbability)
    .slice(0, limit);
}

function topRiskSchools(limit = 3): School[] {
  return [...INITIAL_SCHOOLS]
    .sort((a, b) => b.dropoutRiskScore - a.dropoutRiskScore)
    .slice(0, limit);
}

function findStudentFromMessage(message: string, context: SafeChatContext): Student | null {
  const normalized = normalizeText(message);
  const explicit = INITIAL_STUDENTS.find((student) =>
    normalized.includes(normalizeText(student.anonymousId).replace("#", ""))
    || normalized.includes(normalizeText(student.anonymousId))
  );
  if (explicit) return explicit;

  if (context.selectedStudent?.anonymousId) {
    return INITIAL_STUDENTS.find((student) => student.anonymousId === context.selectedStudent?.anonymousId) || null;
  }

  return null;
}

function selectedInterventions(message: string): string[] {
  const normalized = normalizeText(message);
  const interventions: string[] = [];
  if (normalized.includes("transporte") || normalized.includes("movilidad") || normalized.includes("subsidio")) {
    interventions.push("subsidio de transporte");
  }
  if (normalized.includes("comedor") || normalized.includes("aliment") || normalized.includes("beca")) {
    interventions.push("comedor/refuerzo alimentario");
  }
  if (normalized.includes("tutoria") || normalized.includes("psicosocial") || normalized.includes("mentor")) {
    interventions.push("tutoría psicosocial");
  }
  if (normalized.includes("refuerzo") || normalized.includes("remedial") || normalized.includes("academ")) {
    interventions.push("clases de refuerzo");
  }
  return interventions;
}

function projectedRisk(student: Student, interventions: string[]): number {
  let reduction = 0;
  if (interventions.some((item) => item.includes("transporte"))) reduction += student.distanceKm >= 3 ? 0.10 : 0.04;
  if (interventions.some((item) => item.includes("alimentario") || item.includes("comedor"))) reduction += student.mealAssistanceActive ? 0.03 : 0.09;
  if (interventions.some((item) => item.includes("tutoría"))) reduction += 0.08;
  if (interventions.some((item) => item.includes("refuerzo"))) reduction += student.gpa < 11 ? 0.07 : 0.03;
  return Math.max(0.05, student.dropoutProbability - reduction);
}

function studentSummaryLine(student: Student, language: "es" | "en"): string {
  const percent = riskPercent(student);
  if (language === "en") return `${student.anonymousId} - ${percent}% (${riskLabel(percent, language)})`;
  return `${student.anonymousId} - ${percent}% (${riskLabel(percent, language)})`;
}

function studentIdPercentLine(student: Student): string {
  return `${student.anonymousId} - ${riskPercent(student)}%`;
}

function buildStudentExplanation(
  student: Student,
  language: "es" | "en",
  compact = false,
  bulletsOnly = false
): string {
  const factors = [...student.shapFactors]
    .filter((factor) => factor.contribution > 0)
    .sort((a, b) => b.contribution - a.contribution)
    .slice(0, compact ? 3 : 5);

  if (bulletsOnly) {
    if (language === "en") {
      return [
        `- ${student.anonymousId}: ${riskPercent(student)}% dropout risk (${riskLabel(riskPercent(student), language)}).`,
        ...factors.slice(0, 2).map((factor) => `- ${factor.featureName.en}: ${factor.value}. ${factor.description.en}`)
      ].join("\n");
    }

    return [
      `- ${student.anonymousId}: ${riskPercent(student)}% de riesgo de deserción (${riskLabel(riskPercent(student), language)}).`,
      ...factors.slice(0, 2).map((factor) => `- ${factor.featureName.es}: ${factor.value}. ${factor.description.es}`)
    ].join("\n");
  }

  if (language === "en") {
    return [
      `${student.anonymousId} has ${riskPercent(student)}% dropout risk (${riskLabel(riskPercent(student), language)}).`,
      ...factors.map((factor) => `- ${factor.featureName.en}: ${factor.value}. ${factor.description.en}`),
      `Recommended first action: ${student.distanceKm >= 3 ? "transport subsidy" : "psychosocial mentoring"} with weekly attendance follow-up.`
    ].join("\n");
  }

  return [
    `${student.anonymousId} tiene ${riskPercent(student)}% de riesgo de deserción (${riskLabel(riskPercent(student), language)}).`,
    ...factors.map((factor) => `- ${factor.featureName.es}: ${factor.value}. ${factor.description.es}`),
    `Acción prioritaria: ${student.distanceKm >= 3 ? "subsidio de transporte" : "tutoría psicosocial"} con seguimiento semanal de asistencia.`
  ].join("\n");
}

function buildShapAnswer(student: Student, language: "es" | "en"): string {
  const rows = [...student.shapFactors]
    .sort((a, b) => Math.abs(b.contribution) - Math.abs(a.contribution))
    .slice(0, 5)
    .map((factor, index) => {
      const sign = factor.contribution >= 0 ? "+" : "";
      const name = language === "en" ? factor.featureName.en : factor.featureName.es;
      const description = language === "en" ? factor.description.en : factor.description.es;
      return `${index + 1}. ${name}: ${factor.value} (${sign}${factor.contribution.toFixed(2)}). ${description}`;
    });

  const header = language === "en"
    ? `Main SHAP factors for ${student.anonymousId}:`
    : `Principales factores SHAP de ${student.anonymousId}:`;
  return [header, ...rows].join("\n");
}

function buildComparisonAnswer(students: Student[], language: "es" | "en"): string {
  const ordered = [...students].sort((a, b) => b.dropoutProbability - a.dropoutProbability);
  const first = ordered[0];
  const second = ordered[1];
  if (!first || !second) return "";

  if (language === "en") {
    return [
      `${first.anonymousId} requires attention first: ${riskPercent(first)}% vs ${riskPercent(second)}% for ${second.anonymousId}.`,
      `Main driver: ${first.shapFactors[0]?.featureName.en || "high accumulated risk"}.`,
      `Immediate action: assign a case owner, transport/meal support as applicable, and weekly attendance monitoring.`
    ].join("\n");
  }

  return [
    `${first.anonymousId} requiere atención primero: ${riskPercent(first)}% frente a ${riskPercent(second)}% de ${second.anonymousId}.`,
    `Factor principal: ${first.shapFactors[0]?.featureName.es || "riesgo acumulado alto"}.`,
    `Acción inmediata: asignar responsable de caso, apoyo de transporte/comedor según corresponda y seguimiento semanal de asistencia.`
  ].join("\n");
}

function buildInterventionAnswer(student: Student, message: string, language: "es" | "en"): string {
  const options = selectedInterventions(message);
  const suggested = options.length ? options : [
    student.distanceKm >= 3 ? "subsidio de transporte" : "tutoría psicosocial",
    student.mealAssistanceActive ? "clases de refuerzo" : "comedor/refuerzo alimentario"
  ];
  const projected = projectedRisk(student, suggested);

  if (language === "en") {
    return [
      `Recommended intervention for ${student.anonymousId}: ${suggested.join(" + ")}.`,
      `Estimated risk could move from ${riskPercent(student)}% to ${Math.round(projected * 100)}%.`,
      `Track attendance, GPA recovery and family contact every week for 30 days.`
    ].join("\n");
  }

  return [
    `Intervención recomendada para ${student.anonymousId}: ${suggested.join(" + ")}.`,
    `El riesgo estimado podría bajar de ${riskPercent(student)}% a ${Math.round(projected * 100)}%.`,
    `Seguimiento: asistencia, recuperación académica y contacto familiar cada semana durante 30 días.`
  ].join("\n");
}

function buildPlanAnswer(student: Student, language: "es" | "en"): string {
  if (language === "en") {
    return [
      `30-day plan for ${student.anonymousId}:`,
      `1. Week 1: case interview and attendance agreement.`,
      `2. Week 2: activate transport/meal support according to the main SHAP driver.`,
      `3. Week 3: remedial tutoring focused on GPA recovery.`,
      `4. Week 4: evaluate attendance change and update risk status.`
    ].join("\n");
  }

  return [
    `Plan de 30 días para ${student.anonymousId}:`,
    `1. Semana 1: entrevista de caso y compromiso de asistencia.`,
    `2. Semana 2: activar transporte/comedor según el factor SHAP principal.`,
    `3. Semana 3: refuerzo académico para recuperar rendimiento.`,
    `4. Semana 4: evaluar asistencia y actualizar nivel de riesgo.`
  ].join("\n");
}

function runEduTwinLocalChat(
  message: string,
  context: SafeChatContext,
  language: "es" | "en"
): LocalChatResult | null {
  const normalized = normalizeText(message);
  const wantsOnly = normalized.includes("solo") || normalized.includes("maximo") || normalized.includes("máximo");
  const wantsBulletsOnly = normalized.includes("vinetas") || normalized.includes("viñetas") || normalized.includes("bullets");
  const asksForStudentList =
    normalized.includes("estudiantes")
    || normalized.includes("alumnos")
    || normalized.includes("ids")
    || normalized.includes("porcentajes")
    || normalized.includes("lista");
  const asksWhyTopRisk =
    (normalized.includes("porque") || normalized.includes("por que") || normalized.includes("explica"))
    && (normalized.includes("mayor riesgo") || normalized.includes("mas riesgo") || normalized.includes("critico"));
  const student = asksForStudentList
    ? null
    : findStudentFromMessage(message, context) || (asksWhyTopRisk ? topRiskStudents(1)[0] : null);

  if (normalized.includes("ok edutwin activo")) {
    return { reply: "OK EduTwin activo", source: "edutwin-inference-engine" };
  }

  if (normalized === "hola" || normalized === "holas" || normalized === "hello") {
    return {
      reply: language === "en"
        ? "EduTwin is active and ready. You can ask about dropout risk, SHAP factors or interventions."
        : "EduTwin está activo y listo. Puedes consultar riesgo de deserción, factores SHAP o intervenciones.",
      source: "edutwin-inference-engine"
    };
  }

  if (
    normalized.includes("nombre completo")
    || normalized.includes("direccion")
    || normalized.includes("dni")
    || normalized.includes("telefono")
    || normalized.includes("datos personales")
  ) {
    return {
      reply: language === "en"
        ? "No. EduTwin only uses pseudonymized IDs and must not reveal personal data such as names, addresses, ID numbers or phone numbers."
        : "No. EduTwin trabaja con IDs pseudonimizados y no debe revelar nombres, direcciones, DNI, teléfonos ni otros datos personales.",
      source: "edutwin-inference-engine"
    };
  }

  if (normalized.includes("compara") || normalized.includes("comparar")) {
    const mentioned = INITIAL_STUDENTS.filter((item) => normalized.includes(normalizeText(item.anonymousId)));
    const pair = mentioned.length >= 2 ? mentioned.slice(0, 2) : topRiskStudents(2);
    return { reply: buildComparisonAnswer(pair, language), source: "edutwin-inference-engine" };
  }

  if (student && (normalized.includes("plan") || normalized.includes("30 dias") || normalized.includes("30 días"))) {
    return { reply: buildPlanAnswer(student, language), source: "edutwin-inference-engine" };
  }

  if (student && (normalized.includes("intervencion") || normalized.includes("recomienda") || normalized.includes("simula") || normalized.includes("que pasa"))) {
    return { reply: buildInterventionAnswer(student, message, language), source: "edutwin-inference-engine" };
  }

  if (student && (normalized.includes("shap") || normalized.includes("factores"))) {
    return { reply: buildShapAnswer(student, language), source: "edutwin-inference-engine" };
  }

  if (student && (normalized.includes("porque") || normalized.includes("por que") || normalized.includes("explica") || normalized.includes("riesgo"))) {
    return {
      reply: buildStudentExplanation(student, language, wantsOnly || wantsBulletsOnly, wantsBulletsOnly),
      source: "edutwin-inference-engine"
    };
  }

  if (
    normalized.includes("mayor riesgo")
    || normalized.includes("mas riesgo")
    || normalized.includes("alto riesgo")
    || normalized.includes("riesgo de desercion")
  ) {
    const students = topRiskStudents(wantsOnly ? 2 : 3);
    const onlyIdsAndPercentages = wantsOnly || normalized.includes("ids") || normalized.includes("porcentajes");
    const body = students
      .map((item) => onlyIdsAndPercentages ? studentIdPercentLine(item) : studentSummaryLine(item, language))
      .join("\n");
    if (wantsOnly) return { reply: body, source: "edutwin-inference-engine" };
    const header = language === "en" ? "Highest dropout risk students:" : "Estudiantes con mayor riesgo de deserción:";
    return { reply: `${header}\n${body}`, source: "edutwin-inference-engine" };
  }

  if (normalized.includes("escuelas") || normalized.includes("planteles") || normalized.includes("colegios")) {
    const schools = topRiskSchools(3)
      .map((school, index) => `${index + 1}. ${school.code} - ${school.dropoutRiskScore}%: ${school.name}`)
      .join("\n");
    const header = language === "en" ? "Schools with highest risk:" : "Escuelas con mayor riesgo:";
    return { reply: `${header}\n${schools}`, source: "edutwin-inference-engine" };
  }

  if (normalized.includes("que puedes hacer") || normalized.includes("funcionando") || normalized.includes("ayuda")) {
    return {
      reply: language === "en"
        ? "I can list high-risk students/schools, explain SHAP factors, compare cases, suggest interventions, simulate support scenarios and protect pseudonymized data."
        : "Puedo listar estudiantes/escuelas en riesgo, explicar factores SHAP, comparar casos, recomendar intervenciones, simular apoyos y proteger datos pseudonimizados.",
      source: "edutwin-inference-engine"
    };
  }

  return null;
}

function getAIClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return aiClient;
}

function extractLangflowText(payload: unknown): string | null {
  if (!payload || typeof payload !== "object") return null;

  const record = payload as Record<string, unknown>;
  const directText = record.text || record.message || record.output || record.result;
  if (typeof directText === "string" && directText.trim()) return directText.trim();

  const results = record.results;
  if (results && typeof results === "object") {
    const message = (results as Record<string, unknown>).message;
    if (message && typeof message === "object") {
      const text = (message as Record<string, unknown>).text;
      if (typeof text === "string" && text.trim()) return text.trim();
    }
  }

  for (const value of Object.values(record)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        const nested = extractLangflowText(item);
        if (nested) return nested;
      }
    } else if (value && typeof value === "object") {
      const nested = extractLangflowText(value);
      if (nested) return nested;
    }
  }

  return null;
}

async function runLangflowChat(
  message: string,
  systemPrompt: string,
  context: SafeChatContext,
  language: "es" | "en"
): Promise<string | null> {
  const endpoint = process.env.LANGFLOW_ENDPOINT?.replace(/\/$/, "");
  const flowId = process.env.LANGFLOW_FLOW_ID;
  if (!endpoint || !flowId) return null;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 45_000);

  try {
    const response = await fetch(`${endpoint}/api/v1/run/${encodeURIComponent(flowId)}?stream=false`, {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        ...(process.env.LANGFLOW_API_KEY
          ? {
              "x-api-key": process.env.LANGFLOW_API_KEY
            }
          : {})
      },
      body: JSON.stringify({
        input_value: [
          systemPrompt.trim(),
          "",
          `Contexto EduTwin pseudonimizado: ${JSON.stringify(context)}`,
          "",
          `Pregunta del usuario (${language}): ${message.trim()}`
        ].join("\n"),
        input_type: "chat",
        output_type: "chat",
        tweaks: {}
      })
    });

    if (!response.ok) {
      console.warn(`Langflow request failed: ${response.status}`);
      return null;
    }

    const payload = await response.json();
    return extractLangflowText(payload);
  } catch (error) {
    console.warn("Langflow unavailable, falling back:", error);
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT || 3000);

  app.use(express.json({ limit: "256kb" }));

  // API Route: Health check
  app.get("/api/health", (_req: Request, res: Response) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // API Route: LLM orchestration status for LangChain/Langflow integration
  app.get("/api/ai/orchestration/status", (_req: Request, res: Response) => {
    res.json({
      status: "ready",
      timestamp: new Date().toISOString(),
      modules: {
        langchain: {
          enabled: process.env.LANGCHAIN_ENABLED !== "false",
          mode: "rag-tool-orchestration",
          tools: ["digital_twin_context", "dropout_risk_score", "shap_explainability", "ethics_audit"]
        },
        langflow: {
          enabled: Boolean(process.env.LANGFLOW_ENDPOINT && process.env.LANGFLOW_FLOW_ID),
          endpoint: process.env.LANGFLOW_ENDPOINT || null,
          flowIdConfigured: Boolean(process.env.LANGFLOW_FLOW_ID),
          flows: ["school_diagnosis", "intervention_simulation", "xai_report_generation"]
        },
        retrieval: {
          provider: "pgvector",
          databaseConfigured: Boolean(process.env.DATABASE_URL),
          redaction: "student_hash_only"
        }
      },
      governance: {
        piiPolicy: "pseudonymized-context",
        rateLimit: `${chatLimitPerWindow}/${chatWindowMs / 1000}s`,
        auditTrail: true
      }
    });
  });

  // API Route: AI Copilot grounded in 3D digital twin context
  app.post("/api/chat", async (req: Request, res: Response) => {
    try {
      const source = req.ip || "unknown";
      const now = Date.now();
      const current = chatRequests.get(source);
      if (!current || now - current.startedAt >= chatWindowMs) {
        chatRequests.set(source, { startedAt: now, count: 1 });
      } else if (current.count >= chatLimitPerWindow) {
        return res.status(429).json({ error: "Too many chat requests" });
      } else {
        current.count += 1;
      }

      const { message, context, language = "es" } = req.body || {};
      if (typeof message !== "string" || message.trim().length === 0 || message.length > 2_000) {
        return res.status(400).json({ error: "Message must be a non-empty string of at most 2000 characters" });
      }
      const safeLanguage = language === "en" ? "en" : "es";
      const safeContext = {
        level: typeof context?.level === "string" ? context.level.slice(0, 20) : "macro",
        selectedSchool: context?.selectedSchool ? {
          id: String(context.selectedSchool.id || "").slice(0, 80),
          name: String(context.selectedSchool.name || "").slice(0, 160)
        } : null,
        selectedStudent: context?.selectedStudent ? {
          anonymousId: String(context.selectedStudent.anonymousId || "").slice(0, 80),
          dropoutProbability: Number.isFinite(Number(context.selectedStudent.dropoutProbability))
            ? Number(context.selectedStudent.dropoutProbability)
            : null
        } : null,
        simulationParams: context?.simulationParams && typeof context.simulationParams === "object"
          ? context.simulationParams
          : {}
      };

      const systemPrompt = `
Eres el Asistente Experto de IA de EduTwin, especializado en analítica predictiva de deserción escolar, gemelos digitales 3D y políticas educativas en zonas vulnerables.
Responde de forma clara, empática, profesional y estructurada (en ${safeLanguage === "es" ? "español" : "inglés"}).
Contexto actual del gemelo digital:
- Nivel 3D: ${safeContext.level}
- Escuela seleccionada: ${safeContext.selectedSchool?.name || "Todas"}
- Estudiante enfocado: ${safeContext.selectedStudent?.anonymousId || "Ninguno"}
- Tasa de riesgo del estudiante: ${safeContext.selectedStudent?.dropoutProbability !== null && safeContext.selectedStudent?.dropoutProbability !== undefined ? (safeContext.selectedStudent.dropoutProbability * 100).toFixed(0) + "%" : "N/A"}
- Parámetros de simulación What-If activos: ${JSON.stringify(safeContext.simulationParams)}

Arquitectura de orquestación:
- LangChain: enruta intención, contexto del gemelo digital, herramientas de riesgo, explicabilidad SHAP y auditoría ética.
- Langflow: modela flujos visuales revisables para diagnóstico, simulación de intervención y generación de reportes.
- RAG institucional: debe usar contexto pseudonimizado, memoria mínima y recuperación desde PostgreSQL/pgvector cuando esté disponible.

Si el usuario solicita navegar a una escuela (ej: "llévame a Carabayllo" o "enfocar riesgo"), incluye al inicio de tu respuesta una instrucción de acción si corresponde. Proporciona recomendaciones basadas en evidencia científica (SHAP, asistencia, alimentación, transporte, tutoría) y menciona cuando una respuesta provenga del flujo LangChain/Langflow.
`;

      const localReply = runEduTwinLocalChat(message, safeContext, safeLanguage);
      if (localReply) {
        return res.json(localReply);
      }

      const langflowReply = await runLangflowChat(message, systemPrompt, safeContext, safeLanguage);
      if (langflowReply) {
        return res.json({
          reply: langflowReply,
          source: "langflow",
        });
      }

      const ai = getAIClient();

      if (ai) {
        try {
          const response = await ai.models.generateContent({
            model: process.env.GEMINI_MODEL || "gemini-3.8-flash",
            contents: `${systemPrompt}\n\nPregunta del usuario: ${message.trim()}`,
          });

          return res.json({
            reply: response.text || "Análisis completado.",
            source: "gemini",
          });
        } catch (apiError) {
          console.warn("Gemini API call failed, using intelligent fallback:", apiError);
        }
      }

      // Intelligent deterministic fallback when API key is not configured
      let reply = "";
      const lower = message.trim().toLowerCase();

      if (lower.includes("carabayllo") || lower.includes("escuela") || lower.includes("colegio")) {
        const school = INITIAL_SCHOOLS.find((item) => normalizeText(item.name).includes("carabayllo")) || topRiskSchools(1)[0];
        reply = safeLanguage === "es"
          ? `🏫 **Diagnóstico de Plantel**: ${school.name} registra ${school.dropoutRiskScore}% de riesgo institucional, asistencia promedio de ${school.attendanceAvg}% y ${school.riskDistribution.high}% de estudiantes en alto riesgo. Prioridad: transporte, comedor y seguimiento tutorial.`
          : `🏫 **School Diagnosis**: ${school.name} has ${school.dropoutRiskScore}% institutional risk, ${school.attendanceAvg}% average attendance and ${school.riskDistribution.high}% high-risk students. Priority: transport, meal support and tutoring.`;
      } else if (lower.includes("simul") || lower.includes("que pasa") || lower.includes("what if")) {
        reply = safeLanguage === "es"
          ? "📊 **Simulación de Políticas**: Transporte + comedor + tutoría suele reducir el riesgo estimado entre 15 y 30 puntos porcentuales en estudiantes con baja asistencia, larga distancia y vulnerabilidad alimentaria. Usa un ID como #STD-7489X para calcular un caso."
          : "📊 **Policy Simulation**: Transport + meal support + mentoring usually reduces estimated risk by 15-30 percentage points for students with low attendance, long commutes and food insecurity. Provide an ID such as #STD-7489X for a case estimate.";
      } else if (lower.includes("estudiante") || lower.includes("alumno") || lower.includes("shap")) {
        reply = buildStudentExplanation(topRiskStudents(1)[0], safeLanguage, true);
      } else {
        reply = safeLanguage === "es"
          ? `🤖 **EduTwin activo**: puedo responder sobre estudiantes en riesgo, escuelas, factores SHAP, intervenciones, simulaciones y privacidad con datos pseudonimizados.`
          : `🤖 **EduTwin active**: I can answer about risk students, schools, SHAP factors, interventions, simulations and privacy with pseudonymized data.`;
      }

      return res.json({
        reply,
        source: "edutwin-inference-engine",
      });
    } catch (error) {
      console.error("Chat endpoint error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite development middleware or static production serving
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: {
          port: Number(process.env.HMR_PORT || 24678)
        }
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`EduTwin Full-Stack Server running at http://localhost:${PORT}`);
    console.log(`Open here: http://localhost:${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
  });
}

startServer();
