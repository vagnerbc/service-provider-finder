---

description: "Task list template for feature implementation"
---

# Tasks: [FEATURE NAME]

**Input**: Design documents from `/specs/[###-feature-name]/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Automated tests are REQUIRED by the constitution for changed behavior.
Include backend unit/integration/contract tests, frontend component/interaction
tests, and MVP smoke coverage where applicable.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume single project - adjust based on plan.md structure

<!--
  ============================================================================
  IMPORTANT: The tasks below are SAMPLE TASKS for illustration purposes only.

  The /speckit-tasks command MUST replace these with actual tasks based on:
  - User stories from spec.md (with their priorities P1, P2, P3...)
  - Feature requirements from plan.md
  - Entities from data-model.md
  - Endpoints from contracts/

  Tasks MUST be organized by user story so each story can be:
  - Implemented independently
  - Tested independently
  - Delivered as an MVP increment

  DO NOT keep these sample tasks in the generated tasks.md file.
  ============================================================================
-->

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create project structure per implementation plan
- [ ] T002 Initialize [language] project with [framework] dependencies
- [ ] T003 [P] Configure linting and formatting tools
- [ ] T004 [P] Configure frontend copy/i18n conventions for Portuguese (Brazil)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

Examples of foundational tasks (adjust based on your project):

- [ ] T005 Setup database schema and migrations framework
- [ ] T006 [P] Implement authentication/authorization framework
- [ ] T007 [P] Setup API routing and middleware structure
- [ ] T008 Create base models/entities that all stories depend on
- [ ] T009 Configure error handling, structured logging, and OpenTelemetry instrumentation
- [ ] T010 Setup environment configuration management
- [ ] T011 Configure GitHub Actions quality gates for lint, type check, tests, build, and deploy validation
- [ ] T012 Configure AWS deployment baseline for ECS Fargate backend and S3 + CloudFront frontend

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - [Title] (Priority: P1) 🎯 MVP

**Goal**: [Brief description of what this story delivers]

**Independent Test**: [How to verify this story works on its own]

### Tests for User Story 1 ⚠️

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [ ] T013 [P] [US1] Backend unit test for [domain/use case] in backend/tests/unit/[name].test.ts
- [ ] T014 [P] [US1] Contract test for [endpoint] in backend/tests/contract/[name].test.ts
- [ ] T015 [P] [US1] PostgreSQL integration test for [data behavior] in backend/tests/integration/[name].test.ts
- [ ] T016 [P] [US1] Frontend interaction test for [user journey] in frontend/src/[path]/[name].test.tsx
- [ ] T017 [P] [US1] Frontend copy/language regression test for Portuguese (Brazil) content in frontend/src/[path]/[name].test.tsx

### Implementation for User Story 1

- [ ] T018 [P] [US1] Create [Entity1] model in backend/src/[domain]/[entity1].ts
- [ ] T019 [P] [US1] Create [Entity2] model in backend/src/[domain]/[entity2].ts
- [ ] T020 [US1] Implement [UseCase/Service] in backend/src/[application]/[service].ts (depends on T018, T019)
- [ ] T021 [US1] Implement [endpoint/feature] in backend/src/[interface]/[file].ts
- [ ] T022 [US1] Implement responsive UI flow with Portuguese (Brazil) copy in frontend/src/[path]/[component].tsx
- [ ] T023 [US1] Add validation, error handling, and accessible user feedback in Portuguese (Brazil)
- [ ] T024 [US1] Add OpenTelemetry traces, metrics, and structured logs for user story 1 operations

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - [Title] (Priority: P2)

**Goal**: [Brief description of what this story delivers]

**Independent Test**: [How to verify this story works on its own]

### Tests for User Story 2 ⚠️

- [ ] T025 [P] [US2] Backend unit test for [domain/use case] in backend/tests/unit/[name].test.ts
- [ ] T026 [P] [US2] Contract test for [endpoint] in backend/tests/contract/[name].test.ts
- [ ] T027 [P] [US2] Frontend interaction test for [user journey] in frontend/src/[path]/[name].test.tsx
- [ ] T028 [P] [US2] Frontend copy/language regression test for Portuguese (Brazil) content in frontend/src/[path]/[name].test.tsx

### Implementation for User Story 2

- [ ] T029 [P] [US2] Create [Entity] model in backend/src/[domain]/[entity].ts
- [ ] T030 [US2] Implement [UseCase/Service] in backend/src/[application]/[service].ts
- [ ] T031 [US2] Implement [endpoint/feature] in backend/src/[interface]/[file].ts
- [ ] T032 [US2] Implement responsive UI flow with Portuguese (Brazil) copy in frontend/src/[path]/[component].tsx
- [ ] T033 [US2] Integrate with User Story 1 components (if needed)
- [ ] T034 [US2] Add OpenTelemetry traces, metrics, and structured logs for user story 2 operations

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - [Title] (Priority: P3)

**Goal**: [Brief description of what this story delivers]

**Independent Test**: [How to verify this story works on its own]

### Tests for User Story 3 ⚠️

- [ ] T035 [P] [US3] Backend unit test for [domain/use case] in backend/tests/unit/[name].test.ts
- [ ] T036 [P] [US3] Contract test for [endpoint] in backend/tests/contract/[name].test.ts
- [ ] T037 [P] [US3] Frontend interaction test for [user journey] in frontend/src/[path]/[name].test.tsx
- [ ] T038 [P] [US3] Frontend copy/language regression test for Portuguese (Brazil) content in frontend/src/[path]/[name].test.tsx

### Implementation for User Story 3

- [ ] T039 [P] [US3] Create [Entity] model in backend/src/[domain]/[entity].ts
- [ ] T040 [US3] Implement [UseCase/Service] in backend/src/[application]/[service].ts
- [ ] T041 [US3] Implement [endpoint/feature] in backend/src/[interface]/[file].ts
- [ ] T042 [US3] Implement responsive UI flow with Portuguese (Brazil) copy in frontend/src/[path]/[component].tsx
- [ ] T043 [US3] Add OpenTelemetry traces, metrics, and structured logs for user story 3 operations

**Checkpoint**: All user stories should now be independently functional

---

[Add more user story phases as needed, following the same pattern]

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] TXXX [P] Documentation updates in docs/
- [ ] TXXX Code cleanup and refactoring
- [ ] TXXX Performance optimization across all stories
- [ ] TXXX [P] Additional unit tests and regression tests in backend/tests/ and frontend/src/
- [ ] TXXX Security hardening
- [ ] TXXX Responsive UX verification across mobile, tablet, and desktop viewports
- [ ] TXXX Verify all frontend user-facing content is Portuguese (Brazil)
- [ ] TXXX Verify source code, identifiers, comments, test descriptions, and developer artifacts are English
- [ ] TXXX Observability dashboard and alert validation
- [ ] TXXX MVP smoke test for account access, search, provider registration, and service management
- [ ] TXXX Run quickstart.md validation

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Tests MUST be written and FAIL before implementation
- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All tests for a user story marked [P] can run in parallel
- Models within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all tests for User Story 1 together:
Task: "Contract test for [endpoint] in backend/tests/contract/[name].test.ts"
Task: "PostgreSQL integration test for [data behavior] in backend/tests/integration/[name].test.ts"
Task: "Frontend interaction test for [user journey] in frontend/src/[path]/[name].test.tsx"
Task: "Frontend copy/language regression test for Portuguese (Brazil) content in frontend/src/[path]/[name].test.tsx"

# Launch all models for User Story 1 together:
Task: "Create [Entity1] model in backend/src/[domain]/[entity1].ts"
Task: "Create [Entity2] model in backend/src/[domain]/[entity2].ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
