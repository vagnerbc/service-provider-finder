<!--
Sync Impact Report
Version change: 1.0.0 -> 1.1.0
Modified principles:
- II. Code Quality and Type Safety (code language requirement added)
- IV. User Experience Consistency (Brazilian Portuguese UI requirement added)
Added sections:
- None
Removed sections:
- None
Templates requiring updates:
- [x] .specify/templates/plan-template.md
- [x] .specify/templates/spec-template.md
- [x] .specify/templates/tasks-template.md
- [x] .specify/templates/commands/*.md (not present)
Follow-up TODOs:
- None
-->
# Service Provider Finder Constitution

## Core Principles

### I. Clean Architecture and Technology Boundaries
The system MUST be organized around clear domain, application, infrastructure,
and presentation boundaries. Business rules MUST NOT depend on Express route
handlers, React components, database clients, cloud SDKs, or external APIs.
Backend features MUST expose use-case oriented services before transport
adapters, and frontend features MUST separate reusable UI, page composition,
client-side state, and API access. PostgreSQL access MUST be mediated through
explicit repositories or data access modules with migrations as the source of
truth. Rationale: the application has two user modes, consumer and service
provider, and clean boundaries keep product growth testable and maintainable.

### II. Code Quality and Type Safety
All production code MUST use TypeScript with strict type checking for both the
Node.js Express backend and React frontend. Code MUST pass automated linting,
formatting, and type checks before merge. Public APIs, database schemas,
environment variables, and cross-service payloads MUST have explicit validation
and documented contracts. Source code identifiers, filenames, comments,
developer-facing documentation, commit messages, test descriptions, and API
contract names MUST be written in English. Implementations MUST favor small
cohesive modules, clear naming, and dependency injection where it improves
testability. Rationale: typed contracts and consistent English code standards
reduce runtime defects and keep collaboration scalable across account, search,
service listing, and provider onboarding flows.

### III. Testing Standards
Every feature MUST include automated tests appropriate to its risk and scope.
Backend changes MUST include unit tests for domain/application logic,
integration tests for PostgreSQL-backed behavior, and contract tests for public
HTTP APIs. Frontend changes MUST include component or interaction tests for user
flows and regression coverage for responsive states. End-to-end smoke tests MUST
cover account access, service search, provider registration, and service
management before MVP release. Tests MUST be written or updated with the feature
and MUST run in CI before deployment. Rationale: the marketplace workflow must
remain reliable as consumer and provider capabilities evolve independently.

### IV. User Experience Consistency
The web app MUST be responsive and usable on mobile, tablet, and desktop
viewports. User-facing flows MUST be fast, practical, and task-oriented:
registration, login, service search, provider profile setup, and service
management MUST avoid unnecessary steps and preserve clear feedback for loading,
empty, error, and success states. Shared React components, form patterns,
validation messaging, accessibility semantics, and navigation behavior MUST be
consistent across consumer and provider experiences. All user-facing content
rendered by the frontend web app MUST be in Brazilian Portuguese, including
navigation, labels, buttons, validation messages, error states, empty states,
success messages, metadata, and accessibility text. Rationale: the product's
core value is helping people in Brazil find service providers quickly and
confidently in their expected language.

### V. Performance, Observability, and Operations
Performance budgets MUST be defined per feature before implementation and
validated before release. Search and authentication flows MUST specify response
time targets, pagination or filtering behavior, and database indexing needs.
The system MUST use OpenTelemetry for traces, metrics, and structured logs
across backend request handling, database calls, and critical frontend journeys.
Operational dashboards and alerts MUST cover API health, error rates, latency,
deployment health, and business-critical flows. Rationale: production issues in
search, login, or provider listings directly block the application's purpose
and must be diagnosable quickly.

## Product and Platform Constraints

The MVP is a responsive web application that allows users to register, log in,
search for service providers, and register as service providers to manage their
services and profile information.

Backend implementation MUST use Node.js, TypeScript, and Express. Frontend
implementation MUST use React and TypeScript. PostgreSQL is the primary
database and MUST be the system of record for user, provider, service, and
search-related data.

The product language for all frontend web content MUST be Portuguese (Brazil).
The engineering language for code and developer artifacts MUST be English.

The MVP backend MUST be deployable to AWS ECS Fargate. Frontend assets MUST be
deployable to AWS S3 behind AWS CloudFront. CI/CD MUST use GitHub Actions for
checks, builds, tests, and deployment workflows. Infrastructure and deployment
configuration MUST be reproducible from source-controlled definitions.

## Delivery Workflow and Quality Gates

Every feature plan MUST document how it satisfies the constitution before
design work is accepted. The constitution check MUST include technology stack,
architecture boundaries, testing approach, UX/responsiveness impact,
Brazilian Portuguese frontend content, English code naming, performance budgets,
observability instrumentation, PostgreSQL data impact, and AWS deployment impact.

Pull requests MUST include evidence of passing lint, type checks, automated
tests, and any required migration validation. Changes that affect user-visible
flows MUST include responsive UX verification. Changes that affect runtime
behavior MUST include logging, tracing, metrics, and alerting considerations.
No feature may be considered done until its independently testable user story
passes and its operational behavior is observable.

## Governance

This constitution supersedes conflicting implementation preferences and local
conventions. Amendments MUST be proposed with a written rationale, explicit
impact on templates or workflows, and a migration plan for affected features.
Compliance MUST be reviewed during planning, task generation, code review, and
release readiness.

Versioning follows semantic versioning. MAJOR changes remove or redefine
existing governance obligations, MINOR changes add principles or materially
expand requirements, and PATCH changes clarify wording without changing
obligations. Each amendment MUST update the version, last amended date, and
Sync Impact Report.

**Version**: 1.1.0 | **Ratified**: 2026-07-06 | **Last Amended**: 2026-07-06
