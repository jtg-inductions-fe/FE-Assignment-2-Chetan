import { List, ListItem, ListItemText } from '@mui/material';

import { SIDEBAR_LIST } from '@constants';

import { ListContainer, StyledDrawer, StyledListItemButton } from './Sidebar.styles';
import { SidebarProps } from './Sidebar.types';

export const Sidebar = ({ open }: SidebarProps) => {
    const list = (
        <ListContainer>
            <List>
                {SIDEBAR_LIST.map((text) => (
                    <ListItem key={text}>
                        <StyledListItemButton>
                            <ListItemText primary={text} />
                        </StyledListItemButton>
                    </ListItem>
                ))}
            </List>
        </ListContainer>
    );

    return (
        <StyledDrawer
            sx={{
                display: { xs: open ? 'block' : 'none', md: 'block' },
            }}
            variant="permanent"
        >
            {list}
        </StyledDrawer>
    );
};
