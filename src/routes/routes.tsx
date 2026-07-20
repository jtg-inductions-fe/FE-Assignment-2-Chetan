import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '@constants';
import { Home } from '@pages/home';

export const AppRoutes = () => (
    <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
    </Routes>
);
