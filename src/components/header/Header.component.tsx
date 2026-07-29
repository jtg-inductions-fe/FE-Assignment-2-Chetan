import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import { Menu } from '@mui/icons-material';
import { Avatar, Container, Toolbar, Tooltip, Typography } from '@mui/material';

import logo from '@assets/images/logo.svg';
import { ROUTES } from '@constants';
import { removeAuth } from '@slices';
import { useAppDispatch, useAppSelector } from '@store';

import { SETTINGS_OPTIONS } from './Header.config';
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
        localStorage.removeItem('accessToken');
        dispatch(removeAuth());

        void navigate(ROUTES.HOME);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <StyledAppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {onMenuClick && (
                        <MenuIconButton size="large" aria-label="menu" onClick={onMenuClick}>
                            <Menu />
                        </MenuIconButton>
                    )}
                    <LogoImage src={logo} />
                    <LogoText variant="h4" noWrap href={ROUTES.HOME}>
                        SwiftBite
                    </LogoText>

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
                                    {SETTINGS_OPTIONS.map(({ label, onClick, icon }) => (
                                        <StyledMenuItem
                                            key={label}
                                            onClick={() => {
                                                handleCloseUserMenu();

                                                if (onClick === 'logout') {
                                                    handleLogout();
                                                } else {
                                                    void navigate(onClick);
                                                }
                                            }}
                                        >
                                            {icon}
                                            <Typography variant="h6" paddingLeft={4}>
                                                {label}
                                            </Typography>
                                        </StyledMenuItem>
                                    ))}
                                </StyledMenu>
                            </>
                        )}
                    </RightSection>
                </Toolbar>
            </Container>
        </StyledAppBar>
    );
};
