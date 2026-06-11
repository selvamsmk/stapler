# High Level Design

## Vision

Stapler is a local-first platform for building custom business applications without writing code.

Users define entities, fields, relationships, views, templates, workflows, and reports through metadata. Stapler interprets this metadata and provides the runtime necessary to manage data, generate documents, and build business workflows.

Stapler itself contains no hardcoded business modules.

There are no built-in concepts such as:

- Customer
- Product
- Invoice
- Inventory
- Employee

Instead, users define these concepts themselves.

---

## Design Principles

### Local First

User data belongs to the user.

SQLite is the primary source of truth.

The application must continue functioning without internet access.

---

### Offline First

Every core feature must work offline.

Cloud synchronization is optional.

---

### Metadata Driven

Business applications are defined through metadata rather than code.

The platform provides primitives.

Users assemble those primitives into solutions.

---

### Cross Platform

Stapler targets:

- Desktop (Electrobun)
- Web
- Mobile (Expo)

All platforms share the same domain and application layers.

---

### Effect First

Business logic is implemented using Effect.

Infrastructure concerns are isolated behind Effect services.

---

## Architecture Overview

```text
UI Layer
    |
Application Layer
    |
Domain Layer
    |
Infrastructure Layer
```

### UI Layer

Responsibilities:

- Forms
- Views
- Dashboards
- Editors
- User interactions

Technologies:

- React
- React Native (Expo)

---

### Application Layer

Responsibilities:

- Commands
- Queries
- Use cases
- Orchestration

Examples:

- Create Entity
- Create Record
- Generate Document
- Execute Workflow Transition

---

### Domain Layer

Contains business concepts:

- Workspace
- Entity
- Field
- Record
- Relationship
- View
- Template
- Workflow

This layer has no knowledge of:

- React
- SQLite
- Electrobun
- Expo
- Cloud providers

---

### Infrastructure Layer

Provides implementations for:

- SQLite
- Filesystem
- PDF generation
- Sync providers
- Networking

---

## Technology Stack

### Frontend

- React
- TypeScript

### Desktop

- Electrobun

### Mobile

- Expo

### Runtime

- Bun

### Business Logic

- Effect

### Database

- SQLite

### ORM

- Drizzle

### Monorepo

- TurboRepo

### Tooling

- Biome
- Vitest
- GitHub Actions

---

## Future Cloud Architecture

```text
SQLite
    |
Change Log
    |
Sync Engine
    |
Sync Provider
    |
PostgreSQL
```

Cloud synchronization is optional and should never be required for normal operation.

---

## Non Goals

Stapler is not:

- An ERP
- An Accounting System
- A CRM
- An Inventory Application

Those are solutions built on top of Stapler.

Stapler provides the platform used to create them.
