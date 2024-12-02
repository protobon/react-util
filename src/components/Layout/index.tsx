import * as React from 'react';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../common/components/Sidebar';
import { Navbar } from '../../common/components';


export default function Layout() {
  const [sidebarVisible, setSidebarVisible] = React.useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: "column", height: '100vh', width: "100%" }}>
      <Navbar toggleSidebar={toggleSidebar} />
      <Box sx={{ display: "flex" }}>
        {sidebarVisible && (<Sidebar />)}

        {/* Content Area */}
        <Box
          sx={{
            flex: 1,
            padding: 2,
            overflowY: 'auto',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}