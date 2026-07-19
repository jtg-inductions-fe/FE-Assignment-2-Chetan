import * as React from 'react';

import { Outlet } from 'react-router-dom';

import Header from '@components/header/Header';
import Sidebar from '@components/sidebar/Sidebar';

const MainLayout = () => {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    return (
        <>
            <Header onMenuClick={toggleSidebar} />
            <Sidebar open={sidebarOpen} />
            <Outlet />
        </>
    );
};

export default MainLayout;
