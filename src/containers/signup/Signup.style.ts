import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SignupCard = styled(Paper)(({ theme }) => ({
    width: '100%',
    maxWidth: 600,
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
}));
