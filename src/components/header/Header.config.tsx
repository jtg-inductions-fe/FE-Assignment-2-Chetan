import { AccountBox, Logout } from '@mui/icons-material';

import { ROUTES } from '@constants';

export const SETTINGS_OPTIONS = [
    {
        label: 'Profile',
        onClick: ROUTES.PROFILE,
        icon: <AccountBox />,
    },
    {
        label: 'Logout',
        onClick: 'logout',
        icon: <Logout />,
    },
] as const;
