# Implementation Plan: Faxinal Conectado Home and Health Foundation

**Branch**: `001-home-api-foundation` | **Date**: 2026-07-06 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-home-api-foundation/spec.md`

## Summary

Deliver the first public foundation for Faxinal Conectado: a responsive web home
page that explains the application in Portuguese (Brazil) and an API foundation
with a health check suitable for local development, smoke tests, CI/CD, and
future observability.

The implementation will use a monorepo with a modular monolithic backend and a
Vite React frontend. Development must run through Docker Compose. The web app
will use Chakra UI with a custom design-system theme configuration for colors
and foundational UI tokens. Playwright will validate the home page and health
foundation end to end.

## Technical Context

**Language/Version**: Active Node.js LTS, TypeScript strict mode, current stable
React version supported by Vite

**Primary Dependencies**: Express, React, Vite, Chakra UI, PostgreSQL driver or
ORM placeholder, OpenTelemetry SDKs, Playwright

**Storage**: PostgreSQL primary database for the platform; no persisted data is
introduced by this feature

**Testing**: Backend unit and HTTP contract tests, frontend component/interaction
tests, Playwright end-to-end smoke tests for home page and health check

**Target Platform**: Responsive web app; backend on AWS ECS Fargate; frontend on
AWS S3 + CloudFront

**Project Type**: Monorepo web application with modular monolithic Express API
and Vite React frontend

**Performance Goals**: Home page usable content visible within 2 seconds on
standard broadband; health check returns healthy state in under 1 second during
normal operation

**Constraints**: Docker Compose required for local development, Chakra UI custom
theme required for design system, OpenTelemetry instrumentation required,
GitHub Actions CI/CD required for web and API, PostgreSQL remains the primary
database platform

**Localization/Language**: Frontend user-facing content in Portuguese (Brazil);
code and developer artifacts in English

**Scale/Scope**: Initial foundation only: one public home page, one API health
contract, monorepo scaffolding, Docker Compose development workflow, and CI/CD
foundation for web and API

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Clean architecture**: PASS. Backend will be modular monolithic with separate
  module boundaries for application health, HTTP interface, shared config, and
  observability. Frontend will separate design-system theme, app composition,
  pages, and shared UI.
- **Code quality**: PASS. TypeScript strict mode, linting, formatting, runtime
  validation for the health response, and English names for source/developer
  artifacts are required.
- **Testing**: PASS. Plan includes backend health contract tests, frontend
  rendering tests, and Playwright smoke tests for the home page and health
  endpoint.
- **UX consistency**: PASS. The home page uses Chakra UI with a custom theme and
  all visible user-facing copy in Portuguese (Brazil), with responsive desktop,
  tablet, and mobile validation.
- **Performance**: PASS. Home page and health check budgets are defined and will
  be verified through smoke checks.
- **Observability**: PASS. API request tracing, structured health logs, and
  frontend journey instrumentation are planned at foundation level.
- **Deployment**: PASS. GitHub Actions workflows will validate and prepare
  separate deploy paths for web and API, targeting S3 + CloudFront and ECS
  Fargate respectively.

## Project Structure

### Documentation (this feature)

```text
specs/001-home-api-foundation/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── api-health.openapi.yaml
│   └── web-home.contract.md
└── tasks.md
```

### Source Code (repository root)

```text
apps/
├── api/
│   ├── src/
│   │   ├── modules/
│   │   │   └── health/
│   │   ├── shared/
│   │   │   ├── config/
│   │   │   ├── http/
│   │   │   └── observability/
│   │   └── main.ts
│   └── tests/
│       ├── contract/
│       ├── integration/
│       └── unit/
└── web/
    ├── src/
    │   ├── app/
    │   ├── pages/
    │   │   └── home/
    │   ├── shared/
    │   │   ├── design-system/
    │   │   └── ui/
    │   └── main.tsx
    └── tests/

packages/
└── shared/
    └── src/

tests/
└── e2e/

.github/
└── workflows/
    ├── api-ci-cd.yml
    └── web-ci-cd.yml

docker-compose.yml
```

**Structure Decision**: Use a monorepo with `apps/api`, `apps/web`, shared
packages, and top-level Playwright E2E tests. The backend is a modular monolith:
it deploys as one API service while internal features live in explicit modules.
This keeps the initial footprint small while preserving boundaries required by
the constitution.

## Phase 0: Research Summary

See [research.md](./research.md). Decisions cover Vite + React, Chakra UI theme
configuration, Docker Compose local development, modular monolithic backend
layout, Playwright E2E, CI/CD split for web/API, and foundation observability.

## Phase 1: Design Summary

See [data-model.md](./data-model.md), [contracts/api-health.openapi.yaml](./contracts/api-health.openapi.yaml),
[contracts/web-home.contract.md](./contracts/web-home.contract.md), and
[quickstart.md](./quickstart.md). No PostgreSQL schema is introduced by this
feature.

## Post-Design Constitution Check

- **Clean architecture**: PASS. Contracts and source layout keep API health,
  web home, design system, and observability boundaries explicit.
- **Code quality**: PASS. Plan requires strict TypeScript and English developer
  artifacts; visible frontend copy is Portuguese (Brazil).
- **Testing**: PASS. Quickstart and contracts define backend, frontend, and
  Playwright validation.
- **UX consistency**: PASS. Chakra UI custom theme and responsive validation are
  defined.
- **Performance**: PASS. Success criteria and quickstart include home and health
  timing expectations.
- **Observability**: PASS. Foundation traces/logging/metrics are included in
  research and quickstart validation expectations.
- **Deployment**: PASS. Docker Compose and GitHub Actions web/API workflows are
  part of the planned foundation.

## Complexity Tracking

No constitution violations require justification.
