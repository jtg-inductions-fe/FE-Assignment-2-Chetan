import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '@constants';

import Home from '../components/Home';

const AppRoutes = () => (
    <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
    </Routes>
);

export default AppRoutes;
