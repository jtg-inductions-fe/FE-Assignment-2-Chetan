import { Box, styled } from '@mui/material';

export const LoadingContainer = styled(Box)(({ theme }) => ({
    ...theme.mixins.flexLayout('column', 'center', 'center'),
    minHeight: '80vh',
    width: '100%',
}));
