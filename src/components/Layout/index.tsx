import * as React from 'react';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../common/components/Sidebar';
import { Navbar } from '../../common/components';


export default function Layout() {
  const [sidebarVisible, setSidebarVisible] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: "column", height: '100vh', width: "100%" }}>
      <Navbar toggleSidebar={toggleSidebar} />
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