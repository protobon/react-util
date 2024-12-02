import * as React from 'react';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../common/components/Sidebar';
import { Navbar } from '../../common/components';
import ShoppingCart from '../../common/components/ShoppingCart';


export default function Layout() {
  const [sidebarVisible, setSidebarVisible] = React.useState(false);
  const [cartVisible, setCartVisible] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };
  
  return (
    <Box sx={{ display: 'flex', flexDirection: "column", height: '100vh', width: "100%" }}>
      <Navbar toggleSidebar={toggleSidebar} toggleCart={toggleCart}/>
      <Box sx={{ display: "flex", flex: 1, overflow: "hidden", position: "relative" }}>
        {sidebarVisible && (
          <Box sx={{
          position: "absolute",
          zIndex: 1000,
          overflow: "hidden",
          height: '100%',
          }}
          onClick={toggleSidebar}
          >
            <Sidebar />
          </Box>
        )}
        {cartVisible && (
          <Box sx={{
          position: "absolute",
          right: 0,
          zIndex: 1000,
          overflow: "hidden",
          height: '100%',
          }}
          >
            <ShoppingCart />
          </Box>
        )}

        {/* Content Area */}
        <Box
          sx={{
            flex: 1,
            padding: 2,
            overflow: 'auto',
          }}
          onClick={() => setSidebarVisible(false)}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}