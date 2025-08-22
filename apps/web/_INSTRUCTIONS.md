# Frontend Development Instructions

## Overview
This directory contains the Next.js 14 frontend application for FinGenius. The application uses TypeScript, Tailwind CSS, and modern React patterns.

## TODO Markers

### 🔧 SETUP & CONFIGURATION
- [ ] Install dependencies: `npm install`
- [ ] Set up environment variables in `.env.local`
- [ ] Configure API endpoints in `src/lib/api.ts`
- [ ] Set up WebSocket connections for real-time updates
- [ ] Configure authentication providers

### 🎨 UI COMPONENTS
- [ ] Complete base UI components in `src/components/ui/`
- [ ] Create financial-specific components (charts, portfolio cards, etc.)
- [ ] Implement dark/light theme switching
- [ ] Add loading states and error boundaries
- [ ] Create responsive layouts for mobile/desktop

### 📊 DASHBOARD FEATURES
- [ ] Implement wealth overview with real-time data
- [ ] Create portfolio summary with performance metrics
- [ ] Add AI insights component with recommendations
- [ ] Build recent activity feed
- [ ] Implement real-time portfolio updates via WebSocket

### 💼 PORTFOLIO MANAGEMENT
- [ ] Create portfolio listing page
- [ ] Implement portfolio detail view with holdings
- [ ] Add transaction history and analysis
- [ ] Build rebalancing interface
- [ ] Create performance charts and analytics

### 🧠 AI ADVISORY FEATURES
- [ ] Implement AI chat interface
- [ ] Create recommendation display components
- [ ] Add Monte Carlo simulation visualization
- [ ] Build evidence and citation display
- [ ] Implement AI-powered portfolio analysis

### 📈 MARKET INTELLIGENCE
- [ ] Create market data dashboard
- [ ] Implement real-time stock quotes
- [ ] Add news feed with impact analysis
- [ ] Build sector and market analysis tools
- [ ] Create market chat interface

### 👥 ADVISOR CRM
- [ ] Build client management interface
- [ ] Implement KYC document upload
- [ ] Create compliance monitoring dashboard
- [ ] Add client communication tools
- [ ] Build reporting and analytics

### 🔒 AUTHENTICATION & SECURITY
- [ ] Implement JWT token management
- [ ] Add MFA support
- [ ] Create role-based access control
- [ ] Implement session management
- [ ] Add security headers and CSRF protection

### 🧪 TESTING
- [ ] Write unit tests for components
- [ ] Create integration tests for API calls
- [ ] Add end-to-end tests with Playwright
- [ ] Implement accessibility testing
- [ ] Add performance testing

### 🚀 DEPLOYMENT
- [ ] Configure Vercel deployment
- [ ] Set up environment variables for production
- [ ] Implement CI/CD pipeline
- [ ] Add monitoring and error tracking
- [ ] Configure CDN and caching

## Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Use functional components with hooks
- Implement proper error handling
- Add comprehensive JSDoc comments

### Component Structure
- Keep components small and focused
- Use composition over inheritance
- Implement proper prop validation
- Add loading and error states
- Use React.memo for performance optimization

### State Management
- Use React Query for server state
- Implement local state with useState/useReducer
- Use Context for global state when needed
- Implement optimistic updates
- Add proper error boundaries

### API Integration
- Use typed API clients
- Implement proper error handling
- Add request/response interceptors
- Use WebSocket for real-time data
- Implement retry logic for failed requests

### Performance
- Implement code splitting
- Use dynamic imports for large components
- Optimize images and assets
- Implement proper caching strategies
- Monitor bundle size

### Accessibility
- Follow WCAG 2.1 AA guidelines
- Use semantic HTML elements
- Implement keyboard navigation
- Add proper ARIA labels
- Test with screen readers

## File Structure Guidelines

```
src/
├── app/                    # Next.js App Router pages
├── components/             # Reusable React components
│   ├── ui/                # Base UI components
│   ├── dashboard/         # Dashboard-specific components
│   ├── portfolio/         # Portfolio management components
│   ├── charts/            # Financial chart components
│   └── providers/         # Context providers
├── lib/                   # Utility functions and API clients
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript type definitions
├── styles/                # Global styles and CSS modules
└── constants/             # Application constants
```

## Environment Variables

Create `.env.local` with the following variables:
```
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
NEXT_PUBLIC_WS_URL=ws://localhost:8000/ws
NEXT_PUBLIC_APP_NAME=FinGenius
```

## Getting Started

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env.local` and configure
3. Start development server: `npm run dev`
4. Open http://localhost:3000

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler
- `npm run test` - Run tests
- `npm run test:e2e` - Run end-to-end tests
