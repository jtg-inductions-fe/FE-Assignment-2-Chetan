import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { COLORS } from '@constants';

const DRAWER_WIDTH = 250;

interface SidebarProps {
    open: boolean;
}

const Sidebar = ({ open }: SidebarProps) => {
    const list = (
        <Box sx={{ width: DRAWER_WIDTH }}>
            <List>
                {['Profile', 'Balance', 'Past Orders', 'Restaurants', 'stats'].map((text) => (
                    <ListItem key={text}>
                        <ListItemButton sx={{ color: 'white', textAlign: 'center' }}>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Drawer
            variant="permanent"
            sx={{
                display: { xs: open ? 'block' : 'none', md: 'block' },
                '.MuiPaper-root': {
                    top: { xs: 56, sm: 64, md: 68 },
                    backgroundColor: COLORS.PRIMARY.MAIN,
                },
            }}
        >
            {list}
        </Drawer>
    );
};
export default Sidebar;
