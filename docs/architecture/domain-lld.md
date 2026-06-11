# Domain Blocks

Stapler is built from a small set of Domain Blocks.

Domain Blocks are the fundamental building blocks the platform understands.

The platform does not understand:

- Customer
- Product
- Employee
- Invoice
- Patient

Instead, those concepts are composed from:

- Workspace
- Entity
- Field
- EntityRecord
- Relationship
- Workflow
- View
- Template

Example:

```text
Invoice

Entity
+ Fields
+ Relationships
+ Workflow
+ Template
```

---

# Aggregate Boundaries

Domain Blocks and Aggregate Boundaries are different concepts.

Domain Blocks describe what the platform understands.

Aggregate Boundaries describe ownership and consistency rules.

Current aggregate ownership:

```text
Workspace

Entity
 ├─ Field
 ├─ Field
 └─ Field

EntityRecord
```

---

# Package Structure

```text
packages/domain

src/

  shared/
    Id.ts
    Timestamp.ts

  workspace/
    Workspace.ts
    WorkspaceError.ts

  entity/
    Entity.ts
    EntityError.ts

  field/
    Field.ts
    FieldError.ts

  entity-record/
    EntityRecord.ts
    EntityRecordError.ts

  relationship/
    Relationship.ts
    RelationshipError.ts

  workflow/
    Workflow.ts
    WorkflowError.ts

  template/
    Template.ts

  view/
    View.ts

  index.ts
```

---

# Shared Concepts

## Identifiers

All domain identifiers are branded types.

Examples:

```ts
WorkspaceId;
EntityId;
FieldId;
RecordId;
RelationshipId;
WorkflowId;
TemplateId;
ViewId;
```

Identifiers provide compile-time safety and prevent accidental mixing of unrelated identifiers.

---

## Timestamps

All persisted domain objects contain:

```ts
createdAt;
updatedAt;
```

Future support:

```ts
createdBy;
updatedBy;
```

---

# Domain Blocks

## Workspace

### Responsibility

Top-level organizational container.

Owns:

- Entities
- Views
- Templates
- Workflows

### Schema

```ts
Workspace {
  id
  name
  description?
  createdAt
  updatedAt
}
```

### Invariants

Workspace name:

- Required
- Non-empty
- Maximum length 200

### Behaviors

```ts
createWorkspace(...)
renameWorkspace(...)
updateWorkspaceDescription(...)
```

---

## Entity

### Responsibility

Represents a user-defined business concept.

Examples:

- Customer
- Product
- Invoice
- Employee

### Schema

```ts
Entity {
  id
  workspaceId

  key
  name
  pluralName

  description?

  fields

  createdAt
  updatedAt
}
```

### Invariants

Entity key:

- Required
- Immutable

Entity name:

- Required

Plural name:

- Required

### Aggregate Ownership

Entity owns Fields.

```text
Entity
 ├─ Field
 ├─ Field
 └─ Field
```

### Behaviors

```ts
createEntity(...)
renameEntity(...)
updateEntityDescription(...)

addField(...)
removeField(...)
```

---

## Field

### Responsibility

Defines record structure.

Fields are metadata.

Fields are not user data.

Fields cannot exist independently of an Entity.

### Base Schema

```ts
Field {
  id

  entityId

  name

  label

  required

  unique

  position
}
```

### Invariants

Field name:

- Required

Field label:

- Required

Position:

- Non-negative

### Supported Types

```text
Text
Number
Currency
Boolean
Date
DateTime
Email
Phone
Select
MultiSelect
Reference
Computed
```

---

## Reference Field

```ts
ReferenceField {
  type: "reference"

  targetEntityId
}
```

References establish links between entities.

---

## Computed Field

```ts
ComputedField {
  type: "computed"

  expression

  returnType
}
```

### Characteristics

Computed fields:

- Cannot be edited directly
- Are derived from record data
- Are evaluated dynamically
- Are not persisted

---

## EntityRecord

### Responsibility

Stores user data.

An EntityRecord belongs to exactly one Entity.

### Schema

```ts
type RecordValues = Record<FieldId, unknown>;
```

```ts
EntityRecord {
  id

  entityId

  values

  createdAt
  updatedAt
}
```

### Invariants

Values must satisfy:

- Required field constraints
- Field type constraints
- Computed field restrictions

### Behaviors

```ts
createEntityRecord(...)
updateEntityRecordValue(...)
deleteEntityRecordValue(...)
```

### Validation

Validation is driven by Entity metadata.

```text
Entity Metadata
      ↓
Generated Schema
      ↓
EntityRecord Validation
```

---

## Relationship

### Responsibility

Defines associations between entities.

### Types

```text
OneToOne
OneToMany
ManyToMany
```

### Schema

```ts
Relationship {
  id

  name

  sourceEntityId

  targetEntityId

  type
}
```

Multiple relationships may exist between the same entities.

Names distinguish relationships.

---

## Workflow

### Responsibility

Represents state transitions.

### Schema

```ts
Workflow {
  id

  name

  states

  transitions
}
```

### Behaviors

```ts
createWorkflow(...)
addWorkflowState(...)
addWorkflowTransition(...)
transitionWorkflow(...)
```

---

## View

### Responsibility

Represents saved presentations of records.

Views are business metadata.

Views are not UI components.

### Types

```text
Table
Kanban
Calendar
List
```

---

## Template

### Responsibility

Represents document generation definitions.

### Outputs

```text
PDF
HTML
Print
```

---

# Error Design

Every domain block defines explicit typed errors.

Example:

```ts
WorkspaceNameEmptyError;

EntityNameEmptyError;

FieldNameEmptyError;

RequiredFieldMissingError;
```

Errors are modeled using Effect tagged errors.

Example:

```ts
class WorkspaceNameEmptyError
  extends Data.TaggedError(...)
```

---

# Validation

Validation is implemented as pure domain logic.

Examples:

```ts
validateEntity(...)
validateRelationship(...)
validateEntityRecord(...)
```

Validation:

- Has no infrastructure dependencies
- Produces typed domain errors
- Remains deterministic

---

# Architectural Rule

The domain layer owns:

- Domain Blocks
- Invariants
- Behaviors
- Validation Rules

Infrastructure owns:

- Persistence
- Networking
- Synchronization
- Rendering

The domain never adapts to infrastructure.

Infrastructure always adapts to the domain.
