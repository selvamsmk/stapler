import { Effect } from "effect";

import type { WorkspaceId } from "../shared/Id";
import type { Timestamp } from "../shared/Timestamp";

import type { WorkspaceError } from "./WorkspaceError";

/**
 * Core Block
 */
export interface Workspace {
  readonly id: WorkspaceId;

  readonly name: string;

  readonly description?: string;

  readonly createdAt: Timestamp;

  readonly updatedAt: Timestamp;
}

/**
 * Commands
 */
export interface CreateWorkspaceInput {
  readonly name: string;

  readonly description?: string;
}

export interface RenameWorkspaceInput {
  readonly name: string;
}

export interface UpdateWorkspaceDescriptionInput {
  readonly description?: string;
}

/**
 * Behaviors
 *
 * Signatures only.
 */
export declare const createWorkspace: (
  input: CreateWorkspaceInput,
) => Effect.Effect<Workspace, WorkspaceError>;

export declare const renameWorkspace: (
  workspace: Workspace,
  input: RenameWorkspaceInput,
) => Effect.Effect<Workspace, WorkspaceError>;

export declare const updateWorkspaceDescription: (
  workspace: Workspace,
  input: UpdateWorkspaceDescriptionInput,
) => Effect.Effect<Workspace, never>;
