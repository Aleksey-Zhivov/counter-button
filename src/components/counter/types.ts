import { TVariant } from '@components/button/types';

export type TCounterSize = 8 | 12 | 16 | 20 | 24;

export interface ICounterProps {
  value: string | number;
  size?: TCounterSize;
  variant?: TVariant;
}
