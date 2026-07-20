import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '@constants';
import { MainLayout } from '@layouts';
import { Home } from '@pages';
import { Login, NotFound, Signup } from '@pages';

import { GuestRoute } from './Guest.route';

export const AppRoutes = () => (
    <Routes>
        <Route element={<MainLayout />}>
            <Route element={<GuestRoute />}>
                <Route path={ROUTES.AUTH.SIGNUP} element={<Signup />} />
                <Route path={ROUTES.AUTH.LOGIN} element={<Login />} />
            </Route>
            <Route path={ROUTES.HOME} element={<Home />} />
        </Route>

        <Route path="*" element={<NotFound />} />
    </Routes>
);
