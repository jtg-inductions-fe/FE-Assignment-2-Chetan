import { ReactNode } from 'react';

export interface CardOrientation {
    orientation: 'vertical' | 'horizontal';
}

export interface CardDetail {
    icon?: ReactNode;
    value?: ReactNode;
}

export interface CardProps extends CardOrientation {
    id: string;
    name: string;
    image?: string;
    details?: CardDetail[];
    action?: ReactNode;
    onClick?: () => void;
}
