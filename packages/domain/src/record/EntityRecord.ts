import { Effect } from "effect";

import type { EntityId, FieldId, RecordId } from "../shared/Id";

import type { Timestamp } from "../shared/Timestamp";

import type { EntityRecordError } from "./EntityRecordError";

/**
 * Field values stored for a record.
 *
 * Keyed by FieldId rather than field name
 * so field renames do not invalidate records.
 */
export type RecordValues = Readonly<Record<FieldId, unknown>>;

/**
 * Entity Record
 *
 * Represents user data conforming
 * to an Entity definition.
 */
export interface EntityRecord {
  readonly id: RecordId;

  readonly entityId: EntityId;

  readonly values: RecordValues;

  readonly createdAt: Timestamp;

  readonly updatedAt: Timestamp;
}

/**
 * Commands
 */

export interface CreateEntityRecordInput {
  readonly entityId: EntityId;

  readonly values: RecordValues;
}

export interface UpdateEntityRecordValueInput {
  readonly fieldId: FieldId;

  readonly value: unknown;
}

export interface DeleteEntityRecordValueInput {
  readonly fieldId: FieldId;
}

/**
 * Behaviors
 */

export declare const createEntityRecord: (
  input: CreateEntityRecordInput,
) => Effect.Effect<EntityRecord, EntityRecordError>;

export declare const updateEntityRecordValue: (
  record: EntityRecord,
  input: UpdateEntityRecordValueInput,
) => Effect.Effect<EntityRecord, EntityRecordError>;

export declare const deleteEntityRecordValue: (
  record: EntityRecord,
  input: DeleteEntityRecordValueInput,
) => Effect.Effect<EntityRecord, EntityRecordError>;
