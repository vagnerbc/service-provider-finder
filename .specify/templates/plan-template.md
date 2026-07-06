# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]

**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

[Extract from feature spec: primary requirement + technical approach from research]

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: Node.js + TypeScript for backend, React + TypeScript for frontend

**Primary Dependencies**: Express, React, PostgreSQL client/ORM, OpenTelemetry SDKs

**Storage**: PostgreSQL primary database

**Testing**: Backend unit/integration/contract tests; frontend component/interaction tests; MVP end-to-end smoke tests

**Target Platform**: Responsive web app; backend on AWS ECS Fargate; frontend on AWS S3 + CloudFront

**Project Type**: Web application with Express API backend and React frontend

**Performance Goals**: [domain-specific, e.g., 1000 req/s, 10k lines/sec, 60 fps or NEEDS CLARIFICATION]

**Constraints**: Responsive mobile/tablet/desktop UX, OpenTelemetry instrumentation, GitHub Actions CI/CD, PostgreSQL migrations

**Localization/Language**: Frontend user-facing content in Portuguese (Brazil); code and developer artifacts in English

**Scale/Scope**: [domain-specific, e.g., 10k users, 1M LOC, 50 screens or NEEDS CLARIFICATION]

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Clean architecture**: Domain/application logic is isolated from Express, React,
  PostgreSQL, and AWS adapters; data access uses explicit repositories/modules and
  migrations are planned.
- **Code quality**: TypeScript strict mode, linting, formatting, runtime validation,
  API/data contracts, and English source/developer artifact naming are specified.
- **Testing**: Backend unit, PostgreSQL integration, HTTP contract, frontend
  component/interaction, and MVP smoke coverage are planned for changed behavior.
- **UX consistency**: Responsive behavior, accessibility semantics, shared UI
  patterns, and loading/empty/error/success states are identified for affected
  user journeys; all frontend user-facing content is planned in Portuguese
  (Brazil).
- **Performance**: Feature-level budgets, database indexing/pagination/filtering
  needs, and validation approach are documented.
- **Observability**: OpenTelemetry traces, metrics, structured logs, dashboards,
  and alerts are planned for critical backend and frontend flows.
- **Deployment**: GitHub Actions checks/deployments, ECS Fargate backend impact,
  and S3 + CloudFront frontend impact are documented.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output (/speckit-plan command)
├── data-model.md        # Phase 1 output (/speckit-plan command)
├── quickstart.md        # Phase 1 output (/speckit-plan command)
├── contracts/           # Phase 1 output (/speckit-plan command)
└── tasks.md             # Phase 2 output (/speckit-tasks command - NOT created by /speckit-plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
# [REMOVE IF UNUSED] Option 1: Single project (DEFAULT)
src/
├── models/
├── services/
├── cli/
└── lib/

tests/
├── contract/
├── integration/
└── unit/

# [REMOVE IF UNUSED] Option 2: Web application (when "frontend" + "backend" detected)
backend/
├── src/
│   ├── models/
│   ├── services/
│   └── api/
└── tests/

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   └── services/
└── tests/

# [REMOVE IF UNUSED] Option 3: Mobile + API (when "iOS/Android" detected)
api/
└── [same as backend above]

ios/ or android/
└── [platform-specific structure: feature modules, UI flows, platform tests]
```

**Structure Decision**: [Document the selected structure and reference the real
directories captured above]

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
