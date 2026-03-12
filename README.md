# ServiceConnect AI

Plateforme de services à domicile orchestrée par des agents IA.

## Stack
- **Web**: Next.js 15 + TailwindCSS
- **API**: NestJS + TypeScript
- **DB**: PostgreSQL 16 + PostGIS
- **Cache**: Redis 7
- **Paiement**: Stripe Connect
- **IA**: LangGraph + Claude API

## Démarrage rapide

```bash
# Install
pnpm install

# Start services
docker-compose up -d

# DB migrate
pnpm db:migrate

# Dev
pnpm dev
```

## URLs dev
- Web: http://localhost:3000
- API: http://localhost:3001
- API Docs: http://localhost:3001/api/docs
