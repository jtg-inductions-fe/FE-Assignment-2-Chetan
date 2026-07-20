import { Box, Drawer, ListItemButton } from '@mui/material';
import { styled } from '@mui/material/styles';

import { COLORS } from '@constants';
import { theme } from '@theme';

export const DRAWER_WIDTH = theme.typography.pxToRem(250);

export const ListContainer = styled(Box)({
    width: DRAWER_WIDTH,
});

export const StyledListItemButton = styled(ListItemButton)({
    color: 'white',
    paddingLeft: theme.typography.pxToRem(30),
});

export const StyledDrawer = styled(Drawer)({
    '.MuiPaper-root': {
        top: theme.typography.pxToRem(56),
        backgroundColor: COLORS.PRIMARY.MAIN,
        [theme.breakpoints.up('sm')]: {
            top: theme.typography.pxToRem(64),
        },
        [theme.breakpoints.up('md')]: {
            top: theme.typography.pxToRem(68),
        },
    },
});
