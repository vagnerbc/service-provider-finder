# Tasks: Faxinal Conectado Home and Health Foundation

**Input**: Design documents from `/specs/001-home-api-foundation/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: Automated tests are required by the constitution and this feature plan.
Backend contract/unit checks, frontend rendering/language checks, and Playwright
smoke tests are included.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Include exact file paths in descriptions

## Path Conventions

- **API app**: `apps/api/`
- **Web app**: `apps/web/`
- **Shared package**: `packages/shared/`
- **E2E tests**: `tests/e2e/`
- **CI/CD workflows**: `.github/workflows/`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Establish the monorepo, TypeScript workspace, Docker Compose development workflow, and base app scaffolds.

- [X] T001 Create monorepo workspace manifest in package.json
- [X] T002 Create shared TypeScript configuration in tsconfig.base.json
- [X] T003 [P] Create API package manifest in apps/api/package.json
- [X] T004 [P] Create web package manifest in apps/web/package.json
- [X] T005 [P] Create shared package manifest in packages/shared/package.json
- [X] T006 Create root lint and formatting configuration in eslint.config.js and .prettierrc
- [X] T007 Create Docker Compose development stack for web, api, e2e, and postgres in docker-compose.yml
- [X] T008 [P] Create API Dockerfile in apps/api/Dockerfile
- [X] T009 [P] Create web Dockerfile in apps/web/Dockerfile
- [X] T010 [P] Create e2e Dockerfile in tests/e2e/Dockerfile
- [X] T011 Create environment variable examples for local development in .env.example

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Add shared app foundations that must exist before implementing user-facing home or API health behavior.

**CRITICAL**: No user story work can begin until this phase is complete.

- [X] T012 Create API TypeScript config in apps/api/tsconfig.json
- [X] T013 Create web TypeScript config in apps/web/tsconfig.json
- [X] T014 Create shared package TypeScript config in packages/shared/tsconfig.json
- [X] T015 [P] Create API config loader in apps/api/src/shared/config/env.ts
- [X] T016 [P] Create API HTTP server bootstrap in apps/api/src/shared/http/server.ts
- [X] T017 [P] Create API OpenTelemetry bootstrap in apps/api/src/shared/observability/telemetry.ts
- [X] T018 Create API entrypoint wiring config, telemetry, and HTTP server in apps/api/src/main.ts
- [X] T019 [P] Create Vite config for the web app in apps/web/vite.config.ts
- [X] T020 [P] Create web app test setup in apps/web/src/test/setup.ts
- [X] T021 Create Chakra UI custom theme tokens in apps/web/src/shared/design-system/theme.ts
- [X] T022 Create Chakra UI provider wrapper in apps/web/src/app/AppProvider.tsx
- [X] T023 Create web app root shell in apps/web/src/app/App.tsx
- [X] T024 Create web entrypoint in apps/web/src/main.tsx
- [X] T025 Create Playwright configuration in tests/e2e/playwright.config.ts
- [X] T026 Create API CI/CD workflow skeleton in .github/workflows/api-ci-cd.yml
- [X] T027 Create web CI/CD workflow skeleton in .github/workflows/web-ci-cd.yml

**Checkpoint**: Monorepo, Docker Compose, API bootstrap, web bootstrap, design-system provider, E2E harness, and CI/CD skeletons are ready.

---

## Phase 3: User Story 1 - Learn About Faxinal Conectado (Priority: P1) MVP

**Goal**: A visitor can open the public home page and understand Faxinal Conectado's purpose in Portuguese (Brazil).

**Independent Test**: Open the home page on desktop and mobile viewports and confirm it displays the application name, purpose, intended audience, current availability, and no unavailable actions.

### Tests for User Story 1

- [X] T028 [P] [US1] Create home page contract test for required Portuguese content in apps/web/src/pages/home/HomePage.test.tsx
- [X] T029 [P] [US1] Create home page responsive rendering test in apps/web/src/pages/home/HomePage.responsive.test.tsx
- [X] T030 [P] [US1] Create Playwright home smoke test for desktop, tablet, and mobile in tests/e2e/home.spec.ts
- [X] T031 [P] [US1] Create home content language regression test in tests/e2e/home-language.spec.ts

### Implementation for User Story 1

- [X] T032 [P] [US1] Create home page content model in apps/web/src/pages/home/homeContent.ts
- [X] T033 [P] [US1] Create reusable marketing section component in apps/web/src/shared/ui/InfoSection.tsx
- [X] T034 [US1] Implement responsive home page with Chakra UI in apps/web/src/pages/home/HomePage.tsx
- [X] T035 [US1] Wire home page into web app shell in apps/web/src/app/App.tsx
- [X] T036 [US1] Add Portuguese metadata and document title handling in apps/web/src/pages/home/homeMetadata.ts
- [X] T037 [US1] Ensure prohibited unavailable actions are absent from home content in apps/web/src/pages/home/homeContent.ts
- [X] T038 [US1] Add frontend OpenTelemetry page-view hook for the home journey in apps/web/src/shared/observability/usePageTelemetry.ts

**Checkpoint**: User Story 1 is independently functional and testable as a public Portuguese home page.

---

## Phase 4: User Story 2 - Confirm Service Availability (Priority: P2)

**Goal**: An operator can verify the API foundation is healthy through a stable health check.

**Independent Test**: Request the health route and confirm it returns a healthy status, stable service identifier, timestamp, and no internal implementation details.

### Tests for User Story 2

- [X] T039 [P] [US2] Create health status unit test in apps/api/tests/unit/healthStatus.test.ts
- [X] T040 [P] [US2] Create health OpenAPI contract test in apps/api/tests/contract/health.contract.test.ts
- [X] T041 [P] [US2] Create health HTTP integration test in apps/api/tests/integration/health.http.test.ts
- [X] T042 [P] [US2] Create Playwright API health smoke test in tests/e2e/health.spec.ts

### Implementation for User Story 2

- [X] T043 [P] [US2] Create HealthStatus type and factory in apps/api/src/modules/health/healthStatus.ts
- [X] T044 [US2] Create health route handler in apps/api/src/modules/health/healthRoute.ts
- [X] T045 [US2] Register health module with API HTTP server in apps/api/src/modules/health/index.ts
- [X] T046 [US2] Wire health module into API bootstrap in apps/api/src/main.ts
- [X] T047 [US2] Add structured health request logging in apps/api/src/modules/health/healthRoute.ts
- [X] T048 [US2] Add OpenTelemetry span attributes for health checks in apps/api/src/modules/health/healthRoute.ts

**Checkpoint**: User Story 2 is independently functional and testable as a health foundation.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Validate integrated quality gates, Docker Compose workflows, CI/CD readiness, observability, and documentation.

- [X] T049 Run and document quickstart validation results in specs/001-home-api-foundation/quickstart.md
- [X] T050 Add root test orchestration scripts in package.json
- [X] T051 Add Docker Compose health checks for api and web services in docker-compose.yml
- [X] T052 Verify all frontend user-facing content is Portuguese (Brazil) in apps/web/src/pages/home/homeContent.ts and apps/web/src/pages/home/HomePage.tsx
- [X] T053 Verify source code, identifiers, comments, and test descriptions are English in apps/api/src/modules/health/healthStatus.ts, apps/web/src/pages/home/HomePage.test.tsx, and tests/e2e/home.spec.ts
- [X] T054 Validate API workflow includes lint, typecheck, test, Docker build, and ECS Fargate deployment readiness in .github/workflows/api-ci-cd.yml
- [X] T055 Validate web workflow includes lint, typecheck, test, build, S3 upload readiness, and CloudFront invalidation readiness in .github/workflows/web-ci-cd.yml
- [X] T056 Validate Playwright runs against Docker Compose web and API services in tests/e2e/playwright.config.ts
- [X] T057 Review OpenTelemetry initialization for API and web foundation in apps/api/src/shared/observability/telemetry.ts and apps/web/src/shared/observability/usePageTelemetry.ts
- [X] T058 Run full Docker Compose validation with lint, typecheck, tests, build, and Playwright per specs/001-home-api-foundation/quickstart.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies.
- **Foundational (Phase 2)**: Depends on Setup completion and blocks all user stories.
- **User Story 1 (Phase 3)**: Depends on Foundational phase; can be delivered as MVP.
- **User Story 2 (Phase 4)**: Depends on Foundational phase; can run in parallel with US1 after foundation is complete.
- **Polish (Phase 5)**: Depends on desired user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: No dependency on US2 after foundation.
- **User Story 2 (P2)**: No dependency on US1 after foundation.

### Within Each User Story

- Tests MUST be written and fail before implementation.
- Content/data models before UI or route handlers.
- UI/route implementation before integration wiring.
- Observability after the core story behavior exists.
- Story complete before marking its checkpoint done.

### Parallel Opportunities

- T003, T004, T005 can run in parallel.
- T008, T009, T010 can run in parallel.
- T015, T016, T017, T019, T020 can run in parallel after TypeScript configs exist.
- US1 tests T028-T031 can run in parallel.
- US1 model/component tasks T032-T033 can run in parallel.
- US2 tests T039-T042 can run in parallel.
- US1 and US2 can run in parallel after Phase 2.

---

## Parallel Example: User Story 1

```bash
Task: "Create home page contract test for required Portuguese content in apps/web/src/pages/home/HomePage.test.tsx"
Task: "Create home page responsive rendering test in apps/web/src/pages/home/HomePage.responsive.test.tsx"
Task: "Create Playwright home smoke test for desktop, tablet, and mobile in tests/e2e/home.spec.ts"
Task: "Create home content language regression test in tests/e2e/home-language.spec.ts"
Task: "Create home page content model in apps/web/src/pages/home/homeContent.ts"
Task: "Create reusable marketing section component in apps/web/src/shared/ui/InfoSection.tsx"
```

## Parallel Example: User Story 2

```bash
Task: "Create health status unit test in apps/api/tests/unit/healthStatus.test.ts"
Task: "Create health OpenAPI contract test in apps/api/tests/contract/health.contract.test.ts"
Task: "Create health HTTP integration test in apps/api/tests/integration/health.http.test.ts"
Task: "Create Playwright API health smoke test in tests/e2e/health.spec.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. Stop and validate the Portuguese home page independently.
5. Demo the home page before adding optional operational polish.

### Incremental Delivery

1. Complete Setup and Foundational phases.
2. Deliver User Story 1 and validate the home page.
3. Deliver User Story 2 and validate the API health foundation.
4. Complete Polish phase to confirm Docker Compose, CI/CD readiness, observability, and quickstart.

### Team Parallel Strategy

After Phase 2:

- Developer A: User Story 1 home page and design-system usage.
- Developer B: User Story 2 API health module and contract tests.
- Developer C: Playwright, Docker Compose, and CI/CD validation.

---

## Notes

- [P] tasks use different files and can run in parallel.
- [US1] and [US2] labels map directly to the prioritized user stories in spec.md.
- The feature introduces no persisted PostgreSQL schema.
- All frontend user-facing copy must be Portuguese (Brazil).
- All source code, identifiers, comments, test descriptions, and developer artifacts must be English.
- Avoid adding login, search, account creation, provider registration, or service management actions in this feature.
