import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@constants';

/**
 * It Protect all route.
 */
export const ProtectedRoute = () => {
    const token = localStorage.getItem('accessToken');

    if (!token) {
        return <Navigate to={ROUTES.AUTH.LOGIN} />;
    }

    return <Outlet />;
};
