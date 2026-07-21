import { Dashboard, Logout } from '@mui/icons-material';

import { ROUTES } from '@constants';

export const SETTINGS_OPTIONS = [
    {
        label: 'Dashboard',
        onClick: ROUTES.DASHBOARD.ROOT,
        icon: <Dashboard />,
    },
    {
        label: 'Logout',
        onClick: 'logout',
        icon: <Logout />,
    },
] as const;
