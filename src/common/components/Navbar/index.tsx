import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button } from '@mui/material';
import { LogoutButton } from '../Logout';
import { ShoppingCart } from '@mui/icons-material';

interface NavbarProps {
    toggleSidebar: () => void;
    toggleCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, toggleCart }) => {
  return (
    <AppBar sx={{
        position: "static",
        top: 0,
        width: "100%",
        height: "60px",
        zIndex: 1000,
        backgroundColor: "background.paper",
        color: "text.primary",
    }}>
      <Toolbar>
        <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ marginX: "15px" }}>
            Memes✨
          </Typography>
        </Box>
        <Button sx={{ marginX: 1 }} color="inherit" onClick={toggleCart}>
          <ShoppingCart/>
        </Button>
        <LogoutButton />
      </Toolbar>
    </AppBar>
  );
};
