# THE PROJECT BRIEF #

# Project Name #
ai powered-financial-advisory-platform

# Product Description / Presentation #


powered-financial-advisory-platform

FinGenius — AI-Powered Financial Advisory Platform
Tagline: Your intelligent partner for wealth creation and financial freedom.
________________________________________
1) Product Description / Presentation
Executive Summary
FinGenius is a next generation, AI driven financial advisory and wealth management platform. It empowers individuals, advisors, and institutions with real time investment intelligence, personalized financial planning, and automated wealth optimization. By combining RAG grounded financial insights, portfolio simulation, and agent based financial workflows, FinGenius offers transparent recommendations, risk aware investment strategies, and scalable portfolio automation.
Business Outcomes:
•	Improve investment returns by 15–25% through AI driven optimization.
•	Reduce manual advisory workload by 60%.
•	Deliver personalized financial strategies at scale.
•	Enhance compliance and transparency with explainable AI recommendations.
________________________________________
Core Capabilities
•	AI Financial Planner: Automated financial plans for retirement, savings, tax optimization, and insurance coverage.
•	Intelligent Portfolio Manager: Real time rebalancing, diversification checks, Monte Carlo risk simulation.
•	Market Intelligence Copilot: RAG powered financial Q&A, news/event impact summaries, sector insights.
•	Automated Investment Optimization: Suggests buy/sell/hold actions with evidence and regulatory compliance checks.
•	Wealth Dashboard: Unified view of assets, liabilities, accounts, and investments with predictive cash flow modeling.
•	Advisory CRM: Client profiles, KYC/AML compliance tracking, document vault.
•	Regulatory Guardrails: SEC/FINRA/ESMA frameworks baked in; explainability, suitability checks.
•	Multi Channel Notifications: Alerts via email, SMS, and in app for market shifts, portfolio risk, and upcoming tasks.
________________________________________
Functional Modules (User Journeys)
1.	Onboarding & KYC: Digital identity verification, risk tolerance survey, investment goals capture.
2.	Portfolio Setup: Asset import, account aggregation (Plaid/Yodlee), baseline allocations.
3.	Analysis & Simulation: Risk analysis, Monte Carlo simulations, tax optimization.
4.	Advisory & Execution: AI driven advice, execution hooks (brokers, custodians), compliance logging.
5.	Monitoring & Alerts: Live tracking of portfolio drift, market events, compliance warnings.
6.	Client Engagement: Reports, goal updates, financial nudges, advisor chat.
________________________________________
Non Functional Requirements
•	Performance: Portfolio refresh P95 < 500ms (cache hit), streaming updates under 2s.
•	Scale: Millions of accounts; 10,000+ concurrent advisor/clients.
•	Reliability: 99.9% uptime; fallbacks to read only mode if AI is unavailable.
•	Security: PCI DSS, SOC2 Type II, GDPR; encryption at rest & in transit; RBAC.
•	Accessibility: WCAG 2.1 AA; mobile first responsive design.
________________________________________
Frontend (Next.js 14 + React 18 + TypeScript + Tailwind)
•	Design System: Tailwind tokens for financial branding (greens, navy, neutral grays).
•	Key Screens:
o	Wealth Dashboard (net worth, allocation charts, goals tracker).
o	Portfolio Manager (holdings, rebalancing actions, AI suggestions).
o	Market Intelligence Console (news impact, AI Q&A with citations).
o	Advisor CRM (client profile, KYC, documents).
o	Compliance & Reporting (audit logs, suitability checks, portfolio history).
•	Features:
o	Dark/light mode toggle.
o	WebSocket driven real time portfolio updates.
o	Data visualizations (Recharts/D3 for risk, growth, allocations).
o	Error tolerant UX (graceful retries, fallback messaging).
________________________________________
Backend (FastAPI + Python 3.11 + Async SQLAlchemy 2.0)
•	Auth & Security: JWT, SSO (SAML/OIDC), MFA, RBAC.
•	Core Services:
o	Accounts & KYC
o	Assets, portfolios, transactions
o	Simulation engine (Monte Carlo, VaR, Sharpe ratios)
o	Market data ingestion (APIs: Bloomberg, Alpha Vantage, Yahoo Finance)
o	Compliance checks engine (regulatory rules, suitability constraints)
•	Integrations:
o	Broker APIs (Robinhood, Schwab, Fidelity, Vanguard)
o	Plaid/Yodlee for account aggregation
o	Cloud storage (S3/GCS) for documents
o	Email/SMS providers (SES/Twilio)
•	Observability: OpenTelemetry, Prometheus metrics, structured logs.
________________________________________
AI Orchestration & Retrieval
•	Chosen Stack: LangChain for retrievers, financial data tools, and reasoning chains; RAG over financial documents, market data, and regulations.
•	Models: OpenAI GPT 4 for synthesis & portfolio optimization; Claude for long form analysis, compliance reasoning.
•	RAG Sources: Market research, regulations (SEC filings, MiFID, ESMA docs), company filings, analyst reports.
•	Features:
o	Evidence linked AI recommendations (e.g., “Sell Tesla: Q3 10 K revenue miss”).
o	Monte Carlo + AI reasoning hybrid for risk explanations.
o	“Cite or decline” guardrail policy.
________________________________________
Data Model (selected tables)
•	users, advisors, clients
•	accounts(id, user_id, type, provider, balance)
•	portfolios(id, user_id, allocations_json, fit_score, risk_profile)
•	transactions(id, account_id, type, amount, security, date)
•	simulations(id, portfolio_id, method, result_json)
•	advice_logs(id, portfolio_id, recommendation, evidence_json, created_at)
•	documents(id, client_id, type, url, metadata)
•	compliance_events(id, user_id, rule_id, outcome, evidence)
________________________________________
API Surface (sample)
REST
•	POST /auth/login, POST /auth/refresh
•	POST /portfolios, GET /portfolios/{id}
•	POST /analyze/{portfolio_id} → returns risk metrics + AI insights
•	POST /advise/{portfolio_id} → returns buy/sell/hold recs + citations
•	POST /simulate/{portfolio_id} → Monte Carlo simulation
•	POST /documents/upload
•	GET /compliance/{portfolio_id} → logs & suitability checks
WebSockets
•	/ws/portfolio/{user_id} (real time portfolio updates)
•	/ws/chat/{user_id} (AI Q&A streaming)
________________________________________
Security & Compliance
•	Compliance first: KYC/AML, GDPR/CCPA, FINRA/SEC logging.
•	Data Vaults: PII tokenization; consent & audit logs.
•	Secret Hygiene: env vars only; rotation/expiry; provider specific scopes.
•	Controls: rate limiting, input validation, suspicious activity monitoring.
________________________________________
Deployment & Scaling
•	Frontend: Vercel (ISR, edge caching).
•	Backend: Render autoscaling; workers for ingestion/simulations.
•	DB: Postgres w/ pgvector; PITR; encrypted storage.
•	Cache/Queue: Redis for sessions, rate limiting, job queues.
Env Vars (excerpt)
OPENAI_API_KEY=
ANTHROPIC_API_KEY=
DATABASE_URL=
REDIS_URL=
JWT_SECRET=
SMTP_URL=
BROKER_API_KEY=
ACCOUNT_AGGREGATOR_KEY=
ALLOWED_ORIGINS=
________________________________________
Success Metrics
•	Portfolio analysis latency < 2s.
•	Recommendation accuracy ≥ 85% vs benchmark.
•	Compliance rule coverage ≥ 95%.
•	Uptime 99.9%; Lighthouse ≥ 95; test coverage >90%.
________________________________________
2) Framework Choice
LangChain + RAG are chosen to provide flexible retrievers, tool orchestration for financial APIs, and regulatory document grounding. LangChain is better suited than LangGraph for on demand reasoning chains (analysis, optimization, compliance checks). RAG ensures evidence anchored, auditable financial insights.
________________________________________
3) Dev Team Brief
Goals
Build a scalable financial advisory platform that automates personalized planning and investment optimization while meeting compliance standards.
Deliverables
1.	Next.js 14 frontend with Tailwind + TypeScript.
2.	FastAPI backend with async SQLAlchemy 2.0, JWT, MFA.
3.	PostgreSQL schema with pgvector + Redis cache/queue.
4.	LangChain orchestration with RAG.
5.	Real time WebSockets for portfolio updates.
6.	Broker + aggregator + email/SMS integrations.
7.	CI/CD, tests (unit/integration/e2e), OpenAPI docs.
8.	Deploy configs for Vercel + Render.
Milestones
•	M1 (Weeks 1–2): Repo setup, auth + KYC, basic dashboard.
•	M2 (Weeks 3–4): Portfolio ingestion, analysis endpoints, RAG integration.
•	M3 (Weeks 5–6): AI advisory + compliance guardrails, portfolio simulation.
•	M4 (Weeks 7–8): Notifications, broker execution hooks, load testing, GA.
Definition of Done
•	90% test coverage, P95 < 2s response time.
•	AI recs evidence linked and logged.
•	All compliance checks auditable.
•	Frontend Lighthouse ≥ 95; WCAG 2.1 AA compliance.
Coding Standards
•	Ruff/Black/mypy + eslint/prettier.
•	Pre commit hooks, type safe contracts.
•	Feature flags for risky features.
Repo Structure
/apps
  /web (Next.js)
  /api (FastAPI)
/packages
  /ui (tailwind components)
  /lib (shared types, clients)
/infra (IaC, configs)
/tests
________________________________________
Critical Prompts for Claude (Finance)
Prompt 1 — Project Setup & Architecture
"Create the project structure and architecture for FinGenius: Next.js 14 + TS + Tailwind frontend, FastAPI backend with async SQLAlchemy + JWT/MFA, PostgreSQL w/ pgvector, Redis, Vercel + Render deploy configs, LangChain + RAG scaffolding, CI/CD, env templates."
Prompt 2 — Core Backend Implementation
"Implement FastAPI backend: KYC, portfolios, transactions, simulations, compliance checks, broker/account aggregator adapters, embeddings into pgvector, hybrid retrieval, JWT auth + RBAC + MFA, WebSockets for portfolio updates, logging/telemetry."
Prompt 3 — Frontend Components & UI
"Build Next.js frontend: Wealth dashboard, Portfolio manager, Market intelligence console, Advisor CRM, Compliance reporting. Dark/light mode, real time updates, charts, WCAG 2.1 AA compliance."
Prompt 4 — AI Integration & Features
"Wire OpenAI + Claude via LangChain. Implement portfolio optimization, Monte Carlo + LLM reasoning, evidence linked buy/sell/hold recs, RAG over filings/news/regulations, compliance checks with explanations."
Prompt 5 — Deployment & Optimization
"Prepare for production: Vercel + Render configs, pgvector tuning, Redis for rate limiting/queues, full tests, OpenAPI docs, monitoring/alerts, backups + PITR, compliance guardrails, SLO dashboards."
________________________________________
Roadmap (90 Days)
•	Day 30: GA for KYC, wealth dashboard, portfolio ingestion, basic AI Q&A.
•	Day 60: Portfolio optimization engine, simulations, compliance reporting.
•	Day 90: Broker execution hooks, advanced tax optimization, multi jurisdiction compliance modules.
________________________________________
One Slide Pitch
What: AI powered financial advisory for individuals and institutions.
Why now: Financial automation demand is surging; legacy advisors can’t scale.
Moat: Evidence linked RAG insights + compliance first AI guardrails.
CTA: “Point FinGenius at your accounts. Let your money grow intelligently.”





FOLLOW THIS 8 STEP PLAN TO PREPARE THE INFRASTRUCTURE
-----------------------------------------------------

# 🚀 Claude Fullstack Repo Prep – Optimized 8 Step Plan

  
The goal: build an extensive frontend + backend scaffold so Claude Code only has to finish ~20% of the work.  
Each step must be **completed ** before advancing  (this is important).
IMPORTANT: YOU ARE BUILDING ONLY THE INFRASTRUCTURE OF THE APPLICATION NOT THE APPLICATION ITSELF !!!. FOLLOW THE STEPS IN NUMERICAL ORDER !!! starting from step 1.
You are doing the groundwork for the application, including setting up the folder structure, configuration files, and any necessary boilerplate code.
IMPORTANT: the checklist in each step has to be checked off 100% before moving to the next step. And always provide comments to your code blocks so that even a non-tech person can understand what you have done.

---

## STEP 1 — Build the Rich Infrastructure
Create a **deep scaffold** for both frontend and backend so Claude code can recognize the architecture immediately.

- Build a **frontend app shell** with routing, placeholder pages, components, and styling setup.  
- Build a **backend app shell** with API structure, health endpoint, and config in place.  
- Include `REPO_MAP.md`, `API_SPEC.md`, and a draft `CLAUDE.md` in the `docs/` folder.  (create the docs folder if it does not  already exist)
- Add **TODO markers and folder-level `_INSTRUCTIONS.md`** files so Claude knows exactly where to add logic.

**Deliverables**
- Frontend app shell with routing, placeholder pages, components, and styling setup  
- Backend app shell with API structure, health endpoint, and config  
- `docs/REPO_MAP.md`, `docs/API_SPEC.md` (stub), and draft `docs/CLAUDE.md`  
- TODO markers + folder-level `_INSTRUCTIONS.md` files  

**Checklist**
- [ ] Frontend scaffold built  
- [ ] Backend scaffold built 
- [ ] Docs folder created with drafts (`REPO_MAP.md`, `API_SPEC.md`, `CLAUDE.md`)  
- [ ] TODO markers and `_INSTRUCTIONS.md` stubs in place  

---

## STEP 2 — Enrich the Scaffold
If the repo looks shallow, enrich it so Claude needs fewer leaps of imagination.  

Add:
- Sample frontend routes and components (`/`, `/about`, `/dashboard`)  
- Domain model stubs and types/interfaces  
- Mock data + fixtures for UI flows  
- README files with quick run instructions for both frontend and backend  
- Instructions embedded in folders (e.g. `CLAUDE_TASK: …`)

**Deliverables**
- Sample routes and pages (`/`, `/about`, `/dashboard`)  
- Domain model stubs and type definitions  
- Mock data and fixtures for UI flows  
- README files for frontend and backend with run instructions  
- Folder-level instructions (`_INSTRUCTIONS.md`)  

**Checklist**
- [ ] At least 2–3 sample routes/pages exist  
- [ ] Domain types/interfaces stubbed out  
- [ ] Mock data + fixtures included  
- [ ] README_FRONTEND.md and README_BACKEND.md added  
- [ ] Each folder has `_INSTRUCTIONS.md` where relevant 

---

## STEP 3 — Audit for Alignment
Check that the scaffold actually matches the product brief, tech specs, and UX /UI goals.
Add additional UI/UX elements (if needed) to make the application visually appealing (and update the design requirements after that)

- Do navigation and pages reflect the product’s main flows?  
- Do API endpoints match the UI needs?  
- Is the chosen tech stack consistent (no unused or conflicting libraries)?  
- Is the UX direction reflected (design tokens, layout, component stubs)?

**Deliverables**
- Alignment review across Product ↔ UI/UX ↔ Tech  
- Identify any missing flows, mismatched libraries, or conflicting instructions  

**Checklist**
- [ ] Navigation structure matches product journeys  
- [ ] Components/pages map to required features  
- [ ] API endpoints cover MVP needs  
- [ ] No contradictory or unused technologies  

---

## STEP 4 — Document the Architecture
Now make the docs **Claude-ready**:

- **REPO_MAP.md**: Full repo breakdown with roles of each folder  
- **API_SPEC.md**: Endpoints, payloads, error handling  
- **CLAUDE.md**: Editing rules, coding conventions, AI collaboration guidelines  

These three files are the **context backbone** Claude will use to understand the repo.

**Deliverables**
- `REPO_MAP.md`: full repo breakdown with folder purposes  
- `API_SPEC.md`: endpoints, models, error conventions  
- `CLAUDE.md`: collaboration rules, editing boundaries  

**Checklist**
- [ ] REPO_MAP.md fully describes structure  
- [ ] API_SPEC.md covers all MVP endpoints and schemas  
- [ ] CLAUDE.md includes project overview, editing rules, examples  

---

## STEP 5 — Improve the Prompt
Enhance the prompt (in `docs/PROMPT_DECLARATION.md`) with details Claude needs:

- FE/BE boundaries and data contracts  
- UX guidelines (states, accessibility, interaction patterns)  
- Performance budgets (bundle size, API latency)  
- Security constraints (auth, rate limits, PII handling)  
- Testing expectations (unit, integration, end-to-end)

**Deliverables**
- FE/BE boundaries and contracts  
- UX guidelines (states, accessibility, patterns)  
- Performance budgets (bundle size, latency targets)  
- Security constraints (auth, PII, rate limits)  
- Testing expectations  

**Checklist**
- [ ] Prompt includes FE/BE division of responsibility  
- [ ] UX principles and design tokens specified  
- [ ] Performance/security/testing requirements added  
- [ ] Prompt is concrete and actionable for Claude  

---

## STEP 6 — Expert Audit of the Prompt
Now do a **meticulous audit** of the one-page prompt declaration.

- Add Frontend Architecture, Backend Architecture, Design requirements, Core Integrations, Success Criteria, Implementation Guidelines and Security & Compliance categories from this Project Brief to the prompt declaration.
- Remove inconsistencies, duplicates, or unused technologies  
- Ensure Tech Stack → Product → Scaffold alignment (no mismatches)  
- Add UI/UX details that make the product visually appealing and usable  
- Double-check frontend and backend folders are ready  
- Confirm editing boundaries are clear (what Claude can/can’t touch)  
- Make the declaration **battle-tested and handoff-ready**

**Deliverables**
- Remove inconsistencies/duplicates  
- Ensure stack ↔ product ↔ scaffold alignment  
- Add UI/UX and accessibility details  
- Clarify file boundaries (editable vs do-not-touch)  
- Confirm prompt uses Claude-friendly syntax  

**Checklist**
- [ ] No unused or contradictory tech remains  
- [ ] UI/UX directives are product-specific and sufficient  
- [ ] Editing boundaries explicitly defined  
- [ ] Prompt syntax uses clear, imperative instructions  

---

## STEP 7 — Bird’s-Eye Repo Review
Do a quick top-level scan for missing pieces:

- All folders contain either code or `_INSTRUCTIONS.md`  
- `.env.example` files exist for both frontend and backend  
- CI/CD config is present and not trivially broken  
- Run scripts (`npm run dev`, `uvicorn …`) work end-to-end  
- No orphan TODOs without clear ownership

**Deliverables**
- Verify all core files exist  
- Confirm environment, CI, and scripts work end-to-end  

**Checklist**
- [ ] Every folder has code or `_INSTRUCTIONS.md`  
- [ ] `.env.example` present for both frontend and backend  
- [ ] CI pipeline triggers and passes basic checks  
- [ ] Dev script (`scripts/dev.sh`) runs both FE and BE  

---

## STEP 8 — Finalize CLAUDE.md
This is where Claude gets its **onboarding pack**. Make sure `CLAUDE.md` includes:

- **Project Overview**: one-paragraph purpose, stack, goals, target users  
- **Folder & File Structure**: what’s editable vs do-not-touch  
- **Coding Conventions**: style guides, naming rules, commenting expectations  
- **AI Collaboration Rules**: response format, edit rules, ambiguity handling  
- **Editing Rules**: full-file vs patches, locked files  
- **Dependencies & Setup**: frameworks, services, env vars  
- **Workflow & Tools**: how to run locally, FE/BE boundary, deployment notes  
- **Contextual Knowledge**: product quirks, domain rules, business logic caveats  
- **Examples**: good vs bad AI answer

**Deliverables**
- Project overview (purpose, stack, goals, users)  
- Folder & file structure with editable vs do-not-touch  
- Coding conventions (style, naming, commenting)  
- AI collaboration rules (response style, edit rules, ambiguity handling)  
- Dependencies and setup instructions  
- Workflow, deployment notes, contextual knowledge  
- Good vs bad answer examples  
- Fill out all the missing information in the CLAUDE.md file

**Checklist**
- [ ] Project overview section filled in  
- [ ] File boundaries clearly defined  
- [ ] Coding/style conventions included  
- [ ] AI collaboration & editing rules written  
- [ ] Dependencies & env notes covered  
- [ ] Workflow & deployment info added  
- [ ] Contextual knowledge documented  
- [ ] Good vs bad examples included  
- [ ] CLAUDE.md file does not miss any important information

---

# ✅ Outcome
When this 8-step plan is followed:
- The repo is a **rich, opinionated scaffold** (80% done).  
- Docs give Claude **clear boundaries + context**.  
- The one-page prompt is **battle-tested** and aligned.  
- Claude Code can safely and efficiently generate the missing 20%.  












