# Quickstart: Faxinal Conectado Home and Health Foundation

## Prerequisites

- Docker and Docker Compose available locally.
- Repository checked out at the project root.
- No host-level Node.js installation is required for the standard development
  workflow.

## Start Local Development

```bash
docker compose up --build
```

Expected services:

- Web app available through the configured local web port.
- API available through the configured local API port.
- PostgreSQL container available for platform compatibility, even though this
  feature does not introduce persisted data.

## Validate Home Page

Open the web app home route.

Expected result:

- The page displays `Faxinal Conectado`.
- All visible user-facing content is Portuguese (Brazil).
- The page explains that the application helps people find service providers
  quickly and practically.
- The page does not offer unavailable actions such as login, search, account
  creation, provider registration, or service management.
- The page is readable on mobile, tablet, and desktop viewport widths without
  horizontal scrolling.

## Validate Health Check

Request the API health route:

```bash
curl http://localhost:<api-port>/health
```

Expected result:

```json
{
  "status": "healthy",
  "service": "faxinal-conectado-api",
  "timestamp": "<date-time>"
}
```

The response must not include secrets, stack traces, internal hostnames, or
deployment-specific infrastructure details.

## Run Automated Checks

```bash
docker compose run --rm api npm run lint
docker compose run --rm api npm run typecheck
docker compose run --rm api npm test
docker compose run --rm web npm run lint
docker compose run --rm web npm run typecheck
docker compose run --rm web npm test
docker compose run --rm e2e npx playwright test
```

Expected result:

- API health contract tests pass.
- Web home rendering and Portuguese (Brazil) copy checks pass.
- Playwright validates the public home page and health foundation.

## CI/CD Readiness

Before deployment, GitHub Actions must validate:

- Shared install/build cache for the monorepo.
- API lint, type check, tests, container build, and ECS Fargate deployment
  readiness.
- Web lint, type check, tests, static build, S3 upload readiness, and CloudFront
  invalidation readiness.
- Playwright smoke tests against the integrated web/API environment.

## Validation Results

Validated on 2026-07-06:

- `npm run validate` passed locally.
- `npm run test:e2e` passed locally with 9 Playwright tests.
- `docker compose config` passed.
- `docker compose run --rm api npm run validate` passed.
- `docker compose run --rm e2e` passed with 9 Playwright tests.

Notes:

- The local PostgreSQL host port defaults to `5433` to avoid conflicts with
  existing PostgreSQL installations on `5432`.
- Playwright Docker image is pinned to the installed Playwright package version
  through `tests/e2e/Dockerfile`.

## Related Contracts

- [API health OpenAPI contract](./contracts/api-health.openapi.yaml)
- [Web home contract](./contracts/web-home.contract.md)
