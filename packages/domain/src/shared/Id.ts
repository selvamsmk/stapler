import { Schema } from "effect";

export const WorkspaceId = Schema.String.pipe(Schema.brand("WorkspaceId"));

export type WorkspaceId = typeof WorkspaceId.Type;

export const EntityId = Schema.String.pipe(Schema.brand("EntityId"));

export type EntityId = typeof EntityId.Type;

export const FieldId = Schema.String.pipe(Schema.brand("FieldId"));

export type FieldId = typeof FieldId.Type;

export const RecordId = Schema.String.pipe(Schema.brand("RecordId"));

export type RecordId = typeof RecordId.Type;

export const RelationshipId = Schema.String.pipe(
  Schema.brand("RelationshipId"),
);

export type RelationshipId = typeof RelationshipId.Type;

export const WorkflowId = Schema.String.pipe(Schema.brand("WorkflowId"));

export type WorkflowId = typeof WorkflowId.Type;

export const TemplateId = Schema.String.pipe(Schema.brand("TemplateId"));

export type TemplateId = typeof TemplateId.Type;

export const ViewId = Schema.String.pipe(Schema.brand("ViewId"));

export type ViewId = typeof ViewId.Type;
