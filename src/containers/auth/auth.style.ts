import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AuthContainer = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    ...theme.mixins.flexLayout(),
    backgroundColor: theme.palette.background.default,
}));
