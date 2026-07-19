import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { ROUTES } from '@constants';
import { COLORS } from '@constants';
import { removeAccessToken } from '@features/auth/authSlice';
import { useAppSelector } from '@store/hooks';
import { useAppDispatch } from '@store/hooks';

const settings = ['Logout'];

interface HeaderProps {
    onMenuClick: () => void;
}
const Header = ({ onMenuClick }: HeaderProps) => {
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
        <AppBar
            position="static"
            sx={{
                backgroundColor: COLORS.BACKGROUND.DEFAULT,
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        component="img"
                        src="/image/logo.png"
                        sx={{
                            width: '100%',
                            maxWidth: 68,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    ></Box>
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href={ROUTES.DASHBOARD.ROOT}
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        SwiftBite
                    </Typography>

                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        onClick={onMenuClick}
                        sx={{ color: COLORS.COMMON.DARK, display: { xs: 'flex', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{ flexGrow: 1 }} />

                    <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                        {!token ? (
                            <Button
                                sx={{ color: 'black' }}
                                onClick={() => {
                                    void navigate(ROUTES.AUTH.LOGIN);
                                }}
                            >
                                Login
                            </Button>
                        ) : (
                            <>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu}>
                                        <Avatar alt="User" />
                                    </IconButton>
                                </Tooltip>

                                <Menu
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
                                    slotProps={{
                                        paper: {
                                            sx: {
                                                mt: '45px',
                                                minWidth: 150,
                                                boxShadow: 3,
                                                backgroundColor: COLORS.BACKGROUND.DEFAULT,
                                            },
                                        },
                                    }}
                                >
                                    <MenuItem
                                        key={settings[0]}
                                        onClick={() => {
                                            setAnchorElUser(null);
                                            handleLogout();
                                        }}
                                        sx={{
                                            py: 1.5,
                                            px: 2.5,
                                            minHeight: 48,
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Typography>{settings[0]}</Typography>
                                    </MenuItem>
                                </Menu>
                            </>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
