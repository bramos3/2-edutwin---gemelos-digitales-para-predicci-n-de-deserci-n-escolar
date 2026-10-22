# Especificación: Profesionalización del Motor IA — Interpretabilidad, Entrenamiento Real, Validación Cruzada y Gráficos

## Problema

El Motor IA actual de EduTwin opera en modo `heuristic-prototype`: todas las métricas (AUC, F1, cross-validation mean/std, p-value, IC 95%) y gráficos son valores fijos o pseudo-calculados mediante funciones de scoring codificadas a mano. Los usuarios dejan de confiar en el panel porque:

- Las secciones **Pruebas Estadísticas** y **Validación Cruzada** muestran `N/D` o marcan `NO VALIDADO`.
- No existe un flujo real de **cargar dataset → preprocesar → entrenar → evaluar**.
- Las tablas de resultados no incluyen **interpretabilidad** ni **explicabilidad** textual por cada fila/columna/métrica.
- Al subir un CSV, el EDA y las métricas no se recalculan dinámicamente.
- No hay gráficos profesionales de ROC, PR, curva de calibración, matriz de confusión, SHAP, learning curves.

## Usuarios y objetivos

| Usuario                             | Objetivo                                                                                                                                                                                                                                  |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Investigador / Gestor educativo** | Cargar su dataset real (CSV/XLSX), ejecutar entrenamiento manual, obtener validación cruzada real (KFold estratificado), pruebas estadísticas (t-test, Mann–Whitney, IC 95%, Shapiro, KS, McNemar) y entender qué significa cada métrica. |
| **Director / Toma de decisiones**   | Leer interpretación en lenguaje natural en cada tabla, gráfico y celda para confiar en las alertas.                                                                                                                                       |
| **Auditor / Ético**                 | Ver trazabilidad: qué datos entraron, qué hiperparámetros se usaron, qué tests validan que el modelo no es azar, qué variables mueven cada predicción (SHAP).                                                                             |

## Objetivos (Must-have)

1. **Pipeline de entrenamiento real en backend (Python/scikit-learn/scipy)**: preprocesamiento → split train/test estratificado → entrenamiento de 3-5 modelos → **Stratified K-Fold Cross-Validation** con métricas por fold → **pruebas estadísticas** → **SHAP** → curvas (ROC, PR, calibración, aprendizaje) → matriz de confusión.
2. **Flujo de carga y entrenamiento manual en frontend**: subir CSV/XLSX → preview → botón **"Entrenar Modelos"** con barra de progreso → todas las secciones se recalculan y re-renderizan.
3. **Interpretabilidad en TODAS las tablas y reportes**: cada métrica, columna y fila lleva una explicación (tooltip o celda dedicada) en lenguaje natural indicando _qué significa_, _umbral de aprobación_ y _por qué importa_.
4. **Gráficos profesionales estilo Streamlit/scikit-learn**: ROC curve con AUC, Precision-Recall, Calibration (reliability), Confusion Matrix heatmap, CV boxplot por fold, Learning curve, Feature importance con barras de error, SHAP summary estilo beeswarm.
5. **Diseño visual bello y profesional**: mantener dark-theme cockpit, añadir animaciones con Motion, tooltips flotantes, layouts lado a lado, gradientes sutiles, micro-interacciones en cada card y gráfico.

## No objetivos (out of scope)

- Modificar el simulador 3D, el chatbot LLM, la vista ética o el centro de reportes (salvo que consuman nuevas métricas del pipeline).
- Implementar AutoML avanzado, deep learning, PyTorch o LLMs para scoring.
- Cambiar la base de datos ni el sistema de autenticación/permisos.
- Despliegue en nube (solo local con FastAPI + Vite dev/prod).

## Requisitos funcionales

### FR-01 Pipeline ML real (backend)

- El backend expone `POST /api/ai/train` que recibe `{dataset, targetColumn, positiveClass, cvFolds, testSize, randomSeed}` y opcionalmente `csvBase64`.
- El pipeline ejecuta:
  1. **Preprocesamiento**: `StandardScaler` en numéricas, `OneHotEncoder(drop='first', sparse_output=False)` en categóricas, vía `ColumnTransformer`.
  2. **Split estratificado** `train_test_split(stratify=y, test_size=testSize)`.
  3. **Entrenamiento de 5 modelos**: `LogisticRegression(class_weight='balanced', max_iter=2000)`, `RandomForestClassifier(class_weight='balanced')`, `GradientBoostingClassifier`, `HistGradientBoostingClassifier(class_weight='balanced')`, y un `VotingClassifier`/Stacking opcional.
  4. **StratifiedKFold(cvFolds)** con scoring `roc_auc, f1, precision, recall, average_precision`. Devuelve scores POR FOLD para cada modelo.
  5. **Permutation importance** sobre test set con `n_repeats=10` e intervalo de confianza ± desviación estándar.
  6. **SHAP**: `TreeExplainer` para árboles; `LinearExplainer` para LR. Devuelve `shapValues`, `expectedValue`, top-10 features globales y valores locales por observación (o una muestra representativa).
  7. **Curvas**: `roc_curve`, `precision_recall_curve`, `calibration_curve(n_bins=10, strategy='quantile')`, learning curve con `cv=5` y 5 puntos de training size.
  8. **Confusion matrices** por modelo con `threshold=0.5` y con `threshold=alert_threshold`.
  9. **Calibration**: Brier score, Expected Calibration Error (ECE) promedio ponderado.
- El pipeline devuelve una estructura `TrainingPipelineResult` unificada con todo lo anterior + metadata (runtime, timestamp, n_rows, n_features, positive_rate, missing_rate_per_column).

### FR-02 Pruebas estadísticas profesionales

Dentro de `TrainingPipelineResult`, un bloque `statisticalTests` contiene:

| Test                                   | Propósito                                                        | Salida mínima                                                                       |
| -------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **t-test pareado (Student)**           | Comparar AUC CV del mejor modelo vs LogReg baseline.             | `tStatistic`, `pValue`, `df`, `significance` (alpha=0.05) e interpretación textual. |
| **Mann–Whitney U (Wilcoxon rank-sum)** | Versión no paramétrica de comparación de scores.                 | `uStatistic`, `pValue`, interpretación.                                             |
| **McNemar**                            | Comparar clasificadores a nivel de predicciones por observación. | `chi2`, `pValue`, `nDisagree`, interpretación.                                      |
| **Shapiro–Wilk**                       | Normalidad de residuos / scores.                                 | `wStatistic`, `pValue`, si es normal o no.                                          |
| **Kolmogorov–Smirnov (KS)**            | Comparar distribución de scores predicción vs clase real.        | `ksStatistic`, `pValue`, interpretación.                                            |
| **IC 95% del AUC**                     | Bootstrap BCa (1000 iters) o aproximación DeLong.                | `lower95`, `upper95`, `method`, `pointEstimate`.                                    |
| **ANOVA / Kruskal–Wallis**             | Si hay 3+ modelos, comparar distribuciones AUC CV.               | `statistic`, `pValue`, `posthoc` (si significativo) con pares diferentes.           |

Cada test lleva un campo `interpretation[es|en]` con un texto de dos líneas explicando qué significa el resultado en contexto educativo (ej: _"El p-value < 0.001 indica que el ensamble supera a la regresión logística de manera estadísticamente significativa; la probabilidad de que esta diferencia sea azar es menor al 0.1%"_).

### FR-03 Endpoints FastAPI complementarios

- `POST /api/ai/upload-train`: acepta `multipart/form-data` con CSV/XLSX + JSON de configuración y ejecuta FR-01 directamente.
- `GET /api/ai/training/{run_id}/status`: (opcional) progreso de entrenamiento en tiempo real.
- `POST /api/ai/predict` (ampliado): dado una fila de features y el modelo seleccionado, devuelve probabilidad, tier, SHAP waterfall local, IC 95% individual.
- `POST /api/reports` (mejorado): al exportar Excel/PDF ahora incluye la hoja _"Pruebas Estadísticas"_ y una hoja _"Interpretación de Métricas"_ con glosario.

### FR-04 Carga de dataset y entrenamiento manual (frontend)

- En la vista **Carga de Datos** (`intake`): tras subir CSV/XLSX, se muestra un **preview tabular interactivo** (primeras 20 filas), **estadística descriptiva** (`count, mean, std, min, 25%, 50%, 75%, max, missing%`) por columna y selección de **columna objetivo** (default: `dropout_probability` o `risk_tier` convertido a 0/1) y **clase positiva**.
- Nueva card con botón primario **"🚀 Entrenar Modelos Ahora"** que:
  1. Envía dataset + configuración al backend.
  2. Muestra una **ProgressTracker animado** con 7 pasos (Preprocesamiento → Split → Train × 5 → Cross-Val → SHAP → Curvas → Tests estadísticos) con barras de progreso por etapa.
  3. Al finalizar, **persiste el resultado** en React state (`trainingResult`) y **todas las vistas se recalculan** usando datos reales en vez de `buildAiEngineSummary` heurístico.
- Si no hay entrenamiento, se muestra un banner elegante "Modo demo heurístico activo — entrena el modelo para métricas validadas" con CTA hacia la vista de entrenamiento.

### FR-05 Interpretabilidad en todas las tablas y métricas

Regla global: **ningún número queda sin explicación**. Implementar un componente `<InterpretedMetric value={..} label={..} definition={..} goodWhen={..} threshold={..} interpretation={..} />` y usarlo en:

- **KPI tiles** del panel CRISP.
- **Tabla de comparación de modelos**: columna _Interpretación_ por fila + tooltip en `AUC` (_"Area Under ROC — 0.5=azar, ≥0.8=aceptable, ≥0.9=excelente para alerta temprana"_), `F1`, `Precision@K`, `CV mean±std`, `p-value` (_"Probabilidad de observar esta diferencia si el modelo no tuviera poder predictivo; <0.05 descarta azar"_), `IC 95%`.
- **Tabla de pruebas estadísticas**: cada fila = 1 test, con columnas `Estadístico`, `p-value`, `α=0.05`, `¿Significativo?`, `Interpretación (texto)`.
- **Matriz de confusión**: cada celda (TP, FP, FN, TN) lleva tooltip: _"Falsos positivos: estudiantes etiquetados sanos que el modelo alerta — costo operativo por intervención innecesaria"_.
- **Matriz de correlación / EDA**: tooltip por variable (_"R de Pearson entre asistencia y riesgo; un valor negativo fuerte indica que a menor asistencia mayor riesgo"_).
- **Feature importance**: tooltip _"Importancia por permutación sobre test set; la barra roja = factor de riesgo; verde = factor protector"_ + texto de interpretación por variable.

### FR-06 Gráficos profesionales

Usar **Recharts** como librería (instalar dependencia). Cada gráfico:

- Título claro, eyebrow en mono con nombre técnico, grid sutil, ejes tipográficos, tooltips flotantes con valores y mini-interpretación.
- Responsive, con layout `grid-cols-1 xl:grid-cols-2` para comparación lado a lado.

Gráficos mínimos por sección:

| Vista                      | Gráficos                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **EDA**                    | Histogramas por variable numérica (grid 3 cols), boxplot estratificado por target (asistencia, GPA, distancia, carga laboral, pobreza), correlation heatmap SVG (top-10 vars), barras de missingness %.                                                                                                                                                                                                         |
| **Training**               | Barras comparativas AUC/F1/Precision@K por modelo, donut de familia (clásico vs híbrido) con animación.                                                                                                                                                                                                                                                                                                         |
| **Validation (Cross-Val)** | **Boxplot AUC por fold y modelo** (5-10 boxes lado a lado), **ROC curve** multiclasif con línea de referencia diagonal y AUC en tooltip, **Precision–Recall curve** con AP, **Confusion matrix heatmap** 2×2 con gradient y tooltips por celda, **Calibration curve** (reliability diagram) + histograma de probabilidades predichas, **Learning curve** (train score vs cross-val score vs training set size). |
| **Statistical tests**      | Tabla principal + **volcano-style plot** (x=diferencia AUC, -log10 p-value en y) mostrando significancia.                                                                                                                                                                                                                                                                                                       |
| **XAI / Explainability**   | **Feature importance con error bars** (perm importance ± std), **SHAP summary beeswarm** aproximado (eje Y = feature, eje X = SHAP value, color = valor de feature), **Waterfall** local para un estudiante seleccionable.                                                                                                                                                                                      |
| **Early warning**          | Distribución de riesgo (histograma + línea umbral), **Alert heatmap** por escuela×grado, cola priorizada.                                                                                                                                                                                                                                                                                                       |

### FR-07 Diseño visual y micro-interacciones

- Mantener dark-theme cockpit existente (`--bg-cockpit`, `--accent-primary: #14b8a6`, `--accent-secondary: #c9a968`, `--accent-danger: #f43f5e`).
- Añadir gradientes a gráficos (ej: ROC AUC fill con `url(#rocGradient)` 0.15 de opacidad, Calibration fill).
- Animaciones `framer-motion`:
  - Staggered fade-in de cards al entrar a una sección.
  - Count-up animado de métricas al terminar el entrenamiento.
  - Skeleton loaders de 1.2s con shimmer mientras llegan datos del backend.
  - Hover lift en todas las metric cards (`translateY(-2px)`, `box-shadow` más intenso).
- Tooltips tipo `floating popover` con `backdrop-blur` y bordes de color según el tono de la métrica.
- Tablas con `sticky header`, zebra sutil, y fila destacada del modelo ganador con `left-border accent` + fondo 12% accent.
- Leyendas siempre presentes + glosario colapsable "¿Cómo se interpreta esto?" en cada panel principal.

## Restricciones, dependencias y supuestos

### Dependencias nuevas

- **Python**: `scikit-learn`, `scipy`, `shap`, `numpy` (añadir a `requirements.txt`). Mantener `pandas, openpyxl`.
- **Frontend**: `recharts` (React charts, MIT license). `framer-motion` ya está instalado (`motion`).

### Suposiciones

- El usuario proporcionará CSV/XLSX con columnas numéricas/categóricas. La columna objetivo debe ser binaria (0/1 o low/high convertido). Si hay missing values, el pipeline hace **SimpleImputer(strategy='median')** en numéricas y **'missing'** en categóricas, y reporta missingness %.
- El dataset demo de `mockData.ts` + `get_seed_data` se convierte al formato de pandas y se puede usar para entrenar de demostración.
- SHAP `TreeExplainer` puede ser costoso en datasets grandes: se calculará con `max_evals='auto'` y un sample de 300 filas top+bottom para waterfall/summary. Se muestra un aviso si el dataset > 10k filas.
- El entrenamiento es sincrónico en FastAPI con timeout razonable (30s), con mensaje de timeout si tarda >30s y sugerencia de usar dataset demo.

### Restricciones no funcionales

- **Performance**: entrenamiento con dataset demo (~500 filas × 18 cols) debe completar en < 15 segundos. Dataset real hasta 10k filas × 50 cols: < 60 s.
- **Compatibilidad**: sin breaking changes en tipos existentes de `AiEngineSummary`; se añade un campo `trainingPipelineResult?: TrainingPipelineResult` y las vistas lo consumen cuando está presente (feature-flag).
- **Idioma**: todas las interpretaciones en `es` y `en` (diccionario paralelo, igual que `label`/`interpretation` actuales).
- **Accesibilidad mínima**: contraste WCAG AA en gráficos (colores cyan/amber/rose sobre fondo oscuro pasan), tooltips con `aria-label`, tablas con `scope=col/row`.

## Preguntas abiertas (serán resueltas durante implementación con defaults razonables)

1. ¿Cuántos folds por defecto para CV? → **5 folds** (estándar scikit-learn).
2. ¿Test size por defecto? → **0.25** (25%).
3. ¿Alpha tests estadísticos? → **0.05** (convencional).
4. ¿Semilla aleatoria? → **42** (reproducibilidad).

## Criterios de aceptación (Acceptance Criteria)

### Reglas (rule)

1. **Pipeline real**: Después de presionar "Entrenar Modelos Ahora" con dataset demo, el resultado contiene `modelResults[i].crossValidationMean`, `crossValidationStd` y `pValue` distinto de 1/0 fijos. Al menos 1 modelo tiene `pValue < 0.05` vs baseline LogReg.
2. **Gráficos renderizan**: Todas las vistas (`eda`, `training`, `validation`, `stats`, `xai`, `alert`) muestran al menos 1 gráfico Recharts renderizado correctamente (SVG válido en DOM) y no hay errores de consola al navegar entre pestañas.
3. **Interpretability everywhere**: Cada número > 0 cifras en KPI tiles y cada columna de las tablas de modelos/tests tiene un tooltip visible en hover con definición de la métrica y umbral de aprobación.
4. **Validación cruzada real**: El boxplot de Cross-Val muestra `cvFolds` boxes por modelo (5 cajas × 5 modelos = 25 cajas), cada una con Q1/mediana/Q3 calculados desde `scoresByFold[modelId]` reales del backend.
5. **Endpoints nuevos**: `POST /api/ai/train` retorna 200 con payload JSON que incluye `statisticalTests.ttest`, `shapValues`, `rocCurves`, `confusionMatrices` y `learningCurves` con longitud > 0.
6. **Tablas con interpretación**: En la tabla principal de modelos existe una columna _Interpretación_ con texto de al menos 10 palabras por fila, y en la tabla de pruebas estadísticas al menos 6 tests listados con su columna interpretación.
7. **Carga CSV**: Al subir un CSV con columnas compatibles (subconjunto del dataset demo), el preview muestra datos válidos, la estadística descriptiva tiene `count = rows - 1` y el entrenamiento termina sin error HTTP 5xx.
8. **Compatibilidad con reportes**: `POST /api/reports` con `format=xlsx` ahora genera al menos 6 hojas, incluyendo una hoja _"Pruebas Estadísticas"_ y _"Interpretación Métricas"_.

### Rúbricas (rubric)

9. **Calidad de la interpretabilidad textual (0-2)**:
   - `2`: Cada tooltip y texto de interpretación es específico del dominio educativo (no genérico), menciona umbrales numéricos y explica el costo/beneficio operativo (ej: "FP = intervención innecesaria con costo $X", "AUC 0.91 → detecta el 91% de los casos reales antes que el sistema aleatorio").
   - `1`: Las interpretaciones existen y son correctas pero muy genéricas (copiadas de Wikipedia).
   - `0`: Faltan interpretaciones en >3 métricas clave o son incorrectas técnicamente.
10. **Estética y profesionalismo gráfico (0-2)**:
    - `2`: Todos los gráficos tienen paleta coherente con el cockpit, gradientes de fill, grids sutiles, tooltips bonitos, animaciones al montar; layout lado a lado en pantallas XL evita scroll largo; leyendas claras. La UI recuerda a Streamlit Pro + Bloomberg Terminal.
    - `1`: Gráficos renderizan con paleta coherente pero faltan gradientes, tooltips o leyendas; layout aceptable.
    - `0`: Gráficos feos, colores discordantes, sin ejes ni tooltips.
11. **Fidelidad al flujo Data → Train → Validate → Explain → Report (0-2)**:
    - `2`: Existe una progresión visible (Pipeline Card) y todas las secciones "bloqueadas" antes de entrenar muestran un elegant CTA a entrenar; después de entrenar, las secciones pasan automáticamente a modo entrenado con datos reales sin recarga de página.
    - `1`: El flujo existe pero no hay feedback visual del progreso entre secciones.
    - `0`: No hay flujo; todo sigue siendo estático.
12. **Rigor estadístico (0-2)**:
    - `2`: Se implementan los 6 tests estadísticos listados en FR-02 con scipy real; el IC 95% del AUC usa bootstrap o DeLong; ANOVA/Kruskal se activa cuando hay ≥3 modelos. Cada resultado tiene p-values numéricos no triviales.
    - `1`: Solo 3-4 tests, con p-values correctos, pero faltan IC robusto o ANOVA.
    - `0`: Los tests son hardcodeados o lanzan excepciones.
