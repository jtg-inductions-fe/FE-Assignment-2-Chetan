import { Card, styled } from '@mui/material';

export const Panel = styled(Card)(({ theme }) => ({
    flex: 1,
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    borderRadius: theme.shape.borderRadius * 3,
    backgroundColor: theme.palette.divider,
}));
