import { Home, Star } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface ListItemLinkProps {
    icon?: React.ReactElement<unknown>;
    primary: string;
    to: string;
}

export const ListItemLink = (props: ListItemLinkProps) => {
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
      icon: <Home/>,
      primary: "Home",
      to: "/home"
    },
    {
      icon: <Star/>,
      primary: "Products",
      to: "/products"
    },
]

export const Sidebar: React.FC = () => {
    return (
    <Box
        sx={{
          width: "200px",
          height: '100%',
          backgroundColor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          borderRight: '1px solid #ddd',
          overflowY: 'auto',
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
                <ListItemLink to={item.to} primary={item.primary} icon={item.icon}/>
              </ListItem>
            ))}
          </List>
        </Paper>
    </Box>
    )
}
