import { ReactNode } from 'react';

export type TButtonSize = 28 | 36 | 56;

export type TVariant = 'primary' | 'secondary';

export type TButtonContext = {
  count: number;
  variant: TVariant;
  size: TButtonSize;
  increment: () => void;
  isLoading: boolean;
};

export interface IButtonProps {
  children: ReactNode;
  variant?: TVariant;
  size?: TButtonSize;
}
