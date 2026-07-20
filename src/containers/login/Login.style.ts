import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const LoginCard = styled(Paper)(({ theme }) => ({
    width: '100%',
    maxWidth: theme.typography.pxToRem(400),
    paddingInline: theme.spacing(4),
    paddingBlock: theme.spacing(10),
    backgroundColor: theme.palette.background.default,
}));

export const AuthContainer = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    ...theme.mixins.flexLayout(),
    backgroundColor: theme.palette.background.default,
}));
