# AI Investment Agent

A modern web application for AI-powered investment management.

## Deployment

### Prerequisites

- A Vercel account
- GitHub repository with the project code
- API keys for:
  - Alpha Vantage
  - Finnhub
  - Polygon.io
- Database URL (e.g., PostgreSQL)
- Sentry DSN (optional, for error tracking)

### Deploying to Vercel

1. Go to [Vercel](https://vercel.com) and sign in with your GitHub account
2. Click "New Project"
3. Select "Import Git Repository"
4. Choose your repository (AI-Investment-App)
5. Configure the project:
   - Framework: Next.js
   - Root Directory: /
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

6. Add Environment Variables:
   - Copy the variables from `.env.example`
   - Add your actual values in Vercel's Environment Variables section
   - Make sure to add all required variables before deploying

7. Click "Deploy"

### Environment Variables

Required environment variables for deployment:

```env
# API Keys
NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY=
NEXT_PUBLIC_FINNHUB_API_KEY=
NEXT_PUBLIC_POLYGON_API_KEY=

# Database
DATABASE_URL=

# Authentication
NEXTAUTH_URL=
NEXTAUTH_SECRET=

# Trading Configuration
MAX_POSITION_SIZE=
PRICE_TOLERANCE=
RISK_LEVEL=

# Feature Flags
ENABLE_REAL_TIME_UPDATES=
ENABLE_AI_PREDICTIONS=
ENABLE_SOCIAL_SENTIMENT=

# Monitoring
SENTRY_DSN=
LOG_LEVEL=
```

### Post-Deployment

1. Verify the deployment in Vercel's dashboard
2. Check the deployment logs for any issues
3. Test the application's functionality
4. Set up monitoring and alerts if needed

### Troubleshooting

If you encounter issues during deployment:

1. Check the build logs in Vercel's dashboard
2. Verify all environment variables are set correctly
3. Ensure all dependencies are properly installed
4. Check for any TypeScript or linting errors
5. Verify the database connection is working

## Development

[Previous development instructions remain unchanged...] 