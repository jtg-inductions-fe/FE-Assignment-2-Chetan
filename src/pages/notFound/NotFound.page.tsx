import { useNavigate } from 'react-router-dom';

import { Button, Stack } from '@mui/material';

import notFoundImage from '@assets/images/notFound.webp';
import { ErrorImage } from '@components';
import { ROUTES } from '@constants';
export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Stack justifyContent="center" alignItems="center" p="2" minHeight="80vh">
            <ErrorImage src={notFoundImage} alt="404 Not Found" />

            <Button variant="contained" onClick={() => void navigate(ROUTES.DASHBOARD.ROOT)}>
                Go Home
            </Button>
        </Stack>
    );
};
