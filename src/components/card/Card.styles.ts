import { Box, Card, CardMedia, ListItemButton, styled } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: theme.typography.pxToRem(340),
    borderRadius: theme.shape.borderRadius * 4,
    transition: 'all 0.2s ease',
    width: '100%',
    backgroundColor: theme.palette.common.white,
    '&:hover': {
        transform: 'scale(0.95)',
        boxShadow: 6,
    },
}));

export const StyledCardButton = styled(ListItemButton)({
    padding: 0,
    display: 'block',
});

export const StyledCardMedia = styled(CardMedia)<{ component?: React.ElementType }>(
    ({ theme }) => ({
        height: theme.typography.pxToRem(180),
        borderRadius: theme.shape.borderRadius * 4,
        objectFit: 'cover',
    }),
);

export const StyledContent = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
}));

export const StyledInfoBox = styled(Box)(({ theme }) => ({
    ...theme.mixins.flexLayout('row', 'start', 'center'),
    gap: theme.spacing(1),
    marginTop: theme.spacing(0.5),
    color: theme.palette.text.secondary,
}));
