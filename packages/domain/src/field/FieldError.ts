import { Data } from "effect";

export class FieldNameEmptyError extends Data.TaggedError(
  "FieldNameEmptyError",
)<{}> {}

export class FieldLabelEmptyError extends Data.TaggedError(
  "FieldLabelEmptyError",
)<{}> {}

export class FieldPositionInvalidError extends Data.TaggedError(
  "FieldPositionInvalidError",
)<{
  readonly position: number;
}> {}

export class FieldMinGreaterThanMaxError extends Data.TaggedError(
  "FieldMinGreaterThanMaxError",
)<{}> {}

export type FieldError =
  | FieldNameEmptyError
  | FieldLabelEmptyError
  | FieldPositionInvalidError
  | FieldMinGreaterThanMaxError;
