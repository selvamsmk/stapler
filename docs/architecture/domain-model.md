# Domain Model

This document defines the core concepts of Stapler.

Every feature in Stapler should be expressible using these concepts.

---

# Workspace

A workspace is the top-level container.

Examples:

- My Store
- My Clinic
- My School
- My Consultancy

A workspace contains:

- Entities
- Records
- Relationships
- Views
- Templates
- Workflows

---

# Entity

An Entity represents a business concept.

Examples:

- Product
- Customer
- Invoice
- Employee
- Student

Entities are user-defined.

Stapler does not provide built-in entities.

Example:

Product

Fields:

- Name
- SKU
- Price
- Quantity

---

# Field

A Field describes a property of an Entity.

Examples:

- Name
- Email
- Price
- Created At

Supported Field Types:

- Text
- Number
- Currency
- Boolean
- Date
- DateTime
- Email
- Phone
- Select
- Multi Select
- Reference
- Computed

---

# Record

A Record is an instance of an Entity.

Example:

Entity:

Product

Record:

```json
{
  "name": "Rice",
  "price": 50,
  "quantity": 100
}
```

---

# Relationship

A Relationship connects Entities.

Examples:

Invoice -> Customer

Invoice Item -> Product

Employee -> Department

Relationship Types:

- One To One
- One To Many
- Many To Many

---

# Computed Field

A Computed Field derives its value from other fields.

Examples:

Quantity \* UnitPrice

InvoiceTotal = Sum(InvoiceItems.Total)

Profit = Revenue - Cost

---

# View

A View is a saved representation of data.

Examples:

- Table
- Kanban
- Calendar
- List

Views may define:

- Filters
- Sorting
- Grouping

---

# Template

A Template generates documents using records.

Examples:

- Invoice Template
- Certificate Template
- Contract Template

Outputs:

- PDF
- HTML
- Print

---

# Workflow

A Workflow models a business process.

Example:

Draft
→ Approved
→ Paid
→ Archived

Workflows are user-defined.

---

# Guiding Principle

Everything in Stapler is metadata.

Users define:

- Entities
- Fields
- Relationships
- Views
- Templates
- Workflows

Stapler interprets that metadata and provides runtime behavior.

The platform should remain generic enough to model many different business domains without introducing hardcoded business concepts.
