# Cola de tareas: Profesionalización del Motor IA

Cada tarea → TRs locales (rule/rubric) → Status → Evidence

---

## Task 1: Añadir dependencias ML reales y módulo de pipeline en Python

**Priority**: high
**Depends on**: —
**Coverage AC**: rule-1, rule-5, rubric-12

### Descripción
Actualizar `requirements.txt` con `scikit-learn, scipy, shap, numpy`. Crear `backend/ml_pipeline.py` que implementa el pipeline FR-01 y FR-02 de spec.md: preprocesamiento → train/test split → 5 modelos sklearn → StratifiedKFold CV → permutation importance → SHAP → curvas → matriz de confusión → tests estadísticos scipy (t-test pareado, Mann–Whitney, McNemar, Shapiro–Wilk, KS, IC 95% bootstrap 1000 iters, ANOVA/Kruskal). La función principal `run_training_pipeline(students, schools, config)` retorna un dict compatible con los nuevos tipos de TS. Cada prueba estadística lleva `interpretation.es` y `interpretation.en`.

### TR locales
- **rule**: `ml_pipeline.py` se importa sin error y `run_training_pipeline(demo_students, demo_schools)` retorna dict con claves `modelResults, foldMetrics, statisticalTests, rocCurves, prCurves, calibrationBins, confusionMatrices, learningCurves, featureImportancePerm, shapSummary, edaStats` todas no vacías.
- **rule**: statisticalTests.ttest.pValue es float ∉ {0, 1}; crossValidationStd > 0 para todos los modelos.
- **rubric (rigor estadístico)**: Se implementan al menos 5 tests de FR-02 con scipy reales; p-values son numéricos no triviales.
  - score=2 si 6+ tests y bootstrap IC 95%; score=1 si 3-4 tests; score=0 si <3 o hardcodeado.

---

## Task 2: Extender FastAPI con endpoints de entrenamiento y mejorar reportes

**Priority**: high
**Depends on**: Task 1
**Coverage AC**: rule-5, rule-8

### Descripción
En `backend/main.py`:
1. Importar `run_training_pipeline`.
2. Añadir `POST /api/ai/train` con body `{students, schools, config?}`.
3. Añadir `POST /api/ai/upload-train` multipart: lee CSV/XLSX con pandas, convierte al formato de Student compatible (autodetecta columnas), corre pipeline.
4. Mejorar `build_excel` para incluir hojas *"Pruebas Estadísticas"* y *"Interpretación Métricas"* (glosario).
5. Mantener backward-compat: si no hay trainedResult, endpoints antiguos siguen devolviendo heuristic.

### TR locales
- **rule**: `POST /api/ai/train` con seed demo retorna 200; JSON incluye `statisticalTests` con al menos 6 tests y `rocCurves[0].fpr` array >20 elementos.
- **rule**: `POST /api/reports` format=xlsx retorna Excel con al menos 6 sheets (confirmar por inspección de nombres).
- **rule**: Endpoint `/api/ai/summary` viejo sigue funcionando y retorna campos antiguos.

---

## Task 3: Actualizar types.ts y servicio mlEngine.ts con tipos y cliente API de entrenamiento

**Priority**: high
**Depends on**: Task 1 (referencia de forma)
**Coverage AC**: rule-1, rule-5

### Descripción
En `src/types.ts`:
- Añadir interfaces: `TrainingConfig`, `FoldMetricsByModel`, `StatTestResult` (genérico), `StatisticalTestsBlock` (con los 6 tests + ANOVA), `RocCurve`, `PrCurve`, `CalibrationBin`, `ConfusionMatrix`, `LearningCurve`, `FeatureImportancePerm`, `ShapSummary`, `EdaColumnStats`, `TrainingPipelineResult`.
- Extender `AiEngineSummary` con `trainingPipelineResult?: TrainingPipelineResult` y `validationMode: 'heuristic-prototype' | 'trained'`.

En `src/services/mlEngine.ts`:
- Añadir funciones `trainAiEngine(students, schools, config?)` → fetch POST /api/ai/train, `uploadCsvAndTrain(file, config?)` → FormData POST /api/ai/upload-train. Manejar loading/error.

### TR locales
- **rule**: `tsc --noEmit` compila sin error tras añadir tipos.
- **rule**: `trainAiEngine` retorna objeto que satisface `TrainingPipelineResult` (type guard: keys modelResults.length > 0).

---

## Task 4: Instalar Recharts y construir biblioteca de gráficos profesionales reutilizables

**Priority**: high
**Depends on**: Task 3
**Coverage AC**: rule-2, rubric-10

### Descripción
1. Ejecutar `npm install recharts` (o `npm i recharts`).
2. Crear `src/components/aiEngine/charts/` con componentes reutilizables:
   - `AucRocChart.tsx`: ROC multicurve con referencia diagonal, fill gradient, tooltip con AUC, Sens, Spec, 1-FPR.
   - `PrCurveChart.tsx`: Precision–Recall con baseline = positive rate, fill gradient.
   - `ConfusionMatrixHeatmap.tsx`: 2×2 heatmap con gradient red→green, tooltips TP/FP/FN/TN + % y counts.
   - `CvFoldBoxPlot.tsx`: Box-and-whisker SVG por modelo (Q1/mediana/Q3/min/max outliers), paleta por familia.
   - `CalibrationCurve.tsx`: Reliability diagram + perfect diagonal + barras de histograma de probabilidad en eje dual (o secundario pequeño).
   - `LearningCurveChart.tsx`: Train score vs CV score vs training size; shaded band ± std.
   - `FeatureImportanceChart.tsx`: Barras horizontales ordenadas + error bars (±std); color según risk/protective.
   - `ShapBeeswarmSummary.tsx`: Scatter aproximado tipo beeswarm (Y = feature, X = SHAP value) con color de valor feature (min→max en palette).
   - `ShapWaterfallLocal.tsx`: Waterfall estilo SHAP para una observación (base value → sum of contributions → final prob).
   - `HistogramGrid.tsx` + `BoxplotByTargetChart.tsx` + `CorrelationHeatmap.tsx` para EDA.
   - `VolcanoStatPlot.tsx`: (X = ΔAUC vs baseline, Y = -log10 p-value) con threshold lines α=0.05.
3. Cada gráfico usa `<ResponsiveContainer>`, paleta coherente con cockpit (cyan/teal/amber/rose/emerald), tooltips con backdrop-blur, títulos mono-style, eyebrow.

### TR locales
- **rule**: Cada componente gráfico renderiza SVG sin error al montarse con data demo mínima (prop test).
- **rubric (estética gráfica)**:
  - score=2 si TODOS los gráficos tienen gradiente de fill, grids sutil, tooltips customizados, paleta cockpit sin colores discordantes, animaciones `motion` fade-in al montar.
  - score=1 si faltan gradientes o tooltips en >2 gráficos pero paleta coherente.
  - score=0 si hay colores que chocan o gráficos sin ejes/leyendas.

---

## Task 5: Construir componente universal InterpretedMetric + interpretabilidad en tablas

**Priority**: medium
**Depends on**: Task 3
**Coverage AC**: rule-3, rubric-9

### Descripción
1. Crear `src/components/aiEngine/InterpretedMetric.tsx` con props: `label`, `value`, `format?`, `tone?`, `definitionTooltip`, `thresholdInterpretation`, `goodWhen: 'gt'|'lt'|'eq'`, `threshold`. Renderiza valor + (?) icono con tooltip flotante con definición + umbral + interpretación automática (ej: "AUC = 0.91 · ≥0.9 excelente / ≥0.8 aceptable; tu modelo supera ambos").
2. Crear diccionario `src/components/aiEngine/metricGlossary.ts` con definiciones ES+EN para: AUC, F1, Precision@K, Recall, Brier, CV mean±std, p-value, IC 95%, t-Statistic, U statistic, McNemar χ², Shapiro W, KS statistic, ECE, TP/FP/FN/TN, SHAP value, Perm Importance, KS statistic.
3. Refactorizar KPI tiles del Panel CRISP, tabla de modelos y tabla de pruebas estadísticas para usar `<InterpretedMetric>` en cada celda numérica.
4. Añadir columna `Interpretación` textual en tabla de modelos (1-2 frases por fila, desde `modelResult.interpretation` o generada dinámicamente según thresholds).

### TR locales
- **rule**: En la tabla principal de modelos hay al menos 6 tooltips diferentes al hacer hover en columnas numéricas; cada tooltip contiene palabra métrica + definición + umbral.
- **rubric (calidad interpretabilidad textual)**:
  - score=2 si las interpretaciones mencionan costos/beneficios operativos o umbrales del dominio educativo (ej: "FPR alto costea $$ en tutorías innecesarias", "AUC <0.7 insuficiente para alertar con 6m de antelación").
  - score=1 si son correctas pero genéricas.
  - score=0 si faltan tooltips en >3 columnas.

---

## Task 6: Rehacer secciones dinámicas del AiEngineDashboard (EDA, Training, Validation, Stats, XAI) y barra de progreso de entrenamiento

**Priority**: high
**Depends on**: Tasks 2, 3, 4, 5
**Coverage AC**: rule-1, rule-2, rule-4, rule-6, rule-7, rubric-11

### Descripción
1. Estado React: añadir `trainingResult?: TrainingPipelineResult`, `trainingStatus = 'idle' | 'loading' | 'done' | 'error'`, `progressStage` (enum 0-7 para pipeline stages), `trainingConfig`.
2. **Vista Intake (Carga de Datos)** actualizada:
   - Después de subir CSV: mostrar `<EdaPreviewTable>` (20 primeras filas) y `<EdaDescriptiveStats>` (count/mean/std/min/p25/p50/p75/max/missing%) usando datos reales del uploaded dataset.
   - Nueva card **"Pipeline de entrenamiento"** con: selección de `targetColumn` (default: `dropoutProbability` → binarizar si necesario), `cvFolds` (3-10, default 5), `testSize` (0.15-0.4, default 0.25), `randomSeed`.
   - Botón **"🚀 Entrenar Modelos Ahora"** → llama `uploadCsvAndTrain` o `trainAiEngine` (según fuente).
   - Al entrenar: mostrar `<TrainingProgressTracker>` animado con 7 pasos, cada paso con barra de progreso independiente y checkmarks al terminar (usar `motion` para animar barras).
3. **Reescribir cada sección** para usar `trainingResult` si existe, sino fallback a heurístico + banner "Modo demo heurístico". Secciones:
   - **EDA**: HistogramGrid (6 vars), BoxplotByTarget (asistencia, gpa, distancia, carga laboral, pobreza), CorrelationHeatmap top-10, Missingness bars.
   - **Training**: Comparative bar chart AUC/F1/P@K + donut familia; tabla de modelos con InterpretedMetric + columna Interpretación.
   - **Validation**: CvFoldBoxPlot (5 folds × 5 models), AucRocChart multi-curve, PrCurveChart, ConfusionMatrixHeatmap (ganador + threshold 0.5 y 0.7), CalibrationCurve, LearningCurveChart.
   - **Stats**: Tabla con 6 tests (cada fila = InterpretedMetric del estadístico + badge de significancia ☑/✗ + celda Interpretación con 1-2 frases del dict `statisticalTests[*].interpretation[language]`). Añadir VolcanoStatPlot.
   - **XAI**: FeatureImportanceChart con error bars (perm importance), ShapBeeswarmSummary, selector de estudiante → ShapWaterfallLocal.
   - **Alert**: Mantenida, pero `studentPredictions` ahora vienen de `trainingResult.testPredictions` si está entrenado.
4. **Banner top entrenamiento**: cuando `trainingResult` existe, un pill persistente "MOTOR ENTRENADO · {models.length} modelos · {cvFolds} CV folds · seed {seed}" con timestamp y botón "↻ Reentrenar".

### TR locales
- **rule (flujo train)**: Con dataset demo, simular clic en Entrenar (usando mock de trainAiEngine que devuelve result); al terminar, el estado `validationMode` pasa a 'trained' y `trainingResult` no es null, CvFoldBoxPlot muestra 25 cajas mínimo (5 folds × 5 models).
- **rule (tablas interpretables)**: Tabla modelos tiene columna Interpretación con longitud >10 chars por fila. Tabla stats tiene ≥6 filas tests, cada una con texto interpretación no vacío.
- **rule (CSV dynamic)**: Al subir CSV con al menos 100 filas y columnas compatibles (mock file upload en test), EDA muestra count = n-rows, training no da error.
- **rubric (fidelidad flujo)**:
  - score=2 si ProgressTracker animado muestra 7 pasos; banner "Modo demo heurístico" desaparece; secciones bloqueadas sin training muestran elegant CTA; no hay page-refresh.
  - score=1 si flujo existe pero sin CTA ni progress.
  - score=0 si sigue estático.
- **rubric (estética)**: Hereda de Task 4; aplicar aquí: staggered fade-in de cards, count-up de métricas al terminar, skeleton shimmer mientras entrena.

---

## Task 7: Integrar trainingPipelineResult en FastAPI /api/ai/summary y validar flujo end-to-end + lint

**Priority**: medium
**Depends on**: Tasks 1-6
**Coverage AC**: rule-1, rule-5, rule-7, reglas globales tipo "todo compila"

### Descripción
1. Actualizar `backend/main.py` endpoint `/api/ai/summary` y `backend/engine.py::build_ai_engine_summary` para que, si reciben flag `use_trained_pipeline=true` o hay un `last_pipeline` en memoria (cache módulo level), fusionen `TrainingPipelineResult` dentro del summary y pongan `validationMode='trained'`.
2. En frontend, al montar AiEngineDashboard: si user lo desea (botón en intake) puede entrenar automáticamente con seed demo o usar heurístico.
3. **Validación de calidad**:
   - Ejecutar `npm run lint` / `tsc --noEmit`.
   - Ejecutar Python `python -c "from backend.ml_pipeline import run_training_pipeline; from backend.data import get_seed_data; s,st,_=get_seed_data(); r=run_training_pipeline(st,s); print(sorted(r.keys())); assert r['statisticalTests']['ttest']['pValue'] is not None"` sin excepciones.
   - FastAPI smoke: levantar uvicorn en background, curl /api/health, /api/ai/summary, POST /api/ai/train con body demo → 200.
4. Corrección de cualquier error de tipos / lint encontrado.

### TR locales
- **rule**: `tsc --noEmit` retorna exit code 0.
- **rule**: smoke Python devuelve todas las keys del pipeline sin excepción, p-value != 1.
- **rule**: smoke FastAPI, POST /api/ai/train → 200, content-type json, response json.modelResults.length >= 3.

---

## Task 8: Revisión independiente y remediación

**Priority**: high
**Depends on**: Tasks 1-7 completados y self-verified
**Coverage AC**: TODOS los ACs re-verificados

### Descripción
Revisión independiente pasada por reviewer separado (subagente):
- Leer spec.md, tasks.md.
- Correr tests humo de frontend + backend.
- Verificar cada rule (1-8): observabilidad de pass.
- Puntuar cada rubric (9-12) con justificación y evidencia.
- Generar findings accionables en tasks.md como issues pending.
- Remediación por implementer antes de cerrar.

### TR locales
- **rule**: review.md existe y contiene checkpoint de cada AC pasado/fallo/bloqueado.
- **rule**: Si review = fail, tasks.md tiene al menos 1 issue pendiente accionable creado antes de re-enter implementación.
- **Final pass**: Todos los AC rule tienen passing evidence; cada rubric ≥ threshold (≥ 1 para cada uno, preferentemente 2).
