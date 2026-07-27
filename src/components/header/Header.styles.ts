import { AppBar, Box, Button, IconButton, Link, Menu, MenuItem, styled } from '@mui/material';

import { COLORS, FONT_WEIGHT } from '@constants';

export const StyledAppBar = styled(AppBar)({
    backgroundColor: COLORS.BACKGROUND.DEFAULT,
});

export const LogoImage = styled('img')(({ theme }) => ({
    width: '100%',
    maxWidth: theme.typography.pxToRem(68),
    display: 'flex',
    cursor: 'pointer',
}));

export const LogoText = styled(Link)(({ theme }) => ({
    display: 'none',
    color: theme.palette.common.black,
    textDecoration: 'none',
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
}));

export const AvatarIconButton = styled(IconButton)({
    color: COLORS.COMMON.DARK,
});

export const Spacer = styled(Box)({
    flexGrow: 1,
});

export const RightSection = styled(Box)({
    flexGrow: 0,
    display: 'flex',
    alignItems: 'center',
});

export const LoginButton = styled(Button)(({ theme }) => ({
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    textTransform: 'none',
    fontSize: theme.typography.pxToRem(15),
    fontWeight: FONT_WEIGHT.REGULAR,
    padding: theme.spacing(1, 3.5),
    border: '1px solid transparent',
    '&:hover': {
        transform: 'scale(1.05)',
    },
}));
export const StyledMenu = styled(Menu)(({ theme }) => ({
    '& .MuiPaper-root': {
        marginTop: theme.typography.pxToRem(45),
        minWidth: theme.typography.pxToRem(150),
        boxShadow: 3,
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.common.white,

        '& .MuiMenuItem-root:hover': {
            color: theme.palette.common.black,
        },
    },
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    minHeight: theme.typography.pxToRem(48),
}));
