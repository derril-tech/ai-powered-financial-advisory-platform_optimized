# FinGenius Frontend

## Overview
The FinGenius frontend is a modern Next.js 14 application that provides an intuitive interface for AI-powered financial advisory services. Built with TypeScript, Tailwind CSS, and React 18.

## Features

### 🎯 Core Features
- **Wealth Dashboard**: Real-time portfolio overview and performance metrics
- **Portfolio Management**: Holdings, transactions, and rebalancing tools
- **AI Advisory**: Intelligent investment recommendations and analysis
- **Market Intelligence**: Real-time market data and news
- **Advisor CRM**: Client management and compliance tools

### 🎨 UI/UX Features
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Dark/Light Mode**: Theme switching with system preference detection
- **Real-time Updates**: WebSocket-powered live data updates
- **Interactive Charts**: Financial data visualization with Recharts
- **Accessibility**: WCAG 2.1 AA compliant

### 🔧 Technical Features
- **TypeScript**: Full type safety throughout the application
- **Next.js 14**: App Router with server components
- **Tailwind CSS**: Utility-first styling with custom design tokens
- **React Query**: Server state management and caching
- **WebSockets**: Real-time communication with backend

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Backend API running (see backend README)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-powered-financial-advisory-platform_optimized/apps/web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Dashboard pages
│   ├── portfolio/         # Portfolio management
│   ├── market/            # Market intelligence
│   ├── advisor/           # Advisor CRM
│   └── compliance/        # Compliance reporting
├── components/            # React components
│   ├── ui/               # Base UI components
│   ├── dashboard/        # Dashboard components
│   ├── portfolio/        # Portfolio components
│   ├── charts/           # Financial charts
│   └── providers/        # Context providers
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── types/                # TypeScript definitions
└── styles/               # Global styles
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript compiler |
| `npm run test` | Run unit tests |
| `npm run test:e2e` | Run end-to-end tests |

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
NEXT_PUBLIC_WS_URL=ws://localhost:8000/ws

# Application
NEXT_PUBLIC_APP_NAME=FinGenius
NEXT_PUBLIC_APP_VERSION=1.0.0

# Feature Flags
NEXT_PUBLIC_ENABLE_AI_FEATURES=true
NEXT_PUBLIC_ENABLE_REAL_TIME_UPDATES=true
NEXT_PUBLIC_ENABLE_MARKET_DATA=true
```

## Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Use functional components with hooks
- Implement proper error handling
- Add comprehensive JSDoc comments

### Component Development
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

## Key Components

### Dashboard Components
- `WealthOverview`: Portfolio value and performance summary
- `PortfolioSummary`: Holdings and allocation breakdown
- `AIInsights`: AI-powered recommendations
- `RecentActivity`: Latest transactions and updates

### Portfolio Components
- `PortfolioList`: Portfolio management interface
- `HoldingCard`: Individual security display
- `PerformanceChart`: Historical performance visualization
- `RebalancingTool`: Portfolio rebalancing interface

### Market Components
- `MarketDashboard`: Real-time market overview
- `StockQuote`: Live stock price display
- `NewsFeed`: Financial news aggregation
- `MarketChat`: AI-powered market Q&A

### UI Components
- `Button`: Reusable button with variants
- `Card`: Content container with styling
- `Chart`: Financial chart wrapper
- `Modal`: Dialog and overlay components

## Testing

### Unit Tests
```bash
npm run test
```

### End-to-End Tests
```bash
npm run test:e2e
```

### Type Checking
```bash
npm run type-check
```

## Performance Optimization

### Code Splitting
- Use dynamic imports for large components
- Implement route-based code splitting
- Lazy load non-critical features

### Caching
- Implement React Query caching
- Use Next.js built-in caching
- Optimize API requests

### Bundle Optimization
- Monitor bundle size with `npm run build`
- Use tree shaking for unused code
- Optimize images and assets

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Manual Deployment
1. Build the application: `npm run build`
2. Start production server: `npm run start`
3. Configure reverse proxy (nginx/Apache)

## Troubleshooting

### Common Issues

**Build Errors**
- Ensure all dependencies are installed
- Check TypeScript configuration
- Verify environment variables

**API Connection Issues**
- Verify backend is running
- Check API URL configuration
- Ensure CORS is properly configured

**Performance Issues**
- Monitor bundle size
- Check for memory leaks
- Optimize API calls

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Submit a pull request

## Support

For support and questions:
- Check the documentation
- Review existing issues
- Create a new issue with details

## License

This project is licensed under the MIT License.
