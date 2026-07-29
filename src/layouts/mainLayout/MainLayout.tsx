import { useState } from 'react';

import { Outlet } from 'react-router-dom';

import { Container } from '@mui/material';

import { Header, Sidebar } from '@components';

export const MainLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

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
            <Container maxWidth="xl">
                <Outlet />
            </Container>
        </>
    );
};
