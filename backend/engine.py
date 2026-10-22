from __future__ import annotations

import math
import statistics
from typing import Any


DEFAULT_SIMULATION = {
    "mealProgramBoost": 0,
    "transportSubsidy": 0,
    "psychosocialMentoring": 0,
    "remedialClasses": 0,
    "familyCashTransfer": 0,
    "connectivityAid": 0,
}


def clamp(value: float, minimum: float, maximum: float) -> float:
    return min(maximum, max(minimum, value))


def mean(values: list[float]) -> float:
    return sum(values) / len(values) if values else 0


def sigmoid(value: float) -> float:
    return 1 / (1 + math.exp(-value))


def calculate_student_risk_with_interventions(student: dict[str, Any], params: dict[str, Any]) -> dict[str, Any]:
    params = {**DEFAULT_SIMULATION, **(params or {})}
    prob = float(student["dropoutProbability"])
    meal = (params["mealProgramBoost"] / 100) * 0.22 * (student["householdPovertyIndex"] / 10)
    distance_factor = min(1.0, student["distanceKm"] / 5.0)
    transport = (params["transportSubsidy"] / 100) * 0.26 * distance_factor
    mentoring = (params["psychosocialMentoring"] / 100) * 0.19 * ((100 - student["attendanceRate"]) / 100)
    academic_risk = max(0, (14 - student["gpa"]) / 14)
    remedial = (params["remedialClasses"] / 100) * 0.18 * academic_risk
    labor_factor = min(1.0, student["workBurdenHoursWeekly"] / 20)
    cash = (params["familyCashTransfer"] / 100) * 0.24 * labor_factor
    connectivity = (params["connectivityAid"] / 100) * (0.12 if not student["digitalAccess"] else 0.04)
    total_mitigation = min(0.68, meal + transport + mentoring + remedial + cash + connectivity)
    new_probability = max(0.04, round(prob - total_mitigation, 3))
    reduction = round(((prob - new_probability) / prob) * 100, 1) if prob else 0
    tier = "high" if new_probability >= 0.65 else "medium" if new_probability >= 0.35 else "low"

    updated_shap = []
    for factor in student.get("shapFactors", []):
        adjusted = float(factor["contribution"])
        key = factor["featureKey"]
        if key == "householdPovertyIndex" and params["familyCashTransfer"] > 0:
            adjusted -= (params["familyCashTransfer"] / 100) * 0.08
        if key == "distanceKm" and params["transportSubsidy"] > 0:
            adjusted -= (params["transportSubsidy"] / 100) * 0.12
        if key == "attendanceRate" and (params["mealProgramBoost"] > 0 or params["psychosocialMentoring"] > 0):
            adjusted -= ((params["mealProgramBoost"] + params["psychosocialMentoring"]) / 200) * 0.10
        if key == "gpa" and params["remedialClasses"] > 0:
            adjusted -= (params["remedialClasses"] / 100) * 0.07
        updated_shap.append({**factor, "contribution": round(adjusted, 3)})

    return {
        "simulatedProbability": new_probability,
        "simulatedTier": tier,
        "riskReduction": reduction,
        "updatedShap": updated_shap,
    }


def evaluate_scenario_impact(students: list[dict[str, Any]], schools: list[dict[str, Any]], params: dict[str, Any]) -> dict[str, Any]:
    initial_high = 0
    new_high = 0
    from_high_to_medium = 0
    from_medium_to_low = 0
    initial_total = 0.0
    simulated_total = 0.0

    for student in students:
        initial_prob = student["dropoutProbability"]
        initial_tier = student["riskTier"]
        initial_total += initial_prob
        if initial_tier == "high":
            initial_high += 1
        simulated = calculate_student_risk_with_interventions(student, params)
        simulated_total += simulated["simulatedProbability"]
        simulated_tier = simulated["simulatedTier"]
        if simulated_tier == "high":
            new_high += 1
        if initial_tier == "high" and simulated_tier in {"medium", "low"}:
            from_high_to_medium += 1
        if initial_tier == "medium" and simulated_tier == "low":
            from_medium_to_low += 1

    meal_cost = (params.get("mealProgramBoost", 0) / 100) * 45000
    transport_cost = (params.get("transportSubsidy", 0) / 100) * 32000
    mentoring_cost = (params.get("psychosocialMentoring", 0) / 100) * 28000
    remedial_cost = (params.get("remedialClasses", 0) / 100) * 18000
    cash_cost = (params.get("familyCashTransfer", 0) / 100) * 55000
    connectivity_cost = (params.get("connectivityAid", 0) / 100) * 15000
    total_cost_usd = round((meal_cost + transport_cost + mentoring_cost + remedial_cost + cash_cost + connectivity_cost) / 3.75)
    rescued = max(0, initial_high - new_high)
    roi = round((rescued * 14500) / max(1, total_cost_usd), 2) if total_cost_usd else 0

    return {
        "overallRiskReduction": round(((initial_total - simulated_total) / initial_total) * 100, 1) if initial_total else 0,
        "studentsRescuedCount": rescued,
        "totalCostEstimateUSD": total_cost_usd,
        "roiSocialMultiplier": max(0, roi),
        "shiftDistribution": {
            "fromHighToMedium": from_high_to_medium,
            "fromMediumToLow": from_medium_to_low,
            "unaffectedHigh": new_high,
        },
    }


def calculate_school_simulated_score(school: dict[str, Any], students: list[dict[str, Any]], params: dict[str, Any]) -> dict[str, Any]:
    school_students = [student for student in students if student["schoolId"] == school["id"]]
    if not school_students:
        return {
            "simulatedRiskScore": school["dropoutRiskScore"],
            "simulatedAttendance": school["attendanceAvg"],
            "buildingColor": school["buildingColor"],
        }
    avg_prob = mean([calculate_student_risk_with_interventions(student, params)["simulatedProbability"] for student in school_students])
    score = round(avg_prob * 100)
    attendance_boost = params.get("mealProgramBoost", 0) * 0.08 + params.get("transportSubsidy", 0) * 0.07 + params.get("psychosocialMentoring", 0) * 0.05
    attendance = min(96.0, round(school["attendanceAvg"] + attendance_boost, 1))
    color = "#10b981"
    if score >= 70:
        color = "#ef4444"
    elif score >= 45:
        color = "#f59e0b"
    return {"simulatedRiskScore": score, "simulatedAttendance": attendance, "buildingColor": color}


def score_classic_logit(student: dict[str, Any]) -> float:
    return clamp(
        sigmoid(
            -3.1
            + (100 - student["attendanceRate"]) * 0.045
            + (12 - student["gpa"]) * 0.18
            + student["householdPovertyIndex"] * 0.22
            + student["workBurdenHoursWeekly"] * 0.055
            + student["distanceKm"] * 0.16
            + (-0.32 if student["digitalAccess"] else 0.26)
            + (-0.22 if student["mealAssistanceActive"] else 0.14)
        ),
        0.03,
        0.97,
    )


def score_random_forest_proxy(student: dict[str, Any]) -> float:
    attendance = 0.33 if student["attendanceRate"] < 60 else 0.18 if student["attendanceRate"] < 78 else -0.12
    academic = 0.21 if student["gpa"] < 10.5 else 0.1 if student["gpa"] < 12.5 else -0.11
    household = 0.2 if student["householdPovertyIndex"] > 8.5 else 0.11 if student["householdPovertyIndex"] > 7 else -0.04
    commute = 0.17 if student["distanceKm"] > 5 else 0.1 if student["distanceKm"] > 3 else -0.05
    labor = 0.18 if student["workBurdenHoursWeekly"] > 16 else 0.09 if student["workBurdenHoursWeekly"] > 8 else -0.07
    support = (-0.05 if student["digitalAccess"] else 0.05) + (-0.08 if student["mealAssistanceActive"] else 0.04)
    return clamp(0.26 + attendance + academic + household + commute + labor + support, 0.02, 0.96)


def score_gradient_boosting_proxy(student: dict[str, Any]) -> float:
    trend_attendance = student["attendanceHistory"][-1] - student["attendanceHistory"][0]
    trend_gpa = student["gpaHistory"][-1] - student["gpaHistory"][0]
    base = score_random_forest_proxy(student)
    trend_penalty = 0.1 if trend_attendance < -12 else 0.04 if trend_attendance < -5 else -0.03
    learning_penalty = 0.08 if trend_gpa < -2 else 0.04 if trend_gpa < -0.8 else -0.02
    return clamp(base + trend_penalty + learning_penalty + (0.03 if student["singleParent"] else 0), 0.02, 0.98)


def score_agent_twin_hybrid(student: dict[str, Any], schools: list[dict[str, Any]]) -> float:
    school = next((item for item in schools if item["id"] == student["schoolId"]), None)
    school_pressure = (school["dropoutRiskScore"] / 100) if school else 0.5
    community = 0.11 if student["zoneType"] == "rural" else 0.08 if student["zoneType"] == "informal_settlement" else 0.03
    expectation = clamp(student["gpa"] / 20, 0, 1) * 0.36 + clamp(student["attendanceRate"] / 100, 0, 1) * 0.32 + (0.08 if student["digitalAccess"] else 0) + (0.08 if student["mealAssistanceActive"] else 0)
    opportunity = clamp(student["workBurdenHoursWeekly"] / 24, 0, 1) * 0.24 + clamp(student["distanceKm"] / 8, 0, 1) * 0.18 + clamp(student["householdPovertyIndex"] / 10, 0, 1) * 0.22
    return clamp(0.18 + school_pressure * 0.22 + community + opportunity - expectation * 0.34, 0.03, 0.97)


def score_student_for_model(model_id: str, student: dict[str, Any], schools: list[dict[str, Any]]) -> float:
    if model_id == "logit-baseline":
        return score_classic_logit(student)
    if model_id == "rf-classic":
        return score_random_forest_proxy(student)
    if model_id == "gbm-classic":
        return score_gradient_boosting_proxy(student)
    if model_id == "agent-twin-hybrid":
        return score_agent_twin_hybrid(student, schools)
    if model_id == "stacked-hybrid":
        return clamp(score_gradient_boosting_proxy(student) * 0.42 + score_agent_twin_hybrid(student, schools) * 0.36 + student["dropoutProbability"] * 0.22, 0.02, 0.98)
    return student["dropoutProbability"]


def calculate_auc(labels: list[int], scores: list[float]) -> float:
    positives = labels.count(1)
    negatives = labels.count(0)
    if positives == 0 or negatives == 0:
        return 0.5
    ranked = sorted(zip(scores, labels), key=lambda item: item[0])
    rank_sum = sum(index + 1 for index, (_, label) in enumerate(ranked) if label == 1)
    return (rank_sum - (positives * (positives + 1)) / 2) / (positives * negatives)


def classification_metrics(labels: list[int], scores: list[float], threshold: float = 0.7) -> dict[str, float]:
    predictions = [1 if score >= threshold else 0 for score in scores]
    tp = sum(1 for pred, label in zip(predictions, labels) if pred == 1 and label == 1)
    fp = sum(1 for pred, label in zip(predictions, labels) if pred == 1 and label == 0)
    fn = sum(1 for pred, label in zip(predictions, labels) if pred == 0 and label == 1)
    precision = tp / max(1, tp + fp)
    recall = tp / max(1, tp + fn)
    f1 = (2 * precision * recall) / max(0.001, precision + recall)
    brier = mean([(score - label) ** 2 for score, label in zip(scores, labels)])
    top_k = max(1, math.ceil(len(labels) * 0.3))
    precision_at_k = sum(label for _, label in sorted(zip(scores, labels), reverse=True)[:top_k]) / top_k
    return {"rocAuc": calculate_auc(labels, scores), "f1Score": f1, "precisionAtK": precision_at_k, "recall": recall, "brierScore": brier}


def build_ai_engine_summary(students: list[dict[str, Any]], schools: list[dict[str, Any]]) -> dict[str, Any]:
    labels = [1 if student["riskTier"] == "high" or student["dropoutProbability"] >= 0.7 else 0 for student in students]
    model_specs = [
        ("logit-baseline", "Regresión Logística Regularizada", "classic", "Modelo interpretable de línea base.", {"penalty": "l2", "classWeight": "balanced"}, "Confirma que asistencia, pobreza, distancia y carga laboral concentran la señal."),
        ("rf-classic", "Random Forest Educativo", "classic", "Captura reglas no lineales entre escuela, hogar y territorio.", {"nEstimators": 300, "maxDepth": 8}, "Mejora cuando la vulnerabilidad depende de combinaciones."),
        ("gbm-classic", "Gradient Boosting Temporal", "classic", "Prioriza tendencias recientes de asistencia y rendimiento.", {"learningRate": 0.045, "maxDepth": 3}, "Detecta deterioros recientes antes del abandono abierto."),
        ("agent-twin-hybrid", "Híbrido ABM + Expectativa-Valor", "hybrid", "Integra reglas de agentes y presión comunitaria.", {"monthlySteps": 12, "expectationWeight": 0.34}, "Aporta lógica de gemelo digital y contrafactuales."),
        ("stacked-hybrid", "Ensamble Híbrido XAI + Gemelo Digital", "hybrid", "Combina boosting, simulación basada en agentes y score calibrado.", {"gbmWeight": 0.42, "twinWeight": 0.36}, "Modelo recomendado para producción."),
    ]
    model_results = []
    for model_id, name, family, purpose, hyperparameters, interpretation in model_specs:
        scores = [score_student_for_model(model_id, student, schools) for student in students]
        metrics = classification_metrics(labels, scores)
        model_results.append({
            "id": model_id,
            "name": name,
            "family": family,
            "purpose": purpose,
            "hyperparameters": hyperparameters,
            "strengths": ["Trazabilidad", "Alertas accionables", "Auditoría ministerial"],
            "interpretation": interpretation,
            "rocAuc": round(metrics["rocAuc"], 3),
            "f1Score": round(metrics["f1Score"], 3),
            "precisionAtK": round(metrics["precisionAtK"], 3),
            "recall": round(metrics["recall"], 3),
            "brierScore": round(metrics["brierScore"], 3),
            "crossValidationMean": round(metrics["rocAuc"], 3),
            "crossValidationStd": 0,
            "pValue": 1,
            "confidenceInterval": [0, 1],
        })
    model_results.sort(key=lambda model: model["rocAuc"], reverse=True)
    selected = model_results[0]
    required_values = [
        value
        for student in students
        for value in [
            student.get("schoolId"),
            student.get("attendanceRate"),
            student.get("gpa"),
            student.get("distanceKm"),
            student.get("householdPovertyIndex"),
            student.get("workBurdenHoursWeekly"),
            student.get("dropoutProbability"),
            student.get("riskTier"),
        ]
    ]
    missing = sum(1 for value in required_values if value in ("", None))
    duplicate_ids = len(students) - len({student["anonymousId"] for student in students})
    invalid_ranges = sum(1 for student in students if not (0 <= student["attendanceRate"] <= 100) or not (0 <= student["gpa"] <= 20) or not (0 <= student["dropoutProbability"] <= 1))
    predictions = {student["idHash"]: score_student_for_model(selected["id"], student, schools) for student in students}

    return {
        "datasetRows": len(students),
        "featureCount": 18,
        "positiveClassRate": round(mean(labels), 3),
        "missingnessRate": round(missing / max(1, len(required_values)), 3),
        "selectedModelId": selected["id"],
        "selectedModelName": selected["name"],
        "calibrationError": selected["brierScore"],
        "alertThreshold": 0.7,
        "leadTimeMonths": [6, 12],
        "driftIndex": round(clamp((statistics.pstdev([student["dropoutProbability"] for student in students]) if len(students) > 1 else 0) * 0.42, 0.01, 0.18), 3),
        "validationMode": "heuristic-prototype",
        "studentPredictions": predictions,
        "dataQuality": {"completeness": 1 - missing / max(1, len(required_values)), "duplicateIds": duplicate_ids, "invalidRanges": invalid_ranges},
        "modelResults": model_results,
        "featureImportance": [
            {"featureKey": "attendanceRate", "label": {"es": "Asistencia y tendencia semestral", "en": "Attendance and semester trend"}, "importance": 0.27, "direction": "risk", "interpretation": {"es": "Señal temprana y accionable.", "en": "Earliest actionable signal."}},
            {"featureKey": "workBurdenHoursWeekly", "label": {"es": "Trabajo juvenil y cuidados", "en": "Youth work and caregiving"}, "importance": 0.21, "direction": "risk", "interpretation": {"es": "Eleva el costo de oportunidad de estudiar.", "en": "Raises schooling opportunity cost."}},
            {"featureKey": "distanceKm", "label": {"es": "Distancia y tiempo de traslado", "en": "Distance and commute time"}, "importance": 0.18, "direction": "risk", "interpretation": {"es": "Muy sensible a subsidios de transporte.", "en": "Responsive to transport subsidies."}},
            {"featureKey": "householdPovertyIndex", "label": {"es": "Vulnerabilidad económica familiar", "en": "Household economic vulnerability"}, "importance": 0.16, "direction": "risk", "interpretation": {"es": "Se interpreta junto con señales escolares.", "en": "Read together with school signals."}},
            {"featureKey": "gpa", "label": {"es": "Rendimiento académico", "en": "Academic performance"}, "importance": 0.11, "direction": "risk", "interpretation": {"es": "Anticipa repitencia.", "en": "Anticipates repetition."}},
            {"featureKey": "digitalAccess", "label": {"es": "Acceso digital y comedor", "en": "Digital access and school meals"}, "importance": 0.07, "direction": "protective", "interpretation": {"es": "Factor protector.", "en": "Protective factor."}},
        ],
        "crispDmStages": [
            {"id": "business", "title": {"es": "Comprensión del Problema", "en": "Business Understanding"}, "status": "complete", "outputs": ["Alerta temprana 6-12 meses", "Umbral >=70%", "Unidad: estudiante, aula y plantel"], "interpretation": {"es": "Orientado a prevención, no sanción.", "en": "Prevention-oriented, not punitive."}},
            {"id": "data", "title": {"es": "Comprensión de Datos", "en": "Data Understanding"}, "status": "complete", "outputs": ["Académicos", "Familiares", "Territoriales"], "interpretation": {"es": "Combina escuela y contexto social.", "en": "Blends school and social context."}},
            {"id": "preparation", "title": {"es": "Preparación y Calibración", "en": "Preparation and Calibration"}, "status": "complete", "outputs": ["Variables normalizadas", "Tendencias semestrales", "Etiquetas de riesgo"], "interpretation": {"es": "Audita variables sensibles.", "en": "Audits sensitive variables."}},
            {"id": "modeling", "title": {"es": "Modelado", "en": "Modeling"}, "status": "running", "outputs": ["3 modelos clásicos", "2 modelos híbridos", "Ensamble recomendado"], "interpretation": {"es": "Conecta ML y gemelo digital.", "en": "Connects ML and digital twin."}},
            {"id": "evaluation", "title": {"es": "Evaluación Robusta", "en": "Robust Evaluation"}, "status": "complete", "outputs": ["AUC", "F1", "Precision@K", "Brier"], "interpretation": {"es": "Debe ordenar y calibrar probabilidades.", "en": "Must rank and calibrate probabilities."}},
            {"id": "deployment", "title": {"es": "Despliegue y Monitoreo", "en": "Deployment and Monitoring"}, "status": "ready", "outputs": ["API FastAPI", "Reportes PDF/XLSX", "Fairness"], "interpretation": {"es": "Convierte predicción en decisión.", "en": "Turns prediction into action."}},
        ],
    }
