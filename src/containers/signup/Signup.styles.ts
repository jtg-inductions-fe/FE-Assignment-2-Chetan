import { Paper, styled } from '@mui/material';

export const SignupCard = styled(Paper)(({ theme }) => ({
    marginBlock: theme.spacing(15, 10),
    width: '100%',
    maxWidth: theme.typography.pxToRem(500),
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
}));
