import { Data } from "effect";

export class EntityNameEmptyError extends Data.TaggedError(
  "EntityNameEmptyError",
)<{}> {}

export class EntityNameTooLongError extends Data.TaggedError(
  "EntityNameTooLongError",
)<{
  readonly length: number;
  readonly maxLength: number;
}> {}

export class EntityPluralNameEmptyError extends Data.TaggedError(
  "EntityPluralNameEmptyError",
)<{}> {}

export class EntityKeyEmptyError extends Data.TaggedError(
  "EntityKeyEmptyError",
)<{}> {}

export class FieldAlreadyExistsError extends Data.TaggedError(
  "FieldAlreadyExistsError",
)<{
  readonly fieldName: string;
}> {}

export class FieldNotFoundError extends Data.TaggedError("FieldNotFoundError")<{
  readonly fieldId: string;
}> {}

export type EntityError =
  | EntityNameEmptyError
  | EntityNameTooLongError
  | EntityPluralNameEmptyError
  | EntityKeyEmptyError
  | FieldAlreadyExistsError
  | FieldNotFoundError;
