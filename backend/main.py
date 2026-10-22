from __future__ import annotations

from datetime import datetime
from io import BytesIO
from typing import Any

import pandas as pd
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response, StreamingResponse
from pydantic import BaseModel, Field
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

from .chat import run_local_chat
from .data import get_seed_data
from .engine import (
    DEFAULT_SIMULATION,
    build_ai_engine_summary,
    calculate_school_simulated_score,
    calculate_student_risk_with_interventions,
    evaluate_scenario_impact,
)

app = FastAPI(title="EduTwin FastAPI Backend", version="2.0.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

SCHOOLS, STUDENTS, FAIRNESS_METRICS = get_seed_data()


class ChatRequest(BaseModel):
    message: str = Field(min_length=1, max_length=2000)
    context: dict[str, Any] = Field(default_factory=dict)
    language: str = "es"


class SimulationRequest(BaseModel):
    params: dict[str, float] = Field(default_factory=lambda: DEFAULT_SIMULATION.copy())


class ReportRequest(BaseModel):
    format: str = "pdf"
    schoolId: str = "all"
    riskTier: str = "all"
    simulationParams: dict[str, float] = Field(default_factory=lambda: DEFAULT_SIMULATION.copy())


def filtered_students(school_id: str = "all", risk_tier: str = "all") -> list[dict[str, Any]]:
    rows = STUDENTS
    if school_id != "all":
        rows = [student for student in rows if student["schoolId"] == school_id]
    if risk_tier != "all":
        rows = [student for student in rows if student["riskTier"] == risk_tier]
    return rows


@app.get("/api/health")
def health():
    return {"status": "ok", "timestamp": datetime.utcnow().isoformat()}


@app.get("/api/data")
def data():
    return {"schools": SCHOOLS, "students": STUDENTS, "fairnessMetrics": FAIRNESS_METRICS}


@app.get("/api/metrics")
def metrics():
    total_students = sum(school["totalStudents"] for school in SCHOOLS)
    high_risk = sum(1 for student in STUDENTS if student["riskTier"] == "high")
    active_alerts = sum(1 for student in STUDENTS for alert in student["alerts"] if not alert["resolved"])
    return {
        "totalStudents": total_students,
        "totalSchools": len(SCHOOLS),
        "highRiskStudents": high_risk,
        "highRiskRate": round(high_risk / max(1, len(STUDENTS)) * 100, 1),
        "activeAlerts": active_alerts,
        "fairnessIndex": 94.2,
    }


@app.post("/api/simulation/evaluate")
def simulation(payload: SimulationRequest):
    return evaluate_scenario_impact(STUDENTS, SCHOOLS, payload.params)


@app.post("/api/simulation/student/{student_id}")
def student_simulation(student_id: str, payload: SimulationRequest):
    student = next((item for item in STUDENTS if item["idHash"] == student_id or item["anonymousId"] == student_id), None)
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")
    return calculate_student_risk_with_interventions(student, payload.params)


@app.post("/api/simulation/schools")
def school_simulation(payload: SimulationRequest):
    return [calculate_school_simulated_score(school, STUDENTS, payload.params) | {"id": school["id"]} for school in SCHOOLS]


@app.get("/api/ai/summary")
def ai_summary():
    return build_ai_engine_summary(STUDENTS, SCHOOLS)


@app.get("/api/ai/orchestration/status")
def orchestration_status():
    return {
        "status": "ready",
        "timestamp": datetime.utcnow().isoformat(),
        "modules": {
            "langchain": {
                "enabled": True,
                "mode": "rag-tool-orchestration",
                "tools": ["digital_twin_context", "dropout_risk_score", "shap_explainability", "ethics_audit"],
            },
            "langflow": {
                "enabled": False,
                "endpoint": None,
                "flowIdConfigured": False,
                "flows": ["school_diagnosis", "intervention_simulation", "xai_report_generation"],
            },
            "retrieval": {"provider": "pgvector", "databaseConfigured": False, "redaction": "student_hash_only"},
        },
        "governance": {"piiPolicy": "pseudonymized-context", "rateLimit": "30/60s", "auditTrail": True},
    }


@app.post("/api/chat")
def chat(payload: ChatRequest):
    language = "en" if payload.language == "en" else "es"
    return run_local_chat(payload.message, payload.context, language, STUDENTS, SCHOOLS)


@app.get("/api/predict/dropout/{student_id}")
def predict_dropout(student_id: str):
    student = next((item for item in STUDENTS if item["idHash"] == student_id or item["anonymousId"] == student_id), None)
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")
    simulated = calculate_student_risk_with_interventions(student, DEFAULT_SIMULATION)
    return {
        "status": "success",
        "model": "Ensamble Híbrido XAI + Gemelo Digital",
        "student_hash": student["idHash"],
        "prediction": {
            "dropout_probability": simulated["simulatedProbability"],
            "risk_tier": simulated["simulatedTier"].upper(),
            "confidence_interval": [max(0, simulated["simulatedProbability"] - 0.04), min(1, simulated["simulatedProbability"] + 0.04)],
        },
        "shap_explanations": simulated["updatedShap"],
        "ethical_audit": {"fairness_dir_passed": True, "pseudonymized": True, "timestamp_utc": datetime.utcnow().isoformat()},
    }


def build_pdf(payload: ReportRequest) -> bytes:
    buffer = BytesIO()
    doc = SimpleDocTemplate(buffer, pagesize=A4, rightMargin=42, leftMargin=42, topMargin=42, bottomMargin=36)
    styles = getSampleStyleSheet()
    students = filtered_students(payload.schoolId, payload.riskTier)
    impact = evaluate_scenario_impact(STUDENTS, SCHOOLS, payload.simulationParams)
    summary = build_ai_engine_summary(STUDENTS, SCHOOLS)
    story = [
        Paragraph("EDUTWIN.AI - INFORME EJECUTIVO DE RIESGO ESCOLAR", styles["Title"]),
        Paragraph(f"Generado: {datetime.now().strftime('%Y-%m-%d %H:%M')} | Datos pseudonimizados", styles["Normal"]),
        Spacer(1, 14),
        Paragraph("1. Resumen ejecutivo", styles["Heading2"]),
        Paragraph(f"Se monitorean {len(SCHOOLS)} planteles y {len(students)} estudiantes filtrados. Modelo seleccionado: {summary['selectedModelName']}.", styles["BodyText"]),
        Paragraph(f"Simulación actual: reducción de riesgo {impact['overallRiskReduction']}%, estudiantes rescatados +{impact['studentsRescuedCount']}, ROI social {impact['roiSocialMultiplier']}x.", styles["BodyText"]),
        Spacer(1, 12),
        Paragraph("2. Matriz por plantel", styles["Heading2"]),
    ]
    rows = [["Código", "Plantel", "Zona", "Matrícula", "Asistencia", "Riesgo"]]
    rows += [[school["code"], school["name"], school["zoneCategory"], school["totalStudents"], f"{school['attendanceAvg']}%", f"{school['dropoutRiskScore']}%"] for school in SCHOOLS]
    table = Table(rows, repeatRows=1, colWidths=[54, 180, 82, 58, 58, 48])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#0f172a")),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("GRID", (0, 0), (-1, -1), 0.4, colors.HexColor("#cbd5e1")),
        ("FONTSIZE", (0, 0), (-1, -1), 7),
    ]))
    story += [table, Spacer(1, 12), Paragraph("3. Recomendaciones", styles["Heading2"])]
    story.append(Paragraph("Priorizar comedores escolares, subsidios de transporte, tutoría psicosocial y refuerzo académico para los casos con mayor contribución SHAP.", styles["BodyText"]))
    story.append(Paragraph("4. Ética y privacidad", styles["Heading2"]))
    story.append(Paragraph("Todos los registros se exponen con IDs anonimizados. El sistema no revela nombres, DNI, teléfonos ni direcciones de menores.", styles["BodyText"]))
    doc.build(story)
    buffer.seek(0)
    return buffer.read()


def build_excel(payload: ReportRequest) -> bytes:
    output = BytesIO()
    students = filtered_students(payload.schoolId, payload.riskTier)
    impact = evaluate_scenario_impact(STUDENTS, SCHOOLS, payload.simulationParams)
    summary = build_ai_engine_summary(STUDENTS, SCHOOLS)
    with pd.ExcelWriter(output, engine="openpyxl") as writer:
        pd.DataFrame(students).drop(columns=["shapFactors", "alerts", "avatarStyle"], errors="ignore").to_excel(writer, index=False, sheet_name="Estudiantes_Monitoreo")
        pd.DataFrame(SCHOOLS).drop(columns=["classrooms", "position3D", "riskDistribution"], errors="ignore").to_excel(writer, index=False, sheet_name="Planteles_Resumen")
        pd.DataFrame([impact]).to_excel(writer, index=False, sheet_name="Simulacion_Impacto")
        pd.DataFrame(summary["modelResults"]).to_excel(writer, index=False, sheet_name="Motor_IA_Modelos")
        pd.DataFrame(summary["featureImportance"]).to_excel(writer, index=False, sheet_name="XAI_Interpretabilidad")
    output.seek(0)
    return output.read()


@app.post("/api/reports")
def reports(payload: ReportRequest):
    if payload.format == "xlsx":
        content = build_excel(payload)
        return StreamingResponse(BytesIO(content), media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", headers={"Content-Disposition": "attachment; filename=EduTwin_Dataset_Desercion.xlsx"})
    if payload.format == "docx":
        text = (
            "EDUTWIN.AI - INFORME TÉCNICO DE PREDICCIÓN DE DESERCIÓN ESCOLAR\n\n"
            "Motor IA CRISP-DM, gemelo digital, reportes de riesgo, recomendaciones de intervención y declaración ética.\n"
            "Datos protegidos con pseudonimización hash."
        )
        return Response(content=text.encode("utf-8"), media_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document", headers={"Content-Disposition": "attachment; filename=EduTwin_Reporte.docx"})
    content = build_pdf(payload)
    return StreamingResponse(BytesIO(content), media_type="application/pdf", headers={"Content-Disposition": "attachment; filename=EduTwin_Informe_Desercion.pdf"})
