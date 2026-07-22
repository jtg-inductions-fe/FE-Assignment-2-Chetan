import { Box, styled, Typography } from '@mui/material';

import { FONT_WEIGHT } from '@constants';
import { theme } from '@theme';

export const HeroSection = styled(Box)(() => ({
    ...theme.mixins.flexLayout('column', 'center', 'center'),
    textAlign: 'center',
    padding: theme.spacing(8, 2),
    marginBottom: theme.spacing(8),
    height: theme.typography.pxToRem(380),
    borderRadius: 5,
    backgroundColor: theme.palette.primary.main,
}));

export const RestaurantGrid = styled(Box)(() => ({
    paddingBottom: theme.spacing(6),
}));

export const StyledTypograpgy = styled(Typography)(() => ({
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
}));

export const StyledParaTypograpgy = styled(Typography)(() => ({
    marginTop: theme.typography.pxToRem(15),
    color: theme.palette.secondary.contrastText,
}));
