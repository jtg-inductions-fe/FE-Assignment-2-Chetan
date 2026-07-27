import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '@constants';
import { MainLayout } from '@layouts';
import { Cart, Home, Login, Menu, NotFound, PastOrders, Profile, Signup } from '@pages';

import { GuestRoute } from './Guest.route';
import { ProtectedRoute } from './Protected.route';

export const AppRoutes = () => (
    <Routes>
        <Route element={<MainLayout />}>
            <Route element={<GuestRoute />}>
                <Route path={ROUTES.AUTH.SIGNUP} element={<Signup />} />
                <Route path={ROUTES.AUTH.LOGIN} element={<Login />} />
            </Route>

            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.RESTAURANTS.MENU_URL} element={<Menu />} />

            <Route element={<ProtectedRoute />}>
                <Route path={ROUTES.CART} element={<Cart />} />
                <Route path={ROUTES.PAST_ORDERS} element={<PastOrders />} />
                <Route path={ROUTES.PROFILE} element={<Profile />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
);
