import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const LoginCard = styled(Paper)(({ theme }) => ({
    width: '100%',
    maxWidth: 400,
    paddingInline: theme.spacing(4),
    paddingBlock: theme.spacing(10),
    backgroundColor: theme.palette.background.default,
}));
