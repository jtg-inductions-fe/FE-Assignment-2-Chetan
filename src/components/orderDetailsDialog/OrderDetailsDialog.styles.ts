import { Box, styled } from '@mui/material';

export const RestaurantRow = styled(Box)(({ theme }) => ({
    ...theme.mixins.flexLayout('row', 'start', 'center'),
    gap: theme.spacing(2),
    marginBottom: theme.spacing(2),
}));

export const RestaurantImage = styled('img')(({ theme }) => ({
    width: theme.typography.pxToRem(56),
    height: theme.typography.pxToRem(56),
    borderRadius: theme.shape.borderRadius * 2,
    objectFit: 'cover',
}));

export const OrderDetailsRow = styled(Box)(({ theme }) => ({
    ...theme.mixins.flexLayout('row', 'space-between', 'center'),
    marginBottom: theme.spacing(2),

    '.MuiTypography-root': {
        opacity: 0.6,
        fontSize: theme.typography.pxToRem(8),
    },
}));

export const ItemRow = styled(Box)(({ theme }) => ({
    ...theme.mixins.flexLayout('row', 'space-between', 'center'),
    padding: theme.spacing(1, 0),
    marginBlock: 2,
}));

export const TotalRow = styled(Box)(({ theme }) => ({
    marginBlock: 8,
    ...theme.mixins.flexLayout('row', 'space-between', 'center'),
}));
