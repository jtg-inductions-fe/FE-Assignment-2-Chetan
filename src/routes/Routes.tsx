import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '@constants';
import { Home } from '@pages';
import { Login, NotFound, Signup } from '@pages';

import { GuestRoute } from './Guest.route';

export const AppRoutes = () => (
    <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route element={<GuestRoute />}>
            <Route path={ROUTES.AUTH.SIGNUP} element={<Signup />} />
            <Route path={ROUTES.AUTH.LOGIN} element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
);
