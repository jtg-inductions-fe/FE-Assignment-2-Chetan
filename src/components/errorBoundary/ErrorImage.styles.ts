import { styled } from '@mui/material/styles';

export const ErrorImage = styled('img')(({ theme }) => ({
    width: '100%',
    maxWidth: theme.typography.pxToRem(940),
}));
