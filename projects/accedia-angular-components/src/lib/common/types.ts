import {
  CHECK_SYMBOL_DOT,
  CHECK_SYMBOL_TICK,
  DIRECTION_COLUMN,
  DIRECTION_ROW,
  POSITION_ABOVE,
  POSITION_BELOW,
  POSITION_AFTER,
  POSITION_BEFORE,
  SIZE_LARGE,
  SIZE_MEDIUM,
  SIZE_SMALL,
  SIZE_EXTRA_SMALL,
  VARIANT_BOX,
  VARIANT_FILLED,
  VARIANT_OUTLINED,
  VARIANT_STANDARD,
  STATE_ON,
  STATE_OFF,
} from './constants';

export type InlineStyle = { [key: string]: string };

export type LoadingSpinnerSize =
  | typeof SIZE_EXTRA_SMALL
  | typeof SIZE_SMALL
  | typeof SIZE_MEDIUM
  | typeof SIZE_LARGE;

// Button property types
export type ButtonSize =
  | typeof SIZE_SMALL
  | typeof SIZE_MEDIUM
  | typeof SIZE_LARGE;
export type ButtonVariant = typeof VARIANT_FILLED | typeof VARIANT_OUTLINED;
export type ButtonIconPosition = typeof POSITION_BEFORE | typeof POSITION_AFTER;

// Radio button types
export type RadioButtonCheckboxType =
  | typeof CHECK_SYMBOL_DOT
  | typeof CHECK_SYMBOL_TICK;
export type RadioButtonVariant = typeof VARIANT_STANDARD | typeof VARIANT_BOX;
export type RadioButtonLabelPosition =
  | typeof POSITION_BEFORE
  | typeof POSITION_AFTER;
export type RadioGroupDirection =
  | typeof DIRECTION_ROW
  | typeof DIRECTION_COLUMN;

// Toggle button types
export type ToggleButtonState = typeof STATE_ON | typeof STATE_OFF;
export type ToggleButtonLabelPosition =
  | typeof POSITION_ABOVE
  | typeof POSITION_BELOW
  | typeof POSITION_BEFORE
  | typeof POSITION_AFTER;
  