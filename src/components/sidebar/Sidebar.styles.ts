import { Box, Drawer, ListItemButton, ListItemText, styled } from '@mui/material';

import { COLORS, FONT_WEIGHT } from '@constants';

export const ListContainer = styled(Box)({
    width: '100%',
});

export const ItemText = styled(ListItemText)(({ theme }) => ({
    paddingLeft: theme.typography.pxToRem(8),
}));
export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
    color: COLORS.COMMON.LIGHT,
    padding: theme.spacing(1.5, 3),
    marginTop: theme.typography.pxToRem(22),
    transition: theme.transitions.create(['color', 'background-color', 'padding-left'], {
        duration: theme.transitions.duration.shortest,
    }),

    '&:hover': {
        '& .MuiTypography-root': {
            fontWeight: FONT_WEIGHT.MEDIUM,
        },
    },

    '& .MuiTypography-root': {
        fontWeight: FONT_WEIGHT.REGULAR,
        fontSize: theme.typography.pxToRem(22),
    },
}));

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        width: theme.typography.pxToRem(250),
        top: theme.typography.pxToRem(68),
        backgroundColor: COLORS.PRIMARY.MAIN,
        color: COLORS.COMMON.LIGHT,
        bottom: theme.typography.pxToRem(68),
    },
}));
