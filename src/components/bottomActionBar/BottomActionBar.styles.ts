import { Box, Button, Paper, styled } from '@mui/material';

import { FONT_WEIGHT } from '@constants';

export const StyledPaper = styled(Paper)(({ theme }) => ({
    position: 'fixed',
    bottom: theme.spacing(2),
    width: `calc(100% - ${theme.typography.pxToRem(32)})`,
    height: theme.typography.pxToRem(48),
    padding: theme.spacing(1.5, 2),
    borderRadius: theme.shape.borderRadius * 2,

    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.success.main,

    [theme.breakpoints.up('md')]: {
        width: theme.typography.pxToRem(744),
    },
}));

export const Content = styled(Box)(({ theme }) => ({
    ...theme.mixins.flexLayout('row', 'space-between', 'center'),
    color: theme.palette.common.white,
}));

export const ActionButton = styled(Button)(({ theme }) => ({
    minWidth: theme.typography.pxToRem(140),
    borderRadius: theme.shape.borderRadius * 2,

    color: theme.palette.common.white,
    fontWeight: FONT_WEIGHT.REGULAR,
    '&:hover': {
        fontWeight: FONT_WEIGHT.BOLD,
    },
}));
