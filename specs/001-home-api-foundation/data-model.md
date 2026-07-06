# Data Model: Faxinal Conectado Home and Health Foundation

## Overview

This feature introduces no persisted domain entities and no PostgreSQL schema
changes. It establishes public presentation content and an operational health
contract only.

## Conceptual Models

### HomePageContent

Represents the content that must be visible on the public home page.

**Fields**:
- `applicationName`: Fixed display name, "Faxinal Conectado".
- `headline`: Brazilian Portuguese headline describing the product purpose.
- `description`: Brazilian Portuguese summary explaining that the product will
  help people find service providers quickly and practically.
- `availabilityMessage`: Brazilian Portuguese message that sets expectations
  for the initial/future marketplace state.
- `audienceMessage`: Brazilian Portuguese copy addressing people seeking
  services and future service providers.

**Validation rules**:
- All user-facing values must be Portuguese (Brazil).
- The page must not include calls to unavailable actions such as login, search,
  account creation, provider registration, or service management.
- Content must remain readable on mobile, tablet, and desktop viewports.

### HealthStatus

Represents the public operational status returned by the health check.

**Fields**:
- `status`: Public health state. Allowed value for normal operation: `healthy`.
- `service`: Stable service identifier for Faxinal Conectado API foundation.
- `timestamp`: Time the health status was produced.

**Validation rules**:
- The response must not expose internal environment details, secrets, stack
  traces, dependency URLs, or infrastructure identifiers.
- The response must be stable enough for automated monitoring and smoke tests.
- During normal operation the health status must be produced in under 1 second.

## Relationships

No persisted relationships are introduced.

## State Transitions

### HealthStatus

```text
service available -> healthy response
service unavailable -> no healthy response / deployment monitor failure
```

No user-facing state transitions are introduced by the home page.

## PostgreSQL Impact

No migrations, indexes, seed data, or retention rules are required for this
feature. PostgreSQL remains part of the platform foundation for future features.
