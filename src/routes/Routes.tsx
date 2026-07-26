import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '@constants';
import { MainLayout, PublicLayout } from '@layouts';
import { Cart, Dashboard, Home, Login, Menu, NotFound, PastOrders, Signup } from '@pages';

import { GuestRoute } from './Guest.route';
import { ProtectedRoute } from './Protected.route';

export const AppRoutes = () => (
    <Routes>
        <Route element={<GuestRoute />}>
            <Route path={ROUTES.AUTH.SIGNUP} element={<Signup />} />
            <Route path={ROUTES.AUTH.LOGIN} element={<Login />} />
        </Route>
        <Route element={<PublicLayout />}>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path="restaurants/:restaurantId/menu" element={<Menu />} />
        </Route>

        <Route element={<ProtectedRoute />}>
            <Route element={<PublicLayout />}>
                <Route path={ROUTES.CART} element={<Cart />} />
                <Route path={ROUTES.DASHBOARD.PAST_ORDERS} element={<PastOrders />} />
            </Route>
            <Route element={<MainLayout />}>
                <Route path={ROUTES.DASHBOARD.ROOT} element={<Dashboard />} />
            </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
    </Routes>
);
