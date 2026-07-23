import { Outlet } from 'react-router-dom';

import { Container } from '@mui/material';

import { Header } from '@components';

export const PublicLayout = () => (
    <>
        <Header />
        <Container maxWidth="xl">
            <Outlet />
        </Container>
    </>
);
