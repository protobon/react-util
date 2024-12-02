import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button } from '@mui/material';
import { useLogout } from '../../../hooks/Auth/useLogout';

export const Navbar: React.FC<{ toggleSidebar: () => void }> = ({ toggleSidebar }) => {
    const logout = useLogout();

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
            Logo
          </Typography>
        </Box>
        <Button color="inherit" onClick={logout}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
};
