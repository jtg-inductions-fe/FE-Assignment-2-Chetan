import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Container, Toolbar, Tooltip, Typography } from '@mui/material';

import logo from '@assets/image/logo.svg';
import { ROUTES, SETTINGS_OPTIONS } from '@constants';
import { removeAccessToken } from '@slices';
import { useAppDispatch, useAppSelector } from '@store';

import {
    AvatarIconButton,
    LoginButton,
    LogoImage,
    LogoText,
    MenuIconButton,
    RightSection,
    Spacer,
    StyledAppBar,
    StyledMenu,
    StyledMenuItem,
} from './Header.styles';
import { HeaderProps } from './Header.types';

export const Header = ({ onMenuClick }: HeaderProps) => {
    const token = useAppSelector((state) => state.auth.accessToken);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(removeAccessToken());

        void navigate(ROUTES.DASHBOARD.ROOT);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <StyledAppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <LogoImage src={logo} />
                    <LogoText variant="h4" noWrap href={ROUTES.DASHBOARD.ROOT}>
                        SwiftBite
                    </LogoText>

                    <MenuIconButton
                        size="large"
                        aria-label="account of current user"
                        onClick={onMenuClick}
                    >
                        <MenuIcon />
                    </MenuIconButton>

                    <Spacer />

                    <RightSection>
                        {!token ? (
                            <LoginButton
                                onClick={() => {
                                    void navigate(ROUTES.AUTH.LOGIN);
                                }}
                            >
                                Login
                            </LoginButton>
                        ) : (
                            <>
                                <Tooltip title="Open settings">
                                    <AvatarIconButton onClick={handleOpenUserMenu}>
                                        <Avatar alt="User" />
                                    </AvatarIconButton>
                                </Tooltip>

                                <StyledMenu
                                    anchorEl={anchorElUser}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                >
                                    <StyledMenuItem
                                        key={SETTINGS_OPTIONS[0]}
                                        onClick={() => {
                                            setAnchorElUser(null);
                                            handleLogout();
                                        }}
                                    >
                                        <Typography>{SETTINGS_OPTIONS[0]}</Typography>
                                    </StyledMenuItem>
                                </StyledMenu>
                            </>
                        )}
                    </RightSection>
                </Toolbar>
            </Container>
        </StyledAppBar>
    );
};
