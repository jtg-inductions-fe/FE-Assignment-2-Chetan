import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar, Container, Toolbar, Tooltip, Typography } from '@mui/material';

import logo from '@assets/images/logo.svg';
import { ROLE, ROUTES } from '@constants';
import { useAppDispatch, useAppSelector } from '@store';
import { logout } from '@utils';

import { SETTINGS_OPTIONS } from './Header.config';
import {
    AvatarIconButton,
    CartIconButton,
    LoginButton,
    LogoImage,
    LogoText,
    RightSection,
    Spacer,
    StyledAppBar,
    StyledMenu,
    StyledMenuItem,
} from './Header.styles';

export const Header = () => {
    const { accessToken, role } = useAppSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleLogout = () => {
        logout(dispatch);
        void navigate(ROUTES.HOME);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <StyledAppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <LogoImage src={logo} onClick={() => void navigate(ROUTES.HOME)} />
                    <LogoText variant="h4" noWrap href={ROUTES.HOME}>
                        SwiftBite
                    </LogoText>

                    <Spacer />

                    <RightSection>
                        {!accessToken ? (
                            <LoginButton
                                onClick={() => {
                                    void navigate(ROUTES.AUTH.LOGIN);
                                }}
                            >
                                Login
                            </LoginButton>
                        ) : (
                            <>
                                {role === ROLE.USER && (
                                    <Tooltip title="View Cart">
                                        <CartIconButton onClick={() => void navigate(ROUTES.CART)}>
                                            <ShoppingCartIcon />
                                        </CartIconButton>
                                    </Tooltip>
                                )}

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
