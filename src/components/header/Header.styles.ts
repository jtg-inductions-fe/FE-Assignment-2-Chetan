import { AppBar, Box, Button, IconButton, Link, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';

import { COLORS } from '@constants';

export const StyledAppBar = styled(AppBar)({
    backgroundColor: COLORS.BACKGROUND.DEFAULT,
});

export const LogoImage = styled('img')(({ theme }) => ({
    width: '100%',
    maxWidth: theme.typography.pxToRem(68),
    display: 'none',
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
}));

export const LogoText = styled(Link)(({ theme }) => ({
    display: 'none',
    color: 'black',
    textDecoration: 'none',
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
}));

export const MenuIconButton = styled(IconButton)(({ theme }) => ({
    color: COLORS.COMMON.DARK,
    display: 'flex',
    [theme.breakpoints.up('md')]: {
        display: 'none',
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

export const LoginButton = styled(Button)({
    color: COLORS.COMMON.DARK,
});

export const StyledMenu = styled(Menu)(({ theme }) => ({
    '& .MuiPaper-root': {
        marginTop: theme.typography.pxToRem(45),
        minWidth: theme.typography.pxToRem(150),
        boxShadow: 3,
        backgroundColor: COLORS.BACKGROUND.DEFAULT,
    },
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    minHeight: theme.typography.pxToRem(48),
    justifyContent: 'center',
}));
