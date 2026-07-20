import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@constants';

const ProtectedRoute = () => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to={ROUTES.AUTH.LOGIN} />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
