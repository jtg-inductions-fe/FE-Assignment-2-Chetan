import { useNavigate } from 'react-router-dom';

import { Box, Button, Stack } from '@mui/material';

import { ROUTES } from '@constants';
export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Stack justifyContent="center" alignItems="center" sx={{ minHeight: '80vh', p: 2 }}>
            <Box
                component="img"
                src="/image/notFound.png"
                alt="404 Not Found"
                sx={{
                    width: '100%',
                    maxWidth: 940,
                }}
            />

            <Button variant="contained" onClick={() => void navigate(ROUTES.DASHBOARD.ROOT)}>
                Go Home
            </Button>
        </Stack>
    );
};
