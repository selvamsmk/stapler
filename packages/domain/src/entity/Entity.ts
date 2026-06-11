import { Effect } from "effect";

import type { EntityId, FieldId, WorkspaceId } from "../shared/Id";

import type { Timestamp } from "../shared/Timestamp";

import type { Field } from "../field/Field";

import type { EntityError } from "./EntityError";

/**
 * Core Block
 */
export interface Entity {
  readonly id: EntityId;

  readonly workspaceId: WorkspaceId;

  readonly key: string;

  readonly name: string;

  readonly pluralName: string;

  readonly description?: string;

  readonly fields: ReadonlyArray<Field>;

  readonly createdAt: Timestamp;

  readonly updatedAt: Timestamp;
}

/**
 * Commands
 */
export interface CreateEntityInput {
  readonly workspaceId: WorkspaceId;

  readonly key: string;

  readonly name: string;

  readonly pluralName: string;

  readonly description?: string;
}

export interface RenameEntityInput {
  readonly name: string;
}

export interface UpdateEntityDescriptionInput {
  readonly description?: string;
}

export interface AddFieldInput {
  readonly field: Field;
}

export interface RemoveFieldInput {
  readonly fieldId: FieldId;
}

/**
 * Behaviors
 */
export declare const createEntity: (
  input: CreateEntityInput,
) => Effect.Effect<Entity, EntityError>;

export declare const renameEntity: (
  entity: Entity,
  input: RenameEntityInput,
) => Effect.Effect<Entity, EntityError>;

export declare const updateEntityDescription: (
  entity: Entity,
  input: UpdateEntityDescriptionInput,
) => Effect.Effect<Entity, never>;

export declare const addField: (
  entity: Entity,
  input: AddFieldInput,
) => Effect.Effect<Entity, EntityError>;

export declare const removeField: (
  entity: Entity,
  input: RemoveFieldInput,
) => Effect.Effect<Entity, EntityError>;
