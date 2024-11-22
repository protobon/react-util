import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Link, Outlet } from 'react-router-dom';

interface ListItemLinkProps {
  icon?: React.ReactElement<unknown>;
  primary: string;
  to: string;
}

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to } = props;

  return (
    <ListItemButton component={Link} to={to}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </ListItemButton>
  );
}

const menuItems: ListItemLinkProps[] = [
  {
    icon: <DraftsIcon/>,
    primary: "Login",
    to: "/login"
  },
  {
    icon: <DraftsIcon/>,
    primary: "Home",
    to: "/"
  },
  {
    icon: <DraftsIcon/>,
    primary: "Products",
    to: "/products"
  },
]

export default function Layout() {
  return (
    <Box sx={{ display: 'flex', height: '100vh', width: "100%" }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: { xs: '100%', md: '16.67%' },
          height: '100%',
          backgroundColor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          borderRight: { md: '1px solid #ddd', xs: 'none' },
        }}
      >
        <Paper
          elevation={0}
          sx={{
            flex: 1,
          }}
        >
          <List aria-label="main mailbox folders">
            {menuItems.map((item) => (
              <ListItem key={item.to} disablePadding>
                <ListItemLink to={item.to} primary={item.primary} icon={item.icon} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>

      {/* Content Area */}
      <Box
        sx={{
          flex: 1, // Takes up the remaining width
          padding: 2,
          overflowY: 'auto',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}