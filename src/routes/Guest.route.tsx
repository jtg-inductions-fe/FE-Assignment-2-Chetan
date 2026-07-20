import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@constants';


export const GuestRoute = () => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        return <Navigate to={ROUTES.DASHBOARD.ROOT} />;
    }

    return <Outlet />;
};
