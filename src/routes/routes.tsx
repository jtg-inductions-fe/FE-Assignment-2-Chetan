import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '@constants';
import { Home } from '@pages';
import { Login } from '@pages/login/login.page';
import { NotFound } from '@pages/not-found/Not-found.page';
import { Signup } from '@pages/signup/signup.page';
import GuestRoute from '@routes/guest.route';

const AppRoutes = () => (
    <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route element={<GuestRoute />}>
            <Route path={ROUTES.AUTH.SIGNUP} element={<Signup />} />
            <Route path={ROUTES.AUTH.LOGIN} element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
);

export default AppRoutes;
