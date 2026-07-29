import { ReactNode } from 'react';

/** Layout direction for the reusable Card (restaurant vs. menu item). */
export interface CardOrientation {
    orientation: 'vertical' | 'horizontal';
}

/** A single labeled detail row shown on a Card (e.g. location, price). */
export interface CardDetail {
    icon?: ReactNode;
    value?: string | number;
    showTooltip?: boolean;
    applyLineClimping?: boolean;
}

/** Props for the reusable Card used for both restaurants and menu items. */
export interface CardProps extends CardOrientation {
    id: string;
    name: string;
    image?: string;
    details?: CardDetail[];
    action?: ReactNode;
    onClick?: () => void;
}
