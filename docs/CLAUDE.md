# CLAUDE.md - AI Assistant Guidelines for FinGenius Platform

## Overview

This document provides comprehensive guidelines for AI assistants (like Claude) to effectively work with the FinGenius AI-powered financial advisory platform. The platform is a modern, full-stack application built with Next.js 14 frontend and FastAPI backend, designed for enterprise-grade financial services.

## Platform Architecture

### Monorepo Structure
```
ai-powered-financial-advisory-platform_optimized/
├── apps/
│   ├── web/          # Next.js 14 Frontend (TypeScript)
│   └── api/          # FastAPI Backend (Python 3.11)
├── packages/         # Shared libraries and utilities
├── docs/            # Comprehensive documentation
├── infra/           # Infrastructure as Code
└── scripts/         # Development and deployment scripts
```

### Technology Stack

#### Frontend (apps/web/)
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript 5.3.3
- **Styling**: Tailwind CSS 3.3.6 with custom financial theme
- **UI Components**: Radix UI primitives with custom variants
- **State Management**: React Query for server state
- **Charts**: Recharts for financial visualizations
- **Real-time**: Socket.io client for live updates
- **Forms**: React Hook Form with Zod validation
- **Testing**: Jest and Playwright

#### Backend (apps/api/)
- **Framework**: FastAPI with async support
- **Language**: Python 3.11
- **Database**: PostgreSQL with pgvector for embeddings
- **ORM**: SQLAlchemy 2.0 with async support
- **Cache**: Redis for session and data caching
- **AI Integration**: OpenAI GPT-4, Claude AI, LangChain
- **Financial APIs**: yfinance, Alpha Vantage integration
- **Security**: JWT, MFA, RBAC, SSO support
- **Testing**: pytest with comprehensive coverage

## Key Features and Capabilities

### Core Financial Features
1. **AI Financial Planner**: Personalized financial advice using AI
2. **Intelligent Portfolio Manager**: Automated portfolio optimization
3. **Market Intelligence Copilot**: Real-time market analysis
4. **Automated Investment Optimization**: AI-driven investment strategies
5. **Wealth Dashboard**: Comprehensive financial overview
6. **Advisory CRM**: Client relationship management
7. **Regulatory Guardrails**: Compliance and risk management
8. **KYC/AML**: Identity verification and compliance

### Technical Features
1. **Real-time Updates**: WebSocket integration for live data
2. **RAG (Retrieval-Augmented Generation)**: Context-aware AI responses
3. **Monte Carlo Simulations**: Risk assessment and modeling
4. **Advanced Analytics**: Sharpe ratios, VaR, asset allocation
5. **Tax Optimization**: Automated tax-loss harvesting
6. **Portfolio Rebalancing**: Intelligent rebalancing strategies
7. **Multi-factor Authentication**: Enhanced security
8. **Audit Logging**: Comprehensive compliance tracking

## Development Guidelines for AI Assistants

### Code Quality Standards

#### Frontend (TypeScript/React)
- Use strict TypeScript configuration
- Follow React best practices and hooks
- Implement proper error boundaries
- Use React Query for server state management
- Follow Tailwind CSS utility-first approach
- Implement responsive design patterns
- Use Radix UI for accessible components

#### Backend (Python/FastAPI)
- Use type hints throughout the codebase
- Implement async/await patterns for performance
- Use Pydantic models for validation
- Follow FastAPI best practices
- Implement comprehensive error handling
- Use structured logging with structlog
- Follow SQLAlchemy 2.0 async patterns

### Security Considerations
- Always validate user inputs
- Implement proper authentication and authorization
- Use HTTPS for all communications
- Follow OWASP security guidelines
- Implement rate limiting
- Use secure session management
- Follow financial compliance requirements

### Performance Optimization
- Implement caching strategies
- Use database indexing appropriately
- Optimize API response times
- Implement lazy loading where appropriate
- Use CDN for static assets
- Monitor and optimize bundle sizes
- Implement proper error handling

## File Structure and Conventions

### Frontend Structure (apps/web/)
```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Radix UI)
│   ├── dashboard/      # Dashboard-specific components
│   └── providers/      # Context providers
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
├── types/              # TypeScript type definitions
└── styles/             # Global styles and themes
```

### Backend Structure (apps/api/)
```
app/
├── api/                # API route handlers
├── core/               # Core configurations and utilities
├── models/             # SQLAlchemy database models
├── schemas/            # Pydantic request/response models
├── services/           # Business logic services
├── crud/               # Database CRUD operations
├── auth/               # Authentication and authorization
├── ai/                 # AI integration services
├── market/             # Market data services
└── utils/              # Utility functions
```

## Common Development Tasks

### Adding New Features

#### Frontend Feature Development
1. **Create Component**: Add to appropriate directory in `src/components/`
2. **Add Types**: Define TypeScript interfaces in `src/types/`
3. **Add Hooks**: Create custom hooks in `src/hooks/`
4. **Add Pages**: Create new pages in `src/app/`
5. **Add Tests**: Implement unit and integration tests
6. **Update Documentation**: Add component documentation

#### Backend Feature Development
1. **Create Models**: Add SQLAlchemy models in `app/models/`
2. **Create Schemas**: Add Pydantic schemas in `app/schemas/`
3. **Create Services**: Add business logic in `app/services/`
4. **Create API Routes**: Add endpoints in `app/api/`
5. **Add Tests**: Implement comprehensive tests
6. **Update Documentation**: Add API documentation

### Database Operations
- Use SQLAlchemy 2.0 async patterns
- Implement proper migrations with Alembic
- Use connection pooling for performance
- Implement proper error handling
- Use transactions for data consistency
- Follow naming conventions for tables and columns

### AI Integration
- Use LangChain for AI orchestration
- Implement RAG patterns for context-aware responses
- Use vector embeddings for similarity search
- Implement proper prompt engineering
- Add fallback mechanisms for AI failures
- Monitor AI performance and costs

## Testing Guidelines

### Frontend Testing
- **Unit Tests**: Test individual components with Jest
- **Integration Tests**: Test component interactions
- **E2E Tests**: Test user journeys with Playwright
- **Visual Tests**: Screenshot testing for UI consistency
- **Accessibility Tests**: Ensure WCAG compliance

### Backend Testing
- **Unit Tests**: Test individual functions and classes
- **Integration Tests**: Test API endpoints and database operations
- **Performance Tests**: Load testing with locust
- **Security Tests**: Penetration testing and vulnerability scanning
- **Contract Tests**: API contract validation

## Deployment and Infrastructure

### Environment Configuration
- Use environment variables for configuration
- Implement proper secrets management
- Use different configurations for dev/staging/prod
- Implement health checks and monitoring
- Use containerization with Docker
- Implement CI/CD pipelines

### Monitoring and Logging
- Use structured logging with structlog
- Implement metrics collection with Prometheus
- Set up alerting for critical issues
- Monitor performance and error rates
- Implement distributed tracing
- Use APM tools for application monitoring

## Financial Compliance and Security

### Regulatory Requirements
- Implement KYC/AML procedures
- Follow financial data protection regulations
- Implement audit logging for all transactions
- Use secure communication protocols
- Implement proper data retention policies
- Follow SOC 2 compliance requirements

### Security Best Practices
- Implement multi-factor authentication
- Use role-based access control (RBAC)
- Implement proper session management
- Use encryption for sensitive data
- Implement rate limiting and DDoS protection
- Regular security audits and penetration testing

## Common Patterns and Solutions

### Error Handling
```typescript
// Frontend error boundary pattern
class ErrorBoundary extends React.Component {
  // Implementation for catching and handling errors
}

// Backend error handling pattern
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    # Structured error logging and response
```

### Data Validation
```typescript
// Frontend validation with Zod
const schema = z.object({
  email: z.string().email(),
  amount: z.number().positive()
});

// Backend validation with Pydantic
class TransactionCreate(BaseModel):
    amount: Decimal = Field(gt=0)
    description: str = Field(min_length=1, max_length=255)
```

### Caching Strategies
```python
# Redis caching pattern
@cache(expire=300)  # 5 minutes
async def get_market_data(symbol: str):
    # Fetch and cache market data
```

### Real-time Updates
```typescript
// WebSocket connection pattern
const socket = io(process.env.NEXT_PUBLIC_WS_URL);
socket.on('portfolio_update', (data) => {
  // Handle real-time portfolio updates
});
```

## Troubleshooting Common Issues

### Frontend Issues
1. **Build Errors**: Check TypeScript types and dependencies
2. **Performance Issues**: Analyze bundle size and optimize imports
3. **Styling Issues**: Verify Tailwind CSS configuration
4. **State Management**: Check React Query configuration
5. **Real-time Issues**: Verify WebSocket connections

### Backend Issues
1. **Database Errors**: Check connection pooling and migrations
2. **API Errors**: Verify request validation and error handling
3. **Performance Issues**: Check database queries and caching
4. **AI Integration**: Verify API keys and rate limits
5. **Security Issues**: Check authentication and authorization

## Best Practices for AI Assistants

### Code Generation
- Always follow the established patterns in the codebase
- Use the existing component library and utilities
- Implement proper error handling and validation
- Add comprehensive tests for new features
- Follow the naming conventions and file structure
- Use TypeScript strictly for frontend code
- Use type hints for all Python code

### Problem Solving
- Understand the financial domain context
- Consider security and compliance requirements
- Implement proper error handling and logging
- Use async/await patterns for performance
- Follow the established architecture patterns
- Consider scalability and maintainability
- Implement proper testing strategies

### Documentation
- Add comprehensive comments for complex logic
- Update API documentation for new endpoints
- Document configuration requirements
- Add troubleshooting guides for common issues
- Update README files for new features
- Document security considerations

## Resources and References

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/)
- [React Query Documentation](https://tanstack.com/query)

### Financial APIs
- [yfinance Documentation](https://pypi.org/project/yfinance/)
- [Alpha Vantage API](https://www.alphavantage.co/documentation/)
- [OpenAI API](https://platform.openai.com/docs)
- [Anthropic Claude API](https://docs.anthropic.com/)

### Security and Compliance
- [OWASP Security Guidelines](https://owasp.org/)
- [SOC 2 Compliance](https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/aicpasoc2report.html)
- [GDPR Compliance](https://gdpr.eu/)
- [PCI DSS Standards](https://www.pcisecuritystandards.org/)

---

## Quick Reference Commands

### Frontend Development
```bash
cd apps/web
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run test         # Run tests
npm run lint         # Run linting
```

### Backend Development
```bash
cd apps/api
pip install -r requirements.txt  # Install dependencies
uvicorn main:app --reload       # Start development server
pytest                           # Run tests
black .                         # Format code
mypy .                         # Type checking
```

### Database Operations
```bash
cd apps/api
alembic revision --autogenerate -m "Description"  # Create migration
alembic upgrade head                              # Apply migrations
alembic downgrade -1                              # Rollback migration
```

---

*This document serves as a comprehensive guide for AI assistants working with the FinGenius platform. Regular updates ensure alignment with evolving best practices and platform capabilities.*




