import { useNavigate } from 'react-router-dom';

import { List, ListItem, ListItemText } from '@mui/material';

import { ROLE, SIDEBAR_ADMIN_LIST, SIDEBAR_USER_LIST } from '@constants';
import { useAppSelector } from '@store';

import { ListContainer, StyledDrawer, StyledListItemButton } from './Sidebar.styles';
import { SidebarItem, SidebarProps } from './Sidebar.types';

export const Sidebar = ({ open, onClose }: SidebarProps) => {
    const navigate = useNavigate();
    const role = useAppSelector((state) => state.auth.role);
    const sidebarList = role === ROLE.USER ? SIDEBAR_USER_LIST : SIDEBAR_ADMIN_LIST;

    function handleClick(path: string) {
        void navigate(path);
    }

    const list = (
        <ListContainer>
            <List>
                {sidebarList.map(({ label, path }: SidebarItem) => (
                    <ListItem key={label} disablePadding>
                        <StyledListItemButton
                            onClick={() => {
                                handleClick(path);
                            }}
                        >
                            <ListItemText primary={label} />
                        </StyledListItemButton>
                    </ListItem>
                ))}
            </List>
        </ListContainer>
    );

    return (
        <>
            <StyledDrawer
                variant="temporary"
                open={open}
                onClose={onClose}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: {
                        xs: 'block',
                        md: 'none',
                    },
                }}
            >
                {list}
            </StyledDrawer>

            <StyledDrawer
                variant="permanent"
                open
                sx={{
                    display: {
                        xs: 'none',
                        md: 'block',
                    },
                }}
            >
                {list}
            </StyledDrawer>
        </>
    );
};
