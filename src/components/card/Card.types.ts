import { ReactNode } from 'react';

export interface CardInfoItem {
    icon: ReactNode;
    value?: string;
}

export interface CardProps {
    id: string;
    name: string;
    image?: string;
    details?: CardInfoItem[];
}
