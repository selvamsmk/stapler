import { Data } from "effect";

export class WorkspaceNameEmptyError extends Data.TaggedError(
  "WorkspaceNameEmptyError",
)<{}> {}

export class WorkspaceNameTooLongError extends Data.TaggedError(
  "WorkspaceNameTooLongError",
)<{}> {}

export type WorkspaceError =
  | WorkspaceNameEmptyError
  | WorkspaceNameTooLongError;
