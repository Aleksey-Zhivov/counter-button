import { ReactNode } from "react";

export type TButtonContext = {
    count: number;
    increment: () => void;
    isLoading: boolean;
}

export interface IButtonProps {
    children: ReactNode;
    style?: 'primary' | 'secondary';
    size?: 28 | 36 | 56;
    disabled?: boolean;
}