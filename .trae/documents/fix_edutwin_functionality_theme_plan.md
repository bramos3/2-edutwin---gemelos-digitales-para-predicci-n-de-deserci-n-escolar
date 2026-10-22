# Plan de Corrección: Funcionalidad + Tema Claro Profesional EduTwin

## Research del Repositorio

### Problemas Críticos Detectados
1. **KeyError: 'prep'** (`streamlit_app.py` línea 622):
   - El código espera IDs de etapas CRISP-DM: `["business", "data", "prep", "modeling", "eval", "deploy"]`
   - Pero `engine.py` (líneas 294-301) devuelve: `"business", "data", "preparation", "modeling", "evaluation", "deployment"`
   - **Desajuste de IDs** entre frontend y backend → crash al renderizar Tab 0 del Motor IA.

2. **Tema Oscuro Actual**:
   - CSS actual usa `--bg: #0b1220` (fondo muy oscuro), texto claro.
   - Usuario solicita **tema blanco/profesional** (corporativo, limpio, tipo dashboard empresarial).

3. **Gráficos Plotly**:
   - Todos los gráficos usan `template="plotly_dark"` que no funcionará en fondo claro.
   - Requiere migración a `template="plotly_white"` + colores coherentes.

### Secciones del Sidebar (6) a Verificar:
| Sección | Función Python | Status Observado |
|---|---|---|
| Gemelo Digital | `digital_twin()` | OK en código, requiere validación runtime |
| Motor IA CRISP-DM | `ai_engine()` | **CRASHEA** (KeyError 'prep') |
| Reportes Legales | `reports()` | OK en código |
| Auditoría de Ética | `ethics()` | OK en código |
| Arquitectura Técnica | `tech_docs()` | OK en código |
| Chatbot IA | `chatbot()` | OK en código (fallback local) |

### Tabs dentro de Motor IA (13):
00 Panel CRISP · 01 Carga Datos · 02 EDA · 03 Entrenamiento · 04 Validación · 05 Hiperparámetros · 06 Pruebas Estadísticas · 07 Alerta Temprana · 08 Modelos · 09 XAI · 10 LangChain · 11 Despliegue · 12 Administración.

## Archivos y Módulos a Modificar

1. **`streamlit_app.py`** (líneas 29-368 CSS + ~2000 líneas de UI):
   - Bloque `<style>` completo → reescribir variables CSS para tema claro.
   - Línea 616: corregir `ordered_ids` para que coincidan con `engine.py`.
   - Todos los `template="plotly_dark"` → `template="plotly_white"`.
   - Ajustar colores SVG inline en LangChain, Despliegue y Arquitectura.
   - Revisar colores de badges, cards, métricas y tablas HTML.

2. **`backend/engine.py`** (líneas 294-301):
   - (Opcional) Preferible corregir en `streamlit_app.py` los IDs, pero si hay otros consumidores, alinear ambos.

## Pasos de Implementación (Orden Dependencias)

### Paso 1: Corregir KeyError CRISP-DM IDs
- En `streamlit_app.py` ~línea 616:
  ```python
  ordered_ids = ["business", "data", "preparation", "modeling", "evaluation", "deployment"]
  ```
- Confirmar que coinciden con `engine.py:294-301`.

### Paso 2: Migrar CSS a Tema Claro Profesional
Redefinir `:root` con paleta **corporativa blanca** (estilo consultoría/enterprise):
```
--bg: #f8fafc          (blanco hueso)
--bg-2: #ffffff        (blanco puro paneles)
--panel: #ffffff
--panel-2: #f1f5f9     (gris muy suave cards)
--border: #e2e8f0
--border-2: #cbd5e1
--text: #0f172a        (slate-900)
--text-muted: #475569  (slate-600)
--text-dim: #94a3b8    (slate-400)
--primary: #0ea5e9     (sky-500, azul corporativo)
--primary-dark: #0284c7
--accent: #6366f1      (índigo 500)
--success: #10b981
--warning: #f59e0b
--danger: #ef4444
--violet: #8b5cf6
--rose: #f43f5e
--emerald: #10b981
--amber: #f59e0b
--cyan: #06b6d4
```

Actualizar reglas afectadas:
- `.stApp` background + color texto
- Sidebar degradado suave blanco→gris
- Cards degradados claro con sombras sutiles (no elevadas)
- Métricas (stMetric): borde superior degradado sutil
- Headers h1/h2: gradiente oscuro (no blanco brillante)
- Badges: tonos pastel-light sobre blanco
- Tabs: seleccionado azul corporativo
- Botones: azul corporativo primario, hover con sombra suave
- Tablas HTML, timeline, step-container: re-contrastar

### Paso 3: Migrar Plantillas Plotly
Buscar y reemplazar **todos** los `template="plotly_dark"` por `template="plotly_white"` (~30 ocurrencias aprox):
- Histogramas, boxplots, heatmaps correlación
- Benchmark modelos, K-Fold CV
- Curvas ROC, PR, calibración, aprendizaje
- Radar hiperparámetros
- Volcano Plot, Beeswarm, Waterfall
- Heatmap riesgo, feature importance

Ajustar `paper_bgcolor="rgba(255,255,255,0)"` y `plot_bgcolor="rgba(248,250,252,0.4)"`.

### Paso 4: Ajustar SVG Inline (Tema Claro)
3 diagramas SVG con fondos oscuros y bordes oscuros:
- **Tab 10 LangChain** (línea ~1429): cambiar fondo a `#f8fafc`, bordes a `#cbd5e1`, textos a `#0f172a`.
- **Tab 11 Despliegue** (línea ~1562): mismo tratamiento.
- **Tech Docs Arquitectura** (línea ~1917): mismo tratamiento.

### Paso 5: Revisar Colores Condicionales en Código
- Cola priorizada (ALERTA/VIGILAR/OK): badges ya están bien, pero ver contraste sobre blanco.
- Leaderboard modelos: `rank-1/2/3` barras superiores, OK.
- Tablas con estilos pandas: `background` y `color` en `_style_train` ver contraste.
- `dataframe-cond-green/red`: mantener pero ver contraste sobre blanco.

### Paso 6: Validar Todas las Secciones (Runtime)
Ejecutar `streamlit run streamlit_app.py` y revisar:
1. Sidebar: clickear cada una de las 6 secciones → sin errores Python.
2. Motor IA: recorrer las 13 tabs, cada gráfico debe renderizarse.
3. Buttons del simulador: "Alimentación + Transporte", "Tutoría + Refuerzo", "Plan Integral 360", "Reset" → actualizan métricas.
4. Buttons quick prompts del Chatbot.
5. Selectboxes del Gemelo Digital (macro/meso/micro) y Arquitectura Técnica tabs.
6. Check que no haya `KeyError`, `AttributeError`, o gráficos vacíos.

## Dependencias y Consideraciones
- No hay nuevas dependencias (Streamlit, Plotly, Pandas, Numpy ya instalados).
- No tocar `backend/engine.py` a menos que sea estrictamente necesario; corregir IDs en `streamlit_app.py` basta.
- Preservar funcionalidad existente (fórmulas, simulación, lógica de negocio); solo cambiar capa de presentación + bugfix IDs.

## Validación Post-Implementación
1. **Unitario visual**: abrir App y verificar que fondo es blanco/crema, texto negro, gráficos legibles.
2. **Funcional CRISP Tab 0**: 6 steps del pipeline renderizados con colores (done/active/planning) sin crash.
3. **Smoke test 6 secciones**: clickear cada una del sidebar → contenido carga sin stacktrace.
4. **Gráficos renderizados**: mínimo 1 gráfico por tab crítico (EDA, Entrenamiento, Validación, XAI) visible OK.
5. **Botones funcionales**: presets del simulador modifican state y recalculan métricas.

## Riesgos y Mitigación
| Riesgo | Impacto | Mitigación |
|---|---|---|
| Reglas CSS específicas de Streamlit cambian de versión | Medio | Usar selectores `data-testid` estables ya presentes |
| Plotly white requiere ajuste de colores de ejes/grid | Bajo | Establecer `gridcolor` explícitamente si ilegible |
| Faltan más IDs desalineados en `crispDmStages` | Bajo | Revisar el `stage_map` completo en una sola pasada |
| SVG inline inline style muy verboso | Bajo | Cambiar solo `fill`, `stroke` y `fill` en `<defs>` |
