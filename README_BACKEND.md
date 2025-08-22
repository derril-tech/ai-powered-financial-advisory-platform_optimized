# FinGenius Backend

## Overview
The FinGenius backend is a high-performance FastAPI application that provides AI-powered financial advisory services, portfolio management, and compliance monitoring. Built with Python 3.11, SQLAlchemy 2.0, and modern async patterns.

## Features

### 🎯 Core Features
- **Authentication & Security**: JWT-based auth with MFA support
- **Portfolio Management**: CRUD operations, calculations, and analysis
- **AI Advisory**: OpenAI GPT-4 and Claude AI integration
- **Market Data**: Real-time feeds and historical data
- **Compliance**: KYC/AML, audit logging, regulatory checks
- **Real-time Updates**: WebSocket support for live data

### 🔧 Technical Features
- **FastAPI**: High-performance async web framework
- **SQLAlchemy 2.0**: Modern async ORM with PostgreSQL
- **Redis**: Caching and session management
- **LangChain**: AI orchestration and RAG implementation
- **WebSockets**: Real-time communication
- **Comprehensive Testing**: Unit, integration, and API tests

## Quick Start

### Prerequisites
- Python 3.11+
- PostgreSQL 13+
- Redis 6+
- Virtual environment (recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-powered-financial-advisory-platform_optimized/apps/api
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

5. **Set up database**
   ```bash
   # Create PostgreSQL database
   createdb fingenius
   
   # Run migrations
   alembic upgrade head
   ```

6. **Start development server**
   ```bash
   uvicorn main:app --reload
   ```

7. **Access API documentation**
   Navigate to [http://localhost:8000/docs](http://localhost:8000/docs)

## Project Structure

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
├── services/               # Business logic
└── utils/                  # Utility functions
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `uvicorn main:app --reload` | Start development server |
| `alembic upgrade head` | Apply database migrations |
| `alembic revision --autogenerate -m "description"` | Create migration |
| `pytest` | Run tests |
| `black .` | Format code |
| `isort .` | Sort imports |
| `mypy .` | Type checking |
| `ruff check .` | Lint code |

## Environment Variables

Create a `.env` file with the following variables:

```env
# Application
DEBUG=True
SECRET_KEY=your-secret-key-change-in-production

# Database
DATABASE_URL=postgresql+asyncpg://user:password@localhost/fingenius

# Redis
REDIS_URL=redis://localhost:6379

# AI Services
OPENAI_API_KEY=your-openai-api-key
ANTHROPIC_API_KEY=your-anthropic-api-key

# Financial APIs
ALPHA_VANTAGE_API_KEY=your-alpha-vantage-key

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

## API Documentation

### Interactive Documentation
- **Swagger UI**: [http://localhost:8000/docs](http://localhost:8000/docs)
- **ReDoc**: [http://localhost:8000/redoc](http://localhost:8000/redoc)
- **OpenAPI JSON**: [http://localhost:8000/openapi.json](http://localhost:8000/openapi.json)

### Key Endpoints

#### Authentication
- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/refresh` - Token refresh

#### Portfolio Management
- `GET /api/v1/portfolios` - List user portfolios
- `POST /api/v1/portfolios` - Create portfolio
- `GET /api/v1/portfolios/{id}` - Get portfolio details
- `POST /api/v1/portfolios/{id}/analyze` - Analyze portfolio

#### AI Advisory
- `POST /api/v1/ai/advise` - Get AI recommendations
- `POST /api/v1/ai/simulate` - Run Monte Carlo simulation

#### Market Data
- `GET /api/v1/market/quotes/{symbol}` - Get stock quote
- `GET /api/v1/market/news` - Get financial news
- `POST /api/v1/market/chat` - AI market Q&A

## Database Management

### Migrations
```bash
# Create new migration
alembic revision --autogenerate -m "Add user table"

# Apply migrations
alembic upgrade head

# Rollback migration
alembic downgrade -1

# View migration history
alembic history
```

### Database Models

#### User Model
- Basic profile information
- Financial profile (risk tolerance, goals)
- KYC/AML status
- Authentication details

#### Portfolio Model
- Portfolio metadata
- Financial metrics (value, returns, risk)
- Asset allocation data
- AI fit scores

#### Holding Model
- Security information
- Position data (quantity, cost basis)
- Performance metrics
- Metadata (sector, industry)

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

## Testing

### Running Tests
```bash
# Run all tests
pytest

# Run with coverage
pytest --cov=app

# Run specific test file
pytest tests/test_auth.py

# Run with verbose output
pytest -v

# Run integration tests
pytest tests/integration/
```

### Test Structure
```
tests/
├── unit/                  # Unit tests
│   ├── test_models.py    # Model tests
│   ├── test_services.py  # Service tests
│   └── test_utils.py     # Utility tests
├── integration/           # Integration tests
│   ├── test_api.py       # API endpoint tests
│   └── test_database.py  # Database tests
└── fixtures/             # Test fixtures
```

## Performance Optimization

### Database Optimization
- Use proper indexes
- Implement query optimization
- Use connection pooling
- Implement caching strategies

### API Optimization
- Use async/await patterns
- Implement proper caching
- Add rate limiting
- Use background tasks for heavy operations

### Monitoring
- Structured logging with structlog
- Metrics collection with Prometheus
- Health check endpoints
- Performance monitoring

## Deployment

### Docker Deployment
```bash
# Build image
docker build -t fingenius-api .

# Run container
docker run -p 8000:8000 fingenius-api
```

### Production Considerations
- Use production-grade database
- Configure proper logging
- Set up monitoring and alerting
- Implement backup strategies
- Use HTTPS and security headers

## Troubleshooting

### Common Issues

**Database Connection**
- Verify PostgreSQL is running
- Check connection string format
- Ensure database exists
- Verify user permissions

**Redis Connection**
- Verify Redis is running
- Check connection URL
- Ensure Redis is accessible

**API Key Issues**
- Verify API keys are valid
- Check rate limits
- Ensure proper permissions

**Migration Issues**
- Check database schema
- Verify migration files
- Ensure proper database state

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Ensure code quality checks pass
6. Submit a pull request

## Support

For support and questions:
- Check the API documentation
- Review existing issues
- Create a new issue with details

## License

This project is licensed under the MIT License.
