import { Box, List, ListItemIcon, ListItem, ListItemText } from "@mui/material";

export const NavListDrawer = ({navLinks}) => {
    return (
        <Box>
            <nav>
                <List>
                    {navLinks.map((link) => (
                        <ListItem key={link.title}>
                            <ListItemIcon>{link.icon}</ListItemIcon>
                            <ListItemText>{link.title}</ListItemText>
                        </ListItem>
                    ))}
                </List>
            </nav>
        </Box>
    );
};
