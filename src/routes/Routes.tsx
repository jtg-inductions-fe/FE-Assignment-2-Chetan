import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '@constants';
import { MainLayout, PublicLayout } from '@layouts';
import { Dashboard, Home, Login, NotFound, Signup } from '@pages';

import { GuestRoute } from './Guest.route';
import { ProtectedRoute } from './Protected.route';

export const AppRoutes = () => (
    <Routes>
        <Route element={<PublicLayout />}>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route element={<GuestRoute />}>
                <Route path={ROUTES.AUTH.SIGNUP} element={<Signup />} />
                <Route path={ROUTES.AUTH.LOGIN} element={<Login />} />
            </Route>
        </Route>

        <Route element={<MainLayout />}>
            <Route element={<ProtectedRoute />}>
                <Route path={ROUTES.DASHBOARD.ROOT} element={<Dashboard />} />
            </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
    </Routes>
);
