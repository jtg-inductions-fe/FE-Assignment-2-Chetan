import { Paper, styled } from '@mui/material';

export const SignupCard = styled(Paper)(({ theme }) => ({
    width: '100%',
    maxWidth: theme.typography.pxToRem(600),
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
}));
