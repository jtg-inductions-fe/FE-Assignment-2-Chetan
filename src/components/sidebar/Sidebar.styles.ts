import { Box, Drawer, ListItemButton, styled } from '@mui/material';

import { COLORS } from '@constants';
import { theme } from '@theme';

export const DRAWER_WIDTH = theme.typography.pxToRem(250);

export const ListContainer = styled(Box)({
    width: DRAWER_WIDTH,
});

export const StyledListItemButton = styled(ListItemButton)(() => ({
    color: COLORS.COMMON.LIGHT,
    padding: theme.spacing(1.5, 3),
    marginTop: theme.typography.pxToRem(22),
    transition: theme.transitions.create(['color', 'background-color', 'padding-left'], {
        duration: theme.transitions.duration.shortest,
    }),

    '&:hover': {
        paddingLeft: theme.spacing(4),
        color: 'black',
    },

    '& .MuiTypography-root': {
        fontWeight: 500,
        fontSize: theme.typography.pxToRem(22),
    },
}));

export const StyledDrawer = styled(Drawer)(() => ({
    '& .MuiDrawer-paper': {
        width: DRAWER_WIDTH,
        top: theme.typography.pxToRem(56),
        backgroundColor: COLORS.PRIMARY.MAIN,
        color: COLORS.COMMON.LIGHT,

        [theme.breakpoints.up('sm')]: {
            top: theme.typography.pxToRem(64),
        },

        [theme.breakpoints.up('md')]: {
            top: theme.typography.pxToRem(68),
        },
    },
}));
