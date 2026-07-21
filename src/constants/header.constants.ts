import { ROUTES } from './routes.constants';

export const SETTINGS_OPTIONS = [
    {
        label: 'Dashboard',
        onClick: ROUTES.DASHBOARD.ROOT,
    },
    {
        label: 'Logout',
        onClick: 'logout',
    },
] as const;
