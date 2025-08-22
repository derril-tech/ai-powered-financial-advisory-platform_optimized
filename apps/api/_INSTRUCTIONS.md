# Backend Development Instructions

## Overview
This directory contains the FastAPI backend application for FinGenius. The application provides AI-powered financial advisory services, portfolio management, and compliance monitoring.

## TODO Markers

### 🔧 SETUP & CONFIGURATION
- [ ] Install dependencies: `pip install -r requirements.txt`
- [ ] Set up environment variables in `.env`
- [ ] Configure database connection and migrations
- [ ] Set up Redis for caching and sessions
- [ ] Configure AI service API keys

### 🗄️ DATABASE & MODELS
- [ ] Complete database models (User, Portfolio, Transaction, etc.)
- [ ] Set up Alembic migrations
- [ ] Create database indexes for performance
- [ ] Implement soft deletes and audit trails
- [ ] Set up pgvector for embeddings

### 🔐 AUTHENTICATION & SECURITY
- [ ] Implement JWT token generation and validation
- [ ] Add password hashing with bcrypt
- [ ] Create MFA support (TOTP)
- [ ] Implement rate limiting middleware
- [ ] Add CORS configuration
- [ ] Set up role-based access control

### 📊 PORTFOLIO MANAGEMENT
- [ ] Create portfolio CRUD operations
- [ ] Implement holdings management
- [ ] Add transaction tracking
- [ ] Build performance calculations
- [ ] Create rebalancing logic
- [ ] Implement risk metrics calculation

### 🧠 AI ADVISORY SERVICES
- [ ] Integrate OpenAI GPT-4 for analysis
- [ ] Integrate Claude AI for long-form analysis
- [ ] Implement LangChain for RAG
- [ ] Create portfolio optimization algorithms
- [ ] Build Monte Carlo simulation engine
- [ ] Add evidence linking for recommendations

### 📈 MARKET DATA INTEGRATION
- [ ] Integrate Alpha Vantage API
- [ ] Add Yahoo Finance data source
- [ ] Implement real-time price feeds
- [ ] Create news aggregation service
- [ ] Build market sentiment analysis
- [ ] Add sector and industry data

### 🔒 COMPLIANCE & AUDITING
- [ ] Implement KYC/AML checks
- [ ] Create audit logging system
- [ ] Add regulatory compliance rules
- [ ] Build suitability checks
- [ ] Implement document verification
- [ ] Create compliance reporting

### 🔌 API ENDPOINTS
- [ ] Complete authentication endpoints
- [ ] Build user management endpoints
- [ ] Create portfolio management endpoints
- [ ] Implement AI advisory endpoints
- [ ] Add market data endpoints
- [ ] Build compliance endpoints

### 🌐 WEBSOCKET IMPLEMENTATION
- [ ] Set up WebSocket connections
- [ ] Implement real-time portfolio updates
- [ ] Add live market data streaming
- [ ] Create AI chat interface
- [ ] Build notification system

### 🧪 TESTING
- [ ] Write unit tests for services
- [ ] Create integration tests for API endpoints
- [ ] Add database testing with fixtures
- [ ] Implement API contract testing
- [ ] Add performance testing

### 📊 MONITORING & LOGGING
- [ ] Set up structured logging
- [ ] Implement metrics collection
- [ ] Add health check endpoints
- [ ] Create error tracking
- [ ] Build performance monitoring

### 🚀 DEPLOYMENT
- [ ] Configure Docker containerization
- [ ] Set up Kubernetes manifests
- [ ] Implement CI/CD pipeline
- [ ] Add environment-specific configs
- [ ] Configure production database

## Development Guidelines

### Code Style
- Use Python 3.11+ features
- Follow PEP 8 and Black formatting
- Use type hints throughout
- Implement proper error handling
- Add comprehensive docstrings

### API Design
- Use FastAPI for all endpoints
- Implement proper request/response models
- Add comprehensive API documentation
- Use proper HTTP status codes
- Implement pagination for list endpoints

### Database Design
- Use SQLAlchemy 2.0 async patterns
- Implement proper relationships
- Add database constraints
- Use migrations for schema changes
- Implement connection pooling

### Security Best Practices
- Hash passwords with bcrypt
- Use JWT for stateless authentication
- Implement proper CORS policies
- Add rate limiting
- Validate all inputs
- Use HTTPS in production

### Error Handling
- Use custom exception classes
- Implement proper error responses
- Add error logging
- Create user-friendly error messages
- Implement retry logic where appropriate

### Performance Optimization
- Use async/await patterns
- Implement proper caching
- Add database query optimization
- Use connection pooling
- Implement background tasks

## File Structure Guidelines

```
app/
├── api/                    # API route handlers
│   └── v1/                # API version 1
│       ├── auth.py        # Authentication endpoints
│       ├── users.py       # User management
│       ├── portfolios.py  # Portfolio management
│       ├── market.py      # Market data
│       ├── ai.py          # AI advisory
│       └── compliance.py  # Compliance endpoints
├── core/                   # Core application modules
│   ├── config.py          # Configuration settings
│   ├── database.py        # Database connection
│   ├── security.py        # Security utilities
│   └── logging.py         # Logging configuration
├── models/                 # SQLAlchemy models
│   ├── user.py            # User model
│   ├── portfolio.py       # Portfolio models
│   ├── transaction.py     # Transaction model
│   └── ai.py              # AI models
├── schemas/                # Pydantic schemas
│   ├── user.py            # User schemas
│   ├── portfolio.py       # Portfolio schemas
│   └── common.py          # Common schemas
├── services/               # Business logic
│   ├── auth.py            # Authentication service
│   ├── portfolio.py       # Portfolio service
│   ├── market.py          # Market data service
│   └── ai.py              # AI service
└── utils/                  # Utility functions
    ├── security.py        # Security utilities
    ├── validators.py      # Data validation
    └── helpers.py         # Helper functions
```

## Environment Variables

Create `.env` with the following variables:
```
# Application
DEBUG=True
SECRET_KEY=your-secret-key-here

# Database
DATABASE_URL=postgresql+asyncpg://user:password@localhost/fingenius

# Redis
REDIS_URL=redis://localhost:6379

# AI Services
OPENAI_API_KEY=your-openai-key
ANTHROPIC_API_KEY=your-anthropic-key

# Financial APIs
ALPHA_VANTAGE_API_KEY=your-alpha-vantage-key

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

## Getting Started

1. Install dependencies: `pip install -r requirements.txt`
2. Copy `.env.example` to `.env` and configure
3. Set up PostgreSQL database
4. Run migrations: `alembic upgrade head`
5. Start development server: `uvicorn main:app --reload`
6. Open http://localhost:8000/docs for API documentation

## Available Scripts

- `uvicorn main:app --reload` - Start development server
- `alembic upgrade head` - Run database migrations
- `alembic revision --autogenerate -m "description"` - Create migration
- `pytest` - Run tests
- `black .` - Format code
- `isort .` - Sort imports
- `mypy .` - Type checking
- `ruff check .` - Lint code

## API Documentation

- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc
- OpenAPI JSON: http://localhost:8000/openapi.json

## Database Migrations

```bash
# Create new migration
alembic revision --autogenerate -m "Add user table"

# Apply migrations
alembic upgrade head

# Rollback migration
alembic downgrade -1
```

## Testing

```bash
# Run all tests
pytest

# Run with coverage
pytest --cov=app

# Run specific test file
pytest tests/test_auth.py

# Run with verbose output
pytest -v
```
