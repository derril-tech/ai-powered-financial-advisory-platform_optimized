# FinGenius Repository Map

## Overview
This repository contains the complete FinGenius AI-powered financial advisory platform, structured as a monorepo with separate frontend and backend applications.

## Repository Structure

```
ai-powered-financial-advisory-platform_optimized/
├── apps/                          # Application directories
│   ├── web/                       # Next.js 14 Frontend Application
│   │   ├── src/
│   │   │   ├── app/               # Next.js App Router pages
│   │   │   │   ├── dashboard/     # Dashboard pages and components
│   │   │   │   ├── portfolio/     # Portfolio management pages
│   │   │   │   ├── market/        # Market intelligence pages
│   │   │   │   ├── advisor/       # Advisor CRM pages
│   │   │   │   └── compliance/    # Compliance and reporting pages
│   │   │   ├── components/        # Reusable React components
│   │   │   │   ├── ui/            # Base UI components (buttons, cards, etc.)
│   │   │   │   ├── dashboard/     # Dashboard-specific components
│   │   │   │   ├── portfolio/     # Portfolio management components
│   │   │   │   ├── charts/        # Financial chart components
│   │   │   │   └── providers/     # Context providers (theme, auth, etc.)
│   │   │   ├── lib/               # Utility functions and helpers
│   │   │   ├── hooks/             # Custom React hooks
│   │   │   ├── types/             # TypeScript type definitions
│   │   │   ├── styles/            # Global styles and CSS modules
│   │   │   └── constants/         # Application constants
│   │   ├── public/                # Static assets
│   │   ├── package.json           # Frontend dependencies
│   │   ├── tailwind.config.js     # Tailwind CSS configuration
│   │   ├── tsconfig.json          # TypeScript configuration
│   │   └── next.config.js         # Next.js configuration
│   │
│   └── api/                       # FastAPI Backend Application
│       ├── app/
│       │   ├── api/               # API route handlers
│       │   │   └── v1/            # API version 1
│       │   │       ├── auth/      # Authentication endpoints
│       │   │       ├── users/     # User management endpoints
│       │   │       ├── portfolios/ # Portfolio management endpoints
│       │   │       ├── market/    # Market data endpoints
│       │   │       ├── ai/        # AI advisory endpoints
│       │   │       └── compliance/ # Compliance endpoints
│       │   ├── core/              # Core application modules
│       │   │   ├── config.py      # Application configuration
│       │   │   ├── database.py    # Database connection and setup
│       │   │   ├── security.py    # Authentication and security
│       │   │   └── logging.py     # Logging configuration
│       │   ├── models/            # SQLAlchemy database models
│       │   │   ├── user.py        # User model
│       │   │   ├── portfolio.py   # Portfolio and holdings models
│       │   │   ├── transaction.py # Transaction model
│       │   │   └── ai.py          # AI models and logs
│       │   ├── schemas/           # Pydantic schemas for API
│       │   ├── services/          # Business logic services
│       │   │   ├── auth.py        # Authentication service
│       │   │   ├── portfolio.py   # Portfolio management service
│       │   │   ├── market.py      # Market data service
│       │   │   └── ai.py          # AI advisory service
│       │   └── utils/             # Utility functions
│       ├── tests/                 # Backend tests
│       ├── requirements.txt       # Python dependencies
│       ├── main.py                # FastAPI application entry point
│       └── alembic.ini            # Database migration configuration
│
├── packages/                      # Shared packages (future use)
│   ├── ui/                        # Shared UI components
│   └── lib/                       # Shared utilities and types
│
├── docs/                          # Documentation
│   ├── REPO_MAP.md               # This file - repository structure guide
│   ├── API_SPEC.md               # API specification and endpoints
│   ├── CLAUDE.md                 # Claude AI collaboration guidelines
│   └── PROMPT_DECLARATION.md     # Project requirements and specifications
│
├── infra/                         # Infrastructure and deployment
│   ├── docker/                   # Docker configurations
│   ├── kubernetes/               # Kubernetes manifests
│   └── terraform/                # Infrastructure as Code
│
├── scripts/                       # Development and deployment scripts
│   ├── dev.sh                    # Development environment setup
│   ├── deploy.sh                 # Deployment script
│   └── test.sh                   # Test execution script
│
├── PROJECT_BRIEF.md              # Complete project requirements
├── README.md                     # Main project documentation
└── .env.example                  # Environment variables template
```

## Directory Purposes

### Frontend (`apps/web/`)
- **Next.js 14** with App Router for modern React development
- **TypeScript** for type safety
- **Tailwind CSS** for styling with financial design tokens
- **Component-based architecture** with reusable UI components
- **Real-time updates** via WebSockets
- **Responsive design** for mobile and desktop

### Backend (`apps/api/`)
- **FastAPI** for high-performance Python API
- **SQLAlchemy 2.0** with async support for database operations
- **PostgreSQL** with pgvector for vector embeddings
- **Redis** for caching and session management
- **JWT authentication** with MFA support
- **AI integration** with OpenAI and Claude APIs

### Documentation (`docs/`)
- **REPO_MAP.md**: Repository structure and navigation guide
- **API_SPEC.md**: Complete API documentation and schemas
- **CLAUDE.md**: AI collaboration guidelines and coding standards
- **PROMPT_DECLARATION.md**: Project requirements and specifications

### Infrastructure (`infra/`)
- **Docker** containers for consistent deployment
- **Kubernetes** manifests for orchestration
- **Terraform** for infrastructure provisioning
- **CI/CD** pipelines for automated deployment

## Key Features by Directory

### Frontend Features
- **Dashboard**: Wealth overview, portfolio summary, AI insights
- **Portfolio Management**: Holdings, transactions, rebalancing
- **Market Intelligence**: Real-time data, news, AI Q&A
- **Advisor CRM**: Client management, KYC, compliance
- **Compliance**: Audit logs, reporting, regulatory checks

### Backend Features
- **Authentication**: JWT, MFA, role-based access control
- **Portfolio Management**: CRUD operations, calculations, analysis
- **Market Data**: Real-time feeds, historical data, news aggregation
- **AI Advisory**: Portfolio optimization, risk analysis, recommendations
- **Compliance**: Regulatory checks, audit logging, KYC/AML

## Development Workflow

1. **Frontend Development**: React components, pages, and UI logic
2. **Backend Development**: API endpoints, business logic, database models
3. **Integration**: API consumption, real-time updates, error handling
4. **Testing**: Unit tests, integration tests, end-to-end tests
5. **Deployment**: Docker containers, Kubernetes orchestration

## Technology Stack

### Frontend
- Next.js 14, React 18, TypeScript
- Tailwind CSS, Radix UI components
- Recharts for financial charts
- Socket.io for real-time updates

### Backend
- FastAPI, Python 3.11, SQLAlchemy 2.0
- PostgreSQL, Redis, pgvector
- OpenAI GPT-4, Claude AI, LangChain
- JWT, bcrypt, rate limiting

### Infrastructure
- Docker, Kubernetes, Terraform
- Vercel (frontend), Render (backend)
- GitHub Actions for CI/CD
