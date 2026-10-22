from __future__ import annotations

import re
import unicodedata
from typing import Any


def normalize_text(value: str) -> str:
    decomposed = unicodedata.normalize("NFD", value.lower())
    return re.sub(r"[\u0300-\u036f]", "", decomposed).strip()


def risk_percent(student: dict[str, Any]) -> int:
    return round(student["dropoutProbability"] * 100)


def risk_label(percent: int, language: str) -> str:
    if language == "en":
        if percent >= 85:
            return "Critical"
        if percent >= 70:
            return "High"
        if percent >= 40:
            return "Medium"
        return "Low"
    if percent >= 85:
        return "Crítico"
    if percent >= 70:
        return "Alto"
    if percent >= 40:
        return "Medio"
    return "Bajo"


def top_risk_students(students: list[dict[str, Any]], limit: int = 3) -> list[dict[str, Any]]:
    return sorted(students, key=lambda item: item["dropoutProbability"], reverse=True)[:limit]


def top_risk_schools(schools: list[dict[str, Any]], limit: int = 3) -> list[dict[str, Any]]:
    return sorted(schools, key=lambda item: item["dropoutRiskScore"], reverse=True)[:limit]


def find_student_from_message(message: str, context: dict[str, Any], students: list[dict[str, Any]]) -> dict[str, Any] | None:
    normalized = normalize_text(message)
    for student in students:
        anon = normalize_text(student["anonymousId"])
        if anon in normalized or anon.replace("#", "") in normalized:
            return student
    selected = (context or {}).get("selectedStudent") or {}
    anonymous_id = selected.get("anonymousId")
    if anonymous_id:
        return next((student for student in students if student["anonymousId"] == anonymous_id), None)
    return None


def selected_interventions(message: str) -> list[str]:
    normalized = normalize_text(message)
    interventions = []
    if any(word in normalized for word in ["transporte", "movilidad", "subsidio"]):
        interventions.append("subsidio de transporte")
    if any(word in normalized for word in ["comedor", "aliment", "beca"]):
        interventions.append("comedor/refuerzo alimentario")
    if any(word in normalized for word in ["tutoria", "psicosocial", "mentor"]):
        interventions.append("tutoría psicosocial")
    if any(word in normalized for word in ["refuerzo", "remedial", "academ"]):
        interventions.append("clases de refuerzo")
    return interventions


def projected_risk(student: dict[str, Any], interventions: list[str]) -> float:
    reduction = 0
    if any("transporte" in item for item in interventions):
        reduction += 0.10 if student["distanceKm"] >= 3 else 0.04
    if any("alimentario" in item or "comedor" in item for item in interventions):
        reduction += 0.03 if student["mealAssistanceActive"] else 0.09
    if any("tutoría" in item for item in interventions):
        reduction += 0.08
    if any("refuerzo" in item for item in interventions):
        reduction += 0.07 if student["gpa"] < 11 else 0.03
    return max(0.05, student["dropoutProbability"] - reduction)


def build_student_explanation(student: dict[str, Any], language: str, compact: bool = False, bullets_only: bool = False) -> str:
    factors = sorted(
        [factor for factor in student.get("shapFactors", []) if factor["contribution"] > 0],
        key=lambda factor: factor["contribution"],
        reverse=True,
    )[: 3 if compact else 5]
    percent = risk_percent(student)
    if bullets_only:
        return "\n".join(
            [f"- {student['anonymousId']}: {percent}% de riesgo de deserción ({risk_label(percent, language)})."]
            + [f"- {factor['featureName'][language]}: {factor['value']}. {factor['description'][language]}" for factor in factors[:2]]
        )
    if language == "en":
        lines = [f"{student['anonymousId']} has {percent}% dropout risk ({risk_label(percent, language)})."]
        lines += [f"- {factor['featureName']['en']}: {factor['value']}. {factor['description']['en']}" for factor in factors]
        lines.append(f"Recommended first action: {'transport subsidy' if student['distanceKm'] >= 3 else 'psychosocial mentoring'} with weekly attendance follow-up.")
        return "\n".join(lines)
    lines = [f"{student['anonymousId']} tiene {percent}% de riesgo de deserción ({risk_label(percent, language)})."]
    lines += [f"- {factor['featureName']['es']}: {factor['value']}. {factor['description']['es']}" for factor in factors]
    lines.append(f"Acción prioritaria: {'subsidio de transporte' if student['distanceKm'] >= 3 else 'tutoría psicosocial'} con seguimiento semanal de asistencia.")
    return "\n".join(lines)


def build_shap_answer(student: dict[str, Any], language: str) -> str:
    rows = sorted(student.get("shapFactors", []), key=lambda factor: abs(factor["contribution"]), reverse=True)[:5]
    header = f"Principales factores SHAP de {student['anonymousId']}:" if language == "es" else f"Main SHAP factors for {student['anonymousId']}:"
    body = []
    for index, factor in enumerate(rows, start=1):
        sign = "+" if factor["contribution"] >= 0 else ""
        body.append(f"{index}. {factor['featureName'][language]}: {factor['value']} ({sign}{factor['contribution']:.2f}). {factor['description'][language]}")
    return "\n".join([header, *body])


def build_intervention_answer(student: dict[str, Any], message: str, language: str) -> str:
    chosen = selected_interventions(message) or [
        "subsidio de transporte" if student["distanceKm"] >= 3 else "tutoría psicosocial",
        "clases de refuerzo" if student["mealAssistanceActive"] else "comedor/refuerzo alimentario",
    ]
    projected = projected_risk(student, chosen)
    if language == "en":
        return "\n".join([
            f"Recommended intervention for {student['anonymousId']}: {' + '.join(chosen)}.",
            f"Estimated risk could move from {risk_percent(student)}% to {round(projected * 100)}%.",
            "Track attendance, GPA recovery and family contact every week for 30 days.",
        ])
    return "\n".join([
        f"Intervención recomendada para {student['anonymousId']}: {' + '.join(chosen)}.",
        f"El riesgo estimado podría bajar de {risk_percent(student)}% a {round(projected * 100)}%.",
        "Seguimiento: asistencia, recuperación académica y contacto familiar cada semana durante 30 días.",
    ])


def run_local_chat(message: str, context: dict[str, Any], language: str, students: list[dict[str, Any]], schools: list[dict[str, Any]]) -> dict[str, str]:
    normalized = normalize_text(message)
    wants_only = "solo" in normalized or "maximo" in normalized
    wants_bullets = "vinetas" in normalized or "viñetas" in normalized or "bullets" in normalized
    asks_for_list = any(word in normalized for word in ["estudiantes", "alumnos", "ids", "porcentajes", "lista"])
    asks_why_top = ("porque" in normalized or "por que" in normalized or "explica" in normalized) and any(word in normalized for word in ["mayor riesgo", "mas riesgo", "critico"])
    student = None if asks_for_list else find_student_from_message(message, context, students) or (top_risk_students(students, 1)[0] if asks_why_top else None)

    if "ok edutwin activo" in normalized:
        return {"reply": "OK EduTwin activo", "source": "edutwin-inference-engine"}
    if normalized in {"hola", "holas", "hello"}:
        reply = "EduTwin está activo y listo. Puedes consultar riesgo de deserción, factores SHAP o intervenciones."
        if language == "en":
            reply = "EduTwin is active and ready. You can ask about dropout risk, SHAP factors or interventions."
        return {"reply": reply, "source": "edutwin-inference-engine"}
    if any(word in normalized for word in ["nombre completo", "direccion", "dni", "telefono", "datos personales"]):
        reply = "No. EduTwin trabaja con IDs pseudonimizados y no debe revelar nombres, direcciones, DNI, teléfonos ni otros datos personales."
        if language == "en":
            reply = "No. EduTwin only uses pseudonymized IDs and must not reveal personal data."
        return {"reply": reply, "source": "edutwin-inference-engine"}
    if student and any(word in normalized for word in ["intervencion", "recomienda", "simula", "que pasa"]):
        return {"reply": build_intervention_answer(student, message, language), "source": "edutwin-inference-engine"}
    if student and ("shap" in normalized or "factores" in normalized):
        return {"reply": build_shap_answer(student, language), "source": "edutwin-inference-engine"}
    if student and any(word in normalized for word in ["porque", "por que", "explica", "riesgo"]):
        return {"reply": build_student_explanation(student, language, wants_only or wants_bullets, wants_bullets), "source": "edutwin-inference-engine"}
    if any(word in normalized for word in ["mayor riesgo", "mas riesgo", "alto riesgo", "riesgo de desercion"]):
        students_top = top_risk_students(students, 2 if wants_only else 3)
        body = "\n".join([f"{student['anonymousId']} - {risk_percent(student)}%" if wants_only else f"{student['anonymousId']} - {risk_percent(student)}% ({risk_label(risk_percent(student), language)})" for student in students_top])
        header = "Estudiantes con mayor riesgo de deserción:" if language == "es" else "Highest dropout risk students:"
        return {"reply": body if wants_only else f"{header}\n{body}", "source": "edutwin-inference-engine"}
    if any(word in normalized for word in ["escuelas", "planteles", "colegios", "carabayllo"]):
        top = top_risk_schools(schools, 3)
        body = "\n".join([f"{index}. {school['code']} - {school['dropoutRiskScore']}%: {school['name']}" for index, school in enumerate(top, start=1)])
        header = "Escuelas con mayor riesgo:" if language == "es" else "Schools with highest risk:"
        return {"reply": f"{header}\n{body}", "source": "edutwin-inference-engine"}
    if any(word in normalized for word in ["que puedes hacer", "funcionando", "ayuda"]):
        reply = "Puedo listar estudiantes/escuelas en riesgo, explicar factores SHAP, comparar casos, recomendar intervenciones, simular apoyos y proteger datos pseudonimizados."
        if language == "en":
            reply = "I can list high-risk students/schools, explain SHAP factors, compare cases, suggest interventions, simulate support scenarios and protect pseudonymized data."
        return {"reply": reply, "source": "edutwin-inference-engine"}
    reply = "EduTwin activo: puedo responder sobre estudiantes en riesgo, escuelas, factores SHAP, intervenciones, simulaciones y privacidad con datos pseudonimizados."
    if language == "en":
        reply = "EduTwin active: I can answer about risk students, schools, SHAP factors, interventions, simulations and privacy with pseudonymized data."
    return {"reply": reply, "source": "local-fallback"}
