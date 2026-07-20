import { useNavigate } from 'react-router-dom';

import { Button, Stack } from '@mui/material';

import notFoundImage from '@assets/image/notFound.webp';
import { ROUTES } from '@constants';
import { ErrorImage } from '@styles';
export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Stack justifyContent="center" alignItems="center" sx={{ minHeight: '80vh', p: 2 }}>
            <ErrorImage src={notFoundImage} alt="404 Not Found" />

            <Button variant="contained" onClick={() => void navigate(ROUTES.DASHBOARD.ROOT)}>
                Go Home
            </Button>
        </Stack>
    );
};
