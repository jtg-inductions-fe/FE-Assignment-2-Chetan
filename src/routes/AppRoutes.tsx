import { Route, Routes } from 'react-router-dom';

import NotFound from '@components/errorHandlingPages/NotFound';
import MainLayout from '@components/layouts/MainLayout';
import { ROUTES } from '@constants';
import Login from '@features/auth/pages/Login';
import Signup from '@features/auth/pages/Signup';
import Home from '@features/home/Home';
import GuestRoute from '@routes/GuestRoute';

const AppRoutes = () => (
    <Routes>
        <Route element={<MainLayout />}>
            <Route element={<GuestRoute />}>
                <Route path={ROUTES.AUTH.SIGNUP} element={<Signup />} />
                <Route path={ROUTES.AUTH.LOGIN} element={<Login />} />
            </Route>
            <Route path="/" element={<Home />} />
        </Route>

        <Route path="*" element={<NotFound />} />
    </Routes>
);

export default AppRoutes;
