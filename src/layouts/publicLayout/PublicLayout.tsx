import { Outlet } from 'react-router-dom';

import { Header } from '@components';

export const PublicLayout = () => (
    <>
        <Header />
        <Outlet />
    </>
);
