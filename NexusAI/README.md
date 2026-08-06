# NexusAI

NexusAI is a GPU-accelerated Universal Knowledge Intelligence Platform that transforms unstructured information into interactive, explorable worlds.

## Foundation v0.1.0

This milestone includes:

- Next.js web experience
- FastAPI control plane
- Health endpoint
- Four-World registry
- Initial Nexus visual language
- Placeholder routes for all four Worlds
- Environment templates
- Shared core package scaffolding

## Repository Layout

- `apps/web` - Next.js frontend
- `apps/api` - FastAPI control plane
- `nexus` - shared domain-independent core
- `worlds` - domain-specific adapters
- `ai` - AI runtime abstractions
- `infrastructure` - deployment/runtime configuration
- `tests` - shared tests
- `demo` - demo assets and datasets

## Local Development

### 1. API

```bash
cd apps/api
python -m venv .venv
```

Activate the virtual environment.

Windows PowerShell:

```powershell
.\.venv\Scripts\Activate.ps1
```

Install and run:

```bash
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

API: `http://localhost:8000`  
Health: `http://localhost:8000/api/health`

### 2. Web

Open another terminal:

```bash
cd apps/web
npm install
```

Create `apps/web/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

Run:

```bash
npm run dev
```

Web: `http://localhost:3000`

## Deployment

The frontend is designed for Vercel deployment with `apps/web` as the project root.

The FastAPI service can be deployed separately. Heavy ROCm/GPU workloads are intentionally kept out of the web deployment and will run on AMD Radeon Cloud.

See `docs/` for product and architecture specifications.
