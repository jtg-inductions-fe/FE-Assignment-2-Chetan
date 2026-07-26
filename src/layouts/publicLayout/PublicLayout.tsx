import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { Footer, Header } from '@components';
import { StyledLayoutContainer } from '@layouts';

export const PublicLayout = () => (
    <>
        <Box display={'flex'} flexDirection={'column'} minHeight={'100vh'}>
            <Header />
            <StyledLayoutContainer maxWidth="xl">
                <Outlet />
            </StyledLayoutContainer>
            <Footer />
        </Box>
    </>
);
