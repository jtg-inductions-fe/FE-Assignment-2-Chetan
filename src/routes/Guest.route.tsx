import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@constants';

/**
 * It prevent to access login and signup page, after logged in and signed up.
 */
export const GuestRoute = () => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        return <Navigate to={ROUTES.DASHBOARD.ROOT} />;
    }

    return <Outlet />;
};
