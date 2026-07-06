# Research: Faxinal Conectado Home and Health Foundation

## Decision: Monorepo with apps and shared packages

**Rationale**: The project has a web frontend, API backend, shared contracts, and
cross-cutting tooling. A monorepo keeps Docker Compose, CI/CD, contracts, and
shared TypeScript configuration centralized while still allowing app-specific
builds.

**Alternatives considered**:
- Separate repositories: rejected because it would add coordination overhead
  before the product has multiple independently released services.
- Single flat project: rejected because it would blur web/API/test boundaries.

## Decision: Modular monolithic API

**Rationale**: The backend should deploy as one service for the MVP while keeping
future domains isolated by module. The health foundation starts the pattern with
a `health` module and shared infrastructure for config, HTTP, and observability.

**Alternatives considered**:
- Microservices: rejected as premature for a home page and health foundation.
- Route-only Express app: rejected because it would make later user, provider,
  service, and search modules harder to isolate.

## Decision: Vite React frontend

**Rationale**: Vite provides a fast developer loop for React and fits the
frontend-only static deployment target. It also works well inside Docker Compose
for local development and CI builds.

**Alternatives considered**:
- Server-rendered framework: rejected because the current scope is a static
  public home page and future requirements do not yet require server rendering.
- Custom bundler setup: rejected because it adds maintenance without product
  value.

## Decision: Chakra UI with custom design-system theme

**Rationale**: Chakra UI provides accessible primitives for responsive UI and a
central theme API. A custom theme will define project colors and foundational
tokens so the first page starts the design system instead of creating isolated
styles.

**Alternatives considered**:
- Raw CSS only: rejected because it would not establish shared component
  behavior as quickly.
- Unconfigured component defaults: rejected because the product needs a distinct
  and reusable visual system.

## Decision: Docker Compose required for development

**Rationale**: Docker Compose gives a repeatable local workflow for web, API,
and PostgreSQL from the start, even though this feature does not persist data.
It reduces environment drift and aligns with future integration testing needs.

**Alternatives considered**:
- Local-only Node processes: rejected because the user explicitly requires all
  development to work on Docker Compose.
- Containerizing only the API: rejected because web/API integration and E2E
  tests need both apps available consistently.

## Decision: Playwright for end-to-end tests

**Rationale**: Playwright can validate the user-visible home page across
viewports and also check API health through browser/API test flows. It is a good
fit for CI smoke tests before deployment.

**Alternatives considered**:
- Manual browser checks: rejected because release readiness must be automated.
- Unit/component tests only: rejected because they do not prove the integrated
  web/API foundation works.

## Decision: Separate GitHub Actions CI/CD paths for web and API

**Rationale**: The web app and API have different build outputs and deployment
targets. Separate workflows or separate jobs allow independent checks while a
shared quality gate can still run lint, type checks, tests, Docker builds, and
Playwright smoke tests.

**Alternatives considered**:
- Single undifferentiated workflow: rejected because deployment targets and
  artifacts differ for S3 + CloudFront and ECS Fargate.
- No deployment workflow until later: rejected because deployment foundation is
  part of the constitution and user request.

## Decision: Foundation observability for API and web journey

**Rationale**: The health check should be traceable and log structured status
without exposing sensitive details. The home page journey should provide a
foundation for frontend observability as the product grows.

**Alternatives considered**:
- Logging only: rejected because the constitution requires OpenTelemetry.
- Delaying observability: rejected because health and deployment validation are
  operational features.
