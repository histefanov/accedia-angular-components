import {
  CHECK_SYMBOL_DOT,
  CHECK_SYMBOL_TICK,
  DIRECTION_COLUMN,
  DIRECTION_ROW,
  POSITION_AFTER,
  POSITION_BEFORE,
  SIZE_LARGE,
  SIZE_MEDIUM,
  SIZE_SMALL,
  VARIANT_BOX,
  VARIANT_FILLED,
  VARIANT_OUTLINED,
  VARIANT_STANDARD,
} from './constants';

export type InlineStyle = { [key: string]: string };

// Button property types
export type ButtonSize =
  | typeof SIZE_SMALL
  | typeof SIZE_MEDIUM
  | typeof SIZE_LARGE;
export type ButtonVariant = typeof VARIANT_FILLED | typeof VARIANT_OUTLINED;

// Radio button types
export type RadioButtonCheckboxType =
  | typeof CHECK_SYMBOL_DOT
  | typeof CHECK_SYMBOL_TICK;
export type RadioButtonVariant = typeof VARIANT_STANDARD | typeof VARIANT_BOX;
export type RadioButtonLabelPosition =
  | typeof POSITION_BEFORE
  | typeof POSITION_AFTER;
export type RadioGroupDirection = typeof DIRECTION_ROW | typeof DIRECTION_COLUMN;
