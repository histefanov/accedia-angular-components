import { SIZE_EXTRA_SMALL, SIZE_LARGE, SIZE_MEDIUM, SIZE_SMALL } from './constants';

export type InlineStyle = { [key: string]: string };
export type LoadingSpinnerSize =
  | typeof SIZE_EXTRA_SMALL
  | typeof SIZE_SMALL
  | typeof SIZE_MEDIUM
  | typeof SIZE_LARGE;
