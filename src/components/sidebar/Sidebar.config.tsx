import { History, Home, Person2, QueryStats, Restaurant } from '@mui/icons-material';

import { ROUTES } from '@constants';

export const SIDEBAR_ADMIN_LIST = [
    {
        label: 'Home',
        path: ROUTES.HOME,
        icon: <Home />,
    },
    {
        label: 'Restaurants',
        path: ROUTES.DASHBOARD.RESTAURANTS.ROOT,
        icon: <Restaurant />,
    },
    {
        label: 'Analytics',
        path: ROUTES.DASHBOARD.RESTAURANTS.ROOT,
        icon: <QueryStats />,
    },
] as const;

export const SIDEBAR_USER_LIST = [
    {
        label: 'Home',
        path: ROUTES.HOME,
        icon: <Home />,
    },
    {
        label: 'Profile',
        path: ROUTES.DASHBOARD.UPDATE_PROFILE,
        icon: <Person2 />,
    },
    {
        label: 'Past Orders',
        path: ROUTES.DASHBOARD.PAST_ORDERS,
        icon: <History />,
    },
] as const;
