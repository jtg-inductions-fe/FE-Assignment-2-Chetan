import { Box, Paper, styled } from '@mui/material';

import { COLORS, FONT_WEIGHT } from '@constants';

export const StyledPageContainer = styled(Box)(({ theme }) => ({
    maxWidth: theme.typography.pxToRem(700),
    margin: '0 auto',
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: COLORS.BACKGROUND.GRAY,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
}));

export const StyledCart = styled(Box)(({ theme }) => ({
    '.MuiTypography-root': {
        fontSize: theme.typography.pxToRem(36),
        fontWeight: FONT_WEIGHT.BOLD,
        lineHeight: 1,
        marginBlock: theme.spacing(1.25),
        [theme.breakpoints.up('md')]: {
            marginBlock: theme.spacing(4, 8),
        },
    },
}));

export const StyledCartContainer = styled(Paper)(({ theme }) => ({
    marginTop: theme.spacing(3),
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius * 2,
    minHeight: theme.typography.pxToRem(536),
    maxHeight: theme.typography.pxToRem(600),
    backgroundColor: theme.palette.common.white,
    overflowY: 'auto',
    overflowX: 'hidden',
}));

export const StyledCartItem = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2, 0),
}));

export const StyledPriceContainer = styled(Box)(({ theme }) => ({
    ...theme.mixins.flexLayout('row', 'space-between', 'center'),
}));

export const StyledBillContainer = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    marginTop: theme.spacing(3),
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius * 2,
}));

export const StyledRestaurantImage = styled('img')(({ theme }) => ({
    width: '100%',
    height: theme.typography.pxToRem(200),
    maxHeight: theme.typography.pxToRem(300),
    objectFit: 'cover',
    borderRadius: theme.shape.borderRadius * 3,
}));

export const StyledPlaceOrderButton = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(3),

    '& .MuiButton-root': {
        backgroundColor: theme.palette.success.main,
        fontWeight: FONT_WEIGHT.BOLD,
        '&:hover': {
            backgroundColor: theme.palette.success.dark,
        },
    },
}));
