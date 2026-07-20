import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const LoginContainer = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    ...theme.mixins.flexLayout(),
    backgroundColor: theme.palette.background.default,
}));

export const LoginCard = styled(Paper)(({ theme }) => ({
    width: '100%',
    maxWidth: 400,
    paddingInline: theme.spacing(4),
    paddingBlock: theme.spacing(10),
    backgroundColor: theme.palette.background.default,
}));

export const SignupContainer = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    ...theme.mixins.flexLayout(),
    backgroundColor: theme.palette.background.default,
}));

export const SignCard = styled(Paper)(({ theme }) => ({
    width: '100%',
    maxWidth: 600,
    padding: theme.spacing(4),

    backgroundColor: theme.palette.background.default,
}));
