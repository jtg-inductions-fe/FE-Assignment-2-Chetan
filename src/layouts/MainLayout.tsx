import * as React from 'react';

import { Outlet } from 'react-router-dom';

import { Header, Sidebar } from '@components';

export const MainLayout = () => {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    const handleCloseSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <>
            <Header onMenuClick={toggleSidebar} />
            <Sidebar open={sidebarOpen} onClose={handleCloseSidebar} />
            <Outlet />
        </>
    );
};
