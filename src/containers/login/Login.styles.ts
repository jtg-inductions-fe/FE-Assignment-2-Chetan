import { Box, Paper, styled } from '@mui/material';

export const LoginCard = styled(Paper)(({ theme }) => ({
    marginTop: '20vh',
    width: '100%',
    maxWidth: theme.typography.pxToRem(400),
    paddingInline: theme.spacing(4),
    paddingBlock: theme.spacing(10),
    backgroundColor: theme.palette.background.default,
}));

export const AuthContainer = styled(Box)(({ theme }) => ({
    ...theme.mixins.flexLayout(),
    backgroundColor: theme.palette.background.default,
}));
