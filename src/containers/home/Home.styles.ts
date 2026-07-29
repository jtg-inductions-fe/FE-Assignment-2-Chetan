import { Box, styled } from '@mui/material';

import { FONT_WEIGHT } from '@constants';

export const HeroSection = styled(Box)(({ theme }) => ({
    ...theme.mixins.flexLayout('column', 'center', 'center'),
    textAlign: 'center',
    padding: theme.spacing(8, 2),
    marginBottom: theme.spacing(8),
    height: theme.typography.pxToRem(380),
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: theme.palette.primary.main,
}));

export const RestaurantGrid = styled(Box)(({ theme }) => ({
    paddingBottom: theme.spacing(6),
}));

export const StyledTypographyBox = styled(Box)(({ theme }) => ({
    '.MuiTypography-root': {
        fontSize: theme.typography.pxToRem(40),
        color: theme.palette.common.white,
        fontWeight: FONT_WEIGHT.BOLD,
        marginTop: theme.typography.pxToRem(68),
        [theme.breakpoints.up('sm')]: {
            fontSize: theme.typography.pxToRem(60),
        },

        [theme.breakpoints.up('md')]: {
            fontSize: theme.typography.pxToRem(88),
        },
    },
}));
