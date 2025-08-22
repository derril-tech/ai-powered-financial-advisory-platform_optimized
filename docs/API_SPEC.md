# FinGenius API Specification

## Overview
The FinGenius API provides comprehensive endpoints for AI-powered financial advisory services, portfolio management, market intelligence, and compliance monitoring.

## Base URL
- **Development**: `http://localhost:8000/api/v1`
- **Production**: `https://api.fingenius.com/api/v1`

## Authentication
All API endpoints require JWT authentication via Bearer token in the Authorization header:
```
Authorization: Bearer <jwt_token>
```

## Common Response Format
```json
{
  "success": true,
  "data": {},
  "message": "Operation completed successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

## Error Response Format
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": {}
  },
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

## Authentication Endpoints

### POST /auth/register
Register a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword123",
  "first_name": "John",
  "last_name": "Doe",
  "phone": "+1234567890"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "email": "user@example.com",
      "first_name": "John",
      "last_name": "Doe",
      "kyc_status": "pending"
    },
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
    "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
  }
}
```

### POST /auth/login
Authenticate user and receive access token.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

### POST /auth/refresh
Refresh access token using refresh token.

**Request Body:**
```json
{
  "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
}
```

### POST /auth/logout
Logout user and invalidate tokens.

---

## User Management Endpoints

### GET /users/me
Get current user profile.

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "email": "user@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "risk_tolerance": "moderate",
    "investment_goals": ["retirement", "education"],
    "kyc_status": "approved",
    "created_at": "2024-01-01T00:00:00Z"
  }
}
```

### PUT /users/me
Update current user profile.

**Request Body:**
```json
{
  "first_name": "John",
  "last_name": "Smith",
  "risk_tolerance": "aggressive",
  "investment_goals": ["retirement", "real_estate"]
}
```

### POST /users/kyc
Submit KYC documents.

**Request Body (multipart/form-data):**
```
- id_document: file
- proof_of_address: file
- income_verification: file
```

---

## Portfolio Management Endpoints

### GET /portfolios
Get user's portfolios.

**Response:**
```json
{
  "success": true,
  "data": {
    "portfolios": [
      {
        "id": 1,
        "name": "Retirement Portfolio",
        "total_value": 150000.00,
        "cash_balance": 10000.00,
        "total_return": 12.5,
        "risk_score": 6.2,
        "asset_allocation": {
          "stocks": 60,
          "bonds": 30,
          "cash": 10
        }
      }
    ]
  }
}
```

### POST /portfolios
Create a new portfolio.

**Request Body:**
```json
{
  "name": "Growth Portfolio",
  "description": "Aggressive growth strategy",
  "portfolio_type": "individual",
  "initial_cash": 50000.00
}
```

### GET /portfolios/{portfolio_id}
Get specific portfolio details.

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Retirement Portfolio",
    "total_value": 150000.00,
    "holdings": [
      {
        "id": 1,
        "symbol": "AAPL",
        "security_name": "Apple Inc.",
        "quantity": 100,
        "current_price": 150.00,
        "current_value": 15000.00,
        "unrealized_gain_loss": 2500.00
      }
    ],
    "performance": {
      "total_return": 12.5,
      "annualized_return": 8.2,
      "sharpe_ratio": 1.2,
      "volatility": 15.3
    }
  }
}
```

### POST /portfolios/{portfolio_id}/analyze
Analyze portfolio performance and risk.

**Response:**
```json
{
  "success": true,
  "data": {
    "risk_metrics": {
      "var_95": 8500.00,
      "max_drawdown": 12.3,
      "beta": 1.1
    },
    "ai_insights": [
      "Portfolio shows good diversification across sectors",
      "Consider increasing bond allocation for risk reduction"
    ],
    "recommendations": [
      {
        "action": "buy",
        "symbol": "VTI",
        "quantity": 50,
        "reason": "Increase diversification with broad market ETF"
      }
    ]
  }
}
```

---

## AI Advisory Endpoints

### POST /ai/advise
Get AI-powered investment advice.

**Request Body:**
```json
{
  "portfolio_id": 1,
  "query": "How can I optimize my portfolio for retirement?",
  "risk_preference": "moderate",
  "time_horizon": 20
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "advice": "Based on your retirement goals and moderate risk tolerance...",
    "recommendations": [
      {
        "action": "rebalance",
        "details": "Increase bond allocation to 40%",
        "expected_impact": "Reduce volatility by 15%"
      }
    ],
    "evidence": [
      {
        "source": "SEC filing",
        "title": "Market analysis Q4 2024",
        "relevance": "Supports bond allocation recommendation"
      }
    ]
  }
}
```

### POST /ai/simulate
Run Monte Carlo simulation for portfolio.

**Request Body:**
```json
{
  "portfolio_id": 1,
  "simulation_type": "monte_carlo",
  "time_horizon": 10,
  "scenarios": 10000
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "simulation_id": "sim_123",
    "results": {
      "expected_return": 8.5,
      "confidence_intervals": {
        "5th_percentile": 2.1,
        "25th_percentile": 5.2,
        "50th_percentile": 8.5,
        "75th_percentile": 11.8,
        "95th_percentile": 15.2
      },
      "success_probability": 0.78
    }
  }
}
```

---

## Market Intelligence Endpoints

### GET /market/quotes/{symbol}
Get real-time stock quote.

**Response:**
```json
{
  "success": true,
  "data": {
    "symbol": "AAPL",
    "price": 150.25,
    "change": 2.50,
    "change_percent": 1.69,
    "volume": 45000000,
    "market_cap": 2500000000000,
    "pe_ratio": 25.5
  }
}
```

### GET /market/news
Get financial news and market updates.

**Query Parameters:**
- `symbol` (optional): Filter by specific symbol
- `category` (optional): Filter by news category
- `limit` (optional): Number of articles (default: 20)

**Response:**
```json
{
  "success": true,
  "data": {
    "news": [
      {
        "id": 1,
        "title": "Federal Reserve Announces Interest Rate Decision",
        "summary": "The Fed maintains current rates...",
        "source": "Reuters",
        "published_at": "2024-01-01T14:00:00Z",
        "impact_score": 0.8
      }
    ]
  }
}
```

### POST /market/chat
AI-powered market Q&A.

**Request Body:**
```json
{
  "question": "What's the impact of rising interest rates on tech stocks?",
  "context": "portfolio_analysis"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "answer": "Rising interest rates typically impact tech stocks through...",
    "sources": [
      "Federal Reserve Economic Data",
      "Market analysis reports"
    ],
    "confidence": 0.85
  }
}
```

---

## Compliance Endpoints

### GET /compliance/audit-logs
Get compliance audit logs.

**Query Parameters:**
- `user_id` (optional): Filter by user
- `action_type` (optional): Filter by action type
- `start_date` (optional): Start date filter
- `end_date` (optional): End date filter

**Response:**
```json
{
  "success": true,
  "data": {
    "logs": [
      {
        "id": 1,
        "user_id": 1,
        "action": "portfolio_rebalance",
        "details": "Rebalanced portfolio to match target allocation",
        "timestamp": "2024-01-01T10:00:00Z",
        "compliance_status": "approved"
      }
    ]
  }
}
```

### POST /compliance/check
Run compliance check on portfolio.

**Request Body:**
```json
{
  "portfolio_id": 1,
  "check_type": "suitability"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "check_id": "comp_123",
    "status": "passed",
    "issues": [],
    "recommendations": [
      "Consider adding more conservative investments"
    ]
  }
}
```

---

## WebSocket Endpoints

### /ws/portfolio/{user_id}
Real-time portfolio updates.

**Message Format:**
```json
{
  "type": "portfolio_update",
  "data": {
    "portfolio_id": 1,
    "total_value": 151000.00,
    "change": 1000.00,
    "change_percent": 0.67
  }
}
```

### /ws/chat/{user_id}
Real-time AI chat interface.

**Message Format:**
```json
{
  "type": "message",
  "data": {
    "message": "What's the best time to rebalance my portfolio?",
    "timestamp": "2024-01-01T12:00:00Z"
  }
}
```

---

## Error Codes

| Code | Description |
|------|-------------|
| `AUTHENTICATION_ERROR` | Invalid or expired token |
| `AUTHORIZATION_ERROR` | Insufficient permissions |
| `VALIDATION_ERROR` | Invalid request data |
| `NOT_FOUND` | Resource not found |
| `RATE_LIMIT_EXCEEDED` | Too many requests |
| `INTERNAL_ERROR` | Server error |

## Rate Limiting

- **Standard endpoints**: 100 requests per minute
- **AI endpoints**: 20 requests per minute
- **Market data**: 50 requests per minute

## Pagination

For endpoints returning lists, use query parameters:
- `page`: Page number (default: 1)
- `size`: Items per page (default: 20)

**Response format:**
```json
{
  "success": true,
  "data": {
    "items": [],
    "pagination": {
      "page": 1,
      "size": 20,
      "total": 100,
      "pages": 5
    }
  }
}
```
