import { Box, Drawer } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import {
  Dashboard as DashboardIcon,
  AccountBalanceWallet as TransactionsIcon,
  TrendingUp as BudgetIcon,
  Assessment as ReportsIcon,
  Home as HomeIcon,
} from '@mui/icons-material';
import {
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

interface SideBarProps {
  drawerWidth: number;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

interface NavItem {
  path: string;
  label: string;
  icon: React.ElementType;
}

const SideBar = ({ drawerWidth, mobileOpen, handleDrawerToggle }: SideBarProps) => {
  const navItems: NavItem[] = [
    { path: '/', label: 'Dashboard', icon: DashboardIcon },
    { path: '/transactions', label: 'Transactions', icon: TransactionsIcon },
    { path: '/budget', label: 'Budget', icon: BudgetIcon },
    { path: '/reports', label: 'Reports', icon: ReportsIcon },
  ];

  const location = useLocation();
  const theme = useTheme();
  const drawer = (
    <Box>
      <Toolbar>
        <HomeIcon sx={{ mr: 2 }} />
        <Typography variant="h6" noWrap component="div">
          Household Budget
        </Typography>
      </Toolbar>
      <List>
        {navItems.map(item => {
          const IconComponent = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                selected={isActive}
                sx={{
                  '&.Mui-selected': {
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    '&:hover': {
                      backgroundColor: theme.palette.primary.dark,
                    },
                    '& .MuiListItemIcon-root': {
                      color: 'white',
                    },
                  },
                }}
              >
                <ListItemIcon>
                  <IconComponent />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
          <Box
          component="nav"
          sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        >
          {/* mobile drawer */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>

          {/* desktop drawer */}
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', md: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
  );
};

export default SideBar;
