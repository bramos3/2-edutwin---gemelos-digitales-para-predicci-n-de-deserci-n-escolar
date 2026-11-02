<!-- # EduTwin AI

Sistema de gemelos digitales para predicción de deserción escolar, migrado a:

- Backend: FastAPI en Python
- Frontend: Streamlit
- Funcionalidades conservadas: gemelo macro/meso/micro, simulador What-If, motor IA CRISP-DM, reportes PDF/XLSX/DOCX, auditoría ética, documentación técnica y chatbot IA.

## Ejecutar localmente

1. Instalar dependencias:

```bash
pip install -r requirements.txt
```

2. Levantar el backend:

```bash
uvicorn backend.main:app --reload --host 0.0.0.0 --port 8000
python -m uvicorn backend.main:app --reload --host 0.0.0.0 --port 8000
```

3. Levantar el frontend:

```bash
streamlit run streamlit_app.py --server.port 8501
python -m streamlit run streamlit_app.py --server.port 8501
```

4. Abrir:

- Frontend Streamlit: http://localhost:8501
- Backend FastAPI: http://localhost:8000
- OpenAPI docs: http://localhost:8000/docs

## Endpoints principales

- `GET /api/health`
- `GET /api/data`
- `GET /api/metrics`
- `POST /api/simulation/evaluate`
- `POST /api/simulation/student/{student_id}`
- `GET /api/ai/summary`
- `GET /api/ai/orchestration/status`
- `POST /api/chat`
- `GET /api/predict/dropout/{student_id}`
- `POST /api/reports`

## Variables opcionales

El archivo `.env.example` conserva la configuración para PostgreSQL, Redis, Langflow y llaves LLM si luego se conectan servicios reales. La versión local funciona con datos semilla pseudonimizados sin requerir servicios externos. -->

<div align="center">

# 🎓 EduTwin AI

### Sistema de Gemelos Digitales para la Predicción de Deserción Escolar

**Simulación educativa · Analítica predictiva · Inteligencia artificial**

<br>

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=for-the-badge&logo=streamlit&logoColor=white)
![AI](https://img.shields.io/badge/IA-CRISP--DM-6C63FF?style=for-the-badge)

<br>

_Plataforma de gemelos digitales enfocada en el análisis y la predicción de la deserción escolar._

[Características](#-características-principales) · [Instalación](#-ejecución-local) · [API](#-endpoints-principales) · [Configuración](#-configuración-opcional)

</div>

---

## 📖 Descripción general

**EduTwin AI** es un sistema de gemelos digitales para la **predicción de deserción escolar**, migrado a una arquitectura basada en **FastAPI (Python)** para el backend y **Streamlit** para el frontend.

La migración conserva las funcionalidades existentes del sistema, incluidos los gemelos digitales en distintos niveles, las simulaciones, la inteligencia artificial, los reportes y la auditoría ética.

## ✨ Características principales

| Módulo                       | Funcionalidad                                               |
| :--------------------------- | :---------------------------------------------------------- |
| 🌐 **Gemelo macro**          | Gemelo digital a nivel macro.                               |
| 🏫 **Gemelo meso**           | Gemelo digital a nivel meso.                                |
| 👤 **Gemelo micro**          | Gemelo digital a nivel micro.                               |
| 🔄 **Simulador What-If**     | Evaluación de escenarios mediante simulaciones.             |
| 🧠 **Motor IA CRISP-DM**     | Componente de inteligencia artificial basado en CRISP-DM.   |
| 📊 **Reportes**              | Generación de documentos en formatos PDF, XLSX y DOCX.      |
| ⚖️ **Auditoría ética**       | Funcionalidad de auditoría ética.                           |
| 📚 **Documentación técnica** | Documentación técnica del sistema.                          |
| 💬 **Chatbot IA**            | Interacción mediante un chatbot de inteligencia artificial. |

## 🏗️ Arquitectura tecnológica

| Capa                     | Tecnología        |
| :----------------------- | :---------------- |
| **Backend**              | Python + FastAPI  |
| **Frontend**             | Streamlit         |
| **Motor IA**             | CRISP-DM          |
| **Formatos de reportes** | PDF · XLSX · DOCX |

---

## 🚀 Ejecución local

### 1. Instalar dependencias

Desde la carpeta raíz del proyecto, ejecuta:

```bash
pip install -r requirements.txt
```

### 2. Iniciar el backend

Ejecuta **una** de las siguientes alternativas:

```bash
uvicorn backend.main:app --reload --host 0.0.0.0 --port 8000
```

**Alternativa con Python:**

```bash
python -m uvicorn backend.main:app --reload --host 0.0.0.0 --port 8000
```

### 3. Iniciar el frontend

En otra terminal, ejecuta **una** de las siguientes alternativas:

```bash
streamlit run streamlit_app.py --server.port 8501
```

**Alternativa con Python:**

```bash
python -m streamlit run streamlit_app.py --server.port 8501
```

### 4. Abrir el sistema

| Servicio                     | Dirección local                                          |
| :--------------------------- | :------------------------------------------------------- |
| 🖥️ **Frontend Streamlit**    | [http://localhost:8501](http://localhost:8501)           |
| ⚙️ **Backend FastAPI**       | [http://localhost:8000](http://localhost:8000)           |
| 📘 **Documentación OpenAPI** | [http://localhost:8000/docs](http://localhost:8000/docs) |

> [!TIP]
> Mantén el backend y el frontend ejecutándose en terminales independientes durante el uso local.

---

## 🔌 Endpoints principales

| Método | Endpoint                               |
| :----: | :------------------------------------- |
| `GET`  | `/api/health`                          |
| `GET`  | `/api/data`                            |
| `GET`  | `/api/metrics`                         |
| `POST` | `/api/simulation/evaluate`             |
| `POST` | `/api/simulation/student/{student_id}` |
| `GET`  | `/api/ai/summary`                      |
| `GET`  | `/api/ai/orchestration/status`         |
| `POST` | `/api/chat`                            |
| `GET`  | `/api/predict/dropout/{student_id}`    |
| `POST` | `/api/reports`                         |

> [!NOTE]
> Puedes consultar la documentación interactiva de los endpoints en **[FastAPI /docs](http://localhost:8000/docs)** cuando el backend esté en ejecución.

---

## ⚙️ Configuración opcional

El archivo **`.env.example`** conserva la configuración disponible para integrar servicios reales en el futuro:

- **PostgreSQL** — configuración de base de datos.
- **Redis** — configuración del servicio Redis.
- **Langflow** — configuración para su integración.
- **Llaves LLM** — credenciales para modelos de lenguaje.

> [!IMPORTANT]
> **No es necesario conectar servicios externos para usar la versión local.** EduTwin AI puede funcionar con **datos semilla pseudonimizados**.

---

<div align="center">

**EduTwin AI** · Gemelos digitales e inteligencia artificial aplicados a la educación

<sub>Proyecto de predicción de deserción escolar</sub>

</div>
