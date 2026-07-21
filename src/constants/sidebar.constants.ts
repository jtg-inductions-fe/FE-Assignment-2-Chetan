import { ROUTES } from './routes.constants';

export const SIDEBAR_ADMIN_LIST = [
    {
        label: 'Home',
        path: ROUTES.HOME,
    },
    {
        label: 'Restaurants',
        path: ROUTES.DASHBOARD.RESTAURANTS.ROOT,
    },
] as const;

export const SIDEBAR_USER_LIST = [
    {
        label: 'Home',
        path: ROUTES.HOME,
    },
    {
        label: 'Profile',
        path: ROUTES.DASHBOARD.UPDATE_PROFILE,
    },
    {
        label: 'Past Orders',
        path: ROUTES.DASHBOARD.PAST_ORDERS,
    },
] as const;
