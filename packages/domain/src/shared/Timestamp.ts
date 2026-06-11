import { Schema } from "effect";

export const Timestamp = Schema.DateTimeUtc;

export type Timestamp = typeof Timestamp.Type;
