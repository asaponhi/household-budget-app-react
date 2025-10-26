import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Menu as MenuIcon,
} from '@mui/icons-material';
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import SideBar from '../common/SideBar';

const drawerWidth = 240;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);


  

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  

  return (
    <Box sx={{ display: 'flex', backgroundColor: (theme) => theme.palette.grey[100], minHeight: '100vh' }}>
      <CssBaseline />
      {/* header */}
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Household Budget App
          </Typography>
        </Toolbar>
      </AppBar>

      {/* side bar */}
      <SideBar 
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawer={drawer}
      />

      {/* main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
