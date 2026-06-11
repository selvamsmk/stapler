import { Data } from "effect";

export class RequiredFieldMissingError extends Data.TaggedError(
  "RequiredFieldMissingError",
)<{
  readonly fieldId: string;
}> {}

export class FieldTypeMismatchError extends Data.TaggedError(
  "FieldTypeMismatchError",
)<{
  readonly fieldId: string;
}> {}

export class ComputedFieldWriteError extends Data.TaggedError(
  "ComputedFieldWriteError",
)<{
  readonly fieldId: string;
}> {}

export class UnknownFieldError extends Data.TaggedError("UnknownFieldError")<{
  readonly fieldId: string;
}> {}

export type EntityRecordError =
  | RequiredFieldMissingError
  | FieldTypeMismatchError
  | ComputedFieldWriteError
  | UnknownFieldError;
