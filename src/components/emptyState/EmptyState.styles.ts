import { Box, CardMedia, styled } from '@mui/material';

export const StyledContainer = styled(Box)(({ theme }) => ({
    marginTop: theme.typography.pxToRem(100),
    ...theme.mixins.flexLayout('column', 'center', 'center'),
    gap: theme.spacing(2),
    padding: theme.spacing(8),
    textAlign: 'center',
}));

export const StyledImage = styled(CardMedia)<{ component?: React.ElementType }>(({ theme }) => ({
    width: theme.typography.pxToRem(220),
    height: theme.typography.pxToRem(220),
}));
