import { useState } from 'react';

import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { Footer, Header, Sidebar } from '@components';

import { StyledBox, StyledLayoutContainer } from './MainLayout.styles';

export const MainLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    const handleCloseSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <Box display={'flex'} flexDirection={'column'} minHeight={'100vh'}>
            <Header onMenuClick={toggleSidebar} />
            <Sidebar open={sidebarOpen} onClose={handleCloseSidebar} />

            <StyledBox>
                <StyledLayoutContainer>
                    <Outlet />
                </StyledLayoutContainer>
                <Footer />
            </StyledBox>
        </Box>
    );
};
