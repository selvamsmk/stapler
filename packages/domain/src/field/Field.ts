import type { EntityId, FieldId } from "../shared/Id";

/**
 * Common properties shared by all field types.
 */
export interface BaseField {
  readonly id: FieldId;

  readonly entityId: EntityId;

  readonly name: string;

  readonly label: string;

  readonly required: boolean;

  readonly unique: boolean;

  readonly position: number;
}

export interface TextField extends BaseField {
  readonly type: "text";

  readonly minLength?: number;

  readonly maxLength?: number;
}

export interface NumberField extends BaseField {
  readonly type: "number";

  readonly min?: number;

  readonly max?: number;
}

export interface CurrencyField extends BaseField {
  readonly type: "currency";

  readonly currencyCode: string;
}

export interface BooleanField extends BaseField {
  readonly type: "boolean";
}

export interface DateField extends BaseField {
  readonly type: "date";
}

export interface DateTimeField extends BaseField {
  readonly type: "datetime";
}

export interface EmailField extends BaseField {
  readonly type: "email";
}

export interface PhoneField extends BaseField {
  readonly type: "phone";
}

export interface SelectField extends BaseField {
  readonly type: "select";

  readonly options: ReadonlyArray<string>;
}

export interface MultiSelectField extends BaseField {
  readonly type: "multiselect";

  readonly options: ReadonlyArray<string>;
}

export interface ReferenceField extends BaseField {
  readonly type: "reference";

  readonly targetEntityId: EntityId;
}

export interface ComputedField extends BaseField {
  readonly type: "computed";

  readonly expression: string;

  readonly returnType: ComputedReturnType;
}

export type FieldType = Field["type"];

export type ComputedReturnType = Exclude<FieldType, "computed">;

export type Field =
  | TextField
  | NumberField
  | CurrencyField
  | BooleanField
  | DateField
  | DateTimeField
  | EmailField
  | PhoneField
  | SelectField
  | MultiSelectField
  | ReferenceField
  | ComputedField;
